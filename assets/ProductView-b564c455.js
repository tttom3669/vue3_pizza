import{_ as P,e as p,m as u,r as m,o as i,c as r,a as t,b as a,w as _,t as s,g as c,h as b,d as n,F as C}from"./index-c6ed4168.js";import{p as g}from"./collectionStore-a02c9ee1.js";import{c as y,l as k}from"./cartStore-581dafbd.js";import{s as T}from"./swalMessage-905c8f09.js";import{S}from"./SwiperTopFlavors-b95ac6aa.js";import"./sweetalert2.all-526cafe2.js";const I={data(){return{qty:1,productId:""}},components:{SwiperTopFlavors:S},props:["id"],computed:{...p(y,["cart"]),...p(k,["isLoading","loadingItem"]),...p(g,["tempProduct"])},methods:{...u(T,["swalShow"]),...u(y,["addToCart","updateCartItem"]),...u(g,["getProduct","changeCategory"]),addToCart_Check(){let e=[];e=this.cart.carts.filter(o=>o.product_id===this.tempProduct.id),e[0]===this.tempProduct.id?this.updateCartItem(e[0],this.qty):this.addToCart(this.tempProduct.id,this.qty)}},mounted(){this.getProduct(this.id)}},q={class:"bg_texture2"},B={class:"container"},V={"aria-label":"breadcrumb"},N={class:"breadcrumb"},F={class:"breadcrumb-item"},L={class:"breadcrumb-item"},x={class:"breadcrumb-item","aria-current":"page"},D={class:"row mt-5"},j={class:"col-lg-4"},M=["src","alt"],U={class:"col-lg-8"},z={class:"fw-bold"},A={class:"badge bg-primary rounded-pill mb-3",style:{"font-size":"14px"}},E={class:"fw-bold text-cusDarkBrown"},G={class:"text-cusBrown"},H=t("div",{class:"h6 fw-bold"},"建議售價：",-1),J={key:0,class:"h5"},K={key:1,class:"d-flex flex-row align-items-center mb-2"},O={class:"h5 text-cusBrown fw-bold me-2"},Q={class:"h6 me-2 text-cusGray"},R={class:"w-50"},W={class:"input-group mb-3"},X=["disabled"],Y=t("i",{class:"bi bi-dash"},null,-1),Z=[Y],$=["value"],tt=["disabled"],et=t("i",{class:"bi bi-plus"},null,-1),ot=[et],st={class:"row flex-column flex-sm-row gy-3"},dt={class:"col-md-6"},it=["disabled"],rt={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},at={class:"col-md-6"},nt=["disabled"],ct={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},lt=t("div",{class:"d-flex flex-column align-items-start justify-content-center mt-3"},[t("h3",{class:"fw-bold mt-1 border-3 border-start border-primary"},[t("span",{class:"text-primary me-3"}),n("精選商品 ")])],-1);function pt(e,o,ut,mt,d,h){const l=m("router-link"),f=m("SwiperTopFlavors"),v=m("VueLoading");return i(),r(C,null,[t("div",q,[t("div",B,[t("nav",V,[t("ol",N,[t("li",F,[a(l,{to:"/",class:"text-decoration-none"},{default:_(()=>[n("首頁")]),_:1})]),t("li",L,[a(l,{to:"/products",onClick:o[0]||(o[0]=()=>e.changeCategory(`${e.tempProduct.productCategory}`)),class:"text-decoration-none"},{default:_(()=>[n(s(e.tempProduct.productCategory),1)]),_:1})]),t("li",x,s(e.tempProduct.title),1)])]),t("div",D,[t("div",j,[t("img",{src:e.tempProduct.imageUrl,alt:e.tempProduct.title,class:"w-100 object-fit-cover img-fluid"},null,8,M)]),t("div",U,[t("h3",z,s(e.tempProduct.title),1),t("span",A,s(e.tempProduct.category),1),t("p",E,s(e.tempProduct.content),1),t("p",G,s(e.tempProduct.description),1),H,e.tempProduct.price===e.tempProduct.origin_price?(i(),r("div",J,s(e.tempProduct.price)+" 元 ",1)):(i(),r("div",K,[t("div",O," NT$"+s(e.tempProduct.price),1),t("del",Q,"NT$"+s(e.tempProduct.origin_price),1)])),t("div",R,[t("div",W,[t("button",{type:"button",class:"input-group-text",id:"basic-addon1",disabled:d.qty===1,onClick:o[1]||(o[1]=c(()=>d.qty-=1,["prevent"]))},Z,8,X),t("input",{type:"text",class:"form-control text-center",readonly:"",value:d.qty},null,8,$),t("button",{type:"button",class:"input-group-text",id:"basic-addon2",disabled:d.qty===99,onClick:o[2]||(o[2]=c(()=>d.qty+=1,["prevent"]))},ot,8,tt)]),t("div",st,[t("div",dt,[t("button",{type:"button",class:"btn btn-cusDarkBrown text-white w-100",onClick:o[3]||(o[3]=c(()=>h.addToCart_Check(),["prevent"])),disabled:e.loadingItem===e.tempProduct.id},[e.loadingItem===e.tempProduct.id?(i(),r("span",rt)):b("",!0),n(" 加入購物車 ")],8,it)]),t("div",at,[t("button",{type:"button",class:"btn btn-primary w-100 text-white",onClick:o[4]||(o[4]=c(()=>h.addToCart_Check(),["prevent"])),disabled:e.loadingItem===e.tempProduct.id},[a(l,{class:"text-decoration-none text-white",to:"/cart"},{default:_(()=>[e.loadingItem===e.tempProduct.id?(i(),r("span",ct)):b("",!0),n(" 立刻購買 ")]),_:1})],8,nt)])])])])]),lt,a(f,{category:"全部商品"})])]),a(v,{active:e.isLoading,"onUpdate:active":o[5]||(o[5]=w=>e.isLoading=w),loader:"dots"},null,8,["active"])],64)}const vt=P(I,[["render",pt]]);export{vt as default};
