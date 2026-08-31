const a0=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};a0();var ke={exports:{}},Xe={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Nf=Object.getOwnPropertySymbols,l0=Object.prototype.hasOwnProperty,u0=Object.prototype.propertyIsEnumerable;function c0(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function f0(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var i=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(i.join("")!=="0123456789")return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(s){r[s]=s}),Object.keys(Object.assign({},r)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Rp=f0()?Object.assign:function(t,e){for(var n,i=c0(t),r,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)l0.call(n,o)&&(i[o]=n[o]);if(Nf){r=Nf(n);for(var a=0;a<r.length;a++)u0.call(n,r[a])&&(i[r[a]]=n[r[a]])}}return i};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec=Rp,rs=60103,bp=60106;Xe.Fragment=60107;Xe.StrictMode=60108;Xe.Profiler=60114;var Lp=60109,Pp=60110,Dp=60112;Xe.Suspense=60113;var Up=60115,Np=60116;if(typeof Symbol=="function"&&Symbol.for){var hn=Symbol.for;rs=hn("react.element"),bp=hn("react.portal"),Xe.Fragment=hn("react.fragment"),Xe.StrictMode=hn("react.strict_mode"),Xe.Profiler=hn("react.profiler"),Lp=hn("react.provider"),Pp=hn("react.context"),Dp=hn("react.forward_ref"),Xe.Suspense=hn("react.suspense"),Up=hn("react.memo"),Np=hn("react.lazy")}var If=typeof Symbol=="function"&&Symbol.iterator;function d0(t){return t===null||typeof t!="object"?null:(t=If&&t[If]||t["@@iterator"],typeof t=="function"?t:null)}function Eo(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ip={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fp={};function ss(t,e,n){this.props=t,this.context=e,this.refs=Fp,this.updater=n||Ip}ss.prototype.isReactComponent={};ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(Eo(85));this.updater.enqueueSetState(this,t,e,"setState")};ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Op(){}Op.prototype=ss.prototype;function Mc(t,e,n){this.props=t,this.context=e,this.refs=Fp,this.updater=n||Ip}var Tc=Mc.prototype=new Op;Tc.constructor=Mc;Ec(Tc,ss.prototype);Tc.isPureReactComponent=!0;var wc={current:null},Bp=Object.prototype.hasOwnProperty,zp={key:!0,ref:!0,__self:!0,__source:!0};function kp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Bp.call(e,i)&&!zp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:rs,type:t,key:s,ref:o,props:r,_owner:wc.current}}function h0(t,e){return{$$typeof:rs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ac(t){return typeof t=="object"&&t!==null&&t.$$typeof===rs}function p0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ff=/\/+/g;function Al(t,e){return typeof t=="object"&&t!==null&&t.key!=null?p0(""+t.key):e.toString(36)}function _a(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case rs:case bp:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Al(o,0):i,Array.isArray(r)?(n="",t!=null&&(n=t.replace(Ff,"$&/")+"/"),_a(r,e,n,"",function(u){return u})):r!=null&&(Ac(r)&&(r=h0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ff,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Al(s,a);o+=_a(s,e,n,l,r)}else if(l=d0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Al(s,a++),o+=_a(s,e,n,l,r);else if(s==="object")throw e=""+t,Error(Eo(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function Uo(t,e,n){if(t==null)return t;var i=[],r=0;return _a(t,i,"","",function(s){return e.call(n,s,r++)}),i}function m0(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var Hp={current:null};function Zn(){var t=Hp.current;if(t===null)throw Error(Eo(321));return t}var g0={ReactCurrentDispatcher:Hp,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:wc,IsSomeRendererActing:{current:!1},assign:Ec};Xe.Children={map:Uo,forEach:function(t,e,n){Uo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Uo(t,function(){e++}),e},toArray:function(t){return Uo(t,function(e){return e})||[]},only:function(t){if(!Ac(t))throw Error(Eo(143));return t}};Xe.Component=ss;Xe.PureComponent=Mc;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g0;Xe.cloneElement=function(t,e,n){if(t==null)throw Error(Eo(267,t));var i=Ec({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Bp.call(e,l)&&!zp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:rs,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:Pp,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:Lp,_context:t},t.Consumer=t};Xe.createElement=kp;Xe.createFactory=function(t){var e=kp.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:Dp,render:t}};Xe.isValidElement=Ac;Xe.lazy=function(t){return{$$typeof:Np,_payload:{_status:-1,_result:t},_init:m0}};Xe.memo=function(t,e){return{$$typeof:Up,type:t,compare:e===void 0?null:e}};Xe.useCallback=function(t,e){return Zn().useCallback(t,e)};Xe.useContext=function(t,e){return Zn().useContext(t,e)};Xe.useDebugValue=function(){};Xe.useEffect=function(t,e){return Zn().useEffect(t,e)};Xe.useImperativeHandle=function(t,e,n){return Zn().useImperativeHandle(t,e,n)};Xe.useLayoutEffect=function(t,e){return Zn().useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return Zn().useMemo(t,e)};Xe.useReducer=function(t,e,n){return Zn().useReducer(t,e,n)};Xe.useRef=function(t){return Zn().useRef(t)};Xe.useState=function(t){return Zn().useState(t)};Xe.version="17.0.2";ke.exports=Xe;var _0=ke.exports,Gp={exports:{}},dn={},Vp={exports:{}},Wp={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,i,r;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var l=null,u=null,h=function(){if(l!==null)try{var b=t.unstable_now();l(!0,b),l=null}catch(P){throw setTimeout(h,0),P}};e=function(b){l!==null?setTimeout(e,0,b):(l=b,setTimeout(h,0))},n=function(b,P){u=setTimeout(b,P)},i=function(){clearTimeout(u)},t.unstable_shouldYield=function(){return!1},r=t.unstable_forceFrameRate=function(){}}else{var p=window.setTimeout,d=window.clearTimeout;if(typeof console!="undefined"){var m=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof m!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var v=!1,x=null,f=-1,c=5,g=0;t.unstable_shouldYield=function(){return t.unstable_now()>=g},r=function(){},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):c=0<b?Math.floor(1e3/b):5};var _=new MessageChannel,y=_.port2;_.port1.onmessage=function(){if(x!==null){var b=t.unstable_now();g=b+c;try{x(!0,b)?y.postMessage(null):(v=!1,x=null)}catch(P){throw y.postMessage(null),P}}else v=!1},e=function(b){x=b,v||(v=!0,y.postMessage(null))},n=function(b,P){f=p(function(){b(t.unstable_now())},P)},i=function(){d(f),f=-1}}function A(b,P){var Y=b.length;b.push(P);e:for(;;){var J=Y-1>>>1,te=b[J];if(te!==void 0&&0<N(te,P))b[J]=P,b[Y]=te,Y=J;else break e}}function w(b){return b=b[0],b===void 0?null:b}function R(b){var P=b[0];if(P!==void 0){var Y=b.pop();if(Y!==P){b[0]=Y;e:for(var J=0,te=b.length;J<te;){var ge=2*(J+1)-1,Ee=b[ge],ye=ge+1,Oe=b[ye];if(Ee!==void 0&&0>N(Ee,Y))Oe!==void 0&&0>N(Oe,Ee)?(b[J]=Oe,b[ye]=Y,J=ye):(b[J]=Ee,b[ge]=Y,J=ge);else if(Oe!==void 0&&0>N(Oe,Y))b[J]=Oe,b[ye]=Y,J=ye;else break e}}return P}return null}function N(b,P){var Y=b.sortIndex-P.sortIndex;return Y!==0?Y:b.id-P.id}var S=[],C=[],$=1,q=null,D=3,z=!1,k=!1,Z=!1;function X(b){for(var P=w(C);P!==null;){if(P.callback===null)R(C);else if(P.startTime<=b)R(C),P.sortIndex=P.expirationTime,A(S,P);else break;P=w(C)}}function j(b){if(Z=!1,X(b),!k)if(w(S)!==null)k=!0,e(Q);else{var P=w(C);P!==null&&n(j,P.startTime-b)}}function Q(b,P){k=!1,Z&&(Z=!1,i()),z=!0;var Y=D;try{for(X(P),q=w(S);q!==null&&(!(q.expirationTime>P)||b&&!t.unstable_shouldYield());){var J=q.callback;if(typeof J=="function"){q.callback=null,D=q.priorityLevel;var te=J(q.expirationTime<=P);P=t.unstable_now(),typeof te=="function"?q.callback=te:q===w(S)&&R(S),X(P)}else R(S);q=w(S)}if(q!==null)var ge=!0;else{var Ee=w(C);Ee!==null&&n(j,Ee.startTime-P),ge=!1}return ge}finally{q=null,D=Y,z=!1}}var K=r;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){k||z||(k=!0,e(Q))},t.unstable_getCurrentPriorityLevel=function(){return D},t.unstable_getFirstCallbackNode=function(){return w(S)},t.unstable_next=function(b){switch(D){case 1:case 2:case 3:var P=3;break;default:P=D}var Y=D;D=P;try{return b()}finally{D=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=K,t.unstable_runWithPriority=function(b,P){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var Y=D;D=b;try{return P()}finally{D=Y}},t.unstable_scheduleCallback=function(b,P,Y){var J=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?J+Y:J):Y=J,b){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=Y+te,b={id:$++,callback:P,priorityLevel:b,startTime:Y,expirationTime:te,sortIndex:-1},Y>J?(b.sortIndex=Y,A(C,b),w(S)===null&&b===w(C)&&(Z?i():Z=!0,n(j,Y-J))):(b.sortIndex=te,A(S,b),k||z||(k=!0,e(Q))),b},t.unstable_wrapCallback=function(b){var P=D;return function(){var Y=D;D=P;try{return b.apply(this,arguments)}finally{D=Y}}}})(Wp);Vp.exports=Wp;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rl=ke.exports,st=Rp,wt=Vp.exports;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!rl)throw Error(ne(227));var Xp=new Set,ro={};function nr(t,e){$r(t,e),$r(t+"Capture",e)}function $r(t,e){for(ro[t]=e,t=0;t<e.length;t++)Xp.add(e[t])}var Kn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),v0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Of=Object.prototype.hasOwnProperty,Bf={},zf={};function x0(t){return Of.call(zf,t)?!0:Of.call(Bf,t)?!1:v0.test(t)?zf[t]=!0:(Bf[t]=!0,!1)}function y0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function S0(t,e,n,i){if(e===null||typeof e=="undefined"||y0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Gt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Rt[t]=new Gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Rt[e]=new Gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Rt[t]=new Gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Rt[t]=new Gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Rt[t]=new Gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Rt[t]=new Gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Rt[t]=new Gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Rt[t]=new Gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Rt[t]=new Gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cc=/[\-:]([a-z])/g;function Rc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cc,Rc);Rt[e]=new Gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cc,Rc);Rt[e]=new Gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cc,Rc);Rt[e]=new Gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Rt[t]=new Gt(t,1,!1,t.toLowerCase(),null,!1,!1)});Rt.xlinkHref=new Gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Rt[t]=new Gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function bc(t,e,n,i){var r=Rt.hasOwnProperty(e)?Rt[e]:null,s=r!==null?r.type===0:i?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(S0(e,n,r,i)&&(n=null),i||r===null?x0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ir=rl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Os=60103,Hi=60106,ri=60107,Lc=60108,Vs=60114,Pc=60109,Dc=60110,sl=60112,Ws=60113,Pa=60120,ol=60115,Uc=60116,Nc=60121,Ic=60128,jp=60129,Fc=60130,Au=60131;if(typeof Symbol=="function"&&Symbol.for){var Et=Symbol.for;Os=Et("react.element"),Hi=Et("react.portal"),ri=Et("react.fragment"),Lc=Et("react.strict_mode"),Vs=Et("react.profiler"),Pc=Et("react.provider"),Dc=Et("react.context"),sl=Et("react.forward_ref"),Ws=Et("react.suspense"),Pa=Et("react.suspense_list"),ol=Et("react.memo"),Uc=Et("react.lazy"),Nc=Et("react.block"),Et("react.scope"),Ic=Et("react.opaque.id"),jp=Et("react.debug_trace_mode"),Fc=Et("react.offscreen"),Au=Et("react.legacy_hidden")}var kf=typeof Symbol=="function"&&Symbol.iterator;function _s(t){return t===null||typeof t!="object"?null:(t=kf&&t[kf]||t["@@iterator"],typeof t=="function"?t:null)}var Cl;function Bs(t){if(Cl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cl=e&&e[1]||""}return`
`+Cl+t}var Rl=!1;function No(t,e){if(!t||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var i=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){i=l}t.call(e.prototype)}else{try{throw Error()}catch(l){i=l}t()}}catch(l){if(l&&i&&typeof l.stack=="string"){for(var r=l.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a])return`
`+r[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bs(t):""}function E0(t){switch(t.tag){case 5:return Bs(t.type);case 16:return Bs("Lazy");case 13:return Bs("Suspense");case 19:return Bs("SuspenseList");case 0:case 2:case 15:return t=No(t.type,!1),t;case 11:return t=No(t.type.render,!1),t;case 22:return t=No(t.type._render,!1),t;case 1:return t=No(t.type,!0),t;default:return""}}function Or(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ri:return"Fragment";case Hi:return"Portal";case Vs:return"Profiler";case Lc:return"StrictMode";case Ws:return"Suspense";case Pa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dc:return(t.displayName||"Context")+".Consumer";case Pc:return(t._context.displayName||"Context")+".Provider";case sl:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case ol:return Or(t.type);case Nc:return Or(t._render);case Uc:e=t._payload,t=t._init;try{return Or(t(e))}catch{}}return null}function Si(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function Yp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function M0(t){var e=Yp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Io(t){t._valueTracker||(t._valueTracker=M0(t))}function qp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Yp(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Da(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cu(t,e){var n=e.checked;return st({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Hf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Si(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $p(t,e){e=e.checked,e!=null&&bc(t,"checked",e,!1)}function Ru(t,e){$p(t,e);var n=Si(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bu(t,e.type,n):e.hasOwnProperty("defaultValue")&&bu(t,e.type,Si(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bu(t,e,n){(e!=="number"||Da(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function T0(t){var e="";return rl.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function Lu(t,e){return t=st({children:void 0},e),(e=T0(e.children))&&(t.children=e),t}function Br(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Si(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Pu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return st({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Si(n)}}function Kp(t,e){var n=Si(e.value),i=Si(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Wf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var Du={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Zp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fo,Qp=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!==Du.svg||"innerHTML"in t)t.innerHTML=e;else{for(Fo=Fo||document.createElement("div"),Fo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function so(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xs={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w0=["Webkit","ms","Moz","O"];Object.keys(Xs).forEach(function(t){w0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xs[e]=Xs[t]})});function Jp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xs.hasOwnProperty(t)&&Xs[t]?(""+e).trim():e+"px"}function em(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Jp(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var A0=st({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nu(t,e){if(e){if(A0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Iu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Oc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fu=null,zr=null,kr=null;function Xf(t){if(t=To(t)){if(typeof Fu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=dl(e),Fu(t.stateNode,t.type,e))}}function tm(t){zr?kr?kr.push(t):kr=[t]:zr=t}function nm(){if(zr){var t=zr,e=kr;if(kr=zr=null,Xf(t),e)for(t=0;t<e.length;t++)Xf(e[t])}}function Bc(t,e){return t(e)}function im(t,e,n,i,r){return t(e,n,i,r)}function zc(){}var rm=Bc,Gi=!1,bl=!1;function kc(){(zr!==null||kr!==null)&&(zc(),nm())}function C0(t,e,n){if(bl)return t(e,n);bl=!0;try{return rm(t,e,n)}finally{bl=!1,kc()}}function oo(t,e){var n=t.stateNode;if(n===null)return null;var i=dl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Ou=!1;if(Kn)try{var vs={};Object.defineProperty(vs,"passive",{get:function(){Ou=!0}}),window.addEventListener("test",vs,vs),window.removeEventListener("test",vs,vs)}catch{Ou=!1}function R0(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var js=!1,Ua=null,Na=!1,Bu=null,b0={onError:function(t){js=!0,Ua=t}};function L0(t,e,n,i,r,s,o,a,l){js=!1,Ua=null,R0.apply(b0,arguments)}function P0(t,e,n,i,r,s,o,a,l){if(L0.apply(this,arguments),js){if(js){var u=Ua;js=!1,Ua=null}else throw Error(ne(198));Na||(Na=!0,Bu=u)}}function rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jf(t){if(rr(t)!==t)throw Error(ne(188))}function D0(t){var e=t.alternate;if(!e){if(e=rr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return jf(r),t;if(s===i)return jf(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function om(t){if(t=D0(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function Yf(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var am,Hc,lm,um,zu=!1,Cn=[],ci=null,fi=null,di=null,ao=new Map,lo=new Map,xs=[],qf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ku(t,e,n,i,r){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:r,targetContainers:[i]}}function $f(t,e){switch(t){case"focusin":case"focusout":ci=null;break;case"dragenter":case"dragleave":fi=null;break;case"mouseover":case"mouseout":di=null;break;case"pointerover":case"pointerout":ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(e.pointerId)}}function ys(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t=ku(e,n,i,r,s),e!==null&&(e=To(e),e!==null&&Hc(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function U0(t,e,n,i,r){switch(e){case"focusin":return ci=ys(ci,t,e,n,i,r),!0;case"dragenter":return fi=ys(fi,t,e,n,i,r),!0;case"mouseover":return di=ys(di,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ao.set(s,ys(ao.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,lo.set(s,ys(lo.get(s)||null,t,e,n,i,r)),!0}return!1}function N0(t){var e=Vi(t.target);if(e!==null){var n=rr(e);if(n!==null){if(e=n.tag,e===13){if(e=sm(n),e!==null){t.blockedOn=e,um(t.lanePriority,function(){wt.unstable_runWithPriority(t.priority,function(){lm(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function va(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=To(n),e!==null&&Hc(e),t.blockedOn=n,!1;e.shift()}return!0}function Kf(t,e,n){va(t)&&n.delete(e)}function I0(){for(zu=!1;0<Cn.length;){var t=Cn[0];if(t.blockedOn!==null){t=To(t.blockedOn),t!==null&&am(t);break}for(var e=t.targetContainers;0<e.length;){var n=Xc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&Cn.shift()}ci!==null&&va(ci)&&(ci=null),fi!==null&&va(fi)&&(fi=null),di!==null&&va(di)&&(di=null),ao.forEach(Kf),lo.forEach(Kf)}function Ss(t,e){t.blockedOn===e&&(t.blockedOn=null,zu||(zu=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,I0)))}function cm(t){function e(r){return Ss(r,t)}if(0<Cn.length){Ss(Cn[0],t);for(var n=1;n<Cn.length;n++){var i=Cn[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ci!==null&&Ss(ci,t),fi!==null&&Ss(fi,t),di!==null&&Ss(di,t),ao.forEach(e),lo.forEach(e),n=0;n<xs.length;n++)i=xs[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<xs.length&&(n=xs[0],n.blockedOn===null);)N0(n),n.blockedOn===null&&xs.shift()}function Oo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Lr={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},Ll={},fm={};Kn&&(fm=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function al(t){if(Ll[t])return Ll[t];if(!Lr[t])return t;var e=Lr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fm)return Ll[t]=e[n];return t}var dm=al("animationend"),hm=al("animationiteration"),pm=al("animationstart"),mm=al("transitionend"),gm=new Map,Gc=new Map,F0=["abort","abort",dm,"animationEnd",hm,"animationIteration",pm,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",mm,"transitionEnd","waiting","waiting"];function Vc(t,e){for(var n=0;n<t.length;n+=2){var i=t[n],r=t[n+1];r="on"+(r[0].toUpperCase()+r.slice(1)),Gc.set(i,e),gm.set(i,r),nr(r,[i])}}var O0=wt.unstable_now;O0();var Ze=8;function Ar(t){if((1&t)!==0)return Ze=15,1;if((2&t)!==0)return Ze=14,2;if((4&t)!==0)return Ze=13,4;var e=24&t;return e!==0?(Ze=12,e):(t&32)!==0?(Ze=11,32):(e=192&t,e!==0?(Ze=10,e):(t&256)!==0?(Ze=9,256):(e=3584&t,e!==0?(Ze=8,e):(t&4096)!==0?(Ze=7,4096):(e=4186112&t,e!==0?(Ze=6,e):(e=62914560&t,e!==0?(Ze=5,e):t&67108864?(Ze=4,67108864):(t&134217728)!==0?(Ze=3,134217728):(e=805306368&t,e!==0?(Ze=2,e):(1073741824&t)!==0?(Ze=1,1073741824):(Ze=8,t))))))}function B0(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function z0(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(ne(358,t))}}function uo(t,e){var n=t.pendingLanes;if(n===0)return Ze=0;var i=0,r=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)i=s,r=Ze=15;else if(s=n&134217727,s!==0){var l=s&~o;l!==0?(i=Ar(l),r=Ze):(a&=s,a!==0&&(i=Ar(a),r=Ze))}else s=n&~o,s!==0?(i=Ar(s),r=Ze):a!==0&&(i=Ar(a),r=Ze);if(i===0)return 0;if(i=31-Ei(i),i=n&((0>i?0:1<<i)<<1)-1,e!==0&&e!==i&&(e&o)===0){if(Ar(e),r<=Ze)return e;Ze=r}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ei(e),r=1<<n,i|=t[n],e&=~r;return i}function _m(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ia(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=Cr(24&~e),t===0?Ia(10,e):t;case 10:return t=Cr(192&~e),t===0?Ia(8,e):t;case 8:return t=Cr(3584&~e),t===0&&(t=Cr(4186112&~e),t===0&&(t=512)),t;case 2:return e=Cr(805306368&~e),e===0&&(e=268435456),e}throw Error(ne(358,t))}function Cr(t){return t&-t}function Pl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ll(t,e,n){t.pendingLanes|=e;var i=e-1;t.suspendedLanes&=i,t.pingedLanes&=i,t=t.eventTimes,e=31-Ei(e),t[e]=n}var Ei=Math.clz32?Math.clz32:G0,k0=Math.log,H0=Math.LN2;function G0(t){return t===0?32:31-(k0(t)/H0|0)|0}var V0=wt.unstable_UserBlockingPriority,W0=wt.unstable_runWithPriority,xa=!0;function X0(t,e,n,i){Gi||zc();var r=Wc,s=Gi;Gi=!0;try{im(r,t,e,n,i)}finally{(Gi=s)||kc()}}function j0(t,e,n,i){W0(V0,Wc.bind(null,t,e,n,i))}function Wc(t,e,n,i){if(xa){var r;if((r=(e&4)===0)&&0<Cn.length&&-1<qf.indexOf(t))t=ku(null,t,e,n,i),Cn.push(t);else{var s=Xc(t,e,n,i);if(s===null)r&&$f(t,i);else{if(r){if(-1<qf.indexOf(t)){t=ku(s,t,e,n,i),Cn.push(t);return}if(U0(s,t,e,n,i))return;$f(t,i)}Lm(t,e,i,null,n)}}}}function Xc(t,e,n,i){var r=Oc(i);if(r=Vi(r),r!==null){var s=rr(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=sm(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return Lm(t,e,i,r,n),null}var si=null,jc=null,ya=null;function vm(){if(ya)return ya;var t,e=jc,n=e.length,i,r="value"in si?si.value:si.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ya=r.slice(t,1<i?1-i:void 0)}function Sa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bo(){return!0}function Zf(){return!1}function en(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bo:Zf,this.isPropagationStopped=Zf,this}return st(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),e}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yc=en(os),Mo=st({},os,{view:0,detail:0}),Y0=en(Mo),Dl,Ul,Es,ul=st({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Es&&(Es&&t.type==="mousemove"?(Dl=t.screenX-Es.screenX,Ul=t.screenY-Es.screenY):Ul=Dl=0,Es=t),Dl)},movementY:function(t){return"movementY"in t?t.movementY:Ul}}),Qf=en(ul),q0=st({},ul,{dataTransfer:0}),$0=en(q0),K0=st({},Mo,{relatedTarget:0}),Nl=en(K0),Z0=st({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),Q0=en(Z0),J0=st({},os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),e_=en(J0),t_=st({},os,{data:0}),Jf=en(t_),n_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=r_[t])?!!e[t]:!1}function qc(){return s_}var o_=st({},Mo,{key:function(t){if(t.key){var e=n_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?i_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(t){return t.type==="keypress"?Sa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),a_=en(o_),l_=st({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ed=en(l_),u_=st({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),c_=en(u_),f_=st({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),d_=en(f_),h_=st({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),p_=en(h_),m_=[9,13,27,32],$c=Kn&&"CompositionEvent"in window,Ys=null;Kn&&"documentMode"in document&&(Ys=document.documentMode);var g_=Kn&&"TextEvent"in window&&!Ys,xm=Kn&&(!$c||Ys&&8<Ys&&11>=Ys),td=String.fromCharCode(32),nd=!1;function ym(t,e){switch(t){case"keyup":return m_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pr=!1;function __(t,e){switch(t){case"compositionend":return Sm(e);case"keypress":return e.which!==32?null:(nd=!0,td);case"textInput":return t=e.data,t===td&&nd?null:t;default:return null}}function v_(t,e){if(Pr)return t==="compositionend"||!$c&&ym(t,e)?(t=vm(),ya=jc=si=null,Pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xm&&e.locale!=="ko"?null:e.data;default:return null}}var x_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function id(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!x_[t.type]:e==="textarea"}function Em(t,e,n,i){tm(i),e=Fa(e,"onChange"),0<e.length&&(n=new Yc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var qs=null,co=null;function y_(t){Cm(t,0)}function cl(t){var e=Ur(t);if(qp(e))return t}function S_(t,e){if(t==="change")return e}var Mm=!1;if(Kn){var Il;if(Kn){var Fl="oninput"in document;if(!Fl){var rd=document.createElement("div");rd.setAttribute("oninput","return;"),Fl=typeof rd.oninput=="function"}Il=Fl}else Il=!1;Mm=Il&&(!document.documentMode||9<document.documentMode)}function sd(){qs&&(qs.detachEvent("onpropertychange",Tm),co=qs=null)}function Tm(t){if(t.propertyName==="value"&&cl(co)){var e=[];if(Em(e,co,t,Oc(t)),t=y_,Gi)t(e);else{Gi=!0;try{Bc(t,e)}finally{Gi=!1,kc()}}}}function E_(t,e,n){t==="focusin"?(sd(),qs=e,co=n,qs.attachEvent("onpropertychange",Tm)):t==="focusout"&&sd()}function M_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cl(co)}function T_(t,e){if(t==="click")return cl(e)}function w_(t,e){if(t==="input"||t==="change")return cl(e)}function A_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var on=typeof Object.is=="function"?Object.is:A_,C_=Object.prototype.hasOwnProperty;function fo(t,e){if(on(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++)if(!C_.call(e,n[i])||!on(t[n[i]],e[n[i]]))return!1;return!0}function od(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ad(t,e){var n=od(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=od(n)}}function wm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?wm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ld(){for(var t=window,e=Da();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Da(t.document)}return e}function Hu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var R_=Kn&&"documentMode"in document&&11>=document.documentMode,Dr=null,Gu=null,$s=null,Vu=!1;function ud(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vu||Dr==null||Dr!==Da(i)||(i=Dr,"selectionStart"in i&&Hu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$s&&fo($s,i)||($s=i,i=Fa(Gu,"onSelect"),0<i.length&&(e=new Yc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Dr)))}Vc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Vc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Vc(F0,2);for(var cd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Ol=0;Ol<cd.length;Ol++)Gc.set(cd[Ol],0);$r("onMouseEnter",["mouseout","mouseover"]);$r("onMouseLeave",["mouseout","mouseover"]);$r("onPointerEnter",["pointerout","pointerover"]);$r("onPointerLeave",["pointerout","pointerover"]);nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Am=new Set("cancel close invalid load scroll toggle".split(" ").concat(zs));function fd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,P0(i,e,void 0,t),t.currentTarget=null}function Cm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;fd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;fd(r,a,u),s=l}}}if(Na)throw t=Bu,Na=!1,Bu=null,t}function et(t,e){var n=Dm(e),i=t+"__bubble";n.has(i)||(bm(e,t,2,!1),n.add(i))}var dd="_reactListening"+Math.random().toString(36).slice(2);function Rm(t){t[dd]||(t[dd]=!0,Xp.forEach(function(e){Am.has(e)||hd(e,!1,t,null),hd(e,!0,t,null)}))}function hd(t,e,n,i){var r=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),i!==null&&!e&&Am.has(t)){if(t!=="scroll")return;r|=2,s=i}var o=Dm(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(r|=4),bm(s,t,r,e),o.add(a))}function bm(t,e,n,i){var r=Gc.get(e);switch(r===void 0?2:r){case 0:r=X0;break;case 1:r=j0;break;default:r=Wc}n=r.bind(null,e,n,t),r=void 0,!Ou||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Lm(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Vi(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}C0(function(){var u=s,h=Oc(n),p=[];e:{var d=gm.get(t);if(d!==void 0){var m=Yc,v=t;switch(t){case"keypress":if(Sa(n)===0)break e;case"keydown":case"keyup":m=a_;break;case"focusin":v="focus",m=Nl;break;case"focusout":v="blur",m=Nl;break;case"beforeblur":case"afterblur":m=Nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=c_;break;case dm:case hm:case pm:m=Q0;break;case mm:m=d_;break;case"scroll":m=Y0;break;case"wheel":m=p_;break;case"copy":case"cut":case"paste":m=e_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ed}var x=(e&4)!==0,f=!x&&t==="scroll",c=x?d!==null?d+"Capture":null:d;x=[];for(var g=u,_;g!==null;){_=g;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,c!==null&&(y=oo(g,c),y!=null&&x.push(ho(g,y,_)))),f)break;g=g.return}0<x.length&&(d=new m(d,v,null,n,h),p.push({event:d,listeners:x}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&(e&16)===0&&(v=n.relatedTarget||n.fromElement)&&(Vi(v)||v[as]))break e;if((m||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?Vi(v):null,v!==null&&(f=rr(v),v!==f||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(x=Qf,y="onMouseLeave",c="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=ed,y="onPointerLeave",c="onPointerEnter",g="pointer"),f=m==null?d:Ur(m),_=v==null?d:Ur(v),d=new x(y,g+"leave",m,n,h),d.target=f,d.relatedTarget=_,y=null,Vi(h)===u&&(x=new x(c,g+"enter",v,n,h),x.target=_,x.relatedTarget=f,y=x),f=y,m&&v)t:{for(x=m,c=v,g=0,_=x;_;_=ar(_))g++;for(_=0,y=c;y;y=ar(y))_++;for(;0<g-_;)x=ar(x),g--;for(;0<_-g;)c=ar(c),_--;for(;g--;){if(x===c||c!==null&&x===c.alternate)break t;x=ar(x),c=ar(c)}x=null}else x=null;m!==null&&pd(p,d,m,x,!1),v!==null&&f!==null&&pd(p,f,v,x,!0)}}e:{if(d=u?Ur(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var A=S_;else if(id(d))if(Mm)A=w_;else{A=M_;var w=E_}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=T_);if(A&&(A=A(t,u))){Em(p,A,n,h);break e}w&&w(t,d,u),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&bu(d,"number",d.value)}switch(w=u?Ur(u):window,t){case"focusin":(id(w)||w.contentEditable==="true")&&(Dr=w,Gu=u,$s=null);break;case"focusout":$s=Gu=Dr=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,ud(p,n,h);break;case"selectionchange":if(R_)break;case"keydown":case"keyup":ud(p,n,h)}var R;if($c)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Pr?ym(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(xm&&n.locale!=="ko"&&(Pr||N!=="onCompositionStart"?N==="onCompositionEnd"&&Pr&&(R=vm()):(si=h,jc="value"in si?si.value:si.textContent,Pr=!0)),w=Fa(u,N),0<w.length&&(N=new Jf(N,t,null,n,h),p.push({event:N,listeners:w}),R?N.data=R:(R=Sm(n),R!==null&&(N.data=R)))),(R=g_?__(t,n):v_(t,n))&&(u=Fa(u,"onBeforeInput"),0<u.length&&(h=new Jf("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=R))}Cm(p,e)})}function ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fa(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=oo(t,n),s!=null&&i.unshift(ho(t,s,r)),s=oo(t,e),s!=null&&i.push(ho(t,s,r))),t=t.return}return i}function ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=oo(n,s),l!=null&&o.unshift(ho(n,l,a))):r||(l=oo(n,s),l!=null&&o.push(ho(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function Oa(){}var Bl=null,zl=null;function Pm(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function Wu(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var md=typeof setTimeout=="function"?setTimeout:void 0,b_=typeof clearTimeout=="function"?clearTimeout:void 0;function Kc(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function Hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function gd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var kl=0;function L_(t){return{$$typeof:Ic,toString:t,valueOf:t}}var fl=Math.random().toString(36).slice(2),oi="__reactFiber$"+fl,Ba="__reactProps$"+fl,as="__reactContainer$"+fl,_d="__reactEvents$"+fl;function Vi(t){var e=t[oi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[as]||n[oi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gd(t);t!==null;){if(n=t[oi])return n;t=gd(t)}return e}t=n,n=t.parentNode}return null}function To(t){return t=t[oi]||t[as],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ur(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function dl(t){return t[Ba]||null}function Dm(t){var e=t[_d];return e===void 0&&(e=t[_d]=new Set),e}var Xu=[],Nr=-1;function Ri(t){return{current:t}}function nt(t){0>Nr||(t.current=Xu[Nr],Xu[Nr]=null,Nr--)}function ft(t,e){Nr++,Xu[Nr]=t.current,t.current=e}var Mi={},Nt=Ri(Mi),Xt=Ri(!1),Qi=Mi;function Kr(t,e){var n=t.type.contextTypes;if(!n)return Mi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function jt(t){return t=t.childContextTypes,t!=null}function za(){nt(Xt),nt(Nt)}function vd(t,e,n){if(Nt.current!==Mi)throw Error(ne(168));ft(Nt,e),ft(Xt,n)}function Um(t,e,n){var i=t.stateNode;if(t=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in t))throw Error(ne(108,Or(e)||"Unknown",r));return st({},n,i)}function Ea(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mi,Qi=Nt.current,ft(Nt,t),ft(Xt,Xt.current),!0}function xd(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Um(t,e,Qi),i.__reactInternalMemoizedMergedChildContext=t,nt(Xt),nt(Nt),ft(Nt,t)):nt(Xt),ft(Xt,n)}var Zc=null,Yi=null,P_=wt.unstable_runWithPriority,Qc=wt.unstable_scheduleCallback,ju=wt.unstable_cancelCallback,D_=wt.unstable_shouldYield,yd=wt.unstable_requestPaint,Yu=wt.unstable_now,U_=wt.unstable_getCurrentPriorityLevel,hl=wt.unstable_ImmediatePriority,Nm=wt.unstable_UserBlockingPriority,Im=wt.unstable_NormalPriority,Fm=wt.unstable_LowPriority,Om=wt.unstable_IdlePriority,Hl={},N_=yd!==void 0?yd:function(){},Vn=null,Ma=null,Gl=!1,Sd=Yu(),Dt=1e4>Sd?Yu:function(){return Yu()-Sd};function Zr(){switch(U_()){case hl:return 99;case Nm:return 98;case Im:return 97;case Fm:return 96;case Om:return 95;default:throw Error(ne(332))}}function Bm(t){switch(t){case 99:return hl;case 98:return Nm;case 97:return Im;case 96:return Fm;case 95:return Om;default:throw Error(ne(332))}}function Ji(t,e){return t=Bm(t),P_(t,e)}function po(t,e,n){return t=Bm(t),Qc(t,e,n)}function Nn(){if(Ma!==null){var t=Ma;Ma=null,ju(t)}zm()}function zm(){if(!Gl&&Vn!==null){Gl=!0;var t=0;try{var e=Vn;Ji(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),Vn=null}catch(n){throw Vn!==null&&(Vn=Vn.slice(t+1)),Qc(hl,Nn),n}finally{Gl=!1}}}var I_=ir.ReactCurrentBatchConfig;function vn(t,e){if(t&&t.defaultProps){e=st({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ka=Ri(null),Ha=null,Ir=null,Ga=null;function Jc(){Ga=Ir=Ha=null}function ef(t){var e=ka.current;nt(ka),t.type._context._currentValue=e}function km(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function Gr(t,e){Ha=t,Ga=Ir=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(En=!0),t.firstContext=null)}function cn(t,e){if(Ga!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(Ga=t,e=1073741823),e={context:t,observedBits:e,next:null},Ir===null){if(Ha===null)throw Error(ne(308));Ir=e,Ha.dependencies={lanes:0,firstContext:e,responders:null}}else Ir=Ir.next=e;return t._currentValue}var ii=!1;function tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Hm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pi(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function Ed(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function mo(t,e,n,i){var r=t.updateQueue;ii=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;if(h!==null){h=h.updateQueue;var p=h.lastBaseUpdate;p!==o&&(p===null?h.firstBaseUpdate=u:p.next=u,h.lastBaseUpdate=l)}}if(s!==null){p=r.baseState,o=0,h=u=l=null;do{a=s.lane;var d=s.eventTime;if((i&a)===a){h!==null&&(h=h.next={eventTime:d,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=t,v=s;switch(a=e,d=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){p=m.call(d,p,a);break e}p=m;break e;case 3:m.flags=m.flags&-4097|64;case 0:if(m=v.payload,a=typeof m=="function"?m.call(d,p,a):m,a==null)break e;p=st({},p,a);break e;case 2:ii=!0}}s.callback!==null&&(t.flags|=32,a=r.effects,a===null?r.effects=[s]:a.push(s))}else d={eventTime:d,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(u=h=d,l=p):h=h.next=d,o|=a;if(s=s.next,s===null){if(a=r.shared.pending,a===null)break;s=a.next,a.next=null,r.lastBaseUpdate=a,r.shared.pending=null}}while(1);h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,Ao|=o,t.lanes=o,t.memoizedState=p}}function Md(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Gm=new rl.Component().refs;function Va(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:st({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pl={isMounted:function(t){return(t=t._reactInternals)?rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=mi(t),s=hi(i,r);s.payload=e,n!=null&&(s.callback=n),pi(t,s),gi(t,r,i)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=mi(t),s=hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),pi(t,s),gi(t,r,i)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=mi(t),r=hi(n,i);r.tag=2,e!=null&&(r.callback=e),pi(t,r),gi(t,i,n)}};function Td(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!fo(n,i)||!fo(r,s):!0}function Vm(t,e,n){var i=!1,r=Mi,s=e.contextType;return typeof s=="object"&&s!==null?s=cn(s):(r=jt(e)?Qi:Nt.current,i=e.contextTypes,s=(i=i!=null)?Kr(t,r):Mi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function wd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&pl.enqueueReplaceState(e,e.state,null)}function qu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Gm,tf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=cn(s):(s=jt(e)?Qi:Nt.current,r.context=Kr(t,s)),mo(t,n,r,i),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Va(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&pl.enqueueReplaceState(r,r.state,null),mo(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4)}var zo=Array.isArray;function Ms(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(s){var o=i.refs;o===Gm&&(o=i.refs={}),s===null?delete o[r]:o[r]=s},e._stringRef=r,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function ko(t,e){if(t.type!=="textarea")throw Error(ne(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function Wm(t){function e(f,c){if(t){var g=f.lastEffect;g!==null?(g.nextEffect=c,f.lastEffect=c):f.firstEffect=f.lastEffect=c,c.nextEffect=null,c.flags=8}}function n(f,c){if(!t)return null;for(;c!==null;)e(f,c),c=c.sibling;return null}function i(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function r(f,c){return f=wi(f,c),f.index=0,f.sibling=null,f}function s(f,c,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<c?(f.flags=2,c):g):(f.flags=2,c)):c}function o(f){return t&&f.alternate===null&&(f.flags=2),f}function a(f,c,g,_){return c===null||c.tag!==6?(c=Yl(g,f.mode,_),c.return=f,c):(c=r(c,g),c.return=f,c)}function l(f,c,g,_){return c!==null&&c.elementType===g.type?(_=r(c,g.props),_.ref=Ms(f,c,g),_.return=f,_):(_=Ca(g.type,g.key,g.props,null,f.mode,_),_.ref=Ms(f,c,g),_.return=f,_)}function u(f,c,g,_){return c===null||c.tag!==4||c.stateNode.containerInfo!==g.containerInfo||c.stateNode.implementation!==g.implementation?(c=ql(g,f.mode,_),c.return=f,c):(c=r(c,g.children||[]),c.return=f,c)}function h(f,c,g,_,y){return c===null||c.tag!==7?(c=jr(g,f.mode,_,y),c.return=f,c):(c=r(c,g),c.return=f,c)}function p(f,c,g){if(typeof c=="string"||typeof c=="number")return c=Yl(""+c,f.mode,g),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Os:return g=Ca(c.type,c.key,c.props,null,f.mode,g),g.ref=Ms(f,null,c),g.return=f,g;case Hi:return c=ql(c,f.mode,g),c.return=f,c}if(zo(c)||_s(c))return c=jr(c,f.mode,g,null),c.return=f,c;ko(f,c)}return null}function d(f,c,g,_){var y=c!==null?c.key:null;if(typeof g=="string"||typeof g=="number")return y!==null?null:a(f,c,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Os:return g.key===y?g.type===ri?h(f,c,g.props.children,_,y):l(f,c,g,_):null;case Hi:return g.key===y?u(f,c,g,_):null}if(zo(g)||_s(g))return y!==null?null:h(f,c,g,_,null);ko(f,g)}return null}function m(f,c,g,_,y){if(typeof _=="string"||typeof _=="number")return f=f.get(g)||null,a(c,f,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Os:return f=f.get(_.key===null?g:_.key)||null,_.type===ri?h(c,f,_.props.children,y,_.key):l(c,f,_,y);case Hi:return f=f.get(_.key===null?g:_.key)||null,u(c,f,_,y)}if(zo(_)||_s(_))return f=f.get(g)||null,h(c,f,_,y,null);ko(c,_)}return null}function v(f,c,g,_){for(var y=null,A=null,w=c,R=c=0,N=null;w!==null&&R<g.length;R++){w.index>R?(N=w,w=null):N=w.sibling;var S=d(f,w,g[R],_);if(S===null){w===null&&(w=N);break}t&&w&&S.alternate===null&&e(f,w),c=s(S,c,R),A===null?y=S:A.sibling=S,A=S,w=N}if(R===g.length)return n(f,w),y;if(w===null){for(;R<g.length;R++)w=p(f,g[R],_),w!==null&&(c=s(w,c,R),A===null?y=w:A.sibling=w,A=w);return y}for(w=i(f,w);R<g.length;R++)N=m(w,f,R,g[R],_),N!==null&&(t&&N.alternate!==null&&w.delete(N.key===null?R:N.key),c=s(N,c,R),A===null?y=N:A.sibling=N,A=N);return t&&w.forEach(function(C){return e(f,C)}),y}function x(f,c,g,_){var y=_s(g);if(typeof y!="function")throw Error(ne(150));if(g=y.call(g),g==null)throw Error(ne(151));for(var A=y=null,w=c,R=c=0,N=null,S=g.next();w!==null&&!S.done;R++,S=g.next()){w.index>R?(N=w,w=null):N=w.sibling;var C=d(f,w,S.value,_);if(C===null){w===null&&(w=N);break}t&&w&&C.alternate===null&&e(f,w),c=s(C,c,R),A===null?y=C:A.sibling=C,A=C,w=N}if(S.done)return n(f,w),y;if(w===null){for(;!S.done;R++,S=g.next())S=p(f,S.value,_),S!==null&&(c=s(S,c,R),A===null?y=S:A.sibling=S,A=S);return y}for(w=i(f,w);!S.done;R++,S=g.next())S=m(w,f,R,S.value,_),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?R:S.key),c=s(S,c,R),A===null?y=S:A.sibling=S,A=S);return t&&w.forEach(function($){return e(f,$)}),y}return function(f,c,g,_){var y=typeof g=="object"&&g!==null&&g.type===ri&&g.key===null;y&&(g=g.props.children);var A=typeof g=="object"&&g!==null;if(A)switch(g.$$typeof){case Os:e:{for(A=g.key,y=c;y!==null;){if(y.key===A){switch(y.tag){case 7:if(g.type===ri){n(f,y.sibling),c=r(y,g.props.children),c.return=f,f=c;break e}break;default:if(y.elementType===g.type){n(f,y.sibling),c=r(y,g.props),c.ref=Ms(f,y,g),c.return=f,f=c;break e}}n(f,y);break}else e(f,y);y=y.sibling}g.type===ri?(c=jr(g.props.children,f.mode,_,g.key),c.return=f,f=c):(_=Ca(g.type,g.key,g.props,null,f.mode,_),_.ref=Ms(f,c,g),_.return=f,f=_)}return o(f);case Hi:e:{for(y=g.key;c!==null;){if(c.key===y)if(c.tag===4&&c.stateNode.containerInfo===g.containerInfo&&c.stateNode.implementation===g.implementation){n(f,c.sibling),c=r(c,g.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else e(f,c);c=c.sibling}c=ql(g,f.mode,_),c.return=f,f=c}return o(f)}if(typeof g=="string"||typeof g=="number")return g=""+g,c!==null&&c.tag===6?(n(f,c.sibling),c=r(c,g),c.return=f,f=c):(n(f,c),c=Yl(g,f.mode,_),c.return=f,f=c),o(f);if(zo(g))return v(f,c,g,_);if(_s(g))return x(f,c,g,_);if(A&&ko(f,g),typeof g=="undefined"&&!y)switch(f.tag){case 1:case 22:case 0:case 11:case 15:throw Error(ne(152,Or(f.type)||"Component"))}return n(f,c)}}var Wa=Wm(!0),Xm=Wm(!1),wo={},Ln=Ri(wo),go=Ri(wo),_o=Ri(wo);function Wi(t){if(t===wo)throw Error(ne(174));return t}function $u(t,e){switch(ft(_o,e),ft(go,t),ft(Ln,wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uu(e,t)}nt(Ln),ft(Ln,e)}function Qr(){nt(Ln),nt(go),nt(_o)}function Ad(t){Wi(_o.current);var e=Wi(Ln.current),n=Uu(e,t.type);e!==n&&(ft(go,t),ft(Ln,n))}function nf(t){go.current===t&&(nt(Ln),nt(go))}var ct=Ri(0);function Xa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xn=null,ai=null,Pn=!1;function jm(t,e){var n=an(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function Cd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function Ku(t){if(Pn){var e=ai;if(e){var n=e;if(!Cd(t,e)){if(e=Hr(n.nextSibling),!e||!Cd(t,e)){t.flags=t.flags&-1025|2,Pn=!1,Xn=t;return}jm(Xn,n)}Xn=t,ai=Hr(e.firstChild)}else t.flags=t.flags&-1025|2,Pn=!1,Xn=t}}function Rd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xn=t}function Ho(t){if(t!==Xn)return!1;if(!Pn)return Rd(t),Pn=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!Wu(e,t.memoizedProps))for(e=ai;e;)jm(t,e),e=Hr(e.nextSibling);if(Rd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ai=Hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ai=null}}else ai=Xn?Hr(t.stateNode.nextSibling):null;return!0}function Vl(){ai=Xn=null,Pn=!1}var Vr=[];function rf(){for(var t=0;t<Vr.length;t++)Vr[t]._workInProgressVersionPrimary=null;Vr.length=0}var Ks=ir.ReactCurrentDispatcher,ln=ir.ReactCurrentBatchConfig,vo=0,ht=null,Pt=null,At=null,ja=!1,Zs=!1;function Vt(){throw Error(ne(321))}function sf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!on(t[n],e[n]))return!1;return!0}function of(t,e,n,i,r,s){if(vo=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ks.current=t===null||t.memoizedState===null?O_:B_,t=n(i,r),Zs){s=0;do{if(Zs=!1,!(25>s))throw Error(ne(301));s+=1,At=Pt=null,e.updateQueue=null,Ks.current=z_,t=n(i,r)}while(Zs)}if(Ks.current=Ka,e=Pt!==null&&Pt.next!==null,vo=0,At=Pt=ht=null,ja=!1,e)throw Error(ne(300));return t}function Xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?ht.memoizedState=At=t:At=At.next=t,At}function sr(){if(Pt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=At===null?ht.memoizedState:At.next;if(e!==null)At=e,Pt=t;else{if(t===null)throw Error(ne(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},At===null?ht.memoizedState=At=t:At=At.next=t}return At}function Rn(t,e){return typeof e=="function"?e(t):e}function Ts(t){var e=sr(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Pt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){r=r.next,i=i.baseState;var a=o=s=null,l=r;do{var u=l.lane;if((vo&u)===u)a!==null&&(a=a.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),i=l.eagerReducer===t?l.eagerState:t(i,l.action);else{var h={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};a===null?(o=a=h,s=i):a=a.next=h,ht.lanes|=u,Ao|=u}l=l.next}while(l!==null&&l!==r);a===null?s=i:a.next=o,on(i,e.memoizedState)||(En=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=a,n.lastRenderedState=i}return[e.memoizedState,n.dispatch]}function ws(t){var e=sr(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);on(s,e.memoizedState)||(En=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function bd(t,e,n){var i=e._getVersion;i=i(e._source);var r=e._workInProgressVersionPrimary;if(r!==null?t=r===i:(t=t.mutableReadLanes,(t=(vo&t)===t)&&(e._workInProgressVersionPrimary=i,Vr.push(e))),t)return n(e._source);throw Vr.push(e),Error(ne(350))}function Ym(t,e,n,i){var r=Ht;if(r===null)throw Error(ne(349));var s=e._getVersion,o=s(e._source),a=Ks.current,l=a.useState(function(){return bd(r,e,n)}),u=l[1],h=l[0];l=At;var p=t.memoizedState,d=p.refs,m=d.getSnapshot,v=p.source;p=p.subscribe;var x=ht;return t.memoizedState={refs:d,source:e,subscribe:i},a.useEffect(function(){d.getSnapshot=n,d.setSnapshot=u;var f=s(e._source);if(!on(o,f)){f=n(e._source),on(h,f)||(u(f),f=mi(x),r.mutableReadLanes|=f&r.pendingLanes),f=r.mutableReadLanes,r.entangledLanes|=f;for(var c=r.entanglements,g=f;0<g;){var _=31-Ei(g),y=1<<_;c[_]|=f,g&=~y}}},[n,e,i]),a.useEffect(function(){return i(e._source,function(){var f=d.getSnapshot,c=d.setSnapshot;try{c(f(e._source));var g=mi(x);r.mutableReadLanes|=g&r.pendingLanes}catch(_){c(function(){throw _})}})},[e,i]),on(m,n)&&on(v,e)&&on(p,i)||(t={pending:null,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:h},t.dispatch=u=uf.bind(null,ht,t),l.queue=t,l.baseQueue=null,h=bd(r,e,n),l.memoizedState=l.baseState=h),h}function qm(t,e,n){var i=sr();return Ym(i,t,e,n)}function As(t){var e=Xi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:t},t=t.dispatch=uf.bind(null,ht,t),[e.memoizedState,t]}function Ya(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ld(t){var e=Xi();return t={current:t},e.memoizedState=t}function qa(){return sr().memoizedState}function Zu(t,e,n,i){var r=Xi();ht.flags|=t,r.memoizedState=Ya(1|e,n,void 0,i===void 0?null:i)}function af(t,e,n,i){var r=sr();i=i===void 0?null:i;var s=void 0;if(Pt!==null){var o=Pt.memoizedState;if(s=o.destroy,i!==null&&sf(i,o.deps)){Ya(e,n,s,i);return}}ht.flags|=t,r.memoizedState=Ya(1|e,n,s,i)}function Pd(t,e){return Zu(516,4,t,e)}function $a(t,e){return af(516,4,t,e)}function $m(t,e){return af(4,2,t,e)}function Km(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zm(t,e,n){return n=n!=null?n.concat([t]):null,af(4,2,Km.bind(null,e,t),n)}function lf(){}function Qm(t,e){var n=sr();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Jm(t,e){var n=sr();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function F_(t,e){var n=Zr();Ji(98>n?98:n,function(){t(!0)}),Ji(97<n?97:n,function(){var i=ln.transition;ln.transition=1;try{t(!1),e()}finally{ln.transition=i}})}function uf(t,e,n){var i=Qt(),r=mi(t),s={lane:r,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===ht||o!==null&&o===ht)Zs=ja=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,l=o(a,n);if(s.eagerReducer=o,s.eagerState=l,on(l,a))return}catch{}finally{}gi(t,r,i)}}var Ka={readContext:cn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useOpaqueIdentifier:Vt,unstable_isNewReconciler:!1},O_={readContext:cn,useCallback:function(t,e){return Xi().memoizedState=[t,e===void 0?null:e],t},useContext:cn,useEffect:Pd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zu(4,2,Km.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zu(4,2,t,e)},useMemo:function(t,e){var n=Xi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Xi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t=i.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=uf.bind(null,ht,t),[i.memoizedState,t]},useRef:Ld,useState:As,useDebugValue:lf,useDeferredValue:function(t){var e=As(t),n=e[0],i=e[1];return Pd(function(){var r=ln.transition;ln.transition=1;try{i(t)}finally{ln.transition=r}},[t]),n},useTransition:function(){var t=As(!1),e=t[0];return t=F_.bind(null,t[1]),Ld(t),[t,e]},useMutableSource:function(t,e,n){var i=Xi();return i.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},Ym(i,t,e,n)},useOpaqueIdentifier:function(){if(Pn){var t=!1,e=L_(function(){throw t||(t=!0,n("r:"+(kl++).toString(36))),Error(ne(355))}),n=As(e)[1];return(ht.mode&2)===0&&(ht.flags|=516,Ya(5,function(){n("r:"+(kl++).toString(36))},void 0,null)),e}return e="r:"+(kl++).toString(36),As(e),e},unstable_isNewReconciler:!1},B_={readContext:cn,useCallback:Qm,useContext:cn,useEffect:$a,useImperativeHandle:Zm,useLayoutEffect:$m,useMemo:Jm,useReducer:Ts,useRef:qa,useState:function(){return Ts(Rn)},useDebugValue:lf,useDeferredValue:function(t){var e=Ts(Rn),n=e[0],i=e[1];return $a(function(){var r=ln.transition;ln.transition=1;try{i(t)}finally{ln.transition=r}},[t]),n},useTransition:function(){var t=Ts(Rn)[0];return[qa().current,t]},useMutableSource:qm,useOpaqueIdentifier:function(){return Ts(Rn)[0]},unstable_isNewReconciler:!1},z_={readContext:cn,useCallback:Qm,useContext:cn,useEffect:$a,useImperativeHandle:Zm,useLayoutEffect:$m,useMemo:Jm,useReducer:ws,useRef:qa,useState:function(){return ws(Rn)},useDebugValue:lf,useDeferredValue:function(t){var e=ws(Rn),n=e[0],i=e[1];return $a(function(){var r=ln.transition;ln.transition=1;try{i(t)}finally{ln.transition=r}},[t]),n},useTransition:function(){var t=ws(Rn)[0];return[qa().current,t]},useMutableSource:qm,useOpaqueIdentifier:function(){return ws(Rn)[0]},unstable_isNewReconciler:!1},k_=ir.ReactCurrentOwner,En=!1;function Wt(t,e,n,i){e.child=t===null?Xm(e,null,n,i):Wa(e,t.child,n,i)}function Dd(t,e,n,i,r){n=n.render;var s=e.ref;return Gr(e,r),i=of(t,e,n,i,s,r),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~r,jn(t,e,r)):(e.flags|=1,Wt(t,e,i,r),e.child)}function Ud(t,e,n,i,r,s){if(t===null){var o=n.type;return typeof o=="function"&&!mf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,eg(t,e,o,i,r,s)):(t=Ca(n.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(r&s)===0&&(r=o.memoizedProps,n=n.compare,n=n!==null?n:fo,n(r,i)&&t.ref===e.ref)?jn(t,e,s):(e.flags|=1,t=wi(o,i),t.ref=e.ref,t.return=e,e.child=t)}function eg(t,e,n,i,r,s){if(t!==null&&fo(t.memoizedProps,i)&&t.ref===e.ref)if(En=!1,(s&r)!==0)(t.flags&16384)!==0&&(En=!0);else return e.lanes=t.lanes,jn(t,e,s);return Qu(t,e,n,i,s)}function Wl(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden"||i.mode==="unstable-defer-without-hiding")if((e.mode&4)===0)e.memoizedState={baseLanes:0},Vo(e,n);else if((n&1073741824)!==0)e.memoizedState={baseLanes:0},Vo(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},Vo(e,t),null;else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Vo(e,i);return Wt(t,e,r,n),e.child}function tg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function Qu(t,e,n,i,r){var s=jt(n)?Qi:Nt.current;return s=Kr(e,s),Gr(e,r),n=of(t,e,n,i,s,r),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~r,jn(t,e,r)):(e.flags|=1,Wt(t,e,n,r),e.child)}function Nd(t,e,n,i,r){if(jt(n)){var s=!0;Ea(e)}else s=!1;if(Gr(e,r),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),Vm(e,n,i),qu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=cn(u):(u=jt(n)?Qi:Nt.current,u=Kr(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&wd(e,o,i,u),ii=!1;var d=e.memoizedState;o.state=d,mo(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Xt.current||ii?(typeof h=="function"&&(Va(e,n,h,i),l=e.memoizedState),(a=ii||Td(e,n,a,i,d,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),i=!1)}else{o=e.stateNode,Hm(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:vn(e.type,a),o.props=u,p=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=cn(l):(l=jt(n)?Qi:Nt.current,l=Kr(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||d!==l)&&wd(e,o,i,l),ii=!1,d=e.memoizedState,o.state=d,mo(e,i,o,r);var v=e.memoizedState;a!==p||d!==v||Xt.current||ii?(typeof m=="function"&&(Va(e,n,m,i),v=e.memoizedState),(u=ii||Td(e,n,u,i,d,v,l))?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),i=!1)}return Ju(t,e,n,i,s,r)}function Ju(t,e,n,i,r,s){tg(t,e);var o=(e.flags&64)!==0;if(!i&&!o)return r&&xd(e,n,!1),jn(t,e,s);i=e.stateNode,k_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Wa(e,t.child,null,s),e.child=Wa(e,null,a,s)):Wt(t,e,a,s),e.memoizedState=i.state,r&&xd(e,n,!0),e.child}function Id(t){var e=t.stateNode;e.pendingContext?vd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vd(t,e.context,!1),$u(t,e.containerInfo)}var Go={dehydrated:null,retryLane:0};function Fd(t,e,n){var i=e.pendingProps,r=ct.current,s=!1,o;return(o=(e.flags&64)!==0)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||i.fallback===void 0||i.unstable_avoidThisFallback===!0||(r|=1),ft(ct,r&1),t===null?(i.fallback!==void 0&&Ku(e),t=i.children,r=i.fallback,s?(t=Od(e,t,r,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Go,t):typeof i.unstable_expectedLoadTime=="number"?(t=Od(e,t,r,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Go,e.lanes=33554432,t):(n=gf({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(i=zd(t,e,i.children,i.fallback,n),s=e.child,r=t.child.memoizedState,s.memoizedState=r===null?{baseLanes:n}:{baseLanes:r.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Go,i):(n=Bd(t,e,i.children,n),e.memoizedState=null,n):s?(i=zd(t,e,i.children,i.fallback,n),s=e.child,r=t.child.memoizedState,s.memoizedState=r===null?{baseLanes:n}:{baseLanes:r.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Go,i):(n=Bd(t,e,i.children,n),e.memoizedState=null,n)}function Od(t,e,n,i){var r=t.mode,s=t.child;return e={mode:"hidden",children:e},(r&2)===0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=gf(e,r,0,null),n=jr(n,r,i,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function Bd(t,e,n,i){var r=t.child;return t=r.sibling,n=wi(r,{mode:"visible",children:n}),(e.mode&2)===0&&(n.lanes=i),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function zd(t,e,n,i,r){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)===0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=wi(o,a),t!==null?i=wi(t,i):(i=jr(i,s,r,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,i}function kd(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),km(t.return,e)}function Xl(t,e,n,i,r,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r,o.lastEffect=s)}function Hd(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=ct.current,(i&2)!==0)i=i&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kd(t,n);else if(t.tag===19)kd(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(ct,i),(e.mode&2)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Xa(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Xl(e,!1,r,n,s,e.lastEffect);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Xa(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Xl(e,!0,n,null,s,e.lastEffect);break;case"together":Xl(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ao|=e.lanes,(n&e.childLanes)!==0){if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=wi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var ng,ec,ig,rg;ng=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ec=function(){};ig=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Wi(Ln.current);var s=null;switch(n){case"input":r=Cu(t,r),i=Cu(t,i),s=[];break;case"option":r=Lu(t,r),i=Lu(t,i),s=[];break;case"select":r=st({},r,{value:void 0}),i=st({},i,{value:void 0}),s=[];break;case"textarea":r=Pu(t,r),i=Pu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Oa)}Nu(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ro.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ro.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&et("scroll",t),s||a===l||(s=[])):typeof l=="object"&&l!==null&&l.$$typeof===Ic?l.toString():(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};rg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Cs(t,e){if(!Pn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function H_(t,e,n){var i=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return jt(e.type)&&za(),null;case 3:return Qr(),nt(Xt),nt(Nt),rf(),i=e.stateNode,i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ho(e)?e.flags|=4:i.hydrate||(e.flags|=256)),ec(e),null;case 5:nf(e);var r=Wi(_o.current);if(n=e.type,t!==null&&e.stateNode!=null)ig(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=128);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return null}if(t=Wi(Ln.current),Ho(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[oi]=e,i[Ba]=s,n){case"dialog":et("cancel",i),et("close",i);break;case"iframe":case"object":case"embed":et("load",i);break;case"video":case"audio":for(t=0;t<zs.length;t++)et(zs[t],i);break;case"source":et("error",i);break;case"img":case"image":case"link":et("error",i),et("load",i);break;case"details":et("toggle",i);break;case"input":Hf(i,s),et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},et("invalid",i);break;case"textarea":Vf(i,s),et("invalid",i)}Nu(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(r=s[o],o==="children"?typeof r=="string"?i.textContent!==r&&(t=["children",r]):typeof r=="number"&&i.textContent!==""+r&&(t=["children",""+r]):ro.hasOwnProperty(o)&&r!=null&&o==="onScroll"&&et("scroll",i));switch(n){case"input":Io(i),Gf(i,s,!0);break;case"textarea":Io(i),Wf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Oa)}i=t,e.updateQueue=i,i!==null&&(e.flags|=4)}else{switch(o=r.nodeType===9?r:r.ownerDocument,t===Du.html&&(t=Zp(n)),t===Du.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[oi]=e,t[Ba]=i,ng(t,e,!1,!1),e.stateNode=t,o=Iu(n,i),n){case"dialog":et("cancel",t),et("close",t),r=i;break;case"iframe":case"object":case"embed":et("load",t),r=i;break;case"video":case"audio":for(r=0;r<zs.length;r++)et(zs[r],t);r=i;break;case"source":et("error",t),r=i;break;case"img":case"image":case"link":et("error",t),et("load",t),r=i;break;case"details":et("toggle",t),r=i;break;case"input":Hf(t,i),r=Cu(t,i),et("invalid",t);break;case"option":r=Lu(t,i);break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=st({},i,{value:void 0}),et("invalid",t);break;case"textarea":Vf(t,i),r=Pu(t,i),et("invalid",t);break;default:r=i}Nu(n,r);var a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?em(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qp(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&so(t,l):typeof l=="number"&&so(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ro.hasOwnProperty(s)?l!=null&&s==="onScroll"&&et("scroll",t):l!=null&&bc(t,s,l,o))}switch(n){case"input":Io(t),Gf(t,i,!1);break;case"textarea":Io(t),Wf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Si(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Br(t,!!i.multiple,s,!1):i.defaultValue!=null&&Br(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Oa)}Pm(n,i)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)rg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));n=Wi(_o.current),Wi(Ln.current),Ho(e)?(i=e.stateNode,n=e.memoizedProps,i[oi]=e,i.nodeValue!==n&&(e.flags|=4)):(i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[oi]=e,e.stateNode=i)}return null;case 13:return nt(ct),i=e.memoizedState,(e.flags&64)!==0?(e.lanes=n,e):(i=i!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&Ho(e):n=t.memoizedState!==null,i&&!n&&(e.mode&2)!==0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(ct.current&1)!==0?Ct===0&&(Ct=3):((Ct===0||Ct===3)&&(Ct=4),Ht===null||(Ao&134217727)===0&&(us&134217727)===0||Wr(Ht,Ut))),(i||n)&&(e.flags|=4),null);case 4:return Qr(),ec(e),t===null&&Rm(e.stateNode.containerInfo),null;case 10:return ef(e),null;case 17:return jt(e.type)&&za(),null;case 19:if(nt(ct),i=e.memoizedState,i===null)return null;if(s=(e.flags&64)!==0,o=i.rendering,o===null)if(s)Cs(i,!1);else{if(Ct!==0||t!==null&&(t.flags&64)!==0)for(t=e.child;t!==null;){if(o=Xa(t),o!==null){for(e.flags|=64,Cs(i,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),i.lastEffect===null&&(e.firstEffect=null),e.lastEffect=i.lastEffect,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(ct,ct.current&1|2),e.child}t=t.sibling}i.tail!==null&&Dt()>oc&&(e.flags|=64,s=!0,Cs(i,!1),e.lanes=33554432)}else{if(!s)if(t=Xa(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Cs(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Pn)return e=e.lastEffect=i.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*Dt()-i.renderingStartTime>oc&&n!==1073741824&&(e.flags|=64,s=!0,Cs(i,!1),e.lanes=33554432);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.lastEffect=e.lastEffect,i.renderingStartTime=Dt(),n.sibling=null,e=ct.current,ft(ct,s?e&1|2:e&1),n):null;case 23:case 24:return pf(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&i.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(ne(156,e.tag))}function G_(t){switch(t.tag){case 1:jt(t.type)&&za();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(Qr(),nt(Xt),nt(Nt),rf(),e=t.flags,(e&64)!==0)throw Error(ne(285));return t.flags=e&-4097|64,t;case 5:return nf(t),null;case 13:return nt(ct),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return nt(ct),null;case 4:return Qr(),null;case 10:return ef(t),null;case 23:case 24:return pf(),null;default:return null}}function cf(t,e){try{var n="",i=e;do n+=E0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r}}function tc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var V_=typeof WeakMap=="function"?WeakMap:Map;function sg(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Qa||(Qa=!0,ac=i),tc(t,e)},n}function og(t,e,n){n=hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return tc(t,e),i(r)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof i!="function"&&(bn===null?bn=new Set([this]):bn.add(this),tc(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var W_=typeof WeakSet=="function"?WeakSet:Set;function Gd(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){_i(t,n)}else e.current=null}function X_(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,i=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:vn(e.type,n),i),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&Kc(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(ne(163))}function j_(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)===3){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var r=t;i=r.next,r=r.tag,(r&4)!==0&&(r&1)!==0&&(mg(n,t),ev(n,t)),t=i}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(i=n.elementType===n.type?e.memoizedProps:vn(n.type,e.memoizedProps),t.componentDidUpdate(i,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&Md(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Md(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&Pm(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&cm(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(ne(163))}function Vd(t,e){for(var n=t;;){if(n.tag===5){var i=n.stateNode;if(e)i=i.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{i=n.stateNode;var r=n.memoizedProps.style;r=r!=null&&r.hasOwnProperty("display")?r.display:null,i.style.display=Jp("display",r)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function Wd(t,e){if(Yi&&typeof Yi.onCommitFiberUnmount=="function")try{Yi.onCommitFiberUnmount(Zc,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var i=n,r=i.destroy;if(i=i.tag,r!==void 0)if((i&4)!==0)mg(e,n);else{i=e;try{r()}catch(s){_i(i,s)}}n=n.next}while(n!==t)}break;case 1:if(Gd(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){_i(e,s)}break;case 5:Gd(e);break;case 4:ag(t,e)}}function Xd(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function jd(t){return t.tag===5||t.tag===3||t.tag===4}function Yd(t){e:{for(var e=t.return;e!==null;){if(jd(e))break e;e=e.return}throw Error(ne(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var i=!1;break;case 3:e=e.containerInfo,i=!0;break;case 4:e=e.containerInfo,i=!0;break;default:throw Error(ne(161))}n.flags&16&&(so(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||jd(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}i?nc(t,n,e):ic(t,n,e)}function nc(t,e,n){var i=t.tag,r=i===5||i===6;if(r)t=r?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Oa));else if(i!==4&&(t=t.child,t!==null))for(nc(t,e,n),t=t.sibling;t!==null;)nc(t,e,n),t=t.sibling}function ic(t,e,n){var i=t.tag,r=i===5||i===6;if(r)t=r?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ic(t,e,n),t=t.sibling;t!==null;)ic(t,e,n),t=t.sibling}function ag(t,e){for(var n=e,i=!1,r,s;;){if(!i){i=n.return;e:for(;;){if(i===null)throw Error(ne(160));switch(r=i.stateNode,i.tag){case 5:s=!1;break e;case 3:r=r.containerInfo,s=!0;break e;case 4:r=r.containerInfo,s=!0;break e}i=i.return}i=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,l=a;;)if(Wd(o,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}s?(o=r,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):r.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){r=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(Wd(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(i=!1)}n.sibling.return=n.return,n=n.sibling}}function jl(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do(i.tag&3)===3&&(t=i.destroy,i.destroy=void 0,t!==void 0&&t()),i=i.next;while(i!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){i=e.memoizedProps;var r=t!==null?t.memoizedProps:i;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[Ba]=i,t==="input"&&i.type==="radio"&&i.name!=null&&$p(n,i),Iu(t,r),e=Iu(t,i),r=0;r<s.length;r+=2){var o=s[r],a=s[r+1];o==="style"?em(n,a):o==="dangerouslySetInnerHTML"?Qp(n,a):o==="children"?so(n,a):bc(n,o,a,e)}switch(t){case"input":Ru(n,i);break;case"textarea":Kp(n,i);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!i.multiple,s=i.value,s!=null?Br(n,!!i.multiple,s,!1):t!==!!i.multiple&&(i.defaultValue!=null?Br(n,!!i.multiple,i.defaultValue,!0):Br(n,!!i.multiple,i.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(ne(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,cm(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(hf=Dt(),Vd(e.child,!0)),qd(e);return;case 19:qd(e);return;case 17:return;case 23:case 24:Vd(e,e.memoizedState!==null);return}throw Error(ne(163))}function qd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new W_),e.forEach(function(i){var r=iv.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Y_(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var q_=Math.ceil,Za=ir.ReactCurrentDispatcher,ff=ir.ReactCurrentOwner,De=0,Ht=null,xt=null,Ut=0,er=0,rc=Ri(0),Ct=0,ml=null,ls=0,Ao=0,us=0,df=0,sc=null,hf=0,oc=1/0;function cs(){oc=Dt()+500}var me=null,Qa=!1,ac=null,bn=null,Ti=!1,Qs=null,ks=90,lc=[],uc=[],qn=null,Js=0,cc=null,Ta=-1,Wn=0,wa=0,eo=null,Aa=!1;function Qt(){return(De&48)!==0?Dt():Ta!==-1?Ta:Ta=Dt()}function mi(t){if(t=t.mode,(t&2)===0)return 1;if((t&4)===0)return Zr()===99?1:2;if(Wn===0&&(Wn=ls),I_.transition!==0){wa!==0&&(wa=sc!==null?sc.pendingLanes:0),t=Wn;var e=4186112&~wa;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=Zr(),(De&4)!==0&&t===98?t=Ia(12,Wn):(t=B0(t),t=Ia(t,Wn)),t}function gi(t,e,n){if(50<Js)throw Js=0,cc=null,Error(ne(185));if(t=gl(t,e),t===null)return null;ll(t,e,n),t===Ht&&(us|=e,Ct===4&&Wr(t,Ut));var i=Zr();e===1?(De&8)!==0&&(De&48)===0?fc(t):(fn(t,n),De===0&&(cs(),Nn())):((De&4)===0||i!==98&&i!==99||(qn===null?qn=new Set([t]):qn.add(t)),fn(t,n)),sc=t}function gl(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function fn(t,e){for(var n=t.callbackNode,i=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-Ei(o),l=1<<a,u=s[a];if(u===-1){if((l&i)===0||(l&r)!==0){u=e,Ar(l);var h=Ze;s[a]=10<=h?u+250:6<=h?u+5e3:-1}}else u<=e&&(t.expiredLanes|=l);o&=~l}if(i=uo(t,t===Ht?Ut:0),e=Ze,i===0)n!==null&&(n!==Hl&&ju(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==Hl&&ju(n)}e===15?(n=fc.bind(null,t),Vn===null?(Vn=[n],Ma=Qc(hl,zm)):Vn.push(n),n=Hl):e===14?n=po(99,fc.bind(null,t)):(n=z0(e),n=po(n,lg.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function lg(t){if(Ta=-1,wa=Wn=0,(De&48)!==0)throw Error(ne(327));var e=t.callbackNode;if(bi()&&t.callbackNode!==e)return null;var n=uo(t,t===Ht?Ut:0);if(n===0)return null;var i=n,r=De;De|=16;var s=dg();(Ht!==t||Ut!==i)&&(cs(),Xr(t,i));do try{Z_();break}catch(a){fg(t,a)}while(1);if(Jc(),Za.current=s,De=r,xt!==null?i=0:(Ht=null,Ut=0,i=Ct),(ls&us)!==0)Xr(t,0);else if(i!==0){if(i===2&&(De|=64,t.hydrate&&(t.hydrate=!1,Kc(t.containerInfo)),n=_m(t),n!==0&&(i=Hs(t,n))),i===1)throw e=ml,Xr(t,0),Wr(t,n),fn(t,Dt()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,i){case 0:case 1:throw Error(ne(345));case 2:Oi(t);break;case 3:if(Wr(t,n),(n&62914560)===n&&(i=hf+500-Dt(),10<i)){if(uo(t,0)!==0)break;if(r=t.suspendedLanes,(r&n)!==n){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=md(Oi.bind(null,t),i);break}Oi(t);break;case 4:if(Wr(t,n),(n&4186112)===n)break;for(i=t.eventTimes,r=-1;0<n;){var o=31-Ei(n);s=1<<o,o=i[o],o>r&&(r=o),n&=~s}if(n=r,n=Dt()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*q_(n/1960))-n,10<n){t.timeoutHandle=md(Oi.bind(null,t),n);break}Oi(t);break;case 5:Oi(t);break;default:throw Error(ne(329))}}return fn(t,Dt()),t.callbackNode===e?lg.bind(null,t):null}function Wr(t,e){for(e&=~df,e&=~us,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ei(e),i=1<<n;t[n]=-1,e&=~i}}function fc(t){if((De&48)!==0)throw Error(ne(327));if(bi(),t===Ht&&(t.expiredLanes&Ut)!==0){var e=Ut,n=Hs(t,e);(ls&us)!==0&&(e=uo(t,e),n=Hs(t,e))}else e=uo(t,0),n=Hs(t,e);if(t.tag!==0&&n===2&&(De|=64,t.hydrate&&(t.hydrate=!1,Kc(t.containerInfo)),e=_m(t),e!==0&&(n=Hs(t,e))),n===1)throw n=ml,Xr(t,0),Wr(t,e),fn(t,Dt()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,Oi(t),fn(t,Dt()),null}function $_(){if(qn!==null){var t=qn;qn=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,fn(e,Dt())})}Nn()}function ug(t,e){var n=De;De|=1;try{return t(e)}finally{De=n,De===0&&(cs(),Nn())}}function cg(t,e){var n=De;De&=-2,De|=8;try{return t(e)}finally{De=n,De===0&&(cs(),Nn())}}function Vo(t,e){ft(rc,er),er|=e,ls|=e}function pf(){er=rc.current,nt(rc)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,b_(n)),xt!==null)for(n=xt.return;n!==null;){var i=n;switch(i.tag){case 1:i=i.type.childContextTypes,i!=null&&za();break;case 3:Qr(),nt(Xt),nt(Nt),rf();break;case 5:nf(i);break;case 4:Qr();break;case 13:nt(ct);break;case 19:nt(ct);break;case 10:ef(i);break;case 23:case 24:pf()}n=n.return}Ht=t,xt=wi(t.current,null),Ut=er=ls=e,Ct=0,ml=null,df=us=Ao=0}function fg(t,e){do{var n=xt;try{if(Jc(),Ks.current=Ka,ja){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ja=!1}if(vo=0,At=Pt=ht=null,Zs=!1,ff.current=null,n===null||n.return===null){Ct=1,ml=e,xt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ut,a.flags|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l;if((a.mode&2)===0){var h=a.alternate;h?(a.updateQueue=h.updateQueue,a.memoizedState=h.memoizedState,a.lanes=h.lanes):(a.updateQueue=null,a.memoizedState=null)}var p=(ct.current&1)!==0,d=o;do{var m;if(m=d.tag===13){var v=d.memoizedState;if(v!==null)m=v.dehydrated!==null;else{var x=d.memoizedProps;m=x.fallback===void 0?!1:x.unstable_avoidThisFallback!==!0?!0:!p}}if(m){var f=d.updateQueue;if(f===null){var c=new Set;c.add(u),d.updateQueue=c}else f.add(u);if((d.mode&2)===0){if(d.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var g=hi(-1,1);g.tag=2,pi(a,g)}a.lanes|=1;break e}l=void 0,a=e;var _=s.pingCache;if(_===null?(_=s.pingCache=new V_,l=new Set,_.set(u,l)):(l=_.get(u),l===void 0&&(l=new Set,_.set(u,l))),!l.has(a)){l.add(a);var y=nv.bind(null,s,u,a);u.then(y,y)}d.flags|=4096,d.lanes=e;break e}d=d.return}while(d!==null);l=Error((Or(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Ct!==5&&(Ct=2),l=cf(l,a),d=o;do{switch(d.tag){case 3:s=l,d.flags|=4096,e&=-e,d.lanes|=e;var A=sg(d,s,e);Ed(d,A);break e;case 1:s=l;var w=d.type,R=d.stateNode;if((d.flags&64)===0&&(typeof w.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(bn===null||!bn.has(R)))){d.flags|=4096,e&=-e,d.lanes|=e;var N=og(d,s,e);Ed(d,N);break e}}d=d.return}while(d!==null)}pg(n)}catch(S){e=S,xt===n&&n!==null&&(xt=n=n.return);continue}break}while(1)}function dg(){var t=Za.current;return Za.current=Ka,t===null?Ka:t}function Hs(t,e){var n=De;De|=16;var i=dg();Ht===t&&Ut===e||Xr(t,e);do try{K_();break}catch(r){fg(t,r)}while(1);if(Jc(),De=n,Za.current=i,xt!==null)throw Error(ne(261));return Ht=null,Ut=0,Ct}function K_(){for(;xt!==null;)hg(xt)}function Z_(){for(;xt!==null&&!D_();)hg(xt)}function hg(t){var e=gg(t.alternate,t,er);t.memoizedProps=t.pendingProps,e===null?pg(t):xt=e,ff.current=null}function pg(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)===0){if(n=H_(n,e,er),n!==null){xt=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(er&1073741824)!==0||(n.mode&4)===0){for(var i=0,r=n.child;r!==null;)i|=r.lanes|r.childLanes,r=r.sibling;n.childLanes=i}t!==null&&(t.flags&2048)===0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=G_(e),n!==null){n.flags&=2047,xt=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);Ct===0&&(Ct=5)}function Oi(t){var e=Zr();return Ji(99,Q_.bind(null,t,e)),null}function Q_(t,e){do bi();while(Qs!==null);if((De&48)!==0)throw Error(ne(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null;var i=n.lanes|n.childLanes,r=i,s=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var l=31-Ei(s),u=1<<l;r[l]=0,o[l]=-1,a[l]=-1,s&=~u}if(qn!==null&&(i&24)===0&&qn.has(t)&&qn.delete(t),t===Ht&&(xt=Ht=null,Ut=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,i=n.firstEffect):i=n:i=n.firstEffect,i!==null){if(r=De,De|=32,ff.current=null,Bl=xa,o=ld(),Hu(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(u=a.getSelection&&a.getSelection())&&u.rangeCount!==0){a=u.anchorNode,s=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var h=0,p=-1,d=-1,m=0,v=0,x=o,f=null;t:for(;;){for(var c;x!==a||s!==0&&x.nodeType!==3||(p=h+s),x!==l||u!==0&&x.nodeType!==3||(d=h+u),x.nodeType===3&&(h+=x.nodeValue.length),(c=x.firstChild)!==null;)f=x,x=c;for(;;){if(x===o)break t;if(f===a&&++m===s&&(p=h),f===l&&++v===u&&(d=h),(c=x.nextSibling)!==null)break;x=f,f=x.parentNode}x=c}a=p===-1||d===-1?null:{start:p,end:d}}else a=null;a=a||{start:0,end:0}}else a=null;zl={focusedElem:o,selectionRange:a},xa=!1,eo=null,Aa=!1,me=i;do try{J_()}catch(S){if(me===null)throw Error(ne(330));_i(me,S),me=me.nextEffect}while(me!==null);eo=null,me=i;do try{for(o=t;me!==null;){var g=me.flags;if(g&16&&so(me.stateNode,""),g&128){var _=me.alternate;if(_!==null){var y=_.ref;y!==null&&(typeof y=="function"?y(null):y.current=null)}}switch(g&1038){case 2:Yd(me),me.flags&=-3;break;case 6:Yd(me),me.flags&=-3,jl(me.alternate,me);break;case 1024:me.flags&=-1025;break;case 1028:me.flags&=-1025,jl(me.alternate,me);break;case 4:jl(me.alternate,me);break;case 8:a=me,ag(o,a);var A=a.alternate;Xd(a),A!==null&&Xd(A)}me=me.nextEffect}}catch(S){if(me===null)throw Error(ne(330));_i(me,S),me=me.nextEffect}while(me!==null);if(y=zl,_=ld(),g=y.focusedElem,o=y.selectionRange,_!==g&&g&&g.ownerDocument&&wm(g.ownerDocument.documentElement,g)){for(o!==null&&Hu(g)&&(_=o.start,y=o.end,y===void 0&&(y=_),"selectionStart"in g?(g.selectionStart=_,g.selectionEnd=Math.min(y,g.value.length)):(y=(_=g.ownerDocument||document)&&_.defaultView||window,y.getSelection&&(y=y.getSelection(),a=g.textContent.length,A=Math.min(o.start,a),o=o.end===void 0?A:Math.min(o.end,a),!y.extend&&A>o&&(a=o,o=A,A=a),a=ad(g,A),s=ad(g,o),a&&s&&(y.rangeCount!==1||y.anchorNode!==a.node||y.anchorOffset!==a.offset||y.focusNode!==s.node||y.focusOffset!==s.offset)&&(_=_.createRange(),_.setStart(a.node,a.offset),y.removeAllRanges(),A>o?(y.addRange(_),y.extend(s.node,s.offset)):(_.setEnd(s.node,s.offset),y.addRange(_)))))),_=[],y=g;y=y.parentNode;)y.nodeType===1&&_.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<_.length;g++)y=_[g],y.element.scrollLeft=y.left,y.element.scrollTop=y.top}xa=!!Bl,zl=Bl=null,t.current=n,me=i;do try{for(g=t;me!==null;){var w=me.flags;if(w&36&&j_(g,me.alternate,me),w&128){_=void 0;var R=me.ref;if(R!==null){var N=me.stateNode;switch(me.tag){case 5:_=N;break;default:_=N}typeof R=="function"?R(_):R.current=_}}me=me.nextEffect}}catch(S){if(me===null)throw Error(ne(330));_i(me,S),me=me.nextEffect}while(me!==null);me=null,N_(),De=r}else t.current=n;if(Ti)Ti=!1,Qs=t,ks=e;else for(me=i;me!==null;)e=me.nextEffect,me.nextEffect=null,me.flags&8&&(w=me,w.sibling=null,w.stateNode=null),me=e;if(i=t.pendingLanes,i===0&&(bn=null),i===1?t===cc?Js++:(Js=0,cc=t):Js=0,n=n.stateNode,Yi&&typeof Yi.onCommitFiberRoot=="function")try{Yi.onCommitFiberRoot(Zc,n,void 0,(n.current.flags&64)===64)}catch{}if(fn(t,Dt()),Qa)throw Qa=!1,t=ac,ac=null,t;return(De&8)!==0||Nn(),null}function J_(){for(;me!==null;){var t=me.alternate;Aa||eo===null||((me.flags&8)!==0?Yf(me,eo)&&(Aa=!0):me.tag===13&&Y_(t,me)&&Yf(me,eo)&&(Aa=!0));var e=me.flags;(e&256)!==0&&X_(t,me),(e&512)===0||Ti||(Ti=!0,po(97,function(){return bi(),null})),me=me.nextEffect}}function bi(){if(ks!==90){var t=97<ks?97:ks;return ks=90,Ji(t,tv)}return!1}function ev(t,e){lc.push(e,t),Ti||(Ti=!0,po(97,function(){return bi(),null}))}function mg(t,e){uc.push(e,t),Ti||(Ti=!0,po(97,function(){return bi(),null}))}function tv(){if(Qs===null)return!1;var t=Qs;if(Qs=null,(De&48)!==0)throw Error(ne(331));var e=De;De|=32;var n=uc;uc=[];for(var i=0;i<n.length;i+=2){var r=n[i],s=n[i+1],o=r.destroy;if(r.destroy=void 0,typeof o=="function")try{o()}catch(l){if(s===null)throw Error(ne(330));_i(s,l)}}for(n=lc,lc=[],i=0;i<n.length;i+=2){r=n[i],s=n[i+1];try{var a=r.create;r.destroy=a()}catch(l){if(s===null)throw Error(ne(330));_i(s,l)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return De=e,Nn(),!0}function $d(t,e,n){e=cf(n,e),e=sg(t,e,1),pi(t,e),e=Qt(),t=gl(t,1),t!==null&&(ll(t,1,e),fn(t,e))}function _i(t,e){if(t.tag===3)$d(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){$d(n,t,e);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(bn===null||!bn.has(i))){t=cf(e,t);var r=og(n,t,1);if(pi(n,r),r=Qt(),n=gl(n,1),n!==null)ll(n,1,r),fn(n,r);else if(typeof i.componentDidCatch=="function"&&(bn===null||!bn.has(i)))try{i.componentDidCatch(e,t)}catch{}break}}n=n.return}}function nv(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Ht===t&&(Ut&n)===n&&(Ct===4||Ct===3&&(Ut&62914560)===Ut&&500>Dt()-hf?Xr(t,0):df|=n),fn(t,e)}function iv(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)===0?e=1:(e&4)===0?e=Zr()===99?1:2:(Wn===0&&(Wn=ls),e=Cr(62914560&~Wn),e===0&&(e=4194304))),n=Qt(),t=gl(t,e),t!==null&&(ll(t,e,n),fn(t,n))}var gg;gg=function(t,e,n){var i=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||Xt.current)En=!0;else if((n&i)!==0)En=(t.flags&16384)!==0;else{switch(En=!1,e.tag){case 3:Id(e),Vl();break;case 5:Ad(e);break;case 1:jt(e.type)&&Ea(e);break;case 4:$u(e,e.stateNode.containerInfo);break;case 10:i=e.memoizedProps.value;var r=e.type._context;ft(ka,r._currentValue),r._currentValue=i;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!==0?Fd(t,e,n):(ft(ct,ct.current&1),e=jn(t,e,n),e!==null?e.sibling:null);ft(ct,ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&64)!==0){if(i)return Hd(t,e,n);e.flags|=64}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(ct,ct.current),i)break;return null;case 23:case 24:return e.lanes=0,Wl(t,e,n)}return jn(t,e,n)}else En=!1;switch(e.lanes=0,e.tag){case 2:if(i=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,r=Kr(e,Nt.current),Gr(e,n),r=of(null,e,i,t,r,n),e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(i)){var s=!0;Ea(e)}else s=!1;e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,tf(e);var o=i.getDerivedStateFromProps;typeof o=="function"&&Va(e,i,o,t),r.updater=pl,e.stateNode=r,r._reactInternals=e,qu(e,i,t,n),e=Ju(null,e,i,!0,s,n)}else e.tag=0,Wt(null,e,r,n),e=e.child;return e;case 16:r=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=sv(r),t=vn(r,t),s){case 0:e=Qu(null,e,r,t,n);break e;case 1:e=Nd(null,e,r,t,n);break e;case 11:e=Dd(null,e,r,t,n);break e;case 14:e=Ud(null,e,r,vn(r.type,t),i,n);break e}throw Error(ne(306,r,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vn(i,r),Qu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vn(i,r),Nd(t,e,i,r,n);case 3:if(Id(e),i=e.updateQueue,t===null||i===null)throw Error(ne(282));if(i=e.pendingProps,r=e.memoizedState,r=r!==null?r.element:null,Hm(t,e),mo(e,i,null,n),i=e.memoizedState.element,i===r)Vl(),e=jn(t,e,n);else{if(r=e.stateNode,(s=r.hydrate)&&(ai=Hr(e.stateNode.containerInfo.firstChild),Xn=e,s=Pn=!0),s){if(t=r.mutableSourceEagerHydrationData,t!=null)for(r=0;r<t.length;r+=2)s=t[r],s._workInProgressVersionPrimary=t[r+1],Vr.push(s);for(n=Xm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else Wt(t,e,i,n),Vl();e=e.child}return e;case 5:return Ad(e),t===null&&Ku(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Wu(i,r)?o=null:s!==null&&Wu(i,s)&&(e.flags|=16),tg(t,e),Wt(t,e,o,n),e.child;case 6:return t===null&&Ku(e),null;case 13:return Fd(t,e,n);case 4:return $u(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Wa(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vn(i,r),Dd(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value;var a=e.type._context;if(ft(ka,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=on(a,s)?0:(typeof i._calculateChangedBits=="function"?i._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===r.children&&!Xt.current){e=jn(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var u=l.firstContext;u!==null;){if(u.context===i&&(u.observedBits&s)!==0){a.tag===1&&(u=hi(-1,n&-n),u.tag=2,pi(a,u)),a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),km(a.return,n),l.lanes|=n;break}u=u.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,s=e.pendingProps,i=s.children,Gr(e,n),r=cn(r,s.unstable_observedBits),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return r=e.type,s=vn(r,e.pendingProps),s=vn(r.type,s),Ud(t,e,r,s,i,n);case 15:return eg(t,e,e.type,e.pendingProps,i,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vn(i,r),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,jt(i)?(t=!0,Ea(e)):t=!1,Gr(e,n),Vm(e,i,r),qu(e,i,r,n),Ju(null,e,i,!0,t,n);case 19:return Hd(t,e,n);case 23:return Wl(t,e,n);case 24:return Wl(t,e,n)}throw Error(ne(156,e.tag))};function rv(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function an(t,e,n,i){return new rv(t,e,n,i)}function mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sv(t){if(typeof t=="function")return mf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sl)return 11;if(t===ol)return 14}return 2}function wi(t,e){var n=t.alternate;return n===null?(n=an(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ca(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")mf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ri:return jr(n.children,r,s,e);case jp:o=8,r|=16;break;case Lc:o=8,r|=1;break;case Vs:return t=an(12,n,e,r|8),t.elementType=Vs,t.type=Vs,t.lanes=s,t;case Ws:return t=an(13,n,e,r),t.type=Ws,t.elementType=Ws,t.lanes=s,t;case Pa:return t=an(19,n,e,r),t.elementType=Pa,t.lanes=s,t;case Fc:return gf(n,r,s,e);case Au:return t=an(24,n,e,r),t.elementType=Au,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Pc:o=10;break e;case Dc:o=9;break e;case sl:o=11;break e;case ol:o=14;break e;case Uc:o=16,i=null;break e;case Nc:o=22;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=an(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function jr(t,e,n,i){return t=an(7,t,i,e),t.lanes=n,t}function gf(t,e,n,i){return t=an(23,t,i,e),t.elementType=Fc,t.lanes=n,t}function Yl(t,e,n){return t=an(6,t,null,e),t.lanes=n,t}function ql(t,e,n){return e=an(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ov(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Pl(0),this.expirationTimes=Pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pl(0),this.mutableSourceEagerHydrationData=null}function av(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hi,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ja(t,e,n,i){var r=e.current,s=Qt(),o=mi(r);e:if(n){n=n._reactInternals;t:{if(rr(n)!==n||n.tag!==1)throw Error(ne(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(jt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(ne(171))}if(n.tag===1){var l=n.type;if(jt(l)){n=Um(n,l,a);break e}}n=a}else n=Mi;return e.context===null?e.context=n:e.pendingContext=n,e=hi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),pi(r,e),gi(r,o,s),o}function $l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _f(t,e){Kd(t,e),(t=t.alternate)&&Kd(t,e)}function lv(){return null}function vf(t,e,n){var i=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new ov(t,e,n!=null&&n.hydrate===!0),e=an(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,tf(e),t[as]=n.current,Rm(t.nodeType===8?t.parentNode:t),i)for(t=0;t<i.length;t++){e=i[t];var r=e._getVersion;r=r(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,r]:n.mutableSourceEagerHydrationData.push(e,r)}this._internalRoot=n}vf.prototype.render=function(t){Ja(t,this._internalRoot,null,null)};vf.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;Ja(null,t,null,function(){e[as]=null})};function Co(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function uv(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new vf(t,0,e?{hydrate:!0}:void 0)}function _l(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof r=="function"){var a=r;r=function(){var u=$l(o);a.call(u)}}Ja(e,o,t,r)}else{if(s=n._reactRootContainer=uv(n,i),o=s._internalRoot,typeof r=="function"){var l=r;r=function(){var u=$l(o);l.call(u)}}cg(function(){Ja(e,o,t,r)})}return $l(o)}am=function(t){if(t.tag===13){var e=Qt();gi(t,4,e),_f(t,4)}};Hc=function(t){if(t.tag===13){var e=Qt();gi(t,67108864,e),_f(t,67108864)}};lm=function(t){if(t.tag===13){var e=Qt(),n=mi(t);gi(t,n,e),_f(t,n)}};um=function(t,e){return e()};Fu=function(t,e,n){switch(e){case"input":if(Ru(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=dl(i);if(!r)throw Error(ne(90));qp(i),Ru(i,r)}}}break;case"textarea":Kp(t,n);break;case"select":e=n.value,e!=null&&Br(t,!!n.multiple,e,!1)}};Bc=ug;im=function(t,e,n,i,r){var s=De;De|=4;try{return Ji(98,t.bind(null,e,n,i,r))}finally{De=s,De===0&&(cs(),Nn())}};zc=function(){(De&49)===0&&($_(),bi())};rm=function(t,e){var n=De;De|=2;try{return t(e)}finally{De=n,De===0&&(cs(),Nn())}};function _g(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Co(e))throw Error(ne(200));return av(t,e,null,n)}var cv={Events:[To,Ur,dl,tm,nm,bi,{current:!1}]},Rs={findFiberByHostInstance:Vi,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},fv={bundleType:Rs.bundleType,version:Rs.version,rendererPackageName:Rs.rendererPackageName,rendererConfig:Rs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=om(t),t===null?null:t.stateNode},findFiberByHostInstance:Rs.findFiberByHostInstance||lv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wo.isDisabled&&Wo.supportsFiber)try{Zc=Wo.inject(fv),Yi=Wo}catch{}}dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cv;dn.createPortal=_g;dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):Error(ne(268,Object.keys(t)));return t=om(e),t=t===null?null:t.stateNode,t};dn.flushSync=function(t,e){var n=De;if((n&48)!==0)return t(e);De|=1;try{if(t)return Ji(99,t.bind(null,e))}finally{De=n,Nn()}};dn.hydrate=function(t,e,n){if(!Co(e))throw Error(ne(200));return _l(null,t,e,!0,n)};dn.render=function(t,e,n){if(!Co(e))throw Error(ne(200));return _l(null,t,e,!1,n)};dn.unmountComponentAtNode=function(t){if(!Co(t))throw Error(ne(40));return t._reactRootContainer?(cg(function(){_l(null,null,t,!1,function(){t._reactRootContainer=null,t[as]=null})}),!0):!1};dn.unstable_batchedUpdates=ug;dn.unstable_createPortal=function(t,e){return _g(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};dn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Co(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return _l(t,e,n,!1,i)};dn.version="17.0.2";function vg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vg)}catch(t){console.error(t)}}vg(),Gp.exports=dn;var dv=Gp.exports;/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pv=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),Zd=t=>{const e=pv(t);return e.charAt(0).toUpperCase()+e.slice(1)},xg=(...t)=>t.filter((e,n,i)=>Boolean(e)&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim(),mv=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=ke.exports.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>ke.exports.createElement("svg",{ref:l,...gv,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:xg("lucide",r),...!s&&!mv(a)&&{"aria-hidden":"true"},...a},[...o.map(([u,h])=>ke.exports.createElement(u,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=(t,e)=>{const n=ke.exports.forwardRef(({className:i,...r},s)=>ke.exports.createElement(_v,{ref:s,iconNode:e,className:xg(`lucide-${hv(Zd(t))}`,`lucide-${t}`,i),...r}));return n.displayName=Zd(t),n};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],xv=Li("arrow-right",vv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Sv=Li("arrow-up-right",yv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Mv=Li("github",Ev);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],wv=Li("pause",Tv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Cv=Li("play",Av);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Xo=Li("rotate-ccw",Rv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Lv=Li("volume-2",bv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Dv=Li("volume-x",Pv);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xf="156",Uv=0,Qd=1,Nv=2,yg=1,Iv=2,Gn=3,Ai=0,Yt=1,An=2,vi=0,Yr=1,el=2,Jd=3,eh=4,Fv=5,Rr=100,Ov=101,Bv=102,th=103,nh=104,zv=200,kv=201,Hv=202,Gv=203,Sg=204,Eg=205,Vv=206,Wv=207,Xv=208,jv=209,Yv=210,qv=0,$v=1,Kv=2,dc=3,Zv=4,Qv=5,Jv=6,ex=7,Mg=0,tx=1,nx=2,xi=0,ix=1,rx=2,sx=3,Tg=4,ox=5,wg=300,Jr=301,es=302,hc=303,pc=304,vl=306,mc=1e3,yn=1001,gc=1002,zt=1003,ih=1004,Kl=1005,sn=1006,ax=1007,xo=1008,yi=1009,lx=1010,ux=1011,yf=1012,Ag=1013,li=1014,ui=1015,yo=1016,Cg=1017,Rg=1018,qi=1020,cx=1021,Sn=1023,fx=1024,dx=1025,$i=1026,ts=1027,hx=1028,bg=1029,px=1030,Lg=1031,Pg=1033,Zl=33776,Ql=33777,Jl=33778,eu=33779,rh=35840,sh=35841,oh=35842,ah=35843,mx=36196,lh=37492,uh=37496,ch=37808,fh=37809,dh=37810,hh=37811,ph=37812,mh=37813,gh=37814,_h=37815,vh=37816,xh=37817,yh=37818,Sh=37819,Eh=37820,Mh=37821,tu=36492,Th=36494,wh=36495,gx=36283,Ah=36284,Ch=36285,Rh=36286,Dg=3e3,Ki=3001,_x=3200,vx=3201,xx=0,yx=1,Zi="",tt="srgb",Dn="srgb-linear",xl="display-p3",nu=7680,Sx=519,Ex=512,Mx=513,Tx=514,wx=515,Ax=516,Cx=517,Rx=518,bx=519,bh=35044,Lx=35048,Lh="300 es",_c=1035,Yn=2e3,tl=2001;class fs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ph=1234567;const to=Math.PI/180,So=180/Math.PI;function ds(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[t&255]+bt[t>>8&255]+bt[t>>16&255]+bt[t>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[n&63|128]+bt[n>>8&255]+"-"+bt[n>>16&255]+bt[n>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function kt(t,e,n){return Math.max(e,Math.min(n,t))}function Sf(t,e){return(t%e+e)%e}function Px(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Dx(t,e,n){return t!==e?(n-t)/(e-t):0}function no(t,e,n){return(1-n)*t+n*e}function Ux(t,e,n,i){return no(t,e,1-Math.exp(-n*i))}function Nx(t,e=1){return e-Math.abs(Sf(t,e*2)-e)}function Ix(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Fx(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Ox(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Bx(t,e){return t+Math.random()*(e-t)}function zx(t){return t*(.5-Math.random())}function kx(t){t!==void 0&&(Ph=t);let e=Ph+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hx(t){return t*to}function Gx(t){return t*So}function vc(t){return(t&t-1)===0&&t!==0}function Vx(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function nl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Wx(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),h=o((e+i)/2),p=s((e-i)/2),d=o((e-i)/2),m=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*h,l*p,l*d,a*u);break;case"YZY":t.set(l*d,a*h,l*p,a*u);break;case"ZXZ":t.set(l*p,l*d,a*h,a*u);break;case"XZX":t.set(a*h,l*v,l*m,a*u);break;case"YXY":t.set(l*m,a*h,l*v,a*u);break;case"ZYZ":t.set(l*v,l*m,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function br(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ot(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const jo={DEG2RAD:to,RAD2DEG:So,generateUUID:ds,clamp:kt,euclideanModulo:Sf,mapLinear:Px,inverseLerp:Dx,lerp:no,damp:Ux,pingpong:Nx,smoothstep:Ix,smootherstep:Fx,randInt:Ox,randFloat:Bx,randFloatSpread:zx,seededRandom:kx,degToRad:Hx,radToDeg:Gx,isPowerOfTwo:vc,ceilPowerOfTwo:Vx,floorPowerOfTwo:nl,setQuaternionFromProperEuler:Wx,normalize:Ot,denormalize:br};class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,s,o,a,l,u){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],h=i[4],p=i[7],d=i[2],m=i[5],v=i[8],x=r[0],f=r[3],c=r[6],g=r[1],_=r[4],y=r[7],A=r[2],w=r[5],R=r[8];return s[0]=o*x+a*g+l*A,s[3]=o*f+a*_+l*w,s[6]=o*c+a*y+l*R,s[1]=u*x+h*g+p*A,s[4]=u*f+h*_+p*w,s[7]=u*c+h*y+p*R,s[2]=d*x+m*g+v*A,s[5]=d*f+m*_+v*w,s[8]=d*c+m*y+v*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return n*o*h-n*a*u-i*s*h+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],p=h*o-a*u,d=a*l-h*s,m=u*s-o*l,v=n*p+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=p*x,e[1]=(r*u-h*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(h*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(iu.makeScale(e,n)),this}rotate(e){return this.premultiply(iu.makeRotation(-e)),this}translate(e,n){return this.premultiply(iu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const iu=new He;function Ug(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function il(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Xx(){const t=il("canvas");return t.style.display="block",t}const Dh={};function io(t){t in Dh||(Dh[t]=!0,console.warn(t))}function qr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ru(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const jx=new He().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Yx=new He().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function qx(t){return t.convertSRGBToLinear().applyMatrix3(Yx)}function $x(t){return t.applyMatrix3(jx).convertLinearToSRGB()}const Kx={[Dn]:t=>t,[tt]:t=>t.convertSRGBToLinear(),[xl]:qx},Zx={[Dn]:t=>t,[tt]:t=>t.convertLinearToSRGB(),[xl]:$x},pn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Dn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Kx[e],r=Zx[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let lr;class Ng{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{lr===void 0&&(lr=il("canvas")),lr.width=e.width,lr.height=e.height;const i=lr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=lr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const n=il("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(qr(n[i]/255)*255):n[i]=qr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qx=0;class Ig{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=ds(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(su(r[o].image)):s.push(su(r[o]))}else s=su(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function su(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?Ng.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jx=0;class Jt extends fs{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=yn,r=yn,s=sn,o=xo,a=Sn,l=yi,u=Jt.DEFAULT_ANISOTROPY,h=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=ds(),this.name="",this.source=new Ig(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ki?tt:Zi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mc:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mc:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===tt?Ki:Dg}set encoding(e){io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ki?tt:Zi}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=wg;Jt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,n=0,i=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],h=l[4],p=l[8],d=l[1],m=l[5],v=l[9],x=l[2],f=l[6],c=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-x)<.01&&Math.abs(v-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+x)<.1&&Math.abs(v+f)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,y=(m+1)/2,A=(c+1)/2,w=(h+d)/4,R=(p+x)/4,N=(v+f)/4;return _>y&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=w/i,s=R/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=N/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=N/s),this.set(i,r,s,n),this}let g=Math.sqrt((f-v)*(f-v)+(p-x)*(p-x)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(f-v)/g,this.y=(p-x)/g,this.z=(d-h)/g,this.w=Math.acos((u+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e1 extends fs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new it(0,0,e,n),this.scissorTest=!1,this.viewport=new it(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(io("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ki?tt:Zi),this.texture=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:sn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ig(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends e1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Fg extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class t1 extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ro{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3];const d=s[o+0],m=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=h,e[n+3]=p;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=v,e[n+3]=x;return}if(p!==x||l!==d||u!==m||h!==v){let f=1-a;const c=l*d+u*m+h*v+p*x,g=c>=0?1:-1,_=1-c*c;if(_>Number.EPSILON){const A=Math.sqrt(_),w=Math.atan2(A,c*g);f=Math.sin(f*w)/A,a=Math.sin(a*w)/A}const y=a*g;if(l=l*f+d*y,u=u*f+m*y,h=h*f+v*y,p=p*f+x*y,f===1-a){const A=1/Math.sqrt(l*l+u*u+h*h+p*p);l*=A,u*=A,h*=A,p*=A}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],h=i[r+3],p=s[o],d=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+h*p+l*m-u*d,e[n+1]=l*v+h*d+u*p-a*m,e[n+2]=u*v+h*m+a*d-l*p,e[n+3]=h*v-a*p-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),h=a(r/2),p=a(s/2),d=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*h*p+u*m*v,this._y=u*m*p-d*h*v,this._z=u*h*v+d*m*p,this._w=u*h*p-d*m*v;break;case"YXZ":this._x=d*h*p+u*m*v,this._y=u*m*p-d*h*v,this._z=u*h*v-d*m*p,this._w=u*h*p+d*m*v;break;case"ZXY":this._x=d*h*p-u*m*v,this._y=u*m*p+d*h*v,this._z=u*h*v+d*m*p,this._w=u*h*p-d*m*v;break;case"ZYX":this._x=d*h*p-u*m*v,this._y=u*m*p+d*h*v,this._z=u*h*v-d*m*p,this._w=u*h*p+d*m*v;break;case"YZX":this._x=d*h*p+u*m*v,this._y=u*m*p+d*h*v,this._z=u*h*v-d*m*p,this._w=u*h*p-d*m*v;break;case"XZY":this._x=d*h*p-u*m*v,this._y=u*m*p-d*h*v,this._z=u*h*v+d*m*p,this._w=u*h*p+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],h=n[6],p=n[10],d=i+a+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>p){const m=2*Math.sqrt(1+i-a-p);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>p){const m=2*Math.sqrt(1+a-i-p);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+o*a+r*u-s*l,this._y=r*h+o*l+s*a-i*u,this._z=s*h+o*u+i*l-r*a,this._w=o*h-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),p=Math.sin((1-n)*h)/u,d=Math.sin(n*h)/u;return this._w=o*p+this._w*d,this._x=i*p+this._x*d,this._y=r*p+this._y*d,this._z=s*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Uh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Uh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,h=l*i+a*n-s*r,p=l*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=u*l+d*-s+h*-a-p*-o,this.y=h*l+d*-o+p*-s-u*-a,this.z=p*l+d*-a+u*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ou.copy(this).projectOnVector(e),this.sub(ou)}reflect(e){return this.sub(ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ou=new U,Uh=new Ro;class or{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ur.copy(e.boundingBox),ur.applyMatrix4(e.matrixWorld),this.union(ur);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)On.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(On)}else r.boundingBox===null&&r.computeBoundingBox(),ur.copy(r.boundingBox),ur.applyMatrix4(e.matrixWorld),this.union(ur)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),Yo.subVectors(this.max,bs),cr.subVectors(e.a,bs),fr.subVectors(e.b,bs),dr.subVectors(e.c,bs),Jn.subVectors(fr,cr),ei.subVectors(dr,fr),Ui.subVectors(cr,dr);let n=[0,-Jn.z,Jn.y,0,-ei.z,ei.y,0,-Ui.z,Ui.y,Jn.z,0,-Jn.x,ei.z,0,-ei.x,Ui.z,0,-Ui.x,-Jn.y,Jn.x,0,-ei.y,ei.x,0,-Ui.y,Ui.x,0];return!au(n,cr,fr,dr,Yo)||(n=[1,0,0,0,1,0,0,0,1],!au(n,cr,fr,dr,Yo))?!1:(qo.crossVectors(Jn,ei),n=[qo.x,qo.y,qo.z],au(n,cr,fr,dr,Yo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new U,new U,new U,new U,new U,new U,new U,new U],On=new U,ur=new or,cr=new U,fr=new U,dr=new U,Jn=new U,ei=new U,Ui=new U,bs=new U,Yo=new U,qo=new U,Ni=new U;function au(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ni.fromArray(t,s);const a=r.x*Math.abs(Ni.x)+r.y*Math.abs(Ni.y)+r.z*Math.abs(Ni.z),l=e.dot(Ni),u=n.dot(Ni),h=i.dot(Ni);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const n1=new or,Ls=new U,lu=new U;class hs{constructor(e=new U,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):n1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);const n=Ls.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ls,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(lu)),this.expandByPoint(Ls.copy(e.center).sub(lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new U,uu=new U,$o=new U,ti=new U,cu=new U,Ko=new U,fu=new U;class Og{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Bn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,n),Bn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){uu.copy(e).add(n).multiplyScalar(.5),$o.copy(n).sub(e).normalize(),ti.copy(this.origin).sub(uu);const s=e.distanceTo(n)*.5,o=-this.direction.dot($o),a=ti.dot(this.direction),l=-ti.dot($o),u=ti.lengthSq(),h=Math.abs(1-o*o);let p,d,m,v;if(h>0)if(p=o*l-a,d=o*a-l,v=s*h,p>=0)if(d>=-v)if(d<=v){const x=1/h;p*=x,d*=x,m=p*(p+o*d+2*a)+d*(o*p+d+2*l)+u}else d=s,p=Math.max(0,-(o*d+a)),m=-p*p+d*(d+2*l)+u;else d=-s,p=Math.max(0,-(o*d+a)),m=-p*p+d*(d+2*l)+u;else d<=-v?(p=Math.max(0,-(-o*s+a)),d=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+u):d<=v?(p=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(p=Math.max(0,-(o*s+a)),d=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+u);else d=o>0?-s:s,p=Math.max(0,-(o*d+a)),m=-p*p+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(uu).addScaledVector($o,d),m}intersectSphere(e,n){Bn.subVectors(e.center,this.origin);const i=Bn.dot(this.direction),r=Bn.dot(Bn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(a=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,n,i,r,s){cu.subVectors(n,e),Ko.subVectors(i,e),fu.crossVectors(cu,Ko);let o=this.direction.dot(fu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,e);const l=a*this.direction.dot(Ko.crossVectors(ti,Ko));if(l<0)return null;const u=a*this.direction.dot(cu.cross(ti));if(u<0||l+u>o)return null;const h=-a*ti.dot(fu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,n,i,r,s,o,a,l,u,h,p,d,m,v,x,f){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,h,p,d,m,v,x,f)}set(e,n,i,r,s,o,a,l,u,h,p,d,m,v,x,f){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=h,c[10]=p,c[14]=d,c[3]=m,c[7]=v,c[11]=x,c[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/hr.setFromMatrixColumn(e,0).length(),s=1/hr.setFromMatrixColumn(e,1).length(),o=1/hr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=o*h,m=o*p,v=a*h,x=a*p;n[0]=l*h,n[4]=-l*p,n[8]=u,n[1]=m+v*u,n[5]=d-x*u,n[9]=-a*l,n[2]=x-d*u,n[6]=v+m*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*h,m=l*p,v=u*h,x=u*p;n[0]=d+x*a,n[4]=v*a-m,n[8]=o*u,n[1]=o*p,n[5]=o*h,n[9]=-a,n[2]=m*a-v,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*h,m=l*p,v=u*h,x=u*p;n[0]=d-x*a,n[4]=-o*p,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*h,n[9]=x-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*h,m=o*p,v=a*h,x=a*p;n[0]=l*h,n[4]=v*u-m,n[8]=d*u+x,n[1]=l*p,n[5]=x*u+d,n[9]=m*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,v=a*l,x=a*u;n[0]=l*h,n[4]=x-d*p,n[8]=v*p+m,n[1]=p,n[5]=o*h,n[9]=-a*h,n[2]=-u*h,n[6]=m*p+v,n[10]=d-x*p}else if(e.order==="XZY"){const d=o*l,m=o*u,v=a*l,x=a*u;n[0]=l*h,n[4]=-p,n[8]=u*h,n[1]=d*p+x,n[5]=o*h,n[9]=m*p-v,n[2]=v*p-m,n[6]=a*h,n[10]=x*p+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(i1,e,r1)}lookAt(e,n,i){const r=this.elements;return $t.subVectors(e,n),$t.lengthSq()===0&&($t.z=1),$t.normalize(),ni.crossVectors(i,$t),ni.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),ni.crossVectors(i,$t)),ni.normalize(),Zo.crossVectors($t,ni),r[0]=ni.x,r[4]=Zo.x,r[8]=$t.x,r[1]=ni.y,r[5]=Zo.y,r[9]=$t.y,r[2]=ni.z,r[6]=Zo.z,r[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],h=i[1],p=i[5],d=i[9],m=i[13],v=i[2],x=i[6],f=i[10],c=i[14],g=i[3],_=i[7],y=i[11],A=i[15],w=r[0],R=r[4],N=r[8],S=r[12],C=r[1],$=r[5],q=r[9],D=r[13],z=r[2],k=r[6],Z=r[10],X=r[14],j=r[3],Q=r[7],K=r[11],b=r[15];return s[0]=o*w+a*C+l*z+u*j,s[4]=o*R+a*$+l*k+u*Q,s[8]=o*N+a*q+l*Z+u*K,s[12]=o*S+a*D+l*X+u*b,s[1]=h*w+p*C+d*z+m*j,s[5]=h*R+p*$+d*k+m*Q,s[9]=h*N+p*q+d*Z+m*K,s[13]=h*S+p*D+d*X+m*b,s[2]=v*w+x*C+f*z+c*j,s[6]=v*R+x*$+f*k+c*Q,s[10]=v*N+x*q+f*Z+c*K,s[14]=v*S+x*D+f*X+c*b,s[3]=g*w+_*C+y*z+A*j,s[7]=g*R+_*$+y*k+A*Q,s[11]=g*N+_*q+y*Z+A*K,s[15]=g*S+_*D+y*X+A*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],p=e[6],d=e[10],m=e[14],v=e[3],x=e[7],f=e[11],c=e[15];return v*(+s*l*p-r*u*p-s*a*d+i*u*d+r*a*m-i*l*m)+x*(+n*l*m-n*u*d+s*o*d-r*o*m+r*u*h-s*l*h)+f*(+n*u*p-n*a*m-s*o*p+i*o*m+s*a*h-i*u*h)+c*(-r*a*h-n*l*p+n*a*d+r*o*p-i*o*d+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],p=e[9],d=e[10],m=e[11],v=e[12],x=e[13],f=e[14],c=e[15],g=p*f*u-x*d*u+x*l*m-a*f*m-p*l*c+a*d*c,_=v*d*u-h*f*u-v*l*m+o*f*m+h*l*c-o*d*c,y=h*x*u-v*p*u+v*a*m-o*x*m-h*a*c+o*p*c,A=v*p*l-h*x*l-v*a*d+o*x*d+h*a*f-o*p*f,w=n*g+i*_+r*y+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=g*R,e[1]=(x*d*s-p*f*s-x*r*m+i*f*m+p*r*c-i*d*c)*R,e[2]=(a*f*s-x*l*s+x*r*u-i*f*u-a*r*c+i*l*c)*R,e[3]=(p*l*s-a*d*s-p*r*u+i*d*u+a*r*m-i*l*m)*R,e[4]=_*R,e[5]=(h*f*s-v*d*s+v*r*m-n*f*m-h*r*c+n*d*c)*R,e[6]=(v*l*s-o*f*s-v*r*u+n*f*u+o*r*c-n*l*c)*R,e[7]=(o*d*s-h*l*s+h*r*u-n*d*u-o*r*m+n*l*m)*R,e[8]=y*R,e[9]=(v*p*s-h*x*s-v*i*m+n*x*m+h*i*c-n*p*c)*R,e[10]=(o*x*s-v*a*s+v*i*u-n*x*u-o*i*c+n*a*c)*R,e[11]=(h*a*s-o*p*s-h*i*u+n*p*u+o*i*m-n*a*m)*R,e[12]=A*R,e[13]=(h*x*r-v*p*r+v*i*d-n*x*d-h*i*f+n*p*f)*R,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*f-n*a*f)*R,e[15]=(o*p*r-h*a*r+h*i*l-n*p*l-o*i*d+n*a*d)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,h=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,h*a+i,h*l-r*o,0,u*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,h=o+o,p=a+a,d=s*u,m=s*h,v=s*p,x=o*h,f=o*p,c=a*p,g=l*u,_=l*h,y=l*p,A=i.x,w=i.y,R=i.z;return r[0]=(1-(x+c))*A,r[1]=(m+y)*A,r[2]=(v-_)*A,r[3]=0,r[4]=(m-y)*w,r[5]=(1-(d+c))*w,r[6]=(f+g)*w,r[7]=0,r[8]=(v+_)*R,r[9]=(f-g)*R,r[10]=(1-(d+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=hr.set(r[0],r[1],r[2]).length();const o=hr.set(r[4],r[5],r[6]).length(),a=hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],mn.copy(this);const u=1/s,h=1/o,p=1/a;return mn.elements[0]*=u,mn.elements[1]*=u,mn.elements[2]*=u,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=p,mn.elements[9]*=p,mn.elements[10]*=p,n.setFromRotationMatrix(mn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Yn){const l=this.elements,u=2*s/(n-e),h=2*s/(i-r),p=(n+e)/(n-e),d=(i+r)/(i-r);let m,v;if(a===Yn)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===tl)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Yn){const l=this.elements,u=1/(n-e),h=1/(i-r),p=1/(o-s),d=(n+e)*u,m=(i+r)*h;let v,x;if(a===Yn)v=(o+s)*p,x=-2*p;else if(a===tl)v=s*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const hr=new U,mn=new rt,i1=new U(0,0,0),r1=new U(1,1,1),ni=new U,Zo=new U,$t=new U,Nh=new rt,Ih=new Ro;class ns{constructor(e=0,n=0,i=0,r=ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],h=r[9],p=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ns.DEFAULT_ORDER="XYZ";class Bg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let s1=0;const Fh=new U,pr=new Ro,zn=new rt,Qo=new U,Ps=new U,o1=new U,a1=new Ro,Oh=new U(1,0,0),Bh=new U(0,1,0),zh=new U(0,0,1),l1={type:"added"},u1={type:"removed"};class Tt extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new U,n=new ns,i=new Ro,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new He}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Bg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return pr.setFromAxisAngle(e,n),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,n){return pr.setFromAxisAngle(e,n),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(Oh,e)}rotateY(e){return this.rotateOnAxis(Bh,e)}rotateZ(e){return this.rotateOnAxis(zh,e)}translateOnAxis(e,n){return Fh.copy(e).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Oh,e)}translateY(e){return this.translateOnAxis(Bh,e)}translateZ(e){return this.translateOnAxis(zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Qo.copy(e):Qo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Ps,Qo,this.up):zn.lookAt(Qo,Ps,this.up),this.quaternion.setFromRotationMatrix(zn),r&&(zn.extractRotation(r.matrixWorld),pr.setFromRotationMatrix(zn),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(l1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(u1)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,o1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,a1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),p=o(e.shapes),d=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new U(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new U,kn=new U,du=new U,Hn=new U,mr=new U,gr=new U,kh=new U,hu=new U,pu=new U,mu=new U;let Jo=!1;class xn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),gn.subVectors(e,n),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){gn.subVectors(r,n),kn.subVectors(i,n),du.subVectors(e,n);const o=gn.dot(gn),a=gn.dot(kn),l=gn.dot(du),u=kn.dot(kn),h=kn.dot(du),p=o*u-a*a;if(p===0)return s.set(-2,-1,-1);const d=1/p,m=(u*l-a*h)*d,v=(o*h-a*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Hn),Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getUV(e,n,i,r,s,o,a,l){return Jo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jo=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Hn),l.setScalar(0),l.addScaledVector(s,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l}static isFrontFacing(e,n,i,r){return gn.subVectors(i,n),kn.subVectors(e,n),gn.cross(kn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),gn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return xn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Jo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jo=!0),xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;mr.subVectors(r,i),gr.subVectors(s,i),hu.subVectors(e,i);const l=mr.dot(hu),u=gr.dot(hu);if(l<=0&&u<=0)return n.copy(i);pu.subVectors(e,r);const h=mr.dot(pu),p=gr.dot(pu);if(h>=0&&p<=h)return n.copy(r);const d=l*p-h*u;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(mr,o);mu.subVectors(e,s);const m=mr.dot(mu),v=gr.dot(mu);if(v>=0&&m<=v)return n.copy(s);const x=m*u-l*v;if(x<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(gr,a);const f=h*v-m*p;if(f<=0&&p-h>=0&&m-v>=0)return kh.subVectors(s,r),a=(p-h)/(p-h+(m-v)),n.copy(r).addScaledVector(kh,a);const c=1/(f+x+d);return o=x*c,a=d*c,n.copy(i).addScaledVector(mr,o).addScaledVector(gr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let c1=0;class bo extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=Yr,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sg,this.blendDst=Eg,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=dc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nu,this.stencilZFail=nu,this.stencilZPass=nu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(i.blending=this.blending),this.side!==Ai&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},ea={h:0,s:0,l:0};function gu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=pn.workingColorSpace){return this.r=e,this.g=n,this.b=i,pn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=pn.workingColorSpace){if(e=Sf(e,1),n=kt(n,0,1),i=kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=gu(o,s,e+1/3),this.g=gu(o,s,e),this.b=gu(o,s,e-1/3)}return pn.toWorkingColorSpace(this,r),this}setStyle(e,n=tt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=tt){const i=zg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}copyLinearToSRGB(e){return this.r=ru(e.r),this.g=ru(e.g),this.b=ru(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return pn.fromWorkingColorSpace(Lt.copy(this),e),Math.round(kt(Lt.r*255,0,255))*65536+Math.round(kt(Lt.g*255,0,255))*256+Math.round(kt(Lt.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=pn.workingColorSpace){pn.fromWorkingColorSpace(Lt.copy(this),n);const i=Lt.r,r=Lt.g,s=Lt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const p=o-a;switch(u=h<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=pn.workingColorSpace){return pn.fromWorkingColorSpace(Lt.copy(this),n),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=tt){pn.fromWorkingColorSpace(Lt.copy(this),e);const n=Lt.r,i=Lt.g,r=Lt.b;return e!==tt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(_n),_n.h+=e,_n.s+=n,_n.l+=i,this.setHSL(_n.h,_n.s,_n.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(_n),e.getHSL(ea);const i=no(_n.h,ea.h,n),r=no(_n.s,ea.s,n),s=no(_n.l,ea.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Ye;Ye.NAMES=zg;class Ef extends bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new U,ta=new $e;class un{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=bh,this.updateRange={offset:0,count:-1},this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ta.fromBufferAttribute(this,n),ta.applyMatrix3(e),this.setXY(n,ta.x,ta.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=br(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=br(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=br(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=br(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=br(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class kg extends un{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Hg extends un{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $n extends un{constructor(e,n,i){super(new Float32Array(e),n,i)}}let f1=0;const nn=new rt,_u=new Tt,_r=new U,Kt=new or,Ds=new or,Mt=new U;class Un extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ug(e)?Hg:kg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,n,i){return nn.makeTranslation(e,n,i),this.applyMatrix4(nn),this}scale(e,n,i){return nn.makeScale(e,n,i),this.applyMatrix4(nn),this}lookAt(e){return _u.lookAt(e),_u.updateMatrix(),this.applyMatrix4(_u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $n(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(Kt.min,Ds.min),Kt.expandByPoint(Mt),Mt.addVectors(Kt.max,Ds.max),Kt.expandByPoint(Mt)):(Kt.expandByPoint(Ds.min),Kt.expandByPoint(Ds.max))}Kt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Mt.fromBufferAttribute(a,u),l&&(_r.fromBufferAttribute(e,u),Mt.add(_r)),r=Math.max(r,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],h=[];for(let C=0;C<a;C++)u[C]=new U,h[C]=new U;const p=new U,d=new U,m=new U,v=new $e,x=new $e,f=new $e,c=new U,g=new U;function _(C,$,q){p.fromArray(r,C*3),d.fromArray(r,$*3),m.fromArray(r,q*3),v.fromArray(o,C*2),x.fromArray(o,$*2),f.fromArray(o,q*2),d.sub(p),m.sub(p),x.sub(v),f.sub(v);const D=1/(x.x*f.y-f.x*x.y);!isFinite(D)||(c.copy(d).multiplyScalar(f.y).addScaledVector(m,-x.y).multiplyScalar(D),g.copy(m).multiplyScalar(x.x).addScaledVector(d,-f.x).multiplyScalar(D),u[C].add(c),u[$].add(c),u[q].add(c),h[C].add(g),h[$].add(g),h[q].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let C=0,$=y.length;C<$;++C){const q=y[C],D=q.start,z=q.count;for(let k=D,Z=D+z;k<Z;k+=3)_(i[k+0],i[k+1],i[k+2])}const A=new U,w=new U,R=new U,N=new U;function S(C){R.fromArray(s,C*3),N.copy(R);const $=u[C];A.copy($),A.sub(R.multiplyScalar(R.dot($))).normalize(),w.crossVectors(N,$);const D=w.dot(h[C])<0?-1:1;l[C*4]=A.x,l[C*4+1]=A.y,l[C*4+2]=A.z,l[C*4+3]=D}for(let C=0,$=y.length;C<$;++C){const q=y[C],D=q.start,z=q.count;for(let k=D,Z=D+z;k<Z;k+=3)S(i[k+0]),S(i[k+1]),S(i[k+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,u=new U,h=new U,p=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),x=e.getX(d+1),f=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,f),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,f),a.add(h),l.add(h),u.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(f,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Mt.fromBufferAttribute(e,n),Mt.normalize(),e.setXYZ(n,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const u=a.array,h=a.itemSize,p=a.normalized,d=new u.constructor(l.length*h);let m=0,v=0;for(let x=0,f=l.length;x<f;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let c=0;c<h;c++)d[v++]=u[m++]}return new un(d,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Un,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let h=0,p=u.length;h<p;h++){const d=u[h],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let p=0,d=u.length;p<d;p++){const m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let d=0,m=p.length;d<m;d++)h.push(p[d].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hh=new rt,Ii=new Og,na=new hs,Gh=new U,vr=new U,xr=new U,yr=new U,vu=new U,ia=new U,ra=new $e,sa=new $e,oa=new $e,Vh=new U,Wh=new U,Xh=new U,aa=new U,la=new U;class Mn extends Tt{constructor(e=new Un,n=new Ef){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ia.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=a[l],p=s[l];h!==0&&(vu.fromBufferAttribute(p,e),o?ia.addScaledVector(vu,h):ia.addScaledVector(vu.sub(n),h))}n.add(ia)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(s),Ii.copy(e.ray).recast(e.near),!(na.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(na,Gh)===null||Ii.origin.distanceToSquared(Gh)>(e.far-e.near)**2))&&(Hh.copy(s).invert(),Ii.copy(e.ray).applyMatrix4(Hh),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ii)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const f=d[v],c=o[f.materialIndex],g=Math.max(f.start,m.start),_=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let y=g,A=_;y<A;y+=3){const w=a.getX(y),R=a.getX(y+1),N=a.getX(y+2);r=ua(this,c,e,i,u,h,p,w,R,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let f=v,c=x;f<c;f+=3){const g=a.getX(f),_=a.getX(f+1),y=a.getX(f+2);r=ua(this,o,e,i,u,h,p,g,_,y),r&&(r.faceIndex=Math.floor(f/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const f=d[v],c=o[f.materialIndex],g=Math.max(f.start,m.start),_=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let y=g,A=_;y<A;y+=3){const w=y,R=y+1,N=y+2;r=ua(this,c,e,i,u,h,p,w,R,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let f=v,c=x;f<c;f+=3){const g=f,_=f+1,y=f+2;r=ua(this,o,e,i,u,h,p,g,_,y),r&&(r.faceIndex=Math.floor(f/3),n.push(r))}}}}function d1(t,e,n,i,r,s,o,a){let l;if(e.side===Yt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ai,a),l===null)return null;la.copy(a),la.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(la);return u<n.near||u>n.far?null:{distance:u,point:la.clone(),object:t}}function ua(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,vr),t.getVertexPosition(l,xr),t.getVertexPosition(u,yr);const h=d1(t,e,n,i,vr,xr,yr,aa);if(h){r&&(ra.fromBufferAttribute(r,a),sa.fromBufferAttribute(r,l),oa.fromBufferAttribute(r,u),h.uv=xn.getInterpolation(aa,vr,xr,yr,ra,sa,oa,new $e)),s&&(ra.fromBufferAttribute(s,a),sa.fromBufferAttribute(s,l),oa.fromBufferAttribute(s,u),h.uv1=xn.getInterpolation(aa,vr,xr,yr,ra,sa,oa,new $e),h.uv2=h.uv1),o&&(Vh.fromBufferAttribute(o,a),Wh.fromBufferAttribute(o,l),Xh.fromBufferAttribute(o,u),h.normal=xn.getInterpolation(aa,vr,xr,yr,Vh,Wh,Xh,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:l,c:u,normal:new U,materialIndex:0};xn.getNormal(vr,xr,yr,p.normal),h.face=p}return h}class ps extends Un{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],h=[],p=[];let d=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $n(u,3)),this.setAttribute("normal",new $n(h,3)),this.setAttribute("uv",new $n(p,2));function v(x,f,c,g,_,y,A,w,R,N,S){const C=y/R,$=A/N,q=y/2,D=A/2,z=w/2,k=R+1,Z=N+1;let X=0,j=0;const Q=new U;for(let K=0;K<Z;K++){const b=K*$-D;for(let P=0;P<k;P++){const Y=P*C-q;Q[x]=Y*g,Q[f]=b*_,Q[c]=z,u.push(Q.x,Q.y,Q.z),Q[x]=0,Q[f]=0,Q[c]=w>0?1:-1,h.push(Q.x,Q.y,Q.z),p.push(P/R),p.push(1-K/N),X+=1}}for(let K=0;K<N;K++)for(let b=0;b<R;b++){const P=d+b+k*K,Y=d+b+k*(K+1),J=d+(b+1)+k*(K+1),te=d+(b+1)+k*K;l.push(P,Y,te),l.push(Y,J,te),j+=6}a.addGroup(m,j,S),m+=j,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Bt(t){const e={};for(let n=0;n<t.length;n++){const i=is(t[n]);for(const r in i)e[r]=i[r]}return e}function h1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Gg(t){return t.getRenderTarget()===null?t.outputColorSpace:Dn}const p1={clone:is,merge:Bt};var m1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m1,this.fragmentShader=g1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=h1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Vg extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Yn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Zt extends Vg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=So*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return So*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(to*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Sr=-90,Er=1;class _1 extends Tt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Zt(Sr,Er,e,n);r.layers=this.layers,this.add(r);const s=new Zt(Sr,Er,e,n);s.layers=this.layers,this.add(s);const o=new Zt(Sr,Er,e,n);o.layers=this.layers,this.add(o);const a=new Zt(Sr,Er,e,n);a.layers=this.layers,this.add(a);const l=new Zt(Sr,Er,e,n);l.layers=this.layers,this.add(l);const u=new Zt(Sr,Er,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,u]=this.children,h=e.getRenderTarget(),p=e.xr.enabled;e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Wg extends Jt{constructor(e,n,i,r,s,o,a,l,u,h){e=e!==void 0?e:[],n=n!==void 0?n:Jr,super(e,n,i,r,s,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class v1 extends tr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(io("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ki?tt:Zi),this.texture=new Wg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:sn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ps(5,5,5),s=new Ci({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:vi});s.uniforms.tEquirect.value=n;const o=new Mn(r,s),a=n.minFilter;return n.minFilter===xo&&(n.minFilter=sn),new _1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const xu=new U,x1=new U,y1=new He;class Bi{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=xu.subVectors(i,n).cross(x1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(xu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||y1.getNormalMatrix(e),r=this.coplanarPoint(xu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new hs,ca=new U;class Mf{constructor(e=new Bi,n=new Bi,i=new Bi,r=new Bi,s=new Bi,o=new Bi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Yn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],h=r[5],p=r[6],d=r[7],m=r[8],v=r[9],x=r[10],f=r[11],c=r[12],g=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,f-m,y-c).normalize(),i[1].setComponents(l+s,d+u,f+m,y+c).normalize(),i[2].setComponents(l+o,d+h,f+v,y+g).normalize(),i[3].setComponents(l-o,d-h,f-v,y-g).normalize(),i[4].setComponents(l-a,d-p,f-x,y-_).normalize(),n===Yn)i[5].setComponents(l+a,d+p,f+x,y+_).normalize();else if(n===tl)i[5].setComponents(a,p,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ca.x=r.normal.x>0?e.max.x:e.min.x,ca.y=r.normal.y>0?e.max.y:e.min.y,ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xg(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function S1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,h){const p=u.array,d=u.usage,m=t.createBuffer();t.bindBuffer(h,m),t.bufferData(h,p,d),u.onUploadCallback();let v;if(p instanceof Float32Array)v=t.FLOAT;else if(p instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(p instanceof Int16Array)v=t.SHORT;else if(p instanceof Uint32Array)v=t.UNSIGNED_INT;else if(p instanceof Int32Array)v=t.INT;else if(p instanceof Int8Array)v=t.BYTE;else if(p instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:v,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version}}function s(u,h,p){const d=h.array,m=h.updateRange;t.bindBuffer(p,u),m.count===-1?t.bufferSubData(p,0,d):(n?t.bufferSubData(p,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(p,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h&&(t.deleteBuffer(h.buffer),i.delete(u))}function l(u,h){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const p=i.get(u);p===void 0?i.set(u,r(u,h)):p.version<u.version&&(s(p.buffer,u,h),p.version=u.version)}return{get:o,remove:a,update:l}}class Tf extends Un{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,h=l+1,p=e/a,d=n/l,m=[],v=[],x=[],f=[];for(let c=0;c<h;c++){const g=c*d-o;for(let _=0;_<u;_++){const y=_*p-s;v.push(y,-g,0),x.push(0,0,1),f.push(_/a),f.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const _=g+u*c,y=g+u*(c+1),A=g+1+u*(c+1),w=g+1+u*c;m.push(_,y,w),m.push(y,A,w)}this.setIndex(m),this.setAttribute("position",new $n(v,3)),this.setAttribute("normal",new $n(x,3)),this.setAttribute("uv",new $n(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tf(e.width,e.height,e.widthSegments,e.heightSegments)}}var E1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M1=`#ifdef USE_ALPHAHASH
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
#endif`,T1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,C1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,b1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,U1=`#ifdef USE_IRIDESCENCE
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
#endif`,N1=`#ifdef USE_BUMPMAP
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
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,k1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,H1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,G1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,V1=`#define PI 3.141592653589793
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
} // validated`,W1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,X1=`vec3 transformedNormal = objectNormal;
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
#endif`,j1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z1=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q1=`#ifdef USE_ENVMAP
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
#endif`,J1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ey=`#ifdef USE_ENVMAP
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
#endif`,ty=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ny=`#ifdef USE_ENVMAP
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
#endif`,iy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ay=`#ifdef USE_GRADIENTMAP
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
}`,ly=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dy=`uniform bool receiveShadow;
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
#endif`,hy=`#ifdef USE_ENVMAP
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
#endif`,py=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,my=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vy=`PhysicalMaterial material;
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
#endif`,xy=`struct PhysicalMaterial {
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
}`,yy=`
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
#endif`,Sy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ey=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,My=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ty=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ay=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ry=`#ifdef USE_MAP
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
#endif`,Ly=`#if defined( USE_POINTS_UV )
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
#endif`,Py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ny=`#ifdef USE_MORPHNORMALS
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
#endif`,Iy=`#ifdef USE_MORPHTARGETS
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
#endif`,Fy=`#ifdef USE_MORPHTARGETS
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
#endif`,Oy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,By=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gy=`#ifdef USE_NORMALMAP
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
#endif`,Vy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Wy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$y=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ky=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rS=`float getShadowMask() {
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
}`,sS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oS=`#ifdef USE_SKINNING
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
#endif`,aS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lS=`#ifdef USE_SKINNING
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
#endif`,uS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hS=`#ifdef USE_TRANSMISSION
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
#endif`,pS=`#ifdef USE_TRANSMISSION
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
#endif`,mS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yS=`uniform sampler2D t2D;
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
}`,SS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ES=`#ifdef ENVMAP_TYPE_CUBE
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
}`,MS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`#include <common>
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
}`,AS=`#if DEPTH_PACKING == 3200
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
}`,CS=`#define DISTANCE
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
}`,RS=`#define DISTANCE
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
}`,LS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PS=`uniform float scale;
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
}`,DS=`uniform vec3 diffuse;
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
}`,US=`#include <common>
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
}`,NS=`uniform vec3 diffuse;
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
}`,IS=`#define LAMBERT
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
}`,FS=`#define LAMBERT
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
}`,OS=`#define MATCAP
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
}`,BS=`#define MATCAP
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
}`,zS=`#define NORMAL
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
}`,kS=`#define NORMAL
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
}`,HS=`#define PHONG
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
}`,GS=`#define PHONG
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
}`,VS=`#define STANDARD
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
}`,WS=`#define STANDARD
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
}`,XS=`#define TOON
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
}`,jS=`#define TOON
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
}`,YS=`uniform float size;
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
}`,qS=`uniform vec3 diffuse;
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
}`,$S=`#include <common>
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
}`,KS=`uniform vec3 color;
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
}`,ZS=`uniform float rotation;
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
}`,QS=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:E1,alphahash_pars_fragment:M1,alphamap_fragment:T1,alphamap_pars_fragment:w1,alphatest_fragment:A1,alphatest_pars_fragment:C1,aomap_fragment:R1,aomap_pars_fragment:b1,begin_vertex:L1,beginnormal_vertex:P1,bsdfs:D1,iridescence_fragment:U1,bumpmap_pars_fragment:N1,clipping_planes_fragment:I1,clipping_planes_pars_fragment:F1,clipping_planes_pars_vertex:O1,clipping_planes_vertex:B1,color_fragment:z1,color_pars_fragment:k1,color_pars_vertex:H1,color_vertex:G1,common:V1,cube_uv_reflection_fragment:W1,defaultnormal_vertex:X1,displacementmap_pars_vertex:j1,displacementmap_vertex:Y1,emissivemap_fragment:q1,emissivemap_pars_fragment:$1,colorspace_fragment:K1,colorspace_pars_fragment:Z1,envmap_fragment:Q1,envmap_common_pars_fragment:J1,envmap_pars_fragment:ey,envmap_pars_vertex:ty,envmap_physical_pars_fragment:hy,envmap_vertex:ny,fog_vertex:iy,fog_pars_vertex:ry,fog_fragment:sy,fog_pars_fragment:oy,gradientmap_pars_fragment:ay,lightmap_fragment:ly,lightmap_pars_fragment:uy,lights_lambert_fragment:cy,lights_lambert_pars_fragment:fy,lights_pars_begin:dy,lights_toon_fragment:py,lights_toon_pars_fragment:my,lights_phong_fragment:gy,lights_phong_pars_fragment:_y,lights_physical_fragment:vy,lights_physical_pars_fragment:xy,lights_fragment_begin:yy,lights_fragment_maps:Sy,lights_fragment_end:Ey,logdepthbuf_fragment:My,logdepthbuf_pars_fragment:Ty,logdepthbuf_pars_vertex:wy,logdepthbuf_vertex:Ay,map_fragment:Cy,map_pars_fragment:Ry,map_particle_fragment:by,map_particle_pars_fragment:Ly,metalnessmap_fragment:Py,metalnessmap_pars_fragment:Dy,morphcolor_vertex:Uy,morphnormal_vertex:Ny,morphtarget_pars_vertex:Iy,morphtarget_vertex:Fy,normal_fragment_begin:Oy,normal_fragment_maps:By,normal_pars_fragment:zy,normal_pars_vertex:ky,normal_vertex:Hy,normalmap_pars_fragment:Gy,clearcoat_normal_fragment_begin:Vy,clearcoat_normal_fragment_maps:Wy,clearcoat_pars_fragment:Xy,iridescence_pars_fragment:jy,opaque_fragment:Yy,packing:qy,premultiplied_alpha_fragment:$y,project_vertex:Ky,dithering_fragment:Zy,dithering_pars_fragment:Qy,roughnessmap_fragment:Jy,roughnessmap_pars_fragment:eS,shadowmap_pars_fragment:tS,shadowmap_pars_vertex:nS,shadowmap_vertex:iS,shadowmask_pars_fragment:rS,skinbase_vertex:sS,skinning_pars_vertex:oS,skinning_vertex:aS,skinnormal_vertex:lS,specularmap_fragment:uS,specularmap_pars_fragment:cS,tonemapping_fragment:fS,tonemapping_pars_fragment:dS,transmission_fragment:hS,transmission_pars_fragment:pS,uv_pars_fragment:mS,uv_pars_vertex:gS,uv_vertex:_S,worldpos_vertex:vS,background_vert:xS,background_frag:yS,backgroundCube_vert:SS,backgroundCube_frag:ES,cube_vert:MS,cube_frag:TS,depth_vert:wS,depth_frag:AS,distanceRGBA_vert:CS,distanceRGBA_frag:RS,equirect_vert:bS,equirect_frag:LS,linedashed_vert:PS,linedashed_frag:DS,meshbasic_vert:US,meshbasic_frag:NS,meshlambert_vert:IS,meshlambert_frag:FS,meshmatcap_vert:OS,meshmatcap_frag:BS,meshnormal_vert:zS,meshnormal_frag:kS,meshphong_vert:HS,meshphong_frag:GS,meshphysical_vert:VS,meshphysical_frag:WS,meshtoon_vert:XS,meshtoon_frag:jS,points_vert:YS,points_frag:qS,shadow_vert:$S,shadow_frag:KS,sprite_vert:ZS,sprite_frag:QS},ue={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},wn={basic:{uniforms:Bt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Bt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Bt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Bt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Bt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Bt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Bt([ue.points,ue.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Bt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Bt([ue.common,ue.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Bt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Bt([ue.sprite,ue.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Bt([ue.common,ue.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Bt([ue.lights,ue.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};wn.physical={uniforms:Bt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const fa={r:0,b:0,g:0};function JS(t,e,n,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,u,h,p=null,d=0,m=null;function v(f,c){let g=!1,_=c.isScene===!0?c.background:null;_&&_.isTexture&&(_=(c.backgroundBlurriness>0?n:e).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),g=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===vl)?(h===void 0&&(h=new Mn(new ps(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:is(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,h.material.toneMapped=_.colorSpace!==tt,(p!==_||d!==_.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,p=_,d=_.version,m=t.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Mn(new Tf(2,2),new Ci({name:"BackgroundMaterial",uniforms:is(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=_.colorSpace!==tt,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(p!==_||d!==_.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,p=_,d=_.version,m=t.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null))}function x(f,c){f.getRGB(fa,Gg(t)),i.buffers.color.setClear(fa.r,fa.g,fa.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(f,c=1){a.set(f),l=c,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,x(a,l)},render:v}}function eE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=f(null);let u=l,h=!1;function p(z,k,Z,X,j){let Q=!1;if(o){const K=x(X,Z,k);u!==K&&(u=K,m(u.object)),Q=c(z,X,Z,j),Q&&g(z,X,Z,j)}else{const K=k.wireframe===!0;(u.geometry!==X.id||u.program!==Z.id||u.wireframe!==K)&&(u.geometry=X.id,u.program=Z.id,u.wireframe=K,Q=!0)}j!==null&&n.update(j,t.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,N(z,k,Z,X),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(j).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(z){return i.isWebGL2?t.bindVertexArray(z):s.bindVertexArrayOES(z)}function v(z){return i.isWebGL2?t.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function x(z,k,Z){const X=Z.wireframe===!0;let j=a[z.id];j===void 0&&(j={},a[z.id]=j);let Q=j[k.id];Q===void 0&&(Q={},j[k.id]=Q);let K=Q[X];return K===void 0&&(K=f(d()),Q[X]=K),K}function f(z){const k=[],Z=[],X=[];for(let j=0;j<r;j++)k[j]=0,Z[j]=0,X[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Z,attributeDivisors:X,object:z,attributes:{},index:null}}function c(z,k,Z,X){const j=u.attributes,Q=k.attributes;let K=0;const b=Z.getAttributes();for(const P in b)if(b[P].location>=0){const J=j[P];let te=Q[P];if(te===void 0&&(P==="instanceMatrix"&&z.instanceMatrix&&(te=z.instanceMatrix),P==="instanceColor"&&z.instanceColor&&(te=z.instanceColor)),J===void 0||J.attribute!==te||te&&J.data!==te.data)return!0;K++}return u.attributesNum!==K||u.index!==X}function g(z,k,Z,X){const j={},Q=k.attributes;let K=0;const b=Z.getAttributes();for(const P in b)if(b[P].location>=0){let J=Q[P];J===void 0&&(P==="instanceMatrix"&&z.instanceMatrix&&(J=z.instanceMatrix),P==="instanceColor"&&z.instanceColor&&(J=z.instanceColor));const te={};te.attribute=J,J&&J.data&&(te.data=J.data),j[P]=te,K++}u.attributes=j,u.attributesNum=K,u.index=X}function _(){const z=u.newAttributes;for(let k=0,Z=z.length;k<Z;k++)z[k]=0}function y(z){A(z,0)}function A(z,k){const Z=u.newAttributes,X=u.enabledAttributes,j=u.attributeDivisors;Z[z]=1,X[z]===0&&(t.enableVertexAttribArray(z),X[z]=1),j[z]!==k&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,k),j[z]=k)}function w(){const z=u.newAttributes,k=u.enabledAttributes;for(let Z=0,X=k.length;Z<X;Z++)k[Z]!==z[Z]&&(t.disableVertexAttribArray(Z),k[Z]=0)}function R(z,k,Z,X,j,Q,K){K===!0?t.vertexAttribIPointer(z,k,Z,j,Q):t.vertexAttribPointer(z,k,Z,X,j,Q)}function N(z,k,Z,X){if(i.isWebGL2===!1&&(z.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const j=X.attributes,Q=Z.getAttributes(),K=k.defaultAttributeValues;for(const b in Q){const P=Q[b];if(P.location>=0){let Y=j[b];if(Y===void 0&&(b==="instanceMatrix"&&z.instanceMatrix&&(Y=z.instanceMatrix),b==="instanceColor"&&z.instanceColor&&(Y=z.instanceColor)),Y!==void 0){const J=Y.normalized,te=Y.itemSize,ge=n.get(Y);if(ge===void 0)continue;const Ee=ge.buffer,ye=ge.type,Oe=ge.bytesPerElement,ot=i.isWebGL2===!0&&(ye===t.INT||ye===t.UNSIGNED_INT||Y.gpuType===Ag);if(Y.isInterleavedBufferAttribute){const Fe=Y.data,I=Fe.stride,oe=Y.offset;if(Fe.isInstancedInterleavedBuffer){for(let re=0;re<P.locationSize;re++)A(P.location+re,Fe.meshPerAttribute);z.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let re=0;re<P.locationSize;re++)y(P.location+re);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let re=0;re<P.locationSize;re++)R(P.location+re,te/P.locationSize,ye,J,I*Oe,(oe+te/P.locationSize*re)*Oe,ot)}else{if(Y.isInstancedBufferAttribute){for(let Fe=0;Fe<P.locationSize;Fe++)A(P.location+Fe,Y.meshPerAttribute);z.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Fe=0;Fe<P.locationSize;Fe++)y(P.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let Fe=0;Fe<P.locationSize;Fe++)R(P.location+Fe,te/P.locationSize,ye,J,te*Oe,te/P.locationSize*Fe*Oe,ot)}}else if(K!==void 0){const J=K[b];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(P.location,J);break;case 3:t.vertexAttrib3fv(P.location,J);break;case 4:t.vertexAttrib4fv(P.location,J);break;default:t.vertexAttrib1fv(P.location,J)}}}}w()}function S(){q();for(const z in a){const k=a[z];for(const Z in k){const X=k[Z];for(const j in X)v(X[j].object),delete X[j];delete k[Z]}delete a[z]}}function C(z){if(a[z.id]===void 0)return;const k=a[z.id];for(const Z in k){const X=k[Z];for(const j in X)v(X[j].object),delete X[j];delete k[Z]}delete a[z.id]}function $(z){for(const k in a){const Z=a[k];if(Z[z.id]===void 0)continue;const X=Z[z.id];for(const j in X)v(X[j].object),delete X[j];delete Z[z.id]}}function q(){D(),h=!0,u!==l&&(u=l,m(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:q,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:$,initAttributes:_,enableAttribute:y,disableUnusedAttributes:w}}function tE(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,h){t.drawArrays(s,u,h),n.update(h,s,1)}function l(u,h,p){if(p===0)return;let d,m;if(r)d=t,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,u,h,p),n.update(h,s,p)}this.setMode=o,this.render=a,this.renderInstances=l}function nE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,y=o||e.has("OES_texture_float"),A=_&&y,w=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:f,maxVaryings:c,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:A,maxSamples:w}}function iE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Bi,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||i!==0||r;return r=d,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){n=h(p,d,0)},this.setState=function(p,d,m){const v=p.clippingPlanes,x=p.clipIntersection,f=p.clipShadows,c=t.get(p);if(!r||v===null||v.length===0||s&&!f)s?h(null):u();else{const g=s?0:i,_=g*4;let y=c.clippingState||null;l.value=y,y=h(v,d,_,m);for(let A=0;A!==_;++A)y[A]=n[A];c.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,d,m,v){const x=p!==null?p.length:0;let f=null;if(x!==0){if(f=l.value,v!==!0||f===null){const c=m+x*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(f===null||f.length<c)&&(f=new Float32Array(c));for(let _=0,y=m;_!==x;++_,y+=4)o.copy(p[_]).applyMatrix4(g,a),o.normal.toArray(f,y),f[y+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}function rE(t){let e=new WeakMap;function n(o,a){return a===hc?o.mapping=Jr:a===pc&&(o.mapping=es),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===hc||a===pc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new v1(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class jg extends Vg{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fr=4,jh=[.125,.215,.35,.446,.526,.582],ki=20,yu=new jg,Yh=new Ye;let Su=null;const zi=(1+Math.sqrt(5))/2,Mr=1/zi,qh=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,zi,Mr),new U(0,zi,-Mr),new U(Mr,0,zi),new U(-Mr,0,zi),new U(zi,Mr,0),new U(-zi,Mr,0)];class $h{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Su=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Su),e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Jr||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Su=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:yo,format:Sn,colorSpace:Dn,depthBuffer:!1},r=Kh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sE(s)),this._blurMaterial=oE(s,e,n)}return r}_compileMaterial(e){const n=new Mn(this._lodPlanes[0],e);this._renderer.compile(n,yu)}_sceneToCubeUV(e,n,i,r){const a=new Zt(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(Yh),h.toneMapping=xi,h.autoClear=!1;const m=new Ef({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),v=new Mn(new ps,m);let x=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,x=!0):(m.color.copy(Yh),x=!0);for(let c=0;c<6;c++){const g=c%3;g===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):g===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const _=this._cubeSize;da(r,g*_,c>2?_:0,_,_),h.setRenderTarget(r),x&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=p,e.background=f}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Jr||e.mapping===es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Mn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;da(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,yu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=qh[(r-1)%qh.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Mn(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ki-1),x=s/v,f=isFinite(s)?1+Math.floor(h*x):ki;f>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ki}`);const c=[];let g=0;for(let R=0;R<ki;++R){const N=R/x,S=Math.exp(-N*N/2);c.push(S),R===0?g+=S:R<f&&(g+=2*S)}for(let R=0;R<c.length;R++)c[R]=c[R]/g;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=c,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-i;const y=this._sizeLods[r],A=3*y*(r>_-Fr?r-_+Fr:0),w=4*(this._cubeSize-y);da(n,A,w,3*y,2*y),l.setRenderTarget(n),l.render(p,yu)}}function sE(t){const e=[],n=[],i=[];let r=t;const s=t-Fr+1+jh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Fr?l=jh[o-t+Fr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),h=-u,p=1+u,d=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,v=6,x=3,f=2,c=1,g=new Float32Array(x*v*m),_=new Float32Array(f*v*m),y=new Float32Array(c*v*m);for(let w=0;w<m;w++){const R=w%3*2/3-1,N=w>2?0:-1,S=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];g.set(S,x*v*w),_.set(d,f*v*w);const C=[w,w,w,w,w,w];y.set(C,c*v*w)}const A=new Un;A.setAttribute("position",new un(g,x)),A.setAttribute("uv",new un(_,f)),A.setAttribute("faceIndex",new un(y,c)),e.push(A),r>Fr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Kh(t,e,n){const i=new tr(t,e,n);return i.texture.mapping=vl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function da(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function oE(t,e,n){const i=new Float32Array(ki),r=new U(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wf(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Zh(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wf(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Qh(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function wf(){return`

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
	`}function aE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===hc||l===pc,h=l===Jr||l===es;if(u||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return n===null&&(n=new $h(t)),p=u?n.fromEquirectangular(a,p):n.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(u&&p&&p.height>0||h&&p&&r(p)){n===null&&(n=new $h(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function lE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function uE(t,e,n,i){const r={},s=new WeakMap;function o(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let f=0,c=x.length;f<c;f++)e.remove(x[f])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(p,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(p){const d=p.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const v in m){const x=m[v];for(let f=0,c=x.length;f<c;f++)e.update(x[f],t.ARRAY_BUFFER)}}function u(p){const d=[],m=p.index,v=p.attributes.position;let x=0;if(m!==null){const g=m.array;x=m.version;for(let _=0,y=g.length;_<y;_+=3){const A=g[_+0],w=g[_+1],R=g[_+2];d.push(A,w,w,R,R,A)}}else if(v!==void 0){const g=v.array;x=v.version;for(let _=0,y=g.length/3-1;_<y;_+=3){const A=_+0,w=_+1,R=_+2;d.push(A,w,w,R,R,A)}}else return;const f=new(Ug(d)?Hg:kg)(d,1);f.version=x;const c=s.get(p);c&&e.remove(c),s.set(p,f)}function h(p){const d=s.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function cE(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function h(d,m){t.drawElements(s,m,a,d*l),n.update(m,s,1)}function p(d,m,v){if(v===0)return;let x,f;if(r)x=t,f="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[f](s,m,a,d*l,v),n.update(m,s,v)}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=p}function fE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function dE(t,e){return t[0]-e[0]}function hE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function pE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new it,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,h,p){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=v!==void 0?v.length:0;let f=s.get(h);if(f===void 0||f.count!==x){let k=function(){D.dispose(),s.delete(h),h.removeEventListener("dispose",k)};var m=k;f!==void 0&&f.texture.dispose();const _=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),A===!0&&(S=3);let C=h.attributes.position.count*S,$=1;C>e.maxTextureSize&&($=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const q=new Float32Array(C*$*4*x),D=new Fg(q,C,$,x);D.type=ui,D.needsUpdate=!0;const z=S*4;for(let Z=0;Z<x;Z++){const X=w[Z],j=R[Z],Q=N[Z],K=C*$*4*Z;for(let b=0;b<X.count;b++){const P=b*z;_===!0&&(o.fromBufferAttribute(X,b),q[K+P+0]=o.x,q[K+P+1]=o.y,q[K+P+2]=o.z,q[K+P+3]=0),y===!0&&(o.fromBufferAttribute(j,b),q[K+P+4]=o.x,q[K+P+5]=o.y,q[K+P+6]=o.z,q[K+P+7]=0),A===!0&&(o.fromBufferAttribute(Q,b),q[K+P+8]=o.x,q[K+P+9]=o.y,q[K+P+10]=o.z,q[K+P+11]=Q.itemSize===4?o.w:1)}}f={count:x,texture:D,size:new $e(C,$)},s.set(h,f),h.addEventListener("dispose",k)}let c=0;for(let _=0;_<d.length;_++)c+=d[_];const g=h.morphTargetsRelative?1:1-c;p.getUniforms().setValue(t,"morphTargetBaseInfluence",g),p.getUniforms().setValue(t,"morphTargetInfluences",d),p.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),p.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}else{const v=d===void 0?0:d.length;let x=i[h.id];if(x===void 0||x.length!==v){x=[];for(let y=0;y<v;y++)x[y]=[y,0];i[h.id]=x}for(let y=0;y<v;y++){const A=x[y];A[0]=y,A[1]=d[y]}x.sort(hE);for(let y=0;y<8;y++)y<v&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(dE);const f=h.morphAttributes.position,c=h.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const A=a[y],w=A[0],R=A[1];w!==Number.MAX_SAFE_INTEGER&&R?(f&&h.getAttribute("morphTarget"+y)!==f[w]&&h.setAttribute("morphTarget"+y,f[w]),c&&h.getAttribute("morphNormal"+y)!==c[w]&&h.setAttribute("morphNormal"+y,c[w]),r[y]=R,g+=R):(f&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),c&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),r[y]=0)}const _=h.morphTargetsRelative?1:1-g;p.getUniforms().setValue(t,"morphTargetBaseInfluence",_),p.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function mE(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return p}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const Yg=new Jt,qg=new Fg,$g=new t1,Kg=new Wg,Jh=[],ep=[],tp=new Float32Array(16),np=new Float32Array(9),ip=new Float32Array(4);function ms(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Jh[r];if(s===void 0&&(s=new Float32Array(r),Jh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function St(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function yl(t,e){let n=ep[e];n===void 0&&(n=new Int32Array(e),ep[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function gE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function _E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2fv(this.addr,e),St(n,e)}}function vE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(yt(n,e))return;t.uniform3fv(this.addr,e),St(n,e)}}function xE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4fv(this.addr,e),St(n,e)}}function yE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),St(n,e)}else{if(yt(n,i))return;ip.set(i),t.uniformMatrix2fv(this.addr,!1,ip),St(n,i)}}function SE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),St(n,e)}else{if(yt(n,i))return;np.set(i),t.uniformMatrix3fv(this.addr,!1,np),St(n,i)}}function EE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),St(n,e)}else{if(yt(n,i))return;tp.set(i),t.uniformMatrix4fv(this.addr,!1,tp),St(n,i)}}function ME(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function TE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2iv(this.addr,e),St(n,e)}}function wE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yt(n,e))return;t.uniform3iv(this.addr,e),St(n,e)}}function AE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4iv(this.addr,e),St(n,e)}}function CE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function RE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2uiv(this.addr,e),St(n,e)}}function bE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yt(n,e))return;t.uniform3uiv(this.addr,e),St(n,e)}}function LE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4uiv(this.addr,e),St(n,e)}}function PE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Yg,r)}function DE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||$g,r)}function UE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Kg,r)}function NE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||qg,r)}function IE(t){switch(t){case 5126:return gE;case 35664:return _E;case 35665:return vE;case 35666:return xE;case 35674:return yE;case 35675:return SE;case 35676:return EE;case 5124:case 35670:return ME;case 35667:case 35671:return TE;case 35668:case 35672:return wE;case 35669:case 35673:return AE;case 5125:return CE;case 36294:return RE;case 36295:return bE;case 36296:return LE;case 35678:case 36198:case 36298:case 36306:case 35682:return PE;case 35679:case 36299:case 36307:return DE;case 35680:case 36300:case 36308:case 36293:return UE;case 36289:case 36303:case 36311:case 36292:return NE}}function FE(t,e){t.uniform1fv(this.addr,e)}function OE(t,e){const n=ms(e,this.size,2);t.uniform2fv(this.addr,n)}function BE(t,e){const n=ms(e,this.size,3);t.uniform3fv(this.addr,n)}function zE(t,e){const n=ms(e,this.size,4);t.uniform4fv(this.addr,n)}function kE(t,e){const n=ms(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function HE(t,e){const n=ms(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function GE(t,e){const n=ms(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function VE(t,e){t.uniform1iv(this.addr,e)}function WE(t,e){t.uniform2iv(this.addr,e)}function XE(t,e){t.uniform3iv(this.addr,e)}function jE(t,e){t.uniform4iv(this.addr,e)}function YE(t,e){t.uniform1uiv(this.addr,e)}function qE(t,e){t.uniform2uiv(this.addr,e)}function $E(t,e){t.uniform3uiv(this.addr,e)}function KE(t,e){t.uniform4uiv(this.addr,e)}function ZE(t,e,n){const i=this.cache,r=e.length,s=yl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Yg,s[o])}function QE(t,e,n){const i=this.cache,r=e.length,s=yl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||$g,s[o])}function JE(t,e,n){const i=this.cache,r=e.length,s=yl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Kg,s[o])}function eM(t,e,n){const i=this.cache,r=e.length,s=yl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||qg,s[o])}function tM(t){switch(t){case 5126:return FE;case 35664:return OE;case 35665:return BE;case 35666:return zE;case 35674:return kE;case 35675:return HE;case 35676:return GE;case 5124:case 35670:return VE;case 35667:case 35671:return WE;case 35668:case 35672:return XE;case 35669:case 35673:return jE;case 5125:return YE;case 36294:return qE;case 36295:return $E;case 36296:return KE;case 35678:case 36198:case 36298:case 36306:case 35682:return ZE;case 35679:case 36299:case 36307:return QE;case 35680:case 36300:case 36308:case 36293:return JE;case 36289:case 36303:case 36311:case 36292:return eM}}class nM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=IE(n.type)}}class iM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=tM(n.type)}}class rM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Eu=/(\w+)(\])?(\[|\.)?/g;function rp(t,e){t.seq.push(e),t.map[e.id]=e}function sM(t,e,n){const i=t.name,r=i.length;for(Eu.lastIndex=0;;){const s=Eu.exec(i),o=Eu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){rp(n,u===void 0?new nM(a,t,e):new iM(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new rM(a),rp(n,p)),n=p}}}class Ra{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);sM(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function sp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let oM=0;function aM(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function lM(t){switch(t){case Dn:return["Linear","( value )"];case tt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function op(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+aM(t.getShaderSource(e),o)}else return r}function uM(t,e){const n=lM(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function cM(t,e){let n;switch(e){case ix:n="Linear";break;case rx:n="Reinhard";break;case sx:n="OptimizedCineon";break;case Tg:n="ACESFilmic";break;case ox:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function fM(t){return[t.extensionDerivatives||!!t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gs).join(`
`)}function dM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function hM(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Gs(t){return t!==""}function ap(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pM=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(t){return t.replace(pM,gM)}const mM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function gM(t,e){let n=ze[e];if(n===void 0){const i=mM.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xc(n)}const _M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function up(t){return t.replace(_M,vM)}function vM(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===yg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Iv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Gn&&(e="SHADOWMAP_TYPE_VSM"),e}function yM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Jr:case es:e="ENVMAP_TYPE_CUBE";break;case vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SM(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function EM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Mg:e="ENVMAP_BLENDING_MULTIPLY";break;case tx:e="ENVMAP_BLENDING_MIX";break;case nx:e="ENVMAP_BLENDING_ADD";break}return e}function MM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function TM(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=xM(n),u=yM(n),h=SM(n),p=EM(n),d=MM(n),m=n.isWebGL2?"":fM(n),v=dM(s),x=r.createProgram();let f,c,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Gs).join(`
`),f.length>0&&(f+=`
`),c=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Gs).join(`
`),c.length>0&&(c+=`
`)):(f=[cp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),c=[m,cp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xi?"#define TONE_MAPPING":"",n.toneMapping!==xi?ze.tonemapping_pars_fragment:"",n.toneMapping!==xi?cM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,uM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Gs).join(`
`)),o=xc(o),o=ap(o,n),o=lp(o,n),a=xc(a),a=ap(a,n),a=lp(a,n),o=up(o),a=up(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,c=["#define varying in",n.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const _=g+f+o,y=g+c+a,A=sp(r,r.VERTEX_SHADER,_),w=sp(r,r.FRAGMENT_SHADER,y);if(r.attachShader(x,A),r.attachShader(x,w),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),t.debug.checkShaderErrors){const S=r.getProgramInfoLog(x).trim(),C=r.getShaderInfoLog(A).trim(),$=r.getShaderInfoLog(w).trim();let q=!0,D=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,A,w);else{const z=op(r,A,"vertex"),k=op(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+z+`
`+k)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(C===""||$==="")&&(D=!1);D&&(this.diagnostics={runnable:q,programLog:S,vertexShader:{log:C,prefix:f},fragmentShader:{log:$,prefix:c}})}r.deleteShader(A),r.deleteShader(w);let R;this.getUniforms=function(){return R===void 0&&(R=new Ra(r,x)),R};let N;return this.getAttributes=function(){return N===void 0&&(N=hM(r,x)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=oM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=w,this}let wM=0;class AM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new CM(e),n.set(e,i)),i}}class CM{constructor(e){this.id=wM++,this.code=e,this.usedTimes=0}}function RM(t,e,n,i,r,s,o){const a=new Bg,l=new AM,u=[],h=r.isWebGL2,p=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function f(S,C,$,q,D){const z=q.fog,k=D.geometry,Z=S.isMeshStandardMaterial?q.environment:null,X=(S.isMeshStandardMaterial?n:e).get(S.envMap||Z),j=!!X&&X.mapping===vl?X.image.height:null,Q=v[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const K=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,b=K!==void 0?K.length:0;let P=0;k.morphAttributes.position!==void 0&&(P=1),k.morphAttributes.normal!==void 0&&(P=2),k.morphAttributes.color!==void 0&&(P=3);let Y,J,te,ge;if(Q){const Je=wn[Q];Y=Je.vertexShader,J=Je.fragmentShader}else Y=S.vertexShader,J=S.fragmentShader,l.update(S),te=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const Ee=t.getRenderTarget(),ye=D.isInstancedMesh===!0,Oe=!!S.map,ot=!!S.matcap,Fe=!!X,I=!!S.aoMap,oe=!!S.lightMap,re=!!S.bumpMap,Le=!!S.normalMap,ce=!!S.displacementMap,Se=!!S.emissiveMap,Me=!!S.metalnessMap,he=!!S.roughnessMap,Ue=S.anisotropy>0,qe=S.clearcoat>0,Qe=S.iridescence>0,M=S.sheen>0,E=S.transmission>0,O=Ue&&!!S.anisotropyMap,ie=qe&&!!S.clearcoatMap,ee=qe&&!!S.clearcoatNormalMap,se=qe&&!!S.clearcoatRoughnessMap,Te=Qe&&!!S.iridescenceMap,ae=Qe&&!!S.iridescenceThicknessMap,G=M&&!!S.sheenColorMap,Ce=M&&!!S.sheenRoughnessMap,we=!!S.specularMap,Ae=!!S.specularColorMap,ve=!!S.specularIntensityMap,xe=E&&!!S.transmissionMap,Ge=E&&!!S.thicknessMap,Ke=!!S.gradientMap,L=!!S.alphaMap,fe=S.alphaTest>0,H=!!S.alphaHash,le=!!S.extensions,de=!!k.attributes.uv1,je=!!k.attributes.uv2,at=!!k.attributes.uv3;let pt=xi;return S.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(pt=t.toneMapping),{isWebGL2:h,shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:Y,fragmentShader:J,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:ye,instancingColor:ye&&D.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ee===null?t.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Dn,map:Oe,matcap:ot,envMap:Fe,envMapMode:Fe&&X.mapping,envMapCubeUVHeight:j,aoMap:I,lightMap:oe,bumpMap:re,normalMap:Le,displacementMap:d&&ce,emissiveMap:Se,normalMapObjectSpace:Le&&S.normalMapType===yx,normalMapTangentSpace:Le&&S.normalMapType===xx,metalnessMap:Me,roughnessMap:he,anisotropy:Ue,anisotropyMap:O,clearcoat:qe,clearcoatMap:ie,clearcoatNormalMap:ee,clearcoatRoughnessMap:se,iridescence:Qe,iridescenceMap:Te,iridescenceThicknessMap:ae,sheen:M,sheenColorMap:G,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:Ae,specularIntensityMap:ve,transmission:E,transmissionMap:xe,thicknessMap:Ge,gradientMap:Ke,opaque:S.transparent===!1&&S.blending===Yr,alphaMap:L,alphaTest:fe,alphaHash:H,combine:S.combine,mapUv:Oe&&x(S.map.channel),aoMapUv:I&&x(S.aoMap.channel),lightMapUv:oe&&x(S.lightMap.channel),bumpMapUv:re&&x(S.bumpMap.channel),normalMapUv:Le&&x(S.normalMap.channel),displacementMapUv:ce&&x(S.displacementMap.channel),emissiveMapUv:Se&&x(S.emissiveMap.channel),metalnessMapUv:Me&&x(S.metalnessMap.channel),roughnessMapUv:he&&x(S.roughnessMap.channel),anisotropyMapUv:O&&x(S.anisotropyMap.channel),clearcoatMapUv:ie&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:G&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&x(S.sheenRoughnessMap.channel),specularMapUv:we&&x(S.specularMap.channel),specularColorMapUv:Ae&&x(S.specularColorMap.channel),specularIntensityMapUv:ve&&x(S.specularIntensityMap.channel),transmissionMapUv:xe&&x(S.transmissionMap.channel),thicknessMapUv:Ge&&x(S.thicknessMap.channel),alphaMapUv:L&&x(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Le||Ue),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:de,vertexUv2s:je,vertexUv3s:at,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(Oe||L),fog:!!z,useFog:S.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:D.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:b,morphTextureStride:P,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&$.length>0,shadowMapType:t.shadowMap.type,toneMapping:pt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Oe&&S.map.isVideoTexture===!0&&S.map.colorSpace===tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===An,flipSided:S.side===Yt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:le&&S.extensions.derivatives===!0,extensionFragDepth:le&&S.extensions.fragDepth===!0,extensionDrawBuffers:le&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function c(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const $ in S.defines)C.push($),C.push(S.defines[$]);return S.isRawShaderMaterial===!1&&(g(C,S),_(C,S),C.push(t.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function g(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function _(S,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const C=v[S.type];let $;if(C){const q=wn[C];$=p1.clone(q.uniforms)}else $=S.uniforms;return $}function A(S,C){let $;for(let q=0,D=u.length;q<D;q++){const z=u[q];if(z.cacheKey===C){$=z,++$.usedTimes;break}}return $===void 0&&($=new TM(t,C,S,s),u.push($)),$}function w(S){if(--S.usedTimes===0){const C=u.indexOf(S);u[C]=u[u.length-1],u.pop(),S.destroy()}}function R(S){l.remove(S)}function N(){l.dispose()}return{getParameters:f,getProgramCacheKey:c,getUniforms:y,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:N}}function bM(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function LM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function fp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function dp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,d,m,v,x,f){let c=t[e];return c===void 0?(c={id:p.id,object:p,geometry:d,material:m,groupOrder:v,renderOrder:p.renderOrder,z:x,group:f},t[e]=c):(c.id=p.id,c.object=p,c.geometry=d,c.material=m,c.groupOrder=v,c.renderOrder=p.renderOrder,c.z=x,c.group=f),e++,c}function a(p,d,m,v,x,f){const c=o(p,d,m,v,x,f);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(p,d,m,v,x,f){const c=o(p,d,m,v,x,f);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(p,d){n.length>1&&n.sort(p||LM),i.length>1&&i.sort(d||fp),r.length>1&&r.sort(d||fp)}function h(){for(let p=e,d=t.length;p<d;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:u}}function PM(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new dp,t.set(i,[o])):r>=s.length?(o=new dp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function DM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Ye};break;case"SpotLight":n={position:new U,direction:new U,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function UM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let NM=0;function IM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function FM(t,e){const n=new DM,i=UM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new U);const s=new U,o=new rt,a=new rt;function l(h,p){let d=0,m=0,v=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let x=0,f=0,c=0,g=0,_=0,y=0,A=0,w=0,R=0,N=0;h.sort(IM);const S=p===!0?Math.PI:1;for(let $=0,q=h.length;$<q;$++){const D=h[$],z=D.color,k=D.intensity,Z=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=z.r*k*S,m+=z.g*k*S,v+=z.b*k*S;else if(D.isLightProbe)for(let j=0;j<9;j++)r.probe[j].addScaledVector(D.sh.coefficients[j],k);else if(D.isDirectionalLight){const j=n.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const Q=D.shadow,K=i.get(D);K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,r.directionalShadow[x]=K,r.directionalShadowMap[x]=X,r.directionalShadowMatrix[x]=D.shadow.matrix,y++}r.directional[x]=j,x++}else if(D.isSpotLight){const j=n.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(z).multiplyScalar(k*S),j.distance=Z,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,r.spot[c]=j;const Q=D.shadow;if(D.map&&(r.spotLightMap[R]=D.map,R++,Q.updateMatrices(D),D.castShadow&&N++),r.spotLightMatrix[c]=Q.matrix,D.castShadow){const K=i.get(D);K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,r.spotShadow[c]=K,r.spotShadowMap[c]=X,w++}c++}else if(D.isRectAreaLight){const j=n.get(D);j.color.copy(z).multiplyScalar(k),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),r.rectArea[g]=j,g++}else if(D.isPointLight){const j=n.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*S),j.distance=D.distance,j.decay=D.decay,D.castShadow){const Q=D.shadow,K=i.get(D);K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,K.shadowCameraNear=Q.camera.near,K.shadowCameraFar=Q.camera.far,r.pointShadow[f]=K,r.pointShadowMap[f]=X,r.pointShadowMatrix[f]=D.shadow.matrix,A++}r.point[f]=j,f++}else if(D.isHemisphereLight){const j=n.get(D);j.skyColor.copy(D.color).multiplyScalar(k*S),j.groundColor.copy(D.groundColor).multiplyScalar(k*S),r.hemi[_]=j,_++}}g>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=v;const C=r.hash;(C.directionalLength!==x||C.pointLength!==f||C.spotLength!==c||C.rectAreaLength!==g||C.hemiLength!==_||C.numDirectionalShadows!==y||C.numPointShadows!==A||C.numSpotShadows!==w||C.numSpotMaps!==R)&&(r.directional.length=x,r.spot.length=c,r.rectArea.length=g,r.point.length=f,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=w+R-N,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=N,C.directionalLength=x,C.pointLength=f,C.spotLength=c,C.rectAreaLength=g,C.hemiLength=_,C.numDirectionalShadows=y,C.numPointShadows=A,C.numSpotShadows=w,C.numSpotMaps=R,r.version=NM++)}function u(h,p){let d=0,m=0,v=0,x=0,f=0;const c=p.matrixWorldInverse;for(let g=0,_=h.length;g<_;g++){const y=h[g];if(y.isDirectionalLight){const A=r.directional[d];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(c),d++}else if(y.isSpotLight){const A=r.spot[v];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(c),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(c),v++}else if(y.isRectAreaLight){const A=r.rectArea[x];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(c),a.identity(),o.copy(y.matrixWorld),o.premultiply(c),a.extractRotation(o),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const A=r.point[m];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(c),m++}else if(y.isHemisphereLight){const A=r.hemi[f];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(c),f++}}}return{setup:l,setupView:u,state:r}}function hp(t,e){const n=new FM(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(p){i.push(p)}function a(p){r.push(p)}function l(p){n.setup(i,p)}function u(p){n.setupView(i,p)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function OM(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new hp(t,e),n.set(s,[l])):o>=a.length?(l=new hp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class BM extends bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_x,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zM extends bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HM=`uniform sampler2D shadow_pass;
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
}`;function GM(t,e,n){let i=new Mf;const r=new $e,s=new $e,o=new it,a=new BM({depthPacking:vx}),l=new zM,u={},h=n.maxTextureSize,p={[Ai]:Yt,[Yt]:Ai,[An]:An},d=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:kM,fragmentShader:HM}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Un;v.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Mn(v,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yg;let c=this.type;this.render=function(A,w,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const N=t.getRenderTarget(),S=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),$=t.state;$.setBlending(vi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const q=c!==Gn&&this.type===Gn,D=c===Gn&&this.type!==Gn;for(let z=0,k=A.length;z<k;z++){const Z=A[z],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const j=X.getFrameExtents();if(r.multiply(j),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/j.x),r.x=s.x*j.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/j.y),r.y=s.y*j.y,X.mapSize.y=s.y)),X.map===null||q===!0||D===!0){const K=this.type!==Gn?{minFilter:zt,magFilter:zt}:{};X.map!==null&&X.map.dispose(),X.map=new tr(r.x,r.y,K),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}t.setRenderTarget(X.map),t.clear();const Q=X.getViewportCount();for(let K=0;K<Q;K++){const b=X.getViewport(K);o.set(s.x*b.x,s.y*b.y,s.x*b.z,s.y*b.w),$.viewport(o),X.updateMatrices(Z,K),i=X.getFrustum(),y(w,R,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===Gn&&g(X,R),X.needsUpdate=!1}c=this.type,f.needsUpdate=!1,t.setRenderTarget(N,S,C)};function g(A,w){const R=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new tr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,R,d,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,R,m,x,null)}function _(A,w,R,N){let S=null;const C=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)S=C;else if(S=R.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const $=S.uuid,q=w.uuid;let D=u[$];D===void 0&&(D={},u[$]=D);let z=D[q];z===void 0&&(z=S.clone(),D[q]=z),S=z}if(S.visible=w.visible,S.wireframe=w.wireframe,N===Gn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:p[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const $=t.properties.get(S);$.light=R}return S}function y(A,w,R,N,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Gn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const q=e.update(A),D=A.material;if(Array.isArray(D)){const z=q.groups;for(let k=0,Z=z.length;k<Z;k++){const X=z[k],j=D[X.materialIndex];if(j&&j.visible){const Q=_(A,j,N,S);t.renderBufferDirect(R,null,q,Q,A,X)}}}else if(D.visible){const z=_(A,D,N,S);t.renderBufferDirect(R,null,q,z,A,null)}}const $=A.children;for(let q=0,D=$.length;q<D;q++)y($[q],w,R,N,S)}}function VM(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const fe=new it;let H=null;const le=new it(0,0,0,0);return{setMask:function(de){H!==de&&!L&&(t.colorMask(de,de,de,de),H=de)},setLocked:function(de){L=de},setClear:function(de,je,at,pt,Qn){Qn===!0&&(de*=pt,je*=pt,at*=pt),fe.set(de,je,at,pt),le.equals(fe)===!1&&(t.clearColor(de,je,at,pt),le.copy(fe))},reset:function(){L=!1,H=null,le.set(-1,0,0,0)}}}function s(){let L=!1,fe=null,H=null,le=null;return{setTest:function(de){de?Ee(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(de){fe!==de&&!L&&(t.depthMask(de),fe=de)},setFunc:function(de){if(H!==de){switch(de){case qv:t.depthFunc(t.NEVER);break;case $v:t.depthFunc(t.ALWAYS);break;case Kv:t.depthFunc(t.LESS);break;case dc:t.depthFunc(t.LEQUAL);break;case Zv:t.depthFunc(t.EQUAL);break;case Qv:t.depthFunc(t.GEQUAL);break;case Jv:t.depthFunc(t.GREATER);break;case ex:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}H=de}},setLocked:function(de){L=de},setClear:function(de){le!==de&&(t.clearDepth(de),le=de)},reset:function(){L=!1,fe=null,H=null,le=null}}}function o(){let L=!1,fe=null,H=null,le=null,de=null,je=null,at=null,pt=null,Qn=null;return{setTest:function(Je){L||(Je?Ee(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(Je){fe!==Je&&!L&&(t.stencilMask(Je),fe=Je)},setFunc:function(Je,Tn,It){(H!==Je||le!==Tn||de!==It)&&(t.stencilFunc(Je,Tn,It),H=Je,le=Tn,de=It)},setOp:function(Je,Tn,It){(je!==Je||at!==Tn||pt!==It)&&(t.stencilOp(Je,Tn,It),je=Je,at=Tn,pt=It)},setLocked:function(Je){L=Je},setClear:function(Je){Qn!==Je&&(t.clearStencil(Je),Qn=Je)},reset:function(){L=!1,fe=null,H=null,le=null,de=null,je=null,at=null,pt=null,Qn=null}}}const a=new r,l=new s,u=new o,h=new WeakMap,p=new WeakMap;let d={},m={},v=new WeakMap,x=[],f=null,c=!1,g=null,_=null,y=null,A=null,w=null,R=null,N=null,S=!1,C=null,$=null,q=null,D=null,z=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,X=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),Z=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Z=X>=2);let Q=null,K={};const b=t.getParameter(t.SCISSOR_BOX),P=t.getParameter(t.VIEWPORT),Y=new it().fromArray(b),J=new it().fromArray(P);function te(L,fe,H,le){const de=new Uint8Array(4),je=t.createTexture();t.bindTexture(L,je),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let at=0;at<H;at++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(fe,0,t.RGBA,1,1,le,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(fe+at,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return je}const ge={};ge[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),ge[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ge[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ge[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ee(t.DEPTH_TEST),l.setFunc(dc),ce(!1),Se(Qd),Ee(t.CULL_FACE),re(vi);function Ee(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function ye(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function Oe(L,fe){return m[L]!==fe?(t.bindFramebuffer(L,fe),m[L]=fe,i&&(L===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=fe),L===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=fe)),!0):!1}function ot(L,fe){let H=x,le=!1;if(L)if(H=v.get(fe),H===void 0&&(H=[],v.set(fe,H)),L.isWebGLMultipleRenderTargets){const de=L.texture;if(H.length!==de.length||H[0]!==t.COLOR_ATTACHMENT0){for(let je=0,at=de.length;je<at;je++)H[je]=t.COLOR_ATTACHMENT0+je;H.length=de.length,le=!0}}else H[0]!==t.COLOR_ATTACHMENT0&&(H[0]=t.COLOR_ATTACHMENT0,le=!0);else H[0]!==t.BACK&&(H[0]=t.BACK,le=!0);le&&(n.isWebGL2?t.drawBuffers(H):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(H))}function Fe(L){return f!==L?(t.useProgram(L),f=L,!0):!1}const I={[Rr]:t.FUNC_ADD,[Ov]:t.FUNC_SUBTRACT,[Bv]:t.FUNC_REVERSE_SUBTRACT};if(i)I[th]=t.MIN,I[nh]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(I[th]=L.MIN_EXT,I[nh]=L.MAX_EXT)}const oe={[zv]:t.ZERO,[kv]:t.ONE,[Hv]:t.SRC_COLOR,[Sg]:t.SRC_ALPHA,[Yv]:t.SRC_ALPHA_SATURATE,[Xv]:t.DST_COLOR,[Vv]:t.DST_ALPHA,[Gv]:t.ONE_MINUS_SRC_COLOR,[Eg]:t.ONE_MINUS_SRC_ALPHA,[jv]:t.ONE_MINUS_DST_COLOR,[Wv]:t.ONE_MINUS_DST_ALPHA};function re(L,fe,H,le,de,je,at,pt){if(L===vi){c===!0&&(ye(t.BLEND),c=!1);return}if(c===!1&&(Ee(t.BLEND),c=!0),L!==Fv){if(L!==g||pt!==S){if((_!==Rr||w!==Rr)&&(t.blendEquation(t.FUNC_ADD),_=Rr,w=Rr),pt)switch(L){case Yr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case el:t.blendFunc(t.ONE,t.ONE);break;case Jd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case eh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Yr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case el:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Jd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case eh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,A=null,R=null,N=null,g=L,S=pt}return}de=de||fe,je=je||H,at=at||le,(fe!==_||de!==w)&&(t.blendEquationSeparate(I[fe],I[de]),_=fe,w=de),(H!==y||le!==A||je!==R||at!==N)&&(t.blendFuncSeparate(oe[H],oe[le],oe[je],oe[at]),y=H,A=le,R=je,N=at),g=L,S=!1}function Le(L,fe){L.side===An?ye(t.CULL_FACE):Ee(t.CULL_FACE);let H=L.side===Yt;fe&&(H=!H),ce(H),L.blending===Yr&&L.transparent===!1?re(vi):re(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const le=L.stencilWrite;u.setTest(le),le&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),he(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ee(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function ce(L){C!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),C=L)}function Se(L){L!==Uv?(Ee(t.CULL_FACE),L!==$&&(L===Qd?t.cullFace(t.BACK):L===Nv?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),$=L}function Me(L){L!==q&&(Z&&t.lineWidth(L),q=L)}function he(L,fe,H){L?(Ee(t.POLYGON_OFFSET_FILL),(D!==fe||z!==H)&&(t.polygonOffset(fe,H),D=fe,z=H)):ye(t.POLYGON_OFFSET_FILL)}function Ue(L){L?Ee(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function qe(L){L===void 0&&(L=t.TEXTURE0+k-1),Q!==L&&(t.activeTexture(L),Q=L)}function Qe(L,fe,H){H===void 0&&(Q===null?H=t.TEXTURE0+k-1:H=Q);let le=K[H];le===void 0&&(le={type:void 0,texture:void 0},K[H]=le),(le.type!==L||le.texture!==fe)&&(Q!==H&&(t.activeTexture(H),Q=H),t.bindTexture(L,fe||ge[L]),le.type=L,le.texture=fe)}function M(){const L=K[Q];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function E(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(L){Y.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Y.copy(L))}function ve(L){J.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),J.copy(L))}function xe(L,fe){let H=p.get(fe);H===void 0&&(H=new WeakMap,p.set(fe,H));let le=H.get(L);le===void 0&&(le=t.getUniformBlockIndex(fe,L.name),H.set(L,le))}function Ge(L,fe){const le=p.get(fe).get(L);h.get(fe)!==le&&(t.uniformBlockBinding(fe,le,L.__bindingPointIndex),h.set(fe,le))}function Ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},Q=null,K={},m={},v=new WeakMap,x=[],f=null,c=!1,g=null,_=null,y=null,A=null,w=null,R=null,N=null,S=!1,C=null,$=null,q=null,D=null,z=null,Y.set(0,0,t.canvas.width,t.canvas.height),J.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ee,disable:ye,bindFramebuffer:Oe,drawBuffers:ot,useProgram:Fe,setBlending:re,setMaterial:Le,setFlipSided:ce,setCullFace:Se,setLineWidth:Me,setPolygonOffset:he,setScissorTest:Ue,activeTexture:qe,bindTexture:Qe,unbindTexture:M,compressedTexImage2D:E,compressedTexImage3D:O,texImage2D:Ce,texImage3D:we,updateUBOMapping:xe,uniformBlockBinding:Ge,texStorage2D:ae,texStorage3D:G,texSubImage2D:ie,texSubImage3D:ee,compressedTexSubImage2D:se,compressedTexSubImage3D:Te,scissor:Ae,viewport:ve,reset:Ke}}function WM(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,h=r.maxTextureSize,p=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let x;const f=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,E){return c?new OffscreenCanvas(M,E):il("canvas")}function _(M,E,O,ie){let ee=1;if((M.width>ie||M.height>ie)&&(ee=ie/Math.max(M.width,M.height)),ee<1||E===!0)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap){const se=E?nl:Math.floor,Te=se(ee*M.width),ae=se(ee*M.height);x===void 0&&(x=g(Te,ae));const G=O?g(Te,ae):x;return G.width=Te,G.height=ae,G.getContext("2d").drawImage(M,0,0,Te,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+Te+"x"+ae+")."),G}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function y(M){return vc(M.width)&&vc(M.height)}function A(M){return a?!1:M.wrapS!==yn||M.wrapT!==yn||M.minFilter!==zt&&M.minFilter!==sn}function w(M,E){return M.generateMipmaps&&E&&M.minFilter!==zt&&M.minFilter!==sn}function R(M){t.generateMipmap(M)}function N(M,E,O,ie,ee=!1){if(a===!1)return E;if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let se=E;return E===t.RED&&(O===t.FLOAT&&(se=t.R32F),O===t.HALF_FLOAT&&(se=t.R16F),O===t.UNSIGNED_BYTE&&(se=t.R8)),E===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(se=t.R8UI),O===t.UNSIGNED_SHORT&&(se=t.R16UI),O===t.UNSIGNED_INT&&(se=t.R32UI),O===t.BYTE&&(se=t.R8I),O===t.SHORT&&(se=t.R16I),O===t.INT&&(se=t.R32I)),E===t.RG&&(O===t.FLOAT&&(se=t.RG32F),O===t.HALF_FLOAT&&(se=t.RG16F),O===t.UNSIGNED_BYTE&&(se=t.RG8)),E===t.RGBA&&(O===t.FLOAT&&(se=t.RGBA32F),O===t.HALF_FLOAT&&(se=t.RGBA16F),O===t.UNSIGNED_BYTE&&(se=ie===tt&&ee===!1?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)),(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function S(M,E,O){return w(M,O)===!0||M.isFramebufferTexture&&M.minFilter!==zt&&M.minFilter!==sn?Math.log2(Math.max(E.width,E.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?E.mipmaps.length:1}function C(M){return M===zt||M===ih||M===Kl?t.NEAREST:t.LINEAR}function $(M){const E=M.target;E.removeEventListener("dispose",$),D(E),E.isVideoTexture&&v.delete(E)}function q(M){const E=M.target;E.removeEventListener("dispose",q),k(E)}function D(M){const E=i.get(M);if(E.__webglInit===void 0)return;const O=M.source,ie=f.get(O);if(ie){const ee=ie[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&z(M),Object.keys(ie).length===0&&f.delete(O)}i.remove(M)}function z(M){const E=i.get(M);t.deleteTexture(E.__webglTexture);const O=M.source,ie=f.get(O);delete ie[E.__cacheKey],o.memory.textures--}function k(M){const E=M.texture,O=i.get(M),ie=i.get(E);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(O.__webglFramebuffer[ee]))for(let se=0;se<O.__webglFramebuffer[ee].length;se++)t.deleteFramebuffer(O.__webglFramebuffer[ee][se]);else t.deleteFramebuffer(O.__webglFramebuffer[ee]);O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer[ee])}else{if(Array.isArray(O.__webglFramebuffer))for(let ee=0;ee<O.__webglFramebuffer.length;ee++)t.deleteFramebuffer(O.__webglFramebuffer[ee]);else t.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&t.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let ee=0;ee<O.__webglColorRenderbuffer.length;ee++)O.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(O.__webglColorRenderbuffer[ee]);O.__webglDepthRenderbuffer&&t.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let ee=0,se=E.length;ee<se;ee++){const Te=i.get(E[ee]);Te.__webglTexture&&(t.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(E[ee])}i.remove(E),i.remove(M)}let Z=0;function X(){Z=0}function j(){const M=Z;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),Z+=1,M}function Q(M){const E=[];return E.push(M.wrapS),E.push(M.wrapT),E.push(M.wrapR||0),E.push(M.magFilter),E.push(M.minFilter),E.push(M.anisotropy),E.push(M.internalFormat),E.push(M.format),E.push(M.type),E.push(M.generateMipmaps),E.push(M.premultiplyAlpha),E.push(M.flipY),E.push(M.unpackAlignment),E.push(M.colorSpace),E.join()}function K(M,E){const O=i.get(M);if(M.isVideoTexture&&qe(M),M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){const ie=M.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(O,M,E);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+E)}function b(M,E){const O=i.get(M);if(M.version>0&&O.__version!==M.version){Oe(O,M,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+E)}function P(M,E){const O=i.get(M);if(M.version>0&&O.__version!==M.version){Oe(O,M,E);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+E)}function Y(M,E){const O=i.get(M);if(M.version>0&&O.__version!==M.version){ot(O,M,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+E)}const J={[mc]:t.REPEAT,[yn]:t.CLAMP_TO_EDGE,[gc]:t.MIRRORED_REPEAT},te={[zt]:t.NEAREST,[ih]:t.NEAREST_MIPMAP_NEAREST,[Kl]:t.NEAREST_MIPMAP_LINEAR,[sn]:t.LINEAR,[ax]:t.LINEAR_MIPMAP_NEAREST,[xo]:t.LINEAR_MIPMAP_LINEAR},ge={[Ex]:t.NEVER,[bx]:t.ALWAYS,[Mx]:t.LESS,[wx]:t.LEQUAL,[Tx]:t.EQUAL,[Rx]:t.GEQUAL,[Ax]:t.GREATER,[Cx]:t.NOTEQUAL};function Ee(M,E,O){if(O?(t.texParameteri(M,t.TEXTURE_WRAP_S,J[E.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,J[E.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,J[E.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,te[E.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,te[E.minFilter])):(t.texParameteri(M,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(M,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==yn||E.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(M,t.TEXTURE_MAG_FILTER,C(E.magFilter)),t.texParameteri(M,t.TEXTURE_MIN_FILTER,C(E.minFilter)),E.minFilter!==zt&&E.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,ge[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===zt||E.minFilter!==Kl&&E.minFilter!==xo||E.type===ui&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===yo&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(M,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function ye(M,E){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,E.addEventListener("dispose",$));const ie=E.source;let ee=f.get(ie);ee===void 0&&(ee={},f.set(ie,ee));const se=Q(E);if(se!==M.__cacheKey){ee[se]===void 0&&(ee[se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ee[se].usedTimes++;const Te=ee[M.__cacheKey];Te!==void 0&&(ee[M.__cacheKey].usedTimes--,Te.usedTimes===0&&z(E)),M.__cacheKey=se,M.__webglTexture=ee[se].texture}return O}function Oe(M,E,O){let ie=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=t.TEXTURE_3D);const ee=ye(M,E),se=E.source;n.bindTexture(ie,M.__webglTexture,t.TEXTURE0+O);const Te=i.get(se);if(se.version!==Te.__version||ee===!0){n.activeTexture(t.TEXTURE0+O),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ae=A(E)&&y(E.image)===!1;let G=_(E.image,ae,!1,h);G=Qe(E,G);const Ce=y(G)||a,we=s.convert(E.format,E.colorSpace);let Ae=s.convert(E.type),ve=N(E.internalFormat,we,Ae,E.colorSpace,E.isVideoTexture);Ee(ie,E,Ce);let xe;const Ge=E.mipmaps,Ke=a&&E.isVideoTexture!==!0,L=Te.__version===void 0||ee===!0,fe=S(E,G,Ce);if(E.isDepthTexture)ve=t.DEPTH_COMPONENT,a?E.type===ui?ve=t.DEPTH_COMPONENT32F:E.type===li?ve=t.DEPTH_COMPONENT24:E.type===qi?ve=t.DEPTH24_STENCIL8:ve=t.DEPTH_COMPONENT16:E.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===$i&&ve===t.DEPTH_COMPONENT&&E.type!==yf&&E.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=li,Ae=s.convert(E.type)),E.format===ts&&ve===t.DEPTH_COMPONENT&&(ve=t.DEPTH_STENCIL,E.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=qi,Ae=s.convert(E.type))),L&&(Ke?n.texStorage2D(t.TEXTURE_2D,1,ve,G.width,G.height):n.texImage2D(t.TEXTURE_2D,0,ve,G.width,G.height,0,we,Ae,null));else if(E.isDataTexture)if(Ge.length>0&&Ce){Ke&&L&&n.texStorage2D(t.TEXTURE_2D,fe,ve,Ge[0].width,Ge[0].height);for(let H=0,le=Ge.length;H<le;H++)xe=Ge[H],Ke?n.texSubImage2D(t.TEXTURE_2D,H,0,0,xe.width,xe.height,we,Ae,xe.data):n.texImage2D(t.TEXTURE_2D,H,ve,xe.width,xe.height,0,we,Ae,xe.data);E.generateMipmaps=!1}else Ke?(L&&n.texStorage2D(t.TEXTURE_2D,fe,ve,G.width,G.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,G.width,G.height,we,Ae,G.data)):n.texImage2D(t.TEXTURE_2D,0,ve,G.width,G.height,0,we,Ae,G.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ke&&L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ve,Ge[0].width,Ge[0].height,G.depth);for(let H=0,le=Ge.length;H<le;H++)xe=Ge[H],E.format!==Sn?we!==null?Ke?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,xe.width,xe.height,G.depth,we,xe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,H,ve,xe.width,xe.height,G.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,xe.width,xe.height,G.depth,we,Ae,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,H,ve,xe.width,xe.height,G.depth,0,we,Ae,xe.data)}else{Ke&&L&&n.texStorage2D(t.TEXTURE_2D,fe,ve,Ge[0].width,Ge[0].height);for(let H=0,le=Ge.length;H<le;H++)xe=Ge[H],E.format!==Sn?we!==null?Ke?n.compressedTexSubImage2D(t.TEXTURE_2D,H,0,0,xe.width,xe.height,we,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,H,ve,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage2D(t.TEXTURE_2D,H,0,0,xe.width,xe.height,we,Ae,xe.data):n.texImage2D(t.TEXTURE_2D,H,ve,xe.width,xe.height,0,we,Ae,xe.data)}else if(E.isDataArrayTexture)Ke?(L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ve,G.width,G.height,G.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,we,Ae,G.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ve,G.width,G.height,G.depth,0,we,Ae,G.data);else if(E.isData3DTexture)Ke?(L&&n.texStorage3D(t.TEXTURE_3D,fe,ve,G.width,G.height,G.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,we,Ae,G.data)):n.texImage3D(t.TEXTURE_3D,0,ve,G.width,G.height,G.depth,0,we,Ae,G.data);else if(E.isFramebufferTexture){if(L)if(Ke)n.texStorage2D(t.TEXTURE_2D,fe,ve,G.width,G.height);else{let H=G.width,le=G.height;for(let de=0;de<fe;de++)n.texImage2D(t.TEXTURE_2D,de,ve,H,le,0,we,Ae,null),H>>=1,le>>=1}}else if(Ge.length>0&&Ce){Ke&&L&&n.texStorage2D(t.TEXTURE_2D,fe,ve,Ge[0].width,Ge[0].height);for(let H=0,le=Ge.length;H<le;H++)xe=Ge[H],Ke?n.texSubImage2D(t.TEXTURE_2D,H,0,0,we,Ae,xe):n.texImage2D(t.TEXTURE_2D,H,ve,we,Ae,xe);E.generateMipmaps=!1}else Ke?(L&&n.texStorage2D(t.TEXTURE_2D,fe,ve,G.width,G.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,we,Ae,G)):n.texImage2D(t.TEXTURE_2D,0,ve,we,Ae,G);w(E,Ce)&&R(ie),Te.__version=se.version,E.onUpdate&&E.onUpdate(E)}M.__version=E.version}function ot(M,E,O){if(E.image.length!==6)return;const ie=ye(M,E),ee=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+O);const se=i.get(ee);if(ee.version!==se.__version||ie===!0){n.activeTexture(t.TEXTURE0+O),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Te=E.isCompressedTexture||E.image[0].isCompressedTexture,ae=E.image[0]&&E.image[0].isDataTexture,G=[];for(let H=0;H<6;H++)!Te&&!ae?G[H]=_(E.image[H],!1,!0,u):G[H]=ae?E.image[H].image:E.image[H],G[H]=Qe(E,G[H]);const Ce=G[0],we=y(Ce)||a,Ae=s.convert(E.format,E.colorSpace),ve=s.convert(E.type),xe=N(E.internalFormat,Ae,ve,E.colorSpace),Ge=a&&E.isVideoTexture!==!0,Ke=se.__version===void 0||ie===!0;let L=S(E,Ce,we);Ee(t.TEXTURE_CUBE_MAP,E,we);let fe;if(Te){Ge&&Ke&&n.texStorage2D(t.TEXTURE_CUBE_MAP,L,xe,Ce.width,Ce.height);for(let H=0;H<6;H++){fe=G[H].mipmaps;for(let le=0;le<fe.length;le++){const de=fe[le];E.format!==Sn?Ae!==null?Ge?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,le,0,0,de.width,de.height,Ae,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,le,xe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,le,0,0,de.width,de.height,Ae,ve,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,le,xe,de.width,de.height,0,Ae,ve,de.data)}}}else{fe=E.mipmaps,Ge&&Ke&&(fe.length>0&&L++,n.texStorage2D(t.TEXTURE_CUBE_MAP,L,xe,G[0].width,G[0].height));for(let H=0;H<6;H++)if(ae){Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,G[H].width,G[H].height,Ae,ve,G[H].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,xe,G[H].width,G[H].height,0,Ae,ve,G[H].data);for(let le=0;le<fe.length;le++){const je=fe[le].image[H].image;Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,le+1,0,0,je.width,je.height,Ae,ve,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,le+1,xe,je.width,je.height,0,Ae,ve,je.data)}}else{Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Ae,ve,G[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,xe,Ae,ve,G[H]);for(let le=0;le<fe.length;le++){const de=fe[le];Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,le+1,0,0,Ae,ve,de.image[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,le+1,xe,Ae,ve,de.image[H])}}}w(E,we)&&R(t.TEXTURE_CUBE_MAP),se.__version=ee.version,E.onUpdate&&E.onUpdate(E)}M.__version=E.version}function Fe(M,E,O,ie,ee,se){const Te=s.convert(O.format,O.colorSpace),ae=s.convert(O.type),G=N(O.internalFormat,Te,ae,O.colorSpace);if(!i.get(E).__hasExternalTextures){const we=Math.max(1,E.width>>se),Ae=Math.max(1,E.height>>se);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,se,G,we,Ae,E.depth,0,Te,ae,null):n.texImage2D(ee,se,G,we,Ae,0,Te,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),Ue(E)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,i.get(O).__webglTexture,0,he(E)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,i.get(O).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function I(M,E,O){if(t.bindRenderbuffer(t.RENDERBUFFER,M),E.depthBuffer&&!E.stencilBuffer){let ie=t.DEPTH_COMPONENT16;if(O||Ue(E)){const ee=E.depthTexture;ee&&ee.isDepthTexture&&(ee.type===ui?ie=t.DEPTH_COMPONENT32F:ee.type===li&&(ie=t.DEPTH_COMPONENT24));const se=he(E);Ue(E)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,ie,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,se,ie,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,M)}else if(E.depthBuffer&&E.stencilBuffer){const ie=he(E);O&&Ue(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,E.width,E.height):Ue(E)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,M)}else{const ie=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0;ee<ie.length;ee++){const se=ie[ee],Te=s.convert(se.format,se.colorSpace),ae=s.convert(se.type),G=N(se.internalFormat,Te,ae,se.colorSpace),Ce=he(E);O&&Ue(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,G,E.width,E.height):Ue(E)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,G,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,G,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function oe(M,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);const ie=i.get(E.depthTexture).__webglTexture,ee=he(E);if(E.depthTexture.format===$i)Ue(E)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(E.depthTexture.format===ts)Ue(E)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function re(M){const E=i.get(M),O=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");oe(E.__webglFramebuffer,M)}else if(O){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]=t.createRenderbuffer(),I(E.__webglDepthbuffer[ie],M,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),I(E.__webglDepthbuffer,M,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(M,E,O){const ie=i.get(M);E!==void 0&&Fe(ie.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&re(M)}function ce(M){const E=M.texture,O=i.get(M),ie=i.get(E);M.addEventListener("dispose",q),M.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=E.version,o.memory.textures++);const ee=M.isWebGLCubeRenderTarget===!0,se=M.isWebGLMultipleRenderTargets===!0,Te=y(M)||a;if(ee){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let G=0;G<E.mipmaps.length;G++)O.__webglFramebuffer[ae][G]=t.createFramebuffer()}else O.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<E.mipmaps.length;ae++)O.__webglFramebuffer[ae]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(se)if(r.drawBuffers){const ae=M.texture;for(let G=0,Ce=ae.length;G<Ce;G++){const we=i.get(ae[G]);we.__webglTexture===void 0&&(we.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&Ue(M)===!1){const ae=se?E:[E];O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let G=0;G<ae.length;G++){const Ce=ae[G];O.__webglColorRenderbuffer[G]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[G]);const we=s.convert(Ce.format,Ce.colorSpace),Ae=s.convert(Ce.type),ve=N(Ce.internalFormat,we,Ae,Ce.colorSpace,M.isXRRenderTarget===!0),xe=he(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,ve,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.RENDERBUFFER,O.__webglColorRenderbuffer[G])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),I(O.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),Ee(t.TEXTURE_CUBE_MAP,E,Te);for(let ae=0;ae<6;ae++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let G=0;G<E.mipmaps.length;G++)Fe(O.__webglFramebuffer[ae][G],M,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,G);else Fe(O.__webglFramebuffer[ae],M,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);w(E,Te)&&R(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(se){const ae=M.texture;for(let G=0,Ce=ae.length;G<Ce;G++){const we=ae[G],Ae=i.get(we);n.bindTexture(t.TEXTURE_2D,Ae.__webglTexture),Ee(t.TEXTURE_2D,we,Te),Fe(O.__webglFramebuffer,M,we,t.COLOR_ATTACHMENT0+G,t.TEXTURE_2D,0),w(we,Te)&&R(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?ae=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ae,ie.__webglTexture),Ee(ae,E,Te),a&&E.mipmaps&&E.mipmaps.length>0)for(let G=0;G<E.mipmaps.length;G++)Fe(O.__webglFramebuffer[G],M,E,t.COLOR_ATTACHMENT0,ae,G);else Fe(O.__webglFramebuffer,M,E,t.COLOR_ATTACHMENT0,ae,0);w(E,Te)&&R(ae),n.unbindTexture()}M.depthBuffer&&re(M)}function Se(M){const E=y(M)||a,O=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ie=0,ee=O.length;ie<ee;ie++){const se=O[ie];if(w(se,E)){const Te=M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ae=i.get(se).__webglTexture;n.bindTexture(Te,ae),R(Te),n.unbindTexture()}}}function Me(M){if(a&&M.samples>0&&Ue(M)===!1){const E=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],O=M.width,ie=M.height;let ee=t.COLOR_BUFFER_BIT;const se=[],Te=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=i.get(M),G=M.isWebGLMultipleRenderTargets===!0;if(G)for(let Ce=0;Ce<E.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Ce=0;Ce<E.length;Ce++){se.push(t.COLOR_ATTACHMENT0+Ce),M.depthBuffer&&se.push(Te);const we=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(we===!1&&(M.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),G&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[Ce]),we===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Te]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Te])),G){const Ae=i.get(E[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,O,ie,0,0,O,ie,ee,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),G)for(let Ce=0;Ce<E.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,ae.__webglColorRenderbuffer[Ce]);const we=i.get(E[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,we,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function he(M){return Math.min(p,M.samples)}function Ue(M){const E=i.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function qe(M){const E=o.render.frame;v.get(M)!==E&&(v.set(M,E),M.update())}function Qe(M,E){const O=M.colorSpace,ie=M.format,ee=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===_c||O!==Dn&&O!==Zi&&(O===tt||O===xl?a===!1?e.has("EXT_sRGB")===!0&&ie===Sn?(M.format=_c,M.minFilter=sn,M.generateMipmaps=!1):E=Ng.sRGBToLinear(E):(ie!==Sn||ee!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}this.allocateTextureUnit=j,this.resetTextureUnits=X,this.setTexture2D=K,this.setTexture2DArray=b,this.setTexture3D=P,this.setTextureCube=Y,this.rebindTextures=Le,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Ue}const XM=0,vt=1;function jM(t,e,n){const i=n.isWebGL2;function r(s,o=Zi){let a;const l=o===tt||o===xl?vt:XM;if(s===yi)return t.UNSIGNED_BYTE;if(s===Cg)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Rg)return t.UNSIGNED_SHORT_5_5_5_1;if(s===lx)return t.BYTE;if(s===ux)return t.SHORT;if(s===yf)return t.UNSIGNED_SHORT;if(s===Ag)return t.INT;if(s===li)return t.UNSIGNED_INT;if(s===ui)return t.FLOAT;if(s===yo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===cx)return t.ALPHA;if(s===Sn)return t.RGBA;if(s===fx)return t.LUMINANCE;if(s===dx)return t.LUMINANCE_ALPHA;if(s===$i)return t.DEPTH_COMPONENT;if(s===ts)return t.DEPTH_STENCIL;if(s===_c)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===hx)return t.RED;if(s===bg)return t.RED_INTEGER;if(s===px)return t.RG;if(s===Lg)return t.RG_INTEGER;if(s===Pg)return t.RGBA_INTEGER;if(s===Zl||s===Ql||s===Jl||s===eu)if(l===vt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Zl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Zl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ql)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===eu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rh||s===sh||s===oh||s===ah)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===rh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===oh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ah)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===mx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===lh||s===uh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===lh)return l===vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===uh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ch||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===_h||s===vh||s===xh||s===yh||s===Sh||s===Eh||s===Mh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ch)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ph)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===mh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_h)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Eh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mh)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===tu||s===Th||s===wh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===tu)return l===vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Th)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===wh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===gx||s===Ah||s===Ch||s===Rh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===tu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ah)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ch)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===qi?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class YM extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ji extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qM={type:"move"};class Mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const f=n.getJointPose(x,i),c=this._getHandJoint(u,x);f!==null&&(c.matrix.fromArray(f.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=f.radius),c.visible=f!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],d=h.position.distanceTo(p.position),m=.02,v=.005;u.inputState.pinching&&d>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ji;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class $M extends Jt{constructor(e,n,i,r,s,o,a,l,u,h){if(h=h!==void 0?h:$i,h!==$i&&h!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===$i&&(i=li),i===void 0&&h===ts&&(i=qi),super(null,r,s,o,a,l,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class KM extends fs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,h=null,p=null,d=null,m=null,v=null;const x=n.getContextAttributes();let f=null,c=null;const g=[],_=[],y=new Zt;y.layers.enable(1),y.viewport=new it;const A=new Zt;A.layers.enable(2),A.viewport=new it;const w=[y,A],R=new YM;R.layers.enable(1),R.layers.enable(2);let N=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(b){let P=g[b];return P===void 0&&(P=new Mu,g[b]=P),P.getTargetRaySpace()},this.getControllerGrip=function(b){let P=g[b];return P===void 0&&(P=new Mu,g[b]=P),P.getGripSpace()},this.getHand=function(b){let P=g[b];return P===void 0&&(P=new Mu,g[b]=P),P.getHandSpace()};function C(b){const P=_.indexOf(b.inputSource);if(P===-1)return;const Y=g[P];Y!==void 0&&(Y.update(b.inputSource,b.frame,u||o),Y.dispatchEvent({type:b.type,data:b.inputSource}))}function $(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",q);for(let b=0;b<g.length;b++){const P=_[b];P!==null&&(_[b]=null,g[b].disconnect(P))}N=null,S=null,e.setRenderTarget(f),m=null,d=null,p=null,r=null,c=null,K.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(b){s=b,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(b){a=b,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(b){u=b},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(b){if(r=b,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",$),r.addEventListener("inputsourceschange",q),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const P={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,P),r.updateRenderState({baseLayer:m}),c=new tr(m.framebufferWidth,m.framebufferHeight,{format:Sn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let P=null,Y=null,J=null;x.depth&&(J=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,P=x.stencil?ts:$i,Y=x.stencil?qi:li);const te={colorFormat:n.RGBA8,depthFormat:J,scaleFactor:s};p=new XRWebGLBinding(r,n),d=p.createProjectionLayer(te),r.updateRenderState({layers:[d]}),c=new tr(d.textureWidth,d.textureHeight,{format:Sn,type:yi,depthTexture:new $M(d.textureWidth,d.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,P),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const ge=e.properties.get(c);ge.__ignoreDepthValues=d.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),K.setContext(r),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(b){for(let P=0;P<b.removed.length;P++){const Y=b.removed[P],J=_.indexOf(Y);J>=0&&(_[J]=null,g[J].disconnect(Y))}for(let P=0;P<b.added.length;P++){const Y=b.added[P];let J=_.indexOf(Y);if(J===-1){for(let ge=0;ge<g.length;ge++)if(ge>=_.length){_.push(Y),J=ge;break}else if(_[ge]===null){_[ge]=Y,J=ge;break}if(J===-1)break}const te=g[J];te&&te.connect(Y)}}const D=new U,z=new U;function k(b,P,Y){D.setFromMatrixPosition(P.matrixWorld),z.setFromMatrixPosition(Y.matrixWorld);const J=D.distanceTo(z),te=P.projectionMatrix.elements,ge=Y.projectionMatrix.elements,Ee=te[14]/(te[10]-1),ye=te[14]/(te[10]+1),Oe=(te[9]+1)/te[5],ot=(te[9]-1)/te[5],Fe=(te[8]-1)/te[0],I=(ge[8]+1)/ge[0],oe=Ee*Fe,re=Ee*I,Le=J/(-Fe+I),ce=Le*-Fe;P.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(ce),b.translateZ(Le),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert();const Se=Ee+Le,Me=ye+Le,he=oe-ce,Ue=re+(J-ce),qe=Oe*ye/Me*Se,Qe=ot*ye/Me*Se;b.projectionMatrix.makePerspective(he,Ue,qe,Qe,Se,Me),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}function Z(b,P){P===null?b.matrixWorld.copy(b.matrix):b.matrixWorld.multiplyMatrices(P.matrixWorld,b.matrix),b.matrixWorldInverse.copy(b.matrixWorld).invert()}this.updateCamera=function(b){if(r===null)return;R.near=A.near=y.near=b.near,R.far=A.far=y.far=b.far,(N!==R.near||S!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),N=R.near,S=R.far);const P=b.parent,Y=R.cameras;Z(R,P);for(let J=0;J<Y.length;J++)Z(Y[J],P);Y.length===2?k(R,y,A):R.projectionMatrix.copy(y.projectionMatrix),X(b,R,P)};function X(b,P,Y){Y===null?b.matrix.copy(P.matrixWorld):(b.matrix.copy(Y.matrixWorld),b.matrix.invert(),b.matrix.multiply(P.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(P.projectionMatrix),b.projectionMatrixInverse.copy(P.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=So*2*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(b){l=b,d!==null&&(d.fixedFoveation=b),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=b)};let j=null;function Q(b,P){if(h=P.getViewerPose(u||o),v=P,h!==null){const Y=h.views;m!==null&&(e.setRenderTargetFramebuffer(c,m.framebuffer),e.setRenderTarget(c));let J=!1;Y.length!==R.cameras.length&&(R.cameras.length=0,J=!0);for(let te=0;te<Y.length;te++){const ge=Y[te];let Ee=null;if(m!==null)Ee=m.getViewport(ge);else{const Oe=p.getViewSubImage(d,ge);Ee=Oe.viewport,te===0&&(e.setRenderTargetTextures(c,Oe.colorTexture,d.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(c))}let ye=w[te];ye===void 0&&(ye=new Zt,ye.layers.enable(te),ye.viewport=new it,w[te]=ye),ye.matrix.fromArray(ge.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(ge.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),te===0&&(R.matrix.copy(ye.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),J===!0&&R.cameras.push(ye)}}for(let Y=0;Y<g.length;Y++){const J=_[Y],te=g[Y];J!==null&&te!==void 0&&te.update(J,P,u||o)}j&&j(b,P),P.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:P}),v=null}const K=new Xg;K.setAnimationLoop(Q),this.setAnimationLoop=function(b){j=b},this.dispose=function(){}}}function ZM(t,e){function n(f,c){f.matrixAutoUpdate===!0&&f.updateMatrix(),c.value.copy(f.matrix)}function i(f,c){c.color.getRGB(f.fogColor.value,Gg(t)),c.isFog?(f.fogNear.value=c.near,f.fogFar.value=c.far):c.isFogExp2&&(f.fogDensity.value=c.density)}function r(f,c,g,_,y){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(f,c):c.isMeshToonMaterial?(s(f,c),p(f,c)):c.isMeshPhongMaterial?(s(f,c),h(f,c)):c.isMeshStandardMaterial?(s(f,c),d(f,c),c.isMeshPhysicalMaterial&&m(f,c,y)):c.isMeshMatcapMaterial?(s(f,c),v(f,c)):c.isMeshDepthMaterial?s(f,c):c.isMeshDistanceMaterial?(s(f,c),x(f,c)):c.isMeshNormalMaterial?s(f,c):c.isLineBasicMaterial?(o(f,c),c.isLineDashedMaterial&&a(f,c)):c.isPointsMaterial?l(f,c,g,_):c.isSpriteMaterial?u(f,c):c.isShadowMaterial?(f.color.value.copy(c.color),f.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(f,c){f.opacity.value=c.opacity,c.color&&f.diffuse.value.copy(c.color),c.emissive&&f.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(f.map.value=c.map,n(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.bumpMap&&(f.bumpMap.value=c.bumpMap,n(c.bumpMap,f.bumpMapTransform),f.bumpScale.value=c.bumpScale,c.side===Yt&&(f.bumpScale.value*=-1)),c.normalMap&&(f.normalMap.value=c.normalMap,n(c.normalMap,f.normalMapTransform),f.normalScale.value.copy(c.normalScale),c.side===Yt&&f.normalScale.value.negate()),c.displacementMap&&(f.displacementMap.value=c.displacementMap,n(c.displacementMap,f.displacementMapTransform),f.displacementScale.value=c.displacementScale,f.displacementBias.value=c.displacementBias),c.emissiveMap&&(f.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,f.emissiveMapTransform)),c.specularMap&&(f.specularMap.value=c.specularMap,n(c.specularMap,f.specularMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest);const g=e.get(c).envMap;if(g&&(f.envMap.value=g,f.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=c.reflectivity,f.ior.value=c.ior,f.refractionRatio.value=c.refractionRatio),c.lightMap){f.lightMap.value=c.lightMap;const _=t._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=c.lightMapIntensity*_,n(c.lightMap,f.lightMapTransform)}c.aoMap&&(f.aoMap.value=c.aoMap,f.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,f.aoMapTransform))}function o(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,c.map&&(f.map.value=c.map,n(c.map,f.mapTransform))}function a(f,c){f.dashSize.value=c.dashSize,f.totalSize.value=c.dashSize+c.gapSize,f.scale.value=c.scale}function l(f,c,g,_){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.size.value=c.size*g,f.scale.value=_*.5,c.map&&(f.map.value=c.map,n(c.map,f.uvTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function u(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.rotation.value=c.rotation,c.map&&(f.map.value=c.map,n(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function h(f,c){f.specular.value.copy(c.specular),f.shininess.value=Math.max(c.shininess,1e-4)}function p(f,c){c.gradientMap&&(f.gradientMap.value=c.gradientMap)}function d(f,c){f.metalness.value=c.metalness,c.metalnessMap&&(f.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,f.metalnessMapTransform)),f.roughness.value=c.roughness,c.roughnessMap&&(f.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,f.roughnessMapTransform)),e.get(c).envMap&&(f.envMapIntensity.value=c.envMapIntensity)}function m(f,c,g){f.ior.value=c.ior,c.sheen>0&&(f.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),f.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(f.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,f.sheenColorMapTransform)),c.sheenRoughnessMap&&(f.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,f.sheenRoughnessMapTransform))),c.clearcoat>0&&(f.clearcoat.value=c.clearcoat,f.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(f.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,f.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(f.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Yt&&f.clearcoatNormalScale.value.negate())),c.iridescence>0&&(f.iridescence.value=c.iridescence,f.iridescenceIOR.value=c.iridescenceIOR,f.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(f.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,f.iridescenceMapTransform)),c.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),c.transmission>0&&(f.transmission.value=c.transmission,f.transmissionSamplerMap.value=g.texture,f.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(f.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,f.transmissionMapTransform)),f.thickness.value=c.thickness,c.thicknessMap&&(f.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=c.attenuationDistance,f.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(f.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(f.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=c.specularIntensity,f.specularColor.value.copy(c.specularColor),c.specularColorMap&&(f.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,f.specularColorMapTransform)),c.specularIntensityMap&&(f.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,c){c.matcap&&(f.matcap.value=c.matcap)}function x(f,c){const g=e.get(c).light;f.referencePosition.value.setFromMatrixPosition(g.matrixWorld),f.nearDistance.value=g.shadow.camera.near,f.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function QM(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,_){const y=_.program;i.uniformBlockBinding(g,y)}function u(g,_){let y=r[g.id];y===void 0&&(v(g),y=h(g),r[g.id]=y,g.addEventListener("dispose",f));const A=_.program;i.updateUBOMapping(g,A);const w=e.render.frame;s[g.id]!==w&&(d(g),s[g.id]=w)}function h(g){const _=p();g.__bindingPointIndex=_;const y=t.createBuffer(),A=g.__size,w=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,A,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function p(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const _=r[g.id],y=g.uniforms,A=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let w=0,R=y.length;w<R;w++){const N=y[w];if(m(N,w,A)===!0){const S=N.__offset,C=Array.isArray(N.value)?N.value:[N.value];let $=0;for(let q=0;q<C.length;q++){const D=C[q],z=x(D);typeof D=="number"?(N.__data[0]=D,t.bufferSubData(t.UNIFORM_BUFFER,S+$,N.__data)):D.isMatrix3?(N.__data[0]=D.elements[0],N.__data[1]=D.elements[1],N.__data[2]=D.elements[2],N.__data[3]=D.elements[0],N.__data[4]=D.elements[3],N.__data[5]=D.elements[4],N.__data[6]=D.elements[5],N.__data[7]=D.elements[0],N.__data[8]=D.elements[6],N.__data[9]=D.elements[7],N.__data[10]=D.elements[8],N.__data[11]=D.elements[0]):(D.toArray(N.__data,$),$+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,N.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,_,y){const A=g.value;if(y[_]===void 0){if(typeof A=="number")y[_]=A;else{const w=Array.isArray(A)?A:[A],R=[];for(let N=0;N<w.length;N++)R.push(w[N].clone());y[_]=R}return!0}else if(typeof A=="number"){if(y[_]!==A)return y[_]=A,!0}else{const w=Array.isArray(y[_])?y[_]:[y[_]],R=Array.isArray(A)?A:[A];for(let N=0;N<w.length;N++){const S=w[N];if(S.equals(R[N])===!1)return S.copy(R[N]),!0}}return!1}function v(g){const _=g.uniforms;let y=0;const A=16;let w=0;for(let R=0,N=_.length;R<N;R++){const S=_[R],C={boundary:0,storage:0},$=Array.isArray(S.value)?S.value:[S.value];for(let q=0,D=$.length;q<D;q++){const z=$[q],k=x(z);C.boundary+=k.boundary,C.storage+=k.storage}if(S.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,R>0){w=y%A;const q=A-w;w!==0&&q-C.boundary<0&&(y+=A-w,S.__offset=y)}y+=C.storage}return w=y%A,w>0&&(y+=A-w),g.__size=y,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function f(g){const _=g.target;_.removeEventListener("dispose",f);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function c(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class Zg{constructor(e={}){const{canvas:n=Xx(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,f=null;const c=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=tt,this._useLegacyLights=!1,this.toneMapping=xi,this.toneMappingExposure=1;const _=this;let y=!1,A=0,w=0,R=null,N=-1,S=null;const C=new it,$=new it;let q=null;const D=new Ye(0);let z=0,k=n.width,Z=n.height,X=1,j=null,Q=null;const K=new it(0,0,k,Z),b=new it(0,0,k,Z);let P=!1;const Y=new Mf;let J=!1,te=!1,ge=null;const Ee=new rt,ye=new $e,Oe=new U,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return R===null?X:1}let I=i;function oe(T,F){for(let V=0;V<T.length;V++){const B=T[V],W=n.getContext(B,F);if(W!==null)return W}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xf}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",H,!1),n.addEventListener("webglcontextcreationerror",le,!1),I===null){const F=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&F.shift(),I=oe(F,T),I===null)throw oe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let re,Le,ce,Se,Me,he,Ue,qe,Qe,M,E,O,ie,ee,se,Te,ae,G,Ce,we,Ae,ve,xe,Ge;function Ke(){re=new lE(I),Le=new nE(I,re,e),re.init(Le),ve=new jM(I,re,Le),ce=new VM(I,re,Le),Se=new fE(I),Me=new bM,he=new WM(I,re,ce,Me,Le,ve,Se),Ue=new rE(_),qe=new aE(_),Qe=new S1(I,Le),xe=new eE(I,re,Qe,Le),M=new uE(I,Qe,Se,xe),E=new mE(I,M,Qe,Se),Ce=new pE(I,Le,he),Te=new iE(Me),O=new RM(_,Ue,qe,re,Le,xe,Te),ie=new ZM(_,Me),ee=new PM,se=new OM(re,Le),G=new JS(_,Ue,qe,ce,E,d,l),ae=new GM(_,E,Le),Ge=new QM(I,Se,Le,ce),we=new tE(I,re,Se,Le),Ae=new cE(I,re,Se,Le),Se.programs=O.programs,_.capabilities=Le,_.extensions=re,_.properties=Me,_.renderLists=ee,_.shadowMap=ae,_.state=ce,_.info=Se}Ke();const L=new KM(_,I);this.xr=L,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=re.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=re.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(k,Z,!1))},this.getSize=function(T){return T.set(k,Z)},this.setSize=function(T,F,V=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,Z=F,n.width=Math.floor(T*X),n.height=Math.floor(F*X),V===!0&&(n.style.width=T+"px",n.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(k*X,Z*X).floor()},this.setDrawingBufferSize=function(T,F,V){k=T,Z=F,X=V,n.width=Math.floor(T*V),n.height=Math.floor(F*V),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,F,V,B){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,F,V,B),ce.viewport(C.copy(K).multiplyScalar(X).floor())},this.getScissor=function(T){return T.copy(b)},this.setScissor=function(T,F,V,B){T.isVector4?b.set(T.x,T.y,T.z,T.w):b.set(T,F,V,B),ce.scissor($.copy(b).multiplyScalar(X).floor())},this.getScissorTest=function(){return P},this.setScissorTest=function(T){ce.setScissorTest(P=T)},this.setOpaqueSort=function(T){j=T},this.setTransparentSort=function(T){Q=T},this.getClearColor=function(T){return T.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor.apply(G,arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha.apply(G,arguments)},this.clear=function(T=!0,F=!0,V=!0){let B=0;if(T){let W=!1;if(R!==null){const _e=R.texture.format;W=_e===Pg||_e===Lg||_e===bg}if(W){const _e=R.texture.type,be=_e===yi||_e===li||_e===yf||_e===qi||_e===Cg||_e===Rg,Ne=G.getClearColor(),Ie=G.getClearAlpha(),Ve=Ne.r,Pe=Ne.g,Be=Ne.b;be?(m[0]=Ve,m[1]=Pe,m[2]=Be,m[3]=Ie,I.clearBufferuiv(I.COLOR,0,m)):(v[0]=Ve,v[1]=Pe,v[2]=Be,v[3]=Ie,I.clearBufferiv(I.COLOR,0,v))}else B|=I.COLOR_BUFFER_BIT}F&&(B|=I.DEPTH_BUFFER_BIT),V&&(B|=I.STENCIL_BUFFER_BIT),I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",H,!1),n.removeEventListener("webglcontextcreationerror",le,!1),ee.dispose(),se.dispose(),Me.dispose(),Ue.dispose(),qe.dispose(),E.dispose(),xe.dispose(),Ge.dispose(),O.dispose(),L.dispose(),L.removeEventListener("sessionstart",Je),L.removeEventListener("sessionend",Tn),ge&&(ge.dispose(),ge=null),It.stop()};function fe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=Se.autoReset,F=ae.enabled,V=ae.autoUpdate,B=ae.needsUpdate,W=ae.type;Ke(),Se.autoReset=T,ae.enabled=F,ae.autoUpdate=V,ae.needsUpdate=B,ae.type=W}function le(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function de(T){const F=T.target;F.removeEventListener("dispose",de),je(F)}function je(T){at(T),Me.remove(T)}function at(T){const F=Me.get(T).programs;F!==void 0&&(F.forEach(function(V){O.releaseProgram(V)}),T.isShaderMaterial&&O.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,V,B,W,_e){F===null&&(F=ot);const be=W.isMesh&&W.matrixWorld.determinant()<0,Ne=i0(T,F,V,B,W);ce.setMaterial(B,be);let Ie=V.index,Ve=1;if(B.wireframe===!0){if(Ie=M.getWireframeAttribute(V),Ie===void 0)return;Ve=2}const Pe=V.drawRange,Be=V.attributes.position;let lt=Pe.start*Ve,dt=(Pe.start+Pe.count)*Ve;_e!==null&&(lt=Math.max(lt,_e.start*Ve),dt=Math.min(dt,(_e.start+_e.count)*Ve)),Ie!==null?(lt=Math.max(lt,0),dt=Math.min(dt,Ie.count)):Be!=null&&(lt=Math.max(lt,0),dt=Math.min(dt,Be.count));const tn=dt-lt;if(tn<0||tn===1/0)return;xe.setup(W,B,Ne,V,Ie);let In,mt=we;if(Ie!==null&&(In=Qe.get(Ie),mt=Ae,mt.setIndex(In)),W.isMesh)B.wireframe===!0?(ce.setLineWidth(B.wireframeLinewidth*Fe()),mt.setMode(I.LINES)):mt.setMode(I.TRIANGLES);else if(W.isLine){let We=B.linewidth;We===void 0&&(We=1),ce.setLineWidth(We*Fe()),W.isLineSegments?mt.setMode(I.LINES):W.isLineLoop?mt.setMode(I.LINE_LOOP):mt.setMode(I.LINE_STRIP)}else W.isPoints?mt.setMode(I.POINTS):W.isSprite&&mt.setMode(I.TRIANGLES);if(W.isInstancedMesh)mt.renderInstances(lt,tn,W.count);else if(V.isInstancedBufferGeometry){const We=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,El=Math.min(V.instanceCount,We);mt.renderInstances(lt,tn,El)}else mt.render(lt,tn)},this.compile=function(T,F){function V(B,W,_e){B.transparent===!0&&B.side===An&&B.forceSinglePass===!1?(B.side=Yt,B.needsUpdate=!0,Do(B,W,_e),B.side=Ai,B.needsUpdate=!0,Do(B,W,_e),B.side=An):Do(B,W,_e)}f=se.get(T),f.init(),g.push(f),T.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights(_._useLegacyLights),T.traverse(function(B){const W=B.material;if(W)if(Array.isArray(W))for(let _e=0;_e<W.length;_e++){const be=W[_e];V(be,T,B)}else V(W,T,B)}),g.pop(),f=null};let pt=null;function Qn(T){pt&&pt(T)}function Je(){It.stop()}function Tn(){It.start()}const It=new Xg;It.setAnimationLoop(Qn),typeof self!="undefined"&&It.setContext(self),this.setAnimationLoop=function(T){pt=T,L.setAnimationLoop(T),T===null?It.stop():It.start()},L.addEventListener("sessionstart",Je),L.addEventListener("sessionend",Tn),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(F),F=L.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,F,R),f=se.get(T,g.length),f.init(),g.push(f),Ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(Ee),te=this.localClippingEnabled,J=Te.init(this.clippingPlanes,te),x=ee.get(T,c.length),x.init(),c.push(x),Rf(T,F,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(j,Q),this.info.render.frame++,J===!0&&Te.beginShadows();const V=f.state.shadowsArray;if(ae.render(V,T,F),J===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),G.render(x,T),f.setupLights(_._useLegacyLights),F.isArrayCamera){const B=F.cameras;for(let W=0,_e=B.length;W<_e;W++){const be=B[W];bf(x,T,be,be.viewport)}}else bf(x,T,F);R!==null&&(he.updateMultisampleRenderTarget(R),he.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(_,T,F),xe.resetDefaultState(),N=-1,S=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function Rf(T,F,V,B){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){B&&Oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ee);const be=E.update(T),Ne=T.material;Ne.visible&&x.push(T,be,Ne,V,Oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const be=E.update(T),Ne=T.material;if(B&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Oe.copy(T.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Oe.copy(be.boundingSphere.center)),Oe.applyMatrix4(T.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ne)){const Ie=be.groups;for(let Ve=0,Pe=Ie.length;Ve<Pe;Ve++){const Be=Ie[Ve],lt=Ne[Be.materialIndex];lt&&lt.visible&&x.push(T,be,lt,V,Oe.z,Be)}}else Ne.visible&&x.push(T,be,Ne,V,Oe.z,null)}}const _e=T.children;for(let be=0,Ne=_e.length;be<Ne;be++)Rf(_e[be],F,V,B)}function bf(T,F,V,B){const W=T.opaque,_e=T.transmissive,be=T.transparent;f.setupLightsView(V),J===!0&&Te.setGlobalState(_.clippingPlanes,V),_e.length>0&&n0(W,_e,F,V),B&&ce.viewport(C.copy(B)),W.length>0&&Po(W,F,V),_e.length>0&&Po(_e,F,V),be.length>0&&Po(be,F,V),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function n0(T,F,V,B){const W=Le.isWebGL2;ge===null&&(ge=new tr(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")?yo:yi,minFilter:xo,samples:W?4:0})),_.getDrawingBufferSize(ye),W?ge.setSize(ye.x,ye.y):ge.setSize(nl(ye.x),nl(ye.y));const _e=_.getRenderTarget();_.setRenderTarget(ge),_.getClearColor(D),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),_.clear();const be=_.toneMapping;_.toneMapping=xi,Po(T,V,B),he.updateMultisampleRenderTarget(ge),he.updateRenderTargetMipmap(ge);let Ne=!1;for(let Ie=0,Ve=F.length;Ie<Ve;Ie++){const Pe=F[Ie],Be=Pe.object,lt=Pe.geometry,dt=Pe.material,tn=Pe.group;if(dt.side===An&&Be.layers.test(B.layers)){const In=dt.side;dt.side=Yt,dt.needsUpdate=!0,Lf(Be,V,B,lt,dt,tn),dt.side=In,dt.needsUpdate=!0,Ne=!0}}Ne===!0&&(he.updateMultisampleRenderTarget(ge),he.updateRenderTargetMipmap(ge)),_.setRenderTarget(_e),_.setClearColor(D,z),_.toneMapping=be}function Po(T,F,V){const B=F.isScene===!0?F.overrideMaterial:null;for(let W=0,_e=T.length;W<_e;W++){const be=T[W],Ne=be.object,Ie=be.geometry,Ve=B===null?be.material:B,Pe=be.group;Ne.layers.test(V.layers)&&Lf(Ne,F,V,Ie,Ve,Pe)}}function Lf(T,F,V,B,W,_e){T.onBeforeRender(_,F,V,B,W,_e),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(_,F,V,B,T,_e),W.transparent===!0&&W.side===An&&W.forceSinglePass===!1?(W.side=Yt,W.needsUpdate=!0,_.renderBufferDirect(V,F,B,W,T,_e),W.side=Ai,W.needsUpdate=!0,_.renderBufferDirect(V,F,B,W,T,_e),W.side=An):_.renderBufferDirect(V,F,B,W,T,_e),T.onAfterRender(_,F,V,B,W,_e)}function Do(T,F,V){F.isScene!==!0&&(F=ot);const B=Me.get(T),W=f.state.lights,_e=f.state.shadowsArray,be=W.state.version,Ne=O.getParameters(T,W.state,_e,F,V),Ie=O.getProgramCacheKey(Ne);let Ve=B.programs;B.environment=T.isMeshStandardMaterial?F.environment:null,B.fog=F.fog,B.envMap=(T.isMeshStandardMaterial?qe:Ue).get(T.envMap||B.environment),Ve===void 0&&(T.addEventListener("dispose",de),Ve=new Map,B.programs=Ve);let Pe=Ve.get(Ie);if(Pe!==void 0){if(B.currentProgram===Pe&&B.lightsStateVersion===be)return Pf(T,Ne),Pe}else Ne.uniforms=O.getUniforms(T),T.onBuild(V,Ne,_),T.onBeforeCompile(Ne,_),Pe=O.acquireProgram(Ne,Ie),Ve.set(Ie,Pe),B.uniforms=Ne.uniforms;const Be=B.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=Te.uniform),Pf(T,Ne),B.needsLights=s0(T),B.lightsStateVersion=be,B.needsLights&&(Be.ambientLightColor.value=W.state.ambient,Be.lightProbe.value=W.state.probe,Be.directionalLights.value=W.state.directional,Be.directionalLightShadows.value=W.state.directionalShadow,Be.spotLights.value=W.state.spot,Be.spotLightShadows.value=W.state.spotShadow,Be.rectAreaLights.value=W.state.rectArea,Be.ltc_1.value=W.state.rectAreaLTC1,Be.ltc_2.value=W.state.rectAreaLTC2,Be.pointLights.value=W.state.point,Be.pointLightShadows.value=W.state.pointShadow,Be.hemisphereLights.value=W.state.hemi,Be.directionalShadowMap.value=W.state.directionalShadowMap,Be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Be.spotShadowMap.value=W.state.spotShadowMap,Be.spotLightMatrix.value=W.state.spotLightMatrix,Be.spotLightMap.value=W.state.spotLightMap,Be.pointShadowMap.value=W.state.pointShadowMap,Be.pointShadowMatrix.value=W.state.pointShadowMatrix);const lt=Pe.getUniforms(),dt=Ra.seqWithValue(lt.seq,Be);return B.currentProgram=Pe,B.uniformsList=dt,Pe}function Pf(T,F){const V=Me.get(T);V.outputColorSpace=F.outputColorSpace,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function i0(T,F,V,B,W){F.isScene!==!0&&(F=ot),he.resetTextureUnits();const _e=F.fog,be=B.isMeshStandardMaterial?F.environment:null,Ne=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Dn,Ie=(B.isMeshStandardMaterial?qe:Ue).get(B.envMap||be),Ve=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Pe=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Be=!!V.morphAttributes.position,lt=!!V.morphAttributes.normal,dt=!!V.morphAttributes.color;let tn=xi;B.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(tn=_.toneMapping);const In=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,mt=In!==void 0?In.length:0,We=Me.get(B),El=f.state.lights;if(J===!0&&(te===!0||T!==S)){const qt=T===S&&B.id===N;Te.setState(B,T,qt)}let gt=!1;B.version===We.__version?(We.needsLights&&We.lightsStateVersion!==El.state.version||We.outputColorSpace!==Ne||W.isInstancedMesh&&We.instancing===!1||!W.isInstancedMesh&&We.instancing===!0||W.isSkinnedMesh&&We.skinning===!1||!W.isSkinnedMesh&&We.skinning===!0||W.isInstancedMesh&&We.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&We.instancingColor===!1&&W.instanceColor!==null||We.envMap!==Ie||B.fog===!0&&We.fog!==_e||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Te.numPlanes||We.numIntersection!==Te.numIntersection)||We.vertexAlphas!==Ve||We.vertexTangents!==Pe||We.morphTargets!==Be||We.morphNormals!==lt||We.morphColors!==dt||We.toneMapping!==tn||Le.isWebGL2===!0&&We.morphTargetsCount!==mt)&&(gt=!0):(gt=!0,We.__version=B.version);let Pi=We.currentProgram;gt===!0&&(Pi=Do(B,F,W));let Df=!1,gs=!1,Ml=!1;const Ft=Pi.getUniforms(),Di=We.uniforms;if(ce.useProgram(Pi.program)&&(Df=!0,gs=!0,Ml=!0),B.id!==N&&(N=B.id,gs=!0),Df||S!==T){Ft.setValue(I,"projectionMatrix",T.projectionMatrix),Ft.setValue(I,"viewMatrix",T.matrixWorldInverse);const qt=Ft.map.cameraPosition;qt!==void 0&&qt.setValue(I,Oe.setFromMatrixPosition(T.matrixWorld)),Le.logarithmicDepthBuffer&&Ft.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ft.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,gs=!0,Ml=!0)}if(W.isSkinnedMesh){Ft.setOptional(I,W,"bindMatrix"),Ft.setOptional(I,W,"bindMatrixInverse");const qt=W.skeleton;qt&&(Le.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),Ft.setValue(I,"boneTexture",qt.boneTexture,he),Ft.setValue(I,"boneTextureSize",qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Tl=V.morphAttributes;if((Tl.position!==void 0||Tl.normal!==void 0||Tl.color!==void 0&&Le.isWebGL2===!0)&&Ce.update(W,V,Pi),(gs||We.receiveShadow!==W.receiveShadow)&&(We.receiveShadow=W.receiveShadow,Ft.setValue(I,"receiveShadow",W.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Di.envMap.value=Ie,Di.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),gs&&(Ft.setValue(I,"toneMappingExposure",_.toneMappingExposure),We.needsLights&&r0(Di,Ml),_e&&B.fog===!0&&ie.refreshFogUniforms(Di,_e),ie.refreshMaterialUniforms(Di,B,X,Z,ge),Ra.upload(I,We.uniformsList,Di,he)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ra.upload(I,We.uniformsList,Di,he),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ft.setValue(I,"center",W.center),Ft.setValue(I,"modelViewMatrix",W.modelViewMatrix),Ft.setValue(I,"normalMatrix",W.normalMatrix),Ft.setValue(I,"modelMatrix",W.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const qt=B.uniformsGroups;for(let wl=0,o0=qt.length;wl<o0;wl++)if(Le.isWebGL2){const Uf=qt[wl];Ge.update(Uf,Pi),Ge.bind(Uf,Pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pi}function r0(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function s0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,F,V){Me.get(T.texture).__webglTexture=F,Me.get(T.depthTexture).__webglTexture=V;const B=Me.get(T);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=V===void 0,B.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){const V=Me.get(T);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,V=0){R=T,A=F,w=V;let B=!0,W=null,_e=!1,be=!1;if(T){const Ie=Me.get(T);Ie.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(I.FRAMEBUFFER,null),B=!1):Ie.__webglFramebuffer===void 0?he.setupRenderTarget(T):Ie.__hasExternalTextures&&he.rebindTextures(T,Me.get(T.texture).__webglTexture,Me.get(T.depthTexture).__webglTexture);const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(be=!0);const Pe=Me.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pe[F])?W=Pe[F][V]:W=Pe[F],_e=!0):Le.isWebGL2&&T.samples>0&&he.useMultisampledRTT(T)===!1?W=Me.get(T).__webglMultisampledFramebuffer:Array.isArray(Pe)?W=Pe[V]:W=Pe,C.copy(T.viewport),$.copy(T.scissor),q=T.scissorTest}else C.copy(K).multiplyScalar(X).floor(),$.copy(b).multiplyScalar(X).floor(),q=P;if(ce.bindFramebuffer(I.FRAMEBUFFER,W)&&Le.drawBuffers&&B&&ce.drawBuffers(T,W),ce.viewport(C),ce.scissor($),ce.setScissorTest(q),_e){const Ie=Me.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ie.__webglTexture,V)}else if(be){const Ie=Me.get(T.texture),Ve=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ie.__webglTexture,V||0,Ve)}N=-1},this.readRenderTargetPixels=function(T,F,V,B,W,_e,be){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Ne=Ne[be]),Ne){ce.bindFramebuffer(I.FRAMEBUFFER,Ne);try{const Ie=T.texture,Ve=Ie.format,Pe=Ie.type;if(Ve!==Sn&&ve.convert(Ve)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Pe===yo&&(re.has("EXT_color_buffer_half_float")||Le.isWebGL2&&re.has("EXT_color_buffer_float"));if(Pe!==yi&&ve.convert(Pe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===ui&&(Le.isWebGL2||re.has("OES_texture_float")||re.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-B&&V>=0&&V<=T.height-W&&I.readPixels(F,V,B,W,ve.convert(Ve),ve.convert(Pe),_e)}finally{const Ie=R!==null?Me.get(R).__webglFramebuffer:null;ce.bindFramebuffer(I.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(T,F,V=0){const B=Math.pow(2,-V),W=Math.floor(F.image.width*B),_e=Math.floor(F.image.height*B);he.setTexture2D(F,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,T.x,T.y,W,_e),ce.unbindTexture()},this.copyTextureToTexture=function(T,F,V,B=0){const W=F.image.width,_e=F.image.height,be=ve.convert(V.format),Ne=ve.convert(V.type);he.setTexture2D(V,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,B,T.x,T.y,W,_e,be,Ne,F.image.data):F.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,B,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,be,F.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,B,T.x,T.y,be,Ne,F.image),B===0&&V.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ce.unbindTexture()},this.copyTextureToTexture3D=function(T,F,V,B,W=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=T.max.x-T.min.x+1,be=T.max.y-T.min.y+1,Ne=T.max.z-T.min.z+1,Ie=ve.convert(B.format),Ve=ve.convert(B.type);let Pe;if(B.isData3DTexture)he.setTexture3D(B,0),Pe=I.TEXTURE_3D;else if(B.isDataArrayTexture)he.setTexture2DArray(B,0),Pe=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const Be=I.getParameter(I.UNPACK_ROW_LENGTH),lt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),dt=I.getParameter(I.UNPACK_SKIP_PIXELS),tn=I.getParameter(I.UNPACK_SKIP_ROWS),In=I.getParameter(I.UNPACK_SKIP_IMAGES),mt=V.isCompressedTexture?V.mipmaps[0]:V.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,mt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,T.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,T.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,T.min.z),V.isDataTexture||V.isData3DTexture?I.texSubImage3D(Pe,W,F.x,F.y,F.z,_e,be,Ne,Ie,Ve,mt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Pe,W,F.x,F.y,F.z,_e,be,Ne,Ie,mt.data)):I.texSubImage3D(Pe,W,F.x,F.y,F.z,_e,be,Ne,Ie,Ve,mt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Be),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,dt),I.pixelStorei(I.UNPACK_SKIP_ROWS,tn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,In),W===0&&B.generateMipmaps&&I.generateMipmap(Pe),ce.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?he.setTextureCube(T,0):T.isData3DTexture?he.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?he.setTexture2DArray(T,0):he.setTexture2D(T,0),ce.unbindTexture()},this.resetState=function(){A=0,w=0,R=null,ce.reset(),xe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===tt?Ki:Dg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ki?tt:Dn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class JM extends Zg{}JM.prototype.isWebGL1Renderer=!0;class Af{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=n}clone(){return new Af(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class eT extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class pp extends un{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Tr=new rt,mp=new rt,ha=[],gp=new or,tT=new rt,Us=new Mn,Ns=new hs;class nT extends Mn{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new pp(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,tT)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new or),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Tr),gp.copy(e.boundingBox).applyMatrix4(Tr),this.boundingBox.union(gp)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new hs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Tr),Ns.copy(e.boundingSphere).applyMatrix4(Tr),this.boundingSphere.union(Ns)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(i),e.ray.intersectsSphere(Ns)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Tr),mp.multiplyMatrices(i,Tr),Us.matrixWorld=mp,Us.raycast(e,ha);for(let o=0,a=ha.length;o<a;o++){const l=ha[o];l.instanceId=s,l.object=this,n.push(l)}ha.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new pp(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Qg extends bo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _p=new rt,yc=new Og,pa=new hs,ma=new U;class iT extends Tt{constructor(e=new Un,n=new Qg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(r),pa.radius+=s,e.ray.intersectsSphere(pa)===!1)return;_p.copy(r).invert(),yc.copy(e.ray).applyMatrix4(_p);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,p=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=d,x=m;v<x;v++){const f=u.getX(v);ma.fromBufferAttribute(p,f),vp(ma,f,l,r,e,n,this)}}else{const d=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let v=d,x=m;v<x;v++)ma.fromBufferAttribute(p,v),vp(ma,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function vp(t,e,n,i,r,s,o){const a=yc.distanceSqToPoint(t);if(a<n){const l=new U;yc.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Cf extends Tt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Tu=new rt,xp=new U,yp=new U;class Jg{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mf,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;xp.setFromMatrixPosition(e.matrixWorld),n.position.copy(xp),yp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(yp),n.updateMatrixWorld(),Tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sp=new rt,Is=new U,wu=new U;class rT extends Jg{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Is.setFromMatrixPosition(e.matrixWorld),i.position.copy(Is),wu.copy(i.position),wu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(wu),i.updateMatrixWorld(),r.makeTranslation(-Is.x,-Is.y,-Is.z),Sp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sp)}}class Ep extends Cf{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new rT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sT extends Jg{constructor(){super(new jg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oT extends Cf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new sT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class aT extends Cf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class lT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Mp();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Mp(){return(typeof performance=="undefined"?Date:performance).now()}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xf}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xf);const Fs=new U;function rn(t,e,n,i,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;Fs.copy(e),Fs[i]=0,Fs.normalize();const u=.5*o/(o+a),h=1-Fs.angleTo(t)/l;return Math.sign(Fs[n])===1?h*u:a/(o+a)+u+u*(1-h)}class uT extends ps{constructor(e=1,n=1,i=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,n/2,i/2,s),super(1,1,1,r,r,r),r===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new U,l=new U,u=new U(e,n,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,p=this.attributes.normal.array,d=this.attributes.uv.array,m=h.length/6,v=new U,x=.5/r;for(let f=0,c=0;f<h.length;f+=3,c+=2)switch(a.fromArray(h,f),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[f+0]=u.x*Math.sign(a.x)+l.x*s,h[f+1]=u.y*Math.sign(a.y)+l.y*s,h[f+2]=u.z*Math.sign(a.z)+l.z*s,p[f+0]=l.x,p[f+1]=l.y,p[f+2]=l.z,Math.floor(f/m)){case 0:v.set(1,0,0),d[c+0]=rn(v,l,"z","y",s,i),d[c+1]=1-rn(v,l,"y","z",s,n);break;case 1:v.set(-1,0,0),d[c+0]=1-rn(v,l,"z","y",s,i),d[c+1]=1-rn(v,l,"y","z",s,n);break;case 2:v.set(0,1,0),d[c+0]=1-rn(v,l,"x","z",s,e),d[c+1]=rn(v,l,"z","x",s,i);break;case 3:v.set(0,-1,0),d[c+0]=1-rn(v,l,"x","z",s,e),d[c+1]=1-rn(v,l,"z","x",s,i);break;case 4:v.set(0,0,1),d[c+0]=1-rn(v,l,"x","y",s,e),d[c+1]=1-rn(v,l,"y","x",s,n);break;case 5:v.set(0,0,-1),d[c+0]=rn(v,l,"x","y",s,e),d[c+1]=1-rn(v,l,"y","x",s,n);break}}}var Sl={exports:{}},Lo={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cT=ke.exports,e0=60103;Lo.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var Tp=Symbol.for;e0=Tp("react.element"),Lo.Fragment=Tp("react.fragment")}var fT=cT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dT=Object.prototype.hasOwnProperty,hT={key:!0,ref:!0,__self:!0,__source:!0};function t0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)dT.call(e,i)&&!hT.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:e0,type:t,key:s,ref:o,props:r,_owner:fT.current}}Lo.jsx=t0;Lo.jsxs=t0;Sl.exports=Lo;const pe=Sl.exports.jsx,Re=Sl.exports.jsxs,wr=Sl.exports.Fragment,wp=84,Ap=.48,ga=.62,Cp=.95,pT={0:["01110","11011","11011","11011","11011","11011","01110"],1:["00110","01110","00110","00110","00110","00110","11111"],2:["01110","11011","00011","00110","01100","11000","11111"],3:["11110","00011","00011","01110","00011","00011","11110"],4:["11011","11011","11011","11111","00011","00011","00011"],5:["11111","11000","11000","11110","00011","00011","11110"],6:["01110","11000","11000","11110","11011","11011","01110"],7:["11111","00011","00110","00110","01100","01100","01100"],8:["01110","11011","11011","01110","11011","11011","01110"],9:["01110","11011","11011","01111","00011","00011","01110"]},mT={A:["01110","11011","11011","11111","11011","11011","11011"],B:["11110","11011","11011","11110","11011","11011","11110"],C:["01111","11000","11000","11000","11000","11000","01111"],D:["11110","11011","11011","11011","11011","11011","11110"],E:["11111","11000","11000","11110","11000","11000","11111"],F:["11111","11000","11000","11110","11000","11000","11000"],G:["01111","11000","11000","11011","11011","11011","01110"],H:["11011","11011","11011","11111","11011","11011","11011"],I:["11111","00110","00110","00110","00110","00110","11111"],J:["00111","00011","00011","00011","11011","11011","01110"],K:["11011","11011","11110","11100","11110","11011","11011"],L:["11000","11000","11000","11000","11000","11000","11111"],M:["11011","11111","11111","11011","11011","11011","11011"],N:["11011","11111","11111","11111","11111","11011","11011"],O:["01110","11011","11011","11011","11011","11011","01110"],P:["11110","11011","11011","11110","11000","11000","11000"],Q:["01110","11011","11011","11011","11111","01110","00011"],R:["11110","11011","11011","11110","11100","11011","11011"],S:["01111","11000","11000","01110","00011","00011","11110"],T:["11111","00110","00110","00110","00110","00110","00110"],U:["11011","11011","11011","11011","11011","11011","01110"],V:["11011","11011","11011","11011","11011","01110","01110"],W:["11011","11011","11011","11111","11111","11111","11011"],X:["11011","11011","01110","00110","01110","11011","11011"],Y:["11011","11011","01110","00110","00110","00110","00110"],Z:["11111","00011","00110","00110","01100","11000","11111"]},ba={...pT,...mT},ut=(t,e)=>t+Math.random()*(e-t),gT=t=>{const e=t.toUpperCase().split("").filter(o=>ba[o]),n=ga*4,i=e.length>1?ga*1.15:0,r=e.length*n+(e.length-1)*i,s=[];return e.forEach((o,a)=>{var h;const l=(h=ba[o])!=null?h:ba[0],u=-r/2+n/2+a*(n+i);l.forEach((p,d)=>{[...p].forEach((m,v)=>{m==="1"&&s.push(new U(u+(v-2)*ga,(3-d)*ga,.22))})})}),s},_T=()=>new U(ut(-6.2,6.2),ut(-3.8,3.8),ut(-1.8,.6)),vT=()=>new Ci({uniforms:{uColor:{value:new Ye(1660299)},uOpacity:{value:.18}},vertexShader:`
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
    `,transparent:!0,blending:el,depthWrite:!1,side:An}),xT=({glyph:t,isRunning:e,isComplete:n,ariaLabel:i})=>{const r=ke.exports.useRef(null),s=ke.exports.useRef(null),[o,a]=ke.exports.useState(!0);return ke.exports.useEffect(()=>{const l=r.current;if(!l)return;const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=new eT;h.background=new Ye(66308),h.fog=new Af(66308,.032);const p=new Zt(34,1,.1,100);p.position.set(0,0,9.5),p.lookAt(0,0,0);let d;try{d=new Zg({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{a(!1);return}a(!0),d.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),d.setClearColor(66308,1),d.toneMapping=Tg,d.toneMappingExposure=1.38,d.outputColorSpace=tt,d.domElement.className="tra-countdown-canvas",l.appendChild(d.domElement);const m=new ji,v=new ji,x=new ji;m.add(x,v),h.add(m);const f=new aT(3102836,1.35);h.add(f);const c=new oT(15398655,2.8);c.position.set(1.5,3.5,7),h.add(c);const g=new Ep(7911656,13,11,2);g.position.set(0,0,2.5),h.add(g);const _=new Ep(736625,18,10,2);_.position.set(0,-1.2,-1.8),h.add(_);const y=new uT(Ap,Ap,.28,5,.09),A=new Ef({color:16054522,toneMapped:!1}),w=new nT(y,A,wp);w.instanceMatrix.setUsage(Lx),v.add(w);const R=Array.from({length:wp},(ce,Se)=>{const Me=_T(),he=new ns(ut(-1.2,1.2),ut(-1.2,1.2),ut(-1.2,1.2)),Ue=new Ye().setHSL(.55,.1,ut(.84,.98));return w.setColorAt(Se,Ue),{position:Me,rotation:he,scale:ut(.18,.8),fromPosition:Me.clone(),fromRotation:he.clone(),fromScale:0,targetPosition:Me.clone(),targetRotation:new ns,targetScale:0,seed:Math.random()*Math.PI*2}});w.instanceColor&&(w.instanceColor.needsUpdate=!0);const N=new Tt,S=new lT;let C=0,$=u?.18:Cp,q="",D=0,z=e,k=n,Z=0,X=0,j=0,Q=0;const K=ce=>{const Se=ce.toUpperCase().split("").filter(he=>ba[he]).join("").slice(0,2);if(Se===q&&q!=="")return;const Me=gT(Se||"0");C=S.getElapsedTime(),$=u?.18:Se.length>1?1.05:Cp,R.forEach((he,Ue)=>{he.fromPosition.copy(he.position),he.fromRotation.copy(he.rotation),he.fromScale=he.scale;const qe=Me[Ue];if(qe)he.targetPosition.copy(qe),he.targetRotation.set(ut(-.025,.025),ut(-.025,.025),ut(-.035,.035)),he.targetScale=1;else{const Qe=ut(0,Math.PI*2),M=ut(2.7,5.3);he.targetPosition.set(Math.cos(Qe)*M,Math.sin(Qe)*M*.68,ut(-1.4,.5)),he.targetRotation.set(ut(-1.8,1.8),ut(-1.8,1.8),ut(-1.8,1.8)),he.targetScale=0}}),q=Se},b=ce=>{z=ce},P=ce=>{k=ce};s.current={setGlyph:K,setRunning:b,setComplete:P};const Y=(ce,Se,Me,he,Ue)=>{const qe=new Float32Array(ce*3);for(let O=0;O<ce;O+=1)qe[O*3]=ut(-8.6,8.6),qe[O*3+1]=ut(-3.5,4.2),qe[O*3+2]=ut(he,Ue);const Qe=new Un;Qe.setAttribute("position",new un(qe,3));const M=new Qg({color:10865122,size:Se,transparent:!0,opacity:Me,sizeAttenuation:!0,depthWrite:!1,blending:el}),E=new iT(Qe,M);return h.add(E),{points:E,geometry:Qe,material:M,speed:ut(.015,.035)}},J=Y(220,.055,.52,-4.5,-1.8),te=Y(90,.09,.7,-1.6,-.6),ge=new Un,Ee=6.4,ye=.72;ge.setAttribute("position",new $n([0,0,0,Ee,-ye,0,Ee,ye,0],3)),ge.setAttribute("uv",new $n([0,.5,1,0,1,1],2));const Oe=vT();for(let ce=0;ce<12;ce+=1){const Se=new Mn(ge,Oe);Se.rotation.z=ce/12*Math.PI*2+.06,Se.position.z=-.72,Se.scale.setScalar(ut(.72,1.08)),x.add(Se)}const ot=()=>{const ce=Math.max(1,l.clientWidth),Se=Math.max(1,l.clientHeight),Me=ce/Se;p.aspect=Me,p.fov=Me<.82?42:34,p.position.z=Me<.82?11.5:9.5,m.scale.setScalar(Me<.82?.78:.7),p.updateProjectionMatrix(),d.setSize(ce,Se,!1)},Fe=ce=>{const Se=l.getBoundingClientRect();Z=((ce.clientX-Se.left)/Se.width-.5)*2,X=((ce.clientY-Se.top)/Se.height-.5)*2},I=()=>{Z=0,X=0};ot(),window.addEventListener("resize",ot),l.addEventListener("pointermove",Fe),l.addEventListener("pointerleave",I);let oe;"ResizeObserver"in window&&(oe=new ResizeObserver(ot),oe.observe(l));const re=(ce,Se,Me)=>{const he=ce.geometry.getAttribute("position");for(let Ue=0;Ue<he.count;Ue+=1){const qe=he.getY(Ue)-Se*ce.speed*Me;he.setY(Ue,qe<-4.2?4.3:qe)}he.needsUpdate=!0},Le=()=>{D=window.requestAnimationFrame(Le);const ce=Math.min(S.getDelta(),.05),Se=S.elapsedTime,Me=u?.18:z?1:.42;j+=(Z-j)*.035,Q+=(X-Q)*.035,m.rotation.y+=(j*.045-m.rotation.y)*.035,m.rotation.x+=(-Q*.028-m.rotation.x)*.035,m.position.x+=(j*.08-m.position.x)*.035,m.position.y+=(-Q*.055-m.position.y)*.035,x.rotation.z+=ce*.012*Me;const he=Math.min(1,Math.max(0,(Se-C)/$)),Ue=1-Math.pow(1-he,4),qe=1-Ue,Qe=k&&!u?1+Math.sin(Se*3.2)*.06:1;R.forEach((M,E)=>{M.position.lerpVectors(M.fromPosition,M.targetPosition,Ue),M.rotation.x=jo.lerp(M.fromRotation.x,M.targetRotation.x,Ue),M.rotation.y=jo.lerp(M.fromRotation.y,M.targetRotation.y,Ue),M.rotation.z=jo.lerp(M.fromRotation.z,M.targetRotation.z,Ue),M.scale=jo.lerp(M.fromScale,M.targetScale,Ue);const O=qe*(u?.02:.18);M.position.x+=Math.sin(Se*(1.2+M.seed)+M.seed)*O,M.position.y+=Math.cos(Se*(1.5+M.seed)+M.seed)*O,M.position.z+=Math.sin(Se*1.4+M.seed)*O*.6;const ie=M.scale*(M.targetScale>0?Qe:1);N.position.copy(M.position),N.rotation.copy(M.rotation),N.scale.setScalar(ie),N.updateMatrix(),w.setMatrixAt(E,N.matrix)}),w.instanceMatrix.needsUpdate=!0,re(J,ce,Me),re(te,ce,Me*1.3),Oe.uniforms.uOpacity.value=.24+Math.sin(Se*.7)*.02,g.intensity=12.2+Math.sin(Se*1.1)*.55,d.render(h,p)};return ot(),K(t),Le(),()=>{window.cancelAnimationFrame(D),window.removeEventListener("resize",ot),l.removeEventListener("pointermove",Fe),l.removeEventListener("pointerleave",I),oe==null||oe.disconnect(),s.current=null,d.dispose(),y.dispose(),A.dispose(),ge.dispose(),Oe.dispose(),J.geometry.dispose(),J.material.dispose(),te.geometry.dispose(),te.material.dispose(),d.domElement.parentElement===l&&l.removeChild(d.domElement)}},[]),ke.exports.useEffect(()=>{var l;(l=s.current)==null||l.setGlyph(t)},[t]),ke.exports.useEffect(()=>{var l;(l=s.current)==null||l.setRunning(e)},[e]),ke.exports.useEffect(()=>{var l;(l=s.current)==null||l.setComplete(n)},[n]),pe("div",{ref:r,className:"tra-canvas-wrap",role:"img","aria-label":i,children:!o&&pe("div",{className:"tra-canvas-fallback","aria-hidden":"true",children:pe("span",{children:t})})})};const yT=[{label:"10 SEC",value:10},{label:"30 SEC",value:30},{label:"01 MIN",value:60},{label:"05 MIN",value:300}],ST={0:"ZERO",1:"ONE",2:"TWO",3:"THREE",4:"FOUR",5:"FIVE",6:"SIX",7:"SEVEN",8:"EIGHT",9:"NINE",10:"TEN"},La=26,Sc=t=>t.toUpperCase().replace(/[^A-Z]/g,"").slice(0,La),ET=()=>{var t;try{return Sc((t=window.localStorage.getItem("tra-letter-sequence"))!=null?t:"")||"TRA"}catch{return"TRA"}},MT=()=>{try{const t=Number(window.localStorage.getItem("tra-countdown-duration"));return Number.isFinite(t)&&t>0?Math.min(t,3600):10}catch{return 10}},TT=t=>{const e=Math.max(0,t),n=Math.floor(e/60),i=e-n*60,r=Math.floor(i),s=Math.floor((i-r)*10);return n>0?`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}`:`00:${String(r).padStart(2,"0")}.${s}`},wT=t=>{if(t>=60){const e=Math.floor(t/60),n=t%60;return n?`${e}M ${n}S`:`${e} MIN`}return`${t} SEC`},AT=t=>Math.min(3600,Math.max(1,Math.round(Number.isFinite(t)?t:10))),CT=()=>{var ot,Fe,I;const t=ke.exports.useMemo(()=>MT(),[]),e=ke.exports.useMemo(()=>ET(),[]),[n,i]=ke.exports.useState(t),[r,s]=ke.exports.useState(String(t)),[o,a]=ke.exports.useState(t),[l,u]=ke.exports.useState("countdown"),[h,p]=ke.exports.useState(e),[d,m]=ke.exports.useState(e),[v,x]=ke.exports.useState(0),[f,c]=ke.exports.useState(e.length<=1),[g,_]=ke.exports.useState(!1),[y,A]=ke.exports.useState(!1),[w,R]=ke.exports.useState(!0),[N,S]=ke.exports.useState(0),[C,$]=ke.exports.useState("\u5F85\u547D \xB7 \u8BBE\u5B9A\u4E00\u4E2A\u65F6\u957F\u5F00\u59CB"),q=ke.exports.useRef(0),D=ke.exports.useRef(0),z=ke.exports.useMemo(()=>{const oe=Math.ceil(Math.max(0,o));return n>99&&oe>99?Math.ceil(oe/60):oe},[n,o]),k=n>99&&Math.ceil(Math.max(0,o))>99?"MINUTES":(ot=ST[z])!=null?ot:"SECONDS",Z=(I=(Fe=d[v])!=null?Fe:d[0])!=null?I:"A",X=l==="letters"?f:y,j=l==="letters"?f?"SEQUENCE / COMPLETE":v>0?"LETTER / ACTIVE":"LETTER / READY":y?"CYCLE / COMPLETE":g?"LIVE / RUNNING":o<n?"PAUSED / HOLD":"READY / SET",Q=l==="letters"?v>0&&!f:g;ke.exports.useEffect(()=>{try{window.localStorage.setItem("tra-countdown-duration",String(n))}catch{}},[n]),ke.exports.useEffect(()=>{try{window.localStorage.setItem("tra-letter-sequence",d)}catch{}},[d]),ke.exports.useEffect(()=>{if(!g)return;const oe=D.current;let re=0;const Le=()=>{if(oe!==D.current)return;const ce=Math.max(0,(q.current-Date.now())/1e3);if(a(ce),ce<=0){if(D.current+=1,_(!1),A(!0),$("\u65F6\u95F4\u5230 \xB7 \u8FD9\u4E00\u523B\u5DF2\u7ECF\u53D1\u751F"),w){const Se=new Audio("/timer_sound.mp3");Se.volume=.24,Se.play().catch(()=>{})}return}re=window.requestAnimationFrame(Le)};return re=window.requestAnimationFrame(Le),()=>window.cancelAnimationFrame(re)},[g,w]),ke.exports.useEffect(()=>{const oe=re=>{re.target instanceof HTMLElement&&(re.target.tagName==="INPUT"||re.target.tagName==="BUTTON"||re.target.tagName==="A"||re.target.isContentEditable)||(l==="countdown"&&re.code==="Space"&&(re.preventDefault(),g?b():K()),re.key.toLowerCase()==="r"&&ge(),l==="letters"&&re.key==="ArrowRight"&&(re.preventDefault(),f?P("\u5E8F\u5217\u91CD\u64AD \xB7 \u53D8\u6362\u7B2C\u4E00\u4E2A\u5B57\u6BCD"):J()))};return window.addEventListener("keydown",oe),()=>window.removeEventListener("keydown",oe)});const K=()=>{const oe=o<=0?n:o;D.current+=1,q.current=Date.now()+oe*1e3,a(oe),A(!1),_(!0),$("\u5012\u8BA1\u65F6\u8FDB\u884C\u4E2D \xB7 \u4FDD\u6301\u4E13\u6CE8")},b=()=>{const oe=Math.max(0,(q.current-Date.now())/1e3);D.current+=1,q.current=0,a(oe),_(!1),$("\u5DF2\u6682\u505C \xB7 \u6309\u7A7A\u683C\u7EE7\u7EED")},P=(oe="\u5B57\u6BCD\u5E8F\u5217\u5DF2\u91CD\u7F6E \xB7 \u53D8\u6362\u7B2C\u4E00\u4E2A\u5B57\u6BCD")=>{D.current+=1,x(0),c(d.length<=1),$(oe),S(re=>re+1)},Y=()=>{const oe=Sc(h);if(!oe){p(d),$("\u8BF7\u8F93\u5165\u81F3\u5C11\u4E00\u4E2A A\u2013Z \u5B57\u6BCD");return}D.current+=1,p(oe),m(oe),x(0),c(oe.length<=1),$(`\u5DF2\u8F7D\u5165 \xB7 ${oe.length} \u4E2A\u5B57\u6BCD\u7B49\u5F85\u53D8\u6362`),S(re=>re+1)},J=()=>{if(d.length<=1){P("\u5E8F\u5217\u53EA\u6709\u4E00\u4E2A\u5B57\u6BCD \xB7 \u5DF2\u91CD\u65B0\u663E\u73B0");return}const oe=v+1;if(oe>=d.length){P("\u5E8F\u5217\u5B8C\u6210 \xB7 \u518D\u6B21\u5F00\u59CB\u9010\u5B57\u6BCD\u53D8\u6362");return}x(oe),c(oe===d.length-1),$(oe===d.length-1?"\u5E8F\u5217\u5B8C\u6210 \xB7 \u6700\u540E\u4E00\u4E2A\u5B57\u6BCD\u5DF2\u5230\u8FBE":`\u6B63\u5728\u53D8\u6362 \xB7 \u7B2C ${oe+1} / ${d.length} \u4E2A\u5B57\u6BCD`)},te=oe=>{oe!==l&&(g&&b(),u(oe),A(!1),$(oe==="letters"?"\u5B57\u6BCD\u6A21\u5F0F \xB7 \u6BCF\u6B21\u53D8\u6362\u4E00\u4E2A\u5B57\u6BCD":"\u5012\u8BA1\u65F6\u6A21\u5F0F \xB7 \u8BBE\u5B9A\u4E00\u4E2A\u65F6\u957F\u5F00\u59CB"),S(re=>re+1))},ge=()=>{D.current+=1,q.current=0,a(n),_(!1),A(!1),l==="letters"&&(x(0),c(d.length<=1)),$(l==="letters"?"\u5B57\u6BCD\u5E8F\u5217\u5DF2\u91CD\u7F6E \xB7 \u53D8\u6362\u7B2C\u4E00\u4E2A\u5B57\u6BCD":"\u5F85\u547D \xB7 \u8BBE\u5B9A\u4E00\u4E2A\u65F6\u957F\u5F00\u59CB"),S(oe=>oe+1)},Ee=oe=>{const re=AT(oe);D.current+=1,q.current=0,i(re),s(String(re)),a(re),_(!1),A(!1),$("\u5DF2\u66F4\u65B0 \xB7 \u51C6\u5907\u5C31\u7EEA"),S(Le=>Le+1)},ye=()=>{Ee(Number(r))},Oe=()=>{D.current+=1,q.current=Date.now()+n*1e3,a(n),A(!1),_(!0),$("\u91CD\u65B0\u5F00\u59CB \xB7 \u8BA9\u8FD9\u4E00\u523B\u5C55\u5F00"),S(oe=>oe+1)};return Re("div",{className:"tra-app",children:[Re("header",{className:"tra-header",children:[Re("div",{className:"tra-brand","aria-label":"TRA countdown studio",children:[pe("span",{className:"tra-brand-mark",children:"TRA"}),pe("span",{className:"tra-brand-rule","aria-hidden":"true"}),pe("span",{className:"tra-brand-copy",children:"TIME / RELATIONAL ATMOSPHERE"})]}),Re("div",{className:"tra-header-actions",children:[Re("span",{className:`tra-status ${Q?"is-live":""}`,children:[pe("span",{className:"tra-status-dot","aria-hidden":"true"}),j]}),Re("a",{className:"tra-header-github",href:"https://github.com/holynova/hotpot-timer",target:"_blank",rel:"noreferrer","data-umami-event":"github-repo",children:[pe(Mv,{size:14,strokeWidth:1.6,"aria-hidden":"true"}),"GITHUB"]}),Re("button",{className:"tra-header-reset",type:"button",onClick:ge,children:[pe(Xo,{size:14,strokeWidth:1.6,"aria-hidden":"true"}),"RESET"]})]})]}),Re("div",{className:"tra-workspace",children:[Re("aside",{className:"tra-controls","aria-label":"\u5012\u8BA1\u65F6\u8BBE\u7F6E",children:[Re("div",{className:"tra-intro",children:[pe("h1",{children:l==="letters"?Re(wr,{children:["Give it",pe("br",{}),pe("span",{children:"a shape."})]}):Re(wr,{children:["Give it",pe("br",{}),pe("span",{children:"a second."})]})}),pe("p",{className:"tra-intro-copy",children:l==="letters"?"\u8F93\u5165\u4E00\u4E32 A\u2013Z \u5B57\u6BCD\uFF0C\u8BA9\u6BCF\u4E00\u6B21\u53D8\u6362\u90FD\u6210\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u7684\u77AC\u95F4\u3002":"\u4E00\u4E2A\u4F1A\u547C\u5438\u7684\u5012\u8BA1\u65F6\u3002\u8BA9\u65F6\u95F4\u4ECE\u5149\u91CC\u51FA\u73B0\uFF0C\u4E5F\u5728\u5149\u91CC\u7ED3\u675F\u3002"})]}),Re("div",{className:"tra-mode-switch",role:"group","aria-label":"\u9009\u62E9\u5DE5\u5177\u6A21\u5F0F",children:[Re("button",{type:"button","aria-pressed":l==="countdown",className:l==="countdown"?"is-selected":"","data-umami-event":"countdown-mode",onClick:()=>te("countdown"),children:[pe("span",{children:"COUNTDOWN"}),pe("small",{children:"\u5012\u8BA1\u65F6"})]}),Re("button",{type:"button","aria-pressed":l==="letters",className:l==="letters"?"is-selected":"","data-umami-event":"alphabet-mode",onClick:()=>te("letters"),children:[pe("span",{children:"ALPHABET"}),pe("small",{children:"\u5B57\u6BCD\u53D8\u6362"})]})]}),l==="countdown"?Re(wr,{children:[Re("div",{className:"tra-control-group tra-duration-group",children:[Re("div",{className:"tra-field-label",children:[pe("span",{children:"SET DURATION"}),pe("span",{className:"tra-field-suffix",children:"01 \u2014 3600 SEC"})]}),Re("label",{className:"tra-duration-input",children:[pe("input",{type:"number",min:1,max:3600,inputMode:"numeric","aria-label":"\u5012\u8BA1\u65F6\u79D2\u6570",value:r,onChange:oe=>s(oe.target.value),onBlur:ye,onKeyDown:oe=>{oe.key==="Enter"&&(ye(),oe.currentTarget.blur())}}),pe("span",{children:"SEC"})]}),Re("p",{className:"tra-duration-hint",children:["\u5F53\u524D\u65F6\u957F \xB7 ",wT(n)]})]}),Re("div",{className:"tra-control-group",children:[Re("div",{className:"tra-field-label",children:[pe("span",{children:"QUICK SET"}),pe("span",{className:"tra-field-suffix",children:"PRESETS"})]}),pe("div",{className:"tra-presets",role:"list","aria-label":"\u9884\u8BBE\u65F6\u957F",children:yT.map(oe=>Re("button",{type:"button",className:n===oe.value?"is-selected":"",onClick:()=>Ee(oe.value),children:[pe("span",{children:oe.label}),pe(Sv,{size:14,strokeWidth:1.5,"aria-hidden":"true"})]},oe.value))})]})]}):Re(wr,{children:[Re("div",{className:"tra-control-group tra-letter-group",children:[Re("div",{className:"tra-field-label",children:[pe("span",{children:"SET SEQUENCE"}),Re("span",{className:"tra-field-suffix",children:["01 \u2014 ",La," LETTERS"]})]}),Re("label",{className:"tra-sequence-input",children:[pe("input",{type:"text",maxLength:La,autoCapitalize:"characters",autoComplete:"off",spellCheck:!1,"aria-label":"\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u5E8F\u5217",value:h,onChange:oe=>p(Sc(oe.target.value)),onBlur:Y,onKeyDown:oe=>{oe.key==="Enter"&&(Y(),oe.currentTarget.blur())}}),Re("span",{children:[h.length,"/",La]})]}),Re("p",{className:"tra-duration-hint",children:["\u5F53\u524D\u5E8F\u5217 \xB7 ",d]})]}),Re("div",{className:"tra-control-group tra-letter-steps-group",children:[Re("div",{className:"tra-field-label",children:[pe("span",{children:"LETTER BY LETTER"}),pe("span",{className:"tra-field-suffix",children:"MANUAL"})]}),pe("div",{className:"tra-letter-steps",role:"list","aria-label":"\u5B57\u6BCD\u53D8\u6362\u987A\u5E8F",children:d.split("").map((oe,re)=>Re("div",{className:`tra-letter-step ${re===v?"is-current":""} ${re<v?"is-past":""}`,role:"listitem","aria-current":re===v?"step":void 0,children:[pe("small",{children:String(re+1).padStart(2,"0")}),pe("strong",{children:oe})]},`${oe}-${re}`))}),Re("p",{className:"tra-duration-hint",children:["\u6BCF\u6B21\u70B9\u51FB\u53EA\u53D8\u6362\u4E00\u4E2A\u5B57\u6BCD \xB7 ",v+1," / ",d.length]})]})]}),Re("div",{className:"tra-actions",children:[l==="letters"?Re("button",{className:"tra-primary-action",type:"button","data-umami-event":f?"letter-sequence-replay":"letter-transform",onClick:f?()=>P("\u5E8F\u5217\u91CD\u64AD \xB7 \u53D8\u6362\u7B2C\u4E00\u4E2A\u5B57\u6BCD"):J,children:[f?pe(Xo,{size:17,strokeWidth:1.8,"aria-hidden":"true"}):pe(xv,{size:17,strokeWidth:1.8,"aria-hidden":"true"}),f?"REPLAY SEQUENCE":"TRANSFORM NEXT LETTER"]}):y?Re("button",{className:"tra-primary-action",type:"button","data-umami-event":"countdown-replay",onClick:Oe,children:[pe(Xo,{size:17,strokeWidth:1.8,"aria-hidden":"true"}),"REPLAY MOMENT"]}):Re("button",{className:"tra-primary-action",type:"button","data-umami-event":g?"countdown-pause":"countdown-start",onClick:g?b:K,children:[g?pe(wv,{size:17,strokeWidth:1.8,"aria-hidden":"true"}):pe(Cv,{size:17,strokeWidth:1.8,"aria-hidden":"true"}),g?"PAUSE COUNTDOWN":o<n?"RESUME COUNTDOWN":"START COUNTDOWN"]}),Re("div",{className:"tra-secondary-actions",children:[Re("button",{className:"tra-secondary-action",type:"button",onClick:ge,children:[pe(Xo,{size:15,strokeWidth:1.6,"aria-hidden":"true"}),"RESET"]}),Re("button",{className:`tra-secondary-action tra-sound-action ${w?"is-on":""}`,type:"button",onClick:()=>R(oe=>!oe),"aria-pressed":w,children:[w?pe(Lv,{size:15,strokeWidth:1.6,"aria-hidden":"true"}):pe(Dv,{size:15,strokeWidth:1.6,"aria-hidden":"true"}),w?"SOUND ON":"SOUND OFF"]})]})]}),Re("div",{className:"tra-controls-footer",children:[pe("span",{children:C}),pe("span",{className:"tra-shortcuts",children:l==="letters"?"ENTER / \u2192":"SPACE / R"})]})]}),Re("main",{className:"tra-stage","aria-label":"Three.js 3D \u5012\u8BA1\u65F6\u821E\u53F0",children:[Re("div",{className:"tra-stage-meta",children:[pe("span",{children:l==="letters"?"ALPHABET / LETTER STUDY":"01 / LIVE COUNTDOWN"}),pe("span",{children:l==="letters"?"A\u2014Z / ONE BY ONE":"INSPIRED BY TRA STUDY"})]}),Re("section",{className:`tra-visual-shell ${X?"is-complete":""}`,role:l==="letters"?"group":"timer","aria-live":"off","aria-label":l==="letters"?`\u5B57\u6BCD\u5E8F\u5217 ${d}\uFF0C\u5F53\u524D\u7B2C ${v+1} \u4E2A\u5B57\u6BCD ${Z}`:"3D \u5012\u8BA1\u65F6\u821E\u53F0",children:[pe(xT,{glyph:l==="letters"?Z:String(z),isRunning:g,isComplete:X,ariaLabel:l==="letters"?`Three.js 3D \u5B57\u6BCD\u6A21\u578B ${Z}`:`Three.js 3D \u5012\u8BA1\u65F6\u6570\u5B57 ${z}`},N),l==="letters"?pe("div",{className:"tra-stage-word is-sequence","aria-hidden":"true",children:d.split("").map((oe,re)=>pe("span",{className:`${re===v?"is-current":""} ${re<v?"is-past":""}`,children:oe},`${oe}-${re}`))}):Re("div",{className:"tra-stage-word","aria-hidden":"true",children:[pe("span",{children:k.slice(0,1)}),k.slice(1)]}),pe("div",{className:"tra-stage-cross tra-stage-cross-top","aria-hidden":"true"}),pe("div",{className:"tra-stage-cross tra-stage-cross-bottom","aria-hidden":"true"}),Re("div",{className:"tra-stage-caption",children:[pe("span",{className:"tra-caption-dot","aria-hidden":"true"}),pe("span",{children:l==="letters"?f?"SEQUENCE HAS ARRIVED":v===0?"FIRST LETTER IS READY":"NEXT LETTER IS LIVE":y?"TIME HAS ARRIVED":g?"THE MOMENT IS LIVE":"THE STAGE IS READY"})]}),pe("div",{className:"tra-stage-time",children:l==="letters"?Re(wr,{children:[Re("span",{children:[String(v+1).padStart(2,"0")," / ",String(d.length).padStart(2,"0")]}),pe("small",{children:"LETTER POSITION"})]}):Re(wr,{children:[pe("span",{children:TT(o)}),pe("small",{children:"REMAINING"})]})}),pe("span",{id:"tra-timer-announcement",className:"tra-sr-timer","aria-live":"polite","aria-atomic":"true",children:l==="letters"?`\u5F53\u524D\u4E3A\u7B2C ${v+1} \u4E2A\u5B57\u6BCD ${Z}\uFF0C\u5171 ${d.length} \u4E2A\u5B57\u6BCD`:y?"\u5012\u8BA1\u65F6\u5DF2\u7ED3\u675F":`\u5269\u4F59 ${Math.ceil(Math.max(0,o))} \u79D2`})]}),Re("div",{className:"tra-stage-footer",children:[pe("span",{children:"MOVE YOUR CURSOR THROUGH THE FIELD"}),pe("span",{children:"WEBGL / THREE.JS / 60 FPS"})]})]})]})]})},RT=()=>pe(CT,{});dv.render(pe(_0.StrictMode,{children:pe(RT,{})}),document.getElementById("root"));
