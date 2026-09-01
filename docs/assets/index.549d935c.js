const c0=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};c0();var Be={exports:{}},Ye={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Uf=Object.getOwnPropertySymbols,f0=Object.prototype.hasOwnProperty,d0=Object.prototype.propertyIsEnumerable;function h0(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function p0(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var i=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(i.join("")!=="0123456789")return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(s){r[s]=s}),Object.keys(Object.assign({},r)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Lp=p0()?Object.assign:function(t,e){for(var n,i=h0(t),r,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)f0.call(n,o)&&(i[o]=n[o]);if(Uf){r=Uf(n);for(var a=0;a<r.length;a++)d0.call(n,r[a])&&(i[r[a]]=n[r[a]])}}return i};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec=Lp,ss=60103,Pp=60106;Ye.Fragment=60107;Ye.StrictMode=60108;Ye.Profiler=60114;var bp=60109,Dp=60110,Up=60112;Ye.Suspense=60113;var Np=60115,Ip=60116;if(typeof Symbol=="function"&&Symbol.for){var hn=Symbol.for;ss=hn("react.element"),Pp=hn("react.portal"),Ye.Fragment=hn("react.fragment"),Ye.StrictMode=hn("react.strict_mode"),Ye.Profiler=hn("react.profiler"),bp=hn("react.provider"),Dp=hn("react.context"),Up=hn("react.forward_ref"),Ye.Suspense=hn("react.suspense"),Np=hn("react.memo"),Ip=hn("react.lazy")}var Nf=typeof Symbol=="function"&&Symbol.iterator;function m0(t){return t===null||typeof t!="object"?null:(t=Nf&&t[Nf]||t["@@iterator"],typeof t=="function"?t:null)}function To(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Op={};function os(t,e,n){this.props=t,this.context=e,this.refs=Op,this.updater=n||Fp}os.prototype.isReactComponent={};os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(To(85));this.updater.enqueueSetState(this,t,e,"setState")};os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Bp(){}Bp.prototype=os.prototype;function Mc(t,e,n){this.props=t,this.context=e,this.refs=Op,this.updater=n||Fp}var Tc=Mc.prototype=new Bp;Tc.constructor=Mc;Ec(Tc,os.prototype);Tc.isPureReactComponent=!0;var wc={current:null},zp=Object.prototype.hasOwnProperty,kp={key:!0,ref:!0,__self:!0,__source:!0};function Hp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)zp.call(e,i)&&!kp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ss,type:t,key:s,ref:o,props:r,_owner:wc.current}}function g0(t,e){return{$$typeof:ss,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ac(t){return typeof t=="object"&&t!==null&&t.$$typeof===ss}function _0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var If=/\/+/g;function Al(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_0(""+t.key):e.toString(36)}function _a(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ss:case Pp:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Al(o,0):i,Array.isArray(r)?(n="",t!=null&&(n=t.replace(If,"$&/")+"/"),_a(r,e,n,"",function(u){return u})):r!=null&&(Ac(r)&&(r=g0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(If,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Al(s,a);o+=_a(s,e,n,l,r)}else if(l=m0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Al(s,a++),o+=_a(s,e,n,l,r);else if(s==="object")throw e=""+t,Error(To(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function No(t,e,n){if(t==null)return t;var i=[],r=0;return _a(t,i,"","",function(s){return e.call(n,s,r++)}),i}function v0(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var Gp={current:null};function Qn(){var t=Gp.current;if(t===null)throw Error(To(321));return t}var x0={ReactCurrentDispatcher:Gp,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:wc,IsSomeRendererActing:{current:!1},assign:Ec};Ye.Children={map:No,forEach:function(t,e,n){No(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return No(t,function(){e++}),e},toArray:function(t){return No(t,function(e){return e})||[]},only:function(t){if(!Ac(t))throw Error(To(143));return t}};Ye.Component=os;Ye.PureComponent=Mc;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x0;Ye.cloneElement=function(t,e,n){if(t==null)throw Error(To(267,t));var i=Ec({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)zp.call(e,l)&&!kp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ss,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:Dp,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:bp,_context:t},t.Consumer=t};Ye.createElement=Hp;Ye.createFactory=function(t){var e=Hp.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:Up,render:t}};Ye.isValidElement=Ac;Ye.lazy=function(t){return{$$typeof:Ip,_payload:{_status:-1,_result:t},_init:v0}};Ye.memo=function(t,e){return{$$typeof:Np,type:t,compare:e===void 0?null:e}};Ye.useCallback=function(t,e){return Qn().useCallback(t,e)};Ye.useContext=function(t,e){return Qn().useContext(t,e)};Ye.useDebugValue=function(){};Ye.useEffect=function(t,e){return Qn().useEffect(t,e)};Ye.useImperativeHandle=function(t,e,n){return Qn().useImperativeHandle(t,e,n)};Ye.useLayoutEffect=function(t,e){return Qn().useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return Qn().useMemo(t,e)};Ye.useReducer=function(t,e,n){return Qn().useReducer(t,e,n)};Ye.useRef=function(t){return Qn().useRef(t)};Ye.useState=function(t){return Qn().useState(t)};Ye.version="17.0.2";Be.exports=Ye;var y0=Be.exports,Vp={exports:{}},dn={},Wp={exports:{}},Xp={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,i,r;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var l=null,u=null,h=function(){if(l!==null)try{var L=t.unstable_now();l(!0,L),l=null}catch(b){throw setTimeout(h,0),b}};e=function(L){l!==null?setTimeout(e,0,L):(l=L,setTimeout(h,0))},n=function(L,b){u=setTimeout(L,b)},i=function(){clearTimeout(u)},t.unstable_shouldYield=function(){return!1},r=t.unstable_forceFrameRate=function(){}}else{var p=window.setTimeout,d=window.clearTimeout;if(typeof console!="undefined"){var m=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof m!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var v=!1,x=null,f=-1,c=5,g=0;t.unstable_shouldYield=function(){return t.unstable_now()>=g},r=function(){},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):c=0<L?Math.floor(1e3/L):5};var _=new MessageChannel,y=_.port2;_.port1.onmessage=function(){if(x!==null){var L=t.unstable_now();g=L+c;try{x(!0,L)?y.postMessage(null):(v=!1,x=null)}catch(b){throw y.postMessage(null),b}}else v=!1},e=function(L){x=L,v||(v=!0,y.postMessage(null))},n=function(L,b){f=p(function(){L(t.unstable_now())},b)},i=function(){d(f),f=-1}}function A(L,b){var q=L.length;L.push(b);e:for(;;){var ne=q-1>>>1,re=L[ne];if(re!==void 0&&0<I(re,b))L[ne]=b,L[q]=re,q=ne;else break e}}function w(L){return L=L[0],L===void 0?null:L}function C(L){var b=L[0];if(b!==void 0){var q=L.pop();if(q!==b){L[0]=q;e:for(var ne=0,re=L.length;ne<re;){var ye=2*(ne+1)-1,Ee=L[ye],Se=ye+1,Oe=L[Se];if(Ee!==void 0&&0>I(Ee,q))Oe!==void 0&&0>I(Oe,Ee)?(L[ne]=Oe,L[Se]=q,ne=Se):(L[ne]=Ee,L[ye]=q,ne=ye);else if(Oe!==void 0&&0>I(Oe,q))L[ne]=Oe,L[Se]=q,ne=Se;else break e}}return b}return null}function I(L,b){var q=L.sortIndex-b.sortIndex;return q!==0?q:L.id-b.id}var S=[],R=[],Q=1,J=null,D=3,G=!1,k=!1,$=!1;function W(L){for(var b=w(R);b!==null;){if(b.callback===null)C(R);else if(b.startTime<=L)C(R),b.sortIndex=b.expirationTime,A(S,b);else break;b=w(R)}}function Y(L){if($=!1,W(L),!k)if(w(S)!==null)k=!0,e(te);else{var b=w(R);b!==null&&n(Y,b.startTime-L)}}function te(L,b){k=!1,$&&($=!1,i()),G=!0;var q=D;try{for(W(b),J=w(S);J!==null&&(!(J.expirationTime>b)||L&&!t.unstable_shouldYield());){var ne=J.callback;if(typeof ne=="function"){J.callback=null,D=J.priorityLevel;var re=ne(J.expirationTime<=b);b=t.unstable_now(),typeof re=="function"?J.callback=re:J===w(S)&&C(S),W(b)}else C(S);J=w(S)}if(J!==null)var ye=!0;else{var Ee=w(R);Ee!==null&&n(Y,Ee.startTime-b),ye=!1}return ye}finally{J=null,D=q,G=!1}}var K=r;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){k||G||(k=!0,e(te))},t.unstable_getCurrentPriorityLevel=function(){return D},t.unstable_getFirstCallbackNode=function(){return w(S)},t.unstable_next=function(L){switch(D){case 1:case 2:case 3:var b=3;break;default:b=D}var q=D;D=b;try{return L()}finally{D=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=K,t.unstable_runWithPriority=function(L,b){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var q=D;D=L;try{return b()}finally{D=q}},t.unstable_scheduleCallback=function(L,b,q){var ne=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ne+q:ne):q=ne,L){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=q+re,L={id:Q++,callback:b,priorityLevel:L,startTime:q,expirationTime:re,sortIndex:-1},q>ne?(L.sortIndex=q,A(R,L),w(S)===null&&L===w(R)&&($?i():$=!0,n(Y,q-ne))):(L.sortIndex=re,A(S,L),k||G||(k=!0,e(te))),L},t.unstable_wrapCallback=function(L){var b=D;return function(){var q=D;D=b;try{return L.apply(this,arguments)}finally{D=q}}}})(Xp);Wp.exports=Xp;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rl=Be.exports,st=Lp,wt=Wp.exports;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!rl)throw Error(se(227));var jp=new Set,oo={};function ir(t,e){Kr(t,e),Kr(t+"Capture",e)}function Kr(t,e){for(oo[t]=e,t=0;t<e.length;t++)jp.add(e[t])}var Zn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),S0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ff=Object.prototype.hasOwnProperty,Of={},Bf={};function E0(t){return Ff.call(Bf,t)?!0:Ff.call(Of,t)?!1:S0.test(t)?Bf[t]=!0:(Of[t]=!0,!1)}function M0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T0(t,e,n,i){if(e===null||typeof e=="undefined"||M0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Gt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ct[t]=new Gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ct[e]=new Gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ct[t]=new Gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ct[t]=new Gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ct[t]=new Gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ct[t]=new Gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ct[t]=new Gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ct[t]=new Gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ct[t]=new Gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rc=/[\-:]([a-z])/g;function Cc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rc,Cc);Ct[e]=new Gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rc,Cc);Ct[e]=new Gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rc,Cc);Ct[e]=new Gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ct[t]=new Gt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ct.xlinkHref=new Gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ct[t]=new Gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lc(t,e,n,i){var r=Ct.hasOwnProperty(e)?Ct[e]:null,s=r!==null?r.type===0:i?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(T0(e,n,r,i)&&(n=null),i||r===null?E0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var rr=rl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zs=60103,Gi=60106,si=60107,Pc=60108,Xs=60114,bc=60109,Dc=60110,sl=60112,js=60113,ba=60120,ol=60115,Uc=60116,Nc=60121,Ic=60128,Yp=60129,Fc=60130,Au=60131;if(typeof Symbol=="function"&&Symbol.for){var Et=Symbol.for;zs=Et("react.element"),Gi=Et("react.portal"),si=Et("react.fragment"),Pc=Et("react.strict_mode"),Xs=Et("react.profiler"),bc=Et("react.provider"),Dc=Et("react.context"),sl=Et("react.forward_ref"),js=Et("react.suspense"),ba=Et("react.suspense_list"),ol=Et("react.memo"),Uc=Et("react.lazy"),Nc=Et("react.block"),Et("react.scope"),Ic=Et("react.opaque.id"),Yp=Et("react.debug_trace_mode"),Fc=Et("react.offscreen"),Au=Et("react.legacy_hidden")}var zf=typeof Symbol=="function"&&Symbol.iterator;function xs(t){return t===null||typeof t!="object"?null:(t=zf&&t[zf]||t["@@iterator"],typeof t=="function"?t:null)}var Rl;function ks(t){if(Rl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rl=e&&e[1]||""}return`
`+Rl+t}var Cl=!1;function Io(t,e){if(!t||Cl)return"";Cl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var i=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){i=l}t.call(e.prototype)}else{try{throw Error()}catch(l){i=l}t()}}catch(l){if(l&&i&&typeof l.stack=="string"){for(var r=l.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a])return`
`+r[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{Cl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ks(t):""}function w0(t){switch(t.tag){case 5:return ks(t.type);case 16:return ks("Lazy");case 13:return ks("Suspense");case 19:return ks("SuspenseList");case 0:case 2:case 15:return t=Io(t.type,!1),t;case 11:return t=Io(t.type.render,!1),t;case 22:return t=Io(t.type._render,!1),t;case 1:return t=Io(t.type,!0),t;default:return""}}function Br(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case si:return"Fragment";case Gi:return"Portal";case Xs:return"Profiler";case Pc:return"StrictMode";case js:return"Suspense";case ba:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dc:return(t.displayName||"Context")+".Consumer";case bc:return(t._context.displayName||"Context")+".Provider";case sl:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case ol:return Br(t.type);case Nc:return Br(t._render);case Uc:e=t._payload,t=t._init;try{return Br(t(e))}catch{}}return null}function Ei(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function qp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function A0(t){var e=qp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fo(t){t._valueTracker||(t._valueTracker=A0(t))}function $p(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=qp(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Da(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ru(t,e){var n=e.checked;return st({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function kf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ei(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Kp(t,e){e=e.checked,e!=null&&Lc(t,"checked",e,!1)}function Cu(t,e){Kp(t,e);var n=Ei(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Lu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Lu(t,e.type,Ei(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Lu(t,e,n){(e!=="number"||Da(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function R0(t){var e="";return rl.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function Pu(t,e){return t=st({children:void 0},e),(e=R0(e.children))&&(t.children=e),t}function zr(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ei(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function bu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return st({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ei(n)}}function Zp(t,e){var n=Ei(e.value),i=Ei(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var Du={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Qp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Qp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Oo,Jp=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!==Du.svg||"innerHTML"in t)t.innerHTML=e;else{for(Oo=Oo||document.createElement("div"),Oo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Oo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ys={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},C0=["Webkit","ms","Moz","O"];Object.keys(Ys).forEach(function(t){C0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ys[e]=Ys[t]})});function em(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ys.hasOwnProperty(t)&&Ys[t]?(""+e).trim():e+"px"}function tm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=em(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var L0=st({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nu(t,e){if(e){if(L0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Iu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Oc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fu=null,kr=null,Hr=null;function Wf(t){if(t=Ao(t)){if(typeof Fu!="function")throw Error(se(280));var e=t.stateNode;e&&(e=dl(e),Fu(t.stateNode,t.type,e))}}function nm(t){kr?Hr?Hr.push(t):Hr=[t]:kr=t}function im(){if(kr){var t=kr,e=Hr;if(Hr=kr=null,Wf(t),e)for(t=0;t<e.length;t++)Wf(e[t])}}function Bc(t,e){return t(e)}function rm(t,e,n,i,r){return t(e,n,i,r)}function zc(){}var sm=Bc,Vi=!1,Ll=!1;function kc(){(kr!==null||Hr!==null)&&(zc(),im())}function P0(t,e,n){if(Ll)return t(e,n);Ll=!0;try{return sm(t,e,n)}finally{Ll=!1,kc()}}function lo(t,e){var n=t.stateNode;if(n===null)return null;var i=dl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Ou=!1;if(Zn)try{var ys={};Object.defineProperty(ys,"passive",{get:function(){Ou=!0}}),window.addEventListener("test",ys,ys),window.removeEventListener("test",ys,ys)}catch{Ou=!1}function b0(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var qs=!1,Ua=null,Na=!1,Bu=null,D0={onError:function(t){qs=!0,Ua=t}};function U0(t,e,n,i,r,s,o,a,l){qs=!1,Ua=null,b0.apply(D0,arguments)}function N0(t,e,n,i,r,s,o,a,l){if(U0.apply(this,arguments),qs){if(qs){var u=Ua;qs=!1,Ua=null}else throw Error(se(198));Na||(Na=!0,Bu=u)}}function sr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function om(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xf(t){if(sr(t)!==t)throw Error(se(188))}function I0(t){var e=t.alternate;if(!e){if(e=sr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Xf(r),t;if(s===i)return Xf(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function am(t){if(t=I0(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function jf(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var lm,Hc,um,cm,zu=!1,Cn=[],fi=null,di=null,hi=null,uo=new Map,co=new Map,Ss=[],Yf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ku(t,e,n,i,r){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:r,targetContainers:[i]}}function qf(t,e){switch(t){case"focusin":case"focusout":fi=null;break;case"dragenter":case"dragleave":di=null;break;case"mouseover":case"mouseout":hi=null;break;case"pointerover":case"pointerout":uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(e.pointerId)}}function Es(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t=ku(e,n,i,r,s),e!==null&&(e=Ao(e),e!==null&&Hc(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function F0(t,e,n,i,r){switch(e){case"focusin":return fi=Es(fi,t,e,n,i,r),!0;case"dragenter":return di=Es(di,t,e,n,i,r),!0;case"mouseover":return hi=Es(hi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return uo.set(s,Es(uo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,co.set(s,Es(co.get(s)||null,t,e,n,i,r)),!0}return!1}function O0(t){var e=Wi(t.target);if(e!==null){var n=sr(e);if(n!==null){if(e=n.tag,e===13){if(e=om(n),e!==null){t.blockedOn=e,cm(t.lanePriority,function(){wt.unstable_runWithPriority(t.priority,function(){um(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function va(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=Ao(n),e!==null&&Hc(e),t.blockedOn=n,!1;e.shift()}return!0}function $f(t,e,n){va(t)&&n.delete(e)}function B0(){for(zu=!1;0<Cn.length;){var t=Cn[0];if(t.blockedOn!==null){t=Ao(t.blockedOn),t!==null&&lm(t);break}for(var e=t.targetContainers;0<e.length;){var n=Xc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&Cn.shift()}fi!==null&&va(fi)&&(fi=null),di!==null&&va(di)&&(di=null),hi!==null&&va(hi)&&(hi=null),uo.forEach($f),co.forEach($f)}function Ms(t,e){t.blockedOn===e&&(t.blockedOn=null,zu||(zu=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,B0)))}function fm(t){function e(r){return Ms(r,t)}if(0<Cn.length){Ms(Cn[0],t);for(var n=1;n<Cn.length;n++){var i=Cn[n];i.blockedOn===t&&(i.blockedOn=null)}}for(fi!==null&&Ms(fi,t),di!==null&&Ms(di,t),hi!==null&&Ms(hi,t),uo.forEach(e),co.forEach(e),n=0;n<Ss.length;n++)i=Ss[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ss.length&&(n=Ss[0],n.blockedOn===null);)O0(n),n.blockedOn===null&&Ss.shift()}function Bo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var br={animationend:Bo("Animation","AnimationEnd"),animationiteration:Bo("Animation","AnimationIteration"),animationstart:Bo("Animation","AnimationStart"),transitionend:Bo("Transition","TransitionEnd")},Pl={},dm={};Zn&&(dm=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function al(t){if(Pl[t])return Pl[t];if(!br[t])return t;var e=br[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dm)return Pl[t]=e[n];return t}var hm=al("animationend"),pm=al("animationiteration"),mm=al("animationstart"),gm=al("transitionend"),_m=new Map,Gc=new Map,z0=["abort","abort",hm,"animationEnd",pm,"animationIteration",mm,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",gm,"transitionEnd","waiting","waiting"];function Vc(t,e){for(var n=0;n<t.length;n+=2){var i=t[n],r=t[n+1];r="on"+(r[0].toUpperCase()+r.slice(1)),Gc.set(i,e),_m.set(i,r),ir(r,[i])}}var k0=wt.unstable_now;k0();var Qe=8;function Rr(t){if((1&t)!==0)return Qe=15,1;if((2&t)!==0)return Qe=14,2;if((4&t)!==0)return Qe=13,4;var e=24&t;return e!==0?(Qe=12,e):(t&32)!==0?(Qe=11,32):(e=192&t,e!==0?(Qe=10,e):(t&256)!==0?(Qe=9,256):(e=3584&t,e!==0?(Qe=8,e):(t&4096)!==0?(Qe=7,4096):(e=4186112&t,e!==0?(Qe=6,e):(e=62914560&t,e!==0?(Qe=5,e):t&67108864?(Qe=4,67108864):(t&134217728)!==0?(Qe=3,134217728):(e=805306368&t,e!==0?(Qe=2,e):(1073741824&t)!==0?(Qe=1,1073741824):(Qe=8,t))))))}function H0(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function G0(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(se(358,t))}}function fo(t,e){var n=t.pendingLanes;if(n===0)return Qe=0;var i=0,r=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)i=s,r=Qe=15;else if(s=n&134217727,s!==0){var l=s&~o;l!==0?(i=Rr(l),r=Qe):(a&=s,a!==0&&(i=Rr(a),r=Qe))}else s=n&~o,s!==0?(i=Rr(s),r=Qe):a!==0&&(i=Rr(a),r=Qe);if(i===0)return 0;if(i=31-Mi(i),i=n&((0>i?0:1<<i)<<1)-1,e!==0&&e!==i&&(e&o)===0){if(Rr(e),r<=Qe)return e;Qe=r}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Mi(e),r=1<<n,i|=t[n],e&=~r;return i}function vm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ia(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=Cr(24&~e),t===0?Ia(10,e):t;case 10:return t=Cr(192&~e),t===0?Ia(8,e):t;case 8:return t=Cr(3584&~e),t===0&&(t=Cr(4186112&~e),t===0&&(t=512)),t;case 2:return e=Cr(805306368&~e),e===0&&(e=268435456),e}throw Error(se(358,t))}function Cr(t){return t&-t}function bl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ll(t,e,n){t.pendingLanes|=e;var i=e-1;t.suspendedLanes&=i,t.pingedLanes&=i,t=t.eventTimes,e=31-Mi(e),t[e]=n}var Mi=Math.clz32?Math.clz32:X0,V0=Math.log,W0=Math.LN2;function X0(t){return t===0?32:31-(V0(t)/W0|0)|0}var j0=wt.unstable_UserBlockingPriority,Y0=wt.unstable_runWithPriority,xa=!0;function q0(t,e,n,i){Vi||zc();var r=Wc,s=Vi;Vi=!0;try{rm(r,t,e,n,i)}finally{(Vi=s)||kc()}}function $0(t,e,n,i){Y0(j0,Wc.bind(null,t,e,n,i))}function Wc(t,e,n,i){if(xa){var r;if((r=(e&4)===0)&&0<Cn.length&&-1<Yf.indexOf(t))t=ku(null,t,e,n,i),Cn.push(t);else{var s=Xc(t,e,n,i);if(s===null)r&&qf(t,i);else{if(r){if(-1<Yf.indexOf(t)){t=ku(s,t,e,n,i),Cn.push(t);return}if(F0(s,t,e,n,i))return;qf(t,i)}bm(t,e,i,null,n)}}}}function Xc(t,e,n,i){var r=Oc(i);if(r=Wi(r),r!==null){var s=sr(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=om(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return bm(t,e,i,r,n),null}var oi=null,jc=null,ya=null;function xm(){if(ya)return ya;var t,e=jc,n=e.length,i,r="value"in oi?oi.value:oi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ya=r.slice(t,1<i?1-i:void 0)}function Sa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zo(){return!0}function Kf(){return!1}function en(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zo:Kf,this.isPropagationStopped=Kf,this}return st(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),e}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yc=en(as),wo=st({},as,{view:0,detail:0}),K0=en(wo),Dl,Ul,Ts,ul=st({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ts&&(Ts&&t.type==="mousemove"?(Dl=t.screenX-Ts.screenX,Ul=t.screenY-Ts.screenY):Ul=Dl=0,Ts=t),Dl)},movementY:function(t){return"movementY"in t?t.movementY:Ul}}),Zf=en(ul),Z0=st({},ul,{dataTransfer:0}),Q0=en(Z0),J0=st({},wo,{relatedTarget:0}),Nl=en(J0),e_=st({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),t_=en(e_),n_=st({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),i_=en(n_),r_=st({},as,{data:0}),Qf=en(r_),s_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=a_[t])?!!e[t]:!1}function qc(){return l_}var u_=st({},wo,{key:function(t){if(t.key){var e=s_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?o_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(t){return t.type==="keypress"?Sa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),c_=en(u_),f_=st({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jf=en(f_),d_=st({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),h_=en(d_),p_=st({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),m_=en(p_),g_=st({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),__=en(g_),v_=[9,13,27,32],$c=Zn&&"CompositionEvent"in window,$s=null;Zn&&"documentMode"in document&&($s=document.documentMode);var x_=Zn&&"TextEvent"in window&&!$s,ym=Zn&&(!$c||$s&&8<$s&&11>=$s),ed=String.fromCharCode(32),td=!1;function Sm(t,e){switch(t){case"keyup":return v_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Em(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dr=!1;function y_(t,e){switch(t){case"compositionend":return Em(e);case"keypress":return e.which!==32?null:(td=!0,ed);case"textInput":return t=e.data,t===ed&&td?null:t;default:return null}}function S_(t,e){if(Dr)return t==="compositionend"||!$c&&Sm(t,e)?(t=xm(),ya=jc=oi=null,Dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ym&&e.locale!=="ko"?null:e.data;default:return null}}var E_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!E_[t.type]:e==="textarea"}function Mm(t,e,n,i){nm(i),e=Fa(e,"onChange"),0<e.length&&(n=new Yc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ks=null,ho=null;function M_(t){Cm(t,0)}function cl(t){var e=Nr(t);if($p(e))return t}function T_(t,e){if(t==="change")return e}var Tm=!1;if(Zn){var Il;if(Zn){var Fl="oninput"in document;if(!Fl){var id=document.createElement("div");id.setAttribute("oninput","return;"),Fl=typeof id.oninput=="function"}Il=Fl}else Il=!1;Tm=Il&&(!document.documentMode||9<document.documentMode)}function rd(){Ks&&(Ks.detachEvent("onpropertychange",wm),ho=Ks=null)}function wm(t){if(t.propertyName==="value"&&cl(ho)){var e=[];if(Mm(e,ho,t,Oc(t)),t=M_,Vi)t(e);else{Vi=!0;try{Bc(t,e)}finally{Vi=!1,kc()}}}}function w_(t,e,n){t==="focusin"?(rd(),Ks=e,ho=n,Ks.attachEvent("onpropertychange",wm)):t==="focusout"&&rd()}function A_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cl(ho)}function R_(t,e){if(t==="click")return cl(e)}function C_(t,e){if(t==="input"||t==="change")return cl(e)}function L_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var on=typeof Object.is=="function"?Object.is:L_,P_=Object.prototype.hasOwnProperty;function po(t,e){if(on(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++)if(!P_.call(e,n[i])||!on(t[n[i]],e[n[i]]))return!1;return!0}function sd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function od(t,e){var n=sd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sd(n)}}function Am(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Am(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ad(){for(var t=window,e=Da();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Da(t.document)}return e}function Hu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var b_=Zn&&"documentMode"in document&&11>=document.documentMode,Ur=null,Gu=null,Zs=null,Vu=!1;function ld(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vu||Ur==null||Ur!==Da(i)||(i=Ur,"selectionStart"in i&&Hu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zs&&po(Zs,i)||(Zs=i,i=Fa(Gu,"onSelect"),0<i.length&&(e=new Yc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ur)))}Vc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Vc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Vc(z0,2);for(var ud="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Ol=0;Ol<ud.length;Ol++)Gc.set(ud[Ol],0);Kr("onMouseEnter",["mouseout","mouseover"]);Kr("onMouseLeave",["mouseout","mouseover"]);Kr("onPointerEnter",["pointerout","pointerover"]);Kr("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hs));function cd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,N0(i,e,void 0,t),t.currentTarget=null}function Cm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;cd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;cd(r,a,u),s=l}}}if(Na)throw t=Bu,Na=!1,Bu=null,t}function et(t,e){var n=Um(e),i=t+"__bubble";n.has(i)||(Pm(e,t,2,!1),n.add(i))}var fd="_reactListening"+Math.random().toString(36).slice(2);function Lm(t){t[fd]||(t[fd]=!0,jp.forEach(function(e){Rm.has(e)||dd(e,!1,t,null),dd(e,!0,t,null)}))}function dd(t,e,n,i){var r=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),i!==null&&!e&&Rm.has(t)){if(t!=="scroll")return;r|=2,s=i}var o=Um(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(r|=4),Pm(s,t,r,e),o.add(a))}function Pm(t,e,n,i){var r=Gc.get(e);switch(r===void 0?2:r){case 0:r=q0;break;case 1:r=$0;break;default:r=Wc}n=r.bind(null,e,n,t),r=void 0,!Ou||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function bm(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Wi(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}P0(function(){var u=s,h=Oc(n),p=[];e:{var d=_m.get(t);if(d!==void 0){var m=Yc,v=t;switch(t){case"keypress":if(Sa(n)===0)break e;case"keydown":case"keyup":m=c_;break;case"focusin":v="focus",m=Nl;break;case"focusout":v="blur",m=Nl;break;case"beforeblur":case"afterblur":m=Nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Q0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=h_;break;case hm:case pm:case mm:m=t_;break;case gm:m=m_;break;case"scroll":m=K0;break;case"wheel":m=__;break;case"copy":case"cut":case"paste":m=i_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Jf}var x=(e&4)!==0,f=!x&&t==="scroll",c=x?d!==null?d+"Capture":null:d;x=[];for(var g=u,_;g!==null;){_=g;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,c!==null&&(y=lo(g,c),y!=null&&x.push(mo(g,y,_)))),f)break;g=g.return}0<x.length&&(d=new m(d,v,null,n,h),p.push({event:d,listeners:x}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&(e&16)===0&&(v=n.relatedTarget||n.fromElement)&&(Wi(v)||v[ls]))break e;if((m||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?Wi(v):null,v!==null&&(f=sr(v),v!==f||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(x=Zf,y="onMouseLeave",c="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Jf,y="onPointerLeave",c="onPointerEnter",g="pointer"),f=m==null?d:Nr(m),_=v==null?d:Nr(v),d=new x(y,g+"leave",m,n,h),d.target=f,d.relatedTarget=_,y=null,Wi(h)===u&&(x=new x(c,g+"enter",v,n,h),x.target=_,x.relatedTarget=f,y=x),f=y,m&&v)t:{for(x=m,c=v,g=0,_=x;_;_=lr(_))g++;for(_=0,y=c;y;y=lr(y))_++;for(;0<g-_;)x=lr(x),g--;for(;0<_-g;)c=lr(c),_--;for(;g--;){if(x===c||c!==null&&x===c.alternate)break t;x=lr(x),c=lr(c)}x=null}else x=null;m!==null&&hd(p,d,m,x,!1),v!==null&&f!==null&&hd(p,f,v,x,!0)}}e:{if(d=u?Nr(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var A=T_;else if(nd(d))if(Tm)A=C_;else{A=A_;var w=w_}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=R_);if(A&&(A=A(t,u))){Mm(p,A,n,h);break e}w&&w(t,d,u),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&Lu(d,"number",d.value)}switch(w=u?Nr(u):window,t){case"focusin":(nd(w)||w.contentEditable==="true")&&(Ur=w,Gu=u,Zs=null);break;case"focusout":Zs=Gu=Ur=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,ld(p,n,h);break;case"selectionchange":if(b_)break;case"keydown":case"keyup":ld(p,n,h)}var C;if($c)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Dr?Sm(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(ym&&n.locale!=="ko"&&(Dr||I!=="onCompositionStart"?I==="onCompositionEnd"&&Dr&&(C=xm()):(oi=h,jc="value"in oi?oi.value:oi.textContent,Dr=!0)),w=Fa(u,I),0<w.length&&(I=new Qf(I,t,null,n,h),p.push({event:I,listeners:w}),C?I.data=C:(C=Em(n),C!==null&&(I.data=C)))),(C=x_?y_(t,n):S_(t,n))&&(u=Fa(u,"onBeforeInput"),0<u.length&&(h=new Qf("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=C))}Cm(p,e)})}function mo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fa(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=lo(t,n),s!=null&&i.unshift(mo(t,s,r)),s=lo(t,e),s!=null&&i.push(mo(t,s,r))),t=t.return}return i}function lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=lo(n,s),l!=null&&o.unshift(mo(n,l,a))):r||(l=lo(n,s),l!=null&&o.push(mo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function Oa(){}var Bl=null,zl=null;function Dm(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function Wu(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pd=typeof setTimeout=="function"?setTimeout:void 0,D_=typeof clearTimeout=="function"?clearTimeout:void 0;function Kc(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function Gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function md(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var kl=0;function U_(t){return{$$typeof:Ic,toString:t,valueOf:t}}var fl=Math.random().toString(36).slice(2),ai="__reactFiber$"+fl,Ba="__reactProps$"+fl,ls="__reactContainer$"+fl,gd="__reactEvents$"+fl;function Wi(t){var e=t[ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ls]||n[ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=md(t);t!==null;){if(n=t[ai])return n;t=md(t)}return e}t=n,n=t.parentNode}return null}function Ao(t){return t=t[ai]||t[ls],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Nr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function dl(t){return t[Ba]||null}function Um(t){var e=t[gd];return e===void 0&&(e=t[gd]=new Set),e}var Xu=[],Ir=-1;function Li(t){return{current:t}}function nt(t){0>Ir||(t.current=Xu[Ir],Xu[Ir]=null,Ir--)}function ct(t,e){Ir++,Xu[Ir]=t.current,t.current=e}var Ti={},Nt=Li(Ti),Xt=Li(!1),Ji=Ti;function Zr(t,e){var n=t.type.contextTypes;if(!n)return Ti;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function jt(t){return t=t.childContextTypes,t!=null}function za(){nt(Xt),nt(Nt)}function _d(t,e,n){if(Nt.current!==Ti)throw Error(se(168));ct(Nt,e),ct(Xt,n)}function Nm(t,e,n){var i=t.stateNode;if(t=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in t))throw Error(se(108,Br(e)||"Unknown",r));return st({},n,i)}function Ea(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ti,Ji=Nt.current,ct(Nt,t),ct(Xt,Xt.current),!0}function vd(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Nm(t,e,Ji),i.__reactInternalMemoizedMergedChildContext=t,nt(Xt),nt(Nt),ct(Nt,t)):nt(Xt),ct(Xt,n)}var Zc=null,qi=null,N_=wt.unstable_runWithPriority,Qc=wt.unstable_scheduleCallback,ju=wt.unstable_cancelCallback,I_=wt.unstable_shouldYield,xd=wt.unstable_requestPaint,Yu=wt.unstable_now,F_=wt.unstable_getCurrentPriorityLevel,hl=wt.unstable_ImmediatePriority,Im=wt.unstable_UserBlockingPriority,Fm=wt.unstable_NormalPriority,Om=wt.unstable_LowPriority,Bm=wt.unstable_IdlePriority,Hl={},O_=xd!==void 0?xd:function(){},Wn=null,Ma=null,Gl=!1,yd=Yu(),Dt=1e4>yd?Yu:function(){return Yu()-yd};function Qr(){switch(F_()){case hl:return 99;case Im:return 98;case Fm:return 97;case Om:return 96;case Bm:return 95;default:throw Error(se(332))}}function zm(t){switch(t){case 99:return hl;case 98:return Im;case 97:return Fm;case 96:return Om;case 95:return Bm;default:throw Error(se(332))}}function er(t,e){return t=zm(t),N_(t,e)}function go(t,e,n){return t=zm(t),Qc(t,e,n)}function In(){if(Ma!==null){var t=Ma;Ma=null,ju(t)}km()}function km(){if(!Gl&&Wn!==null){Gl=!0;var t=0;try{var e=Wn;er(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),Wn=null}catch(n){throw Wn!==null&&(Wn=Wn.slice(t+1)),Qc(hl,In),n}finally{Gl=!1}}}var B_=rr.ReactCurrentBatchConfig;function vn(t,e){if(t&&t.defaultProps){e=st({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ka=Li(null),Ha=null,Fr=null,Ga=null;function Jc(){Ga=Fr=Ha=null}function ef(t){var e=ka.current;nt(ka),t.type._context._currentValue=e}function Hm(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function Vr(t,e){Ha=t,Ga=Fr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(En=!0),t.firstContext=null)}function cn(t,e){if(Ga!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(Ga=t,e=1073741823),e={context:t,observedBits:e,next:null},Fr===null){if(Ha===null)throw Error(se(308));Fr=e,Ha.dependencies={lanes:0,firstContext:e,responders:null}}else Fr=Fr.next=e;return t._currentValue}var ri=!1;function tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Gm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mi(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function Sd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _o(t,e,n,i){var r=t.updateQueue;ri=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;if(h!==null){h=h.updateQueue;var p=h.lastBaseUpdate;p!==o&&(p===null?h.firstBaseUpdate=u:p.next=u,h.lastBaseUpdate=l)}}if(s!==null){p=r.baseState,o=0,h=u=l=null;do{a=s.lane;var d=s.eventTime;if((i&a)===a){h!==null&&(h=h.next={eventTime:d,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=t,v=s;switch(a=e,d=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){p=m.call(d,p,a);break e}p=m;break e;case 3:m.flags=m.flags&-4097|64;case 0:if(m=v.payload,a=typeof m=="function"?m.call(d,p,a):m,a==null)break e;p=st({},p,a);break e;case 2:ri=!0}}s.callback!==null&&(t.flags|=32,a=r.effects,a===null?r.effects=[s]:a.push(s))}else d={eventTime:d,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(u=h=d,l=p):h=h.next=d,o|=a;if(s=s.next,s===null){if(a=r.shared.pending,a===null)break;s=a.next,a.next=null,r.lastBaseUpdate=a,r.shared.pending=null}}while(1);h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,Co|=o,t.lanes=o,t.memoizedState=p}}function Ed(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Vm=new rl.Component().refs;function Va(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:st({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pl={isMounted:function(t){return(t=t._reactInternals)?sr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=gi(t),s=pi(i,r);s.payload=e,n!=null&&(s.callback=n),mi(t,s),_i(t,r,i)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=gi(t),s=pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),mi(t,s),_i(t,r,i)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=gi(t),r=pi(n,i);r.tag=2,e!=null&&(r.callback=e),mi(t,r),_i(t,i,n)}};function Md(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!po(n,i)||!po(r,s):!0}function Wm(t,e,n){var i=!1,r=Ti,s=e.contextType;return typeof s=="object"&&s!==null?s=cn(s):(r=jt(e)?Ji:Nt.current,i=e.contextTypes,s=(i=i!=null)?Zr(t,r):Ti),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Td(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&pl.enqueueReplaceState(e,e.state,null)}function qu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Vm,tf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=cn(s):(s=jt(e)?Ji:Nt.current,r.context=Zr(t,s)),_o(t,n,r,i),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Va(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&pl.enqueueReplaceState(r,r.state,null),_o(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4)}var ko=Array.isArray;function ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(s){var o=i.refs;o===Vm&&(o=i.refs={}),s===null?delete o[r]:o[r]=s},e._stringRef=r,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Ho(t,e){if(t.type!=="textarea")throw Error(se(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function Xm(t){function e(f,c){if(t){var g=f.lastEffect;g!==null?(g.nextEffect=c,f.lastEffect=c):f.firstEffect=f.lastEffect=c,c.nextEffect=null,c.flags=8}}function n(f,c){if(!t)return null;for(;c!==null;)e(f,c),c=c.sibling;return null}function i(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function r(f,c){return f=Ai(f,c),f.index=0,f.sibling=null,f}function s(f,c,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<c?(f.flags=2,c):g):(f.flags=2,c)):c}function o(f){return t&&f.alternate===null&&(f.flags=2),f}function a(f,c,g,_){return c===null||c.tag!==6?(c=Yl(g,f.mode,_),c.return=f,c):(c=r(c,g),c.return=f,c)}function l(f,c,g,_){return c!==null&&c.elementType===g.type?(_=r(c,g.props),_.ref=ws(f,c,g),_.return=f,_):(_=Ra(g.type,g.key,g.props,null,f.mode,_),_.ref=ws(f,c,g),_.return=f,_)}function u(f,c,g,_){return c===null||c.tag!==4||c.stateNode.containerInfo!==g.containerInfo||c.stateNode.implementation!==g.implementation?(c=ql(g,f.mode,_),c.return=f,c):(c=r(c,g.children||[]),c.return=f,c)}function h(f,c,g,_,y){return c===null||c.tag!==7?(c=Yr(g,f.mode,_,y),c.return=f,c):(c=r(c,g),c.return=f,c)}function p(f,c,g){if(typeof c=="string"||typeof c=="number")return c=Yl(""+c,f.mode,g),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case zs:return g=Ra(c.type,c.key,c.props,null,f.mode,g),g.ref=ws(f,null,c),g.return=f,g;case Gi:return c=ql(c,f.mode,g),c.return=f,c}if(ko(c)||xs(c))return c=Yr(c,f.mode,g,null),c.return=f,c;Ho(f,c)}return null}function d(f,c,g,_){var y=c!==null?c.key:null;if(typeof g=="string"||typeof g=="number")return y!==null?null:a(f,c,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case zs:return g.key===y?g.type===si?h(f,c,g.props.children,_,y):l(f,c,g,_):null;case Gi:return g.key===y?u(f,c,g,_):null}if(ko(g)||xs(g))return y!==null?null:h(f,c,g,_,null);Ho(f,g)}return null}function m(f,c,g,_,y){if(typeof _=="string"||typeof _=="number")return f=f.get(g)||null,a(c,f,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case zs:return f=f.get(_.key===null?g:_.key)||null,_.type===si?h(c,f,_.props.children,y,_.key):l(c,f,_,y);case Gi:return f=f.get(_.key===null?g:_.key)||null,u(c,f,_,y)}if(ko(_)||xs(_))return f=f.get(g)||null,h(c,f,_,y,null);Ho(c,_)}return null}function v(f,c,g,_){for(var y=null,A=null,w=c,C=c=0,I=null;w!==null&&C<g.length;C++){w.index>C?(I=w,w=null):I=w.sibling;var S=d(f,w,g[C],_);if(S===null){w===null&&(w=I);break}t&&w&&S.alternate===null&&e(f,w),c=s(S,c,C),A===null?y=S:A.sibling=S,A=S,w=I}if(C===g.length)return n(f,w),y;if(w===null){for(;C<g.length;C++)w=p(f,g[C],_),w!==null&&(c=s(w,c,C),A===null?y=w:A.sibling=w,A=w);return y}for(w=i(f,w);C<g.length;C++)I=m(w,f,C,g[C],_),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?C:I.key),c=s(I,c,C),A===null?y=I:A.sibling=I,A=I);return t&&w.forEach(function(R){return e(f,R)}),y}function x(f,c,g,_){var y=xs(g);if(typeof y!="function")throw Error(se(150));if(g=y.call(g),g==null)throw Error(se(151));for(var A=y=null,w=c,C=c=0,I=null,S=g.next();w!==null&&!S.done;C++,S=g.next()){w.index>C?(I=w,w=null):I=w.sibling;var R=d(f,w,S.value,_);if(R===null){w===null&&(w=I);break}t&&w&&R.alternate===null&&e(f,w),c=s(R,c,C),A===null?y=R:A.sibling=R,A=R,w=I}if(S.done)return n(f,w),y;if(w===null){for(;!S.done;C++,S=g.next())S=p(f,S.value,_),S!==null&&(c=s(S,c,C),A===null?y=S:A.sibling=S,A=S);return y}for(w=i(f,w);!S.done;C++,S=g.next())S=m(w,f,C,S.value,_),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?C:S.key),c=s(S,c,C),A===null?y=S:A.sibling=S,A=S);return t&&w.forEach(function(Q){return e(f,Q)}),y}return function(f,c,g,_){var y=typeof g=="object"&&g!==null&&g.type===si&&g.key===null;y&&(g=g.props.children);var A=typeof g=="object"&&g!==null;if(A)switch(g.$$typeof){case zs:e:{for(A=g.key,y=c;y!==null;){if(y.key===A){switch(y.tag){case 7:if(g.type===si){n(f,y.sibling),c=r(y,g.props.children),c.return=f,f=c;break e}break;default:if(y.elementType===g.type){n(f,y.sibling),c=r(y,g.props),c.ref=ws(f,y,g),c.return=f,f=c;break e}}n(f,y);break}else e(f,y);y=y.sibling}g.type===si?(c=Yr(g.props.children,f.mode,_,g.key),c.return=f,f=c):(_=Ra(g.type,g.key,g.props,null,f.mode,_),_.ref=ws(f,c,g),_.return=f,f=_)}return o(f);case Gi:e:{for(y=g.key;c!==null;){if(c.key===y)if(c.tag===4&&c.stateNode.containerInfo===g.containerInfo&&c.stateNode.implementation===g.implementation){n(f,c.sibling),c=r(c,g.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else e(f,c);c=c.sibling}c=ql(g,f.mode,_),c.return=f,f=c}return o(f)}if(typeof g=="string"||typeof g=="number")return g=""+g,c!==null&&c.tag===6?(n(f,c.sibling),c=r(c,g),c.return=f,f=c):(n(f,c),c=Yl(g,f.mode,_),c.return=f,f=c),o(f);if(ko(g))return v(f,c,g,_);if(xs(g))return x(f,c,g,_);if(A&&Ho(f,g),typeof g=="undefined"&&!y)switch(f.tag){case 1:case 22:case 0:case 11:case 15:throw Error(se(152,Br(f.type)||"Component"))}return n(f,c)}}var Wa=Xm(!0),jm=Xm(!1),Ro={},bn=Li(Ro),vo=Li(Ro),xo=Li(Ro);function Xi(t){if(t===Ro)throw Error(se(174));return t}function $u(t,e){switch(ct(xo,e),ct(vo,t),ct(bn,Ro),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uu(e,t)}nt(bn),ct(bn,e)}function Jr(){nt(bn),nt(vo),nt(xo)}function wd(t){Xi(xo.current);var e=Xi(bn.current),n=Uu(e,t.type);e!==n&&(ct(vo,t),ct(bn,n))}function nf(t){vo.current===t&&(nt(bn),nt(vo))}var ut=Li(0);function Xa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jn=null,li=null,Dn=!1;function Ym(t,e){var n=an(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function Ad(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function Ku(t){if(Dn){var e=li;if(e){var n=e;if(!Ad(t,e)){if(e=Gr(n.nextSibling),!e||!Ad(t,e)){t.flags=t.flags&-1025|2,Dn=!1,jn=t;return}Ym(jn,n)}jn=t,li=Gr(e.firstChild)}else t.flags=t.flags&-1025|2,Dn=!1,jn=t}}function Rd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;jn=t}function Go(t){if(t!==jn)return!1;if(!Dn)return Rd(t),Dn=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!Wu(e,t.memoizedProps))for(e=li;e;)Ym(t,e),e=Gr(e.nextSibling);if(Rd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){li=Gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}li=null}}else li=jn?Gr(t.stateNode.nextSibling):null;return!0}function Vl(){li=jn=null,Dn=!1}var Wr=[];function rf(){for(var t=0;t<Wr.length;t++)Wr[t]._workInProgressVersionPrimary=null;Wr.length=0}var Qs=rr.ReactCurrentDispatcher,ln=rr.ReactCurrentBatchConfig,yo=0,dt=null,bt=null,At=null,ja=!1,Js=!1;function Vt(){throw Error(se(321))}function sf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!on(t[n],e[n]))return!1;return!0}function of(t,e,n,i,r,s){if(yo=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qs.current=t===null||t.memoizedState===null?k_:H_,t=n(i,r),Js){s=0;do{if(Js=!1,!(25>s))throw Error(se(301));s+=1,At=bt=null,e.updateQueue=null,Qs.current=G_,t=n(i,r)}while(Js)}if(Qs.current=Ka,e=bt!==null&&bt.next!==null,yo=0,At=bt=dt=null,ja=!1,e)throw Error(se(300));return t}function ji(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?dt.memoizedState=At=t:At=At.next=t,At}function or(){if(bt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=At===null?dt.memoizedState:At.next;if(e!==null)At=e,bt=t;else{if(t===null)throw Error(se(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},At===null?dt.memoizedState=At=t:At=At.next=t}return At}function Ln(t,e){return typeof e=="function"?e(t):e}function As(t){var e=or(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){r=r.next,i=i.baseState;var a=o=s=null,l=r;do{var u=l.lane;if((yo&u)===u)a!==null&&(a=a.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),i=l.eagerReducer===t?l.eagerState:t(i,l.action);else{var h={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};a===null?(o=a=h,s=i):a=a.next=h,dt.lanes|=u,Co|=u}l=l.next}while(l!==null&&l!==r);a===null?s=i:a.next=o,on(i,e.memoizedState)||(En=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=a,n.lastRenderedState=i}return[e.memoizedState,n.dispatch]}function Rs(t){var e=or(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);on(s,e.memoizedState)||(En=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Cd(t,e,n){var i=e._getVersion;i=i(e._source);var r=e._workInProgressVersionPrimary;if(r!==null?t=r===i:(t=t.mutableReadLanes,(t=(yo&t)===t)&&(e._workInProgressVersionPrimary=i,Wr.push(e))),t)return n(e._source);throw Wr.push(e),Error(se(350))}function qm(t,e,n,i){var r=Ht;if(r===null)throw Error(se(349));var s=e._getVersion,o=s(e._source),a=Qs.current,l=a.useState(function(){return Cd(r,e,n)}),u=l[1],h=l[0];l=At;var p=t.memoizedState,d=p.refs,m=d.getSnapshot,v=p.source;p=p.subscribe;var x=dt;return t.memoizedState={refs:d,source:e,subscribe:i},a.useEffect(function(){d.getSnapshot=n,d.setSnapshot=u;var f=s(e._source);if(!on(o,f)){f=n(e._source),on(h,f)||(u(f),f=gi(x),r.mutableReadLanes|=f&r.pendingLanes),f=r.mutableReadLanes,r.entangledLanes|=f;for(var c=r.entanglements,g=f;0<g;){var _=31-Mi(g),y=1<<_;c[_]|=f,g&=~y}}},[n,e,i]),a.useEffect(function(){return i(e._source,function(){var f=d.getSnapshot,c=d.setSnapshot;try{c(f(e._source));var g=gi(x);r.mutableReadLanes|=g&r.pendingLanes}catch(_){c(function(){throw _})}})},[e,i]),on(m,n)&&on(v,e)&&on(p,i)||(t={pending:null,dispatch:null,lastRenderedReducer:Ln,lastRenderedState:h},t.dispatch=u=uf.bind(null,dt,t),l.queue=t,l.baseQueue=null,h=Cd(r,e,n),l.memoizedState=l.baseState=h),h}function $m(t,e,n){var i=or();return qm(i,t,e,n)}function Cs(t){var e=ji();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:Ln,lastRenderedState:t},t=t.dispatch=uf.bind(null,dt,t),[e.memoizedState,t]}function Ya(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ld(t){var e=ji();return t={current:t},e.memoizedState=t}function qa(){return or().memoizedState}function Zu(t,e,n,i){var r=ji();dt.flags|=t,r.memoizedState=Ya(1|e,n,void 0,i===void 0?null:i)}function af(t,e,n,i){var r=or();i=i===void 0?null:i;var s=void 0;if(bt!==null){var o=bt.memoizedState;if(s=o.destroy,i!==null&&sf(i,o.deps)){Ya(e,n,s,i);return}}dt.flags|=t,r.memoizedState=Ya(1|e,n,s,i)}function Pd(t,e){return Zu(516,4,t,e)}function $a(t,e){return af(516,4,t,e)}function Km(t,e){return af(4,2,t,e)}function Zm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qm(t,e,n){return n=n!=null?n.concat([t]):null,af(4,2,Zm.bind(null,e,t),n)}function lf(){}function Jm(t,e){var n=or();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function eg(t,e){var n=or();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function z_(t,e){var n=Qr();er(98>n?98:n,function(){t(!0)}),er(97<n?97:n,function(){var i=ln.transition;ln.transition=1;try{t(!1),e()}finally{ln.transition=i}})}function uf(t,e,n){var i=Qt(),r=gi(t),s={lane:r,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===dt||o!==null&&o===dt)Js=ja=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,l=o(a,n);if(s.eagerReducer=o,s.eagerState=l,on(l,a))return}catch{}finally{}_i(t,r,i)}}var Ka={readContext:cn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useOpaqueIdentifier:Vt,unstable_isNewReconciler:!1},k_={readContext:cn,useCallback:function(t,e){return ji().memoizedState=[t,e===void 0?null:e],t},useContext:cn,useEffect:Pd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zu(4,2,Zm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zu(4,2,t,e)},useMemo:function(t,e){var n=ji();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ji();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t=i.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=uf.bind(null,dt,t),[i.memoizedState,t]},useRef:Ld,useState:Cs,useDebugValue:lf,useDeferredValue:function(t){var e=Cs(t),n=e[0],i=e[1];return Pd(function(){var r=ln.transition;ln.transition=1;try{i(t)}finally{ln.transition=r}},[t]),n},useTransition:function(){var t=Cs(!1),e=t[0];return t=z_.bind(null,t[1]),Ld(t),[t,e]},useMutableSource:function(t,e,n){var i=ji();return i.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},qm(i,t,e,n)},useOpaqueIdentifier:function(){if(Dn){var t=!1,e=U_(function(){throw t||(t=!0,n("r:"+(kl++).toString(36))),Error(se(355))}),n=Cs(e)[1];return(dt.mode&2)===0&&(dt.flags|=516,Ya(5,function(){n("r:"+(kl++).toString(36))},void 0,null)),e}return e="r:"+(kl++).toString(36),Cs(e),e},unstable_isNewReconciler:!1},H_={readContext:cn,useCallback:Jm,useContext:cn,useEffect:$a,useImperativeHandle:Qm,useLayoutEffect:Km,useMemo:eg,useReducer:As,useRef:qa,useState:function(){return As(Ln)},useDebugValue:lf,useDeferredValue:function(t){var e=As(Ln),n=e[0],i=e[1];return $a(function(){var r=ln.transition;ln.transition=1;try{i(t)}finally{ln.transition=r}},[t]),n},useTransition:function(){var t=As(Ln)[0];return[qa().current,t]},useMutableSource:$m,useOpaqueIdentifier:function(){return As(Ln)[0]},unstable_isNewReconciler:!1},G_={readContext:cn,useCallback:Jm,useContext:cn,useEffect:$a,useImperativeHandle:Qm,useLayoutEffect:Km,useMemo:eg,useReducer:Rs,useRef:qa,useState:function(){return Rs(Ln)},useDebugValue:lf,useDeferredValue:function(t){var e=Rs(Ln),n=e[0],i=e[1];return $a(function(){var r=ln.transition;ln.transition=1;try{i(t)}finally{ln.transition=r}},[t]),n},useTransition:function(){var t=Rs(Ln)[0];return[qa().current,t]},useMutableSource:$m,useOpaqueIdentifier:function(){return Rs(Ln)[0]},unstable_isNewReconciler:!1},V_=rr.ReactCurrentOwner,En=!1;function Wt(t,e,n,i){e.child=t===null?jm(e,null,n,i):Wa(e,t.child,n,i)}function bd(t,e,n,i,r){n=n.render;var s=e.ref;return Vr(e,r),i=of(t,e,n,i,s,r),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~r,Yn(t,e,r)):(e.flags|=1,Wt(t,e,i,r),e.child)}function Dd(t,e,n,i,r,s){if(t===null){var o=n.type;return typeof o=="function"&&!mf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,tg(t,e,o,i,r,s)):(t=Ra(n.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(r&s)===0&&(r=o.memoizedProps,n=n.compare,n=n!==null?n:po,n(r,i)&&t.ref===e.ref)?Yn(t,e,s):(e.flags|=1,t=Ai(o,i),t.ref=e.ref,t.return=e,e.child=t)}function tg(t,e,n,i,r,s){if(t!==null&&po(t.memoizedProps,i)&&t.ref===e.ref)if(En=!1,(s&r)!==0)(t.flags&16384)!==0&&(En=!0);else return e.lanes=t.lanes,Yn(t,e,s);return Qu(t,e,n,i,s)}function Wl(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden"||i.mode==="unstable-defer-without-hiding")if((e.mode&4)===0)e.memoizedState={baseLanes:0},Wo(e,n);else if((n&1073741824)!==0)e.memoizedState={baseLanes:0},Wo(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},Wo(e,t),null;else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Wo(e,i);return Wt(t,e,r,n),e.child}function ng(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function Qu(t,e,n,i,r){var s=jt(n)?Ji:Nt.current;return s=Zr(e,s),Vr(e,r),n=of(t,e,n,i,s,r),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~r,Yn(t,e,r)):(e.flags|=1,Wt(t,e,n,r),e.child)}function Ud(t,e,n,i,r){if(jt(n)){var s=!0;Ea(e)}else s=!1;if(Vr(e,r),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),Wm(e,n,i),qu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=cn(u):(u=jt(n)?Ji:Nt.current,u=Zr(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Td(e,o,i,u),ri=!1;var d=e.memoizedState;o.state=d,_o(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Xt.current||ri?(typeof h=="function"&&(Va(e,n,h,i),l=e.memoizedState),(a=ri||Md(e,n,a,i,d,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),i=!1)}else{o=e.stateNode,Gm(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:vn(e.type,a),o.props=u,p=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=cn(l):(l=jt(n)?Ji:Nt.current,l=Zr(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||d!==l)&&Td(e,o,i,l),ri=!1,d=e.memoizedState,o.state=d,_o(e,i,o,r);var v=e.memoizedState;a!==p||d!==v||Xt.current||ri?(typeof m=="function"&&(Va(e,n,m,i),v=e.memoizedState),(u=ri||Md(e,n,u,i,d,v,l))?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),i=!1)}return Ju(t,e,n,i,s,r)}function Ju(t,e,n,i,r,s){ng(t,e);var o=(e.flags&64)!==0;if(!i&&!o)return r&&vd(e,n,!1),Yn(t,e,s);i=e.stateNode,V_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Wa(e,t.child,null,s),e.child=Wa(e,null,a,s)):Wt(t,e,a,s),e.memoizedState=i.state,r&&vd(e,n,!0),e.child}function Nd(t){var e=t.stateNode;e.pendingContext?_d(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_d(t,e.context,!1),$u(t,e.containerInfo)}var Vo={dehydrated:null,retryLane:0};function Id(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,o;return(o=(e.flags&64)!==0)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||i.fallback===void 0||i.unstable_avoidThisFallback===!0||(r|=1),ct(ut,r&1),t===null?(i.fallback!==void 0&&Ku(e),t=i.children,r=i.fallback,s?(t=Fd(e,t,r,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Vo,t):typeof i.unstable_expectedLoadTime=="number"?(t=Fd(e,t,r,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Vo,e.lanes=33554432,t):(n=gf({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(i=Bd(t,e,i.children,i.fallback,n),s=e.child,r=t.child.memoizedState,s.memoizedState=r===null?{baseLanes:n}:{baseLanes:r.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Vo,i):(n=Od(t,e,i.children,n),e.memoizedState=null,n):s?(i=Bd(t,e,i.children,i.fallback,n),s=e.child,r=t.child.memoizedState,s.memoizedState=r===null?{baseLanes:n}:{baseLanes:r.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Vo,i):(n=Od(t,e,i.children,n),e.memoizedState=null,n)}function Fd(t,e,n,i){var r=t.mode,s=t.child;return e={mode:"hidden",children:e},(r&2)===0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=gf(e,r,0,null),n=Yr(n,r,i,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function Od(t,e,n,i){var r=t.child;return t=r.sibling,n=Ai(r,{mode:"visible",children:n}),(e.mode&2)===0&&(n.lanes=i),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function Bd(t,e,n,i,r){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)===0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=Ai(o,a),t!==null?i=Ai(t,i):(i=Yr(i,s,r,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,i}function zd(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Hm(t.return,e)}function Xl(t,e,n,i,r,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r,o.lastEffect=s)}function kd(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=ut.current,(i&2)!==0)i=i&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zd(t,n);else if(t.tag===19)zd(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ct(ut,i),(e.mode&2)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Xa(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Xl(e,!1,r,n,s,e.lastEffect);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Xa(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Xl(e,!0,n,null,s,e.lastEffect);break;case"together":Xl(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function Yn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Co|=e.lanes,(n&e.childLanes)!==0){if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Ai(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ai(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var ig,ec,rg,sg;ig=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ec=function(){};rg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Xi(bn.current);var s=null;switch(n){case"input":r=Ru(t,r),i=Ru(t,i),s=[];break;case"option":r=Pu(t,r),i=Pu(t,i),s=[];break;case"select":r=st({},r,{value:void 0}),i=st({},i,{value:void 0}),s=[];break;case"textarea":r=bu(t,r),i=bu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Oa)}Nu(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&et("scroll",t),s||a===l||(s=[])):typeof l=="object"&&l!==null&&l.$$typeof===Ic?l.toString():(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};sg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ls(t,e){if(!Dn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function W_(t,e,n){var i=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return jt(e.type)&&za(),null;case 3:return Jr(),nt(Xt),nt(Nt),rf(),i=e.stateNode,i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Go(e)?e.flags|=4:i.hydrate||(e.flags|=256)),ec(e),null;case 5:nf(e);var r=Xi(xo.current);if(n=e.type,t!==null&&e.stateNode!=null)rg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=128);else{if(!i){if(e.stateNode===null)throw Error(se(166));return null}if(t=Xi(bn.current),Go(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ai]=e,i[Ba]=s,n){case"dialog":et("cancel",i),et("close",i);break;case"iframe":case"object":case"embed":et("load",i);break;case"video":case"audio":for(t=0;t<Hs.length;t++)et(Hs[t],i);break;case"source":et("error",i);break;case"img":case"image":case"link":et("error",i),et("load",i);break;case"details":et("toggle",i);break;case"input":kf(i,s),et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},et("invalid",i);break;case"textarea":Gf(i,s),et("invalid",i)}Nu(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(r=s[o],o==="children"?typeof r=="string"?i.textContent!==r&&(t=["children",r]):typeof r=="number"&&i.textContent!==""+r&&(t=["children",""+r]):oo.hasOwnProperty(o)&&r!=null&&o==="onScroll"&&et("scroll",i));switch(n){case"input":Fo(i),Hf(i,s,!0);break;case"textarea":Fo(i),Vf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Oa)}i=t,e.updateQueue=i,i!==null&&(e.flags|=4)}else{switch(o=r.nodeType===9?r:r.ownerDocument,t===Du.html&&(t=Qp(n)),t===Du.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ai]=e,t[Ba]=i,ig(t,e,!1,!1),e.stateNode=t,o=Iu(n,i),n){case"dialog":et("cancel",t),et("close",t),r=i;break;case"iframe":case"object":case"embed":et("load",t),r=i;break;case"video":case"audio":for(r=0;r<Hs.length;r++)et(Hs[r],t);r=i;break;case"source":et("error",t),r=i;break;case"img":case"image":case"link":et("error",t),et("load",t),r=i;break;case"details":et("toggle",t),r=i;break;case"input":kf(t,i),r=Ru(t,i),et("invalid",t);break;case"option":r=Pu(t,i);break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=st({},i,{value:void 0}),et("invalid",t);break;case"textarea":Gf(t,i),r=bu(t,i),et("invalid",t);break;default:r=i}Nu(n,r);var a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?tm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jp(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ao(t,l):typeof l=="number"&&ao(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&et("scroll",t):l!=null&&Lc(t,s,l,o))}switch(n){case"input":Fo(t),Hf(t,i,!1);break;case"textarea":Fo(t),Vf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ei(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?zr(t,!!i.multiple,s,!1):i.defaultValue!=null&&zr(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Oa)}Dm(n,i)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)sg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));n=Xi(xo.current),Xi(bn.current),Go(e)?(i=e.stateNode,n=e.memoizedProps,i[ai]=e,i.nodeValue!==n&&(e.flags|=4)):(i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ai]=e,e.stateNode=i)}return null;case 13:return nt(ut),i=e.memoizedState,(e.flags&64)!==0?(e.lanes=n,e):(i=i!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&Go(e):n=t.memoizedState!==null,i&&!n&&(e.mode&2)!==0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(ut.current&1)!==0?Rt===0&&(Rt=3):((Rt===0||Rt===3)&&(Rt=4),Ht===null||(Co&134217727)===0&&(cs&134217727)===0||Xr(Ht,Ut))),(i||n)&&(e.flags|=4),null);case 4:return Jr(),ec(e),t===null&&Lm(e.stateNode.containerInfo),null;case 10:return ef(e),null;case 17:return jt(e.type)&&za(),null;case 19:if(nt(ut),i=e.memoizedState,i===null)return null;if(s=(e.flags&64)!==0,o=i.rendering,o===null)if(s)Ls(i,!1);else{if(Rt!==0||t!==null&&(t.flags&64)!==0)for(t=e.child;t!==null;){if(o=Xa(t),o!==null){for(e.flags|=64,Ls(i,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),i.lastEffect===null&&(e.firstEffect=null),e.lastEffect=i.lastEffect,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(ut,ut.current&1|2),e.child}t=t.sibling}i.tail!==null&&Dt()>oc&&(e.flags|=64,s=!0,Ls(i,!1),e.lanes=33554432)}else{if(!s)if(t=Xa(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ls(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Dn)return e=e.lastEffect=i.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*Dt()-i.renderingStartTime>oc&&n!==1073741824&&(e.flags|=64,s=!0,Ls(i,!1),e.lanes=33554432);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.lastEffect=e.lastEffect,i.renderingStartTime=Dt(),n.sibling=null,e=ut.current,ct(ut,s?e&1|2:e&1),n):null;case 23:case 24:return pf(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&i.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(se(156,e.tag))}function X_(t){switch(t.tag){case 1:jt(t.type)&&za();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(Jr(),nt(Xt),nt(Nt),rf(),e=t.flags,(e&64)!==0)throw Error(se(285));return t.flags=e&-4097|64,t;case 5:return nf(t),null;case 13:return nt(ut),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return nt(ut),null;case 4:return Jr(),null;case 10:return ef(t),null;case 23:case 24:return pf(),null;default:return null}}function cf(t,e){try{var n="",i=e;do n+=w0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r}}function tc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var j_=typeof WeakMap=="function"?WeakMap:Map;function og(t,e,n){n=pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Qa||(Qa=!0,ac=i),tc(t,e)},n}function ag(t,e,n){n=pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return tc(t,e),i(r)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof i!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this),tc(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var Y_=typeof WeakSet=="function"?WeakSet:Set;function Hd(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){vi(t,n)}else e.current=null}function q_(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,i=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:vn(e.type,n),i),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&Kc(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(se(163))}function $_(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)===3){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var r=t;i=r.next,r=r.tag,(r&4)!==0&&(r&1)!==0&&(gg(n,t),iv(n,t)),t=i}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(i=n.elementType===n.type?e.memoizedProps:vn(n.type,e.memoizedProps),t.componentDidUpdate(i,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&Ed(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ed(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&Dm(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&fm(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(se(163))}function Gd(t,e){for(var n=t;;){if(n.tag===5){var i=n.stateNode;if(e)i=i.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{i=n.stateNode;var r=n.memoizedProps.style;r=r!=null&&r.hasOwnProperty("display")?r.display:null,i.style.display=em("display",r)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function Vd(t,e){if(qi&&typeof qi.onCommitFiberUnmount=="function")try{qi.onCommitFiberUnmount(Zc,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var i=n,r=i.destroy;if(i=i.tag,r!==void 0)if((i&4)!==0)gg(e,n);else{i=e;try{r()}catch(s){vi(i,s)}}n=n.next}while(n!==t)}break;case 1:if(Hd(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){vi(e,s)}break;case 5:Hd(e);break;case 4:lg(t,e)}}function Wd(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function Xd(t){return t.tag===5||t.tag===3||t.tag===4}function jd(t){e:{for(var e=t.return;e!==null;){if(Xd(e))break e;e=e.return}throw Error(se(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var i=!1;break;case 3:e=e.containerInfo,i=!0;break;case 4:e=e.containerInfo,i=!0;break;default:throw Error(se(161))}n.flags&16&&(ao(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||Xd(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}i?nc(t,n,e):ic(t,n,e)}function nc(t,e,n){var i=t.tag,r=i===5||i===6;if(r)t=r?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Oa));else if(i!==4&&(t=t.child,t!==null))for(nc(t,e,n),t=t.sibling;t!==null;)nc(t,e,n),t=t.sibling}function ic(t,e,n){var i=t.tag,r=i===5||i===6;if(r)t=r?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ic(t,e,n),t=t.sibling;t!==null;)ic(t,e,n),t=t.sibling}function lg(t,e){for(var n=e,i=!1,r,s;;){if(!i){i=n.return;e:for(;;){if(i===null)throw Error(se(160));switch(r=i.stateNode,i.tag){case 5:s=!1;break e;case 3:r=r.containerInfo,s=!0;break e;case 4:r=r.containerInfo,s=!0;break e}i=i.return}i=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,l=a;;)if(Vd(o,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}s?(o=r,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):r.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){r=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(Vd(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(i=!1)}n.sibling.return=n.return,n=n.sibling}}function jl(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do(i.tag&3)===3&&(t=i.destroy,i.destroy=void 0,t!==void 0&&t()),i=i.next;while(i!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){i=e.memoizedProps;var r=t!==null?t.memoizedProps:i;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[Ba]=i,t==="input"&&i.type==="radio"&&i.name!=null&&Kp(n,i),Iu(t,r),e=Iu(t,i),r=0;r<s.length;r+=2){var o=s[r],a=s[r+1];o==="style"?tm(n,a):o==="dangerouslySetInnerHTML"?Jp(n,a):o==="children"?ao(n,a):Lc(n,o,a,e)}switch(t){case"input":Cu(n,i);break;case"textarea":Zp(n,i);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!i.multiple,s=i.value,s!=null?zr(n,!!i.multiple,s,!1):t!==!!i.multiple&&(i.defaultValue!=null?zr(n,!!i.multiple,i.defaultValue,!0):zr(n,!!i.multiple,i.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(se(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,fm(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(hf=Dt(),Gd(e.child,!0)),Yd(e);return;case 19:Yd(e);return;case 17:return;case 23:case 24:Gd(e,e.memoizedState!==null);return}throw Error(se(163))}function Yd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Y_),e.forEach(function(i){var r=ov.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function K_(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var Z_=Math.ceil,Za=rr.ReactCurrentDispatcher,ff=rr.ReactCurrentOwner,Ue=0,Ht=null,xt=null,Ut=0,tr=0,rc=Li(0),Rt=0,ml=null,us=0,Co=0,cs=0,df=0,sc=null,hf=0,oc=1/0;function fs(){oc=Dt()+500}var ve=null,Qa=!1,ac=null,Pn=null,wi=!1,eo=null,Gs=90,lc=[],uc=[],$n=null,to=0,cc=null,Ta=-1,Xn=0,wa=0,no=null,Aa=!1;function Qt(){return(Ue&48)!==0?Dt():Ta!==-1?Ta:Ta=Dt()}function gi(t){if(t=t.mode,(t&2)===0)return 1;if((t&4)===0)return Qr()===99?1:2;if(Xn===0&&(Xn=us),B_.transition!==0){wa!==0&&(wa=sc!==null?sc.pendingLanes:0),t=Xn;var e=4186112&~wa;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=Qr(),(Ue&4)!==0&&t===98?t=Ia(12,Xn):(t=H0(t),t=Ia(t,Xn)),t}function _i(t,e,n){if(50<to)throw to=0,cc=null,Error(se(185));if(t=gl(t,e),t===null)return null;ll(t,e,n),t===Ht&&(cs|=e,Rt===4&&Xr(t,Ut));var i=Qr();e===1?(Ue&8)!==0&&(Ue&48)===0?fc(t):(fn(t,n),Ue===0&&(fs(),In())):((Ue&4)===0||i!==98&&i!==99||($n===null?$n=new Set([t]):$n.add(t)),fn(t,n)),sc=t}function gl(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function fn(t,e){for(var n=t.callbackNode,i=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-Mi(o),l=1<<a,u=s[a];if(u===-1){if((l&i)===0||(l&r)!==0){u=e,Rr(l);var h=Qe;s[a]=10<=h?u+250:6<=h?u+5e3:-1}}else u<=e&&(t.expiredLanes|=l);o&=~l}if(i=fo(t,t===Ht?Ut:0),e=Qe,i===0)n!==null&&(n!==Hl&&ju(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==Hl&&ju(n)}e===15?(n=fc.bind(null,t),Wn===null?(Wn=[n],Ma=Qc(hl,km)):Wn.push(n),n=Hl):e===14?n=go(99,fc.bind(null,t)):(n=G0(e),n=go(n,ug.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function ug(t){if(Ta=-1,wa=Xn=0,(Ue&48)!==0)throw Error(se(327));var e=t.callbackNode;if(Pi()&&t.callbackNode!==e)return null;var n=fo(t,t===Ht?Ut:0);if(n===0)return null;var i=n,r=Ue;Ue|=16;var s=hg();(Ht!==t||Ut!==i)&&(fs(),jr(t,i));do try{ev();break}catch(a){dg(t,a)}while(1);if(Jc(),Za.current=s,Ue=r,xt!==null?i=0:(Ht=null,Ut=0,i=Rt),(us&cs)!==0)jr(t,0);else if(i!==0){if(i===2&&(Ue|=64,t.hydrate&&(t.hydrate=!1,Kc(t.containerInfo)),n=vm(t),n!==0&&(i=Vs(t,n))),i===1)throw e=ml,jr(t,0),Xr(t,n),fn(t,Dt()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,i){case 0:case 1:throw Error(se(345));case 2:Bi(t);break;case 3:if(Xr(t,n),(n&62914560)===n&&(i=hf+500-Dt(),10<i)){if(fo(t,0)!==0)break;if(r=t.suspendedLanes,(r&n)!==n){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=pd(Bi.bind(null,t),i);break}Bi(t);break;case 4:if(Xr(t,n),(n&4186112)===n)break;for(i=t.eventTimes,r=-1;0<n;){var o=31-Mi(n);s=1<<o,o=i[o],o>r&&(r=o),n&=~s}if(n=r,n=Dt()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Z_(n/1960))-n,10<n){t.timeoutHandle=pd(Bi.bind(null,t),n);break}Bi(t);break;case 5:Bi(t);break;default:throw Error(se(329))}}return fn(t,Dt()),t.callbackNode===e?ug.bind(null,t):null}function Xr(t,e){for(e&=~df,e&=~cs,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mi(e),i=1<<n;t[n]=-1,e&=~i}}function fc(t){if((Ue&48)!==0)throw Error(se(327));if(Pi(),t===Ht&&(t.expiredLanes&Ut)!==0){var e=Ut,n=Vs(t,e);(us&cs)!==0&&(e=fo(t,e),n=Vs(t,e))}else e=fo(t,0),n=Vs(t,e);if(t.tag!==0&&n===2&&(Ue|=64,t.hydrate&&(t.hydrate=!1,Kc(t.containerInfo)),e=vm(t),e!==0&&(n=Vs(t,e))),n===1)throw n=ml,jr(t,0),Xr(t,e),fn(t,Dt()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,Bi(t),fn(t,Dt()),null}function Q_(){if($n!==null){var t=$n;$n=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,fn(e,Dt())})}In()}function cg(t,e){var n=Ue;Ue|=1;try{return t(e)}finally{Ue=n,Ue===0&&(fs(),In())}}function fg(t,e){var n=Ue;Ue&=-2,Ue|=8;try{return t(e)}finally{Ue=n,Ue===0&&(fs(),In())}}function Wo(t,e){ct(rc,tr),tr|=e,us|=e}function pf(){tr=rc.current,nt(rc)}function jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,D_(n)),xt!==null)for(n=xt.return;n!==null;){var i=n;switch(i.tag){case 1:i=i.type.childContextTypes,i!=null&&za();break;case 3:Jr(),nt(Xt),nt(Nt),rf();break;case 5:nf(i);break;case 4:Jr();break;case 13:nt(ut);break;case 19:nt(ut);break;case 10:ef(i);break;case 23:case 24:pf()}n=n.return}Ht=t,xt=Ai(t.current,null),Ut=tr=us=e,Rt=0,ml=null,df=cs=Co=0}function dg(t,e){do{var n=xt;try{if(Jc(),Qs.current=Ka,ja){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ja=!1}if(yo=0,At=bt=dt=null,Js=!1,ff.current=null,n===null||n.return===null){Rt=1,ml=e,xt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ut,a.flags|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l;if((a.mode&2)===0){var h=a.alternate;h?(a.updateQueue=h.updateQueue,a.memoizedState=h.memoizedState,a.lanes=h.lanes):(a.updateQueue=null,a.memoizedState=null)}var p=(ut.current&1)!==0,d=o;do{var m;if(m=d.tag===13){var v=d.memoizedState;if(v!==null)m=v.dehydrated!==null;else{var x=d.memoizedProps;m=x.fallback===void 0?!1:x.unstable_avoidThisFallback!==!0?!0:!p}}if(m){var f=d.updateQueue;if(f===null){var c=new Set;c.add(u),d.updateQueue=c}else f.add(u);if((d.mode&2)===0){if(d.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var g=pi(-1,1);g.tag=2,mi(a,g)}a.lanes|=1;break e}l=void 0,a=e;var _=s.pingCache;if(_===null?(_=s.pingCache=new j_,l=new Set,_.set(u,l)):(l=_.get(u),l===void 0&&(l=new Set,_.set(u,l))),!l.has(a)){l.add(a);var y=sv.bind(null,s,u,a);u.then(y,y)}d.flags|=4096,d.lanes=e;break e}d=d.return}while(d!==null);l=Error((Br(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Rt!==5&&(Rt=2),l=cf(l,a),d=o;do{switch(d.tag){case 3:s=l,d.flags|=4096,e&=-e,d.lanes|=e;var A=og(d,s,e);Sd(d,A);break e;case 1:s=l;var w=d.type,C=d.stateNode;if((d.flags&64)===0&&(typeof w.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Pn===null||!Pn.has(C)))){d.flags|=4096,e&=-e,d.lanes|=e;var I=ag(d,s,e);Sd(d,I);break e}}d=d.return}while(d!==null)}mg(n)}catch(S){e=S,xt===n&&n!==null&&(xt=n=n.return);continue}break}while(1)}function hg(){var t=Za.current;return Za.current=Ka,t===null?Ka:t}function Vs(t,e){var n=Ue;Ue|=16;var i=hg();Ht===t&&Ut===e||jr(t,e);do try{J_();break}catch(r){dg(t,r)}while(1);if(Jc(),Ue=n,Za.current=i,xt!==null)throw Error(se(261));return Ht=null,Ut=0,Rt}function J_(){for(;xt!==null;)pg(xt)}function ev(){for(;xt!==null&&!I_();)pg(xt)}function pg(t){var e=_g(t.alternate,t,tr);t.memoizedProps=t.pendingProps,e===null?mg(t):xt=e,ff.current=null}function mg(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)===0){if(n=W_(n,e,tr),n!==null){xt=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(tr&1073741824)!==0||(n.mode&4)===0){for(var i=0,r=n.child;r!==null;)i|=r.lanes|r.childLanes,r=r.sibling;n.childLanes=i}t!==null&&(t.flags&2048)===0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=X_(e),n!==null){n.flags&=2047,xt=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);Rt===0&&(Rt=5)}function Bi(t){var e=Qr();return er(99,tv.bind(null,t,e)),null}function tv(t,e){do Pi();while(eo!==null);if((Ue&48)!==0)throw Error(se(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null;var i=n.lanes|n.childLanes,r=i,s=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var l=31-Mi(s),u=1<<l;r[l]=0,o[l]=-1,a[l]=-1,s&=~u}if($n!==null&&(i&24)===0&&$n.has(t)&&$n.delete(t),t===Ht&&(xt=Ht=null,Ut=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,i=n.firstEffect):i=n:i=n.firstEffect,i!==null){if(r=Ue,Ue|=32,ff.current=null,Bl=xa,o=ad(),Hu(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(u=a.getSelection&&a.getSelection())&&u.rangeCount!==0){a=u.anchorNode,s=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var h=0,p=-1,d=-1,m=0,v=0,x=o,f=null;t:for(;;){for(var c;x!==a||s!==0&&x.nodeType!==3||(p=h+s),x!==l||u!==0&&x.nodeType!==3||(d=h+u),x.nodeType===3&&(h+=x.nodeValue.length),(c=x.firstChild)!==null;)f=x,x=c;for(;;){if(x===o)break t;if(f===a&&++m===s&&(p=h),f===l&&++v===u&&(d=h),(c=x.nextSibling)!==null)break;x=f,f=x.parentNode}x=c}a=p===-1||d===-1?null:{start:p,end:d}}else a=null;a=a||{start:0,end:0}}else a=null;zl={focusedElem:o,selectionRange:a},xa=!1,no=null,Aa=!1,ve=i;do try{nv()}catch(S){if(ve===null)throw Error(se(330));vi(ve,S),ve=ve.nextEffect}while(ve!==null);no=null,ve=i;do try{for(o=t;ve!==null;){var g=ve.flags;if(g&16&&ao(ve.stateNode,""),g&128){var _=ve.alternate;if(_!==null){var y=_.ref;y!==null&&(typeof y=="function"?y(null):y.current=null)}}switch(g&1038){case 2:jd(ve),ve.flags&=-3;break;case 6:jd(ve),ve.flags&=-3,jl(ve.alternate,ve);break;case 1024:ve.flags&=-1025;break;case 1028:ve.flags&=-1025,jl(ve.alternate,ve);break;case 4:jl(ve.alternate,ve);break;case 8:a=ve,lg(o,a);var A=a.alternate;Wd(a),A!==null&&Wd(A)}ve=ve.nextEffect}}catch(S){if(ve===null)throw Error(se(330));vi(ve,S),ve=ve.nextEffect}while(ve!==null);if(y=zl,_=ad(),g=y.focusedElem,o=y.selectionRange,_!==g&&g&&g.ownerDocument&&Am(g.ownerDocument.documentElement,g)){for(o!==null&&Hu(g)&&(_=o.start,y=o.end,y===void 0&&(y=_),"selectionStart"in g?(g.selectionStart=_,g.selectionEnd=Math.min(y,g.value.length)):(y=(_=g.ownerDocument||document)&&_.defaultView||window,y.getSelection&&(y=y.getSelection(),a=g.textContent.length,A=Math.min(o.start,a),o=o.end===void 0?A:Math.min(o.end,a),!y.extend&&A>o&&(a=o,o=A,A=a),a=od(g,A),s=od(g,o),a&&s&&(y.rangeCount!==1||y.anchorNode!==a.node||y.anchorOffset!==a.offset||y.focusNode!==s.node||y.focusOffset!==s.offset)&&(_=_.createRange(),_.setStart(a.node,a.offset),y.removeAllRanges(),A>o?(y.addRange(_),y.extend(s.node,s.offset)):(_.setEnd(s.node,s.offset),y.addRange(_)))))),_=[],y=g;y=y.parentNode;)y.nodeType===1&&_.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<_.length;g++)y=_[g],y.element.scrollLeft=y.left,y.element.scrollTop=y.top}xa=!!Bl,zl=Bl=null,t.current=n,ve=i;do try{for(g=t;ve!==null;){var w=ve.flags;if(w&36&&$_(g,ve.alternate,ve),w&128){_=void 0;var C=ve.ref;if(C!==null){var I=ve.stateNode;switch(ve.tag){case 5:_=I;break;default:_=I}typeof C=="function"?C(_):C.current=_}}ve=ve.nextEffect}}catch(S){if(ve===null)throw Error(se(330));vi(ve,S),ve=ve.nextEffect}while(ve!==null);ve=null,O_(),Ue=r}else t.current=n;if(wi)wi=!1,eo=t,Gs=e;else for(ve=i;ve!==null;)e=ve.nextEffect,ve.nextEffect=null,ve.flags&8&&(w=ve,w.sibling=null,w.stateNode=null),ve=e;if(i=t.pendingLanes,i===0&&(Pn=null),i===1?t===cc?to++:(to=0,cc=t):to=0,n=n.stateNode,qi&&typeof qi.onCommitFiberRoot=="function")try{qi.onCommitFiberRoot(Zc,n,void 0,(n.current.flags&64)===64)}catch{}if(fn(t,Dt()),Qa)throw Qa=!1,t=ac,ac=null,t;return(Ue&8)!==0||In(),null}function nv(){for(;ve!==null;){var t=ve.alternate;Aa||no===null||((ve.flags&8)!==0?jf(ve,no)&&(Aa=!0):ve.tag===13&&K_(t,ve)&&jf(ve,no)&&(Aa=!0));var e=ve.flags;(e&256)!==0&&q_(t,ve),(e&512)===0||wi||(wi=!0,go(97,function(){return Pi(),null})),ve=ve.nextEffect}}function Pi(){if(Gs!==90){var t=97<Gs?97:Gs;return Gs=90,er(t,rv)}return!1}function iv(t,e){lc.push(e,t),wi||(wi=!0,go(97,function(){return Pi(),null}))}function gg(t,e){uc.push(e,t),wi||(wi=!0,go(97,function(){return Pi(),null}))}function rv(){if(eo===null)return!1;var t=eo;if(eo=null,(Ue&48)!==0)throw Error(se(331));var e=Ue;Ue|=32;var n=uc;uc=[];for(var i=0;i<n.length;i+=2){var r=n[i],s=n[i+1],o=r.destroy;if(r.destroy=void 0,typeof o=="function")try{o()}catch(l){if(s===null)throw Error(se(330));vi(s,l)}}for(n=lc,lc=[],i=0;i<n.length;i+=2){r=n[i],s=n[i+1];try{var a=r.create;r.destroy=a()}catch(l){if(s===null)throw Error(se(330));vi(s,l)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return Ue=e,In(),!0}function qd(t,e,n){e=cf(n,e),e=og(t,e,1),mi(t,e),e=Qt(),t=gl(t,1),t!==null&&(ll(t,1,e),fn(t,e))}function vi(t,e){if(t.tag===3)qd(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){qd(n,t,e);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pn===null||!Pn.has(i))){t=cf(e,t);var r=ag(n,t,1);if(mi(n,r),r=Qt(),n=gl(n,1),n!==null)ll(n,1,r),fn(n,r);else if(typeof i.componentDidCatch=="function"&&(Pn===null||!Pn.has(i)))try{i.componentDidCatch(e,t)}catch{}break}}n=n.return}}function sv(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Ht===t&&(Ut&n)===n&&(Rt===4||Rt===3&&(Ut&62914560)===Ut&&500>Dt()-hf?jr(t,0):df|=n),fn(t,e)}function ov(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)===0?e=1:(e&4)===0?e=Qr()===99?1:2:(Xn===0&&(Xn=us),e=Cr(62914560&~Xn),e===0&&(e=4194304))),n=Qt(),t=gl(t,e),t!==null&&(ll(t,e,n),fn(t,n))}var _g;_g=function(t,e,n){var i=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||Xt.current)En=!0;else if((n&i)!==0)En=(t.flags&16384)!==0;else{switch(En=!1,e.tag){case 3:Nd(e),Vl();break;case 5:wd(e);break;case 1:jt(e.type)&&Ea(e);break;case 4:$u(e,e.stateNode.containerInfo);break;case 10:i=e.memoizedProps.value;var r=e.type._context;ct(ka,r._currentValue),r._currentValue=i;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!==0?Id(t,e,n):(ct(ut,ut.current&1),e=Yn(t,e,n),e!==null?e.sibling:null);ct(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&64)!==0){if(i)return kd(t,e,n);e.flags|=64}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(ut,ut.current),i)break;return null;case 23:case 24:return e.lanes=0,Wl(t,e,n)}return Yn(t,e,n)}else En=!1;switch(e.lanes=0,e.tag){case 2:if(i=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,r=Zr(e,Nt.current),Vr(e,n),r=of(null,e,i,t,r,n),e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(i)){var s=!0;Ea(e)}else s=!1;e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,tf(e);var o=i.getDerivedStateFromProps;typeof o=="function"&&Va(e,i,o,t),r.updater=pl,e.stateNode=r,r._reactInternals=e,qu(e,i,t,n),e=Ju(null,e,i,!0,s,n)}else e.tag=0,Wt(null,e,r,n),e=e.child;return e;case 16:r=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=lv(r),t=vn(r,t),s){case 0:e=Qu(null,e,r,t,n);break e;case 1:e=Ud(null,e,r,t,n);break e;case 11:e=bd(null,e,r,t,n);break e;case 14:e=Dd(null,e,r,vn(r.type,t),i,n);break e}throw Error(se(306,r,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vn(i,r),Qu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vn(i,r),Ud(t,e,i,r,n);case 3:if(Nd(e),i=e.updateQueue,t===null||i===null)throw Error(se(282));if(i=e.pendingProps,r=e.memoizedState,r=r!==null?r.element:null,Gm(t,e),_o(e,i,null,n),i=e.memoizedState.element,i===r)Vl(),e=Yn(t,e,n);else{if(r=e.stateNode,(s=r.hydrate)&&(li=Gr(e.stateNode.containerInfo.firstChild),jn=e,s=Dn=!0),s){if(t=r.mutableSourceEagerHydrationData,t!=null)for(r=0;r<t.length;r+=2)s=t[r],s._workInProgressVersionPrimary=t[r+1],Wr.push(s);for(n=jm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else Wt(t,e,i,n),Vl();e=e.child}return e;case 5:return wd(e),t===null&&Ku(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Wu(i,r)?o=null:s!==null&&Wu(i,s)&&(e.flags|=16),ng(t,e),Wt(t,e,o,n),e.child;case 6:return t===null&&Ku(e),null;case 13:return Id(t,e,n);case 4:return $u(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Wa(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vn(i,r),bd(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value;var a=e.type._context;if(ct(ka,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=on(a,s)?0:(typeof i._calculateChangedBits=="function"?i._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===r.children&&!Xt.current){e=Yn(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var u=l.firstContext;u!==null;){if(u.context===i&&(u.observedBits&s)!==0){a.tag===1&&(u=pi(-1,n&-n),u.tag=2,mi(a,u)),a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Hm(a.return,n),l.lanes|=n;break}u=u.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,s=e.pendingProps,i=s.children,Vr(e,n),r=cn(r,s.unstable_observedBits),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return r=e.type,s=vn(r,e.pendingProps),s=vn(r.type,s),Dd(t,e,r,s,i,n);case 15:return tg(t,e,e.type,e.pendingProps,i,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vn(i,r),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,jt(i)?(t=!0,Ea(e)):t=!1,Vr(e,n),Wm(e,i,r),qu(e,i,r,n),Ju(null,e,i,!0,t,n);case 19:return kd(t,e,n);case 23:return Wl(t,e,n);case 24:return Wl(t,e,n)}throw Error(se(156,e.tag))};function av(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function an(t,e,n,i){return new av(t,e,n,i)}function mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lv(t){if(typeof t=="function")return mf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sl)return 11;if(t===ol)return 14}return 2}function Ai(t,e){var n=t.alternate;return n===null?(n=an(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ra(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")mf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case si:return Yr(n.children,r,s,e);case Yp:o=8,r|=16;break;case Pc:o=8,r|=1;break;case Xs:return t=an(12,n,e,r|8),t.elementType=Xs,t.type=Xs,t.lanes=s,t;case js:return t=an(13,n,e,r),t.type=js,t.elementType=js,t.lanes=s,t;case ba:return t=an(19,n,e,r),t.elementType=ba,t.lanes=s,t;case Fc:return gf(n,r,s,e);case Au:return t=an(24,n,e,r),t.elementType=Au,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case bc:o=10;break e;case Dc:o=9;break e;case sl:o=11;break e;case ol:o=14;break e;case Uc:o=16,i=null;break e;case Nc:o=22;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=an(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Yr(t,e,n,i){return t=an(7,t,i,e),t.lanes=n,t}function gf(t,e,n,i){return t=an(23,t,i,e),t.elementType=Fc,t.lanes=n,t}function Yl(t,e,n){return t=an(6,t,null,e),t.lanes=n,t}function ql(t,e,n){return e=an(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uv(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=bl(0),this.expirationTimes=bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bl(0),this.mutableSourceEagerHydrationData=null}function cv(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gi,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ja(t,e,n,i){var r=e.current,s=Qt(),o=gi(r);e:if(n){n=n._reactInternals;t:{if(sr(n)!==n||n.tag!==1)throw Error(se(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(jt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(se(171))}if(n.tag===1){var l=n.type;if(jt(l)){n=Nm(n,l,a);break e}}n=a}else n=Ti;return e.context===null?e.context=n:e.pendingContext=n,e=pi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),mi(r,e),_i(r,o,s),o}function $l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $d(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _f(t,e){$d(t,e),(t=t.alternate)&&$d(t,e)}function fv(){return null}function vf(t,e,n){var i=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new uv(t,e,n!=null&&n.hydrate===!0),e=an(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,tf(e),t[ls]=n.current,Lm(t.nodeType===8?t.parentNode:t),i)for(t=0;t<i.length;t++){e=i[t];var r=e._getVersion;r=r(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,r]:n.mutableSourceEagerHydrationData.push(e,r)}this._internalRoot=n}vf.prototype.render=function(t){Ja(t,this._internalRoot,null,null)};vf.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;Ja(null,t,null,function(){e[ls]=null})};function Lo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dv(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new vf(t,0,e?{hydrate:!0}:void 0)}function _l(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof r=="function"){var a=r;r=function(){var u=$l(o);a.call(u)}}Ja(e,o,t,r)}else{if(s=n._reactRootContainer=dv(n,i),o=s._internalRoot,typeof r=="function"){var l=r;r=function(){var u=$l(o);l.call(u)}}fg(function(){Ja(e,o,t,r)})}return $l(o)}lm=function(t){if(t.tag===13){var e=Qt();_i(t,4,e),_f(t,4)}};Hc=function(t){if(t.tag===13){var e=Qt();_i(t,67108864,e),_f(t,67108864)}};um=function(t){if(t.tag===13){var e=Qt(),n=gi(t);_i(t,n,e),_f(t,n)}};cm=function(t,e){return e()};Fu=function(t,e,n){switch(e){case"input":if(Cu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=dl(i);if(!r)throw Error(se(90));$p(i),Cu(i,r)}}}break;case"textarea":Zp(t,n);break;case"select":e=n.value,e!=null&&zr(t,!!n.multiple,e,!1)}};Bc=cg;rm=function(t,e,n,i,r){var s=Ue;Ue|=4;try{return er(98,t.bind(null,e,n,i,r))}finally{Ue=s,Ue===0&&(fs(),In())}};zc=function(){(Ue&49)===0&&(Q_(),Pi())};sm=function(t,e){var n=Ue;Ue|=2;try{return t(e)}finally{Ue=n,Ue===0&&(fs(),In())}};function vg(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lo(e))throw Error(se(200));return cv(t,e,null,n)}var hv={Events:[Ao,Nr,dl,nm,im,Pi,{current:!1}]},Ps={findFiberByHostInstance:Wi,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},pv={bundleType:Ps.bundleType,version:Ps.version,rendererPackageName:Ps.rendererPackageName,rendererConfig:Ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=am(t),t===null?null:t.stateNode},findFiberByHostInstance:Ps.findFiberByHostInstance||fv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{Zc=Xo.inject(pv),qi=Xo}catch{}}dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hv;dn.createPortal=vg;dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):Error(se(268,Object.keys(t)));return t=am(e),t=t===null?null:t.stateNode,t};dn.flushSync=function(t,e){var n=Ue;if((n&48)!==0)return t(e);Ue|=1;try{if(t)return er(99,t.bind(null,e))}finally{Ue=n,In()}};dn.hydrate=function(t,e,n){if(!Lo(e))throw Error(se(200));return _l(null,t,e,!0,n)};dn.render=function(t,e,n){if(!Lo(e))throw Error(se(200));return _l(null,t,e,!1,n)};dn.unmountComponentAtNode=function(t){if(!Lo(t))throw Error(se(40));return t._reactRootContainer?(fg(function(){_l(null,null,t,!1,function(){t._reactRootContainer=null,t[ls]=null})}),!0):!1};dn.unstable_batchedUpdates=cg;dn.unstable_createPortal=function(t,e){return vg(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};dn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Lo(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return _l(t,e,n,!1,i)};dn.version="17.0.2";function xg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xg)}catch(t){console.error(t)}}xg(),Vp.exports=dn;var mv=Vp.exports;/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_v=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),Kd=t=>{const e=_v(t);return e.charAt(0).toUpperCase()+e.slice(1)},yg=(...t)=>t.filter((e,n,i)=>Boolean(e)&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim(),vv=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=Be.exports.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>Be.exports.createElement("svg",{ref:l,...xv,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:yg("lucide",r),...!s&&!vv(a)&&{"aria-hidden":"true"},...a},[...o.map(([u,h])=>Be.exports.createElement(u,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=(t,e)=>{const n=Be.exports.forwardRef(({className:i,...r},s)=>Be.exports.createElement(yv,{ref:s,iconNode:e,className:yg(`lucide-${gv(Kd(t))}`,`lucide-${t}`,i),...r}));return n.displayName=Kd(t),n};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ev=bi("arrow-right",Sv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Tv=bi("arrow-up-right",Mv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Av=bi("github",wv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],Cv=bi("pause",Rv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Pv=bi("play",Lv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],jo=bi("rotate-ccw",bv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Uv=bi("volume-2",Dv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Iv=bi("volume-x",Nv);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xf="156",Fv=0,Zd=1,Ov=2,Sg=1,Bv=2,Vn=3,Ri=0,Yt=1,Rn=2,xi=0,qr=1,el=2,Qd=3,Jd=4,zv=5,Lr=100,kv=101,Hv=102,eh=103,th=104,Gv=200,Vv=201,Wv=202,Xv=203,Eg=204,Mg=205,jv=206,Yv=207,qv=208,$v=209,Kv=210,Zv=0,Qv=1,Jv=2,dc=3,ex=4,tx=5,nx=6,ix=7,Tg=0,rx=1,sx=2,yi=0,ox=1,ax=2,lx=3,wg=4,ux=5,Ag=300,es=301,ts=302,hc=303,pc=304,vl=306,mc=1e3,yn=1001,gc=1002,zt=1003,nh=1004,Kl=1005,sn=1006,cx=1007,So=1008,Si=1009,fx=1010,dx=1011,yf=1012,Rg=1013,ui=1014,ci=1015,Eo=1016,Cg=1017,Lg=1018,$i=1020,hx=1021,Sn=1023,px=1024,mx=1025,Ki=1026,ns=1027,gx=1028,Pg=1029,_x=1030,bg=1031,Dg=1033,Zl=33776,Ql=33777,Jl=33778,eu=33779,ih=35840,rh=35841,sh=35842,oh=35843,vx=36196,ah=37492,lh=37496,uh=37808,ch=37809,fh=37810,dh=37811,hh=37812,ph=37813,mh=37814,gh=37815,_h=37816,vh=37817,xh=37818,yh=37819,Sh=37820,Eh=37821,tu=36492,Mh=36494,Th=36495,xx=36283,wh=36284,Ah=36285,Rh=36286,Ug=3e3,Zi=3001,yx=3200,Sx=3201,Ng=0,Ex=1,Qi="",tt="srgb",Un="srgb-linear",xl="display-p3",nu=7680,Mx=519,Tx=512,wx=513,Ax=514,Rx=515,Cx=516,Lx=517,Px=518,bx=519,Ch=35044,Dx=35048,Lh="300 es",_c=1035,qn=2e3,tl=2001;class ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ph=1234567;const io=Math.PI/180,Mo=180/Math.PI;function hs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[t&255]+Lt[t>>8&255]+Lt[t>>16&255]+Lt[t>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[n&63|128]+Lt[n>>8&255]+"-"+Lt[n>>16&255]+Lt[n>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function kt(t,e,n){return Math.max(e,Math.min(n,t))}function Sf(t,e){return(t%e+e)%e}function Ux(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Nx(t,e,n){return t!==e?(n-t)/(e-t):0}function ro(t,e,n){return(1-n)*t+n*e}function Ix(t,e,n,i){return ro(t,e,1-Math.exp(-n*i))}function Fx(t,e=1){return e-Math.abs(Sf(t,e*2)-e)}function Ox(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Bx(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function zx(t,e){return t+Math.floor(Math.random()*(e-t+1))}function kx(t,e){return t+Math.random()*(e-t)}function Hx(t){return t*(.5-Math.random())}function Gx(t){t!==void 0&&(Ph=t);let e=Ph+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vx(t){return t*io}function Wx(t){return t*Mo}function vc(t){return(t&t-1)===0&&t!==0}function Xx(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function nl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function jx(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),h=o((e+i)/2),p=s((e-i)/2),d=o((e-i)/2),m=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*h,l*p,l*d,a*u);break;case"YZY":t.set(l*d,a*h,l*p,a*u);break;case"ZXZ":t.set(l*p,l*d,a*h,a*u);break;case"XZX":t.set(a*h,l*v,l*m,a*u);break;case"YXY":t.set(l*m,a*h,l*v,a*u);break;case"ZYZ":t.set(l*v,l*m,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Pr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ot(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const wn={DEG2RAD:io,RAD2DEG:Mo,generateUUID:hs,clamp:kt,euclideanModulo:Sf,mapLinear:Ux,inverseLerp:Nx,lerp:ro,damp:Ix,pingpong:Fx,smoothstep:Ox,smootherstep:Bx,randInt:zx,randFloat:kx,randFloatSpread:Hx,seededRandom:Gx,degToRad:Vx,radToDeg:Wx,isPowerOfTwo:vc,ceilPowerOfTwo:Xx,floorPowerOfTwo:nl,setQuaternionFromProperEuler:jx,normalize:Ot,denormalize:Pr};class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,s,o,a,l,u){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],h=i[4],p=i[7],d=i[2],m=i[5],v=i[8],x=r[0],f=r[3],c=r[6],g=r[1],_=r[4],y=r[7],A=r[2],w=r[5],C=r[8];return s[0]=o*x+a*g+l*A,s[3]=o*f+a*_+l*w,s[6]=o*c+a*y+l*C,s[1]=u*x+h*g+p*A,s[4]=u*f+h*_+p*w,s[7]=u*c+h*y+p*C,s[2]=d*x+m*g+v*A,s[5]=d*f+m*_+v*w,s[8]=d*c+m*y+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return n*o*h-n*a*u-i*s*h+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],p=h*o-a*u,d=a*l-h*s,m=u*s-o*l,v=n*p+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=p*x,e[1]=(r*u-h*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(h*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(iu.makeScale(e,n)),this}rotate(e){return this.premultiply(iu.makeRotation(-e)),this}translate(e,n){return this.premultiply(iu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const iu=new He;function Ig(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function il(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Yx(){const t=il("canvas");return t.style.display="block",t}const bh={};function so(t){t in bh||(bh[t]=!0,console.warn(t))}function $r(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ru(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const qx=new He().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),$x=new He().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Kx(t){return t.convertSRGBToLinear().applyMatrix3($x)}function Zx(t){return t.applyMatrix3(qx).convertLinearToSRGB()}const Qx={[Un]:t=>t,[tt]:t=>t.convertSRGBToLinear(),[xl]:Kx},Jx={[Un]:t=>t,[tt]:t=>t.convertLinearToSRGB(),[xl]:Zx},pn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Un},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Qx[e],r=Jx[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let ur;class Fg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ur===void 0&&(ur=il("canvas")),ur.width=e.width,ur.height=e.height;const i=ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ur}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const n=il("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=$r(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($r(n[i]/255)*255):n[i]=$r(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e1=0;class Og{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=hs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(su(r[o].image)):s.push(su(r[o]))}else s=su(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function su(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?Fg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t1=0;class Jt extends ds{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=yn,r=yn,s=sn,o=So,a=Sn,l=Si,u=Jt.DEFAULT_ANISOTROPY,h=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=hs(),this.name="",this.source=new Og(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(so("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Zi?tt:Qi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ag)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mc:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mc:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return so("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===tt?Zi:Ug}set encoding(e){so("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Zi?tt:Qi}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Ag;Jt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,n=0,i=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],h=l[4],p=l[8],d=l[1],m=l[5],v=l[9],x=l[2],f=l[6],c=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-x)<.01&&Math.abs(v-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+x)<.1&&Math.abs(v+f)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,y=(m+1)/2,A=(c+1)/2,w=(h+d)/4,C=(p+x)/4,I=(v+f)/4;return _>y&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=w/i,s=C/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=I/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=I/s),this.set(i,r,s,n),this}let g=Math.sqrt((f-v)*(f-v)+(p-x)*(p-x)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(f-v)/g,this.y=(p-x)/g,this.z=(d-h)/g,this.w=Math.acos((u+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class n1 extends ds{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new it(0,0,e,n),this.scissorTest=!1,this.viewport=new it(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(so("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Zi?tt:Qi),this.texture=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:sn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Og(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends n1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Bg extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class i1 extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3];const d=s[o+0],m=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=h,e[n+3]=p;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=v,e[n+3]=x;return}if(p!==x||l!==d||u!==m||h!==v){let f=1-a;const c=l*d+u*m+h*v+p*x,g=c>=0?1:-1,_=1-c*c;if(_>Number.EPSILON){const A=Math.sqrt(_),w=Math.atan2(A,c*g);f=Math.sin(f*w)/A,a=Math.sin(a*w)/A}const y=a*g;if(l=l*f+d*y,u=u*f+m*y,h=h*f+v*y,p=p*f+x*y,f===1-a){const A=1/Math.sqrt(l*l+u*u+h*h+p*p);l*=A,u*=A,h*=A,p*=A}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],h=i[r+3],p=s[o],d=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+h*p+l*m-u*d,e[n+1]=l*v+h*d+u*p-a*m,e[n+2]=u*v+h*m+a*d-l*p,e[n+3]=h*v-a*p-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),h=a(r/2),p=a(s/2),d=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*h*p+u*m*v,this._y=u*m*p-d*h*v,this._z=u*h*v+d*m*p,this._w=u*h*p-d*m*v;break;case"YXZ":this._x=d*h*p+u*m*v,this._y=u*m*p-d*h*v,this._z=u*h*v-d*m*p,this._w=u*h*p+d*m*v;break;case"ZXY":this._x=d*h*p-u*m*v,this._y=u*m*p+d*h*v,this._z=u*h*v+d*m*p,this._w=u*h*p-d*m*v;break;case"ZYX":this._x=d*h*p-u*m*v,this._y=u*m*p+d*h*v,this._z=u*h*v-d*m*p,this._w=u*h*p+d*m*v;break;case"YZX":this._x=d*h*p+u*m*v,this._y=u*m*p+d*h*v,this._z=u*h*v-d*m*p,this._w=u*h*p-d*m*v;break;case"XZY":this._x=d*h*p-u*m*v,this._y=u*m*p-d*h*v,this._z=u*h*v+d*m*p,this._w=u*h*p+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],h=n[6],p=n[10],d=i+a+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>p){const m=2*Math.sqrt(1+i-a-p);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>p){const m=2*Math.sqrt(1+a-i-p);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+o*a+r*u-s*l,this._y=r*h+o*l+s*a-i*u,this._z=s*h+o*u+i*l-r*a,this._w=o*h-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),p=Math.sin((1-n)*h)/u,d=Math.sin(n*h)/u;return this._w=o*p+this._w*d,this._x=i*p+this._x*d,this._y=r*p+this._y*d,this._z=s*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Dh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Dh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,h=l*i+a*n-s*r,p=l*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=u*l+d*-s+h*-a-p*-o,this.y=h*l+d*-o+p*-s-u*-a,this.z=p*l+d*-a+u*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ou.copy(this).projectOnVector(e),this.sub(ou)}reflect(e){return this.sub(ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ou=new N,Dh=new Po;class ar{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),cr.copy(e.boundingBox),cr.applyMatrix4(e.matrixWorld),this.union(cr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Bn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Bn)}else r.boundingBox===null&&r.computeBoundingBox(),cr.copy(r.boundingBox),cr.applyMatrix4(e.matrixWorld),this.union(cr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),Yo.subVectors(this.max,bs),fr.subVectors(e.a,bs),dr.subVectors(e.b,bs),hr.subVectors(e.c,bs),ei.subVectors(dr,fr),ti.subVectors(hr,dr),Ni.subVectors(fr,hr);let n=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-Ni.z,Ni.y,ei.z,0,-ei.x,ti.z,0,-ti.x,Ni.z,0,-Ni.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-Ni.y,Ni.x,0];return!au(n,fr,dr,hr,Yo)||(n=[1,0,0,0,1,0,0,0,1],!au(n,fr,dr,hr,Yo))?!1:(qo.crossVectors(ei,ti),n=[qo.x,qo.y,qo.z],au(n,fr,dr,hr,Yo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new N,new N,new N,new N,new N,new N,new N,new N],Bn=new N,cr=new ar,fr=new N,dr=new N,hr=new N,ei=new N,ti=new N,Ni=new N,bs=new N,Yo=new N,qo=new N,Ii=new N;function au(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ii.fromArray(t,s);const a=r.x*Math.abs(Ii.x)+r.y*Math.abs(Ii.y)+r.z*Math.abs(Ii.z),l=e.dot(Ii),u=n.dot(Ii),h=i.dot(Ii);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const r1=new ar,Ds=new N,lu=new N;class ps{constructor(e=new N,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):r1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);const n=Ds.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ds,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(lu)),this.expandByPoint(Ds.copy(e.center).sub(lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new N,uu=new N,$o=new N,ni=new N,cu=new N,Ko=new N,fu=new N;class zg{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,n),zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){uu.copy(e).add(n).multiplyScalar(.5),$o.copy(n).sub(e).normalize(),ni.copy(this.origin).sub(uu);const s=e.distanceTo(n)*.5,o=-this.direction.dot($o),a=ni.dot(this.direction),l=-ni.dot($o),u=ni.lengthSq(),h=Math.abs(1-o*o);let p,d,m,v;if(h>0)if(p=o*l-a,d=o*a-l,v=s*h,p>=0)if(d>=-v)if(d<=v){const x=1/h;p*=x,d*=x,m=p*(p+o*d+2*a)+d*(o*p+d+2*l)+u}else d=s,p=Math.max(0,-(o*d+a)),m=-p*p+d*(d+2*l)+u;else d=-s,p=Math.max(0,-(o*d+a)),m=-p*p+d*(d+2*l)+u;else d<=-v?(p=Math.max(0,-(-o*s+a)),d=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+u):d<=v?(p=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(p=Math.max(0,-(o*s+a)),d=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+u);else d=o>0?-s:s,p=Math.max(0,-(o*d+a)),m=-p*p+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(uu).addScaledVector($o,d),m}intersectSphere(e,n){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),r=zn.dot(zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(a=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,n,i,r,s){cu.subVectors(n,e),Ko.subVectors(i,e),fu.crossVectors(cu,Ko);let o=this.direction.dot(fu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,e);const l=a*this.direction.dot(Ko.crossVectors(ni,Ko));if(l<0)return null;const u=a*this.direction.dot(cu.cross(ni));if(u<0||l+u>o)return null;const h=-a*ni.dot(fu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,n,i,r,s,o,a,l,u,h,p,d,m,v,x,f){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,h,p,d,m,v,x,f)}set(e,n,i,r,s,o,a,l,u,h,p,d,m,v,x,f){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=h,c[10]=p,c[14]=d,c[3]=m,c[7]=v,c[11]=x,c[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/pr.setFromMatrixColumn(e,0).length(),s=1/pr.setFromMatrixColumn(e,1).length(),o=1/pr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=o*h,m=o*p,v=a*h,x=a*p;n[0]=l*h,n[4]=-l*p,n[8]=u,n[1]=m+v*u,n[5]=d-x*u,n[9]=-a*l,n[2]=x-d*u,n[6]=v+m*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*h,m=l*p,v=u*h,x=u*p;n[0]=d+x*a,n[4]=v*a-m,n[8]=o*u,n[1]=o*p,n[5]=o*h,n[9]=-a,n[2]=m*a-v,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*h,m=l*p,v=u*h,x=u*p;n[0]=d-x*a,n[4]=-o*p,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*h,n[9]=x-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*h,m=o*p,v=a*h,x=a*p;n[0]=l*h,n[4]=v*u-m,n[8]=d*u+x,n[1]=l*p,n[5]=x*u+d,n[9]=m*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,v=a*l,x=a*u;n[0]=l*h,n[4]=x-d*p,n[8]=v*p+m,n[1]=p,n[5]=o*h,n[9]=-a*h,n[2]=-u*h,n[6]=m*p+v,n[10]=d-x*p}else if(e.order==="XZY"){const d=o*l,m=o*u,v=a*l,x=a*u;n[0]=l*h,n[4]=-p,n[8]=u*h,n[1]=d*p+x,n[5]=o*h,n[9]=m*p-v,n[2]=v*p-m,n[6]=a*h,n[10]=x*p+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s1,e,o1)}lookAt(e,n,i){const r=this.elements;return $t.subVectors(e,n),$t.lengthSq()===0&&($t.z=1),$t.normalize(),ii.crossVectors(i,$t),ii.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),ii.crossVectors(i,$t)),ii.normalize(),Zo.crossVectors($t,ii),r[0]=ii.x,r[4]=Zo.x,r[8]=$t.x,r[1]=ii.y,r[5]=Zo.y,r[9]=$t.y,r[2]=ii.z,r[6]=Zo.z,r[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],h=i[1],p=i[5],d=i[9],m=i[13],v=i[2],x=i[6],f=i[10],c=i[14],g=i[3],_=i[7],y=i[11],A=i[15],w=r[0],C=r[4],I=r[8],S=r[12],R=r[1],Q=r[5],J=r[9],D=r[13],G=r[2],k=r[6],$=r[10],W=r[14],Y=r[3],te=r[7],K=r[11],L=r[15];return s[0]=o*w+a*R+l*G+u*Y,s[4]=o*C+a*Q+l*k+u*te,s[8]=o*I+a*J+l*$+u*K,s[12]=o*S+a*D+l*W+u*L,s[1]=h*w+p*R+d*G+m*Y,s[5]=h*C+p*Q+d*k+m*te,s[9]=h*I+p*J+d*$+m*K,s[13]=h*S+p*D+d*W+m*L,s[2]=v*w+x*R+f*G+c*Y,s[6]=v*C+x*Q+f*k+c*te,s[10]=v*I+x*J+f*$+c*K,s[14]=v*S+x*D+f*W+c*L,s[3]=g*w+_*R+y*G+A*Y,s[7]=g*C+_*Q+y*k+A*te,s[11]=g*I+_*J+y*$+A*K,s[15]=g*S+_*D+y*W+A*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],p=e[6],d=e[10],m=e[14],v=e[3],x=e[7],f=e[11],c=e[15];return v*(+s*l*p-r*u*p-s*a*d+i*u*d+r*a*m-i*l*m)+x*(+n*l*m-n*u*d+s*o*d-r*o*m+r*u*h-s*l*h)+f*(+n*u*p-n*a*m-s*o*p+i*o*m+s*a*h-i*u*h)+c*(-r*a*h-n*l*p+n*a*d+r*o*p-i*o*d+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],p=e[9],d=e[10],m=e[11],v=e[12],x=e[13],f=e[14],c=e[15],g=p*f*u-x*d*u+x*l*m-a*f*m-p*l*c+a*d*c,_=v*d*u-h*f*u-v*l*m+o*f*m+h*l*c-o*d*c,y=h*x*u-v*p*u+v*a*m-o*x*m-h*a*c+o*p*c,A=v*p*l-h*x*l-v*a*d+o*x*d+h*a*f-o*p*f,w=n*g+i*_+r*y+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=g*C,e[1]=(x*d*s-p*f*s-x*r*m+i*f*m+p*r*c-i*d*c)*C,e[2]=(a*f*s-x*l*s+x*r*u-i*f*u-a*r*c+i*l*c)*C,e[3]=(p*l*s-a*d*s-p*r*u+i*d*u+a*r*m-i*l*m)*C,e[4]=_*C,e[5]=(h*f*s-v*d*s+v*r*m-n*f*m-h*r*c+n*d*c)*C,e[6]=(v*l*s-o*f*s-v*r*u+n*f*u+o*r*c-n*l*c)*C,e[7]=(o*d*s-h*l*s+h*r*u-n*d*u-o*r*m+n*l*m)*C,e[8]=y*C,e[9]=(v*p*s-h*x*s-v*i*m+n*x*m+h*i*c-n*p*c)*C,e[10]=(o*x*s-v*a*s+v*i*u-n*x*u-o*i*c+n*a*c)*C,e[11]=(h*a*s-o*p*s-h*i*u+n*p*u+o*i*m-n*a*m)*C,e[12]=A*C,e[13]=(h*x*r-v*p*r+v*i*d-n*x*d-h*i*f+n*p*f)*C,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*f-n*a*f)*C,e[15]=(o*p*r-h*a*r+h*i*l-n*p*l-o*i*d+n*a*d)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,h=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,h*a+i,h*l-r*o,0,u*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,h=o+o,p=a+a,d=s*u,m=s*h,v=s*p,x=o*h,f=o*p,c=a*p,g=l*u,_=l*h,y=l*p,A=i.x,w=i.y,C=i.z;return r[0]=(1-(x+c))*A,r[1]=(m+y)*A,r[2]=(v-_)*A,r[3]=0,r[4]=(m-y)*w,r[5]=(1-(d+c))*w,r[6]=(f+g)*w,r[7]=0,r[8]=(v+_)*C,r[9]=(f-g)*C,r[10]=(1-(d+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=pr.set(r[0],r[1],r[2]).length();const o=pr.set(r[4],r[5],r[6]).length(),a=pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],mn.copy(this);const u=1/s,h=1/o,p=1/a;return mn.elements[0]*=u,mn.elements[1]*=u,mn.elements[2]*=u,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=p,mn.elements[9]*=p,mn.elements[10]*=p,n.setFromRotationMatrix(mn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=qn){const l=this.elements,u=2*s/(n-e),h=2*s/(i-r),p=(n+e)/(n-e),d=(i+r)/(i-r);let m,v;if(a===qn)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===tl)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=qn){const l=this.elements,u=1/(n-e),h=1/(i-r),p=1/(o-s),d=(n+e)*u,m=(i+r)*h;let v,x;if(a===qn)v=(o+s)*p,x=-2*p;else if(a===tl)v=s*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const pr=new N,mn=new rt,s1=new N(0,0,0),o1=new N(1,1,1),ii=new N,Zo=new N,$t=new N,Uh=new rt,Nh=new Po;class is{constructor(e=0,n=0,i=0,r=is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],h=r[9],p=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class kg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let a1=0;const Ih=new N,mr=new Po,kn=new rt,Qo=new N,Us=new N,l1=new N,u1=new Po,Fh=new N(1,0,0),Oh=new N(0,1,0),Bh=new N(0,0,1),c1={type:"added"},f1={type:"removed"};class Tt extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new N,n=new is,i=new Po,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new He}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new kg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return mr.setFromAxisAngle(e,n),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,n){return mr.setFromAxisAngle(e,n),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(Fh,e)}rotateY(e){return this.rotateOnAxis(Oh,e)}rotateZ(e){return this.rotateOnAxis(Bh,e)}translateOnAxis(e,n){return Ih.copy(e).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Fh,e)}translateY(e){return this.translateOnAxis(Oh,e)}translateZ(e){return this.translateOnAxis(Bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Qo.copy(e):Qo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Us,Qo,this.up):kn.lookAt(Qo,Us,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),mr.setFromRotationMatrix(kn),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(c1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(f1)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,l1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,u1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),p=o(e.shapes),d=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new N(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new N,Hn=new N,du=new N,Gn=new N,gr=new N,_r=new N,zh=new N,hu=new N,pu=new N,mu=new N;let Jo=!1;class xn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),gn.subVectors(e,n),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){gn.subVectors(r,n),Hn.subVectors(i,n),du.subVectors(e,n);const o=gn.dot(gn),a=gn.dot(Hn),l=gn.dot(du),u=Hn.dot(Hn),h=Hn.dot(du),p=o*u-a*a;if(p===0)return s.set(-2,-1,-1);const d=1/p,m=(u*l-a*h)*d,v=(o*h-a*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Gn),Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getUV(e,n,i,r,s,o,a,l){return Jo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jo=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Gn),l.setScalar(0),l.addScaledVector(s,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l}static isFrontFacing(e,n,i,r){return gn.subVectors(i,n),Hn.subVectors(e,n),gn.cross(Hn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),gn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return xn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Jo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jo=!0),xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;gr.subVectors(r,i),_r.subVectors(s,i),hu.subVectors(e,i);const l=gr.dot(hu),u=_r.dot(hu);if(l<=0&&u<=0)return n.copy(i);pu.subVectors(e,r);const h=gr.dot(pu),p=_r.dot(pu);if(h>=0&&p<=h)return n.copy(r);const d=l*p-h*u;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(gr,o);mu.subVectors(e,s);const m=gr.dot(mu),v=_r.dot(mu);if(v>=0&&m<=v)return n.copy(s);const x=m*u-l*v;if(x<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(_r,a);const f=h*v-m*p;if(f<=0&&p-h>=0&&m-v>=0)return zh.subVectors(s,r),a=(p-h)/(p-h+(m-v)),n.copy(r).addScaledVector(zh,a);const c=1/(f+x+d);return o=x*c,a=d*c,n.copy(i).addScaledVector(gr,o).addScaledVector(_r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let d1=0;class ms extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=qr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eg,this.blendDst=Mg,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=dc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nu,this.stencilZFail=nu,this.stencilZPass=nu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qr&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},ea={h:0,s:0,l:0};function gu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=pn.workingColorSpace){return this.r=e,this.g=n,this.b=i,pn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=pn.workingColorSpace){if(e=Sf(e,1),n=kt(n,0,1),i=kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=gu(o,s,e+1/3),this.g=gu(o,s,e),this.b=gu(o,s,e-1/3)}return pn.toWorkingColorSpace(this,r),this}setStyle(e,n=tt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=tt){const i=Hg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}copyLinearToSRGB(e){return this.r=ru(e.r),this.g=ru(e.g),this.b=ru(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return pn.fromWorkingColorSpace(Pt.copy(this),e),Math.round(kt(Pt.r*255,0,255))*65536+Math.round(kt(Pt.g*255,0,255))*256+Math.round(kt(Pt.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=pn.workingColorSpace){pn.fromWorkingColorSpace(Pt.copy(this),n);const i=Pt.r,r=Pt.g,s=Pt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const p=o-a;switch(u=h<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=pn.workingColorSpace){return pn.fromWorkingColorSpace(Pt.copy(this),n),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=tt){pn.fromWorkingColorSpace(Pt.copy(this),e);const n=Pt.r,i=Pt.g,r=Pt.b;return e!==tt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(_n),_n.h+=e,_n.s+=n,_n.l+=i,this.setHSL(_n.h,_n.s,_n.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(_n),e.getHSL(ea);const i=ro(_n.h,ea.h,n),r=ro(_n.s,ea.s,n),s=ro(_n.l,ea.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new je;je.NAMES=Hg;class Gg extends ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new N,ta=new $e;class un{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ch,this.updateRange={offset:0,count:-1},this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ta.fromBufferAttribute(this,n),ta.applyMatrix3(e),this.setXY(n,ta.x,ta.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Pr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Pr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Pr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Pr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Pr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ch&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Vg extends un{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Wg extends un{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Kn extends un{constructor(e,n,i){super(new Float32Array(e),n,i)}}let h1=0;const nn=new rt,_u=new Tt,vr=new N,Kt=new ar,Ns=new ar,Mt=new N;class Nn extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ig(e)?Wg:Vg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,n,i){return nn.makeTranslation(e,n,i),this.applyMatrix4(nn),this}scale(e,n,i){return nn.makeScale(e,n,i),this.applyMatrix4(nn),this}lookAt(e){return _u.lookAt(e),_u.updateMatrix(),this.applyMatrix4(_u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Kn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(Kt.min,Ns.min),Kt.expandByPoint(Mt),Mt.addVectors(Kt.max,Ns.max),Kt.expandByPoint(Mt)):(Kt.expandByPoint(Ns.min),Kt.expandByPoint(Ns.max))}Kt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Mt.fromBufferAttribute(a,u),l&&(vr.fromBufferAttribute(e,u),Mt.add(vr)),r=Math.max(r,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],h=[];for(let R=0;R<a;R++)u[R]=new N,h[R]=new N;const p=new N,d=new N,m=new N,v=new $e,x=new $e,f=new $e,c=new N,g=new N;function _(R,Q,J){p.fromArray(r,R*3),d.fromArray(r,Q*3),m.fromArray(r,J*3),v.fromArray(o,R*2),x.fromArray(o,Q*2),f.fromArray(o,J*2),d.sub(p),m.sub(p),x.sub(v),f.sub(v);const D=1/(x.x*f.y-f.x*x.y);!isFinite(D)||(c.copy(d).multiplyScalar(f.y).addScaledVector(m,-x.y).multiplyScalar(D),g.copy(m).multiplyScalar(x.x).addScaledVector(d,-f.x).multiplyScalar(D),u[R].add(c),u[Q].add(c),u[J].add(c),h[R].add(g),h[Q].add(g),h[J].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let R=0,Q=y.length;R<Q;++R){const J=y[R],D=J.start,G=J.count;for(let k=D,$=D+G;k<$;k+=3)_(i[k+0],i[k+1],i[k+2])}const A=new N,w=new N,C=new N,I=new N;function S(R){C.fromArray(s,R*3),I.copy(C);const Q=u[R];A.copy(Q),A.sub(C.multiplyScalar(C.dot(Q))).normalize(),w.crossVectors(I,Q);const D=w.dot(h[R])<0?-1:1;l[R*4]=A.x,l[R*4+1]=A.y,l[R*4+2]=A.z,l[R*4+3]=D}for(let R=0,Q=y.length;R<Q;++R){const J=y[R],D=J.start,G=J.count;for(let k=D,$=D+G;k<$;k+=3)S(i[k+0]),S(i[k+1]),S(i[k+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,u=new N,h=new N,p=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),x=e.getX(d+1),f=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,f),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,f),a.add(h),l.add(h),u.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(f,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Mt.fromBufferAttribute(e,n),Mt.normalize(),e.setXYZ(n,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const u=a.array,h=a.itemSize,p=a.normalized,d=new u.constructor(l.length*h);let m=0,v=0;for(let x=0,f=l.length;x<f;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let c=0;c<h;c++)d[v++]=u[m++]}return new un(d,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Nn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let h=0,p=u.length;h<p;h++){const d=u[h],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let p=0,d=u.length;p<d;p++){const m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let d=0,m=p.length;d<m;d++)h.push(p[d].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kh=new rt,Fi=new zg,na=new ps,Hh=new N,xr=new N,yr=new N,Sr=new N,vu=new N,ia=new N,ra=new $e,sa=new $e,oa=new $e,Gh=new N,Vh=new N,Wh=new N,aa=new N,la=new N;class Mn extends Tt{constructor(e=new Nn,n=new Gg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ia.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=a[l],p=s[l];h!==0&&(vu.fromBufferAttribute(p,e),o?ia.addScaledVector(vu,h):ia.addScaledVector(vu.sub(n),h))}n.add(ia)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(s),Fi.copy(e.ray).recast(e.near),!(na.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(na,Hh)===null||Fi.origin.distanceToSquared(Hh)>(e.far-e.near)**2))&&(kh.copy(s).invert(),Fi.copy(e.ray).applyMatrix4(kh),!(i.boundingBox!==null&&Fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Fi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const f=d[v],c=o[f.materialIndex],g=Math.max(f.start,m.start),_=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let y=g,A=_;y<A;y+=3){const w=a.getX(y),C=a.getX(y+1),I=a.getX(y+2);r=ua(this,c,e,i,u,h,p,w,C,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let f=v,c=x;f<c;f+=3){const g=a.getX(f),_=a.getX(f+1),y=a.getX(f+2);r=ua(this,o,e,i,u,h,p,g,_,y),r&&(r.faceIndex=Math.floor(f/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const f=d[v],c=o[f.materialIndex],g=Math.max(f.start,m.start),_=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let y=g,A=_;y<A;y+=3){const w=y,C=y+1,I=y+2;r=ua(this,c,e,i,u,h,p,w,C,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let f=v,c=x;f<c;f+=3){const g=f,_=f+1,y=f+2;r=ua(this,o,e,i,u,h,p,g,_,y),r&&(r.faceIndex=Math.floor(f/3),n.push(r))}}}}function p1(t,e,n,i,r,s,o,a){let l;if(e.side===Yt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ri,a),l===null)return null;la.copy(a),la.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(la);return u<n.near||u>n.far?null:{distance:u,point:la.clone(),object:t}}function ua(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,xr),t.getVertexPosition(l,yr),t.getVertexPosition(u,Sr);const h=p1(t,e,n,i,xr,yr,Sr,aa);if(h){r&&(ra.fromBufferAttribute(r,a),sa.fromBufferAttribute(r,l),oa.fromBufferAttribute(r,u),h.uv=xn.getInterpolation(aa,xr,yr,Sr,ra,sa,oa,new $e)),s&&(ra.fromBufferAttribute(s,a),sa.fromBufferAttribute(s,l),oa.fromBufferAttribute(s,u),h.uv1=xn.getInterpolation(aa,xr,yr,Sr,ra,sa,oa,new $e),h.uv2=h.uv1),o&&(Gh.fromBufferAttribute(o,a),Vh.fromBufferAttribute(o,l),Wh.fromBufferAttribute(o,u),h.normal=xn.getInterpolation(aa,xr,yr,Sr,Gh,Vh,Wh,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:l,c:u,normal:new N,materialIndex:0};xn.getNormal(xr,yr,Sr,p.normal),h.face=p}return h}class gs extends Nn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],h=[],p=[];let d=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Kn(u,3)),this.setAttribute("normal",new Kn(h,3)),this.setAttribute("uv",new Kn(p,2));function v(x,f,c,g,_,y,A,w,C,I,S){const R=y/C,Q=A/I,J=y/2,D=A/2,G=w/2,k=C+1,$=I+1;let W=0,Y=0;const te=new N;for(let K=0;K<$;K++){const L=K*Q-D;for(let b=0;b<k;b++){const q=b*R-J;te[x]=q*g,te[f]=L*_,te[c]=G,u.push(te.x,te.y,te.z),te[x]=0,te[f]=0,te[c]=w>0?1:-1,h.push(te.x,te.y,te.z),p.push(b/C),p.push(1-K/I),W+=1}}for(let K=0;K<I;K++)for(let L=0;L<C;L++){const b=d+L+k*K,q=d+L+k*(K+1),ne=d+(L+1)+k*(K+1),re=d+(L+1)+k*K;l.push(b,q,re),l.push(q,ne,re),Y+=6}a.addGroup(m,Y,S),m+=Y,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Bt(t){const e={};for(let n=0;n<t.length;n++){const i=rs(t[n]);for(const r in i)e[r]=i[r]}return e}function m1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Xg(t){return t.getRenderTarget()===null?t.outputColorSpace:Un}const g1={clone:rs,merge:Bt};var _1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_1,this.fragmentShader=v1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=m1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class jg extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=qn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Zt extends jg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Mo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(io*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Er=-90,Mr=1;class x1 extends Tt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Zt(Er,Mr,e,n);r.layers=this.layers,this.add(r);const s=new Zt(Er,Mr,e,n);s.layers=this.layers,this.add(s);const o=new Zt(Er,Mr,e,n);o.layers=this.layers,this.add(o);const a=new Zt(Er,Mr,e,n);a.layers=this.layers,this.add(a);const l=new Zt(Er,Mr,e,n);l.layers=this.layers,this.add(l);const u=new Zt(Er,Mr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,u]=this.children,h=e.getRenderTarget(),p=e.xr.enabled;e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Yg extends Jt{constructor(e,n,i,r,s,o,a,l,u,h){e=e!==void 0?e:[],n=n!==void 0?n:es,super(e,n,i,r,s,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class y1 extends nr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(so("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Zi?tt:Qi),this.texture=new Yg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:sn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new gs(5,5,5),s=new Ci({name:"CubemapFromEquirect",uniforms:rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:xi});s.uniforms.tEquirect.value=n;const o=new Mn(r,s),a=n.minFilter;return n.minFilter===So&&(n.minFilter=sn),new x1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const xu=new N,S1=new N,E1=new He;class zi{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=xu.subVectors(i,n).cross(S1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(xu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||E1.getNormalMatrix(e),r=this.coplanarPoint(xu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new ps,ca=new N;class Ef{constructor(e=new zi,n=new zi,i=new zi,r=new zi,s=new zi,o=new zi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=qn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],h=r[5],p=r[6],d=r[7],m=r[8],v=r[9],x=r[10],f=r[11],c=r[12],g=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,f-m,y-c).normalize(),i[1].setComponents(l+s,d+u,f+m,y+c).normalize(),i[2].setComponents(l+o,d+h,f+v,y+g).normalize(),i[3].setComponents(l-o,d-h,f-v,y-g).normalize(),i[4].setComponents(l-a,d-p,f-x,y-_).normalize(),n===qn)i[5].setComponents(l+a,d+p,f+x,y+_).normalize();else if(n===tl)i[5].setComponents(a,p,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Oi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ca.x=r.normal.x>0?e.max.x:e.min.x,ca.y=r.normal.y>0?e.max.y:e.min.y,ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qg(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function M1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,h){const p=u.array,d=u.usage,m=t.createBuffer();t.bindBuffer(h,m),t.bufferData(h,p,d),u.onUploadCallback();let v;if(p instanceof Float32Array)v=t.FLOAT;else if(p instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(p instanceof Int16Array)v=t.SHORT;else if(p instanceof Uint32Array)v=t.UNSIGNED_INT;else if(p instanceof Int32Array)v=t.INT;else if(p instanceof Int8Array)v=t.BYTE;else if(p instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:v,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version}}function s(u,h,p){const d=h.array,m=h.updateRange;t.bindBuffer(p,u),m.count===-1?t.bufferSubData(p,0,d):(n?t.bufferSubData(p,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(p,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h&&(t.deleteBuffer(h.buffer),i.delete(u))}function l(u,h){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const p=i.get(u);p===void 0?i.set(u,r(u,h)):p.version<u.version&&(s(p.buffer,u,h),p.version=u.version)}return{get:o,remove:a,update:l}}class Mf extends Nn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,h=l+1,p=e/a,d=n/l,m=[],v=[],x=[],f=[];for(let c=0;c<h;c++){const g=c*d-o;for(let _=0;_<u;_++){const y=_*p-s;v.push(y,-g,0),x.push(0,0,1),f.push(_/a),f.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const _=g+u*c,y=g+u*(c+1),A=g+1+u*(c+1),w=g+1+u*c;m.push(_,y,w),m.push(y,A,w)}this.setIndex(m),this.setAttribute("position",new Kn(v,3)),this.setAttribute("normal",new Kn(x,3)),this.setAttribute("uv",new Kn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mf(e.width,e.height,e.widthSegments,e.heightSegments)}}var T1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,A1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,L1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,b1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,I1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,F1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,W1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,X1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,j1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Y1=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,q1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q1="gl_FragColor = linearToOutputTexel( gl_FragColor );",J1=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ey=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ty=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ny=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ay=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,py=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,my=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_y=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Sy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ey=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,My=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ty=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,wy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ay=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ry=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ly=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Py=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,by=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ny=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Iy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Oy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,By=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,ky=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$y=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ky=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,rS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,uS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ES=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,LS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,US=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IS=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$S=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,JS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:T1,alphahash_pars_fragment:w1,alphamap_fragment:A1,alphamap_pars_fragment:R1,alphatest_fragment:C1,alphatest_pars_fragment:L1,aomap_fragment:P1,aomap_pars_fragment:b1,begin_vertex:D1,beginnormal_vertex:U1,bsdfs:N1,iridescence_fragment:I1,bumpmap_pars_fragment:F1,clipping_planes_fragment:O1,clipping_planes_pars_fragment:B1,clipping_planes_pars_vertex:z1,clipping_planes_vertex:k1,color_fragment:H1,color_pars_fragment:G1,color_pars_vertex:V1,color_vertex:W1,common:X1,cube_uv_reflection_fragment:j1,defaultnormal_vertex:Y1,displacementmap_pars_vertex:q1,displacementmap_vertex:$1,emissivemap_fragment:K1,emissivemap_pars_fragment:Z1,colorspace_fragment:Q1,colorspace_pars_fragment:J1,envmap_fragment:ey,envmap_common_pars_fragment:ty,envmap_pars_fragment:ny,envmap_pars_vertex:iy,envmap_physical_pars_fragment:my,envmap_vertex:ry,fog_vertex:sy,fog_pars_vertex:oy,fog_fragment:ay,fog_pars_fragment:ly,gradientmap_pars_fragment:uy,lightmap_fragment:cy,lightmap_pars_fragment:fy,lights_lambert_fragment:dy,lights_lambert_pars_fragment:hy,lights_pars_begin:py,lights_toon_fragment:gy,lights_toon_pars_fragment:_y,lights_phong_fragment:vy,lights_phong_pars_fragment:xy,lights_physical_fragment:yy,lights_physical_pars_fragment:Sy,lights_fragment_begin:Ey,lights_fragment_maps:My,lights_fragment_end:Ty,logdepthbuf_fragment:wy,logdepthbuf_pars_fragment:Ay,logdepthbuf_pars_vertex:Ry,logdepthbuf_vertex:Cy,map_fragment:Ly,map_pars_fragment:Py,map_particle_fragment:by,map_particle_pars_fragment:Dy,metalnessmap_fragment:Uy,metalnessmap_pars_fragment:Ny,morphcolor_vertex:Iy,morphnormal_vertex:Fy,morphtarget_pars_vertex:Oy,morphtarget_vertex:By,normal_fragment_begin:zy,normal_fragment_maps:ky,normal_pars_fragment:Hy,normal_pars_vertex:Gy,normal_vertex:Vy,normalmap_pars_fragment:Wy,clearcoat_normal_fragment_begin:Xy,clearcoat_normal_fragment_maps:jy,clearcoat_pars_fragment:Yy,iridescence_pars_fragment:qy,opaque_fragment:$y,packing:Ky,premultiplied_alpha_fragment:Zy,project_vertex:Qy,dithering_fragment:Jy,dithering_pars_fragment:eS,roughnessmap_fragment:tS,roughnessmap_pars_fragment:nS,shadowmap_pars_fragment:iS,shadowmap_pars_vertex:rS,shadowmap_vertex:sS,shadowmask_pars_fragment:oS,skinbase_vertex:aS,skinning_pars_vertex:lS,skinning_vertex:uS,skinnormal_vertex:cS,specularmap_fragment:fS,specularmap_pars_fragment:dS,tonemapping_fragment:hS,tonemapping_pars_fragment:pS,transmission_fragment:mS,transmission_pars_fragment:gS,uv_pars_fragment:_S,uv_pars_vertex:vS,uv_vertex:xS,worldpos_vertex:yS,background_vert:SS,background_frag:ES,backgroundCube_vert:MS,backgroundCube_frag:TS,cube_vert:wS,cube_frag:AS,depth_vert:RS,depth_frag:CS,distanceRGBA_vert:LS,distanceRGBA_frag:PS,equirect_vert:bS,equirect_frag:DS,linedashed_vert:US,linedashed_frag:NS,meshbasic_vert:IS,meshbasic_frag:FS,meshlambert_vert:OS,meshlambert_frag:BS,meshmatcap_vert:zS,meshmatcap_frag:kS,meshnormal_vert:HS,meshnormal_frag:GS,meshphong_vert:VS,meshphong_frag:WS,meshphysical_vert:XS,meshphysical_frag:jS,meshtoon_vert:YS,meshtoon_frag:qS,points_vert:$S,points_frag:KS,shadow_vert:ZS,shadow_frag:QS,sprite_vert:JS,sprite_frag:eE},le={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},An={basic:{uniforms:Bt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Bt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new je(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Bt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Bt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Bt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new je(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Bt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Bt([le.points,le.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Bt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Bt([le.common,le.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Bt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Bt([le.sprite,le.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Bt([le.common,le.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Bt([le.lights,le.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};An.physical={uniforms:Bt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const fa={r:0,b:0,g:0};function tE(t,e,n,i,r,s,o){const a=new je(0);let l=s===!0?0:1,u,h,p=null,d=0,m=null;function v(f,c){let g=!1,_=c.isScene===!0?c.background:null;_&&_.isTexture&&(_=(c.backgroundBlurriness>0?n:e).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),g=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===vl)?(h===void 0&&(h=new Mn(new gs(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:rs(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,h.material.toneMapped=_.colorSpace!==tt,(p!==_||d!==_.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,p=_,d=_.version,m=t.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Mn(new Mf(2,2),new Ci({name:"BackgroundMaterial",uniforms:rs(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=_.colorSpace!==tt,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(p!==_||d!==_.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,p=_,d=_.version,m=t.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null))}function x(f,c){f.getRGB(fa,Xg(t)),i.buffers.color.setClear(fa.r,fa.g,fa.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(f,c=1){a.set(f),l=c,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,x(a,l)},render:v}}function nE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=f(null);let u=l,h=!1;function p(G,k,$,W,Y){let te=!1;if(o){const K=x(W,$,k);u!==K&&(u=K,m(u.object)),te=c(G,W,$,Y),te&&g(G,W,$,Y)}else{const K=k.wireframe===!0;(u.geometry!==W.id||u.program!==$.id||u.wireframe!==K)&&(u.geometry=W.id,u.program=$.id,u.wireframe=K,te=!0)}Y!==null&&n.update(Y,t.ELEMENT_ARRAY_BUFFER),(te||h)&&(h=!1,I(G,k,$,W),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(G){return i.isWebGL2?t.bindVertexArray(G):s.bindVertexArrayOES(G)}function v(G){return i.isWebGL2?t.deleteVertexArray(G):s.deleteVertexArrayOES(G)}function x(G,k,$){const W=$.wireframe===!0;let Y=a[G.id];Y===void 0&&(Y={},a[G.id]=Y);let te=Y[k.id];te===void 0&&(te={},Y[k.id]=te);let K=te[W];return K===void 0&&(K=f(d()),te[W]=K),K}function f(G){const k=[],$=[],W=[];for(let Y=0;Y<r;Y++)k[Y]=0,$[Y]=0,W[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:$,attributeDivisors:W,object:G,attributes:{},index:null}}function c(G,k,$,W){const Y=u.attributes,te=k.attributes;let K=0;const L=$.getAttributes();for(const b in L)if(L[b].location>=0){const ne=Y[b];let re=te[b];if(re===void 0&&(b==="instanceMatrix"&&G.instanceMatrix&&(re=G.instanceMatrix),b==="instanceColor"&&G.instanceColor&&(re=G.instanceColor)),ne===void 0||ne.attribute!==re||re&&ne.data!==re.data)return!0;K++}return u.attributesNum!==K||u.index!==W}function g(G,k,$,W){const Y={},te=k.attributes;let K=0;const L=$.getAttributes();for(const b in L)if(L[b].location>=0){let ne=te[b];ne===void 0&&(b==="instanceMatrix"&&G.instanceMatrix&&(ne=G.instanceMatrix),b==="instanceColor"&&G.instanceColor&&(ne=G.instanceColor));const re={};re.attribute=ne,ne&&ne.data&&(re.data=ne.data),Y[b]=re,K++}u.attributes=Y,u.attributesNum=K,u.index=W}function _(){const G=u.newAttributes;for(let k=0,$=G.length;k<$;k++)G[k]=0}function y(G){A(G,0)}function A(G,k){const $=u.newAttributes,W=u.enabledAttributes,Y=u.attributeDivisors;$[G]=1,W[G]===0&&(t.enableVertexAttribArray(G),W[G]=1),Y[G]!==k&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,k),Y[G]=k)}function w(){const G=u.newAttributes,k=u.enabledAttributes;for(let $=0,W=k.length;$<W;$++)k[$]!==G[$]&&(t.disableVertexAttribArray($),k[$]=0)}function C(G,k,$,W,Y,te,K){K===!0?t.vertexAttribIPointer(G,k,$,Y,te):t.vertexAttribPointer(G,k,$,W,Y,te)}function I(G,k,$,W){if(i.isWebGL2===!1&&(G.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const Y=W.attributes,te=$.getAttributes(),K=k.defaultAttributeValues;for(const L in te){const b=te[L];if(b.location>=0){let q=Y[L];if(q===void 0&&(L==="instanceMatrix"&&G.instanceMatrix&&(q=G.instanceMatrix),L==="instanceColor"&&G.instanceColor&&(q=G.instanceColor)),q!==void 0){const ne=q.normalized,re=q.itemSize,ye=n.get(q);if(ye===void 0)continue;const Ee=ye.buffer,Se=ye.type,Oe=ye.bytesPerElement,ht=i.isWebGL2===!0&&(Se===t.INT||Se===t.UNSIGNED_INT||q.gpuType===Rg);if(q.isInterleavedBufferAttribute){const Ne=q.data,F=Ne.stride,at=q.offset;if(Ne.isInstancedInterleavedBuffer){for(let Ae=0;Ae<b.locationSize;Ae++)A(b.location+Ae,Ne.meshPerAttribute);G.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let Ae=0;Ae<b.locationSize;Ae++)y(b.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let Ae=0;Ae<b.locationSize;Ae++)C(b.location+Ae,re/b.locationSize,Se,ne,F*Oe,(at+re/b.locationSize*Ae)*Oe,ht)}else{if(q.isInstancedBufferAttribute){for(let Ne=0;Ne<b.locationSize;Ne++)A(b.location+Ne,q.meshPerAttribute);G.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ne=0;Ne<b.locationSize;Ne++)y(b.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let Ne=0;Ne<b.locationSize;Ne++)C(b.location+Ne,re/b.locationSize,Se,ne,re*Oe,re/b.locationSize*Ne*Oe,ht)}}else if(K!==void 0){const ne=K[L];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(b.location,ne);break;case 3:t.vertexAttrib3fv(b.location,ne);break;case 4:t.vertexAttrib4fv(b.location,ne);break;default:t.vertexAttrib1fv(b.location,ne)}}}}w()}function S(){J();for(const G in a){const k=a[G];for(const $ in k){const W=k[$];for(const Y in W)v(W[Y].object),delete W[Y];delete k[$]}delete a[G]}}function R(G){if(a[G.id]===void 0)return;const k=a[G.id];for(const $ in k){const W=k[$];for(const Y in W)v(W[Y].object),delete W[Y];delete k[$]}delete a[G.id]}function Q(G){for(const k in a){const $=a[k];if($[G.id]===void 0)continue;const W=$[G.id];for(const Y in W)v(W[Y].object),delete W[Y];delete $[G.id]}}function J(){D(),h=!0,u!==l&&(u=l,m(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:J,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:Q,initAttributes:_,enableAttribute:y,disableUnusedAttributes:w}}function iE(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,h){t.drawArrays(s,u,h),n.update(h,s,1)}function l(u,h,p){if(p===0)return;let d,m;if(r)d=t,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,u,h,p),n.update(h,s,p)}this.setMode=o,this.render=a,this.renderInstances=l}function rE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,y=o||e.has("OES_texture_float"),A=_&&y,w=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:f,maxVaryings:c,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:A,maxSamples:w}}function sE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new zi,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||i!==0||r;return r=d,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){n=h(p,d,0)},this.setState=function(p,d,m){const v=p.clippingPlanes,x=p.clipIntersection,f=p.clipShadows,c=t.get(p);if(!r||v===null||v.length===0||s&&!f)s?h(null):u();else{const g=s?0:i,_=g*4;let y=c.clippingState||null;l.value=y,y=h(v,d,_,m);for(let A=0;A!==_;++A)y[A]=n[A];c.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,d,m,v){const x=p!==null?p.length:0;let f=null;if(x!==0){if(f=l.value,v!==!0||f===null){const c=m+x*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(f===null||f.length<c)&&(f=new Float32Array(c));for(let _=0,y=m;_!==x;++_,y+=4)o.copy(p[_]).applyMatrix4(g,a),o.normal.toArray(f,y),f[y+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}function oE(t){let e=new WeakMap;function n(o,a){return a===hc?o.mapping=es:a===pc&&(o.mapping=ts),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===hc||a===pc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new y1(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class $g extends jg{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Or=4,Xh=[.125,.215,.35,.446,.526,.582],Hi=20,yu=new $g,jh=new je;let Su=null;const ki=(1+Math.sqrt(5))/2,Tr=1/ki,Yh=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,ki,Tr),new N(0,ki,-Tr),new N(Tr,0,ki),new N(-Tr,0,ki),new N(ki,Tr,0),new N(-ki,Tr,0)];class qh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Su=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Su),e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Su=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Eo,format:Sn,colorSpace:Un,depthBuffer:!1},r=$h(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aE(s)),this._blurMaterial=lE(s,e,n)}return r}_compileMaterial(e){const n=new Mn(this._lodPlanes[0],e);this._renderer.compile(n,yu)}_sceneToCubeUV(e,n,i,r){const a=new Zt(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(jh),h.toneMapping=yi,h.autoClear=!1;const m=new Gg({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),v=new Mn(new gs,m);let x=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,x=!0):(m.color.copy(jh),x=!0);for(let c=0;c<6;c++){const g=c%3;g===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):g===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const _=this._cubeSize;da(r,g*_,c>2?_:0,_,_),h.setRenderTarget(r),x&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=p,e.background=f}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===es||e.mapping===ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Mn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;da(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,yu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Yh[(r-1)%Yh.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Mn(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Hi-1),x=s/v,f=isFinite(s)?1+Math.floor(h*x):Hi;f>Hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Hi}`);const c=[];let g=0;for(let C=0;C<Hi;++C){const I=C/x,S=Math.exp(-I*I/2);c.push(S),C===0?g+=S:C<f&&(g+=2*S)}for(let C=0;C<c.length;C++)c[C]=c[C]/g;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=c,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-i;const y=this._sizeLods[r],A=3*y*(r>_-Or?r-_+Or:0),w=4*(this._cubeSize-y);da(n,A,w,3*y,2*y),l.setRenderTarget(n),l.render(p,yu)}}function aE(t){const e=[],n=[],i=[];let r=t;const s=t-Or+1+Xh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Or?l=Xh[o-t+Or-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),h=-u,p=1+u,d=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,v=6,x=3,f=2,c=1,g=new Float32Array(x*v*m),_=new Float32Array(f*v*m),y=new Float32Array(c*v*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,I=w>2?0:-1,S=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];g.set(S,x*v*w),_.set(d,f*v*w);const R=[w,w,w,w,w,w];y.set(R,c*v*w)}const A=new Nn;A.setAttribute("position",new un(g,x)),A.setAttribute("uv",new un(_,f)),A.setAttribute("faceIndex",new un(y,c)),e.push(A),r>Or&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function $h(t,e,n){const i=new nr(t,e,n);return i.texture.mapping=vl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function da(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function lE(t,e,n){const i=new Float32Array(Hi),r=new N(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Kh(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Zh(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Tf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===hc||l===pc,h=l===es||l===ts;if(u||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return n===null&&(n=new qh(t)),p=u?n.fromEquirectangular(a,p):n.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(u&&p&&p.height>0||h&&p&&r(p)){n===null&&(n=new qh(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function cE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fE(t,e,n,i){const r={},s=new WeakMap;function o(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let f=0,c=x.length;f<c;f++)e.remove(x[f])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(p,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(p){const d=p.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const v in m){const x=m[v];for(let f=0,c=x.length;f<c;f++)e.update(x[f],t.ARRAY_BUFFER)}}function u(p){const d=[],m=p.index,v=p.attributes.position;let x=0;if(m!==null){const g=m.array;x=m.version;for(let _=0,y=g.length;_<y;_+=3){const A=g[_+0],w=g[_+1],C=g[_+2];d.push(A,w,w,C,C,A)}}else if(v!==void 0){const g=v.array;x=v.version;for(let _=0,y=g.length/3-1;_<y;_+=3){const A=_+0,w=_+1,C=_+2;d.push(A,w,w,C,C,A)}}else return;const f=new(Ig(d)?Wg:Vg)(d,1);f.version=x;const c=s.get(p);c&&e.remove(c),s.set(p,f)}function h(p){const d=s.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function dE(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function h(d,m){t.drawElements(s,m,a,d*l),n.update(m,s,1)}function p(d,m,v){if(v===0)return;let x,f;if(r)x=t,f="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[f](s,m,a,d*l,v),n.update(m,s,v)}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=p}function hE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function pE(t,e){return t[0]-e[0]}function mE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function gE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new it,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,h,p){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=v!==void 0?v.length:0;let f=s.get(h);if(f===void 0||f.count!==x){let k=function(){D.dispose(),s.delete(h),h.removeEventListener("dispose",k)};var m=k;f!==void 0&&f.texture.dispose();const _=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),A===!0&&(S=3);let R=h.attributes.position.count*S,Q=1;R>e.maxTextureSize&&(Q=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const J=new Float32Array(R*Q*4*x),D=new Bg(J,R,Q,x);D.type=ci,D.needsUpdate=!0;const G=S*4;for(let $=0;$<x;$++){const W=w[$],Y=C[$],te=I[$],K=R*Q*4*$;for(let L=0;L<W.count;L++){const b=L*G;_===!0&&(o.fromBufferAttribute(W,L),J[K+b+0]=o.x,J[K+b+1]=o.y,J[K+b+2]=o.z,J[K+b+3]=0),y===!0&&(o.fromBufferAttribute(Y,L),J[K+b+4]=o.x,J[K+b+5]=o.y,J[K+b+6]=o.z,J[K+b+7]=0),A===!0&&(o.fromBufferAttribute(te,L),J[K+b+8]=o.x,J[K+b+9]=o.y,J[K+b+10]=o.z,J[K+b+11]=te.itemSize===4?o.w:1)}}f={count:x,texture:D,size:new $e(R,Q)},s.set(h,f),h.addEventListener("dispose",k)}let c=0;for(let _=0;_<d.length;_++)c+=d[_];const g=h.morphTargetsRelative?1:1-c;p.getUniforms().setValue(t,"morphTargetBaseInfluence",g),p.getUniforms().setValue(t,"morphTargetInfluences",d),p.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),p.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}else{const v=d===void 0?0:d.length;let x=i[h.id];if(x===void 0||x.length!==v){x=[];for(let y=0;y<v;y++)x[y]=[y,0];i[h.id]=x}for(let y=0;y<v;y++){const A=x[y];A[0]=y,A[1]=d[y]}x.sort(mE);for(let y=0;y<8;y++)y<v&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(pE);const f=h.morphAttributes.position,c=h.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const A=a[y],w=A[0],C=A[1];w!==Number.MAX_SAFE_INTEGER&&C?(f&&h.getAttribute("morphTarget"+y)!==f[w]&&h.setAttribute("morphTarget"+y,f[w]),c&&h.getAttribute("morphNormal"+y)!==c[w]&&h.setAttribute("morphNormal"+y,c[w]),r[y]=C,g+=C):(f&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),c&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),r[y]=0)}const _=h.morphTargetsRelative?1:1-g;p.getUniforms().setValue(t,"morphTargetBaseInfluence",_),p.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function _E(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return p}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const Kg=new Jt,Zg=new Bg,Qg=new i1,Jg=new Yg,Qh=[],Jh=[],ep=new Float32Array(16),tp=new Float32Array(9),np=new Float32Array(4);function _s(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Qh[r];if(s===void 0&&(s=new Float32Array(r),Qh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function St(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function yl(t,e){let n=Jh[e];n===void 0&&(n=new Int32Array(e),Jh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function vE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function xE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2fv(this.addr,e),St(n,e)}}function yE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(yt(n,e))return;t.uniform3fv(this.addr,e),St(n,e)}}function SE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4fv(this.addr,e),St(n,e)}}function EE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),St(n,e)}else{if(yt(n,i))return;np.set(i),t.uniformMatrix2fv(this.addr,!1,np),St(n,i)}}function ME(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),St(n,e)}else{if(yt(n,i))return;tp.set(i),t.uniformMatrix3fv(this.addr,!1,tp),St(n,i)}}function TE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),St(n,e)}else{if(yt(n,i))return;ep.set(i),t.uniformMatrix4fv(this.addr,!1,ep),St(n,i)}}function wE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function AE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2iv(this.addr,e),St(n,e)}}function RE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yt(n,e))return;t.uniform3iv(this.addr,e),St(n,e)}}function CE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4iv(this.addr,e),St(n,e)}}function LE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function PE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2uiv(this.addr,e),St(n,e)}}function bE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yt(n,e))return;t.uniform3uiv(this.addr,e),St(n,e)}}function DE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4uiv(this.addr,e),St(n,e)}}function UE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Kg,r)}function NE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Qg,r)}function IE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Jg,r)}function FE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Zg,r)}function OE(t){switch(t){case 5126:return vE;case 35664:return xE;case 35665:return yE;case 35666:return SE;case 35674:return EE;case 35675:return ME;case 35676:return TE;case 5124:case 35670:return wE;case 35667:case 35671:return AE;case 35668:case 35672:return RE;case 35669:case 35673:return CE;case 5125:return LE;case 36294:return PE;case 36295:return bE;case 36296:return DE;case 35678:case 36198:case 36298:case 36306:case 35682:return UE;case 35679:case 36299:case 36307:return NE;case 35680:case 36300:case 36308:case 36293:return IE;case 36289:case 36303:case 36311:case 36292:return FE}}function BE(t,e){t.uniform1fv(this.addr,e)}function zE(t,e){const n=_s(e,this.size,2);t.uniform2fv(this.addr,n)}function kE(t,e){const n=_s(e,this.size,3);t.uniform3fv(this.addr,n)}function HE(t,e){const n=_s(e,this.size,4);t.uniform4fv(this.addr,n)}function GE(t,e){const n=_s(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function VE(t,e){const n=_s(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function WE(t,e){const n=_s(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function XE(t,e){t.uniform1iv(this.addr,e)}function jE(t,e){t.uniform2iv(this.addr,e)}function YE(t,e){t.uniform3iv(this.addr,e)}function qE(t,e){t.uniform4iv(this.addr,e)}function $E(t,e){t.uniform1uiv(this.addr,e)}function KE(t,e){t.uniform2uiv(this.addr,e)}function ZE(t,e){t.uniform3uiv(this.addr,e)}function QE(t,e){t.uniform4uiv(this.addr,e)}function JE(t,e,n){const i=this.cache,r=e.length,s=yl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Kg,s[o])}function eM(t,e,n){const i=this.cache,r=e.length,s=yl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Qg,s[o])}function tM(t,e,n){const i=this.cache,r=e.length,s=yl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Jg,s[o])}function nM(t,e,n){const i=this.cache,r=e.length,s=yl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Zg,s[o])}function iM(t){switch(t){case 5126:return BE;case 35664:return zE;case 35665:return kE;case 35666:return HE;case 35674:return GE;case 35675:return VE;case 35676:return WE;case 5124:case 35670:return XE;case 35667:case 35671:return jE;case 35668:case 35672:return YE;case 35669:case 35673:return qE;case 5125:return $E;case 36294:return KE;case 36295:return ZE;case 36296:return QE;case 35678:case 36198:case 36298:case 36306:case 35682:return JE;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return nM}}class rM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=OE(n.type)}}class sM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=iM(n.type)}}class oM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Eu=/(\w+)(\])?(\[|\.)?/g;function ip(t,e){t.seq.push(e),t.map[e.id]=e}function aM(t,e,n){const i=t.name,r=i.length;for(Eu.lastIndex=0;;){const s=Eu.exec(i),o=Eu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){ip(n,u===void 0?new rM(a,t,e):new sM(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new oM(a),ip(n,p)),n=p}}}class Ca{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);aM(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function rp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let lM=0;function uM(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function cM(t){switch(t){case Un:return["Linear","( value )"];case tt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function sp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+uM(t.getShaderSource(e),o)}else return r}function fM(t,e){const n=cM(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function dM(t,e){let n;switch(e){case ox:n="Linear";break;case ax:n="Reinhard";break;case lx:n="OptimizedCineon";break;case wg:n="ACESFilmic";break;case ux:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function hM(t){return[t.extensionDerivatives||!!t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ws).join(`
`)}function pM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function mM(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ws(t){return t!==""}function op(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ap(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gM=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(t){return t.replace(gM,vM)}const _M=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function vM(t,e){let n=ke[e];if(n===void 0){const i=_M.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xc(n)}const xM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lp(t){return t.replace(xM,yM)}function yM(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function up(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Sg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Bv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function EM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MM(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function TM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Tg:e="ENVMAP_BLENDING_MULTIPLY";break;case rx:e="ENVMAP_BLENDING_MIX";break;case sx:e="ENVMAP_BLENDING_ADD";break}return e}function wM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function AM(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=SM(n),u=EM(n),h=MM(n),p=TM(n),d=wM(n),m=n.isWebGL2?"":hM(n),v=pM(s),x=r.createProgram();let f,c,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ws).join(`
`),f.length>0&&(f+=`
`),c=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ws).join(`
`),c.length>0&&(c+=`
`)):(f=[up(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),c=[m,up(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yi?"#define TONE_MAPPING":"",n.toneMapping!==yi?ke.tonemapping_pars_fragment:"",n.toneMapping!==yi?dM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,fM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ws).join(`
`)),o=xc(o),o=op(o,n),o=ap(o,n),a=xc(a),a=op(a,n),a=ap(a,n),o=lp(o),a=lp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,c=["#define varying in",n.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const _=g+f+o,y=g+c+a,A=rp(r,r.VERTEX_SHADER,_),w=rp(r,r.FRAGMENT_SHADER,y);if(r.attachShader(x,A),r.attachShader(x,w),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),t.debug.checkShaderErrors){const S=r.getProgramInfoLog(x).trim(),R=r.getShaderInfoLog(A).trim(),Q=r.getShaderInfoLog(w).trim();let J=!0,D=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,A,w);else{const G=sp(r,A,"vertex"),k=sp(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+G+`
`+k)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(R===""||Q==="")&&(D=!1);D&&(this.diagnostics={runnable:J,programLog:S,vertexShader:{log:R,prefix:f},fragmentShader:{log:Q,prefix:c}})}r.deleteShader(A),r.deleteShader(w);let C;this.getUniforms=function(){return C===void 0&&(C=new Ca(r,x)),C};let I;return this.getAttributes=function(){return I===void 0&&(I=mM(r,x)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=w,this}let RM=0;class CM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new LM(e),n.set(e,i)),i}}class LM{constructor(e){this.id=RM++,this.code=e,this.usedTimes=0}}function PM(t,e,n,i,r,s,o){const a=new kg,l=new CM,u=[],h=r.isWebGL2,p=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function f(S,R,Q,J,D){const G=J.fog,k=D.geometry,$=S.isMeshStandardMaterial?J.environment:null,W=(S.isMeshStandardMaterial?n:e).get(S.envMap||$),Y=!!W&&W.mapping===vl?W.image.height:null,te=v[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const K=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,L=K!==void 0?K.length:0;let b=0;k.morphAttributes.position!==void 0&&(b=1),k.morphAttributes.normal!==void 0&&(b=2),k.morphAttributes.color!==void 0&&(b=3);let q,ne,re,ye;if(te){const Je=An[te];q=Je.vertexShader,ne=Je.fragmentShader}else q=S.vertexShader,ne=S.fragmentShader,l.update(S),re=l.getVertexShaderID(S),ye=l.getFragmentShaderID(S);const Ee=t.getRenderTarget(),Se=D.isInstancedMesh===!0,Oe=!!S.map,ht=!!S.matcap,Ne=!!W,F=!!S.aoMap,at=!!S.lightMap,Ae=!!S.bumpMap,be=!!S.normalMap,Z=!!S.displacementMap,me=!!S.emissiveMap,de=!!S.metalnessMap,ue=!!S.roughnessMap,Ce=S.anisotropy>0,Ge=S.clearcoat>0,Me=S.iridescence>0,T=S.sheen>0,E=S.transmission>0,B=Ce&&!!S.anisotropyMap,U=Ge&&!!S.clearcoatMap,ee=Ge&&!!S.clearcoatNormalMap,ie=Ge&&!!S.clearcoatRoughnessMap,Te=Me&&!!S.iridescenceMap,oe=Me&&!!S.iridescenceThicknessMap,H=T&&!!S.sheenColorMap,Re=T&&!!S.sheenRoughnessMap,ge=!!S.specularMap,we=!!S.specularColorMap,he=!!S.specularIntensityMap,pe=E&&!!S.transmissionMap,Ve=E&&!!S.thicknessMap,Ze=!!S.gradientMap,P=!!S.alphaMap,ce=S.alphaTest>0,V=!!S.alphaHash,ae=!!S.extensions,fe=!!k.attributes.uv1,qe=!!k.attributes.uv2,ot=!!k.attributes.uv3;let pt=yi;return S.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(pt=t.toneMapping),{isWebGL2:h,shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:q,fragmentShader:ne,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:ye,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:Se,instancingColor:Se&&D.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ee===null?t.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Un,map:Oe,matcap:ht,envMap:Ne,envMapMode:Ne&&W.mapping,envMapCubeUVHeight:Y,aoMap:F,lightMap:at,bumpMap:Ae,normalMap:be,displacementMap:d&&Z,emissiveMap:me,normalMapObjectSpace:be&&S.normalMapType===Ex,normalMapTangentSpace:be&&S.normalMapType===Ng,metalnessMap:de,roughnessMap:ue,anisotropy:Ce,anisotropyMap:B,clearcoat:Ge,clearcoatMap:U,clearcoatNormalMap:ee,clearcoatRoughnessMap:ie,iridescence:Me,iridescenceMap:Te,iridescenceThicknessMap:oe,sheen:T,sheenColorMap:H,sheenRoughnessMap:Re,specularMap:ge,specularColorMap:we,specularIntensityMap:he,transmission:E,transmissionMap:pe,thicknessMap:Ve,gradientMap:Ze,opaque:S.transparent===!1&&S.blending===qr,alphaMap:P,alphaTest:ce,alphaHash:V,combine:S.combine,mapUv:Oe&&x(S.map.channel),aoMapUv:F&&x(S.aoMap.channel),lightMapUv:at&&x(S.lightMap.channel),bumpMapUv:Ae&&x(S.bumpMap.channel),normalMapUv:be&&x(S.normalMap.channel),displacementMapUv:Z&&x(S.displacementMap.channel),emissiveMapUv:me&&x(S.emissiveMap.channel),metalnessMapUv:de&&x(S.metalnessMap.channel),roughnessMapUv:ue&&x(S.roughnessMap.channel),anisotropyMapUv:B&&x(S.anisotropyMap.channel),clearcoatMapUv:U&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:H&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(S.sheenRoughnessMap.channel),specularMapUv:ge&&x(S.specularMap.channel),specularColorMapUv:we&&x(S.specularColorMap.channel),specularIntensityMapUv:he&&x(S.specularIntensityMap.channel),transmissionMapUv:pe&&x(S.transmissionMap.channel),thicknessMapUv:Ve&&x(S.thicknessMap.channel),alphaMapUv:P&&x(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(be||Ce),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:fe,vertexUv2s:qe,vertexUv3s:ot,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(Oe||P),fog:!!G,useFog:S.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:D.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:b,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&Q.length>0,shadowMapType:t.shadowMap.type,toneMapping:pt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Oe&&S.map.isVideoTexture===!0&&S.map.colorSpace===tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Rn,flipSided:S.side===Yt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ae&&S.extensions.derivatives===!0,extensionFragDepth:ae&&S.extensions.fragDepth===!0,extensionDrawBuffers:ae&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function c(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const Q in S.defines)R.push(Q),R.push(S.defines[Q]);return S.isRawShaderMaterial===!1&&(g(R,S),_(R,S),R.push(t.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function g(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function _(S,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const R=v[S.type];let Q;if(R){const J=An[R];Q=g1.clone(J.uniforms)}else Q=S.uniforms;return Q}function A(S,R){let Q;for(let J=0,D=u.length;J<D;J++){const G=u[J];if(G.cacheKey===R){Q=G,++Q.usedTimes;break}}return Q===void 0&&(Q=new AM(t,R,S,s),u.push(Q)),Q}function w(S){if(--S.usedTimes===0){const R=u.indexOf(S);u[R]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function I(){l.dispose()}return{getParameters:f,getProgramCacheKey:c,getUniforms:y,acquireProgram:A,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:I}}function bM(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function DM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function cp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function fp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,d,m,v,x,f){let c=t[e];return c===void 0?(c={id:p.id,object:p,geometry:d,material:m,groupOrder:v,renderOrder:p.renderOrder,z:x,group:f},t[e]=c):(c.id=p.id,c.object=p,c.geometry=d,c.material=m,c.groupOrder=v,c.renderOrder=p.renderOrder,c.z=x,c.group=f),e++,c}function a(p,d,m,v,x,f){const c=o(p,d,m,v,x,f);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(p,d,m,v,x,f){const c=o(p,d,m,v,x,f);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(p,d){n.length>1&&n.sort(p||DM),i.length>1&&i.sort(d||cp),r.length>1&&r.sort(d||cp)}function h(){for(let p=e,d=t.length;p<d;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:u}}function UM(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new fp,t.set(i,[o])):r>=s.length?(o=new fp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function NM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new je};break;case"SpotLight":n={position:new N,direction:new N,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function IM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let FM=0;function OM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function BM(t,e){const n=new NM,i=IM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new N);const s=new N,o=new rt,a=new rt;function l(h,p){let d=0,m=0,v=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let x=0,f=0,c=0,g=0,_=0,y=0,A=0,w=0,C=0,I=0;h.sort(OM);const S=p===!0?Math.PI:1;for(let Q=0,J=h.length;Q<J;Q++){const D=h[Q],G=D.color,k=D.intensity,$=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=G.r*k*S,m+=G.g*k*S,v+=G.b*k*S;else if(D.isLightProbe)for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(D.sh.coefficients[Y],k);else if(D.isDirectionalLight){const Y=n.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const te=D.shadow,K=i.get(D);K.shadowBias=te.bias,K.shadowNormalBias=te.normalBias,K.shadowRadius=te.radius,K.shadowMapSize=te.mapSize,r.directionalShadow[x]=K,r.directionalShadowMap[x]=W,r.directionalShadowMatrix[x]=D.shadow.matrix,y++}r.directional[x]=Y,x++}else if(D.isSpotLight){const Y=n.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(G).multiplyScalar(k*S),Y.distance=$,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,r.spot[c]=Y;const te=D.shadow;if(D.map&&(r.spotLightMap[C]=D.map,C++,te.updateMatrices(D),D.castShadow&&I++),r.spotLightMatrix[c]=te.matrix,D.castShadow){const K=i.get(D);K.shadowBias=te.bias,K.shadowNormalBias=te.normalBias,K.shadowRadius=te.radius,K.shadowMapSize=te.mapSize,r.spotShadow[c]=K,r.spotShadowMap[c]=W,w++}c++}else if(D.isRectAreaLight){const Y=n.get(D);Y.color.copy(G).multiplyScalar(k),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),r.rectArea[g]=Y,g++}else if(D.isPointLight){const Y=n.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*S),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const te=D.shadow,K=i.get(D);K.shadowBias=te.bias,K.shadowNormalBias=te.normalBias,K.shadowRadius=te.radius,K.shadowMapSize=te.mapSize,K.shadowCameraNear=te.camera.near,K.shadowCameraFar=te.camera.far,r.pointShadow[f]=K,r.pointShadowMap[f]=W,r.pointShadowMatrix[f]=D.shadow.matrix,A++}r.point[f]=Y,f++}else if(D.isHemisphereLight){const Y=n.get(D);Y.skyColor.copy(D.color).multiplyScalar(k*S),Y.groundColor.copy(D.groundColor).multiplyScalar(k*S),r.hemi[_]=Y,_++}}g>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=v;const R=r.hash;(R.directionalLength!==x||R.pointLength!==f||R.spotLength!==c||R.rectAreaLength!==g||R.hemiLength!==_||R.numDirectionalShadows!==y||R.numPointShadows!==A||R.numSpotShadows!==w||R.numSpotMaps!==C)&&(r.directional.length=x,r.spot.length=c,r.rectArea.length=g,r.point.length=f,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=w+C-I,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=I,R.directionalLength=x,R.pointLength=f,R.spotLength=c,R.rectAreaLength=g,R.hemiLength=_,R.numDirectionalShadows=y,R.numPointShadows=A,R.numSpotShadows=w,R.numSpotMaps=C,r.version=FM++)}function u(h,p){let d=0,m=0,v=0,x=0,f=0;const c=p.matrixWorldInverse;for(let g=0,_=h.length;g<_;g++){const y=h[g];if(y.isDirectionalLight){const A=r.directional[d];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(c),d++}else if(y.isSpotLight){const A=r.spot[v];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(c),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(c),v++}else if(y.isRectAreaLight){const A=r.rectArea[x];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(c),a.identity(),o.copy(y.matrixWorld),o.premultiply(c),a.extractRotation(o),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const A=r.point[m];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(c),m++}else if(y.isHemisphereLight){const A=r.hemi[f];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(c),f++}}}return{setup:l,setupView:u,state:r}}function dp(t,e){const n=new BM(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(p){i.push(p)}function a(p){r.push(p)}function l(p){n.setup(i,p)}function u(p){n.setupView(i,p)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function zM(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new dp(t,e),n.set(s,[l])):o>=a.length?(l=new dp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class kM extends ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HM extends ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WM(t,e,n){let i=new Ef;const r=new $e,s=new $e,o=new it,a=new kM({depthPacking:Sx}),l=new HM,u={},h=n.maxTextureSize,p={[Ri]:Yt,[Yt]:Ri,[Rn]:Rn},d=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:GM,fragmentShader:VM}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Nn;v.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Mn(v,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sg;let c=this.type;this.render=function(A,w,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const I=t.getRenderTarget(),S=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),Q=t.state;Q.setBlending(xi),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const J=c!==Vn&&this.type===Vn,D=c===Vn&&this.type!==Vn;for(let G=0,k=A.length;G<k;G++){const $=A[G],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const Y=W.getFrameExtents();if(r.multiply(Y),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Y.x),r.x=s.x*Y.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Y.y),r.y=s.y*Y.y,W.mapSize.y=s.y)),W.map===null||J===!0||D===!0){const K=this.type!==Vn?{minFilter:zt,magFilter:zt}:{};W.map!==null&&W.map.dispose(),W.map=new nr(r.x,r.y,K),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}t.setRenderTarget(W.map),t.clear();const te=W.getViewportCount();for(let K=0;K<te;K++){const L=W.getViewport(K);o.set(s.x*L.x,s.y*L.y,s.x*L.z,s.y*L.w),Q.viewport(o),W.updateMatrices($,K),i=W.getFrustum(),y(w,C,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===Vn&&g(W,C),W.needsUpdate=!1}c=this.type,f.needsUpdate=!1,t.setRenderTarget(I,S,R)};function g(A,w){const C=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new nr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,C,d,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,C,m,x,null)}function _(A,w,C,I){let S=null;const R=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)S=R;else if(S=C.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Q=S.uuid,J=w.uuid;let D=u[Q];D===void 0&&(D={},u[Q]=D);let G=D[J];G===void 0&&(G=S.clone(),D[J]=G),S=G}if(S.visible=w.visible,S.wireframe=w.wireframe,I===Vn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:p[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Q=t.properties.get(S);Q.light=C}return S}function y(A,w,C,I,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Vn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const J=e.update(A),D=A.material;if(Array.isArray(D)){const G=J.groups;for(let k=0,$=G.length;k<$;k++){const W=G[k],Y=D[W.materialIndex];if(Y&&Y.visible){const te=_(A,Y,I,S);t.renderBufferDirect(C,null,J,te,A,W)}}}else if(D.visible){const G=_(A,D,I,S);t.renderBufferDirect(C,null,J,G,A,null)}}const Q=A.children;for(let J=0,D=Q.length;J<D;J++)y(Q[J],w,C,I,S)}}function XM(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const ce=new it;let V=null;const ae=new it(0,0,0,0);return{setMask:function(fe){V!==fe&&!P&&(t.colorMask(fe,fe,fe,fe),V=fe)},setLocked:function(fe){P=fe},setClear:function(fe,qe,ot,pt,Jn){Jn===!0&&(fe*=pt,qe*=pt,ot*=pt),ce.set(fe,qe,ot,pt),ae.equals(ce)===!1&&(t.clearColor(fe,qe,ot,pt),ae.copy(ce))},reset:function(){P=!1,V=null,ae.set(-1,0,0,0)}}}function s(){let P=!1,ce=null,V=null,ae=null;return{setTest:function(fe){fe?Ee(t.DEPTH_TEST):Se(t.DEPTH_TEST)},setMask:function(fe){ce!==fe&&!P&&(t.depthMask(fe),ce=fe)},setFunc:function(fe){if(V!==fe){switch(fe){case Zv:t.depthFunc(t.NEVER);break;case Qv:t.depthFunc(t.ALWAYS);break;case Jv:t.depthFunc(t.LESS);break;case dc:t.depthFunc(t.LEQUAL);break;case ex:t.depthFunc(t.EQUAL);break;case tx:t.depthFunc(t.GEQUAL);break;case nx:t.depthFunc(t.GREATER);break;case ix:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}V=fe}},setLocked:function(fe){P=fe},setClear:function(fe){ae!==fe&&(t.clearDepth(fe),ae=fe)},reset:function(){P=!1,ce=null,V=null,ae=null}}}function o(){let P=!1,ce=null,V=null,ae=null,fe=null,qe=null,ot=null,pt=null,Jn=null;return{setTest:function(Je){P||(Je?Ee(t.STENCIL_TEST):Se(t.STENCIL_TEST))},setMask:function(Je){ce!==Je&&!P&&(t.stencilMask(Je),ce=Je)},setFunc:function(Je,Tn,It){(V!==Je||ae!==Tn||fe!==It)&&(t.stencilFunc(Je,Tn,It),V=Je,ae=Tn,fe=It)},setOp:function(Je,Tn,It){(qe!==Je||ot!==Tn||pt!==It)&&(t.stencilOp(Je,Tn,It),qe=Je,ot=Tn,pt=It)},setLocked:function(Je){P=Je},setClear:function(Je){Jn!==Je&&(t.clearStencil(Je),Jn=Je)},reset:function(){P=!1,ce=null,V=null,ae=null,fe=null,qe=null,ot=null,pt=null,Jn=null}}}const a=new r,l=new s,u=new o,h=new WeakMap,p=new WeakMap;let d={},m={},v=new WeakMap,x=[],f=null,c=!1,g=null,_=null,y=null,A=null,w=null,C=null,I=null,S=!1,R=null,Q=null,J=null,D=null,G=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,W=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=W>=1):Y.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=W>=2);let te=null,K={};const L=t.getParameter(t.SCISSOR_BOX),b=t.getParameter(t.VIEWPORT),q=new it().fromArray(L),ne=new it().fromArray(b);function re(P,ce,V,ae){const fe=new Uint8Array(4),qe=t.createTexture();t.bindTexture(P,qe),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ot=0;ot<V;ot++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(ce,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(ce+ot,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return qe}const ye={};ye[t.TEXTURE_2D]=re(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ye[t.TEXTURE_2D_ARRAY]=re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=re(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ee(t.DEPTH_TEST),l.setFunc(dc),Z(!1),me(Zd),Ee(t.CULL_FACE),Ae(xi);function Ee(P){d[P]!==!0&&(t.enable(P),d[P]=!0)}function Se(P){d[P]!==!1&&(t.disable(P),d[P]=!1)}function Oe(P,ce){return m[P]!==ce?(t.bindFramebuffer(P,ce),m[P]=ce,i&&(P===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ce),P===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ce)),!0):!1}function ht(P,ce){let V=x,ae=!1;if(P)if(V=v.get(ce),V===void 0&&(V=[],v.set(ce,V)),P.isWebGLMultipleRenderTargets){const fe=P.texture;if(V.length!==fe.length||V[0]!==t.COLOR_ATTACHMENT0){for(let qe=0,ot=fe.length;qe<ot;qe++)V[qe]=t.COLOR_ATTACHMENT0+qe;V.length=fe.length,ae=!0}}else V[0]!==t.COLOR_ATTACHMENT0&&(V[0]=t.COLOR_ATTACHMENT0,ae=!0);else V[0]!==t.BACK&&(V[0]=t.BACK,ae=!0);ae&&(n.isWebGL2?t.drawBuffers(V):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))}function Ne(P){return f!==P?(t.useProgram(P),f=P,!0):!1}const F={[Lr]:t.FUNC_ADD,[kv]:t.FUNC_SUBTRACT,[Hv]:t.FUNC_REVERSE_SUBTRACT};if(i)F[eh]=t.MIN,F[th]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(F[eh]=P.MIN_EXT,F[th]=P.MAX_EXT)}const at={[Gv]:t.ZERO,[Vv]:t.ONE,[Wv]:t.SRC_COLOR,[Eg]:t.SRC_ALPHA,[Kv]:t.SRC_ALPHA_SATURATE,[qv]:t.DST_COLOR,[jv]:t.DST_ALPHA,[Xv]:t.ONE_MINUS_SRC_COLOR,[Mg]:t.ONE_MINUS_SRC_ALPHA,[$v]:t.ONE_MINUS_DST_COLOR,[Yv]:t.ONE_MINUS_DST_ALPHA};function Ae(P,ce,V,ae,fe,qe,ot,pt){if(P===xi){c===!0&&(Se(t.BLEND),c=!1);return}if(c===!1&&(Ee(t.BLEND),c=!0),P!==zv){if(P!==g||pt!==S){if((_!==Lr||w!==Lr)&&(t.blendEquation(t.FUNC_ADD),_=Lr,w=Lr),pt)switch(P){case qr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case el:t.blendFunc(t.ONE,t.ONE);break;case Qd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jd:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case qr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case el:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Qd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jd:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,A=null,C=null,I=null,g=P,S=pt}return}fe=fe||ce,qe=qe||V,ot=ot||ae,(ce!==_||fe!==w)&&(t.blendEquationSeparate(F[ce],F[fe]),_=ce,w=fe),(V!==y||ae!==A||qe!==C||ot!==I)&&(t.blendFuncSeparate(at[V],at[ae],at[qe],at[ot]),y=V,A=ae,C=qe,I=ot),g=P,S=!1}function be(P,ce){P.side===Rn?Se(t.CULL_FACE):Ee(t.CULL_FACE);let V=P.side===Yt;ce&&(V=!V),Z(V),P.blending===qr&&P.transparent===!1?Ae(xi):Ae(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const ae=P.stencilWrite;u.setTest(ae),ae&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ue(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ee(t.SAMPLE_ALPHA_TO_COVERAGE):Se(t.SAMPLE_ALPHA_TO_COVERAGE)}function Z(P){R!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),R=P)}function me(P){P!==Fv?(Ee(t.CULL_FACE),P!==Q&&(P===Zd?t.cullFace(t.BACK):P===Ov?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Se(t.CULL_FACE),Q=P}function de(P){P!==J&&($&&t.lineWidth(P),J=P)}function ue(P,ce,V){P?(Ee(t.POLYGON_OFFSET_FILL),(D!==ce||G!==V)&&(t.polygonOffset(ce,V),D=ce,G=V)):Se(t.POLYGON_OFFSET_FILL)}function Ce(P){P?Ee(t.SCISSOR_TEST):Se(t.SCISSOR_TEST)}function Ge(P){P===void 0&&(P=t.TEXTURE0+k-1),te!==P&&(t.activeTexture(P),te=P)}function Me(P,ce,V){V===void 0&&(te===null?V=t.TEXTURE0+k-1:V=te);let ae=K[V];ae===void 0&&(ae={type:void 0,texture:void 0},K[V]=ae),(ae.type!==P||ae.texture!==ce)&&(te!==V&&(t.activeTexture(V),te=V),t.bindTexture(P,ce||ye[P]),ae.type=P,ae.texture=ce)}function T(){const P=K[te];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function E(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function B(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function U(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function H(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(P){q.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),q.copy(P))}function he(P){ne.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),ne.copy(P))}function pe(P,ce){let V=p.get(ce);V===void 0&&(V=new WeakMap,p.set(ce,V));let ae=V.get(P);ae===void 0&&(ae=t.getUniformBlockIndex(ce,P.name),V.set(P,ae))}function Ve(P,ce){const ae=p.get(ce).get(P);h.get(ce)!==ae&&(t.uniformBlockBinding(ce,ae,P.__bindingPointIndex),h.set(ce,ae))}function Ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},te=null,K={},m={},v=new WeakMap,x=[],f=null,c=!1,g=null,_=null,y=null,A=null,w=null,C=null,I=null,S=!1,R=null,Q=null,J=null,D=null,G=null,q.set(0,0,t.canvas.width,t.canvas.height),ne.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ee,disable:Se,bindFramebuffer:Oe,drawBuffers:ht,useProgram:Ne,setBlending:Ae,setMaterial:be,setFlipSided:Z,setCullFace:me,setLineWidth:de,setPolygonOffset:ue,setScissorTest:Ce,activeTexture:Ge,bindTexture:Me,unbindTexture:T,compressedTexImage2D:E,compressedTexImage3D:B,texImage2D:Re,texImage3D:ge,updateUBOMapping:pe,uniformBlockBinding:Ve,texStorage2D:oe,texStorage3D:H,texSubImage2D:U,texSubImage3D:ee,compressedTexSubImage2D:ie,compressedTexSubImage3D:Te,scissor:we,viewport:he,reset:Ze}}function jM(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,h=r.maxTextureSize,p=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let x;const f=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,E){return c?new OffscreenCanvas(T,E):il("canvas")}function _(T,E,B,U){let ee=1;if((T.width>U||T.height>U)&&(ee=U/Math.max(T.width,T.height)),ee<1||E===!0)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap){const ie=E?nl:Math.floor,Te=ie(ee*T.width),oe=ie(ee*T.height);x===void 0&&(x=g(Te,oe));const H=B?g(Te,oe):x;return H.width=Te,H.height=oe,H.getContext("2d").drawImage(T,0,0,Te,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Te+"x"+oe+")."),H}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return vc(T.width)&&vc(T.height)}function A(T){return a?!1:T.wrapS!==yn||T.wrapT!==yn||T.minFilter!==zt&&T.minFilter!==sn}function w(T,E){return T.generateMipmaps&&E&&T.minFilter!==zt&&T.minFilter!==sn}function C(T){t.generateMipmap(T)}function I(T,E,B,U,ee=!1){if(a===!1)return E;if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ie=E;return E===t.RED&&(B===t.FLOAT&&(ie=t.R32F),B===t.HALF_FLOAT&&(ie=t.R16F),B===t.UNSIGNED_BYTE&&(ie=t.R8)),E===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(ie=t.R8UI),B===t.UNSIGNED_SHORT&&(ie=t.R16UI),B===t.UNSIGNED_INT&&(ie=t.R32UI),B===t.BYTE&&(ie=t.R8I),B===t.SHORT&&(ie=t.R16I),B===t.INT&&(ie=t.R32I)),E===t.RG&&(B===t.FLOAT&&(ie=t.RG32F),B===t.HALF_FLOAT&&(ie=t.RG16F),B===t.UNSIGNED_BYTE&&(ie=t.RG8)),E===t.RGBA&&(B===t.FLOAT&&(ie=t.RGBA32F),B===t.HALF_FLOAT&&(ie=t.RGBA16F),B===t.UNSIGNED_BYTE&&(ie=U===tt&&ee===!1?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)),(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function S(T,E,B){return w(T,B)===!0||T.isFramebufferTexture&&T.minFilter!==zt&&T.minFilter!==sn?Math.log2(Math.max(E.width,E.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?E.mipmaps.length:1}function R(T){return T===zt||T===nh||T===Kl?t.NEAREST:t.LINEAR}function Q(T){const E=T.target;E.removeEventListener("dispose",Q),D(E),E.isVideoTexture&&v.delete(E)}function J(T){const E=T.target;E.removeEventListener("dispose",J),k(E)}function D(T){const E=i.get(T);if(E.__webglInit===void 0)return;const B=T.source,U=f.get(B);if(U){const ee=U[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&G(T),Object.keys(U).length===0&&f.delete(B)}i.remove(T)}function G(T){const E=i.get(T);t.deleteTexture(E.__webglTexture);const B=T.source,U=f.get(B);delete U[E.__cacheKey],o.memory.textures--}function k(T){const E=T.texture,B=i.get(T),U=i.get(E);if(U.__webglTexture!==void 0&&(t.deleteTexture(U.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(B.__webglFramebuffer[ee]))for(let ie=0;ie<B.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(B.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(B.__webglFramebuffer[ee]);B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[ee])}else{if(Array.isArray(B.__webglFramebuffer))for(let ee=0;ee<B.__webglFramebuffer.length;ee++)t.deleteFramebuffer(B.__webglFramebuffer[ee]);else t.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ee=0;ee<B.__webglColorRenderbuffer.length;ee++)B.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[ee]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ee=0,ie=E.length;ee<ie;ee++){const Te=i.get(E[ee]);Te.__webglTexture&&(t.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(E[ee])}i.remove(E),i.remove(T)}let $=0;function W(){$=0}function Y(){const T=$;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),$+=1,T}function te(T){const E=[];return E.push(T.wrapS),E.push(T.wrapT),E.push(T.wrapR||0),E.push(T.magFilter),E.push(T.minFilter),E.push(T.anisotropy),E.push(T.internalFormat),E.push(T.format),E.push(T.type),E.push(T.generateMipmaps),E.push(T.premultiplyAlpha),E.push(T.flipY),E.push(T.unpackAlignment),E.push(T.colorSpace),E.join()}function K(T,E){const B=i.get(T);if(T.isVideoTexture&&Ge(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const U=T.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(B,T,E);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+E)}function L(T,E){const B=i.get(T);if(T.version>0&&B.__version!==T.version){Oe(B,T,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+E)}function b(T,E){const B=i.get(T);if(T.version>0&&B.__version!==T.version){Oe(B,T,E);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+E)}function q(T,E){const B=i.get(T);if(T.version>0&&B.__version!==T.version){ht(B,T,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+E)}const ne={[mc]:t.REPEAT,[yn]:t.CLAMP_TO_EDGE,[gc]:t.MIRRORED_REPEAT},re={[zt]:t.NEAREST,[nh]:t.NEAREST_MIPMAP_NEAREST,[Kl]:t.NEAREST_MIPMAP_LINEAR,[sn]:t.LINEAR,[cx]:t.LINEAR_MIPMAP_NEAREST,[So]:t.LINEAR_MIPMAP_LINEAR},ye={[Tx]:t.NEVER,[bx]:t.ALWAYS,[wx]:t.LESS,[Rx]:t.LEQUAL,[Ax]:t.EQUAL,[Px]:t.GEQUAL,[Cx]:t.GREATER,[Lx]:t.NOTEQUAL};function Ee(T,E,B){if(B?(t.texParameteri(T,t.TEXTURE_WRAP_S,ne[E.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,ne[E.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,ne[E.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,re[E.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,re[E.minFilter])):(t.texParameteri(T,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(T,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==yn||E.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(T,t.TEXTURE_MAG_FILTER,R(E.magFilter)),t.texParameteri(T,t.TEXTURE_MIN_FILTER,R(E.minFilter)),E.minFilter!==zt&&E.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,ye[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===zt||E.minFilter!==Kl&&E.minFilter!==So||E.type===ci&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Eo&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function Se(T,E){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",Q));const U=E.source;let ee=f.get(U);ee===void 0&&(ee={},f.set(U,ee));const ie=te(E);if(ie!==T.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[ie].usedTimes++;const Te=ee[T.__cacheKey];Te!==void 0&&(ee[T.__cacheKey].usedTimes--,Te.usedTimes===0&&G(E)),T.__cacheKey=ie,T.__webglTexture=ee[ie].texture}return B}function Oe(T,E,B){let U=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(U=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(U=t.TEXTURE_3D);const ee=Se(T,E),ie=E.source;n.bindTexture(U,T.__webglTexture,t.TEXTURE0+B);const Te=i.get(ie);if(ie.version!==Te.__version||ee===!0){n.activeTexture(t.TEXTURE0+B),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const oe=A(E)&&y(E.image)===!1;let H=_(E.image,oe,!1,h);H=Me(E,H);const Re=y(H)||a,ge=s.convert(E.format,E.colorSpace);let we=s.convert(E.type),he=I(E.internalFormat,ge,we,E.colorSpace,E.isVideoTexture);Ee(U,E,Re);let pe;const Ve=E.mipmaps,Ze=a&&E.isVideoTexture!==!0,P=Te.__version===void 0||ee===!0,ce=S(E,H,Re);if(E.isDepthTexture)he=t.DEPTH_COMPONENT,a?E.type===ci?he=t.DEPTH_COMPONENT32F:E.type===ui?he=t.DEPTH_COMPONENT24:E.type===$i?he=t.DEPTH24_STENCIL8:he=t.DEPTH_COMPONENT16:E.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ki&&he===t.DEPTH_COMPONENT&&E.type!==yf&&E.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ui,we=s.convert(E.type)),E.format===ns&&he===t.DEPTH_COMPONENT&&(he=t.DEPTH_STENCIL,E.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=$i,we=s.convert(E.type))),P&&(Ze?n.texStorage2D(t.TEXTURE_2D,1,he,H.width,H.height):n.texImage2D(t.TEXTURE_2D,0,he,H.width,H.height,0,ge,we,null));else if(E.isDataTexture)if(Ve.length>0&&Re){Ze&&P&&n.texStorage2D(t.TEXTURE_2D,ce,he,Ve[0].width,Ve[0].height);for(let V=0,ae=Ve.length;V<ae;V++)pe=Ve[V],Ze?n.texSubImage2D(t.TEXTURE_2D,V,0,0,pe.width,pe.height,ge,we,pe.data):n.texImage2D(t.TEXTURE_2D,V,he,pe.width,pe.height,0,ge,we,pe.data);E.generateMipmaps=!1}else Ze?(P&&n.texStorage2D(t.TEXTURE_2D,ce,he,H.width,H.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,H.width,H.height,ge,we,H.data)):n.texImage2D(t.TEXTURE_2D,0,he,H.width,H.height,0,ge,we,H.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ze&&P&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,he,Ve[0].width,Ve[0].height,H.depth);for(let V=0,ae=Ve.length;V<ae;V++)pe=Ve[V],E.format!==Sn?ge!==null?Ze?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,pe.width,pe.height,H.depth,ge,pe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,V,he,pe.width,pe.height,H.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,pe.width,pe.height,H.depth,ge,we,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,V,he,pe.width,pe.height,H.depth,0,ge,we,pe.data)}else{Ze&&P&&n.texStorage2D(t.TEXTURE_2D,ce,he,Ve[0].width,Ve[0].height);for(let V=0,ae=Ve.length;V<ae;V++)pe=Ve[V],E.format!==Sn?ge!==null?Ze?n.compressedTexSubImage2D(t.TEXTURE_2D,V,0,0,pe.width,pe.height,ge,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,V,he,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage2D(t.TEXTURE_2D,V,0,0,pe.width,pe.height,ge,we,pe.data):n.texImage2D(t.TEXTURE_2D,V,he,pe.width,pe.height,0,ge,we,pe.data)}else if(E.isDataArrayTexture)Ze?(P&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,he,H.width,H.height,H.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,ge,we,H.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,H.width,H.height,H.depth,0,ge,we,H.data);else if(E.isData3DTexture)Ze?(P&&n.texStorage3D(t.TEXTURE_3D,ce,he,H.width,H.height,H.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,ge,we,H.data)):n.texImage3D(t.TEXTURE_3D,0,he,H.width,H.height,H.depth,0,ge,we,H.data);else if(E.isFramebufferTexture){if(P)if(Ze)n.texStorage2D(t.TEXTURE_2D,ce,he,H.width,H.height);else{let V=H.width,ae=H.height;for(let fe=0;fe<ce;fe++)n.texImage2D(t.TEXTURE_2D,fe,he,V,ae,0,ge,we,null),V>>=1,ae>>=1}}else if(Ve.length>0&&Re){Ze&&P&&n.texStorage2D(t.TEXTURE_2D,ce,he,Ve[0].width,Ve[0].height);for(let V=0,ae=Ve.length;V<ae;V++)pe=Ve[V],Ze?n.texSubImage2D(t.TEXTURE_2D,V,0,0,ge,we,pe):n.texImage2D(t.TEXTURE_2D,V,he,ge,we,pe);E.generateMipmaps=!1}else Ze?(P&&n.texStorage2D(t.TEXTURE_2D,ce,he,H.width,H.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,we,H)):n.texImage2D(t.TEXTURE_2D,0,he,ge,we,H);w(E,Re)&&C(U),Te.__version=ie.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function ht(T,E,B){if(E.image.length!==6)return;const U=Se(T,E),ee=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+B);const ie=i.get(ee);if(ee.version!==ie.__version||U===!0){n.activeTexture(t.TEXTURE0+B),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Te=E.isCompressedTexture||E.image[0].isCompressedTexture,oe=E.image[0]&&E.image[0].isDataTexture,H=[];for(let V=0;V<6;V++)!Te&&!oe?H[V]=_(E.image[V],!1,!0,u):H[V]=oe?E.image[V].image:E.image[V],H[V]=Me(E,H[V]);const Re=H[0],ge=y(Re)||a,we=s.convert(E.format,E.colorSpace),he=s.convert(E.type),pe=I(E.internalFormat,we,he,E.colorSpace),Ve=a&&E.isVideoTexture!==!0,Ze=ie.__version===void 0||U===!0;let P=S(E,Re,ge);Ee(t.TEXTURE_CUBE_MAP,E,ge);let ce;if(Te){Ve&&Ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,P,pe,Re.width,Re.height);for(let V=0;V<6;V++){ce=H[V].mipmaps;for(let ae=0;ae<ce.length;ae++){const fe=ce[ae];E.format!==Sn?we!==null?Ve?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae,0,0,fe.width,fe.height,we,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae,pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae,0,0,fe.width,fe.height,we,he,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae,pe,fe.width,fe.height,0,we,he,fe.data)}}}else{ce=E.mipmaps,Ve&&Ze&&(ce.length>0&&P++,n.texStorage2D(t.TEXTURE_CUBE_MAP,P,pe,H[0].width,H[0].height));for(let V=0;V<6;V++)if(oe){Ve?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,H[V].width,H[V].height,we,he,H[V].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,pe,H[V].width,H[V].height,0,we,he,H[V].data);for(let ae=0;ae<ce.length;ae++){const qe=ce[ae].image[V].image;Ve?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae+1,0,0,qe.width,qe.height,we,he,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae+1,pe,qe.width,qe.height,0,we,he,qe.data)}}else{Ve?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,we,he,H[V]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,pe,we,he,H[V]);for(let ae=0;ae<ce.length;ae++){const fe=ce[ae];Ve?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae+1,0,0,we,he,fe.image[V]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae+1,pe,we,he,fe.image[V])}}}w(E,ge)&&C(t.TEXTURE_CUBE_MAP),ie.__version=ee.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function Ne(T,E,B,U,ee,ie){const Te=s.convert(B.format,B.colorSpace),oe=s.convert(B.type),H=I(B.internalFormat,Te,oe,B.colorSpace);if(!i.get(E).__hasExternalTextures){const ge=Math.max(1,E.width>>ie),we=Math.max(1,E.height>>ie);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,ie,H,ge,we,E.depth,0,Te,oe,null):n.texImage2D(ee,ie,H,ge,we,0,Te,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),Ce(E)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,U,ee,i.get(B).__webglTexture,0,ue(E)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,U,ee,i.get(B).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function F(T,E,B){if(t.bindRenderbuffer(t.RENDERBUFFER,T),E.depthBuffer&&!E.stencilBuffer){let U=t.DEPTH_COMPONENT16;if(B||Ce(E)){const ee=E.depthTexture;ee&&ee.isDepthTexture&&(ee.type===ci?U=t.DEPTH_COMPONENT32F:ee.type===ui&&(U=t.DEPTH_COMPONENT24));const ie=ue(E);Ce(E)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,U,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,U,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,U,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,T)}else if(E.depthBuffer&&E.stencilBuffer){const U=ue(E);B&&Ce(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,U,t.DEPTH24_STENCIL8,E.width,E.height):Ce(E)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,U,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,T)}else{const U=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0;ee<U.length;ee++){const ie=U[ee],Te=s.convert(ie.format,ie.colorSpace),oe=s.convert(ie.type),H=I(ie.internalFormat,Te,oe,ie.colorSpace),Re=ue(E);B&&Ce(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,H,E.width,E.height):Ce(E)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Re,H,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,H,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function at(T,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);const U=i.get(E.depthTexture).__webglTexture,ee=ue(E);if(E.depthTexture.format===Ki)Ce(E)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,U,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,U,0);else if(E.depthTexture.format===ns)Ce(E)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,U,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,U,0);else throw new Error("Unknown depthTexture format")}function Ae(T){const E=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");at(E.__webglFramebuffer,T)}else if(B){E.__webglDepthbuffer=[];for(let U=0;U<6;U++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[U]),E.__webglDepthbuffer[U]=t.createRenderbuffer(),F(E.__webglDepthbuffer[U],T,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),F(E.__webglDepthbuffer,T,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(T,E,B){const U=i.get(T);E!==void 0&&Ne(U.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Ae(T)}function Z(T){const E=T.texture,B=i.get(T),U=i.get(E);T.addEventListener("dispose",J),T.isWebGLMultipleRenderTargets!==!0&&(U.__webglTexture===void 0&&(U.__webglTexture=t.createTexture()),U.__version=E.version,o.memory.textures++);const ee=T.isWebGLCubeRenderTarget===!0,ie=T.isWebGLMultipleRenderTargets===!0,Te=y(T)||a;if(ee){B.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[oe]=[];for(let H=0;H<E.mipmaps.length;H++)B.__webglFramebuffer[oe][H]=t.createFramebuffer()}else B.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)B.__webglFramebuffer[oe]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ie)if(r.drawBuffers){const oe=T.texture;for(let H=0,Re=oe.length;H<Re;H++){const ge=i.get(oe[H]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Ce(T)===!1){const oe=ie?E:[E];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let H=0;H<oe.length;H++){const Re=oe[H];B.__webglColorRenderbuffer[H]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[H]);const ge=s.convert(Re.format,Re.colorSpace),we=s.convert(Re.type),he=I(Re.internalFormat,ge,we,Re.colorSpace,T.isXRRenderTarget===!0),pe=ue(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,he,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+H,t.RENDERBUFFER,B.__webglColorRenderbuffer[H])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),F(B.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture),Ee(t.TEXTURE_CUBE_MAP,E,Te);for(let oe=0;oe<6;oe++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let H=0;H<E.mipmaps.length;H++)Ne(B.__webglFramebuffer[oe][H],T,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,H);else Ne(B.__webglFramebuffer[oe],T,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);w(E,Te)&&C(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){const oe=T.texture;for(let H=0,Re=oe.length;H<Re;H++){const ge=oe[H],we=i.get(ge);n.bindTexture(t.TEXTURE_2D,we.__webglTexture),Ee(t.TEXTURE_2D,ge,Te),Ne(B.__webglFramebuffer,T,ge,t.COLOR_ATTACHMENT0+H,t.TEXTURE_2D,0),w(ge,Te)&&C(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?oe=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(oe,U.__webglTexture),Ee(oe,E,Te),a&&E.mipmaps&&E.mipmaps.length>0)for(let H=0;H<E.mipmaps.length;H++)Ne(B.__webglFramebuffer[H],T,E,t.COLOR_ATTACHMENT0,oe,H);else Ne(B.__webglFramebuffer,T,E,t.COLOR_ATTACHMENT0,oe,0);w(E,Te)&&C(oe),n.unbindTexture()}T.depthBuffer&&Ae(T)}function me(T){const E=y(T)||a,B=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let U=0,ee=B.length;U<ee;U++){const ie=B[U];if(w(ie,E)){const Te=T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,oe=i.get(ie).__webglTexture;n.bindTexture(Te,oe),C(Te),n.unbindTexture()}}}function de(T){if(a&&T.samples>0&&Ce(T)===!1){const E=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],B=T.width,U=T.height;let ee=t.COLOR_BUFFER_BIT;const ie=[],Te=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=i.get(T),H=T.isWebGLMultipleRenderTargets===!0;if(H)for(let Re=0;Re<E.length;Re++)n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Re=0;Re<E.length;Re++){ie.push(t.COLOR_ATTACHMENT0+Re),T.depthBuffer&&ie.push(Te);const ge=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(ge===!1&&(T.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),H&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[Re]),ge===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Te]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Te])),H){const we=i.get(E[Re]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,we,0)}t.blitFramebuffer(0,0,B,U,0,0,B,U,ee,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),H)for(let Re=0;Re<E.length;Re++){n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,oe.__webglColorRenderbuffer[Re]);const ge=i.get(E[Re]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,ge,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function ue(T){return Math.min(p,T.samples)}function Ce(T){const E=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ge(T){const E=o.render.frame;v.get(T)!==E&&(v.set(T,E),T.update())}function Me(T,E){const B=T.colorSpace,U=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===_c||B!==Un&&B!==Qi&&(B===tt||B===xl?a===!1?e.has("EXT_sRGB")===!0&&U===Sn?(T.format=_c,T.minFilter=sn,T.generateMipmaps=!1):E=Fg.sRGBToLinear(E):(U!==Sn||ee!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}this.allocateTextureUnit=Y,this.resetTextureUnits=W,this.setTexture2D=K,this.setTexture2DArray=L,this.setTexture3D=b,this.setTextureCube=q,this.rebindTextures=be,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Ce}const YM=0,vt=1;function qM(t,e,n){const i=n.isWebGL2;function r(s,o=Qi){let a;const l=o===tt||o===xl?vt:YM;if(s===Si)return t.UNSIGNED_BYTE;if(s===Cg)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Lg)return t.UNSIGNED_SHORT_5_5_5_1;if(s===fx)return t.BYTE;if(s===dx)return t.SHORT;if(s===yf)return t.UNSIGNED_SHORT;if(s===Rg)return t.INT;if(s===ui)return t.UNSIGNED_INT;if(s===ci)return t.FLOAT;if(s===Eo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===hx)return t.ALPHA;if(s===Sn)return t.RGBA;if(s===px)return t.LUMINANCE;if(s===mx)return t.LUMINANCE_ALPHA;if(s===Ki)return t.DEPTH_COMPONENT;if(s===ns)return t.DEPTH_STENCIL;if(s===_c)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===gx)return t.RED;if(s===Pg)return t.RED_INTEGER;if(s===_x)return t.RG;if(s===bg)return t.RG_INTEGER;if(s===Dg)return t.RGBA_INTEGER;if(s===Zl||s===Ql||s===Jl||s===eu)if(l===vt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Zl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Zl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ql)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===eu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ih||s===rh||s===sh||s===oh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ih)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===oh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===vx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ah||s===lh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ah)return l===vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===lh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===uh||s===ch||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===_h||s===vh||s===xh||s===yh||s===Sh||s===Eh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===uh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ch)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ph)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_h)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Eh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===tu||s===Mh||s===Th)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===tu)return l===vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Mh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Th)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===xx||s===wh||s===Ah||s===Rh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===tu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===wh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ah)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$i?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class $M extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yi extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KM={type:"move"};class Mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const f=n.getJointPose(x,i),c=this._getHandJoint(u,x);f!==null&&(c.matrix.fromArray(f.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=f.radius),c.visible=f!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],d=h.position.distanceTo(p.position),m=.02,v=.005;u.inputState.pinching&&d>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Yi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class ZM extends Jt{constructor(e,n,i,r,s,o,a,l,u,h){if(h=h!==void 0?h:Ki,h!==Ki&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ki&&(i=ui),i===void 0&&h===ns&&(i=$i),super(null,r,s,o,a,l,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class QM extends ds{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,h=null,p=null,d=null,m=null,v=null;const x=n.getContextAttributes();let f=null,c=null;const g=[],_=[],y=new Zt;y.layers.enable(1),y.viewport=new it;const A=new Zt;A.layers.enable(2),A.viewport=new it;const w=[y,A],C=new $M;C.layers.enable(1),C.layers.enable(2);let I=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let b=g[L];return b===void 0&&(b=new Mu,g[L]=b),b.getTargetRaySpace()},this.getControllerGrip=function(L){let b=g[L];return b===void 0&&(b=new Mu,g[L]=b),b.getGripSpace()},this.getHand=function(L){let b=g[L];return b===void 0&&(b=new Mu,g[L]=b),b.getHandSpace()};function R(L){const b=_.indexOf(L.inputSource);if(b===-1)return;const q=g[b];q!==void 0&&(q.update(L.inputSource,L.frame,u||o),q.dispatchEvent({type:L.type,data:L.inputSource}))}function Q(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",J);for(let L=0;L<g.length;L++){const b=_[L];b!==null&&(_[L]=null,g[L].disconnect(b))}I=null,S=null,e.setRenderTarget(f),m=null,d=null,p=null,r=null,c=null,K.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(L){u=L},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",J),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const b={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,b),r.updateRenderState({baseLayer:m}),c=new nr(m.framebufferWidth,m.framebufferHeight,{format:Sn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let b=null,q=null,ne=null;x.depth&&(ne=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,b=x.stencil?ns:Ki,q=x.stencil?$i:ui);const re={colorFormat:n.RGBA8,depthFormat:ne,scaleFactor:s};p=new XRWebGLBinding(r,n),d=p.createProjectionLayer(re),r.updateRenderState({layers:[d]}),c=new nr(d.textureWidth,d.textureHeight,{format:Sn,type:Si,depthTexture:new ZM(d.textureWidth,d.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,b),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const ye=e.properties.get(c);ye.__ignoreDepthValues=d.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),K.setContext(r),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function J(L){for(let b=0;b<L.removed.length;b++){const q=L.removed[b],ne=_.indexOf(q);ne>=0&&(_[ne]=null,g[ne].disconnect(q))}for(let b=0;b<L.added.length;b++){const q=L.added[b];let ne=_.indexOf(q);if(ne===-1){for(let ye=0;ye<g.length;ye++)if(ye>=_.length){_.push(q),ne=ye;break}else if(_[ye]===null){_[ye]=q,ne=ye;break}if(ne===-1)break}const re=g[ne];re&&re.connect(q)}}const D=new N,G=new N;function k(L,b,q){D.setFromMatrixPosition(b.matrixWorld),G.setFromMatrixPosition(q.matrixWorld);const ne=D.distanceTo(G),re=b.projectionMatrix.elements,ye=q.projectionMatrix.elements,Ee=re[14]/(re[10]-1),Se=re[14]/(re[10]+1),Oe=(re[9]+1)/re[5],ht=(re[9]-1)/re[5],Ne=(re[8]-1)/re[0],F=(ye[8]+1)/ye[0],at=Ee*Ne,Ae=Ee*F,be=ne/(-Ne+F),Z=be*-Ne;b.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Z),L.translateZ(be),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const me=Ee+be,de=Se+be,ue=at-Z,Ce=Ae+(ne-Z),Ge=Oe*Se/de*me,Me=ht*Se/de*me;L.projectionMatrix.makePerspective(ue,Ce,Ge,Me,me,de),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function $(L,b){b===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(b.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;C.near=A.near=y.near=L.near,C.far=A.far=y.far=L.far,(I!==C.near||S!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),I=C.near,S=C.far);const b=L.parent,q=C.cameras;$(C,b);for(let ne=0;ne<q.length;ne++)$(q[ne],b);q.length===2?k(C,y,A):C.projectionMatrix.copy(y.projectionMatrix),W(L,C,b)};function W(L,b,q){q===null?L.matrix.copy(b.matrixWorld):(L.matrix.copy(q.matrixWorld),L.matrix.invert(),L.matrix.multiply(b.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(b.projectionMatrix),L.projectionMatrixInverse.copy(b.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Mo*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(L){l=L,d!==null&&(d.fixedFoveation=L),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=L)};let Y=null;function te(L,b){if(h=b.getViewerPose(u||o),v=b,h!==null){const q=h.views;m!==null&&(e.setRenderTargetFramebuffer(c,m.framebuffer),e.setRenderTarget(c));let ne=!1;q.length!==C.cameras.length&&(C.cameras.length=0,ne=!0);for(let re=0;re<q.length;re++){const ye=q[re];let Ee=null;if(m!==null)Ee=m.getViewport(ye);else{const Oe=p.getViewSubImage(d,ye);Ee=Oe.viewport,re===0&&(e.setRenderTargetTextures(c,Oe.colorTexture,d.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(c))}let Se=w[re];Se===void 0&&(Se=new Zt,Se.layers.enable(re),Se.viewport=new it,w[re]=Se),Se.matrix.fromArray(ye.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(ye.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),re===0&&(C.matrix.copy(Se.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ne===!0&&C.cameras.push(Se)}}for(let q=0;q<g.length;q++){const ne=_[q],re=g[q];ne!==null&&re!==void 0&&re.update(ne,b,u||o)}Y&&Y(L,b),b.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:b}),v=null}const K=new qg;K.setAnimationLoop(te),this.setAnimationLoop=function(L){Y=L},this.dispose=function(){}}}function JM(t,e){function n(f,c){f.matrixAutoUpdate===!0&&f.updateMatrix(),c.value.copy(f.matrix)}function i(f,c){c.color.getRGB(f.fogColor.value,Xg(t)),c.isFog?(f.fogNear.value=c.near,f.fogFar.value=c.far):c.isFogExp2&&(f.fogDensity.value=c.density)}function r(f,c,g,_,y){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(f,c):c.isMeshToonMaterial?(s(f,c),p(f,c)):c.isMeshPhongMaterial?(s(f,c),h(f,c)):c.isMeshStandardMaterial?(s(f,c),d(f,c),c.isMeshPhysicalMaterial&&m(f,c,y)):c.isMeshMatcapMaterial?(s(f,c),v(f,c)):c.isMeshDepthMaterial?s(f,c):c.isMeshDistanceMaterial?(s(f,c),x(f,c)):c.isMeshNormalMaterial?s(f,c):c.isLineBasicMaterial?(o(f,c),c.isLineDashedMaterial&&a(f,c)):c.isPointsMaterial?l(f,c,g,_):c.isSpriteMaterial?u(f,c):c.isShadowMaterial?(f.color.value.copy(c.color),f.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(f,c){f.opacity.value=c.opacity,c.color&&f.diffuse.value.copy(c.color),c.emissive&&f.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(f.map.value=c.map,n(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.bumpMap&&(f.bumpMap.value=c.bumpMap,n(c.bumpMap,f.bumpMapTransform),f.bumpScale.value=c.bumpScale,c.side===Yt&&(f.bumpScale.value*=-1)),c.normalMap&&(f.normalMap.value=c.normalMap,n(c.normalMap,f.normalMapTransform),f.normalScale.value.copy(c.normalScale),c.side===Yt&&f.normalScale.value.negate()),c.displacementMap&&(f.displacementMap.value=c.displacementMap,n(c.displacementMap,f.displacementMapTransform),f.displacementScale.value=c.displacementScale,f.displacementBias.value=c.displacementBias),c.emissiveMap&&(f.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,f.emissiveMapTransform)),c.specularMap&&(f.specularMap.value=c.specularMap,n(c.specularMap,f.specularMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest);const g=e.get(c).envMap;if(g&&(f.envMap.value=g,f.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=c.reflectivity,f.ior.value=c.ior,f.refractionRatio.value=c.refractionRatio),c.lightMap){f.lightMap.value=c.lightMap;const _=t._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=c.lightMapIntensity*_,n(c.lightMap,f.lightMapTransform)}c.aoMap&&(f.aoMap.value=c.aoMap,f.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,f.aoMapTransform))}function o(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,c.map&&(f.map.value=c.map,n(c.map,f.mapTransform))}function a(f,c){f.dashSize.value=c.dashSize,f.totalSize.value=c.dashSize+c.gapSize,f.scale.value=c.scale}function l(f,c,g,_){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.size.value=c.size*g,f.scale.value=_*.5,c.map&&(f.map.value=c.map,n(c.map,f.uvTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function u(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.rotation.value=c.rotation,c.map&&(f.map.value=c.map,n(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function h(f,c){f.specular.value.copy(c.specular),f.shininess.value=Math.max(c.shininess,1e-4)}function p(f,c){c.gradientMap&&(f.gradientMap.value=c.gradientMap)}function d(f,c){f.metalness.value=c.metalness,c.metalnessMap&&(f.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,f.metalnessMapTransform)),f.roughness.value=c.roughness,c.roughnessMap&&(f.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,f.roughnessMapTransform)),e.get(c).envMap&&(f.envMapIntensity.value=c.envMapIntensity)}function m(f,c,g){f.ior.value=c.ior,c.sheen>0&&(f.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),f.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(f.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,f.sheenColorMapTransform)),c.sheenRoughnessMap&&(f.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,f.sheenRoughnessMapTransform))),c.clearcoat>0&&(f.clearcoat.value=c.clearcoat,f.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(f.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,f.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(f.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Yt&&f.clearcoatNormalScale.value.negate())),c.iridescence>0&&(f.iridescence.value=c.iridescence,f.iridescenceIOR.value=c.iridescenceIOR,f.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(f.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,f.iridescenceMapTransform)),c.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),c.transmission>0&&(f.transmission.value=c.transmission,f.transmissionSamplerMap.value=g.texture,f.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(f.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,f.transmissionMapTransform)),f.thickness.value=c.thickness,c.thicknessMap&&(f.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=c.attenuationDistance,f.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(f.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(f.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=c.specularIntensity,f.specularColor.value.copy(c.specularColor),c.specularColorMap&&(f.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,f.specularColorMapTransform)),c.specularIntensityMap&&(f.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,c){c.matcap&&(f.matcap.value=c.matcap)}function x(f,c){const g=e.get(c).light;f.referencePosition.value.setFromMatrixPosition(g.matrixWorld),f.nearDistance.value=g.shadow.camera.near,f.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,_){const y=_.program;i.uniformBlockBinding(g,y)}function u(g,_){let y=r[g.id];y===void 0&&(v(g),y=h(g),r[g.id]=y,g.addEventListener("dispose",f));const A=_.program;i.updateUBOMapping(g,A);const w=e.render.frame;s[g.id]!==w&&(d(g),s[g.id]=w)}function h(g){const _=p();g.__bindingPointIndex=_;const y=t.createBuffer(),A=g.__size,w=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,A,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function p(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const _=r[g.id],y=g.uniforms,A=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let w=0,C=y.length;w<C;w++){const I=y[w];if(m(I,w,A)===!0){const S=I.__offset,R=Array.isArray(I.value)?I.value:[I.value];let Q=0;for(let J=0;J<R.length;J++){const D=R[J],G=x(D);typeof D=="number"?(I.__data[0]=D,t.bufferSubData(t.UNIFORM_BUFFER,S+Q,I.__data)):D.isMatrix3?(I.__data[0]=D.elements[0],I.__data[1]=D.elements[1],I.__data[2]=D.elements[2],I.__data[3]=D.elements[0],I.__data[4]=D.elements[3],I.__data[5]=D.elements[4],I.__data[6]=D.elements[5],I.__data[7]=D.elements[0],I.__data[8]=D.elements[6],I.__data[9]=D.elements[7],I.__data[10]=D.elements[8],I.__data[11]=D.elements[0]):(D.toArray(I.__data,Q),Q+=G.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,I.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,_,y){const A=g.value;if(y[_]===void 0){if(typeof A=="number")y[_]=A;else{const w=Array.isArray(A)?A:[A],C=[];for(let I=0;I<w.length;I++)C.push(w[I].clone());y[_]=C}return!0}else if(typeof A=="number"){if(y[_]!==A)return y[_]=A,!0}else{const w=Array.isArray(y[_])?y[_]:[y[_]],C=Array.isArray(A)?A:[A];for(let I=0;I<w.length;I++){const S=w[I];if(S.equals(C[I])===!1)return S.copy(C[I]),!0}}return!1}function v(g){const _=g.uniforms;let y=0;const A=16;let w=0;for(let C=0,I=_.length;C<I;C++){const S=_[C],R={boundary:0,storage:0},Q=Array.isArray(S.value)?S.value:[S.value];for(let J=0,D=Q.length;J<D;J++){const G=Q[J],k=x(G);R.boundary+=k.boundary,R.storage+=k.storage}if(S.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,C>0){w=y%A;const J=A-w;w!==0&&J-R.boundary<0&&(y+=A-w,S.__offset=y)}y+=R.storage}return w=y%A,w>0&&(y+=A-w),g.__size=y,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function f(g){const _=g.target;_.removeEventListener("dispose",f);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function c(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class e0{constructor(e={}){const{canvas:n=Yx(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,f=null;const c=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=tt,this._useLegacyLights=!1,this.toneMapping=yi,this.toneMappingExposure=1;const _=this;let y=!1,A=0,w=0,C=null,I=-1,S=null;const R=new it,Q=new it;let J=null;const D=new je(0);let G=0,k=n.width,$=n.height,W=1,Y=null,te=null;const K=new it(0,0,k,$),L=new it(0,0,k,$);let b=!1;const q=new Ef;let ne=!1,re=!1,ye=null;const Ee=new rt,Se=new $e,Oe=new N,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return C===null?W:1}let F=i;function at(M,O){for(let X=0;X<M.length;X++){const z=M[X],j=n.getContext(z,O);if(j!==null)return j}return null}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xf}`),n.addEventListener("webglcontextlost",ce,!1),n.addEventListener("webglcontextrestored",V,!1),n.addEventListener("webglcontextcreationerror",ae,!1),F===null){const O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&O.shift(),F=at(O,M),F===null)throw at(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ae,be,Z,me,de,ue,Ce,Ge,Me,T,E,B,U,ee,ie,Te,oe,H,Re,ge,we,he,pe,Ve;function Ze(){Ae=new cE(F),be=new rE(F,Ae,e),Ae.init(be),he=new qM(F,Ae,be),Z=new XM(F,Ae,be),me=new hE(F),de=new bM,ue=new jM(F,Ae,Z,de,be,he,me),Ce=new oE(_),Ge=new uE(_),Me=new M1(F,be),pe=new nE(F,Ae,Me,be),T=new fE(F,Me,me,pe),E=new _E(F,T,Me,me),Re=new gE(F,be,ue),Te=new sE(de),B=new PM(_,Ce,Ge,Ae,be,pe,Te),U=new JM(_,de),ee=new UM,ie=new zM(Ae,be),H=new tE(_,Ce,Ge,Z,E,d,l),oe=new WM(_,E,be),Ve=new eT(F,me,be,Z),ge=new iE(F,Ae,me,be),we=new dE(F,Ae,me,be),me.programs=B.programs,_.capabilities=be,_.extensions=Ae,_.properties=de,_.renderLists=ee,_.shadowMap=oe,_.state=Z,_.info=me}Ze();const P=new QM(_,F);this.xr=P,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=Ae.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ae.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(M){M!==void 0&&(W=M,this.setSize(k,$,!1))},this.getSize=function(M){return M.set(k,$)},this.setSize=function(M,O,X=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=M,$=O,n.width=Math.floor(M*W),n.height=Math.floor(O*W),X===!0&&(n.style.width=M+"px",n.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(k*W,$*W).floor()},this.setDrawingBufferSize=function(M,O,X){k=M,$=O,W=X,n.width=Math.floor(M*X),n.height=Math.floor(O*X),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(K)},this.setViewport=function(M,O,X,z){M.isVector4?K.set(M.x,M.y,M.z,M.w):K.set(M,O,X,z),Z.viewport(R.copy(K).multiplyScalar(W).floor())},this.getScissor=function(M){return M.copy(L)},this.setScissor=function(M,O,X,z){M.isVector4?L.set(M.x,M.y,M.z,M.w):L.set(M,O,X,z),Z.scissor(Q.copy(L).multiplyScalar(W).floor())},this.getScissorTest=function(){return b},this.setScissorTest=function(M){Z.setScissorTest(b=M)},this.setOpaqueSort=function(M){Y=M},this.setTransparentSort=function(M){te=M},this.getClearColor=function(M){return M.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(M=!0,O=!0,X=!0){let z=0;if(M){let j=!1;if(C!==null){const xe=C.texture.format;j=xe===Dg||xe===bg||xe===Pg}if(j){const xe=C.texture.type,Pe=xe===Si||xe===ui||xe===yf||xe===$i||xe===Cg||xe===Lg,Ie=H.getClearColor(),Fe=H.getClearAlpha(),We=Ie.r,De=Ie.g,ze=Ie.b;Pe?(m[0]=We,m[1]=De,m[2]=ze,m[3]=Fe,F.clearBufferuiv(F.COLOR,0,m)):(v[0]=We,v[1]=De,v[2]=ze,v[3]=Fe,F.clearBufferiv(F.COLOR,0,v))}else z|=F.COLOR_BUFFER_BIT}O&&(z|=F.DEPTH_BUFFER_BIT),X&&(z|=F.STENCIL_BUFFER_BIT),F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ce,!1),n.removeEventListener("webglcontextrestored",V,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),ee.dispose(),ie.dispose(),de.dispose(),Ce.dispose(),Ge.dispose(),E.dispose(),pe.dispose(),Ve.dispose(),B.dispose(),P.dispose(),P.removeEventListener("sessionstart",Je),P.removeEventListener("sessionend",Tn),ye&&(ye.dispose(),ye=null),It.stop()};function ce(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const M=me.autoReset,O=oe.enabled,X=oe.autoUpdate,z=oe.needsUpdate,j=oe.type;Ze(),me.autoReset=M,oe.enabled=O,oe.autoUpdate=X,oe.needsUpdate=z,oe.type=j}function ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function fe(M){const O=M.target;O.removeEventListener("dispose",fe),qe(O)}function qe(M){ot(M),de.remove(M)}function ot(M){const O=de.get(M).programs;O!==void 0&&(O.forEach(function(X){B.releaseProgram(X)}),M.isShaderMaterial&&B.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,X,z,j,xe){O===null&&(O=ht);const Pe=j.isMesh&&j.matrixWorld.determinant()<0,Ie=o0(M,O,X,z,j);Z.setMaterial(z,Pe);let Fe=X.index,We=1;if(z.wireframe===!0){if(Fe=T.getWireframeAttribute(X),Fe===void 0)return;We=2}const De=X.drawRange,ze=X.attributes.position;let lt=De.start*We,ft=(De.start+De.count)*We;xe!==null&&(lt=Math.max(lt,xe.start*We),ft=Math.min(ft,(xe.start+xe.count)*We)),Fe!==null?(lt=Math.max(lt,0),ft=Math.min(ft,Fe.count)):ze!=null&&(lt=Math.max(lt,0),ft=Math.min(ft,ze.count));const tn=ft-lt;if(tn<0||tn===1/0)return;pe.setup(j,z,Ie,X,Fe);let Fn,mt=ge;if(Fe!==null&&(Fn=Me.get(Fe),mt=we,mt.setIndex(Fn)),j.isMesh)z.wireframe===!0?(Z.setLineWidth(z.wireframeLinewidth*Ne()),mt.setMode(F.LINES)):mt.setMode(F.TRIANGLES);else if(j.isLine){let Xe=z.linewidth;Xe===void 0&&(Xe=1),Z.setLineWidth(Xe*Ne()),j.isLineSegments?mt.setMode(F.LINES):j.isLineLoop?mt.setMode(F.LINE_LOOP):mt.setMode(F.LINE_STRIP)}else j.isPoints?mt.setMode(F.POINTS):j.isSprite&&mt.setMode(F.TRIANGLES);if(j.isInstancedMesh)mt.renderInstances(lt,tn,j.count);else if(X.isInstancedBufferGeometry){const Xe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,El=Math.min(X.instanceCount,Xe);mt.renderInstances(lt,tn,El)}else mt.render(lt,tn)},this.compile=function(M,O){function X(z,j,xe){z.transparent===!0&&z.side===Rn&&z.forceSinglePass===!1?(z.side=Yt,z.needsUpdate=!0,Uo(z,j,xe),z.side=Ri,z.needsUpdate=!0,Uo(z,j,xe),z.side=Rn):Uo(z,j,xe)}f=ie.get(M),f.init(),g.push(f),M.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights(_._useLegacyLights),M.traverse(function(z){const j=z.material;if(j)if(Array.isArray(j))for(let xe=0;xe<j.length;xe++){const Pe=j[xe];X(Pe,M,z)}else X(j,M,z)}),g.pop(),f=null};let pt=null;function Jn(M){pt&&pt(M)}function Je(){It.stop()}function Tn(){It.start()}const It=new qg;It.setAnimationLoop(Jn),typeof self!="undefined"&&It.setContext(self),this.setAnimationLoop=function(M){pt=M,P.setAnimationLoop(M),M===null?It.stop():It.start()},P.addEventListener("sessionstart",Je),P.addEventListener("sessionend",Tn),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(O),O=P.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,O,C),f=ie.get(M,g.length),f.init(),g.push(f),Ee.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(Ee),re=this.localClippingEnabled,ne=Te.init(this.clippingPlanes,re),x=ee.get(M,c.length),x.init(),c.push(x),Rf(M,O,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(Y,te),this.info.render.frame++,ne===!0&&Te.beginShadows();const X=f.state.shadowsArray;if(oe.render(X,M,O),ne===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(x,M),f.setupLights(_._useLegacyLights),O.isArrayCamera){const z=O.cameras;for(let j=0,xe=z.length;j<xe;j++){const Pe=z[j];Cf(x,M,Pe,Pe.viewport)}}else Cf(x,M,O);C!==null&&(ue.updateMultisampleRenderTarget(C),ue.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(_,M,O),pe.resetDefaultState(),I=-1,S=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function Rf(M,O,X,z){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){z&&Oe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ee);const Pe=E.update(M),Ie=M.material;Ie.visible&&x.push(M,Pe,Ie,X,Oe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||q.intersectsObject(M))){const Pe=E.update(M),Ie=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Oe.copy(M.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Oe.copy(Pe.boundingSphere.center)),Oe.applyMatrix4(M.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ie)){const Fe=Pe.groups;for(let We=0,De=Fe.length;We<De;We++){const ze=Fe[We],lt=Ie[ze.materialIndex];lt&&lt.visible&&x.push(M,Pe,lt,X,Oe.z,ze)}}else Ie.visible&&x.push(M,Pe,Ie,X,Oe.z,null)}}const xe=M.children;for(let Pe=0,Ie=xe.length;Pe<Ie;Pe++)Rf(xe[Pe],O,X,z)}function Cf(M,O,X,z){const j=M.opaque,xe=M.transmissive,Pe=M.transparent;f.setupLightsView(X),ne===!0&&Te.setGlobalState(_.clippingPlanes,X),xe.length>0&&s0(j,xe,O,X),z&&Z.viewport(R.copy(z)),j.length>0&&Do(j,O,X),xe.length>0&&Do(xe,O,X),Pe.length>0&&Do(Pe,O,X),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function s0(M,O,X,z){const j=be.isWebGL2;ye===null&&(ye=new nr(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?Eo:Si,minFilter:So,samples:j?4:0})),_.getDrawingBufferSize(Se),j?ye.setSize(Se.x,Se.y):ye.setSize(nl(Se.x),nl(Se.y));const xe=_.getRenderTarget();_.setRenderTarget(ye),_.getClearColor(D),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear();const Pe=_.toneMapping;_.toneMapping=yi,Do(M,X,z),ue.updateMultisampleRenderTarget(ye),ue.updateRenderTargetMipmap(ye);let Ie=!1;for(let Fe=0,We=O.length;Fe<We;Fe++){const De=O[Fe],ze=De.object,lt=De.geometry,ft=De.material,tn=De.group;if(ft.side===Rn&&ze.layers.test(z.layers)){const Fn=ft.side;ft.side=Yt,ft.needsUpdate=!0,Lf(ze,X,z,lt,ft,tn),ft.side=Fn,ft.needsUpdate=!0,Ie=!0}}Ie===!0&&(ue.updateMultisampleRenderTarget(ye),ue.updateRenderTargetMipmap(ye)),_.setRenderTarget(xe),_.setClearColor(D,G),_.toneMapping=Pe}function Do(M,O,X){const z=O.isScene===!0?O.overrideMaterial:null;for(let j=0,xe=M.length;j<xe;j++){const Pe=M[j],Ie=Pe.object,Fe=Pe.geometry,We=z===null?Pe.material:z,De=Pe.group;Ie.layers.test(X.layers)&&Lf(Ie,O,X,Fe,We,De)}}function Lf(M,O,X,z,j,xe){M.onBeforeRender(_,O,X,z,j,xe),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),j.onBeforeRender(_,O,X,z,M,xe),j.transparent===!0&&j.side===Rn&&j.forceSinglePass===!1?(j.side=Yt,j.needsUpdate=!0,_.renderBufferDirect(X,O,z,j,M,xe),j.side=Ri,j.needsUpdate=!0,_.renderBufferDirect(X,O,z,j,M,xe),j.side=Rn):_.renderBufferDirect(X,O,z,j,M,xe),M.onAfterRender(_,O,X,z,j,xe)}function Uo(M,O,X){O.isScene!==!0&&(O=ht);const z=de.get(M),j=f.state.lights,xe=f.state.shadowsArray,Pe=j.state.version,Ie=B.getParameters(M,j.state,xe,O,X),Fe=B.getProgramCacheKey(Ie);let We=z.programs;z.environment=M.isMeshStandardMaterial?O.environment:null,z.fog=O.fog,z.envMap=(M.isMeshStandardMaterial?Ge:Ce).get(M.envMap||z.environment),We===void 0&&(M.addEventListener("dispose",fe),We=new Map,z.programs=We);let De=We.get(Fe);if(De!==void 0){if(z.currentProgram===De&&z.lightsStateVersion===Pe)return Pf(M,Ie),De}else Ie.uniforms=B.getUniforms(M),M.onBuild(X,Ie,_),M.onBeforeCompile(Ie,_),De=B.acquireProgram(Ie,Fe),We.set(Fe,De),z.uniforms=Ie.uniforms;const ze=z.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ze.clippingPlanes=Te.uniform),Pf(M,Ie),z.needsLights=l0(M),z.lightsStateVersion=Pe,z.needsLights&&(ze.ambientLightColor.value=j.state.ambient,ze.lightProbe.value=j.state.probe,ze.directionalLights.value=j.state.directional,ze.directionalLightShadows.value=j.state.directionalShadow,ze.spotLights.value=j.state.spot,ze.spotLightShadows.value=j.state.spotShadow,ze.rectAreaLights.value=j.state.rectArea,ze.ltc_1.value=j.state.rectAreaLTC1,ze.ltc_2.value=j.state.rectAreaLTC2,ze.pointLights.value=j.state.point,ze.pointLightShadows.value=j.state.pointShadow,ze.hemisphereLights.value=j.state.hemi,ze.directionalShadowMap.value=j.state.directionalShadowMap,ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ze.spotShadowMap.value=j.state.spotShadowMap,ze.spotLightMatrix.value=j.state.spotLightMatrix,ze.spotLightMap.value=j.state.spotLightMap,ze.pointShadowMap.value=j.state.pointShadowMap,ze.pointShadowMatrix.value=j.state.pointShadowMatrix);const lt=De.getUniforms(),ft=Ca.seqWithValue(lt.seq,ze);return z.currentProgram=De,z.uniformsList=ft,De}function Pf(M,O){const X=de.get(M);X.outputColorSpace=O.outputColorSpace,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function o0(M,O,X,z,j){O.isScene!==!0&&(O=ht),ue.resetTextureUnits();const xe=O.fog,Pe=z.isMeshStandardMaterial?O.environment:null,Ie=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Un,Fe=(z.isMeshStandardMaterial?Ge:Ce).get(z.envMap||Pe),We=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,De=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ze=!!X.morphAttributes.position,lt=!!X.morphAttributes.normal,ft=!!X.morphAttributes.color;let tn=yi;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(tn=_.toneMapping);const Fn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,mt=Fn!==void 0?Fn.length:0,Xe=de.get(z),El=f.state.lights;if(ne===!0&&(re===!0||M!==S)){const qt=M===S&&z.id===I;Te.setState(z,M,qt)}let gt=!1;z.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==El.state.version||Xe.outputColorSpace!==Ie||j.isInstancedMesh&&Xe.instancing===!1||!j.isInstancedMesh&&Xe.instancing===!0||j.isSkinnedMesh&&Xe.skinning===!1||!j.isSkinnedMesh&&Xe.skinning===!0||j.isInstancedMesh&&Xe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Xe.instancingColor===!1&&j.instanceColor!==null||Xe.envMap!==Fe||z.fog===!0&&Xe.fog!==xe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Te.numPlanes||Xe.numIntersection!==Te.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==De||Xe.morphTargets!==ze||Xe.morphNormals!==lt||Xe.morphColors!==ft||Xe.toneMapping!==tn||be.isWebGL2===!0&&Xe.morphTargetsCount!==mt)&&(gt=!0):(gt=!0,Xe.__version=z.version);let Di=Xe.currentProgram;gt===!0&&(Di=Uo(z,O,j));let bf=!1,vs=!1,Ml=!1;const Ft=Di.getUniforms(),Ui=Xe.uniforms;if(Z.useProgram(Di.program)&&(bf=!0,vs=!0,Ml=!0),z.id!==I&&(I=z.id,vs=!0),bf||S!==M){Ft.setValue(F,"projectionMatrix",M.projectionMatrix),Ft.setValue(F,"viewMatrix",M.matrixWorldInverse);const qt=Ft.map.cameraPosition;qt!==void 0&&qt.setValue(F,Oe.setFromMatrixPosition(M.matrixWorld)),be.logarithmicDepthBuffer&&Ft.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ft.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,vs=!0,Ml=!0)}if(j.isSkinnedMesh){Ft.setOptional(F,j,"bindMatrix"),Ft.setOptional(F,j,"bindMatrixInverse");const qt=j.skeleton;qt&&(be.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),Ft.setValue(F,"boneTexture",qt.boneTexture,ue),Ft.setValue(F,"boneTextureSize",qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Tl=X.morphAttributes;if((Tl.position!==void 0||Tl.normal!==void 0||Tl.color!==void 0&&be.isWebGL2===!0)&&Re.update(j,X,Di),(vs||Xe.receiveShadow!==j.receiveShadow)&&(Xe.receiveShadow=j.receiveShadow,Ft.setValue(F,"receiveShadow",j.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ui.envMap.value=Fe,Ui.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),vs&&(Ft.setValue(F,"toneMappingExposure",_.toneMappingExposure),Xe.needsLights&&a0(Ui,Ml),xe&&z.fog===!0&&U.refreshFogUniforms(Ui,xe),U.refreshMaterialUniforms(Ui,z,W,$,ye),Ca.upload(F,Xe.uniformsList,Ui,ue)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ca.upload(F,Xe.uniformsList,Ui,ue),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ft.setValue(F,"center",j.center),Ft.setValue(F,"modelViewMatrix",j.modelViewMatrix),Ft.setValue(F,"normalMatrix",j.normalMatrix),Ft.setValue(F,"modelMatrix",j.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const qt=z.uniformsGroups;for(let wl=0,u0=qt.length;wl<u0;wl++)if(be.isWebGL2){const Df=qt[wl];Ve.update(Df,Di),Ve.bind(Df,Di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Di}function a0(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function l0(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,O,X){de.get(M.texture).__webglTexture=O,de.get(M.depthTexture).__webglTexture=X;const z=de.get(M);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=X===void 0,z.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,O){const X=de.get(M);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,X=0){C=M,A=O,w=X;let z=!0,j=null,xe=!1,Pe=!1;if(M){const Fe=de.get(M);Fe.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(F.FRAMEBUFFER,null),z=!1):Fe.__webglFramebuffer===void 0?ue.setupRenderTarget(M):Fe.__hasExternalTextures&&ue.rebindTextures(M,de.get(M.texture).__webglTexture,de.get(M.depthTexture).__webglTexture);const We=M.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const De=de.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(De[O])?j=De[O][X]:j=De[O],xe=!0):be.isWebGL2&&M.samples>0&&ue.useMultisampledRTT(M)===!1?j=de.get(M).__webglMultisampledFramebuffer:Array.isArray(De)?j=De[X]:j=De,R.copy(M.viewport),Q.copy(M.scissor),J=M.scissorTest}else R.copy(K).multiplyScalar(W).floor(),Q.copy(L).multiplyScalar(W).floor(),J=b;if(Z.bindFramebuffer(F.FRAMEBUFFER,j)&&be.drawBuffers&&z&&Z.drawBuffers(M,j),Z.viewport(R),Z.scissor(Q),Z.setScissorTest(J),xe){const Fe=de.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Fe.__webglTexture,X)}else if(Pe){const Fe=de.get(M.texture),We=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Fe.__webglTexture,X||0,We)}I=-1},this.readRenderTargetPixels=function(M,O,X,z,j,xe,Pe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=de.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){Z.bindFramebuffer(F.FRAMEBUFFER,Ie);try{const Fe=M.texture,We=Fe.format,De=Fe.type;if(We!==Sn&&he.convert(We)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=De===Eo&&(Ae.has("EXT_color_buffer_half_float")||be.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(De!==Si&&he.convert(De)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===ci&&(be.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-z&&X>=0&&X<=M.height-j&&F.readPixels(O,X,z,j,he.convert(We),he.convert(De),xe)}finally{const Fe=C!==null?de.get(C).__webglFramebuffer:null;Z.bindFramebuffer(F.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(M,O,X=0){const z=Math.pow(2,-X),j=Math.floor(O.image.width*z),xe=Math.floor(O.image.height*z);ue.setTexture2D(O,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,M.x,M.y,j,xe),Z.unbindTexture()},this.copyTextureToTexture=function(M,O,X,z=0){const j=O.image.width,xe=O.image.height,Pe=he.convert(X.format),Ie=he.convert(X.type);ue.setTexture2D(X,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment),O.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,z,M.x,M.y,j,xe,Pe,Ie,O.image.data):O.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,z,M.x,M.y,O.mipmaps[0].width,O.mipmaps[0].height,Pe,O.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,z,M.x,M.y,Pe,Ie,O.image),z===0&&X.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(M,O,X,z,j=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=M.max.x-M.min.x+1,Pe=M.max.y-M.min.y+1,Ie=M.max.z-M.min.z+1,Fe=he.convert(z.format),We=he.convert(z.type);let De;if(z.isData3DTexture)ue.setTexture3D(z,0),De=F.TEXTURE_3D;else if(z.isDataArrayTexture)ue.setTexture2DArray(z,0),De=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const ze=F.getParameter(F.UNPACK_ROW_LENGTH),lt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ft=F.getParameter(F.UNPACK_SKIP_PIXELS),tn=F.getParameter(F.UNPACK_SKIP_ROWS),Fn=F.getParameter(F.UNPACK_SKIP_IMAGES),mt=X.isCompressedTexture?X.mipmaps[0]:X.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,mt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,M.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,M.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,M.min.z),X.isDataTexture||X.isData3DTexture?F.texSubImage3D(De,j,O.x,O.y,O.z,xe,Pe,Ie,Fe,We,mt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(De,j,O.x,O.y,O.z,xe,Pe,Ie,Fe,mt.data)):F.texSubImage3D(De,j,O.x,O.y,O.z,xe,Pe,Ie,Fe,We,mt),F.pixelStorei(F.UNPACK_ROW_LENGTH,ze),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,lt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ft),F.pixelStorei(F.UNPACK_SKIP_ROWS,tn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Fn),j===0&&z.generateMipmaps&&F.generateMipmap(De),Z.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?ue.setTextureCube(M,0):M.isData3DTexture?ue.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ue.setTexture2DArray(M,0):ue.setTexture2D(M,0),Z.unbindTexture()},this.resetState=function(){A=0,w=0,C=null,Z.reset(),pe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===tt?Zi:Ug}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Zi?tt:Un}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class tT extends e0{}tT.prototype.isWebGL1Renderer=!0;class wf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=n}clone(){return new wf(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class nT extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class hp extends un{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const wr=new rt,pp=new rt,ha=[],mp=new ar,iT=new rt,Is=new Mn,Fs=new ps;class rT extends Mn{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new hp(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,iT)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ar),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,wr),mp.copy(e.boundingBox).applyMatrix4(wr),this.boundingBox.union(mp)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ps),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,wr),Fs.copy(e.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(Fs)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(i),e.ray.intersectsSphere(Fs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,wr),pp.multiplyMatrices(i,wr),Is.matrixWorld=pp,Is.raycast(e,ha);for(let o=0,a=ha.length;o<a;o++){const l=ha[o];l.instanceId=s,l.object=this,n.push(l)}ha.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new hp(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class t0 extends ms{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gp=new rt,yc=new zg,pa=new ps,ma=new N;class sT extends Tt{constructor(e=new Nn,n=new t0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(r),pa.radius+=s,e.ray.intersectsSphere(pa)===!1)return;gp.copy(r).invert(),yc.copy(e.ray).applyMatrix4(gp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,p=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=d,x=m;v<x;v++){const f=u.getX(v);ma.fromBufferAttribute(p,f),_p(ma,f,l,r,e,n,this)}}else{const d=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let v=d,x=m;v<x;v++)ma.fromBufferAttribute(p,v),_p(ma,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _p(t,e,n,i,r,s,o){const a=yc.distanceSqToPoint(t);if(a<n){const l=new N;yc.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class oT extends ms{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ng,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Af extends Tt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Tu=new rt,vp=new N,xp=new N;class n0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ef,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;vp.setFromMatrixPosition(e.matrixWorld),n.position.copy(vp),xp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(xp),n.updateMatrixWorld(),Tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const yp=new rt,Os=new N,wu=new N;class aT extends n0{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Os.setFromMatrixPosition(e.matrixWorld),i.position.copy(Os),wu.copy(i.position),wu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(wu),i.updateMatrixWorld(),r.makeTranslation(-Os.x,-Os.y,-Os.z),yp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yp)}}class Sp extends Af{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new aT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class lT extends n0{constructor(){super(new $g(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uT extends Af{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new lT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cT extends Af{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class fT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ep(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Ep();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Ep(){return(typeof performance=="undefined"?Date:performance).now()}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xf}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xf);const Bs=new N;function rn(t,e,n,i,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;Bs.copy(e),Bs[i]=0,Bs.normalize();const u=.5*o/(o+a),h=1-Bs.angleTo(t)/l;return Math.sign(Bs[n])===1?h*u:a/(o+a)+u+u*(1-h)}class dT extends gs{constructor(e=1,n=1,i=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,n/2,i/2,s),super(1,1,1,r,r,r),r===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new N,l=new N,u=new N(e,n,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,p=this.attributes.normal.array,d=this.attributes.uv.array,m=h.length/6,v=new N,x=.5/r;for(let f=0,c=0;f<h.length;f+=3,c+=2)switch(a.fromArray(h,f),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[f+0]=u.x*Math.sign(a.x)+l.x*s,h[f+1]=u.y*Math.sign(a.y)+l.y*s,h[f+2]=u.z*Math.sign(a.z)+l.z*s,p[f+0]=l.x,p[f+1]=l.y,p[f+2]=l.z,Math.floor(f/m)){case 0:v.set(1,0,0),d[c+0]=rn(v,l,"z","y",s,i),d[c+1]=1-rn(v,l,"y","z",s,n);break;case 1:v.set(-1,0,0),d[c+0]=1-rn(v,l,"z","y",s,i),d[c+1]=1-rn(v,l,"y","z",s,n);break;case 2:v.set(0,1,0),d[c+0]=1-rn(v,l,"x","z",s,e),d[c+1]=rn(v,l,"z","x",s,i);break;case 3:v.set(0,-1,0),d[c+0]=1-rn(v,l,"x","z",s,e),d[c+1]=1-rn(v,l,"z","x",s,i);break;case 4:v.set(0,0,1),d[c+0]=1-rn(v,l,"x","y",s,e),d[c+1]=1-rn(v,l,"y","x",s,n);break;case 5:v.set(0,0,-1),d[c+0]=rn(v,l,"x","y",s,e),d[c+1]=1-rn(v,l,"y","x",s,n);break}}}var Sl={exports:{}},bo={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hT=Be.exports,i0=60103;bo.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var Mp=Symbol.for;i0=Mp("react.element"),bo.Fragment=Mp("react.fragment")}var pT=hT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mT=Object.prototype.hasOwnProperty,gT={key:!0,ref:!0,__self:!0,__source:!0};function r0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)mT.call(e,i)&&!gT.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:i0,type:t,key:s,ref:o,props:r,_owner:pT.current}}bo.jsx=r0;bo.jsxs=r0;Sl.exports=bo;const _e=Sl.exports.jsx,Le=Sl.exports.jsxs,Ar=Sl.exports.Fragment,Tp=84,wp=.3,ga=.43,Ap=1.12,Rp=.44,Cp=.4,_T={0:["01110","11011","11011","11011","11011","11011","01110"],1:["00110","01110","00110","00110","00110","00110","11111"],2:["01110","11011","00011","00110","01100","11000","11111"],3:["11110","00011","00011","01110","00011","00011","11110"],4:["11011","11011","11011","11111","00011","00011","00011"],5:["11111","11000","11000","11110","00011","00011","11110"],6:["01110","11000","11000","11110","11011","11011","01110"],7:["11111","00011","00110","00110","01100","01100","01100"],8:["01110","11011","11011","01110","11011","11011","01110"],9:["01110","11011","11011","01111","00011","00011","01110"]},vT={A:["01110","11011","11011","11111","11011","11011","11011"],B:["11110","11011","11011","11110","11011","11011","11110"],C:["01111","11000","11000","11000","11000","11000","01111"],D:["11110","11011","11011","11011","11011","11011","11110"],E:["11111","11000","11000","11110","11000","11000","11111"],F:["11111","11000","11000","11110","11000","11000","11000"],G:["01111","11000","11000","11011","11011","11011","01110"],H:["11011","11011","11011","11111","11011","11011","11011"],I:["11111","00110","00110","00110","00110","00110","11111"],J:["00111","00011","00011","00011","11011","11011","01110"],K:["11011","11011","11110","11100","11110","11011","11011"],L:["11000","11000","11000","11000","11000","11000","11111"],M:["11011","11111","11111","11011","11011","11011","11011"],N:["11011","11111","11111","11111","11111","11011","11011"],O:["01110","11011","11011","11011","11011","11011","01110"],P:["11110","11011","11011","11110","11000","11000","11000"],Q:["01110","11011","11011","11011","11111","01110","00011"],R:["11110","11011","11011","11110","11100","11011","11011"],S:["01111","11000","11000","01110","00011","00011","11110"],T:["11111","00110","00110","00110","00110","00110","00110"],U:["11011","11011","11011","11011","11011","11011","01110"],V:["11011","11011","11011","11011","11011","01110","01110"],W:["11011","11011","11011","11111","11111","11111","11011"],X:["11011","11011","01110","00110","01110","11011","11011"],Y:["11011","11011","01110","00110","00110","00110","00110"],Z:["11111","00011","00110","00110","01100","11000","11111"]},La={..._T,...vT},Ke=(t,e)=>t+Math.random()*(e-t),xT=t=>{const e=t.toUpperCase().split("").filter(o=>La[o]),n=ga*4,i=e.length>1?ga*1.15:0,r=e.length*n+(e.length-1)*i,s=[];return e.forEach((o,a)=>{var h;const l=(h=La[o])!=null?h:La[0],u=-r/2+n/2+a*(n+i);l.forEach((p,d)=>{[...p].forEach((m,v)=>{m==="1"&&s.push(new N(u+(v-2)*ga,(3-d)*ga,.18))})})}),s},yT=()=>new N(Ke(-6.2,6.2),Ke(-3.8,3.8),Ke(-1.8,.6)),ST=()=>new Ci({uniforms:{uColor:{value:new je(1660299)},uOpacity:{value:.18}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uOpacity;
      varying vec2 vUv;
      void main() {
        float edgeFade = 1.0 - smoothstep(0.15, 0.5, abs(vUv.y - 0.5));
        float lengthFade = pow(1.0 - vUv.x, 0.85);
        float alpha = edgeFade * lengthFade * uOpacity;
        gl_FragColor = vec4(uColor, alpha);
      }
    `,transparent:!0,blending:el,depthWrite:!1,side:Rn}),ET=({glyph:t,isRunning:e,isComplete:n,ariaLabel:i})=>{const r=Be.exports.useRef(null),s=Be.exports.useRef(null),[o,a]=Be.exports.useState(!0);return Be.exports.useEffect(()=>{const l=r.current;if(!l)return;const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=new nT;h.background=new je(66308),h.fog=new wf(66308,.022);const p=new Zt(30,1,.1,100);p.position.set(0,0,10.5),p.lookAt(0,0,0);let d;try{d=new e0({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{a(!1);return}a(!0),d.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),d.setClearColor(66308,1),d.toneMapping=wg,d.toneMappingExposure=1.38,d.outputColorSpace=tt,d.domElement.className="tra-countdown-canvas",l.appendChild(d.domElement);const m=new Yi,v=new Yi,x=new Yi;m.add(x,v),h.add(m);const f=new cT(3102836,1.35);h.add(f);const c=new uT(15398655,2.8);c.position.set(1.5,3.5,7),h.add(c);const g=new Sp(7911656,13,11,2);g.position.set(0,0,2.5),h.add(g);const _=new Sp(736625,18,10,2);_.position.set(0,-1.2,-1.8),h.add(_);const y=new dT(wp,wp,.18,5,.06),A=new oT({color:16777215,roughness:.38,metalness:.05,emissive:12112088,emissiveIntensity:.5,vertexColors:!0,toneMapped:!1}),w=new rT(y,A,Tp);w.instanceMatrix.setUsage(Dx),v.add(w);const C=Array.from({length:Tp},(de,ue)=>{const Ce=yT(),Ge=new is(Ke(-1.2,1.2),Ke(-1.2,1.2),Ke(-1.2,1.2)),Me=Ke(.92,1),T=new je().setRGB(Me,Me,Me);return w.setColorAt(ue,T),{position:Ce,rotation:Ge,scale:Ke(.18,.8),fromPosition:Ce.clone(),fromRotation:Ge.clone(),fromScale:0,targetPosition:Ce.clone(),targetRotation:new is,targetScale:0,vortexPosition:Ce.clone(),exitPosition:Ce.clone(),vortexAngle:Ke(0,Math.PI*2),vortexRadius:Ke(.35,1.1),direction:ue%2===0?-1:1,spin:Ke(.8,1.55),seed:Math.random()*Math.PI*2}});w.instanceColor&&(w.instanceColor.needsUpdate=!0);const I=new Tt,S=new N(0,0,1),R=new fT;let Q=0,J=u?.18:Ap,D="intro",G="",k=0,$=e,W=n,Y=0,te=0,K=0,L=0;const b=de=>{const ue=de.toUpperCase().split("").filter(Me=>La[Me]).join("").slice(0,2);if(ue===G&&G!=="")return;const Ce=xT(ue||"0"),Ge=G==="";Q=R.getElapsedTime(),D=Ge?"intro":"morph",J=u?.18:Ge?.72:ue.length>1?1.18:Ap,C.forEach((Me,T)=>{Me.fromPosition.copy(Me.position),Me.fromRotation.copy(Me.rotation),Me.fromScale=Me.scale;const E=Ke(0,Math.PI*2),B=Ke(.16,.92);Me.vortexAngle=E,Me.vortexRadius=Ke(.38,1.18),Me.direction=T%2===0?-1:1,Me.spin=Ke(.8,1.7),Me.vortexPosition.set(Math.cos(E)*B,Math.sin(E)*B*.62,Ke(-.28,.3));const U=E+Me.direction*Ke(.7,2.4),ee=Ke(2.7,4.8);Me.exitPosition.set(Math.cos(U)*ee,Math.sin(U)*ee*.68,Ke(-1.2,.4));const ie=Ce[T];ie?(Me.targetPosition.copy(ie),Me.targetRotation.set(Ke(-.04,.04),Ke(-.04,.04),Ke(-.06,.06)),Me.targetScale=1):(Me.targetPosition.copy(Me.exitPosition),Me.targetRotation.set(Ke(-1.8,1.8),Ke(-1.8,1.8),Ke(-1.8,1.8)),Me.targetScale=0)}),G=ue},q=de=>{$=de},ne=de=>{W=de};s.current={setGlyph:b,setRunning:q,setComplete:ne};const re=(de,ue,Ce,Ge,Me)=>{const T=new Float32Array(de*3);for(let ee=0;ee<de;ee+=1)T[ee*3]=Ke(-8.6,8.6),T[ee*3+1]=Ke(-2.6,4.4),T[ee*3+2]=Ke(Ge,Me);const E=new Nn;E.setAttribute("position",new un(T,3));const B=new t0({color:10865122,size:ue,transparent:!0,opacity:Ce,sizeAttenuation:!0,depthWrite:!1,blending:el}),U=new sT(E,B);return h.add(U),{points:U,geometry:E,material:B,speed:Ke(.015,.035)}},ye=re(280,.038,.46,-4.5,-1.8),Ee=re(84,.066,.62,-1.6,-.6),Se=new Nn,Oe=7.2,ht=.3;Se.setAttribute("position",new Kn([0,0,0,Oe,-ht,0,Oe,ht,0],3)),Se.setAttribute("uv",new Kn([0,.5,1,0,1,1],2));const Ne=ST();for(let de=0;de<18;de+=1){const ue=new Mn(Se,Ne);ue.rotation.z=de/18*Math.PI*2+.06,ue.position.z=-.62,ue.scale.setScalar(Ke(.82,1.12)),x.add(ue)}const F=()=>{const de=Math.max(1,l.clientWidth),ue=Math.max(1,l.clientHeight),Ce=de/ue;p.aspect=Ce,p.fov=Ce<.82?38:30,p.position.z=Ce<.82?11.8:10.5,m.scale.setScalar(Ce<.82?.76:.66),p.updateProjectionMatrix(),d.setSize(de,ue,!1)},at=de=>{const ue=l.getBoundingClientRect();Y=((de.clientX-ue.left)/ue.width-.5)*2,te=((de.clientY-ue.top)/ue.height-.5)*2},Ae=()=>{Y=0,te=0};F(),window.addEventListener("resize",F),l.addEventListener("pointermove",at),l.addEventListener("pointerleave",Ae);let be;"ResizeObserver"in window&&(be=new ResizeObserver(F),be.observe(l));const Z=(de,ue,Ce)=>{const Ge=de.geometry.getAttribute("position");for(let Me=0;Me<Ge.count;Me+=1){const T=Ge.getY(Me)-ue*de.speed*Ce;Ge.setY(Me,T<-3.1?4.5:T)}Ge.needsUpdate=!0},me=()=>{k=window.requestAnimationFrame(me);const de=Math.min(R.getDelta(),.05),ue=R.elapsedTime,Ce=u?.18:$?1:.42;K+=(Y-K)*.035,L+=(te-L)*.035,m.rotation.y+=(K*.045-m.rotation.y)*.035,m.rotation.x+=(-L*.028-m.rotation.x)*.035,m.position.x+=(K*.08-m.position.x)*.035,m.position.y+=(-L*.055-m.position.y)*.035,x.rotation.z+=de*.008*Ce;const Ge=Math.min(1,Math.max(0,(ue-Q)/J)),Me=1-Math.pow(1-Ge,4),T=1-Me,E=D==="morph"?Math.sin(Math.PI*Ge):0,B=W&&!u?1+Math.sin(ue*3.2)*.06:1;C.forEach((U,ee)=>{if(D==="intro"||u)U.position.lerpVectors(U.fromPosition,U.targetPosition,Me),U.rotation.x=wn.lerp(U.fromRotation.x,U.targetRotation.x,Me),U.rotation.y=wn.lerp(U.fromRotation.y,U.targetRotation.y,Me),U.rotation.z=wn.lerp(U.fromRotation.z,U.targetRotation.z,Me),U.scale=wn.lerp(U.fromScale,U.targetScale,Me);else{const oe=Math.min(1,Math.max(0,Ge/Rp)),H=1-Math.pow(1-oe,3),Re=Math.min(1,Math.max(0,(Ge-Cp)/(1-Cp))),ge=1-Math.pow(1-Re,3),we=U.direction*U.spin*(1-ge);if(Ge<Rp){U.position.copy(U.fromPosition),U.position.applyAxisAngle(S,U.direction*H*.62),U.position.lerp(U.vortexPosition,H);const he=Math.sin(H*Math.PI)*U.vortexRadius,pe=U.vortexAngle+U.direction*H*1.6;U.position.x+=Math.cos(pe)*he,U.position.y+=Math.sin(pe)*he*.62,U.scale=wn.lerp(U.fromScale,U.targetScale>0?.68:.55,H)}else if(U.targetScale>0){U.position.lerpVectors(U.vortexPosition,U.targetPosition,ge);const he=Math.sin(ge*Math.PI)*U.vortexRadius*.24,pe=U.vortexAngle+U.direction*(1-ge)*1.3;U.position.x+=Math.cos(pe)*he,U.position.y+=Math.sin(pe)*he*.62,U.scale=wn.lerp(.68,U.targetScale,ge)}else{U.position.lerpVectors(U.vortexPosition,U.targetPosition,ge);const he=Math.sin(ge*Math.PI)*U.vortexRadius*.2,pe=U.vortexAngle+U.direction*(1-ge)*1.1;U.position.x+=Math.cos(pe)*he,U.position.y+=Math.sin(pe)*he*.62,U.scale=wn.lerp(.55,U.targetScale,ge)}U.rotation.x=wn.lerp(U.fromRotation.x,U.targetRotation.x,ge)+we*.24,U.rotation.y=wn.lerp(U.fromRotation.y,U.targetRotation.y,ge)+we*.16,U.rotation.z=wn.lerp(U.fromRotation.z,U.targetRotation.z,ge)+we}const ie=D==="morph"?(1-Ge)*(u?.01:.035):T*(u?.02:.06);U.position.x+=Math.sin(ue*(1.2+U.seed)+U.seed)*ie,U.position.y+=Math.cos(ue*(1.5+U.seed)+U.seed)*ie,U.position.z+=Math.sin(ue*1.4+U.seed)*ie*.6;const Te=U.scale*(U.targetScale>0?B:1);I.position.copy(U.position),I.rotation.copy(U.rotation),I.scale.setScalar(Te),I.updateMatrix(),w.setMatrixAt(ee,I.matrix)}),w.instanceMatrix.needsUpdate=!0,Z(ye,de,Ce),Z(Ee,de,Ce*1.3),Ne.uniforms.uOpacity.value=.13+E*.14+Math.sin(ue*.7)*.014,g.intensity=9.6+E*11+Math.sin(ue*1.1)*.45,d.render(h,p)};return F(),b(t),me(),()=>{window.cancelAnimationFrame(k),window.removeEventListener("resize",F),l.removeEventListener("pointermove",at),l.removeEventListener("pointerleave",Ae),be==null||be.disconnect(),s.current=null,d.dispose(),y.dispose(),A.dispose(),Se.dispose(),Ne.dispose(),ye.geometry.dispose(),ye.material.dispose(),Ee.geometry.dispose(),Ee.material.dispose(),d.domElement.parentElement===l&&l.removeChild(d.domElement)}},[]),Be.exports.useEffect(()=>{var l;(l=s.current)==null||l.setGlyph(t)},[t]),Be.exports.useEffect(()=>{var l;(l=s.current)==null||l.setRunning(e)},[e]),Be.exports.useEffect(()=>{var l;(l=s.current)==null||l.setComplete(n)},[n]),_e("div",{ref:r,className:"tra-canvas-wrap",role:"img","aria-label":i,children:!o&&_e("div",{className:"tra-canvas-fallback","aria-hidden":"true",children:_e("span",{children:t})})})};const MT=[{label:"10 SEC",value:10},{label:"30 SEC",value:30},{label:"01 MIN",value:60},{label:"05 MIN",value:300}],TT={0:"ZERO",1:"ONE",2:"TWO",3:"THREE",4:"FOUR",5:"FIVE",6:"SIX",7:"SEVEN",8:"EIGHT",9:"NINE",10:"TEN"},Pa=26,Sc=t=>t.toUpperCase().replace(/[^A-Z]/g,"").slice(0,Pa),wT=()=>{var t;try{return Sc((t=window.localStorage.getItem("tra-letter-sequence"))!=null?t:"")||"TRA"}catch{return"TRA"}},AT=()=>{try{const t=Number(window.localStorage.getItem("tra-countdown-duration"));return Number.isFinite(t)&&t>0?Math.min(t,3600):10}catch{return 10}},RT=t=>{const e=Math.max(0,t),n=Math.floor(e/60),i=e-n*60,r=Math.floor(i),s=Math.floor((i-r)*10);return n>0?`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}`:`00:${String(r).padStart(2,"0")}.${s}`},CT=t=>{if(t>=60){const e=Math.floor(t/60),n=t%60;return n?`${e}M ${n}S`:`${e} MIN`}return`${t} SEC`},LT=t=>Math.min(3600,Math.max(1,Math.round(Number.isFinite(t)?t:10))),PT=()=>{var at,Ae,be;const t=Be.exports.useMemo(()=>AT(),[]),e=Be.exports.useMemo(()=>wT(),[]),[n,i]=Be.exports.useState(t),[r,s]=Be.exports.useState(String(t)),[o,a]=Be.exports.useState(t),[l,u]=Be.exports.useState("countdown"),[h,p]=Be.exports.useState(e),[d,m]=Be.exports.useState(e),[v,x]=Be.exports.useState(0),[f,c]=Be.exports.useState(e.length<=1),[g,_]=Be.exports.useState(!1),[y,A]=Be.exports.useState(!1),[w,C]=Be.exports.useState(!0),[I,S]=Be.exports.useState(t),[R,Q]=Be.exports.useState(0),[J,D]=Be.exports.useState("\u5F85\u547D \xB7 \u8BBE\u5B9A\u4E00\u4E2A\u65F6\u957F\u5F00\u59CB"),G=Be.exports.useRef(e),k=Be.exports.useRef(0),$=Be.exports.useRef(0),W=Be.exports.useMemo(()=>{const Z=Math.ceil(Math.max(0,o));return n>99&&Z>99?Math.ceil(Z/60):Z},[n,o]);Be.exports.useEffect(()=>{if(!g){S(W);return}const Z=window.setTimeout(()=>S(W),520);return()=>window.clearTimeout(Z)},[g,W]);const Y=n>99&&Math.ceil(Math.max(0,o))>99?"MINUTES":(at=TT[I])!=null?at:"SECONDS",te=(be=(Ae=d[v])!=null?Ae:d[0])!=null?be:"A",K=l==="letters"?f:y,L=l==="letters"?f?"SEQUENCE / COMPLETE":v>0?"LETTER / ACTIVE":"LETTER / READY":y?"CYCLE / COMPLETE":g?"LIVE / RUNNING":o<n?"PAUSED / HOLD":"READY / SET",b=l==="letters"?v>0&&!f:g;Be.exports.useEffect(()=>{try{window.localStorage.setItem("tra-countdown-duration",String(n))}catch{}},[n]),Be.exports.useEffect(()=>{try{window.localStorage.setItem("tra-letter-sequence",d)}catch{}},[d]),Be.exports.useEffect(()=>{if(!g)return;const Z=$.current;let me=0;const de=()=>{if(Z!==$.current)return;const ue=Math.max(0,(k.current-Date.now())/1e3);if(a(ue),ue<=0){if($.current+=1,_(!1),A(!0),D("\u65F6\u95F4\u5230 \xB7 \u8FD9\u4E00\u523B\u5DF2\u7ECF\u53D1\u751F"),w){const Ce=new Audio("/timer_sound.mp3");Ce.volume=.24,Ce.play().catch(()=>{})}return}me=window.requestAnimationFrame(de)};return me=window.requestAnimationFrame(de),()=>window.cancelAnimationFrame(me)},[g,w]),Be.exports.useEffect(()=>{const Z=me=>{me.target instanceof HTMLElement&&(me.target.tagName==="INPUT"||me.target.tagName==="BUTTON"||me.target.tagName==="A"||me.target.isContentEditable)||(l==="countdown"&&me.code==="Space"&&(me.preventDefault(),g?ne():q()),me.key.toLowerCase()==="r"&&Oe(),l==="letters"&&me.key==="ArrowRight"&&(me.preventDefault(),f?re("\u5E8F\u5217\u91CD\u64AD \xB7 \u53D8\u6362\u7B2C\u4E00\u4E2A\u5B57\u6BCD"):Ee()))};return window.addEventListener("keydown",Z),()=>window.removeEventListener("keydown",Z)});const q=()=>{const Z=o<=0?n:o;$.current+=1,k.current=Date.now()+Z*1e3,a(Z),A(!1),_(!0),D("\u5012\u8BA1\u65F6\u8FDB\u884C\u4E2D \xB7 \u4FDD\u6301\u4E13\u6CE8")},ne=()=>{const Z=Math.max(0,(k.current-Date.now())/1e3);$.current+=1,k.current=0,a(Z),_(!1),D("\u5DF2\u6682\u505C \xB7 \u6309\u7A7A\u683C\u7EE7\u7EED")},re=(Z="\u5B57\u6BCD\u5E8F\u5217\u5DF2\u91CD\u7F6E \xB7 \u53D8\u6362\u7B2C\u4E00\u4E2A\u5B57\u6BCD")=>{$.current+=1,x(0),c(d.length<=1),D(Z),Q(me=>me+1)},ye=()=>{const Z=Sc(G.current);if(!Z){G.current=d,p(d),D("\u8BF7\u8F93\u5165\u81F3\u5C11\u4E00\u4E2A A\u2013Z \u5B57\u6BCD");return}$.current+=1,G.current=Z,p(Z),m(Z),x(0),c(Z.length<=1),D(`\u5DF2\u8F7D\u5165 \xB7 ${Z.length} \u4E2A\u5B57\u6BCD\u7B49\u5F85\u53D8\u6362`),Q(me=>me+1)},Ee=()=>{if(d.length<=1){re("\u5E8F\u5217\u53EA\u6709\u4E00\u4E2A\u5B57\u6BCD \xB7 \u5DF2\u91CD\u65B0\u663E\u73B0");return}const Z=v+1;if(Z>=d.length){re("\u5E8F\u5217\u5B8C\u6210 \xB7 \u518D\u6B21\u5F00\u59CB\u9010\u5B57\u6BCD\u53D8\u6362");return}x(Z),c(Z===d.length-1),D(Z===d.length-1?"\u5E8F\u5217\u5B8C\u6210 \xB7 \u6700\u540E\u4E00\u4E2A\u5B57\u6BCD\u5DF2\u5230\u8FBE":`\u6B63\u5728\u53D8\u6362 \xB7 \u7B2C ${Z+1} / ${d.length} \u4E2A\u5B57\u6BCD`)},Se=Z=>{Z!==l&&(g&&ne(),u(Z),A(!1),D(Z==="letters"?"\u5B57\u6BCD\u6A21\u5F0F \xB7 \u6BCF\u6B21\u53D8\u6362\u4E00\u4E2A\u5B57\u6BCD":"\u5012\u8BA1\u65F6\u6A21\u5F0F \xB7 \u8BBE\u5B9A\u4E00\u4E2A\u65F6\u957F\u5F00\u59CB"),Q(me=>me+1))},Oe=()=>{$.current+=1,k.current=0,a(n),_(!1),A(!1),l==="letters"&&(x(0),c(d.length<=1)),D(l==="letters"?"\u5B57\u6BCD\u5E8F\u5217\u5DF2\u91CD\u7F6E \xB7 \u53D8\u6362\u7B2C\u4E00\u4E2A\u5B57\u6BCD":"\u5F85\u547D \xB7 \u8BBE\u5B9A\u4E00\u4E2A\u65F6\u957F\u5F00\u59CB"),Q(Z=>Z+1)},ht=Z=>{const me=LT(Z);$.current+=1,k.current=0,i(me),s(String(me)),a(me),_(!1),A(!1),D("\u5DF2\u66F4\u65B0 \xB7 \u51C6\u5907\u5C31\u7EEA"),Q(de=>de+1)},Ne=()=>{ht(Number(r))},F=()=>{$.current+=1,k.current=Date.now()+n*1e3,a(n),A(!1),_(!0),D("\u91CD\u65B0\u5F00\u59CB \xB7 \u8BA9\u8FD9\u4E00\u523B\u5C55\u5F00"),Q(Z=>Z+1)};return Le("div",{className:"tra-app",children:[Le("header",{className:"tra-header",children:[Le("div",{className:"tra-brand","aria-label":"TRA countdown studio",children:[_e("span",{className:"tra-brand-mark",children:"TRA"}),_e("span",{className:"tra-brand-rule","aria-hidden":"true"}),_e("span",{className:"tra-brand-copy",children:"TIME / RELATIONAL ATMOSPHERE"})]}),Le("div",{className:"tra-header-actions",children:[Le("span",{className:`tra-status ${b?"is-live":""}`,children:[_e("span",{className:"tra-status-dot","aria-hidden":"true"}),L]}),Le("a",{className:"tra-header-github",href:"https://github.com/holynova/hotpot-timer",target:"_blank",rel:"noreferrer","data-umami-event":"github-repo",children:[_e(Av,{size:14,strokeWidth:1.6,"aria-hidden":"true"}),"GITHUB"]}),Le("button",{className:"tra-header-reset",type:"button",onClick:Oe,children:[_e(jo,{size:14,strokeWidth:1.6,"aria-hidden":"true"}),"RESET"]})]})]}),Le("div",{className:"tra-workspace",children:[Le("aside",{className:"tra-controls","aria-label":"\u5012\u8BA1\u65F6\u8BBE\u7F6E",children:[Le("div",{className:"tra-intro",children:[_e("h1",{children:l==="letters"?Le(Ar,{children:["Give it",_e("br",{}),_e("span",{children:"a shape."})]}):Le(Ar,{children:["Give it",_e("br",{}),_e("span",{children:"a second."})]})}),_e("p",{className:"tra-intro-copy",children:l==="letters"?"\u8F93\u5165\u4E00\u4E32 A\u2013Z \u5B57\u6BCD\uFF0C\u8BA9\u6BCF\u4E00\u6B21\u53D8\u6362\u90FD\u6210\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u7684\u77AC\u95F4\u3002":"\u4E00\u4E2A\u4F1A\u547C\u5438\u7684\u5012\u8BA1\u65F6\u3002\u8BA9\u65F6\u95F4\u4ECE\u5149\u91CC\u51FA\u73B0\uFF0C\u4E5F\u5728\u5149\u91CC\u7ED3\u675F\u3002"})]}),Le("div",{className:"tra-mode-switch",role:"group","aria-label":"\u9009\u62E9\u5DE5\u5177\u6A21\u5F0F",children:[Le("button",{type:"button","aria-pressed":l==="countdown",className:l==="countdown"?"is-selected":"","data-umami-event":"countdown-mode",onClick:()=>Se("countdown"),children:[_e("span",{children:"COUNTDOWN"}),_e("small",{children:"\u5012\u8BA1\u65F6"})]}),Le("button",{type:"button","aria-pressed":l==="letters",className:l==="letters"?"is-selected":"","data-umami-event":"alphabet-mode",onClick:()=>Se("letters"),children:[_e("span",{children:"ALPHABET"}),_e("small",{children:"\u5B57\u6BCD\u53D8\u6362"})]})]}),l==="countdown"?Le(Ar,{children:[Le("div",{className:"tra-control-group tra-duration-group",children:[Le("div",{className:"tra-field-label",children:[_e("span",{children:"SET DURATION"}),_e("span",{className:"tra-field-suffix",children:"01 \u2014 3600 SEC"})]}),Le("label",{className:"tra-duration-input",children:[_e("input",{type:"number",min:1,max:3600,inputMode:"numeric","aria-label":"\u5012\u8BA1\u65F6\u79D2\u6570",value:r,onChange:Z=>s(Z.target.value),onBlur:Ne,onKeyDown:Z=>{Z.key==="Enter"&&(Ne(),Z.currentTarget.blur())}}),_e("span",{children:"SEC"})]}),Le("p",{className:"tra-duration-hint",children:["\u5F53\u524D\u65F6\u957F \xB7 ",CT(n)]})]}),Le("div",{className:"tra-control-group",children:[Le("div",{className:"tra-field-label",children:[_e("span",{children:"QUICK SET"}),_e("span",{className:"tra-field-suffix",children:"PRESETS"})]}),_e("div",{className:"tra-presets",role:"list","aria-label":"\u9884\u8BBE\u65F6\u957F",children:MT.map(Z=>Le("button",{type:"button",className:n===Z.value?"is-selected":"",onClick:()=>ht(Z.value),children:[_e("span",{children:Z.label}),_e(Tv,{size:14,strokeWidth:1.5,"aria-hidden":"true"})]},Z.value))})]})]}):Le(Ar,{children:[Le("div",{className:"tra-control-group tra-letter-group",children:[Le("div",{className:"tra-field-label",children:[_e("span",{children:"SET SEQUENCE"}),Le("span",{className:"tra-field-suffix",children:["01 \u2014 ",Pa," LETTERS"]})]}),Le("label",{className:"tra-sequence-input",children:[_e("input",{type:"text",maxLength:Pa,autoCapitalize:"characters",autoComplete:"off",spellCheck:!1,"aria-label":"\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u5E8F\u5217",value:h,onChange:Z=>{const me=Sc(Z.target.value);G.current=me,p(me),me&&($.current+=1,m(me),x(0),c(me.length<=1),D(`\u5DF2\u8F7D\u5165 \xB7 ${me.length} \u4E2A\u5B57\u6BCD\u7B49\u5F85\u53D8\u6362`),Q(de=>de+1))},onBlur:ye,onKeyDown:Z=>{Z.key==="Enter"&&(ye(),Z.currentTarget.blur())}}),Le("span",{children:[h.length,"/",Pa]})]}),Le("p",{className:"tra-duration-hint",children:["\u5F53\u524D\u5E8F\u5217 \xB7 ",d]})]}),Le("div",{className:"tra-control-group tra-letter-steps-group",children:[Le("div",{className:"tra-field-label",children:[_e("span",{children:"LETTER BY LETTER"}),_e("span",{className:"tra-field-suffix",children:"MANUAL"})]}),_e("div",{className:"tra-letter-steps",role:"list","aria-label":"\u5B57\u6BCD\u53D8\u6362\u987A\u5E8F",children:d.split("").map((Z,me)=>Le("div",{className:`tra-letter-step ${me===v?"is-current":""} ${me<v?"is-past":""}`,role:"listitem","aria-current":me===v?"step":void 0,children:[_e("small",{children:String(me+1).padStart(2,"0")}),_e("strong",{children:Z})]},`${Z}-${me}`))}),Le("p",{className:"tra-duration-hint",children:["\u6BCF\u6B21\u70B9\u51FB\u53EA\u53D8\u6362\u4E00\u4E2A\u5B57\u6BCD \xB7 ",v+1," / ",d.length]})]})]}),Le("div",{className:"tra-actions",children:[l==="letters"?Le("button",{className:"tra-primary-action",type:"button","data-umami-event":f?"letter-sequence-replay":"letter-transform",onClick:f?()=>re("\u5E8F\u5217\u91CD\u64AD \xB7 \u53D8\u6362\u7B2C\u4E00\u4E2A\u5B57\u6BCD"):Ee,children:[f?_e(jo,{size:17,strokeWidth:1.8,"aria-hidden":"true"}):_e(Ev,{size:17,strokeWidth:1.8,"aria-hidden":"true"}),f?"REPLAY SEQUENCE":"TRANSFORM NEXT LETTER"]}):y?Le("button",{className:"tra-primary-action",type:"button","data-umami-event":"countdown-replay",onClick:F,children:[_e(jo,{size:17,strokeWidth:1.8,"aria-hidden":"true"}),"REPLAY MOMENT"]}):Le("button",{className:"tra-primary-action",type:"button","data-umami-event":g?"countdown-pause":"countdown-start",onClick:g?ne:q,children:[g?_e(Cv,{size:17,strokeWidth:1.8,"aria-hidden":"true"}):_e(Pv,{size:17,strokeWidth:1.8,"aria-hidden":"true"}),g?"PAUSE COUNTDOWN":o<n?"RESUME COUNTDOWN":"START COUNTDOWN"]}),Le("div",{className:"tra-secondary-actions",children:[Le("button",{className:"tra-secondary-action",type:"button",onClick:Oe,children:[_e(jo,{size:15,strokeWidth:1.6,"aria-hidden":"true"}),"RESET"]}),Le("button",{className:`tra-secondary-action tra-sound-action ${w?"is-on":""}`,type:"button",onClick:()=>C(Z=>!Z),"aria-pressed":w,children:[w?_e(Uv,{size:15,strokeWidth:1.6,"aria-hidden":"true"}):_e(Iv,{size:15,strokeWidth:1.6,"aria-hidden":"true"}),w?"SOUND ON":"SOUND OFF"]})]})]}),Le("div",{className:"tra-controls-footer",children:[_e("span",{children:J}),_e("span",{className:"tra-shortcuts",children:l==="letters"?"ENTER / \u2192":"SPACE / R"})]})]}),Le("main",{className:"tra-stage","aria-label":"Three.js 3D \u5012\u8BA1\u65F6\u821E\u53F0",children:[Le("div",{className:"tra-stage-meta",children:[_e("span",{children:l==="letters"?"ALPHABET / LETTER STUDY":"01 / LIVE COUNTDOWN"}),_e("span",{children:l==="letters"?"A\u2014Z / ONE BY ONE":"INSPIRED BY TRA STUDY"})]}),Le("section",{className:`tra-visual-shell ${K?"is-complete":""}`,role:l==="letters"?"group":"timer","aria-live":"off","aria-label":l==="letters"?`\u5B57\u6BCD\u5E8F\u5217 ${d}\uFF0C\u5F53\u524D\u7B2C ${v+1} \u4E2A\u5B57\u6BCD ${te}`:"3D \u5012\u8BA1\u65F6\u821E\u53F0",children:[_e(ET,{glyph:l==="letters"?te:String(W),isRunning:g,isComplete:K,ariaLabel:l==="letters"?`Three.js 3D \u5B57\u6BCD\u6A21\u578B ${te}`:`Three.js 3D \u5012\u8BA1\u65F6\u6570\u5B57 ${W}`},R),l==="letters"?_e("div",{className:"tra-stage-word is-sequence","aria-hidden":"true",children:d.split("").map((Z,me)=>_e("span",{className:`${me===v?"is-current":""} ${me<v?"is-past":""}`,children:Z},`${Z}-${me}`))}):Le("div",{className:"tra-stage-word","aria-hidden":"true",children:[_e("span",{children:Y.slice(0,1)}),Y.slice(1)]},Y),_e("div",{className:"tra-stage-cross tra-stage-cross-top","aria-hidden":"true"}),_e("div",{className:"tra-stage-cross tra-stage-cross-bottom","aria-hidden":"true"}),Le("div",{className:"tra-stage-caption",children:[_e("span",{className:"tra-caption-dot","aria-hidden":"true"}),_e("span",{children:l==="letters"?f?"SEQUENCE HAS ARRIVED":v===0?"FIRST LETTER IS READY":"NEXT LETTER IS LIVE":y?"TIME HAS ARRIVED":g?"THE MOMENT IS LIVE":"THE STAGE IS READY"})]}),_e("div",{className:"tra-stage-time",children:l==="letters"?Le(Ar,{children:[Le("span",{children:[String(v+1).padStart(2,"0")," / ",String(d.length).padStart(2,"0")]}),_e("small",{children:"LETTER POSITION"})]}):Le(Ar,{children:[_e("span",{children:RT(o)}),_e("small",{children:"REMAINING"})]})}),_e("span",{id:"tra-timer-announcement",className:"tra-sr-timer","aria-live":"polite","aria-atomic":"true",children:l==="letters"?`\u5F53\u524D\u4E3A\u7B2C ${v+1} \u4E2A\u5B57\u6BCD ${te}\uFF0C\u5171 ${d.length} \u4E2A\u5B57\u6BCD`:y?"\u5012\u8BA1\u65F6\u5DF2\u7ED3\u675F":`\u5269\u4F59 ${Math.ceil(Math.max(0,o))} \u79D2`})]}),Le("div",{className:"tra-stage-footer",children:[_e("span",{children:"MOVE YOUR CURSOR THROUGH THE FIELD"}),_e("span",{children:"WEBGL / THREE.JS / 60 FPS"})]})]})]})]})},bT=()=>_e(PT,{});mv.render(_e(y0.StrictMode,{children:_e(bT,{})}),document.getElementById("root"));
