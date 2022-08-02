(function(){"use strict";var t={257:function(t,n,e){var i=e(963),a=e(252),l=e(577);const o={class:"deleteid"},s=["onUpdate:modelValue"],r=["onClick"],u=["onClick"];function _(t,n,e,_,c,d){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("img",{src:"/google_signin_buttons/web/2x/btn_google_signin_light_normal_web@2x.png",class:"login",value:"googleLogin",onClick:n[0]||(n[0]=(...t)=>d.toggleSignIn&&d.toggleSignIn(...t))}),(0,a._)("button",{onClick:n[1]||(n[1]=(...t)=>d.debug&&d.debug(...t))},"debug"),(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.login_data,((t,n,e)=>((0,a.wg)(),(0,a.iD)("li",null,[(0,a._)("div",null,(0,l.zw)(n)+" is: "+(0,l.zw)(t),1)])))),256))]),(0,a._)("h1",null,"now you are: "+(0,l.zw)(c.is_logging_in?"loggin in":"not loggin in"),1),(0,a._)("h1",null,"login_data is:"+(0,l.zw)(c.login_data),1),(0,a._)("h1",null,"login_error is: "+(0,l.zw)(c.login_error),1),(0,a._)("button",{onClick:n[2]||(n[2]=(...t)=>d.fetch_data&&d.fetch_data(...t))},"fetch_data"),(0,a.wy)((0,a._)("input",{class:"insert",type:"text","onUpdate:modelValue":n[3]||(n[3]=t=>c.info=t),minlength:"1",maxlength:"30",required:""},null,512),[[i.nr,c.info]]),(0,a._)("button",{onClick:n[4]||(n[4]=(...t)=>d.insert&&d.insert(...t)),class:(0,l.C_)({insert_button_class_for_initial_display_none:!0,insert_invalid:this.insert_validation_check()})},"insert",2),(0,a._)("button",{onClick:n[5]||(n[5]=(...t)=>d.readall&&d.readall(...t))},"readall"),(0,a._)("h1",null,(0,l.zw)(c.foo_data),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.db_list,(t=>((0,a.wg)(),(0,a.iD)("ul",null,[(0,a._)("li",o,(0,l.zw)(t.id)+":",1),(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":n=>t.info=n,class:(0,l.C_)({update:!0,deleteid:!0,info:!0}),minlength:"1",maxlength:"30",required:""},null,8,s),[[i.nr,t.info]]),(0,a._)("button",{onClick:n=>d.update(t.id,t.info),class:(0,l.C_)({update_invalid:!!this.update_validation_check()})},"update",10,r),(0,a._)("button",{class:"deleteid",onClick:n=>d.deleteid(t.id)},"deleteid",8,u)])))),256)),(0,a._)("h1",null,(0,l.zw)(c.db_log),1)],64)}const c={apiKey:"AIzaSyBcOlIDP2KWbJuKM0WeMHNp-WvjTVfLt9Y",authDomain:"p2auth-ea50a.firebaseapp.com",projectId:"p2auth-ea50a",storageBucket:"p2auth-ea50a.appspot.com",messagingSenderId:"796225429484",appId:"1:796225429484:web:ece56ef2fc0be28cd6eac9"};firebase.initializeApp(c);let d="";d="http://localhost:8800";var g={data(){return{foo_data:"FOO123",info:"",db_list:null,db_log:"",my_uuid:null,login_result:null,is_logging_in:!1,login_data:null,login_error:null}},async created(){},async beforeMount(){},async mounted(){await this.initApp(),await this.debug()},async beforeUpdate(){},async updated(){},methods:{async async_await_fetch_json_log_assign(t,n,e){const i=await fetch(t),a=await i.json();if(console.table(a),"success"===a.message)for(const l of n)this[l]=a[e]},async fetch_data(){await this.async_await_fetch_json_log_assign(d,["foo_data"],"id")},async insert(){await this.async_await_fetch_json_log_assign(d+"/insert_2?lorem="+this.lorem,["db_log","db_list"],"data")},async deleteid(t,n){await this.async_await_fetch_json_log_assign(d+"/deleteid_2?id="+t+"&uuid="+n,["db_log","db_list"],"data")},async update(t,n,e){await this.async_await_fetch_json_log_assign(d+"/update_2?id="+t+"&lorem="+n+"&uuid="+e,["db_log","db_list"],"data")},async readall(){await this.async_await_fetch_json_log_assign(d+"/readall_2",["db_log","db_list"],"data")},insert_validation_check(){return Array.from(document.querySelectorAll("input.insert")).map((t=>t.validity.valid)).some((t=>!1===t))},update_validation_check(){return Array.from(document.querySelectorAll("input.update")).map((t=>t.validity.valid)).some((t=>!1===t))},async debug(){console.log("onAuthStateChanged is this????? in debug()"),await console.table([this.login_result,this.login_data,this.login_error])},async firebase_auth_signOut_and_all_login_property_clear(){const t=()=>{this.login_result=null,this.is_logging_in=!1,this.login_data=null,this.login_error=null};await firebase.auth().signOut(),t()},async toggleSignIn(){firebase.auth().currentUser?this.firebase_auth_signOut_and_all_login_property_clear():firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider)},async firebase_auth_getRedirectResult(){await firebase.auth().getRedirectResult().then((t=>{console.log("getRedirectResult is this?????"),this.login_result=t,this.is_logging_in=null!==t["user"]})).catch((t=>{this.is_logging_in=!1,this.login_error=t}))},async firebase_auth_onAuthStateChanged(){let t=this;const n=t=>{const n=["uid","displayName"];return R.fromPairs(n.map((n=>[n,t[n]])))};await firebase.auth().onAuthStateChanged((e=>{console.log("onAuthStateChanged is this?????"),e&&(t.login_data=n(e)),e&&(t.is_logging_in=!0)}))},async initApp(){await this.firebase_auth_getRedirectResult(),await this.firebase_auth_onAuthStateChanged()}}},h=e(744);const f=(0,h.Z)(g,[["render",_]]);var p=f;e(65),e(503);(0,i.ri)(p).mount("#app")}},n={};function e(i){var a=n[i];if(void 0!==a)return a.exports;var l=n[i]={exports:{}};return t[i](l,l.exports,e),l.exports}e.m=t,function(){var t=[];e.O=function(n,i,a,l){if(!i){var o=1/0;for(_=0;_<t.length;_++){i=t[_][0],a=t[_][1],l=t[_][2];for(var s=!0,r=0;r<i.length;r++)(!1&l||o>=l)&&Object.keys(e.O).every((function(t){return e.O[t](i[r])}))?i.splice(r--,1):(s=!1,l<o&&(o=l));if(s){t.splice(_--,1);var u=a();void 0!==u&&(n=u)}}return n}l=l||0;for(var _=t.length;_>0&&t[_-1][2]>l;_--)t[_]=t[_-1];t[_]=[i,a,l]}}(),function(){e.d=function(t,n){for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,i){var a,l,o=i[0],s=i[1],r=i[2],u=0;if(o.some((function(n){return 0!==t[n]}))){for(a in s)e.o(s,a)&&(e.m[a]=s[a]);if(r)var _=r(e)}for(n&&n(i);u<o.length;u++)l=o[u],e.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return e.O(_)},i=self["webpackChunkweb_api_test"]=self["webpackChunkweb_api_test"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(257)}));i=e.O(i)})();
//# sourceMappingURL=app.bde1c226.js.map