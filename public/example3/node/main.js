!function(){var n,e,r,t,u,o,i,f,a,c,l,s,h,p={579:function(n,e,r){Promise.all([r.e(950),r.e(181),r.e(573)]).then(r.bind(r,573))}},d={};function v(n){var e=d[n];if(void 0!==e)return e.exports;var r=d[n]={exports:{}};return p[n](r,r.exports,v),r.exports}v.m=p,v.c=d,v.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return v.d(e,{a:e}),e},v.d=function(n,e){for(var r in e)v.o(e,r)&&!v.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},v.f={},v.e=function(n){return Promise.all(Object.keys(v.f).reduce((function(e,r){return v.f[r](n,e),e}),[]))},v.u=function(n){return n+".js"},v.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},v.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},function(){v.S={};var n={},e={};v.I=function(r,t){t||(t=[]);var u=e[r];if(u||(u=e[r]={}),!(t.indexOf(u)>=0)){if(t.push(u),n[r])return n[r];v.o(v.S,r)||(v.S[r]={});var o=v.S[r],i="module-federation-example1",f=function(n,e,r,t){var u=o[n]=o[n]||{},f=u[e];(!f||!f.loaded&&(!t!=!f.eager?t:i>f.from))&&(u[e]={get:r,from:i,eager:!!t})},a=[];switch(r){case"default":f("react-dom","17.0.2",(function(){return Promise.all([v.e(935),v.e(950)]).then((function(){return function(){return v(935)}}))})),f("react","17.0.2",(function(){return v.e(294).then((function(){return function(){return v(294)}}))}))}return n[r]=a.length?Promise.all(a).then((function(){return n[r]=1})):1}}}(),n=function(n){var e=function(n){return n.split(".").map((function(n){return+n==n?+n:n}))},r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(n),t=r[1]?e(r[1]):[];return r[2]&&(t.length++,t.push.apply(t,e(r[2]))),r[3]&&(t.push([]),t.push.apply(t,e(r[3]))),t},e=function(e,r){e=n(e),r=n(r);for(var t=0;;){if(t>=e.length)return t<r.length&&"u"!=(typeof r[t])[0];var u=e[t],o=(typeof u)[0];if(t>=r.length)return"u"==o;var i=r[t],f=(typeof i)[0];if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;if("o"!=o&&"u"!=o&&u!=i)return u<i;t++}},r=function(n){var e=n[0],t="";if(1===n.length)return"*";if(e+.5){t+=0==e?">=":-1==e?"<":1==e?"^":2==e?"~":e>0?"=":"!=";for(var u=1,o=1;o<n.length;o++)u--,t+="u"==(typeof(f=n[o]))[0]?"-":(u>0?".":"")+(u=2,f);return t}var i=[];for(o=1;o<n.length;o++){var f=n[o];i.push(0===f?"not("+a()+")":1===f?"("+a()+" || "+a()+")":2===f?i.pop()+" "+i.pop():r(f))}return a();function a(){return i.pop().replace(/^\((.+)\)$/,"$1")}},t=function(e,r){if(0 in e){r=n(r);var u=e[0],o=u<0;o&&(u=-u-1);for(var i=0,f=1,a=!0;;f++,i++){var c,l,s=f<e.length?(typeof e[f])[0]:"";if(i>=r.length||"o"==(l=(typeof(c=r[i]))[0]))return!a||("u"==s?f>u&&!o:""==s!=o);if("u"==l){if(!a||"u"!=s)return!1}else if(a)if(s==l)if(f<=u){if(c!=e[f])return!1}else{if(o?c>e[f]:c<e[f])return!1;c!=e[f]&&(a=!1)}else if("s"!=s&&"n"!=s){if(o||f<=u)return!1;a=!1,f--}else{if(f<=u||l<s!=o)return!1;a=!1}else"s"!=s&&"n"!=s&&(a=!1,f--)}}var h=[],p=h.pop.bind(h);for(i=1;i<e.length;i++){var d=e[i];h.push(1==d?p()|p():2==d?p()&p():d?t(d,r):!p())}return!!p()},u=function(n,r){var t=n[r];return Object.keys(t).reduce((function(n,r){return!n||!t[n].loaded&&e(n,r)?r:n}),0)},o=function(n,e,t){return"Unsatisfied version "+e+" of shared singleton module "+n+" (required "+r(t)+")"},i=function(n,e,r,i){var a=u(n,r);return t(i,a)||"undefined"!=typeof console&&console.warn&&console.warn(o(r,a,i)),f(n[r][a])},f=function(n){return n.loaded=1,n.get()},a=function(n){return function(e,r,t,u){var o=v.I(e);return o&&o.then?o.then(n.bind(n,e,v.S[e],r,t,u)):n(0,v.S[e],r,t,u)}}((function(n,e,r,t,u){return e&&v.o(e,r)?i(e,0,r,t):u()})),c={},l={950:function(){return a("default","react",[1,17,0,2],(function(){return v.e(294).then((function(){return function(){return v(294)}}))}))},181:function(){return a("default","react-dom",[1,17,0,2],(function(){return v.e(935).then((function(){return function(){return v(935)}}))}))}},s={181:[181],950:[950]},v.f.consumes=function(n,e){v.o(s,n)&&s[n].forEach((function(n){if(v.o(c,n))return e.push(c[n]);var r=function(e){c[n]=0,v.m[n]=function(r){delete v.c[n],r.exports=e()}},t=function(e){delete c[n],v.m[n]=function(r){throw delete v.c[n],e}};try{var u=l[n]();u.then?e.push(c[n]=u.then(r).catch(t)):r(u)}catch(n){t(n)}}))},h={179:0},v.f.readFileVm=function(n,e){var r=h[n];if(0!==r)if(r)e.push(r[2]);else if(/^(181|950)$/.test(n))h[n]=0;else{var t=new Promise((function(e,t){r=h[n]=[e,t];var u=require("path").join(__dirname,""+v.u(n));!function(){var n,e=arguments[arguments.length-1];if("function"!=typeof e)throw new Error("last argument should be a function");if(2===arguments.length)n=arguments[0];else{if(3!==arguments.length)throw new Error("invalid number of arguments");n=new URL(arguments[1],arguments[0]).toString()}let r=(n.startsWith("https")?require("https"):require("http")).get(n,(function(n){if(200===n.statusCode){let r="";n.setEncoding("utf8"),n.on("data",(n=>{r+=n})),n.on("end",(()=>{e(null,r)}))}else e(n)}));r.on("error",(n=>e(n)))}("http://localhost:3000/example3/node/",v.u(n),(function(n,e){if(n)return t(n);var r={};require("vm").runInThisContext("(function(exports, require, __dirname, __filename) {"+e+"\n})",u)(r,require,require("path").dirname(u),u),function(n){var e=n.modules,r=n.ids,t=n.runtime;for(var u in e)v.o(e,u)&&(v.m[u]=e[u]);t&&t(v);for(var o=0;o<r.length;o++)h[r[o]]&&h[r[o]][0](),h[r[o]]=0}(r)}))}));e.push(r[2]=t)}},v(579)}();