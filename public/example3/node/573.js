exports.id=573,exports.ids=[573],exports.modules=exports.id=573,exports.ids=[573],exports.modules={573:function(t,e,r){"use strict";r.r(e);var n=r(950),o=r.n(n),u=r(181),c=r.n(u);function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var l={padding:12,backgroundColor:"aquamarine"},a=function(t){var e,r,u=(e=(0,n.useState)(0),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,u=[],c=!0,i=!1;try{for(r=r.call(t);!(c=(n=r.next()).done)&&(u.push(n.value),!e||u.length!==e);c=!0);}catch(t){i=!0,o=t}finally{try{c||null==r.return||r.return()}finally{if(i)throw o}}return u}}(e,r)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=u[0],a=u[1];return(0,n.useEffect)((function(){a((function(t){return t+1}))}),[t]),o().createElement("button",{style:l,onClick:function(){return console.log("clicked",t)}},"Button ",c)};function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(c,t);var e,r,n,o,u=(n=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(n);if(o){var r=b(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return y(this,t)});function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=u.call(this,t)).state={hasError:!1},e}return e=c,(r=[{key:"componentDidCatch",value:function(t){console.debug("error caught in ErrorBoundary",t),this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?null:this.props.children}}])&&s(e.prototype,r),c}(n.Component),h=function(t){return(0,n.useEffect)((function(){}),[]),o().createElement(d,null,o().createElement("h1",null,"Module Federation Example SSR"),o().createElement(a,{count:t.count}))};c().render(o().createElement(h,null),document.getElementById("root"))}};