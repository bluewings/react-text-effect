/*! For license information please see stories-TextEffect-stories.29210d85.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkintro_storybook_react_template=self.webpackChunkintro_storybook_react_template||[]).push([[261],{"./src/stories/TextEffect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextEffect_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const hooks_useTextStyle=function useTextStyle(ref,text){const[containerWidth,setWidth]=(0,react.useState)(0),observer=(0,react.useMemo)((()=>new window.ResizeObserver((entries=>{entries[0]&&setWidth(entries[0].contentRect.width)}))),[]);(0,react.useLayoutEffect)((()=>{if(ref.current)return observer.observe(ref.current),()=>observer.disconnect()}),[ref.current]);const[style,setStyle]=(0,react.useState)({fontSize:0,width:0,height:0});return(0,react.useLayoutEffect)((()=>{if(ref.current&&containerWidth>0){const container=ref.current,inspector=document.createElement("div");inspector.style.position="fixed",inspector.style.pointerEvents="none",inspector.style.opacity="0",inspector.innerText=text,container.appendChild(inspector),document.fonts.ready.then((()=>{let fontSize=240;for(;16<fontSize;){inspector.style.fontSize=~~fontSize+"px";if(inspector.getBoundingClientRect().width<=containerWidth)break;fontSize*=.9}const{width,height}=inspector.getBoundingClientRect();setStyle({fontSize:parseInt(window.getComputedStyle(inspector).fontSize),width,height}),container.removeChild(inspector)}))}}),[ref,text,containerWidth]),style};var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Sliced_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TextEffect/Sliced/Sliced.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Sliced_module.Z,options);const Sliced_Sliced_module=Sliced_module.Z&&Sliced_module.Z.locals?Sliced_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Sliced({message}){const ref=(0,react.useRef)(null),textSize=hooks_useTextStyle(ref,message??"");return(0,jsx_runtime.jsx)("div",{ref,className:Sliced_Sliced_module.container,children:(0,jsx_runtime.jsx)("span",{className:classnames_default()(Sliced_Sliced_module.stroke,Sliced_Sliced_module.shadow),style:textSize,children:message})})}Sliced.displayName="Sliced";const TextEffect_Sliced=Sliced;var TextEffect_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TextEffect/TextEffect.module.scss"),TextEffect_module_options={};TextEffect_module_options.styleTagTransform=styleTagTransform_default(),TextEffect_module_options.setAttributes=setAttributesWithoutAttributes_default(),TextEffect_module_options.insert=insertBySelector_default().bind(null,"head"),TextEffect_module_options.domAPI=styleDomAPI_default(),TextEffect_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TextEffect_module.Z,TextEffect_module_options);const TextEffect_TextEffect_module=TextEffect_module.Z&&TextEffect_module.Z.locals?TextEffect_module.Z.locals:void 0;function TextEffect({message}){return(0,jsx_runtime.jsx)("div",{className:TextEffect_TextEffect_module.root,children:(0,jsx_runtime.jsx)(TextEffect_Sliced,{message})})}TextEffect.displayName="TextEffect";const TextEffect_stories={title:"Example/TextEffect",component:TextEffect,tags:["autodocs"],argTypes:{}},Primary={args:{message:"부대찌개"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    message: '부대찌개'\n    // text: \"\"\n    // primary: true,\n    // label: 'Button',\n  }\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TextEffect/Sliced/Sliced.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'@font-face{font-family:"Cafe24Ssurround";src:url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff") format("woff");font-weight:normal;font-style:normal}@font-face{font-family:"TTTtangsbudaejjigaeB";src:url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/TTTtangsbudaejjigaeB.woff2") format("woff2");font-weight:700;font-style:normal}@font-face{font-family:"GmarketSansMedium";src:url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff") format("woff");font-weight:normal;font-style:normal}.zuSjPFPApfWD6ATsPPig{font-family:"TTTtangsbudaejjigaeB";white-space:nowrap;text-align:center}.YWr8dnZ1fQ4y1O8y9ik7{-webkit-text-stroke-width:2px;-moz-text-stroke-width:2px;-webkit-text-stroke-color:#111827;-moz-text-stroke-color:#111827;color:rgba(0,0,0,0)}.COpHmmo5WJ3BGidnXwuT{text-shadow:6px 6px #db2777}',"",{version:3,sources:["webpack://./src/components/TextEffect/Sliced/Sliced.module.scss"],names:[],mappings:"AAAA,WACE,6BAAA,CACA,6GAAA,CACA,kBAAA,CACA,iBAAA,CAGF,WACE,kCAAA,CACA,kHAAA,CACA,eAAA,CACA,iBAAA,CAGF,WACE,+BAAA,CACA,6GAAA,CACA,kBAAA,CACA,iBAAA,CAgBF,sBAEE,kCAAA,CAEA,kBAAA,CACA,iBAAA,CAGF,sBAjBE,6BAkBsB,CAjBtB,0BAiBsB,CAbtB,iCATO,CAUP,8BAVO,CAwBP,mBAAA,CAGF,sBACE,2BAAA",sourcesContent:["@font-face {\n  font-family: 'Cafe24Ssurround';\n  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'TTTtangsbudaejjigaeB';\n  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/TTTtangsbudaejjigaeB.woff2') format('woff2');\n  font-weight: 700;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'GmarketSansMedium';\n  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n$stroke: #111827;\n$shadow: #db2777;\n\n@mixin stroke-width($property) {\n  -webkit-text-stroke-width: $property;\n  -moz-text-stroke-width: $property;\n}\n\n@mixin stroke-color($property) {\n  -webkit-text-stroke-color: $property;\n  -moz-text-stroke-color: $property;\n}\n\n.container {\n  // font-family: 'Cafe24Ssurround';\n  font-family: 'TTTtangsbudaejjigaeB';\n  // font-family: 'GmarketSansMedium';\n  white-space: nowrap;\n  text-align: center;\n}\n\n.stroke {\n  @include stroke-width(2px);\n  @include stroke-color($stroke);\n  color: transparent;\n}\n\n.shadow {\n  text-shadow: 6px 6px $shadow;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"zuSjPFPApfWD6ATsPPig",stroke:"YWr8dnZ1fQ4y1O8y9ik7",shadow:"COpHmmo5WJ3BGidnXwuT"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TextEffect/TextEffect.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);