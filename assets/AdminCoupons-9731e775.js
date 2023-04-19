import{M as w,D as y}from"./DelItemModal-e6c6d621.js";import{_ as M,r as p,o as i,c as u,b as e,d as a,w as V,n as h,i as k,I as $,t as f,a as D,F as L,e as P}from"./index-fd70f48b.js";import{S}from"./SharedPagination-cb87b7bd.js";import{s as x}from"./swalMessage-6e521104.js";const T={data(){return{tempCoupon:{},due_date:""}},props:{coupon:{type:Object,default(){return{}}},isNew:{type:Boolean,default(){return!1}}},watch:{coupon(){this.tempCoupon=this.coupon;const n=new Date(this.tempCoupon.due_date*1e3).toISOString().split("T");[this.due_date]=n},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},methods:{openModal(){this.modal.show()},closeModal(){this.modal.hide()},dateConfirm(n){const o=new Date,l=new Date(o.getTime()-24*60*60*1e3),C=new Date(n);return l<C?!0:"到期日已過期"}},mounted(){this.modal=new w(this.$refs.couponModal)}},U={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"couponModalLabel","aria-hidden":"true",ref:"couponModal"},I={class:"modal-dialog",role:"document"},A={class:"modal-content"},E={class:"modal-header"},N={class:"modal-title",id:"couponModalLabel"},F={key:0},B={key:1},O=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),R={class:"modal-body"},q={class:"mb-3"},z=e("label",{for:"title"},"標題",-1),H={class:"mb-3"},j=e("label",{for:"coupon_code"},"優惠碼",-1),G={class:"mb-3"},J=e("label",{for:"due_date"},"到期日",-1),K={class:"mb-3"},Q=e("label",{for:"price"},"折扣百分比",-1),W={class:"mb-3"},X={class:"form-check"},Y=e("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),Z={class:"modal-footer"},ee=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),oe={type:"submit",class:"btn btn-primary"};function te(n,o,l,C,s,d){const c=p("VField"),r=p("ErrorMessage"),g=p("VForm");return i(),u("div",U,[e("div",I,[e("div",A,[e("div",E,[e("h5",N,[l.isNew?(i(),u("span",F,"新增優惠卷")):(i(),u("span",B,"編輯優惠卷"))]),O]),a(g,{onSubmit:o[5]||(o[5]=()=>n.$emit("update-coupon"))},{default:V(({errors:m})=>[e("div",R,[e("div",q,[z,a(c,{type:"text",name:"標題",class:h(["form-control",{"is-invalid":m.標題}]),id:"title",modelValue:s.tempCoupon.title,"onUpdate:modelValue":o[0]||(o[0]=t=>s.tempCoupon.title=t),placeholder:"請輸入標題",rules:"required"},null,8,["modelValue","class"]),a(r,{name:"標題",class:"invalid-feedback"})]),e("div",H,[j,a(c,{type:"text",class:h(["form-control",{"is-invalid":m.優惠碼}]),id:"coupon_code",name:"優惠碼",modelValue:s.tempCoupon.code,"onUpdate:modelValue":o[1]||(o[1]=t=>s.tempCoupon.code=t),placeholder:"請輸入優惠碼",rules:"required"},null,8,["modelValue","class"]),a(r,{name:"優惠碼",class:"invalid-feedback"})]),e("div",G,[J,a(c,{type:"date",class:h(["form-control",{"is-invalid":m.到期日}]),id:"due_date",name:"到期日",modelValue:s.due_date,"onUpdate:modelValue":o[2]||(o[2]=t=>s.due_date=t),rules:d.dateConfirm},null,8,["modelValue","class","rules"]),a(r,{name:"到期日",class:"invalid-feedback"})]),e("div",K,[Q,a(c,{type:"number",class:h(["form-control",{"is-invalid":m.折扣百分比}]),id:"price",name:"折扣百分比",min:"0",max:"99",modelValue:s.tempCoupon.percent,"onUpdate:modelValue":o[3]||(o[3]=t=>s.tempCoupon.percent=t),modelModifiers:{number:!0},placeholder:"請輸入折扣百分比",rules:"required|min_value:0|max_value:99"},null,8,["modelValue","class"]),a(r,{name:"折扣百分比",class:"invalid-feedback"})]),e("div",W,[e("div",X,[k(e("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":o[4]||(o[4]=t=>s.tempCoupon.is_enabled=t),id:"is_enabled"},null,512),[[$,s.tempCoupon.is_enabled]]),Y])])]),e("div",Z,[ee,e("button",oe,f(l.isNew?"新增優惠卷":"更新優惠券"),1)])]),_:1})])])],512)}const se=M(T,[["render",te]]),{VITE_APP_URL:_,VITE_APP_PATH:b}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/V2",VITE_APP_PATH:"tttom3669",BASE_URL:"/vue3_pizza/",MODE:"production",DEV:!1,PROD:!0},ne={data(){return{coupons:{},tempCoupon:{},page:{},isLoading:!1,isNew:!0,delModalType:"優惠券"}},methods:{...D(x,["swalShow"]),getCoupons(n=1){const o=`${_}/api/${b}/admin/coupons/?page=${n}`;this.isLoading=!0,this.$http.get(o).then(l=>{this.coupons=l.data.coupons,this.page=l.data.pagination,this.isLoading=!1}).catch(l=>{this.swalShow(`${l.data.message}`,"error"),this.isLoading=!1})},openModal(n,o){n==="create"?(this.tempCoupon={is_enabled:0,due_date:new Date().getTime()/1e3},this.isNew=!0,this.$refs.couponModal.openModal()):n==="edit"?(this.tempCoupon={...o},this.isNew=!1,this.$refs.couponModal.openModal()):n==="delete"&&(this.tempCoupon={...o},this.$refs.delCouponModal.openModal())},updateCoupon(){let n="post",o=`${_}/api/${b}/admin/coupon`;this.isNew||(n="put",o=`${_}/api/${b}/admin/coupon/${this.tempCoupon.id}`),this.isLoading=!0,this.$http[n](o,{data:this.tempCoupon}).then(l=>{this.getCoupons(),this.$refs.couponModal.closeModal(),this.swalShow(`${l.data.message}`,"success","toast")}).catch(l=>{this.swalShow(`${l.response.data.message}`,"error"),this.isLoading=!1})},delCoupon(){const n=`${_}/api/${b}/admin/coupon/${this.tempCoupon.id}`;this.$refs.delCouponModal.closeModal(),this.isLoading=!0,this.$http.delete(n).then(o=>{this.getCoupons(),this.swalShow(`${o.data.message}`,"success","toast")}).catch(o=>{this.swalShow(`${o.data.message}`,"error"),this.isLoading=!1})}},components:{CouponModal:se,DelItemModal:y,SharedPagination:S},mounted(){this.getCoupons()}},le={class:"text-end mt-4"},ae={class:"table mt-4"},de=e("thead",null,[e("tr",null,[e("th",null,"名稱"),e("th",null,"折扣百分比"),e("th",null,"到期日"),e("th",null,"是否啟用"),e("th",null,"編輯")])],-1),ie={key:0,class:"text-success"},ue={key:1,class:"text-muted"},pe={class:"btn-group"},ce=["onClick"],re=["onClick"];function me(n,o,l,C,s,d){const c=p("VueLoading"),r=p("SharedPagination"),g=p("CouponModal"),m=p("DelItemModal");return i(),u("div",null,[e("div",le,[e("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=t=>d.openModal("create"))}," 建立新的優惠券 ")]),e("table",ae,[de,e("tbody",null,[(i(!0),u(L,null,P(s.coupons,t=>(i(),u("tr",{key:t.id},[e("td",null,f(t.title),1),e("td",null,f(t.percent)+"%",1),e("td",null,f(n.$filters.date(t.due_date)),1),e("td",null,[t.is_enabled?(i(),u("span",ie,"啟用")):(i(),u("span",ue,"未啟用"))]),e("td",null,[e("div",pe,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:v=>d.openModal("edit",t)}," 編輯 ",8,ce),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:v=>d.openModal("delete",t)}," 刪除 ",8,re)])])]))),128))])]),a(c,{active:s.isLoading,"onUpdate:active":o[1]||(o[1]=t=>s.isLoading=t)},null,8,["active"]),a(r,{pages:s.page,onChangePage:d.getCoupons},null,8,["pages","onChangePage"]),a(g,{coupon:s.tempCoupon,"is-new":s.isNew,ref:"couponModal",onUpdateCoupon:d.updateCoupon},null,8,["coupon","is-new","onUpdateCoupon"]),a(m,{ref:"delCouponModal","temp-item":s.tempCoupon,"del-modal-type":s.delModalType,onDelItem:d.delCoupon},null,8,["temp-item","del-modal-type","onDelItem"])])}const Ce=M(ne,[["render",me]]);export{Ce as default};