(function(){"use strict";var t={12:function(t,n,a){var e=a(963),i=a(252),o=a(577);const l={class:"deleteid"},r=["onUpdate:modelValue"],s=["onClick"],d=["onClick"];function c(t,n,a,c,u,_){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("span",null,(0,o.zw)(u.error_log),1),(0,i._)("button",{onClick:n[0]||(n[0]=(...t)=>_.fetch_data&&_.fetch_data(...t))},"fetch_data"),(0,i.wy)((0,i._)("input",{type:"text",onInput:n[1]||(n[1]=t=>_.valid_info(t)),"onUpdate:modelValue":n[2]||(n[2]=t=>u.info=t)},null,544),[[e.nr,u.info]]),(0,i._)("button",{onClick:n[3]||(n[3]=(...t)=>_.insert&&_.insert(...t))},"insert"),(0,i._)("button",{onClick:n[4]||(n[4]=(...t)=>_.readall&&_.readall(...t))},"readall"),(0,i._)("h1",null,(0,o.zw)(u.foo_data),1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(u.db_list,(t=>((0,i.wg)(),(0,i.iD)("ul",null,[(0,i._)("li",l,(0,o.zw)(t.id)+":",1),(0,i.wy)((0,i._)("input",{type:"text",class:"deleteid info","onUpdate:modelValue":n=>t.info=n},null,8,r),[[e.nr,t.info]]),(0,i._)("button",{class:"update",onClick:n=>_.update(t.id,t.info)},"update",8,s),(0,i._)("button",{class:"deleteid",onClick:n=>_.deleteid(t.id)},"deleteid",8,d)])))),256)),(0,i._)("h1",null,(0,o.zw)(u.db_log),1)],64)}let u="";u="https://marred-mint-art.glitch.me";var _={data(){return{foo_data:"FOO123",info:"",db_list:null,db_log:"",error_log:""}},methods:{valid_info(t){console.table(validator.isLength(t.target.value,{min:0,max:2})),this.error_log=validator.isLength(t.target.value,{min:0,max:2})?"":"error: isLength {min:0, max: 2}"},async async_await_fetch_json_log_assign(t,n,a){const e=await fetch(t),i=await e.json();console.table(i);for(const o of n)this[o]=i[a]},async fetch_data(){await this.async_await_fetch_json_log_assign(u,["foo_data"],"id")},async insert(){await this.async_await_fetch_json_log_assign(u+"/insert?info="+this.info,["db_log","db_list"],"data")},async deleteid(t){await this.async_await_fetch_json_log_assign(u+"/deleteid?id="+t,["db_log","db_list"],"data")},async update(t,n){await this.async_await_fetch_json_log_assign(u+"/update?id="+t+"&info="+n,["db_log","db_list"],"data")},async readall(){await this.async_await_fetch_json_log_assign(u+"/readall",["db_log","db_list"],"data")}}},f=a(744);const h=(0,f.Z)(_,[["render",c]]);var g=h;(0,e.ri)(g).mount("#app")}},n={};function a(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(n,e,i,o){if(!e){var l=1/0;for(c=0;c<t.length;c++){e=t[c][0],i=t[c][1],o=t[c][2];for(var r=!0,s=0;s<e.length;s++)(!1&o||l>=o)&&Object.keys(a.O).every((function(t){return a.O[t](e[s])}))?e.splice(s--,1):(r=!1,o<l&&(l=o));if(r){t.splice(c--,1);var d=i();void 0!==d&&(n=d)}}return n}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[e,i,o]}}(),function(){a.d=function(t,n){for(var e in n)a.o(n,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};a.O.j=function(n){return 0===t[n]};var n=function(n,e){var i,o,l=e[0],r=e[1],s=e[2],d=0;if(l.some((function(n){return 0!==t[n]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(s)var c=s(a)}for(n&&n(e);d<l.length;d++)o=l[d],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(c)},e=self["webpackChunkweb_api_test"]=self["webpackChunkweb_api_test"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=a.O(void 0,[998],(function(){return a(12)}));e=a.O(e)})();
//# sourceMappingURL=app.22919326.js.map