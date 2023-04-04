import{_ as w,R as x,a as h,m as v,r as u,o as s,c as n,b as t,d as c,w as b,g as l,F as g,e as y,f,t as i,h as d,k as C}from"./index-2811925f.js";import{c as p}from"./collectionStore-190842b8.js";import{c as L,l as B}from"./cartStore-5e63958d.js";import"./swalMessage-5f2e5e08.js";const V={components:{RouterLink:x},methods:{...h(p,["getCollection","updateCollection"]),...h(L,["addToCart"])},computed:{...v(p,["filterProducts"]),...v(B,["isLoading","loadingItem"])},mounted(){this.getCollection()}},N={class:"bg_texture3",style:{"min-height":"600px"}},$={class:"container"},P=t("div",{class:"d-flex flex-column align-items-start justify-content-center mt-3"},[t("h3",{class:"fw-bold mt-1 border-3 border-start border-primary"},[t("span",{class:"text-cusDarkBrown ms-3"},"收藏清單")])],-1),S={key:0,class:"d-flex flex-column justify-content-center align-items-center",style:{"margin-top":"100px"}},D=t("div",{class:"text-center my-5 fw-bold text-cusBrown fs-4"},[t("i",{class:"bi bi-bag-heart"}),f(" 您的收藏清單目前是空的喔 ")],-1),T={class:"w-100 text-center"},j=t("button",{type:"button",class:"btn btn-cusDarkBrown text-white w-md-25 w-50"}," 返回購物 ",-1),R={key:1,class:"mt-4 mb-5"},F={key:0,class:"row py-2 border-bottom fw-bold text-cusDarkBrown text-center"},U=C('<div class="col d-lg-none d-block">商品明細</div><div class="col d-none d-lg-block"></div><div class="col d-none d-lg-block">品名</div><div class="col d-none d-lg-block">分類</div><div class="col">價格</div><div class="col-2 col-lg-2">購買</div><div class="col-2 col-lg-2"> 取消<span class="d-none d-md-inline">收藏</span></div>',7),A=[U],E={class:"col-md-2 col-4 py-2"},I=["src","alt"],M={class:"col-md-2 col-4"},q={class:"d-flex flex-column justify-content-center"},z={class:"text-nowrap mb-1"},G={class:"text-nowrap mb-1 d-md-none d-block"},H={class:"col-2 d-md-block d-none"},J={class:"col-2 d-md-block d-none"},K={class:"text-nowrap mb-1"},O={class:"col-2 order-md-4"},Q=["onClick"],W=t("i",{class:"bi bi-bag-plus"},null,-1),X=[W],Y={class:"col-2 order-md-5"},Z=["onClick"],tt=t("i",{class:"bi bi-trash3"},null,-1),ot=[tt];function et(e,a,st,nt,it,ct){var _,m;const r=u("RouterLink"),k=u("VueLoading");return s(),n(g,null,[t("div",N,[t("div",$,[P,((_=e.filterProducts)==null?void 0:_.length)===0?(s(),n("div",S,[D,t("div",T,[c(r,{class:"text-decoration-none text-white",to:"/products"},{default:b(()=>[j]),_:1})])])):l("",!0),e.filterProducts?(s(),n("div",R,[(m=e.filterProducts)!=null&&m.length?(s(),n("div",F,A)):l("",!0),(s(!0),n(g,null,y(e.filterProducts,o=>(s(),n("div",{class:"row align-items-center border-bottom text-center bg-white",key:o.id},[t("div",E,[t("img",{src:o.imageUrl,alt:o.title,class:"object-fit-cover",height:"70",width:"70"},null,8,I)]),t("div",M,[t("div",q,[t("div",z,[c(r,{to:`/product/${o.id}`,class:"text-decoration-none fw-bold text-cusDarkBrown",onClick:d(()=>e.getProduct(o.id),["prevent"])},{default:b(()=>[f(i(o.title),1)]),_:2},1032,["to","onClick"])]),t("div",G," NT$ "+i(o.price)+" / "+i(o.unit),1)])]),t("div",H,i(o.productCategory),1),t("div",J,[t("div",K," NT$ "+i(o.price)+" / "+i(o.unit),1)]),t("div",O,[t("div",{type:"button",class:"navBarLink",onClick:d(()=>e.addToCart(o.id),["prevent"])},X,8,Q)]),t("div",Y,[t("div",{type:"button",class:"navBarLink",onClick:d(()=>e.updateCollection(o),["prevent"])},ot,8,Z)])]))),128))])):l("",!0)])]),c(k,{active:e.isLoading,"onUpdate:active":a[0]||(a[0]=o=>e.isLoading=o),loader:"dots"},null,8,["active"])],64)}const _t=w(V,[["render",et]]);export{_t as default};
