(function(){"use strict";var t={257:function(t,e,n){var i=n(963),a=n(252),o=n(577);const l={class:"deleteid"},r=["onUpdate:modelValue"],s=["onClick"],u=["onClick"];function c(t,e,n,c,d,_){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("img",{src:"/google_signin_buttons/web/2x/btn_google_signin_light_normal_web@2x.png",class:"login",value:"googleLogin",onClick:e[0]||(e[0]=(...t)=>_.toggleSignIn&&_.toggleSignIn(...t))}),(0,a._)("button",{onClick:e[1]||(e[1]=(...t)=>_.debug&&_.debug(...t))},"debug"),(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.login_data,((t,e,n)=>((0,a.wg)(),(0,a.iD)("li",null,[(0,a._)("div",null,(0,o.zw)(e)+" is: "+(0,o.zw)(t),1)])))),256))]),(0,a._)("h1",null,"now you are: "+(0,o.zw)(d.is_logging_in?"loggin in":"not loggin in"),1),(0,a._)("h1",null,"login_data is:"+(0,o.zw)(d.login_data),1),(0,a._)("h1",null,"login_error is: "+(0,o.zw)(d.login_error),1),(0,a._)("button",{onClick:e[2]||(e[2]=(...t)=>_.fetch_data&&_.fetch_data(...t))},"fetch_data"),(0,a.wy)((0,a._)("input",{class:"insert",type:"text","onUpdate:modelValue":e[3]||(e[3]=t=>d.info=t),minlength:"1",maxlength:"30",required:""},null,512),[[i.nr,d.info]]),(0,a._)("button",{onClick:e[4]||(e[4]=(...t)=>_.insert&&_.insert(...t)),class:(0,o.C_)({insert_button_class_for_initial_display_none:!0,insert_invalid:this.insert_validation_check()})},"insert",2),(0,a._)("button",{onClick:e[5]||(e[5]=(...t)=>_.readall&&_.readall(...t))},"readall"),(0,a._)("h1",null,(0,o.zw)(d.foo_data),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.db_list,(t=>((0,a.wg)(),(0,a.iD)("ul",null,[(0,a._)("li",l,(0,o.zw)(t.id)+":",1),(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e=>t.info=e,class:(0,o.C_)({update:!0,deleteid:!0,info:!0}),minlength:"1",maxlength:"30",required:""},null,8,r),[[i.nr,t.info]]),(0,a._)("button",{onClick:e=>_.update(t.id,t.info),class:(0,o.C_)({update_invalid:!!this.update_validation_check()})},"update",10,s),(0,a._)("button",{class:"deleteid",onClick:e=>_.deleteid(t.id)},"deleteid",8,u)])))),256)),(0,a._)("h1",null,(0,o.zw)(d.db_log),1)],64)}const d={apiKey:"AIzaSyBcOlIDP2KWbJuKM0WeMHNp-WvjTVfLt9Y",authDomain:"p2auth-ea50a.firebaseapp.com",projectId:"p2auth-ea50a",storageBucket:"p2auth-ea50a.appspot.com",messagingSenderId:"796225429484",appId:"1:796225429484:web:ece56ef2fc0be28cd6eac9"};firebase.initializeApp(d);let _="";_="http://localhost:8800";var g={data(){return{foo_data:"FOO123",info:"",db_list:null,db_log:"",my_uuid:null,login_result:null,is_logging_in:!1,login_data:null,login_error:null}},async created(){},async beforeMount(){},async mounted(){await this.initApp(),await this.debug()},async beforeUpdate(){},async updated(){},methods:{async async_await_fetch_json_log_assign(t,e,n){const i=await fetch(t),a=await i.json();if(console.table(a),"success"===a.message)for(const o of e)this[o]=a[n]},async fetch_data(){await this.async_await_fetch_json_log_assign(_,["foo_data"],"id")},async insert(){await this.async_await_fetch_json_log_assign(_+"/insert_2?lorem="+this.lorem,["db_log","db_list"],"data")},async deleteid(t,e){await this.async_await_fetch_json_log_assign(_+"/deleteid_2?id="+t+"&uuid="+e,["db_log","db_list"],"data")},async update(t,e,n){await this.async_await_fetch_json_log_assign(_+"/update_2?id="+t+"&lorem="+e+"&uuid="+n,["db_log","db_list"],"data")},async readall(){await this.async_await_fetch_json_log_assign(_+"/readall_2",["db_log","db_list"],"data")},insert_validation_check(){return Array.from(document.querySelectorAll("input.insert")).map((t=>t.validity.valid)).some((t=>!1===t))},update_validation_check(){return Array.from(document.querySelectorAll("input.update")).map((t=>t.validity.valid)).some((t=>!1===t))},async debug(){console.log("onAuthStateChanged is this????? in debug()"),await console.table([this.login_result,this.login_data,this.login_error])},async firebase_auth_signOut_and_all_login_property_clear(){const t=()=>{this.login_result=null,this.is_logging_in=!1,this.login_data=null,this.login_error=null};await firebase.auth().signOut(),t()},async toggleSignIn(){firebase.auth().currentUser?this.firebase_auth_signOut_and_all_login_property_clear():firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider)},async firebase_auth_getRedirectResult(){await firebase.auth().getRedirectResult().then((t=>{console.log("getRedirectResult is this?????"),this.login_result=t,this.is_logging_in=null!==t["user"]})).catch((t=>{this.is_logging_in=!1,this.login_error=t}))},async firebase_auth_onAuthStateChanged(){let t=this;const e=t=>{const e=["uid","displayName"];return R.fromPairs(e.map((e=>[e,t[e]])))};await firebase.auth().onAuthStateChanged((n=>{console.log("onAuthStateChanged is this?????"),n&&(t.login_data=e(n)),n&&(t.is_logging_in=!0)}))},async initApp(){await this.firebase_auth_getRedirectResult(),await this.firebase_auth_onAuthStateChanged()}}},f=n(744);const h=(0,f.Z)(g,[["render",c]]);var p=h,b=(n(65),n(503),n(249));const y=document.getElementById("canvas3d"),w=new b.M(y);w.load("https://prod.spline.design/boBKUc6iZaWw0Vwa/scene.splinecode"),(0,i.ri)(p).mount("#app")}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,a,o){if(!i){var l=1/0;for(c=0;c<t.length;c++){i=t[c][0],a=t[c][1],o=t[c][2];for(var r=!0,s=0;s<i.length;s++)(!1&o||l>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[s])}))?i.splice(s--,1):(r=!1,o<l&&(l=o));if(r){t.splice(c--,1);var u=a();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[i,a,o]}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"src/js/"+t+".9c6f8383.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="web_api_test:";n.l=function(i,a,o,l){if(t[i])t[i].push(a);else{var r,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==e+o){r=d;break}}r||(s=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",e+o),r.src=i),t[i]=[a];var _=function(e,n){r.onerror=r.onload=null,clearTimeout(g);var a=t[i];if(delete t[i],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(t){return t(n)})),e)return e(n)},g=setTimeout(_.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=_.bind(null,r.onerror),r.onload=_.bind(null,r.onload),s&&document.head.appendChild(r)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t={143:0};n.f.j=function(e,i){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)i.push(a[2]);else{var o=new Promise((function(n,i){a=t[e]=[n,i]}));i.push(a[2]=o);var l=n.p+n.u(e),r=new Error,s=function(i){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var o=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.src;r.message="Loading chunk "+e+" failed.\n("+o+": "+l+")",r.name="ChunkLoadError",r.type=o,r.request=l,a[1](r)}};n.l(l,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,o,l=i[0],r=i[1],s=i[2],u=0;if(l.some((function(e){return 0!==t[e]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(s)var c=s(n)}for(e&&e(i);u<l.length;u++)o=l[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},i=self["webpackChunkweb_api_test"]=self["webpackChunkweb_api_test"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(257)}));i=n.O(i)})();
//# sourceMappingURL=app.31342bb8.js.map