import{s as S,r as k,c as M,a as ue,u as he,d as L,o as d,b as p,e as s,t as j,f,g as F,h as m,w as E,i as x,j as pe,k as me,l as _e,m as fe,n as ge,p as ve,q as T,v as be,x as we,y as N,z,F as Z,A as xe,B as Y,T as ye,C as ke,D as $e,E as Ce,G as Se,H as Me,I as je,J as Re,K as Oe,V as Le}from"./vendor.e47133c2.js";const Ee=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}};Ee();const K=t=>{if(!t.ok)throw new Error("Failed to fetch docs data file from GitHub");return t.json()};class q{constructor(e){var i,r,n,o,a;this.options=e,this.id=this.options.id,this.name=this.options.name,this.global=this.options.global,this.repo=this.options.repo,this.defaultTag=(i=this.options.defaultTag)!=null?i:"main",this.defaultFile=(r=this.options.defaultFile)!=null?r:{category:"general",id:"welcome"},this.source=(n=this.options.source)!=null?n:`https://github.com/${this.repo}/blob/`,this.branchFilter=(o=this.options.branchFilter)!=null?o:c=>c!=="main",this.tagFilter=(a=this.options.tagFilter)!=null?a:()=>!0,this.tags=null,this.recentTag=null}fetchTags(){return this.tags?Promise.resolve(this.tags):Promise.all([fetch(`https://api.github.com/repos/${this.repo}/branches`).then(K),fetch(`https://api.github.com/repos/${this.repo}/tags`).then(K)]).catch(e=>{if(localStorage[`source-${this.id}`]){console.error(e);const i=JSON.parse(localStorage[`source-${this.id}`]);return[i.branches,i.tags]}throw e}).then(e=>{const[i,r]=e;this.tags=[this.defaultTag],localStorage[`source-${this.id}`]=JSON.stringify({branches:i,tags:r});for(const o of i)o.name!==this.defaultTag&&this.branchFilter(o.name)&&this.tags.push(o.name);const n={};for(const o of r)if(S.valid(o.name)){const a=`${S.major(o.name)}.${S.minor(o.name)}`,c=S.patch(o.name);if(c<n[a])continue;n[a]=c}for(const o of r)if(o.name!==this.defaultTag&&!!this.tagFilter(o.name)){if(S.valid(o.name)){const a=`${S.major(o.name)}.${S.minor(o.name)}`;if(S.patch(o.name)<n[a])continue}this.tags.push(o.name)}return this.tags})}async fetchDocs(e){const i=await fetch(`https://raw.githubusercontent.com/${this.repo}/docs/${e}.json`);return K(i)}}const We=new Set(["docs"]);var W=new q({id:"main",name:"Main library",global:"Musicca",repo:"musiccajs/musicca",defaultTag:"main",branchFilter:t=>!We.has(t)&&!t.startsWith("dependabot/")&&!t.startsWith("renovate/"),tagFilter:t=>S.gte(t.replace(/^v/,""),"2.0.0")});const Ae=new Set(["docs"]);var Q=new q({id:"structs",name:"Structs",global:"Structs",repo:"musiccajs/structs",defaultTag:"main",branchFilter:t=>!Ae.has(t)&&!t.startsWith("dependabot/")&&!t.startsWith("renovate/"),tagFilter:t=>S.gte(t.replace(/^v/,""),"2.0.0")});const Pe=new Set(["docs"]);var X=new q({id:"extractors",name:"Extractors",global:"Extractors",repo:"musiccajs/extractors",defaultTag:"main",branchFilter:t=>!Pe.has(t)&&!t.startsWith("dependabot/")&&!t.startsWith("renovate/"),tagFilter:t=>S.gte(t.replace(/^v/,""),"2.0.0")});const Te=k(!1);class ze{constructor(e,i){this.name=e.toLowerCase(),this.related=new Set([i])}addRelated(e){this.related.add(e)}matches(e){return e.includes(this.name)}}var C;(function(t){t[t.Class=0]="Class",t[t.Method=1]="Method",t[t.Property=2]="Property",t[t.Events=3]="Events",t[t.Typedefs=4]="Typedefs"})(C||(C={}));class He{constructor(e,i,r,n,o,a){switch(this.name=e,this.type=i,this.parentName=r,this.parentType=n,this.access=o,this.scope=a,i){case 0:case 4:{this.computedName=e;break}case 1:{this.computedName=`${r!=null?r:""}.${e}()`;break}case 2:{this.computedName=`${r!=null?r:""}.${e}`;break}case 3:{this.computedName=`${r!=null?r:""}#${e}`;break}}this.nameLowerCase=e.toLowerCase(),this.cleanedComputedName=this.computedName.replace(/[().#]/,"").toLowerCase()}get isPriority(){return this.type===0||this.type===4}getLinkPath(){var i,r;if(this.type===4||this.parentType===4)return{name:"docs-source-tag-typedef-typedef",params:{typedef:(i=this.parentName)!=null?i:this.name}};const e={name:"docs-source-tag-class-class",params:{class:(r=this.parentName)!=null?r:this.name}};return(this.type===1||this.type===2)&&(e.query={scrollTo:`${this.scope==="static"?"s-":""}${this.name}`}),this.type===3&&(e.query={scrollTo:`e-${this.name}`}),e}}const se=M(()=>ee.state.searchIndex),Ve=M(()=>ee.state.searchRef);function Be(t){const e=t.replace(/[\s().#]/g,"").toLowerCase();if(e==="")return[];let i=se.value.reduce((n,o)=>{if(e.includes(o.name))for(const a of o.related){const c=n.get(a);c?(c.numMatches+=1,c.lengthMatches+=o.name.length):n.set(a,{numMatches:1,lengthMatches:o.name.length})}return n},new Map);return i.size===0&&e.length<10&&(i=se.value.reduce((n,o)=>{if(o.name.includes(e))for(const a of o.related){const c=n.get(a);c?(c.numMatches+=1,c.lengthMatches+=o.name.length):n.set(a,{numMatches:1,lengthMatches:o.name.length})}return n},new Map)),Array.from(i.entries()).map(([n,o])=>[Ve.value[n],o]).filter(([n])=>n.access==="private"?Te.value:!0).sort(([n,o],[a,c])=>{let u=0;return n.nameLowerCase===e?u+=n.isPriority?-10:-4:a.nameLowerCase===e&&(u+=a.isPriority?10:4),e.length>=7&&(n.cleanedComputedName.includes(e)&&(u-=30),a.cleanedComputedName.includes(e)&&(u+=30)),o.numMatches===c.numMatches&&(n.isPriority&&(u-=6),a.isPriority&&(u+=6),o.numMatches>1&&(u+=Math.abs(e.length-n.computedName.length)-Math.abs(e.length-a.computedName.length)),u+=c.lengthMatches-o.lengthMatches),c.numMatches-o.numMatches+u}).map(([n,o])=>n)}function Ie(t){var e,i;return/^[_A-Z]+$/.test(t)?(e=t.match(/[A-Z]+/g))!=null?e:[]:(i=t.match(/(([A-Z]{2,})(?=[A-Z]))|[A-Z][a-z]+|[a-z]+/g))!=null?i:[]}const Ge=k(null),oe=Symbol("docs"),ee=ue({state:{sources:[{source:W,name:W.name,id:W.id},{source:Q,name:Q.name,id:Q.id},{source:X,name:X.name,id:X.id}],source:W,tag:W.defaultTag,docs:null,branches:[],file:null,stats:{downloads:`${50 .toLocaleString()}+`,stars:`${1 .toLocaleString()}+`,contributors:`${2 .toLocaleString()}+`},searchIndex:[],searchRef:[]},mutations:{setSource(t,{source:e}){t.source=e},setTag(t,{tag:e}){t.tag=e},setDocs(t,{docs:e}){t.docs=e},setBranches(t,{branches:e}){t.branches=e},setFile(t,{file:e}){t.file=e},setStats(t,{stats:e}){t.stats=e},setSearchIndex(t,{searchIndex:e,searchRef:i}){t.searchIndex=e,t.searchRef=i}},actions:{fetchStats:async({commit:t})=>{let e=0,i=0,r=0;const n=g=>{try{return g.ok?g.json():null}catch{return null}},o=()=>{},[a,c,u]=await Promise.all([fetch("https://api.npmjs.org/downloads/range/2013-08-21:2100-08-21/musicca").then(n,o),fetch("https://api.github.com/repos/musiccajs/musicca").then(n,o),fetch("https://api.github.com/repos/musiccajs/musicca/stats/contributors").then(n,o)]);if(a){e=0;for(const g of a.downloads)e+=g.downloads}c&&(i=c.stargazers_count),u&&(r=u.length),t({type:"setStats",stats:{downloads:`${e.toLocaleString()}+`,stars:`${i.toLocaleString()}+`,contributors:`${r.toLocaleString()}+`}})},fetchDocs:async({commit:t},{inputSource:e,inputTag:i=e.defaultTag})=>{var u,g,v,H;let r;try{r=await e.fetchDocs(i)}catch(l){t({type:"setDocs",docs:null}),t({type:"setTag",docs:null}),Ge.value=l;return}const n=[],o=[];let a=0;const c=(l,b,w,_,R,$)=>{const h=Ie(l),O=new He(l,b,w,_,R,$);n.push(O);const V=[];for(const G of h){const B=G.toLowerCase();let P=o.findIndex(D=>D.name===B);P>-1?o[P].addRelated(a):P=o.push(new ze(B,a))-1,V.push(P)}return a+=1,V};for(const l of r.classes){const b=c(l.name,C.Class,void 0,void 0,l.access,l.scope),w=[];for(const _ of(u=l.methods)!=null?u:[])c(_.name,C.Method,l.name,C.Class,_.access,_.scope),w.push(a-1);for(const _ of(g=l.props)!=null?g:[])c(_.name,C.Property,l.name,C.Class,_.access,_.scope),w.push(a-1);for(const _ of(v=l.events)!=null?v:[])c(_.name,C.Events,l.name,C.Class,_.access,_.scope),w.push(a-1);for(const _ of b)for(const R of w)o[_].related.add(R)}for(const l of r.typedefs){const b=c(l.name,C.Typedefs,void 0,void 0,l.access,l.scope),w=[];for(const _ of(H=l.props)!=null?H:[])c(_.name,C.Property,l.name,C.Typedefs,_.access,_.scope),w.push(a-1);for(const _ of b)for(const R of w)o[_].related.add(R)}t({type:"setSearchIndex",searchIndex:o,searchRef:n}),r.classes.sort((l,b)=>l.name.localeCompare(b.name)),r.typedefs.sort((l,b)=>l.name.localeCompare(b.name));for(const l of r.classes)l.props&&l.props.sort((b,w)=>b.name.localeCompare(w.name)),l.methods&&l.methods.sort((b,w)=>b.name.localeCompare(w.name)),l.events&&l.events.sort((b,w)=>b.name.localeCompare(w.name));r.links={string:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",number:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",bigint:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt",boolean:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",true:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",false:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",symbol:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol",void:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",undefined:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",null:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",Object:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",object:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",Function:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",function:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",Array:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",Set:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",Map:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",Date:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",RegExp:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",Promise:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",Error:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error",EventEmitter:"https://nodejs.org/dist/latest/docs/api/events.html#events_class_eventemitter",Timeout:"https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_timeout",Immediate:"https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_immediate",Buffer:"https://nodejs.org/dist/latest/docs/api/buffer.html#buffer_class_buffer",ReadableStream:"https://nodejs.org/dist/latest/docs/api/stream.html#stream_class_stream_readable",ChildProcess:"https://nodejs.org/dist/latest/docs/api/child_process.html#child_process_class_childprocess",Worker:"https://nodejs.org/api/worker_threads.html#worker_threads_class_worker",MessagePort:"https://nodejs.org/api/worker_threads.html#worker_threads_class_messageport",any:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any",unknown:"https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown",readonly:"https://www.typescriptlang.org/docs/handbook/2/classes.html#readonly",Record:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type",Exclude:"https://www.typescriptlang.org/docs/handbook/utility-types.html#excludetype-excludedunion",Omit:"https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys",IterableIterator:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols"},r.externals=r.externals||[],r.classes=r.classes||[],r.typedefs=r.typedefs||[];for(const l of r.externals)r.links[l.name]=l.see[0].replace(/\{@link\s+(.+?)\s*\}/i,"$1");for(const l of r.classes)r.links[l.name]={name:"docs-source-tag-class-class",params:{class:l.name}};for(const l of r.typedefs)r.links[l.name]={name:"docs-source-tag-typedef-typedef",params:{typedef:l.name}};e.id==="commando"&&(r.links.Message={name:"docs-source-tag-class-class",params:{source:"main",tag:"master",class:"Message"}}),r.global=e.global,r.source=e.source,r.id=e.id,r.tag=i,t({type:"setDocs",docs:r})},fetchTags:async({commit:t},{currentSource:e})=>{const i=await e.fetchTags();t({type:"setBranches",branches:i})}}});function J(){return he(oe)}const re=L({setup(t){const e=J(),i=M(()=>e.state.stats.downloads),r=M(()=>e.state.stats.stars),n=M(()=>e.state.stats.contributors);return(o,a)=>(d(),p("ul",null,[s("li",null,j(f(i))+" downloads",1),s("li",null,j(f(r))+" stars",1),s("li",null,j(f(n))+" contributors",1)]))}}),Je={class:"bg-discord-blurple-560"},Ue={class:"max-w-3xl mx-auto text-center px-16 pt-10 pb-4 text-gray-200"},De=x("Musicca"),Fe=s("p",{class:"mb-4"},"A modular, extensible and flexible media stream manager for Node.js",-1),Ne=s("p",{class:"break-words-legacy mb-4"},[x(" Originally made for "),s("a",{href:"https://discord.js.org",target:"_blank",rel:"noopener noreferrer"},"discord.js website")],-1),Ze={class:"text-xs break-words-legacy"},Ye=s("br",null,null,-1),Ke=L({setup(t){const e=k("19084a04d9a2b7dadeddf1b14774c4e6187040d1"),i=k(new Date(1641190877573).toUTCString());return(r,n)=>{const o=F("router-link");return d(),p("footer",Je,[s("div",Ue,[s("strong",null,[m(o,{to:"/"},{default:E(()=>[De]),_:1})]),Fe,m(re,{class:"mb-4"}),Ne,s("p",Ze,[x(" commit: "+j(e.value),1),Ye,x(" built at: "+j(i.value),1)])])])}}}),qe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Qe=s("g",{fill:"none"},[s("path",{d:"M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Xe=[Qe];function et(t,e){return d(),p("svg",qe,Xe)}var ne={name:"heroicons-outline-external-link",render:et};const tt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},st=s("g",{fill:"none"},[s("path",{d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),ot=[st];function rt(t,e){return d(),p("svg",tt,ot)}var nt={name:"heroicons-outline-sun",render:rt};const at={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},it=s("g",{fill:"none"},[s("path",{d:"M20.354 15.354A9 9 0 0 1 8.646 3.646A9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),lt=[it];function ct(t,e){return d(),p("svg",at,lt)}var dt={name:"heroicons-outline-moon",render:ct};const ut={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ht=s("g",{fill:"none"},[s("path",{d:"M21 21l-6-6m2-5a7 7 0 1 1-14 0a7 7 0 0 1 14 0z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),pt=[ht];function mt(t,e){return d(),p("svg",ut,pt)}var _t={name:"heroicons-outline-search",render:mt};const ft={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},gt=s("g",{fill:"none"},[s("path",{d:"M14 5l7 7m0 0l-7 7m7-7H3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),vt=[gt];function bt(t,e){return d(),p("svg",ft,vt)}var wt={name:"heroicons-outline-arrow-right",render:bt};const xt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},yt=s("g",{fill:"none"},[s("path",{d:"M4 6h16M4 12h16M4 18h16",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),kt=[yt];function $t(t,e){return d(),p("svg",xt,kt)}var Ct={name:"heroicons-outline-menu",render:$t};const St={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Mt=s("g",{fill:"none"},[s("path",{d:"M6 18L18 6M6 6l12 12",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),jt=[Mt];function Rt(t,e){return d(),p("svg",St,jt)}var ae={name:"heroicons-outline-x",render:Rt};const I=pe({storageKey:"theme"}),ie=me(I);const Ot={class:"sticky top-0 z-20"},Lt={class:"bg-discord-blurple-560"},Et={class:"max-w-7xl mx-auto px-2 sm:px-4 md:flex md:justify-between lg:px-8"},Wt={class:"hidden md:flex md:py-2 md:space-x-4 lg:space-x-8","aria-label":"Global navigation"},At=x(" Musicca "),Pt=x(" Documentation "),Tt=["href"],zt=s("span",{class:"mr-2"},"GitHub",-1),Ht={class:"relative h-16 flex md:max-w-md md:w-full lg:max-w-lg"},Vt={class:"relative z-10 flex items-center md:hidden"},Bt=["aria-label"],It={class:"relative z-0 flex-1 px-2 flex lg:gap-2 items-center justify-center md:justify-end"},Gt=["aria-label"],Jt=s("label",{for:"search",class:"sr-only"},"Search",-1),Ut={class:"relative"},Dt={class:"pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center","aria-hidden":"true"},Ft=["onKeyup","onKeydown"],Nt={class:"relative z-10 flex items-center md:hidden"},Zt=["aria-expanded"],Yt=s("span",{class:"sr-only"},"Open menu",-1),Kt={key:0,id:"mobile-menu",class:"md:hidden","aria-label":"Global navigation"},qt={class:"pt-2 pb-3 px-2 space-y-1"},Qt=x("discord.js"),Xt=x("Documentation"),es=["href"],ts=s("span",{class:"mr-2"},"Github",-1),ss=L({setup(t){const e=_e(),i=fe(),r=J(),o=ke($e).greater("md"),a=k(!1),c=k(),u=k(""),g=k(!1),v=k(-1),H=M(()=>{var $;return($=r.state.source)==null?void 0:$.repo}),l=M(()=>(v.value=-1,Be(u.value).slice(0,7))),b=()=>{if(!!l.value.length){if(g.value=!1,v.value>=0){e.push(l.value[v.value].getLinkPath()),v.value=-1;return}return e.push({name:"docs-source-tag-search",query:{query:u.value}})}},w=$=>{v.value+=1,v.value>Math.min(6,l.value.length-1)&&(v.value=0),$.preventDefault()},_=$=>{v.value-=1,v.value<0&&(v.value=Math.min(6,l.value.length-1)),$.preventDefault()},R=$=>{if(!$.target)return;const h=$.target.getAttribute("data-index");h&&(v.value=parseInt(h,10))};return ge(o,()=>a.value=!1),ve(c,()=>{g.value=!1,v.value=-1}),($,h)=>{const O=F("router-link"),V=ne,G=nt,B=dt,P=_t,D=wt,ce=Ct,de=ae;return d(),p("div",Ot,[s("header",Lt,[s("div",Et,[s("nav",Wt,[m(O,{to:"/",class:"text-gray-200 hover:bg-discord-blurple-630 hover:text-white rounded-md py-2 px-3 inline-flex items-center text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white","active-class":"bg-discord-blurple-600"},{default:E(()=>[At]),_:1}),m(O,{to:"/docs",class:"text-gray-200 hover:bg-discord-blurple-630 hover:text-white rounded-md py-2 px-3 inline-flex items-center text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white","active-class":"bg-discord-blurple-600"},{default:E(()=>[Pt]),_:1}),s("a",{href:`https://github.com/${f(H)}`,class:"text-gray-200 hover:bg-discord-blurple-630 hover:text-white rounded-md py-2 px-3 inline-flex items-center text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white",target:"_blank",rel:"noopener"},[zt,m(V,{class:"h-5 w-5"})],8,Tt)]),s("div",Ht,[s("div",Vt,[s("button",{class:"rounded-md p-2 inline-flex items-center justify-center hover:bg-discord-blurple-630 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white focus:bg-discord-blurple-630","aria-label":`Switch to ${f(I)?"light theme":"dark theme"}`,onClick:h[0]||(h[0]=y=>f(ie)())},[f(I)?(d(),T(B,{key:1,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"})):(d(),T(G,{key:0,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"}))],8,Bt)]),s("div",It,[s("button",{class:"hidden md:block rounded-md p-2 hover:bg-discord-blurple-630 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white","aria-label":`Switch to ${f(I)?"light theme":"dark theme"}`,onClick:h[1]||(h[1]=y=>f(ie)())},[f(I)?(d(),T(B,{key:1,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"})):(d(),T(G,{key:0,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"}))],8,Gt),f(i).path!=="/"?(d(),p("div",{key:0,ref_key:"searchElement",ref:c,class:"w-full sm:max-w-lg lg:max-w-xs"},[Jt,s("div",Ut,[s("div",Dt,[m(P,{class:"h-5 w-5 text-gray-200"})]),be(s("input",{id:"search","onUpdate:modelValue":h[2]||(h[2]=y=>u.value=y),name:"search",class:"block w-full bg-discord-blurple-600 border border-transparent rounded-md py-2 pl-10 pr-3 text-base text-white placeholder-gray-200 focus:outline-none focus:bg-discord-blurple-630 focus:text-gray-200 focus:placeholder-gray-200 focus:ring-2 focus:ring-inset focus:ring-white lg:focus:ring-1",placeholder:"Search",type:"search",autocomplete:"off",autocapitalize:"off",autocorrect:"off",onFocus:h[3]||(h[3]=y=>g.value=!0),onInput:h[4]||(h[4]=y=>g.value=!0),onKeyup:N(b,["enter"]),onKeydown:[N(_,["up"]),N(w,["down"])]},null,40,Ft),[[we,u.value]]),g.value&&u.value&&f(l).length?(d(),p("div",{key:0,class:"absolute cursor-pointer inset-y-0 right-0 pr-3 flex items-center","aria-hidden":"true",onClick:b},[m(D,{class:"h-5 w-5 text-gray-200"})])):z("",!0),g.value&&u.value&&f(l).length?(d(),p("div",{key:1,class:"absolute mt-1 w-full break-words-legacy border bg-discord-blurple-600 rounded-md",onMouseover:R},[s("ul",null,[(d(!0),p(Z,null,xe(f(l),(y,te)=>(d(),p("li",{key:y.computedName,class:Y(["even:bg-discord-blurple-560 dark:even:bg-discord-blurple-630 hover:bg-discord-blurple-630 dark:hover:bg-discord-blurple-660 rounded-md text-gray-200",{"ring-1 ring-gray-200 even:bg-discord-blurple-630 dark:even:bg-discord-blurple-660 bg-discord-blurple-630 dark:bg-discord-blurple-660":te===v.value}])},[m(O,{class:"block focus:outline-none py-3 px-4 focus-visible:ring-1 focus-visible:ring-gray-200 focus-visible:rounded-md focus-visible:bg-discord-blurple-630 dark:focus-visible:bg-discord-blurple-660",exact:"",to:y.getLinkPath(),"data-index":te,onClick:h[5]||(h[5]=vo=>g.value=!1)},{default:E(()=>[x(j(y.computedName),1)]),_:2},1032,["to","data-index"])],2))),128))])],32)):z("",!0)])],512)):z("",!0)]),s("div",Nt,[s("button",{type:"button",class:"rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:bg-discord-blurple-630 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-controls":"mobile-menu","aria-expanded":a.value,onClick:h[6]||(h[6]=y=>a.value=!a.value)},[Yt,m(ce,{class:Y({hidden:a.value,block:!a.value}),"aria-hidden":"true"},null,8,["class"]),m(de,{class:Y({block:a.value,hidden:!a.value}),"aria-hidden":"true"},null,8,["class"])],8,Zt)])])]),m(ye,{"enter-active-class":"transition transform-gpu duration-300 ease-out","enter-from-class":"translate-x-12 opacity-0","enter-to-class":"translate-x-0 opacity-100"},{default:E(()=>[a.value?(d(),p("nav",Kt,[s("div",qt,[m(O,{to:"/",class:"text-gray-200 hover:bg-discord-blurple-630 hover:text-white block rounded-md py-2 px-3 text-base font-semibold",onClick:h[7]||(h[7]=y=>a.value=!a.value)},{default:E(()=>[Qt]),_:1}),m(O,{to:"/docs",class:"text-gray-200 hover:bg-discord-blurple-630 hover:text-white block rounded-md py-2 px-3 text-base font-semibold",onClick:h[8]||(h[8]=y=>a.value=!a.value)},{default:E(()=>[Xt]),_:1}),s("a",{href:`https://github.com/${f(H)}`,class:"text-gray-200 hover:bg-discord-blurple-630 hover:text-white block rounded-md py-2 px-3 text-base font-semibold",target:"_blank",rel:"noopener",onClick:h[9]||(h[9]=y=>a.value=!a.value)},[ts,m(V,{class:"h-5 w-5 inline-block"})],8,es)])])):z("",!0)]),_:1})])])}}}),os={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},rs=s("g",{fill:"none"},[s("path",{d:"M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),ns=[rs];function as(t,e){return d(),p("svg",os,ns)}var is={name:"heroicons-outline-download",render:as};function ls(t={}){const{immediate:e=!1,onNeedRefresh:i,onOfflineReady:r}=t;let n;const o=async(a=!0)=>{};return"serviceWorker"in navigator&&(n=new Ce("/sw.js",{scope:"/"}),n.addEventListener("activated",a=>{a.isUpdate?window.location.reload():r==null||r()}),n.register({immediate:e}).then(a=>a)),o}function cs(t={}){const{immediate:e=!0,onNeedRefresh:i,onOfflineReady:r}=t,n=k(!1),o=k(!1);return{updateServiceWorker:ls({immediate:e,onNeedRefresh(){n.value=!0,i==null||i()},onOfflineReady(){o.value=!0,r==null||r()}}),offlineReady:o,needRefresh:n}}const ds={key:0,class:"fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-20"},us={class:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},hs={class:"p-2 rounded-lg bg-discord-blurple-600 dark:bg-discord-blurple-700 shadow-lg sm:p-3"},ps={class:"flex items-center justify-between flex-wrap"},ms={class:"w-0 flex-1 flex items-center"},_s={class:"flex p-2 rounded-lg bg-discord-blurple-530 dark:bg-discord-blurple-630"},fs={class:"ml-3 font-medium text-white truncate"},gs={class:"sm:hidden"},vs={class:"hidden sm:inline"},bs={key:0,class:"order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"},ws={class:"order-2 flex-shrink-0 sm:order-3 sm:ml-2"},xs=s("span",{class:"sr-only"},"Dismiss",-1),ys=L({setup(t){const{offlineReady:e,needRefresh:i,updateServiceWorker:r}=cs(),n=()=>{e.value=!1,i.value=!1};return(o,a)=>{const c=is,u=ae;return f(e)||f(i)?(d(),p("div",ds,[s("div",us,[s("div",hs,[s("div",ps,[s("div",ms,[s("span",_s,[m(c,{class:"fill-current text-gray-200 h-6 w-6","aria-hidden":"true"})]),s("p",fs,[s("span",gs,j(f(e)?"App ready to work offline.":"New content available."),1),s("span",vs,j(f(e)?"App ready to work offline.":"New content available, click refresh to update."),1)])]),f(i)?(d(),p("div",bs,[s("button",{class:"flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-gray-200 bg-discord-blurple-530 dark:bg-discord-blurple-630 hover:bg-discord-blurple-460 dark:hover:bg-discord-blurple-600 focus:outline-none focus-visible:ring-1 focus-visible:ring-white",onClick:a[0]||(a[0]=g=>f(r)(!0))}," Refresh ")])):z("",!0),s("div",ws,[s("button",{type:"button",class:"-mr-1 flex p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white",onClick:n},[xs,m(u,{class:"fill-current text-gray-200 h-6 w-6","aria-hidden":"true"})])])])])])])):z("",!0)}}});const ks={class:"min-h-full grid grid-layout"},$s={id:"container",class:"grid grid-layout-container lg:custom-scroll"},Cs={class:"bg-white dark:bg-[#1d1d1d]"},Ss=L({setup(t){return J().dispatch("fetchStats"),(i,r)=>{const n=F("router-view"),o=Ke;return d(),p(Z,null,[s("div",ks,[m(ss),s("div",$s,[s("div",Cs,[m(n)]),m(o)])]),m(ys)],64)}}}),Ms="modulepreload",le={},js="/",A=function(e,i){return!i||i.length===0?e():Promise.all(i.map(r=>{if(r=`${js}${r}`,r in le)return;le[r]=!0;const n=r.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const a=document.createElement("link");if(a.rel=n?"stylesheet":Ms,n||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),n)return new Promise((c,u)=>{a.addEventListener("load",c),a.addEventListener("error",u)})})).then(()=>e())};var Rs=(t,e)=>{const i=t.__vccOpts||t;for(const[r,n]of e)i[r]=n;return i};const Os={},Ls={width:"100%",height:"100%",viewBox:"0 0 527 154",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Es=s("path",{d:"M13.3026 11.0909V142H36.0582V51.8722H37.2727L73.4517 141.616H90.4545L126.634 52.0639H127.848V142H150.604V11.0909H121.584L82.7202 105.949H81.1861L42.3224 11.0909H13.3026ZM205.089 108.966C205.089 120.932 196.55 126.864 188.368 126.864C179.47 126.864 173.538 120.574 173.538 110.602V63.4545H155.027V113.466C155.027 132.335 165.766 143.023 181.209 143.023C192.97 143.023 201.254 136.835 204.834 128.04H205.652V142H223.601V63.4545H205.089V108.966ZM290.316 84.2159C287.759 70.9205 277.123 62.4318 258.714 62.4318C239.793 62.4318 226.907 71.7386 226.958 86.2614C226.907 97.7159 233.964 105.284 249.049 108.403L262.447 111.216C269.657 112.801 273.032 115.716 273.032 120.165C273.032 125.534 267.202 129.574 258.407 129.574C249.918 129.574 244.395 125.892 242.81 118.835L224.759 120.574C227.06 134.994 239.18 143.534 258.458 143.534C278.094 143.534 291.952 133.358 292.003 118.477C291.952 107.278 284.742 100.426 269.913 97.2045L256.515 94.3409C248.538 92.5511 245.367 89.7898 245.418 85.2386C245.367 79.9205 251.248 76.2386 258.969 76.2386C267.509 76.2386 272.009 80.892 273.441 86.0568L290.316 84.2159ZM292.868 142H311.379V63.4545H292.868V142ZM302.174 52.3068C308.055 52.3068 312.862 47.8068 312.862 42.2841C312.862 36.7102 308.055 32.2102 302.174 32.2102C296.243 32.2102 291.436 36.7102 291.436 42.2841C291.436 47.8068 296.243 52.3068 302.174 52.3068ZM350.276 143.534C370.014 143.534 382.594 131.824 383.924 115.153H366.23C364.645 123.591 358.56 128.449 350.429 128.449C338.872 128.449 331.407 118.784 331.407 102.727C331.407 86.875 339.026 77.3636 350.429 77.3636C359.327 77.3636 364.799 83.0909 366.23 90.6591H383.924C382.645 73.6307 369.35 62.4318 350.174 62.4318C327.162 62.4318 312.639 79.0511 312.639 103.034C312.639 126.812 326.804 143.534 350.276 143.534ZM418.985 143.534C438.724 143.534 451.303 131.824 452.633 115.153H434.94C433.355 123.591 427.269 128.449 419.139 128.449C407.582 128.449 400.116 118.784 400.116 102.727C400.116 86.875 407.735 77.3636 419.139 77.3636C428.036 77.3636 433.508 83.0909 434.94 90.6591H452.633C451.355 73.6307 438.059 62.4318 418.883 62.4318C395.872 62.4318 381.349 79.0511 381.349 103.034C381.349 126.812 395.514 143.534 418.985 143.534ZM476.036 143.585C488.359 143.585 495.723 137.807 499.098 131.21H499.712V142H517.507V89.4318C517.507 68.6704 500.581 62.4318 485.598 62.4318C469.081 62.4318 456.399 69.7954 452.308 84.1136L469.592 86.5682C471.433 81.1989 476.649 76.5966 485.7 76.5966C494.291 76.5966 498.996 80.9943 498.996 88.7159V89.0227C498.996 94.3409 493.422 94.5966 479.564 96.0795C464.325 97.7159 449.751 102.267 449.751 119.96C449.751 135.403 461.053 143.585 476.036 143.585ZM480.842 129.983C473.121 129.983 467.598 126.455 467.598 119.653C467.598 112.545 473.786 109.58 482.07 108.403C486.928 107.739 496.643 106.511 499.047 104.568V113.824C499.047 122.568 491.99 129.983 480.842 129.983Z",fill:"white"},null,-1),Ws=s("path",{d:"M302 50.3H257C257 50.3 260.589 47.12 260.6 40.3C260.611 33.48 257 32.3 257 32.3",stroke:"white","stroke-width":"4"},null,-1),As=[Es,Ws];function Ps(t,e){return d(),p("svg",Ls,As)}var Ts=Rs(Os,[["render",Ps]]);const zs={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Hs=s("g",{fill:"none"},[s("path",{d:"M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1M8 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 0h2a2 2 0 0 1 2 2v3m2 4H10m0 0l3-3m-3 3l3 3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Vs=[Hs];function Bs(t,e){return d(),p("svg",zs,Vs)}var Is={name:"heroicons-outline-clipboard-copy",render:Bs};const Gs={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Js=s("g",{fill:"none"},[s("path",{d:"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2l4-4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Us=[Js];function Ds(t,e){return d(),p("svg",Gs,Us)}var Fs={name:"heroicons-outline-clipboard-check",render:Ds};const Ns={class:"text-gray-200 bg-discord-blurple-560 p-4 md:text-lg mx-auto rounded-md shadow flex items-center"},Zs=s("span",{class:"hover:text-white mr-2"},"npm install musicca",-1),Ys=L({setup(t){const e=k(),i=k(!1),r=Se(c=>{c(),i.value=!1},1e3),{show:n,hide:o}=Me(e,{theme:"discord",content:"Copied",trigger:"manual",hideOnClick:!1}),a=async()=>{try{await navigator.clipboard.writeText("npm install musicca"),n()}catch{}i.value=!0,r(o)};return(c,u)=>{const g=Is,v=Fs;return d(),p("code",Ns,[Zs,s("button",{ref_key:"copyButton",ref:e,class:"focus:outline-none","aria-label":"Copy install command"},[i.value?(d(),T(v,{key:1,class:"inline-block fill-current text-discord-green-500 cursor-pointer mb-1","aria-hidden":"true",onClick:a})):(d(),T(g,{key:0,class:"inline-block fill-current text-gray-200 cursor-pointer hover:text-white mb-1","aria-hidden":"true",onClick:a}))],512)])}}}),Ks={class:"bg-discord-blurple-500 py-20"},qs={class:"max-w-3xl sm:mx-auto text-center px-8 sm:px-16 flex flex-col gap-10 md:px-12"},Qs={class:"prose prose-discord dark:prose-light lg:prose-lg px-6 mx-auto pb-8 w-full xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl"},Xs={class:"col-span-full"},eo=s("h2",null,"About",-1),to=x(" Musicca is a "),so=s("strong",null,"modular",-1),oo=x(", "),ro=s("strong",null,"extensible",-1),no=x(" and "),ao=s("strong",null,"flexible",-1),io=x(" media stream manager for "),lo={href:"https://nodejs.org",target:"_blank",rel:"noopener"},co=x("Node.js "),uo=x(". It takes a much more object-oriented approach, making your code significantly tidier and easier to comprehend. "),ho=s("div",null,[s("h2",null,"Why?"),s("ul",null,[s("li",null,"Object-oriented"),s("li",null,"Modular by design"),s("li",null,"Flexible"),s("li",null,"100% Promise-based")])],-1),po=s("h2",null,"Statistics",-1),mo=s("p",{class:"text-center"},"... and growing!",-1),_o=L({setup(t){const e=J();return M(()=>e.state.docs).value||(e.dispatch("fetchDocs",{inputSource:W}),e.dispatch("fetchTags",{currentSource:W})),(r,n)=>{const o=ne;return d(),p(Z,null,[s("div",Ks,[s("div",qs,[m(Ts,{class:"filter drop-shadow-lg my-6"}),m(Ys)])]),s("div",Qs,[s("div",Xs,[eo,s("p",null,[to,so,oo,ro,no,ao,io,s("a",lo,[co,m(o,{class:"h-5 w-5 inline-block mb-1","aria-hidden":"true"})]),uo])]),ho,s("div",null,[po,m(re),mo])])],64)}}}),fo=[{name:"index",path:"/",component:_o,props:!0},{path:"/docs",component:()=>A(()=>import("./docs.51a498e7.js"),["assets/docs.51a498e7.js","assets/docs.6a6bf023.css","assets/vendor.e47133c2.js","assets/chevron-down.c280060c.js","assets/disclosure.esm.a4ed5d8f.js","assets/Spinner.c2a7fffa.js","assets/Spinner.5247e326.css"]),children:[{name:"docs-source",path:":source",component:()=>A(()=>import("./index.2f09347a.js"),["assets/index.2f09347a.js","assets/Spinner.c2a7fffa.js","assets/Spinner.5247e326.css","assets/vendor.e47133c2.js"]),props:!0},{name:"docs-source-tag-search",path:":source/:tag/search",component:()=>A(()=>import("./search.9234bfbe.js"),["assets/search.9234bfbe.js","assets/search.3b0ec621.css","assets/vendor.e47133c2.js"]),props:!0},{name:"docs-source-tag-category-file",path:":source/:tag/:category/:file",component:()=>A(()=>import("./_file_.7a3f4b47.js"),["assets/_file_.7a3f4b47.js","assets/vendor.e47133c2.js","assets/SourceButton.05dc58c7.js"]),props:!0},{name:"docs-source-tag-class-class",path:":source/:tag/class/:class",component:()=>A(()=>import("./_class_.b0a89496.js"),["assets/_class_.b0a89496.js","assets/_class_.cb3c1db2.css","assets/vendor.e47133c2.js","assets/SourceButton.05dc58c7.js","assets/See.3b3d3a6d.js","assets/See.cb8831b1.css","assets/chevron-down.c280060c.js","assets/disclosure.esm.a4ed5d8f.js"]),props:!0},{name:"docs-source-tag-typedef-typedef",path:":source/:tag/typedef/:typedef",component:()=>A(()=>import("./_typedef_.6ea10eef.js"),["assets/_typedef_.6ea10eef.js","assets/vendor.e47133c2.js","assets/SourceButton.05dc58c7.js","assets/See.3b3d3a6d.js","assets/See.cb8831b1.css","assets/disclosure.esm.a4ed5d8f.js"]),props:!0}],props:!0},{name:"all",path:"/:all(.*)*",component:()=>A(()=>import("./_...all_.dabebb8b.js"),["assets/_...all_.dabebb8b.js","assets/vendor.e47133c2.js"]),props:!0}];var go=je({history:Re(),routes:fo});const U=Oe(Ss);U.use(ee,oe);U.use(go);U.use(Le);U.mount("#app");export{C as D,X as E,W as M,Q as S,Rs as _,Is as a,Fs as b,ne as c,Ge as f,Te as i,Be as s,J as u};
