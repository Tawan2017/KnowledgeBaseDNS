!function(){"use strict";var e,t,n,r,a,o={},c={};function f(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={id:e,loaded:!1,exports:{}};return o[e].call(n.exports,n,n.exports,f),n.loaded=!0,n.exports}f.m=o,f.c=c,e=[],f.O=function(t,n,r,a){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],a=e[d][2];for(var c=!0,u=0;u<n.length;u++)(!1&a||o>=a)&&Object.keys(f.O).every((function(e){return f.O[e](n[u])}))?n.splice(u--,1):(c=!1,a<o&&(o=a));if(c){e.splice(d--,1);var i=r();void 0!==i&&(t=i)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,r,a]},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},f.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var a=Object.create(null);f.r(a);var o={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(t){o[t]=function(){return e[t]}}));return o.default=function(){return e},f.d(a,o),a},f.d=function(e,t){for(var n in t)f.o(t,n)&&!f.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},f.f={},f.e=function(e){return Promise.all(Object.keys(f.f).reduce((function(t,n){return f.f[n](e,t),t}),[]))},f.u=function(e){return"assets/js/"+({53:"935f2afb",69:"b9e438b0",106:"b6434146",124:"6ac4fc81",327:"7a3ed15a",339:"2b653bff",447:"abee0d7a",462:"ac2be9ad",470:"a63cc64b",477:"ede16fae",488:"83ffdaa0",514:"1be78505",595:"36217d9c",659:"b796aaa8",715:"73dd17f6",729:"50566642",918:"17896441",962:"8dc69646"}[e]||e)+"."+{45:"8e1450fe",53:"bad92efb",69:"be06ce0b",106:"2060332a",124:"924597d3",216:"9433ac2a",248:"fefb3dc0",327:"67207249",339:"1782d8e6",353:"1e65b06f",447:"dd015630",462:"a6b496b6",470:"2745b752",477:"00a6b5d1",488:"4157bbd7",514:"89f92ef1",595:"2c49d00b",659:"6026e024",664:"93855ca9",699:"a9ed32b6",715:"4b053c8f",729:"81c2b744",859:"53f50e95",918:"231e672e",962:"2357ba9a"}[e]+".js"},f.miniCssF=function(e){},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},a="adguard-dns-knowledge-base:",f.l=function(e,t,n,o){if(r[e])r[e].push(t);else{var c,u;if(void 0!==n)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var b=i[d];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==a+n){c=b;break}}c||(u=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,f.nc&&c.setAttribute("nonce",f.nc),c.setAttribute("data-webpack",a+n),c.src=e),r[e]=[t];var l=function(t,n){c.onerror=c.onload=null,clearTimeout(s);var a=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((function(e){return e(n)})),t)return t(n)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),u&&document.head.appendChild(c)}},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/KnowledgeBaseDNS/zh-TW/",f.gca=function(e){return e={17896441:"918",50566642:"729","935f2afb":"53",b9e438b0:"69",b6434146:"106","6ac4fc81":"124","7a3ed15a":"327","2b653bff":"339",abee0d7a:"447",ac2be9ad:"462",a63cc64b:"470",ede16fae:"477","83ffdaa0":"488","1be78505":"514","36217d9c":"595",b796aaa8:"659","73dd17f6":"715","8dc69646":"962"}[e]||e,f.p+f.u(e)},function(){var e={303:0,532:0};f.f.j=function(t,n){var r=f.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var a=new Promise((function(n,a){r=e[t]=[n,a]}));n.push(r[2]=a);var o=f.p+f.u(t),c=new Error;f.l(o,(function(n){if(f.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,r[1](c)}}),"chunk-"+t,t)}},f.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,o=n[0],c=n[1],u=n[2],i=0;if(o.some((function(t){return 0!==e[t]}))){for(r in c)f.o(c,r)&&(f.m[r]=c[r]);if(u)var d=u(f)}for(t&&t(n);i<o.length;i++)a=o[i],f.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return f.O(d)},n=self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();