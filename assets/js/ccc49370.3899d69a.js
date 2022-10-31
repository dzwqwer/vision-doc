"use strict";(self.webpackChunkvision_doc=self.webpackChunkvision_doc||[]).push([[6103],{5203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(7294),r=n(6010),l=n(1944),o=n(5281),i=n(9460),c=n(9058),s=n(390),m=n(7462),u=n(5999),d=n(2244);function p(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,m.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,m.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){var e;const{assets:t,metadata:n}=(0,i.C)(),{title:r,description:o,date:c,tags:s,authors:m,frontMatter:u}=n,{keywords:d}=u,p=null!=(e=t.image)?e:u.image;return a.createElement(l.d,{title:r,description:o,keywords:d,image:p},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:c}),m.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:m.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&a.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var g=n(9407);function v(e){let{sidebar:t,children:n}=e;const{metadata:r,toc:l}=(0,i.C)(),{nextItem:o,prevItem:m,frontMatter:u}=r,{hide_table_of_contents:d,toc_min_heading_level:f,toc_max_heading_level:v}=u;return a.createElement(c.Z,{sidebar:t,toc:!d&&l.length>0?a.createElement(g.Z,{toc:l,minHeadingLevel:f,maxHeadingLevel:v}):void 0},a.createElement(s.Z,null,n),(o||m)&&a.createElement(p,{nextItem:o,prevItem:m}))}function h(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(f,null),a.createElement(v,{sidebar:e.sidebar},a.createElement(t,null))))}},9407:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),l=n(6010),o=n(3743);const i="tableOfContents_bqdL";function c(e){let{className:t,...n}=e;return r.createElement("div",{className:(0,l.Z)(i,"thin-scrollbar",t)},r.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7462),r=n(7294),l=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){var n;let{anchorTopOffset:a}=t;const r=e.find((e=>c(e).top>=a));if(r){var l;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(r))?r:null!=(l=e[e.indexOf(r)-1])?l:null}return null!=(n=e[e.length-1])?n:null}function m(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,r.useRef)(void 0),n=m();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=s(i,{anchorTopOffset:n.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:l}=e;return t.length?r.createElement("ul",{className:l?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const p=r.memo(d);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:d,...f}=e;const g=(0,l.L)(),v=null!=m?m:g.tableOfContents.minHeadingLevel,h=null!=d?d:g.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:v,maxHeadingLevel:h});return u((0,r.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:v,maxHeadingLevel:h}}),[c,s,v,h])),r.createElement(p,(0,a.Z)({toc:E,className:n,linkClassName:c},f))}},6815:(e,t,n)=>{n.d(t,{Z:()=>L});var a=n(7462),r=n(7294),l=n(5742);var o=n(814);var i=n(9960);var c=n(4673);var s=n(2503);function m(e){return r.createElement(s.Z,e)}var u=n(7390),d=n(1470),p=n(3612),f=n(2015);var g=n(9584),v=n(4339),h=n(2263),E=n(6486);const b="d714b";const L={head:function(e){const t=r.Children.map(e.children,(e=>r.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...a}=e.props;return r.createElement(e.props.originalType,a)}return e}(e):e));return r.createElement(l.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?r.createElement("code",e):r.createElement(o.Z,e)},a:function(e){return r.createElement(i.Z,e)},pre:function(e){var t;return r.createElement(o.Z,(0,r.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=r.Children.toArray(e.children),n=t.find((e=>{var t;return r.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),l=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(c.Z,(0,a.Z)({},e,{summary:n}),l)},ul:u.Z,img:d.Z,h1:e=>r.createElement(m,(0,a.Z)({as:"h1"},e)),h2:e=>r.createElement(m,(0,a.Z)({as:"h2"},e)),h3:e=>r.createElement(m,(0,a.Z)({as:"h3"},e)),h4:e=>r.createElement(m,(0,a.Z)({as:"h4"},e)),h5:e=>r.createElement(m,(0,a.Z)({as:"h5"},e)),h6:e=>r.createElement(m,(0,a.Z)({as:"h6"},e)),admonition:p.Z,intro:function(e){let{type:t}=e;const n=(0,r.useMemo)((()=>({must:{bg:"#f53f3f",text:"\u5fc5\u987b"},forbidden:{bg:"#f53f3f",text:"\u7981\u6b62"},should:{bg:"#ffb400",text:"\u5e94\u5f53"},shouldNot:{bg:"#ffb400",text:"\u4e0d\u5e94"},optional:{bg:"#0fc6c2",text:"\u53ef\u9009"},draft:{bg:"#86909c",text:"\u63d0\u6848"}}[t])),[t]);return r.createElement(f.Z,{style:{border:"none",fontSize:"14px"},color:n.bg},n.text)},maintainer:function(e){let{title:t="\u6b64\u7bc7\u7ef4\u62a4\u8005",authors:n=[]}=e;const{siteConfig:a}=(0,h.Z)(),l=a.customFields.authors,o=(0,r.useMemo)((()=>{const e=[];return n.forEach((t=>{(0,E.has)(l,t)&&e.push(l[t])})),e}),[n,l]);return r.createElement(g.C.Group,{className:b},r.createElement("span",{style:{marginRight:"18px"}}," ",t,":"),o.map((e=>r.createElement(v.Z,{getPopupContainer:e=>null==e?void 0:e.parentNode,title:e.job_no+" "+e.name,placement:"top"},r.createElement(g.C,{onClick:()=>{var t;(t=e.url)&&window.open(t)},alt:e.name,src:e.image_url,style:{cursor:"pointer"}})))))}}}}]);