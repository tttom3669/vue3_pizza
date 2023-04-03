import{_ as m,r as i,o as _,c as u,b as s,d as e,w as g,n as f,a as w,F as x,k as n}from"./index-bbf47dbb.js";import{p as A}from"./productsStore-c5151155.js";import{S as y}from"./SwiperTopFlavors-53c7fb08.js";import"./swalMessage-cdcc8a09.js";import"./cartStore-ce1406cb.js";import"./collectionStore-a46cddbc.js";import"./ProductCard-9e440d2b.js";const k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ0SURBVHgB7VbtbeJAEJ1d8uMkiOR0YDqgBKggXAX4OgCuAEIBCe6AXAdJBaGDcBWEDs7SgXQ/WM89f61t/LW2kl/Jkyy8s8vM2/dmWYi+8NkhTBfy/JtNvd4tMY2I5BgRC2ErnvYQP5DEQ7wjpZ6F++9gkreRAC+vHRI8Q4ExtQHTniS74v70i7oQ4Pn1FDva4M0u+doBpA7EeEhYyGKRT8HnqCQT1tJdFRFRLGxB6vO2sGOmHUnxSKoHeT2PSklbsESBON9iOL2otCd1/n5pjcgn6Dsogl1rb4PoI/lqbeppbiNSrfDmZMIgzmvxcHILBFB8hOKvaQbsmHkh3NNeh34OxojN8Po7m6SRiFAvsMzWQf/qJlFRaiZRoTQpJMsVDxIxvWDCwbPh+WBFBkChoAd2aXH0Q8ZCmVvtX62J0WAR5igy1nNSjXNrZVlzFhGeosQGNK1wj+tcGsqz9ZD4R6bINmqsgFzvKUMOY/lMTcUD1YhSpVhNLtfIy4C4P+5IWyHQSOeVJse9CUhModRQuH+fqAlRE9oR4UD6YiOLCuY40+pVN45PE0i3oxaIpd9GA0i/OQ3L1smyYK0VJsUNpK8lEJKosCIt0nd4OfjDy/4bL/qzfNZm6XUdqkGdFZD4LfMz7YmH400cd0yk11zrJuut4NQSZi8mbJOh9EYEQhJVVvhiER/LoPhdlM1cep2fDGByKtpKn6BRgZBlw6noIn0rAiGJulPRQXqdl1qgzArcoHYX6TsRCGuEV3JwK4ajQyRiQug8bPu/wdiCBAUrOkqv81EHFKzoIH2C1goEKJyKFl3/rsBdYPzP6GMItLghv1CF/6C+bGCHq8rEAAAAAElFTkSuQmCC";const C={data(){return{keyword:""}},methods:{getSearch(){this.$router.push(`/search/${this.keyword}`)}}},E={class:"header position-relative"},B={class:"landing position-absolute rounded-3 top-50 start-50 translate-middle text-white p-4"},S={class:"border border-primary p-3 p-lg-5 text-center"},z=s("h3",{class:"display-3 fw-bold mb-3 text-nowrap"},"意猶未盡的滋味",-1),R=s("h4",{class:"mb-5"},"濃郁的香料，酥脆的餅皮，滿足你的味蕾需求",-1),V=s("img",{src:k,class:"d-none d-lg-block object-fit-contain me-1",alt:""},null,-1),F=s("button",{class:"btn btn-primary text-nowrap text-light",type:"submit"},[s("span",{class:"my-lg-2 mx-lg-4 d-none d-md-inline"},"搜尋"),s("i",{class:"bi bi-search d-inline d-md-none"})],-1),Q={class:"d-flex align-items-center"},H=s("span",{class:"d-none d-lg-block"},"熱門口味： ",-1);function O(d,t,v,h,a,c){const l=i("VField"),o=i("VForm");return _(),u("div",E,[s("div",B,[s("div",S,[z,R,e(o,{class:"d-flex bg-white mb-3 p-2 rounded",onSubmit:t[1]||(t[1]=()=>c.getSearch())},{default:g(({errors:r})=>[V,e(l,{class:f(["form-control me-2",{"is-invalid":r.搜尋}]),type:"search",name:"搜尋",placeholder:"探索美味：披薩類別","aria-label":"Search",modelValue:a.keyword,"onUpdate:modelValue":t[0]||(t[0]=b=>a.keyword=b),rules:"required"},null,8,["modelValue","class"]),F]),_:1}),s("div",Q,[H,s("button",{type:"button",onClick:t[2]||(t[2]=()=>this.keyword="瑪格麗特"),class:"btn btn-outline-primary badge rounded-pill me-2 p-2 border-white text-white"}," 瑪格麗特 "),s("button",{type:"button",onClick:t[3]||(t[3]=()=>this.keyword="醬烤嫩雞"),class:"btn btn-outline-primary badge rounded-pill me-2 p-2 border-white text-white"}," 醬烤嫩雞 "),s("button",{type:"button",onClick:t[4]||(t[4]=()=>this.keyword="豪華海鮮"),class:"btn btn-outline-primary badge rounded-pill me-2 p-2 border-white text-white"}," 豪華海鮮 ")])])])])}const N=m(C,[["render",O]]),j="/vue3_pizza/assets/about_img_1-a112cf32.png",G="/vue3_pizza/assets/about_img_2-32a5dba3.png",P="/vue3_pizza/assets/vege-dcaeba0d.png",I="/vue3_pizza/assets/seafood-a296cec3.png",p="/vue3_pizza/assets/meet-7a2cb463.png",J="/vue3_pizza/assets/sidemeal-52d9e742.png",$="/vue3_pizza/assets/dessert-f8effbbb.png";const D={components:{LandingPage:N,SwiperTopFlavors:y},methods:{...w(A,["changeCategory"])}},L=n('<div class="bg_texture1" style="padding:100px 0px;"><div class="container"><div class="d-flex flex-column align-items-center justify-content-center mb-5"><p class="fw-bold mb-n1 text-cusGray">ABOUT US</p><h3 class="h1 fw-bold mt-1"><span class="text-primary me-5">—</span>關於我們<span class="text-primary ms-5">—</span></h3></div><div class="row d-flex flex-column flex-md-row flex-md-row-reverse align-items-center" data-aos="fade-up"><div class="col-md-6"><img src="'+j+'" class="w-100 object-fit-cover rounded-bottom-md-3 rounded-top-3" alt="aboutUs_1"></div><div class="col-md-6"><div class="px-4 py-5 bg-white rounded-bottom-3 rounded-top-md-3"><h5 class="text-primary fw-bold">職人堅持</h5><p class="text-cusBrown"> 移植義大利的傳統職人精神，從選料、拍製餅皮、到對烤爐的要求毫不馬虎。 </p><p class="text-cusBrown"> 運用優質新鮮食材及多元烹調手法，研發出一份份口味創意、連比薩邊也讓人意猶未盡的比薩，滿足餐桌上每一個挑剔的味蕾。 </p></div></div></div><div class="row flex-column flex-md-row align-items-center mt-5" data-aos="fade-up"><div class="col-md-6"><img src="'+G+'" class="w-100 object-fit-cover rounded-bottom-md-3 rounded-top-3" alt="aboutUs_2"></div><div class="col-md-6"><div class="px-4 py-5 bg-white rounded-bottom-3 rounded-top-md-3"><h5 class="text-primary fw-bold">歡聚時刻</h5><p class="text-cusBrown"> 獨樂樂不如眾樂樂！我們不只提供美食，更打造好友小聚、家族聚餐、慶生、過節都適合的舒適用餐環境。 </p><p class="text-cusBrown"> 在這裡，您可以自在放鬆的做自己，只需享受美食、用美食開啟話題吧！ </p></div></div></div></div></div>',1),T={class:"bg_texture2",style:{padding:"100px 0px"}},U={class:"container"},M=n('<div class="d-flex flex-column align-items-center justify-content-center mb-5"><p class="fw-bold mb-n1 text-cusGray">CATEGORIES</p><h3 class="h1 fw-bold mt-1"><span class="text-primary me-5">—</span>商品分類<span class="text-primary ms-5">—</span></h3></div>',1),Y={class:"row d-flex flex-md-row flex-column","data-aos":"fade-up"},K={class:"col-md-4"},q={class:"row d-flex flex-row flex-md-column gx-0"},X={class:"col"},W={class:"rounded-md-3 rounded-0 text-white border-5 h-100 position-relative overflow-hidden imgHover"},Z=s("img",{src:P,class:"w-100 h-100 object-fit-cover bg-dark-gradient",alt:"vegePizza"},null,-1),ss=s("div",{class:"position-absolute top-0 start-0 w-100 bg-dark-gradient p-3"},[s("h5",{class:"fw-bold fs-2"},"蔬食首選"),s("p",{class:"fw-bold fs-6 ps-1"},"VEGE")],-1),ts={class:"col mt-md-4 mt-0"},es={class:"rounded-md-3 rounded-0 text-white border-5 h-100 position-relative overflow-hidden imgHover"},os=s("img",{src:I,class:"w-100 h-100 object-fit-cover",alt:"seafood"},null,-1),ds=s("div",{class:"position-absolute top-0 start-0 w-100 bg-dark-gradient p-3"},[s("h5",{class:"fw-bold fs-2"},"海鮮至上"),s("p",{class:"fw-bold fs-6 ps-1"},"SEA FOOD")],-1),is={class:"col-md-4"},ns={class:"rounded-md-3 rounded-0 text-white border-5 h-100 position-relative overflow-hidden imgHover"},as=n('<img src="'+p+'" class="w-100 h-100 object-fit-cover d-md-block d-none" alt="meet"><img src="'+p+'" class="w-100 object-fit-cover d-block d-md-none" height="200" alt="meet"><div class="position-absolute top-0 start-0 w-100 bg-dark-gradient p-3"><h5 class="fw-bold fs-2">無肉不歡</h5><p class="fw-bold fs-6 ps-1">MEAT</p></div>',3),ls={class:"col-md-4"},rs={class:"row d-flex lex-row flex-md-column gx-0"},cs={class:"col"},ps={class:"rounded-md-3 rounded-0 text-white border-5 h-100 position-relative overflow-hidden imgHover"},ms=s("img",{src:J,class:"w-100 h-100 object-fit-cover",alt:"sidemeal"},null,-1),_s=s("div",{class:"position-absolute top-0 start-0 w-100 bg-dark-gradient p-3"},[s("h5",{class:"fw-bold fs-2"},"精緻副食"),s("p",{class:"fw-bold fs-6 ps-1"},"SIDE MEAL")],-1),us={class:"col mt-md-4 mt-0"},vs={class:"rounded-md-3 rounded-0 text-white border-5 h-100 position-relative overflow-hidden imgHover"},hs=s("img",{src:$,class:"w-100 h-100 object-fit-cover",alt:"dessertPizza",to:"/products"},null,-1),bs=s("div",{class:"position-absolute top-0 start-0 w-100 bg-dark-gradient p-3"},[s("h5",{class:"fw-bold fs-2"},"甜食主義"),s("p",{class:"fw-bold fs-6 ps-1"},"DESSERT")],-1),gs={class:"container my-5"},fs=n('<div class="d-flex flex-column align-items-center justify-content-center mt-5"><p class="fw-bold mb-n1 text-cusGray">TOP FLAVORS</p><h3 class="h1 fw-bold mt-1"><span class="text-primary me-5">—</span>精選口味<span class="text-primary ms-5">—</span></h3></div>',1);function ws(d,t,v,h,a,c){const l=i("LandingPage"),o=i("router-link"),r=i("SwiperTopFlavors");return _(),u(x,null,[e(l),L,s("div",T,[s("div",U,[M,s("div",Y,[s("div",K,[s("div",q,[s("div",X,[s("div",W,[e(o,{class:"nav-item nav-link me-4 stretched-link",to:"/products",onClick:t[0]||(t[0]=()=>d.changeCategory("蔬食首選"))}),Z,ss])]),s("div",ts,[s("div",es,[e(o,{class:"nav-item nav-link me-4 stretched-link",to:"/products",onClick:t[1]||(t[1]=()=>d.changeCategory("海鮮至上"))}),os,ds])])])]),s("div",is,[s("div",ns,[e(o,{class:"nav-item nav-link me-4 stretched-link",to:"/products",onClick:t[2]||(t[2]=()=>d.changeCategory("無肉不歡"))}),as])]),s("div",ls,[s("div",rs,[s("div",cs,[s("div",ps,[e(o,{class:"nav-item nav-link me-4 stretched-link",to:"/products",onClick:t[3]||(t[3]=()=>d.changeCategory("炸物"))}),ms,_s])]),s("div",us,[s("div",vs,[hs,e(o,{class:"stretched-link",to:"/products",onClick:t[4]||(t[4]=()=>d.changeCategory("甜食主義"))}),bs])])])])])])]),s("div",gs,[fs,e(r,{category:"披薩"})])],64)}const Ss=m(D,[["render",ws]]);export{Ss as default};
