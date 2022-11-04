"use strict";(self.webpackChunkvision_doc=self.webpackChunkvision_doc||[]).push([[2191],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(o),m=r,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return o?n.createElement(f,a(a({ref:t},s),{},{components:o})):n.createElement(f,a({ref:t},s))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7186:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const i={sidebar_position:4},a="4.5 presetNode",l={unversionedId:"demo-form/4.5.presetNode",id:"demo-form/4.5.presetNode",title:"4.5 presetNode",description:"\u9884\u7f6e\u8282\u70b9",source:"@site/docs/4.demo-form/4.5.presetNode.md",sourceDirName:"4.demo-form",slug:"/demo-form/4.5.presetNode",permalink:"/vision-doc/docs/demo-form/4.5.presetNode",draft:!1,editUrl:"https://github.com/dzwqwer/vision-doc/docs/4.demo-form/4.5.presetNode.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"4.4 \u5de6\u4fa7\u83dc\u5355",permalink:"/vision-doc/docs/demo-form/4.4.leftMenu"},next:{title:"4.6 event",permalink:"/vision-doc/docs/demo-form/4.6.event"}},d={},p=[{value:"\u9884\u7f6e\u8282\u70b9",id:"\u9884\u7f6e\u8282\u70b9",level:3}],s={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"45-presetnode"},"4.5 presetNode"),(0,r.kt)("h3",{id:"\u9884\u7f6e\u8282\u70b9"},"\u9884\u7f6e\u8282\u70b9"),(0,r.kt)("p",null,"  \u5982\u679c\u6211\u4eec\u60f3\u8981\u5728\u65b0\u5efa\u8868\u5355\u7684\u65f6\u5019\u5728\u91cc\u8fb9\u53bb\u9884\u7f6e\u4e00\u4e2a \u57fa\u7840\u4fe1\u606f\u7684\u8868\u5355\u5206\u7ec4\u5e94\u8be5\u600e\u4e48\u505a\u5462\u3002"),(0,r.kt)("p",null,"  \u7b2c\u4e00\u79cd\u65b9\u5f0f defaultComp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"    <VisionShow\n      data-visplan={[plAll.dropVIGroup]}\n      data-visdata={`${EComNodeCode.Well}.con`}\n      defaultCom={[[EComNodeCode.Group, { initTitle: '\u57fa\u7840\u4fe1\u606f' }]]}\n      style={{\n        flexDirection: 'column',\n        minHeight: '40px',\n      }}\n      parentOpNode={opNode}\n      index={0}\n    />\n")),(0,r.kt)("p",null,"  \u5728 VisionShow \u7ec4\u4ef6\u4e2d\u4f20\u5165 defaultCom\n\u5b83\u7684\u7c7b\u578b\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u7b2c\u4e00\u9879\u672a\u9884\u7f6e\u7ec4\u4ef6\u7684 comCode\uff0c\u7b2c\u4e8c\u9879\u4e3a\u4e00\u4e9b\u521d\u59cb\u7684\u6570\u636e\uff0c\u4f20\u5165\u8fd9\u4e9b\u540e\uff0c\u4f1a\u5728\u9996\u6b21\u52a0\u8f7d\u5230 visionShow \u65f6\u53bb\u521b\u5efa \u5206\u7ec4\u7684 \u5b50\u8282\u70b9"),(0,r.kt)("p",null,"  \u7b2c\u4e8c\u79cd\u65b9\u5f0f \u624b\u52a8\u521b\u5efa"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"useOpNodeSuccess(\n  opNode,\n  (u) => {\n    if (opNode.isCycleDidMount) {\n      // eslint-disable-next-line no-param-reassign\n      opNode.dataSet = new DataSet();\n      // \u521b\u5efa\u4e00\u4e2a\u9ed8\u8ba4\u8282\u70b9\n      const wellConOpNode = u.getChildOpNodeByVis(`${EComNodeCode.Well}.con`);\n      const defaultGroupOpNode = visionStore.data.createNode(EComNodeCode.Group);\n      const defaultGroupGovern = new COperateGovern(defaultGroupOpNode, visionStore);\n      defaultGroupGovern.mount(wellConOpNode);\n    }\n    // \u8bbe\u7f6e\u53f3\u4fa7\u5c5e\u6027\u9762\u677f\n    u.onPrs(opNode, EOpEmitKey.click, () => {\n      console.log('\u9009\u4e2d\u4e86\u5f53\u524d\u8282\u70b9', opNode);\n    });\n  },\n  []\n);\n")),(0,r.kt)("p",null,"  \u901a\u8fc7 visionStore.data \u4e2d createNode \u521b\u5efa\u4e00\u4e2a\u8868\u5355\u5206\u7ec4\u8282\u70b9\uff0c\u7136\u540e \u5c06\u5b83\u6302\u8f7d\u5728 \u5206\u7ec4\u5bb9\u5668 slot \u7684\u4e0b\u8fb9"),(0,r.kt)("maintainer",{authors:["dzw"]}))}c.isMDXComponent=!0}}]);