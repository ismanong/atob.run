(()=>{var t={5578:()=>{var t=document.getElementById("logo-canvas"),e=t.getContext("2d"),n=document.getElementById("logo-wrap"),r=document.getElementById("splash");function o(){dimensions.update();var e=document.documentElement,o=(window.pageYOffset||e.scrollTop,e.clientTop,r.getBoundingClientRect()),i=o.top+o.height,a=o.height/2;n.style.opacity=Math.max(Math.min((i-a)/a,1),0),t.width=55*window.devicePixelRatio,t.style.width="55px",t.height=55*window.devicePixelRatio,t.style.height="55px"}function i(n){o(),e.clearRect(0,0,t.width,t.height);var r=n/1e4;e.strokeStyle=e.fillStyle="white";var a=tesseractwithrotation(r,2*r,3*r,mouse.x/100,mouse.y/100,0);drawtesseract(e,a,{x:t.width/2,y:t.height/2,size:.12*t.height,line_width:2}),requestAnimationFrame(i)}addEventListener("scroll",o),requestAnimationFrame((function(t){o(),requestAnimationFrame(i)}))},2781:()=>{var t={width:0,height:0,getWidth:function(){return window.innerWidth?window.innerWidth:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientWidth:document.body?document.body.clientWidth:0},getHeight:function(){return window.innerWidth?window.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:document.body?document.body.clientHeight:0},update:function(){var t=this.getWidth(),e=this.getHeight();return(t!=this.width||e!=this.height)&&(this.width=t,this.height=e,!0)}};window.dimensions=t},5069:()=>{var t={x:0,y:0,direction:0,start:{x:0,y:0},dragging:!1,set:function(e,n){t.x=e,t.y=n,t.direction=Math.atan2(n-t.start.y,e-t.start.x)},coords:function(e){e.pageX?t.set(e.pageX,e.pageY):e.offsetX?t.set(e.offsetX,e.offsetY):e.layerX?t.set(e.layerX,e.layerY):e.targetTouches&&e.targetTouches.length>0&&t.set(e.targetTouches[0].pageX,e.targetTouches[0].pageY)},down:function(e){t.coords(e),t.start.x=t.x,t.start.y=t.y,t.dragging=!0},up:function(e){t.coords(e),t.dragging=!1}};document.addEventListener("touchstart",t.down,!0),document.addEventListener("touchend",t.up,!0),document.addEventListener("touchmove",t.coords,!0),document.addEventListener("mousedown",t.down,!0),document.addEventListener("mouseup",t.up,!0),document.addEventListener("mousemove",t.coords,!0),window.mouse=t},3195:()=>{!function(){var t=0,e=["ms","moz","webkit","o"];if("undefined"!=typeof window){for(var n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,n){var r=(new Date).getTime(),o=Math.max(0,16-(r-t)),i=window.setTimeout((function(){e(r+o)}),o);return t=r+o,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}}()},1223:(t,e,n)=>{var r=n(5112),o=n(30),i=n(3070),a=r("unscopables"),c=Array.prototype;null==c[a]&&i.f(c,a,{configurable:!0,value:o(null)}),t.exports=function(t){c[a][t]=!0}},9670:(t,e,n)=>{var r=n(111);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},1285:(t,e,n)=>{"use strict";var r=n(7908),o=n(1400),i=n(7466);t.exports=function(t){for(var e=r(this),n=i(e.length),a=arguments.length,c=o(a>1?arguments[1]:void 0,n),u=a>2?arguments[2]:void 0,s=void 0===u?n:o(u,n);s>c;)e[c++]=t;return e}},1318:(t,e,n)=>{var r=n(5656),o=n(7466),i=n(1400),a=function(t){return function(e,n,a){var c,u=r(e),s=o(u.length),f=i(a,s);if(t&&n!=n){for(;s>f;)if((c=u[f++])!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},4326:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},9920:(t,e,n)=>{var r=n(6656),o=n(3887),i=n(1236),a=n(3070);t.exports=function(t,e){for(var n=o(e),c=a.f,u=i.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||c(t,f,u(e,f))}}},8880:(t,e,n)=>{var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:(t,e,n)=>{var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,n)=>{var r=n(7854),o=n(111),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8113:(t,e,n)=>{var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:(t,e,n)=>{var r,o,i=n(7854),a=n(8113),c=i.process,u=c&&c.versions,s=u&&u.v8;s?o=(r=s.split("."))[0]<4?1:r[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,n)=>{var r=n(7854),o=n(1236).f,i=n(8880),a=n(1320),c=n(3505),u=n(9920),s=n(4705);t.exports=function(t,e){var n,f,l,p,d,h=t.target,v=t.global,m=t.stat;if(n=v?r:m?r[h]||c(h,{}):(r[h]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(d=o(n,f))&&d.value:n[f],!s(v?f:h+(m?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(n,f,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},5005:(t,e,n)=>{var r=n(857),o=n(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},7854:(t,e,n)=>{var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},6656:(t,e,n)=>{var r=n(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return o.call(r(t),e)}},3501:t=>{t.exports={}},490:(t,e,n)=>{var r=n(5005);t.exports=r("document","documentElement")},4664:(t,e,n)=>{var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,n)=>{var r=n(7293),o=n(4326),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:(t,e,n)=>{var r=n(5465),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},9909:(t,e,n)=>{var r,o,i,a=n(8536),c=n(7854),u=n(111),s=n(8880),f=n(6656),l=n(5465),p=n(6200),d=n(3501),h="Object already initialized",v=c.WeakMap;if(a||l.state){var m=l.state||(l.state=new v),g=m.get,y=m.has,w=m.set;r=function(t,e){if(y.call(m,t))throw new TypeError(h);return e.facade=t,w.call(m,t,e),e},o=function(t){return g.call(m,t)||{}},i=function(t){return y.call(m,t)}}else{var x=p("state");d[x]=!0,r=function(t,e){if(f(t,x))throw new TypeError(h);return e.facade=t,s(t,x,e),e},o=function(t){return f(t,x)?t[x]:{}},i=function(t){return f(t,x)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},4705:(t,e,n)=>{var r=n(7293),o=/#|\.prototype\./,i=function(t,e){var n=c[a(t)];return n==s||n!=u&&("function"==typeof e?r(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:t=>{t.exports=!1},133:(t,e,n)=>{var r=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:(t,e,n)=>{var r=n(7854),o=n(2788),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},30:(t,e,n)=>{var r,o=n(9670),i=n(6048),a=n(748),c=n(3501),u=n(490),s=n(317),f=n(6200)("IE_PROTO"),l=function(){},p=function(t){return"<script>"+t+"<\/script>"},d=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;d=r?function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=s("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F);for(var n=a.length;n--;)delete d.prototype[a[n]];return d()};c[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(l.prototype=o(t),n=new l,l.prototype=null,n[f]=t):n=d(),void 0===e?n:i(n,e)}},6048:(t,e,n)=>{var r=n(9781),o=n(3070),i=n(9670),a=n(1956);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=a(e),c=r.length,u=0;c>u;)o.f(t,n=r[u++],e[n]);return t}},3070:(t,e,n)=>{var r=n(9781),o=n(4664),i=n(9670),a=n(7593),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:(t,e,n)=>{var r=n(9781),o=n(5296),i=n(9114),a=n(5656),c=n(7593),u=n(6656),s=n(4664),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=a(t),e=c(e,!0),s)try{return f(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},8006:(t,e,n)=>{var r=n(6324),o=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},6324:(t,e,n)=>{var r=n(6656),o=n(5656),i=n(1318).indexOf,a=n(3501);t.exports=function(t,e){var n,c=o(t),u=0,s=[];for(n in c)!r(a,n)&&r(c,n)&&s.push(n);for(;e.length>u;)r(c,n=e[u++])&&(~i(s,n)||s.push(n));return s}},1956:(t,e,n)=>{var r=n(6324),o=n(748);t.exports=Object.keys||function(t){return r(t,o)}},5296:(t,e)=>{"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},3887:(t,e,n)=>{var r=n(5005),o=n(8006),i=n(5181),a=n(9670);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=i.f;return n?e.concat(n(t)):e}},857:(t,e,n)=>{var r=n(7854);t.exports=r},1320:(t,e,n)=>{var r=n(7854),o=n(8880),i=n(6656),a=n(3505),c=n(2788),u=n(9909),s=u.get,f=u.enforce,l=String(String).split("String");(t.exports=function(t,e,n,c){var u,s=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,d=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),(u=f(n)).source||(u.source=l.join("string"==typeof e?e:""))),t!==r?(s?!d&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||c(this)}))},4488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:(t,e,n)=>{var r=n(7854),o=n(8880);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},6200:(t,e,n)=>{var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,e,n)=>{var r=n(7854),o=n(3505),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},2309:(t,e,n)=>{var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.15.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:(t,e,n)=>{var r=n(9958),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:(t,e,n)=>{var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9958:t=>{var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},7466:(t,e,n)=>{var r=n(9958),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:(t,e,n)=>{var r=n(4488);t.exports=function(t){return Object(r(t))}},7593:(t,e,n)=>{var r=n(111);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},9711:t=>{var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},3307:(t,e,n)=>{var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(t,e,n)=>{var r=n(7854),o=n(2309),i=n(6656),a=n(9711),c=n(133),u=n(3307),s=o("wks"),f=r.Symbol,l=u?f:f&&f.withoutSetter||a;t.exports=function(t){return i(s,t)&&(c||"string"==typeof s[t])||(c&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},3290:(t,e,n)=>{var r=n(2109),o=n(1285),i=n(1223);r({target:"Array",proto:!0},{fill:o}),i("fill")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";var t;function e(t,e,n,r){var o=Math.cos(e)*t[n]+Math.sin(e)*t[r],i=-Math.sin(e)*t[n]+Math.cos(e)*t[r];t[n]=o,t[r]=i}function r(t,e,n,r){var o=Math.cos(e)*t[n]-Math.sin(e)*t[r],i=Math.sin(e)*t[n]+Math.cos(e)*t[r];t[n]=o,t[r]=i}function o(t,n,o,i,a,c){for(var u=[],s=0;s<16;s++){var f={x:2*(1&s)-1,y:2*(s>>1&1)-1,z:2*(s>>2&1)-1,w:2*(s>>3&1)-1};e(f,t,"x","y"),e(f,n,"y","z"),e(f,o,"x","w"),r(f,i,"x","z"),r(f,a,"y","w"),r(f,c,"z","w"),u.push(f)}return u}function i(t,e){return{x:(t.x+Math.SQRT2*t.z)*e,y:(t.y+Math.SQRT2*t.w)*e}}n(3195),n(5069),n(2781),n(3290),window.tesseractwithrotation=o,window.drawtesseract=function(e,n,r){for(var a=function(){if(!t){for(var e=o(0,0,0,0,0,0),n=[],r=["x","y","z","w"],i=0;i<e.length;i++)for(var a=i+1;a<e.length;a++){for(var c=0,u=0;u<4;u++)e[i][r[u]]===e[a][r[u]]&&c++;3===c&&n.push([i,a])}t=n}return t}(),c=0;c<n.length;c++){var u=i(n[c],r.size);e.beginPath(),e.arc(u.x+r.x,u.y+r.y,r.corner_radius,0,2*Math.PI),e.fill()}for(e.lineWidth=r.line_width||1,e.beginPath(),c=0;c<a.length;c++){var s=i(n[a[c][0]],r.size),f=i(n[a[c][1]],r.size);e.moveTo(s.x+r.x,s.y+r.y),e.lineTo(f.x+r.x,f.y+r.y)}e.stroke()},n(5578)})()})();