import{_ as h,a as $,b as k,c as T,d as j,e as w,f as H,g as W,h as I,i as D,j as S,k as F,l as Z,m as C,n as E,o as V,p as z,q as K,r as M,s as B,t as N,u as P,v as L,w as q,x as A,y as O,z as R,A as U,B as G,C as J,D as Q,E as X,F as Y,G as x,H as ee,I as te,J as o,K as d,L as p,M as _,N as i,O as e,P as n,Q as s,T as se,Y as ne,V as oe,W as _e,X as ie}from"./index.448e6224.js";const le={name:"APP",props:[],data(){return{msg1:"Hello, main!",bannerImg:[1,2,3,4],bannerWidth:0,bannerHeight:0,screenWidth:0,showWidth:920,topic2:[0,1,2,3],imgFolder:"banner"}},methods:{getImgUrl(t){return new URL(Object.assign({"../assets/img/a.png":$,"../assets/img/banner/1.jpg":k,"../assets/img/banner/2.jpg":T,"../assets/img/banner/3.jpg":j,"../assets/img/banner/4.jpg":w,"../assets/img/banner1/1.jpg":H,"../assets/img/banner1/2.jpg":W,"../assets/img/banner1/3.jpg":I,"../assets/img/bannerZH/1.jpg":D,"../assets/img/bannerZH/2.jpg":S,"../assets/img/bannerZH/3.jpg":F,"../assets/img/bannerZH/4.jpg":Z,"../assets/img/banner_full/1.jpg":C,"../assets/img/banner_full/2.jpg":E,"../assets/img/banner_full/3.jpg":V,"../assets/img/banner_full/4.jpg":z,"../assets/img/banner_fullZH/1.jpg":K,"../assets/img/banner_fullZH/2.jpg":M,"../assets/img/banner_fullZH/3.jpg":B,"../assets/img/banner_fullZH/4.jpg":N,"../assets/img/banner_new/1.png":P,"../assets/img/chairmen/blank.png":L,"../assets/img/chairmen/fugee-tsung.jpg":q,"../assets/img/chairmen/fugee-tsung.png":A,"../assets/img/inv1.jpg":O,"../assets/img/logo/CIEDH.jpg":R,"../assets/img/logo/IEI.jpg":U,"../assets/img/logo/IEI.png":G,"../assets/img/logo/glkx.jpg":J,"../assets/img/logo/guangdonggongye.png":Q,"../assets/img/logo/hkdd.gif":X,"../assets/img/logo/hkustgz.png":Y,"../assets/img/logo/jinan.svg":x,"../assets/img/logo/shenzhen.png":ee,"../assets/img/logo_blue-2x.png":te})[`../assets/img/${t}`],self.location).href}},created(){this.screenWidth=document.body.clientWidth,window.onresize=()=>(()=>{this.screenWidth=document.body.clientWidth})()},mounted(){this.bannerWidth=this.$refs.banner.offsetWidth,console.log(this.bannerWidth),this.bannerHeight=this.bannerWidth/20*11},watch:{screenWidth:{handler:function(t){t*.9<920?(this.showWidth=t*.9,this.bannerHeight=this.showWidth/20*11):(this.showWidth=920,this.bannerHeight=this.showWidth/20*11)},immediate:!0,deep:!0}},components:{}},ae={style:{"font-size":"16px",color:"#212529"}},ge={id:"04",class:"conferencePart"},he=e("span",null,null,-1),de={class:"sq_content"},pe=e("span",null,null,-1),me={style:{"margin-top":"10px"}},re={class:"themeTitle"},ce={class:"themeTitle",style:{"margin-top":"10px","margin-bottom":"10px"}},ue={class:"info"},be={class:"themeTitle"},ye={class:"info"},ve=e("div",{style:{float:"right","margin-top":"10px",clear:"both"},align:"center"},null,-1),fe={class:"themeTitle"},$e=e("span",null,null,-1),ke={style:{"margin-top":"10px"}},Te={class:"themeTitle"},je={class:"themeTitle",style:{"margin-top":"10px","margin-bottom":"10px"}},we={class:"info"},He={class:"themeTitle"},We={class:"info"},Ie=e("div",{style:{float:"right","margin-top":"10px",clear:"both"},align:"center"},null,-1),De={class:"themeTitle"},Se=e("span",null,null,-1),Fe={style:{"margin-top":"10px"}},Ze={class:"themeTitle"},Ce={class:"themeTitle",style:{"margin-top":"10px","margin-bottom":"10px"}},Ee={class:"info"},Ve={class:"themeTitle"},ze={class:"info"},Ke=e("div",{style:{float:"right","margin-top":"10px",clear:"both"},align:"center"},null,-1),Me={class:"themeTitle"},Be=e("span",null,null,-1),Ne={style:{"margin-top":"10px"}},Pe={class:"themeTitle"},Le={class:"themeTitle",style:{"margin-top":"10px","margin-bottom":"10px"}},qe={class:"info"},Ae={class:"themeTitle"},Oe={class:"info"},Re=e("div",{style:{float:"right","margin-top":"10px",clear:"both"},align:"center"},null,-1),Ue={class:"themeTitle"},Ge=e("span",null,null,-1),Je={style:{"margin-top":"10px"}},Qe={class:"themeTitle"},Xe={class:"themeTitle",style:{"margin-top":"10px","margin-bottom":"10px"}},Ye={class:"info"},xe={class:"themeTitle"},et={class:"info"},tt=e("div",{style:{float:"right","margin-top":"10px",clear:"both"},align:"center"},null,-1),st={class:"themeTitle"};function nt(t,m,r,c,l,u){const a=o("el-col"),g=o("el-row");return d(),p("div",ae,[_(g,{justify:"center"},{default:i(()=>[_(a,null,{default:i(()=>[e("div",{style:se({width:l.showWidth+"px",margin:"auto","font-family":"Roboto"}),ref:"banner"},[e("div",ge,[e("h1",null,[he,n(s(t.$t("keynote_04_title")),1)]),e("div",de,[e("div",null,[e("h2",null,[pe,n(" "+s(t.$t("keynote_04.0.name")),1)]),e("p",null,s(t.$t("keynote_04.0.department.0")),1),e("p",me,[e("span",re,s(t.$t("keynote_04.0.timeTitle")),1),n(": "+s(t.$t("keynote_04.0.time")),1)]),e("p",ce,s(t.$t("keynote_04.0.theme")),1),e("div",ue,[e("span",be,s(t.$t("keynote_04.0.infoTitle")),1),n(": "+s(t.$t("keynote_04.0.info")),1)]),e("div",ye,[ve,e("span",fe,s(t.$t("keynote_04.0.bioTitle")),1),n(": "+s(t.$t("keynote_04.0.bio")),1)])]),e("div",null,[e("h2",null,[$e,n(" "+s(t.$t("keynote_04.1.name")),1)]),e("p",null,s(t.$t("keynote_04.1.department.0")),1),e("p",ke,[e("span",Te,s(t.$t("keynote_04.1.timeTitle")),1),n(": "+s(t.$t("keynote_04.0.time")),1)]),e("p",je,s(t.$t("keynote_04.1.theme")),1),e("div",we,[e("span",He,s(t.$t("keynote_04.1.infoTitle")),1),n(": "+s(t.$t("keynote_04.1.info")),1)]),e("div",We,[Ie,e("span",De,s(t.$t("keynote_04.1.bioTitle")),1),n(": "+s(t.$t("keynote_04.1.bio")),1)])]),e("div",null,[e("h2",null,[Se,n(" "+s(t.$t("keynote_04.2.name")),1)]),e("p",null,s(t.$t("keynote_04.2.department.0")),1),e("p",null,s(t.$t("keynote_04.2.department.1")),1),e("p",Fe,[e("span",Ze,s(t.$t("keynote_04.2.timeTitle")),1),n(": "+s(t.$t("keynote_04.2.time")),1)]),e("p",Ce,s(t.$t("keynote_04.2.theme")),1),e("div",Ee,[e("span",Ve,s(t.$t("keynote_04.2.infoTitle")),1),n(": "+s(t.$t("keynote_04.2.info")),1)]),e("div",ze,[Ke,e("span",Me,s(t.$t("keynote_04.2.bioTitle")),1),n(": "+s(t.$t("keynote_04.2.bio")),1)])]),e("div",null,[e("h2",null,[Be,n(" "+s(t.$t("keynote_04.3.name")),1)]),e("p",null,s(t.$t("keynote_04.3.department.0")),1),e("p",Ne,[e("span",Pe,s(t.$t("keynote_04.3.timeTitle")),1),n(": "+s(t.$t("keynote_04.3.time")),1)]),e("p",Le,s(t.$t("keynote_04.3.theme")),1),e("div",qe,[e("span",Ae,s(t.$t("keynote_04.3.infoTitle")),1),n(": "+s(t.$t("keynote_04.3.info")),1)]),e("div",Oe,[Re,e("span",Ue,s(t.$t("keynote_04.3.bioTitle")),1),n(": "+s(t.$t("keynote_04.3.bio")),1)])]),e("div",null,[e("h2",null,[Ge,n(" "+s(t.$t("keynote_04.4.name")),1)]),e("p",null,s(t.$t("keynote_04.4.department.0")),1),e("p",null,s(t.$t("keynote_04.4.department.1")),1),e("p",Je,[e("span",Qe,s(t.$t("keynote_04.4.timeTitle")),1),n(": "+s(t.$t("keynote_04.4.time")),1)]),e("p",Xe,s(t.$t("keynote_04.4.theme")),1),e("div",Ye,[e("span",xe,s(t.$t("keynote_04.4.infoTitle")),1),n(": "+s(t.$t("keynote_04.4.info")),1)]),e("div",et,[tt,e("span",st,s(t.$t("keynote_04.4.bioTitle")),1),n(": "+s(t.$t("keynote_04.4.bio")),1)])])])])],4)]),_:1})]),_:1})])}const ot=h(le,[["render",nt]]);const _t={name:"home_view",data(){return{msgH:null,timeData:null,sliceData:null,basicData:null,activeMenu:"2"}},computed:{initSign(){},loadingText(){return"Loading"}},mounted(){const t=ne();t.defaultValue="2"},methods:{fetchData(){}},components:{Header:oe,Keynote:ot}},it=t=>(_e("data-v-c08bfa56"),t=t(),ie(),t),lt={class:"common-layout",style:{width:"100%",height:"100vh","overflow-y":"auto","background-color":"#FFFFFF"}},at=it(()=>e("div",{style:{"text-align":"center"}}," Copyright \xA9 CSIE 2023 & CIEDH 2023 ",-1));function gt(t,m,r,c,l,u){const a=o("Header"),g=o("el-header"),b=o("Keynote"),y=o("el-main"),v=o("el-footer"),f=o("el-container");return d(),p("div",lt,[_(f,null,{default:i(()=>[_(g,null,{default:i(()=>[_(a,{activeMenu:l.activeMenu},null,8,["activeMenu"])]),_:1}),_(y,null,{default:i(()=>[_(b)]),_:1}),_(v,null,{default:i(()=>[at]),_:1})]),_:1})])}const dt=h(_t,[["render",gt],["__scopeId","data-v-c08bfa56"]]);export{dt as default};