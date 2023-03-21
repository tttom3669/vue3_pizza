import{C as V,c as j}from"./collectionStore-ee931f66.js";import{_ as h,r as i,o as c,c as r,a as t,b as e,w as n,m as f,d as B,e as d,t as l,n as D,F as b,f as k,g as C,h as R,v as I,i as N,j as S}from"./index-4876b214.js";import{c as F}from"./cartStore-8483c875.js";import{p as L}from"./productsStore-67be0d36.js";import"./swalMessage-ff11b17e.js";import"./sweetalert2.all-29b523f9.js";const z="/vue3_pizza/assets/logo1-731d828d.png",P={components:{CategorySidebar:V}},T={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offcanvasRight","aria-labelledby":"offcanvasRightLabel"},q={class:"offcanvas-header"},M={id:"offcanvasRightLabel"},O=t("img",{src:z,alt:"logo"},null,-1),U=t("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},null,-1),A={class:"offcanvas-body"};function E(s,m,_,g,x,y){const a=i("router-link"),p=i("CategorySidebar");return c(),r("div",T,[t("div",q,[t("h5",M,[e(a,{class:"navbar-brand",to:"/"},{default:n(()=>[O]),_:1})]),U]),t("div",A,[e(p)])])}const H=h(P,[["render",E]]);const Y={components:{NavOffcanvas:H},methods:{...f(F,["getCart","updateCartItem","deleteCartItem"]),...f(L,["getProduct","getProducts"]),...f(j,["getCollection"])},computed:{...B(F,["cart"])},mounted(){this.getCart()}},G={class:"navbar navbar-expand-lg navbar-light bg-white"},J={class:"container"},K=t("img",{src:z,alt:"logo"},null,-1),Q=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight"},[t("span",{class:"navbar-toggler-icon"})],-1),W={class:"d-none d-lg-block justify-content-end",id:"navbarNavAltMarkup"},X={class:"navbar-nav"},Z=t("i",{class:"bi bi-heart"},null,-1),tt={class:"dropdown"},et={class:"nav-item nav-link position-relative",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},ot=t("i",{class:"bi bi-bag"},null,-1),st={class:"badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle"},at=t("h6",{class:"dropdown-header"},"購物車",-1),nt={class:"d-flex flex-column justify-content-center align-items-center"},ct={key:0,class:"table"},rt=["src"],it={class:"p-2"},lt={class:"d-flex flex-column"},dt={class:"text-nowrap mb-1"},_t={class:"text-nowrap mb-1"},pt=["onUpdate:modelValue","onChange"],ut=["value"],vt={class:"text-nowrap p-2"},ht={class:"p-2"},mt=["onClick"],ft=t("i",{class:"bi bi-trash3"},null,-1),bt=[ft],gt=t("td",{colspan:"2",class:"py-2 h5 text-cusDarkBrown fw-bold text-center"},"小計",-1),xt={colspan:"2",class:"py-2 h5 text-cusDarkBrown fw-bold text-nowrap"},yt={key:1,class:"h6 text-nowrap p-3"};function $t(s,m,_,g,x,y){var v,$,w;const a=i("router-link"),p=i("NavOffcanvas");return c(),r(b,null,[t("nav",G,[t("div",J,[e(a,{class:"navbar-brand",to:"/"},{default:n(()=>[K]),_:1}),Q,t("div",W,[t("div",X,[e(a,{class:"nav-item nav-link me-4 active",to:"/"},{default:n(()=>[d("首頁")]),_:1}),e(a,{class:"nav-item nav-link me-4",to:"/"},{default:n(()=>[d("最新消息")]),_:1}),e(a,{class:"nav-item nav-link me-4",to:"/products"},{default:n(()=>[d("美味菜單")]),_:1}),e(a,{class:"nav-item nav-link me-4",to:"/login"},{default:n(()=>[Z]),_:1}),t("div",tt,[t("div",et,[ot,t("span",st,l((v=s.cart.carts)==null?void 0:v.length),1)]),t("div",{class:D(["dropdown-menu dropdown-menu-end overflow-auto m-0",{cartHeight:(($=s.cart.carts)==null?void 0:$.length)>=4}])},[at,t("div",nt,[s.cart.carts?(c(),r("table",ct,[(c(!0),r(b,null,k(s.cart.carts,o=>(c(),r("tr",{class:"border",key:o.id,style:{width:"300px"}},[t("td",null,[t("img",{src:o.product.imageUrl,alt:"",class:"object-fit-cover",height:"70",width:"70"},null,8,rt)]),t("td",it,[t("div",lt,[t("div",dt,[e(a,{to:`/product/${o.product.id}`,class:"text-decoration-none text-cusDarkBrown",onClick:C(()=>s.getProduct(o.product.id),["prevent"])},{default:n(()=>[d(l(o.product.title),1)]),_:2},1032,["to","onClick"])]),t("div",_t," NT$ "+l(o.product.price)+" / "+l(o.product.unit),1),R(t("select",{class:"form-select form-select-sm","onUpdate:modelValue":u=>o.qty=u,onChange:()=>s.updateCartItem(o,o.qty)},[(c(),r(b,null,k(99,u=>t("option",{value:u,key:u+"num"},l(u),9,ut)),64))],40,pt),[[I,o.qty]])])]),t("td",vt,"NT$ "+l(o.total),1),t("td",ht,[t("div",{type:"button",onClick:C(()=>s.deleteCartItem(o),["prevent"])},bt,8,mt)])]))),128)),t("tr",null,[gt,t("td",xt,"NT$ "+l(s.cart.total),1)])])):N("",!0),e(a,{type:"button",class:"btn btn-primary text-white w-75",to:"/cart"},{default:n(()=>[d(" 結帳去 ")]),_:1}),((w=s.cart.carts)==null?void 0:w.length)==0?(c(),r("p",yt,"您的購物車目前是空的喔")):N("",!0)])],2)])])])])]),e(p)],64)}const wt=h(Y,[["render",$t]]),kt="/vue3_pizza/assets/logo2-8c9a8bf9.png";const Ct={},Nt={class:"footer py-5 py-md-2"},Ft={class:"container"},St=S('<div class="row d-flex justify-content-between border-bottom"><div class="col-md-6 text-center text-md-start"><img src="'+kt+'" class="float-center" alt="logo"></div><div class="col-md-6"><div class="text-white text-center text-md-end p-3"><h5 class="text-primary">聯絡資訊</h5><p>YoPizza@mail.com</p><p>03-123-5678</p><p>桃園市隔壁區小陶路123號</p></div></div></div>',1),zt={class:"row justify-content-between align-items-center flex-column flex-md-row g-1"},Vt={class:"col text-center text-md-start"},jt={class:"py-3"},Bt=S('<div class="col order-md-2 order-3"><p class="text-white text-center m-0"> 此專題僅供作品展示，非商業用途使用 </p></div><div class="col order-2"><div class="text-white text-center text-md-end mb-1"><i class="bi bi-facebook me-3"></i><i class="bi bi-instagram me-3"></i><i class="bi bi-github me-3"></i></div></div>',2);function Dt(s,m){const _=i("router-link");return c(),r("footer",Nt,[t("div",Ft,[St,t("div",zt,[t("div",Vt,[t("div",jt,[e(_,{class:"btn btn-sm btn-secondary me-3",to:"/"},{default:n(()=>[d("常見問題")]),_:1}),e(_,{class:"btn btn-sm btn-secondary",to:"/login"},{default:n(()=>[d(" 後台管理")]),_:1})])]),Bt])])])}const Rt=h(Ct,[["render",Dt]]),It={data(){return{}},components:{FrontNavbar:wt,FrontFooter:Rt}},Lt={class:"d-flex flex-column min-vh-100"},Pt={class:"flex-grow-1",style:{"min-height":"600px"}};function Tt(s,m,_,g,x,y){const a=i("FrontNavbar"),p=i("router-view"),v=i("FrontFooter");return c(),r("div",Lt,[e(a),t("div",Pt,[e(p)]),e(v)])}const Ht=h(It,[["render",Tt]]);export{Ht as default};
