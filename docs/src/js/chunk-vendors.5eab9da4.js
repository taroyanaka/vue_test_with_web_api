"use strict";(self["webpackChunkweb_api_test"]=self["webpackChunkweb_api_test"]||[]).push([[998],{444:function(e,t,n){n.d(t,{L:function(){return o},LL:function(){return y},ZR:function(){return v},b$:function(){return d},eu:function(){return m},hl:function(){return f},m9:function(){return C},ne:function(){return A},pd:function(){return S},ru:function(){return u},tV:function(){return l},uI:function(){return c},w1:function(){return p},xO:function(){return w},z$:function(){return h},zd:function(){return b}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},r=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],a=e[n++],o=e[n++],l=((7&r)<<18|(63&s)<<12|(63&a)<<6|63&o)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(1023&l))}else{const s=e[n++],a=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&a)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,a=s?e[r+1]:0,o=r+2<e.length,l=o?e[r+2]:0,h=t>>2,c=(3&t)<<4|a>>4;let u=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(u=64)),i.push(n[h],n[c],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):r(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,a=s?n[e.charAt(r)]:0;++r;const o=r<e.length,l=o?n[e.charAt(r)]:64;++r;const h=r<e.length,c=h?n[e.charAt(r)]:64;if(++r,null==t||null==a||null==l||null==c)throw Error();const u=t<<2|a>>4;if(i.push(u),64!==l){const e=a<<4&240|l>>2;if(i.push(e),64!==c){const e=l<<6&192|c;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){const t=i(e);return s.encodeByteArray(t,!0)},o=function(e){return a(e).replace(/\./g,"")},l=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function c(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())}function u(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){const e=h();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function f(){return"object"===typeof indexedDB}function m(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const g="FirebaseError";class v extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=g,Object.setPrototypeOf(this,v.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,y.prototype.create)}}class y{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?x(r,n):"Error",a=`${this.serviceName}: ${s} (${i}).`,o=new v(i,a,n);return o}}function x(e,t){return e.replace(_,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}const _=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function w(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function b(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function S(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){const n=new M(e,t);return n.subscribe.bind(n)}class M{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=E(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=T),void 0===i.error&&(i.error=T),void 0===i.complete&&(i.complete=T);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function E(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function T(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function C(e){return e&&e._delegate?e._delegate:e}},262:function(e,t,n){n.d(t,{Bj:function(){return s},Fl:function(){return Fe},IU:function(){return Ce},Jd:function(){return S},PG:function(){return Ae},Um:function(){return we},WL:function(){return ze},X$:function(){return T},X3:function(){return Te},Xl:function(){return De},dq:function(){return Re},j:function(){return M},lk:function(){return A},qj:function(){return _e},qq:function(){return x},yT:function(){return Ee}});var i=n(577);let r;class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&r&&(this.parent=r,this.index=(r.scopes||(r.scopes=[])).push(this)-1)}run(e){if(this.active){const t=r;try{return r=this,e()}finally{r=t}}else 0}on(){r=this}off(){r=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t=r){t&&t.active&&t.effects.push(e)}const o=e=>{const t=new Set(e);return t.w=0,t.n=0,t},l=e=>(e.w&f)>0,h=e=>(e.n&f)>0,c=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=f},u=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const r=t[i];l(r)&&!h(r)?r.delete(e):t[n++]=r,r.w&=~f,r.n&=~f}t.length=n}},d=new WeakMap;let p=0,f=1;const m=30;let g;const v=Symbol(""),y=Symbol("");class x{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=g,t=w;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,w=!0,f=1<<++p,p<=m?c(this):_(this),this.fn()}finally{p<=m&&u(this),f=1<<--p,g=this.parent,w=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g===this?this.deferStop=!0:this.active&&(_(this),this.onStop&&this.onStop(),this.active=!1)}}function _(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let w=!0;const b=[];function S(){b.push(w),w=!1}function A(){const e=b.pop();w=void 0===e||e}function M(e,t,n){if(w&&g){let t=d.get(e);t||d.set(e,t=new Map);let i=t.get(n);i||t.set(n,i=o());const r=void 0;E(i,r)}}function E(e,t){let n=!1;p<=m?h(e)||(e.n|=f,n=!l(e)):n=!e.has(g),n&&(e.add(g),g.deps.push(e))}function T(e,t,n,r,s,a){const l=d.get(e);if(!l)return;let h=[];if("clear"===t)h=[...l.values()];else if("length"===n&&(0,i.kJ)(e))l.forEach(((e,t)=>{("length"===t||t>=r)&&h.push(e)}));else switch(void 0!==n&&h.push(l.get(n)),t){case"add":(0,i.kJ)(e)?(0,i.S0)(n)&&h.push(l.get("length")):(h.push(l.get(v)),(0,i._N)(e)&&h.push(l.get(y)));break;case"delete":(0,i.kJ)(e)||(h.push(l.get(v)),(0,i._N)(e)&&h.push(l.get(y)));break;case"set":(0,i._N)(e)&&h.push(l.get(v));break}if(1===h.length)h[0]&&C(h[0]);else{const e=[];for(const t of h)t&&e.push(...t);C(o(e))}}function C(e,t){const n=(0,i.kJ)(e)?e:[...e];for(const i of n)i.computed&&D(i,t);for(const i of n)i.computed||D(i,t)}function D(e,t){(e!==g||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const P=(0,i.fY)("__proto__,__v_isRef,__isVue"),L=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(i.yk)),O=z(),I=z(!1,!0),R=z(!0),N=B();function B(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ce(this);for(let t=0,r=this.length;t<r;t++)M(n,"get",t+"");const i=n[t](...e);return-1===i||!1===i?n[t](...e.map(Ce)):i}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){S();const n=Ce(this)[t].apply(this,e);return A(),n}})),e}function z(e=!1,t=!1){return function(n,r,s){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_isShallow"===r)return t;if("__v_raw"===r&&s===(e?t?ve:ge:t?me:fe).get(n))return n;const a=(0,i.kJ)(n);if(!e&&a&&(0,i.RI)(N,r))return Reflect.get(N,r,s);const o=Reflect.get(n,r,s);return((0,i.yk)(r)?L.has(r):P(r))?o:(e||M(n,"get",r),t?o:Re(o)?a&&(0,i.S0)(r)?o:o.value:(0,i.Kn)(o)?e?be(o):_e(o):o)}}const k=U(),F=U(!0);function U(e=!1){return function(t,n,r,s){let a=t[n];if(Me(a)&&Re(a)&&!Re(r))return!1;if(!e&&!Me(r)&&(Ee(r)||(r=Ce(r),a=Ce(a)),!(0,i.kJ)(t)&&Re(a)&&!Re(r)))return a.value=r,!0;const o=(0,i.kJ)(t)&&(0,i.S0)(n)?Number(n)<t.length:(0,i.RI)(t,n),l=Reflect.set(t,n,r,s);return t===Ce(s)&&(o?(0,i.aU)(r,a)&&T(t,"set",n,r,a):T(t,"add",n,r)),l}}function H(e,t){const n=(0,i.RI)(e,t),r=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&T(e,"delete",t,void 0,r),s}function V(e,t){const n=Reflect.has(e,t);return(0,i.yk)(t)&&L.has(t)||M(e,"has",t),n}function G(e){return M(e,"iterate",(0,i.kJ)(e)?"length":v),Reflect.ownKeys(e)}const j={get:O,set:k,deleteProperty:H,has:V,ownKeys:G},W={get:R,set(e,t){return!0},deleteProperty(e,t){return!0}},q=(0,i.l7)({},j,{get:I,set:F}),X=e=>e,Y=e=>Reflect.getPrototypeOf(e);function Q(e,t,n=!1,i=!1){e=e["__v_raw"];const r=Ce(e),s=Ce(t);n||(t!==s&&M(r,"get",t),M(r,"get",s));const{has:a}=Y(r),o=i?X:n?Le:Pe;return a.call(r,t)?o(e.get(t)):a.call(r,s)?o(e.get(s)):void(e!==r&&e.get(t))}function K(e,t=!1){const n=this["__v_raw"],i=Ce(n),r=Ce(e);return t||(e!==r&&M(i,"has",e),M(i,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function J(e,t=!1){return e=e["__v_raw"],!t&&M(Ce(e),"iterate",v),Reflect.get(e,"size",e)}function Z(e){e=Ce(e);const t=Ce(this),n=Y(t),i=n.has.call(t,e);return i||(t.add(e),T(t,"add",e,e)),this}function $(e,t){t=Ce(t);const n=Ce(this),{has:r,get:s}=Y(n);let a=r.call(n,e);a||(e=Ce(e),a=r.call(n,e));const o=s.call(n,e);return n.set(e,t),a?(0,i.aU)(t,o)&&T(n,"set",e,t,o):T(n,"add",e,t),this}function ee(e){const t=Ce(this),{has:n,get:i}=Y(t);let r=n.call(t,e);r||(e=Ce(e),r=n.call(t,e));const s=i?i.call(t,e):void 0,a=t.delete(e);return r&&T(t,"delete",e,void 0,s),a}function te(){const e=Ce(this),t=0!==e.size,n=void 0,i=e.clear();return t&&T(e,"clear",void 0,void 0,n),i}function ne(e,t){return function(n,i){const r=this,s=r["__v_raw"],a=Ce(s),o=t?X:e?Le:Pe;return!e&&M(a,"iterate",v),s.forEach(((e,t)=>n.call(i,o(e),o(t),r)))}}function ie(e,t,n){return function(...r){const s=this["__v_raw"],a=Ce(s),o=(0,i._N)(a),l="entries"===e||e===Symbol.iterator&&o,h="keys"===e&&o,c=s[e](...r),u=n?X:t?Le:Pe;return!t&&M(a,"iterate",h?y:v),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:l?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function re(e){return function(...t){return"delete"!==e&&this}}function se(){const e={get(e){return Q(this,e)},get size(){return J(this)},has:K,add:Z,set:$,delete:ee,clear:te,forEach:ne(!1,!1)},t={get(e){return Q(this,e,!1,!0)},get size(){return J(this)},has:K,add:Z,set:$,delete:ee,clear:te,forEach:ne(!1,!0)},n={get(e){return Q(this,e,!0)},get size(){return J(this,!0)},has(e){return K.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:ne(!0,!1)},i={get(e){return Q(this,e,!0,!0)},get size(){return J(this,!0)},has(e){return K.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:ne(!0,!0)},r=["keys","values","entries",Symbol.iterator];return r.forEach((r=>{e[r]=ie(r,!1,!1),n[r]=ie(r,!0,!1),t[r]=ie(r,!1,!0),i[r]=ie(r,!0,!0)})),[e,n,t,i]}const[ae,oe,le,he]=se();function ce(e,t){const n=t?e?he:le:e?oe:ae;return(t,r,s)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get((0,i.RI)(n,r)&&r in t?n:t,r,s)}const ue={get:ce(!1,!1)},de={get:ce(!1,!0)},pe={get:ce(!0,!1)};const fe=new WeakMap,me=new WeakMap,ge=new WeakMap,ve=new WeakMap;function ye(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xe(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ye((0,i.W7)(e))}function _e(e){return Me(e)?e:Se(e,!1,j,ue,fe)}function we(e){return Se(e,!1,q,de,me)}function be(e){return Se(e,!0,W,pe,ge)}function Se(e,t,n,r,s){if(!(0,i.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const a=s.get(e);if(a)return a;const o=xe(e);if(0===o)return e;const l=new Proxy(e,2===o?r:n);return s.set(e,l),l}function Ae(e){return Me(e)?Ae(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Me(e){return!(!e||!e["__v_isReadonly"])}function Ee(e){return!(!e||!e["__v_isShallow"])}function Te(e){return Ae(e)||Me(e)}function Ce(e){const t=e&&e["__v_raw"];return t?Ce(t):e}function De(e){return(0,i.Nj)(e,"__v_skip",!0),e}const Pe=e=>(0,i.Kn)(e)?_e(e):e,Le=e=>(0,i.Kn)(e)?be(e):e;function Oe(e){w&&g&&(e=Ce(e),E(e.dep||(e.dep=o())))}function Ie(e,t){e=Ce(e),e.dep&&C(e.dep)}function Re(e){return!(!e||!0!==e.__v_isRef)}function Ne(e){return Re(e)?e.value:e}const Be={get:(e,t,n)=>Ne(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return Re(r)&&!Re(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function ze(e){return Ae(e)?e:new Proxy(e,Be)}class ke{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new x(e,(()=>{this._dirty||(this._dirty=!0,Ie(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!i,this["__v_isReadonly"]=n}get value(){const e=Ce(this);return Oe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Fe(e,t,n=!1){let r,s;const a=(0,i.mf)(e);a?(r=e,s=i.dG):(r=e.get,s=e.set);const o=new ke(r,s,a||!s,n);return o}},252:function(e,t,n){n.d(t,{$d:function(){return a},FN:function(){return ln},HY:function(){return Dt},Ko:function(){return ze},P$:function(){return ae},Q6:function(){return de},U2:function(){return le},Us:function(){return St},Wm:function(){return Xt},Y8:function(){return ie},_:function(){return qt},h:function(){return Mn},iD:function(){return Ut},ic:function(){return Te},nK:function(){return ue},wg:function(){return Nt},wy:function(){return Re}});var i=n(262),r=n(577);function s(e,t,n,i){let r;try{r=i?e(...i):e()}catch(s){o(s,t,n)}return r}function a(e,t,n,i){if((0,r.mf)(e)){const a=s(e,t,n,i);return a&&(0,r.tI)(a)&&a.catch((e=>{o(e,t,n)})),a}const l=[];for(let r=0;r<e.length;r++)l.push(a(e[r],t,n,i));return l}function o(e,t,n,i=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const r=t.proxy,a=n;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,a))return;i=i.parent}const o=t.appContext.config.errorHandler;if(o)return void s(o,null,10,[e,r,a])}l(e,n,r,i)}function l(e,t,n,i=!0){console.error(e)}let h=!1,c=!1;const u=[];let d=0;const p=[];let f=null,m=0;const g=[];let v=null,y=0;const x=Promise.resolve();let _=null,w=null;function b(e){const t=_||x;return e?t.then(this?e.bind(this):e):t}function S(e){let t=d+1,n=u.length;while(t<n){const i=t+n>>>1,r=O(u[i]);r<e?t=i+1:n=i}return t}function A(e){u.length&&u.includes(e,h&&e.allowRecurse?d+1:d)||e===w||(null==e.id?u.push(e):u.splice(S(e.id),0,e),M())}function M(){h||c||(c=!0,_=x.then(I))}function E(e){const t=u.indexOf(e);t>d&&u.splice(t,1)}function T(e,t,n,i){(0,r.kJ)(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?i+1:i)||n.push(e),M()}function C(e){T(e,f,p,m)}function D(e){T(e,v,g,y)}function P(e,t=null){if(p.length){for(w=t,f=[...new Set(p)],p.length=0,m=0;m<f.length;m++)f[m]();f=null,m=0,w=null,P(e,t)}}function L(e){if(P(),g.length){const e=[...new Set(g)];if(g.length=0,v)return void v.push(...e);for(v=e,v.sort(((e,t)=>O(e)-O(t))),y=0;y<v.length;y++)v[y]();v=null,y=0}}const O=e=>null==e.id?1/0:e.id;function I(e){c=!1,h=!0,P(e),u.sort(((e,t)=>O(e)-O(t)));r.dG;try{for(d=0;d<u.length;d++){const e=u[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,u.length=0,L(e),h=!1,_=null,(u.length||p.length||g.length)&&I(e)}}new Set;new Map;function R(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||r.kT;let s=n;const o=t.startsWith("update:"),l=o&&t.slice(7);if(l&&l in i){const e=`${"modelValue"===l?"model":l}Modifiers`,{number:t,trim:a}=i[e]||r.kT;a&&(s=n.map((e=>e.trim()))),t&&(s=n.map(r.He))}let h;let c=i[h=(0,r.hR)(t)]||i[h=(0,r.hR)((0,r._A)(t))];!c&&o&&(c=i[h=(0,r.hR)((0,r.rs)(t))]),c&&a(c,e,6,s);const u=i[h+"Once"];if(u){if(e.emitted){if(e.emitted[h])return}else e.emitted={};e.emitted[h]=!0,a(u,e,6,s)}}function N(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(void 0!==s)return s;const a=e.emits;let o={},l=!1;if(!(0,r.mf)(e)){const i=e=>{const n=N(e,t,!0);n&&(l=!0,(0,r.l7)(o,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return a||l?((0,r.kJ)(a)?a.forEach((e=>o[e]=null)):(0,r.l7)(o,a),i.set(e,o),o):(i.set(e,null),null)}function B(e,t){return!(!e||!(0,r.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,r.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,r.RI)(e,(0,r.rs)(t))||(0,r.RI)(e,t))}let z=null,k=null;function F(e){const t=z;return z=e,k=e&&e.type.__scopeId||null,t}function U(e,t=z,n){if(!t)return e;if(e._n)return e;const i=(...n)=>{i._d&&kt(-1);const r=F(t),s=e(...n);return F(r),i._d&&kt(1),s};return i._n=!0,i._c=!0,i._d=!0,i}function H(e){const{type:t,vnode:n,proxy:i,withProxy:s,props:a,propsOptions:[l],slots:h,attrs:c,emit:u,render:d,renderCache:p,data:f,setupState:m,ctx:g,inheritAttrs:v}=e;let y,x;const _=F(e);try{if(4&n.shapeFlag){const e=s||i;y=Zt(d.call(e,e,p,a,m,f,g)),x=c}else{const e=t;0,y=Zt(e.length>1?e(a,{attrs:c,slots:h,emit:u}):e(a,null)),x=t.props?c:V(c)}}catch(b){It.length=0,o(b,e,1),y=Xt(Lt)}let w=y;if(x&&!1!==v){const e=Object.keys(x),{shapeFlag:t}=w;e.length&&7&t&&(l&&e.some(r.tR)&&(x=G(x,l)),w=Kt(w,x))}return n.dirs&&(w=Kt(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,F(_),y}const V=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,r.F7)(n))&&((t||(t={}))[n]=e[n]);return t},G=(e,t)=>{const n={};for(const i in e)(0,r.tR)(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function j(e,t,n){const{props:i,children:r,component:s}=e,{props:a,children:o,patchFlag:l}=t,h=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!r&&!o||o&&o.$stable)||i!==a&&(i?!a||W(i,a,h):!!a);if(1024&l)return!0;if(16&l)return i?W(i,a,h):!!a;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(a[n]!==i[n]&&!B(h,n))return!0}}return!1}function W(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!B(n,s))return!0}return!1}function q({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const X=e=>e.__isSuspense;function Y(e,t){t&&t.pendingBranch?(0,r.kJ)(e)?t.effects.push(...e):t.effects.push(e):D(e)}function Q(e,t){if(on){let n=on.provides;const i=on.parent&&on.parent.provides;i===n&&(n=on.provides=Object.create(i)),n[e]=t}else 0}function K(e,t,n=!1){const i=on||z;if(i){const s=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,r.mf)(t)?t.call(i.proxy):t}else 0}const J={};function Z(e,t,n){return $(e,t,n)}function $(e,t,{immediate:n,deep:o,flush:l,onTrack:h,onTrigger:c}=r.kT){const u=on;let d,p,f=!1,m=!1;if((0,i.dq)(e)?(d=()=>e.value,f=(0,i.yT)(e)):(0,i.PG)(e)?(d=()=>e,o=!0):(0,r.kJ)(e)?(m=!0,f=e.some((e=>(0,i.PG)(e)||(0,i.yT)(e))),d=()=>e.map((e=>(0,i.dq)(e)?e.value:(0,i.PG)(e)?ne(e):(0,r.mf)(e)?s(e,u,2):void 0))):d=(0,r.mf)(e)?t?()=>s(e,u,2):()=>{if(!u||!u.isUnmounted)return p&&p(),a(e,u,3,[g])}:r.dG,t&&o){const e=d;d=()=>ne(e())}let g=e=>{p=_.onStop=()=>{s(e,u,4)}};if(fn)return g=r.dG,t?n&&a(t,u,3,[d(),m?[]:void 0,g]):d(),r.dG;let v=m?[]:J;const y=()=>{if(_.active)if(t){const e=_.run();(o||f||(m?e.some(((e,t)=>(0,r.aU)(e,v[t]))):(0,r.aU)(e,v)))&&(p&&p(),a(t,u,3,[e,v===J?void 0:v,g]),v=e)}else _.run()};let x;y.allowRecurse=!!t,x="sync"===l?y:"post"===l?()=>bt(y,u&&u.suspense):()=>C(y);const _=new i.qq(d,x);return t?n?y():v=_.run():"post"===l?bt(_.run.bind(_),u&&u.suspense):_.run(),()=>{_.stop(),u&&u.scope&&(0,r.Od)(u.scope.effects,_)}}function ee(e,t,n){const i=this.proxy,s=(0,r.HD)(e)?e.includes(".")?te(i,e):()=>i[e]:e.bind(i,i);let a;(0,r.mf)(t)?a=t:(a=t.handler,n=t);const o=on;hn(this);const l=$(s,a.bind(i),n);return o?hn(o):cn(),l}function te(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ne(e,t){if(!(0,r.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,i.dq)(e))ne(e.value,t);else if((0,r.kJ)(e))for(let n=0;n<e.length;n++)ne(e[n],t);else if((0,r.DM)(e)||(0,r._N)(e))e.forEach((e=>{ne(e,t)}));else if((0,r.PO)(e))for(const n in e)ne(e[n],t);return e}function ie(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Me((()=>{e.isMounted=!0})),Ce((()=>{e.isUnmounting=!0})),e}const re=[Function,Array],se={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:re,onEnter:re,onAfterEnter:re,onEnterCancelled:re,onBeforeLeave:re,onLeave:re,onAfterLeave:re,onLeaveCancelled:re,onBeforeAppear:re,onAppear:re,onAfterAppear:re,onAppearCancelled:re},setup(e,{slots:t}){const n=ln(),r=ie();let s;return()=>{const a=t.default&&de(t.default(),!0);if(!a||!a.length)return;let o=a[0];if(a.length>1){let e=!1;for(const t of a)if(t.type!==Lt){0,o=t,e=!0;break}}const l=(0,i.IU)(e),{mode:h}=l;if(r.isLeaving)return he(o);const c=ce(o);if(!c)return he(o);const u=le(c,l,r,n);ue(c,u);const d=n.subTree,p=d&&ce(d);let f=!1;const{getTransitionKey:m}=c.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,f=!0)}if(p&&p.type!==Lt&&(!Vt(c,p)||f)){const e=le(p,l,r,n);if(ue(p,e),"out-in"===h)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},he(o);"in-out"===h&&c.type!==Lt&&(e.delayLeave=(e,t,n)=>{const i=oe(r,p);i[String(p.key)]=p,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return o}}},ae=se;function oe(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function le(e,t,n,i){const{appear:s,mode:o,persisted:l=!1,onBeforeEnter:h,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:f,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:y,onAfterAppear:x,onAppearCancelled:_}=t,w=String(e.key),b=oe(n,e),S=(e,t)=>{e&&a(e,i,9,t)},A=(e,t)=>{const n=t[1];S(e,t),(0,r.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},M={mode:o,persisted:l,beforeEnter(t){let i=h;if(!n.isMounted){if(!s)return;i=v||h}t._leaveCb&&t._leaveCb(!0);const r=b[w];r&&Vt(e,r)&&r.el._leaveCb&&r.el._leaveCb(),S(i,[t])},enter(e){let t=c,i=u,r=d;if(!n.isMounted){if(!s)return;t=y||c,i=x||u,r=_||d}let a=!1;const o=e._enterCb=t=>{a||(a=!0,S(t?r:i,[e]),M.delayedLeave&&M.delayedLeave(),e._enterCb=void 0)};t?A(t,[e,o]):o()},leave(t,i){const r=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return i();S(p,[t]);let s=!1;const a=t._leaveCb=n=>{s||(s=!0,i(),S(n?g:m,[t]),t._leaveCb=void 0,b[r]===e&&delete b[r])};b[r]=e,f?A(f,[t,a]):a()},clone(e){return le(e,t,n,i)}};return M}function he(e){if(fe(e))return e=Kt(e),e.children=null,e}function ce(e){return fe(e)?e.children?e.children[0]:void 0:e}function ue(e,t){6&e.shapeFlag&&e.component?ue(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function de(e,t=!1,n){let i=[],r=0;for(let s=0;s<e.length;s++){let a=e[s];const o=null==n?a.key:String(n)+String(null!=a.key?a.key:s);a.type===Dt?(128&a.patchFlag&&r++,i=i.concat(de(a.children,t,o))):(t||a.type!==Lt)&&i.push(null!=o?Kt(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}const pe=e=>!!e.type.__asyncLoader;const fe=e=>e.type.__isKeepAlive;RegExp,RegExp;function me(e,t){return(0,r.kJ)(e)?e.some((e=>me(e,t))):(0,r.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function ge(e,t){ye(e,"a",t)}function ve(e,t){ye(e,"da",t)}function ye(e,t,n=on){const i=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(be(t,i,n),n){let e=n.parent;while(e&&e.parent)fe(e.parent.vnode)&&xe(i,t,n,e),e=e.parent}}function xe(e,t,n,i){const s=be(t,e,i,!0);De((()=>{(0,r.Od)(i[t],s)}),n)}function _e(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function we(e){return 128&e.shapeFlag?e.ssContent:e}function be(e,t,n=on,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;(0,i.Jd)(),hn(n);const s=a(t,n,e,r);return cn(),(0,i.lk)(),s});return r?s.unshift(o):s.push(o),o}}const Se=e=>(t,n=on)=>(!fn||"sp"===e)&&be(e,t,n),Ae=Se("bm"),Me=Se("m"),Ee=Se("bu"),Te=Se("u"),Ce=Se("bum"),De=Se("um"),Pe=Se("sp"),Le=Se("rtg"),Oe=Se("rtc");function Ie(e,t=on){be("ec",e,t)}function Re(e,t){const n=z;if(null===n)return e;const i=wn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[e,n,o,l=r.kT]=t[a];(0,r.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&ne(n),s.push({dir:e,instance:i,value:n,oldValue:void 0,arg:o,modifiers:l})}return e}function Ne(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let l=0;l<s.length;l++){const h=s[l];o&&(h.oldValue=o[l].value);let c=h.dir[r];c&&((0,i.Jd)(),a(c,n,8,[e.el,h,e,t]),(0,i.lk)())}}const Be=Symbol();function ze(e,t,n,i){let s;const a=n&&n[i];if((0,r.kJ)(e)||(0,r.HD)(e)){s=new Array(e.length);for(let n=0,i=e.length;n<i;n++)s[n]=t(e[n],n,void 0,a&&a[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,a&&a[n])}else if((0,r.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,a&&a[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let i=0,r=n.length;i<r;i++){const r=n[i];s[i]=t(e[r],r,i,a&&a[i])}}else s=[];return n&&(n[i]=s),s}const ke=e=>e?un(e)?wn(e)||e.proxy:ke(e.parent):null,Fe=(0,r.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ke(e.parent),$root:e=>ke(e.root),$emit:e=>e.emit,$options:e=>qe(e),$forceUpdate:e=>e.f||(e.f=()=>A(e.update)),$nextTick:e=>e.n||(e.n=b.bind(e.proxy)),$watch:e=>ee.bind(e)}),Ue={get({_:e},t){const{ctx:n,setupState:s,data:a,props:o,accessCache:l,type:h,appContext:c}=e;let u;if("$"!==t[0]){const i=l[t];if(void 0!==i)switch(i){case 1:return s[t];case 2:return a[t];case 4:return n[t];case 3:return o[t]}else{if(s!==r.kT&&(0,r.RI)(s,t))return l[t]=1,s[t];if(a!==r.kT&&(0,r.RI)(a,t))return l[t]=2,a[t];if((u=e.propsOptions[0])&&(0,r.RI)(u,t))return l[t]=3,o[t];if(n!==r.kT&&(0,r.RI)(n,t))return l[t]=4,n[t];He&&(l[t]=0)}}const d=Fe[t];let p,f;return d?("$attrs"===t&&(0,i.j)(e,"get",t),d(e)):(p=h.__cssModules)&&(p=p[t])?p:n!==r.kT&&(0,r.RI)(n,t)?(l[t]=4,n[t]):(f=c.config.globalProperties,(0,r.RI)(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:i,setupState:s,ctx:a}=e;return s!==r.kT&&(0,r.RI)(s,t)?(s[t]=n,!0):i!==r.kT&&(0,r.RI)(i,t)?(i[t]=n,!0):!(0,r.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(a[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:a}},o){let l;return!!n[o]||e!==r.kT&&(0,r.RI)(e,o)||t!==r.kT&&(0,r.RI)(t,o)||(l=a[0])&&(0,r.RI)(l,o)||(0,r.RI)(i,o)||(0,r.RI)(Fe,o)||(0,r.RI)(s.config.globalProperties,o)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,r.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let He=!0;function Ve(e){const t=qe(e),n=e.proxy,s=e.ctx;He=!1,t.beforeCreate&&je(t.beforeCreate,e,"bc");const{data:a,computed:o,methods:l,watch:h,provide:c,inject:u,created:d,beforeMount:p,mounted:f,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:x,beforeUnmount:_,destroyed:w,unmounted:b,render:S,renderTracked:A,renderTriggered:M,errorCaptured:E,serverPrefetch:T,expose:C,inheritAttrs:D,components:P,directives:L,filters:O}=t,I=null;if(u&&Ge(u,s,I,e.appContext.config.unwrapInjectedRef),l)for(const i in l){const e=l[i];(0,r.mf)(e)&&(s[i]=e.bind(n))}if(a){0;const t=a.call(n,n);0,(0,r.Kn)(t)&&(e.data=(0,i.qj)(t))}if(He=!0,o)for(const i in o){const e=o[i],t=(0,r.mf)(e)?e.bind(n,n):(0,r.mf)(e.get)?e.get.bind(n,n):r.dG;0;const a=!(0,r.mf)(e)&&(0,r.mf)(e.set)?e.set.bind(n):r.dG,l=An({get:t,set:a});Object.defineProperty(s,i,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(h)for(const i in h)We(h[i],s,n,i);if(c){const e=(0,r.mf)(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{Q(t,e[t])}))}function R(e,t){(0,r.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&je(d,e,"c"),R(Ae,p),R(Me,f),R(Ee,m),R(Te,g),R(ge,v),R(ve,y),R(Ie,E),R(Oe,A),R(Le,M),R(Ce,_),R(De,b),R(Pe,T),(0,r.kJ)(C))if(C.length){const t=e.exposed||(e.exposed={});C.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});S&&e.render===r.dG&&(e.render=S),null!=D&&(e.inheritAttrs=D),P&&(e.components=P),L&&(e.directives=L)}function Ge(e,t,n=r.dG,s=!1){(0,r.kJ)(e)&&(e=Je(e));for(const a in e){const n=e[a];let o;o=(0,r.Kn)(n)?"default"in n?K(n.from||a,n.default,!0):K(n.from||a):K(n),(0,i.dq)(o)&&s?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[a]=o}}function je(e,t,n){a((0,r.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function We(e,t,n,i){const s=i.includes(".")?te(n,i):()=>n[i];if((0,r.HD)(e)){const n=t[e];(0,r.mf)(n)&&Z(s,n)}else if((0,r.mf)(e))Z(s,e.bind(n));else if((0,r.Kn)(e))if((0,r.kJ)(e))e.forEach((e=>We(e,t,n,i)));else{const i=(0,r.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,r.mf)(i)&&Z(s,i,e)}else 0}function qe(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let l;return o?l=o:r.length||n||i?(l={},r.length&&r.forEach((e=>Xe(l,e,a,!0))),Xe(l,t,a)):l=t,s.set(t,l),l}function Xe(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&Xe(e,s,n,!0),r&&r.forEach((t=>Xe(e,t,n,!0)));for(const a in t)if(i&&"expose"===a);else{const i=Ye[a]||n&&n[a];e[a]=i?i(e[a],t[a]):t[a]}return e}const Ye={data:Qe,props:$e,emits:$e,methods:$e,computed:$e,beforeCreate:Ze,created:Ze,beforeMount:Ze,mounted:Ze,beforeUpdate:Ze,updated:Ze,beforeDestroy:Ze,beforeUnmount:Ze,destroyed:Ze,unmounted:Ze,activated:Ze,deactivated:Ze,errorCaptured:Ze,serverPrefetch:Ze,components:$e,directives:$e,watch:et,provide:Qe,inject:Ke};function Qe(e,t){return t?e?function(){return(0,r.l7)((0,r.mf)(e)?e.call(this,this):e,(0,r.mf)(t)?t.call(this,this):t)}:t:e}function Ke(e,t){return $e(Je(e),Je(t))}function Je(e){if((0,r.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ze(e,t){return e?[...new Set([].concat(e,t))]:t}function $e(e,t){return e?(0,r.l7)((0,r.l7)(Object.create(null),e),t):t}function et(e,t){if(!e)return t;if(!t)return e;const n=(0,r.l7)(Object.create(null),e);for(const i in t)n[i]=Ze(e[i],t[i]);return n}function tt(e,t,n,s=!1){const a={},o={};(0,r.Nj)(o,Gt,1),e.propsDefaults=Object.create(null),it(e,t,a,o);for(const i in e.propsOptions[0])i in a||(a[i]=void 0);n?e.props=s?a:(0,i.Um)(a):e.type.props?e.props=a:e.props=o,e.attrs=o}function nt(e,t,n,s){const{props:a,attrs:o,vnode:{patchFlag:l}}=e,h=(0,i.IU)(a),[c]=e.propsOptions;let u=!1;if(!(s||l>0)||16&l){let i;it(e,t,a,o)&&(u=!0);for(const s in h)t&&((0,r.RI)(t,s)||(i=(0,r.rs)(s))!==s&&(0,r.RI)(t,i))||(c?!n||void 0===n[s]&&void 0===n[i]||(a[s]=rt(c,h,s,void 0,e,!0)):delete a[s]);if(o!==h)for(const e in o)t&&(0,r.RI)(t,e)||(delete o[e],u=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let s=n[i];if(B(e.emitsOptions,s))continue;const l=t[s];if(c)if((0,r.RI)(o,s))l!==o[s]&&(o[s]=l,u=!0);else{const t=(0,r._A)(s);a[t]=rt(c,h,t,l,e,!1)}else l!==o[s]&&(o[s]=l,u=!0)}}u&&(0,i.X$)(e,"set","$attrs")}function it(e,t,n,s){const[a,o]=e.propsOptions;let l,h=!1;if(t)for(let i in t){if((0,r.Gg)(i))continue;const c=t[i];let u;a&&(0,r.RI)(a,u=(0,r._A)(i))?o&&o.includes(u)?(l||(l={}))[u]=c:n[u]=c:B(e.emitsOptions,i)||i in s&&c===s[i]||(s[i]=c,h=!0)}if(o){const t=(0,i.IU)(n),s=l||r.kT;for(let i=0;i<o.length;i++){const l=o[i];n[l]=rt(a,t,l,s[l],e,!(0,r.RI)(s,l))}}return h}function rt(e,t,n,i,s,a){const o=e[n];if(null!=o){const e=(0,r.RI)(o,"default");if(e&&void 0===i){const e=o.default;if(o.type!==Function&&(0,r.mf)(e)){const{propsDefaults:r}=s;n in r?i=r[n]:(hn(s),i=r[n]=e.call(null,t),cn())}else i=e}o[0]&&(a&&!e?i=!1:!o[1]||""!==i&&i!==(0,r.rs)(n)||(i=!0))}return i}function st(e,t,n=!1){const i=t.propsCache,s=i.get(e);if(s)return s;const a=e.props,o={},l=[];let h=!1;if(!(0,r.mf)(e)){const i=e=>{h=!0;const[n,i]=st(e,t,!0);(0,r.l7)(o,n),i&&l.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!a&&!h)return i.set(e,r.Z6),r.Z6;if((0,r.kJ)(a))for(let u=0;u<a.length;u++){0;const e=(0,r._A)(a[u]);at(e)&&(o[e]=r.kT)}else if(a){0;for(const e in a){const t=(0,r._A)(e);if(at(t)){const n=a[e],i=o[t]=(0,r.kJ)(n)||(0,r.mf)(n)?{type:n}:n;if(i){const e=ht(Boolean,i.type),n=ht(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||(0,r.RI)(i,"default"))&&l.push(t)}}}}const c=[o,l];return i.set(e,c),c}function at(e){return"$"!==e[0]}function ot(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function lt(e,t){return ot(e)===ot(t)}function ht(e,t){return(0,r.kJ)(t)?t.findIndex((t=>lt(t,e))):(0,r.mf)(t)&&lt(t,e)?0:-1}const ct=e=>"_"===e[0]||"$stable"===e,ut=e=>(0,r.kJ)(e)?e.map(Zt):[Zt(e)],dt=(e,t,n)=>{if(t._n)return t;const i=U(((...e)=>ut(t(...e))),n);return i._c=!1,i},pt=(e,t,n)=>{const i=e._ctx;for(const s in e){if(ct(s))continue;const n=e[s];if((0,r.mf)(n))t[s]=dt(s,n,i);else if(null!=n){0;const e=ut(n);t[s]=()=>e}}},ft=(e,t)=>{const n=ut(t);e.slots.default=()=>n},mt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,i.IU)(t),(0,r.Nj)(t,"_",n)):pt(t,e.slots={})}else e.slots={},t&&ft(e,t);(0,r.Nj)(e.slots,Gt,1)},gt=(e,t,n)=>{const{vnode:i,slots:s}=e;let a=!0,o=r.kT;if(32&i.shapeFlag){const e=t._;e?n&&1===e?a=!1:((0,r.l7)(s,t),n||1!==e||delete s._):(a=!t.$stable,pt(t,s)),o=t}else t&&(ft(e,t),o={default:1});if(a)for(const r in s)ct(r)||r in o||delete s[r]};function vt(){return{app:null,config:{isNativeTag:r.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yt=0;function xt(e,t){return function(n,i=null){(0,r.mf)(n)||(n=Object.assign({},n)),null==i||(0,r.Kn)(i)||(i=null);const s=vt(),a=new Set;let o=!1;const l=s.app={_uid:yt++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:En,get config(){return s.config},set config(e){0},use(e,...t){return a.has(e)||(e&&(0,r.mf)(e.install)?(a.add(e),e.install(l,...t)):(0,r.mf)(e)&&(a.add(e),e(l,...t))),l},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),l},component(e,t){return t?(s.components[e]=t,l):s.components[e]},directive(e,t){return t?(s.directives[e]=t,l):s.directives[e]},mount(r,a,h){if(!o){0;const c=Xt(n,i);return c.appContext=s,a&&t?t(c,r):e(c,r,h),o=!0,l._container=r,r.__vue_app__=l,wn(c.component)||c.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return s.provides[e]=t,l}};return l}}function _t(e,t,n,a,o=!1){if((0,r.kJ)(e))return void e.forEach(((e,i)=>_t(e,t&&((0,r.kJ)(t)?t[i]:t),n,a,o)));if(pe(a)&&!o)return;const l=4&a.shapeFlag?wn(a.component)||a.component.proxy:a.el,h=o?null:l,{i:c,r:u}=e;const d=t&&t.r,p=c.refs===r.kT?c.refs={}:c.refs,f=c.setupState;if(null!=d&&d!==u&&((0,r.HD)(d)?(p[d]=null,(0,r.RI)(f,d)&&(f[d]=null)):(0,i.dq)(d)&&(d.value=null)),(0,r.mf)(u))s(u,c,12,[h,p]);else{const t=(0,r.HD)(u),s=(0,i.dq)(u);if(t||s){const i=()=>{if(e.f){const n=t?p[u]:u.value;o?(0,r.kJ)(n)&&(0,r.Od)(n,l):(0,r.kJ)(n)?n.includes(l)||n.push(l):t?(p[u]=[l],(0,r.RI)(f,u)&&(f[u]=p[u])):(u.value=[l],e.k&&(p[e.k]=u.value))}else t?(p[u]=h,(0,r.RI)(f,u)&&(f[u]=h)):s&&(u.value=h,e.k&&(p[e.k]=h))};h?(i.id=-1,bt(i,n)):i()}else 0}}function wt(){}const bt=Y;function St(e){return At(e)}function At(e,t){wt();const n=(0,r.E9)();n.__VUE__=!0;const{insert:s,remove:a,patchProp:o,createElement:l,createText:h,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:f,setScopeId:m=r.dG,cloneNode:g,insertStaticContent:v}=e,y=(e,t,n,i=null,r=null,s=null,a=!1,o=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!Vt(e,t)&&(i=$(e),Y(e,r,s,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:h,ref:c,shapeFlag:u}=t;switch(h){case Pt:x(e,t,n,i);break;case Lt:_(e,t,n,i);break;case Ot:null==e&&w(t,n,i,a);break;case Dt:N(e,t,n,i,r,s,a,o,l);break;default:1&u?M(e,t,n,i,r,s,a,o,l):6&u?B(e,t,n,i,r,s,a,o,l):(64&u||128&u)&&h.process(e,t,n,i,r,s,a,o,l,te)}null!=c&&r&&_t(c,e&&e.ref,s,t||e,!t)},x=(e,t,n,i)=>{if(null==e)s(t.el=h(t.children),n,i);else{const n=t.el=e.el;t.children!==e.children&&u(n,t.children)}},_=(e,t,n,i)=>{null==e?s(t.el=c(t.children||""),n,i):t.el=e.el},w=(e,t,n,i)=>{[e.el,e.anchor]=v(e.children,t,n,i,e.el,e.anchor)},b=({el:e,anchor:t},n,i)=>{let r;while(e&&e!==t)r=f(e),s(e,n,i),e=r;s(t,n,i)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),a(e),e=n;a(t)},M=(e,t,n,i,r,s,a,o,l)=>{a=a||"svg"===t.type,null==e?T(t,n,i,r,s,a,o,l):O(e,t,r,s,a,o,l)},T=(e,t,n,i,a,h,c,u)=>{let p,f;const{type:m,props:v,shapeFlag:y,transition:x,patchFlag:_,dirs:w}=e;if(e.el&&void 0!==g&&-1===_)p=e.el=g(e.el);else{if(p=e.el=l(e.type,h,v&&v.is,v),8&y?d(p,e.children):16&y&&D(e.children,p,null,i,a,h&&"foreignObject"!==m,c,u),w&&Ne(e,null,i,"created"),v){for(const t in v)"value"===t||(0,r.Gg)(t)||o(p,t,null,v[t],h,e.children,i,a,Z);"value"in v&&o(p,"value",null,v.value),(f=v.onVnodeBeforeMount)&&nn(f,i,e)}C(p,e,e.scopeId,c,i)}w&&Ne(e,null,i,"beforeMount");const b=(!a||a&&!a.pendingBranch)&&x&&!x.persisted;b&&x.beforeEnter(p),s(p,t,n),((f=v&&v.onVnodeMounted)||b||w)&&bt((()=>{f&&nn(f,i,e),b&&x.enter(p),w&&Ne(e,null,i,"mounted")}),a)},C=(e,t,n,i,r)=>{if(n&&m(e,n),i)for(let s=0;s<i.length;s++)m(e,i[s]);if(r){let n=r.subTree;if(t===n){const t=r.vnode;C(e,t,t.scopeId,t.slotScopeIds,r.parent)}}},D=(e,t,n,i,r,s,a,o,l=0)=>{for(let h=l;h<e.length;h++){const l=e[h]=o?$t(e[h]):Zt(e[h]);y(null,l,t,n,i,r,s,a,o)}},O=(e,t,n,i,s,a,l)=>{const h=t.el=e.el;let{patchFlag:c,dynamicChildren:u,dirs:p}=t;c|=16&e.patchFlag;const f=e.props||r.kT,m=t.props||r.kT;let g;n&&Mt(n,!1),(g=m.onVnodeBeforeUpdate)&&nn(g,n,t,e),p&&Ne(t,e,n,"beforeUpdate"),n&&Mt(n,!0);const v=s&&"foreignObject"!==t.type;if(u?I(e.dynamicChildren,u,h,n,i,v,a):l||V(e,t,h,null,n,i,v,a,!1),c>0){if(16&c)R(h,t,f,m,n,i,s);else if(2&c&&f.class!==m.class&&o(h,"class",null,m.class,s),4&c&&o(h,"style",f.style,m.style,s),8&c){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const a=r[t],l=f[a],c=m[a];c===l&&"value"!==a||o(h,a,l,c,s,e.children,n,i,Z)}}1&c&&e.children!==t.children&&d(h,t.children)}else l||null!=u||R(h,t,f,m,n,i,s);((g=m.onVnodeUpdated)||p)&&bt((()=>{g&&nn(g,n,t,e),p&&Ne(t,e,n,"updated")}),i)},I=(e,t,n,i,r,s,a)=>{for(let o=0;o<t.length;o++){const l=e[o],h=t[o],c=l.el&&(l.type===Dt||!Vt(l,h)||70&l.shapeFlag)?p(l.el):n;y(l,h,c,null,i,r,s,a,!0)}},R=(e,t,n,i,s,a,l)=>{if(n!==i){for(const h in i){if((0,r.Gg)(h))continue;const c=i[h],u=n[h];c!==u&&"value"!==h&&o(e,h,u,c,l,t.children,s,a,Z)}if(n!==r.kT)for(const h in n)(0,r.Gg)(h)||h in i||o(e,h,n[h],null,l,t.children,s,a,Z);"value"in i&&o(e,"value",n.value,i.value)}},N=(e,t,n,i,r,a,o,l,c)=>{const u=t.el=e?e.el:h(""),d=t.anchor=e?e.anchor:h("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:m}=t;m&&(l=l?l.concat(m):m),null==e?(s(u,n,i),s(d,n,i),D(t.children,n,d,r,a,o,l,c)):p>0&&64&p&&f&&e.dynamicChildren?(I(e.dynamicChildren,f,n,r,a,o,l),(null!=t.key||r&&t===r.subTree)&&Et(e,t,!0)):V(e,t,n,d,r,a,o,l,c)},B=(e,t,n,i,r,s,a,o,l)=>{t.slotScopeIds=o,null==e?512&t.shapeFlag?r.ctx.activate(t,n,i,a,l):z(t,n,i,r,s,a,l):k(e,t,l)},z=(e,t,n,i,r,s,a)=>{const o=e.component=an(e,i,r);if(fe(e)&&(o.ctx.renderer=te),mn(o),o.asyncDep){if(r&&r.registerDep(o,F),!e.el){const e=o.subTree=Xt(Lt);_(null,e,t,n)}}else F(o,e,t,n,r,s,a)},k=(e,t,n)=>{const i=t.component=e.component;if(j(e,t,n)){if(i.asyncDep&&!i.asyncResolved)return void U(i,t,n);i.next=t,E(i.update),i.update()}else t.el=e.el,i.vnode=t},F=(e,t,n,s,a,o,l)=>{const h=()=>{if(e.isMounted){let t,{next:n,bu:i,u:s,parent:h,vnode:c}=e,u=n;0,Mt(e,!1),n?(n.el=c.el,U(e,n,l)):n=c,i&&(0,r.ir)(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&nn(t,h,n,c),Mt(e,!0);const d=H(e);0;const f=e.subTree;e.subTree=d,y(f,d,p(f.el),$(f),e,a,o),n.el=d.el,null===u&&q(e,d.el),s&&bt(s,a),(t=n.props&&n.props.onVnodeUpdated)&&bt((()=>nn(t,h,n,c)),a)}else{let i;const{el:l,props:h}=t,{bm:c,m:u,parent:d}=e,p=pe(t);if(Mt(e,!1),c&&(0,r.ir)(c),!p&&(i=h&&h.onVnodeBeforeMount)&&nn(i,d,t),Mt(e,!0),l&&ie){const n=()=>{e.subTree=H(e),ie(l,e.subTree,e,a,null)};p?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const i=e.subTree=H(e);0,y(null,i,n,s,e,a,o),t.el=i.el}if(u&&bt(u,a),!p&&(i=h&&h.onVnodeMounted)){const e=t;bt((()=>nn(i,d,e)),a)}(256&t.shapeFlag||d&&pe(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&bt(e.a,a),e.isMounted=!0,t=n=s=null}},c=e.effect=new i.qq(h,(()=>A(u)),e.scope),u=e.update=()=>c.run();u.id=e.uid,Mt(e,!0),u()},U=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,nt(e,t.props,r,n),gt(e,t.children,n),(0,i.Jd)(),P(void 0,e.update),(0,i.lk)()},V=(e,t,n,i,r,s,a,o,l=!1)=>{const h=e&&e.children,c=e?e.shapeFlag:0,u=t.children,{patchFlag:p,shapeFlag:f}=t;if(p>0){if(128&p)return void W(h,u,n,i,r,s,a,o,l);if(256&p)return void G(h,u,n,i,r,s,a,o,l)}8&f?(16&c&&Z(h,r,s),u!==h&&d(n,u)):16&c?16&f?W(h,u,n,i,r,s,a,o,l):Z(h,r,s,!0):(8&c&&d(n,""),16&f&&D(u,n,i,r,s,a,o,l))},G=(e,t,n,i,s,a,o,l,h)=>{e=e||r.Z6,t=t||r.Z6;const c=e.length,u=t.length,d=Math.min(c,u);let p;for(p=0;p<d;p++){const i=t[p]=h?$t(t[p]):Zt(t[p]);y(e[p],i,n,null,s,a,o,l,h)}c>u?Z(e,s,a,!0,!1,d):D(t,n,i,s,a,o,l,h,d)},W=(e,t,n,i,s,a,o,l,h)=>{let c=0;const u=t.length;let d=e.length-1,p=u-1;while(c<=d&&c<=p){const i=e[c],r=t[c]=h?$t(t[c]):Zt(t[c]);if(!Vt(i,r))break;y(i,r,n,null,s,a,o,l,h),c++}while(c<=d&&c<=p){const i=e[d],r=t[p]=h?$t(t[p]):Zt(t[p]);if(!Vt(i,r))break;y(i,r,n,null,s,a,o,l,h),d--,p--}if(c>d){if(c<=p){const e=p+1,r=e<u?t[e].el:i;while(c<=p)y(null,t[c]=h?$t(t[c]):Zt(t[c]),n,r,s,a,o,l,h),c++}}else if(c>p)while(c<=d)Y(e[c],s,a,!0),c++;else{const f=c,m=c,g=new Map;for(c=m;c<=p;c++){const e=t[c]=h?$t(t[c]):Zt(t[c]);null!=e.key&&g.set(e.key,c)}let v,x=0;const _=p-m+1;let w=!1,b=0;const S=new Array(_);for(c=0;c<_;c++)S[c]=0;for(c=f;c<=d;c++){const i=e[c];if(x>=_){Y(i,s,a,!0);continue}let r;if(null!=i.key)r=g.get(i.key);else for(v=m;v<=p;v++)if(0===S[v-m]&&Vt(i,t[v])){r=v;break}void 0===r?Y(i,s,a,!0):(S[r-m]=c+1,r>=b?b=r:w=!0,y(i,t[r],n,null,s,a,o,l,h),x++)}const A=w?Tt(S):r.Z6;for(v=A.length-1,c=_-1;c>=0;c--){const e=m+c,r=t[e],d=e+1<u?t[e+1].el:i;0===S[c]?y(null,r,n,d,s,a,o,l,h):w&&(v<0||c!==A[v]?X(r,n,d,2):v--)}}},X=(e,t,n,i,r=null)=>{const{el:a,type:o,transition:l,children:h,shapeFlag:c}=e;if(6&c)return void X(e.component.subTree,t,n,i);if(128&c)return void e.suspense.move(t,n,i);if(64&c)return void o.move(e,t,n,te);if(o===Dt){s(a,t,n);for(let e=0;e<h.length;e++)X(h[e],t,n,i);return void s(e.anchor,t,n)}if(o===Ot)return void b(e,t,n);const u=2!==i&&1&c&&l;if(u)if(0===i)l.beforeEnter(a),s(a,t,n),bt((()=>l.enter(a)),r);else{const{leave:e,delayLeave:i,afterLeave:r}=l,o=()=>s(a,t,n),h=()=>{e(a,(()=>{o(),r&&r()}))};i?i(a,o,h):h()}else s(a,t,n)},Y=(e,t,n,i=!1,r=!1)=>{const{type:s,props:a,ref:o,children:l,dynamicChildren:h,shapeFlag:c,patchFlag:u,dirs:d}=e;if(null!=o&&_t(o,null,n,e,!0),256&c)return void t.ctx.deactivate(e);const p=1&c&&d,f=!pe(e);let m;if(f&&(m=a&&a.onVnodeBeforeUnmount)&&nn(m,t,e),6&c)J(e.component,n,i);else{if(128&c)return void e.suspense.unmount(n,i);p&&Ne(e,null,t,"beforeUnmount"),64&c?e.type.remove(e,t,n,r,te,i):h&&(s!==Dt||u>0&&64&u)?Z(h,t,n,!1,!0):(s===Dt&&384&u||!r&&16&c)&&Z(l,t,n),i&&Q(e)}(f&&(m=a&&a.onVnodeUnmounted)||p)&&bt((()=>{m&&nn(m,t,e),p&&Ne(e,null,t,"unmounted")}),n)},Q=e=>{const{type:t,el:n,anchor:i,transition:r}=e;if(t===Dt)return void K(n,i);if(t===Ot)return void S(e);const s=()=>{a(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave()};if(1&e.shapeFlag&&r&&!r.persisted){const{leave:t,delayLeave:i}=r,a=()=>t(n,s);i?i(e.el,s,a):a()}else s()},K=(e,t)=>{let n;while(e!==t)n=f(e),a(e),e=n;a(t)},J=(e,t,n)=>{const{bum:i,scope:s,update:a,subTree:o,um:l}=e;i&&(0,r.ir)(i),s.stop(),a&&(a.active=!1,Y(o,e,t,n)),l&&bt(l,t),bt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Z=(e,t,n,i=!1,r=!1,s=0)=>{for(let a=s;a<e.length;a++)Y(e[a],t,n,i,r)},$=e=>6&e.shapeFlag?$(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&Y(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),L(),t._vnode=e},te={p:y,um:Y,m:X,r:Q,mt:z,mc:D,pc:V,pbc:I,n:$,o:e};let ne,ie;return t&&([ne,ie]=t(te)),{render:ee,hydrate:ne,createApp:xt(ee,ne)}}function Mt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Et(e,t,n=!1){const i=e.children,s=t.children;if((0,r.kJ)(i)&&(0,r.kJ)(s))for(let r=0;r<i.length;r++){const e=i[r];let t=s[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[r]=$t(s[r]),t.el=e.el),n||Et(e,t))}}function Tt(e){const t=e.slice(),n=[0];let i,r,s,a,o;const l=e.length;for(i=0;i<l;i++){const l=e[i];if(0!==l){if(r=n[n.length-1],e[r]<l){t[i]=r,n.push(i);continue}s=0,a=n.length-1;while(s<a)o=s+a>>1,e[n[o]]<l?s=o+1:a=o;l<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}s=n.length,a=n[s-1];while(s-- >0)n[s]=a,a=t[a];return n}const Ct=e=>e.__isTeleport;const Dt=Symbol(void 0),Pt=Symbol(void 0),Lt=Symbol(void 0),Ot=Symbol(void 0),It=[];let Rt=null;function Nt(e=!1){It.push(Rt=e?null:[])}function Bt(){It.pop(),Rt=It[It.length-1]||null}let zt=1;function kt(e){zt+=e}function Ft(e){return e.dynamicChildren=zt>0?Rt||r.Z6:null,Bt(),zt>0&&Rt&&Rt.push(e),e}function Ut(e,t,n,i,r,s){return Ft(qt(e,t,n,i,r,s,!0))}function Ht(e){return!!e&&!0===e.__v_isVNode}function Vt(e,t){return e.type===t.type&&e.key===t.key}const Gt="__vInternal",jt=({key:e})=>null!=e?e:null,Wt=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,r.HD)(e)||(0,i.dq)(e)||(0,r.mf)(e)?{i:z,r:e,k:t,f:!!n}:e:null;function qt(e,t=null,n=null,i=0,s=null,a=(e===Dt?0:1),o=!1,l=!1){const h={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&jt(t),ref:t&&Wt(t),scopeId:k,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return l?(en(h,n),128&a&&e.normalize(h)):n&&(h.shapeFlag|=(0,r.HD)(n)?8:16),zt>0&&!o&&Rt&&(h.patchFlag>0||6&a)&&32!==h.patchFlag&&Rt.push(h),h}const Xt=Yt;function Yt(e,t=null,n=null,s=0,a=null,o=!1){if(e&&e!==Be||(e=Lt),Ht(e)){const i=Kt(e,t,!0);return n&&en(i,n),zt>0&&!o&&Rt&&(6&i.shapeFlag?Rt[Rt.indexOf(e)]=i:Rt.push(i)),i.patchFlag|=-2,i}if(Sn(e)&&(e=e.__vccOpts),t){t=Qt(t);let{class:e,style:n}=t;e&&!(0,r.HD)(e)&&(t.class=(0,r.C_)(e)),(0,r.Kn)(n)&&((0,i.X3)(n)&&!(0,r.kJ)(n)&&(n=(0,r.l7)({},n)),t.style=(0,r.j5)(n))}const l=(0,r.HD)(e)?1:X(e)?128:Ct(e)?64:(0,r.Kn)(e)?4:(0,r.mf)(e)?2:0;return qt(e,t,n,s,a,l,o,!0)}function Qt(e){return e?(0,i.X3)(e)||Gt in e?(0,r.l7)({},e):e:null}function Kt(e,t,n=!1){const{props:i,ref:s,patchFlag:a,children:o}=e,l=t?tn(i||{},t):i,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&jt(l),ref:t&&t.ref?n&&s?(0,r.kJ)(s)?s.concat(Wt(t)):[s,Wt(t)]:Wt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Dt?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Kt(e.ssContent),ssFallback:e.ssFallback&&Kt(e.ssFallback),el:e.el,anchor:e.anchor};return h}function Jt(e=" ",t=0){return Xt(Pt,null,e,t)}function Zt(e){return null==e||"boolean"===typeof e?Xt(Lt):(0,r.kJ)(e)?Xt(Dt,null,e.slice()):"object"===typeof e?$t(e):Xt(Pt,null,String(e))}function $t(e){return null===e.el||e.memo?e:Kt(e)}function en(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if((0,r.kJ)(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),en(e,n()),n._c&&(n._d=!0)))}{n=32;const i=t._;i||Gt in t?3===i&&z&&(1===z.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=z}}else(0,r.mf)(t)?(t={default:t,_ctx:z},n=32):(t=String(t),64&i?(n=16,t=[Jt(t)]):n=8);e.children=t,e.shapeFlag|=n}function tn(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=(0,r.C_)([t.class,i.class]));else if("style"===e)t.style=(0,r.j5)([t.style,i.style]);else if((0,r.F7)(e)){const n=t[e],s=i[e];!s||n===s||(0,r.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=i[e])}return t}function nn(e,t,n,i=null){a(e,t,7,[n,i])}const rn=vt();let sn=0;function an(e,t,n){const s=e.type,a=(t?t.appContext:e.appContext)||rn,o={uid:sn++,vnode:e,type:s,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new i.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:st(s,a),emitsOptions:N(s,a),emit:null,emitted:null,propsDefaults:r.kT,inheritAttrs:s.inheritAttrs,ctx:r.kT,data:r.kT,props:r.kT,attrs:r.kT,slots:r.kT,refs:r.kT,setupState:r.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=R.bind(null,o),e.ce&&e.ce(o),o}let on=null;const ln=()=>on||z,hn=e=>{on=e,e.scope.on()},cn=()=>{on&&on.scope.off(),on=null};function un(e){return 4&e.vnode.shapeFlag}let dn,pn,fn=!1;function mn(e,t=!1){fn=t;const{props:n,children:i}=e.vnode,r=un(e);tt(e,n,r,t),mt(e,i);const s=r?gn(e,t):void 0;return fn=!1,s}function gn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,i.Xl)(new Proxy(e.ctx,Ue));const{setup:a}=n;if(a){const n=e.setupContext=a.length>1?_n(e):null;hn(e),(0,i.Jd)();const l=s(a,e,0,[e.props,n]);if((0,i.lk)(),cn(),(0,r.tI)(l)){if(l.then(cn,cn),t)return l.then((n=>{vn(e,n,t)})).catch((t=>{o(t,e,0)}));e.asyncDep=l}else vn(e,l,t)}else yn(e,t)}function vn(e,t,n){(0,r.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,r.Kn)(t)&&(e.setupState=(0,i.WL)(t)),yn(e,n)}function yn(e,t,n){const s=e.type;if(!e.render){if(!t&&dn&&!s.render){const t=s.template;if(t){0;const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:o}=s,l=(0,r.l7)((0,r.l7)({isCustomElement:n,delimiters:a},i),o);s.render=dn(t,l)}}e.render=s.render||r.dG,pn&&pn(e)}hn(e),(0,i.Jd)(),Ve(e),(0,i.lk)(),cn()}function xn(e){return new Proxy(e.attrs,{get(t,n){return(0,i.j)(e,"get","$attrs"),t[n]}})}function _n(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=xn(e))},slots:e.slots,emit:e.emit,expose:t}}function wn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,i.WL)((0,i.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in Fe?Fe[n](e):void 0}}))}function bn(e,t=!0){return(0,r.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Sn(e){return(0,r.mf)(e)&&"__vccOpts"in e}const An=(e,t)=>(0,i.Fl)(e,t,fn);function Mn(e,t,n){const i=arguments.length;return 2===i?(0,r.Kn)(t)&&!(0,r.kJ)(t)?Ht(t)?Xt(e,null,[t]):Xt(e,t):Xt(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Ht(n)&&(n=[n]),Xt(e,t,n))}Symbol("");const En="3.2.37"},963:function(e,t,n){n.d(t,{nr:function(){return ne},ri:function(){return ae}});var i=n(577),r=n(252);n(262);const s="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,o=a&&a.createElement("template"),l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t?a.createElementNS(s,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&i&&null!=i.multiple&&r.setAttribute("multiple",i.multiple),r},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,i,r,s){const a=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling)){while(1)if(t.insertBefore(r.cloneNode(!0),n),r===s||!(r=r.nextSibling))break}else{o.innerHTML=i?`<svg>${e}</svg>`:e;const r=o.content;if(i){const e=r.firstChild;while(e.firstChild)r.appendChild(e.firstChild);r.removeChild(e)}t.insertBefore(r,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function h(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function c(e,t,n){const r=e.style,s=(0,i.HD)(n);if(n&&!s){for(const e in n)d(r,e,n[e]);if(t&&!(0,i.HD)(t))for(const e in t)null==n[e]&&d(r,e,"")}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const u=/\s*!important$/;function d(e,t,n){if((0,i.kJ)(n))n.forEach((n=>d(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=m(e,t);u.test(n)?e.setProperty((0,i.rs)(r),n.replace(u,""),"important"):e[r]=n}}const p=["Webkit","Moz","ms"],f={};function m(e,t){const n=f[t];if(n)return n;let r=(0,i._A)(t);if("filter"!==r&&r in e)return f[t]=r;r=(0,i.kC)(r);for(let i=0;i<p.length;i++){const n=p[i]+r;if(n in e)return f[t]=n}return t}const g="http://www.w3.org/1999/xlink";function v(e,t,n,r,s){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const r=(0,i.Pq)(t);null==n||r&&!(0,i.yA)(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function y(e,t,n,r,s,a,o){if("innerHTML"===t||"textContent"===t)return r&&o(r,s,a),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const i=null==n?"":n;return e.value===i&&"OPTION"!==e.tagName||(e.value=i),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.yA)(n):null==n&&"string"===r?(n="",l=!0):"number"===r&&(n=0,l=!0)}try{e[t]=n}catch(h){0}l&&e.removeAttribute(t)}const[x,_]=(()=>{let e=Date.now,t=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let w=0;const b=Promise.resolve(),S=()=>{w=0},A=()=>w||(b.then(S),w=x());function M(e,t,n,i){e.addEventListener(t,n,i)}function E(e,t,n,i){e.removeEventListener(t,n,i)}function T(e,t,n,i,r=null){const s=e._vei||(e._vei={}),a=s[t];if(i&&a)a.value=i;else{const[n,o]=D(t);if(i){const a=s[t]=P(i,r);M(e,n,a,o)}else a&&(E(e,n,a,o),s[t]=void 0)}}const C=/(?:Once|Passive|Capture)$/;function D(e){let t;if(C.test(e)){let n;t={};while(n=e.match(C))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[(0,i.rs)(e.slice(2)),t]}function P(e,t){const n=e=>{const i=e.timeStamp||x();(_||i>=n.attached-1)&&(0,r.$d)(L(e,n.value),t,5,[e])};return n.value=e,n.attached=A(),n}function L(e,t){if((0,i.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const O=/^on[a-z]/,I=(e,t,n,r,s=!1,a,o,l,u)=>{"class"===t?h(e,r,s):"style"===t?c(e,n,r):(0,i.F7)(t)?(0,i.tR)(t)||T(e,t,n,r,o):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):R(e,t,r,s))?y(e,t,r,a,o,l,u):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),v(e,t,r,s))};function R(e,t,n,r){return r?"innerHTML"===t||"textContent"===t||!!(t in e&&O.test(t)&&(0,i.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!O.test(t)||!(0,i.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const N="transition",B="animation",z=(e,{slots:t})=>(0,r.h)(r.P$,H(e),t);z.displayName="Transition";const k={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F=(z.props=(0,i.l7)({},r.P$.props,k),(e,t=[])=>{(0,i.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),U=e=>!!e&&((0,i.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function H(e){const t={};for(const i in e)i in k||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:s,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:h=a,appearActiveClass:c=o,appearToClass:u=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=e,m=V(s),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:x,onEnterCancelled:_,onLeave:w,onLeaveCancelled:b,onBeforeAppear:S=y,onAppear:A=x,onAppearCancelled:M=_}=t,E=(e,t,n)=>{W(e,t?u:l),W(e,t?c:o),n&&n()},T=(e,t)=>{e._isLeaving=!1,W(e,d),W(e,f),W(e,p),t&&t()},C=e=>(t,n)=>{const i=e?A:x,s=()=>E(t,e,n);F(i,[t,s]),q((()=>{W(t,e?h:a),j(t,e?u:l),U(i)||Y(t,r,g,s)}))};return(0,i.l7)(t,{onBeforeEnter(e){F(y,[e]),j(e,a),j(e,o)},onBeforeAppear(e){F(S,[e]),j(e,h),j(e,c)},onEnter:C(!1),onAppear:C(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>T(e,t);j(e,d),Z(),j(e,p),q((()=>{e._isLeaving&&(W(e,d),j(e,f),U(w)||Y(e,r,v,n))})),F(w,[e,n])},onEnterCancelled(e){E(e,!1),F(_,[e])},onAppearCancelled(e){E(e,!0),F(M,[e])},onLeaveCancelled(e){T(e),F(b,[e])}})}function V(e){if(null==e)return null;if((0,i.Kn)(e))return[G(e.enter),G(e.leave)];{const t=G(e);return[t,t]}}function G(e){const t=(0,i.He)(e);return t}function j(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function W(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function q(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let X=0;function Y(e,t,n,i){const r=e._endId=++X,s=()=>{r===e._endId&&i()};if(n)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=Q(e,t);if(!a)return i();const h=a+"end";let c=0;const u=()=>{e.removeEventListener(h,d),s()},d=t=>{t.target===e&&++c>=l&&u()};setTimeout((()=>{c<l&&u()}),o+1),e.addEventListener(h,d)}function Q(e,t){const n=window.getComputedStyle(e),i=e=>(n[e]||"").split(", "),r=i(N+"Delay"),s=i(N+"Duration"),a=K(r,s),o=i(B+"Delay"),l=i(B+"Duration"),h=K(o,l);let c=null,u=0,d=0;t===N?a>0&&(c=N,u=a,d=s.length):t===B?h>0&&(c=B,u=h,d=l.length):(u=Math.max(a,h),c=u>0?a>h?N:B:null,d=c?c===N?s.length:l.length:0);const p=c===N&&/\b(transform|all)(,|$)/.test(n[N+"Property"]);return{type:c,timeout:u,propCount:d,hasTransform:p}}function K(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>J(t)+J(e[n]))))}function J(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Z(){return document.body.offsetHeight}new WeakMap,new WeakMap;const $=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.kJ)(t)?e=>(0,i.ir)(t,e):t};function ee(e){e.target.composing=!0}function te(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ne={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=$(s);const a=r||s.props&&"number"===s.props.type;M(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),a&&(r=(0,i.He)(r)),e._assign(r)})),n&&M(e,"change",(()=>{e.value=e.value.trim()})),t||(M(e,"compositionstart",ee),M(e,"compositionend",te),M(e,"change",te))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},a){if(e._assign=$(a),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(r&&e.value.trim()===t)return;if((s||"number"===e.type)&&(0,i.He)(e.value)===t)return}const o=null==t?"":t;e.value!==o&&(e.value=o)}};const ie=(0,i.l7)({patchProp:I},l);let re;function se(){return re||(re=(0,r.Us)(ie))}const ae=(...e)=>{const t=se().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=oe(e);if(!r)return;const s=t._component;(0,i.mf)(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const a=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},t};function oe(e){if((0,i.HD)(e)){const t=document.querySelector(e);return t}return e}},577:function(e,t,n){function i(e,t){const n=Object.create(null),i=e.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:function(){return p},DM:function(){return O},E9:function(){return ie},F7:function(){return A},Gg:function(){return j},HD:function(){return N},He:function(){return te},Kn:function(){return z},NO:function(){return b},Nj:function(){return ee},Od:function(){return T},PO:function(){return V},Pq:function(){return o},RI:function(){return D},S0:function(){return G},W7:function(){return H},WV:function(){return m},Z6:function(){return _},_A:function(){return X},_N:function(){return L},aU:function(){return Z},dG:function(){return w},e1:function(){return s},fY:function(){return i},hR:function(){return J},hq:function(){return g},ir:function(){return $},j5:function(){return h},kC:function(){return K},kJ:function(){return P},kT:function(){return x},l7:function(){return E},mf:function(){return R},rs:function(){return Q},tI:function(){return k},tR:function(){return M},yA:function(){return l},yk:function(){return B},zw:function(){return v}});const r="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=i(r);const a="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",o=i(a);function l(e){return!!e||""===e}function h(e){if(P(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=N(i)?d(i):h(i);if(r)for(const e in r)t[e]=r[e]}return t}return N(e)||z(e)?e:void 0}const c=/;(?![^(]*\))/g,u=/:(.+)/;function d(e){const t={};return e.split(c).forEach((e=>{if(e){const n=e.split(u);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function p(e){let t="";if(N(e))t=e;else if(P(e))for(let n=0;n<e.length;n++){const i=p(e[n]);i&&(t+=i+" ")}else if(z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function f(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=m(e[i],t[i]);return n}function m(e,t){if(e===t)return!0;let n=I(e),i=I(t);if(n||i)return!(!n||!i)&&e.getTime()===t.getTime();if(n=B(e),i=B(t),n||i)return e===t;if(n=P(e),i=P(t),n||i)return!(!n||!i)&&f(e,t);if(n=z(e),i=z(t),n||i){if(!n||!i)return!1;const r=Object.keys(e).length,s=Object.keys(t).length;if(r!==s)return!1;for(const n in e){const i=e.hasOwnProperty(n),r=t.hasOwnProperty(n);if(i&&!r||!i&&r||!m(e[n],t[n]))return!1}}return String(e)===String(t)}function g(e,t){return e.findIndex((e=>m(e,t)))}const v=e=>N(e)?e:null==e?"":P(e)||z(e)&&(e.toString===F||!R(e.toString))?JSON.stringify(e,y,2):String(e),y=(e,t)=>t&&t.__v_isRef?y(e,t.value):L(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:O(t)?{[`Set(${t.size})`]:[...t.values()]}:!z(t)||P(t)||V(t)?t:String(t),x={},_=[],w=()=>{},b=()=>!1,S=/^on[^a-z]/,A=e=>S.test(e),M=e=>e.startsWith("onUpdate:"),E=Object.assign,T=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},C=Object.prototype.hasOwnProperty,D=(e,t)=>C.call(e,t),P=Array.isArray,L=e=>"[object Map]"===U(e),O=e=>"[object Set]"===U(e),I=e=>"[object Date]"===U(e),R=e=>"function"===typeof e,N=e=>"string"===typeof e,B=e=>"symbol"===typeof e,z=e=>null!==e&&"object"===typeof e,k=e=>z(e)&&R(e.then)&&R(e.catch),F=Object.prototype.toString,U=e=>F.call(e),H=e=>U(e).slice(8,-1),V=e=>"[object Object]"===U(e),G=e=>N(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,j=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),W=e=>{const t=Object.create(null);return n=>{const i=t[n];return i||(t[n]=e(n))}},q=/-(\w)/g,X=W((e=>e.replace(q,((e,t)=>t?t.toUpperCase():"")))),Y=/\B([A-Z])/g,Q=W((e=>e.replace(Y,"-$1").toLowerCase())),K=W((e=>e.charAt(0).toUpperCase()+e.slice(1))),J=W((e=>e?`on${K(e)}`:"")),Z=(e,t)=>!Object.is(e,t),$=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const ie=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},503:function(e,t,n){var i=n(816),r="firebase",s="9.9.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.KN)(r,s,"app")},65:function(e,t,n){var i=n(444),r=n(816);function s(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;var a=n(333),o=n(463);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h=l,c=new i.LL("auth","Firebase",l()),u=new a.Yd("@firebase/auth");function d(e,...t){u.logLevel<=a["in"].ERROR&&u.error(`Auth (${r.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw g(e,...t)}function f(e,...t){return g(e,...t)}function m(e,t,n){const r=Object.assign(Object.assign({},h()),{[t]:n}),s=new i.LL("auth","Firebase",r);return s.create(t,{appName:e.name})}function g(e,...t){if("string"!==typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return c.create(e,...t)}function v(e,t,...n){if(!e)throw g(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function x(e,t){e||y(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=new Map;function w(e){x(e instanceof Function,"Expected a class definition");let t=_.get(e);return t?(x(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return"http:"===A()||"https:"===A()}function A(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function E(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e,t){this.shortDelay=e,this.longDelay=t,x(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return M()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){x(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},L=new T(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function I(e,t,n,r,s={}){return R(e,s,(async()=>{let s={},a={};r&&("GET"===t?a=r:s={body:JSON.stringify(r)});const o=(0,i.xO)(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),D.fetch()(B(e,e.config.apiHost,n,o),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))}))}async function R(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},P),t);try{const t=new z(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw k(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw k(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw k(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw k(e,"user-disabled",s);const o=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw m(e,o,a);p(e,o)}}catch(s){if(s instanceof i.ZR)throw s;p(e,"network-request-failed")}}async function N(e,t,n,i,r={}){const s=await I(e,t,n,i,r);return"mfaPendingCredential"in s&&p(e,"multi-factor-auth-required",{_serverResponse:s}),s}function B(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?C(e.config,r):`${e.config.apiScheme}://${r}`}class z{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(f(this.auth,"network-request-failed"))),L.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function k(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=f(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F(e,t){return I(e,"POST","/v1/accounts:delete",t)}async function U(e,t){return I(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t=!1){const n=(0,i.m9)(e),r=await n.getIdToken(t),s=j(r);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const a="object"===typeof s.firebase?s.firebase:void 0,o=null===a||void 0===a?void 0:a["sign_in_provider"];return{claims:s,token:r,authTime:H(G(s.auth_time)),issuedAtTime:H(G(s.iat)),expirationTime:H(G(s.exp)),signInProvider:o||null,signInSecondFactor:(null===a||void 0===a?void 0:a["sign_in_second_factor"])||null}}function G(e){return 1e3*Number(e)}function j(e){var t;const[n,r,s]=e.split(".");if(void 0===n||void 0===r||void 0===s)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.tV)(r);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(a){return d("Caught error parsing JWT payload as JSON",null===(t=a)||void 0===t?void 0:t.toString()),null}}function W(e){const t=j(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.ZR&&X(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function X({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e){var t;const n=e.auth,i=await e.getIdToken(),r=await q(e,U(n,{idToken:i}));v(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?$(s.providerUserInfo):[],o=Z(e.providerData,a),l=e.isAnonymous,h=!(e.email&&s.passwordHash)&&!(null===o||void 0===o?void 0:o.length),c=!!l&&h,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Q(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,u)}async function J(e){const t=(0,i.m9)(e);await K(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Z(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function $(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e,t){const n=await R(e,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,a=B(e,r,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",D.fetch()(a,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):W(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await ee(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new te;return n&&(v("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(v("string"===typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(v("number"===typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new te,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ie{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Q(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await q(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return V(this,e)}reload(){return J(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ie(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await K(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await q(this,F(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,a,o,l,h;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(h=t.lastLoginAt)&&void 0!==h?h:void 0,{uid:x,emailVerified:_,isAnonymous:w,providerData:b,stsTokenManager:S}=t;v(x&&S,e,"internal-error");const A=te.fromJSON(this.name,S);v("string"===typeof x,e,"internal-error"),ne(c,e.name),ne(u,e.name),v("boolean"===typeof _,e,"internal-error"),v("boolean"===typeof w,e,"internal-error"),ne(d,e.name),ne(p,e.name),ne(f,e.name),ne(m,e.name),ne(g,e.name),ne(y,e.name);const M=new ie({uid:x,auth:e,email:u,emailVerified:_,displayName:c,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:A,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(M.providerData=b.map((e=>Object.assign({},e)))),m&&(M._redirectEventId=m),M}static async _fromIdTokenResponse(e,t,n=!1){const i=new te;i.updateFromServerResponse(t);const r=new ie({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await K(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}re.type="NONE";const se=re;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t,n){return`firebase:${e}:${t}:${n}`}class oe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ae(this.userKey,i.apiKey,r),this.fullPersistenceKey=ae("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ie._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new oe(w(se),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||w(se);const s=ae(n,e.config.apiKey,e.name);let a=null;for(const h of t)try{const t=await h._get(s);if(t){const n=ie._fromJSON(e,t);h!==r&&(a=n),r=h;break}}catch(l){}const o=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&o.length?(r=o[0],a&&await r._set(s,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(l){}}))),new oe(r,e,n)):new oe(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(de(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(fe(t))return"Blackberry";if(me(t))return"Webos";if(ce(t))return"Safari";if((t.includes("chrome/")||ue(t))&&!t.includes("edge/"))return"Chrome";if(pe(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=(0,i.z$)()){return/firefox\//i.test(e)}function ce(e=(0,i.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ue(e=(0,i.z$)()){return/crios\//i.test(e)}function de(e=(0,i.z$)()){return/iemobile/i.test(e)}function pe(e=(0,i.z$)()){return/android/i.test(e)}function fe(e=(0,i.z$)()){return/blackberry/i.test(e)}function me(e=(0,i.z$)()){return/webos/i.test(e)}function ge(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ve(){return(0,i.w1)()&&10===document.documentMode}function ye(e=(0,i.z$)()){return ge(e)||pe(e)||me(e)||fe(e)||/windows phone/i.test(e)||de(e)}function xe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e,t=[]){let n;switch(e){case"Browser":n=le((0,i.z$)());break;case"Worker":n=`${le((0,i.z$)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.Jn}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{const i=e(t);n(i)}catch(r){i(r)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(i){n.reverse();for(const e of n)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=i)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ae(this),this.idTokenSubscription=new Ae(this),this.beforeStateQueue=new we(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await oe.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===i||void 0===i?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==s||!(null===a||void 0===a?void 0:a.user)||(i=a.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await K(e)}catch(n){if("auth/network-request-failed"!==(null===(t=n)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=E()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.m9)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(w(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await oe.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"===typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_e(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Se(e){return(0,i.m9)(e)}class Ae{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ee(e,t){return I(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Te(e,t){return N(e,"POST","/v1/accounts:signInWithPassword",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ce(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",O(e,t))}async function De(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends Me{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Pe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Pe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Te(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ce(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ee(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return De(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(e,t){return N(e,"POST","/v1/accounts:signInWithIdp",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe="http://localhost";class Ie extends Me{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ie(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=s(t,["providerId","signInMethod"]);if(!n||!i)return null;const a=new Ie(n,i);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Le(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Le(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Le(e,t)}buildRequest(){const e={requestUri:Oe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(e,t){return I(e,"POST","/v1/accounts:sendVerificationCode",O(e,t))}async function Ne(e,t){return N(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,t))}async function Be(e,t){const n=await N(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,t));if(n.temporaryProof)throw k(e,"account-exists-with-different-credential",n);return n}const ze={["USER_NOT_FOUND"]:"user-not-found"};async function ke(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return N(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,n),ze)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends Me{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Fe({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Fe({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Ne(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Be(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ke(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new Fe({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function He(e){const t=(0,i.zd)((0,i.pd)(e))["link"],n=t?(0,i.zd)((0,i.pd)(t))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(e))["deep_link_id"],s=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return s||r||n||t||e}class Ve{constructor(e){var t,n,r,s,a,o;const l=(0,i.zd)((0,i.pd)(e)),h=null!==(t=l["apiKey"])&&void 0!==t?t:null,c=null!==(n=l["oobCode"])&&void 0!==n?n:null,u=Ue(null!==(r=l["mode"])&&void 0!==r?r:null);v(h&&c&&u,"argument-error"),this.apiKey=h,this.operation=u,this.code=c,this.continueUrl=null!==(s=l["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(a=l["languageCode"])&&void 0!==a?a:null,this.tenantId=null!==(o=l["tenantId"])&&void 0!==o?o:null}static parseLink(e){const t=He(e);try{return new Ve(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{constructor(){this.providerId=Ge.PROVIDER_ID}static credential(e,t){return Pe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ve.parseLink(t);return v(n,"argument-error"),Pe._fromEmailAndCode(e,n.code,n.tenantId)}}Ge.PROVIDER_ID="password",Ge.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ge.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class je{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends je{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qe extends We{constructor(){super("facebook.com")}static credential(e){return Ie._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return qe.credential(e.oauthAccessToken)}catch(t){return null}}}qe.FACEBOOK_SIGN_IN_METHOD="facebook.com",qe.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe extends We{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ie._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Xe.credential(t,n)}catch(i){return null}}}Xe.GOOGLE_SIGN_IN_METHOD="google.com",Xe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye extends We{constructor(){super("github.com")}static credential(e){return Ie._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ye.credential(e.oauthAccessToken)}catch(t){return null}}}Ye.GITHUB_SIGN_IN_METHOD="github.com",Ye.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe extends We{constructor(){super("twitter.com")}static credential(e,t){return Ie._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Qe.credential(t,n)}catch(i){return null}}}Qe.TWITTER_SIGN_IN_METHOD="twitter.com",Qe.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await ie._fromIdTokenResponse(e,n,i),s=Je(n),a=new Ke({user:r,providerId:s,_tokenResponse:n,operationType:t});return a}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Je(n);return new Ke({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Je(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze extends i.ZR{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ze.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Ze(e,t,n,i)}}function $e(e,t,n,i){const r="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ze._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e,t,n=!1){const i=await q(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ke._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function tt(e,t,n=!1){var i;const{auth:r}=e,s="reauthenticate";try{const i=await q(e,$e(r,s,t,e),n);v(i.idToken,r,"internal-error");const a=j(i.idToken);v(a,r,"internal-error");const{sub:o}=a;return v(e.uid===o,r,"user-mismatch"),Ke._forOperation(e,s,i)}catch(a){throw"auth/user-not-found"===(null===(i=a)||void 0===i?void 0:i.code)&&p(r,"user-mismatch"),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t,n=!1){const i="signIn",r=await $e(e,i,t),s=await Ke._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function it(e,t){return I(e,"POST","/v2/accounts/mfaEnrollment:start",O(e,t))}function rt(e,t){return I(e,"POST","/v2/accounts/mfaEnrollment:finalize",O(e,t))}new WeakMap;const st="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(st,"1"),this.storage.removeItem(st),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){const e=(0,i.z$)();return ce(e)||ge(e)}const lt=1e3,ht=10;class ct extends at{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ot()&&xe(),this.fallbackToPolling=ye(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);ve()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ht):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),lt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ct.type="LOCAL";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut extends at{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ut.type="SESSION";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new pt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const a=Array.from(s).map((async e=>e(t.origin,r))),o=await dt(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ft(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pt.receivers=[];class mt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((a,o)=>{const l=ft("",20);i.port1.start();const h=setTimeout((()=>{o(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(h),r=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),a(t.data.response);break;default:clearTimeout(h),clearTimeout(r),o(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vt(){return"undefined"!==typeof gt()["WorkerGlobalScope"]&&"function"===typeof gt()["importScripts"]}async function yt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function xt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function _t(){return vt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="firebaseLocalStorageDb",bt=1,St="firebaseLocalStorage",At="fbase_key";class Mt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Et(e,t){return e.transaction([St],t?"readwrite":"readonly").objectStore(St)}function Tt(){const e=indexedDB.deleteDatabase(wt);return new Mt(e).toPromise()}function Ct(){const e=indexedDB.open(wt,bt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(St,{keyPath:At})}catch(i){n(i)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(St)?t(n):(n.close(),await Tt(),t(await Ct()))}))}))}async function Dt(e,t,n){const i=Et(e,!0).put({[At]:t,value:n});return new Mt(i).toPromise()}async function Pt(e,t){const n=Et(e,!1).get(t),i=await new Mt(n).toPromise();return void 0===i?null:i.value}function Lt(e,t){const n=Et(e,!0).delete(t);return new Mt(n).toPromise()}const Ot=800,It=3;class Rt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ct()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>It)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pt._getInstance(_t()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await yt(),!this.activeServiceWorker)return;this.sender=new mt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&xt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ct();return await Dt(e,st,"1"),await Lt(e,st),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Dt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Pt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Lt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Et(e,!1).getAll();return new Mt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Ot)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Rt.type="LOCAL";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nt(e,t){return I(e,"POST","/v2/accounts/mfaSignIn:start",O(e,t))}function Bt(e,t){return I(e,"POST","/v2/accounts/mfaSignIn:finalize",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
zt("rcb"),new T(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kt="recaptcha";async function Ft(e,t,n){var i;const r=await n.verify();try{let s;if(v("string"===typeof r,e,"argument-error"),v(n.type===kt,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){v("enroll"===t.type,e,"internal-error");const n=await it(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;v(n,e,"missing-multi-factor-info");const a=await Nt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Re(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ut{constructor(e){this.providerId=Ut.PROVIDER_ID,this.auth=Se(e)}verifyPhoneNumber(e,t){return Ft(this.auth,e,(0,i.m9)(t))}static credential(e,t){return Fe._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ut.credentialFromTaggedObject(t)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Fe._fromTokenResponse(t,n):null}}Ut.PROVIDER_ID="phone",Ut.PHONE_SIGN_IN_METHOD="phone";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ht extends Me{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Le(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Le(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Le(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Vt(e){return nt(e.auth,new Ht(e),e.bypassAuthState)}function Gt(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),tt(n,new Ht(e),e.bypassAuthState)}async function jt(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),et(n,new Ht(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:a}=e;if(s)return void this.reject(s);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vt;case"linkViaPopup":case"linkViaRedirect":return jt;case"reauthViaPopup":case"reauthViaRedirect":return Gt;default:p(this.auth,"internal-error")}}resolve(e){x(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){x(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new T(2e3,1e4);class Xt extends Wt{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Xt.currentPopupAction&&Xt.currentPopupAction.cancel(),Xt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){x(1===this.filter.length,"Popup operations only handle one event");const e=ft();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(f(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(f(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(f(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,qt.get())};e()}}Xt.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Map;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new T(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new T(5e3,15e3),new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);class Yt{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class Qt extends Yt{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Qt(e)}_finalizeEnroll(e,t,n){return rt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Bt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Kt{constructor(){}static assertion(e){return Qt._fromCredential(e)}}Kt.FACTOR_ID="phone";var Jt="@firebase/auth",Zt="0.20.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $t{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tn(e){(0,r.Xd)(new o.wA("auth",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),{apiKey:s,authDomain:a}=i.options;return((t,i)=>{v(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null===a||void 0===a?void 0:a.includes(":")),"argument-error",{appName:t.name});const r={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_e(e)},o=new be(t,i,r);return b(o,n),o})(i,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const i=e.getProvider("auth-internal");i.initialize()}))),(0,r.Xd)(new o.wA("auth-internal",(e=>{const t=Se(e.getProvider("auth").getImmediate());return(e=>new $t(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KN)(Jt,Zt,en(e)),(0,r.KN)(Jt,Zt,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn("Browser")},744:function(e,t){t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[i,r]of t)n[i]=r;return n}},816:function(e,t,n){n.d(t,{Jn:function(){return de},Xd:function(){return he},KN:function(){return pe}});var i=n(463),r=n(333),s=n(444);const a=(e,t)=>t.some((t=>e instanceof t));let o,l;function h(){return o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function c(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const u=new WeakMap,d=new WeakMap,p=new WeakMap,f=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(b(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&u.set(t,e)})).catch((()=>{})),m.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||p.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return b(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function x(e){y=e(y)}function _(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?c().includes(e)?function(...t){return e.apply(S(this),t),b(u.get(this))}:function(...t){return b(e.apply(S(this),t))}:function(t,...n){const i=e.call(S(this),t,...n);return p.set(i,t.sort?t.sort():[t]),b(i)}}function w(e){return"function"===typeof e?_(e):(e instanceof IDBTransaction&&v(e),a(e,h())?new Proxy(e,y):e)}function b(e){if(e instanceof IDBRequest)return g(e);if(f.has(e))return f.get(e);const t=w(e);return t!==e&&(f.set(e,t),m.set(t,e)),t}const S=e=>m.get(e);function A(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const a=indexedDB.open(e,t),o=b(a);return i&&a.addEventListener("upgradeneeded",(e=>{i(b(a.result),e.oldVersion,e.newVersion,b(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),o.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),o}const M=["get","getKey","getAll","getAllKeys","count"],E=["put","add","delete","clear"],T=new Map;function C(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(T.get(t))return T.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=E.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!M.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let a=s.store;return i&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),r&&s.done]))[0]};return T.set(t,s),s}x((e=>({...e,get:(t,n,i)=>C(t,n)||e.get(t,n,i),has:(t,n)=>!!C(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(P(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function P(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const L="@firebase/app",O="0.7.29",I=new r.Yd("@firebase/app"),R="@firebase/app-compat",N="@firebase/analytics-compat",B="@firebase/analytics",z="@firebase/app-check-compat",k="@firebase/app-check",F="@firebase/auth",U="@firebase/auth-compat",H="@firebase/database",V="@firebase/database-compat",G="@firebase/functions",j="@firebase/functions-compat",W="@firebase/installations",q="@firebase/installations-compat",X="@firebase/messaging",Y="@firebase/messaging-compat",Q="@firebase/performance",K="@firebase/performance-compat",J="@firebase/remote-config",Z="@firebase/remote-config-compat",$="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",ie="firebase",re="9.9.1",se={[L]:"fire-core",[R]:"fire-core-compat",[B]:"fire-analytics",[N]:"fire-analytics-compat",[k]:"fire-app-check",[z]:"fire-app-check-compat",[F]:"fire-auth",[U]:"fire-auth-compat",[H]:"fire-rtdb",[V]:"fire-rtdb-compat",[G]:"fire-fn",[j]:"fire-fn-compat",[W]:"fire-iid",[q]:"fire-iid-compat",[X]:"fire-fcm",[Y]:"fire-fcm-compat",[Q]:"fire-perf",[K]:"fire-perf-compat",[J]:"fire-rc",[Z]:"fire-rc-compat",[$]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[ie]:"fire-js-all"},ae=new Map,oe=new Map;function le(e,t){try{e.container.addComponent(t)}catch(n){I.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function he(e){const t=e.name;if(oe.has(t))return I.debug(`There were multiple attempts to register component ${t}.`),!1;oe.set(t,e);for(const n of ae.values())le(n,e);return!0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ce={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ue=new s.LL("app","Firebase",ce);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de=re;function pe(e,t,n){var r;let s=null!==(r=se[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const a=s.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const e=[`Unable to register library "${s}" with version "${t}":`];return a&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void I.warn(e.join(" "))}he(new i.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fe="firebase-heartbeat-database",me=1,ge="firebase-heartbeat-store";let ve=null;function ye(){return ve||(ve=A(fe,me,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ge)}}}).catch((e=>{throw ue.create("storage-open",{originalErrorMessage:e.message})}))),ve}async function xe(e){var t;try{const t=await ye();return t.transaction(ge).objectStore(ge).get(we(e))}catch(n){throw ue.create("storage-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message})}}async function _e(e,t){var n;try{const n=await ye(),i=n.transaction(ge,"readwrite"),r=i.objectStore(ge);return await r.put(t,we(e)),i.done}catch(i){throw ue.create("storage-set",{originalErrorMessage:null===(n=i)||void 0===n?void 0:n.message})}}function we(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be=1024,Se=2592e6;class Ae{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Te(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Me();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Se})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Me(),{heartbeatsToSend:t,unsentEntries:n}=Ee(this._heartbeatsCache.heartbeats),i=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Me(){const e=new Date;return e.toISOString().substring(0,10)}function Ee(e,t=be){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Ce(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ce(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Te{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await xe(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return _e(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return _e(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ce(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){he(new i.wA("platform-logger",(e=>new D(e)),"PRIVATE")),he(new i.wA("heartbeat",(e=>new Ae(e)),"PRIVATE")),pe(L,O,e),pe(L,O,"esm2017"),pe("fire-js","")}De("")},463:function(e,t,n){n.d(t,{wA:function(){return i}});n(444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */},333:function(e,t,n){n.d(t,{Yd:function(){return h},in:function(){return r}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//# sourceMappingURL=chunk-vendors.5eab9da4.js.map