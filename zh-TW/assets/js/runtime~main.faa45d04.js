!function(){"use strict";var e,t,n,r,o,a={},f={};function c(e){var t=f[e];if(void 0!==t)return t.exports;var n=f[e]={id:e,loaded:!1,exports:{}};return a[e].call(n.exports,n,n.exports,c),n.loaded=!0,n.exports}c.m=a,c.c=f,e=[],c.O=function(t,n,r,o){if(!n){var a=1/0;for(i=0;i<e.length;i++){n=e[i][0],r=e[i][1],o=e[i][2];for(var f=!0,u=0;u<n.length;u++)(!1&o||a>=o)&&Object.keys(c.O).every((function(e){return c.O[e](n[u])}))?n.splice(u--,1):(f=!1,o<a&&(a=o));if(f){e.splice(i--,1);var d=r();void 0!==d&&(t=d)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[n,r,o]},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},c.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var a={};t=t||[null,n({}),n([]),n(n)];for(var f=2&r&&e;"object"==typeof f&&!~t.indexOf(f);f=n(f))Object.getOwnPropertyNames(f).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},c.d(o,a),o},c.d=function(e,t){for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.f={},c.e=function(e){return Promise.all(Object.keys(c.f).reduce((function(t,n){return c.f[n](e,t),t}),[]))},c.u=function(e){return"assets/js/"+({53:"935f2afb",106:"b6434146",124:"6ac4fc81",327:"7a3ed15a",339:"2b653bff",391:"e679420c",447:"abee0d7a",462:"ac2be9ad",470:"a63cc64b",477:"ede16fae",488:"83ffdaa0",514:"1be78505",587:"a3bb33ee",595:"36217d9c",715:"73dd17f6",729:"50566642",736:"7f5e4fde",836:"0d1dfb30",918:"17896441",962:"8dc69646"}[e]||e)+"."+{45:"8e1450fe",53:"579abbc6",106:"a217e246",124:"924597d3",216:"9433ac2a",248:"fefb3dc0",327:"5bc152cc",339:"298a842c",353:"1e65b06f",391:"89f6778a",447:"70b2bf26",462:"5f0515fc",470:"ca45bf69",477:"00a6b5d1",488:"4157bbd7",514:"89f92ef1",587:"a4763092",595:"d5807356",664:"93855ca9",699:"a9ed32b6",715:"87b59d00",729:"c5604a2d",736:"ff0d9234",836:"a8fd0d2b",859:"53f50e95",918:"231e672e",962:"82643b1f"}[e]+".js"},c.miniCssF=function(e){},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="adguard-dns-knowledge-base:",c.l=function(e,t,n,a){if(r[e])r[e].push(t);else{var f,u;if(void 0!==n)for(var d=document.getElementsByTagName("script"),i=0;i<d.length;i++){var b=d[i];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==o+n){f=b;break}}f||(u=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.setAttribute("data-webpack",o+n),f.src=e),r[e]=[t];var l=function(t,n){f.onerror=f.onload=null,clearTimeout(s);var o=r[e];if(delete r[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((function(e){return e(n)})),t)return t(n)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),u&&document.head.appendChild(f)}},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/KnowledgeBaseDNS/zh-TW/",c.gca=function(e){return e={17896441:"918",50566642:"729","935f2afb":"53",b6434146:"106","6ac4fc81":"124","7a3ed15a":"327","2b653bff":"339",e679420c:"391",abee0d7a:"447",ac2be9ad:"462",a63cc64b:"470",ede16fae:"477","83ffdaa0":"488","1be78505":"514",a3bb33ee:"587","36217d9c":"595","73dd17f6":"715","7f5e4fde":"736","0d1dfb30":"836","8dc69646":"962"}[e]||e,c.p+c.u(e)},function(){var e={303:0,532:0};c.f.j=function(t,n){var r=c.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var a=c.p+c.u(t),f=new Error;c.l(a,(function(n){if(c.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",f.name="ChunkLoadError",f.type=o,f.request=a,r[1](f)}}),"chunk-"+t,t)}},c.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],f=n[1],u=n[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(r in f)c.o(f,r)&&(c.m[r]=f[r]);if(u)var i=u(c)}for(t&&t(n);d<a.length;d++)o=a[d],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(i)},n=self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();