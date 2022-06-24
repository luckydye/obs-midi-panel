const Pt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}};Pt();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),st=new Map;class _t{constructor(t,e){if(this._$cssResult$=!0,e!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=st.get(this.cssText);return X&&t===void 0&&(st.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const kt=n=>new _t(typeof n=="string"?n:n+"",Q),R=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((s,i,o)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[o+1],n[0]);return new _t(e,Q)},Mt=(n,t)=>{X?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),i=window.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)})},it=X?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return kt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B;const nt=window.trustedTypes,Ut=nt?nt.emptyScript:"",ot=window.reactiveElementPolyfillSupport,J={toAttribute(n,t){switch(t){case Boolean:n=n?Ut:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch(s){e=null}}return e}},yt=(n,t)=>t!==n&&(t==t||n==n),j={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:yt};class b extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const i=this._$Eh(s,e);i!==void 0&&(this._$Eu.set(i,s),t.push(i))}),t}static createProperty(t,e=j){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||j}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(it(i))}else t!==void 0&&e.push(it(t));return e}static _$Eh(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Mt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ES(t,e,s=j){var i,o;const r=this.constructor._$Eh(t,s);if(r!==void 0&&s.reflect===!0){const d=((o=(i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&o!==void 0?o:J.toAttribute)(e,s.type);this._$Ei=t,d==null?this.removeAttribute(r):this.setAttribute(r,d),this._$Ei=null}}_$AK(t,e){var s,i,o;const r=this.constructor,d=r._$Eu.get(t);if(d!==void 0&&this._$Ei!==d){const l=r.getPropertyOptions(d),a=l.converter,p=(o=(i=(s=a)===null||s===void 0?void 0:s.fromAttribute)!==null&&i!==void 0?i:typeof a=="function"?a:null)!==null&&o!==void 0?o:J.fromAttribute;this._$Ei=d,this[d]=p(e,l.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||yt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,o)=>this[o]=i),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(s)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$ES(s,this[s],e)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},ot==null||ot({ReactiveElement:b}),((B=globalThis.reactiveElementVersions)!==null&&B!==void 0?B:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var F;const _=globalThis.trustedTypes,rt=_?_.createPolicy("lit-html",{createHTML:n=>n}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,wt="?"+g,Tt=`<${wt}>`,y=document,S=(n="")=>y.createComment(n),C=n=>n===null||typeof n!="object"&&typeof n!="function",At=Array.isArray,It=n=>{var t;return At(n)||typeof((t=n)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lt=/-->/g,at=/>/g,m=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ct=/'/g,dt=/"/g,Et=/^(?:script|style|textarea|title)$/i,Nt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),w=Nt(1),A=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ht=new WeakMap,Dt=(n,t,e)=>{var s,i;const o=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let r=o._$litPart$;if(r===void 0){const d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=r=new k(t.insertBefore(S(),d),d,void 0,e!=null?e:{})}return r._$AI(n),r},$=y.createTreeWalker(y,129,null,!1),Ht=(n,t)=>{const e=n.length-1,s=[];let i,o=t===2?"<svg>":"",r=x;for(let l=0;l<e;l++){const a=n[l];let p,c,h=-1,v=0;for(;v<a.length&&(r.lastIndex=v,c=r.exec(a),c!==null);)v=r.lastIndex,r===x?c[1]==="!--"?r=lt:c[1]!==void 0?r=at:c[2]!==void 0?(Et.test(c[2])&&(i=RegExp("</"+c[2],"g")),r=m):c[3]!==void 0&&(r=m):r===m?c[0]===">"?(r=i!=null?i:x,h=-1):c[1]===void 0?h=-2:(h=r.lastIndex-c[2].length,p=c[1],r=c[3]===void 0?m:c[3]==='"'?dt:ct):r===dt||r===ct?r=m:r===lt||r===at?r=x:(r=m,i=void 0);const M=r===m&&n[l+1].startsWith("/>")?" ":"";o+=r===x?a+Tt:h>=0?(s.push(p),a.slice(0,h)+"$lit$"+a.slice(h)+g+M):a+g+(h===-2?(s.push(void 0),l):M)}const d=o+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[rt!==void 0?rt.createHTML(d):d,s]};class O{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0;const d=t.length-1,l=this.parts,[a,p]=Ht(t,e);if(this.el=O.createElement(a,s),$.currentNode=this.el.content,e===2){const c=this.el.content,h=c.firstChild;h.remove(),c.append(...h.childNodes)}for(;(i=$.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const c=[];for(const h of i.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(g)){const v=p[r++];if(c.push(h),v!==void 0){const M=i.getAttribute(v.toLowerCase()+"$lit$").split(g),U=/([.?@])?(.*)/.exec(v);l.push({type:1,index:o,name:U[2],strings:M,ctor:U[1]==="."?zt:U[1]==="?"?Bt:U[1]==="@"?jt:z})}else l.push({type:6,index:o})}for(const h of c)i.removeAttribute(h)}if(Et.test(i.tagName)){const c=i.textContent.split(g),h=c.length-1;if(h>0){i.textContent=_?_.emptyScript:"";for(let v=0;v<h;v++)i.append(c[v],S()),$.nextNode(),l.push({type:2,index:++o});i.append(c[h],S())}}}else if(i.nodeType===8)if(i.data===wt)l.push({type:2,index:o});else{let c=-1;for(;(c=i.data.indexOf(g,c+1))!==-1;)l.push({type:7,index:o}),c+=g.length-1}o++}}static createElement(t,e){const s=y.createElement("template");return s.innerHTML=t,s}}function E(n,t,e=n,s){var i,o,r,d;if(t===A)return t;let l=s!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[s]:e._$Cu;const a=C(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,s)),s!==void 0?((r=(d=e)._$Cl)!==null&&r!==void 0?r:d._$Cl=[])[s]=l:e._$Cu=l),l!==void 0&&(t=E(n,l._$AS(n,t.values),l,s)),t}class Rt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:y).importNode(s,!0);$.currentNode=o;let r=$.nextNode(),d=0,l=0,a=i[0];for(;a!==void 0;){if(d===a.index){let p;a.type===2?p=new k(r,r.nextSibling,this,t):a.type===1?p=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(p=new Ft(r,this,t)),this.v.push(p),a=i[++l]}d!==(a==null?void 0:a.index)&&(r=$.nextNode(),d++)}return o}m(t){let e=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class k{constructor(t,e,s,i){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),C(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==A&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):It(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==u&&C(this._$AH)?this._$AA.nextSibling.data=t:this.k(y.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=O.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(s);else{const r=new Rt(o,this),d=r.p(this.options);r.m(s),this.k(d),this._$AH=r}}_$AC(t){let e=ht.get(t.strings);return e===void 0&&ht.set(t.strings,e=new O(t)),e}S(t){At(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new k(this.M(S()),this.M(S()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class z{constructor(t,e,s,i,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const o=this.strings;let r=!1;if(o===void 0)t=E(this,t,e,0),r=!C(t)||t!==this._$AH&&t!==A,r&&(this._$AH=t);else{const d=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=E(this,d[s+l],e,l),a===A&&(a=this._$AH[l]),r||(r=!C(a)||a!==this._$AH[l]),a===u?t=u:t!==u&&(t+=(a!=null?a:"")+o[l+1]),this._$AH[l]=a}r&&!i&&this.C(t)}C(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class zt extends z{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===u?void 0:t}}const Lt=_?_.emptyScript:"";class Bt extends z{constructor(){super(...arguments),this.type=4}C(t){t&&t!==u?this.element.setAttribute(this.name,Lt):this.element.removeAttribute(this.name)}}class jt extends z{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=(s=E(this,t,e,0))!==null&&s!==void 0?s:u)===A)return;const i=this._$AH,o=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==u&&(i===u||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class Ft{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const ut=window.litHtmlPolyfillSupport;ut==null||ut(O,k),((F=globalThis.litHtmlVersions)!==null&&F!==void 0?F:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V,q;class f extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Dt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return A}}f.finalized=!0,f._$litElement$=!0,(V=globalThis.litElementHydrateSupport)===null||V===void 0||V.call(globalThis,{LitElement:f});const pt=globalThis.litElementPolyfillSupport;pt==null||pt({LitElement:f});((q=globalThis.litElementVersions)!==null&&q!==void 0?q:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=n=>t=>typeof t=="function"?((e,s)=>(window.customElements.define(e,s),s))(n,t):((e,s)=>{const{kind:i,elements:o}=s;return{kind:i,elements:o,finisher(r){window.customElements.define(e,r)}}})(n,t);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var G;((G=window.HTMLSlotElement)===null||G===void 0?void 0:G.prototype.assignedElements)!=null;var Vt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,Gt=(n,t,e,s)=>{for(var i=s>1?void 0:s?qt(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&Vt(t,e,i),i};let N=class extends f{constructor(){super(...arguments),this.props={value:null,options:[]}}static get properties(){return{value:{}}}static get styles(){return R`
			:host {
				display: block;
				position: relative;
				outline: none;
				color: white;
				font-family: sans-serif;
				font-size: 12px;
				text-transform: capitalize;
				min-width: 120px;
				box-sizing: border-box;
			}

			:host(:focus) {
				background: rgba(52, 52, 52, 0.75);
			}

			:host {
				width: auto;
				line-height: 15px;
				cursor: pointer;
				padding: 6px 12px;
				border-radius: 4px;
				box-sizing: content-box;
				background: rgba(15, 15, 15, 0.5);
				border: 1px solid #373737;
			}

			:host(:hover) {
				background: rgba(52, 52, 52, 0.75);
			}

			:host([active]) {
				z-index: 1000;
			}

			:host([active]) .options {
				display: block;
				animation: show 0.06s ease-out;
			}

			.options {
				display: none;
				position: absolute;
				top: 100%;
				margin-top: 2px;
				right: 0;
				background: rgba(25, 25, 25, 1);
				border-radius: 4px;
				overflow: hidden;
				min-width: 100%;
				width: max-content;
				animation: hide 0.06s ease-out both;
			}

			.options span {
				padding: 5px 8px;
				display: block;
				cursor: pointer;
			}

			.options span:hover {
				background: rgba(100, 100, 100, 0.75);
			}

			.options span:active {
				filter: brightness(0.9);
			}

			.value {
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			.value::after {
				content: url("data:image/svg+xml,%3C!-- Generator: Adobe Illustrator 22.0.1, SVG Export Plug-In --%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/' x='0px' y='0px' width='7px' height='5.8px' viewBox='0 0 7 5.8' style='enable-background:new 0 0 7 5.8;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cdefs%3E%3C/defs%3E%3Cpolygon class='st0' points='0,0 3.5,5.8 7,0 '/%3E%3C/svg%3E%0A");
				position: absolute;
				right: 10px;
				top: 50%;
				transform: translateY(-55%);
			}

			:host([active]) .value::after {
				transform: translateY(-50%) rotate(180deg);
			}

			@keyframes show {
				from {
					clip-path: polygon(100% 0, 0 0, 0 0, 100% 0);
				}
				to {
					clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
				}
			}
			@keyframes hide {
				from {
					clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
				}
				to {
					clip-path: polygon(100% 0, 0 0, 0 0, 100% 0);
				}
			}
		`}get value(){return this.props.value}set value(n){this.props.value=n;for(let t of this.options)t.value==n&&(this.props.value=t);this.requestUpdate()}get options(){return this.props.options||[]}set options(n){this.props.options=n,this.requestUpdate()}async onOpenDropdown(){}async openDropdown(){await this.onOpenDropdown(),this.setAttribute("active","")}async closeDropdown(){this.removeAttribute("active")}connectedCallback(){if(super.connectedCallback(),this.tabIndex=0,this.addEventListener("focus",n=>{this.openDropdown()}),this.addEventListener("blur",n=>{this.closeDropdown()}),this.options&&this.options.length<1){const n=[];for(let t of this.children)n.push({name:t.getAttribute("name"),value:t.getAttribute("value")});this.options=n}}onSelect(n){this.value=n,this.dispatchEvent(new Event("change",{bubbles:!0})),this.requestUpdate(),this.blur()}render(){const n=this.props.options||[],t=this.props.value!=null&&(this.props.value.name||this.props.value)||"none";return w`
			<div class="value">${t}</div>
			<div class="options">
				${n.map(e=>w`<span @click=${()=>this.onSelect(e)}
						>${e.name}</span
					>`)}
			</div>
		`}};N=Gt([L("dropdown-button")],N);class Wt extends f{static get styles(){return R`
			:host {
				display: inline-block;
				width: 140px;
				height: 28px;
				border-radius: 3px;
				overflow: hidden;
				box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
			}
			:host(:hover) input {
				background: #2e2e2e;
			}
			input {
				width: 100%;
				height: 100%;
				border: none;
				margin: 0;
				outline: none;
				padding: 0;
				background: var(--gyro-pallate-btn-bg);
				color: #fff;
				padding: 0 10px;
				box-sizing: border-box;
			}
			input:focus {
				background: var(--gyro-pallate-panel-bg);
			}
		`}onInputChange(){this.dispatchEvent(new Event("change"))}onInputInput(){this.dispatchEvent(new Event("input"))}get value(){return this.input.value}constructor(){super(),this.input=document.createElement("input"),this.input.onchange=t=>this.onInputChange(t),this.input.oninput=t=>this.onInputInput(t)}render(){return w` ${this.input} `}static get properties(){return{value:{},placeholder:{}}}get value(){return this.input.value}set value(t){this.input.value=t}get placeholder(){return this.input.placeholder}set placeholder(t){this.input.placeholder=t}}customElements.define("gyro-input",Wt);class Jt extends f{static get styles(){return R`
			:host {
				--button-size: 14px;
				--global-font-color: #eee;
				--accent-color: #2f77b1;

				border-radius: 100px;
				overflow: hidden;
				background: black;
				cursor: pointer;
				width: calc(var(--button-size) * 2);
				display: inline-block;
			}
			:host([checked]) .switch-handle {
				transform: translateX(100%);
			}
			.switch {
				z-index: 1;
				position: relative;
			}
			.switch:active .switch-handle-thumb {
				filter: brightness(0.85);
			}
			.switch-handle {
				height: var(--button-size);
				width: var(--button-size);
				position: relative;
				transition: transform 0.15s cubic-bezier(0.38, 0, 0.08, 1.01);
			}
			.switch-handle::after,
			.switch-handle::before {
				content: "";
				top: 0;
				height: 100%;
				position: absolute;
				width: calc(var(--button-size) * 2);
			}
			.switch-handle::after {
				left: 50%;
				background: #444;
			}
			.switch-handle::before {
				right: 50%;
				background: var(--accent-color);
			}
			.switch-handle-thumb {
				width: 100%;
				height: 100%;
				border-radius: 50%;
				position: relative;
				z-index: 1000;
				background: var(--global-font-color);
			}
		`}static get properties(){return{checked:{}}}get checked(){return this.hasAttribute("checked")&&this.getAttribute("checked")!="false"}set checked(t){t===!1?this.removeAttribute("checked"):t===!0&&this.setAttribute("checked","")}render(){return w`
			<div class="switch" @click=${()=>{this.checked=!this.checked,this.dispatchEvent(new Event("change"))}}>
				<div class="switch-handle">
					<div class="switch-handle-thumb"></div>
				</div>
			</div>
		`}}customElements.define("input-switch",Jt);"obsstudio"in window&&obsstudio.getControlLevel(function(n){console.log("OBS control level:",n)});class tt{static async getScenes(){return new Promise(t=>{obsstudio.getScenes(function(e){t(e)})})}static async setScene(t){obsstudio.setCurrentScene(t)}}var Kt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,Zt=(n,t,e,s)=>{for(var i=s>1?void 0:s?Yt(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&Kt(t,e,i),i};let vt=class extends N{async getScenes(){const n=[{name:"None",value:"None"}],t=await tt.getScenes();if(t)for(let e of t)n.push({name:e,value:e});return n}async onOpenDropdown(){this.options=await this.getScenes()}};vt=Zt([L("scene-selector")],vt);var Xt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,te=(n,t,e,s)=>{for(var i=s>1?void 0:s?Qt(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&Xt(t,e,i),i};let gt=class extends N{async getScenes(){const n=[{name:"None",value:"None"}],t=await tt.getScenes();if(t)for(let e of t)n.push({name:e,value:e});return n}async onOpenDropdown(){this.options=await this.getScenes()}};gt=te([L("midi-plate")],gt);const ft=new EventTarget;class ee extends Event{constructor(t,e,s){super("change"),this.key=t,this.newValue=s,this.oldValue=e}}const W=JSON.parse(localStorage.getItem("obs-tools-store")||"{}");class D{static on(t,e){ft.addEventListener("change",s=>{s.key==t&&e(s)})}static set(t,e){const s=this.get(t);W[t]=e;const i=new ee(t,s,e);ft.dispatchEvent(i),localStorage.setItem("obs-tools-store",JSON.stringify(W))}static get(t){return W[t]}static serialize(){return localStorage.getItem("obs-tools-store")}static fullReset(){localStorage.setItem("obs-tools-store","{}"),location.reload()}static copySaveToClipboard(){navigator.clipboard.writeText(this.serialize())}}const mt=0,xt=[],St=[];let K=null,Ct=null;async function se(n,t){if(n){for(const[e,s]of K)if(s.name==n){console.log("Found input:",s),await ne(s);break}n||console.log("Could not find input device.")}if(t){for(const[e,s]of Ct)if(s.name==t){console.log("Found output:",s),await oe(s);break}t||console.log("Could not find output device.")}}async function ie(n){K=n.inputs,Ct=n.outputs,xt.push(...K);for(const t of St)t()}function bt(){console.error("Could not access your MIDI devices.")}function ne(n){return n.open().then(()=>{console.log("input port opened"),n.onmidimessage=ae})}function oe(n){return n.open().then(()=>{console.log("output port opened"),re(n)})}function re(n){H=t=>{n.send(t)},le()}function H(){console.warn("Output not connected.")}function le(){for(const n in Z)H(new Uint8Array([176,Z[n],mt]));for(const n of I)for(const t of n)H(new Uint8Array([176,t,mt]))}function ae(n){Y.dispatchEvent(new ce(n.data))}class ce extends Event{get status(){return this.data[0]}get cc(){return this.data[1]}get value(){return this.data[2]}constructor(t){super("message"),this.data=t}}const Y=new EventTarget,Z={back:43,next:44,stop:42,play:41,rec:45,left:61,right:62,set:60,cycle:46,track_left:58,track_right:59},I=[[16,32,48,64,0],[17,33,49,65,1],[18,34,50,66,2],[19,35,51,67,3],[20,36,52,68,4],[21,37,53,69,5],[22,38,54,70,6],[23,39,55,71,7]];class T{static onRedy(t){St.push(t)}static getDevices(){return xt}static get channels(){return I.map((t,e)=>({channel:e,knob:t[0],solo:t[1],mute:t[2],rec:t[3],fader:t[4]}))}static getChannelByCC(t){for(const e of I)if(e.indexOf(t)!==-1)return{channel:I.indexOf(e),knob:e[0],solo:e[1],mute:e[2],rec:e[3],fader:e[4]}}static get MediaKeys(){return Z}static get ON(){return 127}static get OFF(){return 0}static open(t){se(t,t)}static onMessage(t){return Y.addEventListener("message",t),function(){Y.removeEventListener("message",t)}}static send(t,e,s){H(new Uint8Array([t,e,s]))}}navigator.requestMIDIAccess().then(ie,bt).catch(bt);var de=Object.defineProperty,he=Object.getOwnPropertyDescriptor,ue=(n,t,e,s)=>{for(var i=s>1?void 0:s?he(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&de(t,e,i),i};const Ot={SCENE_SWITCH:0,TRIGGER_PRESET:1},P=D.get("midi-binds")||[{midi:157,action:Ot.TRIGGER_PRESET,itemId:0}];function pe(){P.push({midi:157,action:Ot.SCENE_SWITCH,itemId:0}),et()}function et(){D.set("midi-binds",P)}function ve(n){P.splice(P.indexOf(n),1),et()}let $t=class extends f{constructor(){super(...arguments),this.scenes=[],this.midiDevices=[]}static get styles(){return R`
			.section {
				margin: 0 0 10px 0;
			}
			p {
				opacity: 0.75;
				margin-top: 0;
				font-size: 12px;
			}

			.list {
				margin-bottom: 20px;
				min-height: 200px;
				border-radius: 4px;
				padding: 1px;
				width: 100%;
			}
			.binding {
				display: grid;
				grid-template-columns: 1fr 1fr auto;
				grid-auto-rows: 32px;
				grid-gap: 4px;
				align-items: center;
				height: auto;
				position: relative;
				border-radius: 4px;
				margin-bottom: 8px;
			}
			.binding:hover {
				background: rgba(255, 255, 255, 0.025);
			}
			.binding:not(:last-child) {
				border-bottom: 1px solid #1a1a1a;
			}
			.binding.header:hover {
				background: transparent;
			}
			.binding.header {
				font-size: 13px;
				opacity: 0.5;
				height: auto;
				margin-bottom: 8px;
			}
			dropdown-button {
				min-width: 100%;
				width: 100%;
				box-sizing: border-box;
			}
			.midi-button {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			i.material-icons {
				font-size: 16px;
			}
			.del-button {
				cursor: pointer;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 35px;
				border-radius: 4px;
			}
			.del-button:hover {
				background: #363636;
				box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.2);
			}
			.del-button:active {
				background: #272727;
				box-shadow: none;
			}
			.create-btn {
				margin-top: 10px;
			}
		`}connectedCallback(){super.connectedCallback(),T.onRedy(()=>this.initMidi())}async initMidi(){const n=T.getDevices().map(([t,e])=>({name:e.name,value:e.name}));this.midiDevices=n,this.requestUpdate()}createBind(){pe(),this.requestUpdate()}handleMidiDeviceChange(n){T.open(n.name),T.onMessage(t=>{console.log(t)}),tt.getScenes().then(t=>{this.scenes=t.map(e=>({name:e,value:e}))})}render(){const n=this.scenes,t=this.midiDevices;return w`
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
			/>

			<obs-dock-tab-section section-title="Midi Scene Switcher">
				<div class="row">
					<div>
						<dropdown-button
							class="Action"
							.options="${t}"
							.value="${D.get("midi-device")}"
							@change="${e=>{this.handleMidiDeviceChange(e.target.value),D.set("midi-device",e.target.value.value)}}"
						></dropdown-button>
					</div>
				</div>

				<div class="list">
					<div class="binding header">
						<div>Midi</div>
						<div>Scene</div>
						<div>Item</div>
					</div>

					${P.map(e=>w`
							<div class="binding">
								<div class="midi-button">${e.midi}</div>

								<dropdown-button
									class="Action"
									.options="${n}"
									.value="${e.itemId}"
									@change="${s=>{e.itemId=s.target.value,et()}}"
								></dropdown-button>

								<div class="del-button">
									<span
										style="opacity: 0.5;"
										class="material-symbols-outlined"
										@click="${s=>{ve(e),this.requestUpdate()}}"
										>delete</span
									>
								</div>
							</div>
						`)}

					<button class="create-btn" @click="${()=>this.createBind()}">
						Create Bind
					</button>
				</div>
			</obs-dock-tab-section>
		`}};$t=ue([L("obs-midi-switcher")],$t);window.addEventListener("load",()=>{const n=localStorage.getItem("app-state");if(n){const t=JSON.parse(n);console.log(t)}});