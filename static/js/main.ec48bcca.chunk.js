(this["webpackJsonpdisney-plus-clone"]=this["webpackJsonpdisney-plus-clone"]||[]).push([[0],{18:function(n,e,t){n.exports={row:"Counter_row__1C_4f",value:"Counter_value__1d0te",button:"Counter_button__1xpSV",textbox:"Counter_textbox__3ODaX",asyncButton:"Counter_asyncButton__2UAr3 Counter_button__1xpSV"}},49:function(n,e,t){},55:function(n,e,t){},78:function(n,e,t){"use strict";t.r(e);var i=t(2),r=t.n(i),c=t(30),a=t.n(c),o=(t(49),t(31)),s=t(14),d=t(35),p=t.n(d),l=t(40),b=t(19);function j(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(e){return setTimeout((function(){return e({data:n})}),500)}))}var x=Object(b.b)("counter/fetchCount",function(){var n=Object(l.a)(p.a.mark((function n(e){var t;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j(e);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),g=Object(b.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(n){n.value+=1},decrement:function(n){n.value-=1},incrementByAmount:function(n,e){n.value+=e.payload}},extraReducers:function(n){n.addCase(x.pending,(function(n){n.status="loading"})).addCase(x.fulfilled,(function(n,e){n.status="idle",n.value+=e.payload}))}}),u=g.actions,h=(u.increment,u.decrement,u.incrementByAmount,g.reducer,t(18),t(3));t(55);var m,O,f,v,w,y,k=t(5),_=t(28),S=_.a.initializeApp({apiKey:"AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",authDomain:"disneyplus-clone-a33d5.firebaseapp.com",projectId:"disneyplus-clone-a33d5",storageBucket:"disneyplus-clone-a33d5.appspot.com",messagingSenderId:"37918794208",appId:"1:37918794208:web:dbe9842dfe1dda522a4b85",measurementId:"G-DRVLJKWRWG"}).firestore(),z=_.a.auth(),I=new _.a.auth.GoogleAuthProvider,A=(_.a.storage(),S),C=t(6),R=t(11),L=Object(b.c)({name:"user",initialState:{name:"",email:"",photo:""},reducer:{setUserLogin:function(n,e){n.name=e.payload.name,n.email=e.payload.email,n.photo=e.payload.photo},setSignOut:function(n){n.name=null,n.email=null,n.photo=null}}}),T=L.actions,B=T.setUserLogin,E=T.setSignOut,G=function(n){return n.user.name},M=function(n){return n.user.photo},W=L.reducer;var P,V,D=function(){var n=Object(s.b)(),e=Object(R.f)(),t=Object(s.c)(G);return Object(s.c)(M),Object(h.jsxs)(J,{children:[Object(h.jsx)(U,{src:"/images/logo.svg"}),t?Object(h.jsx)(N,{children:Object(h.jsx)(H,{onClick:function(){z.signInWithPopup(I).then((function(e){var t=e.user;n(B({name:t.displayName,email:t.email,photo:t.photoURL}))}))},children:"Login"})}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(X,{children:[Object(h.jsxs)("a",{children:[Object(h.jsx)("img",{src:"/images/home-icon.svg"}),Object(h.jsx)("span",{children:"HOME"})]}),Object(h.jsxs)("a",{children:[Object(h.jsx)("img",{src:"/images/search-icon.svg"}),Object(h.jsx)("span",{children:"SEARCH"})]}),Object(h.jsxs)("a",{children:[Object(h.jsx)("img",{src:"/images/watchlist-icon.svg"}),Object(h.jsx)("span",{children:"WATCHLLIST"})]}),Object(h.jsxs)("a",{children:[Object(h.jsx)("img",{src:"/images/original-icon.svg"}),Object(h.jsx)("span",{children:"ORIGINALS"})]}),Object(h.jsxs)("a",{children:[Object(h.jsx)("img",{src:"/images/movie-icon.svg"}),Object(h.jsx)("span",{children:"MOVIES"})]}),Object(h.jsxs)("a",{children:[Object(h.jsx)("img",{src:"/images/series-icon.svg"}),Object(h.jsx)("span",{children:"series"})]})]}),Object(h.jsx)(F,{onClick:function(){z.signOut().then((function(){n(E()),e.push("/login")}))},src:"https://lh3.googleusercontent.com/ogw/ADea4I7g3orZpWi_FCG-oPecHVjIgYra2_caqSMJSytuAa0=s32-c-mo"})]})]})},J=C.a.nav(m||(m=Object(k.a)(["\n  height:70px;\n  background: #090b13;\n  display: flex;\n  align-items:center;\n  padding: 0 36px;\n  "]))),U=C.a.img(O||(O=Object(k.a)(["\n  width:80px;\n"]))),X=C.a.div(f||(f=Object(k.a)(['\n  display: flex;\n  flex:1;\n  margin-left:25px;\n  align-items:center;\n\n  a{\n      display: flex;\n      align-items: center;\n      padding: 0 12px;\n      cursor:pointer;\n\n      img{\n          height:20px;\n      }\n      span{\n          font-size: 13px; \n          letter-spacing: 1.42px;\n          position: relative; \n\n\n          &:after{\n              content:"";\n              height:2px;\n              background-color:white;\n              position: absolute;\n              left:0;\n              right:0;\n              bottom:-6px;\n              opacity:0;\n              \n              transform-origin:left-center;\n              transition: all 250ms cubic-bezier(0.25 ,0.46 ,0.45 ,0.94) 0s;\n              transform: scaleX(0);\n          }\n      }\n      &:hover{\n          span:after{\n              transform: scaleX(1);\n              opacity:1;\n          }\n      }\n  }\n']))),F=C.a.img(v||(v=Object(k.a)(["\n   width:48px;\n   height:48px;\n   border-radius:50%;\n   cursor:pointer;\n"]))),H=C.a.div(w||(w=Object(k.a)(["\nborder : 1px solid #f9f9f9;\npadding: 8px 16px;\nborder-radius:4px;\nletter-spacing:1.5px;\ntext-transform: uppercase;\nbackground-color:rgba(0 ,0, 0, 0.6);\ntransition:all 0.2s ease 0s;\ncursor:pointer;\n\n\n&:hover{\n    background-color:#f9f9f9;\n    color:#000;\n    border-color:transparent;\n\n}\n\n\n"]))),N=C.a.div(y||(y=Object(k.a)(["\n flex:1;\n display:flex;\n justify-content: flex-end;\n\n\n"]))),Y=t(27),K=t(44),q=t.n(K);t(76),t(77);var Q,Z,$=function(){return Object(h.jsxs)(nn,Object(Y.a)(Object(Y.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoPlay:!0}),{},{children:[Object(h.jsx)(en,{children:Object(h.jsx)("img",{src:"/images/slider-badging.jpg"})}),Object(h.jsx)(en,{children:Object(h.jsx)("img",{src:"/images/slider-badag.jpg"})}),Object(h.jsx)(en,{children:Object(h.jsx)("img",{src:"/images/slider-badging.jpg"})})]}))},nn=Object(C.a)(q.a)(P||(P=Object(k.a)(["\nmargin-top:20px;\n\nul li button {\n    &:before{\n        font-size:10px;\n        color: rgb (150, 150, 117);\n    }\n}\nli.slick-active button:before{\n    color : white;\n}\n.slick-list{\n    overflow: visible;\n}\nbutton {\n    z-index:1;\n}\n\n"]))),en=C.a.div(V||(V=Object(k.a)(["\ncursor:pointer;\n img {\n     border : 4px solid transparent;\n     width:100%;\n     height:100%;\n     border-radius:4px;\n     box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n     rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n     transition-duration:300ms;\n\n     &:hover{\n         border: 4px solid rgba(249, 249, 249, 0.8);\n     }\n }\n\n"])));var tn,rn,cn,an=function(){return Object(h.jsxs)(on,{children:[Object(h.jsx)(sn,{children:Object(h.jsx)("img",{src:"/images/viewers-disney.png"})}),Object(h.jsx)(sn,{children:Object(h.jsx)("img",{src:"/images/viewers-pixar.png"})}),Object(h.jsx)(sn,{children:Object(h.jsx)("img",{src:"/images/viewers-marvel.png"})}),Object(h.jsx)(sn,{children:Object(h.jsx)("img",{src:"/images/viewers-starwars.png"})}),Object(h.jsx)(sn,{children:Object(h.jsx)("img",{src:"/images/viewers-national.png"})})]})},on=C.a.div(Q||(Q=Object(k.a)(["\n        margin-top:30px;\n        display: grid;\n        padding :30px 0 26px;\n        grid-gap:25px;\n        grid-template-columns: repeat(5, minmax(0,1fr));\n\n"]))),sn=C.a.div(Z||(Z=Object(k.a)(["\n\n border: 3px solid rgba(249,249,249,0.1);\n border-radius:10px;\n cursor:pointer:\n box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n     rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  img{\n      width:100%;\n      height:100%;\n      object-fit:cover;\n  }\n  &:hover{\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    transition: all 250ms cubic-bezier(0.25 ,0.46 ,0.45 ,0.94) 0s;\n      transform :scale(1.05);\n      border: 4px solid rgba(249, 249, 249, 0.8);\n  }\n"]))),dn=t(25),pn=Object(b.c)({name:" movie",initialState:{movies:[]},reducers:{setMovies:function(n,e){n.movies=e.payload}}}),ln=pn.actions.setMovies,bn=function(n){return n.movie.movies},jn=pn.reducer;var xn,gn=function(){var n=Object(s.c)(bn);return Object(h.jsxs)(un,{children:[Object(h.jsx)("h4",{children:"Recommend for you"}),Object(h.jsx)(hn,{children:n&&n.map((function(n){return Object(h.jsx)(mn,{children:Object(h.jsx)(dn.b,{to:"/detail/".concat(n.id),children:Object(h.jsx)("img",{src:n.cardImg})})},n.id)}))})]})},un=C.a.div(tn||(tn=Object(k.a)(["\n    padding:\n\n\n\n"]))),hn=C.a.div(rn||(rn=Object(k.a)(["\n  display : grid;\n  grid-gap:25px;\n  grid-template-columns: repeat(4, minmax(0,1fr));\n"]))),mn=C.a.div(cn||(cn=Object(k.a)(["\n   border-radius:10px;\n   overflow:hidden;\n   cursor:pointer;\n   border: 3px solid rgba(249, 249, 249, 0.1);\n   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    transition: all 250ms cubic-bezier(0.25 ,0.46 ,0.45 ,0.94) 0s;\n\n   img{\n    width:100%;\n    height:100%;\n    object-fit: cover;\n   }\n   &:hover{\n    transform :scale(1.05);\n    border-color:rgba(249, 249, 249, 0.8);\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n    rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n\n   }\n\n"])));var On,fn,vn,wn,yn,kn,_n,Sn,zn,In,An=function(){var n=Object(s.b)();return Object(i.useEffect)((function(){A.collection("movies").onSnapshot((function(e){var t=e.docs.map((function(n){return Object(Y.a)({id:n.id},n.data())}));n(ln(t))}))}),[]),Object(h.jsxs)(Cn,{children:[Object(h.jsx)($,{}),Object(h.jsx)(an,{}),Object(h.jsx)(gn,{})]})},Cn=C.a.main(xn||(xn=Object(k.a)(['\n   min-height:calc(100vh - 70px);\n   padding: 0 calc(3.5vw + 5px);\n   position:relative;\n   overflow-x:hidden;\n   \n   &:before{\n    background:url("/images/home-background.png") center center / cover \n    no-repeat fixed;\n    position: absolute;\n    content: "";\n    top:0;\n    bottom:0;\n    left:0;\n    right:0;\n    z-index -1;\n   }\n\n'])));var Rn,Ln,Tn,Bn,En,Gn,Mn=function(){var n=Object(R.g)().id,e=Object(i.useState)(),t=Object(o.a)(e,2),r=t[0],c=t[1];return Object(i.useEffect)((function(){A.collection("movies").doc(n).get().then((function(n){n.exists&&c(n.data())}))}),[]),Object(h.jsx)(Wn,{children:r&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Pn,{children:Object(h.jsx)("img",{src:r.backgroundImg})}),Object(h.jsx)(Vn,{children:Object(h.jsx)("img",{src:r.titleImg})}),Object(h.jsxs)(Dn,{children:[Object(h.jsxs)(Jn,{children:[Object(h.jsx)("img",{src:"/images/play-icon-black.png"}),Object(h.jsx)("span",{children:"PLAY"})]}),Object(h.jsxs)(Un,{children:[Object(h.jsx)("img",{src:"/images/play-icon-white.png"}),Object(h.jsx)("span",{children:"TRAILER"})]}),Object(h.jsx)(Xn,{children:Object(h.jsx)("span",{children:"+"})}),Object(h.jsx)(Fn,{children:Object(h.jsx)("img",{src:"/images/group-icon.png"})})]}),Object(h.jsx)(Hn,{children:r.subTitle}),Object(h.jsx)(Nn,{children:r.description})]})})},Wn=C.a.div(On||(On=Object(k.a)(["\n  min-height:calc(100vh - 70px);\n  padding : 0 calc(3.5vw + 5px);\n  position: relative;\n\n"]))),Pn=C.a.div(fn||(fn=Object(k.a)(["\n position:fixed;\n top:0;\n left:0;\n bottom:0;\n right:0;\n z-index:-1;\n opacity:0.8;\n  img {\n      width:100%;\n      height:100%;\n      object-fit:cover;\n  }\n"]))),Vn=C.a.div(vn||(vn=Object(k.a)(["\n height:30vh;\n min-height:170px;\n width:35vw;\n min-width :200px;\n   img{\n     width:100%;\n     height:100%;\n     object-fit:contain;\n\n   }\n"]))),Dn=C.a.div(wn||(wn=Object(k.a)(["\n  display:flex;\n  align-items:center;\n"]))),Jn=C.a.button(yn||(yn=Object(k.a)(["\n border-radius:4px;\n padding: 0px 24px;\n margin-right:22px; \n font-size:15px; \n display: flex;\n align-items:center;\n height:56px;\n background: rgb(249,249,249);\n border:none;\n letter-spacing:1.8px;\n cursor:pointer;\n\n &:hover{\n     background: rgb(198,198,198);\n }\n"]))),Un=Object(C.a)(Jn)(kn||(kn=Object(k.a)(["\n background: rgba(0,0,0,0.3);\n border:  1px solid rgb(249,249,249);\n color:rgb(249,249,249);\n"]))),Xn=C.a.button(_n||(_n=Object(k.a)(["\nmargin-right:16px;\nwidth:44px;\nheight:44px;\ndisplay:flex\nalign-items:center;\njustify-content:center;\nborder-radius:50%;\nborder:white;\nbackground:rgba(0,0,0,0.6);\ncursor:pointer;\n\nspan{\n    font-size:30px;\n    color:white;\n}\n"]))),Fn=Object(C.a)(Xn)(Sn||(Sn=Object(k.a)(["\n background:rgb(0,0,0);\n"]))),Hn=C.a.div(zn||(zn=Object(k.a)(["\ncolor: rgb(249,249,249);\nfont-size:15px;\nmin-height:20px;\nmargin-top:26px;\n\n"]))),Nn=C.a.div(In||(In=Object(k.a)(["\nline-height:1.4;\nfont-size:20px;\nmargin-top:16px;\ncolor: rgb(249,249,249);\n\n"])));var Yn=function(){return Object(h.jsx)(Kn,{children:Object(h.jsxs)(qn,{children:[Object(h.jsx)(Qn,{src:"/images/cta-logo-one.svg"}),Object(h.jsx)(Zn,{children:"Get All There"}),Object(h.jsx)($n,{children:"To get started with React Router in a web app, you\u2019ll need a React web app. If you need to create one, we recommend you try Create React App."}),Object(h.jsx)(ne,{src:"/images/cta-logo-two.png"})]})})},Kn=C.a.div(Rn||(Rn=Object(k.a)(['\n   position:relative;\n   height: calc(100vh - 70px);\n   display:flex;\n   align-items:top;\n   justify-content:center;\n\n  {\n    background-position:top;\n    background-size:cover;\n    backgorund-repeat:no-repeat;\n    background-image: url("/images/login-background.jpg");\n    position:absolute;\n    top:0;\n    bottom:0;\n    right:0;\n    left:0;\n    content:"";\n   // opacity:0.7;\n   \n    z-index= -1;\n }\n\n']))),qn=C.a.div(Ln||(Ln=Object(k.a)(["\n max-width:650px;\n padding:80px 40px;\n width:90%;\n display:flex;\n flex-direction:column;\n margin-top:100px;\n align-items:center;\n\n"]))),Qn=C.a.img(Tn||(Tn=Object(k.a)(["\n\n\n"]))),Zn=C.a.a(Bn||(Bn=Object(k.a)(["\n width:100%;\n background-color:#0063e5;\n font-weight:bold;\n padding:17px 0;\n color:#f9f9f9;\n border-radius:4px;\n text-align:center;\n font-size:18px;\n cursor: pointer;\n transition : all 250ms;\n letter-spacing:1.5px\n margin-top:8px;\n margin-bottom:12px;\n\n\n &:hover{\n     background:#0483ee;\n }\n\n"]))),$n=C.a.p(En||(En=Object(k.a)(["\nfont-size:11px;\nletter-spacing:1.5px;\ntext-align:center;\nline-height:1.5px;\n\n"]))),ne=C.a.img(Gn||(Gn=Object(k.a)(["\nwidth:90%;\n\n\n"])));var ee=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(dn.a,{children:[Object(h.jsx)(D,{}),Object(h.jsxs)(R.c,{children:[Object(h.jsx)(R.a,{path:"/login",children:Object(h.jsx)(Yn,{})}),Object(h.jsx)(R.a,{path:"/detail/:id",children:Object(h.jsx)(Mn,{})}),Object(h.jsx)(R.a,{path:"/",children:Object(h.jsx)(An,{})})]})]})})},te=Object(b.a)({reducer:{movie:jn,user:W}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(s.a,{store:te,children:Object(h.jsx)(ee,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[78,1,2]]]);
//# sourceMappingURL=main.ec48bcca.chunk.js.map