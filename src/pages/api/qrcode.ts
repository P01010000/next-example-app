// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import svg2img from 'svg2img';
import qrcode from 'qrcode';
import { performance } from 'perf_hooks';


const isValid = (vis: number[][], row: number, col: number, size: number) => {
    if (row < 0 || col < 0 || row >= size || col >= size) {
        return false;
    }
    if (vis[row][col]) {
        return false;
    }
    return true;
}

const dRow = [0, 1, 0, -1];
const dCol = [-1, 0, 1, 0];

const DFS = (row: number, col: number, grid: number[][], vis: number[][]) => {
    const stack: [number, number, number][] = [];
    stack.push([row, col, -1]);

    const res: [number, number, number][] = [];

    while (stack.length > 0) {
        const [cRow, cCol, direction] = stack.shift()!;

        if (!isValid(vis, cRow, cCol, vis.length)) {
            continue;
        }

        if (!grid[cRow][cCol]) {
            continue;
        }

        vis[cRow][cCol] = 1;
        res.push([cRow, cCol, direction]);

        for (let i = 0; i < 4; i++) {
            stack.push([cRow + dRow[i], cCol + dCol[i], i]);
        }
    }
    return res;
}

const convertSegmentToCornerList = (segment: [number, number, number][]) => {
    if (segment.length === 0) {
        return null;
    }

    const list: [number, number][] = [];
    segment.forEach(([cRow, cCol, direction]) => {
        switch (direction) {
            case -1:
                list.push([cRow, cCol], [cRow + 1, cCol], [cRow + 1, cCol + 1], [cRow, cCol + 1], [cRow, cCol]);
                break;
            case 0: {
                // top
                let startIndex = -1;
                for (let i = 0; i < list.length - 1; i++) {
                    const [x1, y1] = list[i];
                    const [x2, y2] = list[i + 1];
                    if (x1 === cRow && y1 === cCol + 1 && x2 === cRow + 1 && y2 === cCol + 1) {
                        startIndex = i;
                        break;
                    }
                }
                if (startIndex > -1) {
                    list.splice(startIndex + 1, 0, [cRow, cCol], [cRow + 1, cCol]);
                }
                break;
            }
            case 1: {
                // right
                let startIndex = -1;
                for (let i = 0; i < list.length - 1; i++) {
                    const [x1, y1] = list[i];
                    const [x2, y2] = list[i + 1];
                    if (x1 === cRow && y1 === cCol && x2 === cRow && y2 === cCol + 1) {
                        startIndex = i;
                        break;
                    }
                }
                if (startIndex > -1) {
                    list.splice(startIndex + 1, 0, [cRow + 1, cCol], [cRow + 1, cCol + 1]);
                }
                break;
            }
            case 2: {
                // bottom
                let startIndex = -1;
                for (let i = 0; i < list.length - 1; i++) {
                    const [x1, y1] = list[i];
                    const [x2, y2] = list[i + 1];
                    if (x1 === cRow + 1 && y1 === cCol && x2 === cRow && y2 === cCol) {
                        startIndex = i;
                        break;
                    }
                }
                if (startIndex > -1) {
                    list.splice(startIndex + 1, 0, [cRow + 1, cCol + 1], [cRow, cCol + 1]);
                }
                break;
            }
            case 3: {
                // left
                let startIndex = -1;
                for (let i = 0; i < list.length - 1; i++) {
                    const [x1, y1] = list[i];
                    const [x2, y2] = list[i + 1];
                    if (x1 === cRow + 1 && y1 === cCol + 1 && x2 === cRow + 1 && y2 === cCol) {
                        startIndex = i;
                        break;
                    }
                }
                if (startIndex > -1) {
                    list.splice(startIndex + 1, 0, [cRow, cCol + 1], [cRow, cCol]);
                }
                break;
            }
            default:
                break;
        }
    });

    return list;
}

const optimizeCornerList = (list: [number, number][]) => {
    for (let i = 1; i < list.length - 1; i++) {
        const pCorner = list[i - 1];
        const cCorner = list[i];
        const nCorner = list[i + 1];

        if (pCorner[0] === cCorner[0] && cCorner[0] === nCorner[0]) {
            list.splice(i, 1);
            i--;
        } else if (pCorner[1] === cCorner[1] && cCorner[1] === nCorner[1]) {
            list.splice(i, 1);
            i--;
        }
    }
}

const convertCornerListToPath = (list: [number, number][], offsetX: number = 0, offsetY: number = 0, width: number = 1): string => {
    if (list.length === 0) {
        return '';
    }
    let prevCorner: [number, number];
    let corner: [number, number] = list.shift()!;
    let svgPath = `M${offsetX + corner[0] * width} ${offsetY + corner[1] * width}`;
    while (list.length > 1) {
        prevCorner = corner;
        corner = list.shift()!;
        if (corner[0] === prevCorner[0]) {
            svgPath += `v${(corner[1] - prevCorner[1]) * width}`;
        } else {
            svgPath += `h${(corner[0] - prevCorner[0]) * width}`;
        }
    }
    return svgPath + 'z';
}

const convertBufferToMatrix = (buffer: Buffer, size: number): number[][] => {
    const res = new Array(size);
    for (let i = 0; i < size; i++) {
        const arr = new Array(size);
        res[i] = arr;
        for (let j = 0; j < size; j++) {
            arr[j] = buffer[i * size + j];
        }
    }
    return res;
}

const createEmptyMatrix = (size: number): number[][] => {
    const res = new Array(size);
    for (let i = 0; i < size; i++) {
        res[i] = new Array(size).fill(0);
    }
    return res;
}

const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians)),
    };
};

const parseParameters = (req: NextApiRequest) => {
    const query = new Proxy(req.query, {
        get: (target, name: string) => {
            const prop = name in target ? name : Object.keys(target).find((key) => key.toLowerCase() === name.toLowerCase());
            if (!prop) return undefined;
            const value = target[prop];
            return Array.isArray(value) ? value[value.length - 1] : value;
        },
    });

    const options: any = {};
    ({
        value: options.value,
        width: options.width,
        optimization: options.optimization,
        color: options.color,
        format: options.format,
        text: options.text,
        circle: options.circle,
    } = query);

    if ('circle' in query) {
        options.circle = !(query.circle === '0' || query.circle === 'false');
    } else {
        options.circle = 1;
    }

    if ('optimization' in query) {
        options.optimization = !(query.optimization === '0' || query.optimization === 'false');
    } else {
        options.optimization = 1;
    }

    if (options.format !== 'svg' && options.format !== 'png') {
        options.format = 'png';
    }

    // prepend the hashtag for hex colors
    if (/^[a-fA-F0-9]{3,8}$/.test(options.color)) {
        options.color = `#${options.color}`;
    }
    options.color = options.color || '#000';

    // remove control characters, trailing and multiple spaces
    options.text = options.text?.replace((/[\x00-\x1F]/g), ' ').trim?.().replace?.(/\s+/g, ' ');

    // only allow 2000px
    options.width = Number.parseInt(options.width, 10) || 1000;
    if (options.width > 2000) {
        options.width = 2000;
    }

    return options;
};



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { value, width: exportWidth, color, optimization, circle, format } = parseParameters(req);

    if (!value) {
        res.status(500);
        res.end('Missing value');
        return;
    }

    if (req.headers['if-none-match'] === 'W/DEV') {
        res.status(304);
        return res.end();
    }
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Expires', new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString());
    res.setHeader('Cache-Control', 'must-revalidate');
    res.setHeader('ETag', 'W/DEV');

    const code = await qrcode.create(value, { errorCorrectionLevel: 'H', version: value.length > 24 ? undefined : 4 });

    const matrix = convertBufferToMatrix(code.modules.data, code.modules.size);
    const visited = createEmptyMatrix(code.modules.size);

    const icon = [
        [0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 1, 0, 0, 0, 0, 1],
        [0, 1, 1, 1, 0, 0, 1, 0, 1, 0],
        [1, 1, 1, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 0, 0, 1, 0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 1, 0],
        [1, 0, 0, 0, 1, 0, 0, 0, 1, 1],
        [0, 1, 0, 1, 1, 1, 0, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 1, 0],
        [0, 0, 0 ,0 ,0 ,1 ,0, 0 ,1 ,0],
    ];

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const y = i + ((code.modules.size - 1) / 2) - 5;
            const x = j + ((code.modules.size + 1) / 2) - 5;
            matrix[x][y] = icon[i][j];
        }
    }

    const viewport = 580;
    let width = viewport / (code.modules.size + 4);
    let offset = (viewport - code.modules.size * width) / 2 + (circle ? 294 : 0);
    let svgPath = circle
        ? `<path d="m584 0a584 584 0 1 0 0 1168 584 584 0 1 0 0 -1168m584 0" fill="#fff"/>`
        : `<path d="M0 0h${viewport}v${viewport}H0z" fill="#fff"/>`;
    const angle1 = Math.atan(Math.tan(3 * Math.PI / 180) * 424 / 548) * 180 / Math.PI;
    const angle2 = 72 - angle1;
    for (let i = 0; i < 5 && circle; i++) {
        const corner1 = polarToCartesian(584, 584, 424, 72 * i + 3);
        const corner2 = polarToCartesian(584, 584, 424, 72 * i + 69);
        const corner3 = polarToCartesian(584, 584, 548, 72 * i + angle2);
        const corner4 = polarToCartesian(584, 584, 548, 72 * i + angle1);

        svgPath += `<path d="M${corner1.x},${corner1.y}A424,424,0,0,1,${corner2.x},${corner2.y}L${corner3.x},${corner3.y}A548,548 0 0 0 ${corner4.x},${corner4.y}Z" fill="${color}"/>`;
    }
    let dataPath = '';
    const start = performance.now();
    for (let i = 0; i < code.modules.size; i++) {
        for (let j = 0; j < code.modules.size; j++) {
            if (matrix[i][j] && !visited[i][j]) {
                if (optimization) {
                    // optimized version with joined paths
                    const res = DFS(i, j, matrix, visited);
                    if (res.length || true) {
                        const list = convertSegmentToCornerList(res)!;
                        optimizeCornerList(list);
                        dataPath += convertCornerListToPath(list, offset, offset, width);
                    }
                } else {
                    // naive version
                    // svgPath += `<path d="M${i * width + offset} ${j * width + offset}h${width}v${width}h${-width}z" fill="#000"/>`;
                    dataPath += `M${i * width + offset} ${j * width + offset}h${width}v${width}h${-width}z`;
                }
            }
        }
    }
    if (dataPath) {
        svgPath += `<path d="${dataPath}" fill="#000"/>`;
    }
    console.log('duration', performance.now() - start);

    const svg = `<svg version="1.2" baseProfile="tiny" viewBox="0 0 ${circle ? 1168 : 580} ${circle ? 1168 : 580}" viewport-fill="#fff" viewport-fill-opacity="1" fill="#000" fill-opacity="1" style="background-color:transparent" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">${svgPath}</svg>`;

    if (format === 'svg') {
        res.setHeader('Content-Type', 'image/svg+xml');
        res.end(svg);
        return;
    }

    const buffer = await new Promise((resolve) => {
        svg2img(svg, {
            width: exportWidth,
            height: exportWidth,
        }, (err, buffer) => {
            if (err) {
                console.log('err', err);
                resolve(null);
                return;
            }
            resolve(buffer);
        });
    });

    if (!buffer) {
        res.status(500);
        return res.end();
    }

    res.status(200);
    res.write(buffer);
    res.end();
}