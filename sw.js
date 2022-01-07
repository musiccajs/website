var ee=Object.defineProperty,te=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var O=(s,e,t)=>e in s?ee(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,j=(s,e)=>{for(var t in e||(e={}))ne.call(e,t)&&O(s,t,e[t]);if(K)for(var t of K(e))ae.call(e,t)&&O(s,t,e[t]);return s},W=(s,e)=>te(s,se(e));try{self["workbox:core:6.4.1"]&&_()}catch{}const re=(s,...e)=>{let t=s;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t},ie=re;class l extends Error{constructor(e,t){const n=ie(e,t);super(n);this.name=e,this.details=t}}const d={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration!="undefined"?registration.scope:""},T=s=>[d.prefix,s,d.suffix].filter(e=>e&&e.length>0).join("-"),ce=s=>{for(const e of Object.keys(d))s(e)},g={updateDetails:s=>{ce(e=>{typeof s[e]=="string"&&(d[e]=s[e])})},getGoogleAnalyticsName:s=>s||T(d.googleAnalytics),getPrecacheName:s=>s||T(d.precache),getPrefix:()=>d.prefix,getRuntimeName:s=>s||T(d.runtime),getSuffix:()=>d.suffix};function B(s,e){const t=e();return s.waitUntil(t),t}try{self["workbox:precaching:6.4.1"]&&_()}catch{}const oe="__WB_REVISION__";function he(s){if(!s)throw new l("add-to-cache-list-unexpected-type",{entry:s});if(typeof s=="string"){const r=new URL(s,location.href);return{cacheKey:r.href,url:r.href}}const{revision:e,url:t}=s;if(!t)throw new l("add-to-cache-list-unexpected-type",{entry:s});if(!e){const r=new URL(t,location.href);return{cacheKey:r.href,url:r.href}}const n=new URL(t,location.href),a=new URL(t,location.href);return n.searchParams.set(oe,e),{cacheKey:n.href,url:a.href}}class le{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:n})=>{if(e.type==="install"&&t&&t.originalRequest&&t.originalRequest instanceof Request){const a=t.originalRequest.url;n?this.notUpdatedURLs.push(a):this.updatedURLs.push(a)}return n}}}class ue{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:t,params:n})=>{const a=(n==null?void 0:n.cacheKey)||this._precacheController.getCacheKeyForURL(t.url);return a?new Request(a,{headers:t.headers}):t},this._precacheController=e}}let y;function de(){if(y===void 0){const s=new Response("");if("body"in s)try{new Response(s.body),y=!0}catch{y=!1}y=!1}return y}async function fe(s,e){let t=null;if(s.url&&(t=new URL(s.url).origin),t!==self.location.origin)throw new l("cross-origin-copy-response",{origin:t});const n=s.clone(),a={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=e?e(a):a,i=de()?n.body:await n.blob();return new Response(i,r)}const pe=s=>new URL(String(s),location.href).href.replace(new RegExp(`^${location.origin}`),"");function F(s,e){const t=new URL(s);for(const n of e)t.searchParams.delete(n);return t.href}async function ge(s,e,t,n){const a=F(e.url,t);if(e.url===a)return s.match(e,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await s.keys(e,r);for(const c of i){const o=F(c.url,t);if(a===o)return s.match(c,n)}}class me{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const H=new Set;async function we(){for(const s of H)await s()}function ye(s){return new Promise(e=>setTimeout(e,s))}try{self["workbox:strategies:6.4.1"]&&_()}catch{}function C(s){return typeof s=="string"?new Request(s):s}class _e{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new me,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const n of this._plugins)this._pluginStateMap.set(n,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let n=C(e);if(n.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){const i=await t.preloadResponse;if(i)return i}const a=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const i of this.iterateCallbacks("requestWillFetch"))n=await i({request:n.clone(),event:t})}catch(i){if(i instanceof Error)throw new l("plugin-error-request-will-fetch",{thrownErrorMessage:i.message})}const r=n.clone();try{let i;i=await fetch(n,n.mode==="navigate"?void 0:this._strategy.fetchOptions);for(const c of this.iterateCallbacks("fetchDidSucceed"))i=await c({event:t,request:r,response:i});return i}catch(i){throw a&&await this.runCallbacks("fetchDidFail",{error:i,event:t,originalRequest:a.clone(),request:r.clone()}),i}}async fetchAndCachePut(e){const t=await this.fetch(e),n=t.clone();return this.waitUntil(this.cachePut(e,n)),t}async cacheMatch(e){const t=C(e);let n;const{cacheName:a,matchOptions:r}=this._strategy,i=await this.getCacheKey(t,"read"),c=Object.assign(Object.assign({},r),{cacheName:a});n=await caches.match(i,c);for(const o of this.iterateCallbacks("cachedResponseWillBeUsed"))n=await o({cacheName:a,matchOptions:r,cachedResponse:n,request:i,event:this.event})||void 0;return n}async cachePut(e,t){const n=C(e);await ye(0);const a=await this.getCacheKey(n,"write");if(!t)throw new l("cache-put-with-no-response",{url:pe(a.url)});const r=await this._ensureResponseSafeToCache(t);if(!r)return!1;const{cacheName:i,matchOptions:c}=this._strategy,o=await self.caches.open(i),h=this.hasCallback("cacheDidUpdate"),w=h?await ge(o,a.clone(),["__WB_REVISION__"],c):null;try{await o.put(a,h?r.clone():r)}catch(u){if(u instanceof Error)throw u.name==="QuotaExceededError"&&await we(),u}for(const u of this.iterateCallbacks("cacheDidUpdate"))await u({cacheName:i,oldResponse:w,newResponse:r.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){const n=`${e.url} | ${t}`;if(!this._cacheKeys[n]){let a=e;for(const r of this.iterateCallbacks("cacheKeyWillBeUsed"))a=C(await r({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[n]=a}return this._cacheKeys[n]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const n of this.iterateCallbacks(e))await n(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if(typeof t[e]=="function"){const n=this._pluginStateMap.get(t);yield r=>{const i=Object.assign(Object.assign({},r),{state:n});return t[e](i)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,n=!1;for(const a of this.iterateCallbacks("cacheWillUpdate"))if(t=await a({request:this.request,response:t,event:this.event})||void 0,n=!0,!t)break;return n||t&&t.status!==200&&(t=void 0),t}}class x{constructor(e={}){this.cacheName=g.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,n=typeof e.request=="string"?new Request(e.request):e.request,a="params"in e?e.params:void 0,r=new _e(this,{event:t,request:n,params:a}),i=this._getResponse(r,n,t),c=this._awaitComplete(i,r,n,t);return[i,c]}async _getResponse(e,t,n){await e.runCallbacks("handlerWillStart",{event:n,request:t});let a;try{if(a=await this._handle(t,e),!a||a.type==="error")throw new l("no-response",{url:t.url})}catch(r){if(r instanceof Error){for(const i of e.iterateCallbacks("handlerDidError"))if(a=await i({error:r,event:n,request:t}),a)break}if(!a)throw r}for(const r of e.iterateCallbacks("handlerWillRespond"))a=await r({event:n,request:t,response:a});return a}async _awaitComplete(e,t,n,a){let r,i;try{r=await e}catch{}try{await t.runCallbacks("handlerDidRespond",{event:a,request:n,response:r}),await t.doneWaiting()}catch(c){c instanceof Error&&(i=c)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:n,response:r,error:i}),t.destroy(),i)throw i}}class p extends x{constructor(e={}){e.cacheName=g.getPrecacheName(e.cacheName);super(e);this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(p.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const n=await t.cacheMatch(e);return n||(t.event&&t.event.type==="install"?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let n;const a=t.params||{};if(this._fallbackToNetwork){const r=a.integrity,i=e.integrity,c=!i||i===r;n=await t.fetch(new Request(e,{integrity:i||r})),r&&c&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,n.clone()))}else throw new l("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return n}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const n=await t.fetch(e);if(!await t.cachePut(e,n.clone()))throw new l("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[n,a]of this.plugins.entries())a!==p.copyRedirectedCacheableResponsesPlugin&&(a===p.defaultPrecacheCacheabilityPlugin&&(e=n),a.cacheWillUpdate&&t++);t===0?this.plugins.push(p.defaultPrecacheCacheabilityPlugin):t>1&&e!==null&&this.plugins.splice(e,1)}}p.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:s}){return!s||s.status>=400?null:s}};p.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:s}){return s.redirected?await fe(s):s}};class Re{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:n=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new p({cacheName:g.getPrecacheName(e),plugins:[...t,new ue({precacheController:this})],fallbackToNetwork:n}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const n of e){typeof n=="string"?t.push(n):n&&n.revision===void 0&&t.push(n.url);const{cacheKey:a,url:r}=he(n),i=typeof n!="string"&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(r)&&this._urlsToCacheKeys.get(r)!==a)throw new l("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(r),secondEntry:a});if(typeof n!="string"&&n.integrity){if(this._cacheKeysToIntegrities.has(a)&&this._cacheKeysToIntegrities.get(a)!==n.integrity)throw new l("add-to-cache-list-conflicting-integrities",{url:r});this._cacheKeysToIntegrities.set(a,n.integrity)}if(this._urlsToCacheKeys.set(r,a),this._urlsToCacheModes.set(r,i),t.length>0){const c=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(c)}}}install(e){return B(e,async()=>{const t=new le;this.strategy.plugins.push(t);for(const[r,i]of this._urlsToCacheKeys){const c=this._cacheKeysToIntegrities.get(i),o=this._urlsToCacheModes.get(r),h=new Request(r,{integrity:c,cache:o,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:i},request:h,event:e}))}const{updatedURLs:n,notUpdatedURLs:a}=t;return{updatedURLs:n,notUpdatedURLs:a}})}activate(e){return B(e,async()=>{const t=await self.caches.open(this.strategy.cacheName),n=await t.keys(),a=new Set(this._urlsToCacheKeys.values()),r=[];for(const i of n)a.has(i.url)||(await t.delete(i),r.push(i.url));return{deletedURLs:r}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n)return(await self.caches.open(this.strategy.cacheName)).match(n)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new l("non-precached-url",{url:e});return n=>(n.request=new Request(e),n.params=Object.assign({cacheKey:t},n.params),this.strategy.handle(n))}}let U;const L=()=>(U||(U=new Re),U);try{self["workbox:routing:6.4.1"]&&_()}catch{}const q="GET",E=s=>s&&typeof s=="object"?s:{handle:s};class m{constructor(e,t,n=q){this.handler=E(t),this.match=e,this.method=n}setCatchHandler(e){this.catchHandler=E(e)}}class be extends m{constructor(e,t,n){const a=({url:r})=>{const i=e.exec(r.href);if(!!i&&!(r.origin!==location.origin&&i.index!==0))return i.slice(1)};super(a,t,n)}}class Ce{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,n=this.handleRequest({request:t,event:e});n&&e.respondWith(n)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:t}=e.data,n=Promise.all(t.urlsToCache.map(a=>{typeof a=="string"&&(a=[a]);const r=new Request(...a);return this.handleRequest({request:r,event:e})}));e.waitUntil(n),e.ports&&e.ports[0]&&n.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const n=new URL(e.url,location.href);if(!n.protocol.startsWith("http"))return;const a=n.origin===location.origin,{params:r,route:i}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:n});let c=i&&i.handler;const o=e.method;if(!c&&this._defaultHandlerMap.has(o)&&(c=this._defaultHandlerMap.get(o)),!c)return;let h;try{h=c.handle({url:n,request:e,event:t,params:r})}catch(u){h=Promise.reject(u)}const w=i&&i.catchHandler;return h instanceof Promise&&(this._catchHandler||w)&&(h=h.catch(async u=>{if(w)try{return await w.handle({url:n,request:e,event:t,params:r})}catch(S){S instanceof Error&&(u=S)}if(this._catchHandler)return this._catchHandler.handle({url:n,request:e,event:t});throw u})),h}findMatchingRoute({url:e,sameOrigin:t,request:n,event:a}){const r=this._routes.get(n.method)||[];for(const i of r){let c;const o=i.match({url:e,sameOrigin:t,request:n,event:a});if(o)return c=o,(Array.isArray(c)&&c.length===0||o.constructor===Object&&Object.keys(o).length===0||typeof o=="boolean")&&(c=void 0),{route:i,params:c}}return{}}setDefaultHandler(e,t=q){this._defaultHandlerMap.set(t,E(e))}setCatchHandler(e){this._catchHandler=E(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new l("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new l("unregister-route-route-not-registered")}}let R;const V=()=>(R||(R=new Ce,R.addFetchListener(),R.addCacheListener()),R);function D(s,e,t){let n;if(typeof s=="string"){const r=new URL(s,location.href),i=({url:c})=>c.href===r.href;n=new m(i,e,t)}else if(s instanceof RegExp)n=new be(s,e,t);else if(typeof s=="function")n=new m(s,e,t);else if(s instanceof m)n=s;else throw new l("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return V().registerRoute(n),n}function xe(s,e=[]){for(const t of[...s.searchParams.keys()])e.some(n=>n.test(t))&&s.searchParams.delete(t);return s}function*Ee(s,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:t="index.html",cleanURLs:n=!0,urlManipulation:a}={}){const r=new URL(s,location.href);r.hash="",yield r.href;const i=xe(r,e);if(yield i.href,t&&i.pathname.endsWith("/")){const c=new URL(i.href);c.pathname+=t,yield c.href}if(n){const c=new URL(i.href);c.pathname+=".html",yield c.href}if(a){const c=a({url:r});for(const o of c)yield o.href}}class De extends m{constructor(e,t){const n=({request:a})=>{const r=e.getURLsToCacheKeys();for(const i of Ee(a.url,t)){const c=r.get(i);if(c){const o=e.getIntegrityForCacheKey(c);return{cacheKey:c,integrity:o}}}};super(n,e.strategy)}}function Te(s){const e=L(),t=new De(e,s);D(t)}const Ue="-precache-",Le=async(s,e=Ue)=>{const n=(await self.caches.keys()).filter(a=>a.includes(e)&&a.includes(self.registration.scope)&&a!==s);return await Promise.all(n.map(a=>self.caches.delete(a))),n};function Pe(){self.addEventListener("activate",s=>{const e=g.getPrecacheName();s.waitUntil(Le(e).then(t=>{}))})}function ke(s){return L().createHandlerBoundToURL(s)}function Ne(s){L().precache(s)}function ve(s,e){Ne(s),Te(e)}function Ie(s){H.add(s)}function Q(s){s.then(()=>{})}function Me(s){g.updateDetails(s)}class Ae extends m{constructor(e,{allowlist:t=[/./],denylist:n=[]}={}){super(a=>this._match(a),e);this._allowlist=t,this._denylist=n}_match({url:e,request:t}){if(t&&t.mode!=="navigate")return!1;const n=e.pathname+e.search;for(const a of this._denylist)if(a.test(n))return!1;return!!this._allowlist.some(a=>a.test(n))}}function Se(s){V().setDefaultHandler(s)}class Ke extends x{async _handle(e,t){let n=await t.cacheMatch(e),a;if(!n)try{n=await t.fetchAndCachePut(e)}catch(r){r instanceof Error&&(a=r)}if(!n)throw new l("no-response",{url:e.url,error:a});return n}}const $={cacheWillUpdate:async({response:s})=>s.status===200||s.status===0?s:null};class Oe extends x{constructor(e={}){super(e);this.plugins.some(t=>"cacheWillUpdate"in t)||this.plugins.unshift($),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const n=[],a=[];let r;if(this._networkTimeoutSeconds){const{id:o,promise:h}=this._getTimeoutPromise({request:e,logs:n,handler:t});r=o,a.push(h)}const i=this._getNetworkPromise({timeoutId:r,request:e,logs:n,handler:t});a.push(i);const c=await t.waitUntil((async()=>await t.waitUntil(Promise.race(a))||await i)());if(!c)throw new l("no-response",{url:e.url});return c}_getTimeoutPromise({request:e,logs:t,handler:n}){let a;return{promise:new Promise(i=>{a=setTimeout(async()=>{i(await n.cacheMatch(e))},this._networkTimeoutSeconds*1e3)}),id:a}}async _getNetworkPromise({timeoutId:e,request:t,logs:n,handler:a}){let r,i;try{i=await a.fetchAndCachePut(t)}catch(c){c instanceof Error&&(r=c)}return e&&clearTimeout(e),(r||!i)&&(i=await a.cacheMatch(t)),i}}class je extends x{constructor(e={}){super(e);this.plugins.some(t=>"cacheWillUpdate"in t)||this.plugins.unshift($)}async _handle(e,t){const n=t.fetchAndCachePut(e).catch(()=>{});let a=await t.cacheMatch(e),r;if(!a)try{a=await n}catch(i){i instanceof Error&&(r=i)}if(!a)throw new l("no-response",{url:e.url,error:r});return a}}const We=(s,e)=>e.some(t=>s instanceof t);let G,z;function Be(){return G||(G=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fe(){return z||(z=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const J=new WeakMap,P=new WeakMap,X=new WeakMap,k=new WeakMap,N=new WeakMap;function He(s){const e=new Promise((t,n)=>{const a=()=>{s.removeEventListener("success",r),s.removeEventListener("error",i)},r=()=>{t(f(s.result)),a()},i=()=>{n(s.error),a()};s.addEventListener("success",r),s.addEventListener("error",i)});return e.then(t=>{t instanceof IDBCursor&&J.set(t,s)}).catch(()=>{}),N.set(e,s),e}function qe(s){if(P.has(s))return;const e=new Promise((t,n)=>{const a=()=>{s.removeEventListener("complete",r),s.removeEventListener("error",i),s.removeEventListener("abort",i)},r=()=>{t(),a()},i=()=>{n(s.error||new DOMException("AbortError","AbortError")),a()};s.addEventListener("complete",r),s.addEventListener("error",i),s.addEventListener("abort",i)});P.set(s,e)}let v={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return P.get(s);if(e==="objectStoreNames")return s.objectStoreNames||X.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return f(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function Ve(s){v=s(v)}function Qe(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(I(this),e,...t);return X.set(n,e.sort?e.sort():[e]),f(n)}:Fe().includes(s)?function(...e){return s.apply(I(this),e),f(J.get(this))}:function(...e){return f(s.apply(I(this),e))}}function $e(s){return typeof s=="function"?Qe(s):(s instanceof IDBTransaction&&qe(s),We(s,Be())?new Proxy(s,v):s)}function f(s){if(s instanceof IDBRequest)return He(s);if(k.has(s))return k.get(s);const e=$e(s);return e!==s&&(k.set(s,e),N.set(e,s)),e}const I=s=>N.get(s);function Ge(s,e,{blocked:t,upgrade:n,blocking:a,terminated:r}={}){const i=indexedDB.open(s,e),c=f(i);return n&&i.addEventListener("upgradeneeded",o=>{n(f(i.result),o.oldVersion,o.newVersion,f(i.transaction))}),t&&i.addEventListener("blocked",()=>t()),c.then(o=>{r&&o.addEventListener("close",()=>r()),a&&o.addEventListener("versionchange",()=>a())}).catch(()=>{}),c}function ze(s,{blocked:e}={}){const t=indexedDB.deleteDatabase(s);return e&&t.addEventListener("blocked",()=>e()),f(t).then(()=>{})}const Je=["get","getKey","getAll","getAllKeys","count"],Xe=["put","add","delete","clear"],M=new Map;function Y(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(M.get(e))return M.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,a=Xe.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(a||Je.includes(t)))return;const r=async function(i,...c){const o=this.transaction(i,a?"readwrite":"readonly");let h=o.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),a&&o.done]))[0]};return M.set(e,r),r}Ve(s=>W(j({},s),{get:(e,t,n)=>Y(e,t)||s.get(e,t,n),has:(e,t)=>!!Y(e,t)||s.has(e,t)}));try{self["workbox:expiration:6.4.1"]&&_()}catch{}const Ye="workbox-expiration",b="cache-entries",Z=s=>{const e=new URL(s,location.href);return e.hash="",e.href};class Ze{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(b,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&ze(this._cacheName)}async setTimestamp(e,t){e=Z(e);const n={url:e,timestamp:t,cacheName:this._cacheName,id:this._getId(e)},r=(await this.getDb()).transaction(b,"readwrite",{durability:"relaxed"});await r.store.put(n),await r.done}async getTimestamp(e){const n=await(await this.getDb()).get(b,this._getId(e));return n==null?void 0:n.timestamp}async expireEntries(e,t){const n=await this.getDb();let a=await n.transaction(b).store.index("timestamp").openCursor(null,"prev");const r=[];let i=0;for(;a;){const o=a.value;o.cacheName===this._cacheName&&(e&&o.timestamp<e||t&&i>=t?r.push(a.value):i++),a=await a.continue()}const c=[];for(const o of r)await n.delete(b,o.id),c.push(o.url);return c}_getId(e){return this._cacheName+"|"+Z(e)}async getDb(){return this._db||(this._db=await Ge(Ye,1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class et{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new Ze(e)}async expireEntries(){if(this._isRunning){this._rerunRequested=!0;return}this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-this._maxAgeSeconds*1e3:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),n=await self.caches.open(this._cacheName);for(const a of t)await n.delete(a,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,Q(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),n=Date.now()-this._maxAgeSeconds*1e3;return t!==void 0?t<n:!0}else return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class A{constructor(e={}){this.cachedResponseWillBeUsed=async({event:t,request:n,cacheName:a,cachedResponse:r})=>{if(!r)return null;const i=this._isResponseDateFresh(r),c=this._getCacheExpiration(a);Q(c.expireEntries());const o=c.updateTimestamp(n.url);if(t)try{t.waitUntil(o)}catch{}return i?r:null},this.cacheDidUpdate=async({cacheName:t,request:n})=>{const a=this._getCacheExpiration(t);await a.updateTimestamp(n.url),await a.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&Ie(()=>this.deleteCacheAndMetadata())}_getCacheExpiration(e){if(e===g.getRuntimeName())throw new l("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new et(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(t===null)return!0;const n=Date.now();return t>=n-this._maxAgeSeconds*1e3}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),a=new Date(t).getTime();return isNaN(a)?null:a}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}try{self["workbox:cacheable-response:6.4.1"]&&_()}catch{}class tt{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some(n=>e.headers.get(n)===this._headers[n])),t}}class st{constructor(e){this.cacheWillUpdate=async({response:t})=>this._cacheableResponse.isResponseCacheable(t)?t:null,this._cacheableResponse=new tt(e)}}Me({prefix:"djs",suffix:"v3",precache:"precache",runtime:"runtime"});caches.delete("djs-precache-v1");caches.delete("djs-cdn-v1");caches.delete("djs-external-v1");caches.delete("djs-docs-v1");ve([{"revision":"e551f67cbf28e0be4e49fa3008d40235","url":"assets/_...all_.b5eb468e.js"},{"revision":"b2ee7925ba49df251ff514180b9e5c60","url":"assets/_class_.be693b39.js"},{"revision":"0f1ddacf1db87b5492efb7d720ca9cd0","url":"assets/_class_.cb3c1db2.css"},{"revision":"587fc8ab83695db89fd1ebd1cfcb7c45","url":"assets/_file_.1f0cfe75.js"},{"revision":"eee948b727ef15a8cef8167d1a40afe6","url":"assets/_typedef_.1346de9f.js"},{"revision":"0f35870f70b3d36c4ee6b44455c3be3e","url":"assets/chevron-down.c280060c.js"},{"revision":"7b8a100ec2276a40f0e21c8e7da9a10c","url":"assets/disclosure.esm.a4ed5d8f.js"},{"revision":"42d061239fda38a2be6c448ebd80d114","url":"assets/docs.15de5edb.js"},{"revision":"efe4ece01f13ea2f6242e33f4a0384b9","url":"assets/docs.6a6bf023.css"},{"revision":"e62903054fee53aaed9b95fb8c04c726","url":"assets/index.5abf0c28.js"},{"revision":"603202cae1971ae0a32f6cdea04745ee","url":"assets/index.855f0cb0.css"},{"revision":"2c38c5f170e7cdd45f40e77132030bc7","url":"assets/index.9f79c145.js"},{"revision":"2809a7ea782021a7b9e694280c7ca970","url":"assets/search.3b0ec621.css"},{"revision":"d1640e37c9c26e135d1199e27600f89b","url":"assets/search.ccd7f086.js"},{"revision":"9cf8288ef0e673c931a53dab2e877961","url":"assets/See.7b104288.js"},{"revision":"752f44609ae61724ed01e3a7c5cadb64","url":"assets/See.cb8831b1.css"},{"revision":"44fec0a20769c0f657f02151a3e26d57","url":"assets/SourceButton.45e15a2a.js"},{"revision":"719dbaa66f3c034f66a95f440ad38924","url":"assets/Spinner.5247e326.css"},{"revision":"6f8fbaae165a9b6992eddacf78108eef","url":"assets/Spinner.af9ba5ea.js"},{"revision":"18a8ef5558056ffc8a43b7b3ef634469","url":"assets/vendor.e47133c2.js"},{"revision":"4a489ef115e6eea3aefaadb8e5373b82","url":"index.html"},{"revision":"399792787f22d2d23920f097016e0587","url":"service-worker.js"},{"revision":"aa81500d435d53cedc08c802a444fe92","url":"android-chrome-192x192.png"},{"revision":"eaf42168f1181031ce434420d957667d","url":"android-chrome-512x512.png"},{"revision":"1ead31cbda59bb772c841d8ea147b282","url":"manifest.webmanifest"}]);Pe();D(new Ae(ke("index.html")));const nt=new je({cacheName:"djs-external-v3",plugins:[new A({maxEntries:50,maxAgeSeconds:60*60*24,purgeOnQuotaError:!0}),new st({statuses:[0,200]})]});Se(s=>s.request.method==="GET"?nt.handle(s):fetch(s.request));D(/^https:\/\/raw\.githubusercontent\.com\/musiccajs\/.*\.json/i,new Oe({cacheName:"musicca-docs-v3",plugins:[new A({maxEntries:20,maxAgeSeconds:60*60*24*7,purgeOnQuotaError:!0})]}));D(/^.*\\.(png|jpg|jpeg|gif|svg|ico)/i,new Ke({cacheName:"musicca-media-v3",plugins:[new A({maxEntries:50,maxAgeSeconds:60*60*24,purgeOnQuotaError:!0})]}));self.addEventListener("install",()=>{self.skipWaiting()});self.addEventListener("message",s=>{s.data&&s.data.type==="SKIP_WAITING"&&self.skipWaiting()});
