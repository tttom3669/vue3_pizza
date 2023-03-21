import{_ as St,o as Y,c as W,a as k,n as lt,g as ut,F as dt,f as Lt,t as J,p as V,e as ct,i as xt}from"./index-4876b214.js";const It={props:["pages"]},$t={class:"d-flex justify-content-center my-4"},Rt={"aria-label":"Page navigation example"},Vt={class:"pagination"},Pt=k("span",{"aria-hidden":"true"},"«",-1),Ft=[Pt],qt=["onClick"],Bt=k("span",{"aria-hidden":"true"},"»",-1),jt=[Bt];function Kt(l,O,e,o,d,s){return Y(),W("div",$t,[k("nav",Rt,[k("ul",Vt,[k("li",{class:lt(["page-item",{disabled:!e.pages.has_pre}])},[k("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:O[0]||(O[0]=ut(n=>l.$emit("change-page",e.pages.current_page-1),["prevent"]))},Ft)],2),(Y(!0),W(dt,null,Lt(e.pages.total_pages,n=>(Y(),W("li",{class:lt(["page-item",{active:n===e.pages.current_page}]),key:n+"page"},[k("a",{class:"page-link",href:"#",onClick:ut(h=>l.$emit("change-page",n),["prevent"])},J(n),9,qt)],2))),128)),k("li",{class:lt(["page-item",{disabled:!e.pages.has_next}])},[k("a",{class:"page-link",href:"#","aria-label":"Next",onClick:O[1]||(O[1]=ut(n=>l.$emit("change-page",e.pages.current_page+1),["prevent"]))},jt)],2)])])])}const Ae=St(It,[["render",Kt]]);var ft={},Ht={get exports(){return ft},set exports(l){ft=l}},z={},Yt={get exports(){return z},set exports(l){z=l}};/*!
  * Bootstrap index.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var pt;function j(){return pt||(pt=1,function(l,O){(function(e,o){o(O)})(V,function(e){const s="transitionend",n=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),h=t=>{do t+=Math.floor(Math.random()*1e6);while(document.getElementById(t));return t},u=t=>{let a=t.getAttribute("data-bs-target");if(!a||a==="#"){let f=t.getAttribute("href");if(!f||!f.includes("#")&&!f.startsWith("."))return null;f.includes("#")&&!f.startsWith("#")&&(f=`#${f.split("#")[1]}`),a=f&&f!=="#"?f.trim():null}return a},A=t=>{const a=u(t);return a&&document.querySelector(a)?a:null},y=t=>{const a=u(t);return a?document.querySelector(a):null},g=t=>{if(!t)return 0;let{transitionDuration:a,transitionDelay:f}=window.getComputedStyle(t);const w=Number.parseFloat(a),C=Number.parseFloat(f);return!w&&!C?0:(a=a.split(",")[0],f=f.split(",")[0],(Number.parseFloat(a)+Number.parseFloat(f))*1e3)},D=t=>{t.dispatchEvent(new Event(s))},c=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),b=t=>c(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(t):null,m=t=>{if(!c(t)||t.getClientRects().length===0)return!1;const a=getComputedStyle(t).getPropertyValue("visibility")==="visible",f=t.closest("details:not([open])");if(!f)return a;if(f!==t){const w=t.closest("summary");if(w&&w.parentNode!==f||w===null)return!1}return a},_=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",L=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const a=t.getRootNode();return a instanceof ShadowRoot?a:null}return t instanceof ShadowRoot?t:t.parentNode?L(t.parentNode):null},P=()=>{},N=t=>{t.offsetHeight},$=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,M=[],i=t=>{document.readyState==="loading"?(M.length||document.addEventListener("DOMContentLoaded",()=>{for(const a of M)a()}),M.push(t)):t()},r=()=>document.documentElement.dir==="rtl",p=t=>{i(()=>{const a=$();if(a){const f=t.NAME,w=a.fn[f];a.fn[f]=t.jQueryInterface,a.fn[f].Constructor=t,a.fn[f].noConflict=()=>(a.fn[f]=w,t.jQueryInterface)}})},E=t=>{typeof t=="function"&&t()},S=(t,a,f=!0)=>{if(!f){E(t);return}const w=5,C=g(a)+w;let x=!1;const R=({target:q})=>{q===a&&(x=!0,a.removeEventListener(s,R),E(t))};a.addEventListener(s,R),setTimeout(()=>{x||D(a)},C)},T=(t,a,f,w)=>{const C=t.length;let x=t.indexOf(a);return x===-1?!f&&w?t[C-1]:t[0]:(x+=f?1:-1,w&&(x=(x+C)%C),t[Math.max(0,Math.min(x,C-1))])};e.defineJQueryPlugin=p,e.execute=E,e.executeAfterTransition=S,e.findShadowRoot=L,e.getElement=b,e.getElementFromSelector=y,e.getNextActiveElement=T,e.getSelectorFromElement=A,e.getTransitionDurationFromElement=g,e.getUID=h,e.getjQuery=$,e.isDisabled=_,e.isElement=c,e.isRTL=r,e.isVisible=m,e.noop=P,e.onDOMContentLoaded=i,e.reflow=N,e.toType=n,e.triggerTransitionEnd=D,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(Yt,z)),z}var X={},Wt={get exports(){return X},set exports(l){X=l}};/*!
  * Bootstrap event-handler.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var gt;function G(){return gt||(gt=1,function(l,O){(function(e,o){l.exports=o(j())})(V,function(e){const o=/[^.]*(?=\..*)\.|.*/,d=/\..*/,s=/::\d+$/,n={};let h=1;const u={mouseenter:"mouseover",mouseleave:"mouseout"},A=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function y(i,r){return r&&`${r}::${h++}`||i.uidEvent||h++}function g(i){const r=y(i);return i.uidEvent=r,n[r]=n[r]||{},n[r]}function D(i,r){return function p(E){return M(E,{delegateTarget:i}),p.oneOff&&$.off(i,E.type,r),r.apply(i,[E])}}function c(i,r,p){return function E(S){const T=i.querySelectorAll(r);for(let{target:t}=S;t&&t!==this;t=t.parentNode)for(const a of T)if(a===t)return M(S,{delegateTarget:t}),E.oneOff&&$.off(i,S.type,r,p),p.apply(t,[S])}}function b(i,r,p=null){return Object.values(i).find(E=>E.callable===r&&E.delegationSelector===p)}function m(i,r,p){const E=typeof r=="string",S=E?p:r||p;let T=N(i);return A.has(T)||(T=i),[E,S,T]}function _(i,r,p,E,S){if(typeof r!="string"||!i)return;let[T,t,a]=m(r,p,E);r in u&&(t=(at=>function(B){if(!B.relatedTarget||B.relatedTarget!==B.delegateTarget&&!B.delegateTarget.contains(B.relatedTarget))return at.call(this,B)})(t));const f=g(i),w=f[a]||(f[a]={}),C=b(w,t,T?p:null);if(C){C.oneOff=C.oneOff&&S;return}const x=y(t,r.replace(o,"")),R=T?c(i,p,t):D(i,t);R.delegationSelector=T?p:null,R.callable=t,R.oneOff=S,R.uidEvent=x,w[x]=R,i.addEventListener(a,R,T)}function L(i,r,p,E,S){const T=b(r[p],E,S);T&&(i.removeEventListener(p,T,Boolean(S)),delete r[p][T.uidEvent])}function P(i,r,p,E){const S=r[p]||{};for(const T of Object.keys(S))if(T.includes(E)){const t=S[T];L(i,r,p,t.callable,t.delegationSelector)}}function N(i){return i=i.replace(d,""),u[i]||i}const $={on(i,r,p,E){_(i,r,p,E,!1)},one(i,r,p,E){_(i,r,p,E,!0)},off(i,r,p,E){if(typeof r!="string"||!i)return;const[S,T,t]=m(r,p,E),a=t!==r,f=g(i),w=f[t]||{},C=r.startsWith(".");if(typeof T<"u"){if(!Object.keys(w).length)return;L(i,f,t,T,S?p:null);return}if(C)for(const x of Object.keys(f))P(i,f,x,r.slice(1));for(const x of Object.keys(w)){const R=x.replace(s,"");if(!a||r.includes(R)){const q=w[x];L(i,f,t,q.callable,q.delegationSelector)}}},trigger(i,r,p){if(typeof r!="string"||!i)return null;const E=e.getjQuery(),S=N(r),T=r!==S;let t=null,a=!0,f=!0,w=!1;T&&E&&(t=E.Event(r,p),E(i).trigger(t),a=!t.isPropagationStopped(),f=!t.isImmediatePropagationStopped(),w=t.isDefaultPrevented());let C=new Event(r,{bubbles:a,cancelable:!0});return C=M(C,p),w&&C.preventDefault(),f&&i.dispatchEvent(C),C.defaultPrevented&&t&&t.preventDefault(),C}};function M(i,r){for(const[p,E]of Object.entries(r||{}))try{i[p]=E}catch{Object.defineProperty(i,p,{configurable:!0,get(){return E}})}return i}return $})}(Wt)),X}var Z={},Ut={get exports(){return Z},set exports(l){Z=l}};/*!
  * Bootstrap selector-engine.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var mt;function ht(){return mt||(mt=1,function(l,O){(function(e,o){l.exports=o(j())})(V,function(e){return{find(d,s=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(s,d))},findOne(d,s=document.documentElement){return Element.prototype.querySelector.call(s,d)},children(d,s){return[].concat(...d.children).filter(n=>n.matches(s))},parents(d,s){const n=[];let h=d.parentNode.closest(s);for(;h;)n.push(h),h=h.parentNode.closest(s);return n},prev(d,s){let n=d.previousElementSibling;for(;n;){if(n.matches(s))return[n];n=n.previousElementSibling}return[]},next(d,s){let n=d.nextElementSibling;for(;n;){if(n.matches(s))return[n];n=n.nextElementSibling}return[]},focusableChildren(d){const s=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(s,d).filter(n=>!e.isDisabled(n)&&e.isVisible(n))}}})}(Ut)),Z}var tt={},zt={get exports(){return tt},set exports(l){tt=l}},et={},Qt={get exports(){return et},set exports(l){et=l}};/*!
  * Bootstrap manipulator.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Et;function wt(){return Et||(Et=1,function(l,O){(function(e,o){l.exports=o()})(V,function(){function e(s){if(s==="true")return!0;if(s==="false")return!1;if(s===Number(s).toString())return Number(s);if(s===""||s==="null")return null;if(typeof s!="string")return s;try{return JSON.parse(decodeURIComponent(s))}catch{return s}}function o(s){return s.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`)}return{setDataAttribute(s,n,h){s.setAttribute(`data-bs-${o(n)}`,h)},removeDataAttribute(s,n){s.removeAttribute(`data-bs-${o(n)}`)},getDataAttributes(s){if(!s)return{};const n={},h=Object.keys(s.dataset).filter(u=>u.startsWith("bs")&&!u.startsWith("bsConfig"));for(const u of h){let A=u.replace(/^bs/,"");A=A.charAt(0).toLowerCase()+A.slice(1,A.length),n[A]=e(s.dataset[u])}return n},getDataAttribute(s,n){return e(s.getAttribute(`data-bs-${o(n)}`))}}})}(Qt)),et}/*!
  * Bootstrap scrollbar.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var bt;function Gt(){return bt||(bt=1,function(l,O){(function(e,o){l.exports=o(ht(),wt(),j())})(V,function(e,o,d){const s=c=>c&&typeof c=="object"&&"default"in c?c:{default:c},n=s(e),h=s(o),u=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",A=".sticky-top",y="padding-right",g="margin-right";class D{constructor(){this._element=document.body}getWidth(){const b=document.documentElement.clientWidth;return Math.abs(window.innerWidth-b)}hide(){const b=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,y,m=>m+b),this._setElementAttributes(u,y,m=>m+b),this._setElementAttributes(A,g,m=>m-b)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,y),this._resetElementAttributes(u,y),this._resetElementAttributes(A,g)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(b,m,_){const L=this.getWidth(),P=N=>{if(N!==this._element&&window.innerWidth>N.clientWidth+L)return;this._saveInitialAttribute(N,m);const $=window.getComputedStyle(N).getPropertyValue(m);N.style.setProperty(m,`${_(Number.parseFloat($))}px`)};this._applyManipulationCallback(b,P)}_saveInitialAttribute(b,m){const _=b.style.getPropertyValue(m);_&&h.default.setDataAttribute(b,m,_)}_resetElementAttributes(b,m){const _=L=>{const P=h.default.getDataAttribute(L,m);if(P===null){L.style.removeProperty(m);return}h.default.removeDataAttribute(L,m),L.style.setProperty(m,P)};this._applyManipulationCallback(b,_)}_applyManipulationCallback(b,m){if(d.isElement(b)){m(b);return}for(const _ of n.default.find(b,this._element))m(_)}}return D})}(zt)),tt}var nt={},Jt={get exports(){return nt},set exports(l){nt=l}},st={},Xt={get exports(){return st},set exports(l){st=l}};/*!
  * Bootstrap data.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var yt;function Zt(){return yt||(yt=1,function(l,O){(function(e,o){l.exports=o()})(V,function(){const e=new Map;return{set(d,s,n){e.has(d)||e.set(d,new Map);const h=e.get(d);if(!h.has(s)&&h.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(h.keys())[0]}.`);return}h.set(s,n)},get(d,s){return e.has(d)&&e.get(d).get(s)||null},remove(d,s){if(!e.has(d))return;const n=e.get(d);n.delete(s),n.size===0&&e.delete(d)}}})}(Xt)),st}var it={},te={get exports(){return it},set exports(l){it=l}};/*!
  * Bootstrap config.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var At;function _t(){return At||(At=1,function(l,O){(function(e,o){l.exports=o(j(),wt())})(V,function(e,o){const s=(h=>h&&typeof h=="object"&&"default"in h?h:{default:h})(o);class n{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(u){return u=this._mergeConfigObj(u),u=this._configAfterMerge(u),this._typeCheckConfig(u),u}_configAfterMerge(u){return u}_mergeConfigObj(u,A){const y=e.isElement(A)?s.default.getDataAttribute(A,"config"):{};return{...this.constructor.Default,...typeof y=="object"?y:{},...e.isElement(A)?s.default.getDataAttributes(A):{},...typeof u=="object"?u:{}}}_typeCheckConfig(u,A=this.constructor.DefaultType){for(const y of Object.keys(A)){const g=A[y],D=u[y],c=e.isElement(D)?"element":e.toType(D);if(!new RegExp(g).test(c))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${y}" provided type "${c}" but expected type "${g}".`)}}}return n})}(te)),it}/*!
  * Bootstrap base-component.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var vt;function ee(){return vt||(vt=1,function(l,O){(function(e,o){l.exports=o(Zt(),j(),G(),_t())})(V,function(e,o,d,s){const n=D=>D&&typeof D=="object"&&"default"in D?D:{default:D},h=n(e),u=n(d),A=n(s),y="5.2.3";class g extends A.default{constructor(c,b){super(),c=o.getElement(c),c&&(this._element=c,this._config=this._getConfig(b),h.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){h.default.remove(this._element,this.constructor.DATA_KEY),u.default.off(this._element,this.constructor.EVENT_KEY);for(const c of Object.getOwnPropertyNames(this))this[c]=null}_queueCallback(c,b,m=!0){o.executeAfterTransition(c,b,m)}_getConfig(c){return c=this._mergeConfigObj(c,this._element),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}static getInstance(c){return h.default.get(o.getElement(c),this.DATA_KEY)}static getOrCreateInstance(c,b={}){return this.getInstance(c)||new this(c,typeof b=="object"?b:null)}static get VERSION(){return y}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(c){return`${c}${this.EVENT_KEY}`}}return g})}(Jt)),nt}var ot={},ne={get exports(){return ot},set exports(l){ot=l}};/*!
  * Bootstrap backdrop.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Dt;function se(){return Dt||(Dt=1,function(l,O){(function(e,o){l.exports=o(G(),j(),_t())})(V,function(e,o,d){const s=m=>m&&typeof m=="object"&&"default"in m?m:{default:m},n=s(e),h=s(d),u="backdrop",A="fade",y="show",g=`mousedown.bs.${u}`,D={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},c={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class b extends h.default{constructor(_){super(),this._config=this._getConfig(_),this._isAppended=!1,this._element=null}static get Default(){return D}static get DefaultType(){return c}static get NAME(){return u}show(_){if(!this._config.isVisible){o.execute(_);return}this._append();const L=this._getElement();this._config.isAnimated&&o.reflow(L),L.classList.add(y),this._emulateAnimation(()=>{o.execute(_)})}hide(_){if(!this._config.isVisible){o.execute(_);return}this._getElement().classList.remove(y),this._emulateAnimation(()=>{this.dispose(),o.execute(_)})}dispose(){this._isAppended&&(n.default.off(this._element,g),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const _=document.createElement("div");_.className=this._config.className,this._config.isAnimated&&_.classList.add(A),this._element=_}return this._element}_configAfterMerge(_){return _.rootElement=o.getElement(_.rootElement),_}_append(){if(this._isAppended)return;const _=this._getElement();this._config.rootElement.append(_),n.default.on(_,g,()=>{o.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(_){o.executeAfterTransition(_,this._getElement(),this._config.isAnimated)}}return b})}(ne)),ot}var rt={},ie={get exports(){return rt},set exports(l){rt=l}};/*!
  * Bootstrap focustrap.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Tt;function oe(){return Tt||(Tt=1,function(l,O){(function(e,o){l.exports=o(G(),ht(),_t())})(V,function(e,o,d){const s=$=>$&&typeof $=="object"&&"default"in $?$:{default:$},n=s(e),h=s(o),u=s(d),A="focustrap",g=".bs.focustrap",D=`focusin${g}`,c=`keydown.tab${g}`,b="Tab",m="forward",_="backward",L={autofocus:!0,trapElement:null},P={autofocus:"boolean",trapElement:"element"};class N extends u.default{constructor(M){super(),this._config=this._getConfig(M),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return L}static get DefaultType(){return P}static get NAME(){return A}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),n.default.off(document,g),n.default.on(document,D,M=>this._handleFocusin(M)),n.default.on(document,c,M=>this._handleKeydown(M)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,n.default.off(document,g))}_handleFocusin(M){const{trapElement:i}=this._config;if(M.target===document||M.target===i||i.contains(M.target))return;const r=h.default.focusableChildren(i);r.length===0?i.focus():this._lastTabNavDirection===_?r[r.length-1].focus():r[0].focus()}_handleKeydown(M){M.key===b&&(this._lastTabNavDirection=M.shiftKey?_:m)}}return N})}(ie)),rt}var Q={},re={get exports(){return Q},set exports(l){Q=l}};/*!
  * Bootstrap component-functions.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Nt;function ae(){return Nt||(Nt=1,function(l,O){(function(e,o){o(O,G(),j())})(V,function(e,o,d){const n=(u=>u&&typeof u=="object"&&"default"in u?u:{default:u})(o),h=(u,A="hide")=>{const y=`click.dismiss${u.EVENT_KEY}`,g=u.NAME;n.default.on(document,y,`[data-bs-dismiss="${g}"]`,function(D){if(["A","AREA"].includes(this.tagName)&&D.preventDefault(),d.isDisabled(this))return;const c=d.getElementFromSelector(this)||this.closest(`.${g}`);u.getOrCreateInstance(c)[A]()})};e.enableDismissTrigger=h,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(re,Q)),Q}/*!
  * Bootstrap modal.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(l,O){(function(e,o){l.exports=o(j(),G(),ht(),Gt(),ee(),se(),oe(),ae())})(V,function(e,o,d,s,n,h,u,A){const y=H=>H&&typeof H=="object"&&"default"in H?H:{default:H},g=y(o),D=y(d),c=y(s),b=y(n),m=y(h),_=y(u),L="modal",N=".bs.modal",$=".data-api",M="Escape",i=`hide${N}`,r=`hidePrevented${N}`,p=`hidden${N}`,E=`show${N}`,S=`shown${N}`,T=`resize${N}`,t=`click.dismiss${N}`,a=`mousedown.dismiss${N}`,f=`keydown.dismiss${N}`,w=`click${N}${$}`,C="modal-open",x="fade",R="show",q="modal-static",at=".modal.show",B=".modal-dialog",Ct=".modal-body",Mt='[data-bs-toggle="modal"]',Ot={backdrop:!0,focus:!0,keyboard:!0},kt={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class K extends b.default{constructor(v,I){super(v,I),this._dialog=D.default.findOne(B,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new c.default,this._addEventListeners()}static get Default(){return Ot}static get DefaultType(){return kt}static get NAME(){return L}toggle(v){return this._isShown?this.hide():this.show(v)}show(v){this._isShown||this._isTransitioning||g.default.trigger(this._element,E,{relatedTarget:v}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(C),this._adjustDialog(),this._backdrop.show(()=>this._showElement(v)))}hide(){!this._isShown||this._isTransitioning||g.default.trigger(this._element,i).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(R),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const v of[window,this._dialog])g.default.off(v,N);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new m.default({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new _.default({trapElement:this._element})}_showElement(v){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const I=D.default.findOne(Ct,this._dialog);I&&(I.scrollTop=0),e.reflow(this._element),this._element.classList.add(R);const F=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,g.default.trigger(this._element,S,{relatedTarget:v})};this._queueCallback(F,this._dialog,this._isAnimated())}_addEventListeners(){g.default.on(this._element,f,v=>{if(v.key===M){if(this._config.keyboard){v.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),g.default.on(window,T,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),g.default.on(this._element,a,v=>{g.default.one(this._element,t,I=>{if(!(this._element!==v.target||this._element!==I.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(C),this._resetAdjustments(),this._scrollBar.reset(),g.default.trigger(this._element,p)})}_isAnimated(){return this._element.classList.contains(x)}_triggerBackdropTransition(){if(g.default.trigger(this._element,r).defaultPrevented)return;const I=this._element.scrollHeight>document.documentElement.clientHeight,F=this._element.style.overflowY;F==="hidden"||this._element.classList.contains(q)||(I||(this._element.style.overflowY="hidden"),this._element.classList.add(q),this._queueCallback(()=>{this._element.classList.remove(q),this._queueCallback(()=>{this._element.style.overflowY=F},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const v=this._element.scrollHeight>document.documentElement.clientHeight,I=this._scrollBar.getWidth(),F=I>0;if(F&&!v){const U=e.isRTL()?"paddingLeft":"paddingRight";this._element.style[U]=`${I}px`}if(!F&&v){const U=e.isRTL()?"paddingRight":"paddingLeft";this._element.style[U]=`${I}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(v,I){return this.each(function(){const F=K.getOrCreateInstance(this,v);if(typeof v=="string"){if(typeof F[v]>"u")throw new TypeError(`No method named "${v}"`);F[v](I)}})}}return g.default.on(document,w,Mt,function(H){const v=e.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&H.preventDefault(),g.default.one(v,E,U=>{U.defaultPrevented||g.default.one(v,p,()=>{e.isVisible(this)&&this.focus()})});const I=D.default.findOne(at);I&&K.getInstance(I).hide(),K.getOrCreateInstance(v).toggle(this)}),A.enableDismissTrigger(K),e.defineJQueryPlugin(K),K})})(Ht);const le=ft,ue={props:["tempItem","delModalType"],methods:{openModal(){this.modal.show()},closeModal(){this.modal.hide()}},mounted(){this.modal=new le(this.$refs.delProductModal)}},ce={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},de={class:"modal-dialog"},fe={class:"modal-content border-0"},he=k("div",{class:"modal-header bg-danger text-white"},[k("h5",{id:"delProductModalLabel",class:"modal-title"},[k("span",null,"刪除產品")]),k("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),_e={class:"modal-body"},pe={class:"text-danger"},ge={class:"text-danger"},me={class:"modal-footer"},Ee=k("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function be(l,O,e,o,d,s){return Y(),W("div",ce,[k("div",de,[k("div",fe,[he,k("div",_e,[ct(" 是否刪除 "),e.delModalType==="products"||e.delModalType==="coupons"?(Y(),W(dt,{key:0},[k("strong",pe,J(e.tempItem.title),1),ct(" "+J(e.delModalType==="products"?"商品":"優惠券")+"(刪除後將無法恢復)。 ",1)],64)):e.delModalType==="orders"?(Y(),W(dt,{key:1},[k("strong",ge,J(e.tempItem.id),1),ct(" 訂單(刪除後將無法恢復)。 ")],64)):xt("",!0)]),k("div",me,[Ee,k("button",{type:"button",class:"btn btn-danger",onClick:O[0]||(O[0]=n=>l.$emit("delItem"))}," 確認刪除 ")])])])],512)}const ve=St(ue,[["render",be]]);export{Ae as A,ve as D,le as M};