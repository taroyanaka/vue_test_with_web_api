(function(){"use strict";var t={943:function(t,n,o){var e=o(963),a=o(252),i=o(577);function r(t,n,o,r,l,u){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("button",{onClick:n[0]||(n[0]=(...t)=>u.fetch_data&&u.fetch_data(...t))},"fetch_data"),(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=t=>l.info=t)},null,512),[[e.nr,l.info]]),(0,a._)("button",{onClick:n[2]||(n[2]=(...t)=>u.insert&&u.insert(...t))},"insert"),(0,a._)("button",{onClick:n[3]||(n[3]=(...t)=>u.readall&&u.readall(...t))},"readall"),(0,a._)("h1",null,(0,i.zw)(l.foo_data),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.db_list,(t=>((0,a.wg)(),(0,a.iD)("ul",null,[(0,a._)("li",null,(0,i.zw)(t.id)+": "+(0,i.zw)(t.info),1)])))),256)),(0,a._)("h1",null,(0,i.zw)(l.db_log),1)],64)}let l,u,f="";f="http://localhost:8800";var c={data(){return{foo_data:"FOO123",info:"",db_list:null,db_log:""}},methods:{async fetch_data(){l=await fetch(f),u=await l.json(),console.log(u),this.foo_data=await u["id"]},async insert(){l=await fetch(f+"/insert?info="+this.info),u=await l.json(),console.table(u),this.db_log=await u["data"]},async readall(){l=await fetch(f+"/readall"),u=await l.json(),console.table(u),this.db_log=await u["data"]}}},s=o(744);const d=(0,s.Z)(c,[["render",r]]);var h=d;(0,e.ri)(h).mount("#app")}},n={};function o(e){var a=n[e];if(void 0!==a)return a.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(n,e,a,i){if(!e){var r=1/0;for(c=0;c<t.length;c++){e=t[c][0],a=t[c][1],i=t[c][2];for(var l=!0,u=0;u<e.length;u++)(!1&i||r>=i)&&Object.keys(o.O).every((function(t){return o.O[t](e[u])}))?e.splice(u--,1):(l=!1,i<r&&(r=i));if(l){t.splice(c--,1);var f=a();void 0!==f&&(n=f)}}return n}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[e,a,i]}}(),function(){o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};o.O.j=function(n){return 0===t[n]};var n=function(n,e){var a,i,r=e[0],l=e[1],u=e[2],f=0;if(r.some((function(n){return 0!==t[n]}))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(u)var c=u(o)}for(n&&n(e);f<r.length;f++)i=r[f],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(c)},e=self["webpackChunkweb_api_test"]=self["webpackChunkweb_api_test"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(943)}));e=o.O(e)})();
//# sourceMappingURL=app.380ab46c.js.map