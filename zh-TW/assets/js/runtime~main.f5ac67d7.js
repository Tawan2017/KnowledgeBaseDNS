!function(){"use strict";var e,t,n,r,o,a={},c={};function f(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={id:e,loaded:!1,exports:{}};return a[e].call(n.exports,n,n.exports,f),n.loaded=!0,n.exports}f.m=a,f.c=c,e=[],f.O=function(t,n,r,o){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],o=e[d][2];for(var c=!0,u=0;u<n.length;u++)(!1&o||a>=o)&&Object.keys(f.O).every((function(e){return f.O[e](n[u])}))?n.splice(u--,1):(c=!1,o<a&&(a=o));if(c){e.splice(d--,1);var i=r();void 0!==i&&(t=i)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,r,o]},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},f.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var a={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},f.d(o,a),o},f.d=function(e,t){for(var n in t)f.o(t,n)&&!f.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},f.f={},f.e=function(e){return Promise.all(Object.keys(f.f).reduce((function(t,n){return f.f[n](e,t),t}),[]))},f.u=function(e){return"assets/js/"+({53:"935f2afb",106:"b6434146",124:"6ac4fc81",141:"12afb509",327:"7a3ed15a",339:"2b653bff",391:"e679420c",447:"abee0d7a",462:"ac2be9ad",470:"a63cc64b",477:"ede16fae",488:"83ffdaa0",514:"1be78505",587:"a3bb33ee",595:"36217d9c",715:"73dd17f6",729:"50566642",918:"17896441",962:"8dc69646"}[e]||e)+"."+{45:"8e1450fe",53:"90f41933",106:"3e34ac99",124:"924597d3",141:"9e611c8d",216:"9433ac2a",248:"fefb3dc0",327:"5bc152cc",339:"298a842c",353:"1e65b06f",391:"89f6778a",447:"a42b1193",462:"5f0515fc",470:"ca45bf69",477:"00a6b5d1",488:"4157bbd7",514:"89f92ef1",587:"73412457",595:"c209249b",664:"93855ca9",699:"a9ed32b6",715:"f72fb230",729:"eda38500",859:"53f50e95",918:"231e672e",962:"c27e1d4d"}[e]+".js"},f.miniCssF=function(e){},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="adguard-dns-knowledge-base:",f.l=function(e,t,n,a){if(r[e])r[e].push(t);else{var c,u;if(void 0!==n)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var b=i[d];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==o+n){c=b;break}}c||(u=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,f.nc&&c.setAttribute("nonce",f.nc),c.setAttribute("data-webpack",o+n),c.src=e),r[e]=[t];var l=function(t,n){c.onerror=c.onload=null,clearTimeout(s);var o=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),u&&document.head.appendChild(c)}},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/KnowledgeBaseDNS/zh-TW/",f.gca=function(e){return e={17896441:"918",50566642:"729","935f2afb":"53",b6434146:"106","6ac4fc81":"124","12afb509":"141","7a3ed15a":"327","2b653bff":"339",e679420c:"391",abee0d7a:"447",ac2be9ad:"462",a63cc64b:"470",ede16fae:"477","83ffdaa0":"488","1be78505":"514",a3bb33ee:"587","36217d9c":"595","73dd17f6":"715","8dc69646":"962"}[e]||e,f.p+f.u(e)},function(){var e={303:0,532:0};f.f.j=function(t,n){var r=f.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var a=f.p+f.u(t),c=new Error;f.l(a,(function(n){if(f.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,r[1](c)}}),"chunk-"+t,t)}},f.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],c=n[1],u=n[2],i=0;if(a.some((function(t){return 0!==e[t]}))){for(r in c)f.o(c,r)&&(f.m[r]=c[r]);if(u)var d=u(f)}for(t&&t(n);i<a.length;i++)o=a[i],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return f.O(d)},n=self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();