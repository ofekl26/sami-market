(function(e){function t(t){for(var a,s,c=t[0],i=t[1],l=t[2],u=0,p=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,s=1;s<r.length;s++){var i=r[s];0!==n[i]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var a={},n={app:0},o=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0c5dc2c0"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=a);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=s(e);var l=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(u);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,r[1](l)}n[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(r,a,function(t){return e[t]}.bind(null,a));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-container",{attrs:{fluid:""}},[r("span",{staticClass:"group pa-2"},[r("v-btn",{on:{click:function(t){return e.move("/")}}},[e._v("home")])],1)])],1),r("v-spacer"),e.connected?e._e():r("v-btn",{on:{click:function(t){return e.move("/login")}}},[e._v("התחבר")]),e.connected?e._e():r("v-btn",{on:{click:function(t){return e.move("/reg")}}},[e._v("הירשם")]),e.connected?r("v-btn",{on:{click:e.SignOut}},[e._v("התנתק")]):e._e(),e.admin?r("v-btn",{on:{click:function(t){return e.move("/stat")}}},[e._v("הזמנות")]):e._e(),!e.admin&&e.connected?r("v-btn",{on:{click:function(t){return e.move("/cart")}}},[e._v("עגלת הקניות")]):e._e()],1),r("v-content",[r("router-view")],1)],1)},o=[],s=(r("4160"),r("b0c0"),r("ac1f"),r("5319"),r("159b"),r("59ca")),c=r.n(s),i=(r("ea7b"),{name:"App",data:function(){return{connected:!1,admin:!1}},created:function(){var e=this;s["auth"]().onAuthStateChanged((function(t){try{t&&(e.connected=!0,console.log("user: "+t.email),s["firestore"]().collection("Users").doc("admins").collection("Admins").get().then((function(t){t.forEach((function(t){var r=t.data();e.unitdoc=t.id,console.log(s["auth"]().currentUser.uid);var a=s["auth"]().currentUser.uid;console.log("uid:",a),r.userID==a&&(e.admin=!0)}))})),console.log("admin:",e.admin))}catch(r){console.log(r)}}))},methods:{move:function(e){this.$route.path!=e&&(console.log("goes to:"+e),this.$router.replace(e))},SignOut:function(){try{s["auth"]().signOut(),this.connected=!1,console.log("logout"),"HelloWorld"!=this.$route.name&&this.move("/")}catch(e){console.log(e)}}}}),l=i,u=r("2877"),d=r("6544"),p=r.n(d),m=r("7496"),v=r("40dc"),f=r("8336"),h=r("a523"),b=r("a75b"),g=r("2fa4"),w=Object(u["a"])(l,n,o,!1,null,null,null),y=w.exports;p()(w,{VApp:m["a"],VAppBar:v["a"],VBtn:f["a"],VContainer:h["a"],VContent:b["a"],VSpacer:g["a"]});r("d3b7");var x=r("8c4f"),_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-toolbar-title",[e._v(" Sami-Market")]),r("v-spacer"),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"items-per-page":-1},scopedSlots:e._u([{key:"item.actions",fn:function(t){var a=t.item;return[r("v-btn",{attrs:{small:"",color:"primary"},on:{click:function(t){return e.addCart(a)}}},[e._v(" add to cart ")])]}}])})],1)},k=[],V={created:function(){var e=this;s["firestore"]().collection("Users").doc("admins").collection("Admins").get().then((function(t){t.forEach((function(t){var r=t.data();e.unitdoc=t.id,console.log(s["auth"]().currentUser.uid);var a=s["auth"]().currentUser.uid;console.log("uid:",a),r.userID==a&&(e.admin=!0)}))})),console.log(this.admin)},data:function(){return{email:"",cart:[],admin:!1,headers:[{text:"מוצרים",align:"start",sortable:!1},{text:"מוצר",value:"name",sortable:!1},{text:"חברה",value:"company"},{text:"קטגוריה",value:"category"},{text:"מחיר",value:"price"},{text:"מחיר לסטודנטים",value:"saleprice"},{text:"הזמן",value:"actions",sortable:!1}],desserts:[{name:"חלב",company:"תנובה",category:"מוצרי חלב",price:5,saleprice:4},{name:"גלידה וניל",company:"שטראוס",category:"גלידות",price:27,saleprice:24},{name:"חלב",company:"טרה",category:"מוצרי חלב",price:4,saleprice:3.5},{name:"גבינה לבנה",company:"טרה",category:"מוצרי חלב",price:6,saleprice:4.9},{name:"'קוטג",company:"תנובה",category:"מוצרי חלב",price:5.5,saleprice:3.9},{name:"ביסלי",company:"אסם",category:"חטיפים",price:4,saleprice:3},{name:"במבה",company:"אסם",category:"חטיפים",price:4,saleprice:3},{name:"כיף-כיף",company:"עלית",category:"חטיפים",price:4,saleprice:3},{name:"קולה",company:"קוקה קולה",category:"משקאות",price:14,saleprice:11.9},{name:"פיוז טי",company:"קוקה קולה",category:"משקאות",price:14,saleprice:11.9}]}},methods:{addCart:function(e){this.admin?alert("רק לקוחות יכולים להזמין מוצרים"):(console.log(e),this.cart.push(e),console.log(this.cart),this.$store.commit("setCartArr",this.cart))}}},j=V,C=r("8fea"),O=r("2a7f"),$=Object(u["a"])(j,_,k,!1,null,null,null),A=$.exports;p()($,{VBtn:f["a"],VContainer:h["a"],VDataTable:C["a"],VSpacer:g["a"],VToolbarTitle:O["a"]});var R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{align:"center"}},[r("v-toolbar-title",[e._v("התחברות")]),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"3"}},[r("v-text-field",{attrs:{label:"מייל"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{attrs:{label:"סיסמה"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-btn",{attrs:{large:"",color:"primary"},on:{click:e.btnclick}},[e._v("!התחבר")]),r("div",[e._v("אין לך חשבון? "),r("router-link",{attrs:{to:"/reg"}},[e._v(" הירשם ")])],1)],1)],1)],1)},E=[],S={data:function(){return{email:"",password:""}},methods:{btnclick:function(){""!=this.email&&""!=this.password?(s["auth"]().signInWithEmailAndPassword(this.email,this.password),this.$router.replace("/")):window.alert(".נא למלא את כל השדות")}}},T=S,U=r("62ad"),I=r("0fd9"),D=r("8654"),P=Object(u["a"])(T,R,E,!1,null,null,null),B=P.exports;p()(P,{VBtn:f["a"],VCol:U["a"],VRow:I["a"],VTextField:D["a"],VToolbarTitle:O["a"]});var G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{align:"center"}},[r("v-toolbar-title",[e._v("הרשמה")]),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"3"}},[r("v-text-field",{attrs:{label:"מייל"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{attrs:{label:"סיסמה"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-radio-group",{attrs:{dir:"ltr"},model:{value:e.radioGroup,callback:function(t){e.radioGroup=t},expression:"radioGroup"}},[r("v-radio",{attrs:{dir:"ltr",label:"סטודנט",value:"1"}}),r("v-radio",{attrs:{dir:"ltr",label:"רגיל",value:"0"}}),r("v-radio",{attrs:{label:"מנהל",value:"2"}})],1)],1)],1),r("v-btn",{attrs:{large:"",color:"primary"},on:{click:e.btnclick}},[e._v("!הירשם")]),r("div",[e._v("יש לך חשבון? "),r("router-link",{attrs:{to:"/login"}},[e._v(" התחבר ")])],1)],1)},M=[],F=(r("96cf"),r("1da1")),L={data:function(){return{email:"",password:"",radioGroup:0}},methods:{btnclick:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""==e.email||""==e.password){t.next=11;break}return t.next=3,s["auth"]().createUserWithEmailAndPassword(e.email,e.password);case 3:r=s["auth"]().currentUser.uid,a=r,console.log(r),console.log(a),0==e.radioGroup?ke.collection("Users").doc("regulars").collection("Regulars").doc(a).set({email:e.email,password:e.password,userID:r}):1==e.radioGroup?(console.log(r),ke.collection("Users").doc("students").collection("Students").doc(a).set({email:e.email,password:e.password,userID:r}),console.log(r)):2==e.radioGroup&&ke.collection("Users").doc("admins").collection("Admins").doc(a).set({email:e.email,password:e.password,userID:r}),e.$router.replace("/"),t.next=12;break;case 11:alert("אנא מלא את כל השדות");case 12:case"end":return t.stop()}}),t)})))()}}},J=L,W=r("67b6"),z=r("43a6"),H=Object(u["a"])(J,G,M,!1,null,null,null),K=H.exports;p()(H,{VBtn:f["a"],VCol:U["a"],VRadio:W["a"],VRadioGroup:z["a"],VRow:I["a"],VTextField:D["a"],VToolbarTitle:O["a"]});var X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"1"}},[r("div",[e._v("סך כל המחירות: "+e._s(e.total)+' ש"ח')])])],1),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.orders,"items-per-page":-1}})],1)},q=[],N={data:function(){return{dialog:!1,headers:[{text:"עסקאות",align:"start",sortable:!1},{text:"משתמש",value:"mail",sortable:!1},{text:"מחיר עסקה",value:"p"}],orders:[],total:0}},created:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["firestore"]().collection("Orders").get().then((function(t){t.forEach((function(t){var r=t.data(),a=r.email,n=r.price,o={mail:a,p:n};e.orders.push(o),e.total+=n}))}));case 2:console.log(e.orders);case 3:case"end":return t.stop()}}),t)})))()}},Q=N,Y=Object(u["a"])(Q,X,q,!1,null,null,null),Z=Y.exports;p()(Y,{VCol:U["a"],VContainer:h["a"],VDataTable:C["a"],VRow:I["a"]});var ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.$store.getters.getCartArr,"items-per-page":-1}}),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"1"}},[r("v-btn",{attrs:{color:"primary"},on:{click:e.order}},[e._v("הזמן")])],1),r("v-col",{attrs:{cols:"1"}},[r("v-btn",{attrs:{color:"error"},on:{click:e.empty}},[e._v("רוקן עגלה")])],1)],1)],1)},te=[],re={data:function(){return{student:!1,headers:[{text:"מוצרים",align:"start",sortable:!1},{text:"מוצר",value:"name",sortable:!1},{text:"חברה",value:"company"},{text:"קטגוריה",value:"category"},{text:"מחיר",value:"price"},{text:"מחיר לסטודנטים",value:"saleprice"}]}},methods:{empty:function(){this.$store.commit("setCartArr",[])},order:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("order"),t.next=3,s["firestore"]().collection("Users").doc("students").collection("Students").get().then((function(t){t.forEach((function(t){var r=t.data();e.unitdoc=t.id,console.log(s["auth"]().currentUser.uid);var a=s["auth"]().currentUser.uid;console.log("uid:",a),r.userID==a&&(e.student=!0)}))}));case 3:r=0,e.student?e.$store.getters.getCartArr.forEach((function(e){return r+=e.saleprice})):e.$store.getters.getCartArr.forEach((function(e){return r+=e.price})),console.log(r),0!=r&&e.$router.replace({name:"pay",params:{sum:r,student:e.student}});case 7:case"end":return t.stop()}}),t)})))()}}},ae=re,ne=Object(u["a"])(ae,ee,te,!1,null,null,null),oe=ne.exports;p()(ne,{VBtn:f["a"],VCol:U["a"],VContainer:h["a"],VDataTable:C["a"],VRow:I["a"]});var se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{align:"center"}},[r("v-toolbar-title",[e._v("תשלום")]),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"3"}},[r("div",[e._v("מחיר ההזמנה: "+e._s(e.$route.params.sum)+' ש"ח')]),r("v-text-field",{attrs:{label:"מייל"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{attrs:{label:"סיסמה"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-btn",{attrs:{large:"",color:"primary"},on:{click:e.btnclick}},[e._v("!בצע הזמנה")])],1)],1)],1)},ce=[],ie={data:function(){return{email:"",password:"",email1:"",pass1:"",uid:""}},created:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e.$route.params.sum),console.log(e.$route.params.student),e.email1=s["auth"]().currentUser.email,e.uid=s["auth"]().currentUser.uid,!e.$route.params.student){t.next=9;break}return t.next=7,s["firestore"]().collection("Users").doc("students").collection("Students").get().then((function(t){t.forEach((function(t){var r=t.data();e.unitdoc=t.id,r.userID==e.uid&&(e.pass1=r.password)}))}));case 7:console.log("email:",e.email1),console.log("pass:",e.pass1);case 9:case"end":return t.stop()}}),t)})))()},methods:{btnclick:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.email!=e.email1||e.password!=e.pass1){t.next=8;break}return r=ke.collection("Orders").doc(),a=r.id,t.next=5,ke.collection("Orders").doc(a).set({userID:e.uid,price:e.$route.params.sum,details:e.$store.getters.getCartArr,email:e.email});case 5:e.$router.replace("/"),t.next=9;break;case 8:""==e.email&&""==e.password&&window.alert(".נא למלא את כל השדות");case 9:case"end":return t.stop()}}),t)})))()}}},le=ie,ue=Object(u["a"])(le,se,ce,!1,null,null,null),de=ue.exports;p()(ue,{VBtn:f["a"],VCol:U["a"],VRow:I["a"],VTextField:D["a"],VToolbarTitle:O["a"]}),a["a"].use(x["a"]);var pe=[{path:"/",name:"Home",component:A},{path:"/login",name:"Login",component:B},{path:"/reg",name:"register",component:K},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/stat",name:"Statistics",component:Z},{path:"/cart",name:"Cart",component:oe},{path:"/pay",name:"pay",component:de,props:!0}],me=new x["a"]({mode:"history",base:"/",routes:pe}),ve=me,fe=r("2f62");a["a"].use(fe["a"]);var he=new fe["a"].Store({state:{cartarr:[]},mutations:{setCartArr:function(e,t){e.cartarr=t}},getters:{getCartArr:function(e){return e.cartarr}},actions:{},modules:{}}),be=r("f309");a["a"].use(be["a"]);var ge=new be["a"]({}),we=r("bc3a"),ye=r.n(we);r("e71f");a["a"].prototype.$axios=ye.a,a["a"].config.productionTip=!1;var xe={apiKey:"AIzaSyA0x5dK3vjrJRf0-nQu5AamNXXFVb8iP1I",authDomain:"testings-cbb7f.firebaseapp.com",databaseURL:"https://testings-cbb7f.firebaseio.com",projectId:"testings-cbb7f",storageBucket:"testings-cbb7f.appspot.com",messagingSenderId:"286560976734",appId:"1:286560976734:web:b549f28d6782b6345e19cf"},_e=c.a.initializeApp(xe),ke=t["default"]=_e.firestore();new a["a"]({router:ve,store:he,vuetify:ge,render:function(e){return e(y)}}).$mount("#app")}});
//# sourceMappingURL=app.ad6ad90d.js.map