(()=>{"use strict";var n={890:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(122),t.b),u=i()(r()),l=s()(d);u.push([n.id,`:root {\n  --black-transparent: rgba(0, 0, 0, 0.7);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: inherit;\n}\n\nbody {\n  background-image: url(${l});\n  background-size: cover;\n  background-repeat: no-repeat;\n  font-family: "Montserrat", cursive, sans-serif;\n  min-height: 100vh;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n  gap: 1rem;\n}\n\n.nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 30px;\n  background-color: var(--black-transparent);\n  color: white;\n  gap: 15px;\n  flex-direction: column;\n  width: 100%;\n}\n\n.nav h1 {\n  font-size: 3rem;\n  cursor: pointer;\n}\n\n.buttoncontainer {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n}\n\n.buttoncontainer button {\n  border: none;\n  border-bottom: 1px solid white;\n  background-color: transparent;\n  color: inherit;\n  font-size: 1.5rem;\n  cursor: pointer;\n  transition: box-shadow 0.25s, transform 0.25s;\n}\n\n.buttoncontainer button:hover {\n  box-shadow: 0 0.5em 0.5em -0.4em white;\n  transform: translateY(-0.25em);\n}\n\n.contentbox {\n  width: auto;\n  padding: 30px;\n  background-color: var(--black-transparent);\n  margin: auto;\n}\n\n.fade-out {\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n.fade-in {\n  opacity: 1;\n  transition: opacity 0.3s;\n}\n\n.boxinfo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n  color: white;\n  font-size: 1.3rem;\n}\n\nimg {\n  width: 45%;\n  height: auto;\n  border-radius: 100%;\n}\n\n.menucontainer {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 15px;\n}\n\n.itemcontainer {\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  gap: 15px;\n  background-color: var(--black-transparent);\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 1.3rem;\n}\n`,""]);const p=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),d=0;d<a.length;d++){var u=t(a[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},122:(n,e,t)=>{n.exports=t.p+"44a51f979cae2c1c83ce.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"ebff25e88a20d387dd0a.jpeg";function e(){const e=document.createElement("div");e.classList.add("boxinfo");const t=document.createElement("h2");t.textContent="Welcome to B.R.Z!";const o=document.createElement("p");o.textContent="Open 24/7 with the Finest Cuisine";const r=new Image,a=document.createElement("p");return a.textContent="Meet our lead chef: Gordon Ramsey!",r.src=n,e.appendChild(t),e.appendChild(o),e.appendChild(r),e.appendChild(a),e}function o(){const n=document.createElement("div");n.classList.add("boxinfo");const e=document.createElement("h2");e.textContent="Contact Us!",n.appendChild(e);const t=document.createElement("p");t.textContent="333 Biscayne Blvd Way, Miami, FL 33131",n.appendChild(t);const o=document.createElement("p");return o.textContent="(123) 456-7890",n.appendChild(o),n}const r=t.p+"b98be17d92375595dd15.jpg";function a(n,e){const t=document.createElement("div");t.classList.add("itemcontainer");const o=document.createElement("p");o.textContent=n;const r=new Image;return r.src=e,t.appendChild(r),t.appendChild(o),t}function i(){const n=document.createElement("div");n.classList.add("menucontainer");for(let e=0;e<6;e++){const e=a("Pasta",r);n.appendChild(e)}return n}var c=t(379),s=t.n(c),d=t(795),u=t.n(d),l=t(569),p=t.n(l),m=t(565),f=t.n(m),h=t(216),v=t.n(h),g=t(589),b=t.n(g),x=t(890),y={};y.styleTagTransform=b(),y.setAttributes=f(),y.insert=p().bind(null,"head"),y.domAPI=u(),y.insertStyleElement=v(),s()(x.Z,y),x.Z&&x.Z.locals&&x.Z.locals;const C=function(n){n.appendChild(function(){const n=document.createElement("header");n.classList.add("nav");const e=document.createElement("h1");e.textContent="Bella Ristorante Zestoso",n.append(e);const t=document.createElement("div");t.classList.add("buttoncontainer");const o=document.createElement("button");o.setAttribute("id","home"),o.textContent="Home";const r=document.createElement("button");r.setAttribute("id","menu"),r.textContent="Menu";const a=document.createElement("button");return a.setAttribute("id","contact"),a.textContent="Contact",t.appendChild(o),t.appendChild(r),t.appendChild(a),n.appendChild(t),n}());const e=document.createElement("div");return e.classList.add("contentbox"),n.appendChild(e),e}(document.querySelector("#content"));function E(n){C.classList.add("fade-out"),setTimeout((()=>{C.innerHTML="";const e=n();C.appendChild(e),C.classList.remove("fade-out"),C.classList.add("fade-in"),C.addEventListener("transitionend",(function n(){C.classList.remove("fade-in"),C.removeEventListener("transitionend",n)}))}),300)}document.addEventListener("DOMContentLoaded",(function(){E(e)})),document.getElementById("home").addEventListener("click",(function(){E(e)})),document.getElementById("contact").addEventListener("click",(function(){E(o)})),document.getElementById("menu").addEventListener("click",(function(){E(i)}))})()})();