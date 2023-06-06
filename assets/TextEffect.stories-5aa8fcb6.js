import{r as u}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";var h={},O={get exports(){return h},set exports(t){h=t}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=u,R=Symbol.for("react.element"),b=Symbol.for("react.fragment"),N=Object.prototype.hasOwnProperty,j=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z={key:!0,ref:!0,__self:!0,__source:!0};function S(t,e,r){var s,i={},n=null,c=null;r!==void 0&&(n=""+r),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(c=e.ref);for(s in e)N.call(e,s)&&!z.hasOwnProperty(s)&&(i[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps,e)i[s]===void 0&&(i[s]=e[s]);return{$$typeof:R,type:t,key:n,ref:c,props:i,_owner:j.current}}d.Fragment=b;d.jsx=S;d.jsxs=S;(function(t){t.exports=d})(O);const p=h.jsx;var y={},T={get exports(){return y},set exports(t){y=t}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function r(){for(var s=[],i=0;i<arguments.length;i++){var n=arguments[i];if(n){var c=typeof n;if(c==="string"||c==="number")s.push(n);else if(Array.isArray(n)){if(n.length){var a=r.apply(null,n);a&&s.push(a)}}else if(c==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){s.push(n.toString());continue}for(var o in n)e.call(n,o)&&n[o]&&s.push(o)}}}return s.join(" ")}t.exports?(r.default=r,t.exports=r):window.classNames=r})()})(T);const k=y,C=16,I=16*15;function P(t,e){const[r,s]=u.useState(0),i=u.useMemo(()=>new window.ResizeObserver(a=>{a[0]&&s(a[0].contentRect.width)}),[]);u.useLayoutEffect(()=>{if(t.current)return i.observe(t.current),()=>i.disconnect()},[t.current]);const[n,c]=u.useState({fontSize:0,width:0,height:0});return u.useLayoutEffect(()=>{if(t.current&&r>0){const a=t.current,o=document.createElement("div");o.style.position="fixed",o.style.pointerEvents="none",o.style.opacity="0",o.innerText=e,a.appendChild(o),document.fonts.ready.then(()=>{let l=I;for(;C<l&&(o.style.fontSize=`${~~l}px`,!(o.getBoundingClientRect().width<=r));)l=l*.9;const{width:w,height:E}=o.getBoundingClientRect();c({fontSize:parseInt(window.getComputedStyle(o).fontSize),width:w,height:E}),a.removeChild(o)})}},[t,e,r]),n}const L="_container_my0zh_19",A="_stroke_my0zh_25",B="_shadow_my0zh_33",m={container:L,stroke:A,shadow:B};function F({message:t}){const e=u.useRef(null),r=P(e,t??"");return p("div",{ref:e,className:m.container,children:p("span",{className:k(m.stroke,m.shadow),style:r,children:t})})}const $={};function M({message:t}){return p("div",{className:$.root,children:p(F,{message:t})})}const Z={title:"Example/TextEffect",component:M,tags:["autodocs"],argTypes:{}},f={args:{message:"부대찌개"}};var _,x,v;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    message: '부대찌개'
    // text: ""
    // primary: true,
    // label: 'Button',
  }
}`,...(v=(x=f.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const q=["Primary"];export{f as Primary,q as __namedExportsOrder,Z as default};
//# sourceMappingURL=TextEffect.stories-5aa8fcb6.js.map
