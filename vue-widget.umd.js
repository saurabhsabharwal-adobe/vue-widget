(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.VueWidget={},t.Vue))})(this,function(t,e){"use strict";const r="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e",s=(o,n)=>{const i=o.__vccOpts||o;for(const[a,p]of n)i[a]=p;return i},c={},d={class:"fixed bottom-10 right-10 bg-white rounded-full p-2 flex justify-center items-center shadow-lg cursor"};function l(o,n){return e.openBlock(),e.createElementBlock("div",d,n[0]||(n[0]=[e.createElementVNode("img",{src:r,class:"w-10 h-10"},null,-1)]))}const u=s(c,[["render",l]]),f=(o,n)=>{if(!n.apiKey){console.error("API key is required to initialize the widget");return}const i=e.createApp(u,n);return i.mount(`#${o}`),i};t.createVueWidget=f,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});