import{_ as f,R as x,a,r as i,o as d,c as n,b as t,d as c,F as _,e as b,t as e,n as y,g as v,w as L,f as P}from"./index-2811925f.js";import{s as k}from"./swalMessage-5f2e5e08.js";import{c as V}from"./cartStore-5e63958d.js";import{P as T}from"./ProgressBar-53d48bb5.js";const{VITE_APP_URL:u,VITE_APP_PATH:h}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/V2",VITE_APP_PATH:"tttom3669",BASE_URL:"/vue3_pizza/",MODE:"production",DEV:!1,PROD:!0},B={data(){return{order:{user:{},products:[]},isLoading:!1}},components:{ProgressBar:T,RouterLink:x},props:["orderId"],methods:{...a(k,["swalShow"]),...a(V,["getCart"]),getOrder(){const l=`${u}/api/${h}/order/${this.orderId}`;this.isLoading=!0,this.$http.get(l).then(o=>{this.isLoading=!1,this.order=o.data.order,this.getCart()}).catch(o=>{this.isLoading=!1,this.swalShow(`${o.response.data.message}`,"error")})},payOrder(){const l=`${u}/api/${h}/pay/${this.orderId}`;this.isLoading=!0,this.$http.post(l).then(o=>{this.getOrder(),this.getCart(),this.swalShow(`${o.data.message}`,"success","toast")}).catch(o=>{this.swalShow(`${o.response.data.message}`,"error"),this.isLoading=!1})}},mounted(){this.getOrder(),this.swalShow("已建立訂單","success","toast")}},C={class:"bg_texture3",style:{"min-height":"600px"}},E={class:"container"},A={class:"row mt-4 d-flex flex-column flex-lg-row"},D={class:"col-lg-5"},R={class:"card"},S={class:"card-body"},I=t("h5",{class:"card-title"},"訂單明細",-1),N={class:"table align-middle"},O=["src","alt"],U={class:"p-2"},F={class:"text-nowrap"},M={class:"text-nowrap"},j={class:"text-nowrap text-end"},z={class:"row row-cols-2 d-flex justify-content-between"},G=t("div",{class:"pb-2 col text-cusGray fw-bold text-start"},"運費",-1),H={class:"pb-2 col text-cusGray fw-bold text-end"},q=t("div",{class:"col py-2 h5 text-cusDarkBrown fw-bold text-start"}," 總金額 ",-1),J={class:"col py-2 h5 text-cusDarkBrown fw-bold text-end"},K={class:"col-lg-7"},Q={class:"card mt-3 mt-md-0"},W={class:"card-body"},X=t("h5",{class:"card-title"},"訂單資訊",-1),Y={key:0,class:"table"},Z=t("td",null,"訂單編號",-1),$=t("td",null,"下單時間",-1),tt=t("td",null,"Email",-1),st=t("td",null,"收件人姓名",-1),et=t("td",null,"收件人電話",-1),ot=t("td",null,"收件人地址",-1),rt=t("td",null,"取貨方式",-1),lt=t("td",null,"付款方式",-1),dt=t("td",null,"付款狀態",-1),nt=t("td",null,"備註",-1),it={class:"d-flex justify-content-end mt-3 mb-3"},ct={key:1,type:"button",class:"btn btn-primary text-white"};function at(l,o,_t,ut,s,p){const g=i("ProgressBar"),m=i("RouterLink"),w=i("VueLoading");return d(),n(_,null,[t("div",C,[t("div",E,[c(g,{stage:3}),t("div",A,[t("div",D,[t("div",R,[t("div",S,[I,t("table",N,[t("tbody",null,[(d(!0),n(_,null,b(s.order.products,r=>(d(),n("tr",{key:r.id},[t("td",null,[t("img",{src:r.product.imageUrl,alt:r.product.title,class:"object-fit-cover",height:"70",width:"70"},null,8,O)]),t("td",U,[t("div",F,e(r.product.title),1)]),t("td",M,"x "+e(r.qty),1),t("td",j," NT$ "+e(l.$filters.currency(r.final_total)),1)]))),128))])]),t("div",z,[G,t("div",H," +NT$ "+e(s.order.user.cartDeliveryFee),1),q,t("div",J," NT$ "+e(s.order.total+s.order.user.cartDeliveryFee),1)])])])]),t("div",K,[t("div",Q,[t("div",W,[X,s.order?(d(),n("table",Y,[t("tbody",null,[t("tr",null,[Z,t("td",null,e(s.order.id),1)]),t("tr",null,[$,t("td",null,e(l.$filters.date(s.order.create_at)),1)]),t("tr",null,[tt,t("td",null,e(s.order.user.email),1)]),t("tr",null,[st,t("td",null,e(s.order.user.name),1)]),t("tr",null,[et,t("td",null,e(s.order.user.address),1)]),t("tr",null,[ot,t("td",null,e(s.order.user.tel),1)]),t("tr",null,[rt,t("td",null,e(s.order.user.pickupMethod),1)]),t("tr",null,[lt,t("td",null,e(s.order.user.paymentMethod),1)]),t("tr",null,[dt,t("td",{class:y(["fw-bold",{"text-success":s.order.is_paid,"text-danger":!s.order.is_paid}])},e(s.order.is_paid?"付款完成":"尚未付款"),3)]),t("tr",null,[nt,t("td",null,e(s.order.message),1)])])])):v("",!0)])]),t("div",it,[s.order.is_paid?(d(),n("button",ct,[c(m,{to:"/",class:"text-decoration-none text-white"},{default:L(()=>[P(" 返回首頁 ")]),_:1})])):(d(),n("button",{key:0,type:"button",class:"btn btn-primary text-white",onClick:o[0]||(o[0]=()=>p.payOrder())}," 來去付款 "))])])])])]),c(w,{active:s.isLoading,"onUpdate:active":o[1]||(o[1]=r=>s.isLoading=r),loader:"dots"},null,8,["active"])],64)}const wt=f(B,[["render",at]]);export{wt as default};
