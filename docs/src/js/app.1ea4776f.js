(function(){"use strict";var t={370:function(t,e,n){var i=n(963),a=n(252),o=n(577);const l={class:"my_user_uid"},s=(0,a._)("span",null,"uuid:",-1),r={class:"login_result"},u=(0,a._)("span",null,"login_state:",-1),c={class:"deleteid"},_=["onUpdate:modelValue"],d=["onClick"],f=["onClick"];function h(t,e,n,h,g,p){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("img",{src:"/google_signin_buttons/web/2x/btn_google_signin_light_normal_web@2x.png",class:"login",value:"googleLogin",onClick:e[0]||(e[0]=t=>p.anyLogin("google"))}),(0,a._)("h2",l,[s,(0,a.Uk)((0,o.zw)(g.my_user_uid),1)]),(0,a._)("h2",r,[u,(0,a.Uk)((0,o.zw)(g.login_result),1)]),(0,a._)("button",{onClick:e[1]||(e[1]=(...t)=>p.check_login&&p.check_login(...t))},"check_login"),(0,a._)("input",{type:"button",name:"",class:"sign_out",value:"sign_out",onClick:e[2]||(e[2]=(...t)=>p.sign_out&&p.sign_out(...t))}),(0,a._)("span",null,(0,o.zw)(g.error_log),1),(0,a._)("button",{onClick:e[3]||(e[3]=(...t)=>p.fetch_data&&p.fetch_data(...t))},"fetch_data"),(0,a.wy)((0,a._)("input",{class:"insert",type:"text","onUpdate:modelValue":e[4]||(e[4]=t=>g.info=t),minlength:"1",maxlength:"30",required:""},null,512),[[i.nr,g.info]]),(0,a._)("button",{onClick:e[5]||(e[5]=(...t)=>p.insert&&p.insert(...t)),class:(0,o.C_)({insert_button_class_for_initial_display_none:!0,insert_invalid:this.insert_validation_check()})},"insert",2),(0,a._)("button",{onClick:e[6]||(e[6]=(...t)=>p.readall&&p.readall(...t))},"readall"),(0,a._)("h1",null,(0,o.zw)(g.foo_data),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(g.db_list,(t=>((0,a.wg)(),(0,a.iD)("ul",null,[(0,a._)("li",c,(0,o.zw)(t.id)+":",1),(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e=>t.info=e,class:(0,o.C_)({update:!0,deleteid:!0,info:!0}),minlength:"1",maxlength:"30",required:""},null,8,_),[[i.nr,t.info]]),(0,a._)("button",{onClick:e=>p.update(t.id,t.info),class:(0,o.C_)({update_invalid:!!this.update_validation_check()})},"update",10,d),(0,a._)("button",{class:"deleteid",onClick:e=>p.deleteid(t.id)},"deleteid",8,f)])))),256)),(0,a._)("h1",null,(0,o.zw)(g.db_log),1)],64)}const g={apiKey:"AIzaSyBcOlIDP2KWbJuKM0WeMHNp-WvjTVfLt9Y",authDomain:"p2auth-ea50a.firebaseapp.com",projectId:"p2auth-ea50a",storageBucket:"p2auth-ea50a.appspot.com",messagingSenderId:"796225429484",appId:"1:796225429484:web:ece56ef2fc0be28cd6eac9"};firebase.initializeApp(g);let p="";p="http://localhost:8800";var b={data(){return{foo_data:"FOO123",info:"",db_list:null,db_log:"",error_log:"",my_user_uid:null,login_result:null}},mounted(){document.querySelector(".insert_button_class_for_initial_display_none").style="display: none;"},beforeUpdate(){document.querySelector(".insert_button_class_for_initial_display_none").style=""},methods:{async async_await_fetch_json_log_assign(t,e,n){const i=await fetch(t),a=await i.json();if(console.table(a),"success"===a.message)for(const o of e)this[o]=a[n]},async fetch_data(){await this.async_await_fetch_json_log_assign(p,["foo_data"],"id")},async insert(){await this.async_await_fetch_json_log_assign(p+"/insert?info="+this.info,["db_log","db_list"],"data")},async deleteid(t){await this.async_await_fetch_json_log_assign(p+"/deleteid?id="+t,["db_log","db_list"],"data")},async update(t,e){await this.async_await_fetch_json_log_assign(p+"/update?id="+t+"&info="+e,["db_log","db_list"],"data")},async readall(){await this.async_await_fetch_json_log_assign(p+"/readall",["db_log","db_list"],"data")},insert_validation_check(){return Array.from(document.querySelectorAll("input.insert")).map((t=>t.validity.valid)).some((t=>!1===t))},update_validation_check(){return Array.from(document.querySelectorAll("input.update")).map((t=>t.validity.valid)).some((t=>!1===t))},anyLogin(t){switch(t){case"google":firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider);break;case"github":firebase.auth().signInWithRedirect(new firebase.auth.GithubAuthProvider);break;case"twitter":firebase.auth().signInWithRedirect(new firebase.auth.TwitterAuthProvider);break;case"facebook":firebase.auth().signInWithRedirect(new firebase.auth.FacebookAuthProvider);break}},async check_login(){await firebase.auth().onAuthStateChanged((async t=>{this.my_user_uid=await t?t.uid:"public",this.login_result=await t?"now login":"now not login"}))},async sign_out(){await firebase.auth().signOut(),await check_login()}}},w=n(744);const y=(0,w.Z)(b,[["render",h]]);var v=y;(0,i.ri)(v).mount("#app")}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,a,o){if(!i){var l=1/0;for(c=0;c<t.length;c++){i=t[c][0],a=t[c][1],o=t[c][2];for(var s=!0,r=0;r<i.length;r++)(!1&o||l>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[r])}))?i.splice(r--,1):(s=!1,o<l&&(l=o));if(s){t.splice(c--,1);var u=a();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[i,a,o]}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,o,l=i[0],s=i[1],r=i[2],u=0;if(l.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(r)var c=r(n)}for(e&&e(i);u<l.length;u++)o=l[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},i=self["webpackChunkweb_api_test"]=self["webpackChunkweb_api_test"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(370)}));i=n.O(i)})();
//# sourceMappingURL=app.1ea4776f.js.map