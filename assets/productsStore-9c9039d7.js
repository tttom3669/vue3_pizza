import{p as d,a as u,q as r}from"./index-fd70f48b.js";import{s as g}from"./swalMessage-6e521104.js";import{l as n}from"./cartStore-03ff67d7.js";const{VITE_APP_URL:i,VITE_APP_PATH:c}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/V2",VITE_APP_PATH:"tttom3669",BASE_URL:"/vue3_pizza/",MODE:"production",DEV:!1,PROD:!0},e=n(),P=d("products",{state:()=>({products:[],pageProducts:[],tempProduct:{},page:{},productCategory:{披薩:["蔬食首選","海鮮至上","無肉不歡","甜食主義"],副食:["炸物","飲料"]},filterCategory:"全部商品",keyWords:""}),actions:{...u(g,["swalShow"]),getAllProducts(){const s=`${i}/api/${c}/products/all`;e.isLoading=!0,r.get(s).then(t=>{this.products=t.data.products,e.isLoading=!1}).catch(t=>{this.swalShow(`${t.message}`,"error"),e.isLoading=!1})},getProducts(s=1){const t=`${i}/api/${c}/products/?page=${s}`;e.isLoading=!0,r.get(t).then(o=>{this.pageProducts=o.data.products,this.page=o.data.pagination,e.isLoading=!1}).catch(o=>{this.swalShow(`${o.message}`,"error"),e.isLoading=!1})},getProduct(s){e.isLoading=!0,this.tempProduct={},r.get(`${i}/api/${c}/product/${s}`).then(t=>{this.tempProduct=t.data.product,e.isLoading=!1}).catch(t=>{this.swalShow(`${t.message}`,"error"),e.isLoading=!1})},changeCategory(s){this.filterCategory=s},searchItem(s){e.isLoading=!0,this.keyWords=s}},getters:{filterProducts:({products:s,pageProducts:t,filterCategory:o})=>o==="全部商品"?t:s.filter(a=>a.productCategory===o),searchProducts:({products:s,keyWords:t})=>s.filter(a=>(a.productCategory.includes(t)||a.title.includes(t)||a.category.includes(t))&&t!=="")}});export{P as p};