!function(){var e,n,t,r,o,u,i,f,c,a,l,s,d,p,h={579:function(e,n,t){Promise.all([t.e(950),t.e(181),t.e(573)]).then(t.bind(t,573))}},v={};function m(e){var n=v[e];if(void 0!==n)return n.exports;var t=v[e]={exports:{}};return h[e](t,t.exports,m),t.exports}m.m=h,m.c=v,m.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return m.d(n,{a:n}),n},m.d=function(e,n){for(var t in n)m.o(n,t)&&!m.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},m.f={},m.e=function(e){return Promise.all(Object.keys(m.f).reduce((function(n,t){return m.f[t](e,n),n}),[]))},m.u=function(e){return e+".js"},m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),m.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},e={},n="module-federation-example1:",m.l=function(t,r,o,u){if(e[t])e[t].push(r);else{var i,f;if(void 0!==o)for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var l=c[a];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==n+o){i=l;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,m.nc&&i.setAttribute("nonce",m.nc),i.setAttribute("data-webpack",n+o),i.src=t),e[t]=[r];var s=function(n,r){i.onerror=i.onload=null,clearTimeout(d);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(r)})),n)return n(r)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),f&&document.head.appendChild(i)}},m.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){m.S={};var e={},n={};m.I=function(t,r){r||(r=[]);var o=n[t];if(o||(o=n[t]={}),!(r.indexOf(o)>=0)){if(r.push(o),e[t])return e[t];m.o(m.S,t)||(m.S[t]={});var u=m.S[t],i="module-federation-example1",f=function(e,n,t,r){var o=u[e]=u[e]||{},f=o[n];(!f||!f.loaded&&(!r!=!f.eager?r:i>f.from))&&(o[n]={get:t,from:i,eager:!!r})},c=[];switch(t){case"default":f("react-dom","17.0.2",(function(){return Promise.all([m.e(935),m.e(264)]).then((function(){return function(){return m(935)}}))})),f("react","17.0.2",(function(){return m.e(976).then((function(){return function(){return m(294)}}))}))}return e[t]=c.length?Promise.all(c).then((function(){return e[t]=1})):1}}}(),function(){var e;m.g.importScripts&&(e=m.g.location+"");var n=m.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=e}(),t=function(e){var n=function(e){return e.split(".").map((function(e){return+e==e?+e:e}))},t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),r=t[1]?n(t[1]):[];return t[2]&&(r.length++,r.push.apply(r,n(t[2]))),t[3]&&(r.push([]),r.push.apply(r,n(t[3]))),r},r=function(e,n){e=t(e),n=t(n);for(var r=0;;){if(r>=e.length)return r<n.length&&"u"!=(typeof n[r])[0];var o=e[r],u=(typeof o)[0];if(r>=n.length)return"u"==u;var i=n[r],f=(typeof i)[0];if(u!=f)return"o"==u&&"n"==f||"s"==f||"u"==u;if("o"!=u&&"u"!=u&&o!=i)return o<i;r++}},o=function(e){var n=e[0],t="";if(1===e.length)return"*";if(n+.5){t+=0==n?">=":-1==n?"<":1==n?"^":2==n?"~":n>0?"=":"!=";for(var r=1,u=1;u<e.length;u++)r--,t+="u"==(typeof(f=e[u]))[0]?"-":(r>0?".":"")+(r=2,f);return t}var i=[];for(u=1;u<e.length;u++){var f=e[u];i.push(0===f?"not("+c()+")":1===f?"("+c()+" || "+c()+")":2===f?i.pop()+" "+i.pop():o(f))}return c();function c(){return i.pop().replace(/^\((.+)\)$/,"$1")}},u=function(e,n){if(0 in e){n=t(n);var r=e[0],o=r<0;o&&(r=-r-1);for(var i=0,f=1,c=!0;;f++,i++){var a,l,s=f<e.length?(typeof e[f])[0]:"";if(i>=n.length||"o"==(l=(typeof(a=n[i]))[0]))return!c||("u"==s?f>r&&!o:""==s!=o);if("u"==l){if(!c||"u"!=s)return!1}else if(c)if(s==l)if(f<=r){if(a!=e[f])return!1}else{if(o?a>e[f]:a<e[f])return!1;a!=e[f]&&(c=!1)}else if("s"!=s&&"n"!=s){if(o||f<=r)return!1;c=!1,f--}else{if(f<=r||l<s!=o)return!1;c=!1}else"s"!=s&&"n"!=s&&(c=!1,f--)}}var d=[],p=d.pop.bind(d);for(i=1;i<e.length;i++){var h=e[i];d.push(1==h?p()|p():2==h?p()&p():h?u(h,n):!p())}return!!p()},i=function(e,n){var t=e[n];return Object.keys(t).reduce((function(e,n){return!e||!t[e].loaded&&r(e,n)?n:e}),0)},f=function(e,n,t){return"Unsatisfied version "+n+" of shared singleton module "+e+" (required "+o(t)+")"},c=function(e,n,t,r){var o=i(e,t);return u(r,o)||"undefined"!=typeof console&&console.warn&&console.warn(f(t,o,r)),a(e[t][o])},a=function(e){return e.loaded=1,e.get()},l=function(e){return function(n,t,r,o){var u=m.I(n);return u&&u.then?u.then(e.bind(e,n,m.S[n],t,r,o)):e(0,m.S[n],t,r,o)}}((function(e,n,t,r,o){return n&&m.o(n,t)?c(n,0,t,r):o()})),s={},d={950:function(){return l("default","react",[1,17,0,2],(function(){return m.e(976).then((function(){return function(){return m(294)}}))}))},181:function(){return l("default","react-dom",[1,17,0,2],(function(){return Promise.all([m.e(935),m.e(264)]).then((function(){return function(){return m(935)}}))}))},264:function(){return l("default","react",[4,17,0,2],(function(){return m.e(294).then((function(){return function(){return m(294)}}))}))}},p={181:[181],264:[264],950:[950]},m.f.consumes=function(e,n){m.o(p,e)&&p[e].forEach((function(e){if(m.o(s,e))return n.push(s[e]);var t=function(n){s[e]=0,m.m[e]=function(t){delete m.c[e],t.exports=n()}},r=function(n){delete s[e],m.m[e]=function(t){throw delete m.c[e],n}};try{var o=d[e]();o.then?n.push(s[e]=o.then(t).catch(r)):t(o)}catch(e){r(e)}}))},function(){var e={179:0};m.f.j=function(n,t){var r=m.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(181|264|950)$/.test(n))e[n]=0;else{var o=new Promise((function(t,o){r=e[n]=[t,o]}));t.push(r[2]=o);var u=m.p+m.u(n),i=new Error;m.l(u,(function(t){if(m.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;i.message="Loading chunk "+n+" failed.\n("+o+": "+u+")",i.name="ChunkLoadError",i.type=o,i.request=u,r[1](i)}}),"chunk-"+n,n)}};var n=function(n,t){var r,o,u=t[0],i=t[1],f=t[2],c=0;for(r in i)m.o(i,r)&&(m.m[r]=i[r]);for(f&&f(m),n&&n(t);c<u.length;c++)o=u[c],m.o(e,o)&&e[o]&&e[o][0](),e[u[c]]=0},t=self.webpackChunkmodule_federation_example1=self.webpackChunkmodule_federation_example1||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}(),m(579)}();