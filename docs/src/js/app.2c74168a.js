(function(){"use strict";var t={572:function(t,n,e){var a=e(963),i=e(252),o=e(577);const l={class:"deleteid"},r=["onUpdate:modelValue"],s=["onClick"],d=["onClick"];function c(t,n,e,c,u,_){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("span",null,(0,o.zw)(u.error_log),1),(0,i._)("button",{onClick:n[0]||(n[0]=(...t)=>_.fetch_data&&_.fetch_data(...t))},"fetch_data"),(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=t=>u.info=t),required:"required",minlength:"1",maxlength:"30"},null,512),[[a.nr,u.info]]),(0,i._)("button",{onClick:n[2]||(n[2]=(...t)=>_.insert&&_.insert(...t))},"insert"),(0,i._)("button",{onClick:n[3]||(n[3]=(...t)=>_.readall&&_.readall(...t))},"readall"),(0,i._)("h1",null,(0,o.zw)(u.foo_data),1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(u.db_list,(t=>((0,i.wg)(),(0,i.iD)("ul",null,[(0,i._)("li",l,(0,o.zw)(t.id)+":",1),(0,i.wy)((0,i._)("input",{type:"text",class:"deleteid info","onUpdate:modelValue":n=>t.info=n,required:"required",minlength:"1",maxlength:"30"},null,8,r),[[a.nr,t.info]]),(0,i._)("button",{class:"update",onClick:n=>_.update(t.id,t.info)},"update",8,s),(0,i._)("button",{class:"deleteid",onClick:n=>_.deleteid(t.id)},"deleteid",8,d)])))),256)),(0,i._)("h1",null,(0,o.zw)(u.db_log),1)],64)}let u="";u="https://marred-mint-art.glitch.me";var _={data(){return{foo_data:"FOO123",info:"",db_list:null,db_log:"",error_log:""}},methods:{async async_await_fetch_json_log_assign(t,n,e){const a=await fetch(t),i=await a.json();if(console.table(i),"success"===i.message)for(const o of n)this[o]=i[e]},async fetch_data(){await this.async_await_fetch_json_log_assign(u,["foo_data"],"id")},async insert(){await this.async_await_fetch_json_log_assign(u+"/insert?info="+this.info,["db_log","db_list"],"data")},async deleteid(t){await this.async_await_fetch_json_log_assign(u+"/deleteid?id="+t,["db_log","db_list"],"data")},async update(t,n){await this.async_await_fetch_json_log_assign(u+"/update?id="+t+"&info="+n,["db_log","db_list"],"data")},async readall(){await this.async_await_fetch_json_log_assign(u+"/readall",["db_log","db_list"],"data")}}},f=e(744);const h=(0,f.Z)(_,[["render",c]]);var g=h;(0,a.ri)(g).mount("#app")}},n={};function e(a){var i=n[a];if(void 0!==i)return i.exports;var o=n[a]={exports:{}};return t[a](o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,a,i,o){if(!a){var l=1/0;for(c=0;c<t.length;c++){a=t[c][0],i=t[c][1],o=t[c][2];for(var r=!0,s=0;s<a.length;s++)(!1&o||l>=o)&&Object.keys(e.O).every((function(t){return e.O[t](a[s])}))?a.splice(s--,1):(r=!1,o<l&&(l=o));if(r){t.splice(c--,1);var d=i();void 0!==d&&(n=d)}}return n}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[a,i,o]}}(),function(){e.d=function(t,n){for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,a){var i,o,l=a[0],r=a[1],s=a[2],d=0;if(l.some((function(n){return 0!==t[n]}))){for(i in r)e.o(r,i)&&(e.m[i]=r[i]);if(s)var c=s(e)}for(n&&n(a);d<l.length;d++)o=l[d],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(c)},a=self["webpackChunkweb_api_test"]=self["webpackChunkweb_api_test"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(572)}));a=e.O(a)})();
//# sourceMappingURL=app.2c74168a.js.map