import{_,R as m,r,o as u,c as p,b as t,d as a,w as e,f as c,a as b,h as k,l as g,F as w}from"./index-2811925f.js";import{s as $}from"./swalMessage-5f2e5e08.js";const A={components:{RouterLink:m}},R={class:"mt-5"},N={class:"nav nav-tabs"},V={class:"nav-item"},x={class:"nav-item"},T={class:"nav-item"},L={class:"nav-item"};function P(i,o,n,h,v,l){const s=r("RouterLink");return u(),p("div",R,[t("ul",N,[t("li",V,[a(s,{to:"/admin/products",class:"nav-link"},{default:e(()=>[c("後台產品管理列表")]),_:1})]),t("li",x,[a(s,{to:"/admin/orders",class:"nav-link"},{default:e(()=>[c("後台訂單管理列表")]),_:1})]),t("li",T,[a(s,{to:"/admin/coupons",class:"nav-link"},{default:e(()=>[c("後台優惠券管理列表")]),_:1})]),t("li",L,[a(s,{to:"/admin/articles",class:"nav-link"},{default:e(()=>[c("後台文章管理列表")]),_:1})])])])}const E=_(A,[["render",P]]),M={components:{RouterLink:m},methods:{...b($,["swalShow"]),logout(){this.swalShow("已登出","success"),document.cookie=`yoToken=; expires=${new Date}`,this.$router.push("/login")}}},S={class:"navbar navbar-expand-lg navbar-dark bg-dark"},D={class:"container-fluid"},y=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),B={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},z={class:"navbar-nav"},C={class:"navbar-nav ms-auto"};function I(i,o,n,h,v,l){const s=r("RouterLink");return u(),p("nav",S,[t("div",D,[a(s,{to:"/admin/products",class:"navbar-brand"},{default:e(()=>[c("這是後台首頁")]),_:1}),y,t("div",B,[t("div",z,[a(s,{to:"/",class:"nav-link"},{default:e(()=>[c("回前台首頁")]),_:1})]),t("div",C,[t("button",{class:"btn btn-warning",type:"button",onClick:o[0]||(o[0]=k((...d)=>l.logout&&l.logout(...d),["prevent"]))}," 登出 ")])])])])}const U=_(M,[["render",I]]),{VITE_APP_URL:F}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/V2",VITE_APP_PATH:"tttom3669",BASE_URL:"/vue3_pizza/",MODE:"production",DEV:!1,PROD:!0},O={components:{AdminNavTabs:E,AdminNavbar:U,RouterView:g},methods:{...b($,["swalShow"]),checkLogin(){var o;const i=(o=document.cookie.split("; ").find(n=>n.startsWith("yoToken=")))==null?void 0:o.split("=")[1];this.$http.defaults.headers.common.Authorization=i,i?this.$http.post(`${F}/api/user/check`).then(n=>{n.data.success||this.$router.push("/login")}).catch(()=>{this.swalShow("沒有權限，請重新登入","error"),this.$router.push("/login")}):(this.swalShow("請先登入","error"),this.$router.push("/login"))}},created(){this.checkLogin()}},H={class:"container"};function W(i,o,n,h,v,l){const s=r("AdminNavbar"),d=r("AdminNavTabs"),f=r("RouterView");return u(),p(w,null,[a(s),t("div",H,[a(d),a(f)])],64)}const G=_(O,[["render",W]]);export{G as default};
