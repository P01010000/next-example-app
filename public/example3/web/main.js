(()=>{var e,r,t,n,o,a,l,u,i,f,d,s,p,h,c={579:(e,r,t)=>{Promise.all([t.e(950),t.e(181),t.e(573)]).then(t.bind(t,573))}},v={};function m(e){var r=v[e];if(void 0!==r)return r.exports;var t=v[e]={exports:{}};return c[e](t,t.exports,m),t.exports}m.m=c,m.c=v,m.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return m.d(r,{a:r}),r},m.d=(e,r)=>{for(var t in r)m.o(r,t)&&!m.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},m.f={},m.e=e=>Promise.all(Object.keys(m.f).reduce(((r,t)=>(m.f[t](e,r),r)),[])),m.u=e=>e+".js",m.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="module-federation-example1:",m.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var l,u;if(void 0!==o)for(var i=document.getElementsByTagName("script"),f=0;f<i.length;f++){var d=i[f];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+o){l=d;break}}l||(u=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,m.nc&&l.setAttribute("nonce",m.nc),l.setAttribute("data-webpack",r+o),l.src=t),e[t]=[n];var s=(r,n)=>{l.onerror=l.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=s.bind(null,l.onerror),l.onload=s.bind(null,l.onload),u&&document.head.appendChild(l)}},m.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{m.S={};var e={},r={};m.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];m.o(m.S,t)||(m.S[t]={});var a=m.S[t],l="module-federation-example1",u=(e,r,t,n)=>{var o=a[e]=a[e]||{},u=o[r];(!u||!u.loaded&&(!n!=!u.eager?n:l>u.from))&&(o[r]={get:t,from:l,eager:!!n})},i=[];switch(t){case"default":u("react-dom","17.0.2",(()=>Promise.all([m.e(935),m.e(950)]).then((()=>()=>m(935))))),u("react","17.0.2",(()=>m.e(294).then((()=>()=>m(294)))))}return e[t]=i.length?Promise.all(i).then((()=>e[t]=1)):1}}})(),m.p="http://localhost:3000/example3/web/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var l=r[n],u=(typeof l)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=l)return o<l;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(u=e[a]))[0]?"-":(n>0?".":"")+(n=2,u);return t}var l=[];for(a=1;a<e.length;a++){var u=e[a];l.push(0===u?"not("+i()+")":1===u?"("+i()+" || "+i()+")":2===u?l.pop()+" "+l.pop():o(u))}return i();function i(){return l.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var l=0,u=1,i=!0;;u++,l++){var f,d,s=u<e.length?(typeof e[u])[0]:"";if(l>=r.length||"o"==(d=(typeof(f=r[l]))[0]))return!i||("u"==s?u>n&&!o:""==s!=o);if("u"==d){if(!i||"u"!=s)return!1}else if(i)if(s==d)if(u<=n){if(f!=e[u])return!1}else{if(o?f>e[u]:f<e[u])return!1;f!=e[u]&&(i=!1)}else if("s"!=s&&"n"!=s){if(o||u<=n)return!1;i=!1,u--}else{if(u<=n||d<s!=o)return!1;i=!1}else"s"!=s&&"n"!=s&&(i=!1,u--)}}var p=[],h=p.pop.bind(p);for(l=1;l<e.length;l++){var c=e[l];p.push(1==c?h()|h():2==c?h()&h():c?a(c,r):!h())}return!!h()},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},u=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+o(t)+")",i=(e,r,t,n)=>{var o=l(e,t);return a(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(u(t,o,n)),f(e[t][o])},f=e=>(e.loaded=1,e.get()),d=(e=>function(r,t,n,o){var a=m.I(r);return a&&a.then?a.then(e.bind(e,r,m.S[r],t,n,o)):e(0,m.S[r],t,n,o)})(((e,r,t,n,o)=>r&&m.o(r,t)?i(r,0,t,n):o())),s={},p={950:()=>d("default","react",[1,17,0,2],(()=>m.e(294).then((()=>()=>m(294))))),181:()=>d("default","react-dom",[1,17,0,2],(()=>m.e(935).then((()=>()=>m(935)))))},h={181:[181],950:[950]},m.f.consumes=(e,r)=>{m.o(h,e)&&h[e].forEach((e=>{if(m.o(s,e))return r.push(s[e]);var t=r=>{s[e]=0,m.m[e]=t=>{delete m.c[e],t.exports=r()}},n=r=>{delete s[e],m.m[e]=t=>{throw delete m.c[e],r}};try{var o=p[e]();o.then?r.push(s[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={179:0};m.f.j=(r,t)=>{var n=m.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(181|950)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=m.p+m.u(r),l=new Error;m.l(a,(t=>{if(m.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,l,u]=t,i=0;for(n in l)m.o(l,n)&&(m.m[n]=l[n]);for(u&&u(m),r&&r(t);i<a.length;i++)o=a[i],m.o(e,o)&&e[o]&&e[o][0](),e[a[i]]=0},t=self.webpackChunkmodule_federation_example1=self.webpackChunkmodule_federation_example1||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),m(579)})();