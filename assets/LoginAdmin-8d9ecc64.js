import{S as i}from"./sweetalert2.all-6982c0e5.js";import{F as _,a as f}from"./FrontFooter-a1618060.js";import{_ as h,r as c,o as v,a as w,d,e as o,g as b,h as l,v as m}from"./index-0b1afe61.js";const{VITE_APP_URL:g}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/V2",VITE_APP_PATH:"tttom3669",BASE_URL:"/vue3_pizza/",MODE:"production",DEV:!1,PROD:!0},x={data(){return{user:{username:"",password:""}}},components:{FrontNavbar:_,FrontFooter:f},methods:{login(){this.$http.post(`${g}/admin/signin`,this.user).then(r=>{i.fire({icon:"success",title:`${r.data.message}`});const{token:e,expired:n}=r.data;document.cookie=`yoToken=${e}; expires=${new Date(n)};`,this.$router.push("/admin/products")}).catch(()=>{i.fire({icon:"error",title:"帳號密碼錯誤，請重新輸入"})})}}},F={class:"d-flex flex-column vh-100"},P={class:"container text-center flex-grow-1 mt-5"},V={class:"row justify-content-center"},E=o("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),y={class:"col-8"},A={class:"form-floating mb-3"},T=o("label",{for:"username"},"Email address",-1),k={class:"form-floating"},D=o("label",{for:"password"},"Password",-1),N=o("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1),U=o("p",{class:"mt-5 mb-3 text-muted"},"© 2021~∞ - 六角學院",-1);function B(r,e,n,L,t,a){const u=c("FrontNavbar"),p=c("FrontFooter");return v(),w("div",F,[d(u),o("div",P,[o("div",V,[E,o("div",y,[o("form",{id:"form",class:"form-signin",onSubmit:e[2]||(e[2]=b((...s)=>a.login&&a.login(...s),["prevent"]))},[o("div",A,[l(o("input",{type:"email",class:"form-control",id:"username","onUpdate:modelValue":e[0]||(e[0]=s=>t.user.username=s),placeholder:"name@example.com",required:"",autofocus:""},null,512),[[m,t.user.username]]),T]),o("div",k,[l(o("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":e[1]||(e[1]=s=>t.user.password=s),placeholder:"Password",required:""},null,512),[[m,t.user.password]]),D]),N],32)])]),U]),d(p)])}const I=h(x,[["render",B]]);export{I as default};
