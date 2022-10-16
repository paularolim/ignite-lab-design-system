var K=Object.defineProperty;var i=(e,t)=>K(e,"name",{value:t,configurable:!0});import{T as V}from"./Text.dbdb36ff.js";import{r as o}from"./index.75bd7639.js";import{r as q}from"./index.2a5a2f86.js";import{j as x,F as y,a as H}from"./jsx-runtime.24f014e6.js";import{I as X,r as Y}from"./IconBase.esm.7e04d975.js";import"./clsx.m.256e9345.js";import"./iframe.db60cc96.js";function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}i(m,"_extends");function Z(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}i(Z,"$6ed0406888f73fc4$var$setRef");function L(...e){return t=>e.forEach(n=>Z(n,t))}i(L,"$6ed0406888f73fc4$export$43e446d32b3d21af");function I(...e){return o.exports.useCallback(L(...e),e)}i(I,"$6ed0406888f73fc4$export$c7b2cbe3552a0d05");function G(e,t){const n=o.exports.createContext(t);function r(s){const{children:a,...u}=s,d=o.exports.useMemo(()=>u,Object.values(u));return o.exports.createElement(n.Provider,{value:d},a)}i(r,"Provider");function c(s){const a=o.exports.useContext(n);if(a)return a;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return i(c,"useContext"),r.displayName=e+"Provider",[r,c]}i(G,"$c512c27ab02ef895$export$fd42f52fd3ae1109");function J(e,t=[]){let n=[];function r(s,a){const u=o.exports.createContext(a),d=n.length;n=[...n,a];function l(f){const{scope:p,children:b,...$}=f,S=(p==null?void 0:p[e][d])||u,P=o.exports.useMemo(()=>$,Object.values($));return o.exports.createElement(S.Provider,{value:P},b)}i(l,"Provider");function h(f,p){const b=(p==null?void 0:p[e][d])||u,$=o.exports.useContext(b);if($)return $;if(a!==void 0)return a;throw new Error(`\`${f}\` must be used within \`${s}\``)}return i(h,"useContext"),l.displayName=s+"Provider",[l,h]}i(r,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const c=i(()=>{const s=n.map(a=>o.exports.createContext(a));return i(function(u){const d=(u==null?void 0:u[e])||s;return o.exports.useMemo(()=>({[`__scope${e}`]:{...u,[e]:d}}),[u,d])},"useScope")},"createScope");return c.scopeName=e,[r,Q(c,...t)]}i(J,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function Q(...e){const t=e[0];if(e.length===1)return t;const n=i(()=>{const r=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return i(function(s){const a=r.reduce((u,{useScope:d,scopeName:l})=>{const f=d(s)[`__scope${l}`];return{...u,...f}},{});return o.exports.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}i(Q,"$c512c27ab02ef895$var$composeContextScopes");function M(e,t,{checkForDefaultPrevented:n=!0}={}){return i(function(c){if(e==null||e(c),n===!1||!c.defaultPrevented)return t==null?void 0:t(c)},"handleEvent")}i(M,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function T(e){const t=o.exports.useRef(e);return o.exports.useEffect(()=>{t.current=e}),o.exports.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}i(T,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function ee({prop:e,defaultProp:t,onChange:n=i(()=>{},"onChange")}){const[r,c]=te({defaultProp:t,onChange:n}),s=e!==void 0,a=s?e:r,u=T(n),d=o.exports.useCallback(l=>{if(s){const f=typeof l=="function"?l(e):l;f!==e&&u(f)}else c(l)},[s,e,c,u]);return[a,d]}i(ee,"$71cd76cc60e0454e$export$6f32135080cb4c3");function te({defaultProp:e,onChange:t}){const n=o.exports.useState(e),[r]=n,c=o.exports.useRef(r),s=T(t);return o.exports.useEffect(()=>{c.current!==r&&(s(r),c.current=r)},[r,c,s]),n}i(te,"$71cd76cc60e0454e$var$useUncontrolledState");function ne(e){const t=o.exports.useRef({value:e,previous:e});return o.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}i(ne,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const A=Boolean(globalThis==null?void 0:globalThis.document)?o.exports.useLayoutEffect:()=>{};function oe(e){const[t,n]=o.exports.useState(void 0);return A(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const s=c[0];let a,u;if("borderBoxSize"in s){const d=s.borderBoxSize,l=Array.isArray(d)?d[0]:d;a=l.inlineSize,u=l.blockSize}else a=e.offsetWidth,u=e.offsetHeight;n({width:a,height:u})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}i(oe,"$db6c3485150b8e66$export$1ab7ae714698c4b8");const j=o.exports.forwardRef((e,t)=>{const{children:n,...r}=e,c=o.exports.Children.toArray(n),s=c.find(ce);if(s){const a=s.props.children,u=c.map(d=>d===s?o.exports.Children.count(a)>1?o.exports.Children.only(null):o.exports.isValidElement(a)?a.props.children:null:d);return o.exports.createElement(O,m({},r,{ref:t}),o.exports.isValidElement(a)?o.exports.cloneElement(a,void 0,u):null)}return o.exports.createElement(O,m({},r,{ref:t}),n)});j.displayName="Slot";const O=o.exports.forwardRef((e,t)=>{const{children:n,...r}=e;return o.exports.isValidElement(n)?o.exports.cloneElement(n,{...se(r,n.props),ref:L(t,n.ref)}):o.exports.Children.count(n)>1?o.exports.Children.only(null):null});O.displayName="SlotClone";const re=i(({children:e})=>o.exports.createElement(o.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function ce(e){return o.exports.isValidElement(e)&&e.type===re}i(ce,"$5e63c961fc1ce211$var$isSlottable");function se(e,t){const n={...t};for(const r in t){const c=e[r],s=t[r];/^on[A-Z]/.test(r)?n[r]=(...u)=>{s==null||s(...u),c==null||c(...u)}:r==="style"?n[r]={...c,...s}:r==="className"&&(n[r]=[c,s].filter(Boolean).join(" "))}return{...e,...n}}i(se,"$5e63c961fc1ce211$var$mergeProps");const ie=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],B=ie.reduce((e,t)=>{const n=o.exports.forwardRef((r,c)=>{const{asChild:s,...a}=r,u=s?j:t;return o.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.exports.createElement(u,m({},a,{ref:c}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),ae="Label",[we,ue]=G(ae,{id:void 0,controlRef:{current:null}}),de=i(e=>{const t=ue("LabelConsumer"),{controlRef:n}=t;return o.exports.useEffect(()=>{e&&(n.current=e)},[e,n]),t.id},"$b73a6c6685e72184$export$feddbbf47baabdb9");function le(e,t){return o.exports.useReducer((n,r)=>{const c=t[n][r];return c!=null?c:n},e)}i(le,"$fe963b355347cc68$export$3e6543de14f8614f");const D=i(e=>{const{present:t,children:n}=e,r=fe(t),c=typeof n=="function"?n({present:r.isPresent}):o.exports.Children.only(n),s=I(r.ref,c.ref);return typeof n=="function"||r.isPresent?o.exports.cloneElement(c,{ref:s}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");D.displayName="Presence";function fe(e){const[t,n]=o.exports.useState(),r=o.exports.useRef({}),c=o.exports.useRef(e),s=o.exports.useRef("none"),a=e?"mounted":"unmounted",[u,d]=le(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.exports.useEffect(()=>{const l=g(r.current);s.current=u==="mounted"?l:"none"},[u]),A(()=>{const l=r.current,h=c.current;if(h!==e){const p=s.current,b=g(l);e?d("MOUNT"):b==="none"||(l==null?void 0:l.display)==="none"?d("UNMOUNT"):d(h&&p!==b?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,d]),A(()=>{if(t){const l=i(f=>{const b=g(r.current).includes(f.animationName);f.target===t&&b&&q.exports.flushSync(()=>d("ANIMATION_END"))},"handleAnimationEnd"),h=i(f=>{f.target===t&&(s.current=g(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",l),t.addEventListener("animationend",l),()=>{t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",l),t.removeEventListener("animationend",l)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:o.exports.useCallback(l=>{l&&(r.current=getComputedStyle(l)),n(l)},[])}}i(fe,"$921a889cee6df7e8$var$usePresence");function g(e){return(e==null?void 0:e.animationName)||"none"}i(g,"$921a889cee6df7e8$var$getAnimationName");const U="Checkbox",[pe,Me]=J(U),[xe,he]=pe(U),be=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,"aria-labelledby":r,name:c,checked:s,defaultChecked:a,required:u,disabled:d,value:l="on",onCheckedChange:h,...f}=e,[p,b]=o.exports.useState(null),$=I(t,v=>b(v)),S=de(p),P=r||S,_=o.exports.useRef(!1),R=p?Boolean(p.closest("form")):!0,[E=!1,F]=ee({prop:s,defaultProp:a,onChange:h});return o.exports.createElement(xe,{scope:n,state:E,disabled:d},o.exports.createElement(B.button,m({type:"button",role:"checkbox","aria-checked":C(E)?"mixed":E,"aria-labelledby":P,"aria-required":u,"data-state":z(E),"data-disabled":d?"":void 0,disabled:d,value:l},f,{ref:$,onKeyDown:M(e.onKeyDown,v=>{v.key==="Enter"&&v.preventDefault()}),onClick:M(e.onClick,v=>{F(w=>C(w)?!0:!w),R&&(_.current=v.isPropagationStopped(),_.current||v.stopPropagation())})})),R&&o.exports.createElement(ve,{control:p,bubbles:!_.current,name:c,value:l,checked:E,required:u,disabled:d,style:{transform:"translateX(-100%)"}}))}),$e="CheckboxIndicator",me=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...c}=e,s=he($e,n);return o.exports.createElement(D,{present:r||C(s.state)||s.state===!0},o.exports.createElement(B.span,m({"data-state":z(s.state),"data-disabled":s.disabled?"":void 0},c,{ref:t,style:{pointerEvents:"none",...e.style}})))}),ve=i(e=>{const{control:t,checked:n,bubbles:r=!0,...c}=e,s=o.exports.useRef(null),a=ne(n),u=oe(t);return o.exports.useEffect(()=>{const d=s.current,l=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(l,"checked").set;if(a!==n&&f){const p=new Event("click",{bubbles:r});d.indeterminate=C(n),f.call(d,C(n)?!1:n),d.dispatchEvent(p)}},[a,n,r]),o.exports.createElement("input",m({type:"checkbox","aria-hidden":!0,defaultChecked:C(n)?!1:n},c,{tabIndex:-1,ref:s,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function C(e){return e==="indeterminate"}i(C,"$e698a72e93240346$var$isIndeterminate");function z(e){return C(e)?"indeterminate":e?"checked":"unchecked"}i(z,"$e698a72e93240346$var$getState");const Ce=be,ke=me;var k=new Map;k.set("bold",function(e){return x(y,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});k.set("duotone",function(e){return x(y,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});k.set("fill",function(){return x(y,{children:x("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});k.set("light",function(e){return x(y,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});k.set("thin",function(e){return x(y,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});k.set("regular",function(e){return x(y,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var ye=i(function(t,n){return Y(t,n,k)},"renderPath"),W=o.exports.forwardRef(function(e,t){return x(X,{...Object.assign({ref:t},e,{renderPath:ye})})});W.displayName="Check";const Ee=W;function N({...e}){return x(Ce,{className:"w-6 h-6 p-[2px] bg-gray-800 rounded",children:x(ke,{asChild:!0,children:x(Ee,{weight:"bold",className:"h-5 w-5 text-cyan-500"})})})}i(N,"Checkbox");try{N.displayName="Checkbox",N.__docgenInfo={description:"",displayName:"Checkbox",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:N.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch{}const Le={title:"components/Checkbox",component:N,decorators:[e=>H("div",{className:"flex gap-3 items-center",children:[e(),x(V,{size:"sm",children:"Checkbox component"})]})]},Ie={},Te=["Default"];export{Ie as Default,Te as __namedExportsOrder,Le as default};
//# sourceMappingURL=Checkbox.stories.e56a1faa.js.map
