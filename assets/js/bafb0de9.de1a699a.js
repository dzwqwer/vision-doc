"use strict";(self.webpackChunkvision_doc=self.webpackChunkvision_doc||[]).push([[1483],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),a=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=a(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=a(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||c;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var a=2;a<c;a++)i[a]=n[a];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var o=n(7462),r=(n(7294),n(3905));const c={sidebar_position:3},i="3.2 componentNode",l={unversionedId:"concept/3.2.componentNode",id:"concept/3.2.componentNode",title:"3.2 componentNode",description:"\u5b9a\u4f4d",source:"@site/docs/3.concept/3.2.componentNode.md",sourceDirName:"3.concept",slug:"/concept/3.2.componentNode",permalink:"/vision-doc/docs/concept/3.2.componentNode",draft:!1,editUrl:"https://github.com/dzwqwer/vision-doc/docs/3.concept/3.2.componentNode.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"3.1 \u753b\u5e03",permalink:"/vision-doc/docs/concept/3.1.layout"},next:{title:"3.3 opNode",permalink:"/vision-doc/docs/concept/3.3.opNode"}},p={},a=[{value:"\u5b9a\u4f4d",id:"\u5b9a\u4f4d",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528-1",level:3}],d={toc:a};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"32-componentnode"},"3.2 componentNode"),(0,r.kt)("h3",{id:"\u5b9a\u4f4d"},"\u5b9a\u4f4d"),(0,r.kt)("p",null,"  componentNode \u652f\u6301\u6211\u4eec\u53bb\u6ce8\u518c\u4e00\u4e9b\u7ec4\u4ef6\u7c7b\u578b\u7684\u6e32\u67d3\u3002"),(0,r.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,"  render \u4e2d \u4f1a\u9ed8\u8ba4\u5411 props \u4e2d \u6ce8\u5165 opNode\uff0c \u8fd9\u4e2a\u662f vision \u5e2e\u6211\u4eec\u81ea\u52a8\u53bb\u751f\u6210\u6ce8\u5165\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const originPrm = [plAll.tagStc, plAll.move, plAll.btnDelete, plAll.tip, plAll.dropVOStc];\nnew CComponentNode(EComNodeCode.Well, Render, originPrm);\n")),(0,r.kt)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("p",null,"\u901a\u8fc7 CComponentNode \u7c7b\u53bb\u751f\u6210\u5b9e\u4f8b"),(0,r.kt)("h3",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("p",null,"  \u4e00\u822c\u6765\u8bf4 \u6211\u4eec\u53ea\u9700\u8981\u5728\u5b9a\u4e49\u7684\u65f6\u5019\u4f20\u5165 \u5bf9\u5e94\u7684 plan \u4ee5\u53ca \u6e32\u67d3\u5373\u53ef\uff0c\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\u5b9a\u4e49\u4e00\u904d\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528-1"},"\u4f7f\u7528"),(0,r.kt)("p",null,"  \u8fd9\u6837 \u6211\u4eec\u60f3\u8981\u4f7f\u7528\u5bf9\u5e94\u7684\u7ec4\u4ef6\u65f6\uff0c\u53ea\u9700\u5c06 \u7ec4\u4ef6\u7684 code \u4e0e\u6211\u4eec\u5b9a\u4e49\u7684 comCode \u5bf9\u5e94\u4e0a\uff0c\u5728\u6e32\u67d3\u65f6 vision \u4f1a\u81ea\u52a8\u6839\u636e comCode \u8fdb\u884c\u6e32\u67d3\u5e76\u4f20\u5165\u5bf9\u5e94\u7684 props\u3002"),(0,r.kt)("maintainer",{authors:["dzw"]}))}s.isMDXComponent=!0}}]);