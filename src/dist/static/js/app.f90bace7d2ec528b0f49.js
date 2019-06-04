webpackJsonp([1],{"7zck":function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("7+uW"),n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",[t._l(t.links,function(e){return r("v-list-tile",{key:e.title,attrs:{to:e.url}},[r("v-list-tile-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}),t._v(" "),t.isUserLoggedIn?r("v-list-tile",{on:{click:t.onLogout}},[r("v-list-tile-action",[r("v-icon",[t._v("exit_to_app")])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",{domProps:{textContent:t._s("Logout")}})],1)],1):t._e()],2)],1),t._v(" "),r("v-toolbar",{attrs:{app:"",dark:"",color:"primary"}},[r("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",[r("router-link",{staticClass:"pointer",attrs:{to:"/",tag:"span"}},[t._v("Биржа по найму наемников")])],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[t._l(t.links,function(e){return r("v-btn",{key:e.title,attrs:{to:e.url,flat:""}},[r("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)}),t._v(" "),t.isUserLoggedIn?r("v-btn",{attrs:{flat:""},on:{click:t.onLogout}},[r("v-icon",{attrs:{left:""}},[t._v("exit_to_app")]),t._v("\n        Выйти\n      ")],1):t._e()],2)],1),t._v(" "),r("v-content",[r("router-view")],1),t._v(" "),t.error?[r("v-snackbar",{attrs:{timeout:5e3,"multi-line":!0,color:"error",value:!0},on:{input:t.closeError}},[t._v("\n      "+t._s(t.error)+"\n      "),r("v-btn",{attrs:{flat:"",dark:""},nativeOn:{click:function(e){t.closeError(e)}}},[t._v("Закрыть")])],1)]:t._e()],2)},staticRenderFns:[]};var s=r("VU/8")({data:function(){return{drawer:!1}},computed:{error:function(){return this.$store.getters.error},isUserLoggedIn:function(){return this.$store.getters.isUserLoggedIn},links:function(){return this.isUserLoggedIn?[{title:"Заказы",icon:"bookmark_border",url:"/orders"},{title:"Добавить лот",icon:"note_add",url:"/new"},{title:"Мои предложения",icon:"list",url:"/list"}]:[{title:"Войти",icon:"lock",url:"/login"},{title:"Регистрация",icon:"face",url:"/registration"}]}},methods:{closeError:function(){this.$store.dispatch("clearError")},onLogout:function(){this.$store.dispatch("logoutUser"),this.$router.push("/")}}},n,!1,function(t){r("hkyL")},"data-v-65546a16",null).exports,i=r("/ocq"),o=r("NYxO"),l=r("fZjL"),c=r.n(l),d=r("Xxa5"),u=r.n(d),v=r("Dd8w"),p=r.n(v),f=r("exGp"),m=r.n(f),h=r("Zrlr"),g=r.n(h),x=r("kxiW"),_=function t(e,r,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;g()(this,t),this.title=e,this.description=r,this.ownerId=a,this.imageSrc=n,this.promo=s,this.id=i},w={state:{ads:[]},mutations:{createAd:function(t,e){t.ads.push(e)},loadAds:function(t,e){t.ads=e},updateAd:function(t,e){var r=e.title,a=e.description,n=e.id,s=t.ads.find(function(t){return t.id===n});s.title=r,s.description=a}},actions:{createAd:function(t,e){var r=this,a=t.commit,n=t.getters;return m()(u.a.mark(function t(){var s,i,o,l,c,d;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a("clearError"),a("setLoading",!0),s=e.image,t.prev=3,i=new _(e.title,e.description,n.user.id,"",e.promo),t.next=7,x.database().ref("ads").push(i);case 7:return o=t.sent,l=s.name.slice(s.name.lastIndexOf(".")),t.next=11,x.storage().ref("ads/"+o.key+"."+l).put(s);case 11:return c=t.sent,t.next=14,c.ref.getDownloadURL();case 14:return d=t.sent,t.next=17,x.database().ref("ads").child(o.key).update({imageSrc:d});case 17:a("setLoading",!1),a("createAd",p()({},i,{id:o.key,imageSrc:d})),t.next=26;break;case 21:throw t.prev=21,t.t0=t.catch(3),a("setError",t.t0.message),a("setLoading",!1),t.t0;case 26:case"end":return t.stop()}},t,r,[[3,21]])}))()},fetchAds:function(t){var e=this,r=t.commit;return m()(u.a.mark(function t(){var a,n,s;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r("clearError"),r("setLoading",!0),a=[],t.prev=3,t.next=6,x.database().ref("ads").once("value");case 6:n=t.sent,s=n.val(),c()(s).forEach(function(t){var e=s[t];a.push(new _(e.title,e.description,e.ownerId,e.imageSrc,e.promo,t))}),r("loadAds",a),r("setLoading",!1),t.next=18;break;case 13:throw t.prev=13,t.t0=t.catch(3),r("setError",t.t0.message),r("setLoading",!1),t.t0;case 18:case"end":return t.stop()}},t,e,[[3,13]])}))()},updateAd:function(t,e){var r=this,a=t.commit,n=e.title,s=e.description,i=e.id;return m()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a("clearError"),a("setLoading",!0),t.prev=2,t.next=5,x.database().ref("ads").child(i).update({title:n,description:s});case 5:a("updateAd",{title:n,description:s,id:i}),a("setLoading",!1),t.next=14;break;case 9:throw t.prev=9,t.t0=t.catch(2),a("setError",t.t0.message),a("setLoading",!1),t.t0;case 14:case"end":return t.stop()}},t,r,[[2,9]])}))()}},getters:{ads:function(t){return t.ads},promoAds:function(t){return t.ads.filter(function(t){return t.promo})},myAds:function(t,e){return t.ads.filter(function(t){return t.ownerId===e.user.id})},adById:function(t){return function(e){return t.ads.find(function(t){return t.id===e})}}}},b=function t(e){g()(this,t),this.id=e},y={state:{user:null,btn1:!1},mutations:{setUser:function(t,e){t.user=e,t.btn1=!0},setBtn1:function(t){t.btn1=!1}},actions:{registerUser:function(t,e){var r=this,a=t.commit,n=e.email,s=e.password;return m()(u.a.mark(function t(){var e;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a("clearError"),a("setLoading",!0),t.prev=2,t.next=5,x.auth().createUserWithEmailAndPassword(n,s);case 5:e=t.sent,a("setUser",new b(e.user.uid)),a("setLoading",!1),t.next=15;break;case 10:throw t.prev=10,t.t0=t.catch(2),a("setLoading",!1),a("setError",t.t0.message),t.t0;case 15:case"end":return t.stop()}},t,r,[[2,10]])}))()},loginUser:function(t,e){var r=this,a=t.commit,n=e.email,s=e.password;return m()(u.a.mark(function t(){var e;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a("clearError"),a("setLoading",!0),t.prev=2,t.next=5,x.auth().signInWithEmailAndPassword(n,s);case 5:e=t.sent,a("setUser",new b(e.user.uid)),a("setLoading",!1),t.next=15;break;case 10:throw t.prev=10,t.t0=t.catch(2),a("setLoading",!1),a("setError",t.t0.message),t.t0;case 15:case"end":return t.stop()}},t,r,[[2,10]])}))()},autoLoginUser:function(t,e){(0,t.commit)("setUser",new b(e.uid))},logoutUser:function(t){var e=t.commit;x.auth().signOut(),e("setUser",null),e("setBtn1")}},getters:{user:function(t){return t.user},btn1:function(t){return t.btn1},isUserLoggedIn:function(t){return null!==t.user}}},k=function t(e,r,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;g()(this,t),this.name=e,this.phone=r,this.adId=a,this.done=n,this.id=s},E={state:{orders:[]},mutations:{loadOrders:function(t,e){t.orders=e}},actions:{createOrder:function(t,e){var r=this,a=t.commit,n=e.name,s=e.phone,i=e.adId,o=e.ownerId;return m()(u.a.mark(function t(){var e;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=new k(n,s,i),a("clearError"),t.prev=2,t.next=5,x.database().ref("/users/"+o+"/orders").push(e);case 5:t.next=11;break;case 7:throw t.prev=7,t.t0=t.catch(2),a("setError",t.t0.message),t.t0;case 11:case"end":return t.stop()}},t,r,[[2,7]])}))()},fetchOrders:function(t){var e=this,r=t.commit,a=t.getters;return m()(u.a.mark(function t(){var n,s,i;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r("setLoading",!0),r("clearError"),n=[],t.prev=3,t.next=6,x.database().ref("/users/"+a.user.id+"/orders").once("value");case 6:s=t.sent,i=s.val(),c()(i).forEach(function(t){var e=i[t];n.push(new k(e.name,e.phone,e.adId,e.done,t))}),r("loadOrders",n),r("setLoading",!1),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(3),r("setLoading",!1),r("setError",t.t0.message);case 17:case"end":return t.stop()}},t,e,[[3,13]])}))()},markOrderDone:function(t,e){var r=this,a=t.commit,n=t.getters;return m()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a("clearError"),t.prev=1,t.next=4,x.database().ref("/users/"+n.user.id+"/orders").child(e).update({done:!0});case 4:t.next=10;break;case 6:throw t.prev=6,t.t0=t.catch(1),a("setError",t.t0.message),t.t0;case 10:case"end":return t.stop()}},t,r,[[1,6]])}))()}},getters:{doneOrders:function(t){return t.orders.filter(function(t){return t.done})},undoneOrders:function(t){return t.orders.filter(function(t){return!t.done})},orders:function(t,e){return e.undoneOrders.concat(e.doneOrders)}}};a.a.use(o.a);var L=new o.a.Store({modules:{ads:w,user:y,shared:{state:{loading:!1,error:null},mutations:{setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{setLoading:function(t,e){(0,t.commit)("setLoading",e)},setError:function(t,e){(0,t.commit)("setError",e)},clearError:function(t){(0,t.commit)("clearError")}},getters:{loading:function(t){return t.loading},error:function(t){return t.error}}},orders:E}}),$=function(t,e,r){L.getters.user?r():r("/login?loginError=true")},C={computed:{btnVisible:function(){return this.$store.getters.btn1},promoAds:function(){return this.$store.getters.promoAds},promoAdsRandom:function(){for(var t,e,r=this.$store.getters.promoAds,a=r.length-1;a>0;a--)e=r[t=Math.floor(Math.random()*(a+1))],r[t]=r[a],r[a]=e;return r},ads:function(){return this.$store.getters.ads},loading:function(){return this.$store.getters.loading}}},A={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loading?r("div",[r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{staticClass:"text-xs-center pt-5",attrs:{xs12:""}},[r("v-progress-circular",{attrs:{indeterminate:"",size:100,width:4,color:"purple"}})],1)],1)],1)],1):r("div",[r("v-container",{attrs:{"align-content-space-around":""}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("br"),t._v(" "),r("p",{staticClass:"display-2 text-xs-center"},[t._v("Внимание! Турнир. Ожидаются бои между бойцами")])])],1)],1),t._v(" "),r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:""}},[r("v-spacer"),t._v(" "),r("v-flex",{attrs:{xs5:""}},[r("v-carousel",{attrs:{"hide-delimiters":"","hide-controls":""}},t._l(t.promoAds,function(e){return r("v-carousel-item",{key:e.id,attrs:{src:e.imageSrc}},[r("div",{staticClass:"car-link"},[r("v-btn",{staticClass:"error",attrs:{to:"/ad/"+e.id}},[t._v(t._s(e.title))])],1)])}))],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-flex",{attrs:{xs5:""}},[r("v-carousel",{attrs:{"hide-delimiters":"","hide-controls":""}},t._l(t.promoAdsRandom,function(e){return r("v-carousel-item",{key:e.id,attrs:{src:e.imageSrc}},[r("div",{staticClass:"car-link"},[r("v-btn",{staticClass:"error",attrs:{to:"/ad/"+e.id}},[t._v(t._s(e.title))])],1)])}))],1),t._v(" "),r("v-spacer")],1),t._v(" "),r("v-container",{attrs:{"align-content-space-around":""}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("p"),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"display-3 text-xs-center"},[t._v("Текущие предложения на бирже")])])],1)],1)],1),t._v(" "),r("v-container",{attrs:{"grid-list-lg":""}},[r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.ads,function(e){return r("v-flex",{key:e.id,attrs:{xs12:"",sm6:"",md4:""}},[r("v-card",[r("v-card-media",{attrs:{src:e.imageSrc,height:"200px"}}),t._v(" "),r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.title))]),t._v(" "),r("div",[t._v(t._s(e.description))])])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),t.btnVisible?r("v-btn",{attrs:{flat:"",to:"/ad/"+e.id}},[t._v("Карточка")]):t._e(),t._v(" "),r("app-buy-modal",{attrs:{ad:e}})],1)],1)],1)}))],1)],1)},staticRenderFns:[]};var U=r("VU/8")(C,A,!1,function(t){r("oLLx")},"data-v-4854dbf5",null).exports,I={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{width:"400px"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[r("v-btn",{staticClass:"warning",attrs:{slot:"activator",flat:""},slot:"activator"},[t._v("Редактировать")]),t._v(" "),r("v-card",[r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-title",[r("h1",{staticClass:"text--primary"},[t._v("Edit ad")])])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-text",[r("v-text-field",{attrs:{name:"title",label:"Title",type:"text"},model:{value:t.editedTitle,callback:function(e){t.editedTitle=e},expression:"editedTitle"}}),t._v(" "),r("v-text-field",{attrs:{name:"description",label:"Description",type:"text","multi-line":""},model:{value:t.editedDescription,callback:function(e){t.editedDescription=e},expression:"editedDescription"}})],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{flat:""},on:{click:t.onCancel}},[t._v("Cancel")]),t._v(" "),r("v-btn",{staticClass:"success",attrs:{flat:""},on:{click:t.onSave}},[t._v("Save")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},S={props:["id"],computed:{ad:function(){var t=this.id;return this.$store.getters.adById(t)},loading:function(){return this.$store.getters.loading},isOwner:function(){return this.ad.ownerId===this.$store.getters.user.id}},components:{addEditAdModal:r("VU/8")({props:["ad"],data:function(){return{modal:!1,editedDescription:this.ad.description,editedTitle:this.ad.title}},methods:{onCancel:function(){this.editedDescription=this.ad.description,this.editedTitle=this.ad.title,this.modal=!1},onSave:function(){""!==this.editedDescription&&""!==this.editedTitle&&(this.$store.dispatch("updateAd",{title:this.editedTitle,description:this.editedDescription,id:this.ad.id}),this.modal=!1)}}},I,!1,null,null,null).exports}},R={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[t.loading?r("div",{staticClass:"text-xs-center"},[r("v-progress-circular",{attrs:{indeterminate:"",size:100,width:4,color:"purple"}})],1):r("v-card",[r("v-card-media",{attrs:{src:t.ad.imageSrc,height:"600px"}}),t._v(" "),r("v-card-text",[r("h1",{staticClass:"text--primary"},[t._v(t._s(t.ad.title))]),t._v(" "),r("p",[t._v(t._s(t.ad.description))])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),t.isOwner?r("addEditAdModal",{attrs:{ad:t.ad}}):t._e(),t._v(" "),r("app-buy-modal",{attrs:{ad:t.ad}})],1)],1)],1)],1)],1)},staticRenderFns:[]},O=r("VU/8")(S,R,!1,null,null,null).exports,D={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[t.loading||0===t.myAds.length?t.loading||0!==t.myAds.length?r("v-layout",[r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[r("v-progress-circular",{attrs:{indeterminate:"",size:100,width:4,color:"purple"}})],1)],1):r("v-layout",[r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[r("h1",{staticClass:"text--primary"},[t._v("Вы еще не делали предложений на бирже")])])],1):r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[r("h1",{staticClass:"text--secondary mb-3"},[t._v("Мои предложения")]),t._v(" "),t._l(t.myAds,function(e){return r("v-card",{key:e.id,staticClass:"elevation-10 mb-3"},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("v-card-media",{staticStyle:{left:"8px",top:"10px"},attrs:{src:e.imageSrc,height:"160px"}})],1),t._v(" "),r("v-flex",{attrs:{xs8:""}},[r("v-card-text",[r("h2",{staticClass:"text--primary"},[t._v(t._s(e.title))]),t._v(" "),r("p",[t._v(t._s(e.description))])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"info",attrs:{to:"/ad/"+e.id}},[t._v("Открыть")])],1)],1)],1)],1)})],2)],1)],1)},staticRenderFns:[]},F=r("VU/8")({computed:{myAds:function(){return this.$store.getters.myAds},loading:function(){return this.$store.getters.loading}}},D,!1,null,null,null).exports,P={data:function(){return{title:"",description:"",promo:!1,valid:!1,image:null,imageSrc:""}},computed:{loading:function(){return this.$store.getters.loading}},methods:{createAd:function(){var t=this;if(this.$refs.form.validate()&&this.image){var e={title:this.title,description:this.description,promo:this.promo,image:this.image};this.$store.dispatch("createAd",e).then(function(){t.$router.push("/list")}).catch(function(){})}},triggerUpload:function(){this.$refs.fileInput.click()},onFileChange:function(t){var e=this,r=t.target.files[0],a=new FileReader;a.onload=function(t){e.imageSrc=a.result},a.readAsDataURL(r),this.image=r}}},V={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[r("h1",{staticClass:"text--secondary mb-3"},[t._v("Добавить лот на продажу")]),t._v(" "),r("v-form",{ref:"form",staticClass:"mb-3",attrs:{validation:""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{name:"title",label:"Имя воина",type:"text",required:"",rules:[function(t){return!!t||"Укажите имя"}]},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),r("v-text-field",{attrs:{name:"description",label:"Подробное описание",type:"text","multi-line":"",rules:[function(t){return!!t||"Добавьте описание"}]},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),t._v(" "),r("v-layout",{staticClass:"mb-3",attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-btn",{staticClass:"warning",on:{click:t.triggerUpload}},[t._v("\n            Загрузить изображение\n            "),r("v-icon",{attrs:{right:"",dark:""}},[t._v("cloud_upload")])],1),t._v(" "),r("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFileChange}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[t.imageSrc?r("img",{attrs:{src:t.imageSrc,height:"100"}}):t._e()])],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-switch",{attrs:{label:"Добавить в для общего просмотра?",color:"primary"},model:{value:t.promo,callback:function(e){t.promo=e},expression:"promo"}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"success",attrs:{loading:t.loading,disabled:!t.valid||!t.image||t.loading},on:{click:t.createAd}},[t._v("\n            Создать\n          ")])],1)],1)],1)],1)],1)},staticRenderFns:[]},z=r("VU/8")(P,V,!1,null,null,null).exports,T=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,j={data:function(){return{email:"",password:"",valid:!1,emailRules:[function(t){return!!t||"Укажите свой E-mail"},function(t){return T.test(t)||"Неправильный E-mail"}],passwordRules:[function(t){return!!t||"Введите пароль"},function(t){return t&&t.length>=6||"Пароль должен содержать не менее 6 символов"}]}},computed:{loading:function(){return this.$store.getters.loading}},methods:{onSubmit:function(){var t=this;if(this.$refs.form.validate()){var e={email:this.email,password:this.password};this.$store.dispatch("loginUser",e).then(function(){t.$router.push("/")}).catch(function(){})}}},created:function(){this.$route.query.loginError&&this.$store.dispatch("setError","Please log in to access this page.")}},B={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[t._v("Вход в аккаунт")])],1),t._v(" "),r("v-card-text",[r("v-form",{ref:"form",attrs:{validation:""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{"prepend-icon":"person",name:"email",label:"Email",type:"email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Пароль",type:"password",counter:6,rules:t.passwordRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",loading:t.loading,disabled:!t.valid||t.loading},on:{click:t.onSubmit}},[t._v("Войти")])],1)],1)],1)],1)],1)},staticRenderFns:[]},W=r("VU/8")(j,B,!1,null,null,null).exports,M=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,q={data:function(){var t=this;return{email:"",password:"",confirmPassword:"",valid:!1,emailRules:[function(t){return!!t||"Укажите свой E-mail"},function(t){return M.test(t)||"Неправильный E-mail"}],passwordRules:[function(t){return!!t||"Введите пароль"},function(t){return t&&t.length>=6||"Пароль должен содержать не менее 6 символов"}],confirmPasswordRules:[function(t){return!!t||"Введите пароль"},function(e){return e===t.password||"Пароль должен совпадать"}]}},computed:{loading:function(){return this.$store.getters.loading}},methods:{onSubmit:function(){var t=this;if(this.$refs.form.validate()){var e={email:this.email,password:this.password};this.$store.dispatch("registerUser",e).then(function(){t.$router.push("/")}).catch(function(){})}}}},N={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[t._v("Форма регистрации")])],1),t._v(" "),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{"prepend-icon":"person",name:"email",label:"Email",type:"email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Пароль",type:"password",counter:6,rules:t.passwordRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),r("v-text-field",{attrs:{"prepend-icon":"lock",name:"confirm-password",label:"Подтвердите пароль",type:"password",counter:6,rules:t.confirmPasswordRules},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",loading:t.loading,disabled:!t.valid||t.loading},on:{click:t.onSubmit}},[t._v("Создать аккаунт!")])],1)],1)],1)],1)],1)},staticRenderFns:[]},G=r("VU/8")(q,N,!1,null,null,null).exports,H={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{row:""}},[t.loading?r("v-flex",{staticClass:"text-xs-center pt-5",attrs:{xs12:""}},[r("v-progress-circular",{attrs:{indeterminate:"",size:100,width:4,color:"purple"}})],1):t.loading||0===t.orders.length?r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[r("h1",{staticClass:"text--secondary"},[t._v("Заказов по вашим лотам пока нет")])]):r("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[r("h1",{staticClass:"text--secondary mb-3"},[t._v("Заказы")]),t._v(" "),r("v-list",{attrs:{"two-line":"",subheader:""}},t._l(t.orders,function(e){return r("v-list-tile",{key:e.id,attrs:{avatar:""}},[r("v-list-tile-action",[r("v-checkbox",{attrs:{color:"success","input-value":e.done},on:{change:function(r){t.markDone(e)}}})],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[t._v(t._s(e.name))]),t._v(" "),r("v-list-tile-sub-title",[t._v(t._s(e.phone))])],1),t._v(" "),r("v-list-tile-action",[r("v-btn",{staticClass:"primary",attrs:{to:"/ad/"+e.adId}},[t._v("Открыть")])],1)],1)}))],1)],1)],1)},staticRenderFns:[]},K=r("VU/8")({computed:{loading:function(){return this.$store.getters.loading},orders:function(){return this.$store.getters.orders}},methods:{markDone:function(t){this.$store.dispatch("markOrderDone",t.id).then(function(){t.done=!0}).catch(function(){})}},created:function(){this.$store.dispatch("fetchOrders")}},H,!1,null,null,null).exports;a.a.use(i.a);var Z=new i.a({routes:[{path:"",name:"home",component:U},{path:"/ad/:id",props:!0,name:"ad",component:O},{path:"/list",name:"list",component:F,beforeEnter:$},{path:"/new",name:"newAd",component:z,beforeEnter:$},{path:"/login",name:"login",component:W},{path:"/registration",name:"reg",component:G},{path:"/orders",name:"orders",component:K,beforeEnter:$}],mode:"history"}),J=r("3EgV"),X=r.n(J),Y={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{width:"400px"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[r("v-btn",{staticClass:"primary",attrs:{slot:"activator",flat:""},slot:"activator"},[t._v("Нанять")]),t._v(" "),r("v-card",[r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-title",[r("h1",{staticClass:"text--primary"},[t._v("Хотите нанять его?")])])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-text",[r("v-text-field",{attrs:{name:"name",label:"Ваше имя",type:"text"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),r("v-text-field",{attrs:{name:"phone",label:"Ваш телефон",type:"text"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{flat:"",disabled:t.localLoading},on:{click:t.onCancel}},[t._v("\n              Отказаться\n            ")]),t._v(" "),r("v-btn",{staticClass:"success",attrs:{flat:"",disabled:t.localLoading,loading:t.localLoading},on:{click:t.onSave}},[t._v("\n              Нанять сейчас!\n            ")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},Q=r("VU/8")({props:["ad"],data:function(){return{modal:!1,name:"",phone:"",localLoading:!1}},methods:{onCancel:function(){this.name="",this.phone="",this.modal=!1},onSave:function(){var t=this;""!==this.name&&""!==this.phone&&(this.localLoading=!0,this.$store.dispatch("createOrder",{name:this.name,phone:this.phone,adId:this.ad.id,ownerId:this.ad.ownerId}).finally(function(){t.name="",t.phone="",t.localLoading=!1,t.modal=!1}))}}},Y,!1,null,null,null).exports;r("7zck"),r("tLfa");a.a.use(X.a,{}),a.a.component("app-buy-modal",Q),a.a.config.productionTip=!1,new a.a({el:"#app",router:Z,store:L,components:{App:s},template:"<App/>",created:function(){var t=this;x.initializeApp({apiKey:"AIzaSyBIlqEx9COFlve859_F74mWPRWG6xjjKpA",authDomain:"vue-shopc.firebaseapp.com",databaseURL:"https://vue-shopc.firebaseio.com",projectId:"vue-shopc",storageBucket:"vue-shopc.appspot.com",messagingSenderId:"524082788725",appId:"1:524082788725:web:eb4829d2980c5aa7"}),x.auth().onAuthStateChanged(function(e){e&&t.$store.dispatch("autoLoginUser",e)}),this.$store.dispatch("fetchAds")}})},hkyL:function(t,e){},oLLx:function(t,e){},tLfa:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f90bace7d2ec528b0f49.js.map