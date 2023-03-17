import{M as A,A as C,D as x}from"./DelItemModal-f92ba61b.js";import{m as w,_ as U,o as i,c as d,a as t,B as a,C as m,F as g,y as M,E as P,G as L,H as E,r as f,d as v,t as p}from"./index-aa876d37.js";import{s as V}from"./swalMessage-b67e3106.js";import"./sweetalert2.all-69767743.js";const{VITE_APP_URL:T,VITE_APP_PATH:D}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/V2",VITE_APP_PATH:"tttom3669",BASE_URL:"/vue3_pizza/",MODE:"production",DEV:!1,PROD:!0},$={data(){return{modal:{},tempProduct:{}}},props:{product:{type:Object,default(){return{}}},isNew:{type:Boolean,default(){return!0}}},watch:{product(){this.tempProduct=this.product,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[])}},methods:{...w(V,["swalShow"]),openModal(){this.modal.show()},closeModal(){this.modal.hide()},uploadFile(){const l=this.$refs.mainImgFile.files[0],e=new FormData;e.append("mainImgFile",l),this.$http.post(`${T}/api/${D}/admin/upload`,e).then(n=>{this.tempProduct.imageUrl=n.data.imageUrl,this.$refs.mainImgFile.value="",this.swalShow("圖片上傳成功","success","toast")}).catch(()=>{this.swalShow("檔案格式不符","error")})}},mounted(){this.modal=new A(this.$refs.productModal)}},F={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},S={class:"modal-dialog modal-xl"},N={class:"modal-content border-0"},R=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{id:"productModalLabel",class:"modal-title"},[t("span",null,"新增產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),B={class:"modal-body"},H={class:"row"},O={class:"col-sm-4"},z={class:"mb-2"},j=t("h3",{class:"mb-3"},"主要圖片",-1),G={class:"mb-3"},q=t("label",{for:"imageUrl",class:"form-label"},"圖片網址",-1),J={class:"mb-3"},K=t("label",{for:"mainImgFile",class:"form-label"},"或 上傳圖片",-1),Q=["src"],W=t("h3",{class:"mb-3"},"多圖新增",-1),X=t("label",{for:"imageUrl",class:"form-label"},"圖片網址",-1),Y=["onUpdate:modelValue"],Z=["src"],tt={class:"col-sm-8"},et={class:"mb-3"},ot=t("label",{for:"title",class:"form-label"},"標題",-1),st={class:"mb-3"},lt=t("label",{for:"category",class:"form-label"},"分類",-1),it={class:"row"},dt={class:"mb-3 col-md-6"},nt=t("label",{for:"productCategory",class:"form-label"},"細項分類",-1),rt=t("option",{selected:"",disabled:"",hidden:""},"請選擇",-1),at=t("option",{value:"無肉不歡"},"無肉不歡",-1),ct=t("option",{value:"蔬食首選"},"蔬食首選",-1),mt=t("option",{value:"海鮮至上"},"海鮮至上",-1),ut=t("option",{value:"甜食主義"},"甜食主義",-1),pt=t("option",{value:"炸物"},"炸物",-1),ht=t("option",{value:"飲料"},"飲料",-1),_t={class:"mb-3 col-md-6"},gt=t("label",{for:"price",class:"form-label"},"單位",-1),bt={class:"row"},Pt={class:"mb-3 col-md-6"},ft=t("label",{for:"origin_price",class:"form-label"},"原價",-1),vt={class:"mb-3 col-md-6"},yt=t("label",{for:"price",class:"form-label"},"售價",-1),wt=t("hr",null,null,-1),Ut={class:"mb-3"},Mt=t("label",{for:"description",class:"form-label"},"產品描述",-1),Vt={class:"mb-3"},kt=t("label",{for:"content",class:"form-label"},"產品內容物",-1),It={class:"mb-3"},At={class:"form-check"},Ct=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),xt={class:"modal-footer"},Lt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Et(l,e,n,b,o,c){return i(),d("div",F,[t("div",S,[t("div",N,[R,t("div",B,[t("div",H,[t("div",O,[t("div",z,[j,t("div",G,[q,a(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=s=>o.tempProduct.imageUrl=s)},null,512),[[m,o.tempProduct.imageUrl]])]),t("div",J,[K,t("input",{class:"form-control",type:"file",id:"mainImgFile",ref:"mainImgFile",onChange:e[1]||(e[1]=(...s)=>c.uploadFile&&c.uploadFile(...s))},null,544)]),t("img",{class:"img-fluid",src:o.tempProduct.imageUrl},null,8,Q)]),t("div",null,[W,Array.isArray(o.tempProduct.imagesUrl)?(i(),d(g,{key:0},[(i(!0),d(g,null,M(o.tempProduct.imagesUrl,(s,u)=>(i(),d("div",{class:"mb-2",key:u+"img"},[X,a(t("input",{type:"text",class:"form-control mb-3",placeholder:"請輸入圖片連結","onUpdate:modelValue":y=>o.tempProduct.imagesUrl[u]=y},null,8,Y),[[m,o.tempProduct.imagesUrl[u]]]),t("img",{class:"img-fluid",src:s},null,8,Z)]))),128)),!o.tempProduct.imagesUrl.length||o.tempProduct.imagesUrl[o.tempProduct.imagesUrl.length-1]?(i(),d("button",{key:0,class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=s=>l.$emit("createImages"))}," 新增圖片 ")):P("",!0),o.tempProduct.imagesUrl.length?(i(),d("button",{key:1,class:"btn btn-outline-danger btn-sm mt-2 d-block w-100",onClick:e[3]||(e[3]=s=>o.tempProduct.imagesUrl.pop())}," 刪除圖片 ")):P("",!0)],64)):(i(),d("button",{key:1,class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[4]||(e[4]=s=>l.$emit("createImages","init"))}," 新增圖片 "))])]),t("div",tt,[t("div",et,[ot,a(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[5]||(e[5]=s=>o.tempProduct.title=s)},null,512),[[m,o.tempProduct.title]])]),t("div",st,[lt,a(t("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[6]||(e[6]=s=>o.tempProduct.category=s)},null,512),[[m,o.tempProduct.category]])]),t("div",it,[t("div",dt,[nt,a(t("select",{id:"productCategory",class:"form-select","aria-label":"Product category select","onUpdate:modelValue":e[7]||(e[7]=s=>o.tempProduct.productCategory=s)},[rt,o.tempProduct.category==="披薩"||n.isNew?(i(),d(g,{key:0},[at,ct,mt,ut],64)):P("",!0),o.tempProduct.category==="副食"||n.isNew?(i(),d(g,{key:1},[pt,ht],64)):P("",!0)],512),[[L,o.tempProduct.productCategory]])]),t("div",_t,[gt,a(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[8]||(e[8]=s=>o.tempProduct.unit=s)},null,512),[[m,o.tempProduct.unit]])])]),t("div",bt,[t("div",Pt,[ft,a(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[9]||(e[9]=s=>o.tempProduct.origin_price=s)},null,512),[[m,o.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",vt,[yt,a(t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[10]||(e[10]=s=>o.tempProduct.price=s)},null,512),[[m,o.tempProduct.price,void 0,{number:!0}]])])]),wt,t("div",Ut,[Mt,a(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[11]||(e[11]=s=>o.tempProduct.description=s)},`
                `,512),[[m,o.tempProduct.description]])]),t("div",Vt,[kt,a(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品內容物","onUpdate:modelValue":e[12]||(e[12]=s=>o.tempProduct.content=s)},`
                `,512),[[m,o.tempProduct.content]])]),t("div",It,[t("div",At,[a(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[13]||(e[13]=s=>o.tempProduct.is_enabled=s)},null,512),[[E,o.tempProduct.is_enabled]]),Ct])])])])]),t("div",xt,[Lt,t("button",{type:"button",class:"btn btn-primary",onClick:e[14]||(e[14]=s=>l.$emit("updateProduct"))}," 確認 ")])])])],512)}const Tt=U($,[["render",Et]]),{VITE_APP_URL:h,VITE_APP_PATH:_}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/V2",VITE_APP_PATH:"tttom3669",BASE_URL:"/vue3_pizza/",MODE:"production",DEV:!1,PROD:!0},Dt={data(){return{products:[],tempProduct:{imagesUrl:[]},isNew:!0,page:{},isLoading:!1,delModalType:"products"}},components:{AdminPagination:C,ProductModal:Tt,DelItemModal:x},methods:{...w(V,["swalShow"]),getProducts(l=1,e=""){let n=`${h}/api/${_}/admin/products/?page=${l}`;e!==""&&(n=`${h}/api/${_}/admin/products/category=${e}?&page=${l}`),this.$http.get(n).then(b=>{this.products=b.data.products,this.page=b.data.pagination,this.isLoading=!1}).catch(()=>{this.isLoading=!1,this.swalShow("請先登入","error"),this.$router.push("/login")})},updateProduct(){let l="post",e=`${h}/api/${_}/admin/product`;this.isNew||(l="put",e=`${h}/api/${_}/admin/product/${this.tempProduct.id}`),this.$refs.productModal.closeModal(),this.isLoading=!0,this.$http[l](e,{data:this.tempProduct}).then(n=>{this.getProducts(this.page.current_page),this.swalShow(`${n.data.message}`,"success","toast")}).catch(n=>{this.swalShow(`${n.response.data.message}`,"error"),this.isLoading=!1})},delProduct(){this.$refs.delProductModal.closeModal(),this.isLoading=!0,this.$http.delete(`${h}/api/${_}/admin/product/${this.tempProduct.id}`).then(l=>{this.getProducts(),this.swalShow(`${l.data.message}`,"success","toast")}).catch(l=>{this.swalShow(`${l.data.message}`,"error"),this.isLoading=!1})},openModal(l,e){l==="create"?(this.tempProduct={imagesUrl:[],productCategory:"請選擇"},this.isNew=!0,this.$refs.productModal.openModal()):l==="edit"?(this.tempProduct={...e},this.isNew=!1,this.$refs.productModal.openModal()):l==="delete"&&(this.tempProduct={...e},this.$refs.delProductModal.openModal())},createImages(l){l==="init"&&(this.tempProduct.imagesUrl=[]),this.tempProduct.imagesUrl.push("")}},mounted(){this.isLoading=!0,this.getProducts()}},$t={class:"text-end mt-4"},Ft={class:"table mt-4"},St=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",null,"產品名稱"),t("th",null,"細項分類"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否啟用"),t("th",{width:"120"},"編輯")])],-1),Nt={class:"text-start"},Rt={class:"text-start"},Bt={key:0,class:"text-success"},Ht={key:1},Ot={class:"btn-group"},zt=["onClick"],jt=["onClick"];function Gt(l,e,n,b,o,c){const s=f("VueLoading"),u=f("AdminPagination"),y=f("ProductModal"),k=f("DelItemModal");return i(),d("div",null,[t("div",$t,[t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=r=>c.openModal("create"))},"建立新的產品")]),t("table",Ft,[St,t("tbody",null,[(i(!0),d(g,null,M(o.products,r=>(i(),d("tr",{key:r.id},[t("td",null,p(r.category),1),t("td",null,p(r.title),1),t("td",null,p(r.productCategory),1),t("td",Nt,p(r.origin_price),1),t("td",Rt,p(r.price),1),t("td",null,[r.is_enabled?(i(),d("span",Bt,"啟用")):(i(),d("span",Ht,"未啟用"))]),t("td",null,[t("div",Ot,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:I=>c.openModal("edit",r)}," 編輯 ",8,zt),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:I=>c.openModal("delete",r)}," 刪除 ",8,jt)])])]))),128))])]),v(s,{active:o.isLoading,"onUpdate:active":e[1]||(e[1]=r=>o.isLoading=r)},null,8,["active"]),v(u,{pages:o.page,onChangePage:c.getProducts},null,8,["pages","onChangePage"]),v(y,{ref:"productModal",product:o.tempProduct,"is-new":o.isNew,onUpdateProduct:c.updateProduct,onCreateImages:c.createImages},null,8,["product","is-new","onUpdateProduct","onCreateImages"]),v(k,{ref:"delProductModal","temp-item":o.tempProduct,"del-modal-type":o.delModalType,onDelItem:c.delProduct},null,8,["temp-item","del-modal-type","onDelItem"])])}const Wt=U(Dt,[["render",Gt]]);export{Wt as default};
