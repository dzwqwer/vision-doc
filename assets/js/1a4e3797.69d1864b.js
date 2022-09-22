"use strict";(self.webpackChunkvision_doc=self.webpackChunkvision_doc||[]).push([[920],{8824:(e,t,n)=>{n.d(t,{c:()=>u});var a=n(7294),r=n(2263);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),c}}),[e])}function u(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);const r=n.select(t),l=n.pluralForms.indexOf(r);return a[Math.min(l,a.length-1)]}(n,t,e)}}},1473:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var a=n(7294),r=n(2263),l=n(8762),s=n(5742),c=n(9960),o=n(5999),u=n(373),m=n(902),i=n(8824),h=n(2239),p=n(6775),d=n(412);const g=function(){const e=(0,p.k6)(),t=(0,p.TH)(),{siteConfig:{baseUrl:n}}=(0,r.Z)();return{searchValue:d.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>n+"search?q="+encodeURIComponent(e)}};var f=n(22),E=n(8202),y=n(2539),S=n(726),w=n(1073),I=n(311),v=n(3926),b=n(1029);const F="searchQueryInput_CFBF",P="searchResultItem_U687",R="searchResultItemPath_uIbk",_="searchResultItemSummary_oZHr";function k(){const{siteConfig:{baseUrl:e}}=(0,r.Z)(),t=(0,h.gA)();let n=e;try{var l;const{preferredVersion:e}=(0,u.J)(null!=(l=null==t?void 0:t.pluginId)?l:b.gQ);e&&!e.isLast&&(n=e.path+"/")}catch(q){if(b.l9&&!(q instanceof m.i6))throw q}const{selectMessage:c}=(0,i.c)(),{searchValue:p,updateSearchPath:d}=g(),[y,S]=(0,a.useState)(p),[w,v]=(0,a.useState)(),[P,R]=(0,a.useState)(),_=(0,a.useMemo)((()=>y?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:y}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[y]);(0,a.useEffect)((()=>{d(y),w&&(y?w(y,(e=>{R(e)})):R(void 0))}),[y,w]);const k=(0,a.useCallback)((e=>{S(e.target.value)}),[]);return(0,a.useEffect)((()=>{p&&p!==y&&S(p)}),[p]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,f.w)(n);v((()=>(0,E.v)(e,t,100)))}()}),[n]),a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,_)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,_),a.createElement("input",{type:"search",name:"q",className:F,"aria-label":"Search",onChange:k,value:y,autoComplete:"off",autoFocus:!0}),!w&&y&&a.createElement("div",null,a.createElement(I.Z,null)),P&&(P.length>0?a.createElement("p",null,c(P.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:P.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,P&&P.map((e=>a.createElement(C,{key:e.document.i,searchResult:e}))))))}function C(e){let{searchResult:{document:t,type:n,page:r,tokens:l,metadata:s}}=e;const o=0===n,u=2===n,m=(o?t.b:r.b).slice(),i=u?t.s:t.t;return o||m.push(r.t),a.createElement("article",{className:P},a.createElement("h2",null,a.createElement(c.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,y.C)(i,l):(0,S.o)(i,(0,w.m)(s,"t"),l,100)}})),m.length>0&&a.createElement("p",{className:R},(0,v.e)(m)),u&&a.createElement("p",{className:_,dangerouslySetInnerHTML:{__html:(0,S.o)(t.t,(0,w.m)(s,"t"),l,100)}}))}const q=function(){return a.createElement(l.Z,null,a.createElement(k,null))}}}]);