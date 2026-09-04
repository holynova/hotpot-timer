const P0=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};P0();var Ne={exports:{}},Ke={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var jf=Object.getOwnPropertySymbols,D0=Object.prototype.hasOwnProperty,U0=Object.prototype.propertyIsEnumerable;function I0(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function N0(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var i=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(i.join("")!=="0123456789")return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(s){r[s]=s}),Object.keys(Object.assign({},r)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Jp=N0()?Object.assign:function(t,e){for(var n,i=I0(t),r,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)D0.call(n,o)&&(i[o]=n[o]);if(jf){r=jf(n);for(var a=0;a<r.length;a++)U0.call(n,r[a])&&(i[r[a]]=n[r[a]])}}return i};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oc=Jp,xs=60103,em=60106;Ke.Fragment=60107;Ke.StrictMode=60108;Ke.Profiler=60114;var tm=60109,nm=60110,im=60112;Ke.Suspense=60113;var rm=60115,sm=60116;if(typeof Symbol=="function"&&Symbol.for){var xn=Symbol.for;xs=xn("react.element"),em=xn("react.portal"),Ke.Fragment=xn("react.fragment"),Ke.StrictMode=xn("react.strict_mode"),Ke.Profiler=xn("react.profiler"),tm=xn("react.provider"),nm=xn("react.context"),im=xn("react.forward_ref"),Ke.Suspense=xn("react.suspense"),rm=xn("react.memo"),sm=xn("react.lazy")}var qf=typeof Symbol=="function"&&Symbol.iterator;function F0(t){return t===null||typeof t!="object"?null:(t=qf&&t[qf]||t["@@iterator"],typeof t=="function"?t:null)}function zo(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var om={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},am={};function ys(t,e,n){this.props=t,this.context=e,this.refs=am,this.updater=n||om}ys.prototype.isReactComponent={};ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(zo(85));this.updater.enqueueSetState(this,t,e,"setState")};ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function lm(){}lm.prototype=ys.prototype;function Bc(t,e,n){this.props=t,this.context=e,this.refs=am,this.updater=n||om}var zc=Bc.prototype=new lm;zc.constructor=Bc;Oc(zc,ys.prototype);zc.isPureReactComponent=!0;var kc={current:null},um=Object.prototype.hasOwnProperty,cm={key:!0,ref:!0,__self:!0,__source:!0};function fm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)um.call(e,i)&&!cm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:xs,type:t,key:s,ref:o,props:r,_owner:kc.current}}function O0(t,e){return{$$typeof:xs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hc(t){return typeof t=="object"&&t!==null&&t.$$typeof===xs}function B0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yf=/\/+/g;function Bl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?B0(""+t.key):e.toString(36)}function La(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xs:case em:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Bl(o,0):i,Array.isArray(r)?(n="",t!=null&&(n=t.replace(Yf,"$&/")+"/"),La(r,e,n,"",function(u){return u})):r!=null&&(Hc(r)&&(r=O0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Yf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Bl(s,a);o+=La(s,e,n,l,r)}else if(l=F0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Bl(s,a++),o+=La(s,e,n,l,r);else if(s==="object")throw e=""+t,Error(zo(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function qo(t,e,n){if(t==null)return t;var i=[],r=0;return La(t,i,"","",function(s){return e.call(n,s,r++)}),i}function z0(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var dm={current:null};function li(){var t=dm.current;if(t===null)throw Error(zo(321));return t}var k0={ReactCurrentDispatcher:dm,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:kc,IsSomeRendererActing:{current:!1},assign:Oc};Ke.Children={map:qo,forEach:function(t,e,n){qo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qo(t,function(){e++}),e},toArray:function(t){return qo(t,function(e){return e})||[]},only:function(t){if(!Hc(t))throw Error(zo(143));return t}};Ke.Component=ys;Ke.PureComponent=Bc;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k0;Ke.cloneElement=function(t,e,n){if(t==null)throw Error(zo(267,t));var i=Oc({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)um.call(e,l)&&!cm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:xs,type:t.type,key:r,ref:s,props:i,_owner:o}};Ke.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:nm,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:tm,_context:t},t.Consumer=t};Ke.createElement=fm;Ke.createFactory=function(t){var e=fm.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:im,render:t}};Ke.isValidElement=Hc;Ke.lazy=function(t){return{$$typeof:sm,_payload:{_status:-1,_result:t},_init:z0}};Ke.memo=function(t,e){return{$$typeof:rm,type:t,compare:e===void 0?null:e}};Ke.useCallback=function(t,e){return li().useCallback(t,e)};Ke.useContext=function(t,e){return li().useContext(t,e)};Ke.useDebugValue=function(){};Ke.useEffect=function(t,e){return li().useEffect(t,e)};Ke.useImperativeHandle=function(t,e,n){return li().useImperativeHandle(t,e,n)};Ke.useLayoutEffect=function(t,e){return li().useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return li().useMemo(t,e)};Ke.useReducer=function(t,e,n){return li().useReducer(t,e,n)};Ke.useRef=function(t){return li().useRef(t)};Ke.useState=function(t){return li().useState(t)};Ke.version="17.0.2";Ne.exports=Ke;var H0=Ne.exports,hm={exports:{}},vn={},pm={exports:{}},mm={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,i,r;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var l=null,u=null,d=function(){if(l!==null)try{var b=t.unstable_now();l(!0,b),l=null}catch(P){throw setTimeout(d,0),P}};e=function(b){l!==null?setTimeout(e,0,b):(l=b,setTimeout(d,0))},n=function(b,P){u=setTimeout(b,P)},i=function(){clearTimeout(u)},t.unstable_shouldYield=function(){return!1},r=t.unstable_forceFrameRate=function(){}}else{var p=window.setTimeout,h=window.clearTimeout;if(typeof console!="undefined"){var m=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof m!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var v=!1,x=null,f=-1,c=5,g=0;t.unstable_shouldYield=function(){return t.unstable_now()>=g},r=function(){},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):c=0<b?Math.floor(1e3/b):5};var _=new MessageChannel,y=_.port2;_.port1.onmessage=function(){if(x!==null){var b=t.unstable_now();g=b+c;try{x(!0,b)?y.postMessage(null):(v=!1,x=null)}catch(P){throw y.postMessage(null),P}}else v=!1},e=function(b){x=b,v||(v=!0,y.postMessage(null))},n=function(b,P){f=p(function(){b(t.unstable_now())},P)},i=function(){h(f),f=-1}}function T(b,P){var q=b.length;b.push(P);e:for(;;){var Q=q-1>>>1,ie=b[Q];if(ie!==void 0&&0<I(ie,P))b[Q]=P,b[q]=ie,q=Q;else break e}}function w(b){return b=b[0],b===void 0?null:b}function C(b){var P=b[0];if(P!==void 0){var q=b.pop();if(q!==P){b[0]=q;e:for(var Q=0,ie=b.length;Q<ie;){var xe=2*(Q+1)-1,Me=b[xe],ye=xe+1,Oe=b[ye];if(Me!==void 0&&0>I(Me,q))Oe!==void 0&&0>I(Oe,Me)?(b[Q]=Oe,b[ye]=q,Q=ye):(b[Q]=Me,b[xe]=q,Q=xe);else if(Oe!==void 0&&0>I(Oe,q))b[Q]=Oe,b[ye]=q,Q=ye;else break e}}return P}return null}function I(b,P){var q=b.sortIndex-P.sortIndex;return q!==0?q:b.id-P.id}var S=[],R=[],Z=1,K=null,U=3,H=!1,G=!1,Y=!1;function V(b){for(var P=w(R);P!==null;){if(P.callback===null)C(R);else if(P.startTime<=b)C(R),P.sortIndex=P.expirationTime,T(S,P);else break;P=w(R)}}function W(b){if(Y=!1,V(b),!G)if(w(S)!==null)G=!0,e(J);else{var P=w(R);P!==null&&n(W,P.startTime-b)}}function J(b,P){G=!1,Y&&(Y=!1,i()),H=!0;var q=U;try{for(V(P),K=w(S);K!==null&&(!(K.expirationTime>P)||b&&!t.unstable_shouldYield());){var Q=K.callback;if(typeof Q=="function"){K.callback=null,U=K.priorityLevel;var ie=Q(K.expirationTime<=P);P=t.unstable_now(),typeof ie=="function"?K.callback=ie:K===w(S)&&C(S),V(P)}else C(S);K=w(S)}if(K!==null)var xe=!0;else{var Me=w(R);Me!==null&&n(W,Me.startTime-P),xe=!1}return xe}finally{K=null,U=q,H=!1}}var $=r;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){G||H||(G=!0,e(J))},t.unstable_getCurrentPriorityLevel=function(){return U},t.unstable_getFirstCallbackNode=function(){return w(S)},t.unstable_next=function(b){switch(U){case 1:case 2:case 3:var P=3;break;default:P=U}var q=U;U=P;try{return b()}finally{U=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=$,t.unstable_runWithPriority=function(b,P){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var q=U;U=b;try{return P()}finally{U=q}},t.unstable_scheduleCallback=function(b,P,q){var Q=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Q+q:Q):q=Q,b){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=q+ie,b={id:Z++,callback:P,priorityLevel:b,startTime:q,expirationTime:ie,sortIndex:-1},q>Q?(b.sortIndex=q,T(R,b),w(S)===null&&b===w(R)&&(Y?i():Y=!0,n(W,q-Q))):(b.sortIndex=ie,T(S,b),G||H||(G=!0,e(J))),b},t.unstable_wrapCallback=function(b){var P=U;return function(){var q=U;U=P;try{return b.apply(this,arguments)}finally{U=q}}}})(mm);pm.exports=mm;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gl=Ne.exports,at=Jp,Rt=pm.exports;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!gl)throw Error(oe(227));var gm=new Set,Mo={};function mr(t,e){fs(t,e),fs(t+"Capture",e)}function fs(t,e){for(Mo[t]=e,t=0;t<e.length;t++)gm.add(e[t])}var ai=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),G0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$f=Object.prototype.hasOwnProperty,Kf={},Zf={};function V0(t){return $f.call(Zf,t)?!0:$f.call(Kf,t)?!1:G0.test(t)?Zf[t]=!0:(Kf[t]=!0,!1)}function W0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function X0(t,e,n,i){if(e===null||typeof e=="undefined"||W0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pt[t]=new Wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pt[e]=new Wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pt[t]=new Wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pt[t]=new Wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pt[t]=new Wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pt[t]=new Wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pt[t]=new Wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pt[t]=new Wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pt[t]=new Wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gc=/[\-:]([a-z])/g;function Vc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gc,Vc);Pt[e]=new Wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gc,Vc);Pt[e]=new Wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gc,Vc);Pt[e]=new Wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pt[t]=new Wt(t,1,!1,t.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pt[t]=new Wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wc(t,e,n,i){var r=Pt.hasOwnProperty(e)?Pt[e]:null,s=r!==null?r.type===0:i?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(X0(e,n,r,i)&&(n=null),i||r===null?V0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var gr=gl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Js=60103,Qi=60106,mi=60107,Xc=60108,so=60114,jc=60109,qc=60110,_l=60112,oo=60113,Wa=60120,vl=60115,Yc=60116,$c=60121,Kc=60128,_m=60129,Zc=60130,ku=60131;if(typeof Symbol=="function"&&Symbol.for){var wt=Symbol.for;Js=wt("react.element"),Qi=wt("react.portal"),mi=wt("react.fragment"),Xc=wt("react.strict_mode"),so=wt("react.profiler"),jc=wt("react.provider"),qc=wt("react.context"),_l=wt("react.forward_ref"),oo=wt("react.suspense"),Wa=wt("react.suspense_list"),vl=wt("react.memo"),Yc=wt("react.lazy"),$c=wt("react.block"),wt("react.scope"),Kc=wt("react.opaque.id"),_m=wt("react.debug_trace_mode"),Zc=wt("react.offscreen"),ku=wt("react.legacy_hidden")}var Qf=typeof Symbol=="function"&&Symbol.iterator;function Us(t){return t===null||typeof t!="object"?null:(t=Qf&&t[Qf]||t["@@iterator"],typeof t=="function"?t:null)}var zl;function eo(t){if(zl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zl=e&&e[1]||""}return`
`+zl+t}var kl=!1;function Yo(t,e){if(!t||kl)return"";kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var i=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){i=l}t.call(e.prototype)}else{try{throw Error()}catch(l){i=l}t()}}catch(l){if(l&&i&&typeof l.stack=="string"){for(var r=l.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a])return`
`+r[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{kl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?eo(t):""}function j0(t){switch(t.tag){case 5:return eo(t.type);case 16:return eo("Lazy");case 13:return eo("Suspense");case 19:return eo("SuspenseList");case 0:case 2:case 15:return t=Yo(t.type,!1),t;case 11:return t=Yo(t.type.render,!1),t;case 22:return t=Yo(t.type._render,!1),t;case 1:return t=Yo(t.type,!0),t;default:return""}}function Qr(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case mi:return"Fragment";case Qi:return"Portal";case so:return"Profiler";case Xc:return"StrictMode";case oo:return"Suspense";case Wa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qc:return(t.displayName||"Context")+".Consumer";case jc:return(t._context.displayName||"Context")+".Provider";case _l:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case vl:return Qr(t.type);case $c:return Qr(t._render);case Yc:e=t._payload,t=t._init;try{return Qr(t(e))}catch{}}return null}function Di(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function vm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function q0(t){var e=vm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $o(t){t._valueTracker||(t._valueTracker=q0(t))}function xm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=vm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Xa(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hu(t,e){var n=e.checked;return at({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Jf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Di(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ym(t,e){e=e.checked,e!=null&&Wc(t,"checked",e,!1)}function Gu(t,e){ym(t,e);var n=Di(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vu(t,e.type,Di(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ed(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vu(t,e,n){(e!=="number"||Xa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function Y0(t){var e="";return gl.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function Wu(t,e){return t=at({children:void 0},e),(e=Y0(e.children))&&(t.children=e),t}function Jr(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Di(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return at({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function td(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Di(n)}}function Sm(t,e){var n=Di(e.value),i=Di(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function nd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var ju={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Mm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Mm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ko,Em=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!==ju.svg||"innerHTML"in t)t.innerHTML=e;else{for(Ko=Ko||document.createElement("div"),Ko.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ko.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Eo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ao={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$0=["Webkit","ms","Moz","O"];Object.keys(ao).forEach(function(t){$0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ao[e]=ao[t]})});function Tm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ao.hasOwnProperty(t)&&ao[t]?(""+e).trim():e+"px"}function wm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Tm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var K0=at({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yu(t,e){if(e){if(K0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function $u(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Qc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ku=null,es=null,ts=null;function id(t){if(t=Ho(t)){if(typeof Ku!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Tl(e),Ku(t.stateNode,t.type,e))}}function Am(t){es?ts?ts.push(t):ts=[t]:es=t}function Cm(){if(es){var t=es,e=ts;if(ts=es=null,id(t),e)for(t=0;t<e.length;t++)id(e[t])}}function Jc(t,e){return t(e)}function Rm(t,e,n,i,r){return t(e,n,i,r)}function ef(){}var bm=Jc,Ji=!1,Hl=!1;function tf(){(es!==null||ts!==null)&&(ef(),Cm())}function Z0(t,e,n){if(Hl)return t(e,n);Hl=!0;try{return bm(t,e,n)}finally{Hl=!1,tf()}}function To(t,e){var n=t.stateNode;if(n===null)return null;var i=Tl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Zu=!1;if(ai)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){Zu=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{Zu=!1}function Q0(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var lo=!1,ja=null,qa=!1,Qu=null,J0={onError:function(t){lo=!0,ja=t}};function e_(t,e,n,i,r,s,o,a,l){lo=!1,ja=null,Q0.apply(J0,arguments)}function t_(t,e,n,i,r,s,o,a,l){if(e_.apply(this,arguments),lo){if(lo){var u=ja;lo=!1,ja=null}else throw Error(oe(198));qa||(qa=!0,Qu=u)}}function _r(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Lm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function rd(t){if(_r(t)!==t)throw Error(oe(188))}function n_(t){var e=t.alternate;if(!e){if(e=_r(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return rd(r),t;if(s===i)return rd(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function Pm(t){if(t=n_(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function sd(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var Dm,nf,Um,Im,Ju=!1,Nn=[],Si=null,Mi=null,Ei=null,wo=new Map,Ao=new Map,Ns=[],od="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ec(t,e,n,i,r){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:r,targetContainers:[i]}}function ad(t,e){switch(t){case"focusin":case"focusout":Si=null;break;case"dragenter":case"dragleave":Mi=null;break;case"mouseover":case"mouseout":Ei=null;break;case"pointerover":case"pointerout":wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(e.pointerId)}}function Fs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t=ec(e,n,i,r,s),e!==null&&(e=Ho(e),e!==null&&nf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function i_(t,e,n,i,r){switch(e){case"focusin":return Si=Fs(Si,t,e,n,i,r),!0;case"dragenter":return Mi=Fs(Mi,t,e,n,i,r),!0;case"mouseover":return Ei=Fs(Ei,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return wo.set(s,Fs(wo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ao.set(s,Fs(Ao.get(s)||null,t,e,n,i,r)),!0}return!1}function r_(t){var e=er(t.target);if(e!==null){var n=_r(e);if(n!==null){if(e=n.tag,e===13){if(e=Lm(n),e!==null){t.blockedOn=e,Im(t.lanePriority,function(){Rt.unstable_runWithPriority(t.priority,function(){Um(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=af(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=Ho(n),e!==null&&nf(e),t.blockedOn=n,!1;e.shift()}return!0}function ld(t,e,n){Pa(t)&&n.delete(e)}function s_(){for(Ju=!1;0<Nn.length;){var t=Nn[0];if(t.blockedOn!==null){t=Ho(t.blockedOn),t!==null&&Dm(t);break}for(var e=t.targetContainers;0<e.length;){var n=af(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&Nn.shift()}Si!==null&&Pa(Si)&&(Si=null),Mi!==null&&Pa(Mi)&&(Mi=null),Ei!==null&&Pa(Ei)&&(Ei=null),wo.forEach(ld),Ao.forEach(ld)}function Os(t,e){t.blockedOn===e&&(t.blockedOn=null,Ju||(Ju=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,s_)))}function Nm(t){function e(r){return Os(r,t)}if(0<Nn.length){Os(Nn[0],t);for(var n=1;n<Nn.length;n++){var i=Nn[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Si!==null&&Os(Si,t),Mi!==null&&Os(Mi,t),Ei!==null&&Os(Ei,t),wo.forEach(e),Ao.forEach(e),n=0;n<Ns.length;n++)i=Ns[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ns.length&&(n=Ns[0],n.blockedOn===null);)r_(n),n.blockedOn===null&&Ns.shift()}function Zo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wr={animationend:Zo("Animation","AnimationEnd"),animationiteration:Zo("Animation","AnimationIteration"),animationstart:Zo("Animation","AnimationStart"),transitionend:Zo("Transition","TransitionEnd")},Gl={},Fm={};ai&&(Fm=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function xl(t){if(Gl[t])return Gl[t];if(!Wr[t])return t;var e=Wr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fm)return Gl[t]=e[n];return t}var Om=xl("animationend"),Bm=xl("animationiteration"),zm=xl("animationstart"),km=xl("transitionend"),Hm=new Map,rf=new Map,o_=["abort","abort",Om,"animationEnd",Bm,"animationIteration",zm,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",km,"transitionEnd","waiting","waiting"];function sf(t,e){for(var n=0;n<t.length;n+=2){var i=t[n],r=t[n+1];r="on"+(r[0].toUpperCase()+r.slice(1)),rf.set(i,e),Hm.set(i,r),mr(r,[i])}}var a_=Rt.unstable_now;a_();var tt=8;function kr(t){if((1&t)!==0)return tt=15,1;if((2&t)!==0)return tt=14,2;if((4&t)!==0)return tt=13,4;var e=24&t;return e!==0?(tt=12,e):(t&32)!==0?(tt=11,32):(e=192&t,e!==0?(tt=10,e):(t&256)!==0?(tt=9,256):(e=3584&t,e!==0?(tt=8,e):(t&4096)!==0?(tt=7,4096):(e=4186112&t,e!==0?(tt=6,e):(e=62914560&t,e!==0?(tt=5,e):t&67108864?(tt=4,67108864):(t&134217728)!==0?(tt=3,134217728):(e=805306368&t,e!==0?(tt=2,e):(1073741824&t)!==0?(tt=1,1073741824):(tt=8,t))))))}function l_(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function u_(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(oe(358,t))}}function Co(t,e){var n=t.pendingLanes;if(n===0)return tt=0;var i=0,r=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)i=s,r=tt=15;else if(s=n&134217727,s!==0){var l=s&~o;l!==0?(i=kr(l),r=tt):(a&=s,a!==0&&(i=kr(a),r=tt))}else s=n&~o,s!==0?(i=kr(s),r=tt):a!==0&&(i=kr(a),r=tt);if(i===0)return 0;if(i=31-Ui(i),i=n&((0>i?0:1<<i)<<1)-1,e!==0&&e!==i&&(e&o)===0){if(kr(e),r<=tt)return e;tt=r}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ui(e),r=1<<n,i|=t[n],e&=~r;return i}function Gm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ya(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=Hr(24&~e),t===0?Ya(10,e):t;case 10:return t=Hr(192&~e),t===0?Ya(8,e):t;case 8:return t=Hr(3584&~e),t===0&&(t=Hr(4186112&~e),t===0&&(t=512)),t;case 2:return e=Hr(805306368&~e),e===0&&(e=268435456),e}throw Error(oe(358,t))}function Hr(t){return t&-t}function Vl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function yl(t,e,n){t.pendingLanes|=e;var i=e-1;t.suspendedLanes&=i,t.pingedLanes&=i,t=t.eventTimes,e=31-Ui(e),t[e]=n}var Ui=Math.clz32?Math.clz32:d_,c_=Math.log,f_=Math.LN2;function d_(t){return t===0?32:31-(c_(t)/f_|0)|0}var h_=Rt.unstable_UserBlockingPriority,p_=Rt.unstable_runWithPriority,Da=!0;function m_(t,e,n,i){Ji||ef();var r=of,s=Ji;Ji=!0;try{Rm(r,t,e,n,i)}finally{(Ji=s)||tf()}}function g_(t,e,n,i){p_(h_,of.bind(null,t,e,n,i))}function of(t,e,n,i){if(Da){var r;if((r=(e&4)===0)&&0<Nn.length&&-1<od.indexOf(t))t=ec(null,t,e,n,i),Nn.push(t);else{var s=af(t,e,n,i);if(s===null)r&&ad(t,i);else{if(r){if(-1<od.indexOf(t)){t=ec(s,t,e,n,i),Nn.push(t);return}if(i_(s,t,e,n,i))return;ad(t,i)}tg(t,e,i,null,n)}}}}function af(t,e,n,i){var r=Qc(i);if(r=er(r),r!==null){var s=_r(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=Lm(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return tg(t,e,i,r,n),null}var gi=null,lf=null,Ua=null;function Vm(){if(Ua)return Ua;var t,e=lf,n=e.length,i,r="value"in gi?gi.value:gi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ua=r.slice(t,1<i?1-i:void 0)}function Ia(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qo(){return!0}function ud(){return!1}function on(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qo:ud,this.isPropagationStopped=ud,this}return at(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),e}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uf=on(Ss),ko=at({},Ss,{view:0,detail:0}),__=on(ko),Wl,Xl,Bs,Sl=at({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bs&&(Bs&&t.type==="mousemove"?(Wl=t.screenX-Bs.screenX,Xl=t.screenY-Bs.screenY):Xl=Wl=0,Bs=t),Wl)},movementY:function(t){return"movementY"in t?t.movementY:Xl}}),cd=on(Sl),v_=at({},Sl,{dataTransfer:0}),x_=on(v_),y_=at({},ko,{relatedTarget:0}),jl=on(y_),S_=at({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),M_=on(S_),E_=at({},Ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),T_=on(E_),w_=at({},Ss,{data:0}),fd=on(w_),A_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function b_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=R_[t])?!!e[t]:!1}function cf(){return b_}var L_=at({},ko,{key:function(t){if(t.key){var e=A_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?C_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cf,charCode:function(t){return t.type==="keypress"?Ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),P_=on(L_),D_=at({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dd=on(D_),U_=at({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cf}),I_=on(U_),N_=at({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),F_=on(N_),O_=at({},Sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),B_=on(O_),z_=[9,13,27,32],ff=ai&&"CompositionEvent"in window,uo=null;ai&&"documentMode"in document&&(uo=document.documentMode);var k_=ai&&"TextEvent"in window&&!uo,Wm=ai&&(!ff||uo&&8<uo&&11>=uo),hd=String.fromCharCode(32),pd=!1;function Xm(t,e){switch(t){case"keyup":return z_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xr=!1;function H_(t,e){switch(t){case"compositionend":return jm(e);case"keypress":return e.which!==32?null:(pd=!0,hd);case"textInput":return t=e.data,t===hd&&pd?null:t;default:return null}}function G_(t,e){if(Xr)return t==="compositionend"||!ff&&Xm(t,e)?(t=Vm(),Ua=lf=gi=null,Xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wm&&e.locale!=="ko"?null:e.data;default:return null}}var V_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!V_[t.type]:e==="textarea"}function qm(t,e,n,i){Am(i),e=$a(e,"onChange"),0<e.length&&(n=new uf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var co=null,Ro=null;function W_(t){Qm(t,0)}function Ml(t){var e=qr(t);if(xm(e))return t}function X_(t,e){if(t==="change")return e}var Ym=!1;if(ai){var ql;if(ai){var Yl="oninput"in document;if(!Yl){var gd=document.createElement("div");gd.setAttribute("oninput","return;"),Yl=typeof gd.oninput=="function"}ql=Yl}else ql=!1;Ym=ql&&(!document.documentMode||9<document.documentMode)}function _d(){co&&(co.detachEvent("onpropertychange",$m),Ro=co=null)}function $m(t){if(t.propertyName==="value"&&Ml(Ro)){var e=[];if(qm(e,Ro,t,Qc(t)),t=W_,Ji)t(e);else{Ji=!0;try{Jc(t,e)}finally{Ji=!1,tf()}}}}function j_(t,e,n){t==="focusin"?(_d(),co=e,Ro=n,co.attachEvent("onpropertychange",$m)):t==="focusout"&&_d()}function q_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ml(Ro)}function Y_(t,e){if(t==="click")return Ml(e)}function $_(t,e){if(t==="input"||t==="change")return Ml(e)}function K_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hn=typeof Object.is=="function"?Object.is:K_,Z_=Object.prototype.hasOwnProperty;function bo(t,e){if(hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++)if(!Z_.call(e,n[i])||!hn(t[n[i]],e[n[i]]))return!1;return!0}function vd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xd(t,e){var n=vd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vd(n)}}function Km(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Km(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yd(){for(var t=window,e=Xa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xa(t.document)}return e}function tc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Q_=ai&&"documentMode"in document&&11>=document.documentMode,jr=null,nc=null,fo=null,ic=!1;function Sd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ic||jr==null||jr!==Xa(i)||(i=jr,"selectionStart"in i&&tc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fo&&bo(fo,i)||(fo=i,i=$a(nc,"onSelect"),0<i.length&&(e=new uf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=jr)))}sf("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);sf("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);sf(o_,2);for(var Md="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),$l=0;$l<Md.length;$l++)rf.set(Md[$l],0);fs("onMouseEnter",["mouseout","mouseover"]);fs("onMouseLeave",["mouseout","mouseover"]);fs("onPointerEnter",["pointerout","pointerover"]);fs("onPointerLeave",["pointerout","pointerover"]);mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zm=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function Ed(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,t_(i,e,void 0,t),t.currentTarget=null}function Qm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ed(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ed(r,a,u),s=l}}}if(qa)throw t=Qu,qa=!1,Qu=null,t}function nt(t,e){var n=ig(e),i=t+"__bubble";n.has(i)||(eg(e,t,2,!1),n.add(i))}var Td="_reactListening"+Math.random().toString(36).slice(2);function Jm(t){t[Td]||(t[Td]=!0,gm.forEach(function(e){Zm.has(e)||wd(e,!1,t,null),wd(e,!0,t,null)}))}function wd(t,e,n,i){var r=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),i!==null&&!e&&Zm.has(t)){if(t!=="scroll")return;r|=2,s=i}var o=ig(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(r|=4),eg(s,t,r,e),o.add(a))}function eg(t,e,n,i){var r=rf.get(e);switch(r===void 0?2:r){case 0:r=m_;break;case 1:r=g_;break;default:r=of}n=r.bind(null,e,n,t),r=void 0,!Zu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function tg(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=er(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Z0(function(){var u=s,d=Qc(n),p=[];e:{var h=Hm.get(t);if(h!==void 0){var m=uf,v=t;switch(t){case"keypress":if(Ia(n)===0)break e;case"keydown":case"keyup":m=P_;break;case"focusin":v="focus",m=jl;break;case"focusout":v="blur",m=jl;break;case"beforeblur":case"afterblur":m=jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=x_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=I_;break;case Om:case Bm:case zm:m=M_;break;case km:m=F_;break;case"scroll":m=__;break;case"wheel":m=B_;break;case"copy":case"cut":case"paste":m=T_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=dd}var x=(e&4)!==0,f=!x&&t==="scroll",c=x?h!==null?h+"Capture":null:h;x=[];for(var g=u,_;g!==null;){_=g;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,c!==null&&(y=To(g,c),y!=null&&x.push(Lo(g,y,_)))),f)break;g=g.return}0<x.length&&(h=new m(h,v,null,n,d),p.push({event:h,listeners:x}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&(e&16)===0&&(v=n.relatedTarget||n.fromElement)&&(er(v)||v[Ms]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?er(v):null,v!==null&&(f=_r(v),v!==f||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(x=cd,y="onMouseLeave",c="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=dd,y="onPointerLeave",c="onPointerEnter",g="pointer"),f=m==null?h:qr(m),_=v==null?h:qr(v),h=new x(y,g+"leave",m,n,d),h.target=f,h.relatedTarget=_,y=null,er(d)===u&&(x=new x(c,g+"enter",v,n,d),x.target=_,x.relatedTarget=f,y=x),f=y,m&&v)t:{for(x=m,c=v,g=0,_=x;_;_=Mr(_))g++;for(_=0,y=c;y;y=Mr(y))_++;for(;0<g-_;)x=Mr(x),g--;for(;0<_-g;)c=Mr(c),_--;for(;g--;){if(x===c||c!==null&&x===c.alternate)break t;x=Mr(x),c=Mr(c)}x=null}else x=null;m!==null&&Ad(p,h,m,x,!1),v!==null&&f!==null&&Ad(p,f,v,x,!0)}}e:{if(h=u?qr(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var T=X_;else if(md(h))if(Ym)T=$_;else{T=q_;var w=j_}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=Y_);if(T&&(T=T(t,u))){qm(p,T,n,d);break e}w&&w(t,h,u),t==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&Vu(h,"number",h.value)}switch(w=u?qr(u):window,t){case"focusin":(md(w)||w.contentEditable==="true")&&(jr=w,nc=u,fo=null);break;case"focusout":fo=nc=jr=null;break;case"mousedown":ic=!0;break;case"contextmenu":case"mouseup":case"dragend":ic=!1,Sd(p,n,d);break;case"selectionchange":if(Q_)break;case"keydown":case"keyup":Sd(p,n,d)}var C;if(ff)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Xr?Xm(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Wm&&n.locale!=="ko"&&(Xr||I!=="onCompositionStart"?I==="onCompositionEnd"&&Xr&&(C=Vm()):(gi=d,lf="value"in gi?gi.value:gi.textContent,Xr=!0)),w=$a(u,I),0<w.length&&(I=new fd(I,t,null,n,d),p.push({event:I,listeners:w}),C?I.data=C:(C=jm(n),C!==null&&(I.data=C)))),(C=k_?H_(t,n):G_(t,n))&&(u=$a(u,"onBeforeInput"),0<u.length&&(d=new fd("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=C))}Qm(p,e)})}function Lo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $a(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=To(t,n),s!=null&&i.unshift(Lo(t,s,r)),s=To(t,e),s!=null&&i.push(Lo(t,s,r))),t=t.return}return i}function Mr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ad(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=To(n,s),l!=null&&o.unshift(Lo(n,l,a))):r||(l=To(n,s),l!=null&&o.push(Lo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function Ka(){}var Kl=null,Zl=null;function ng(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function rc(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cd=typeof setTimeout=="function"?setTimeout:void 0,J_=typeof clearTimeout=="function"?clearTimeout:void 0;function df(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function ns(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function Rd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ql=0;function ev(t){return{$$typeof:Kc,toString:t,valueOf:t}}var El=Math.random().toString(36).slice(2),_i="__reactFiber$"+El,Za="__reactProps$"+El,Ms="__reactContainer$"+El,bd="__reactEvents$"+El;function er(t){var e=t[_i];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ms]||n[_i]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Rd(t);t!==null;){if(n=t[_i])return n;t=Rd(t)}return e}t=n,n=t.parentNode}return null}function Ho(t){return t=t[_i]||t[Ms],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Tl(t){return t[Za]||null}function ig(t){var e=t[bd];return e===void 0&&(e=t[bd]=new Set),e}var sc=[],Yr=-1;function zi(t){return{current:t}}function rt(t){0>Yr||(t.current=sc[Yr],sc[Yr]=null,Yr--)}function dt(t,e){Yr++,sc[Yr]=t.current,t.current=e}var Ii={},Ot=zi(Ii),qt=zi(!1),fr=Ii;function ds(t,e){var n=t.type.contextTypes;if(!n)return Ii;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Yt(t){return t=t.childContextTypes,t!=null}function Qa(){rt(qt),rt(Ot)}function Ld(t,e,n){if(Ot.current!==Ii)throw Error(oe(168));dt(Ot,e),dt(qt,n)}function rg(t,e,n){var i=t.stateNode;if(t=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in t))throw Error(oe(108,Qr(e)||"Unknown",r));return at({},n,i)}function Na(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ii,fr=Ot.current,dt(Ot,t),dt(qt,qt.current),!0}function Pd(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=rg(t,e,fr),i.__reactInternalMemoizedMergedChildContext=t,rt(qt),rt(Ot),dt(Ot,t)):rt(qt),dt(qt,n)}var hf=null,rr=null,tv=Rt.unstable_runWithPriority,pf=Rt.unstable_scheduleCallback,oc=Rt.unstable_cancelCallback,nv=Rt.unstable_shouldYield,Dd=Rt.unstable_requestPaint,ac=Rt.unstable_now,iv=Rt.unstable_getCurrentPriorityLevel,wl=Rt.unstable_ImmediatePriority,sg=Rt.unstable_UserBlockingPriority,og=Rt.unstable_NormalPriority,ag=Rt.unstable_LowPriority,lg=Rt.unstable_IdlePriority,Jl={},rv=Dd!==void 0?Dd:function(){},Jn=null,Fa=null,eu=!1,Ud=ac(),Nt=1e4>Ud?ac:function(){return ac()-Ud};function hs(){switch(iv()){case wl:return 99;case sg:return 98;case og:return 97;case ag:return 96;case lg:return 95;default:throw Error(oe(332))}}function ug(t){switch(t){case 99:return wl;case 98:return sg;case 97:return og;case 96:return ag;case 95:return lg;default:throw Error(oe(332))}}function dr(t,e){return t=ug(t),tv(t,e)}function Po(t,e,n){return t=ug(t),pf(t,e,n)}function Hn(){if(Fa!==null){var t=Fa;Fa=null,oc(t)}cg()}function cg(){if(!eu&&Jn!==null){eu=!0;var t=0;try{var e=Jn;dr(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),Jn=null}catch(n){throw Jn!==null&&(Jn=Jn.slice(t+1)),pf(wl,Hn),n}finally{eu=!1}}}var sv=gr.ReactCurrentBatchConfig;function Tn(t,e){if(t&&t.defaultProps){e=at({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ja=zi(null),el=null,$r=null,tl=null;function mf(){tl=$r=el=null}function gf(t){var e=Ja.current;rt(Ja),t.type._context._currentValue=e}function fg(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function is(t,e){el=t,tl=$r=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Rn=!0),t.firstContext=null)}function gn(t,e){if(tl!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(tl=t,e=1073741823),e={context:t,observedBits:e,next:null},$r===null){if(el===null)throw Error(oe(308));$r=e,el.dependencies={lanes:0,firstContext:e,responders:null}}else $r=$r.next=e;return t._currentValue}var pi=!1;function _f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function dg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wi(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function Id(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Do(t,e,n,i){var r=t.updateQueue;pi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;if(d!==null){d=d.updateQueue;var p=d.lastBaseUpdate;p!==o&&(p===null?d.firstBaseUpdate=u:p.next=u,d.lastBaseUpdate=l)}}if(s!==null){p=r.baseState,o=0,d=u=l=null;do{a=s.lane;var h=s.eventTime;if((i&a)===a){d!==null&&(d=d.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=t,v=s;switch(a=e,h=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){p=m.call(h,p,a);break e}p=m;break e;case 3:m.flags=m.flags&-4097|64;case 0:if(m=v.payload,a=typeof m=="function"?m.call(h,p,a):m,a==null)break e;p=at({},p,a);break e;case 2:pi=!0}}s.callback!==null&&(t.flags|=32,a=r.effects,a===null?r.effects=[s]:a.push(s))}else h={eventTime:h,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=h,l=p):d=d.next=h,o|=a;if(s=s.next,s===null){if(a=r.shared.pending,a===null)break;s=a.next,a.next=null,r.lastBaseUpdate=a,r.shared.pending=null}}while(1);d===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,Vo|=o,t.lanes=o,t.memoizedState=p}}function Nd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var hg=new gl.Component().refs;function nl(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:at({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Al={isMounted:function(t){return(t=t._reactInternals)?_r(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=Ai(t),s=Ti(i,r);s.payload=e,n!=null&&(s.callback=n),wi(t,s),Ci(t,r,i)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=Ai(t),s=Ti(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),wi(t,s),Ci(t,r,i)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=Ai(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),wi(t,r),Ci(t,i,n)}};function Fd(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!bo(n,i)||!bo(r,s):!0}function pg(t,e,n){var i=!1,r=Ii,s=e.contextType;return typeof s=="object"&&s!==null?s=gn(s):(r=Yt(e)?fr:Ot.current,i=e.contextTypes,s=(i=i!=null)?ds(t,r):Ii),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Al,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Od(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Al.enqueueReplaceState(e,e.state,null)}function lc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=hg,_f(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=gn(s):(s=Yt(e)?fr:Ot.current,r.context=ds(t,s)),Do(t,n,r,i),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(nl(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Al.enqueueReplaceState(r,r.state,null),Do(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4)}var Jo=Array.isArray;function zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(s){var o=i.refs;o===hg&&(o=i.refs={}),s===null?delete o[r]:o[r]=s},e._stringRef=r,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function ea(t,e){if(t.type!=="textarea")throw Error(oe(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function mg(t){function e(f,c){if(t){var g=f.lastEffect;g!==null?(g.nextEffect=c,f.lastEffect=c):f.firstEffect=f.lastEffect=c,c.nextEffect=null,c.flags=8}}function n(f,c){if(!t)return null;for(;c!==null;)e(f,c),c=c.sibling;return null}function i(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function r(f,c){return f=Fi(f,c),f.index=0,f.sibling=null,f}function s(f,c,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<c?(f.flags=2,c):g):(f.flags=2,c)):c}function o(f){return t&&f.alternate===null&&(f.flags=2),f}function a(f,c,g,_){return c===null||c.tag!==6?(c=su(g,f.mode,_),c.return=f,c):(c=r(c,g),c.return=f,c)}function l(f,c,g,_){return c!==null&&c.elementType===g.type?(_=r(c,g.props),_.ref=zs(f,c,g),_.return=f,_):(_=ka(g.type,g.key,g.props,null,f.mode,_),_.ref=zs(f,c,g),_.return=f,_)}function u(f,c,g,_){return c===null||c.tag!==4||c.stateNode.containerInfo!==g.containerInfo||c.stateNode.implementation!==g.implementation?(c=ou(g,f.mode,_),c.return=f,c):(c=r(c,g.children||[]),c.return=f,c)}function d(f,c,g,_,y){return c===null||c.tag!==7?(c=as(g,f.mode,_,y),c.return=f,c):(c=r(c,g),c.return=f,c)}function p(f,c,g){if(typeof c=="string"||typeof c=="number")return c=su(""+c,f.mode,g),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Js:return g=ka(c.type,c.key,c.props,null,f.mode,g),g.ref=zs(f,null,c),g.return=f,g;case Qi:return c=ou(c,f.mode,g),c.return=f,c}if(Jo(c)||Us(c))return c=as(c,f.mode,g,null),c.return=f,c;ea(f,c)}return null}function h(f,c,g,_){var y=c!==null?c.key:null;if(typeof g=="string"||typeof g=="number")return y!==null?null:a(f,c,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Js:return g.key===y?g.type===mi?d(f,c,g.props.children,_,y):l(f,c,g,_):null;case Qi:return g.key===y?u(f,c,g,_):null}if(Jo(g)||Us(g))return y!==null?null:d(f,c,g,_,null);ea(f,g)}return null}function m(f,c,g,_,y){if(typeof _=="string"||typeof _=="number")return f=f.get(g)||null,a(c,f,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Js:return f=f.get(_.key===null?g:_.key)||null,_.type===mi?d(c,f,_.props.children,y,_.key):l(c,f,_,y);case Qi:return f=f.get(_.key===null?g:_.key)||null,u(c,f,_,y)}if(Jo(_)||Us(_))return f=f.get(g)||null,d(c,f,_,y,null);ea(c,_)}return null}function v(f,c,g,_){for(var y=null,T=null,w=c,C=c=0,I=null;w!==null&&C<g.length;C++){w.index>C?(I=w,w=null):I=w.sibling;var S=h(f,w,g[C],_);if(S===null){w===null&&(w=I);break}t&&w&&S.alternate===null&&e(f,w),c=s(S,c,C),T===null?y=S:T.sibling=S,T=S,w=I}if(C===g.length)return n(f,w),y;if(w===null){for(;C<g.length;C++)w=p(f,g[C],_),w!==null&&(c=s(w,c,C),T===null?y=w:T.sibling=w,T=w);return y}for(w=i(f,w);C<g.length;C++)I=m(w,f,C,g[C],_),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?C:I.key),c=s(I,c,C),T===null?y=I:T.sibling=I,T=I);return t&&w.forEach(function(R){return e(f,R)}),y}function x(f,c,g,_){var y=Us(g);if(typeof y!="function")throw Error(oe(150));if(g=y.call(g),g==null)throw Error(oe(151));for(var T=y=null,w=c,C=c=0,I=null,S=g.next();w!==null&&!S.done;C++,S=g.next()){w.index>C?(I=w,w=null):I=w.sibling;var R=h(f,w,S.value,_);if(R===null){w===null&&(w=I);break}t&&w&&R.alternate===null&&e(f,w),c=s(R,c,C),T===null?y=R:T.sibling=R,T=R,w=I}if(S.done)return n(f,w),y;if(w===null){for(;!S.done;C++,S=g.next())S=p(f,S.value,_),S!==null&&(c=s(S,c,C),T===null?y=S:T.sibling=S,T=S);return y}for(w=i(f,w);!S.done;C++,S=g.next())S=m(w,f,C,S.value,_),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?C:S.key),c=s(S,c,C),T===null?y=S:T.sibling=S,T=S);return t&&w.forEach(function(Z){return e(f,Z)}),y}return function(f,c,g,_){var y=typeof g=="object"&&g!==null&&g.type===mi&&g.key===null;y&&(g=g.props.children);var T=typeof g=="object"&&g!==null;if(T)switch(g.$$typeof){case Js:e:{for(T=g.key,y=c;y!==null;){if(y.key===T){switch(y.tag){case 7:if(g.type===mi){n(f,y.sibling),c=r(y,g.props.children),c.return=f,f=c;break e}break;default:if(y.elementType===g.type){n(f,y.sibling),c=r(y,g.props),c.ref=zs(f,y,g),c.return=f,f=c;break e}}n(f,y);break}else e(f,y);y=y.sibling}g.type===mi?(c=as(g.props.children,f.mode,_,g.key),c.return=f,f=c):(_=ka(g.type,g.key,g.props,null,f.mode,_),_.ref=zs(f,c,g),_.return=f,f=_)}return o(f);case Qi:e:{for(y=g.key;c!==null;){if(c.key===y)if(c.tag===4&&c.stateNode.containerInfo===g.containerInfo&&c.stateNode.implementation===g.implementation){n(f,c.sibling),c=r(c,g.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else e(f,c);c=c.sibling}c=ou(g,f.mode,_),c.return=f,f=c}return o(f)}if(typeof g=="string"||typeof g=="number")return g=""+g,c!==null&&c.tag===6?(n(f,c.sibling),c=r(c,g),c.return=f,f=c):(n(f,c),c=su(g,f.mode,_),c.return=f,f=c),o(f);if(Jo(g))return v(f,c,g,_);if(Us(g))return x(f,c,g,_);if(T&&ea(f,g),typeof g=="undefined"&&!y)switch(f.tag){case 1:case 22:case 0:case 11:case 15:throw Error(oe(152,Qr(f.type)||"Component"))}return n(f,c)}}var il=mg(!0),gg=mg(!1),Go={},Bn=zi(Go),Uo=zi(Go),Io=zi(Go);function tr(t){if(t===Go)throw Error(oe(174));return t}function uc(t,e){switch(dt(Io,e),dt(Uo,t),dt(Bn,Go),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qu(e,t)}rt(Bn),dt(Bn,e)}function ps(){rt(Bn),rt(Uo),rt(Io)}function Bd(t){tr(Io.current);var e=tr(Bn.current),n=qu(e,t.type);e!==n&&(dt(Uo,t),dt(Bn,n))}function vf(t){Uo.current===t&&(rt(Bn),rt(Uo))}var ft=zi(0);function rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ti=null,vi=null,zn=!1;function _g(t,e){var n=pn(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function zd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function cc(t){if(zn){var e=vi;if(e){var n=e;if(!zd(t,e)){if(e=ns(n.nextSibling),!e||!zd(t,e)){t.flags=t.flags&-1025|2,zn=!1,ti=t;return}_g(ti,n)}ti=t,vi=ns(e.firstChild)}else t.flags=t.flags&-1025|2,zn=!1,ti=t}}function kd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ti=t}function ta(t){if(t!==ti)return!1;if(!zn)return kd(t),zn=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!rc(e,t.memoizedProps))for(e=vi;e;)_g(t,e),e=ns(e.nextSibling);if(kd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vi=ns(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vi=null}}else vi=ti?ns(t.stateNode.nextSibling):null;return!0}function tu(){vi=ti=null,zn=!1}var rs=[];function xf(){for(var t=0;t<rs.length;t++)rs[t]._workInProgressVersionPrimary=null;rs.length=0}var ho=gr.ReactCurrentDispatcher,mn=gr.ReactCurrentBatchConfig,No=0,gt=null,It=null,bt=null,sl=!1,po=!1;function Xt(){throw Error(oe(321))}function yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hn(t[n],e[n]))return!1;return!0}function Sf(t,e,n,i,r,s){if(No=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ho.current=t===null||t.memoizedState===null?av:lv,t=n(i,r),po){s=0;do{if(po=!1,!(25>s))throw Error(oe(301));s+=1,bt=It=null,e.updateQueue=null,ho.current=uv,t=n(i,r)}while(po)}if(ho.current=ul,e=It!==null&&It.next!==null,No=0,bt=It=gt=null,sl=!1,e)throw Error(oe(300));return t}function nr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?gt.memoizedState=bt=t:bt=bt.next=t,bt}function vr(){if(It===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=bt===null?gt.memoizedState:bt.next;if(e!==null)bt=e,It=t;else{if(t===null)throw Error(oe(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},bt===null?gt.memoizedState=bt=t:bt=bt.next=t}return bt}function Fn(t,e){return typeof e=="function"?e(t):e}function ks(t){var e=vr(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){r=r.next,i=i.baseState;var a=o=s=null,l=r;do{var u=l.lane;if((No&u)===u)a!==null&&(a=a.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),i=l.eagerReducer===t?l.eagerState:t(i,l.action);else{var d={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};a===null?(o=a=d,s=i):a=a.next=d,gt.lanes|=u,Vo|=u}l=l.next}while(l!==null&&l!==r);a===null?s=i:a.next=o,hn(i,e.memoizedState)||(Rn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=a,n.lastRenderedState=i}return[e.memoizedState,n.dispatch]}function Hs(t){var e=vr(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);hn(s,e.memoizedState)||(Rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Hd(t,e,n){var i=e._getVersion;i=i(e._source);var r=e._workInProgressVersionPrimary;if(r!==null?t=r===i:(t=t.mutableReadLanes,(t=(No&t)===t)&&(e._workInProgressVersionPrimary=i,rs.push(e))),t)return n(e._source);throw rs.push(e),Error(oe(350))}function vg(t,e,n,i){var r=Vt;if(r===null)throw Error(oe(349));var s=e._getVersion,o=s(e._source),a=ho.current,l=a.useState(function(){return Hd(r,e,n)}),u=l[1],d=l[0];l=bt;var p=t.memoizedState,h=p.refs,m=h.getSnapshot,v=p.source;p=p.subscribe;var x=gt;return t.memoizedState={refs:h,source:e,subscribe:i},a.useEffect(function(){h.getSnapshot=n,h.setSnapshot=u;var f=s(e._source);if(!hn(o,f)){f=n(e._source),hn(d,f)||(u(f),f=Ai(x),r.mutableReadLanes|=f&r.pendingLanes),f=r.mutableReadLanes,r.entangledLanes|=f;for(var c=r.entanglements,g=f;0<g;){var _=31-Ui(g),y=1<<_;c[_]|=f,g&=~y}}},[n,e,i]),a.useEffect(function(){return i(e._source,function(){var f=h.getSnapshot,c=h.setSnapshot;try{c(f(e._source));var g=Ai(x);r.mutableReadLanes|=g&r.pendingLanes}catch(_){c(function(){throw _})}})},[e,i]),hn(m,n)&&hn(v,e)&&hn(p,i)||(t={pending:null,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:d},t.dispatch=u=Tf.bind(null,gt,t),l.queue=t,l.baseQueue=null,d=Hd(r,e,n),l.memoizedState=l.baseState=d),d}function xg(t,e,n){var i=vr();return vg(i,t,e,n)}function Gs(t){var e=nr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:t},t=t.dispatch=Tf.bind(null,gt,t),[e.memoizedState,t]}function ol(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Gd(t){var e=nr();return t={current:t},e.memoizedState=t}function al(){return vr().memoizedState}function fc(t,e,n,i){var r=nr();gt.flags|=t,r.memoizedState=ol(1|e,n,void 0,i===void 0?null:i)}function Mf(t,e,n,i){var r=vr();i=i===void 0?null:i;var s=void 0;if(It!==null){var o=It.memoizedState;if(s=o.destroy,i!==null&&yf(i,o.deps)){ol(e,n,s,i);return}}gt.flags|=t,r.memoizedState=ol(1|e,n,s,i)}function Vd(t,e){return fc(516,4,t,e)}function ll(t,e){return Mf(516,4,t,e)}function yg(t,e){return Mf(4,2,t,e)}function Sg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Mg(t,e,n){return n=n!=null?n.concat([t]):null,Mf(4,2,Sg.bind(null,e,t),n)}function Ef(){}function Eg(t,e){var n=vr();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Tg(t,e){var n=vr();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ov(t,e){var n=hs();dr(98>n?98:n,function(){t(!0)}),dr(97<n?97:n,function(){var i=mn.transition;mn.transition=1;try{t(!1),e()}finally{mn.transition=i}})}function Tf(t,e,n){var i=rn(),r=Ai(t),s={lane:r,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===gt||o!==null&&o===gt)po=sl=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,l=o(a,n);if(s.eagerReducer=o,s.eagerState=l,hn(l,a))return}catch{}finally{}Ci(t,r,i)}}var ul={readContext:gn,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useOpaqueIdentifier:Xt,unstable_isNewReconciler:!1},av={readContext:gn,useCallback:function(t,e){return nr().memoizedState=[t,e===void 0?null:e],t},useContext:gn,useEffect:Vd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fc(4,2,Sg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fc(4,2,t,e)},useMemo:function(t,e){var n=nr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=nr();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t=i.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=Tf.bind(null,gt,t),[i.memoizedState,t]},useRef:Gd,useState:Gs,useDebugValue:Ef,useDeferredValue:function(t){var e=Gs(t),n=e[0],i=e[1];return Vd(function(){var r=mn.transition;mn.transition=1;try{i(t)}finally{mn.transition=r}},[t]),n},useTransition:function(){var t=Gs(!1),e=t[0];return t=ov.bind(null,t[1]),Gd(t),[t,e]},useMutableSource:function(t,e,n){var i=nr();return i.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},vg(i,t,e,n)},useOpaqueIdentifier:function(){if(zn){var t=!1,e=ev(function(){throw t||(t=!0,n("r:"+(Ql++).toString(36))),Error(oe(355))}),n=Gs(e)[1];return(gt.mode&2)===0&&(gt.flags|=516,ol(5,function(){n("r:"+(Ql++).toString(36))},void 0,null)),e}return e="r:"+(Ql++).toString(36),Gs(e),e},unstable_isNewReconciler:!1},lv={readContext:gn,useCallback:Eg,useContext:gn,useEffect:ll,useImperativeHandle:Mg,useLayoutEffect:yg,useMemo:Tg,useReducer:ks,useRef:al,useState:function(){return ks(Fn)},useDebugValue:Ef,useDeferredValue:function(t){var e=ks(Fn),n=e[0],i=e[1];return ll(function(){var r=mn.transition;mn.transition=1;try{i(t)}finally{mn.transition=r}},[t]),n},useTransition:function(){var t=ks(Fn)[0];return[al().current,t]},useMutableSource:xg,useOpaqueIdentifier:function(){return ks(Fn)[0]},unstable_isNewReconciler:!1},uv={readContext:gn,useCallback:Eg,useContext:gn,useEffect:ll,useImperativeHandle:Mg,useLayoutEffect:yg,useMemo:Tg,useReducer:Hs,useRef:al,useState:function(){return Hs(Fn)},useDebugValue:Ef,useDeferredValue:function(t){var e=Hs(Fn),n=e[0],i=e[1];return ll(function(){var r=mn.transition;mn.transition=1;try{i(t)}finally{mn.transition=r}},[t]),n},useTransition:function(){var t=Hs(Fn)[0];return[al().current,t]},useMutableSource:xg,useOpaqueIdentifier:function(){return Hs(Fn)[0]},unstable_isNewReconciler:!1},cv=gr.ReactCurrentOwner,Rn=!1;function jt(t,e,n,i){e.child=t===null?gg(e,null,n,i):il(e,t.child,n,i)}function Wd(t,e,n,i,r){n=n.render;var s=e.ref;return is(e,r),i=Sf(t,e,n,i,s,r),t!==null&&!Rn?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~r,ni(t,e,r)):(e.flags|=1,jt(t,e,i,r),e.child)}function Xd(t,e,n,i,r,s){if(t===null){var o=n.type;return typeof o=="function"&&!Lf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,wg(t,e,o,i,r,s)):(t=ka(n.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(r&s)===0&&(r=o.memoizedProps,n=n.compare,n=n!==null?n:bo,n(r,i)&&t.ref===e.ref)?ni(t,e,s):(e.flags|=1,t=Fi(o,i),t.ref=e.ref,t.return=e,e.child=t)}function wg(t,e,n,i,r,s){if(t!==null&&bo(t.memoizedProps,i)&&t.ref===e.ref)if(Rn=!1,(s&r)!==0)(t.flags&16384)!==0&&(Rn=!0);else return e.lanes=t.lanes,ni(t,e,s);return dc(t,e,n,i,s)}function nu(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden"||i.mode==="unstable-defer-without-hiding")if((e.mode&4)===0)e.memoizedState={baseLanes:0},ia(e,n);else if((n&1073741824)!==0)e.memoizedState={baseLanes:0},ia(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},ia(e,t),null;else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ia(e,i);return jt(t,e,r,n),e.child}function Ag(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function dc(t,e,n,i,r){var s=Yt(n)?fr:Ot.current;return s=ds(e,s),is(e,r),n=Sf(t,e,n,i,s,r),t!==null&&!Rn?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~r,ni(t,e,r)):(e.flags|=1,jt(t,e,n,r),e.child)}function jd(t,e,n,i,r){if(Yt(n)){var s=!0;Na(e)}else s=!1;if(is(e,r),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),pg(e,n,i),lc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=gn(u):(u=Yt(n)?fr:Ot.current,u=ds(e,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Od(e,o,i,u),pi=!1;var h=e.memoizedState;o.state=h,Do(e,i,o,r),l=e.memoizedState,a!==i||h!==l||qt.current||pi?(typeof d=="function"&&(nl(e,n,d,i),l=e.memoizedState),(a=pi||Fd(e,n,a,i,h,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),i=!1)}else{o=e.stateNode,dg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Tn(e.type,a),o.props=u,p=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=gn(l):(l=Yt(n)?fr:Ot.current,l=ds(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||h!==l)&&Od(e,o,i,l),pi=!1,h=e.memoizedState,o.state=h,Do(e,i,o,r);var v=e.memoizedState;a!==p||h!==v||qt.current||pi?(typeof m=="function"&&(nl(e,n,m,i),v=e.memoizedState),(u=pi||Fd(e,n,u,i,h,v,l))?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=256),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=256),i=!1)}return hc(t,e,n,i,s,r)}function hc(t,e,n,i,r,s){Ag(t,e);var o=(e.flags&64)!==0;if(!i&&!o)return r&&Pd(e,n,!1),ni(t,e,s);i=e.stateNode,cv.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=il(e,t.child,null,s),e.child=il(e,null,a,s)):jt(t,e,a,s),e.memoizedState=i.state,r&&Pd(e,n,!0),e.child}function qd(t){var e=t.stateNode;e.pendingContext?Ld(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ld(t,e.context,!1),uc(t,e.containerInfo)}var na={dehydrated:null,retryLane:0};function Yd(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,o;return(o=(e.flags&64)!==0)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||i.fallback===void 0||i.unstable_avoidThisFallback===!0||(r|=1),dt(ft,r&1),t===null?(i.fallback!==void 0&&cc(e),t=i.children,r=i.fallback,s?(t=$d(e,t,r,n),e.child.memoizedState={baseLanes:n},e.memoizedState=na,t):typeof i.unstable_expectedLoadTime=="number"?(t=$d(e,t,r,n),e.child.memoizedState={baseLanes:n},e.memoizedState=na,e.lanes=33554432,t):(n=Pf({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(i=Zd(t,e,i.children,i.fallback,n),s=e.child,r=t.child.memoizedState,s.memoizedState=r===null?{baseLanes:n}:{baseLanes:r.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=na,i):(n=Kd(t,e,i.children,n),e.memoizedState=null,n):s?(i=Zd(t,e,i.children,i.fallback,n),s=e.child,r=t.child.memoizedState,s.memoizedState=r===null?{baseLanes:n}:{baseLanes:r.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=na,i):(n=Kd(t,e,i.children,n),e.memoizedState=null,n)}function $d(t,e,n,i){var r=t.mode,s=t.child;return e={mode:"hidden",children:e},(r&2)===0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=Pf(e,r,0,null),n=as(n,r,i,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function Kd(t,e,n,i){var r=t.child;return t=r.sibling,n=Fi(r,{mode:"visible",children:n}),(e.mode&2)===0&&(n.lanes=i),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function Zd(t,e,n,i,r){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)===0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=Fi(o,a),t!==null?i=Fi(t,i):(i=as(i,s,r,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,i}function Qd(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),fg(t.return,e)}function iu(t,e,n,i,r,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r,o.lastEffect=s)}function Jd(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(jt(t,e,i.children,n),i=ft.current,(i&2)!==0)i=i&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qd(t,n);else if(t.tag===19)Qd(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(ft,i),(e.mode&2)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&rl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),iu(e,!1,r,n,s,e.lastEffect);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&rl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}iu(e,!0,n,null,s,e.lastEffect);break;case"together":iu(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function ni(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vo|=e.lanes,(n&e.childLanes)!==0){if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Fi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var Cg,pc,Rg,bg;Cg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pc=function(){};Rg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,tr(Bn.current);var s=null;switch(n){case"input":r=Hu(t,r),i=Hu(t,i),s=[];break;case"option":r=Wu(t,r),i=Wu(t,i),s=[];break;case"select":r=at({},r,{value:void 0}),i=at({},i,{value:void 0}),s=[];break;case"textarea":r=Xu(t,r),i=Xu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ka)}Yu(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Mo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Mo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&nt("scroll",t),s||a===l||(s=[])):typeof l=="object"&&l!==null&&l.$$typeof===Kc?l.toString():(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};bg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Vs(t,e){if(!zn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function fv(t,e,n){var i=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Yt(e.type)&&Qa(),null;case 3:return ps(),rt(qt),rt(Ot),xf(),i=e.stateNode,i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ta(e)?e.flags|=4:i.hydrate||(e.flags|=256)),pc(e),null;case 5:vf(e);var r=tr(Io.current);if(n=e.type,t!==null&&e.stateNode!=null)Rg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=128);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return null}if(t=tr(Bn.current),ta(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[_i]=e,i[Za]=s,n){case"dialog":nt("cancel",i),nt("close",i);break;case"iframe":case"object":case"embed":nt("load",i);break;case"video":case"audio":for(t=0;t<to.length;t++)nt(to[t],i);break;case"source":nt("error",i);break;case"img":case"image":case"link":nt("error",i),nt("load",i);break;case"details":nt("toggle",i);break;case"input":Jf(i,s),nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},nt("invalid",i);break;case"textarea":td(i,s),nt("invalid",i)}Yu(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(r=s[o],o==="children"?typeof r=="string"?i.textContent!==r&&(t=["children",r]):typeof r=="number"&&i.textContent!==""+r&&(t=["children",""+r]):Mo.hasOwnProperty(o)&&r!=null&&o==="onScroll"&&nt("scroll",i));switch(n){case"input":$o(i),ed(i,s,!0);break;case"textarea":$o(i),nd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ka)}i=t,e.updateQueue=i,i!==null&&(e.flags|=4)}else{switch(o=r.nodeType===9?r:r.ownerDocument,t===ju.html&&(t=Mm(n)),t===ju.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[_i]=e,t[Za]=i,Cg(t,e,!1,!1),e.stateNode=t,o=$u(n,i),n){case"dialog":nt("cancel",t),nt("close",t),r=i;break;case"iframe":case"object":case"embed":nt("load",t),r=i;break;case"video":case"audio":for(r=0;r<to.length;r++)nt(to[r],t);r=i;break;case"source":nt("error",t),r=i;break;case"img":case"image":case"link":nt("error",t),nt("load",t),r=i;break;case"details":nt("toggle",t),r=i;break;case"input":Jf(t,i),r=Hu(t,i),nt("invalid",t);break;case"option":r=Wu(t,i);break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=at({},i,{value:void 0}),nt("invalid",t);break;case"textarea":td(t,i),r=Xu(t,i),nt("invalid",t);break;default:r=i}Yu(n,r);var a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?wm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Em(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Eo(t,l):typeof l=="number"&&Eo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Mo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&nt("scroll",t):l!=null&&Wc(t,s,l,o))}switch(n){case"input":$o(t),ed(t,i,!1);break;case"textarea":$o(t),nd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Di(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Jr(t,!!i.multiple,s,!1):i.defaultValue!=null&&Jr(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ka)}ng(n,i)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)bg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));n=tr(Io.current),tr(Bn.current),ta(e)?(i=e.stateNode,n=e.memoizedProps,i[_i]=e,i.nodeValue!==n&&(e.flags|=4)):(i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[_i]=e,e.stateNode=i)}return null;case 13:return rt(ft),i=e.memoizedState,(e.flags&64)!==0?(e.lanes=n,e):(i=i!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&ta(e):n=t.memoizedState!==null,i&&!n&&(e.mode&2)!==0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(ft.current&1)!==0?Lt===0&&(Lt=3):((Lt===0||Lt===3)&&(Lt=4),Vt===null||(Vo&134217727)===0&&(Ts&134217727)===0||ss(Vt,Ft))),(i||n)&&(e.flags|=4),null);case 4:return ps(),pc(e),t===null&&Jm(e.stateNode.containerInfo),null;case 10:return gf(e),null;case 17:return Yt(e.type)&&Qa(),null;case 19:if(rt(ft),i=e.memoizedState,i===null)return null;if(s=(e.flags&64)!==0,o=i.rendering,o===null)if(s)Vs(i,!1);else{if(Lt!==0||t!==null&&(t.flags&64)!==0)for(t=e.child;t!==null;){if(o=rl(t),o!==null){for(e.flags|=64,Vs(i,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),i.lastEffect===null&&(e.firstEffect=null),e.lastEffect=i.lastEffect,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(ft,ft.current&1|2),e.child}t=t.sibling}i.tail!==null&&Nt()>yc&&(e.flags|=64,s=!0,Vs(i,!1),e.lanes=33554432)}else{if(!s)if(t=rl(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vs(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!zn)return e=e.lastEffect=i.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*Nt()-i.renderingStartTime>yc&&n!==1073741824&&(e.flags|=64,s=!0,Vs(i,!1),e.lanes=33554432);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.lastEffect=e.lastEffect,i.renderingStartTime=Nt(),n.sibling=null,e=ft.current,dt(ft,s?e&1|2:e&1),n):null;case 23:case 24:return bf(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&i.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(oe(156,e.tag))}function dv(t){switch(t.tag){case 1:Yt(t.type)&&Qa();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(ps(),rt(qt),rt(Ot),xf(),e=t.flags,(e&64)!==0)throw Error(oe(285));return t.flags=e&-4097|64,t;case 5:return vf(t),null;case 13:return rt(ft),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return rt(ft),null;case 4:return ps(),null;case 10:return gf(t),null;case 23:case 24:return bf(),null;default:return null}}function wf(t,e){try{var n="",i=e;do n+=j0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r}}function mc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hv=typeof WeakMap=="function"?WeakMap:Map;function Lg(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){fl||(fl=!0,Sc=i),mc(t,e)},n}function Pg(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return mc(t,e),i(r)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof i!="function"&&(On===null?On=new Set([this]):On.add(this),mc(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var pv=typeof WeakSet=="function"?WeakSet:Set;function eh(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){Ri(t,n)}else e.current=null}function mv(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,i=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:Tn(e.type,n),i),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&df(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(oe(163))}function gv(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)===3){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var r=t;i=r.next,r=r.tag,(r&4)!==0&&(r&1)!==0&&(kg(n,t),Tv(n,t)),t=i}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(i=n.elementType===n.type?e.memoizedProps:Tn(n.type,e.memoizedProps),t.componentDidUpdate(i,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&Nd(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Nd(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&ng(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Nm(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(oe(163))}function th(t,e){for(var n=t;;){if(n.tag===5){var i=n.stateNode;if(e)i=i.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{i=n.stateNode;var r=n.memoizedProps.style;r=r!=null&&r.hasOwnProperty("display")?r.display:null,i.style.display=Tm("display",r)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function nh(t,e){if(rr&&typeof rr.onCommitFiberUnmount=="function")try{rr.onCommitFiberUnmount(hf,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var i=n,r=i.destroy;if(i=i.tag,r!==void 0)if((i&4)!==0)kg(e,n);else{i=e;try{r()}catch(s){Ri(i,s)}}n=n.next}while(n!==t)}break;case 1:if(eh(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){Ri(e,s)}break;case 5:eh(e);break;case 4:Dg(t,e)}}function ih(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function rh(t){return t.tag===5||t.tag===3||t.tag===4}function sh(t){e:{for(var e=t.return;e!==null;){if(rh(e))break e;e=e.return}throw Error(oe(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var i=!1;break;case 3:e=e.containerInfo,i=!0;break;case 4:e=e.containerInfo,i=!0;break;default:throw Error(oe(161))}n.flags&16&&(Eo(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||rh(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}i?gc(t,n,e):_c(t,n,e)}function gc(t,e,n){var i=t.tag,r=i===5||i===6;if(r)t=r?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ka));else if(i!==4&&(t=t.child,t!==null))for(gc(t,e,n),t=t.sibling;t!==null;)gc(t,e,n),t=t.sibling}function _c(t,e,n){var i=t.tag,r=i===5||i===6;if(r)t=r?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(_c(t,e,n),t=t.sibling;t!==null;)_c(t,e,n),t=t.sibling}function Dg(t,e){for(var n=e,i=!1,r,s;;){if(!i){i=n.return;e:for(;;){if(i===null)throw Error(oe(160));switch(r=i.stateNode,i.tag){case 5:s=!1;break e;case 3:r=r.containerInfo,s=!0;break e;case 4:r=r.containerInfo,s=!0;break e}i=i.return}i=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,l=a;;)if(nh(o,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}s?(o=r,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):r.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){r=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(nh(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(i=!1)}n.sibling.return=n.return,n=n.sibling}}function ru(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do(i.tag&3)===3&&(t=i.destroy,i.destroy=void 0,t!==void 0&&t()),i=i.next;while(i!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){i=e.memoizedProps;var r=t!==null?t.memoizedProps:i;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[Za]=i,t==="input"&&i.type==="radio"&&i.name!=null&&ym(n,i),$u(t,r),e=$u(t,i),r=0;r<s.length;r+=2){var o=s[r],a=s[r+1];o==="style"?wm(n,a):o==="dangerouslySetInnerHTML"?Em(n,a):o==="children"?Eo(n,a):Wc(n,o,a,e)}switch(t){case"input":Gu(n,i);break;case"textarea":Sm(n,i);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!i.multiple,s=i.value,s!=null?Jr(n,!!i.multiple,s,!1):t!==!!i.multiple&&(i.defaultValue!=null?Jr(n,!!i.multiple,i.defaultValue,!0):Jr(n,!!i.multiple,i.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(oe(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,Nm(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(Rf=Nt(),th(e.child,!0)),oh(e);return;case 19:oh(e);return;case 17:return;case 23:case 24:th(e,e.memoizedState!==null);return}throw Error(oe(163))}function oh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new pv),e.forEach(function(i){var r=Cv.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function _v(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var vv=Math.ceil,cl=gr.ReactCurrentDispatcher,Af=gr.ReactCurrentOwner,Fe=0,Vt=null,Mt=null,Ft=0,hr=0,vc=zi(0),Lt=0,Cl=null,Es=0,Vo=0,Ts=0,Cf=0,xc=null,Rf=0,yc=1/0;function ws(){yc=Nt()+500}var he=null,fl=!1,Sc=null,On=null,Ni=!1,mo=null,no=90,Mc=[],Ec=[],si=null,go=0,Tc=null,Oa=-1,ei=0,Ba=0,_o=null,za=!1;function rn(){return(Fe&48)!==0?Nt():Oa!==-1?Oa:Oa=Nt()}function Ai(t){if(t=t.mode,(t&2)===0)return 1;if((t&4)===0)return hs()===99?1:2;if(ei===0&&(ei=Es),sv.transition!==0){Ba!==0&&(Ba=xc!==null?xc.pendingLanes:0),t=ei;var e=4186112&~Ba;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=hs(),(Fe&4)!==0&&t===98?t=Ya(12,ei):(t=l_(t),t=Ya(t,ei)),t}function Ci(t,e,n){if(50<go)throw go=0,Tc=null,Error(oe(185));if(t=Rl(t,e),t===null)return null;yl(t,e,n),t===Vt&&(Ts|=e,Lt===4&&ss(t,Ft));var i=hs();e===1?(Fe&8)!==0&&(Fe&48)===0?wc(t):(_n(t,n),Fe===0&&(ws(),Hn())):((Fe&4)===0||i!==98&&i!==99||(si===null?si=new Set([t]):si.add(t)),_n(t,n)),xc=t}function Rl(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function _n(t,e){for(var n=t.callbackNode,i=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-Ui(o),l=1<<a,u=s[a];if(u===-1){if((l&i)===0||(l&r)!==0){u=e,kr(l);var d=tt;s[a]=10<=d?u+250:6<=d?u+5e3:-1}}else u<=e&&(t.expiredLanes|=l);o&=~l}if(i=Co(t,t===Vt?Ft:0),e=tt,i===0)n!==null&&(n!==Jl&&oc(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==Jl&&oc(n)}e===15?(n=wc.bind(null,t),Jn===null?(Jn=[n],Fa=pf(wl,cg)):Jn.push(n),n=Jl):e===14?n=Po(99,wc.bind(null,t)):(n=u_(e),n=Po(n,Ug.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function Ug(t){if(Oa=-1,Ba=ei=0,(Fe&48)!==0)throw Error(oe(327));var e=t.callbackNode;if(ki()&&t.callbackNode!==e)return null;var n=Co(t,t===Vt?Ft:0);if(n===0)return null;var i=n,r=Fe;Fe|=16;var s=Og();(Vt!==t||Ft!==i)&&(ws(),os(t,i));do try{Sv();break}catch(a){Fg(t,a)}while(1);if(mf(),cl.current=s,Fe=r,Mt!==null?i=0:(Vt=null,Ft=0,i=Lt),(Es&Ts)!==0)os(t,0);else if(i!==0){if(i===2&&(Fe|=64,t.hydrate&&(t.hydrate=!1,df(t.containerInfo)),n=Gm(t),n!==0&&(i=io(t,n))),i===1)throw e=Cl,os(t,0),ss(t,n),_n(t,Nt()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,i){case 0:case 1:throw Error(oe(345));case 2:Yi(t);break;case 3:if(ss(t,n),(n&62914560)===n&&(i=Rf+500-Nt(),10<i)){if(Co(t,0)!==0)break;if(r=t.suspendedLanes,(r&n)!==n){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Cd(Yi.bind(null,t),i);break}Yi(t);break;case 4:if(ss(t,n),(n&4186112)===n)break;for(i=t.eventTimes,r=-1;0<n;){var o=31-Ui(n);s=1<<o,o=i[o],o>r&&(r=o),n&=~s}if(n=r,n=Nt()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*vv(n/1960))-n,10<n){t.timeoutHandle=Cd(Yi.bind(null,t),n);break}Yi(t);break;case 5:Yi(t);break;default:throw Error(oe(329))}}return _n(t,Nt()),t.callbackNode===e?Ug.bind(null,t):null}function ss(t,e){for(e&=~Cf,e&=~Ts,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ui(e),i=1<<n;t[n]=-1,e&=~i}}function wc(t){if((Fe&48)!==0)throw Error(oe(327));if(ki(),t===Vt&&(t.expiredLanes&Ft)!==0){var e=Ft,n=io(t,e);(Es&Ts)!==0&&(e=Co(t,e),n=io(t,e))}else e=Co(t,0),n=io(t,e);if(t.tag!==0&&n===2&&(Fe|=64,t.hydrate&&(t.hydrate=!1,df(t.containerInfo)),e=Gm(t),e!==0&&(n=io(t,e))),n===1)throw n=Cl,os(t,0),ss(t,e),_n(t,Nt()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yi(t),_n(t,Nt()),null}function xv(){if(si!==null){var t=si;si=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,_n(e,Nt())})}Hn()}function Ig(t,e){var n=Fe;Fe|=1;try{return t(e)}finally{Fe=n,Fe===0&&(ws(),Hn())}}function Ng(t,e){var n=Fe;Fe&=-2,Fe|=8;try{return t(e)}finally{Fe=n,Fe===0&&(ws(),Hn())}}function ia(t,e){dt(vc,hr),hr|=e,Es|=e}function bf(){hr=vc.current,rt(vc)}function os(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,J_(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(i.tag){case 1:i=i.type.childContextTypes,i!=null&&Qa();break;case 3:ps(),rt(qt),rt(Ot),xf();break;case 5:vf(i);break;case 4:ps();break;case 13:rt(ft);break;case 19:rt(ft);break;case 10:gf(i);break;case 23:case 24:bf()}n=n.return}Vt=t,Mt=Fi(t.current,null),Ft=hr=Es=e,Lt=0,Cl=null,Cf=Ts=Vo=0}function Fg(t,e){do{var n=Mt;try{if(mf(),ho.current=ul,sl){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}sl=!1}if(No=0,bt=It=gt=null,po=!1,Af.current=null,n===null||n.return===null){Lt=1,Cl=e,Mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ft,a.flags|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l;if((a.mode&2)===0){var d=a.alternate;d?(a.updateQueue=d.updateQueue,a.memoizedState=d.memoizedState,a.lanes=d.lanes):(a.updateQueue=null,a.memoizedState=null)}var p=(ft.current&1)!==0,h=o;do{var m;if(m=h.tag===13){var v=h.memoizedState;if(v!==null)m=v.dehydrated!==null;else{var x=h.memoizedProps;m=x.fallback===void 0?!1:x.unstable_avoidThisFallback!==!0?!0:!p}}if(m){var f=h.updateQueue;if(f===null){var c=new Set;c.add(u),h.updateQueue=c}else f.add(u);if((h.mode&2)===0){if(h.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var g=Ti(-1,1);g.tag=2,wi(a,g)}a.lanes|=1;break e}l=void 0,a=e;var _=s.pingCache;if(_===null?(_=s.pingCache=new hv,l=new Set,_.set(u,l)):(l=_.get(u),l===void 0&&(l=new Set,_.set(u,l))),!l.has(a)){l.add(a);var y=Av.bind(null,s,u,a);u.then(y,y)}h.flags|=4096,h.lanes=e;break e}h=h.return}while(h!==null);l=Error((Qr(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Lt!==5&&(Lt=2),l=wf(l,a),h=o;do{switch(h.tag){case 3:s=l,h.flags|=4096,e&=-e,h.lanes|=e;var T=Lg(h,s,e);Id(h,T);break e;case 1:s=l;var w=h.type,C=h.stateNode;if((h.flags&64)===0&&(typeof w.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(On===null||!On.has(C)))){h.flags|=4096,e&=-e,h.lanes|=e;var I=Pg(h,s,e);Id(h,I);break e}}h=h.return}while(h!==null)}zg(n)}catch(S){e=S,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(1)}function Og(){var t=cl.current;return cl.current=ul,t===null?ul:t}function io(t,e){var n=Fe;Fe|=16;var i=Og();Vt===t&&Ft===e||os(t,e);do try{yv();break}catch(r){Fg(t,r)}while(1);if(mf(),Fe=n,cl.current=i,Mt!==null)throw Error(oe(261));return Vt=null,Ft=0,Lt}function yv(){for(;Mt!==null;)Bg(Mt)}function Sv(){for(;Mt!==null&&!nv();)Bg(Mt)}function Bg(t){var e=Hg(t.alternate,t,hr);t.memoizedProps=t.pendingProps,e===null?zg(t):Mt=e,Af.current=null}function zg(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)===0){if(n=fv(n,e,hr),n!==null){Mt=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(hr&1073741824)!==0||(n.mode&4)===0){for(var i=0,r=n.child;r!==null;)i|=r.lanes|r.childLanes,r=r.sibling;n.childLanes=i}t!==null&&(t.flags&2048)===0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=dv(e),n!==null){n.flags&=2047,Mt=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);Lt===0&&(Lt=5)}function Yi(t){var e=hs();return dr(99,Mv.bind(null,t,e)),null}function Mv(t,e){do ki();while(mo!==null);if((Fe&48)!==0)throw Error(oe(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null;var i=n.lanes|n.childLanes,r=i,s=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var l=31-Ui(s),u=1<<l;r[l]=0,o[l]=-1,a[l]=-1,s&=~u}if(si!==null&&(i&24)===0&&si.has(t)&&si.delete(t),t===Vt&&(Mt=Vt=null,Ft=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,i=n.firstEffect):i=n:i=n.firstEffect,i!==null){if(r=Fe,Fe|=32,Af.current=null,Kl=Da,o=yd(),tc(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(u=a.getSelection&&a.getSelection())&&u.rangeCount!==0){a=u.anchorNode,s=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var d=0,p=-1,h=-1,m=0,v=0,x=o,f=null;t:for(;;){for(var c;x!==a||s!==0&&x.nodeType!==3||(p=d+s),x!==l||u!==0&&x.nodeType!==3||(h=d+u),x.nodeType===3&&(d+=x.nodeValue.length),(c=x.firstChild)!==null;)f=x,x=c;for(;;){if(x===o)break t;if(f===a&&++m===s&&(p=d),f===l&&++v===u&&(h=d),(c=x.nextSibling)!==null)break;x=f,f=x.parentNode}x=c}a=p===-1||h===-1?null:{start:p,end:h}}else a=null;a=a||{start:0,end:0}}else a=null;Zl={focusedElem:o,selectionRange:a},Da=!1,_o=null,za=!1,he=i;do try{Ev()}catch(S){if(he===null)throw Error(oe(330));Ri(he,S),he=he.nextEffect}while(he!==null);_o=null,he=i;do try{for(o=t;he!==null;){var g=he.flags;if(g&16&&Eo(he.stateNode,""),g&128){var _=he.alternate;if(_!==null){var y=_.ref;y!==null&&(typeof y=="function"?y(null):y.current=null)}}switch(g&1038){case 2:sh(he),he.flags&=-3;break;case 6:sh(he),he.flags&=-3,ru(he.alternate,he);break;case 1024:he.flags&=-1025;break;case 1028:he.flags&=-1025,ru(he.alternate,he);break;case 4:ru(he.alternate,he);break;case 8:a=he,Dg(o,a);var T=a.alternate;ih(a),T!==null&&ih(T)}he=he.nextEffect}}catch(S){if(he===null)throw Error(oe(330));Ri(he,S),he=he.nextEffect}while(he!==null);if(y=Zl,_=yd(),g=y.focusedElem,o=y.selectionRange,_!==g&&g&&g.ownerDocument&&Km(g.ownerDocument.documentElement,g)){for(o!==null&&tc(g)&&(_=o.start,y=o.end,y===void 0&&(y=_),"selectionStart"in g?(g.selectionStart=_,g.selectionEnd=Math.min(y,g.value.length)):(y=(_=g.ownerDocument||document)&&_.defaultView||window,y.getSelection&&(y=y.getSelection(),a=g.textContent.length,T=Math.min(o.start,a),o=o.end===void 0?T:Math.min(o.end,a),!y.extend&&T>o&&(a=o,o=T,T=a),a=xd(g,T),s=xd(g,o),a&&s&&(y.rangeCount!==1||y.anchorNode!==a.node||y.anchorOffset!==a.offset||y.focusNode!==s.node||y.focusOffset!==s.offset)&&(_=_.createRange(),_.setStart(a.node,a.offset),y.removeAllRanges(),T>o?(y.addRange(_),y.extend(s.node,s.offset)):(_.setEnd(s.node,s.offset),y.addRange(_)))))),_=[],y=g;y=y.parentNode;)y.nodeType===1&&_.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<_.length;g++)y=_[g],y.element.scrollLeft=y.left,y.element.scrollTop=y.top}Da=!!Kl,Zl=Kl=null,t.current=n,he=i;do try{for(g=t;he!==null;){var w=he.flags;if(w&36&&gv(g,he.alternate,he),w&128){_=void 0;var C=he.ref;if(C!==null){var I=he.stateNode;switch(he.tag){case 5:_=I;break;default:_=I}typeof C=="function"?C(_):C.current=_}}he=he.nextEffect}}catch(S){if(he===null)throw Error(oe(330));Ri(he,S),he=he.nextEffect}while(he!==null);he=null,rv(),Fe=r}else t.current=n;if(Ni)Ni=!1,mo=t,no=e;else for(he=i;he!==null;)e=he.nextEffect,he.nextEffect=null,he.flags&8&&(w=he,w.sibling=null,w.stateNode=null),he=e;if(i=t.pendingLanes,i===0&&(On=null),i===1?t===Tc?go++:(go=0,Tc=t):go=0,n=n.stateNode,rr&&typeof rr.onCommitFiberRoot=="function")try{rr.onCommitFiberRoot(hf,n,void 0,(n.current.flags&64)===64)}catch{}if(_n(t,Nt()),fl)throw fl=!1,t=Sc,Sc=null,t;return(Fe&8)!==0||Hn(),null}function Ev(){for(;he!==null;){var t=he.alternate;za||_o===null||((he.flags&8)!==0?sd(he,_o)&&(za=!0):he.tag===13&&_v(t,he)&&sd(he,_o)&&(za=!0));var e=he.flags;(e&256)!==0&&mv(t,he),(e&512)===0||Ni||(Ni=!0,Po(97,function(){return ki(),null})),he=he.nextEffect}}function ki(){if(no!==90){var t=97<no?97:no;return no=90,dr(t,wv)}return!1}function Tv(t,e){Mc.push(e,t),Ni||(Ni=!0,Po(97,function(){return ki(),null}))}function kg(t,e){Ec.push(e,t),Ni||(Ni=!0,Po(97,function(){return ki(),null}))}function wv(){if(mo===null)return!1;var t=mo;if(mo=null,(Fe&48)!==0)throw Error(oe(331));var e=Fe;Fe|=32;var n=Ec;Ec=[];for(var i=0;i<n.length;i+=2){var r=n[i],s=n[i+1],o=r.destroy;if(r.destroy=void 0,typeof o=="function")try{o()}catch(l){if(s===null)throw Error(oe(330));Ri(s,l)}}for(n=Mc,Mc=[],i=0;i<n.length;i+=2){r=n[i],s=n[i+1];try{var a=r.create;r.destroy=a()}catch(l){if(s===null)throw Error(oe(330));Ri(s,l)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return Fe=e,Hn(),!0}function ah(t,e,n){e=wf(n,e),e=Lg(t,e,1),wi(t,e),e=rn(),t=Rl(t,1),t!==null&&(yl(t,1,e),_n(t,e))}function Ri(t,e){if(t.tag===3)ah(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){ah(n,t,e);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(On===null||!On.has(i))){t=wf(e,t);var r=Pg(n,t,1);if(wi(n,r),r=rn(),n=Rl(n,1),n!==null)yl(n,1,r),_n(n,r);else if(typeof i.componentDidCatch=="function"&&(On===null||!On.has(i)))try{i.componentDidCatch(e,t)}catch{}break}}n=n.return}}function Av(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(Ft&n)===n&&(Lt===4||Lt===3&&(Ft&62914560)===Ft&&500>Nt()-Rf?os(t,0):Cf|=n),_n(t,e)}function Cv(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)===0?e=1:(e&4)===0?e=hs()===99?1:2:(ei===0&&(ei=Es),e=Hr(62914560&~ei),e===0&&(e=4194304))),n=rn(),t=Rl(t,e),t!==null&&(yl(t,e,n),_n(t,n))}var Hg;Hg=function(t,e,n){var i=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||qt.current)Rn=!0;else if((n&i)!==0)Rn=(t.flags&16384)!==0;else{switch(Rn=!1,e.tag){case 3:qd(e),tu();break;case 5:Bd(e);break;case 1:Yt(e.type)&&Na(e);break;case 4:uc(e,e.stateNode.containerInfo);break;case 10:i=e.memoizedProps.value;var r=e.type._context;dt(Ja,r._currentValue),r._currentValue=i;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!==0?Yd(t,e,n):(dt(ft,ft.current&1),e=ni(t,e,n),e!==null?e.sibling:null);dt(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&64)!==0){if(i)return Jd(t,e,n);e.flags|=64}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(ft,ft.current),i)break;return null;case 23:case 24:return e.lanes=0,nu(t,e,n)}return ni(t,e,n)}else Rn=!1;switch(e.lanes=0,e.tag){case 2:if(i=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,r=ds(e,Ot.current),is(e,n),r=Sf(null,e,i,t,r,n),e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,Yt(i)){var s=!0;Na(e)}else s=!1;e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,_f(e);var o=i.getDerivedStateFromProps;typeof o=="function"&&nl(e,i,o,t),r.updater=Al,e.stateNode=r,r._reactInternals=e,lc(e,i,t,n),e=hc(null,e,i,!0,s,n)}else e.tag=0,jt(null,e,r,n),e=e.child;return e;case 16:r=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=bv(r),t=Tn(r,t),s){case 0:e=dc(null,e,r,t,n);break e;case 1:e=jd(null,e,r,t,n);break e;case 11:e=Wd(null,e,r,t,n);break e;case 14:e=Xd(null,e,r,Tn(r.type,t),i,n);break e}throw Error(oe(306,r,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Tn(i,r),dc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Tn(i,r),jd(t,e,i,r,n);case 3:if(qd(e),i=e.updateQueue,t===null||i===null)throw Error(oe(282));if(i=e.pendingProps,r=e.memoizedState,r=r!==null?r.element:null,dg(t,e),Do(e,i,null,n),i=e.memoizedState.element,i===r)tu(),e=ni(t,e,n);else{if(r=e.stateNode,(s=r.hydrate)&&(vi=ns(e.stateNode.containerInfo.firstChild),ti=e,s=zn=!0),s){if(t=r.mutableSourceEagerHydrationData,t!=null)for(r=0;r<t.length;r+=2)s=t[r],s._workInProgressVersionPrimary=t[r+1],rs.push(s);for(n=gg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else jt(t,e,i,n),tu();e=e.child}return e;case 5:return Bd(e),t===null&&cc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,rc(i,r)?o=null:s!==null&&rc(i,s)&&(e.flags|=16),Ag(t,e),jt(t,e,o,n),e.child;case 6:return t===null&&cc(e),null;case 13:return Yd(t,e,n);case 4:return uc(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=il(e,null,i,n):jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Tn(i,r),Wd(t,e,i,r,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value;var a=e.type._context;if(dt(Ja,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=hn(a,s)?0:(typeof i._calculateChangedBits=="function"?i._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===r.children&&!qt.current){e=ni(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var u=l.firstContext;u!==null;){if(u.context===i&&(u.observedBits&s)!==0){a.tag===1&&(u=Ti(-1,n&-n),u.tag=2,wi(a,u)),a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),fg(a.return,n),l.lanes|=n;break}u=u.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,s=e.pendingProps,i=s.children,is(e,n),r=gn(r,s.unstable_observedBits),i=i(r),e.flags|=1,jt(t,e,i,n),e.child;case 14:return r=e.type,s=Tn(r,e.pendingProps),s=Tn(r.type,s),Xd(t,e,r,s,i,n);case 15:return wg(t,e,e.type,e.pendingProps,i,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Tn(i,r),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,Yt(i)?(t=!0,Na(e)):t=!1,is(e,n),pg(e,i,r),lc(e,i,r,n),hc(null,e,i,!0,t,n);case 19:return Jd(t,e,n);case 23:return nu(t,e,n);case 24:return nu(t,e,n)}throw Error(oe(156,e.tag))};function Rv(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(t,e,n,i){return new Rv(t,e,n,i)}function Lf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bv(t){if(typeof t=="function")return Lf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_l)return 11;if(t===vl)return 14}return 2}function Fi(t,e){var n=t.alternate;return n===null?(n=pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ka(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Lf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case mi:return as(n.children,r,s,e);case _m:o=8,r|=16;break;case Xc:o=8,r|=1;break;case so:return t=pn(12,n,e,r|8),t.elementType=so,t.type=so,t.lanes=s,t;case oo:return t=pn(13,n,e,r),t.type=oo,t.elementType=oo,t.lanes=s,t;case Wa:return t=pn(19,n,e,r),t.elementType=Wa,t.lanes=s,t;case Zc:return Pf(n,r,s,e);case ku:return t=pn(24,n,e,r),t.elementType=ku,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jc:o=10;break e;case qc:o=9;break e;case _l:o=11;break e;case vl:o=14;break e;case Yc:o=16,i=null;break e;case $c:o=22;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=pn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function as(t,e,n,i){return t=pn(7,t,i,e),t.lanes=n,t}function Pf(t,e,n,i){return t=pn(23,t,i,e),t.elementType=Zc,t.lanes=n,t}function su(t,e,n){return t=pn(6,t,null,e),t.lanes=n,t}function ou(t,e,n){return e=pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Lv(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Vl(0),this.expirationTimes=Vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.mutableSourceEagerHydrationData=null}function Pv(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qi,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function dl(t,e,n,i){var r=e.current,s=rn(),o=Ai(r);e:if(n){n=n._reactInternals;t:{if(_r(n)!==n||n.tag!==1)throw Error(oe(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(Yt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(oe(171))}if(n.tag===1){var l=n.type;if(Yt(l)){n=rg(n,l,a);break e}}n=a}else n=Ii;return e.context===null?e.context=n:e.pendingContext=n,e=Ti(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),wi(r,e),Ci(r,o,s),o}function au(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Df(t,e){lh(t,e),(t=t.alternate)&&lh(t,e)}function Dv(){return null}function Uf(t,e,n){var i=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new Lv(t,e,n!=null&&n.hydrate===!0),e=pn(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,_f(e),t[Ms]=n.current,Jm(t.nodeType===8?t.parentNode:t),i)for(t=0;t<i.length;t++){e=i[t];var r=e._getVersion;r=r(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,r]:n.mutableSourceEagerHydrationData.push(e,r)}this._internalRoot=n}Uf.prototype.render=function(t){dl(t,this._internalRoot,null,null)};Uf.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;dl(null,t,null,function(){e[Ms]=null})};function Wo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Uv(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new Uf(t,0,e?{hydrate:!0}:void 0)}function bl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof r=="function"){var a=r;r=function(){var u=au(o);a.call(u)}}dl(e,o,t,r)}else{if(s=n._reactRootContainer=Uv(n,i),o=s._internalRoot,typeof r=="function"){var l=r;r=function(){var u=au(o);l.call(u)}}Ng(function(){dl(e,o,t,r)})}return au(o)}Dm=function(t){if(t.tag===13){var e=rn();Ci(t,4,e),Df(t,4)}};nf=function(t){if(t.tag===13){var e=rn();Ci(t,67108864,e),Df(t,67108864)}};Um=function(t){if(t.tag===13){var e=rn(),n=Ai(t);Ci(t,n,e),Df(t,n)}};Im=function(t,e){return e()};Ku=function(t,e,n){switch(e){case"input":if(Gu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Tl(i);if(!r)throw Error(oe(90));xm(i),Gu(i,r)}}}break;case"textarea":Sm(t,n);break;case"select":e=n.value,e!=null&&Jr(t,!!n.multiple,e,!1)}};Jc=Ig;Rm=function(t,e,n,i,r){var s=Fe;Fe|=4;try{return dr(98,t.bind(null,e,n,i,r))}finally{Fe=s,Fe===0&&(ws(),Hn())}};ef=function(){(Fe&49)===0&&(xv(),ki())};bm=function(t,e){var n=Fe;Fe|=2;try{return t(e)}finally{Fe=n,Fe===0&&(ws(),Hn())}};function Gg(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wo(e))throw Error(oe(200));return Pv(t,e,null,n)}var Iv={Events:[Ho,qr,Tl,Am,Cm,ki,{current:!1}]},Ws={findFiberByHostInstance:er,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},Nv={bundleType:Ws.bundleType,version:Ws.version,rendererPackageName:Ws.rendererPackageName,rendererConfig:Ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Pm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ws.findFiberByHostInstance||Dv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ra.isDisabled&&ra.supportsFiber)try{hf=ra.inject(Nv),rr=ra}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iv;vn.createPortal=Gg;vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):Error(oe(268,Object.keys(t)));return t=Pm(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t,e){var n=Fe;if((n&48)!==0)return t(e);Fe|=1;try{if(t)return dr(99,t.bind(null,e))}finally{Fe=n,Hn()}};vn.hydrate=function(t,e,n){if(!Wo(e))throw Error(oe(200));return bl(null,t,e,!0,n)};vn.render=function(t,e,n){if(!Wo(e))throw Error(oe(200));return bl(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!Wo(t))throw Error(oe(40));return t._reactRootContainer?(Ng(function(){bl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ms]=null})}),!0):!1};vn.unstable_batchedUpdates=Ig;vn.unstable_createPortal=function(t,e){return Gg(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Wo(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return bl(t,e,n,!1,i)};vn.version="17.0.2";function Vg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vg)}catch(t){console.error(t)}}Vg(),hm.exports=vn;var Fv=hm.exports;/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Bv=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),uh=t=>{const e=Bv(t);return e.charAt(0).toUpperCase()+e.slice(1)},Wg=(...t)=>t.filter((e,n,i)=>Boolean(e)&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim(),zv=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=Ne.exports.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>Ne.exports.createElement("svg",{ref:l,...kv,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Wg("lucide",r),...!s&&!zv(a)&&{"aria-hidden":"true"},...a},[...o.map(([u,d])=>Ne.exports.createElement(u,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=(t,e)=>{const n=Ne.exports.forwardRef(({className:i,...r},s)=>Ne.exports.createElement(Hv,{ref:s,iconNode:e,className:Wg(`lucide-${Ov(uh(t))}`,`lucide-${t}`,i),...r}));return n.displayName=uh(t),n};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Vv=xr("github",Gv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],Xv=xr("pause",Wv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],qv=xr("play",jv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],ch=xr("rotate-ccw",Yv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]],Kv=xr("sliders-horizontal",$v);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Qv=xr("volume-2",Zv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],ex=xr("volume-x",Jv);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const If="156",tx=0,fh=1,nx=2,Xg=1,ix=2,Qn=3,Oi=0,$t=1,In=2,bi=0,ls=1,us=2,dh=3,hh=4,rx=5,Gr=100,sx=101,ox=102,ph=103,mh=104,ax=200,lx=201,ux=202,cx=203,jg=204,qg=205,fx=206,dx=207,hx=208,px=209,mx=210,gx=0,_x=1,vx=2,Ac=3,xx=4,yx=5,Sx=6,Mx=7,Yg=0,Ex=1,Tx=2,Li=0,wx=1,Ax=2,Cx=3,$g=4,Rx=5,Kg=300,ms=301,gs=302,Cc=303,Rc=304,Ll=306,bc=1e3,An=1001,Lc=1002,Ht=1003,gh=1004,lu=1005,dn=1006,bx=1007,Fo=1008,Pi=1009,Lx=1010,Px=1011,Nf=1012,Zg=1013,xi=1014,yi=1015,Oo=1016,Qg=1017,Jg=1018,sr=1020,Dx=1021,Cn=1023,Ux=1024,Ix=1025,or=1026,_s=1027,Nx=1028,e0=1029,Fx=1030,t0=1031,n0=1033,uu=33776,cu=33777,fu=33778,du=33779,_h=35840,vh=35841,xh=35842,yh=35843,Ox=36196,Sh=37492,Mh=37496,Eh=37808,Th=37809,wh=37810,Ah=37811,Ch=37812,Rh=37813,bh=37814,Lh=37815,Ph=37816,Dh=37817,Uh=37818,Ih=37819,Nh=37820,Fh=37821,hu=36492,Oh=36494,Bh=36495,Bx=36283,zh=36284,kh=36285,Hh=36286,i0=3e3,ar=3001,zx=3200,kx=3201,r0=0,Hx=1,lr="",it="srgb",kn="srgb-linear",Pl="display-p3",pu=7680,Gx=519,Vx=512,Wx=513,Xx=514,jx=515,qx=516,Yx=517,$x=518,Kx=519,Gh=35044,Vh=35048,Wh="300 es",Pc=1035,ii=2e3,hl=2001;class As{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xh=1234567;const vo=Math.PI/180,Bo=180/Math.PI;function Cs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[t&255]+Dt[t>>8&255]+Dt[t>>16&255]+Dt[t>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[n&63|128]+Dt[n>>8&255]+"-"+Dt[n>>16&255]+Dt[n>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function Gt(t,e,n){return Math.max(e,Math.min(n,t))}function Ff(t,e){return(t%e+e)%e}function Zx(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Qx(t,e,n){return t!==e?(n-t)/(e-t):0}function xo(t,e,n){return(1-n)*t+n*e}function Jx(t,e,n,i){return xo(t,e,1-Math.exp(-n*i))}function e1(t,e=1){return e-Math.abs(Ff(t,e*2)-e)}function t1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function n1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function i1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function r1(t,e){return t+Math.random()*(e-t)}function s1(t){return t*(.5-Math.random())}function o1(t){t!==void 0&&(Xh=t);let e=Xh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function a1(t){return t*vo}function l1(t){return t*Bo}function Dc(t){return(t&t-1)===0&&t!==0}function u1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function pl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function c1(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),d=o((e+i)/2),p=s((e-i)/2),h=o((e-i)/2),m=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*d,l*p,l*h,a*u);break;case"YZY":t.set(l*h,a*d,l*p,a*u);break;case"ZXZ":t.set(l*p,l*h,a*d,a*u);break;case"XZX":t.set(a*d,l*v,l*m,a*u);break;case"YXY":t.set(l*m,a*d,l*v,a*u);break;case"ZYZ":t.set(l*v,l*m,a*d,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const ui={DEG2RAD:vo,RAD2DEG:Bo,generateUUID:Cs,clamp:Gt,euclideanModulo:Ff,mapLinear:Zx,inverseLerp:Qx,lerp:xo,damp:Jx,pingpong:e1,smoothstep:t1,smootherstep:n1,randInt:i1,randFloat:r1,randFloatSpread:s1,seededRandom:o1,degToRad:a1,radToDeg:l1,isPowerOfTwo:Dc,ceilPowerOfTwo:u1,floorPowerOfTwo:pl,setQuaternionFromProperEuler:c1,normalize:zt,denormalize:Vr};class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,o,a,l,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],d=i[4],p=i[7],h=i[2],m=i[5],v=i[8],x=r[0],f=r[3],c=r[6],g=r[1],_=r[4],y=r[7],T=r[2],w=r[5],C=r[8];return s[0]=o*x+a*g+l*T,s[3]=o*f+a*_+l*w,s[6]=o*c+a*y+l*C,s[1]=u*x+d*g+p*T,s[4]=u*f+d*_+p*w,s[7]=u*c+d*y+p*C,s[2]=h*x+m*g+v*T,s[5]=h*f+m*_+v*w,s[8]=h*c+m*y+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8];return n*o*d-n*a*u-i*s*d+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],p=d*o-a*u,h=a*l-d*s,m=u*s-o*l,v=n*p+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=p*x,e[1]=(r*u-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(mu.makeScale(e,n)),this}rotate(e){return this.premultiply(mu.makeRotation(-e)),this}translate(e,n){return this.premultiply(mu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mu=new We;function s0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ml(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function f1(){const t=ml("canvas");return t.style.display="block",t}const jh={};function yo(t){t in jh||(jh[t]=!0,console.warn(t))}function cs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function gu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const d1=new We().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),h1=new We().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function p1(t){return t.convertSRGBToLinear().applyMatrix3(h1)}function m1(t){return t.applyMatrix3(d1).convertLinearToSRGB()}const g1={[kn]:t=>t,[it]:t=>t.convertSRGBToLinear(),[Pl]:p1},_1={[kn]:t=>t,[it]:t=>t.convertLinearToSRGB(),[Pl]:m1},yn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return kn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=g1[e],r=_1[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Er;class o0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Er===void 0&&(Er=ml("canvas")),Er.width=e.width,Er.height=e.height;const i=Er.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Er}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const n=ml("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=cs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(cs(n[i]/255)*255):n[i]=cs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let v1=0;class a0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=Cs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_u(r[o].image)):s.push(_u(r[o]))}else s=_u(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function _u(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?o0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let x1=0;class Kt extends As{constructor(e=Kt.DEFAULT_IMAGE,n=Kt.DEFAULT_MAPPING,i=An,r=An,s=dn,o=Fo,a=Cn,l=Pi,u=Kt.DEFAULT_ANISOTROPY,d=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=Cs(),this.name="",this.source=new a0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===ar?it:lr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bc:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case Lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bc:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case Lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===it?ar:i0}set encoding(e){yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ar?it:lr}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Kg;Kt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,n=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],d=l[4],p=l[8],h=l[1],m=l[5],v=l[9],x=l[2],f=l[6],c=l[10];if(Math.abs(d-h)<.01&&Math.abs(p-x)<.01&&Math.abs(v-f)<.01){if(Math.abs(d+h)<.1&&Math.abs(p+x)<.1&&Math.abs(v+f)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,y=(m+1)/2,T=(c+1)/2,w=(d+h)/4,C=(p+x)/4,I=(v+f)/4;return _>y&&_>T?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=w/i,s=C/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=I/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=C/s,r=I/s),this.set(i,r,s,n),this}let g=Math.sqrt((f-v)*(f-v)+(p-x)*(p-x)+(h-d)*(h-d));return Math.abs(g)<.001&&(g=1),this.x=(f-v)/g,this.y=(p-x)/g,this.z=(h-d)/g,this.w=Math.acos((u+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class y1 extends As{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new st(0,0,e,n),this.scissorTest=!1,this.viewport=new st(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(yo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ar?it:lr),this.texture=new Kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:dn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new a0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pr extends y1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class l0 extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class S1 extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ri{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],d=i[r+2],p=i[r+3];const h=s[o+0],m=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=d,e[n+3]=p;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=v,e[n+3]=x;return}if(p!==x||l!==h||u!==m||d!==v){let f=1-a;const c=l*h+u*m+d*v+p*x,g=c>=0?1:-1,_=1-c*c;if(_>Number.EPSILON){const T=Math.sqrt(_),w=Math.atan2(T,c*g);f=Math.sin(f*w)/T,a=Math.sin(a*w)/T}const y=a*g;if(l=l*f+h*y,u=u*f+m*y,d=d*f+v*y,p=p*f+x*y,f===1-a){const T=1/Math.sqrt(l*l+u*u+d*d+p*p);l*=T,u*=T,d*=T,p*=T}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],d=i[r+3],p=s[o],h=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+d*p+l*m-u*h,e[n+1]=l*v+d*h+u*p-a*m,e[n+2]=u*v+d*m+a*h-l*p,e[n+3]=d*v-a*p-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),d=a(r/2),p=a(s/2),h=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*d*p+u*m*v,this._y=u*m*p-h*d*v,this._z=u*d*v+h*m*p,this._w=u*d*p-h*m*v;break;case"YXZ":this._x=h*d*p+u*m*v,this._y=u*m*p-h*d*v,this._z=u*d*v-h*m*p,this._w=u*d*p+h*m*v;break;case"ZXY":this._x=h*d*p-u*m*v,this._y=u*m*p+h*d*v,this._z=u*d*v+h*m*p,this._w=u*d*p-h*m*v;break;case"ZYX":this._x=h*d*p-u*m*v,this._y=u*m*p+h*d*v,this._z=u*d*v-h*m*p,this._w=u*d*p+h*m*v;break;case"YZX":this._x=h*d*p+u*m*v,this._y=u*m*p+h*d*v,this._z=u*d*v-h*m*p,this._w=u*d*p-h*m*v;break;case"XZY":this._x=h*d*p-u*m*v,this._y=u*m*p-h*d*v,this._z=u*d*v+h*m*p,this._w=u*d*p+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],d=n[6],p=n[10],h=i+a+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>p){const m=2*Math.sqrt(1+i-a-p);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>p){const m=2*Math.sqrt(1+a-i-p);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+p-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+o*a+r*u-s*l,this._y=r*d+o*l+s*a-i*u,this._z=s*d+o*u+i*l-r*a,this._w=o*d-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),p=Math.sin((1-n)*d)/u,h=Math.sin(n*d)/u;return this._w=o*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,d=l*i+a*n-s*r,p=l*r+s*i-o*n,h=-s*n-o*i-a*r;return this.x=u*l+h*-s+d*-a-p*-o,this.y=d*l+h*-o+p*-s-u*-a,this.z=p*l+h*-a+u*-o-d*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vu.copy(this).projectOnVector(e),this.sub(vu)}reflect(e){return this.sub(vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vu=new D,qh=new ri;class yr{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Tr.copy(e.boundingBox),Tr.applyMatrix4(e.matrixWorld),this.union(Tr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)qn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(qn)}else r.boundingBox===null&&r.computeBoundingBox(),Tr.copy(r.boundingBox),Tr.applyMatrix4(e.matrixWorld),this.union(Tr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),sa.subVectors(this.max,Xs),wr.subVectors(e.a,Xs),Ar.subVectors(e.b,Xs),Cr.subVectors(e.c,Xs),ci.subVectors(Ar,wr),fi.subVectors(Cr,Ar),Wi.subVectors(wr,Cr);let n=[0,-ci.z,ci.y,0,-fi.z,fi.y,0,-Wi.z,Wi.y,ci.z,0,-ci.x,fi.z,0,-fi.x,Wi.z,0,-Wi.x,-ci.y,ci.x,0,-fi.y,fi.x,0,-Wi.y,Wi.x,0];return!xu(n,wr,Ar,Cr,sa)||(n=[1,0,0,0,1,0,0,0,1],!xu(n,wr,Ar,Cr,sa))?!1:(oa.crossVectors(ci,fi),n=[oa.x,oa.y,oa.z],xu(n,wr,Ar,Cr,sa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new D,new D,new D,new D,new D,new D,new D,new D],qn=new D,Tr=new yr,wr=new D,Ar=new D,Cr=new D,ci=new D,fi=new D,Wi=new D,Xs=new D,sa=new D,oa=new D,Xi=new D;function xu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Xi.fromArray(t,s);const a=r.x*Math.abs(Xi.x)+r.y*Math.abs(Xi.y)+r.z*Math.abs(Xi.z),l=e.dot(Xi),u=n.dot(Xi),d=i.dot(Xi);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const M1=new yr,js=new D,yu=new D;class Rs{constructor(e=new D,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):M1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const n=js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(yu)),this.expandByPoint(js.copy(e.center).sub(yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new D,Su=new D,aa=new D,di=new D,Mu=new D,la=new D,Eu=new D;class u0{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Yn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,n),Yn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Su.copy(e).add(n).multiplyScalar(.5),aa.copy(n).sub(e).normalize(),di.copy(this.origin).sub(Su);const s=e.distanceTo(n)*.5,o=-this.direction.dot(aa),a=di.dot(this.direction),l=-di.dot(aa),u=di.lengthSq(),d=Math.abs(1-o*o);let p,h,m,v;if(d>0)if(p=o*l-a,h=o*a-l,v=s*d,p>=0)if(h>=-v)if(h<=v){const x=1/d;p*=x,h*=x,m=p*(p+o*h+2*a)+h*(o*p+h+2*l)+u}else h=s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+u;else h=-s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+u;else h<=-v?(p=Math.max(0,-(-o*s+a)),h=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+u):h<=v?(p=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+u):(p=Math.max(0,-(o*s+a)),h=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+u);else h=o>0?-s:s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Su).addScaledVector(aa,h),m}intersectSphere(e,n){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),r=Yn.dot(Yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,n,i,r,s){Mu.subVectors(n,e),la.subVectors(i,e),Eu.crossVectors(Mu,la);let o=this.direction.dot(Eu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);const l=a*this.direction.dot(la.crossVectors(di,la));if(l<0)return null;const u=a*this.direction.dot(Mu.cross(di));if(u<0||l+u>o)return null;const d=-a*di.dot(Eu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,n,i,r,s,o,a,l,u,d,p,h,m,v,x,f){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,d,p,h,m,v,x,f)}set(e,n,i,r,s,o,a,l,u,d,p,h,m,v,x,f){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=d,c[10]=p,c[14]=h,c[3]=m,c[7]=v,c[11]=x,c[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Rr.setFromMatrixColumn(e,0).length(),s=1/Rr.setFromMatrixColumn(e,1).length(),o=1/Rr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=o*d,m=o*p,v=a*d,x=a*p;n[0]=l*d,n[4]=-l*p,n[8]=u,n[1]=m+v*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=v+m*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,m=l*p,v=u*d,x=u*p;n[0]=h+x*a,n[4]=v*a-m,n[8]=o*u,n[1]=o*p,n[5]=o*d,n[9]=-a,n[2]=m*a-v,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,m=l*p,v=u*d,x=u*p;n[0]=h-x*a,n[4]=-o*p,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*d,n[9]=x-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,m=o*p,v=a*d,x=a*p;n[0]=l*d,n[4]=v*u-m,n[8]=h*u+x,n[1]=l*p,n[5]=x*u+h,n[9]=m*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,v=a*l,x=a*u;n[0]=l*d,n[4]=x-h*p,n[8]=v*p+m,n[1]=p,n[5]=o*d,n[9]=-a*d,n[2]=-u*d,n[6]=m*p+v,n[10]=h-x*p}else if(e.order==="XZY"){const h=o*l,m=o*u,v=a*l,x=a*u;n[0]=l*d,n[4]=-p,n[8]=u*d,n[1]=h*p+x,n[5]=o*d,n[9]=m*p-v,n[2]=v*p-m,n[6]=a*d,n[10]=x*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(E1,e,T1)}lookAt(e,n,i){const r=this.elements;return en.subVectors(e,n),en.lengthSq()===0&&(en.z=1),en.normalize(),hi.crossVectors(i,en),hi.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),hi.crossVectors(i,en)),hi.normalize(),ua.crossVectors(en,hi),r[0]=hi.x,r[4]=ua.x,r[8]=en.x,r[1]=hi.y,r[5]=ua.y,r[9]=en.y,r[2]=hi.z,r[6]=ua.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],d=i[1],p=i[5],h=i[9],m=i[13],v=i[2],x=i[6],f=i[10],c=i[14],g=i[3],_=i[7],y=i[11],T=i[15],w=r[0],C=r[4],I=r[8],S=r[12],R=r[1],Z=r[5],K=r[9],U=r[13],H=r[2],G=r[6],Y=r[10],V=r[14],W=r[3],J=r[7],$=r[11],b=r[15];return s[0]=o*w+a*R+l*H+u*W,s[4]=o*C+a*Z+l*G+u*J,s[8]=o*I+a*K+l*Y+u*$,s[12]=o*S+a*U+l*V+u*b,s[1]=d*w+p*R+h*H+m*W,s[5]=d*C+p*Z+h*G+m*J,s[9]=d*I+p*K+h*Y+m*$,s[13]=d*S+p*U+h*V+m*b,s[2]=v*w+x*R+f*H+c*W,s[6]=v*C+x*Z+f*G+c*J,s[10]=v*I+x*K+f*Y+c*$,s[14]=v*S+x*U+f*V+c*b,s[3]=g*w+_*R+y*H+T*W,s[7]=g*C+_*Z+y*G+T*J,s[11]=g*I+_*K+y*Y+T*$,s[15]=g*S+_*U+y*V+T*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],d=e[2],p=e[6],h=e[10],m=e[14],v=e[3],x=e[7],f=e[11],c=e[15];return v*(+s*l*p-r*u*p-s*a*h+i*u*h+r*a*m-i*l*m)+x*(+n*l*m-n*u*h+s*o*h-r*o*m+r*u*d-s*l*d)+f*(+n*u*p-n*a*m-s*o*p+i*o*m+s*a*d-i*u*d)+c*(-r*a*d-n*l*p+n*a*h+r*o*p-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],p=e[9],h=e[10],m=e[11],v=e[12],x=e[13],f=e[14],c=e[15],g=p*f*u-x*h*u+x*l*m-a*f*m-p*l*c+a*h*c,_=v*h*u-d*f*u-v*l*m+o*f*m+d*l*c-o*h*c,y=d*x*u-v*p*u+v*a*m-o*x*m-d*a*c+o*p*c,T=v*p*l-d*x*l-v*a*h+o*x*h+d*a*f-o*p*f,w=n*g+i*_+r*y+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=g*C,e[1]=(x*h*s-p*f*s-x*r*m+i*f*m+p*r*c-i*h*c)*C,e[2]=(a*f*s-x*l*s+x*r*u-i*f*u-a*r*c+i*l*c)*C,e[3]=(p*l*s-a*h*s-p*r*u+i*h*u+a*r*m-i*l*m)*C,e[4]=_*C,e[5]=(d*f*s-v*h*s+v*r*m-n*f*m-d*r*c+n*h*c)*C,e[6]=(v*l*s-o*f*s-v*r*u+n*f*u+o*r*c-n*l*c)*C,e[7]=(o*h*s-d*l*s+d*r*u-n*h*u-o*r*m+n*l*m)*C,e[8]=y*C,e[9]=(v*p*s-d*x*s-v*i*m+n*x*m+d*i*c-n*p*c)*C,e[10]=(o*x*s-v*a*s+v*i*u-n*x*u-o*i*c+n*a*c)*C,e[11]=(d*a*s-o*p*s-d*i*u+n*p*u+o*i*m-n*a*m)*C,e[12]=T*C,e[13]=(d*x*r-v*p*r+v*i*h-n*x*h-d*i*f+n*p*f)*C,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*f-n*a*f)*C,e[15]=(o*p*r-d*a*r+d*i*l-n*p*l-o*i*h+n*a*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,d=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,d*a+i,d*l-r*o,0,u*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,d=o+o,p=a+a,h=s*u,m=s*d,v=s*p,x=o*d,f=o*p,c=a*p,g=l*u,_=l*d,y=l*p,T=i.x,w=i.y,C=i.z;return r[0]=(1-(x+c))*T,r[1]=(m+y)*T,r[2]=(v-_)*T,r[3]=0,r[4]=(m-y)*w,r[5]=(1-(h+c))*w,r[6]=(f+g)*w,r[7]=0,r[8]=(v+_)*C,r[9]=(f-g)*C,r[10]=(1-(h+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Rr.set(r[0],r[1],r[2]).length();const o=Rr.set(r[4],r[5],r[6]).length(),a=Rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Sn.copy(this);const u=1/s,d=1/o,p=1/a;return Sn.elements[0]*=u,Sn.elements[1]*=u,Sn.elements[2]*=u,Sn.elements[4]*=d,Sn.elements[5]*=d,Sn.elements[6]*=d,Sn.elements[8]*=p,Sn.elements[9]*=p,Sn.elements[10]*=p,n.setFromRotationMatrix(Sn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ii){const l=this.elements,u=2*s/(n-e),d=2*s/(i-r),p=(n+e)/(n-e),h=(i+r)/(i-r);let m,v;if(a===ii)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===hl)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ii){const l=this.elements,u=1/(n-e),d=1/(i-r),p=1/(o-s),h=(n+e)*u,m=(i+r)*d;let v,x;if(a===ii)v=(o+s)*p,x=-2*p;else if(a===hl)v=s*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Rr=new D,Sn=new ot,E1=new D(0,0,0),T1=new D(1,1,1),hi=new D,ua=new D,en=new D,Yh=new ot,$h=new ri;class ur{constructor(e=0,n=0,i=0,r=ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],d=r[9],p=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $h.setFromEuler(this),this.setFromQuaternion($h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ur.DEFAULT_ORDER="XYZ";class c0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let w1=0;const Kh=new D,br=new ri,$n=new ot,ca=new D,qs=new D,A1=new D,C1=new ri,Zh=new D(1,0,0),Qh=new D(0,1,0),Jh=new D(0,0,1),R1={type:"added"},b1={type:"removed"};class Ct extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new D,n=new ur,i=new ri,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new We}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new c0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return br.setFromAxisAngle(e,n),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,n){return br.setFromAxisAngle(e,n),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(Zh,e)}rotateY(e){return this.rotateOnAxis(Qh,e)}rotateZ(e){return this.rotateOnAxis(Jh,e)}translateOnAxis(e,n){return Kh.copy(e).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zh,e)}translateY(e){return this.translateOnAxis(Qh,e)}translateZ(e){return this.translateOnAxis(Jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ca.copy(e):ca.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(qs,ca,this.up):$n.lookAt(ca,qs,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),br.setFromRotationMatrix($n),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(R1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(b1)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,A1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,C1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),d=o(e.images),p=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ct.DEFAULT_UP=new D(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new D,Kn=new D,Tu=new D,Zn=new D,Lr=new D,Pr=new D,ep=new D,wu=new D,Au=new D,Cu=new D;let fa=!1;class wn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Mn.subVectors(e,n),r.cross(Mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Mn.subVectors(r,n),Kn.subVectors(i,n),Tu.subVectors(e,n);const o=Mn.dot(Mn),a=Mn.dot(Kn),l=Mn.dot(Tu),u=Kn.dot(Kn),d=Kn.dot(Tu),p=o*u-a*a;if(p===0)return s.set(-2,-1,-1);const h=1/p,m=(u*l-a*d)*h,v=(o*d-a*l)*h;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Zn),Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getUV(e,n,i,r,s,o,a,l){return fa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fa=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Zn),l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l}static isFrontFacing(e,n,i,r){return Mn.subVectors(i,n),Kn.subVectors(e,n),Mn.cross(Kn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Mn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return wn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return fa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fa=!0),wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Lr.subVectors(r,i),Pr.subVectors(s,i),wu.subVectors(e,i);const l=Lr.dot(wu),u=Pr.dot(wu);if(l<=0&&u<=0)return n.copy(i);Au.subVectors(e,r);const d=Lr.dot(Au),p=Pr.dot(Au);if(d>=0&&p<=d)return n.copy(r);const h=l*p-d*u;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Lr,o);Cu.subVectors(e,s);const m=Lr.dot(Cu),v=Pr.dot(Cu);if(v>=0&&m<=v)return n.copy(s);const x=m*u-l*v;if(x<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(Pr,a);const f=d*v-m*p;if(f<=0&&p-d>=0&&m-v>=0)return ep.subVectors(s,r),a=(p-d)/(p-d+(m-v)),n.copy(r).addScaledVector(ep,a);const c=1/(f+x+h);return o=x*c,a=h*c,n.copy(i).addScaledVector(Lr,o).addScaledVector(Pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let L1=0;class bs extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L1++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=ls,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jg,this.blendDst=qg,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ac,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pu,this.stencilZFail=pu,this.stencilZPass=pu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const f0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},da={h:0,s:0,l:0};function Ru(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=it){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=yn.workingColorSpace){return this.r=e,this.g=n,this.b=i,yn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=yn.workingColorSpace){if(e=Ff(e,1),n=Gt(n,0,1),i=Gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ru(o,s,e+1/3),this.g=Ru(o,s,e),this.b=Ru(o,s,e-1/3)}return yn.toWorkingColorSpace(this,r),this}setStyle(e,n=it){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=it){const i=f0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=gu(e.r),this.g=gu(e.g),this.b=gu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=it){return yn.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Gt(Ut.r*255,0,255))*65536+Math.round(Gt(Ut.g*255,0,255))*256+Math.round(Gt(Ut.b*255,0,255))}getHexString(e=it){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=yn.workingColorSpace){yn.fromWorkingColorSpace(Ut.copy(this),n);const i=Ut.r,r=Ut.g,s=Ut.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const d=(a+o)/2;if(a===o)l=0,u=0;else{const p=o-a;switch(u=d<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=yn.workingColorSpace){return yn.fromWorkingColorSpace(Ut.copy(this),n),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=it){yn.fromWorkingColorSpace(Ut.copy(this),e);const n=Ut.r,i=Ut.g,r=Ut.b;return e!==it?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(En),En.h+=e,En.s+=n,En.l+=i,this.setHSL(En.h,En.s,En.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(En),e.getHSL(da);const i=xo(En.h,da.h,n),r=xo(En.s,da.s,n),s=xo(En.l,da.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Ye;Ye.NAMES=f0;class Of extends bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Yg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new D,ha=new Ze;class sn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Gh,this.updateRange={offset:0,count:-1},this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ha.fromBufferAttribute(this,n),ha.applyMatrix3(e),this.setXY(n,ha.x,ha.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Vr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vr(n,this.array)),n}setX(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vr(n,this.array)),n}setY(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vr(n,this.array)),n}setW(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=zt(n,this.array),i=zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=zt(n,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=zt(n,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class d0 extends sn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class h0 extends sn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class oi extends sn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let P1=0;const un=new ot,bu=new Ct,Dr=new D,tn=new yr,Ys=new yr,At=new D;class Ln extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(s0(e)?h0:d0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,n,i){return un.makeTranslation(e,n,i),this.applyMatrix4(un),this}scale(e,n,i){return un.makeScale(e,n,i),this.applyMatrix4(un),this}lookAt(e){return bu.lookAt(e),bu.updateMatrix(),this.applyMatrix4(bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new oi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(tn.min,Ys.min),tn.expandByPoint(At),At.addVectors(tn.max,Ys.max),tn.expandByPoint(At)):(tn.expandByPoint(Ys.min),tn.expandByPoint(Ys.max))}tn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)At.fromBufferAttribute(a,u),l&&(Dr.fromBufferAttribute(e,u),At.add(Dr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],d=[];for(let R=0;R<a;R++)u[R]=new D,d[R]=new D;const p=new D,h=new D,m=new D,v=new Ze,x=new Ze,f=new Ze,c=new D,g=new D;function _(R,Z,K){p.fromArray(r,R*3),h.fromArray(r,Z*3),m.fromArray(r,K*3),v.fromArray(o,R*2),x.fromArray(o,Z*2),f.fromArray(o,K*2),h.sub(p),m.sub(p),x.sub(v),f.sub(v);const U=1/(x.x*f.y-f.x*x.y);!isFinite(U)||(c.copy(h).multiplyScalar(f.y).addScaledVector(m,-x.y).multiplyScalar(U),g.copy(m).multiplyScalar(x.x).addScaledVector(h,-f.x).multiplyScalar(U),u[R].add(c),u[Z].add(c),u[K].add(c),d[R].add(g),d[Z].add(g),d[K].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let R=0,Z=y.length;R<Z;++R){const K=y[R],U=K.start,H=K.count;for(let G=U,Y=U+H;G<Y;G+=3)_(i[G+0],i[G+1],i[G+2])}const T=new D,w=new D,C=new D,I=new D;function S(R){C.fromArray(s,R*3),I.copy(C);const Z=u[R];T.copy(Z),T.sub(C.multiplyScalar(C.dot(Z))).normalize(),w.crossVectors(I,Z);const U=w.dot(d[R])<0?-1:1;l[R*4]=T.x,l[R*4+1]=T.y,l[R*4+2]=T.z,l[R*4+3]=U}for(let R=0,Z=y.length;R<Z;++R){const K=y[R],U=K.start,H=K.count;for(let G=U,Y=U+H;G<Y;G+=3)S(i[G+0]),S(i[G+1]),S(i[G+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,u=new D,d=new D,p=new D;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),x=e.getX(h+1),f=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,f),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,f),a.add(d),l.add(d),u.add(d),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(f,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const u=a.array,d=a.itemSize,p=a.normalized,h=new u.constructor(l.length*d);let m=0,v=0;for(let x=0,f=l.length;x<f;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*d;for(let c=0;c<d;c++)h[v++]=u[m++]}return new sn(h,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ln,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let d=0,p=u.length;d<p;d++){const h=u[d],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let p=0,h=u.length;p<h;p++){const m=u[p];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const s=e.morphAttributes;for(const u in s){const d=[],p=s[u];for(let h=0,m=p.length;h<m;h++)d.push(p[h].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tp=new ot,ji=new u0,pa=new Rs,np=new D,Ur=new D,Ir=new D,Nr=new D,Lu=new D,ma=new D,ga=new Ze,_a=new Ze,va=new Ze,ip=new D,rp=new D,sp=new D,xa=new D,ya=new D;class bn extends Ct{constructor(e=new Ln,n=new Of){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ma.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=a[l],p=s[l];d!==0&&(Lu.fromBufferAttribute(p,e),o?ma.addScaledVector(Lu,d):ma.addScaledVector(Lu.sub(n),d))}n.add(ma)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(s),ji.copy(e.ray).recast(e.near),!(pa.containsPoint(ji.origin)===!1&&(ji.intersectSphere(pa,np)===null||ji.origin.distanceToSquared(np)>(e.far-e.near)**2))&&(tp.copy(s).invert(),ji.copy(e.ray).applyMatrix4(tp),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ji)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const f=h[v],c=o[f.materialIndex],g=Math.max(f.start,m.start),_=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let y=g,T=_;y<T;y+=3){const w=a.getX(y),C=a.getX(y+1),I=a.getX(y+2);r=Sa(this,c,e,i,u,d,p,w,C,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let f=v,c=x;f<c;f+=3){const g=a.getX(f),_=a.getX(f+1),y=a.getX(f+2);r=Sa(this,o,e,i,u,d,p,g,_,y),r&&(r.faceIndex=Math.floor(f/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const f=h[v],c=o[f.materialIndex],g=Math.max(f.start,m.start),_=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let y=g,T=_;y<T;y+=3){const w=y,C=y+1,I=y+2;r=Sa(this,c,e,i,u,d,p,w,C,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let f=v,c=x;f<c;f+=3){const g=f,_=f+1,y=f+2;r=Sa(this,o,e,i,u,d,p,g,_,y),r&&(r.faceIndex=Math.floor(f/3),n.push(r))}}}}function D1(t,e,n,i,r,s,o,a){let l;if(e.side===$t?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Oi,a),l===null)return null;ya.copy(a),ya.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ya);return u<n.near||u>n.far?null:{distance:u,point:ya.clone(),object:t}}function Sa(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Ur),t.getVertexPosition(l,Ir),t.getVertexPosition(u,Nr);const d=D1(t,e,n,i,Ur,Ir,Nr,xa);if(d){r&&(ga.fromBufferAttribute(r,a),_a.fromBufferAttribute(r,l),va.fromBufferAttribute(r,u),d.uv=wn.getInterpolation(xa,Ur,Ir,Nr,ga,_a,va,new Ze)),s&&(ga.fromBufferAttribute(s,a),_a.fromBufferAttribute(s,l),va.fromBufferAttribute(s,u),d.uv1=wn.getInterpolation(xa,Ur,Ir,Nr,ga,_a,va,new Ze),d.uv2=d.uv1),o&&(ip.fromBufferAttribute(o,a),rp.fromBufferAttribute(o,l),sp.fromBufferAttribute(o,u),d.normal=wn.getInterpolation(xa,Ur,Ir,Nr,ip,rp,sp,new D),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:l,c:u,normal:new D,materialIndex:0};wn.getNormal(Ur,Ir,Nr,p.normal),d.face=p}return d}class Ls extends Ln{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],d=[],p=[];let h=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new oi(u,3)),this.setAttribute("normal",new oi(d,3)),this.setAttribute("uv",new oi(p,2));function v(x,f,c,g,_,y,T,w,C,I,S){const R=y/C,Z=T/I,K=y/2,U=T/2,H=w/2,G=C+1,Y=I+1;let V=0,W=0;const J=new D;for(let $=0;$<Y;$++){const b=$*Z-U;for(let P=0;P<G;P++){const q=P*R-K;J[x]=q*g,J[f]=b*_,J[c]=H,u.push(J.x,J.y,J.z),J[x]=0,J[f]=0,J[c]=w>0?1:-1,d.push(J.x,J.y,J.z),p.push(P/C),p.push(1-$/I),V+=1}}for(let $=0;$<I;$++)for(let b=0;b<C;b++){const P=h+b+G*$,q=h+b+G*($+1),Q=h+(b+1)+G*($+1),ie=h+(b+1)+G*$;l.push(P,q,ie),l.push(q,Q,ie),W+=6}a.addGroup(m,W,S),m+=W,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function kt(t){const e={};for(let n=0;n<t.length;n++){const i=vs(t[n]);for(const r in i)e[r]=i[r]}return e}function U1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function p0(t){return t.getRenderTarget()===null?t.outputColorSpace:kn}const I1={clone:vs,merge:kt};var N1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N1,this.fragmentShader=F1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=U1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class m0 extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=ii}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class nn extends m0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Bo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(vo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fr=-90,Or=1;class O1 extends Ct{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new nn(Fr,Or,e,n);r.layers=this.layers,this.add(r);const s=new nn(Fr,Or,e,n);s.layers=this.layers,this.add(s);const o=new nn(Fr,Or,e,n);o.layers=this.layers,this.add(o);const a=new nn(Fr,Or,e,n);a.layers=this.layers,this.add(a);const l=new nn(Fr,Or,e,n);l.layers=this.layers,this.add(l);const u=new nn(Fr,Or,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,u]=this.children,d=e.getRenderTarget(),p=e.xr.enabled;e.xr.enabled=!1;const h=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=h,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class g0 extends Kt{constructor(e,n,i,r,s,o,a,l,u,d){e=e!==void 0?e:[],n=n!==void 0?n:ms,super(e,n,i,r,s,o,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class B1 extends pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(yo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ar?it:lr),this.texture=new g0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:dn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ls(5,5,5),s=new Bi({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:bi});s.uniforms.tEquirect.value=n;const o=new bn(r,s),a=n.minFilter;return n.minFilter===Fo&&(n.minFilter=dn),new O1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Pu=new D,z1=new D,k1=new We;class $i{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Pu.subVectors(i,n).cross(z1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Pu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||k1.getNormalMatrix(e),r=this.coplanarPoint(Pu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new Rs,Ma=new D;class Bf{constructor(e=new $i,n=new $i,i=new $i,r=new $i,s=new $i,o=new $i){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ii){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],d=r[5],p=r[6],h=r[7],m=r[8],v=r[9],x=r[10],f=r[11],c=r[12],g=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,f-m,y-c).normalize(),i[1].setComponents(l+s,h+u,f+m,y+c).normalize(),i[2].setComponents(l+o,h+d,f+v,y+g).normalize(),i[3].setComponents(l-o,h-d,f-v,y-g).normalize(),i[4].setComponents(l-a,h-p,f-x,y-_).normalize(),n===ii)i[5].setComponents(l+a,h+p,f+x,y+_).normalize();else if(n===hl)i[5].setComponents(a,p,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ma.x=r.normal.x>0?e.max.x:e.min.x,Ma.y=r.normal.y>0?e.max.y:e.min.y,Ma.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function H1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,d){const p=u.array,h=u.usage,m=t.createBuffer();t.bindBuffer(d,m),t.bufferData(d,p,h),u.onUploadCallback();let v;if(p instanceof Float32Array)v=t.FLOAT;else if(p instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(p instanceof Int16Array)v=t.SHORT;else if(p instanceof Uint32Array)v=t.UNSIGNED_INT;else if(p instanceof Int32Array)v=t.INT;else if(p instanceof Int8Array)v=t.BYTE;else if(p instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:v,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version}}function s(u,d,p){const h=d.array,m=d.updateRange;t.bindBuffer(p,u),m.count===-1?t.bufferSubData(p,0,h):(n?t.bufferSubData(p,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(p,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d&&(t.deleteBuffer(d.buffer),i.delete(u))}function l(u,d){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const p=i.get(u);p===void 0?i.set(u,r(u,d)):p.version<u.version&&(s(p.buffer,u,d),p.version=u.version)}return{get:o,remove:a,update:l}}class zf extends Ln{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,d=l+1,p=e/a,h=n/l,m=[],v=[],x=[],f=[];for(let c=0;c<d;c++){const g=c*h-o;for(let _=0;_<u;_++){const y=_*p-s;v.push(y,-g,0),x.push(0,0,1),f.push(_/a),f.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const _=g+u*c,y=g+u*(c+1),T=g+1+u*(c+1),w=g+1+u*c;m.push(_,y,w),m.push(y,T,w)}this.setIndex(m),this.setAttribute("position",new oi(v,3)),this.setAttribute("normal",new oi(x,3)),this.setAttribute("uv",new oi(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zf(e.width,e.height,e.widthSegments,e.heightSegments)}}var G1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V1=`#ifdef USE_ALPHAHASH
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
#endif`,W1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,q1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Z1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,J1=`#ifdef USE_IRIDESCENCE
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
#endif`,ey=`#ifdef USE_BUMPMAP
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
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ay=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ly=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uy=`#define PI 3.141592653589793
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
} // validated`,cy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fy=`vec3 transformedNormal = objectNormal;
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
#endif`,dy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,py=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,my=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",_y=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vy=`#ifdef USE_ENVMAP
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
#endif`,xy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,yy=`#ifdef USE_ENVMAP
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
#endif`,Sy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,My=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ty=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ay=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cy=`#ifdef USE_GRADIENTMAP
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
}`,Ry=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,by=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ly=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Py=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dy=`uniform bool receiveShadow;
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
#endif`,Uy=`#ifdef USE_ENVMAP
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
#endif`,Iy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,By=`PhysicalMaterial material;
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
#endif`,zy=`struct PhysicalMaterial {
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
}`,ky=`
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
#endif`,Hy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Vy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );

		#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ky=`#if defined( USE_POINTS_UV )
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
#endif`,Zy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eS=`#ifdef USE_MORPHNORMALS
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
#endif`,tS=`#ifdef USE_MORPHTARGETS
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
#endif`,nS=`#ifdef USE_MORPHTARGETS
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
#endif`,iS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,rS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lS=`#ifdef USE_NORMALMAP
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
#endif`,uS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,cS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_S=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ES=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TS=`float getShadowMask() {
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
}`,wS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AS=`#ifdef USE_SKINNING
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
#endif`,CS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RS=`#ifdef USE_SKINNING
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
#endif`,bS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,US=`#ifdef USE_TRANSMISSION
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
#endif`,IS=`#ifdef USE_TRANSMISSION
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
#endif`,NS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kS=`uniform sampler2D t2D;
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
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,VS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XS=`#include <common>
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
}`,jS=`#if DEPTH_PACKING == 3200
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
}`,qS=`#define DISTANCE
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
}`,YS=`#define DISTANCE
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
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZS=`uniform float scale;
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
}`,QS=`uniform vec3 diffuse;
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
}`,JS=`#include <common>
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
}`,eM=`uniform vec3 diffuse;
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
}`,tM=`#define LAMBERT
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
}`,nM=`#define LAMBERT
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
}`,iM=`#define MATCAP
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
}`,rM=`#define MATCAP
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
}`,sM=`#define NORMAL
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
}`,oM=`#define NORMAL
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
}`,aM=`#define PHONG
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
}`,lM=`#define PHONG
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
}`,uM=`#define STANDARD
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
}`,cM=`#define STANDARD
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
}`,fM=`#define TOON
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
}`,dM=`#define TOON
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
}`,hM=`uniform float size;
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
}`,pM=`uniform vec3 diffuse;
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
}`,mM=`#include <common>
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
}`,gM=`uniform vec3 color;
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
}`,_M=`uniform float rotation;
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
}`,vM=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:G1,alphahash_pars_fragment:V1,alphamap_fragment:W1,alphamap_pars_fragment:X1,alphatest_fragment:j1,alphatest_pars_fragment:q1,aomap_fragment:Y1,aomap_pars_fragment:$1,begin_vertex:K1,beginnormal_vertex:Z1,bsdfs:Q1,iridescence_fragment:J1,bumpmap_pars_fragment:ey,clipping_planes_fragment:ty,clipping_planes_pars_fragment:ny,clipping_planes_pars_vertex:iy,clipping_planes_vertex:ry,color_fragment:sy,color_pars_fragment:oy,color_pars_vertex:ay,color_vertex:ly,common:uy,cube_uv_reflection_fragment:cy,defaultnormal_vertex:fy,displacementmap_pars_vertex:dy,displacementmap_vertex:hy,emissivemap_fragment:py,emissivemap_pars_fragment:my,colorspace_fragment:gy,colorspace_pars_fragment:_y,envmap_fragment:vy,envmap_common_pars_fragment:xy,envmap_pars_fragment:yy,envmap_pars_vertex:Sy,envmap_physical_pars_fragment:Uy,envmap_vertex:My,fog_vertex:Ey,fog_pars_vertex:Ty,fog_fragment:wy,fog_pars_fragment:Ay,gradientmap_pars_fragment:Cy,lightmap_fragment:Ry,lightmap_pars_fragment:by,lights_lambert_fragment:Ly,lights_lambert_pars_fragment:Py,lights_pars_begin:Dy,lights_toon_fragment:Iy,lights_toon_pars_fragment:Ny,lights_phong_fragment:Fy,lights_phong_pars_fragment:Oy,lights_physical_fragment:By,lights_physical_pars_fragment:zy,lights_fragment_begin:ky,lights_fragment_maps:Hy,lights_fragment_end:Gy,logdepthbuf_fragment:Vy,logdepthbuf_pars_fragment:Wy,logdepthbuf_pars_vertex:Xy,logdepthbuf_vertex:jy,map_fragment:qy,map_pars_fragment:Yy,map_particle_fragment:$y,map_particle_pars_fragment:Ky,metalnessmap_fragment:Zy,metalnessmap_pars_fragment:Qy,morphcolor_vertex:Jy,morphnormal_vertex:eS,morphtarget_pars_vertex:tS,morphtarget_vertex:nS,normal_fragment_begin:iS,normal_fragment_maps:rS,normal_pars_fragment:sS,normal_pars_vertex:oS,normal_vertex:aS,normalmap_pars_fragment:lS,clearcoat_normal_fragment_begin:uS,clearcoat_normal_fragment_maps:cS,clearcoat_pars_fragment:fS,iridescence_pars_fragment:dS,opaque_fragment:hS,packing:pS,premultiplied_alpha_fragment:mS,project_vertex:gS,dithering_fragment:_S,dithering_pars_fragment:vS,roughnessmap_fragment:xS,roughnessmap_pars_fragment:yS,shadowmap_pars_fragment:SS,shadowmap_pars_vertex:MS,shadowmap_vertex:ES,shadowmask_pars_fragment:TS,skinbase_vertex:wS,skinning_pars_vertex:AS,skinning_vertex:CS,skinnormal_vertex:RS,specularmap_fragment:bS,specularmap_pars_fragment:LS,tonemapping_fragment:PS,tonemapping_pars_fragment:DS,transmission_fragment:US,transmission_pars_fragment:IS,uv_pars_fragment:NS,uv_pars_vertex:FS,uv_vertex:OS,worldpos_vertex:BS,background_vert:zS,background_frag:kS,backgroundCube_vert:HS,backgroundCube_frag:GS,cube_vert:VS,cube_frag:WS,depth_vert:XS,depth_frag:jS,distanceRGBA_vert:qS,distanceRGBA_frag:YS,equirect_vert:$S,equirect_frag:KS,linedashed_vert:ZS,linedashed_frag:QS,meshbasic_vert:JS,meshbasic_frag:eM,meshlambert_vert:tM,meshlambert_frag:nM,meshmatcap_vert:iM,meshmatcap_frag:rM,meshnormal_vert:sM,meshnormal_frag:oM,meshphong_vert:aM,meshphong_frag:lM,meshphysical_vert:uM,meshphysical_frag:cM,meshtoon_vert:fM,meshtoon_frag:dM,points_vert:hM,points_frag:pM,shadow_vert:mM,shadow_frag:gM,sprite_vert:_M,sprite_frag:vM},de={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Un={basic:{uniforms:kt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:kt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:kt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:kt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:kt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:kt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:kt([de.points,de.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:kt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:kt([de.common,de.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:kt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:kt([de.sprite,de.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:kt([de.common,de.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:kt([de.lights,de.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Un.physical={uniforms:kt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Ea={r:0,b:0,g:0};function xM(t,e,n,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,u,d,p=null,h=0,m=null;function v(f,c){let g=!1,_=c.isScene===!0?c.background:null;_&&_.isTexture&&(_=(c.backgroundBlurriness>0?n:e).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),g=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ll)?(d===void 0&&(d=new bn(new Ls(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:vs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(T,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,d.material.toneMapped=_.colorSpace!==it,(p!==_||h!==_.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,p=_,h=_.version,m=t.toneMapping),d.layers.enableAll(),f.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new bn(new zf(2,2),new Bi({name:"BackgroundMaterial",uniforms:vs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=_.colorSpace!==it,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(p!==_||h!==_.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,p=_,h=_.version,m=t.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null))}function x(f,c){f.getRGB(Ea,p0(t)),i.buffers.color.setClear(Ea.r,Ea.g,Ea.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(f,c=1){a.set(f),l=c,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,x(a,l)},render:v}}function yM(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=f(null);let u=l,d=!1;function p(H,G,Y,V,W){let J=!1;if(o){const $=x(V,Y,G);u!==$&&(u=$,m(u.object)),J=c(H,V,Y,W),J&&g(H,V,Y,W)}else{const $=G.wireframe===!0;(u.geometry!==V.id||u.program!==Y.id||u.wireframe!==$)&&(u.geometry=V.id,u.program=Y.id,u.wireframe=$,J=!0)}W!==null&&n.update(W,t.ELEMENT_ARRAY_BUFFER),(J||d)&&(d=!1,I(H,G,Y,V),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(W).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(H){return i.isWebGL2?t.bindVertexArray(H):s.bindVertexArrayOES(H)}function v(H){return i.isWebGL2?t.deleteVertexArray(H):s.deleteVertexArrayOES(H)}function x(H,G,Y){const V=Y.wireframe===!0;let W=a[H.id];W===void 0&&(W={},a[H.id]=W);let J=W[G.id];J===void 0&&(J={},W[G.id]=J);let $=J[V];return $===void 0&&($=f(h()),J[V]=$),$}function f(H){const G=[],Y=[],V=[];for(let W=0;W<r;W++)G[W]=0,Y[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:V,object:H,attributes:{},index:null}}function c(H,G,Y,V){const W=u.attributes,J=G.attributes;let $=0;const b=Y.getAttributes();for(const P in b)if(b[P].location>=0){const Q=W[P];let ie=J[P];if(ie===void 0&&(P==="instanceMatrix"&&H.instanceMatrix&&(ie=H.instanceMatrix),P==="instanceColor"&&H.instanceColor&&(ie=H.instanceColor)),Q===void 0||Q.attribute!==ie||ie&&Q.data!==ie.data)return!0;$++}return u.attributesNum!==$||u.index!==V}function g(H,G,Y,V){const W={},J=G.attributes;let $=0;const b=Y.getAttributes();for(const P in b)if(b[P].location>=0){let Q=J[P];Q===void 0&&(P==="instanceMatrix"&&H.instanceMatrix&&(Q=H.instanceMatrix),P==="instanceColor"&&H.instanceColor&&(Q=H.instanceColor));const ie={};ie.attribute=Q,Q&&Q.data&&(ie.data=Q.data),W[P]=ie,$++}u.attributes=W,u.attributesNum=$,u.index=V}function _(){const H=u.newAttributes;for(let G=0,Y=H.length;G<Y;G++)H[G]=0}function y(H){T(H,0)}function T(H,G){const Y=u.newAttributes,V=u.enabledAttributes,W=u.attributeDivisors;Y[H]=1,V[H]===0&&(t.enableVertexAttribArray(H),V[H]=1),W[H]!==G&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,G),W[H]=G)}function w(){const H=u.newAttributes,G=u.enabledAttributes;for(let Y=0,V=G.length;Y<V;Y++)G[Y]!==H[Y]&&(t.disableVertexAttribArray(Y),G[Y]=0)}function C(H,G,Y,V,W,J,$){$===!0?t.vertexAttribIPointer(H,G,Y,W,J):t.vertexAttribPointer(H,G,Y,V,W,J)}function I(H,G,Y,V){if(i.isWebGL2===!1&&(H.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const W=V.attributes,J=Y.getAttributes(),$=G.defaultAttributeValues;for(const b in J){const P=J[b];if(P.location>=0){let q=W[b];if(q===void 0&&(b==="instanceMatrix"&&H.instanceMatrix&&(q=H.instanceMatrix),b==="instanceColor"&&H.instanceColor&&(q=H.instanceColor)),q!==void 0){const Q=q.normalized,ie=q.itemSize,xe=n.get(q);if(xe===void 0)continue;const Me=xe.buffer,ye=xe.type,Oe=xe.bytesPerElement,ht=i.isWebGL2===!0&&(ye===t.INT||ye===t.UNSIGNED_INT||q.gpuType===Zg);if(q.isInterleavedBufferAttribute){const ke=q.data,N=ke.stride,pt=q.offset;if(ke.isInstancedInterleavedBuffer){for(let Re=0;Re<P.locationSize;Re++)T(P.location+Re,ke.meshPerAttribute);H.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let Re=0;Re<P.locationSize;Re++)y(P.location+Re);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let Re=0;Re<P.locationSize;Re++)C(P.location+Re,ie/P.locationSize,ye,Q,N*Oe,(pt+ie/P.locationSize*Re)*Oe,ht)}else{if(q.isInstancedBufferAttribute){for(let ke=0;ke<P.locationSize;ke++)T(P.location+ke,q.meshPerAttribute);H.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ke=0;ke<P.locationSize;ke++)y(P.location+ke);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let ke=0;ke<P.locationSize;ke++)C(P.location+ke,ie/P.locationSize,ye,Q,ie*Oe,ie/P.locationSize*ke*Oe,ht)}}else if($!==void 0){const Q=$[b];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(P.location,Q);break;case 3:t.vertexAttrib3fv(P.location,Q);break;case 4:t.vertexAttrib4fv(P.location,Q);break;default:t.vertexAttrib1fv(P.location,Q)}}}}w()}function S(){K();for(const H in a){const G=a[H];for(const Y in G){const V=G[Y];for(const W in V)v(V[W].object),delete V[W];delete G[Y]}delete a[H]}}function R(H){if(a[H.id]===void 0)return;const G=a[H.id];for(const Y in G){const V=G[Y];for(const W in V)v(V[W].object),delete V[W];delete G[Y]}delete a[H.id]}function Z(H){for(const G in a){const Y=a[G];if(Y[H.id]===void 0)continue;const V=Y[H.id];for(const W in V)v(V[W].object),delete V[W];delete Y[H.id]}}function K(){U(),d=!0,u!==l&&(u=l,m(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:K,resetDefaultState:U,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:Z,initAttributes:_,enableAttribute:y,disableUnusedAttributes:w}}function SM(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,d){t.drawArrays(s,u,d),n.update(d,s,1)}function l(u,d,p){if(p===0)return;let h,m;if(r)h=t,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,u,d,p),n.update(d,s,p)}this.setMode=o,this.render=a,this.renderInstances=l}function MM(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,y=o||e.has("OES_texture_float"),T=_&&y,w=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:f,maxVaryings:c,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:w}}function EM(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new $i,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||i!==0||r;return r=h,i=p.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=d(p,h,0)},this.setState=function(p,h,m){const v=p.clippingPlanes,x=p.clipIntersection,f=p.clipShadows,c=t.get(p);if(!r||v===null||v.length===0||s&&!f)s?d(null):u();else{const g=s?0:i,_=g*4;let y=c.clippingState||null;l.value=y,y=d(v,h,_,m);for(let T=0;T!==_;++T)y[T]=n[T];c.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,h,m,v){const x=p!==null?p.length:0;let f=null;if(x!==0){if(f=l.value,v!==!0||f===null){const c=m+x*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(f===null||f.length<c)&&(f=new Float32Array(c));for(let _=0,y=m;_!==x;++_,y+=4)o.copy(p[_]).applyMatrix4(g,a),o.normal.toArray(f,y),f[y+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}function TM(t){let e=new WeakMap;function n(o,a){return a===Cc?o.mapping=ms:a===Rc&&(o.mapping=gs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Cc||a===Rc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new B1(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class v0 extends m0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Kr=4,op=[.125,.215,.35,.446,.526,.582],Zi=20,Du=new v0,ap=new Ye;let Uu=null;const Ki=(1+Math.sqrt(5))/2,Br=1/Ki,lp=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ki,Br),new D(0,Ki,-Br),new D(Br,0,Ki),new D(-Br,0,Ki),new D(Ki,Br,0),new D(-Ki,Br,0)];class up{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Uu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uu),e.scissorTest=!1,Ta(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uu=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Oo,format:Cn,colorSpace:kn,depthBuffer:!1},r=cp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wM(s)),this._blurMaterial=AM(s,e,n)}return r}_compileMaterial(e){const n=new bn(this._lodPlanes[0],e);this._renderer.compile(n,Du)}_sceneToCubeUV(e,n,i,r){const a=new nn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,h=d.toneMapping;d.getClearColor(ap),d.toneMapping=Li,d.autoClear=!1;const m=new Of({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),v=new bn(new Ls,m);let x=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,x=!0):(m.color.copy(ap),x=!0);for(let c=0;c<6;c++){const g=c%3;g===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):g===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const _=this._cubeSize;Ta(r,g*_,c>2?_:0,_,_),d.setRenderTarget(r),x&&d.render(v,a),d.render(e,a)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=h,d.autoClear=p,e.background=f}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ms||e.mapping===gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new bn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ta(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Du)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=lp[(r-1)%lp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new bn(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Zi-1),x=s/v,f=isFinite(s)?1+Math.floor(d*x):Zi;f>Zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Zi}`);const c=[];let g=0;for(let C=0;C<Zi;++C){const I=C/x,S=Math.exp(-I*I/2);c.push(S),C===0?g+=S:C<f&&(g+=2*S)}for(let C=0;C<c.length;C++)c[C]=c[C]/g;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=c,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-i;const y=this._sizeLods[r],T=3*y*(r>_-Kr?r-_+Kr:0),w=4*(this._cubeSize-y);Ta(n,T,w,3*y,2*y),l.setRenderTarget(n),l.render(p,Du)}}function wM(t){const e=[],n=[],i=[];let r=t;const s=t-Kr+1+op.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Kr?l=op[o-t+Kr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),d=-u,p=1+u,h=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,v=6,x=3,f=2,c=1,g=new Float32Array(x*v*m),_=new Float32Array(f*v*m),y=new Float32Array(c*v*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,I=w>2?0:-1,S=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];g.set(S,x*v*w),_.set(h,f*v*w);const R=[w,w,w,w,w,w];y.set(R,c*v*w)}const T=new Ln;T.setAttribute("position",new sn(g,x)),T.setAttribute("uv",new sn(_,f)),T.setAttribute("faceIndex",new sn(y,c)),e.push(T),r>Kr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function cp(t,e,n){const i=new pr(t,e,n);return i.texture.mapping=Ll,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ta(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function AM(t,e,n){const i=new Float32Array(Zi),r=new D(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kf(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function fp(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kf(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function dp(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function kf(){return`

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
	`}function CM(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Cc||l===Rc,d=l===ms||l===gs;if(u||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return n===null&&(n=new up(t)),p=u?n.fromEquirectangular(a,p):n.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(u&&p&&p.height>0||d&&p&&r(p)){n===null&&(n=new up(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function RM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bM(t,e,n,i){const r={},s=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let f=0,c=x.length;f<c;f++)e.remove(x[f])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(p){const h=p.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const v in m){const x=m[v];for(let f=0,c=x.length;f<c;f++)e.update(x[f],t.ARRAY_BUFFER)}}function u(p){const h=[],m=p.index,v=p.attributes.position;let x=0;if(m!==null){const g=m.array;x=m.version;for(let _=0,y=g.length;_<y;_+=3){const T=g[_+0],w=g[_+1],C=g[_+2];h.push(T,w,w,C,C,T)}}else if(v!==void 0){const g=v.array;x=v.version;for(let _=0,y=g.length/3-1;_<y;_+=3){const T=_+0,w=_+1,C=_+2;h.push(T,w,w,C,C,T)}}else return;const f=new(s0(h)?h0:d0)(h,1);f.version=x;const c=s.get(p);c&&e.remove(c),s.set(p,f)}function d(p){const h=s.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:d}}function LM(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function d(h,m){t.drawElements(s,m,a,h*l),n.update(m,s,1)}function p(h,m,v){if(v===0)return;let x,f;if(r)x=t,f="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[f](s,m,a,h*l,v),n.update(m,s,v)}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=p}function PM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function DM(t,e){return t[0]-e[0]}function UM(t,e){return Math.abs(e[1])-Math.abs(t[1])}function IM(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new st,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,d,p){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let f=s.get(d);if(f===void 0||f.count!==x){let G=function(){U.dispose(),s.delete(d),d.removeEventListener("dispose",G)};var m=G;f!==void 0&&f.texture.dispose();const _=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,T=d.morphAttributes.color!==void 0,w=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),T===!0&&(S=3);let R=d.attributes.position.count*S,Z=1;R>e.maxTextureSize&&(Z=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const K=new Float32Array(R*Z*4*x),U=new l0(K,R,Z,x);U.type=yi,U.needsUpdate=!0;const H=S*4;for(let Y=0;Y<x;Y++){const V=w[Y],W=C[Y],J=I[Y],$=R*Z*4*Y;for(let b=0;b<V.count;b++){const P=b*H;_===!0&&(o.fromBufferAttribute(V,b),K[$+P+0]=o.x,K[$+P+1]=o.y,K[$+P+2]=o.z,K[$+P+3]=0),y===!0&&(o.fromBufferAttribute(W,b),K[$+P+4]=o.x,K[$+P+5]=o.y,K[$+P+6]=o.z,K[$+P+7]=0),T===!0&&(o.fromBufferAttribute(J,b),K[$+P+8]=o.x,K[$+P+9]=o.y,K[$+P+10]=o.z,K[$+P+11]=J.itemSize===4?o.w:1)}}f={count:x,texture:U,size:new Ze(R,Z)},s.set(d,f),d.addEventListener("dispose",G)}let c=0;for(let _=0;_<h.length;_++)c+=h[_];const g=d.morphTargetsRelative?1:1-c;p.getUniforms().setValue(t,"morphTargetBaseInfluence",g),p.getUniforms().setValue(t,"morphTargetInfluences",h),p.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),p.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}else{const v=h===void 0?0:h.length;let x=i[d.id];if(x===void 0||x.length!==v){x=[];for(let y=0;y<v;y++)x[y]=[y,0];i[d.id]=x}for(let y=0;y<v;y++){const T=x[y];T[0]=y,T[1]=h[y]}x.sort(UM);for(let y=0;y<8;y++)y<v&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(DM);const f=d.morphAttributes.position,c=d.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const T=a[y],w=T[0],C=T[1];w!==Number.MAX_SAFE_INTEGER&&C?(f&&d.getAttribute("morphTarget"+y)!==f[w]&&d.setAttribute("morphTarget"+y,f[w]),c&&d.getAttribute("morphNormal"+y)!==c[w]&&d.setAttribute("morphNormal"+y,c[w]),r[y]=C,g+=C):(f&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),c&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),r[y]=0)}const _=d.morphTargetsRelative?1:1-g;p.getUniforms().setValue(t,"morphTargetBaseInfluence",_),p.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function NM(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,d=l.geometry,p=e.get(l,d);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return p}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const x0=new Kt,y0=new l0,S0=new S1,M0=new g0,hp=[],pp=[],mp=new Float32Array(16),gp=new Float32Array(9),_p=new Float32Array(4);function Ps(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=hp[r];if(s===void 0&&(s=new Float32Array(r),hp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Dl(t,e){let n=pp[e];n===void 0&&(n=new Int32Array(e),pp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function FM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function OM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function BM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function zM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function kM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(Et(n,i))return;_p.set(i),t.uniformMatrix2fv(this.addr,!1,_p),Tt(n,i)}}function HM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(Et(n,i))return;gp.set(i),t.uniformMatrix3fv(this.addr,!1,gp),Tt(n,i)}}function GM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(Et(n,i))return;mp.set(i),t.uniformMatrix4fv(this.addr,!1,mp),Tt(n,i)}}function VM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function WM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function XM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function jM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function qM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function YM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function $M(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function KM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function ZM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||x0,r)}function QM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||S0,r)}function JM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||M0,r)}function eE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||y0,r)}function tE(t){switch(t){case 5126:return FM;case 35664:return OM;case 35665:return BM;case 35666:return zM;case 35674:return kM;case 35675:return HM;case 35676:return GM;case 5124:case 35670:return VM;case 35667:case 35671:return WM;case 35668:case 35672:return XM;case 35669:case 35673:return jM;case 5125:return qM;case 36294:return YM;case 36295:return $M;case 36296:return KM;case 35678:case 36198:case 36298:case 36306:case 35682:return ZM;case 35679:case 36299:case 36307:return QM;case 35680:case 36300:case 36308:case 36293:return JM;case 36289:case 36303:case 36311:case 36292:return eE}}function nE(t,e){t.uniform1fv(this.addr,e)}function iE(t,e){const n=Ps(e,this.size,2);t.uniform2fv(this.addr,n)}function rE(t,e){const n=Ps(e,this.size,3);t.uniform3fv(this.addr,n)}function sE(t,e){const n=Ps(e,this.size,4);t.uniform4fv(this.addr,n)}function oE(t,e){const n=Ps(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function aE(t,e){const n=Ps(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function lE(t,e){const n=Ps(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function uE(t,e){t.uniform1iv(this.addr,e)}function cE(t,e){t.uniform2iv(this.addr,e)}function fE(t,e){t.uniform3iv(this.addr,e)}function dE(t,e){t.uniform4iv(this.addr,e)}function hE(t,e){t.uniform1uiv(this.addr,e)}function pE(t,e){t.uniform2uiv(this.addr,e)}function mE(t,e){t.uniform3uiv(this.addr,e)}function gE(t,e){t.uniform4uiv(this.addr,e)}function _E(t,e,n){const i=this.cache,r=e.length,s=Dl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||x0,s[o])}function vE(t,e,n){const i=this.cache,r=e.length,s=Dl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||S0,s[o])}function xE(t,e,n){const i=this.cache,r=e.length,s=Dl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||M0,s[o])}function yE(t,e,n){const i=this.cache,r=e.length,s=Dl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||y0,s[o])}function SE(t){switch(t){case 5126:return nE;case 35664:return iE;case 35665:return rE;case 35666:return sE;case 35674:return oE;case 35675:return aE;case 35676:return lE;case 5124:case 35670:return uE;case 35667:case 35671:return cE;case 35668:case 35672:return fE;case 35669:case 35673:return dE;case 5125:return hE;case 36294:return pE;case 36295:return mE;case 36296:return gE;case 35678:case 36198:case 36298:case 36306:case 35682:return _E;case 35679:case 36299:case 36307:return vE;case 35680:case 36300:case 36308:case 36293:return xE;case 36289:case 36303:case 36311:case 36292:return yE}}class ME{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=tE(n.type)}}class EE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=SE(n.type)}}class TE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Iu=/(\w+)(\])?(\[|\.)?/g;function vp(t,e){t.seq.push(e),t.map[e.id]=e}function wE(t,e,n){const i=t.name,r=i.length;for(Iu.lastIndex=0;;){const s=Iu.exec(i),o=Iu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){vp(n,u===void 0?new ME(a,t,e):new EE(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new TE(a),vp(n,p)),n=p}}}class Ha{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);wE(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function xp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let AE=0;function CE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function RE(t){switch(t){case kn:return["Linear","( value )"];case it:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function yp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+CE(t.getShaderSource(e),o)}else return r}function bE(t,e){const n=RE(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function LE(t,e){let n;switch(e){case wx:n="Linear";break;case Ax:n="Reinhard";break;case Cx:n="OptimizedCineon";break;case $g:n="ACESFilmic";break;case Rx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function PE(t){return[t.extensionDerivatives||!!t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ro).join(`
`)}function DE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function UE(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ro(t){return t!==""}function Sp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(t){return t.replace(IE,FE)}const NE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function FE(t,e){let n=Ve[e];if(n===void 0){const i=NE.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Uc(n)}const OE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ep(t){return t.replace(OE,BE)}function BE(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Xg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ix?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function kE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case Ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function HE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function GE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Yg:e="ENVMAP_BLENDING_MULTIPLY";break;case Ex:e="ENVMAP_BLENDING_MIX";break;case Tx:e="ENVMAP_BLENDING_ADD";break}return e}function VE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function WE(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=zE(n),u=kE(n),d=HE(n),p=GE(n),h=VE(n),m=n.isWebGL2?"":PE(n),v=DE(s),x=r.createProgram();let f,c,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ro).join(`
`),f.length>0&&(f+=`
`),c=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ro).join(`
`),c.length>0&&(c+=`
`)):(f=[Tp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),c=[m,Tp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Li?"#define TONE_MAPPING":"",n.toneMapping!==Li?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Li?LE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,bE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ro).join(`
`)),o=Uc(o),o=Sp(o,n),o=Mp(o,n),a=Uc(a),a=Sp(a,n),a=Mp(a,n),o=Ep(o),a=Ep(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,c=["#define varying in",n.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const _=g+f+o,y=g+c+a,T=xp(r,r.VERTEX_SHADER,_),w=xp(r,r.FRAGMENT_SHADER,y);if(r.attachShader(x,T),r.attachShader(x,w),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),t.debug.checkShaderErrors){const S=r.getProgramInfoLog(x).trim(),R=r.getShaderInfoLog(T).trim(),Z=r.getShaderInfoLog(w).trim();let K=!0,U=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,T,w);else{const H=yp(r,T,"vertex"),G=yp(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+H+`
`+G)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(R===""||Z==="")&&(U=!1);U&&(this.diagnostics={runnable:K,programLog:S,vertexShader:{log:R,prefix:f},fragmentShader:{log:Z,prefix:c}})}r.deleteShader(T),r.deleteShader(w);let C;this.getUniforms=function(){return C===void 0&&(C=new Ha(r,x)),C};let I;return this.getAttributes=function(){return I===void 0&&(I=UE(r,x)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=AE++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}let XE=0;class jE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new qE(e),n.set(e,i)),i}}class qE{constructor(e){this.id=XE++,this.code=e,this.usedTimes=0}}function YE(t,e,n,i,r,s,o){const a=new c0,l=new jE,u=[],d=r.isWebGL2,p=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function f(S,R,Z,K,U){const H=K.fog,G=U.geometry,Y=S.isMeshStandardMaterial?K.environment:null,V=(S.isMeshStandardMaterial?n:e).get(S.envMap||Y),W=!!V&&V.mapping===Ll?V.image.height:null,J=v[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const $=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,b=$!==void 0?$.length:0;let P=0;G.morphAttributes.position!==void 0&&(P=1),G.morphAttributes.normal!==void 0&&(P=2),G.morphAttributes.color!==void 0&&(P=3);let q,Q,ie,xe;if(J){const Se=Un[J];q=Se.vertexShader,Q=Se.fragmentShader}else q=S.vertexShader,Q=S.fragmentShader,l.update(S),ie=l.getVertexShaderID(S),xe=l.getFragmentShaderID(S);const Me=t.getRenderTarget(),ye=U.isInstancedMesh===!0,Oe=!!S.map,ht=!!S.matcap,ke=!!V,N=!!S.aoMap,pt=!!S.lightMap,Re=!!S.bumpMap,Ue=!!S.normalMap,be=!!S.displacementMap,Qe=!!S.emissiveMap,pe=!!S.metalnessMap,De=!!S.roughnessMap,$e=S.anisotropy>0,ce=S.clearcoat>0,Ee=S.iridescence>0,A=S.sheen>0,M=S.transmission>0,B=$e&&!!S.anisotropyMap,re=ce&&!!S.clearcoatMap,te=ce&&!!S.clearcoatNormalMap,se=ce&&!!S.clearcoatRoughnessMap,we=Ee&&!!S.iridescenceMap,ae=Ee&&!!S.iridescenceThicknessMap,k=A&&!!S.sheenColorMap,Ce=A&&!!S.sheenRoughnessMap,Ae=!!S.specularMap,Te=!!S.specularColorMap,me=!!S.specularIntensityMap,ge=M&&!!S.transmissionMap,fe=M&&!!S.thicknessMap,_e=!!S.gradientMap,L=!!S.alphaMap,ne=S.alphaTest>0,F=!!S.alphaHash,ee=!!S.extensions,le=!!G.attributes.uv1,He=!!G.attributes.uv2,ue=!!G.attributes.uv3;let je=Li;return S.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(je=t.toneMapping),{isWebGL2:d,shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:q,fragmentShader:Q,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:ye,instancingColor:ye&&U.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Me===null?t.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:kn,map:Oe,matcap:ht,envMap:ke,envMapMode:ke&&V.mapping,envMapCubeUVHeight:W,aoMap:N,lightMap:pt,bumpMap:Re,normalMap:Ue,displacementMap:h&&be,emissiveMap:Qe,normalMapObjectSpace:Ue&&S.normalMapType===Hx,normalMapTangentSpace:Ue&&S.normalMapType===r0,metalnessMap:pe,roughnessMap:De,anisotropy:$e,anisotropyMap:B,clearcoat:ce,clearcoatMap:re,clearcoatNormalMap:te,clearcoatRoughnessMap:se,iridescence:Ee,iridescenceMap:we,iridescenceThicknessMap:ae,sheen:A,sheenColorMap:k,sheenRoughnessMap:Ce,specularMap:Ae,specularColorMap:Te,specularIntensityMap:me,transmission:M,transmissionMap:ge,thicknessMap:fe,gradientMap:_e,opaque:S.transparent===!1&&S.blending===ls,alphaMap:L,alphaTest:ne,alphaHash:F,combine:S.combine,mapUv:Oe&&x(S.map.channel),aoMapUv:N&&x(S.aoMap.channel),lightMapUv:pt&&x(S.lightMap.channel),bumpMapUv:Re&&x(S.bumpMap.channel),normalMapUv:Ue&&x(S.normalMap.channel),displacementMapUv:be&&x(S.displacementMap.channel),emissiveMapUv:Qe&&x(S.emissiveMap.channel),metalnessMapUv:pe&&x(S.metalnessMap.channel),roughnessMapUv:De&&x(S.roughnessMap.channel),anisotropyMapUv:B&&x(S.anisotropyMap.channel),clearcoatMapUv:re&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:te&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:k&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&x(S.sheenRoughnessMap.channel),specularMapUv:Ae&&x(S.specularMap.channel),specularColorMapUv:Te&&x(S.specularColorMap.channel),specularIntensityMapUv:me&&x(S.specularIntensityMap.channel),transmissionMapUv:ge&&x(S.transmissionMap.channel),thicknessMapUv:fe&&x(S.thicknessMap.channel),alphaMapUv:L&&x(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ue||$e),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:le,vertexUv2s:He,vertexUv3s:ue,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(Oe||L),fog:!!H,useFog:S.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:b,morphTextureStride:P,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&Z.length>0,shadowMapType:t.shadowMap.type,toneMapping:je,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Oe&&S.map.isVideoTexture===!0&&S.map.colorSpace===it,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===In,flipSided:S.side===$t,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ee&&S.extensions.derivatives===!0,extensionFragDepth:ee&&S.extensions.fragDepth===!0,extensionDrawBuffers:ee&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ee&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function c(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const Z in S.defines)R.push(Z),R.push(S.defines[Z]);return S.isRawShaderMaterial===!1&&(g(R,S),_(R,S),R.push(t.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function g(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function _(S,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const R=v[S.type];let Z;if(R){const K=Un[R];Z=I1.clone(K.uniforms)}else Z=S.uniforms;return Z}function T(S,R){let Z;for(let K=0,U=u.length;K<U;K++){const H=u[K];if(H.cacheKey===R){Z=H,++Z.usedTimes;break}}return Z===void 0&&(Z=new WE(t,R,S,s),u.push(Z)),Z}function w(S){if(--S.usedTimes===0){const R=u.indexOf(S);u[R]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function I(){l.dispose()}return{getParameters:f,getProgramCacheKey:c,getUniforms:y,acquireProgram:T,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:I}}function $E(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function KE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function wp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ap(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,h,m,v,x,f){let c=t[e];return c===void 0?(c={id:p.id,object:p,geometry:h,material:m,groupOrder:v,renderOrder:p.renderOrder,z:x,group:f},t[e]=c):(c.id=p.id,c.object=p,c.geometry=h,c.material=m,c.groupOrder=v,c.renderOrder=p.renderOrder,c.z=x,c.group=f),e++,c}function a(p,h,m,v,x,f){const c=o(p,h,m,v,x,f);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(p,h,m,v,x,f){const c=o(p,h,m,v,x,f);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(p,h){n.length>1&&n.sort(p||KE),i.length>1&&i.sort(h||wp),r.length>1&&r.sort(h||wp)}function d(){for(let p=e,h=t.length;p<h;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:u}}function ZE(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Ap,t.set(i,[o])):r>=s.length?(o=new Ap,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function QE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new Ye};break;case"SpotLight":n={position:new D,direction:new D,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function JE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let eT=0;function tT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function nT(t,e){const n=new QE,i=JE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)r.probe.push(new D);const s=new D,o=new ot,a=new ot;function l(d,p){let h=0,m=0,v=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let x=0,f=0,c=0,g=0,_=0,y=0,T=0,w=0,C=0,I=0;d.sort(tT);const S=p===!0?Math.PI:1;for(let Z=0,K=d.length;Z<K;Z++){const U=d[Z],H=U.color,G=U.intensity,Y=U.distance,V=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=H.r*G*S,m+=H.g*G*S,v+=H.b*G*S;else if(U.isLightProbe)for(let W=0;W<9;W++)r.probe[W].addScaledVector(U.sh.coefficients[W],G);else if(U.isDirectionalLight){const W=n.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*S),U.castShadow){const J=U.shadow,$=i.get(U);$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,r.directionalShadow[x]=$,r.directionalShadowMap[x]=V,r.directionalShadowMatrix[x]=U.shadow.matrix,y++}r.directional[x]=W,x++}else if(U.isSpotLight){const W=n.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(H).multiplyScalar(G*S),W.distance=Y,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,r.spot[c]=W;const J=U.shadow;if(U.map&&(r.spotLightMap[C]=U.map,C++,J.updateMatrices(U),U.castShadow&&I++),r.spotLightMatrix[c]=J.matrix,U.castShadow){const $=i.get(U);$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,r.spotShadow[c]=$,r.spotShadowMap[c]=V,w++}c++}else if(U.isRectAreaLight){const W=n.get(U);W.color.copy(H).multiplyScalar(G),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),r.rectArea[g]=W,g++}else if(U.isPointLight){const W=n.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*S),W.distance=U.distance,W.decay=U.decay,U.castShadow){const J=U.shadow,$=i.get(U);$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,$.shadowCameraNear=J.camera.near,$.shadowCameraFar=J.camera.far,r.pointShadow[f]=$,r.pointShadowMap[f]=V,r.pointShadowMatrix[f]=U.shadow.matrix,T++}r.point[f]=W,f++}else if(U.isHemisphereLight){const W=n.get(U);W.skyColor.copy(U.color).multiplyScalar(G*S),W.groundColor.copy(U.groundColor).multiplyScalar(G*S),r.hemi[_]=W,_++}}g>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=v;const R=r.hash;(R.directionalLength!==x||R.pointLength!==f||R.spotLength!==c||R.rectAreaLength!==g||R.hemiLength!==_||R.numDirectionalShadows!==y||R.numPointShadows!==T||R.numSpotShadows!==w||R.numSpotMaps!==C)&&(r.directional.length=x,r.spot.length=c,r.rectArea.length=g,r.point.length=f,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=w+C-I,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=I,R.directionalLength=x,R.pointLength=f,R.spotLength=c,R.rectAreaLength=g,R.hemiLength=_,R.numDirectionalShadows=y,R.numPointShadows=T,R.numSpotShadows=w,R.numSpotMaps=C,r.version=eT++)}function u(d,p){let h=0,m=0,v=0,x=0,f=0;const c=p.matrixWorldInverse;for(let g=0,_=d.length;g<_;g++){const y=d[g];if(y.isDirectionalLight){const T=r.directional[h];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(c),h++}else if(y.isSpotLight){const T=r.spot[v];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(c),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(c),v++}else if(y.isRectAreaLight){const T=r.rectArea[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(c),a.identity(),o.copy(y.matrixWorld),o.premultiply(c),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(c),m++}else if(y.isHemisphereLight){const T=r.hemi[f];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(c),f++}}}return{setup:l,setupView:u,state:r}}function Cp(t,e){const n=new nT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(p){i.push(p)}function a(p){r.push(p)}function l(p){n.setup(i,p)}function u(p){n.setupView(i,p)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function iT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Cp(t,e),n.set(s,[l])):o>=a.length?(l=new Cp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class rT extends bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sT extends bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const oT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aT=`uniform sampler2D shadow_pass;
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
}`;function lT(t,e,n){let i=new Bf;const r=new Ze,s=new Ze,o=new st,a=new rT({depthPacking:kx}),l=new sT,u={},d=n.maxTextureSize,p={[Oi]:$t,[$t]:Oi,[In]:In},h=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:oT,fragmentShader:aT}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ln;v.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new bn(v,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xg;let c=this.type;this.render=function(T,w,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;const I=t.getRenderTarget(),S=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),Z=t.state;Z.setBlending(bi),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const K=c!==Qn&&this.type===Qn,U=c===Qn&&this.type!==Qn;for(let H=0,G=T.length;H<G;H++){const Y=T[H],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const W=V.getFrameExtents();if(r.multiply(W),s.copy(V.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/W.x),r.x=s.x*W.x,V.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/W.y),r.y=s.y*W.y,V.mapSize.y=s.y)),V.map===null||K===!0||U===!0){const $=this.type!==Qn?{minFilter:Ht,magFilter:Ht}:{};V.map!==null&&V.map.dispose(),V.map=new pr(r.x,r.y,$),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}t.setRenderTarget(V.map),t.clear();const J=V.getViewportCount();for(let $=0;$<J;$++){const b=V.getViewport($);o.set(s.x*b.x,s.y*b.y,s.x*b.z,s.y*b.w),Z.viewport(o),V.updateMatrices(Y,$),i=V.getFrustum(),y(w,C,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Qn&&g(V,C),V.needsUpdate=!1}c=this.type,f.needsUpdate=!1,t.setRenderTarget(I,S,R)};function g(T,w){const C=e.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new pr(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(w,null,C,h,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(w,null,C,m,x,null)}function _(T,w,C,I){let S=null;const R=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)S=R;else if(S=C.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Z=S.uuid,K=w.uuid;let U=u[Z];U===void 0&&(U={},u[Z]=U);let H=U[K];H===void 0&&(H=S.clone(),U[K]=H),S=H}if(S.visible=w.visible,S.wireframe=w.wireframe,I===Qn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:p[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Z=t.properties.get(S);Z.light=C}return S}function y(T,w,C,I,S){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Qn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const K=e.update(T),U=T.material;if(Array.isArray(U)){const H=K.groups;for(let G=0,Y=H.length;G<Y;G++){const V=H[G],W=U[V.materialIndex];if(W&&W.visible){const J=_(T,W,I,S);t.renderBufferDirect(C,null,K,J,T,V)}}}else if(U.visible){const H=_(T,U,I,S);t.renderBufferDirect(C,null,K,H,T,null)}}const Z=T.children;for(let K=0,U=Z.length;K<U;K++)y(Z[K],w,C,I,S)}}function uT(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ne=new st;let F=null;const ee=new st(0,0,0,0);return{setMask:function(le){F!==le&&!L&&(t.colorMask(le,le,le,le),F=le)},setLocked:function(le){L=le},setClear:function(le,He,ue,je,_t){_t===!0&&(le*=je,He*=je,ue*=je),ne.set(le,He,ue,je),ee.equals(ne)===!1&&(t.clearColor(le,He,ue,je),ee.copy(ne))},reset:function(){L=!1,F=null,ee.set(-1,0,0,0)}}}function s(){let L=!1,ne=null,F=null,ee=null;return{setTest:function(le){le?Me(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(le){ne!==le&&!L&&(t.depthMask(le),ne=le)},setFunc:function(le){if(F!==le){switch(le){case gx:t.depthFunc(t.NEVER);break;case _x:t.depthFunc(t.ALWAYS);break;case vx:t.depthFunc(t.LESS);break;case Ac:t.depthFunc(t.LEQUAL);break;case xx:t.depthFunc(t.EQUAL);break;case yx:t.depthFunc(t.GEQUAL);break;case Sx:t.depthFunc(t.GREATER);break;case Mx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}F=le}},setLocked:function(le){L=le},setClear:function(le){ee!==le&&(t.clearDepth(le),ee=le)},reset:function(){L=!1,ne=null,F=null,ee=null}}}function o(){let L=!1,ne=null,F=null,ee=null,le=null,He=null,ue=null,je=null,_t=null;return{setTest:function(Se){L||(Se?Me(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(Se){ne!==Se&&!L&&(t.stencilMask(Se),ne=Se)},setFunc:function(Se,et,Je){(F!==Se||ee!==et||le!==Je)&&(t.stencilFunc(Se,et,Je),F=Se,ee=et,le=Je)},setOp:function(Se,et,Je){(He!==Se||ue!==et||je!==Je)&&(t.stencilOp(Se,et,Je),He=Se,ue=et,je=Je)},setLocked:function(Se){L=Se},setClear:function(Se){_t!==Se&&(t.clearStencil(Se),_t=Se)},reset:function(){L=!1,ne=null,F=null,ee=null,le=null,He=null,ue=null,je=null,_t=null}}}const a=new r,l=new s,u=new o,d=new WeakMap,p=new WeakMap;let h={},m={},v=new WeakMap,x=[],f=null,c=!1,g=null,_=null,y=null,T=null,w=null,C=null,I=null,S=!1,R=null,Z=null,K=null,U=null,H=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,V=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=V>=1):W.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=V>=2);let J=null,$={};const b=t.getParameter(t.SCISSOR_BOX),P=t.getParameter(t.VIEWPORT),q=new st().fromArray(b),Q=new st().fromArray(P);function ie(L,ne,F,ee){const le=new Uint8Array(4),He=t.createTexture();t.bindTexture(L,He),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ue=0;ue<F;ue++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ne,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(ne+ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return He}const xe={};xe[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),xe[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(xe[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xe[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Me(t.DEPTH_TEST),l.setFunc(Ac),be(!1),Qe(fh),Me(t.CULL_FACE),Re(bi);function Me(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function ye(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function Oe(L,ne){return m[L]!==ne?(t.bindFramebuffer(L,ne),m[L]=ne,i&&(L===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ne),L===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ne)),!0):!1}function ht(L,ne){let F=x,ee=!1;if(L)if(F=v.get(ne),F===void 0&&(F=[],v.set(ne,F)),L.isWebGLMultipleRenderTargets){const le=L.texture;if(F.length!==le.length||F[0]!==t.COLOR_ATTACHMENT0){for(let He=0,ue=le.length;He<ue;He++)F[He]=t.COLOR_ATTACHMENT0+He;F.length=le.length,ee=!0}}else F[0]!==t.COLOR_ATTACHMENT0&&(F[0]=t.COLOR_ATTACHMENT0,ee=!0);else F[0]!==t.BACK&&(F[0]=t.BACK,ee=!0);ee&&(n.isWebGL2?t.drawBuffers(F):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(F))}function ke(L){return f!==L?(t.useProgram(L),f=L,!0):!1}const N={[Gr]:t.FUNC_ADD,[sx]:t.FUNC_SUBTRACT,[ox]:t.FUNC_REVERSE_SUBTRACT};if(i)N[ph]=t.MIN,N[mh]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(N[ph]=L.MIN_EXT,N[mh]=L.MAX_EXT)}const pt={[ax]:t.ZERO,[lx]:t.ONE,[ux]:t.SRC_COLOR,[jg]:t.SRC_ALPHA,[mx]:t.SRC_ALPHA_SATURATE,[hx]:t.DST_COLOR,[fx]:t.DST_ALPHA,[cx]:t.ONE_MINUS_SRC_COLOR,[qg]:t.ONE_MINUS_SRC_ALPHA,[px]:t.ONE_MINUS_DST_COLOR,[dx]:t.ONE_MINUS_DST_ALPHA};function Re(L,ne,F,ee,le,He,ue,je){if(L===bi){c===!0&&(ye(t.BLEND),c=!1);return}if(c===!1&&(Me(t.BLEND),c=!0),L!==rx){if(L!==g||je!==S){if((_!==Gr||w!==Gr)&&(t.blendEquation(t.FUNC_ADD),_=Gr,w=Gr),je)switch(L){case ls:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case us:t.blendFunc(t.ONE,t.ONE);break;case dh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ls:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case us:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case dh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,T=null,C=null,I=null,g=L,S=je}return}le=le||ne,He=He||F,ue=ue||ee,(ne!==_||le!==w)&&(t.blendEquationSeparate(N[ne],N[le]),_=ne,w=le),(F!==y||ee!==T||He!==C||ue!==I)&&(t.blendFuncSeparate(pt[F],pt[ee],pt[He],pt[ue]),y=F,T=ee,C=He,I=ue),g=L,S=!1}function Ue(L,ne){L.side===In?ye(t.CULL_FACE):Me(t.CULL_FACE);let F=L.side===$t;ne&&(F=!F),be(F),L.blending===ls&&L.transparent===!1?Re(bi):Re(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ee=L.stencilWrite;u.setTest(ee),ee&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),De(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Me(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function be(L){R!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),R=L)}function Qe(L){L!==tx?(Me(t.CULL_FACE),L!==Z&&(L===fh?t.cullFace(t.BACK):L===nx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),Z=L}function pe(L){L!==K&&(Y&&t.lineWidth(L),K=L)}function De(L,ne,F){L?(Me(t.POLYGON_OFFSET_FILL),(U!==ne||H!==F)&&(t.polygonOffset(ne,F),U=ne,H=F)):ye(t.POLYGON_OFFSET_FILL)}function $e(L){L?Me(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function ce(L){L===void 0&&(L=t.TEXTURE0+G-1),J!==L&&(t.activeTexture(L),J=L)}function Ee(L,ne,F){F===void 0&&(J===null?F=t.TEXTURE0+G-1:F=J);let ee=$[F];ee===void 0&&(ee={type:void 0,texture:void 0},$[F]=ee),(ee.type!==L||ee.texture!==ne)&&(J!==F&&(t.activeTexture(F),J=F),t.bindTexture(L,ne||xe[L]),ee.type=L,ee.texture=ne)}function A(){const L=$[J];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(L){q.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),q.copy(L))}function me(L){Q.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Q.copy(L))}function ge(L,ne){let F=p.get(ne);F===void 0&&(F=new WeakMap,p.set(ne,F));let ee=F.get(L);ee===void 0&&(ee=t.getUniformBlockIndex(ne,L.name),F.set(L,ee))}function fe(L,ne){const ee=p.get(ne).get(L);d.get(ne)!==ee&&(t.uniformBlockBinding(ne,ee,L.__bindingPointIndex),d.set(ne,ee))}function _e(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},J=null,$={},m={},v=new WeakMap,x=[],f=null,c=!1,g=null,_=null,y=null,T=null,w=null,C=null,I=null,S=!1,R=null,Z=null,K=null,U=null,H=null,q.set(0,0,t.canvas.width,t.canvas.height),Q.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Me,disable:ye,bindFramebuffer:Oe,drawBuffers:ht,useProgram:ke,setBlending:Re,setMaterial:Ue,setFlipSided:be,setCullFace:Qe,setLineWidth:pe,setPolygonOffset:De,setScissorTest:$e,activeTexture:ce,bindTexture:Ee,unbindTexture:A,compressedTexImage2D:M,compressedTexImage3D:B,texImage2D:Ce,texImage3D:Ae,updateUBOMapping:ge,uniformBlockBinding:fe,texStorage2D:ae,texStorage3D:k,texSubImage2D:re,texSubImage3D:te,compressedTexSubImage2D:se,compressedTexSubImage3D:we,scissor:Te,viewport:me,reset:_e}}function cT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,d=r.maxTextureSize,p=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let x;const f=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return c?new OffscreenCanvas(A,M):ml("canvas")}function _(A,M,B,re){let te=1;if((A.width>re||A.height>re)&&(te=re/Math.max(A.width,A.height)),te<1||M===!0)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap){const se=M?pl:Math.floor,we=se(te*A.width),ae=se(te*A.height);x===void 0&&(x=g(we,ae));const k=B?g(we,ae):x;return k.width=we,k.height=ae,k.getContext("2d").drawImage(A,0,0,we,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+we+"x"+ae+")."),k}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return Dc(A.width)&&Dc(A.height)}function T(A){return a?!1:A.wrapS!==An||A.wrapT!==An||A.minFilter!==Ht&&A.minFilter!==dn}function w(A,M){return A.generateMipmaps&&M&&A.minFilter!==Ht&&A.minFilter!==dn}function C(A){t.generateMipmap(A)}function I(A,M,B,re,te=!1){if(a===!1)return M;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se=M;return M===t.RED&&(B===t.FLOAT&&(se=t.R32F),B===t.HALF_FLOAT&&(se=t.R16F),B===t.UNSIGNED_BYTE&&(se=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(se=t.R8UI),B===t.UNSIGNED_SHORT&&(se=t.R16UI),B===t.UNSIGNED_INT&&(se=t.R32UI),B===t.BYTE&&(se=t.R8I),B===t.SHORT&&(se=t.R16I),B===t.INT&&(se=t.R32I)),M===t.RG&&(B===t.FLOAT&&(se=t.RG32F),B===t.HALF_FLOAT&&(se=t.RG16F),B===t.UNSIGNED_BYTE&&(se=t.RG8)),M===t.RGBA&&(B===t.FLOAT&&(se=t.RGBA32F),B===t.HALF_FLOAT&&(se=t.RGBA16F),B===t.UNSIGNED_BYTE&&(se=re===it&&te===!1?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)),(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function S(A,M,B){return w(A,B)===!0||A.isFramebufferTexture&&A.minFilter!==Ht&&A.minFilter!==dn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function R(A){return A===Ht||A===gh||A===lu?t.NEAREST:t.LINEAR}function Z(A){const M=A.target;M.removeEventListener("dispose",Z),U(M),M.isVideoTexture&&v.delete(M)}function K(A){const M=A.target;M.removeEventListener("dispose",K),G(M)}function U(A){const M=i.get(A);if(M.__webglInit===void 0)return;const B=A.source,re=f.get(B);if(re){const te=re[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&H(A),Object.keys(re).length===0&&f.delete(B)}i.remove(A)}function H(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const B=A.source,re=f.get(B);delete re[M.__cacheKey],o.memory.textures--}function G(A){const M=A.texture,B=i.get(A),re=i.get(M);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(B.__webglFramebuffer[te]))for(let se=0;se<B.__webglFramebuffer[te].length;se++)t.deleteFramebuffer(B.__webglFramebuffer[te][se]);else t.deleteFramebuffer(B.__webglFramebuffer[te]);B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[te])}else{if(Array.isArray(B.__webglFramebuffer))for(let te=0;te<B.__webglFramebuffer.length;te++)t.deleteFramebuffer(B.__webglFramebuffer[te]);else t.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let te=0;te<B.__webglColorRenderbuffer.length;te++)B.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[te]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let te=0,se=M.length;te<se;te++){const we=i.get(M[te]);we.__webglTexture&&(t.deleteTexture(we.__webglTexture),o.memory.textures--),i.remove(M[te])}i.remove(M),i.remove(A)}let Y=0;function V(){Y=0}function W(){const A=Y;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),Y+=1,A}function J(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function $(A,M){const B=i.get(A);if(A.isVideoTexture&&ce(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const re=A.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(B,A,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function b(A,M){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Oe(B,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function P(A,M){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Oe(B,A,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function q(A,M){const B=i.get(A);if(A.version>0&&B.__version!==A.version){ht(B,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const Q={[bc]:t.REPEAT,[An]:t.CLAMP_TO_EDGE,[Lc]:t.MIRRORED_REPEAT},ie={[Ht]:t.NEAREST,[gh]:t.NEAREST_MIPMAP_NEAREST,[lu]:t.NEAREST_MIPMAP_LINEAR,[dn]:t.LINEAR,[bx]:t.LINEAR_MIPMAP_NEAREST,[Fo]:t.LINEAR_MIPMAP_LINEAR},xe={[Vx]:t.NEVER,[Kx]:t.ALWAYS,[Wx]:t.LESS,[jx]:t.LEQUAL,[Xx]:t.EQUAL,[$x]:t.GEQUAL,[qx]:t.GREATER,[Yx]:t.NOTEQUAL};function Me(A,M,B){if(B?(t.texParameteri(A,t.TEXTURE_WRAP_S,Q[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,Q[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,Q[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ie[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ie[M.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==An||M.wrapT!==An)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,R(M.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,R(M.minFilter)),M.minFilter!==Ht&&M.minFilter!==dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,xe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ht||M.minFilter!==lu&&M.minFilter!==Fo||M.type===yi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Oo&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(A,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function ye(A,M){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",Z));const re=M.source;let te=f.get(re);te===void 0&&(te={},f.set(re,te));const se=J(M);if(se!==A.__cacheKey){te[se]===void 0&&(te[se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),te[se].usedTimes++;const we=te[A.__cacheKey];we!==void 0&&(te[A.__cacheKey].usedTimes--,we.usedTimes===0&&H(M)),A.__cacheKey=se,A.__webglTexture=te[se].texture}return B}function Oe(A,M,B){let re=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=t.TEXTURE_3D);const te=ye(A,M),se=M.source;n.bindTexture(re,A.__webglTexture,t.TEXTURE0+B);const we=i.get(se);if(se.version!==we.__version||te===!0){n.activeTexture(t.TEXTURE0+B),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ae=T(M)&&y(M.image)===!1;let k=_(M.image,ae,!1,d);k=Ee(M,k);const Ce=y(k)||a,Ae=s.convert(M.format,M.colorSpace);let Te=s.convert(M.type),me=I(M.internalFormat,Ae,Te,M.colorSpace,M.isVideoTexture);Me(re,M,Ce);let ge;const fe=M.mipmaps,_e=a&&M.isVideoTexture!==!0,L=we.__version===void 0||te===!0,ne=S(M,k,Ce);if(M.isDepthTexture)me=t.DEPTH_COMPONENT,a?M.type===yi?me=t.DEPTH_COMPONENT32F:M.type===xi?me=t.DEPTH_COMPONENT24:M.type===sr?me=t.DEPTH24_STENCIL8:me=t.DEPTH_COMPONENT16:M.type===yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===or&&me===t.DEPTH_COMPONENT&&M.type!==Nf&&M.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=xi,Te=s.convert(M.type)),M.format===_s&&me===t.DEPTH_COMPONENT&&(me=t.DEPTH_STENCIL,M.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=sr,Te=s.convert(M.type))),L&&(_e?n.texStorage2D(t.TEXTURE_2D,1,me,k.width,k.height):n.texImage2D(t.TEXTURE_2D,0,me,k.width,k.height,0,Ae,Te,null));else if(M.isDataTexture)if(fe.length>0&&Ce){_e&&L&&n.texStorage2D(t.TEXTURE_2D,ne,me,fe[0].width,fe[0].height);for(let F=0,ee=fe.length;F<ee;F++)ge=fe[F],_e?n.texSubImage2D(t.TEXTURE_2D,F,0,0,ge.width,ge.height,Ae,Te,ge.data):n.texImage2D(t.TEXTURE_2D,F,me,ge.width,ge.height,0,Ae,Te,ge.data);M.generateMipmaps=!1}else _e?(L&&n.texStorage2D(t.TEXTURE_2D,ne,me,k.width,k.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,k.width,k.height,Ae,Te,k.data)):n.texImage2D(t.TEXTURE_2D,0,me,k.width,k.height,0,Ae,Te,k.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){_e&&L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ne,me,fe[0].width,fe[0].height,k.depth);for(let F=0,ee=fe.length;F<ee;F++)ge=fe[F],M.format!==Cn?Ae!==null?_e?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,F,0,0,0,ge.width,ge.height,k.depth,Ae,ge.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,F,me,ge.width,ge.height,k.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?n.texSubImage3D(t.TEXTURE_2D_ARRAY,F,0,0,0,ge.width,ge.height,k.depth,Ae,Te,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,F,me,ge.width,ge.height,k.depth,0,Ae,Te,ge.data)}else{_e&&L&&n.texStorage2D(t.TEXTURE_2D,ne,me,fe[0].width,fe[0].height);for(let F=0,ee=fe.length;F<ee;F++)ge=fe[F],M.format!==Cn?Ae!==null?_e?n.compressedTexSubImage2D(t.TEXTURE_2D,F,0,0,ge.width,ge.height,Ae,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,F,me,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?n.texSubImage2D(t.TEXTURE_2D,F,0,0,ge.width,ge.height,Ae,Te,ge.data):n.texImage2D(t.TEXTURE_2D,F,me,ge.width,ge.height,0,Ae,Te,ge.data)}else if(M.isDataArrayTexture)_e?(L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ne,me,k.width,k.height,k.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,Ae,Te,k.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,me,k.width,k.height,k.depth,0,Ae,Te,k.data);else if(M.isData3DTexture)_e?(L&&n.texStorage3D(t.TEXTURE_3D,ne,me,k.width,k.height,k.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,Ae,Te,k.data)):n.texImage3D(t.TEXTURE_3D,0,me,k.width,k.height,k.depth,0,Ae,Te,k.data);else if(M.isFramebufferTexture){if(L)if(_e)n.texStorage2D(t.TEXTURE_2D,ne,me,k.width,k.height);else{let F=k.width,ee=k.height;for(let le=0;le<ne;le++)n.texImage2D(t.TEXTURE_2D,le,me,F,ee,0,Ae,Te,null),F>>=1,ee>>=1}}else if(fe.length>0&&Ce){_e&&L&&n.texStorage2D(t.TEXTURE_2D,ne,me,fe[0].width,fe[0].height);for(let F=0,ee=fe.length;F<ee;F++)ge=fe[F],_e?n.texSubImage2D(t.TEXTURE_2D,F,0,0,Ae,Te,ge):n.texImage2D(t.TEXTURE_2D,F,me,Ae,Te,ge);M.generateMipmaps=!1}else _e?(L&&n.texStorage2D(t.TEXTURE_2D,ne,me,k.width,k.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ae,Te,k)):n.texImage2D(t.TEXTURE_2D,0,me,Ae,Te,k);w(M,Ce)&&C(re),we.__version=se.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ht(A,M,B){if(M.image.length!==6)return;const re=ye(A,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+B);const se=i.get(te);if(te.version!==se.__version||re===!0){n.activeTexture(t.TEXTURE0+B),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const we=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,k=[];for(let F=0;F<6;F++)!we&&!ae?k[F]=_(M.image[F],!1,!0,u):k[F]=ae?M.image[F].image:M.image[F],k[F]=Ee(M,k[F]);const Ce=k[0],Ae=y(Ce)||a,Te=s.convert(M.format,M.colorSpace),me=s.convert(M.type),ge=I(M.internalFormat,Te,me,M.colorSpace),fe=a&&M.isVideoTexture!==!0,_e=se.__version===void 0||re===!0;let L=S(M,Ce,Ae);Me(t.TEXTURE_CUBE_MAP,M,Ae);let ne;if(we){fe&&_e&&n.texStorage2D(t.TEXTURE_CUBE_MAP,L,ge,Ce.width,Ce.height);for(let F=0;F<6;F++){ne=k[F].mipmaps;for(let ee=0;ee<ne.length;ee++){const le=ne[ee];M.format!==Cn?Te!==null?fe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ee,0,0,le.width,le.height,Te,le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ee,ge,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ee,0,0,le.width,le.height,Te,me,le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ee,ge,le.width,le.height,0,Te,me,le.data)}}}else{ne=M.mipmaps,fe&&_e&&(ne.length>0&&L++,n.texStorage2D(t.TEXTURE_CUBE_MAP,L,ge,k[0].width,k[0].height));for(let F=0;F<6;F++)if(ae){fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,k[F].width,k[F].height,Te,me,k[F].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,ge,k[F].width,k[F].height,0,Te,me,k[F].data);for(let ee=0;ee<ne.length;ee++){const He=ne[ee].image[F].image;fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ee+1,0,0,He.width,He.height,Te,me,He.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ee+1,ge,He.width,He.height,0,Te,me,He.data)}}else{fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Te,me,k[F]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,ge,Te,me,k[F]);for(let ee=0;ee<ne.length;ee++){const le=ne[ee];fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ee+1,0,0,Te,me,le.image[F]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ee+1,ge,Te,me,le.image[F])}}}w(M,Ae)&&C(t.TEXTURE_CUBE_MAP),se.__version=te.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ke(A,M,B,re,te,se){const we=s.convert(B.format,B.colorSpace),ae=s.convert(B.type),k=I(B.internalFormat,we,ae,B.colorSpace);if(!i.get(M).__hasExternalTextures){const Ae=Math.max(1,M.width>>se),Te=Math.max(1,M.height>>se);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,se,k,Ae,Te,M.depth,0,we,ae,null):n.texImage2D(te,se,k,Ae,Te,0,we,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),$e(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,te,i.get(B).__webglTexture,0,De(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,te,i.get(B).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function N(A,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let re=t.DEPTH_COMPONENT16;if(B||$e(M)){const te=M.depthTexture;te&&te.isDepthTexture&&(te.type===yi?re=t.DEPTH_COMPONENT32F:te.type===xi&&(re=t.DEPTH_COMPONENT24));const se=De(M);$e(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,re,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,se,re,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const re=De(M);B&&$e(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):$e(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let te=0;te<re.length;te++){const se=re[te],we=s.convert(se.format,se.colorSpace),ae=s.convert(se.type),k=I(se.internalFormat,we,ae,se.colorSpace),Ce=De(M);B&&$e(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,k,M.width,M.height):$e(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,k,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,k,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const re=i.get(M.depthTexture).__webglTexture,te=De(M);if(M.depthTexture.format===or)$e(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(M.depthTexture.format===_s)$e(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Re(A){const M=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");pt(M.__webglFramebuffer,A)}else if(B){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=t.createRenderbuffer(),N(M.__webglDepthbuffer[re],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),N(M.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(A,M,B){const re=i.get(A);M!==void 0&&ke(re.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Re(A)}function be(A){const M=A.texture,B=i.get(A),re=i.get(M);A.addEventListener("dispose",K),A.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=M.version,o.memory.textures++);const te=A.isWebGLCubeRenderTarget===!0,se=A.isWebGLMultipleRenderTargets===!0,we=y(A)||a;if(te){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let k=0;k<M.mipmaps.length;k++)B.__webglFramebuffer[ae][k]=t.createFramebuffer()}else B.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)B.__webglFramebuffer[ae]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(se)if(r.drawBuffers){const ae=A.texture;for(let k=0,Ce=ae.length;k<Ce;k++){const Ae=i.get(ae[k]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&$e(A)===!1){const ae=se?M:[M];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let k=0;k<ae.length;k++){const Ce=ae[k];B.__webglColorRenderbuffer[k]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[k]);const Ae=s.convert(Ce.format,Ce.colorSpace),Te=s.convert(Ce.type),me=I(Ce.internalFormat,Ae,Te,Ce.colorSpace,A.isXRRenderTarget===!0),ge=De(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,me,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.RENDERBUFFER,B.__webglColorRenderbuffer[k])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),N(B.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),Me(t.TEXTURE_CUBE_MAP,M,we);for(let ae=0;ae<6;ae++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let k=0;k<M.mipmaps.length;k++)ke(B.__webglFramebuffer[ae][k],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,k);else ke(B.__webglFramebuffer[ae],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);w(M,we)&&C(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(se){const ae=A.texture;for(let k=0,Ce=ae.length;k<Ce;k++){const Ae=ae[k],Te=i.get(Ae);n.bindTexture(t.TEXTURE_2D,Te.__webglTexture),Me(t.TEXTURE_2D,Ae,we),ke(B.__webglFramebuffer,A,Ae,t.COLOR_ATTACHMENT0+k,t.TEXTURE_2D,0),w(Ae,we)&&C(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ae=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ae,re.__webglTexture),Me(ae,M,we),a&&M.mipmaps&&M.mipmaps.length>0)for(let k=0;k<M.mipmaps.length;k++)ke(B.__webglFramebuffer[k],A,M,t.COLOR_ATTACHMENT0,ae,k);else ke(B.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,ae,0);w(M,we)&&C(ae),n.unbindTexture()}A.depthBuffer&&Re(A)}function Qe(A){const M=y(A)||a,B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let re=0,te=B.length;re<te;re++){const se=B[re];if(w(se,M)){const we=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ae=i.get(se).__webglTexture;n.bindTexture(we,ae),C(we),n.unbindTexture()}}}function pe(A){if(a&&A.samples>0&&$e(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],B=A.width,re=A.height;let te=t.COLOR_BUFFER_BIT;const se=[],we=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=i.get(A),k=A.isWebGLMultipleRenderTargets===!0;if(k)for(let Ce=0;Ce<M.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){se.push(t.COLOR_ATTACHMENT0+Ce),A.depthBuffer&&se.push(we);const Ae=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Ae===!1&&(A.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),k&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[Ce]),Ae===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[we]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[we])),k){const Te=i.get(M[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Te,0)}t.blitFramebuffer(0,0,B,re,0,0,B,re,te,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),k)for(let Ce=0;Ce<M.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,ae.__webglColorRenderbuffer[Ce]);const Ae=i.get(M[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function De(A){return Math.min(p,A.samples)}function $e(A){const M=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ce(A){const M=o.render.frame;v.get(A)!==M&&(v.set(A,M),A.update())}function Ee(A,M){const B=A.colorSpace,re=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Pc||B!==kn&&B!==lr&&(B===it||B===Pl?a===!1?e.has("EXT_sRGB")===!0&&re===Cn?(A.format=Pc,A.minFilter=dn,A.generateMipmaps=!1):M=o0.sRGBToLinear(M):(re!==Cn||te!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}this.allocateTextureUnit=W,this.resetTextureUnits=V,this.setTexture2D=$,this.setTexture2DArray=b,this.setTexture3D=P,this.setTextureCube=q,this.rebindTextures=Ue,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=$e}const fT=0,St=1;function dT(t,e,n){const i=n.isWebGL2;function r(s,o=lr){let a;const l=o===it||o===Pl?St:fT;if(s===Pi)return t.UNSIGNED_BYTE;if(s===Qg)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Jg)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Lx)return t.BYTE;if(s===Px)return t.SHORT;if(s===Nf)return t.UNSIGNED_SHORT;if(s===Zg)return t.INT;if(s===xi)return t.UNSIGNED_INT;if(s===yi)return t.FLOAT;if(s===Oo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Dx)return t.ALPHA;if(s===Cn)return t.RGBA;if(s===Ux)return t.LUMINANCE;if(s===Ix)return t.LUMINANCE_ALPHA;if(s===or)return t.DEPTH_COMPONENT;if(s===_s)return t.DEPTH_STENCIL;if(s===Pc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Nx)return t.RED;if(s===e0)return t.RED_INTEGER;if(s===Fx)return t.RG;if(s===t0)return t.RG_INTEGER;if(s===n0)return t.RGBA_INTEGER;if(s===uu||s===cu||s===fu||s===du)if(l===St)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===uu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===cu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===du)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===uu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===cu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===du)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_h||s===vh||s===xh||s===yh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===_h)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===yh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ox)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Sh||s===Mh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Sh)return l===St?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Mh)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Eh||s===Th||s===wh||s===Ah||s===Ch||s===Rh||s===bh||s===Lh||s===Ph||s===Dh||s===Uh||s===Ih||s===Nh||s===Fh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Eh)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Th)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wh)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ah)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ch)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rh)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bh)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Lh)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ph)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Dh)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Uh)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ih)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Nh)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fh)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===hu||s===Oh||s===Bh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===hu)return l===St?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Oh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Bh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Bx||s===zh||s===kh||s===Hh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===hu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===zh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===kh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Hh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===sr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class hT extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ir extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pT={type:"move"};class Nu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const f=n.getJointPose(x,i),c=this._getHandJoint(u,x);f!==null&&(c.matrix.fromArray(f.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=f.radius),c.visible=f!==null}const d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],h=d.position.distanceTo(p.position),m=.02,v=.005;u.inputState.pinching&&h>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ir;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class mT extends Kt{constructor(e,n,i,r,s,o,a,l,u,d){if(d=d!==void 0?d:or,d!==or&&d!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===or&&(i=xi),i===void 0&&d===_s&&(i=sr),super(null,r,s,o,a,l,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class gT extends As{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,d=null,p=null,h=null,m=null,v=null;const x=n.getContextAttributes();let f=null,c=null;const g=[],_=[],y=new nn;y.layers.enable(1),y.viewport=new st;const T=new nn;T.layers.enable(2),T.viewport=new st;const w=[y,T],C=new hT;C.layers.enable(1),C.layers.enable(2);let I=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(b){let P=g[b];return P===void 0&&(P=new Nu,g[b]=P),P.getTargetRaySpace()},this.getControllerGrip=function(b){let P=g[b];return P===void 0&&(P=new Nu,g[b]=P),P.getGripSpace()},this.getHand=function(b){let P=g[b];return P===void 0&&(P=new Nu,g[b]=P),P.getHandSpace()};function R(b){const P=_.indexOf(b.inputSource);if(P===-1)return;const q=g[P];q!==void 0&&(q.update(b.inputSource,b.frame,u||o),q.dispatchEvent({type:b.type,data:b.inputSource}))}function Z(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",K);for(let b=0;b<g.length;b++){const P=_[b];P!==null&&(_[b]=null,g[b].disconnect(P))}I=null,S=null,e.setRenderTarget(f),m=null,h=null,p=null,r=null,c=null,$.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(b){s=b,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(b){a=b,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(b){u=b},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(b){if(r=b,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",K),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const P={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,P),r.updateRenderState({baseLayer:m}),c=new pr(m.framebufferWidth,m.framebufferHeight,{format:Cn,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let P=null,q=null,Q=null;x.depth&&(Q=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,P=x.stencil?_s:or,q=x.stencil?sr:xi);const ie={colorFormat:n.RGBA8,depthFormat:Q,scaleFactor:s};p=new XRWebGLBinding(r,n),h=p.createProjectionLayer(ie),r.updateRenderState({layers:[h]}),c=new pr(h.textureWidth,h.textureHeight,{format:Cn,type:Pi,depthTexture:new mT(h.textureWidth,h.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,P),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const xe=e.properties.get(c);xe.__ignoreDepthValues=h.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),$.setContext(r),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(b){for(let P=0;P<b.removed.length;P++){const q=b.removed[P],Q=_.indexOf(q);Q>=0&&(_[Q]=null,g[Q].disconnect(q))}for(let P=0;P<b.added.length;P++){const q=b.added[P];let Q=_.indexOf(q);if(Q===-1){for(let xe=0;xe<g.length;xe++)if(xe>=_.length){_.push(q),Q=xe;break}else if(_[xe]===null){_[xe]=q,Q=xe;break}if(Q===-1)break}const ie=g[Q];ie&&ie.connect(q)}}const U=new D,H=new D;function G(b,P,q){U.setFromMatrixPosition(P.matrixWorld),H.setFromMatrixPosition(q.matrixWorld);const Q=U.distanceTo(H),ie=P.projectionMatrix.elements,xe=q.projectionMatrix.elements,Me=ie[14]/(ie[10]-1),ye=ie[14]/(ie[10]+1),Oe=(ie[9]+1)/ie[5],ht=(ie[9]-1)/ie[5],ke=(ie[8]-1)/ie[0],N=(xe[8]+1)/xe[0],pt=Me*ke,Re=Me*N,Ue=Q/(-ke+N),be=Ue*-ke;P.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(be),b.translateZ(Ue),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert();const Qe=Me+Ue,pe=ye+Ue,De=pt-be,$e=Re+(Q-be),ce=Oe*ye/pe*Qe,Ee=ht*ye/pe*Qe;b.projectionMatrix.makePerspective(De,$e,ce,Ee,Qe,pe),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}function Y(b,P){P===null?b.matrixWorld.copy(b.matrix):b.matrixWorld.multiplyMatrices(P.matrixWorld,b.matrix),b.matrixWorldInverse.copy(b.matrixWorld).invert()}this.updateCamera=function(b){if(r===null)return;C.near=T.near=y.near=b.near,C.far=T.far=y.far=b.far,(I!==C.near||S!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),I=C.near,S=C.far);const P=b.parent,q=C.cameras;Y(C,P);for(let Q=0;Q<q.length;Q++)Y(q[Q],P);q.length===2?G(C,y,T):C.projectionMatrix.copy(y.projectionMatrix),V(b,C,P)};function V(b,P,q){q===null?b.matrix.copy(P.matrixWorld):(b.matrix.copy(q.matrixWorld),b.matrix.invert(),b.matrix.multiply(P.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(P.projectionMatrix),b.projectionMatrixInverse.copy(P.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=Bo*2*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(b){l=b,h!==null&&(h.fixedFoveation=b),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=b)};let W=null;function J(b,P){if(d=P.getViewerPose(u||o),v=P,d!==null){const q=d.views;m!==null&&(e.setRenderTargetFramebuffer(c,m.framebuffer),e.setRenderTarget(c));let Q=!1;q.length!==C.cameras.length&&(C.cameras.length=0,Q=!0);for(let ie=0;ie<q.length;ie++){const xe=q[ie];let Me=null;if(m!==null)Me=m.getViewport(xe);else{const Oe=p.getViewSubImage(h,xe);Me=Oe.viewport,ie===0&&(e.setRenderTargetTextures(c,Oe.colorTexture,h.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(c))}let ye=w[ie];ye===void 0&&(ye=new nn,ye.layers.enable(ie),ye.viewport=new st,w[ie]=ye),ye.matrix.fromArray(xe.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(xe.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Me.x,Me.y,Me.width,Me.height),ie===0&&(C.matrix.copy(ye.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Q===!0&&C.cameras.push(ye)}}for(let q=0;q<g.length;q++){const Q=_[q],ie=g[q];Q!==null&&ie!==void 0&&ie.update(Q,P,u||o)}W&&W(b,P),P.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:P}),v=null}const $=new _0;$.setAnimationLoop(J),this.setAnimationLoop=function(b){W=b},this.dispose=function(){}}}function _T(t,e){function n(f,c){f.matrixAutoUpdate===!0&&f.updateMatrix(),c.value.copy(f.matrix)}function i(f,c){c.color.getRGB(f.fogColor.value,p0(t)),c.isFog?(f.fogNear.value=c.near,f.fogFar.value=c.far):c.isFogExp2&&(f.fogDensity.value=c.density)}function r(f,c,g,_,y){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(f,c):c.isMeshToonMaterial?(s(f,c),p(f,c)):c.isMeshPhongMaterial?(s(f,c),d(f,c)):c.isMeshStandardMaterial?(s(f,c),h(f,c),c.isMeshPhysicalMaterial&&m(f,c,y)):c.isMeshMatcapMaterial?(s(f,c),v(f,c)):c.isMeshDepthMaterial?s(f,c):c.isMeshDistanceMaterial?(s(f,c),x(f,c)):c.isMeshNormalMaterial?s(f,c):c.isLineBasicMaterial?(o(f,c),c.isLineDashedMaterial&&a(f,c)):c.isPointsMaterial?l(f,c,g,_):c.isSpriteMaterial?u(f,c):c.isShadowMaterial?(f.color.value.copy(c.color),f.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(f,c){f.opacity.value=c.opacity,c.color&&f.diffuse.value.copy(c.color),c.emissive&&f.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(f.map.value=c.map,n(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.bumpMap&&(f.bumpMap.value=c.bumpMap,n(c.bumpMap,f.bumpMapTransform),f.bumpScale.value=c.bumpScale,c.side===$t&&(f.bumpScale.value*=-1)),c.normalMap&&(f.normalMap.value=c.normalMap,n(c.normalMap,f.normalMapTransform),f.normalScale.value.copy(c.normalScale),c.side===$t&&f.normalScale.value.negate()),c.displacementMap&&(f.displacementMap.value=c.displacementMap,n(c.displacementMap,f.displacementMapTransform),f.displacementScale.value=c.displacementScale,f.displacementBias.value=c.displacementBias),c.emissiveMap&&(f.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,f.emissiveMapTransform)),c.specularMap&&(f.specularMap.value=c.specularMap,n(c.specularMap,f.specularMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest);const g=e.get(c).envMap;if(g&&(f.envMap.value=g,f.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=c.reflectivity,f.ior.value=c.ior,f.refractionRatio.value=c.refractionRatio),c.lightMap){f.lightMap.value=c.lightMap;const _=t._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=c.lightMapIntensity*_,n(c.lightMap,f.lightMapTransform)}c.aoMap&&(f.aoMap.value=c.aoMap,f.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,f.aoMapTransform))}function o(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,c.map&&(f.map.value=c.map,n(c.map,f.mapTransform))}function a(f,c){f.dashSize.value=c.dashSize,f.totalSize.value=c.dashSize+c.gapSize,f.scale.value=c.scale}function l(f,c,g,_){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.size.value=c.size*g,f.scale.value=_*.5,c.map&&(f.map.value=c.map,n(c.map,f.uvTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function u(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.rotation.value=c.rotation,c.map&&(f.map.value=c.map,n(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function d(f,c){f.specular.value.copy(c.specular),f.shininess.value=Math.max(c.shininess,1e-4)}function p(f,c){c.gradientMap&&(f.gradientMap.value=c.gradientMap)}function h(f,c){f.metalness.value=c.metalness,c.metalnessMap&&(f.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,f.metalnessMapTransform)),f.roughness.value=c.roughness,c.roughnessMap&&(f.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,f.roughnessMapTransform)),e.get(c).envMap&&(f.envMapIntensity.value=c.envMapIntensity)}function m(f,c,g){f.ior.value=c.ior,c.sheen>0&&(f.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),f.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(f.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,f.sheenColorMapTransform)),c.sheenRoughnessMap&&(f.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,f.sheenRoughnessMapTransform))),c.clearcoat>0&&(f.clearcoat.value=c.clearcoat,f.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(f.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,f.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(f.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===$t&&f.clearcoatNormalScale.value.negate())),c.iridescence>0&&(f.iridescence.value=c.iridescence,f.iridescenceIOR.value=c.iridescenceIOR,f.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(f.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,f.iridescenceMapTransform)),c.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),c.transmission>0&&(f.transmission.value=c.transmission,f.transmissionSamplerMap.value=g.texture,f.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(f.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,f.transmissionMapTransform)),f.thickness.value=c.thickness,c.thicknessMap&&(f.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=c.attenuationDistance,f.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(f.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(f.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=c.specularIntensity,f.specularColor.value.copy(c.specularColor),c.specularColorMap&&(f.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,f.specularColorMapTransform)),c.specularIntensityMap&&(f.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,c){c.matcap&&(f.matcap.value=c.matcap)}function x(f,c){const g=e.get(c).light;f.referencePosition.value.setFromMatrixPosition(g.matrixWorld),f.nearDistance.value=g.shadow.camera.near,f.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,_){const y=_.program;i.uniformBlockBinding(g,y)}function u(g,_){let y=r[g.id];y===void 0&&(v(g),y=d(g),r[g.id]=y,g.addEventListener("dispose",f));const T=_.program;i.updateUBOMapping(g,T);const w=e.render.frame;s[g.id]!==w&&(h(g),s[g.id]=w)}function d(g){const _=p();g.__bindingPointIndex=_;const y=t.createBuffer(),T=g.__size,w=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,T,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function p(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const _=r[g.id],y=g.uniforms,T=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let w=0,C=y.length;w<C;w++){const I=y[w];if(m(I,w,T)===!0){const S=I.__offset,R=Array.isArray(I.value)?I.value:[I.value];let Z=0;for(let K=0;K<R.length;K++){const U=R[K],H=x(U);typeof U=="number"?(I.__data[0]=U,t.bufferSubData(t.UNIFORM_BUFFER,S+Z,I.__data)):U.isMatrix3?(I.__data[0]=U.elements[0],I.__data[1]=U.elements[1],I.__data[2]=U.elements[2],I.__data[3]=U.elements[0],I.__data[4]=U.elements[3],I.__data[5]=U.elements[4],I.__data[6]=U.elements[5],I.__data[7]=U.elements[0],I.__data[8]=U.elements[6],I.__data[9]=U.elements[7],I.__data[10]=U.elements[8],I.__data[11]=U.elements[0]):(U.toArray(I.__data,Z),Z+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,I.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,_,y){const T=g.value;if(y[_]===void 0){if(typeof T=="number")y[_]=T;else{const w=Array.isArray(T)?T:[T],C=[];for(let I=0;I<w.length;I++)C.push(w[I].clone());y[_]=C}return!0}else if(typeof T=="number"){if(y[_]!==T)return y[_]=T,!0}else{const w=Array.isArray(y[_])?y[_]:[y[_]],C=Array.isArray(T)?T:[T];for(let I=0;I<w.length;I++){const S=w[I];if(S.equals(C[I])===!1)return S.copy(C[I]),!0}}return!1}function v(g){const _=g.uniforms;let y=0;const T=16;let w=0;for(let C=0,I=_.length;C<I;C++){const S=_[C],R={boundary:0,storage:0},Z=Array.isArray(S.value)?S.value:[S.value];for(let K=0,U=Z.length;K<U;K++){const H=Z[K],G=x(H);R.boundary+=G.boundary,R.storage+=G.storage}if(S.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,C>0){w=y%T;const K=T-w;w!==0&&K-R.boundary<0&&(y+=T-w,S.__offset=y)}y+=R.storage}return w=y%T,w>0&&(y+=T-w),g.__size=y,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function f(g){const _=g.target;_.removeEventListener("dispose",f);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function c(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class E0{constructor(e={}){const{canvas:n=f1(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,f=null;const c=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=it,this._useLegacyLights=!1,this.toneMapping=Li,this.toneMappingExposure=1;const _=this;let y=!1,T=0,w=0,C=null,I=-1,S=null;const R=new st,Z=new st;let K=null;const U=new Ye(0);let H=0,G=n.width,Y=n.height,V=1,W=null,J=null;const $=new st(0,0,G,Y),b=new st(0,0,G,Y);let P=!1;const q=new Bf;let Q=!1,ie=!1,xe=null;const Me=new ot,ye=new Ze,Oe=new D,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return C===null?V:1}let N=i;function pt(E,O){for(let X=0;X<E.length;X++){const z=E[X],j=n.getContext(z,O);if(j!==null)return j}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${If}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",F,!1),n.addEventListener("webglcontextcreationerror",ee,!1),N===null){const O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&O.shift(),N=pt(O,E),N===null)throw pt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Re,Ue,be,Qe,pe,De,$e,ce,Ee,A,M,B,re,te,se,we,ae,k,Ce,Ae,Te,me,ge,fe;function _e(){Re=new RM(N),Ue=new MM(N,Re,e),Re.init(Ue),me=new dT(N,Re,Ue),be=new uT(N,Re,Ue),Qe=new PM(N),pe=new $E,De=new cT(N,Re,be,pe,Ue,me,Qe),$e=new TM(_),ce=new CM(_),Ee=new H1(N,Ue),ge=new yM(N,Re,Ee,Ue),A=new bM(N,Ee,Qe,ge),M=new NM(N,A,Ee,Qe),Ce=new IM(N,Ue,De),we=new EM(pe),B=new YE(_,$e,ce,Re,Ue,ge,we),re=new _T(_,pe),te=new ZE,se=new iT(Re,Ue),k=new xM(_,$e,ce,be,M,h,l),ae=new lT(_,M,Ue),fe=new vT(N,Qe,Ue,be),Ae=new SM(N,Re,Qe,Ue),Te=new LM(N,Re,Qe,Ue),Qe.programs=B.programs,_.capabilities=Ue,_.extensions=Re,_.properties=pe,_.renderLists=te,_.shadowMap=ae,_.state=be,_.info=Qe}_e();const L=new gT(_,N);this.xr=L,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=Re.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Re.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(G,Y,!1))},this.getSize=function(E){return E.set(G,Y)},this.setSize=function(E,O,X=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,Y=O,n.width=Math.floor(E*V),n.height=Math.floor(O*V),X===!0&&(n.style.width=E+"px",n.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(G*V,Y*V).floor()},this.setDrawingBufferSize=function(E,O,X){G=E,Y=O,V=X,n.width=Math.floor(E*X),n.height=Math.floor(O*X),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,O,X,z){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,O,X,z),be.viewport(R.copy($).multiplyScalar(V).floor())},this.getScissor=function(E){return E.copy(b)},this.setScissor=function(E,O,X,z){E.isVector4?b.set(E.x,E.y,E.z,E.w):b.set(E,O,X,z),be.scissor(Z.copy(b).multiplyScalar(V).floor())},this.getScissorTest=function(){return P},this.setScissorTest=function(E){be.setScissorTest(P=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){J=E},this.getClearColor=function(E){return E.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor.apply(k,arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha.apply(k,arguments)},this.clear=function(E=!0,O=!0,X=!0){let z=0;if(E){let j=!1;if(C!==null){const ve=C.texture.format;j=ve===n0||ve===t0||ve===e0}if(j){const ve=C.texture.type,Le=ve===Pi||ve===xi||ve===Nf||ve===sr||ve===Qg||ve===Jg,Be=k.getClearColor(),ze=k.getClearAlpha(),Xe=Be.r,Ie=Be.g,Ge=Be.b;Le?(m[0]=Xe,m[1]=Ie,m[2]=Ge,m[3]=ze,N.clearBufferuiv(N.COLOR,0,m)):(v[0]=Xe,v[1]=Ie,v[2]=Ge,v[3]=ze,N.clearBufferiv(N.COLOR,0,v))}else z|=N.COLOR_BUFFER_BIT}O&&(z|=N.DEPTH_BUFFER_BIT),X&&(z|=N.STENCIL_BUFFER_BIT),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",F,!1),n.removeEventListener("webglcontextcreationerror",ee,!1),te.dispose(),se.dispose(),pe.dispose(),$e.dispose(),ce.dispose(),M.dispose(),ge.dispose(),fe.dispose(),B.dispose(),L.dispose(),L.removeEventListener("sessionstart",Se),L.removeEventListener("sessionend",et),xe&&(xe.dispose(),xe=null),Je.stop()};function ne(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=Qe.autoReset,O=ae.enabled,X=ae.autoUpdate,z=ae.needsUpdate,j=ae.type;_e(),Qe.autoReset=E,ae.enabled=O,ae.autoUpdate=X,ae.needsUpdate=z,ae.type=j}function ee(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function le(E){const O=E.target;O.removeEventListener("dispose",le),He(O)}function He(E){ue(E),pe.remove(E)}function ue(E){const O=pe.get(E).programs;O!==void 0&&(O.forEach(function(X){B.releaseProgram(X)}),E.isShaderMaterial&&B.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,X,z,j,ve){O===null&&(O=ht);const Le=j.isMesh&&j.matrixWorld.determinant()<0,Be=Sr(E,O,X,z,j);be.setMaterial(z,Le);let ze=X.index,Xe=1;if(z.wireframe===!0){if(ze=A.getWireframeAttribute(X),ze===void 0)return;Xe=2}const Ie=X.drawRange,Ge=X.attributes.position;let ut=Ie.start*Xe,mt=(Ie.start+Ie.count)*Xe;ve!==null&&(ut=Math.max(ut,ve.start*Xe),mt=Math.min(mt,(ve.start+ve.count)*Xe)),ze!==null?(ut=Math.max(ut,0),mt=Math.min(mt,ze.count)):Ge!=null&&(ut=Math.max(ut,0),mt=Math.min(mt,Ge.count));const ln=mt-ut;if(ln<0||ln===1/0)return;ge.setup(j,z,Be,X,ze);let Xn,vt=Ae;if(ze!==null&&(Xn=Ee.get(ze),vt=Te,vt.setIndex(Xn)),j.isMesh)z.wireframe===!0?(be.setLineWidth(z.wireframeLinewidth*ke()),vt.setMode(N.LINES)):vt.setMode(N.TRIANGLES);else if(j.isLine){let qe=z.linewidth;qe===void 0&&(qe=1),be.setLineWidth(qe*ke()),j.isLineSegments?vt.setMode(N.LINES):j.isLineLoop?vt.setMode(N.LINE_LOOP):vt.setMode(N.LINE_STRIP)}else j.isPoints?vt.setMode(N.POINTS):j.isSprite&&vt.setMode(N.TRIANGLES);if(j.isInstancedMesh)vt.renderInstances(ut,ln,j.count);else if(X.isInstancedBufferGeometry){const qe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Il=Math.min(X.instanceCount,qe);vt.renderInstances(ut,ln,Il)}else vt.render(ut,ln)},this.compile=function(E,O){function X(z,j,ve){z.transparent===!0&&z.side===In&&z.forceSinglePass===!1?(z.side=$t,z.needsUpdate=!0,Pn(z,j,ve),z.side=Oi,z.needsUpdate=!0,Pn(z,j,ve),z.side=In):Pn(z,j,ve)}f=se.get(E),f.init(),g.push(f),E.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights(_._useLegacyLights),E.traverse(function(z){const j=z.material;if(j)if(Array.isArray(j))for(let ve=0;ve<j.length;ve++){const Le=j[ve];X(Le,E,z)}else X(j,E,z)}),g.pop(),f=null};let je=null;function _t(E){je&&je(E)}function Se(){Je.stop()}function et(){Je.start()}const Je=new _0;Je.setAnimationLoop(_t),typeof self!="undefined"&&Je.setContext(self),this.setAnimationLoop=function(E){je=E,L.setAnimationLoop(E),E===null?Je.stop():Je.start()},L.addEventListener("sessionstart",Se),L.addEventListener("sessionend",et),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(O),O=L.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,O,C),f=se.get(E,g.length),f.init(),g.push(f),Me.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(Me),ie=this.localClippingEnabled,Q=we.init(this.clippingPlanes,ie),x=te.get(E,c.length),x.init(),c.push(x),Gn(E,O,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(W,J),this.info.render.frame++,Q===!0&&we.beginShadows();const X=f.state.shadowsArray;if(ae.render(X,E,O),Q===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),k.render(x,E),f.setupLights(_._useLegacyLights),O.isArrayCamera){const z=O.cameras;for(let j=0,ve=z.length;j<ve;j++){const Le=z[j];Zt(x,E,Le,Le.viewport)}}else Zt(x,E,O);C!==null&&(De.updateMultisampleRenderTarget(C),De.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(_,E,O),ge.resetDefaultState(),I=-1,S=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function Gn(E,O,X,z){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){z&&Oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Me);const Le=M.update(E),Be=E.material;Be.visible&&x.push(E,Le,Be,X,Oe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const Le=M.update(E),Be=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Oe.copy(E.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Oe.copy(Le.boundingSphere.center)),Oe.applyMatrix4(E.matrixWorld).applyMatrix4(Me)),Array.isArray(Be)){const ze=Le.groups;for(let Xe=0,Ie=ze.length;Xe<Ie;Xe++){const Ge=ze[Xe],ut=Be[Ge.materialIndex];ut&&ut.visible&&x.push(E,Le,ut,X,Oe.z,Ge)}}else Be.visible&&x.push(E,Le,Be,X,Oe.z,null)}}const ve=E.children;for(let Le=0,Be=ve.length;Le<Be;Le++)Gn(ve[Le],O,X,z)}function Zt(E,O,X,z){const j=E.opaque,ve=E.transmissive,Le=E.transparent;f.setupLightsView(X),Q===!0&&we.setGlobalState(_.clippingPlanes,X),ve.length>0&&Qt(j,ve,O,X),z&&be.viewport(R.copy(z)),j.length>0&&an(j,O,X),ve.length>0&&an(ve,O,X),Le.length>0&&an(Le,O,X),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Qt(E,O,X,z){const j=Ue.isWebGL2;xe===null&&(xe=new pr(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?Oo:Pi,minFilter:Fo,samples:j?4:0})),_.getDrawingBufferSize(ye),j?xe.setSize(ye.x,ye.y):xe.setSize(pl(ye.x),pl(ye.y));const ve=_.getRenderTarget();_.setRenderTarget(xe),_.getClearColor(U),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear();const Le=_.toneMapping;_.toneMapping=Li,an(E,X,z),De.updateMultisampleRenderTarget(xe),De.updateRenderTargetMipmap(xe);let Be=!1;for(let ze=0,Xe=O.length;ze<Xe;ze++){const Ie=O[ze],Ge=Ie.object,ut=Ie.geometry,mt=Ie.material,ln=Ie.group;if(mt.side===In&&Ge.layers.test(z.layers)){const Xn=mt.side;mt.side=$t,mt.needsUpdate=!0,Vn(Ge,X,z,ut,mt,ln),mt.side=Xn,mt.needsUpdate=!0,Be=!0}}Be===!0&&(De.updateMultisampleRenderTarget(xe),De.updateRenderTargetMipmap(xe)),_.setRenderTarget(ve),_.setClearColor(U,H),_.toneMapping=Le}function an(E,O,X){const z=O.isScene===!0?O.overrideMaterial:null;for(let j=0,ve=E.length;j<ve;j++){const Le=E[j],Be=Le.object,ze=Le.geometry,Xe=z===null?Le.material:z,Ie=Le.group;Be.layers.test(X.layers)&&Vn(Be,O,X,ze,Xe,Ie)}}function Vn(E,O,X,z,j,ve){E.onBeforeRender(_,O,X,z,j,ve),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(_,O,X,z,E,ve),j.transparent===!0&&j.side===In&&j.forceSinglePass===!1?(j.side=$t,j.needsUpdate=!0,_.renderBufferDirect(X,O,z,j,E,ve),j.side=Oi,j.needsUpdate=!0,_.renderBufferDirect(X,O,z,j,E,ve),j.side=In):_.renderBufferDirect(X,O,z,j,E,ve),E.onAfterRender(_,O,X,z,j,ve)}function Pn(E,O,X){O.isScene!==!0&&(O=ht);const z=pe.get(E),j=f.state.lights,ve=f.state.shadowsArray,Le=j.state.version,Be=B.getParameters(E,j.state,ve,O,X),ze=B.getProgramCacheKey(Be);let Xe=z.programs;z.environment=E.isMeshStandardMaterial?O.environment:null,z.fog=O.fog,z.envMap=(E.isMeshStandardMaterial?ce:$e).get(E.envMap||z.environment),Xe===void 0&&(E.addEventListener("dispose",le),Xe=new Map,z.programs=Xe);let Ie=Xe.get(ze);if(Ie!==void 0){if(z.currentProgram===Ie&&z.lightsStateVersion===Le)return Wn(E,Be),Ie}else Be.uniforms=B.getUniforms(E),E.onBuild(X,Be,_),E.onBeforeCompile(Be,_),Ie=B.acquireProgram(Be,ze),Xe.set(ze,Ie),z.uniforms=Be.uniforms;const Ge=z.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ge.clippingPlanes=we.uniform),Wn(E,Be),z.needsLights=jo(E),z.lightsStateVersion=Le,z.needsLights&&(Ge.ambientLightColor.value=j.state.ambient,Ge.lightProbe.value=j.state.probe,Ge.directionalLights.value=j.state.directional,Ge.directionalLightShadows.value=j.state.directionalShadow,Ge.spotLights.value=j.state.spot,Ge.spotLightShadows.value=j.state.spotShadow,Ge.rectAreaLights.value=j.state.rectArea,Ge.ltc_1.value=j.state.rectAreaLTC1,Ge.ltc_2.value=j.state.rectAreaLTC2,Ge.pointLights.value=j.state.point,Ge.pointLightShadows.value=j.state.pointShadow,Ge.hemisphereLights.value=j.state.hemi,Ge.directionalShadowMap.value=j.state.directionalShadowMap,Ge.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ge.spotShadowMap.value=j.state.spotShadowMap,Ge.spotLightMatrix.value=j.state.spotLightMatrix,Ge.spotLightMap.value=j.state.spotLightMap,Ge.pointShadowMap.value=j.state.pointShadowMap,Ge.pointShadowMatrix.value=j.state.pointShadowMatrix);const ut=Ie.getUniforms(),mt=Ha.seqWithValue(ut.seq,Ge);return z.currentProgram=Ie,z.uniformsList=mt,Ie}function Wn(E,O){const X=pe.get(E);X.outputColorSpace=O.outputColorSpace,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Sr(E,O,X,z,j){O.isScene!==!0&&(O=ht),De.resetTextureUnits();const ve=O.fog,Le=z.isMeshStandardMaterial?O.environment:null,Be=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:kn,ze=(z.isMeshStandardMaterial?ce:$e).get(z.envMap||Le),Xe=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ie=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ge=!!X.morphAttributes.position,ut=!!X.morphAttributes.normal,mt=!!X.morphAttributes.color;let ln=Li;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ln=_.toneMapping);const Xn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,vt=Xn!==void 0?Xn.length:0,qe=pe.get(z),Il=f.state.lights;if(Q===!0&&(ie===!0||E!==S)){const Jt=E===S&&z.id===I;we.setState(z,E,Jt)}let xt=!1;z.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Il.state.version||qe.outputColorSpace!==Be||j.isInstancedMesh&&qe.instancing===!1||!j.isInstancedMesh&&qe.instancing===!0||j.isSkinnedMesh&&qe.skinning===!1||!j.isSkinnedMesh&&qe.skinning===!0||j.isInstancedMesh&&qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qe.instancingColor===!1&&j.instanceColor!==null||qe.envMap!==ze||z.fog===!0&&qe.fog!==ve||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==we.numPlanes||qe.numIntersection!==we.numIntersection)||qe.vertexAlphas!==Xe||qe.vertexTangents!==Ie||qe.morphTargets!==Ge||qe.morphNormals!==ut||qe.morphColors!==mt||qe.toneMapping!==ln||Ue.isWebGL2===!0&&qe.morphTargetsCount!==vt)&&(xt=!0):(xt=!0,qe.__version=z.version);let Gi=qe.currentProgram;xt===!0&&(Gi=Pn(z,O,j));let Wf=!1,Ds=!1,Nl=!1;const Bt=Gi.getUniforms(),Vi=qe.uniforms;if(be.useProgram(Gi.program)&&(Wf=!0,Ds=!0,Nl=!0),z.id!==I&&(I=z.id,Ds=!0),Wf||S!==E){Bt.setValue(N,"projectionMatrix",E.projectionMatrix),Bt.setValue(N,"viewMatrix",E.matrixWorldInverse);const Jt=Bt.map.cameraPosition;Jt!==void 0&&Jt.setValue(N,Oe.setFromMatrixPosition(E.matrixWorld)),Ue.logarithmicDepthBuffer&&Bt.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Bt.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Ds=!0,Nl=!0)}if(j.isSkinnedMesh){Bt.setOptional(N,j,"bindMatrix"),Bt.setOptional(N,j,"bindMatrixInverse");const Jt=j.skeleton;Jt&&(Ue.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),Bt.setValue(N,"boneTexture",Jt.boneTexture,De),Bt.setValue(N,"boneTextureSize",Jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Fl=X.morphAttributes;if((Fl.position!==void 0||Fl.normal!==void 0||Fl.color!==void 0&&Ue.isWebGL2===!0)&&Ce.update(j,X,Gi),(Ds||qe.receiveShadow!==j.receiveShadow)&&(qe.receiveShadow=j.receiveShadow,Bt.setValue(N,"receiveShadow",j.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Vi.envMap.value=ze,Vi.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Ds&&(Bt.setValue(N,"toneMappingExposure",_.toneMappingExposure),qe.needsLights&&Hi(Vi,Nl),ve&&z.fog===!0&&re.refreshFogUniforms(Vi,ve),re.refreshMaterialUniforms(Vi,z,V,Y,xe),Ha.upload(N,qe.uniformsList,Vi,De)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ha.upload(N,qe.uniformsList,Vi,De),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Bt.setValue(N,"center",j.center),Bt.setValue(N,"modelViewMatrix",j.modelViewMatrix),Bt.setValue(N,"normalMatrix",j.normalMatrix),Bt.setValue(N,"modelMatrix",j.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Jt=z.uniformsGroups;for(let Ol=0,L0=Jt.length;Ol<L0;Ol++)if(Ue.isWebGL2){const Xf=Jt[Ol];fe.update(Xf,Gi),fe.bind(Xf,Gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gi}function Hi(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function jo(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,O,X){pe.get(E.texture).__webglTexture=O,pe.get(E.depthTexture).__webglTexture=X;const z=pe.get(E);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=X===void 0,z.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,O){const X=pe.get(E);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,X=0){C=E,T=O,w=X;let z=!0,j=null,ve=!1,Le=!1;if(E){const ze=pe.get(E);ze.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(N.FRAMEBUFFER,null),z=!1):ze.__webglFramebuffer===void 0?De.setupRenderTarget(E):ze.__hasExternalTextures&&De.rebindTextures(E,pe.get(E.texture).__webglTexture,pe.get(E.depthTexture).__webglTexture);const Xe=E.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Le=!0);const Ie=pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ie[O])?j=Ie[O][X]:j=Ie[O],ve=!0):Ue.isWebGL2&&E.samples>0&&De.useMultisampledRTT(E)===!1?j=pe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?j=Ie[X]:j=Ie,R.copy(E.viewport),Z.copy(E.scissor),K=E.scissorTest}else R.copy($).multiplyScalar(V).floor(),Z.copy(b).multiplyScalar(V).floor(),K=P;if(be.bindFramebuffer(N.FRAMEBUFFER,j)&&Ue.drawBuffers&&z&&be.drawBuffers(E,j),be.viewport(R),be.scissor(Z),be.setScissorTest(K),ve){const ze=pe.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,ze.__webglTexture,X)}else if(Le){const ze=pe.get(E.texture),Xe=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ze.__webglTexture,X||0,Xe)}I=-1},this.readRenderTargetPixels=function(E,O,X,z,j,ve,Le){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Le!==void 0&&(Be=Be[Le]),Be){be.bindFramebuffer(N.FRAMEBUFFER,Be);try{const ze=E.texture,Xe=ze.format,Ie=ze.type;if(Xe!==Cn&&me.convert(Xe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Ie===Oo&&(Re.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&Re.has("EXT_color_buffer_float"));if(Ie!==Pi&&me.convert(Ie)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===yi&&(Ue.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-z&&X>=0&&X<=E.height-j&&N.readPixels(O,X,z,j,me.convert(Xe),me.convert(Ie),ve)}finally{const ze=C!==null?pe.get(C).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(E,O,X=0){const z=Math.pow(2,-X),j=Math.floor(O.image.width*z),ve=Math.floor(O.image.height*z);De.setTexture2D(O,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,E.x,E.y,j,ve),be.unbindTexture()},this.copyTextureToTexture=function(E,O,X,z=0){const j=O.image.width,ve=O.image.height,Le=me.convert(X.format),Be=me.convert(X.type);De.setTexture2D(X,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment),O.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,z,E.x,E.y,j,ve,Le,Be,O.image.data):O.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,z,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,Le,O.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,z,E.x,E.y,Le,Be,O.image),z===0&&X.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(E,O,X,z,j=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=E.max.x-E.min.x+1,Le=E.max.y-E.min.y+1,Be=E.max.z-E.min.z+1,ze=me.convert(z.format),Xe=me.convert(z.type);let Ie;if(z.isData3DTexture)De.setTexture3D(z,0),Ie=N.TEXTURE_3D;else if(z.isDataArrayTexture)De.setTexture2DArray(z,0),Ie=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const Ge=N.getParameter(N.UNPACK_ROW_LENGTH),ut=N.getParameter(N.UNPACK_IMAGE_HEIGHT),mt=N.getParameter(N.UNPACK_SKIP_PIXELS),ln=N.getParameter(N.UNPACK_SKIP_ROWS),Xn=N.getParameter(N.UNPACK_SKIP_IMAGES),vt=X.isCompressedTexture?X.mipmaps[0]:X.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,vt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,vt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,E.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,E.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,E.min.z),X.isDataTexture||X.isData3DTexture?N.texSubImage3D(Ie,j,O.x,O.y,O.z,ve,Le,Be,ze,Xe,vt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ie,j,O.x,O.y,O.z,ve,Le,Be,ze,vt.data)):N.texSubImage3D(Ie,j,O.x,O.y,O.z,ve,Le,Be,ze,Xe,vt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ge),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ut),N.pixelStorei(N.UNPACK_SKIP_PIXELS,mt),N.pixelStorei(N.UNPACK_SKIP_ROWS,ln),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Xn),j===0&&z.generateMipmaps&&N.generateMipmap(Ie),be.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?De.setTextureCube(E,0):E.isData3DTexture?De.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?De.setTexture2DArray(E,0):De.setTexture2D(E,0),be.unbindTexture()},this.resetState=function(){T=0,w=0,C=null,be.reset(),ge.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===it?ar:i0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ar?it:kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class xT extends E0{}xT.prototype.isWebGL1Renderer=!0;class Hf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=n}clone(){return new Hf(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class yT extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Rp extends sn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const zr=new ot,bp=new ot,wa=[],Lp=new yr,ST=new ot,$s=new bn,Ks=new Rs;class Pp extends bn{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Rp(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,ST)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new yr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,zr),Lp.copy(e.boundingBox).applyMatrix4(zr),this.boundingBox.union(Lp)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,zr),Ks.copy(e.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(Ks)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}raycast(e,n){const i=this.matrixWorld,r=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(i),e.ray.intersectsSphere(Ks)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,zr),bp.multiplyMatrices(i,zr),$s.matrixWorld=bp,$s.raycast(e,wa);for(let o=0,a=wa.length;o<a;o++){const l=wa[o];l.instanceId=s,l.object=this,n.push(l)}wa.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Rp(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ic extends bs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dp=new ot,Nc=new u0,Aa=new Rs,Ca=new D;class Up extends Ct{constructor(e=new Ln,n=new Ic){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(r),Aa.radius+=s,e.ray.intersectsSphere(Aa)===!1)return;Dp.copy(r).invert(),Nc.copy(e.ray).applyMatrix4(Dp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,p=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=h,x=m;v<x;v++){const f=u.getX(v);Ca.fromBufferAttribute(p,f),Ip(Ca,f,l,r,e,n,this)}}else{const h=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let v=h,x=m;v<x;v++)Ca.fromBufferAttribute(p,v),Ip(Ca,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ip(t,e,n,i,r,s,o){const a=Nc.distanceSqToPoint(t);if(a<n){const l=new D;Nc.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class MT extends Kt{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ET extends bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=r0,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gf extends Ct{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Fu=new ot,Np=new D,Fp=new D;class T0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bf,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Np.setFromMatrixPosition(e.matrixWorld),n.position.copy(Np),Fp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Fp),n.updateMatrixWorld(),Fu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Op=new ot,Zs=new D,Ou=new D;class TT extends T0{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Zs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Zs),Ou.copy(i.position),Ou.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Ou),i.updateMatrixWorld(),r.makeTranslation(-Zs.x,-Zs.y,-Zs.z),Op.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Op)}}class Bp extends Gf{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new TT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wT extends T0{constructor(){super(new v0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class AT extends Gf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new wT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class CT extends Gf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class RT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=zp();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function zp(){return(typeof performance=="undefined"?Date:performance).now()}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:If}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=If);const Qs=new D;function cn(t,e,n,i,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;Qs.copy(e),Qs[i]=0,Qs.normalize();const u=.5*o/(o+a),d=1-Qs.angleTo(t)/l;return Math.sign(Qs[n])===1?d*u:a/(o+a)+u+u*(1-d)}class bT extends Ls{constructor(e=1,n=1,i=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,n/2,i/2,s),super(1,1,1,r,r,r),r===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new D,l=new D,u=new D(e,n,i).divideScalar(2).subScalar(s),d=this.attributes.position.array,p=this.attributes.normal.array,h=this.attributes.uv.array,m=d.length/6,v=new D,x=.5/r;for(let f=0,c=0;f<d.length;f+=3,c+=2)switch(a.fromArray(d,f),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),d[f+0]=u.x*Math.sign(a.x)+l.x*s,d[f+1]=u.y*Math.sign(a.y)+l.y*s,d[f+2]=u.z*Math.sign(a.z)+l.z*s,p[f+0]=l.x,p[f+1]=l.y,p[f+2]=l.z,Math.floor(f/m)){case 0:v.set(1,0,0),h[c+0]=cn(v,l,"z","y",s,i),h[c+1]=1-cn(v,l,"y","z",s,n);break;case 1:v.set(-1,0,0),h[c+0]=1-cn(v,l,"z","y",s,i),h[c+1]=1-cn(v,l,"y","z",s,n);break;case 2:v.set(0,1,0),h[c+0]=1-cn(v,l,"x","z",s,e),h[c+1]=cn(v,l,"z","x",s,i);break;case 3:v.set(0,-1,0),h[c+0]=1-cn(v,l,"x","z",s,e),h[c+1]=1-cn(v,l,"z","x",s,i);break;case 4:v.set(0,0,1),h[c+0]=1-cn(v,l,"x","y",s,e),h[c+1]=1-cn(v,l,"y","x",s,n);break;case 5:v.set(0,0,-1),h[c+0]=cn(v,l,"x","y",s,e),h[c+1]=1-cn(v,l,"y","x",s,n);break}}}const Ga=Math.PI*2,Va=.18,kp=.34,Vf=t=>Math.min(1,Math.max(0,t)),Hp=t=>{const e=Vf(t);return e*e*(3-2*e)},Gp=t=>{const e=Vf(t);return e*e*e*(e*(e*6-15)+10)},Dn=(t,e,n)=>t+(e-t)*n,Ra=(t,e,n)=>{let i=Math.imul(t+1,521288629)^Math.imul(e+1,1597334677)^Math.imul(n+1,1821285621);return i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),((i^i>>>15)>>>0)/4294967296},Vp=(t,e,n)=>{const i=t.x-e,r=t.z-Va;return Math.hypot(i,r)>.04?Math.atan2(i,r):n},Wp=(t,e,n,i,r=0)=>{const s=Ra(n,i,3)*Ga-Math.PI,o=Vp(t,r,s),a=Vp(e,r,o),l=Math.max(kp,Math.hypot(t.x-r,t.z-Va)),u=Math.max(kp,Math.hypot(e.x-r,e.z-Va));return{start:{...t},target:{...e},direction:"counterclockwise",axisX:r,axisZ:Va,startY:t.y,targetY:e.y,startAngle:o,angleDelta:Ga+a-o,startOrbitRadius:l,targetOrbitRadius:u,referenceRadius:Math.max(l,u),flightAmplitude:Dn(.2,.38,Ra(n,i,0)),flightFrequency:Dn(1.05,2.05,Ra(n,i,1)),flightPhase:Ra(n,i,2)*Ga}},Xp=(t,e,n=1,i=1)=>{if(e<=0)return{...t.start};if(e>=1)return{...t.target};const r=Vf(e),s=Gp(r),o=Gp((r-.34)/.32),a=t.startAngle+t.angleDelta*s,l=Dn(t.startOrbitRadius,t.targetOrbitRadius,o)*i,u=Math.pow(Math.sin(Math.PI*r),1.25),d=t.flightPhase+r*Ga*t.flightFrequency,p=t.flightAmplitude*u*(.58+Math.sin(d*.73+.4)*.42),h=t.flightAmplitude*u*Math.sin(d)*.7,m=t.flightAmplitude*u*Math.cos(d*1.27+.9)*.88,v=Math.sin(a),x=Math.cos(a),f=Math.cos(a),c=-Math.sin(a),g=l+p*n,_={x:t.axisX+v*g+f*h*n,y:Dn(t.startY,t.targetY,o)+m*n,z:t.axisZ+x*g+c*h*n},y=Hp(r/.14),T=Hp((1-r)/.14),w=Math.min(y,T),C={x:Dn(t.start.x,t.target.x,s),y:Dn(t.start.y,t.target.y,s),z:Dn(t.start.z,t.target.z,s)};return{x:Dn(C.x,_.x,w),y:Dn(C.y,_.y,w),z:Dn(C.z,_.z,w)}};var Ul={exports:{}},Xo={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LT=Ne.exports,w0=60103;Xo.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var jp=Symbol.for;w0=jp("react.element"),Xo.Fragment=jp("react.fragment")}var PT=LT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DT=Object.prototype.hasOwnProperty,UT={key:!0,ref:!0,__self:!0,__source:!0};function A0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)DT.call(e,i)&&!UT.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:w0,type:t,key:s,ref:o,props:r,_owner:PT.current}}Xo.jsx=A0;Xo.jsxs=A0;Ul.exports=Xo;const Pe=Ul.exports.jsx,lt=Ul.exports.jsxs,qp=Ul.exports.Fragment,ba=84,Bu=.255,Zr=.39,Yp=.96,IT=3,fn=.28,$p=.12,Kp=.32,NT={0:["01110","11011","11011","11011","11011","11011","01110"],1:["00110","01110","00110","00110","00110","00110","11111"],2:["01110","11011","00011","00110","01100","11000","11111"],3:["11110","00011","00011","01110","00011","00011","11110"],4:["11011","11011","11011","11111","00011","00011","00011"],5:["11111","11000","11000","11110","00011","00011","11110"],6:["01110","11000","11000","11110","11011","11011","01110"],7:["11111","00011","00110","00110","01100","01100","01100"],8:["01110","11011","11011","01110","11011","11011","01110"],9:["01110","11011","11011","01111","00011","00011","01110"]},FT={A:["01110","11011","11011","11111","11011","11011","11011"],B:["11110","11011","11011","11110","11011","11011","11110"],C:["01111","11000","11000","11000","11000","11000","01111"],D:["11110","11011","11011","11011","11011","11011","11110"],E:["11111","11000","11000","11110","11000","11000","11111"],F:["11111","11000","11000","11110","11000","11000","11000"],G:["01111","11000","11000","11011","11011","11011","01110"],H:["11011","11011","11011","11111","11011","11011","11011"],I:["11111","00110","00110","00110","00110","00110","11111"],J:["00111","00011","00011","00011","11011","11011","01110"],K:["11011","11011","11110","11100","11110","11011","11011"],L:["11000","11000","11000","11000","11000","11000","11111"],M:["11011","11111","11111","11011","11011","11011","11011"],N:["11011","11111","11111","11111","11111","11011","11011"],O:["01110","11011","11011","11011","11011","11011","01110"],P:["11110","11011","11011","11110","11000","11000","11000"],Q:["01110","11011","11011","11011","11111","01110","00011"],R:["11110","11011","11011","11110","11100","11011","11011"],S:["01111","11000","11000","01110","00011","00011","11110"],T:["11111","00110","00110","00110","00110","00110","00110"],U:["11011","11011","11011","11011","11011","11011","01110"],V:["11011","11011","11011","11011","11011","01110","01110"],W:["11011","11011","11011","11111","11111","11111","11011"],X:["11011","11011","01110","00110","01110","11011","11011"],Y:["11011","11011","01110","00110","00110","00110","00110"],Z:["11111","00011","00110","00110","01100","11000","11111"]},So={...NT,...FT},OT=t=>()=>{let e=t+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296},C0=OT(5526081),ct=(t,e)=>t+C0()*(e-t),BT=t=>{const e=t.toUpperCase().split("").filter(o=>So[o]),n=Zr*4,i=e.length>1?Zr*1.15:0,r=e.length*n+(e.length-1)*i,s=[];return e.forEach((o,a)=>{var d;const l=(d=So[o])!=null?d:So[0],u=-r/2+n/2+a*(n+i);l.forEach((p,h)=>{[...p].forEach((m,v)=>{m==="1"&&s.push(new D(u+(v-2)*Zr,(3-h)*Zr,.18))})})}),s},Zp=t=>{const e=t.toUpperCase().split("").filter(s=>So[s]);if(e.length<=1)return[0];const n=Zr*4,i=Zr*1.15,r=e.length*n+(e.length-1)*i;return e.map((s,o)=>-r/2+n/2+o*(n+i))},zu=(t,e)=>{var n;return e.reduce((i,r)=>Math.abs(t-r)<Math.abs(t-i)?r:i,(n=e[0])!=null?n:0)},zT=()=>new D(ct(-6.2,6.2),ct(-3.8,3.8),ct(-1.8,.6)),kT=()=>new Bi({uniforms:{uColor:{value:new Ye(1660299)},uOpacity:{value:.18}},vertexShader:`
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
    `,transparent:!0,blending:us,depthWrite:!1,side:In}),HT=({glyph:t,isRunning:e,isComplete:n,ariaLabel:i,effects:r})=>{const s=Ne.exports.useRef(null),o=Ne.exports.useRef(null),[a,l]=Ne.exports.useState(!0);return Ne.exports.useEffect(()=>{const u=s.current;if(!u)return;const d=window.matchMedia("(prefers-reduced-motion: reduce)").matches,p=new yT;p.background=new Ye(66308),p.fog=new Hf(66308,.022);const h=new nn(30,1,.1,100);h.position.set(0,0,10.5),h.lookAt(0,0,0);let m;try{m=new E0({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{l(!1);return}l(!0),m.setPixelRatio(Math.min((window.devicePixelRatio||1)*r.pixelDensity,3)),m.setClearColor(66308,1),m.toneMapping=$g,m.toneMappingExposure=1.38,m.outputColorSpace=it,m.domElement.className="tra-countdown-canvas",u.appendChild(m.domElement);const v=new ir,x=new ir,f=new ir;v.add(f,x),p.add(v);const c=new CT(4287622,1.7);p.add(c);const g=new AT(16055295,3.9);g.position.set(1.5,3.5,7),p.add(g);const _=new Bp(7911656,13,11,2);_.position.set(0,0,2.5),p.add(_);const y=new Bp(736625,18,10,2);y.position.set(0,-1.2,-1.8),p.add(y);const T=new bT(Bu,Bu,Bu,5,.045),w=new ET({color:16054522,roughness:.52,metalness:.02,emissive:10996961,emissiveIntensity:.36,vertexColors:!0,toneMapped:!1}),C=new Pp(T,w,ba);C.instanceMatrix.setUsage(Vh),x.add(C);const I=Array.from({length:IT},(fe,_e)=>new Of({color:_e===0?11131124:6069188,transparent:!0,opacity:0,blending:us,depthWrite:!1,toneMapped:!1})),S=I.map(fe=>{const _e=new Pp(T,fe,ba);return _e.instanceMatrix.setUsage(Vh),_e.renderOrder=-1,x.add(_e),_e}),R=document.createElement("canvas");R.width=64,R.height=64;const Z=R.getContext("2d");if(Z){const fe=Z.createRadialGradient(32,32,2,32,32,32);fe.addColorStop(0,"rgba(205, 236, 255, 0.72)"),fe.addColorStop(.24,"rgba(116, 186, 235, 0.28)"),fe.addColorStop(1,"rgba(58, 132, 194, 0)"),Z.fillStyle=fe,Z.fillRect(0,0,64,64)}const K=new MT(R),U=new Float32Array(ba*3),H=new Ln;H.setAttribute("position",new sn(U,3));const G=new Ic({color:10474486,map:K,size:.78,transparent:!0,opacity:.14,alphaTest:.005,blending:us,depthWrite:!1,sizeAttenuation:!0,toneMapped:!1}),Y=new Up(H,G);Y.renderOrder=-1,x.add(Y);const V=Array.from({length:ba},(fe,_e)=>{const L=zT(),ne=new ur(ct(-fn,fn),ct(-fn,fn),ct(-fn,fn)),F=new ri().setFromEuler(ne),ee=ct(.92,1),le=new Ye().setRGB(ee,ee,ee);return C.setColorAt(_e,le),{position:L,quaternion:F,scale:ct(.18,.8),fromPosition:L.clone(),fromQuaternion:F.clone(),fromScale:0,targetPosition:L.clone(),targetQuaternion:new ri,targetScale:0,trajectory:Wp(L,L,_e,0,0),spinTurns:ct($p,Kp),delay:_e%12*.014,brightness:ee,seed:C0()*Math.PI*2}});C.instanceColor&&(C.instanceColor.needsUpdate=!0);const W=new Ct,J=new Ye,$=new D(0,0,1),b=new D,P=new ri,q=new ri,Q=new RT;let ie=0,xe=d?.18:Yp,Me=xe,ye="intro",Oe="",ht=0,ke=0,N=e,pt=n,Re=0,Ue=0,be=0,Qe=0,pe={...r},De=0;const $e=fe=>{const _e=fe.toUpperCase().split("").filter(Se=>So[Se]).join("").slice(0,2);if(_e===Oe&&Oe!=="")return;const L=_e||"0",ne=BT(L),F=Zp(L),ee=Zp(Oe||L),le=Oe==="";ie=Q.getElapsedTime(),ye=le?"intro":"morph",ht+=1,xe=le?.72:_e.length>1?1.18:Yp,Me=d?.18:xe/pe.speed/pe.slowMotion;const He=new Map,ue=new Map,je=new Set(V.map((Se,et)=>et));[...ne].sort((Se,et)=>et.y-Se.y||Se.x-et.x).forEach(Se=>{const et=zu(Se.x,F);let Je=-1,Gn=Number.POSITIVE_INFINITY;je.forEach(Zt=>{const Qt=V[Zt],an=Math.abs(Qt.position.y-Se.y),Vn=Math.abs(Qt.position.x-Se.x),Pn=Qt.scale<.2?1.4:0,Wn=zu(Qt.position.x,ee),Sr=Math.abs(Wn-et)>.5?3.4:0,Hi=Math.abs(Math.sin(Zt*12.9898+ht*4.1414))*1.05*pe.randomness,jo=an*3.2+Vn*.24+Pn+Sr+Hi;jo<Gn&&(Gn=jo,Je=Zt)}),Je>=0&&(He.set(Je,Se),ue.set(Je,et),je.delete(Je))}),V.forEach((Se,et)=>{var Zt;Se.fromPosition.copy(Se.position),Se.fromQuaternion.copy(Se.quaternion),Se.fromScale=Se.scale;const Je=He.get(et);Je?(Se.targetPosition.copy(Je),Se.targetQuaternion.setFromEuler(new ur(ct(-.1,.1),ct(-.1,.1),ct(-.075,.075))),Se.targetScale=1):(Se.targetPosition.set(Se.fromPosition.x,Se.fromPosition.y,.18),Se.targetQuaternion.setFromEuler(new ur(ct(-fn,fn),ct(-fn,fn),ct(-fn,fn))),Se.targetScale=0);const Gn=(Zt=ue.get(et))!=null?Zt:zu(Se.fromPosition.x,ee);Se.trajectory=Wp(Se.fromPosition,Se.targetPosition,et,ht,Gn),Se.spinTurns=ct($p,Kp),Se.delay=Math.min(.22,ct(0,.13)*pe.stagger)}),Oe=_e},ce=fe=>{N=fe},Ee=fe=>{pt=fe},A=fe=>{const _e=fe.pixelDensity!==pe.pixelDensity,L=fe.speed!==pe.speed||fe.slowMotion!==pe.slowMotion,ne=Q.getElapsedTime(),F=Me>0?Math.min(1,Math.max(0,(ne-ie)/Me)):1;pe={...fe},_e&&(m.setPixelRatio(Math.min((window.devicePixelRatio||1)*pe.pixelDensity,3)),m.setSize(Math.max(1,u.clientWidth),Math.max(1,u.clientHeight),!1)),L&&!d&&(Me=xe/pe.speed/pe.slowMotion,ie=ne-F*Me)};o.current={setGlyph:$e,setRunning:ce,setComplete:Ee,setEffects:A};const M=(fe,_e,L,ne,F)=>{const ee=new Float32Array(fe*3);for(let je=0;je<fe;je+=1)ee[je*3]=ct(-8.6,8.6),ee[je*3+1]=ct(-2.6,4.4),ee[je*3+2]=ct(ne,F);const le=new Ln;le.setAttribute("position",new sn(ee,3));const He=new Ic({color:10865122,size:_e,transparent:!0,opacity:L,sizeAttenuation:!0,depthWrite:!1,blending:us}),ue=new Up(le,He);return p.add(ue),{points:ue,geometry:le,material:He,speed:ct(.015,.035)}},B=M(280,.038,.46,-4.5,-1.8),re=M(84,.066,.62,-1.6,-.6),te=new Ln,se=7.2,we=.3;te.setAttribute("position",new oi([0,0,0,se,-we,0,se,we,0],3)),te.setAttribute("uv",new oi([0,.5,1,0,1,1],2));const ae=kT();for(let fe=0;fe<18;fe+=1){const _e=new bn(te,ae);_e.rotation.z=fe/18*Math.PI*2+.06,_e.position.z=-.62,_e.scale.setScalar(ct(.82,1.12)),f.add(_e)}const k=()=>{const fe=Math.max(1,u.clientWidth),_e=Math.max(1,u.clientHeight),L=fe/_e;h.aspect=L,h.fov=L<.82?38:30,h.position.z=L<.82?11.8:10.5,v.scale.setScalar(L<.82?.76:.66),h.updateProjectionMatrix(),m.setSize(fe,_e,!1)},Ce=fe=>{const _e=u.getBoundingClientRect();Re=((fe.clientX-_e.left)/_e.width-.5)*2,Ue=((fe.clientY-_e.top)/_e.height-.5)*2},Ae=()=>{Re=0,Ue=0};k(),window.addEventListener("resize",k),u.addEventListener("pointermove",Ce),u.addEventListener("pointerleave",Ae);let Te;"ResizeObserver"in window&&(Te=new ResizeObserver(k),Te.observe(u));const me=(fe,_e,L)=>{const ne=fe.geometry.getAttribute("position");for(let F=0;F<ne.count;F+=1){const ee=ne.getY(F)-_e*fe.speed*L;ne.setY(F,ee<-3.1?4.5:ee)}ne.needsUpdate=!0},ge=()=>{ke=window.requestAnimationFrame(ge);const fe=Math.min(Q.getDelta(),.05),_e=Q.elapsedTime;De+=fe*pe.slowMotion;const L=(d?.18:N?1:.42)*pe.slowMotion;be+=(Re-be)*.035,Qe+=(Ue-Qe)*.035,v.rotation.y+=(be*.045-v.rotation.y)*.035,v.rotation.x+=(-Qe*.028-v.rotation.x)*.035,v.position.x+=(be*.08-v.position.x)*.035,v.position.y+=(-Qe*.055-v.position.y)*.035,f.rotation.z+=fe*.008*L;const ne=Math.min(1,Math.max(0,(_e-ie)/Me)),F=1-Math.pow(1-ne,4),ee=1-F,le=ye==="morph"?Math.sin(Math.PI*ne):0,He=pt&&!d?1+Math.sin(De*3.2)*.06:1;V.forEach((ue,je)=>{let _t=0;if(ye==="intro"||d)ue.position.lerpVectors(ue.fromPosition,ue.targetPosition,F),ue.quaternion.slerpQuaternions(ue.fromQuaternion,ue.targetQuaternion,F),ue.scale=ui.lerp(ue.fromScale,ue.targetScale,F);else{_t=Math.min(1,Math.max(0,(ne-ue.delay)/(1-ue.delay)));const an=Xp(ue.trajectory,_t,pe.randomness,pe.depth);ue.position.set(an.x,an.y,an.z);const Vn=ui.smoothstep(_t,0,.14),Pn=1-ui.smoothstep(_t,.84,1),Wn=Math.min(Vn,Pn);b.set(ue.position.x-ue.trajectory.axisX,0,ue.position.z-ue.trajectory.axisZ),b.lengthSq()<1e-4?b.copy($):b.normalize(),P.setFromUnitVectors($,b),q.setFromAxisAngle(b,Math.PI*2*ue.spinTurns*pe.speed*(1-Math.pow(1-_t,3))),P.multiply(q),ue.quaternion.slerpQuaternions(ue.fromQuaternion,P,Wn),_t>.82&&ue.quaternion.slerp(ue.targetQuaternion,ui.smoothstep(_t,.82,1));const Sr=ui.smoothstep(_t,ue.targetScale>0?.68:.58,1);ue.scale=ui.lerp(ue.fromScale,ue.targetScale,Sr)}const Se=ye==="morph"?0:ee*(d?.02:.06);ue.position.x+=Math.sin(De*(1.2+ue.seed)+ue.seed)*Se,ue.position.y+=Math.cos(De*(1.5+ue.seed)+ue.seed)*Se,ue.position.z+=Math.sin(De*1.4+ue.seed)*Se*.6;const et=ue.scale*(ue.targetScale>0?He:1);W.position.copy(ue.position),W.quaternion.copy(ue.quaternion),W.scale.setScalar(et),W.updateMatrix(),C.setMatrixAt(je,W.matrix),S.forEach((an,Vn)=>{const Pn=(Vn+1)*(.026+pe.trail*.032),Wn=Math.max(0,_t-Pn);if(ye==="morph"&&!d&&pe.trail>.01&&Wn>0&&_t<.995){const Hi=Xp(ue.trajectory,Wn,pe.randomness,pe.depth);W.position.set(Hi.x,Hi.y,Hi.z),W.quaternion.copy(ue.quaternion),W.scale.setScalar(et*(.72-Vn*.16))}else W.position.copy(ue.position),W.quaternion.copy(ue.quaternion),W.scale.setScalar(0);W.updateMatrix(),an.setMatrixAt(je,W.matrix)});const Je=ui.clamp((ue.position.z-ue.trajectory.axisZ)/ue.trajectory.referenceRadius,-1,1),Gn=ui.lerp(.22,1,(Je+1)*.5),Zt=ue.brightness*Gn;J.setRGB(Zt,Zt,Zt),C.setColorAt(je,J);const Qt=je*3;et>.035&&Je>-.5?(U[Qt]=ue.position.x,U[Qt+1]=ue.position.y,U[Qt+2]=ue.position.z-.08):(U[Qt]=0,U[Qt+1]=0,U[Qt+2]=-50)}),C.instanceMatrix.needsUpdate=!0,S.forEach(ue=>{ue.instanceMatrix.needsUpdate=!0}),C.instanceColor&&(C.instanceColor.needsUpdate=!0),H.getAttribute("position").needsUpdate=!0,G.opacity=pe.glow*.14,G.size=.58+pe.glow*.2,w.emissiveIntensity=pe.glow*.36,I.forEach((ue,je)=>{ue.opacity=pe.trail*(.2-je*.045)}),me(B,fe,L),me(re,fe,L*1.3),ae.uniforms.uOpacity.value=.13+le*.14+Math.sin(De*.7)*.014,_.intensity=9.6+le*11+Math.sin(De*1.1)*.45,m.render(p,h)};return k(),$e(t),ge(),()=>{window.cancelAnimationFrame(ke),window.removeEventListener("resize",k),u.removeEventListener("pointermove",Ce),u.removeEventListener("pointerleave",Ae),Te==null||Te.disconnect(),o.current=null,m.dispose(),T.dispose(),w.dispose(),I.forEach(fe=>fe.dispose()),H.dispose(),G.dispose(),K.dispose(),te.dispose(),ae.dispose(),B.geometry.dispose(),B.material.dispose(),re.geometry.dispose(),re.material.dispose(),m.domElement.parentElement===u&&u.removeChild(m.domElement)}},[]),Ne.exports.useEffect(()=>{var u;(u=o.current)==null||u.setGlyph(t)},[t]),Ne.exports.useEffect(()=>{var u;(u=o.current)==null||u.setRunning(e)},[e]),Ne.exports.useEffect(()=>{var u;(u=o.current)==null||u.setComplete(n)},[n]),Ne.exports.useEffect(()=>{var u;(u=o.current)==null||u.setEffects(r)},[r]),Pe("div",{ref:s,className:"tra-canvas-wrap",role:"img","aria-label":i,children:!a&&Pe("div",{className:"tra-canvas-fallback","aria-hidden":"true",children:Pe("span",{children:t})})})},cr={randomness:.2,glow:1.5,pixelDensity:1,speed:1.3,slowMotion:1,trail:1,stagger:1,depth:1},GT={randomness:1,glow:1,pixelDensity:1,speed:1,slowMotion:1,trail:.28,stagger:1,depth:1},VT={randomness:[0,1.5],glow:[0,1.5],pixelDensity:[.6,1.4],speed:[.7,1.6],slowMotion:[.1,1],trail:[0,1],stagger:[0,1.5],depth:[.65,1.35]},R0=t=>Object.keys(cr).reduce((e,n)=>{const[i,r]=VT[n],s=Number(t[n]);return e[n]=Math.min(r,Math.max(i,Number.isFinite(s)?s:cr[n])),e},{...cr}),WT=t=>Object.keys(cr).every(e=>t[e]===GT[e]);const XT=[10,30,60,300],Fc=26,jT={0:"ZERO",1:"ONE",2:"TWO",3:"THREE",4:"FOUR",5:"FIVE",6:"SIX",7:"SEVEN",8:"EIGHT",9:"NINE",10:"TEN"},qT=[{key:"randomness",label:"\u968F\u673A\u8DF3\u52A8",minimum:0,maximum:1.5,step:.05,format:t=>`${Math.round(t*100)}%`},{key:"glow",label:"\u53D1\u5149",minimum:0,maximum:1.5,step:.05,format:t=>`${Math.round(t*100)}%`},{key:"pixelDensity",label:"\u50CF\u7D20\u5BC6\u5EA6",minimum:.6,maximum:1.4,step:.05,format:t=>`${t.toFixed(2)}\xD7`},{key:"speed",label:"\u65CB\u8F6C\u901F\u5EA6",minimum:.7,maximum:1.6,step:.05,format:t=>`${t.toFixed(2)}\xD7`},{key:"slowMotion",label:"\u6162\u653E\u500D\u7387",minimum:.1,maximum:1,step:.1,format:t=>`${t.toFixed(1)}\xD7`},{key:"trail",label:"\u65CB\u8F6C\u62D6\u5C3E",minimum:0,maximum:1,step:.05,format:t=>`${Math.round(t*100)}%`},{key:"stagger",label:"\u9519\u5CF0",minimum:0,maximum:1.5,step:.05,format:t=>`${Math.round(t*100)}%`},{key:"depth",label:"\u7EB5\u6DF1",minimum:.65,maximum:1.35,step:.05,format:t=>`${t.toFixed(2)}\xD7`}],b0=t=>t.toUpperCase().replace(/[^A-Z]/g,"").slice(0,Fc),YT=()=>{var t;try{return b0((t=window.localStorage.getItem("tra-letter-sequence"))!=null?t:"")||"TRA"}catch{return"TRA"}},$T=()=>{try{const t=Number(window.localStorage.getItem("tra-countdown-duration"));return Number.isFinite(t)&&t>0?Math.min(t,3600):10}catch{return 10}},KT=()=>{var t;try{const e=JSON.parse((t=window.localStorage.getItem("tra-animation-effects"))!=null?t:"{}"),n=R0(e);return WT(n)?{...cr}:n}catch{return{...cr}}},Qp=t=>Math.min(3600,Math.max(1,Math.round(Number.isFinite(t)?t:10))),ZT=t=>{const e=Math.max(0,t),n=Math.floor(e/60),i=e-n*60,r=Math.floor(i),s=Math.floor((i-r)*10);return n>0?`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}`:`00:${String(r).padStart(2,"0")}.${s}`},QT=t=>t>=60?`${t/60}M`:`${t}S`,JT=()=>{var pe,De,$e;const t=Ne.exports.useMemo(()=>$T(),[]),e=Ne.exports.useMemo(()=>YT(),[]),n=Ne.exports.useMemo(()=>KT(),[]),[i,r]=Ne.exports.useState(t),[s,o]=Ne.exports.useState(String(t)),[a,l]=Ne.exports.useState(t),[u,d]=Ne.exports.useState("countdown"),[p,h]=Ne.exports.useState(e),[m,v]=Ne.exports.useState(e),[x,f]=Ne.exports.useState(0),[c,g]=Ne.exports.useState(!1),[_,y]=Ne.exports.useState(e.length<=1),[T,w]=Ne.exports.useState(!1),[C,I]=Ne.exports.useState(!1),[S,R]=Ne.exports.useState(!0),[Z,K]=Ne.exports.useState(t),[U,H]=Ne.exports.useState(0),[G,Y]=Ne.exports.useState("\u8BBE\u5B9A\u65F6\u95F4\uFF0C\u7136\u540E\u5F00\u59CB"),[V,W]=Ne.exports.useState(n),J=Ne.exports.useRef(0),$=Ne.exports.useRef(0),b=Ne.exports.useMemo(()=>{const ce=Math.ceil(Math.max(0,a));return i>99&&ce>99?Math.ceil(ce/60):ce},[i,a]),P=(De=(pe=m[x])!=null?pe:m[0])!=null?De:"A",q=u==="letters"?c:T,Q=u==="letters"?_:C,ie=i>99&&Math.ceil(Math.max(0,a))>99?"MINUTES":($e=jT[Z])!=null?$e:"SECONDS";Ne.exports.useEffect(()=>{if(!T){K(b);return}const ce=window.setTimeout(()=>K(b),520);return()=>window.clearTimeout(ce)},[T,b]),Ne.exports.useEffect(()=>{try{window.localStorage.setItem("tra-countdown-duration",String(i))}catch{}},[i]),Ne.exports.useEffect(()=>{try{window.localStorage.setItem("tra-letter-sequence",m)}catch{}},[m]),Ne.exports.useEffect(()=>{try{window.localStorage.setItem("tra-animation-effects",JSON.stringify(V))}catch{}},[V]),Ne.exports.useEffect(()=>{if(!T)return;const ce=$.current;let Ee=0;const A=()=>{if(ce!==$.current)return;const M=Math.max(0,(J.current-Date.now())/1e3);if(l(M),M<=0){if($.current+=1,w(!1),I(!0),Y("\u65F6\u95F4\u5230"),S){const B=new Audio("/timer_sound.mp3");B.volume=.24,B.play().catch(()=>{})}return}Ee=window.requestAnimationFrame(A)};return Ee=window.requestAnimationFrame(A),()=>window.cancelAnimationFrame(Ee)},[T,S]),Ne.exports.useEffect(()=>{if(u!=="letters"||!c)return;const ce=window.setTimeout(()=>{const Ee=x+1;if(Ee>=m.length){g(!1),y(!0),Y("\u5E8F\u5217\u5B8C\u6210");return}f(Ee),Ee===m.length-1?(g(!1),y(!0),Y("\u5E8F\u5217\u5B8C\u6210")):Y(`\u81EA\u52A8\u64AD\u653E \xB7 ${Ee+1} / ${m.length}`)},1e3);return()=>window.clearTimeout(ce)},[c,x,m.length,u]);const xe=()=>{const ce=Qp(Number(s)),Ee=a<=0||a===i&&ce!==i?ce:a;$.current+=1,J.current=Date.now()+Ee*1e3,r(ce),o(String(ce)),l(Ee),I(!1),w(!0),Y("\u5012\u8BA1\u65F6\u8FDB\u884C\u4E2D")},Me=()=>{const ce=Math.max(0,(J.current-Date.now())/1e3);$.current+=1,J.current=0,l(ce),w(!1),Y("\u5DF2\u6682\u505C")},ye=()=>{if(m.length<=1){y(!0),Y("\u5E8F\u5217\u53EA\u6709\u4E00\u4E2A\u5B57\u6BCD");return}(_||x>=m.length-1)&&(f(0),H(ce=>ce+1)),y(!1),g(!0),Y("\u6BCF\u79D2\u81EA\u52A8\u53D8\u6362\u4E00\u4E2A\u5B57\u6BCD")},Oe=()=>{g(!1),Y("\u5B57\u6BCD\u64AD\u653E\u5DF2\u6682\u505C")},ht=()=>{$.current+=1,J.current=0,w(!1),I(!1),g(!1),u==="letters"?(f(0),y(m.length<=1),Y("\u5B57\u6BCD\u5E8F\u5217\u5DF2\u91CD\u7F6E")):(l(i),Y("\u5012\u8BA1\u65F6\u5DF2\u91CD\u7F6E")),H(ce=>ce+1)},ke=(ce,Ee)=>{W(A=>R0({...A,[ce]:Ee}))},N=ce=>{const Ee=Qp(ce);$.current+=1,J.current=0,r(Ee),o(String(Ee)),l(Ee),w(!1),I(!1),Y("\u65F6\u95F4\u5DF2\u66F4\u65B0"),H(A=>A+1)},pt=ce=>{const Ee=b0(ce);h(Ee),g(!1),Ee&&(v(Ee),f(0),y(Ee.length<=1),Y(`${Ee.length} \u4E2A\u5B57\u6BCD\u5DF2\u5C31\u7EEA`),H(A=>A+1))},Re=()=>{p||(h(m),Y("\u81F3\u5C11\u8F93\u5165\u4E00\u4E2A A\u2013Z \u5B57\u6BCD"))},Ue=ce=>{ce!==u&&(T&&Me(),g(!1),d(ce),I(!1),Y(ce==="letters"?"\u8F93\u5165\u5B57\u6BCD\uFF0C\u70B9\u51FB\u64AD\u653E":"\u8BBE\u5B9A\u65F6\u95F4\uFF0C\u7136\u540E\u5F00\u59CB"),H(Ee=>Ee+1))},be=()=>{if(u==="letters"){c?Oe():ye();return}T?Me():xe()};Ne.exports.useEffect(()=>{const ce=Ee=>{Ee.target instanceof HTMLElement&&(Ee.target.tagName==="INPUT"||Ee.target.tagName==="BUTTON"||Ee.target.tagName==="A")||(Ee.code==="Space"&&(Ee.preventDefault(),be()),Ee.key.toLowerCase()==="r"&&ht())};return window.addEventListener("keydown",ce),()=>window.removeEventListener("keydown",ce)});const Qe=Q?"COMPLETE":q?"RUNNING":u==="letters"?x>0?"PAUSED":"READY":a<i?"PAUSED":"READY";return lt("div",{className:"tra-app",children:[lt("header",{className:"tra-header",children:[lt("div",{className:"tra-brand","aria-label":"TRA countdown studio",children:[Pe("span",{className:"tra-brand-mark",children:"TRA"}),Pe("span",{className:"tra-brand-copy",children:"TIME / RELATIONAL ATMOSPHERE"})]}),lt("div",{className:"tra-header-actions",children:[lt("span",{className:`tra-status ${q?"is-live":""}`,children:[Pe("span",{className:"tra-status-dot","aria-hidden":"true"}),Qe]}),Pe("a",{className:"tra-icon-link",href:"https://github.com/holynova/hotpot-timer",target:"_blank",rel:"noreferrer","aria-label":"\u6253\u5F00 GitHub \u9879\u76EE",title:"GitHub","data-umami-event":"github-repo",children:Pe(Vv,{size:16,strokeWidth:1.6,"aria-hidden":"true"})})]})]}),Pe("main",{className:"tra-stage","aria-label":"Three.js 3D \u5012\u8BA1\u65F6\u821E\u53F0",children:lt("section",{className:`tra-visual-shell ${Q?"is-complete":""}`,role:u==="letters"?"group":"timer","aria-label":u==="letters"?`\u5B57\u6BCD\u5E8F\u5217 ${m}\uFF0C\u5F53\u524D\u5B57\u6BCD ${P}`:"3D \u5012\u8BA1\u65F6\u821E\u53F0",children:[Pe(HT,{glyph:u==="letters"?P:String(b),isRunning:q,isComplete:Q,ariaLabel:u==="letters"?`Three.js 3D \u5B57\u6BCD\u6A21\u578B ${P}`:`Three.js 3D \u5012\u8BA1\u65F6\u6570\u5B57 ${b}`,effects:V},U),lt("div",{className:"tra-tool-strip",children:[lt("div",{className:"tra-mode-switch",role:"group","aria-label":"\u9009\u62E9\u6A21\u5F0F",children:[Pe("button",{type:"button","aria-pressed":u==="countdown",className:u==="countdown"?"is-selected":"",onClick:()=>Ue("countdown"),children:"TIMER"}),Pe("button",{type:"button","aria-pressed":u==="letters",className:u==="letters"?"is-selected":"",onClick:()=>Ue("letters"),children:"A\u2014Z"})]}),u==="countdown"?lt("div",{className:"tra-compact-setting",children:[lt("label",{children:[Pe("span",{className:"tra-sr-only",children:"\u5012\u8BA1\u65F6\u79D2\u6570"}),Pe("input",{type:"number",min:1,max:3600,inputMode:"numeric",value:s,onChange:ce=>o(ce.target.value),onBlur:()=>N(Number(s)),onKeyDown:ce=>{ce.key==="Enter"&&(N(Number(s)),ce.currentTarget.blur())}}),Pe("span",{children:"SEC"})]}),Pe("div",{className:"tra-presets","aria-label":"\u9884\u8BBE\u65F6\u957F",children:XT.map(ce=>Pe("button",{type:"button",className:i===ce?"is-selected":"",onClick:()=>N(ce),children:QT(ce)},ce))})]}):lt("label",{className:"tra-letter-input",children:[Pe("span",{className:"tra-sr-only",children:"\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u5E8F\u5217"}),Pe("input",{type:"text",maxLength:Fc,autoCapitalize:"characters",autoComplete:"off",spellCheck:!1,value:p,onChange:ce=>pt(ce.target.value),onBlur:Re}),lt("span",{children:[p.length,"/",Fc]})]})]}),lt("details",{className:"tra-effects-panel",children:[lt("summary",{"aria-label":"\u8C03\u6574\u52A8\u753B\u6548\u679C",title:"\u52A8\u753B\u6548\u679C",children:[Pe(Kv,{size:16,strokeWidth:1.7,"aria-hidden":"true"}),Pe("span",{children:"FX"})]}),lt("div",{className:"tra-effects-content",children:[lt("div",{className:"tra-effects-header",children:[Pe("span",{children:"\u52A8\u753B\u6548\u679C"}),Pe("button",{type:"button",onClick:()=>W({...cr}),"aria-label":"\u6062\u590D\u9ED8\u8BA4\u52A8\u753B\u6548\u679C",title:"\u6062\u590D\u9ED8\u8BA4",children:Pe(ch,{size:14,strokeWidth:1.7,"aria-hidden":"true"})})]}),Pe("div",{className:"tra-effect-list",children:qT.map(ce=>lt("label",{className:"tra-effect-control",children:[Pe("span",{children:ce.label}),Pe("output",{children:ce.format(V[ce.key])}),Pe("input",{type:"range",min:ce.minimum,max:ce.maximum,step:ce.step,value:V[ce.key],"aria-label":ce.label,onChange:Ee=>ke(ce.key,Number(Ee.target.value))})]},ce.key))}),Pe("p",{children:"\u8BBE\u7F6E\u81EA\u52A8\u4FDD\u5B58\u5728\u672C\u673A \xB7 \u6162\u653E\u4E0D\u6539\u53D8\u8BA1\u65F6"})]})]}),u==="letters"?Pe("div",{className:"tra-stage-word is-sequence","aria-hidden":"true",children:m.split("").map((ce,Ee)=>Pe("span",{className:`${Ee===x?"is-current":""} ${Ee<x?"is-past":""}`,children:ce},`${ce}-${Ee}`))}):lt("div",{className:"tra-stage-word","aria-hidden":"true",children:[Pe("span",{children:ie.slice(0,1)}),ie.slice(1)]},ie),lt("div",{className:"tra-playback",role:"group","aria-label":u==="letters"?"\u5B57\u6BCD\u64AD\u653E\u63A7\u5236":"\u5012\u8BA1\u65F6\u63A7\u5236",children:[Pe("button",{className:"tra-play-button",type:"button",onClick:be,"aria-label":q?"\u6682\u505C":Q?"\u91CD\u65B0\u64AD\u653E":"\u5F00\u59CB",title:q?"\u6682\u505C":Q?"\u91CD\u65B0\u64AD\u653E":"\u5F00\u59CB","data-umami-event":u==="letters"?"letter-autoplay-toggle":"countdown-toggle",children:q?Pe(Xv,{size:19,strokeWidth:1.8,"aria-hidden":"true"}):Pe(qv,{size:19,strokeWidth:1.8,"aria-hidden":"true"})}),Pe("button",{type:"button",onClick:ht,"aria-label":"\u91CD\u7F6E",title:"\u91CD\u7F6E",children:Pe(ch,{size:17,strokeWidth:1.7,"aria-hidden":"true"})}),u==="countdown"&&Pe("button",{type:"button",className:S?"is-active":"",onClick:()=>R(ce=>!ce),"aria-label":S?"\u5173\u95ED\u58F0\u97F3":"\u6253\u5F00\u58F0\u97F3",title:S?"\u5173\u95ED\u58F0\u97F3":"\u6253\u5F00\u58F0\u97F3","aria-pressed":S,children:S?Pe(Qv,{size:17,strokeWidth:1.7,"aria-hidden":"true"}):Pe(ex,{size:17,strokeWidth:1.7,"aria-hidden":"true"})})]}),lt("div",{className:"tra-stage-caption","aria-live":"polite",children:[Pe("span",{className:"tra-caption-dot","aria-hidden":"true"}),Pe("span",{children:G})]}),Pe("div",{className:"tra-stage-time",children:u==="letters"?lt(qp,{children:[lt("span",{children:[String(x+1).padStart(2,"0")," / ",String(m.length).padStart(2,"0")]}),Pe("small",{children:"1 SEC / LETTER"})]}):lt(qp,{children:[Pe("span",{children:ZT(a)}),Pe("small",{children:"REMAINING"})]})}),Pe("span",{className:"tra-sr-only","aria-live":"polite","aria-atomic":"true",children:u==="letters"?`\u5F53\u524D\u4E3A\u7B2C ${x+1} \u4E2A\u5B57\u6BCD ${P}\uFF0C\u5171 ${m.length} \u4E2A\u5B57\u6BCD`:C?"\u5012\u8BA1\u65F6\u5DF2\u7ED3\u675F":`\u5269\u4F59 ${Math.ceil(Math.max(0,a))} \u79D2`})]})})]})},ew=()=>Pe(JT,{});Fv.render(Pe(H0.StrictMode,{children:Pe(ew,{})}),document.getElementById("root"));
