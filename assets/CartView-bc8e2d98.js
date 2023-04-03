import{_ as k,m as v,a as C,r as y,o,c as n,b as t,d,w as i,F as w,e as B,h as c,g as f,f as u,t as l,k as I}from"./index-bbf47dbb.js";import{c as g,l as $}from"./cartStore-ce1406cb.js";import"./swalMessage-cdcc8a09.js";const j={data(){return{}},computed:{...v(g,["cart"]),...v($,["isLoading","loadingItem"])},methods:{...C(g,["getCart","updateCartItem","deleteCartItem","deleteCart"])},mounted(){this.getCart()}},V={class:"bg_texture3",style:{"min-height":"600px"}},D={class:"container"},N=t("div",{class:"row d-flex justify-content-center mt-3"},[t("div",{class:"col-12 col-md-6"},[t("div",{class:"col"},[t("div",{class:"position-relative m-4"},[t("div",{class:"progress",style:{height:"1px"}},[t("div",{class:"progress-bar",role:"progressbar",style:{width:"50%"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"})]),t("div",{class:"position-absolute top-0 start-0 text-white translate-middle btn btn-sm btn-primary rounded-pill",style:{width:"2rem",height:"2rem"}}," 1 "),t("div",{class:"position-absolute top-0 start-50 text-white translate-middle btn btn-sm btn-secondary rounded-pill",style:{width:"2rem",height:"2rem"}}," 2 "),t("div",{class:"position-absolute top-0 start-100 text-white translate-middle btn btn-sm btn-secondary rounded-pill",style:{width:"2rem",height:"2rem"}}," 3 ")])]),t("div",{class:"col d-flex justify-content-between text-primary fw-bold"},[t("span",{class:"ms-n1"},"確認購買"),t("span",{class:"text-secondary"},"填寫資料"),t("span",{class:"text-secondary me-n1"},"完成訂單")])])],-1),L=t("div",{class:"d-flex flex-column align-items-start justify-content-center mt-3"},[t("h3",{class:"fw-bold mt-1 border-3 border-start border-primary"},[t("span",{class:"text-cusDarkBrown ms-3"},"購物車")])],-1),q={key:0,class:"d-flex flex-column justify-content-center align-items-center",style:{"margin-top":"100px"}},S=t("div",{class:"text-center my-5 fw-bold text-cusBrown fs-4"},[t("i",{class:"bi bi-cart-x"}),u(" 您的購物車目前是空的喔 ")],-1),T={class:"w-100 text-center"},F=t("button",{type:"button",class:"btn btn-cusDarkBrown text-white w-md-25 w-50"}," 返回購物 ",-1),U={key:1,class:"mt-4 mb-5"},A=I('<div class="row fw-bold text-cusDarkBrown text-center border-bottom py-2" style="background-color:#ffe3ce;"><div class="col-2"></div><div class="col-md-4">商品明細</div><div class="col d-none d-md-block">數量/單位</div><div class="col d-none d-md-block">小計</div></div>',1),E={class:"col-2 col-md-1 order-3 order-md-1"},M=["onClick","disabled"],z=t("i",{class:"fas fa-spinner fa-pulse"},null,-1),G=t("i",{class:"bi bi-trash3"},null,-1),H=[z,G],J={class:"col-2 col-md-1 order-1 order-md-2"},K=["src"],O={class:"col-8 col-md-4 order-2 order-md-3"},P={class:"d-flex flex-column text-nowrap"},Q={class:"col order-4 my-3"},R={class:"input-group input-group-sm"},W={class:"d-flex justify-content-center flex-nowrap"},X=["disabled","onClick"],Y=t("i",{class:"bi bi-dash"},null,-1),Z=[Y],tt=["value"],et=["disabled","onClick"],st=t("i",{class:"bi bi-plus"},null,-1),ot=[st],nt={class:"col text-end order-5"},dt={class:"row bg-white py-2"},at={class:"col"},it=["disabled"],lt={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},rt={class:"col-md-2 col text-end text-cusDarkBrown fw-bold fs-5"},ct={class:"d-flex justify-content-between"},ut=t("div",null,"總計",-1),_t={key:2,class:"row justify-content-end flex-row gy-3 mb-3"},pt={class:"col-md-2 col-6"},bt=t("button",{type:"button",class:"btn btn-cusDarkBrown text-white w-100"}," 返回購物 ",-1),ht={class:"col-md-2 col-6"},mt=t("button",{type:"button",class:"btn btn btn-primary w-100 text-white"}," 確認送出 ",-1);function vt(s,r,yt,wt,ft,gt){var _,p,b,h,m;const a=y("router-link"),x=y("VueLoading");return o(),n(w,null,[t("div",V,[t("div",D,[N,L,((_=s.cart.carts)==null?void 0:_.length)===0?(o(),n("div",q,[S,t("div",T,[d(a,{class:"text-decoration-none text-white",to:"/products"},{default:i(()=>[F]),_:1})])])):(o(),n("div",U,[A,(o(!0),n(w,null,B(s.cart.carts,e=>(o(),n("div",{class:"row justify-content-center bg-white border-bottom align-items-center text-cusDarkBrown text-center py-2",key:e.id},[t("div",E,[t("div",{type:"button",class:"text-center clickBtn",onClick:c(xt=>s.deleteCartItem(e),["prevent"]),disabled:s.loadingItem===e.id},H,8,M)]),t("div",J,[d(a,{to:`/product/${e.product.id}`},{default:i(()=>[t("img",{src:e.product.imageUrl,alt:"",class:"object-fit-cover",height:"70",width:"70"},null,8,K)]),_:2},1032,["to"])]),t("div",O,[t("div",P,[d(a,{to:`/product/${e.product.id}`,class:"text-decoration-none text-cusDarkBrown text"},{default:i(()=>[u(l(e.product.title),1)]),_:2},1032,["to"]),t("div",null,"NT$ "+l(e.product.price)+" / "+l(e.product.unit),1)])]),t("div",Q,[t("div",R,[t("div",W,[t("button",{type:"button",class:"btn btn-outline-primary",id:"basic-addon1",disabled:e.qty===1||s.loadingItem===e.id,onClick:c(()=>s.updateCartItem(e,e.qty-1),["prevent"])},Z,8,X),t("input",{type:"number",class:"form-control text-center hide-arrows",value:e.qty,readonly:""},null,8,tt),t("button",{type:"button",class:"btn btn-outline-primary",id:"basic-addon2",disabled:e.qty>=20||s.loadingItem===e.id,onClick:c(()=>s.updateCartItem(e,e.qty+1),["prevent"])},ot,8,et)])])]),t("div",nt,"NT$ "+l(e.total),1)]))),128)),t("div",dt,[t("div",at,[t("button",{class:"btn btn-outline-danger text-nowrap",type:"button",onClick:r[0]||(r[0]=c(()=>s.deleteCart(),["prevent"])),disabled:s.loadingItem==="deleteCart"||((b=(p=s.cart)==null?void 0:p.carts)==null?void 0:b.length)===0},[s.loadingItem==="deleteCart"?(o(),n("span",lt)):f("",!0),u(" 清空購物車 ")],8,it)]),t("div",rt,[t("div",ct,[ut,t("div",null,"NT$ "+l(s.cart.total),1)])])])])),(m=(h=s.cart)==null?void 0:h.carts)!=null&&m.length?(o(),n("div",_t,[t("div",pt,[d(a,{class:"text-decoration-none text-white",to:"/products"},{default:i(()=>[bt]),_:1})]),t("div",ht,[d(a,{class:"text-decoration-none text-white",to:"/order"},{default:i(()=>[mt]),_:1})])])):f("",!0)])]),d(x,{active:s.isLoading,"onUpdate:active":r[1]||(r[1]=e=>s.isLoading=e),loader:"dots"},null,8,["active"])],64)}const It=k(j,[["render",vt]]);export{It as default};
