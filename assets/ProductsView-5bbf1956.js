import{_ as P,m as d,a as c,r as e,o as a,c as n,b as t,d as r,F as l,e as y,j as C,g as v}from"./index-2811925f.js";import{p as m}from"./productsStore-eecc0596.js";import{l as g}from"./cartStore-5e63958d.js";import{C as S}from"./CategorySidebar-55df58a3.js";import{s as w}from"./swalMessage-5f2e5e08.js";import{S as b}from"./SharedPagination-ae86e77c.js";import{P as L}from"./ProductCard-a0b5f25e.js";import{F as k}from"./FrontHeading-6ac8cc2e.js";import"./collectionStore-190842b8.js";const F=g(),V={data(){return{tempProduct:{}}},components:{CategorySidebar:S,SharedPagination:b,ProductCard:L,FrontHeading:k},computed:{...d(m,["filterProducts","page","filterCategory"]),...d(g,["isLoading"])},methods:{...c(w,["swalShow"]),...c(m,["getProducts","getAllProducts"])},mounted(){this.getProducts(),this.getAllProducts(),F.isLoading=!1}},j={class:"bg_texture3",style:{"min-height":"600px"}},B={class:"container"},$={class:"row d-flex flex-row justify-content-between my-5"},x={class:"col-md-2 d-lg-block d-none"},A={class:"col-lg-9"},H={class:"row d-flex justify-content-center justify-content-md-start"},N={class:"mx-5 mx-sm-4 my-2"},E={class:"row"},M={class:"col"};function U(o,i,q,z,D,G){const u=e("CategorySidebar"),p=e("FrontHeading"),_=e("ProductCard"),f=e("SharedPagination"),h=e("VueLoading");return a(),n(l,null,[t("div",j,[t("div",B,[t("div",$,[t("div",x,[r(u)]),t("div",A,[r(p,{title:o.filterCategory==="全部商品"?"全部商品":o.filterCategory},null,8,["title"]),t("div",H,[(a(!0),n(l,null,y(o.filterProducts,s=>(a(),n("div",{class:"col-lg-4 col-md-6 mb-2 text-center",key:s.id},[t("div",N,[r(_,{product:s},null,8,["product"])])]))),128))]),t("div",E,[t("div",M,[o.filterCategory==="全部商品"?(a(),C(f,{key:0,pages:o.page,onChangePage:o.getProducts},null,8,["pages","onChangePage"])):v("",!0)])])])])])]),r(h,{active:o.isLoading,"onUpdate:active":i[0]||(i[0]=s=>o.isLoading=s),loader:"dots"},null,8,["active"])],64)}const Y=P(V,[["render",U]]);export{Y as default};
