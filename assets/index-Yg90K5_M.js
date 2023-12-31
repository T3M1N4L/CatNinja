var cp=Object.defineProperty;var dp=(e,n,t)=>n in e?cp(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var gi=(e,n,t)=>(dp(e,typeof n!="symbol"?n+"":n,t),t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var wi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hc={exports:{}},Eo={},vc={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var li=Symbol.for("react.element"),fp=Symbol.for("react.portal"),pp=Symbol.for("react.fragment"),mp=Symbol.for("react.strict_mode"),hp=Symbol.for("react.profiler"),vp=Symbol.for("react.provider"),gp=Symbol.for("react.context"),wp=Symbol.for("react.forward_ref"),yp=Symbol.for("react.suspense"),kp=Symbol.for("react.memo"),bp=Symbol.for("react.lazy"),Ns=Symbol.iterator;function Sp(e){return e===null||typeof e!="object"?null:(e=Ns&&e[Ns]||e["@@iterator"],typeof e=="function"?e:null)}var gc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wc=Object.assign,yc={};function or(e,n,t){this.props=e,this.context=n,this.refs=yc,this.updater=t||gc}or.prototype.isReactComponent={};or.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kc(){}kc.prototype=or.prototype;function jl(e,n,t){this.props=e,this.context=n,this.refs=yc,this.updater=t||gc}var Al=jl.prototype=new kc;Al.constructor=jl;wc(Al,or.prototype);Al.isPureReactComponent=!0;var Ms=Array.isArray,bc=Object.prototype.hasOwnProperty,Il={current:null},Sc={key:!0,ref:!0,__self:!0,__source:!0};function xc(e,n,t){var r,i={},o=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(o=""+n.key),n)bc.call(n,r)&&!Sc.hasOwnProperty(r)&&(i[r]=n[r]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var s=Array(l),f=0;f<l;f++)s[f]=arguments[f+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:li,type:e,key:o,ref:a,props:i,_owner:Il.current}}function xp(e,n){return{$$typeof:li,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Pl(e){return typeof e=="object"&&e!==null&&e.$$typeof===li}function _p(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Bs=/\/+/g;function Jo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?_p(""+e.key):n.toString(36)}function Mi(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case li:case fp:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Jo(a,0):r,Ms(i)?(t="",e!=null&&(t=e.replace(Bs,"$&/")+"/"),Mi(i,n,t,"",function(f){return f})):i!=null&&(Pl(i)&&(i=xp(i,t+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Bs,"$&/")+"/")+e)),n.push(i)),1;if(a=0,r=r===""?".":r+":",Ms(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Jo(o,l);a+=Mi(o,n,t,s,i)}else if(s=Sp(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Jo(o,l++),a+=Mi(o,n,t,s,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function yi(e,n,t){if(e==null)return e;var r=[],i=0;return Mi(e,r,"","",function(o){return n.call(t,o,i++)}),r}function Rp(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ke={current:null},Bi={transition:null},zp={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:Bi,ReactCurrentOwner:Il};le.Children={map:yi,forEach:function(e,n,t){yi(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return yi(e,function(){n++}),n},toArray:function(e){return yi(e,function(n){return n})||[]},only:function(e){if(!Pl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};le.Component=or;le.Fragment=pp;le.Profiler=hp;le.PureComponent=jl;le.StrictMode=mp;le.Suspense=yp;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zp;le.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=wc({},e.props),i=e.key,o=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,a=Il.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)bc.call(n,s)&&!Sc.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];r.children=l}return{$$typeof:li,type:e.type,key:i,ref:o,props:r,_owner:a}};le.createContext=function(e){return e={$$typeof:gp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vp,_context:e},e.Consumer=e};le.createElement=xc;le.createFactory=function(e){var n=xc.bind(null,e);return n.type=e,n};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:wp,render:e}};le.isValidElement=Pl;le.lazy=function(e){return{$$typeof:bp,_payload:{_status:-1,_result:e},_init:Rp}};le.memo=function(e,n){return{$$typeof:kp,type:e,compare:n===void 0?null:n}};le.startTransition=function(e){var n=Bi.transition;Bi.transition={};try{e()}finally{Bi.transition=n}};le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};le.useCallback=function(e,n){return Ke.current.useCallback(e,n)};le.useContext=function(e){return Ke.current.useContext(e)};le.useDebugValue=function(){};le.useDeferredValue=function(e){return Ke.current.useDeferredValue(e)};le.useEffect=function(e,n){return Ke.current.useEffect(e,n)};le.useId=function(){return Ke.current.useId()};le.useImperativeHandle=function(e,n,t){return Ke.current.useImperativeHandle(e,n,t)};le.useInsertionEffect=function(e,n){return Ke.current.useInsertionEffect(e,n)};le.useLayoutEffect=function(e,n){return Ke.current.useLayoutEffect(e,n)};le.useMemo=function(e,n){return Ke.current.useMemo(e,n)};le.useReducer=function(e,n,t){return Ke.current.useReducer(e,n,t)};le.useRef=function(e){return Ke.current.useRef(e)};le.useState=function(e){return Ke.current.useState(e)};le.useSyncExternalStore=function(e,n,t){return Ke.current.useSyncExternalStore(e,n,t)};le.useTransition=function(){return Ke.current.useTransition()};le.version="18.2.0";vc.exports=le;var De=vc.exports;const Ea=mc(De);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep=De,Cp=Symbol.for("react.element"),jp=Symbol.for("react.fragment"),Ap=Object.prototype.hasOwnProperty,Ip=Ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pp={key:!0,ref:!0,__self:!0,__source:!0};function _c(e,n,t){var r,i={},o=null,a=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Ap.call(n,r)&&!Pp.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Cp,type:e,key:o,ref:a,props:i,_owner:Ip.current}}Eo.Fragment=jp;Eo.jsx=_c;Eo.jsxs=_c;hc.exports=Eo;var Y=hc.exports,Ca={},Rc={exports:{}},an={},zc={exports:{}},Ec={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n($,L){var K=$.length;$.push(L);e:for(;0<K;){var O=K-1>>>1,P=$[O];if(0<i(P,L))$[O]=L,$[K]=P,K=O;else break e}}function t($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var L=$[0],K=$.pop();if(K!==L){$[0]=K;e:for(var O=0,P=$.length,te=P>>>1;O<te;){var Q=2*(O+1)-1,G=$[Q],fe=Q+1,ze=$[fe];if(0>i(G,K))fe<P&&0>i(ze,G)?($[O]=ze,$[fe]=K,O=fe):($[O]=G,$[Q]=K,O=Q);else if(fe<P&&0>i(ze,K))$[O]=ze,$[fe]=K,O=fe;else break e}}return L}function i($,L){var K=$.sortIndex-L.sortIndex;return K!==0?K:$.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],f=[],w=1,h=null,g=3,m=!1,k=!1,p=!1,b=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y($){for(var L=t(f);L!==null;){if(L.callback===null)r(f);else if(L.startTime<=$)r(f),L.sortIndex=L.expirationTime,n(s,L);else break;L=t(f)}}function S($){if(p=!1,y($),!k)if(t(s)!==null)k=!0,oe(R);else{var L=t(f);L!==null&&q(S,L.startTime-$)}}function R($,L){k=!1,p&&(p=!1,u(D),D=-1),m=!0;var K=g;try{for(y(L),h=t(s);h!==null&&(!(h.expirationTime>L)||$&&!H());){var O=h.callback;if(typeof O=="function"){h.callback=null,g=h.priorityLevel;var P=O(h.expirationTime<=L);L=e.unstable_now(),typeof P=="function"?h.callback=P:h===t(s)&&r(s),y(L)}else r(s);h=t(s)}if(h!==null)var te=!0;else{var Q=t(f);Q!==null&&q(S,Q.startTime-L),te=!1}return te}finally{h=null,g=K,m=!1}}var A=!1,C=null,D=-1,z=5,I=-1;function H(){return!(e.unstable_now()-I<z)}function E(){if(C!==null){var $=e.unstable_now();I=$;var L=!0;try{L=C(!0,$)}finally{L?N():(A=!1,C=null)}}else A=!1}var N;if(typeof d=="function")N=function(){d(E)};else if(typeof MessageChannel<"u"){var v=new MessageChannel,B=v.port2;v.port1.onmessage=E,N=function(){B.postMessage(null)}}else N=function(){b(E,0)};function oe($){C=$,A||(A=!0,N())}function q($,L){D=b(function(){$(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){k||m||(k=!0,oe(R))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function($){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var K=g;g=L;try{return $()}finally{g=K}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,L){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var K=g;g=$;try{return L()}finally{g=K}},e.unstable_scheduleCallback=function($,L,K){var O=e.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?O+K:O):K=O,$){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=K+P,$={id:w++,callback:L,priorityLevel:$,startTime:K,expirationTime:P,sortIndex:-1},K>O?($.sortIndex=K,n(f,$),t(s)===null&&$===t(f)&&(p?(u(D),D=-1):p=!0,q(S,K-O))):($.sortIndex=P,n(s,$),k||m||(k=!0,oe(R))),$},e.unstable_shouldYield=H,e.unstable_wrapCallback=function($){var L=g;return function(){var K=g;g=L;try{return $.apply(this,arguments)}finally{g=K}}}})(Ec);zc.exports=Ec;var Dp=zc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=De,on=Dp;function V(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jc=new Set,Ur={};function Rt(e,n){Jt(e,n),Jt(e+"Capture",n)}function Jt(e,n){for(Ur[e]=n,e=0;e<n.length;e++)jc.add(n[e])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,Op=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Us={},$s={};function Fp(e){return ja.call($s,e)?!0:ja.call(Us,e)?!1:Op.test(e)?$s[e]=!0:(Us[e]=!0,!1)}function Tp(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lp(e,n,t,r){if(n===null||typeof n>"u"||Tp(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Je(e,n,t,r,i,o,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=a}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Be[n]=new Je(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Dl=/[\-:]([a-z])/g;function Ol(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Dl,Ol);Be[n]=new Je(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Dl,Ol);Be[n]=new Je(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Dl,Ol);Be[n]=new Je(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fl(e,n,t,r){var i=Be.hasOwnProperty(n)?Be[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Lp(n,t,i,r)&&(t=null),r||i===null?Fp(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Vn=Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ki=Symbol.for("react.element"),Ct=Symbol.for("react.portal"),jt=Symbol.for("react.fragment"),Tl=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ac=Symbol.for("react.provider"),Ic=Symbol.for("react.context"),Ll=Symbol.for("react.forward_ref"),Ia=Symbol.for("react.suspense"),Pa=Symbol.for("react.suspense_list"),Nl=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),Pc=Symbol.for("react.offscreen"),Ws=Symbol.iterator;function dr(e){return e===null||typeof e!="object"?null:(e=Ws&&e[Ws]||e["@@iterator"],typeof e=="function"?e:null)}var _e=Object.assign,Go;function xr(e){if(Go===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Go=n&&n[1]||""}return`
`+Go+e}var Qo=!1;function Yo(e,n){if(!e||Qo)return"";Qo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(f){var r=f}Reflect.construct(e,[],n)}else{try{n.call()}catch(f){r=f}e.call(n.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Qo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?xr(e):""}function Np(e){switch(e.tag){case 5:return xr(e.type);case 16:return xr("Lazy");case 13:return xr("Suspense");case 19:return xr("SuspenseList");case 0:case 2:case 15:return e=Yo(e.type,!1),e;case 11:return e=Yo(e.type.render,!1),e;case 1:return e=Yo(e.type,!0),e;default:return""}}function Da(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jt:return"Fragment";case Ct:return"Portal";case Aa:return"Profiler";case Tl:return"StrictMode";case Ia:return"Suspense";case Pa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ic:return(e.displayName||"Context")+".Consumer";case Ac:return(e._context.displayName||"Context")+".Provider";case Ll:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Nl:return n=e.displayName||null,n!==null?n:Da(e.type)||"Memo";case Zn:n=e._payload,e=e._init;try{return Da(e(n))}catch{}}return null}function Mp(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Da(n);case 8:return n===Tl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function st(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Bp(e){var n=Dc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function bi(e){e._valueTracker||(e._valueTracker=Bp(e))}function Oc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Dc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oa(e,n){var t=n.checked;return _e({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function qs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=st(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Fc(e,n){n=n.checked,n!=null&&Fl(e,"checked",n,!1)}function Fa(e,n){Fc(e,n);var t=st(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ta(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ta(e,n.type,st(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Vs(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ta(e,n,t){(n!=="number"||Qi(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var _r=Array.isArray;function Bt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+st(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function La(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(V(91));return _e({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(V(92));if(_r(t)){if(1<t.length)throw Error(V(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:st(t)}}function Tc(e,n){var t=st(n.value),r=st(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Zs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Lc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Na(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Lc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Si,Nc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Si=Si||document.createElement("div"),Si.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function $r(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Up=["Webkit","ms","Moz","O"];Object.keys(Cr).forEach(function(e){Up.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Cr[n]=Cr[e]})});function Mc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Cr.hasOwnProperty(e)&&Cr[e]?(""+n).trim():n+"px"}function Bc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Mc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var $p=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ma(e,n){if(n){if($p[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(V(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(V(61))}if(n.style!=null&&typeof n.style!="object")throw Error(V(62))}}function Ba(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ua=null;function Ml(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $a=null,Ut=null,$t=null;function Ks(e){if(e=ci(e)){if(typeof $a!="function")throw Error(V(280));var n=e.stateNode;n&&(n=Po(n),$a(e.stateNode,e.type,n))}}function Uc(e){Ut?$t?$t.push(e):$t=[e]:Ut=e}function $c(){if(Ut){var e=Ut,n=$t;if($t=Ut=null,Ks(e),n)for(e=0;e<n.length;e++)Ks(n[e])}}function Wc(e,n){return e(n)}function qc(){}var Xo=!1;function Vc(e,n,t){if(Xo)return e(n,t);Xo=!0;try{return Wc(e,n,t)}finally{Xo=!1,(Ut!==null||$t!==null)&&(qc(),$c())}}function Wr(e,n){var t=e.stateNode;if(t===null)return null;var r=Po(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(V(231,n,typeof t));return t}var Wa=!1;if(Bn)try{var fr={};Object.defineProperty(fr,"passive",{get:function(){Wa=!0}}),window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{Wa=!1}function Wp(e,n,t,r,i,o,a,l,s){var f=Array.prototype.slice.call(arguments,3);try{n.apply(t,f)}catch(w){this.onError(w)}}var jr=!1,Yi=null,Xi=!1,qa=null,qp={onError:function(e){jr=!0,Yi=e}};function Vp(e,n,t,r,i,o,a,l,s){jr=!1,Yi=null,Wp.apply(qp,arguments)}function Hp(e,n,t,r,i,o,a,l,s){if(Vp.apply(this,arguments),jr){if(jr){var f=Yi;jr=!1,Yi=null}else throw Error(V(198));Xi||(Xi=!0,qa=f)}}function zt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Hc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Js(e){if(zt(e)!==e)throw Error(V(188))}function Zp(e){var n=e.alternate;if(!n){if(n=zt(e),n===null)throw Error(V(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Js(i),e;if(o===r)return Js(i),n;o=o.sibling}throw Error(V(188))}if(t.return!==r.return)t=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===t){a=!0,t=i,r=o;break}if(l===r){a=!0,r=i,t=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===t){a=!0,t=o,r=i;break}if(l===r){a=!0,r=o,t=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(t.alternate!==r)throw Error(V(190))}if(t.tag!==3)throw Error(V(188));return t.stateNode.current===t?e:n}function Zc(e){return e=Zp(e),e!==null?Kc(e):null}function Kc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Kc(e);if(n!==null)return n;e=e.sibling}return null}var Jc=on.unstable_scheduleCallback,Gs=on.unstable_cancelCallback,Kp=on.unstable_shouldYield,Jp=on.unstable_requestPaint,je=on.unstable_now,Gp=on.unstable_getCurrentPriorityLevel,Bl=on.unstable_ImmediatePriority,Gc=on.unstable_UserBlockingPriority,eo=on.unstable_NormalPriority,Qp=on.unstable_LowPriority,Qc=on.unstable_IdlePriority,Co=null,An=null;function Yp(e){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(Co,e,void 0,(e.current.flags&128)===128)}catch{}}var bn=Math.clz32?Math.clz32:nm,Xp=Math.log,em=Math.LN2;function nm(e){return e>>>=0,e===0?32:31-(Xp(e)/em|0)|0}var xi=64,_i=4194304;function Rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function no(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~i;l!==0?r=Rr(l):(o&=a,o!==0&&(r=Rr(o)))}else a=t&~i,a!==0?r=Rr(a):o!==0&&(r=Rr(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-bn(n),i=1<<t,r|=e[t],n&=~i;return r}function tm(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rm(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-bn(o),l=1<<a,s=i[a];s===-1?(!(l&t)||l&r)&&(i[a]=tm(l,n)):s<=n&&(e.expiredLanes|=l),o&=~l}}function Va(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yc(){var e=xi;return xi<<=1,!(xi&4194240)&&(xi=64),e}function ea(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function si(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-bn(n),e[n]=t}function im(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-bn(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function Ul(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-bn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var me=0;function Xc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ed,$l,nd,td,rd,Ha=!1,Ri=[],Xn=null,et=null,nt=null,qr=new Map,Vr=new Map,Jn=[],om="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qs(e,n){switch(e){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":et=null;break;case"mouseover":case"mouseout":nt=null;break;case"pointerover":case"pointerout":qr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(n.pointerId)}}function pr(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=ci(n),n!==null&&$l(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function am(e,n,t,r,i){switch(n){case"focusin":return Xn=pr(Xn,e,n,t,r,i),!0;case"dragenter":return et=pr(et,e,n,t,r,i),!0;case"mouseover":return nt=pr(nt,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return qr.set(o,pr(qr.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Vr.set(o,pr(Vr.get(o)||null,e,n,t,r,i)),!0}return!1}function id(e){var n=ht(e.target);if(n!==null){var t=zt(n);if(t!==null){if(n=t.tag,n===13){if(n=Hc(t),n!==null){e.blockedOn=n,rd(e.priority,function(){nd(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ui(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Za(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ua=r,t.target.dispatchEvent(r),Ua=null}else return n=ci(t),n!==null&&$l(n),e.blockedOn=t,!1;n.shift()}return!0}function Ys(e,n,t){Ui(e)&&t.delete(n)}function lm(){Ha=!1,Xn!==null&&Ui(Xn)&&(Xn=null),et!==null&&Ui(et)&&(et=null),nt!==null&&Ui(nt)&&(nt=null),qr.forEach(Ys),Vr.forEach(Ys)}function mr(e,n){e.blockedOn===n&&(e.blockedOn=null,Ha||(Ha=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,lm)))}function Hr(e){function n(i){return mr(i,e)}if(0<Ri.length){mr(Ri[0],e);for(var t=1;t<Ri.length;t++){var r=Ri[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Xn!==null&&mr(Xn,e),et!==null&&mr(et,e),nt!==null&&mr(nt,e),qr.forEach(n),Vr.forEach(n),t=0;t<Jn.length;t++)r=Jn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jn.length&&(t=Jn[0],t.blockedOn===null);)id(t),t.blockedOn===null&&Jn.shift()}var Wt=Vn.ReactCurrentBatchConfig,to=!0;function sm(e,n,t,r){var i=me,o=Wt.transition;Wt.transition=null;try{me=1,Wl(e,n,t,r)}finally{me=i,Wt.transition=o}}function um(e,n,t,r){var i=me,o=Wt.transition;Wt.transition=null;try{me=4,Wl(e,n,t,r)}finally{me=i,Wt.transition=o}}function Wl(e,n,t,r){if(to){var i=Za(e,n,t,r);if(i===null)ca(e,n,r,ro,t),Qs(e,r);else if(am(i,e,n,t,r))r.stopPropagation();else if(Qs(e,r),n&4&&-1<om.indexOf(e)){for(;i!==null;){var o=ci(i);if(o!==null&&ed(o),o=Za(e,n,t,r),o===null&&ca(e,n,r,ro,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else ca(e,n,r,null,t)}}var ro=null;function Za(e,n,t,r){if(ro=null,e=Ml(r),e=ht(e),e!==null)if(n=zt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Hc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ro=e,null}function od(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gp()){case Bl:return 1;case Gc:return 4;case eo:case Qp:return 16;case Qc:return 536870912;default:return 16}default:return 16}}var Qn=null,ql=null,$i=null;function ad(){if($i)return $i;var e,n=ql,t=n.length,r,i="value"in Qn?Qn.value:Qn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===i[o-r];r++);return $i=i.slice(e,1<r?1-r:void 0)}function Wi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function zi(){return!0}function Xs(){return!1}function ln(e){function n(t,r,i,o,a){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?zi:Xs,this.isPropagationStopped=Xs,this}return _e(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=zi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=zi)},persist:function(){},isPersistent:zi}),n}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=ln(ar),ui=_e({},ar,{view:0,detail:0}),cm=ln(ui),na,ta,hr,jo=_e({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hr&&(hr&&e.type==="mousemove"?(na=e.screenX-hr.screenX,ta=e.screenY-hr.screenY):ta=na=0,hr=e),na)},movementY:function(e){return"movementY"in e?e.movementY:ta}}),eu=ln(jo),dm=_e({},jo,{dataTransfer:0}),fm=ln(dm),pm=_e({},ui,{relatedTarget:0}),ra=ln(pm),mm=_e({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),hm=ln(mm),vm=_e({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gm=ln(vm),wm=_e({},ar,{data:0}),nu=ln(wm),ym={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},km={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=bm[e])?!!n[e]:!1}function Hl(){return Sm}var xm=_e({},ui,{key:function(e){if(e.key){var n=ym[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?km[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hl,charCode:function(e){return e.type==="keypress"?Wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_m=ln(xm),Rm=_e({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=ln(Rm),zm=_e({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hl}),Em=ln(zm),Cm=_e({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),jm=ln(Cm),Am=_e({},jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Im=ln(Am),Pm=[9,13,27,32],Zl=Bn&&"CompositionEvent"in window,Ar=null;Bn&&"documentMode"in document&&(Ar=document.documentMode);var Dm=Bn&&"TextEvent"in window&&!Ar,ld=Bn&&(!Zl||Ar&&8<Ar&&11>=Ar),ru=" ",iu=!1;function sd(e,n){switch(e){case"keyup":return Pm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ud(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var At=!1;function Om(e,n){switch(e){case"compositionend":return ud(n);case"keypress":return n.which!==32?null:(iu=!0,ru);case"textInput":return e=n.data,e===ru&&iu?null:e;default:return null}}function Fm(e,n){if(At)return e==="compositionend"||!Zl&&sd(e,n)?(e=ad(),$i=ql=Qn=null,At=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ld&&n.locale!=="ko"?null:n.data;default:return null}}var Tm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ou(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Tm[e.type]:n==="textarea"}function cd(e,n,t,r){Uc(r),n=io(n,"onChange"),0<n.length&&(t=new Vl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Ir=null,Zr=null;function Lm(e){bd(e,0)}function Ao(e){var n=Dt(e);if(Oc(n))return e}function Nm(e,n){if(e==="change")return n}var dd=!1;if(Bn){var ia;if(Bn){var oa="oninput"in document;if(!oa){var au=document.createElement("div");au.setAttribute("oninput","return;"),oa=typeof au.oninput=="function"}ia=oa}else ia=!1;dd=ia&&(!document.documentMode||9<document.documentMode)}function lu(){Ir&&(Ir.detachEvent("onpropertychange",fd),Zr=Ir=null)}function fd(e){if(e.propertyName==="value"&&Ao(Zr)){var n=[];cd(n,Zr,e,Ml(e)),Vc(Lm,n)}}function Mm(e,n,t){e==="focusin"?(lu(),Ir=n,Zr=t,Ir.attachEvent("onpropertychange",fd)):e==="focusout"&&lu()}function Bm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ao(Zr)}function Um(e,n){if(e==="click")return Ao(n)}function $m(e,n){if(e==="input"||e==="change")return Ao(n)}function Wm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var xn=typeof Object.is=="function"?Object.is:Wm;function Kr(e,n){if(xn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!ja.call(n,i)||!xn(e[i],n[i]))return!1}return!0}function su(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uu(e,n){var t=su(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=su(t)}}function pd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?pd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function md(){for(var e=window,n=Qi();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Qi(e.document)}return n}function Kl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function qm(e){var n=md(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&pd(t.ownerDocument.documentElement,t)){if(r!==null&&Kl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=uu(t,o);var a=uu(t,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vm=Bn&&"documentMode"in document&&11>=document.documentMode,It=null,Ka=null,Pr=null,Ja=!1;function cu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ja||It==null||It!==Qi(r)||(r=It,"selectionStart"in r&&Kl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pr&&Kr(Pr,r)||(Pr=r,r=io(Ka,"onSelect"),0<r.length&&(n=new Vl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=It)))}function Ei(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Pt={animationend:Ei("Animation","AnimationEnd"),animationiteration:Ei("Animation","AnimationIteration"),animationstart:Ei("Animation","AnimationStart"),transitionend:Ei("Transition","TransitionEnd")},aa={},hd={};Bn&&(hd=document.createElement("div").style,"AnimationEvent"in window||(delete Pt.animationend.animation,delete Pt.animationiteration.animation,delete Pt.animationstart.animation),"TransitionEvent"in window||delete Pt.transitionend.transition);function Io(e){if(aa[e])return aa[e];if(!Pt[e])return e;var n=Pt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in hd)return aa[e]=n[t];return e}var vd=Io("animationend"),gd=Io("animationiteration"),wd=Io("animationstart"),yd=Io("transitionend"),kd=new Map,du="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ct(e,n){kd.set(e,n),Rt(n,[e])}for(var la=0;la<du.length;la++){var sa=du[la],Hm=sa.toLowerCase(),Zm=sa[0].toUpperCase()+sa.slice(1);ct(Hm,"on"+Zm)}ct(vd,"onAnimationEnd");ct(gd,"onAnimationIteration");ct(wd,"onAnimationStart");ct("dblclick","onDoubleClick");ct("focusin","onFocus");ct("focusout","onBlur");ct(yd,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Km=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function fu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Hp(r,n,void 0,e),e.currentTarget=null}function bd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,f=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;fu(i,l,f),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,f=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;fu(i,l,f),o=s}}}if(Xi)throw e=qa,Xi=!1,qa=null,e}function ge(e,n){var t=n[el];t===void 0&&(t=n[el]=new Set);var r=e+"__bubble";t.has(r)||(Sd(n,e,2,!1),t.add(r))}function ua(e,n,t){var r=0;n&&(r|=4),Sd(t,e,r,n)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function Jr(e){if(!e[Ci]){e[Ci]=!0,jc.forEach(function(t){t!=="selectionchange"&&(Km.has(t)||ua(t,!1,e),ua(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ci]||(n[Ci]=!0,ua("selectionchange",!1,n))}}function Sd(e,n,t,r){switch(od(n)){case 1:var i=sm;break;case 4:i=um;break;default:i=Wl}t=i.bind(null,n,t,e),i=void 0,!Wa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function ca(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=ht(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Vc(function(){var f=o,w=Ml(t),h=[];e:{var g=kd.get(e);if(g!==void 0){var m=Vl,k=e;switch(e){case"keypress":if(Wi(t)===0)break e;case"keydown":case"keyup":m=_m;break;case"focusin":k="focus",m=ra;break;case"focusout":k="blur",m=ra;break;case"beforeblur":case"afterblur":m=ra;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=eu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=fm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Em;break;case vd:case gd:case wd:m=hm;break;case yd:m=jm;break;case"scroll":m=cm;break;case"wheel":m=Im;break;case"copy":case"cut":case"paste":m=gm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=tu}var p=(n&4)!==0,b=!p&&e==="scroll",u=p?g!==null?g+"Capture":null:g;p=[];for(var d=f,y;d!==null;){y=d;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,u!==null&&(S=Wr(d,u),S!=null&&p.push(Gr(d,S,y)))),b)break;d=d.return}0<p.length&&(g=new m(g,k,null,t,w),h.push({event:g,listeners:p}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",g&&t!==Ua&&(k=t.relatedTarget||t.fromElement)&&(ht(k)||k[Un]))break e;if((m||g)&&(g=w.window===w?w:(g=w.ownerDocument)?g.defaultView||g.parentWindow:window,m?(k=t.relatedTarget||t.toElement,m=f,k=k?ht(k):null,k!==null&&(b=zt(k),k!==b||k.tag!==5&&k.tag!==6)&&(k=null)):(m=null,k=f),m!==k)){if(p=eu,S="onMouseLeave",u="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(p=tu,S="onPointerLeave",u="onPointerEnter",d="pointer"),b=m==null?g:Dt(m),y=k==null?g:Dt(k),g=new p(S,d+"leave",m,t,w),g.target=b,g.relatedTarget=y,S=null,ht(w)===f&&(p=new p(u,d+"enter",k,t,w),p.target=y,p.relatedTarget=b,S=p),b=S,m&&k)n:{for(p=m,u=k,d=0,y=p;y;y=Et(y))d++;for(y=0,S=u;S;S=Et(S))y++;for(;0<d-y;)p=Et(p),d--;for(;0<y-d;)u=Et(u),y--;for(;d--;){if(p===u||u!==null&&p===u.alternate)break n;p=Et(p),u=Et(u)}p=null}else p=null;m!==null&&pu(h,g,m,p,!1),k!==null&&b!==null&&pu(h,b,k,p,!0)}}e:{if(g=f?Dt(f):window,m=g.nodeName&&g.nodeName.toLowerCase(),m==="select"||m==="input"&&g.type==="file")var R=Nm;else if(ou(g))if(dd)R=$m;else{R=Bm;var A=Mm}else(m=g.nodeName)&&m.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(R=Um);if(R&&(R=R(e,f))){cd(h,R,t,w);break e}A&&A(e,g,f),e==="focusout"&&(A=g._wrapperState)&&A.controlled&&g.type==="number"&&Ta(g,"number",g.value)}switch(A=f?Dt(f):window,e){case"focusin":(ou(A)||A.contentEditable==="true")&&(It=A,Ka=f,Pr=null);break;case"focusout":Pr=Ka=It=null;break;case"mousedown":Ja=!0;break;case"contextmenu":case"mouseup":case"dragend":Ja=!1,cu(h,t,w);break;case"selectionchange":if(Vm)break;case"keydown":case"keyup":cu(h,t,w)}var C;if(Zl)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else At?sd(e,t)&&(D="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(D="onCompositionStart");D&&(ld&&t.locale!=="ko"&&(At||D!=="onCompositionStart"?D==="onCompositionEnd"&&At&&(C=ad()):(Qn=w,ql="value"in Qn?Qn.value:Qn.textContent,At=!0)),A=io(f,D),0<A.length&&(D=new nu(D,e,null,t,w),h.push({event:D,listeners:A}),C?D.data=C:(C=ud(t),C!==null&&(D.data=C)))),(C=Dm?Om(e,t):Fm(e,t))&&(f=io(f,"onBeforeInput"),0<f.length&&(w=new nu("onBeforeInput","beforeinput",null,t,w),h.push({event:w,listeners:f}),w.data=C))}bd(h,n)})}function Gr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function io(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Wr(e,t),o!=null&&r.unshift(Gr(e,o,i)),o=Wr(e,n),o!=null&&r.push(Gr(e,o,i))),e=e.return}return r}function Et(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pu(e,n,t,r,i){for(var o=n._reactName,a=[];t!==null&&t!==r;){var l=t,s=l.alternate,f=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&f!==null&&(l=f,i?(s=Wr(t,o),s!=null&&a.unshift(Gr(t,s,l))):i||(s=Wr(t,o),s!=null&&a.push(Gr(t,s,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var Jm=/\r\n?/g,Gm=/\u0000|\uFFFD/g;function mu(e){return(typeof e=="string"?e:""+e).replace(Jm,`
`).replace(Gm,"")}function ji(e,n,t){if(n=mu(n),mu(e)!==n&&t)throw Error(V(425))}function oo(){}var Ga=null,Qa=null;function Ya(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xa=typeof setTimeout=="function"?setTimeout:void 0,Qm=typeof clearTimeout=="function"?clearTimeout:void 0,hu=typeof Promise=="function"?Promise:void 0,Ym=typeof queueMicrotask=="function"?queueMicrotask:typeof hu<"u"?function(e){return hu.resolve(null).then(e).catch(Xm)}:Xa;function Xm(e){setTimeout(function(){throw e})}function da(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Hr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Hr(n)}function tt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function vu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),Cn="__reactFiber$"+lr,Qr="__reactProps$"+lr,Un="__reactContainer$"+lr,el="__reactEvents$"+lr,eh="__reactListeners$"+lr,nh="__reactHandles$"+lr;function ht(e){var n=e[Cn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Un]||t[Cn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=vu(e);e!==null;){if(t=e[Cn])return t;e=vu(e)}return n}e=t,t=e.parentNode}return null}function ci(e){return e=e[Cn]||e[Un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function Po(e){return e[Qr]||null}var nl=[],Ot=-1;function dt(e){return{current:e}}function we(e){0>Ot||(e.current=nl[Ot],nl[Ot]=null,Ot--)}function ve(e,n){Ot++,nl[Ot]=e.current,e.current=n}var ut={},qe=dt(ut),Ye=dt(!1),kt=ut;function Gt(e,n){var t=e.type.contextTypes;if(!t)return ut;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(e){return e=e.childContextTypes,e!=null}function ao(){we(Ye),we(qe)}function gu(e,n,t){if(qe.current!==ut)throw Error(V(168));ve(qe,n),ve(Ye,t)}function xd(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(V(108,Mp(e)||"Unknown",i));return _e({},t,r)}function lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ut,kt=qe.current,ve(qe,e),ve(Ye,Ye.current),!0}function wu(e,n,t){var r=e.stateNode;if(!r)throw Error(V(169));t?(e=xd(e,n,kt),r.__reactInternalMemoizedMergedChildContext=e,we(Ye),we(qe),ve(qe,e)):we(Ye),ve(Ye,t)}var Fn=null,Do=!1,fa=!1;function _d(e){Fn===null?Fn=[e]:Fn.push(e)}function th(e){Do=!0,_d(e)}function ft(){if(!fa&&Fn!==null){fa=!0;var e=0,n=me;try{var t=Fn;for(me=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Fn=null,Do=!1}catch(i){throw Fn!==null&&(Fn=Fn.slice(e+1)),Jc(Bl,ft),i}finally{me=n,fa=!1}}return null}var Ft=[],Tt=0,so=null,uo=0,cn=[],dn=0,bt=null,Tn=1,Ln="";function pt(e,n){Ft[Tt++]=uo,Ft[Tt++]=so,so=e,uo=n}function Rd(e,n,t){cn[dn++]=Tn,cn[dn++]=Ln,cn[dn++]=bt,bt=e;var r=Tn;e=Ln;var i=32-bn(r)-1;r&=~(1<<i),t+=1;var o=32-bn(n)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Tn=1<<32-bn(n)+i|t<<i|r,Ln=o+e}else Tn=1<<o|t<<i|r,Ln=e}function Jl(e){e.return!==null&&(pt(e,1),Rd(e,1,0))}function Gl(e){for(;e===so;)so=Ft[--Tt],Ft[Tt]=null,uo=Ft[--Tt],Ft[Tt]=null;for(;e===bt;)bt=cn[--dn],cn[dn]=null,Ln=cn[--dn],cn[dn]=null,Tn=cn[--dn],cn[dn]=null}var rn=null,tn=null,ke=!1,kn=null;function zd(e,n){var t=fn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function yu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,rn=e,tn=tt(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,rn=e,tn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=bt!==null?{id:Tn,overflow:Ln}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=fn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,rn=e,tn=null,!0):!1;default:return!1}}function tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rl(e){if(ke){var n=tn;if(n){var t=n;if(!yu(e,n)){if(tl(e))throw Error(V(418));n=tt(t.nextSibling);var r=rn;n&&yu(e,n)?zd(r,t):(e.flags=e.flags&-4097|2,ke=!1,rn=e)}}else{if(tl(e))throw Error(V(418));e.flags=e.flags&-4097|2,ke=!1,rn=e}}}function ku(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rn=e}function Ai(e){if(e!==rn)return!1;if(!ke)return ku(e),ke=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ya(e.type,e.memoizedProps)),n&&(n=tn)){if(tl(e))throw Ed(),Error(V(418));for(;n;)zd(e,n),n=tt(n.nextSibling)}if(ku(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){tn=tt(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}tn=null}}else tn=rn?tt(e.stateNode.nextSibling):null;return!0}function Ed(){for(var e=tn;e;)e=tt(e.nextSibling)}function Qt(){tn=rn=null,ke=!1}function Ql(e){kn===null?kn=[e]:kn.push(e)}var rh=Vn.ReactCurrentBatchConfig;function wn(e,n){if(e&&e.defaultProps){n=_e({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var co=dt(null),fo=null,Lt=null,Yl=null;function Xl(){Yl=Lt=fo=null}function es(e){var n=co.current;we(co),e._currentValue=n}function il(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function qt(e,n){fo=e,Yl=Lt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Qe=!0),e.firstContext=null)}function mn(e){var n=e._currentValue;if(Yl!==e)if(e={context:e,memoizedValue:n,next:null},Lt===null){if(fo===null)throw Error(V(308));Lt=e,fo.dependencies={lanes:0,firstContext:e}}else Lt=Lt.next=e;return n}var vt=null;function ns(e){vt===null?vt=[e]:vt.push(e)}function Cd(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,ns(n)):(t.next=i.next,i.next=t),n.interleaved=t,$n(e,r)}function $n(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Kn=!1;function ts(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function rt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,$n(e,t)}return i=r.interleaved,i===null?(n.next=n,ns(r)):(n.next=i.next,i.next=n),r.interleaved=n,$n(e,t)}function qi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ul(e,t)}}function bu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=a:o=o.next=a,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function po(e,n,t,r){var i=e.updateQueue;Kn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,f=s.next;s.next=null,a===null?o=f:a.next=f,a=s;var w=e.alternate;w!==null&&(w=w.updateQueue,l=w.lastBaseUpdate,l!==a&&(l===null?w.firstBaseUpdate=f:l.next=f,w.lastBaseUpdate=s))}if(o!==null){var h=i.baseState;a=0,w=f=s=null,l=o;do{var g=l.lane,m=l.eventTime;if((r&g)===g){w!==null&&(w=w.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=e,p=l;switch(g=n,m=t,p.tag){case 1:if(k=p.payload,typeof k=="function"){h=k.call(m,h,g);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=p.payload,g=typeof k=="function"?k.call(m,h,g):k,g==null)break e;h=_e({},h,g);break e;case 2:Kn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else m={eventTime:m,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},w===null?(f=w=m,s=h):w=w.next=m,a|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(w===null&&(s=h),i.baseState=s,i.firstBaseUpdate=f,i.lastBaseUpdate=w,n=i.shared.interleaved,n!==null){i=n;do a|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);xt|=a,e.lanes=a,e.memoizedState=h}}function Su(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Ad=new Cc.Component().refs;function ol(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:_e({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Oo={isMounted:function(e){return(e=e._reactInternals)?zt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ze(),i=ot(e),o=Nn(r,i);o.payload=n,t!=null&&(o.callback=t),n=rt(e,o,i),n!==null&&(Sn(n,e,i,r),qi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ze(),i=ot(e),o=Nn(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=rt(e,o,i),n!==null&&(Sn(n,e,i,r),qi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ze(),r=ot(e),i=Nn(t,r);i.tag=2,n!=null&&(i.callback=n),n=rt(e,i,r),n!==null&&(Sn(n,e,r,t),qi(n,e,r))}};function xu(e,n,t,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):n.prototype&&n.prototype.isPureReactComponent?!Kr(t,r)||!Kr(i,o):!0}function Id(e,n,t){var r=!1,i=ut,o=n.contextType;return typeof o=="object"&&o!==null?o=mn(o):(i=Xe(n)?kt:qe.current,r=n.contextTypes,o=(r=r!=null)?Gt(e,i):ut),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Oo,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function _u(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Oo.enqueueReplaceState(n,n.state,null)}function al(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=Ad,ts(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=mn(o):(o=Xe(n)?kt:qe.current,i.context=Gt(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(ol(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Oo.enqueueReplaceState(i,i.state,null),po(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function vr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(V(309));var r=t.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(a){var l=i.refs;l===Ad&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},n._stringRef=o,n)}if(typeof e!="string")throw Error(V(284));if(!t._owner)throw Error(V(290,e))}return e}function Ii(e,n){throw e=Object.prototype.toString.call(n),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ru(e){var n=e._init;return n(e._payload)}function Pd(e){function n(u,d){if(e){var y=u.deletions;y===null?(u.deletions=[d],u.flags|=16):y.push(d)}}function t(u,d){if(!e)return null;for(;d!==null;)n(u,d),d=d.sibling;return null}function r(u,d){for(u=new Map;d!==null;)d.key!==null?u.set(d.key,d):u.set(d.index,d),d=d.sibling;return u}function i(u,d){return u=at(u,d),u.index=0,u.sibling=null,u}function o(u,d,y){return u.index=y,e?(y=u.alternate,y!==null?(y=y.index,y<d?(u.flags|=2,d):y):(u.flags|=2,d)):(u.flags|=1048576,d)}function a(u){return e&&u.alternate===null&&(u.flags|=2),u}function l(u,d,y,S){return d===null||d.tag!==6?(d=ya(y,u.mode,S),d.return=u,d):(d=i(d,y),d.return=u,d)}function s(u,d,y,S){var R=y.type;return R===jt?w(u,d,y.props.children,S,y.key):d!==null&&(d.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Zn&&Ru(R)===d.type)?(S=i(d,y.props),S.ref=vr(u,d,y),S.return=u,S):(S=Gi(y.type,y.key,y.props,null,u.mode,S),S.ref=vr(u,d,y),S.return=u,S)}function f(u,d,y,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==y.containerInfo||d.stateNode.implementation!==y.implementation?(d=ka(y,u.mode,S),d.return=u,d):(d=i(d,y.children||[]),d.return=u,d)}function w(u,d,y,S,R){return d===null||d.tag!==7?(d=yt(y,u.mode,S,R),d.return=u,d):(d=i(d,y),d.return=u,d)}function h(u,d,y){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ya(""+d,u.mode,y),d.return=u,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ki:return y=Gi(d.type,d.key,d.props,null,u.mode,y),y.ref=vr(u,null,d),y.return=u,y;case Ct:return d=ka(d,u.mode,y),d.return=u,d;case Zn:var S=d._init;return h(u,S(d._payload),y)}if(_r(d)||dr(d))return d=yt(d,u.mode,y,null),d.return=u,d;Ii(u,d)}return null}function g(u,d,y,S){var R=d!==null?d.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return R!==null?null:l(u,d,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ki:return y.key===R?s(u,d,y,S):null;case Ct:return y.key===R?f(u,d,y,S):null;case Zn:return R=y._init,g(u,d,R(y._payload),S)}if(_r(y)||dr(y))return R!==null?null:w(u,d,y,S,null);Ii(u,y)}return null}function m(u,d,y,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(y)||null,l(d,u,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ki:return u=u.get(S.key===null?y:S.key)||null,s(d,u,S,R);case Ct:return u=u.get(S.key===null?y:S.key)||null,f(d,u,S,R);case Zn:var A=S._init;return m(u,d,y,A(S._payload),R)}if(_r(S)||dr(S))return u=u.get(y)||null,w(d,u,S,R,null);Ii(d,S)}return null}function k(u,d,y,S){for(var R=null,A=null,C=d,D=d=0,z=null;C!==null&&D<y.length;D++){C.index>D?(z=C,C=null):z=C.sibling;var I=g(u,C,y[D],S);if(I===null){C===null&&(C=z);break}e&&C&&I.alternate===null&&n(u,C),d=o(I,d,D),A===null?R=I:A.sibling=I,A=I,C=z}if(D===y.length)return t(u,C),ke&&pt(u,D),R;if(C===null){for(;D<y.length;D++)C=h(u,y[D],S),C!==null&&(d=o(C,d,D),A===null?R=C:A.sibling=C,A=C);return ke&&pt(u,D),R}for(C=r(u,C);D<y.length;D++)z=m(C,u,D,y[D],S),z!==null&&(e&&z.alternate!==null&&C.delete(z.key===null?D:z.key),d=o(z,d,D),A===null?R=z:A.sibling=z,A=z);return e&&C.forEach(function(H){return n(u,H)}),ke&&pt(u,D),R}function p(u,d,y,S){var R=dr(y);if(typeof R!="function")throw Error(V(150));if(y=R.call(y),y==null)throw Error(V(151));for(var A=R=null,C=d,D=d=0,z=null,I=y.next();C!==null&&!I.done;D++,I=y.next()){C.index>D?(z=C,C=null):z=C.sibling;var H=g(u,C,I.value,S);if(H===null){C===null&&(C=z);break}e&&C&&H.alternate===null&&n(u,C),d=o(H,d,D),A===null?R=H:A.sibling=H,A=H,C=z}if(I.done)return t(u,C),ke&&pt(u,D),R;if(C===null){for(;!I.done;D++,I=y.next())I=h(u,I.value,S),I!==null&&(d=o(I,d,D),A===null?R=I:A.sibling=I,A=I);return ke&&pt(u,D),R}for(C=r(u,C);!I.done;D++,I=y.next())I=m(C,u,D,I.value,S),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?D:I.key),d=o(I,d,D),A===null?R=I:A.sibling=I,A=I);return e&&C.forEach(function(E){return n(u,E)}),ke&&pt(u,D),R}function b(u,d,y,S){if(typeof y=="object"&&y!==null&&y.type===jt&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ki:e:{for(var R=y.key,A=d;A!==null;){if(A.key===R){if(R=y.type,R===jt){if(A.tag===7){t(u,A.sibling),d=i(A,y.props.children),d.return=u,u=d;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Zn&&Ru(R)===A.type){t(u,A.sibling),d=i(A,y.props),d.ref=vr(u,A,y),d.return=u,u=d;break e}t(u,A);break}else n(u,A);A=A.sibling}y.type===jt?(d=yt(y.props.children,u.mode,S,y.key),d.return=u,u=d):(S=Gi(y.type,y.key,y.props,null,u.mode,S),S.ref=vr(u,d,y),S.return=u,u=S)}return a(u);case Ct:e:{for(A=y.key;d!==null;){if(d.key===A)if(d.tag===4&&d.stateNode.containerInfo===y.containerInfo&&d.stateNode.implementation===y.implementation){t(u,d.sibling),d=i(d,y.children||[]),d.return=u,u=d;break e}else{t(u,d);break}else n(u,d);d=d.sibling}d=ka(y,u.mode,S),d.return=u,u=d}return a(u);case Zn:return A=y._init,b(u,d,A(y._payload),S)}if(_r(y))return k(u,d,y,S);if(dr(y))return p(u,d,y,S);Ii(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,d!==null&&d.tag===6?(t(u,d.sibling),d=i(d,y),d.return=u,u=d):(t(u,d),d=ya(y,u.mode,S),d.return=u,u=d),a(u)):t(u,d)}return b}var Yt=Pd(!0),Dd=Pd(!1),di={},In=dt(di),Yr=dt(di),Xr=dt(di);function gt(e){if(e===di)throw Error(V(174));return e}function rs(e,n){switch(ve(Xr,n),ve(Yr,e),ve(In,di),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Na(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Na(n,e)}we(In),ve(In,n)}function Xt(){we(In),we(Yr),we(Xr)}function Od(e){gt(Xr.current);var n=gt(In.current),t=Na(n,e.type);n!==t&&(ve(Yr,e),ve(In,t))}function is(e){Yr.current===e&&(we(In),we(Yr))}var Se=dt(0);function mo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var pa=[];function os(){for(var e=0;e<pa.length;e++)pa[e]._workInProgressVersionPrimary=null;pa.length=0}var Vi=Vn.ReactCurrentDispatcher,ma=Vn.ReactCurrentBatchConfig,St=0,xe=null,Pe=null,Te=null,ho=!1,Dr=!1,ei=0,ih=0;function Ue(){throw Error(V(321))}function as(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!xn(e[t],n[t]))return!1;return!0}function ls(e,n,t,r,i,o){if(St=o,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Vi.current=e===null||e.memoizedState===null?sh:uh,e=t(r,i),Dr){o=0;do{if(Dr=!1,ei=0,25<=o)throw Error(V(301));o+=1,Te=Pe=null,n.updateQueue=null,Vi.current=ch,e=t(r,i)}while(Dr)}if(Vi.current=vo,n=Pe!==null&&Pe.next!==null,St=0,Te=Pe=xe=null,ho=!1,n)throw Error(V(300));return e}function ss(){var e=ei!==0;return ei=0,e}function En(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?xe.memoizedState=Te=e:Te=Te.next=e,Te}function hn(){if(Pe===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var n=Te===null?xe.memoizedState:Te.next;if(n!==null)Te=n,Pe=e;else{if(e===null)throw Error(V(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Te===null?xe.memoizedState=Te=e:Te=Te.next=e}return Te}function ni(e,n){return typeof n=="function"?n(e):n}function ha(e){var n=hn(),t=n.queue;if(t===null)throw Error(V(311));t.lastRenderedReducer=e;var r=Pe,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,f=o;do{var w=f.lane;if((St&w)===w)s!==null&&(s=s.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var h={lane:w,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};s===null?(l=s=h,a=r):s=s.next=h,xe.lanes|=w,xt|=w}f=f.next}while(f!==null&&f!==o);s===null?a=r:s.next=l,xn(r,n.memoizedState)||(Qe=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,xe.lanes|=o,xt|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function va(e){var n=hn(),t=n.queue;if(t===null)throw Error(V(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);xn(o,n.memoizedState)||(Qe=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Fd(){}function Td(e,n){var t=xe,r=hn(),i=n(),o=!xn(r.memoizedState,i);if(o&&(r.memoizedState=i,Qe=!0),r=r.queue,us(Md.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Te!==null&&Te.memoizedState.tag&1){if(t.flags|=2048,ti(9,Nd.bind(null,t,r,i,n),void 0,null),Le===null)throw Error(V(349));St&30||Ld(t,n,i)}return i}function Ld(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=xe.updateQueue,n===null?(n={lastEffect:null,stores:null},xe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Nd(e,n,t,r){n.value=t,n.getSnapshot=r,Bd(n)&&Ud(e)}function Md(e,n,t){return t(function(){Bd(n)&&Ud(e)})}function Bd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!xn(e,t)}catch{return!0}}function Ud(e){var n=$n(e,1);n!==null&&Sn(n,e,1,-1)}function zu(e){var n=En();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:e},n.queue=e,e=e.dispatch=lh.bind(null,xe,e),[n.memoizedState,e]}function ti(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=xe.updateQueue,n===null?(n={lastEffect:null,stores:null},xe.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function $d(){return hn().memoizedState}function Hi(e,n,t,r){var i=En();xe.flags|=e,i.memoizedState=ti(1|n,t,void 0,r===void 0?null:r)}function Fo(e,n,t,r){var i=hn();r=r===void 0?null:r;var o=void 0;if(Pe!==null){var a=Pe.memoizedState;if(o=a.destroy,r!==null&&as(r,a.deps)){i.memoizedState=ti(n,t,o,r);return}}xe.flags|=e,i.memoizedState=ti(1|n,t,o,r)}function Eu(e,n){return Hi(8390656,8,e,n)}function us(e,n){return Fo(2048,8,e,n)}function Wd(e,n){return Fo(4,2,e,n)}function qd(e,n){return Fo(4,4,e,n)}function Vd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Hd(e,n,t){return t=t!=null?t.concat([e]):null,Fo(4,4,Vd.bind(null,n,e),t)}function cs(){}function Zd(e,n){var t=hn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&as(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Kd(e,n){var t=hn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&as(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Jd(e,n,t){return St&21?(xn(t,n)||(t=Yc(),xe.lanes|=t,xt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=t)}function oh(e,n){var t=me;me=t!==0&&4>t?t:4,e(!0);var r=ma.transition;ma.transition={};try{e(!1),n()}finally{me=t,ma.transition=r}}function Gd(){return hn().memoizedState}function ah(e,n,t){var r=ot(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Qd(e))Yd(n,t);else if(t=Cd(e,n,t,r),t!==null){var i=Ze();Sn(t,e,r,i),Xd(t,n,r)}}function lh(e,n,t){var r=ot(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Qd(e))Yd(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var a=n.lastRenderedState,l=o(a,t);if(i.hasEagerState=!0,i.eagerState=l,xn(l,a)){var s=n.interleaved;s===null?(i.next=i,ns(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=Cd(e,n,i,r),t!==null&&(i=Ze(),Sn(t,e,r,i),Xd(t,n,r))}}function Qd(e){var n=e.alternate;return e===xe||n!==null&&n===xe}function Yd(e,n){Dr=ho=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Xd(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ul(e,t)}}var vo={readContext:mn,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},sh={readContext:mn,useCallback:function(e,n){return En().memoizedState=[e,n===void 0?null:n],e},useContext:mn,useEffect:Eu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Hi(4194308,4,Vd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Hi(4194308,4,e,n)},useInsertionEffect:function(e,n){return Hi(4,2,e,n)},useMemo:function(e,n){var t=En();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=En();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ah.bind(null,xe,e),[r.memoizedState,e]},useRef:function(e){var n=En();return e={current:e},n.memoizedState=e},useState:zu,useDebugValue:cs,useDeferredValue:function(e){return En().memoizedState=e},useTransition:function(){var e=zu(!1),n=e[0];return e=oh.bind(null,e[1]),En().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=xe,i=En();if(ke){if(t===void 0)throw Error(V(407));t=t()}else{if(t=n(),Le===null)throw Error(V(349));St&30||Ld(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,Eu(Md.bind(null,r,o,e),[e]),r.flags|=2048,ti(9,Nd.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=En(),n=Le.identifierPrefix;if(ke){var t=Ln,r=Tn;t=(r&~(1<<32-bn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=ei++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=ih++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},uh={readContext:mn,useCallback:Zd,useContext:mn,useEffect:us,useImperativeHandle:Hd,useInsertionEffect:Wd,useLayoutEffect:qd,useMemo:Kd,useReducer:ha,useRef:$d,useState:function(){return ha(ni)},useDebugValue:cs,useDeferredValue:function(e){var n=hn();return Jd(n,Pe.memoizedState,e)},useTransition:function(){var e=ha(ni)[0],n=hn().memoizedState;return[e,n]},useMutableSource:Fd,useSyncExternalStore:Td,useId:Gd,unstable_isNewReconciler:!1},ch={readContext:mn,useCallback:Zd,useContext:mn,useEffect:us,useImperativeHandle:Hd,useInsertionEffect:Wd,useLayoutEffect:qd,useMemo:Kd,useReducer:va,useRef:$d,useState:function(){return va(ni)},useDebugValue:cs,useDeferredValue:function(e){var n=hn();return Pe===null?n.memoizedState=e:Jd(n,Pe.memoizedState,e)},useTransition:function(){var e=va(ni)[0],n=hn().memoizedState;return[e,n]},useMutableSource:Fd,useSyncExternalStore:Td,useId:Gd,unstable_isNewReconciler:!1};function er(e,n){try{var t="",r=n;do t+=Np(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function ga(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ll(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var dh=typeof WeakMap=="function"?WeakMap:Map;function ef(e,n,t){t=Nn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){wo||(wo=!0,gl=r),ll(e,n)},t}function nf(e,n,t){t=Nn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){ll(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){ll(e,n),typeof r!="function"&&(it===null?it=new Set([this]):it.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Cu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new dh;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Rh.bind(null,e,n,t),n.then(e,e))}function ju(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Au(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Nn(-1,1),n.tag=2,rt(t,n,1))),t.lanes|=1),e)}var fh=Vn.ReactCurrentOwner,Qe=!1;function He(e,n,t,r){n.child=e===null?Dd(n,null,t,r):Yt(n,e.child,t,r)}function Iu(e,n,t,r,i){t=t.render;var o=n.ref;return qt(n,i),r=ls(e,n,t,r,o,i),t=ss(),e!==null&&!Qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Wn(e,n,i)):(ke&&t&&Jl(n),n.flags|=1,He(e,n,r,i),n.child)}function Pu(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!ws(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,tf(e,n,o,r,i)):(e=Gi(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(t=t.compare,t=t!==null?t:Kr,t(a,r)&&e.ref===n.ref)return Wn(e,n,i)}return n.flags|=1,e=at(o,r),e.ref=n.ref,e.return=n,n.child=e}function tf(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(Kr(o,r)&&e.ref===n.ref)if(Qe=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Qe=!0);else return n.lanes=e.lanes,Wn(e,n,i)}return sl(e,n,t,r,i)}function rf(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Mt,nn),nn|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ve(Mt,nn),nn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,ve(Mt,nn),nn|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,ve(Mt,nn),nn|=r;return He(e,n,i,t),n.child}function of(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function sl(e,n,t,r,i){var o=Xe(t)?kt:qe.current;return o=Gt(n,o),qt(n,i),t=ls(e,n,t,r,o,i),r=ss(),e!==null&&!Qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Wn(e,n,i)):(ke&&r&&Jl(n),n.flags|=1,He(e,n,t,i),n.child)}function Du(e,n,t,r,i){if(Xe(t)){var o=!0;lo(n)}else o=!1;if(qt(n,i),n.stateNode===null)Zi(e,n),Id(n,t,r),al(n,t,r,i),r=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var s=a.context,f=t.contextType;typeof f=="object"&&f!==null?f=mn(f):(f=Xe(t)?kt:qe.current,f=Gt(n,f));var w=t.getDerivedStateFromProps,h=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==f)&&_u(n,a,r,f),Kn=!1;var g=n.memoizedState;a.state=g,po(n,r,a,i),s=n.memoizedState,l!==r||g!==s||Ye.current||Kn?(typeof w=="function"&&(ol(n,t,w,r),s=n.memoizedState),(l=Kn||xu(n,t,l,r,g,s,f))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),a.props=r,a.state=s,a.context=f,r=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,jd(e,n),l=n.memoizedProps,f=n.type===n.elementType?l:wn(n.type,l),a.props=f,h=n.pendingProps,g=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=mn(s):(s=Xe(t)?kt:qe.current,s=Gt(n,s));var m=t.getDerivedStateFromProps;(w=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||g!==s)&&_u(n,a,r,s),Kn=!1,g=n.memoizedState,a.state=g,po(n,r,a,i);var k=n.memoizedState;l!==h||g!==k||Ye.current||Kn?(typeof m=="function"&&(ol(n,t,m,r),k=n.memoizedState),(f=Kn||xu(n,t,f,r,g,k,s)||!1)?(w||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,k,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,k,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=k),a.props=r,a.state=k,a.context=s,r=f):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return ul(e,n,t,r,o,i)}function ul(e,n,t,r,i,o){of(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return i&&wu(n,t,!1),Wn(e,n,o);r=n.stateNode,fh.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=Yt(n,e.child,null,o),n.child=Yt(n,null,l,o)):He(e,n,l,o),n.memoizedState=r.state,i&&wu(n,t,!0),n.child}function af(e){var n=e.stateNode;n.pendingContext?gu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&gu(e,n.context,!1),rs(e,n.containerInfo)}function Ou(e,n,t,r,i){return Qt(),Ql(i),n.flags|=256,He(e,n,t,r),n.child}var cl={dehydrated:null,treeContext:null,retryLane:0};function dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function lf(e,n,t){var r=n.pendingProps,i=Se.current,o=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(Se,i&1),e===null)return rl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,o?(r=n.mode,o=n.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=No(a,r,0,null),e=yt(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=dl(t),n.memoizedState=cl,e):ds(n,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ph(e,n,a,r,l,i,t);if(o){o=r.fallback,a=n.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=at(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=at(l,o):(o=yt(o,a,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,a=e.child.memoizedState,a=a===null?dl(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~t,n.memoizedState=cl,r}return o=e.child,e=o.sibling,r=at(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ds(e,n){return n=No({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Pi(e,n,t,r){return r!==null&&Ql(r),Yt(n,e.child,null,t),e=ds(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ph(e,n,t,r,i,o,a){if(t)return n.flags&256?(n.flags&=-257,r=ga(Error(V(422))),Pi(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=No({mode:"visible",children:r.children},i,0,null),o=yt(o,i,a,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Yt(n,e.child,null,a),n.child.memoizedState=dl(a),n.memoizedState=cl,o);if(!(n.mode&1))return Pi(e,n,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=ga(o,r,void 0),Pi(e,n,a,r)}if(l=(a&e.childLanes)!==0,Qe||l){if(r=Le,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,$n(e,i),Sn(r,e,i,-1))}return gs(),r=ga(Error(V(421))),Pi(e,n,a,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=zh.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,tn=tt(i.nextSibling),rn=n,ke=!0,kn=null,e!==null&&(cn[dn++]=Tn,cn[dn++]=Ln,cn[dn++]=bt,Tn=e.id,Ln=e.overflow,bt=n),n=ds(n,r.children),n.flags|=4096,n)}function Fu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),il(e.return,n,t)}function wa(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function sf(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(He(e,n,r.children,t),r=Se.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fu(e,t,n);else if(e.tag===19)Fu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(Se,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&mo(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),wa(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&mo(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}wa(n,!0,t,null,o);break;case"together":wa(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Zi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Wn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),xt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(V(153));if(n.child!==null){for(e=n.child,t=at(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=at(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function mh(e,n,t){switch(n.tag){case 3:af(n),Qt();break;case 5:Od(n);break;case 1:Xe(n.type)&&lo(n);break;case 4:rs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;ve(co,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ve(Se,Se.current&1),n.flags|=128,null):t&n.child.childLanes?lf(e,n,t):(ve(Se,Se.current&1),e=Wn(e,n,t),e!==null?e.sibling:null);ve(Se,Se.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return sf(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Se,Se.current),r)break;return null;case 22:case 23:return n.lanes=0,rf(e,n,t)}return Wn(e,n,t)}var uf,fl,cf,df;uf=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};fl=function(){};cf=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,gt(In.current);var o=null;switch(t){case"input":i=Oa(e,i),r=Oa(e,r),o=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),o=[];break;case"textarea":i=La(e,i),r=La(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oo)}Ma(t,r);var a;t=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var l=i[f];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Ur.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var s=r[f];if(l=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&s!==l&&(s!=null||l!=null))if(f==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(o||(o=[]),o.push(f,t)),t=s;else f==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(f,s)):f==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(f,""+s):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Ur.hasOwnProperty(f)?(s!=null&&f==="onScroll"&&ge("scroll",e),o||l===s||(o=[])):(o=o||[]).push(f,s))}t&&(o=o||[]).push("style",t);var f=o;(n.updateQueue=f)&&(n.flags|=4)}};df=function(e,n,t,r){t!==r&&(n.flags|=4)};function gr(e,n){if(!ke)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function $e(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function hh(e,n,t){var r=n.pendingProps;switch(Gl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return Xe(n.type)&&ao(),$e(n),null;case 3:return r=n.stateNode,Xt(),we(Ye),we(qe),os(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ai(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,kn!==null&&(kl(kn),kn=null))),fl(e,n),$e(n),null;case 5:is(n);var i=gt(Xr.current);if(t=n.type,e!==null&&n.stateNode!=null)cf(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(V(166));return $e(n),null}if(e=gt(In.current),Ai(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Cn]=n,r[Qr]=o,e=(n.mode&1)!==0,t){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<zr.length;i++)ge(zr[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":qs(r,o),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ge("invalid",r);break;case"textarea":Hs(r,o),ge("invalid",r)}Ma(t,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&ji(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ji(r.textContent,l,e),i=["children",""+l]):Ur.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ge("scroll",r)}switch(t){case"input":bi(r),Vs(r,o,!0);break;case"textarea":bi(r),Zs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=oo)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Lc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[Cn]=n,e[Qr]=r,uf(e,n,!1,!1),n.stateNode=e;e:{switch(a=Ba(t,r),t){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<zr.length;i++)ge(zr[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":qs(e,r),i=Oa(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),ge("invalid",e);break;case"textarea":Hs(e,r),i=La(e,r),ge("invalid",e);break;default:i=r}Ma(t,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Bc(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Nc(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&$r(e,s):typeof s=="number"&&$r(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ur.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ge("scroll",e):s!=null&&Fl(e,o,s,a))}switch(t){case"input":bi(e),Vs(e,r,!1);break;case"textarea":bi(e),Zs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+st(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Bt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Bt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=oo)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return $e(n),null;case 6:if(e&&n.stateNode!=null)df(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(V(166));if(t=gt(Xr.current),gt(In.current),Ai(n)){if(r=n.stateNode,t=n.memoizedProps,r[Cn]=n,(o=r.nodeValue!==t)&&(e=rn,e!==null))switch(e.tag){case 3:ji(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ji(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Cn]=n,n.stateNode=r}return $e(n),null;case 13:if(we(Se),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&tn!==null&&n.mode&1&&!(n.flags&128))Ed(),Qt(),n.flags|=98560,o=!1;else if(o=Ai(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[Cn]=n}else Qt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;$e(n),o=!1}else kn!==null&&(kl(kn),kn=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Se.current&1?Oe===0&&(Oe=3):gs())),n.updateQueue!==null&&(n.flags|=4),$e(n),null);case 4:return Xt(),fl(e,n),e===null&&Jr(n.stateNode.containerInfo),$e(n),null;case 10:return es(n.type._context),$e(n),null;case 17:return Xe(n.type)&&ao(),$e(n),null;case 19:if(we(Se),o=n.memoizedState,o===null)return $e(n),null;if(r=(n.flags&128)!==0,a=o.rendering,a===null)if(r)gr(o,!1);else{if(Oe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=mo(e),a!==null){for(n.flags|=128,gr(o,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ve(Se,Se.current&1|2),n.child}e=e.sibling}o.tail!==null&&je()>nr&&(n.flags|=128,r=!0,gr(o,!1),n.lanes=4194304)}else{if(!r)if(e=mo(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),gr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ke)return $e(n),null}else 2*je()-o.renderingStartTime>nr&&t!==1073741824&&(n.flags|=128,r=!0,gr(o,!1),n.lanes=4194304);o.isBackwards?(a.sibling=n.child,n.child=a):(t=o.last,t!==null?t.sibling=a:n.child=a,o.last=a)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=je(),n.sibling=null,t=Se.current,ve(Se,r?t&1|2:t&1),n):($e(n),null);case 22:case 23:return vs(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?nn&1073741824&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),null;case 24:return null;case 25:return null}throw Error(V(156,n.tag))}function vh(e,n){switch(Gl(n),n.tag){case 1:return Xe(n.type)&&ao(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xt(),we(Ye),we(qe),os(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return is(n),null;case 13:if(we(Se),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(V(340));Qt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return we(Se),null;case 4:return Xt(),null;case 10:return es(n.type._context),null;case 22:case 23:return vs(),null;case 24:return null;default:return null}}var Di=!1,We=!1,gh=typeof WeakSet=="function"?WeakSet:Set,ee=null;function Nt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Re(e,n,r)}else t.current=null}function pl(e,n,t){try{t()}catch(r){Re(e,n,r)}}var Tu=!1;function wh(e,n){if(Ga=to,e=md(),Kl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var a=0,l=-1,s=-1,f=0,w=0,h=e,g=null;n:for(;;){for(var m;h!==t||i!==0&&h.nodeType!==3||(l=a+i),h!==o||r!==0&&h.nodeType!==3||(s=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)g=h,h=m;for(;;){if(h===e)break n;if(g===t&&++f===i&&(l=a),g===o&&++w===r&&(s=a),(m=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=m}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Qa={focusedElem:e,selectionRange:t},to=!1,ee=n;ee!==null;)if(n=ee,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ee=e;else for(;ee!==null;){n=ee;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var p=k.memoizedProps,b=k.memoizedState,u=n.stateNode,d=u.getSnapshotBeforeUpdate(n.elementType===n.type?p:wn(n.type,p),b);u.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(S){Re(n,n.return,S)}if(e=n.sibling,e!==null){e.return=n.return,ee=e;break}ee=n.return}return k=Tu,Tu=!1,k}function Or(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&pl(n,t,o)}i=i.next}while(i!==r)}}function To(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ml(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function ff(e){var n=e.alternate;n!==null&&(e.alternate=null,ff(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Cn],delete n[Qr],delete n[el],delete n[eh],delete n[nh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pf(e){return e.tag===5||e.tag===3||e.tag===4}function Lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=oo));else if(r!==4&&(e=e.child,e!==null))for(hl(e,n,t),e=e.sibling;e!==null;)hl(e,n,t),e=e.sibling}function vl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vl(e,n,t),e=e.sibling;e!==null;)vl(e,n,t),e=e.sibling}var Ne=null,yn=!1;function Hn(e,n,t){for(t=t.child;t!==null;)mf(e,n,t),t=t.sibling}function mf(e,n,t){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(Co,t)}catch{}switch(t.tag){case 5:We||Nt(t,n);case 6:var r=Ne,i=yn;Ne=null,Hn(e,n,t),Ne=r,yn=i,Ne!==null&&(yn?(e=Ne,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ne.removeChild(t.stateNode));break;case 18:Ne!==null&&(yn?(e=Ne,t=t.stateNode,e.nodeType===8?da(e.parentNode,t):e.nodeType===1&&da(e,t),Hr(e)):da(Ne,t.stateNode));break;case 4:r=Ne,i=yn,Ne=t.stateNode.containerInfo,yn=!0,Hn(e,n,t),Ne=r,yn=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&pl(t,n,a),i=i.next}while(i!==r)}Hn(e,n,t);break;case 1:if(!We&&(Nt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){Re(t,n,l)}Hn(e,n,t);break;case 21:Hn(e,n,t);break;case 22:t.mode&1?(We=(r=We)||t.memoizedState!==null,Hn(e,n,t),We=r):Hn(e,n,t);break;default:Hn(e,n,t)}}function Nu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new gh),n.forEach(function(r){var i=Eh.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function gn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ne=l.stateNode,yn=!1;break e;case 3:Ne=l.stateNode.containerInfo,yn=!0;break e;case 4:Ne=l.stateNode.containerInfo,yn=!0;break e}l=l.return}if(Ne===null)throw Error(V(160));mf(o,a,i),Ne=null,yn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(f){Re(i,n,f)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)hf(n,e),n=n.sibling}function hf(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gn(n,e),zn(e),r&4){try{Or(3,e,e.return),To(3,e)}catch(p){Re(e,e.return,p)}try{Or(5,e,e.return)}catch(p){Re(e,e.return,p)}}break;case 1:gn(n,e),zn(e),r&512&&t!==null&&Nt(t,t.return);break;case 5:if(gn(n,e),zn(e),r&512&&t!==null&&Nt(t,t.return),e.flags&32){var i=e.stateNode;try{$r(i,"")}catch(p){Re(e,e.return,p)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=t!==null?t.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Fc(i,o),Ba(l,a);var f=Ba(l,o);for(a=0;a<s.length;a+=2){var w=s[a],h=s[a+1];w==="style"?Bc(i,h):w==="dangerouslySetInnerHTML"?Nc(i,h):w==="children"?$r(i,h):Fl(i,w,h,f)}switch(l){case"input":Fa(i,o);break;case"textarea":Tc(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Bt(i,!!o.multiple,m,!1):g!==!!o.multiple&&(o.defaultValue!=null?Bt(i,!!o.multiple,o.defaultValue,!0):Bt(i,!!o.multiple,o.multiple?[]:"",!1))}i[Qr]=o}catch(p){Re(e,e.return,p)}}break;case 6:if(gn(n,e),zn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(p){Re(e,e.return,p)}}break;case 3:if(gn(n,e),zn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Hr(n.containerInfo)}catch(p){Re(e,e.return,p)}break;case 4:gn(n,e),zn(e);break;case 13:gn(n,e),zn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ms=je())),r&4&&Nu(e);break;case 22:if(w=t!==null&&t.memoizedState!==null,e.mode&1?(We=(f=We)||w,gn(n,e),We=f):gn(n,e),zn(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!w&&e.mode&1)for(ee=e,w=e.child;w!==null;){for(h=ee=w;ee!==null;){switch(g=ee,m=g.child,g.tag){case 0:case 11:case 14:case 15:Or(4,g,g.return);break;case 1:Nt(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(p){Re(r,t,p)}}break;case 5:Nt(g,g.return);break;case 22:if(g.memoizedState!==null){Bu(h);continue}}m!==null?(m.return=g,ee=m):Bu(h)}w=w.sibling}e:for(w=null,h=e;;){if(h.tag===5){if(w===null){w=h;try{i=h.stateNode,f?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,s=h.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Mc("display",a))}catch(p){Re(e,e.return,p)}}}else if(h.tag===6){if(w===null)try{h.stateNode.nodeValue=f?"":h.memoizedProps}catch(p){Re(e,e.return,p)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;w===h&&(w=null),h=h.return}w===h&&(w=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:gn(n,e),zn(e),r&4&&Nu(e);break;case 21:break;default:gn(n,e),zn(e)}}function zn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(pf(t)){var r=t;break e}t=t.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($r(i,""),r.flags&=-33);var o=Lu(e);vl(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Lu(e);hl(e,l,a);break;default:throw Error(V(161))}}catch(s){Re(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function yh(e,n,t){ee=e,vf(e)}function vf(e,n,t){for(var r=(e.mode&1)!==0;ee!==null;){var i=ee,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Di;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||We;l=Di;var f=We;if(Di=a,(We=s)&&!f)for(ee=i;ee!==null;)a=ee,s=a.child,a.tag===22&&a.memoizedState!==null?Uu(i):s!==null?(s.return=a,ee=s):Uu(i);for(;o!==null;)ee=o,vf(o),o=o.sibling;ee=i,Di=l,We=f}Mu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ee=o):Mu(e)}}function Mu(e){for(;ee!==null;){var n=ee;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:We||To(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!We)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:wn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Su(n,o,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Su(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var f=n.alternate;if(f!==null){var w=f.memoizedState;if(w!==null){var h=w.dehydrated;h!==null&&Hr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}We||n.flags&512&&ml(n)}catch(g){Re(n,n.return,g)}}if(n===e){ee=null;break}if(t=n.sibling,t!==null){t.return=n.return,ee=t;break}ee=n.return}}function Bu(e){for(;ee!==null;){var n=ee;if(n===e){ee=null;break}var t=n.sibling;if(t!==null){t.return=n.return,ee=t;break}ee=n.return}}function Uu(e){for(;ee!==null;){var n=ee;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{To(4,n)}catch(s){Re(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){Re(n,i,s)}}var o=n.return;try{ml(n)}catch(s){Re(n,o,s)}break;case 5:var a=n.return;try{ml(n)}catch(s){Re(n,a,s)}}}catch(s){Re(n,n.return,s)}if(n===e){ee=null;break}var l=n.sibling;if(l!==null){l.return=n.return,ee=l;break}ee=n.return}}var kh=Math.ceil,go=Vn.ReactCurrentDispatcher,fs=Vn.ReactCurrentOwner,pn=Vn.ReactCurrentBatchConfig,ce=0,Le=null,Ae=null,Me=0,nn=0,Mt=dt(0),Oe=0,ri=null,xt=0,Lo=0,ps=0,Fr=null,Ge=null,ms=0,nr=1/0,On=null,wo=!1,gl=null,it=null,Oi=!1,Yn=null,yo=0,Tr=0,wl=null,Ki=-1,Ji=0;function Ze(){return ce&6?je():Ki!==-1?Ki:Ki=je()}function ot(e){return e.mode&1?ce&2&&Me!==0?Me&-Me:rh.transition!==null?(Ji===0&&(Ji=Yc()),Ji):(e=me,e!==0||(e=window.event,e=e===void 0?16:od(e.type)),e):1}function Sn(e,n,t,r){if(50<Tr)throw Tr=0,wl=null,Error(V(185));si(e,t,r),(!(ce&2)||e!==Le)&&(e===Le&&(!(ce&2)&&(Lo|=t),Oe===4&&Gn(e,Me)),en(e,r),t===1&&ce===0&&!(n.mode&1)&&(nr=je()+500,Do&&ft()))}function en(e,n){var t=e.callbackNode;rm(e,n);var r=no(e,e===Le?Me:0);if(r===0)t!==null&&Gs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Gs(t),n===1)e.tag===0?th($u.bind(null,e)):_d($u.bind(null,e)),Ym(function(){!(ce&6)&&ft()}),t=null;else{switch(Xc(r)){case 1:t=Bl;break;case 4:t=Gc;break;case 16:t=eo;break;case 536870912:t=Qc;break;default:t=eo}t=_f(t,gf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function gf(e,n){if(Ki=-1,Ji=0,ce&6)throw Error(V(327));var t=e.callbackNode;if(Vt()&&e.callbackNode!==t)return null;var r=no(e,e===Le?Me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ko(e,r);else{n=r;var i=ce;ce|=2;var o=yf();(Le!==e||Me!==n)&&(On=null,nr=je()+500,wt(e,n));do try{xh();break}catch(l){wf(e,l)}while(!0);Xl(),go.current=o,ce=i,Ae!==null?n=0:(Le=null,Me=0,n=Oe)}if(n!==0){if(n===2&&(i=Va(e),i!==0&&(r=i,n=yl(e,i))),n===1)throw t=ri,wt(e,0),Gn(e,r),en(e,je()),t;if(n===6)Gn(e,r);else{if(i=e.current.alternate,!(r&30)&&!bh(i)&&(n=ko(e,r),n===2&&(o=Va(e),o!==0&&(r=o,n=yl(e,o))),n===1))throw t=ri,wt(e,0),Gn(e,r),en(e,je()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(V(345));case 2:mt(e,Ge,On);break;case 3:if(Gn(e,r),(r&130023424)===r&&(n=ms+500-je(),10<n)){if(no(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xa(mt.bind(null,e,Ge,On),n);break}mt(e,Ge,On);break;case 4:if(Gn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var a=31-bn(r);o=1<<a,a=n[a],a>i&&(i=a),r&=~o}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kh(r/1960))-r,10<r){e.timeoutHandle=Xa(mt.bind(null,e,Ge,On),r);break}mt(e,Ge,On);break;case 5:mt(e,Ge,On);break;default:throw Error(V(329))}}}return en(e,je()),e.callbackNode===t?gf.bind(null,e):null}function yl(e,n){var t=Fr;return e.current.memoizedState.isDehydrated&&(wt(e,n).flags|=256),e=ko(e,n),e!==2&&(n=Ge,Ge=t,n!==null&&kl(n)),e}function kl(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function bh(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!xn(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Gn(e,n){for(n&=~ps,n&=~Lo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-bn(n),r=1<<t;e[t]=-1,n&=~r}}function $u(e){if(ce&6)throw Error(V(327));Vt();var n=no(e,0);if(!(n&1))return en(e,je()),null;var t=ko(e,n);if(e.tag!==0&&t===2){var r=Va(e);r!==0&&(n=r,t=yl(e,r))}if(t===1)throw t=ri,wt(e,0),Gn(e,n),en(e,je()),t;if(t===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,mt(e,Ge,On),en(e,je()),null}function hs(e,n){var t=ce;ce|=1;try{return e(n)}finally{ce=t,ce===0&&(nr=je()+500,Do&&ft())}}function _t(e){Yn!==null&&Yn.tag===0&&!(ce&6)&&Vt();var n=ce;ce|=1;var t=pn.transition,r=me;try{if(pn.transition=null,me=1,e)return e()}finally{me=r,pn.transition=t,ce=n,!(ce&6)&&ft()}}function vs(){nn=Mt.current,we(Mt)}function wt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Qm(t)),Ae!==null)for(t=Ae.return;t!==null;){var r=t;switch(Gl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ao();break;case 3:Xt(),we(Ye),we(qe),os();break;case 5:is(r);break;case 4:Xt();break;case 13:we(Se);break;case 19:we(Se);break;case 10:es(r.type._context);break;case 22:case 23:vs()}t=t.return}if(Le=e,Ae=e=at(e.current,null),Me=nn=n,Oe=0,ri=null,ps=Lo=xt=0,Ge=Fr=null,vt!==null){for(n=0;n<vt.length;n++)if(t=vt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}t.pending=r}vt=null}return e}function wf(e,n){do{var t=Ae;try{if(Xl(),Vi.current=vo,ho){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ho=!1}if(St=0,Te=Pe=xe=null,Dr=!1,ei=0,fs.current=null,t===null||t.return===null){Oe=1,ri=n,Ae=null;break}e:{var o=e,a=t.return,l=t,s=n;if(n=Me,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var f=s,w=l,h=w.tag;if(!(w.mode&1)&&(h===0||h===11||h===15)){var g=w.alternate;g?(w.updateQueue=g.updateQueue,w.memoizedState=g.memoizedState,w.lanes=g.lanes):(w.updateQueue=null,w.memoizedState=null)}var m=ju(a);if(m!==null){m.flags&=-257,Au(m,a,l,o,n),m.mode&1&&Cu(o,f,n),n=m,s=f;var k=n.updateQueue;if(k===null){var p=new Set;p.add(s),n.updateQueue=p}else k.add(s);break e}else{if(!(n&1)){Cu(o,f,n),gs();break e}s=Error(V(426))}}else if(ke&&l.mode&1){var b=ju(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Au(b,a,l,o,n),Ql(er(s,l));break e}}o=s=er(s,l),Oe!==4&&(Oe=2),Fr===null?Fr=[o]:Fr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var u=ef(o,s,n);bu(o,u);break e;case 1:l=s;var d=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(it===null||!it.has(y)))){o.flags|=65536,n&=-n,o.lanes|=n;var S=nf(o,l,n);bu(o,S);break e}}o=o.return}while(o!==null)}bf(t)}catch(R){n=R,Ae===t&&t!==null&&(Ae=t=t.return);continue}break}while(!0)}function yf(){var e=go.current;return go.current=vo,e===null?vo:e}function gs(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Le===null||!(xt&268435455)&&!(Lo&268435455)||Gn(Le,Me)}function ko(e,n){var t=ce;ce|=2;var r=yf();(Le!==e||Me!==n)&&(On=null,wt(e,n));do try{Sh();break}catch(i){wf(e,i)}while(!0);if(Xl(),ce=t,go.current=r,Ae!==null)throw Error(V(261));return Le=null,Me=0,Oe}function Sh(){for(;Ae!==null;)kf(Ae)}function xh(){for(;Ae!==null&&!Kp();)kf(Ae)}function kf(e){var n=xf(e.alternate,e,nn);e.memoizedProps=e.pendingProps,n===null?bf(e):Ae=n,fs.current=null}function bf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=vh(t,n),t!==null){t.flags&=32767,Ae=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Oe=6,Ae=null;return}}else if(t=hh(t,n,nn),t!==null){Ae=t;return}if(n=n.sibling,n!==null){Ae=n;return}Ae=n=e}while(n!==null);Oe===0&&(Oe=5)}function mt(e,n,t){var r=me,i=pn.transition;try{pn.transition=null,me=1,_h(e,n,t,r)}finally{pn.transition=i,me=r}return null}function _h(e,n,t,r){do Vt();while(Yn!==null);if(ce&6)throw Error(V(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(im(e,o),e===Le&&(Ae=Le=null,Me=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Oi||(Oi=!0,_f(eo,function(){return Vt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=pn.transition,pn.transition=null;var a=me;me=1;var l=ce;ce|=4,fs.current=null,wh(e,t),hf(t,e),qm(Qa),to=!!Ga,Qa=Ga=null,e.current=t,yh(t),Jp(),ce=l,me=a,pn.transition=o}else e.current=t;if(Oi&&(Oi=!1,Yn=e,yo=i),o=e.pendingLanes,o===0&&(it=null),Yp(t.stateNode),en(e,je()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(wo)throw wo=!1,e=gl,gl=null,e;return yo&1&&e.tag!==0&&Vt(),o=e.pendingLanes,o&1?e===wl?Tr++:(Tr=0,wl=e):Tr=0,ft(),null}function Vt(){if(Yn!==null){var e=Xc(yo),n=pn.transition,t=me;try{if(pn.transition=null,me=16>e?16:e,Yn===null)var r=!1;else{if(e=Yn,Yn=null,yo=0,ce&6)throw Error(V(331));var i=ce;for(ce|=4,ee=e.current;ee!==null;){var o=ee,a=o.child;if(ee.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var f=l[s];for(ee=f;ee!==null;){var w=ee;switch(w.tag){case 0:case 11:case 15:Or(8,w,o)}var h=w.child;if(h!==null)h.return=w,ee=h;else for(;ee!==null;){w=ee;var g=w.sibling,m=w.return;if(ff(w),w===f){ee=null;break}if(g!==null){g.return=m,ee=g;break}ee=m}}}var k=o.alternate;if(k!==null){var p=k.child;if(p!==null){k.child=null;do{var b=p.sibling;p.sibling=null,p=b}while(p!==null)}}ee=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,ee=a;else e:for(;ee!==null;){if(o=ee,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Or(9,o,o.return)}var u=o.sibling;if(u!==null){u.return=o.return,ee=u;break e}ee=o.return}}var d=e.current;for(ee=d;ee!==null;){a=ee;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,ee=y;else e:for(a=d;ee!==null;){if(l=ee,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:To(9,l)}}catch(R){Re(l,l.return,R)}if(l===a){ee=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,ee=S;break e}ee=l.return}}if(ce=i,ft(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(Co,e)}catch{}r=!0}return r}finally{me=t,pn.transition=n}}return!1}function Wu(e,n,t){n=er(t,n),n=ef(e,n,1),e=rt(e,n,1),n=Ze(),e!==null&&(si(e,1,n),en(e,n))}function Re(e,n,t){if(e.tag===3)Wu(e,e,t);else for(;n!==null;){if(n.tag===3){Wu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(it===null||!it.has(r))){e=er(t,e),e=nf(n,e,1),n=rt(n,e,1),e=Ze(),n!==null&&(si(n,1,e),en(n,e));break}}n=n.return}}function Rh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ze(),e.pingedLanes|=e.suspendedLanes&t,Le===e&&(Me&t)===t&&(Oe===4||Oe===3&&(Me&130023424)===Me&&500>je()-ms?wt(e,0):ps|=t),en(e,n)}function Sf(e,n){n===0&&(e.mode&1?(n=_i,_i<<=1,!(_i&130023424)&&(_i=4194304)):n=1);var t=Ze();e=$n(e,n),e!==null&&(si(e,n,t),en(e,t))}function zh(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Sf(e,t)}function Eh(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(n),Sf(e,t)}var xf;xf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ye.current)Qe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Qe=!1,mh(e,n,t);Qe=!!(e.flags&131072)}else Qe=!1,ke&&n.flags&1048576&&Rd(n,uo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Zi(e,n),e=n.pendingProps;var i=Gt(n,qe.current);qt(n,t),i=ls(null,n,r,e,i,t);var o=ss();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Xe(r)?(o=!0,lo(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ts(n),i.updater=Oo,n.stateNode=i,i._reactInternals=n,al(n,r,e,t),n=ul(null,n,r,!0,o,t)):(n.tag=0,ke&&o&&Jl(n),He(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Zi(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=jh(r),e=wn(r,e),i){case 0:n=sl(null,n,r,e,t);break e;case 1:n=Du(null,n,r,e,t);break e;case 11:n=Iu(null,n,r,e,t);break e;case 14:n=Pu(null,n,r,wn(r.type,e),t);break e}throw Error(V(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:wn(r,i),sl(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:wn(r,i),Du(e,n,r,i,t);case 3:e:{if(af(n),e===null)throw Error(V(387));r=n.pendingProps,o=n.memoizedState,i=o.element,jd(e,n),po(n,r,null,t);var a=n.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=er(Error(V(423)),n),n=Ou(e,n,r,t,i);break e}else if(r!==i){i=er(Error(V(424)),n),n=Ou(e,n,r,t,i);break e}else for(tn=tt(n.stateNode.containerInfo.firstChild),rn=n,ke=!0,kn=null,t=Dd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Qt(),r===i){n=Wn(e,n,t);break e}He(e,n,r,t)}n=n.child}return n;case 5:return Od(n),e===null&&rl(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Ya(r,i)?a=null:o!==null&&Ya(r,o)&&(n.flags|=32),of(e,n),He(e,n,a,t),n.child;case 6:return e===null&&rl(n),null;case 13:return lf(e,n,t);case 4:return rs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Yt(n,null,r,t):He(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:wn(r,i),Iu(e,n,r,i,t);case 7:return He(e,n,n.pendingProps,t),n.child;case 8:return He(e,n,n.pendingProps.children,t),n.child;case 12:return He(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,a=i.value,ve(co,r._currentValue),r._currentValue=a,o!==null)if(xn(o.value,a)){if(o.children===i.children&&!Ye.current){n=Wn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Nn(-1,t&-t),s.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var w=f.pending;w===null?s.next=s:(s.next=w.next,w.next=s),f.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),il(o.return,t,n),l.lanes|=t;break}s=s.next}}else if(o.tag===10)a=o.type===n.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),il(a,t,n),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===n){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}He(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,qt(n,t),i=mn(i),r=r(i),n.flags|=1,He(e,n,r,t),n.child;case 14:return r=n.type,i=wn(r,n.pendingProps),i=wn(r.type,i),Pu(e,n,r,i,t);case 15:return tf(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:wn(r,i),Zi(e,n),n.tag=1,Xe(r)?(e=!0,lo(n)):e=!1,qt(n,t),Id(n,r,i),al(n,r,i,t),ul(null,n,r,!0,e,t);case 19:return sf(e,n,t);case 22:return rf(e,n,t)}throw Error(V(156,n.tag))};function _f(e,n){return Jc(e,n)}function Ch(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(e,n,t,r){return new Ch(e,n,t,r)}function ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jh(e){if(typeof e=="function")return ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ll)return 11;if(e===Nl)return 14}return 2}function at(e,n){var t=e.alternate;return t===null?(t=fn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Gi(e,n,t,r,i,o){var a=2;if(r=e,typeof e=="function")ws(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case jt:return yt(t.children,i,o,n);case Tl:a=8,i|=8;break;case Aa:return e=fn(12,t,n,i|2),e.elementType=Aa,e.lanes=o,e;case Ia:return e=fn(13,t,n,i),e.elementType=Ia,e.lanes=o,e;case Pa:return e=fn(19,t,n,i),e.elementType=Pa,e.lanes=o,e;case Pc:return No(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ac:a=10;break e;case Ic:a=9;break e;case Ll:a=11;break e;case Nl:a=14;break e;case Zn:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return n=fn(a,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function yt(e,n,t,r){return e=fn(7,e,r,n),e.lanes=t,e}function No(e,n,t,r){return e=fn(22,e,r,n),e.elementType=Pc,e.lanes=t,e.stateNode={isHidden:!1},e}function ya(e,n,t){return e=fn(6,e,null,n),e.lanes=t,e}function ka(e,n,t){return n=fn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Ah(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ea(0),this.expirationTimes=ea(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ea(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ys(e,n,t,r,i,o,a,l,s){return e=new Ah(e,n,t,l,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=fn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ts(o),e}function Ih(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ct,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Rf(e){if(!e)return ut;e=e._reactInternals;e:{if(zt(e)!==e||e.tag!==1)throw Error(V(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Xe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(V(171))}if(e.tag===1){var t=e.type;if(Xe(t))return xd(e,t,n)}return n}function zf(e,n,t,r,i,o,a,l,s){return e=ys(t,r,!0,e,i,o,a,l,s),e.context=Rf(null),t=e.current,r=Ze(),i=ot(t),o=Nn(r,i),o.callback=n??null,rt(t,o,i),e.current.lanes=i,si(e,i,r),en(e,r),e}function Mo(e,n,t,r){var i=n.current,o=Ze(),a=ot(i);return t=Rf(t),n.context===null?n.context=t:n.pendingContext=t,n=Nn(o,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=rt(i,n,a),e!==null&&(Sn(e,i,a,o),qi(e,i,a)),a}function bo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ks(e,n){qu(e,n),(e=e.alternate)&&qu(e,n)}function Ph(){return null}var Ef=typeof reportError=="function"?reportError:function(e){console.error(e)};function bs(e){this._internalRoot=e}Bo.prototype.render=bs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(V(409));Mo(e,n,null,null)};Bo.prototype.unmount=bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;_t(function(){Mo(null,e,null,null)}),n[Un]=null}};function Bo(e){this._internalRoot=e}Bo.prototype.unstable_scheduleHydration=function(e){if(e){var n=td();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Jn.length&&n!==0&&n<Jn[t].priority;t++);Jn.splice(t,0,e),t===0&&id(e)}};function Ss(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vu(){}function Dh(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var f=bo(a);o.call(f)}}var a=zf(n,r,e,0,null,!1,!1,"",Vu);return e._reactRootContainer=a,e[Un]=a.current,Jr(e.nodeType===8?e.parentNode:e),_t(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var f=bo(s);l.call(f)}}var s=ys(e,0,!1,null,null,!1,!1,"",Vu);return e._reactRootContainer=s,e[Un]=s.current,Jr(e.nodeType===8?e.parentNode:e),_t(function(){Mo(n,s,t,r)}),s}function $o(e,n,t,r,i){var o=t._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=bo(a);l.call(s)}}Mo(n,a,e,i)}else a=Dh(t,n,e,i,r);return bo(a)}ed=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Rr(n.pendingLanes);t!==0&&(Ul(n,t|1),en(n,je()),!(ce&6)&&(nr=je()+500,ft()))}break;case 13:_t(function(){var r=$n(e,1);if(r!==null){var i=Ze();Sn(r,e,1,i)}}),ks(e,1)}};$l=function(e){if(e.tag===13){var n=$n(e,134217728);if(n!==null){var t=Ze();Sn(n,e,134217728,t)}ks(e,134217728)}};nd=function(e){if(e.tag===13){var n=ot(e),t=$n(e,n);if(t!==null){var r=Ze();Sn(t,e,n,r)}ks(e,n)}};td=function(){return me};rd=function(e,n){var t=me;try{return me=e,n()}finally{me=t}};$a=function(e,n,t){switch(n){case"input":if(Fa(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Po(r);if(!i)throw Error(V(90));Oc(r),Fa(r,i)}}}break;case"textarea":Tc(e,t);break;case"select":n=t.value,n!=null&&Bt(e,!!t.multiple,n,!1)}};Wc=hs;qc=_t;var Oh={usingClientEntryPoint:!1,Events:[ci,Dt,Po,Uc,$c,hs]},wr={findFiberByHostInstance:ht,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Fh={bundleType:wr.bundleType,version:wr.version,rendererPackageName:wr.rendererPackageName,rendererConfig:wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zc(e),e===null?null:e.stateNode},findFiberByHostInstance:wr.findFiberByHostInstance||Ph,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fi.isDisabled&&Fi.supportsFiber)try{Co=Fi.inject(Fh),An=Fi}catch{}}an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oh;an.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ss(n))throw Error(V(200));return Ih(e,n,null,t)};an.createRoot=function(e,n){if(!Ss(e))throw Error(V(299));var t=!1,r="",i=Ef;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=ys(e,1,!1,null,null,t,!1,r,i),e[Un]=n.current,Jr(e.nodeType===8?e.parentNode:e),new bs(n)};an.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=Zc(n),e=e===null?null:e.stateNode,e};an.flushSync=function(e){return _t(e)};an.hydrate=function(e,n,t){if(!Uo(n))throw Error(V(200));return $o(null,e,n,!0,t)};an.hydrateRoot=function(e,n,t){if(!Ss(e))throw Error(V(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",a=Ef;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=zf(n,null,e,1,t??null,i,!1,o,a),e[Un]=n.current,Jr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Bo(n)};an.render=function(e,n,t){if(!Uo(n))throw Error(V(200));return $o(null,e,n,!1,t)};an.unmountComponentAtNode=function(e){if(!Uo(e))throw Error(V(40));return e._reactRootContainer?(_t(function(){$o(null,null,e,!1,function(){e._reactRootContainer=null,e[Un]=null})}),!0):!1};an.unstable_batchedUpdates=hs;an.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Uo(t))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return $o(e,n,t,!1,r)};an.version="18.2.0-next-9e3b772b8-20220608";function Cf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cf)}catch(e){console.error(e)}}Cf(),Rc.exports=an;var Th=Rc.exports,Hu=Th;Ca.createRoot=Hu.createRoot,Ca.hydrateRoot=Hu.hydrateRoot;class Lh extends Ea.Component{constructor(t){super(t);gi(this,"container");gi(this,"player",null);gi(this,"isLoading",!1);this.container=Ea.createRef()}componentDidMount(){this.player=window.RufflePlayer.newest().createPlayer(),this.player.id="player",this.player.addEventListener("loadedmetadata",()=>{this.props.onLoadedMetadata&&this.props.onLoadedMetadata(this.player.metadata)}),this.isLoading=!1,this.container.current.appendChild(this.player)}componentWillUnmount(){var t;(t=this.player)==null||t.remove(),this.player=null,this.isLoading=!1}render(){return Y.jsx("div",{id:this.props.id,ref:this.container,onDragEnter:this.props.onDragEnter,onDragLeave:this.props.onDragLeave,onDragOver:this.props.onDragOver,onDrop:this.props.onDragDrop,children:this.props.children})}reload(){var t;this.isLoading||(this.isLoading=!0,(t=this.player)==null||t.reload().finally(()=>{this.isLoading=!1}))}loadUrl(t,r){var i;this.isLoading||(this.isLoading=!0,(i=this.player)==null||i.load({url:t,...this.props.baseConfig,...r},!1).finally(()=>{this.isLoading=!1}))}loadFile(t){this.isLoading||(this.isLoading=!0,new Response(t).arrayBuffer().then(r=>{var i;return(i=this.player)==null?void 0:i.load({data:r,...this.props.baseConfig},!1)}).finally(()=>{this.isLoading=!1}))}}const Nh=""+new URL("../CatNinja.gif",import.meta.url).href,Zu={Normal:"Normal",Practice:"Practice"};function Mh({sampleSelectionInput:e,selectedSample:n,setSelectedSample:t,setSelectedFilename:r,onSelectUrl:i}){const[o,a]=De.useState([]),l=f=>{const w=f.target,h=parseInt(w.value,10);o[h]&&s(o[h])},s=De.useCallback(f=>{i(f.location,f.config??{}),t(f),r(null)},[i,r,t]);return De.useEffect(()=>{(async()=>{const f=await fetch("swfs.json");if(f.ok){const w=await f.json();a(w.swfs),w.swfs.length>0&&s(w.swfs[0])}})()},[s]),Y.jsxs("div",{id:"sample-swfs-container",className:o.length==0?"hidden":"",children:[Y.jsx("span",{id:"sample-swfs-label",children:"Cat Ninja ROM:"}),Y.jsxs("select",{id:"sample-swfs","aria-describedby":"sample-swfs-label",onChange:l,ref:e,children:[o.map((f,w)=>Y.jsx(De.Fragment,{children:f.type==null&&Y.jsx("option",{value:w,children:f.title})},w)),Object.keys(Zu).map(f=>Y.jsx("optgroup",{label:Zu[f],children:o.map((w,h)=>Y.jsx(De.Fragment,{children:w.type==f&&Y.jsx("option",{value:h,children:w.title})},h))},f))]}),Y.jsxs("div",{id:"author-container",className:n!=null&&n.author?"":"hidden",children:[Y.jsx("span",{children:"Author: "}),Y.jsx("a",{href:n==null?void 0:n.authorLink,target:"_blank",id:"author",children:n==null?void 0:n.author})]})]})}function Bh({allowUrlLoading:e,allowSampleSwfs:n,onToggleMetadata:t,onReloadMovie:r,onSelectUrl:i,onSelectFile:o,selectedFilename:a,setSelectedFilename:l,onFileDragLeave:s,onFileDragOver:f,onFileDragDrop:w}){const h=De.useRef(null),g=De.useRef(null),m=De.useRef(null),[k,p]=De.useState(null),b=()=>{var C;(C=h.current)==null||C.click()},u=C=>{i(C,{}),l(null),p(null),m.current&&(m.current.selectedIndex=-1)},d=C=>{o(C),p(null),l(C.name),m.current&&(m.current.selectedIndex=-1)},y=C=>{var D;C.preventDefault(),(D=g.current)!=null&&D.value&&u(g.current.value)},S=C=>{const D=C.target;D!=null&&D.files&&(D==null?void 0:D.files.length)>0&&D.files[0]&&d(D.files[0])},R=()=>{confirm("Reload the current SWF?")&&r()},A=navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.platform==="MacIntel"&&typeof navigator.standalone<"u";return De.useEffect(()=>{a!=null&&(p(null),m.current&&(m.current.selectedIndex=-1))},[a]),Y.jsxs("div",{id:"nav",children:[Y.jsx("a",{id:"logo-container",href:"https://ruffle.rs/",target:"_blank",children:Y.jsx("img",{className:"logo",src:Nh,alt:"Ruffle"})}),Y.jsxs("div",{className:"select-container",children:[Y.jsxs("form",{id:"web-url-container",onSubmit:y,hidden:!e,children:[Y.jsx("input",{id:"web-url",name:"web-url",type:"text",placeholder:"URL of a .swf file on the web",ref:g}),Y.jsx("button",{id:"web-form-submit",type:"submit",children:"Load"})]}),Y.jsxs("div",{id:"local-file-container",onDragLeave:s,onDragOver:f,onDrop:w,children:[Y.jsx("span",{id:"local-file-static-label",onClick:b,children:"Local SWF:"}),Y.jsx("input",{type:"file",accept:A?void 0:".swf,.spl",id:"local-file","aria-describedby":"local-file-static-label",ref:h,onChange:S}),Y.jsx("button",{id:"local-file-label",onClick:b,children:""}),Y.jsx("label",{id:"local-file-name",htmlFor:"local-file",children:a??""})]}),n&&Y.jsx(Mh,{onSelectUrl:i,selectedSample:k,setSelectedFilename:l,setSelectedSample:p,sampleSelectionInput:m})]}),Y.jsxs("div",{children:[Y.jsx("svg",{id:"toggle-info",width:"20px",viewBox:"0 0 416.979 416.979",onClick:t,children:Y.jsx("path",{fill:"white",d:"M356.004 61.156c-81.37-81.47-213.377-81.551-294.848-.182-81.47 81.371-81.552 213.379-.181 294.85 81.369 81.47 213.378 81.551 294.849.181 81.469-81.369 81.551-213.379.18-294.849zM237.6 340.786a5.821 5.821 0 0 1-5.822 5.822h-46.576a5.821 5.821 0 0 1-5.822-5.822V167.885a5.821 5.821 0 0 1 5.822-5.822h46.576a5.82 5.82 0 0 1 5.822 5.822v172.901zm-29.11-202.885c-18.618 0-33.766-15.146-33.766-33.765 0-18.617 15.147-33.766 33.766-33.766s33.766 15.148 33.766 33.766c0 18.619-15.149 33.765-33.766 33.765z"})}),Y.jsx("svg",{id:"reload-swf",width:"20px",viewBox:"0 0 489.711 489.711",onClick:R,children:Y.jsx("path",{fill:"white",d:"M112.156 97.111c72.3-65.4 180.5-66.4 253.8-6.7l-58.1 2.2c-7.5.3-13.3 6.5-13 14 .3 7.3 6.3 13 13.5 13h.5l89.2-3.3c7.3-.3 13-6.2 13-13.5v-1.6l-3.3-88.2c-.3-7.5-6.6-13.3-14-13-7.5.3-13.3 6.5-13 14l2.1 55.3c-36.3-29.7-81-46.9-128.8-49.3-59.2-3-116.1 17.3-160 57.1-60.4 54.7-86 137.9-66.8 217.1 1.5 6.2 7 10.3 13.1 10.3 1.1 0 2.1-.1 3.2-.4 7.2-1.8 11.7-9.1 9.9-16.3-16.8-69.6 5.6-142.7 58.7-190.7zm350.3 98.4c-1.8-7.2-9.1-11.7-16.3-9.9-7.2 1.8-11.7 9.1-9.9 16.3 16.9 69.6-5.6 142.7-58.7 190.7-37.3 33.7-84.1 50.3-130.7 50.3-44.5 0-88.9-15.1-124.7-44.9l58.8-5.3c7.4-.7 12.9-7.2 12.2-14.7s-7.2-12.9-14.7-12.2l-88.9 8c-7.4.7-12.9 7.2-12.2 14.7l8 88.9c.6 7 6.5 12.3 13.4 12.3.4 0 .8 0 1.2-.1 7.4-.7 12.9-7.2 12.2-14.7l-4.8-54.1c36.3 29.4 80.8 46.5 128.3 48.9 3.8.2 7.6.3 11.3.3 55.1 0 107.5-20.2 148.7-57.4 60.4-54.7 86-137.8 66.8-217.1z"})})]})]})}const Uh={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9.0",10:"10.0/10.1",11:"10.2",12:"10.3",13:"11.0",14:"11.1",15:"11.2",16:"11.3",17:"11.4",18:"11.5",19:"11.6",20:"11.7",21:"11.8",22:"11.9",23:"12",24:"13",25:"14",26:"15",27:"16",28:"17",29:"18",30:"19",31:"20",32:"21",33:"22",34:"23",35:"24",36:"25",37:"26",38:"27",39:"28",40:"29",41:"30",42:"31",43:"32"};function $h({visible:e,metadata:n}){return Y.jsxs("div",{id:"info-container",className:e?"":"hidden",children:[Y.jsxs("div",{children:[Y.jsx("span",{children:"Uncompressed Length"}),Y.jsxs("span",{id:"uncompressedLength",children:[((n==null?void 0:n.uncompressedLength)??0)>>10,"Kb"]})]}),Y.jsxs("div",{children:[Y.jsx("span",{children:"SWF Version"}),Y.jsx("span",{id:"swfVersion",children:n==null?void 0:n.swfVersion})]}),Y.jsxs("div",{children:[Y.jsx("span",{children:"FP Version"}),Y.jsx("span",{id:"flashVersion",children:n?Uh[n.swfVersion]??"Unknown":""})]}),Y.jsxs("div",{children:[Y.jsx("span",{children:"ActionScript 3"}),Y.jsx("span",{id:"isActionScript3",children:n!=null&&n.isActionScript3?"true":"false"})]}),Y.jsxs("div",{children:[Y.jsx("span",{children:"Total Frames"}),Y.jsx("span",{id:"numFrames",children:n==null?void 0:n.numFrames})]}),Y.jsxs("div",{children:[Y.jsx("span",{children:"Frame Rate"}),Y.jsx("span",{id:"frameRate",children:n==null?void 0:n.frameRate})]}),Y.jsxs("div",{children:[Y.jsx("span",{children:"SWF Width"}),Y.jsx("span",{id:"width",children:n==null?void 0:n.width})]}),Y.jsxs("div",{children:[Y.jsx("span",{children:"SWF Height"}),Y.jsx("span",{id:"height",children:n==null?void 0:n.height})]}),Y.jsxs("div",{children:[Y.jsx("span",{children:"SWF Background Color"}),Y.jsx("span",{id:"backgroundColor",style:{backgroundColor:(n==null?void 0:n.backgroundColor)??void 0}})]})]})}function Wh({ruffleBaseConfig:e,allowUrlLoading:n,allowSampleSwfs:t}){const[r,i]=De.useState(null),[o,a]=De.useState(!1),[l,s]=De.useState(null),[f,w]=De.useState(!1),h=De.useRef(null),g=()=>{a(!o)},m=()=>{var S;(S=h.current)==null||S.reload()},k=De.useCallback((S,R)=>{var A;(A=h.current)==null||A.loadUrl(S,R)},[]),p=S=>{var R;(R=h.current)==null||R.loadFile(S)},b=S=>{S.stopPropagation(),S.preventDefault()},u=S=>{S.stopPropagation(),S.preventDefault(),w(!1)},d=S=>{S.stopPropagation(),S.preventDefault(),w(!0)},y=S=>{var R;S.stopPropagation(),S.preventDefault(),w(!1),S.dataTransfer&&(s(S.dataTransfer.files[0].name),(R=h.current)==null||R.loadFile(S.dataTransfer.files[0]))};return Y.jsxs(Y.Fragment,{children:[Y.jsx(Bh,{allowUrlLoading:n,allowSampleSwfs:t,onToggleMetadata:g,onReloadMovie:m,onSelectUrl:k,onSelectFile:p,selectedFilename:l,setSelectedFilename:s,onFileDragLeave:u,onFileDragOver:d,onFileDragDrop:y}),Y.jsxs("div",{id:"main",className:o?"info-container-shown":"",children:[Y.jsx(Lh,{id:"player-container","aria-label":"Select a demo or drag an SWF",onLoadedMetadata:i,ref:h,onDragEnter:b,onDragLeave:u,onDragOver:d,onDragDrop:y,baseConfig:e,children:Y.jsx("div",{id:"overlay",className:f?"drag":""})}),Y.jsx($h,{visible:o,metadata:r})]})]})}const qh="modulepreload",Vh=function(e,n){return new URL(e,n).href},Ku={},Ju=function(n,t,r){let i=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link");i=Promise.all(t.map(a=>{if(a=Vh(a,r),a in Ku)return;Ku[a]=!0;const l=a.endsWith(".css"),s=l?'[rel="stylesheet"]':"";if(!!r)for(let h=o.length-1;h>=0;h--){const g=o[h];if(g.href===a&&(!l||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${s}`))return;const w=document.createElement("link");if(w.rel=l?"stylesheet":qh,l||(w.as="script",w.crossOrigin=""),w.href=a,document.head.appendChild(w),l)return new Promise((h,g)=>{w.addEventListener("load",h),w.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(()=>n()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})},Hh=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),Zh=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,7,1,5,0,208,112,26,11])),Kh=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,12,1,10,0,67,0,0,0,0,252,0,26,11])),Jh=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,65,0,192,26,11])),Gh=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]));function Qh(){Object.defineProperty(Array.prototype,"reduce",{value(...e){if(e.length===0&&window.Prototype&&window.Prototype.Version&&window.Prototype.Version<"1.6.1")return this.length>1?this:this[0];const n=e[0];if(this===null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof n!="function")throw new TypeError(`${n} is not a function`);const t=Object(this),r=t.length>>>0;let i=0,o;if(e.length>=2)o=e[1];else{for(;i<r&&!(i in t);)i++;if(i>=r)throw new TypeError("Reduce of empty array with no initial value");o=t[i++]}for(;i<r;)i in t&&(o=n(o,t[i],i,t)),i++;return o}})}function Yh(){typeof window.constructor!="function"||!bl(window.constructor)||(window.Window=window.constructor)}function Xh(){(window.Reflect===void 0||window.Reflect===null)&&(window.Reflect={}),typeof Reflect.get!="function"&&Object.defineProperty(Reflect,"get",{value(e,n){return e[n]}}),typeof Reflect.set!="function"&&Object.defineProperty(Reflect,"set",{value(e,n,t){e[n]=t}}),typeof Reflect.has!="function"&&Object.defineProperty(Reflect,"has",{value(e,n){return n in e}}),typeof Reflect.ownKeys!="function"&&Object.defineProperty(Reflect,"ownKeys",{value(e){return[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)]}})}function bl(e){const n=typeof Function.prototype.toString=="function"?Function.prototype.toString():null;return typeof n=="string"&&n.indexOf("[native code]")>=0?Function.prototype.toString.call(e).indexOf("[native code]")>=0:!1}function ev(){(typeof Array.prototype.reduce!="function"||!bl(Array.prototype.reduce))&&Qh(),(typeof Window!="function"||!bl(Window))&&Yh(),Xh()}let Lr=null,lt=!1;try{if(document.currentScript!==void 0&&document.currentScript!==null&&"src"in document.currentScript&&document.currentScript.src!==""){let e=document.currentScript.src;!e.endsWith(".js")&&!e.endsWith("/")&&(e+="/"),Lr=new URL(".",e),lt=Lr.protocol.includes("extension")}}catch{console.warn("Unable to get currentScript URL")}function jf(e){var n;let t=(n=Lr==null?void 0:Lr.href)!==null&&n!==void 0?n:"";return!lt&&"publicPath"in e&&e.publicPath!==null&&e.publicPath!==void 0&&(t=e.publicPath),t!==""&&!t.endsWith("/")&&(t+="/"),t}async function nv(e,n){var t;ev();const r=(await Promise.all([Hh(),Gh(),Kh(),Jh(),Zh()])).every(Boolean);r||console.log("Some WebAssembly extensions are NOT available, falling back to the vanilla WebAssembly module");try{__webpack_public_path__=jf(e)}catch{}const{default:i,Ruffle:o}=await(r?Ju(()=>import("./ruffle_web-wasm_extensions-zXIZ1V4R.js"),__vite__mapDeps([0,1]),import.meta.url):Ju(()=>import("./ruffle_web-uIvX95gM.js"),__vite__mapDeps([2,1]),import.meta.url));let a;const l=r?new URL(""+new URL("ruffle_web-wasm_extensions_bg-LmV6gN_N.wasm",import.meta.url).href,import.meta.url):new URL(""+new URL("ruffle_web_bg-Jcoqf-jp.wasm",import.meta.url).href,import.meta.url),s=await fetch(l);if(n&&typeof ReadableStream=="function"){const w=((t=s==null?void 0:s.headers)===null||t===void 0?void 0:t.get("content-length"))||"";let h=0;const g=parseInt(w);a=new Response(new ReadableStream({async start(m){var k;const p=(k=s.body)===null||k===void 0?void 0:k.getReader();if(!p)throw"Response had no body";for(n(h,g);;){const{done:b,value:u}=await p.read();if(b)break;u!=null&&u.byteLength&&(h+=u==null?void 0:u.byteLength),m.enqueue(u),n(h,g)}m.close()}}),s)}else a=s;return await i(a),o}let ba=null;async function tv(e,n,t,r){ba===null&&(ba=nv(t,r));const i=await ba;return new i(e,n,t)}class Wo{constructor(n){this.value=n}valueOf(){return this.value}}class Ie extends Wo{constructor(n="???"){super(n)}toString(n){return`{${this.value}}`}}class Mn extends Wo{constructor(n,t={}){super(n),this.opts=t}toString(n){try{return n.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(t){return n.reportError(t),this.value.toString(10)}}}class Nr extends Wo{constructor(n,t={}){super(n),this.opts=t}toString(n){try{return n.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(t){return n.reportError(t),new Date(this.value).toISOString()}}}const Gu=100,rv="⁨",iv="⁩";function ov(e,n,t){if(t===n||t instanceof Mn&&n instanceof Mn&&t.value===n.value)return!0;if(n instanceof Mn&&typeof t=="string"){let r=e.memoizeIntlObject(Intl.PluralRules,n.opts).select(n.value);if(t===r)return!0}return!1}function Qu(e,n,t){return n[t]?tr(e,n[t].value):(e.reportError(new RangeError("No default")),new Ie)}function Sl(e,n){const t=[],r=Object.create(null);for(const i of n)i.type==="narg"?r[i.name]=ii(e,i.value):t.push(ii(e,i));return{positional:t,named:r}}function ii(e,n){switch(n.type){case"str":return n.value;case"num":return new Mn(n.value,{minimumFractionDigits:n.precision});case"var":return av(e,n);case"mesg":return lv(e,n);case"term":return sv(e,n);case"func":return uv(e,n);case"select":return cv(e,n);default:return new Ie}}function av(e,{name:n}){let t;if(e.params)if(Object.prototype.hasOwnProperty.call(e.params,n))t=e.params[n];else return new Ie(`$${n}`);else if(e.args&&Object.prototype.hasOwnProperty.call(e.args,n))t=e.args[n];else return e.reportError(new ReferenceError(`Unknown variable: $${n}`)),new Ie(`$${n}`);if(t instanceof Wo)return t;switch(typeof t){case"string":return t;case"number":return new Mn(t);case"object":if(t instanceof Date)return new Nr(t.getTime());default:return e.reportError(new TypeError(`Variable type not supported: $${n}, ${typeof t}`)),new Ie(`$${n}`)}}function lv(e,{name:n,attr:t}){const r=e.bundle._messages.get(n);if(!r)return e.reportError(new ReferenceError(`Unknown message: ${n}`)),new Ie(n);if(t){const i=r.attributes[t];return i?tr(e,i):(e.reportError(new ReferenceError(`Unknown attribute: ${t}`)),new Ie(`${n}.${t}`))}return r.value?tr(e,r.value):(e.reportError(new ReferenceError(`No value: ${n}`)),new Ie(n))}function sv(e,{name:n,attr:t,args:r}){const i=`-${n}`,o=e.bundle._terms.get(i);if(!o)return e.reportError(new ReferenceError(`Unknown term: ${i}`)),new Ie(i);if(t){const l=o.attributes[t];if(l){e.params=Sl(e,r).named;const s=tr(e,l);return e.params=null,s}return e.reportError(new ReferenceError(`Unknown attribute: ${t}`)),new Ie(`${i}.${t}`)}e.params=Sl(e,r).named;const a=tr(e,o.value);return e.params=null,a}function uv(e,{name:n,args:t}){let r=e.bundle._functions[n];if(!r)return e.reportError(new ReferenceError(`Unknown function: ${n}()`)),new Ie(`${n}()`);if(typeof r!="function")return e.reportError(new TypeError(`Function ${n}() is not callable`)),new Ie(`${n}()`);try{let i=Sl(e,t);return r(i.positional,i.named)}catch(i){return e.reportError(i),new Ie(`${n}()`)}}function cv(e,{selector:n,variants:t,star:r}){let i=ii(e,n);if(i instanceof Ie)return Qu(e,t,r);for(const o of t){const a=ii(e,o.key);if(ov(e,i,a))return tr(e,o.value)}return Qu(e,t,r)}function Af(e,n){if(e.dirty.has(n))return e.reportError(new RangeError("Cyclic reference")),new Ie;e.dirty.add(n);const t=[],r=e.bundle._useIsolating&&n.length>1;for(const i of n){if(typeof i=="string"){t.push(e.bundle._transform(i));continue}if(e.placeables++,e.placeables>Gu)throw e.dirty.delete(n),new RangeError(`Too many placeables expanded: ${e.placeables}, max allowed is ${Gu}`);r&&t.push(rv),t.push(ii(e,i).toString(e)),r&&t.push(iv)}return e.dirty.delete(n),t.join("")}function tr(e,n){return typeof n=="string"?e.bundle._transform(n):Af(e,n)}class dv{constructor(n,t,r){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=n,this.errors=t,this.args=r}reportError(n){if(!this.errors||!(n instanceof Error))throw n;this.errors.push(n)}memoizeIntlObject(n,t){let r=this.bundle._intls.get(n);r||(r={},this.bundle._intls.set(n,r));let i=JSON.stringify(t);return r[i]||(r[i]=new n(this.bundle.locales,t)),r[i]}}function So(e,n){const t=Object.create(null);for(const[r,i]of Object.entries(e))n.includes(r)&&(t[r]=i.valueOf());return t}const Yu=["unitDisplay","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function fv(e,n){let t=e[0];if(t instanceof Ie)return new Ie(`NUMBER(${t.valueOf()})`);if(t instanceof Mn)return new Mn(t.valueOf(),{...t.opts,...So(n,Yu)});if(t instanceof Nr)return new Mn(t.valueOf(),{...So(n,Yu)});throw new TypeError("Invalid argument to NUMBER")}const Xu=["dateStyle","timeStyle","fractionalSecondDigits","dayPeriod","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"];function pv(e,n){let t=e[0];if(t instanceof Ie)return new Ie(`DATETIME(${t.valueOf()})`);if(t instanceof Nr)return new Nr(t.valueOf(),{...t.opts,...So(n,Xu)});if(t instanceof Mn)return new Nr(t.valueOf(),{...So(n,Xu)});throw new TypeError("Invalid argument to DATETIME")}const ec=new Map;function mv(e){const n=Array.isArray(e)?e.join(" "):e;let t=ec.get(n);return t===void 0&&(t=new Map,ec.set(n,t)),t}class hv{constructor(n,{functions:t,useIsolating:r=!0,transform:i=o=>o}={}){this._terms=new Map,this._messages=new Map,this.locales=Array.isArray(n)?n:[n],this._functions={NUMBER:fv,DATETIME:pv,...t},this._useIsolating=r,this._transform=i,this._intls=mv(n)}hasMessage(n){return this._messages.has(n)}getMessage(n){return this._messages.get(n)}addResource(n,{allowOverrides:t=!1}={}){const r=[];for(let i=0;i<n.body.length;i++){let o=n.body[i];if(o.id.startsWith("-")){if(t===!1&&this._terms.has(o.id)){r.push(new Error(`Attempt to override an existing term: "${o.id}"`));continue}this._terms.set(o.id,o)}else{if(t===!1&&this._messages.has(o.id)){r.push(new Error(`Attempt to override an existing message: "${o.id}"`));continue}this._messages.set(o.id,o)}}return r}formatPattern(n,t=null,r=null){if(typeof n=="string")return this._transform(n);let i=new dv(this,r,t);try{return Af(i,n).toString(i)}catch(o){if(i.errors&&o instanceof Error)return i.errors.push(o),new Ie().toString(i);throw o}}}const Sa=/^(-?[a-zA-Z][\w-]*) *= */gm,nc=/\.([a-zA-Z][\w-]*) *= */y,vv=/\*?\[/y,xa=/(-?[0-9]+(?:\.([0-9]+))?)/y,gv=/([a-zA-Z][\w-]*)/y,tc=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,wv=/^[A-Z][A-Z0-9_-]*$/,Ti=/([^{}\n\r]+)/y,yv=/([^\\"\n\r]*)/y,rc=/\\([\\"])/y,ic=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,kv=/^\n+/,oc=/ +$/,bv=/ *\r?\n/g,Sv=/( *)$/,xv=/{\s*/y,ac=/\s*}/y,_v=/\[\s*/y,Rv=/\s*] */y,zv=/\s*\(\s*/y,Ev=/\s*->\s*/y,Cv=/\s*:\s*/y,jv=/\s*,?\s*/y,Av=/\s+/y;class Iv{constructor(n){this.body=[],Sa.lastIndex=0;let t=0;for(;;){let z=Sa.exec(n);if(z===null)break;t=Sa.lastIndex;try{this.body.push(s(z[1]))}catch(I){if(I instanceof SyntaxError)continue;throw I}}function r(z){return z.lastIndex=t,z.test(n)}function i(z,I){if(n[t]===z)return t++,!0;if(I)throw new I(`Expected ${z}`);return!1}function o(z,I){if(r(z))return t=z.lastIndex,!0;if(I)throw new I(`Expected ${z.toString()}`);return!1}function a(z){z.lastIndex=t;let I=z.exec(n);if(I===null)throw new SyntaxError(`Expected ${z.toString()}`);return t=z.lastIndex,I}function l(z){return a(z)[1]}function s(z){let I=w(),H=f();if(I===null&&Object.keys(H).length===0)throw new SyntaxError("Expected message value or attributes");return{id:z,value:I,attributes:H}}function f(){let z=Object.create(null);for(;r(nc);){let I=l(nc),H=w();if(H===null)throw new SyntaxError("Expected attribute value");z[I]=H}return z}function w(){let z;if(r(Ti)&&(z=l(Ti)),n[t]==="{"||n[t]==="}")return h(z?[z]:[],1/0);let I=A();return I?z?h([z,I],I.length):(I.value=C(I.value,kv),h([I],I.length)):z?C(z,oc):null}function h(z=[],I){for(;;){if(r(Ti)){z.push(l(Ti));continue}if(n[t]==="{"){z.push(g());continue}if(n[t]==="}")throw new SyntaxError("Unbalanced closing brace");let v=A();if(v){z.push(v),I=Math.min(I,v.length);continue}break}let H=z.length-1,E=z[H];typeof E=="string"&&(z[H]=C(E,oc));let N=[];for(let v of z)v instanceof lc&&(v=v.value.slice(0,v.value.length-I)),v&&N.push(v);return N}function g(){o(xv,SyntaxError);let z=m();if(o(ac))return z;if(o(Ev)){let I=b();return o(ac,SyntaxError),{type:"select",selector:z,...I}}throw new SyntaxError("Unclosed placeable")}function m(){if(n[t]==="{")return g();if(r(tc)){let[,z,I,H=null]=a(tc);if(z==="$")return{type:"var",name:I};if(o(zv)){let E=k();if(z==="-")return{type:"term",name:I,attr:H,args:E};if(wv.test(I))return{type:"func",name:I,args:E};throw new SyntaxError("Function names must be all upper-case")}return z==="-"?{type:"term",name:I,attr:H,args:[]}:{type:"mesg",name:I,attr:H}}return d()}function k(){let z=[];for(;;){switch(n[t]){case")":return t++,z;case void 0:throw new SyntaxError("Unclosed argument list")}z.push(p()),o(jv)}}function p(){let z=m();return z.type!=="mesg"?z:o(Cv)?{type:"narg",name:z.name,value:d()}:z}function b(){let z=[],I=0,H;for(;r(vv);){i("*")&&(H=I);let E=u(),N=w();if(N===null)throw new SyntaxError("Expected variant value");z[I++]={key:E,value:N}}if(I===0)return null;if(H===void 0)throw new SyntaxError("Expected default variant");return{variants:z,star:H}}function u(){o(_v,SyntaxError);let z;return r(xa)?z=y():z={type:"str",value:l(gv)},o(Rv,SyntaxError),z}function d(){if(r(xa))return y();if(n[t]==='"')return S();throw new SyntaxError("Invalid expression")}function y(){let[,z,I=""]=a(xa),H=I.length;return{type:"num",value:parseFloat(z),precision:H}}function S(){i('"',SyntaxError);let z="";for(;;){if(z+=l(yv),n[t]==="\\"){z+=R();continue}if(i('"'))return{type:"str",value:z};throw new SyntaxError("Unclosed string literal")}}function R(){if(r(rc))return l(rc);if(r(ic)){let[,z,I]=a(ic),H=parseInt(z||I,16);return H<=55295||57344<=H?String.fromCodePoint(H):"�"}throw new SyntaxError("Unknown escape sequence")}function A(){let z=t;switch(o(Av),n[t]){case".":case"[":case"*":case"}":case void 0:return!1;case"{":return D(n.slice(z,t))}return n[t-1]===" "?D(n.slice(z,t)):!1}function C(z,I){return z.replace(I,"")}function D(z){let I=z.replace(bv,`
`),H=Sv.exec(z)[1].length;return new lc(I,H)}}}class lc{constructor(n,t){this.value=n,this.length=t}}const Pv="([a-z]{2,3}|\\*)",Dv="(?:-([a-z]{4}|\\*))",Ov="(?:-([a-z]{2}|\\*))",Fv="(?:-(([0-9][a-z0-9]{3}|[a-z0-9]{5,8})|\\*))",Tv=new RegExp(`^${Pv}${Dv}?${Ov}?${Fv}?$`,"i");class Mr{constructor(n){const t=Tv.exec(n.replace(/_/g,"-"));if(!t){this.isWellFormed=!1;return}let[,r,i,o,a]=t;r&&(this.language=r.toLowerCase()),i&&(this.script=i[0].toUpperCase()+i.slice(1)),o&&(this.region=o.toUpperCase()),this.variant=a,this.isWellFormed=!0}isEqual(n){return this.language===n.language&&this.script===n.script&&this.region===n.region&&this.variant===n.variant}matches(n,t=!1,r=!1){return(this.language===n.language||t&&this.language===void 0||r&&n.language===void 0)&&(this.script===n.script||t&&this.script===void 0||r&&n.script===void 0)&&(this.region===n.region||t&&this.region===void 0||r&&n.region===void 0)&&(this.variant===n.variant||t&&this.variant===void 0||r&&n.variant===void 0)}toString(){return[this.language,this.script,this.region,this.variant].filter(n=>n!==void 0).join("-")}clearVariants(){this.variant=void 0}clearRegion(){this.region=void 0}addLikelySubtags(){const n=Nv(this.toString().toLowerCase());return n?(this.language=n.language,this.script=n.script,this.region=n.region,this.variant=n.variant,!0):!1}}const sc={ar:"ar-arab-eg","az-arab":"az-arab-ir","az-ir":"az-arab-ir",be:"be-cyrl-by",da:"da-latn-dk",el:"el-grek-gr",en:"en-latn-us",fa:"fa-arab-ir",ja:"ja-jpan-jp",ko:"ko-kore-kr",pt:"pt-latn-br",sr:"sr-cyrl-rs","sr-ru":"sr-latn-ru",sv:"sv-latn-se",ta:"ta-taml-in",uk:"uk-cyrl-ua",zh:"zh-hans-cn","zh-hant":"zh-hant-tw","zh-hk":"zh-hant-hk","zh-mo":"zh-hant-mo","zh-tw":"zh-hant-tw","zh-gb":"zh-hant-gb","zh-us":"zh-hant-us"},Lv=["az","bg","cs","de","es","fi","fr","hu","it","lt","lv","nl","pl","ro","ru"];function Nv(e){if(Object.prototype.hasOwnProperty.call(sc,e))return new Mr(sc[e]);const n=new Mr(e);return n.language&&Lv.includes(n.language)?(n.region=n.language.toUpperCase(),n):null}function Mv(e,n,t){const r=new Set,i=new Map;for(let o of n)new Mr(o).isWellFormed&&i.set(o,new Mr(o));e:for(const o of e){const a=o.toLowerCase(),l=new Mr(a);if(l.language!==void 0){for(const s of i.keys())if(a===s.toLowerCase()){if(r.add(s),i.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}for(const[s,f]of i.entries())if(f.matches(l,!0,!1)){if(r.add(s),i.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}if(l.addLikelySubtags()){for(const[s,f]of i.entries())if(f.matches(l,!0,!1)){if(r.add(s),i.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}}l.clearVariants();for(const[s,f]of i.entries())if(f.matches(l,!0,!0)){if(r.add(s),i.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}if(l.clearRegion(),l.addLikelySubtags()){for(const[s,f]of i.entries())if(f.matches(l,!0,!1)){if(r.add(s),i.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}}l.clearRegion();for(const[s,f]of i.entries())if(f.matches(l,!0,!0)){if(r.add(s),i.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}}}return Array.from(r)}function Bv(e,n,{strategy:t="filtering",defaultLocale:r}={}){const i=Mv(Array.from(e??[]).map(String),Array.from(n??[]).map(String),t);if(t==="lookup"){if(r===void 0)throw new Error("defaultLocale cannot be undefined for strategy `lookup`");i.length===0&&i.push(r)}else r&&!i.includes(r)&&i.push(r);return i}const Uv={"ar-SA":{"context_menu.ftl":`context-menu-download-swf = تحميل .swf
context-menu-copy-debug-info = نسخ معلومات التصحيح
context-menu-open-save-manager = فتح مدير الحفظ
context-menu-about-ruffle =
    { $flavor ->
        [extension] حول ملحق رفل ({ $version })
       *[other] حول رفل ({ $version })
    }
context-menu-hide = إخفاء هذه القائمة
context-menu-exit-fullscreen = الخروج من وضعية الشاشة الكاملة
context-menu-enter-fullscreen = تفعيل وضعية الشاشة الكاملة
context-menu-volume-controls = التحكم بالصوت
`,"messages.ftl":`message-cant-embed =
    لم تكن رفل قادرة على تشغيل الفلاش المضمنة في هذه الصفحة.
    يمكنك محاولة فتح الملف في علامة تبويب منفصلة، لتجاوز هذه المشكلة.
panic-title = لقد حدث خطأ ما :(
more-info = معلومات أكثر
run-anyway = التشغيل على أي حال
continue = الاستمرار
report-bug = إبلاغ عن خلل
update-ruffle = تحديث رفل
ruffle-demo = ويب التجريبي
ruffle-desktop = برنامج سطح المكتب
ruffle-wiki = عرض رفل ويكي
enable-hardware-acceleration = يبدو أن تسارع الأجهزة غير مفعل. بينما قد يعمل الروفل، قد يكون بطيئاً بشكل غير معقول. يمكنك معرفة كيفية تمكين تسارع الأجهزة من خلال متابعة هذا الرابط.
view-error-details = عرض تفاصيل الخطأ
open-in-new-tab = فتح في علامة تبويب جديدة
click-to-unmute = انقر لإلغاء الكتم
error-file-protocol =
    يبدو أنك تقوم بتشغيل رفل على بروتوكول "الملف:".
    هذا لن يعمل لأن المتصفحات تمنع العديد من الميزات من العمل لأسباب أمنية.
    بدلاً من ذلك، ندعوك إلى إعداد خادم محلي أو استخدام عرض الويب أو تطبيق سطح المكتب.
error-javascript-config =
    تعرض رفل إلى مشكلة رئيسية بسبب الإعدادات الخاطئة للجافا سكريبت.
    إذا كنت مسؤول الخادم، نحن ندعوك إلى التحقق من تفاصيل الخطأ لمعرفة سبب المشكلة.
    يمكنك أيضا الرجوع إلى رفل ويكي للحصول على المساعدة.
error-wasm-not-found =
    فشل رفل في تحميل مكون الملف ".wasm" المطلوب.
    إذا كنت مسؤول الخادم، الرجاء التأكد من أن الملف قد تم تحميله بشكل صحيح.
    إذا استمرت المشكلة، قد تحتاج إلى استخدام إعدادات "المسار العام": الرجاء مراجعة رفل ويكي للحصول على المساعدة.
error-wasm-mime-type =
    واجهت رفل مشكلة رئيسية أثناء محاولة التهيئة.
    خادم الويب هذا لا يخدم ملفات ". wasm" مع نوع MIME الصحيح.
    إذا كنت مسؤول الخادم، يرجى مراجعة رفل ويكي للحصول على المساعدة.
error-swf-fetch =
    فشل رفل في تحميل ملف فلاش SWF.
    السبب الأكثر احتمالا هو أن الملف لم يعد موجودا، لذلك لا يوجد شيء ليحمله رفل.
    حاول الاتصال بمسؤول الموقع للحصول على المساعدة.
error-swf-cors =
    فشل الروفل في تحميل ملف فلاش SWF.
    من المحتمل أن تم حظر الوصول إلى المنال بواسطة سياسة CORS.
    إذا كنت مسؤول الخادم، يرجى مراجعة رفل ويكي للحصول على المساعدة.
error-wasm-cors =
    فشل رفل في تحميل مكون ملف ".wasm" المطلوب.
    من المحتمل أن تم حظر الوصول إلى المنال بواسطة سياسة CORS.
    إذا كنت مسؤول الخادم، يرجى مراجعة رفل ويكي للحصول على المساعدة.
error-wasm-invalid =
    واجهت رفل مشكلة رئيسية أثناء محاولة التهيئة.
    خادم الويب هذا لا يخدم ملفات ". wasm" مع نوع MIME الصحيح.
    إذا كنت مسؤول الخادم، يرجى مراجعة رفل ويكي للحصول على المساعدة.
error-wasm-download =
    واجهت رفل مشكلة رئيسية أثناء محاولتها التهيئة.
    هذا يمكن أن يحل نفسه في كثير من الأحيان، لذلك يمكنك محاولة إعادة تحميل الصفحة.
    خلاف ذلك، يرجى الاتصال بمدير الموقع.
error-wasm-disabled-on-edge =
    فشل رفل في تحميل مكون الملف ".wasm" المطلوب.
    لإصلاح هذه المشكلة، حاول فتح إعدادات المتصفح الخاص بك، انقر فوق "الخصوصية، البحث، الخدمات"، والتمرير لأسفل، وإيقاف "تعزيز أمانك على الويب".
    هذا سيسمح للمتصفح الخاص بك بتحميل الملفات ".wasm" المطلوبة.
    إذا استمرت المشكلة، قد تحتاج إلى استخدام متصفح أخر.
error-javascript-conflict =
    واجهت رفل مشكلة رئيسية أثناء محاولة التهيئة.
    يبدو أن هذه الصفحة تستخدم كود جافا سكريبت الذي يتعارض مع رفل.
    إذا كنت مسؤول الخادم، فإننا ندعوك إلى محاولة تحميل الملف على صفحة فارغة.
error-javascript-conflict-outdated = يمكنك أيضًا محاولة تحميل نسخة أحدث من رفل التي قد تحل المشكلة (النسخة الحالية قديمة: { $buildDate }).
error-csp-conflict =
    واجهت رفل مشكلة رئيسية أثناء محاولة التهيئة.
    لا تسمح سياسة أمان المحتوى لخادم الويب هذا بتشغيل مكون ".wasm" المطلوب.
    إذا كنت مسؤول الخادم، يرجى الرجوع إلى رفل ويكي للحصول على المساعدة.
error-unknown =
    واجهت رول مشكلة رئيسية أثناء محاولة عرض محتوى الفلاش هذا.
    { $outdated ->
        [true] إذا كنت مسؤول الخادم، الرجاء محاولة تحميل إصدار أحدث من رفل (النسخة الحالية قديمة: { $buildDate }).
       *[false] ليس من المفترض أن يحدث هذا، لذلك نحن نقدر حقًا إذا قمت بالتبليغ عن الخطأ!
    }
`,"save-manager.ftl":`save-delete-prompt = هل أنت متأكد أنك تريد حذف ملف حفظ اللعبة هذا؟
save-reload-prompt =
    الطريقة الوحيدة لـ { $action ->
        [delete] حذف
       *[replace] استبدال
    } هذا الملف الحفظ دون تضارب محتمل هي إعادة تحميل هذا المحتوى. هل ترغب في المتابعة على أي حال؟
save-download = تحميل
save-replace = استبدال
save-delete = حذف
save-backup-all = تحميل جميع الملفات المحفوظة
`,"volume-controls.ftl":`volume-controls = التحكم بالصوت
volume-controls-mute = كتم
volume-controls-volume = مستوى الصوت
`},"ca-ES":{"context_menu.ftl":`context-menu-download-swf = Baixa el fitxer .swf
context-menu-copy-debug-info = Copia la informació de depuració
context-menu-open-save-manager = Obre el gestor d'emmagatzematge
context-menu-about-ruffle =
    { $flavor ->
        [extension] Quant a l'extensió de Ruffle ({ $version })
       *[other] Quant a Ruffle ({ $version })
    }
context-menu-hide = Amaga aquest menú
context-menu-exit-fullscreen = Surt de la pantalla completa
context-menu-enter-fullscreen = Pantalla completa
context-menu-volume-controls = Controls de volum
`,"messages.ftl":`message-cant-embed =
    Ruffle no ha pogut executar el contingut Flash incrustat en aquesta pàgina.
    Podeu provar d'obrir el fitxer en una pestanya a part per evitar aquest problema.
panic-title = Alguna cosa ha fallat :(
more-info = Més informació
run-anyway = Reprodueix igualment
continue = Continua
report-bug = Informa d'un error
update-ruffle = Actualitza Ruffle
ruffle-demo = Demostració web
ruffle-desktop = Aplicació d'escriptori
ruffle-wiki = Obre la wiki de Ruffle
enable-hardware-acceleration = Sembla que l'acceleració per maquinari no està activada. Tot i que Ruffle podria funcionar, és probable que ho faci molt lentament. Pots trobar informació sobre com activar l'acceleració per maquinari al següent enllaç.
view-error-details = Mostra detalls de l'error
open-in-new-tab = Obre en una pestanya nova
click-to-unmute = Feu clic per activar el so
error-file-protocol =
    Sembla que esteu executant Ruffle al protocol "file:".
    Això no funcionarà perquè els navegadors bloquegen moltes característiques per raons de seguretat. En comptes d'això, us suggerim que configureu un servidor local o bé utilitzeu la demostració web o l'aplicació d'escriptori.
error-javascript-config =
    Ruffle ha topat amb un problema greu a causa d'una configuració JavaScript errònia.
    Si sou l'administrador del servidor, us suggerim que comproveu els detalls de l'error per determinar el paràmetre culpable.
    També podeu consultar la wiki del Ruffle per obtenir ajuda.
error-wasm-not-found =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    Si sou l'administrador del servidor, si us plau, comproveu que el fitxer ha estat carregat correctament.
    Si el problema continua, és possible que hàgiu d'utilitzar el parámetre "publicPath": us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-wasm-mime-type =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Aquest servidor no està servint els fitxers ".wasm" amb el tipus MIME adequat.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-swf-fetch =
    Ruffle no ha pogut carregar el fitxer SWF Flash.
    La raó més probable és que el fitxer ja no existeixi, així que no hi ha res que el Ruffle pugui carregar.
    Proveu de contactar a l'administrador del lloc per obtenir ajuda.
error-swf-cors =
    Ruffle no ha pogut carregar el fitxer SWF Flash.
    És probable que l'accés a la càrrega hagi estat denegat per una política CORS.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki del Ruffle per obtenir ajuda.
error-wasm-cors =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    És probable que l'accés a la càrrega hagi estat denegat per una política CORS.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki del Ruffle per obtenir ajuda.
error-wasm-invalid =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Sembla que a aquest lloc li manquen fitxers o aquests no són vàlids per a l'execució de Ruffle.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-wasm-download =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Això sovint això pot resoldre's sol, així que podeu provar de recarregar la pàgina.
    En cas contrari, us preguem que contacteu l'administrador del lloc.
error-wasm-disabled-on-edge =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    Per a arreglar-ho, proveu d'obrir els paràmetres del navegador, feu clic sobre "Privadesa, cerca i serveis", i desactiveu "Prevenció de seguiment".
    Això permetrà que el vostre navegador carregui els fitxers ".wasm" necessaris.
    Si el problema continua, possiblement haureu d'utilitzar un altre navegador.
error-javascript-conflict =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Sembla que aquest lloc fa servir codi JavaScript que entra en conflicte amb Ruffle.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-javascript-conflict-outdated = També podeu provar de carregar una versió més recent de Ruffle que podria resoldre el problema (la compilació actual està desactualitzada: { $buildDate }).
error-csp-conflict =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    La política de seguretat del contingut (CSP) no permet l'execució del component ".wasm" necessari.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-unknown =
    Ruffle ha topat amb un problema greu mentre provava de mostrar aquest contingut Flash.
    { $outdated ->
        [true] Si sou l'administrador del servidor, us preguem que proveu de carregar una versió més recent de Ruffle (la compilació actual està desactualitzada: { $buildDate }).
       *[false] Això no hauria d'haver passat, així que us agrairíem molt que n'informéssiu l'error!
    }
`,"save-manager.ftl":`save-delete-prompt = Segur que vols esborrar aquest fitxer desat?
save-reload-prompt =
    L'única forma d{ $action ->
        [delete] 'eliminar
       *[replace] e substituir
    } aquest fitxer desat sense crear un potencial conflicte és recarregant el contingut. Voleu continuar igualment?
save-download = Baixa
save-replace = Substitueix
save-delete = Elimina
save-backup-all = Baixa tots els fitxers desats
`,"volume-controls.ftl":`volume-controls = Controls de volum
volume-controls-mute = Silenci
volume-controls-volume = Volum
`},"cs-CZ":{"context_menu.ftl":`context-menu-download-swf = Stáhnout .swf
context-menu-copy-debug-info = Zkopírovat debug info
context-menu-open-save-manager = Otevřít správce uložení
context-menu-about-ruffle =
    { $flavor ->
         [extension] O Ruffle rozšíření ({ $version })
        *[other] O Ruffle ({ $version })
    }
context-menu-hide = Skrýt menu
context-menu-exit-fullscreen = Ukončit režim celé obrazovky
context-menu-enter-fullscreen = Přejít do režimu celé obrazovky
context-menu-volume-controls = Ovládání hlasitosti
`,"messages.ftl":`message-cant-embed =
    Ruffle nemohl spustit Flash vložený na této stránce.
    Můžete se pokusit otevřít soubor na samostatné kartě, abyste se vyhnuli tomuto problému.
panic-title = Něco se pokazilo :(
more-info = Další informace
run-anyway = Přesto spustit
continue = Pokračovat
report-bug = Nahlásit chybu
update-ruffle = Aktualizovat Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktopová aplikace
ruffle-wiki = Zobrazit Ruffle Wiki
enable-hardware-acceleration = Zdá se, že hardwarová akcelerace není povolena. I když Ruffle funguje správně, může být nepřiměřeně pomalý. Jak povolit hardwarovou akceleraci zjistíte na tomto odkazu.
view-error-details = Zobrazit podrobnosti o chybě
open-in-new-tab = Otevřít na nové kartě
click-to-unmute = Kliknutím zrušíte ztlumení
error-file-protocol =
    Zdá se, že používáte Ruffle na protokolu "file:".
    To není možné, protože prohlížeče blokují fungování mnoha funkcí z bezpečnostních důvodů.
    Namísto toho vám doporučujeme nastavit lokální server nebo použít web demo či desktopovou aplikaci.
error-javascript-config =
    Ruffle narazil na problém v důsledku nesprávné konfigurace JavaScriptu.
    Pokud jste správcem serveru, doporučujeme vám zkontrolovat podrobnosti o chybě, abyste zjistili, který parametr je vadný.
    Pomoc můžete získat také na wiki Ruffle.
error-wasm-not-found =
    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.
    Pokud jste správcem serveru, zkontrolujte, zda byl soubor správně nahrán.
    Pokud problém přetrvává, možná budete muset použít nastavení „publicPath“: pomoc naleznete na wiki Ruffle.
error-wasm-mime-type =
    Ruffle narazil na problém při pokusu o inicializaci.
    Tento webový server neposkytuje soubory „.wasm“ se správným typem MIME.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-swf-fetch =
    Ruffle se nepodařilo načíst SWF soubor Flash.
    Nejpravděpodobnějším důvodem je, že soubor již neexistuje, takže Ruffle nemá co načíst.
    Zkuste požádat o pomoc správce webu.
error-swf-cors =
    Ruffle se nepodařilo načíst SWF soubor Flash.
    Přístup k načítání byl pravděpodobně zablokován politikou CORS.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-wasm-cors =
    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.
    Přístup k načítání byl pravděpodobně zablokován politikou CORS.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-wasm-invalid =
    Ruffle narazil na problém při pokusu o inicializaci.
    Zdá se, že na této stránce chybí nebo jsou neplatné soubory ke spuštění Ruffle.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-wasm-download =
    Ruffle narazil na problém při pokusu o inicializaci.
    Problém se může vyřešit i sám, takže můžete zkusit stránku načíst znovu.
    V opačném případě kontaktujte administrátora stránky.
error-wasm-disabled-on-edge =
    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.
    Chcete-li tento problém vyřešit, zkuste otevřít nastavení prohlížeče, klikněte na položku „Ochrana osobních údajů, vyhledávání a služby“, přejděte dolů a vypněte možnost „Zvyšte svou bezpečnost na webu“.
    Vašemu prohlížeči to umožní načíst požadované soubory „.wasm“.
    Pokud problém přetrvává, budete možná muset použít jiný prohlížeč.
error-javascript-conflict =
    Ruffle narazil na problém při pokusu o inicializaci.
    Zdá se, že tato stránka používá kód JavaScript, který je v konfliktu s Ruffle.
    Pokud jste správcem serveru, doporučujeme vám zkusit načíst soubor na prázdnou stránku.
error-javascript-conflict-outdated = Můžete se také pokusit nahrát novější verzi Ruffle, která může daný problém vyřešit (aktuální build je zastaralý: { $buildDate }).
error-csp-conflict =
    Ruffle narazil na problém při pokusu o inicializaci.
    Zásady zabezpečení obsahu tohoto webového serveru nepovolují spuštění požadované komponenty „.wasm“.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-unknown =
    Ruffle narazil na problém při pokusu zobrazit tento Flash obsah.
    { $outdated ->
          [true] Pokud jste správcem serveru, zkuste nahrát novější verzi Ruffle (aktuální build je zastaralý: { $buildDate }).
         *[false] Toto by se nemělo stát, takže bychom opravdu ocenili, kdybyste mohli nahlásit chybu!
    }
`,"save-manager.ftl":`save-delete-prompt = Opravdu chcete odstranit tento soubor s uloženými pozicemi?
save-reload-prompt =
    Jediný způsob, jak { $action ->
          [delete] vymazat
         *[replace] nahradit
    } tento soubor s uloženými pozicemi bez potenciálního konfliktu je opětovné načtení tohoto obsahu. Chcete přesto pokračovat?
save-download = Stáhnout
save-replace = Nahradit
save-delete = Vymazat
save-backup-all = Stáhnout všechny soubory s uloženými pozicemi
`,"volume-controls.ftl":`volume-controls = Ovládání hlasitosti
volume-controls-mute = Ztlumit
volume-controls-volume = Hlasitost
`},"de-DE":{"context_menu.ftl":`context-menu-download-swf = .swf herunterladen
context-menu-copy-debug-info = Debug-Info kopieren
context-menu-open-save-manager = Dateimanager öffnen
context-menu-about-ruffle =
    { $flavor ->
        [extension] Über Ruffle Erweiterung ({ $version })
       *[other] Über Ruffle ({ $version })
    }
context-menu-hide = Menü ausblenden
context-menu-exit-fullscreen = Vollbild verlassen
context-menu-enter-fullscreen = Vollbildmodus aktivieren
context-menu-volume-controls = Lautstärke einstellen
`,"messages.ftl":`message-cant-embed =
    Ruffle konnte den Flash in dieser Seite nicht ausführen.
    Du kannst versuchen, die Datei in einem separaten Tab zu öffnen, um dieses Problem zu umgehen.
panic-title = Etwas ist schief gelaufen
more-info = Weitere Informationen
run-anyway = Trotzdem ausführen
continue = Fortfahren
report-bug = Fehler melden
update-ruffle = Ruffle aktuallisieren
ruffle-demo = Web-Demo
ruffle-desktop = Desktop-Anwendung
ruffle-wiki = Ruffle-Wiki anzeigen
view-error-details = Fehlerdetails anzeigen
open-in-new-tab = In einem neuen Tab öffnen
click-to-unmute = Klicke zum Entmuten
error-file-protocol =
    Es scheint, dass Sie Ruffle auf dem "file:"-Protokoll ausführen.
    Dies funktioniert nicht so, als Browser viele Funktionen aus Sicherheitsgründen blockieren.
    Stattdessen laden wir Sie ein, einen lokalen Server einzurichten oder entweder die Webdemo oder die Desktop-Anwendung zu verwenden.
error-javascript-config =
    Ruffle ist aufgrund einer falschen JavaScript-Konfiguration auf ein großes Problem gestoßen.
    Wenn du der Server-Administrator bist, laden wir dich ein, die Fehlerdetails zu überprüfen, um herauszufinden, welcher Parameter fehlerhaft ist.
    Sie können auch das Ruffle-Wiki für Hilfe konsultieren.
error-wasm-not-found =
    Ruffle konnte die erforderliche ".wasm"-Datei-Komponente nicht laden.
    Wenn Sie der Server-Administrator sind, stellen Sie bitte sicher, dass die Datei korrekt hochgeladen wurde.
    Wenn das Problem weiterhin besteht, müssen Sie unter Umständen die "publicPath"-Einstellung verwenden: Bitte konsultieren Sie das Ruffle-Wiki für Hilfe.
error-wasm-mime-type =
    Ruffle ist auf ein großes Problem beim Initialisieren gestoßen.
    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-swf-fetch =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der wahrscheinlichste Grund ist, dass die Datei nicht mehr existiert, so dass Ruffle nicht geladen werden kann.
    Kontaktieren Sie den Website-Administrator für Hilfe.
error-swf-cors =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-wasm-cors =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-wasm-invalid =
    Ruffle ist auf ein großes Problem beim Initialisieren gestoßen.
    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-wasm-download =
    Ruffle ist auf ein großes Problem gestoßen, während er versucht hat zu initialisieren.
    Dies kann sich oft selbst beheben, so dass Sie versuchen können, die Seite neu zu laden.
    Andernfalls kontaktieren Sie bitte den Website-Administrator.
error-wasm-disabled-on-edge =
    Ruffle konnte die erforderliche ".wasm"-Datei-Komponente nicht laden.
    Um dies zu beheben, versuche die Einstellungen deines Browsers zu öffnen, klicke auf "Privatsphäre, Suche und Dienste", scrollen nach unten und schalte "Verbessere deine Sicherheit im Web" aus.
    Dies erlaubt Ihrem Browser die erforderlichen ".wasm"-Dateien zu laden.
    Wenn das Problem weiterhin besteht, müssen Sie möglicherweise einen anderen Browser verwenden.
error-javascript-conflict =
    Ruffle ist auf ein großes Problem beim Initialisieren gestoßen.
    Es scheint, als ob diese Seite JavaScript-Code verwendet, der mit Ruffle kollidiert.
    Wenn Sie der Server-Administrator sind, laden wir Sie ein, die Datei auf einer leeren Seite zu laden.
error-javascript-conflict-outdated = Du kannst auch versuchen, eine neuere Version von Ruffle hochzuladen, die das Problem umgehen könnte (aktuelle Version ist veraltet: { $buildDate }).
error-csp-conflict =
    Ruffle ist auf ein großes Problem beim Initialisieren gestoßen.
    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-unknown =
    Bei dem Versuch, diesen Flash-Inhalt anzuzeigen, ist Ruffle auf ein großes Problem gestoßen.
    { $outdated ->
        [true] Wenn Sie der Server-Administrator sind, Bitte versuchen Sie, eine neuere Version von Ruffle hochzuladen (aktuelle Version ist veraltet: { $buildDate }).
       *[false] Dies soll nicht passieren, deshalb würden wir uns sehr darüber freuen, wenn Sie einen Fehler melden könnten!
    }
`,"save-manager.ftl":`save-delete-prompt = Sind Sie sicher, dass Sie diese Speicherdatei löschen möchten?
save-reload-prompt =
    Der einzige Weg zu { $action ->
        [delete] löschen
       *[replace] ersetzen
    } diese Speicherdatei ohne möglichen Konflikt ist das erneute Laden dieses Inhalts. Möchten Sie trotzdem fortfahren?
save-download = Herunterladen
save-replace = Ersetzen
save-delete = Löschen
save-backup-all = Alle gespeicherten Dateien herunterladen
`,"volume-controls.ftl":`volume-controls = Lautstärkeeinstellungen
volume-controls-mute = Stummschalten
volume-controls-volume = Lautstärke
`},"en-US":{"context_menu.ftl":`context-menu-download-swf = Download .swf
context-menu-copy-debug-info = Copy debug info
context-menu-open-save-manager = Open Save Manager
context-menu-about-ruffle =
    { $flavor ->
        [extension] About Ruffle Extension ({$version})
        *[other] About Ruffle ({$version})
    }
context-menu-hide = Hide this menu
context-menu-exit-fullscreen = Exit fullscreen
context-menu-enter-fullscreen = Enter fullscreen
context-menu-volume-controls = Volume controls
`,"messages.ftl":`message-cant-embed =
    Ruffle wasn't able to run the Flash embedded in this page.
    You can try to open the file in a separate tab, to sidestep this issue.
panic-title = Something went wrong :(
more-info = More info
run-anyway = Run anyway
continue = Continue
report-bug = Report Bug
update-ruffle = Update Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktop Application
ruffle-wiki = View Ruffle Wiki
enable-hardware-acceleration = It looks like hardware acceleration is not enabled. While Ruffle may work, it could be unreasonably slow. You can find out how to enable hardware acceleration by following this link.
view-error-details = View Error Details
open-in-new-tab = Open in a new tab
click-to-unmute = Click to unmute
error-file-protocol =
    It appears you are running Ruffle on the "file:" protocol.
    This doesn't work as browsers block many features from working for security reasons.
    Instead, we invite you to setup a local server or either use the web demo or the desktop application.
error-javascript-config =
    Ruffle has encountered a major issue due to an incorrect JavaScript configuration.
    If you are the server administrator, we invite you to check the error details to find out which parameter is at fault.
    You can also consult the Ruffle wiki for help.
error-wasm-not-found =
    Ruffle failed to load the required ".wasm" file component.
    If you are the server administrator, please ensure the file has correctly been uploaded.
    If the issue persists, you may need to use the "publicPath" setting: please consult the Ruffle wiki for help.
error-wasm-mime-type =
    Ruffle has encountered a major issue whilst trying to initialize.
    This web server is not serving ".wasm" files with the correct MIME type.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-swf-fetch =
    Ruffle failed to load the Flash SWF file.
    The most likely reason is that the file no longer exists, so there is nothing for Ruffle to load.
    Try contacting the website administrator for help.
error-swf-cors =
    Ruffle failed to load the Flash SWF file.
    Access to fetch has likely been blocked by CORS policy.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-cors =
    Ruffle failed to load the required ".wasm" file component.
    Access to fetch has likely been blocked by CORS policy.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-invalid =
    Ruffle has encountered a major issue whilst trying to initialize.
    It seems like this page has missing or invalid files for running Ruffle.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-download =
    Ruffle has encountered a major issue whilst trying to initialize.
    This can often resolve itself, so you can try reloading the page.
    Otherwise, please contact the website administrator.
error-wasm-disabled-on-edge =
    Ruffle failed to load the required ".wasm" file component.
    To fix this, try opening your browser's settings, clicking "Privacy, search, and services", scrolling down, and turning off "Enhance your security on the web".
    This will allow your browser to load the required ".wasm" files.
    If the issue persists, you might have to use a different browser.
error-javascript-conflict =
    Ruffle has encountered a major issue whilst trying to initialize.
    It seems like this page uses JavaScript code that conflicts with Ruffle.
    If you are the server administrator, we invite you to try loading the file on a blank page.
error-javascript-conflict-outdated = You can also try to upload a more recent version of Ruffle that may circumvent the issue (current build is outdated: {$buildDate}).
error-csp-conflict =
    Ruffle has encountered a major issue whilst trying to initialize.
    This web server's Content Security Policy does not allow the required ".wasm" component to run.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-unknown =
    Ruffle has encountered a major issue whilst trying to display this Flash content.
    {$outdated ->
        [true] If you are the server administrator, please try to upload a more recent version of Ruffle (current build is outdated: {$buildDate}).
        *[false] This isn't supposed to happen, so we'd really appreciate if you could file a bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Are you sure you want to delete this save file?
save-reload-prompt =
    The only way to {$action ->
    [delete] delete
    *[replace] replace
    } this save file without potential conflict is to reload this content. Do you wish to continue anyway?
save-download = Download
save-replace = Replace
save-delete = Delete
save-backup-all = Download all save files`,"volume-controls.ftl":`volume-controls = Volume controls
volume-controls-mute = Mute
volume-controls-volume = Volume
`},"es-ES":{"context_menu.ftl":`context-menu-download-swf = Descargar .swf
context-menu-copy-debug-info = Copiar Información de depuración
context-menu-open-save-manager = Abrir gestor de guardado
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre la extensión de Ruffle ({ $version })
       *[other] Sobre Ruffle ({ $version })
    }
context-menu-hide = Ocultar este menú
context-menu-exit-fullscreen = Salir de pantalla completa
context-menu-enter-fullscreen = Entrar a pantalla completa
context-menu-volume-controls = Controles de volumen
`,"messages.ftl":`message-cant-embed =
    Ruffle no pudo ejecutar el Flash incrustado en esta página.
    Puedes intentar abrir el archivo en una pestaña aparte, para evitar este problema.
panic-title = Algo salió mal :(
more-info = Más info
run-anyway = Ejecutar de todos modos
continue = Continuar
report-bug = Reportar un Error
update-ruffle = Actualizar Ruffle
ruffle-demo = Demostración de web
ruffle-desktop = Aplicación de Desktop
ruffle-wiki = Ver la página wiki
enable-hardware-acceleration = Al parecer, la aceleración de hardware no esta habilitada. Puede que Ruffle funcione, pero será extremadamente lento. Puedes averiguar como habilitar la aceleración de hardware al entrar al enlace.
view-error-details = Ver los detalles del error
open-in-new-tab = Abrir en una pestaña nueva
click-to-unmute = Haz clic para dejar de silenciar
error-file-protocol =
    Parece que está ejecutando Ruffle en el protocolo "archivo:".
    Esto no funciona porque los navegadores bloquean que muchas características funcionen por razones de seguridad.
    En su lugar, le invitamos a configurar un servidor local o bien usar la demostración web o la aplicación de desktop.
error-javascript-config =
    Ruffle ha encontrado un problema crítico debido a una configuración JavaScript incorrecta.
    Si usted es el administrador del servidor, le invitamos a comprobar los detalles del error para averiguar qué parámetro está en falta.
    También puedes consultar la wiki de Ruffle para obtener ayuda.
error-wasm-not-found =
    Ruffle no pudo cargar el componente de archivo ".wasm" requerido.
    Si usted es el administrador del servidor, asegúrese de que el archivo ha sido subido correctamente.
    Si el problema persiste, puede que necesite usar la configuración "publicPath": por favor consulte la wiki de Ruffle para obtener ayuda.
error-wasm-mime-type =
    Ruffle ha encontrado un problema crítico al intentar inicializar.
    Este servidor web no está sirviendo archivos wasm" con el tipo MIME correcto.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-swf-fetch =
    Ruffle no pudo cargar el archivo Flash SWF.
    La razón más probable es que el archivo ya no existe, así que no hay nada para cargar Ruffle.
    Intente ponerse en contacto con el administrador del sitio web para obtener ayuda.
error-swf-cors =
    Ruffle no pudo cargar el archivo Flash SWF.
    Es probable que el acceso a la búsqueda haya sido bloqueado por la política CORS.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-cors =
    Ruffle no pudo cargar el archivo ".wasm."
    Es probable que el acceso a la búsqueda o la llamada a la función fetch haya sido bloqueado por la política CORS.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-invalid =
    Ruffle ha encontrado un problema crítico al intentar inicializar.
    Este servidor web no está sirviendo archivos wasm" con el tipo Mime correcto.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-download =
    Ruffle ha encontrado un problema crítico mientras intentaba inicializarse.
    Esto a menudo puede resolverse por sí mismo, así que puede intentar recargar la página.
    De lo contrario, póngase en contacto con el administrador del sitio web.
error-wasm-disabled-on-edge =
    Ruffle no pudo cargar el componente de archivo ".wasm" requerido.
    Para solucionar esto, intenta abrir la configuración de tu navegador, haciendo clic en "Privacidad, búsqueda y servicios", desplazándote y apagando "Mejore su seguridad en la web".
    Esto permitirá a su navegador cargar los archivos ".wasm" necesarios.
    Si el problema persiste, puede que tenga que utilizar un navegador diferente.
error-javascript-conflict =
    Ruffle ha encontrado un problema crítico mientras intentaba inicializarse.
    Parece que esta página utiliza código JavaScript que entra en conflicto con Ruffle.
    Si usted es el administrador del servidor, le invitamos a intentar cargar el archivo en una página en blanco.
error-javascript-conflict-outdated = También puedes intentar subir una versión más reciente de Ruffle que puede eludir el problema (la versión actual está desactualizada: { $buildDate }).
error-csp-conflict =
    Ruffle encontró un problema al intentar inicializarse.
    La Política de Seguridad de Contenido de este servidor web no permite el componente requerido ".wasm". 
    Si usted es el administrador del servidor, por favor consulta la wiki de Ruffle para obtener ayuda.
error-unknown =
    Ruffle ha encontrado un problema al tratar de mostrar el contenido Flash.
    { $outdated ->
        [true] Si usted es el administrador del servidor, intenta cargar una version más reciente de Ruffle (la version actual esta desactualizada: { $buildDate }).
       *[false] Esto no deberia suceder! apreciariamos que reportes el error!
    }
`,"save-manager.ftl":`save-delete-prompt = ¿Está seguro de querer eliminar este archivo de guardado?
save-reload-prompt =
    La única forma de { $action ->
        [delete] eliminar
       *[replace] sobreescribir
    } este archivo de guardado sin conflictos potenciales es reiniciando el contenido. ¿Desea continuar de todos modos?
save-download = Descargar
save-replace = Sobreescribir
save-delete = Borrar
save-backup-all = Borrar todos los archivos de guardado
`,"volume-controls.ftl":`volume-controls = Controles de volumen
volume-controls-mute = Silenciar
volume-controls-volume = Volumen
`},"fr-FR":{"context_menu.ftl":`context-menu-download-swf = Télécharger en tant que .swf
context-menu-copy-debug-info = Copier les infos de débogage
context-menu-open-save-manager = Ouvrir le gestionnaire de stockage
context-menu-about-ruffle =
    { $flavor ->
        [extension] À propos de Ruffle Extension ({ $version })
       *[other] À propos de Ruffle ({ $version })
    }
context-menu-hide = Masquer ce menu
context-menu-exit-fullscreen = Sortir du mode plein écran
context-menu-enter-fullscreen = Afficher en plein écran
`,"messages.ftl":`message-cant-embed =
    Ruffle n'a pas été en mesure de lire le fichier Flash intégré dans cette page.
    Vous pouvez essayer d'ouvrir le fichier dans un onglet isolé, pour contourner le problème.
panic-title = Une erreur est survenue :(
more-info = Plus d'infos
run-anyway = Exécuter quand même
continue = Continuer
report-bug = Signaler le bug
update-ruffle = Mettre à jour Ruffle
ruffle-demo = Démo en ligne
ruffle-desktop = Application de bureau
ruffle-wiki = Wiki de Ruffle
view-error-details = Détails de l'erreur
open-in-new-tab = Ouvrir dans un nouvel onglet
click-to-unmute = Cliquez pour activer le son
error-file-protocol =
    Il semblerait que vous exécutiez Ruffle sur le protocole "file:".
    Cela ne fonctionne pas car les navigateurs bloquent de nombreuses fonctionnalités pour des raisons de sécurité.
    Nous vous invitons soit à configurer un serveur local, soit à utiliser la démo en ligne ou l'application de bureau.
error-javascript-config =
    Ruffle a rencontré un problème majeur en raison d'une configuration JavaScript incorrecte.
    Si vous êtes l'administrateur du serveur, nous vous invitons à vérifier les détails de l'erreur pour savoir quel est le paramètre en cause.
    Vous pouvez également consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-not-found =
    Ruffle n'a pas réussi à charger son fichier ".wasm".
    Si vous êtes l'administrateur du serveur, veuillez vous assurer que ce fichier a bien été mis en ligne.
    Si le problème persiste, il vous faudra peut-être utiliser le paramètre "publicPath" : veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-mime-type =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Ce serveur web ne renvoie pas le bon type MIME pour les fichiers ".wasm".
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-swf-fetch =
    Ruffle n'a pas réussi à charger le fichier Flash.
    La raison la plus probable est que le fichier n'existe pas ou plus.
    Vous pouvez essayer de prendre contact avec l'administrateur du site pour obtenir plus d'informations.
error-swf-cors =
    Ruffle n'a pas réussi à charger le fichier Flash.
    La requête a probablement été rejetée en raison de la configuration du CORS.
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-cors =
    Ruffle n'a pas réussi à charger son fichier ".wasm".
    La requête a probablement été rejetée en raison de la configuration du CORS.
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-invalid =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Il semblerait que cette page comporte des fichiers manquants ou invalides pour exécuter Ruffle.
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-download =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Le problème détecté peut souvent se résoudre de lui-même, donc vous pouvez essayer de recharger la page.
    Si le problème persiste, veuillez prendre contact avec l'administrateur du site.
error-wasm-disabled-on-edge =
    Ruffle n'a pas réussi à charger son fichier ".wasm".
    Pour résoudre ce problème, essayez d'ouvrir les paramètres de votre navigateur et de cliquer sur "Confidentialité, recherche et services". Puis, vers le bas de la page, désactivez l'option "Améliorez votre sécurité sur le web".
    Cela permettra à votre navigateur de charger les fichiers ".wasm".
    Si le problème persiste, vous devrez peut-être utiliser un autre navigateur.
error-javascript-conflict =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Il semblerait que cette page contienne du code JavaScript qui entre en conflit avec Ruffle.
    Si vous êtes l'administrateur du serveur, nous vous invitons à essayer de charger le fichier dans une page vide.
error-javascript-conflict-outdated = Vous pouvez également essayer de mettre en ligne une version plus récente de Ruffle qui pourrait avoir corrigé le problème (la version que vous utilisez est obsolète : { $buildDate }).
error-csp-conflict =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    La stratégie de sécurité du contenu (CSP) de ce serveur web n'autorise pas l'exécution de fichiers ".wasm".
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-unknown =
    Ruffle a rencontré un problème majeur durant l'exécution de ce contenu Flash.
    { $outdated ->
        [true] Si vous êtes l'administrateur du serveur, veuillez essayer de mettre en ligne une version plus récente de Ruffle (la version que vous utilisez est obsolète : { $buildDate }).
       *[false] Cela n'est pas censé se produire, donc nous vous serions reconnaissants si vous pouviez nous signaler ce bug !
    }
`,"save-manager.ftl":`save-delete-prompt = Voulez-vous vraiment supprimer ce fichier de sauvegarde ?
save-reload-prompt =
    La seule façon de { $action ->
        [delete] supprimer
       *[replace] remplacer
    } ce fichier de sauvegarde sans conflit potentiel est de recharger ce contenu. Souhaitez-vous quand même continuer ?
save-download = Télécharger
save-replace = Remplacer
save-delete = Supprimer
save-backup-all = Télécharger tous les fichiers de sauvegarde
`,"volume-controls.ftl":""},"he-IL":{"context_menu.ftl":`context-menu-download-swf = הורדת קובץ הswf.
context-menu-copy-debug-info = העתקת נתוני ניפוי שגיאות
context-menu-open-save-manager = פתח את מנהל השמירות
context-menu-about-ruffle =
    { $flavor ->
        [extension] אודות התוסף Ruffle ({ $version })
       *[other] אודות Ruffle ({ $version })
    }
context-menu-hide = הסתר תפריט זה
context-menu-exit-fullscreen = יציאה ממסך מלא
context-menu-enter-fullscreen = מסך מלא
context-menu-volume-controls = בקרת עוצמת קול
`,"messages.ftl":`message-cant-embed =
    Ruffle לא הצליח להריץ את תוכן הפלאש המוטמע בדף זה.
    אתה יכול לפתוח את הקובץ בלשונית נפרדת, על מנת לעקוף בעיה זו.
panic-title = משהו השתבש :(
more-info = מידע נוסף
run-anyway = הפעל בכל זאת
continue = המשך
report-bug = דווח על תקלה
update-ruffle = עדכן את Ruffle
ruffle-demo = הדגמה
ruffle-desktop = אפליקציית שולחן עבודה
ruffle-wiki = ראה את Ruffle wiki
enable-hardware-acceleration = נראה שהאצת החומרה שלך לא מופעלת. בעוד שראפל עשוי לעבוד, הוא יכול להיות איטי. תוכל לראות כיצד להפעיל תכונה זו בלחיצה על הלינק הזה.
view-error-details = ראה פרטי שגיאה
open-in-new-tab = פתח בכרטיסייה חדשה
click-to-unmute = לחץ על מנת לבטל השתקה
error-file-protocol =
    נדמה שאתה מריץ את Ruffle תחת פרוטוקול "file:".
    זה לא יעבוד מכיוון שדפדפנים חוסמים אפשרויות רבות מלעבוד עקב סיבות אבטחה.
    במקום זה, אנו מזמינים אותך לאחסן אתר זה תחת שרת מקומי או הדגמה ברשת או דרך אפליקציית שולחן העבודה.
error-javascript-config =
    Ruffle נתקל בתקלה חמורה עקב הגדרת JavaScript שגויה.
    אם אתה מנהל האתר, אנו מזמינים אותך לבדוק את פרטי השגיאה על מנת למצוא איזה פרמטר הוא שגוי.
    אתה יכול לעיין ולהועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-not-found =
    Ruffle נכשל לטעון את קובץ ה"wasm." הדרוש.
    אם אתה מנהל האתר, אנא וודא כי הקובץ הועלה כשורה.
    אם הבעיה ממשיכה, ייתכן ותצטרך להשתמש בהגדרת "publicPath": אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-mime-type =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    שרתו של אתר זה לא משייך קבצי ".wasm" עם סוג הMIME הנכון.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-swf-fetch =
    Ruffle נכשל לטעון את קובץ הפלאש/swf. .
    זה נובע ככל הנראה מכיוון והקובץ לא קיים יותר, אז אין לRuffle מה לטעון.
    נסה ליצור קשר עם מנהל האתר על מנת לקבל עזרה.
error-swf-cors =
    Ruffle נכשל לטעון את קובץ הפלאש/swf. .
    גישה לfetch ככל הנראה נחסמה על ידי מדיניות CORS.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-cors =
    Ruffle נכשל לטעון את קובץ ה".wasm" הדרוש.
    גישה לfetch ככל הנראה נחסמה על ידי מדיניות CORS.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-invalid =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    נדמה כי בדף זה חסרים או לא עובדים כראוי קבצים אשר משמשים את Ruffle כדי לפעול
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-download =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    לעיתים בעיה זו יכולה לפתור את עצמה, אז אתה יכול לנסות לטעון מחדש את הדף זה.
    אם לא, אנא פנה למנהל האתר.
error-wasm-disabled-on-edge =
    Ruffle נכשל לטעון את קובץ ה".wasm" הדרוש.
    על מנת לתקן בעיה זו, נסה לפתוח את הגדרות הדפדפן שלך, לחץ על "אבטחה, חיפוש ושירות",
    גלול מטה, וכבה את "הגבר את האבטחה שלך ברשת".
    זה יאפשר לדפדפן שלך לטעון את קובץ ה".wasm" הדרוש.
    אם הבעיה ממשיכה, ייתכן ועליך להשתמש בדפדפן אחר.
error-javascript-conflict =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    נדמה כי דף זה משתמש בקוד JavaScript אשר מתנגש עם Ruffle.
    אם אתה מנהל האתר, אנו מזמינים אותך לנסות לטעון את הדף תחת עמוד ריק.
error-javascript-conflict-outdated = בנוסף, אתה יכול לנסות ולהעלות גרסאות עדכניות של Ruffle אשר עלולים לעקוף בעיה זו (גרסה זו הינה מיושנת : { $buildDate }).
error-csp-conflict =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    מדיניות אבטחת התוכן של שרתו של אתר זה אינה מאפשרת לקובץ ה"wasm." הדרוש לפעול.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-unknown =
    Ruffle נתקל בבעיה חמורה בניסיון להציג את תוכן פלאש זה.
    { $outdated ->
        [true] אם אתה מנהל האתר, אנא נסה להעלות גרסה עדכנית יותר של Ruffle (גרסה זו הינה מיושנת:  { $buildDate }).
       *[false] זה לא אמור לקרות, נשמח אם תוכל לשתף תקלה זו!
    }
`,"save-manager.ftl":`save-delete-prompt = האם אתה בטוח שברצונך למחוק את קובץ שמירה זה?
save-reload-prompt =
    הדרך היחידה { $action ->
        [delete] למחוק
       *[replace] להחליף
    } את קובץ השמירה הזה מבלי לגרום לו להתנגש היא לטעון מחדש את תוכן זה. האם אתה רוצה להמשיך בכל זאת?
save-download = הורדה
save-replace = החלפה
save-delete = מחיקה
save-backup-all = הורדת כל קבצי השמירה
`,"volume-controls.ftl":`volume-controls = בקרת עוצמת קול
volume-controls-mute = השתק
volume-controls-volume = עוצמת קול
`},"hu-HU":{"context_menu.ftl":`context-menu-download-swf = .swf fájl letöltése
context-menu-copy-debug-info = Hibakeresési információk másolása
context-menu-open-save-manager = Mentéskezelő megnyitása
context-menu-about-ruffle =
    { $flavor ->
        [extension] A Ruffle kiegészítő ({ $version }) névjegye
       *[other] A Ruffle ({ $version }) névjegye
    }
context-menu-hide = Ezen menü elrejtése
context-menu-exit-fullscreen = Kilépés a teljes képernyőből
context-menu-enter-fullscreen = Váltás teljes képernyőre
context-menu-volume-controls = Hangerőszabályzó
`,"messages.ftl":`message-cant-embed =
    A Ruffle nem tudta futtatni az oldalba ágyazott Flash tartalmat.
    A probléma kikerüléséhez megpróbálhatod megnyitni a fájlt egy külön lapon.
panic-title = Valami baj történt :(
more-info = További információ
run-anyway = Futtatás mégis
continue = Folytatás
report-bug = Hiba jelentése
update-ruffle = Ruffle frissítése
ruffle-demo = Webes demó
ruffle-desktop = Asztali alkalmazás
ruffle-wiki = Ruffle Wiki megnyitása
enable-hardware-acceleration = Úgy tűnik, a hardveres gyorsítás nincs engedélyezve. Bár a Ruffle működhet, nagyon lassú lehet. Ezt a hivatkozást követve megtudhatod, hogyan engedélyezd a hardveres gyorsítást.
view-error-details = Hiba részletei
open-in-new-tab = Megnyitás új lapon
click-to-unmute = Kattints a némítás feloldásához
error-file-protocol =
    Úgy tűnik, a Ruffle-t a "file:" protokollon futtatod.
    Ez nem működik, mivel így a böngészők biztonsági okokból számos funkció működését letiltják.
    Ehelyett azt ajánljuk hogy indíts egy helyi kiszolgálót, vagy használd a webes demót vagy az asztali alkalmazást.
error-javascript-config =
    A Ruffle komoly problémába ütközött egy helytelen JavaScript-konfiguráció miatt.
    Ha a szerver rendszergazdája vagy, kérjük, ellenőrizd a hiba részleteit, hogy megtudd, melyik paraméter a hibás.
    A Ruffle wikiben is találhatsz ehhez segítséget.
error-wasm-not-found =
    A Ruffle nem tudta betölteni a szükséges ".wasm" összetevőt.
    Ha a szerver rendszergazdája vagy, kérjük ellenőrizd, hogy a fájl megfelelően lett-e feltöltve.
    Ha a probléma továbbra is fennáll, előfordulhat, hogy a "publicPath" beállítást kell használnod: segítségért keresd fel a Ruffle wikit.
error-wasm-mime-type =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Ez a webszerver a ".wasm" fájlokat nem a megfelelő MIME-típussal szolgálja ki.
    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.
error-swf-fetch =
    A Ruffle nem tudta betölteni a Flash SWF fájlt.
    A legvalószínűbb ok az, hogy a fájl már nem létezik, így a Ruffle számára nincs mit betölteni.
    Próbáld meg felvenni a kapcsolatot a webhely rendszergazdájával segítségért.
error-swf-cors =
    A Ruffle nem tudta betölteni a Flash SWF fájlt.
    A lekéréshez való hozzáférést valószínűleg letiltotta a CORS-házirend.
    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.
error-wasm-cors =
    A Ruffle nem tudta betölteni a szükséges ".wasm" összetevőt.
    A lekéréshez való hozzáférést valószínűleg letiltotta a CORS-házirend.
    Ha a szerver rendszergazdája vagy, kérjük keresd fel a Ruffle wikit segítségért.
error-wasm-invalid =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Úgy tűnik, hogy ezen az oldalon hiányoznak vagy hibásak a Ruffle futtatásához szükséges fájlok.
    Ha a szerver rendszergazdája vagy, kérjük keresd fel a Ruffle wikit segítségért.
error-wasm-download =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Ez gyakran magától megoldódik, ezért megpróbálhatod újratölteni az oldalt.
    Ellenkező esetben fordulj a webhely rendszergazdájához.
error-wasm-disabled-on-edge =
    A Ruffle nem tudta betölteni a szükséges ".wasm" összetevőt.
    A probléma megoldásához nyisd meg a böngésző beállításait, kattints az „Adatvédelem, keresés és szolgáltatások” elemre, görgess le, és kapcsold ki a „Fokozott biztonság a weben” opciót.
    Ez lehetővé teszi a böngésző számára, hogy betöltse a szükséges ".wasm" fájlokat.
    Ha a probléma továbbra is fennáll, lehet, hogy másik böngészőt kell használnod.
error-javascript-conflict =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Úgy tűnik, ez az oldal olyan JavaScript-kódot használ, amely ütközik a Ruffle-lel.
    Ha a kiszolgáló rendszergazdája vagy, kérjük, próbáld meg a fájlt egy üres oldalon betölteni.
error-javascript-conflict-outdated = Megpróbálhatod továbbá feltölteni a Ruffle egy újabb verzióját is, amely megkerülheti a problémát (a jelenlegi elavult: { $buildDate }).
error-csp-conflict =
    A Ruffle komoly problémába ütközött az inicializálás során.
    A kiszolgáló tartalombiztonsági házirendje nem teszi lehetővé a szükséges „.wasm” összetevők futtatását.
    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.
error-unknown =
    A Ruffle komoly problémába ütközött, miközben megpróbálta megjeleníteni ezt a Flash-tartalmat.
    { $outdated ->
        [true] Ha a szerver rendszergazdája vagy, kérjük, próbáld meg feltölteni a Ruffle egy újabb verzióját (a jelenlegi elavult: { $buildDate }).
       *[false] Ennek nem lett volna szabad megtörténnie, ezért nagyon hálásak lennénk, ha jeleznéd a hibát!
    }
`,"save-manager.ftl":`save-delete-prompt = Biztosan törölni akarod ezt a mentést?
save-reload-prompt =
    Ennek a mentésnek az esetleges konfliktus nélküli { $action ->
        [delete] törléséhez
       *[replace] cseréjéhez
    } újra kell tölteni a tartalmat. Mégis szeretnéd folytatni?
save-download = Letöltés
save-replace = Csere
save-delete = Törlés
save-backup-all = Az összes fájl letöltése
`,"volume-controls.ftl":`volume-controls = Hangerőszabályzó
volume-controls-mute = Némítás
volume-controls-volume = Hangerő
`},"id-ID":{"context_menu.ftl":`context-menu-download-swf = Unduh .swf
context-menu-copy-debug-info = Salin info debug
context-menu-open-save-manager = Buka Manager Save
context-menu-about-ruffle =
    { $flavor ->
        [extension] Tentang Ekstensi Ruffle ({ $version })
       *[other] Tentang Ruffle ({ $version })
    }
context-menu-hide = Sembunyikan Menu ini
context-menu-exit-fullscreen = Keluar dari layar penuh
context-menu-enter-fullscreen = Masuk mode layar penuh
context-menu-volume-controls = Pengaturan Volume
`,"messages.ftl":`message-cant-embed =
    Ruffle tidak dapat menjalankan Flash yang disematkan di halaman ini.
    Anda dapat mencoba membuka file di tab terpisah, untuk menghindari masalah ini.
panic-title = Terjadi kesalahan :(
more-info = Info lebih lanjut
run-anyway = Jalankan
continue = Lanjutkan
report-bug = Laporkan Bug
update-ruffle = Perbarui Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Aplikasi Desktop
ruffle-wiki = Kunjungi Wiki Ruffle
enable-hardware-acceleration = Sepertinya akselerasi perangkat keras tidak aktif. Ruffle tetap akan bekerja, Namun dapat bekerja dengan sangat lambat. Anda dapat mengaktifkan akselerasi perangkat keras dengan menggunakan link berikut.
view-error-details = Tunjukan Detail Error
open-in-new-tab = Buka di Tab Baru
click-to-unmute = Tekan untuk menyalakan suara
error-file-protocol =
    Sepertinya anda menjalankan Ruffle di protokol "file:". 
    Ini tidak berfungsi karena browser memblokir fitur ini dengan alasan keamanan.
    Sebagai gantinya, kami mengajak anda untuk membuat server lokal, menggunakan demo web atau aplikasi desktop.
error-javascript-config =
    Ruffle mengalami masalah besar karena konfigurasi JavaScript yang salah.
    Jika Anda adalah administrator server ini, kami mengajak Anda untuk memeriksa detail kesalahan untuk mengetahui parameter mana yang salah.
    Anda juga dapat membaca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-not-found =
    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.
    Jika Anda adalah administrator server ini, pastikan file telah diunggah dengan benar.
    Jika masalah terus berlanjut, Anda mungkin perlu menggunakan pengaturan "publicPath": silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-mime-type =
    Ruffle mengalami masalah ketika mencoba melakukan inisialisasi.
    Server web ini tidak melayani file ".wasm" dengan tipe MIME yang benar.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-swf-fetch =
    Ruffle gagal memuat file SWF Flash.
    Kemungkinan file tersebut sudah tidak ada, sehingga tidak dapat dimuat oleh Ruffle.
    Coba hubungi administrator situs web ini untuk mendapatkan bantuan.
error-swf-cors =
    Ruffle gagal memuat file SWF Flash.
    Akses untuk memuat kemungkinan telah diblokir oleh kebijakan CORS.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-cors =
    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.
    Akses untuk mengambil kemungkinan telah diblokir oleh kebijakan CORS.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-invalid =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Sepertinya halaman ini memiliki file yang hilang atau tidak valid untuk menjalankan Ruffle.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-download =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Hal ini sering kali dapat teratasi dengan sendirinya, sehingga Anda dapat mencoba memuat ulang halaman.
    Jika tidak, silakan hubungi administrator situs web ini.
error-wasm-disabled-on-edge =
    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.
    Untuk mengatasinya, coba buka pengaturan peramban Anda, klik "Privasi, pencarian, dan layanan", turun ke bawah, dan matikan "Tingkatkan keamanan Anda di web".
    Ini akan memungkinkan browser Anda memuat file ".wasm" yang diperlukan.
    Jika masalah berlanjut, Anda mungkin harus menggunakan browser yang berbeda.
error-javascript-conflict =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Sepertinya situs web ini menggunakan kode JavaScript yang bertentangan dengan Ruffle.
    Jika Anda adalah administrator server ini, kami mengajak Anda untuk mencoba memuat file pada halaman kosong.
error-javascript-conflict-outdated = Anda juga dapat mencoba mengunggah versi Ruffle yang lebih baru yang mungkin dapat mengatasi masalah ini (versi saat ini sudah kedaluwarsa: { $buildDate }).
error-csp-conflict =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Kebijakan Keamanan Konten server web ini tidak mengizinkan komponen ".wasm" yang diperlukan untuk dijalankan.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-unknown =
    Ruffle telah mengalami masalah besar saat menampilkan konten Flash ini.
    { $outdated ->
        [true] Jika Anda administrator server ini, cobalah untuk mengganti versi Ruffle yang lebih baru (versi saat ini sudah kedaluwarsa: { $buildDate }).
       *[false] Hal ini seharusnya tidak terjadi, jadi kami sangat menghargai jika Anda dapat melaporkan bug ini!
    }
`,"save-manager.ftl":`save-delete-prompt = Anda yakin ingin menghapus berkas ini?
save-reload-prompt =
    Satu-satunya cara untuk { $action ->
        [delete] menghapus
       *[replace] mengganti
    } berkas penyimpanan ini tanpa potensi konflik adalah dengan memuat ulang konten ini. Apakah Anda ingin melanjutkannya?
save-download = Unduh
save-replace = Ganti
save-delete = Hapus
save-backup-all = Unduh semua berkas penyimpanan
`,"volume-controls.ftl":`volume-controls = Pengaturan Volume
volume-controls-mute = Bisukan
volume-controls-volume = Volume
`},"it-IT":{"context_menu.ftl":`context-menu-download-swf = Scarica .swf
context-menu-copy-debug-info = Copia informazioni di debug
context-menu-open-save-manager = Apri Gestione salvataggi
context-menu-about-ruffle =
    { $flavor ->
        [extension] Informazioni su Ruffle Extension ({ $version })
       *[other] Informazioni su Ruffle ({ $version })
    }
context-menu-hide = Nascondi questo menu
context-menu-exit-fullscreen = Esci dallo schermo intero
context-menu-enter-fullscreen = Entra a schermo intero
context-menu-volume-controls = Controlli volume
`,"messages.ftl":`message-cant-embed =
    Ruffle non è stato in grado di eseguire il Flash incorporato in questa pagina.
    Puoi provare ad aprire il file in una scheda separata, per evitare questo problema.
panic-title = Qualcosa è andato storto :(
more-info = Maggiori informazioni
run-anyway = Esegui comunque
continue = Continua
report-bug = Segnala Un Bug
update-ruffle = Aggiorna Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Applicazione Desktop
ruffle-wiki = Visualizza Ruffle Wiki
enable-hardware-acceleration = Sembra che l'accelerazione hardware non sia abilitata. Sebbene Ruffle possa funzionare, potrebbe essere irragionevolmente lento. Puoi scoprire come abilitare l'accelerazione hardware seguendo questo collegamento.
view-error-details = Visualizza Dettagli Errore
open-in-new-tab = Apri in una nuova scheda
click-to-unmute = Clicca per riattivare l'audio
error-file-protocol =
    Sembra che tu stia eseguendo Ruffle sul protocollo "file:".
    Questo non funziona come browser blocca molte funzionalità di lavoro per motivi di sicurezza.
    Invece, ti invitiamo a configurare un server locale o a utilizzare la demo web o l'applicazione desktop.
error-javascript-config =
    Ruffle ha incontrato un problema importante a causa di una configurazione JavaScript non corretta.
    Se sei l'amministratore del server, ti invitiamo a controllare i dettagli dell'errore per scoprire quale parametro è in errore.
    Puoi anche consultare il wiki Ruffle per aiuto.
error-wasm-not-found =
    Ruffle non è riuscito a caricare il componente di file ".wasm".
    Se sei l'amministratore del server, assicurati che il file sia stato caricato correttamente.
    Se il problema persiste, potrebbe essere necessario utilizzare l'impostazione "publicPath": si prega di consultare il wiki Ruffle per aiuto.
error-wasm-mime-type =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Questo server web non serve ". asm" file con il tipo MIME corretto.
    Se sei l'amministratore del server, consulta la wiki Ruffle per aiuto.
error-swf-fetch =
    Ruffle non è riuscito a caricare il file Flash SWF.
    La ragione più probabile è che il file non esiste più, quindi non c'è nulla che Ruffle possa caricare.
    Prova a contattare l'amministratore del sito web per aiuto.
error-swf-cors =
    Ruffle non è riuscito a caricare il file SWF Flash.
    L'accesso al recupero probabilmente è stato bloccato dalla politica CORS.
    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.
error-wasm-cors =
    Ruffle non è riuscito a caricare il componente di file ".wasm".
    L'accesso al recupero probabilmente è stato bloccato dalla politica CORS.
    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.
error-wasm-invalid =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Sembra che questa pagina abbia file mancanti o non validi per l'esecuzione di Ruffle.
    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.
error-wasm-download =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Questo può spesso risolversi da solo, quindi puoi provare a ricaricare la pagina.
    Altrimenti, contatta l'amministratore del sito.
error-wasm-disabled-on-edge =
    Ruffle non ha caricato il componente di file ".wasm" richiesto.
    Per risolvere il problema, prova ad aprire le impostazioni del tuo browser, facendo clic su "Privacy, search, and services", scorrendo verso il basso e disattivando "Migliora la tua sicurezza sul web".
    Questo permetterà al tuo browser di caricare i file ".wasm" richiesti.
    Se il problema persiste, potresti dover usare un browser diverso.
error-javascript-conflict =
    Ruffle ha riscontrato un problema importante durante il tentativo di inizializzazione.
    Sembra che questa pagina utilizzi il codice JavaScript che è in conflitto con Ruffle.
    Se sei l'amministratore del server, ti invitiamo a provare a caricare il file su una pagina vuota.
error-javascript-conflict-outdated = Puoi anche provare a caricare una versione più recente di Ruffle che potrebbe aggirare il problema (l'attuale build è obsoleta: { $buildDate }).
error-csp-conflict =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzare.
    La Politica di Sicurezza dei Contenuti di questo server web non consente l'impostazione richiesta". asm" componente da eseguire.
    Se sei l'amministratore del server, consulta la Ruffle wiki per aiuto.
error-unknown =
    Ruffle ha incontrato un problema importante durante il tentativo di visualizzare questo contenuto Flash.
    { $outdated ->
        [true] Se sei l'amministratore del server, prova a caricare una versione più recente di Ruffle (la versione attuale è obsoleta: { $buildDate }).
       *[false] Questo non dovrebbe accadere, quindi ci piacerebbe molto se si potesse inviare un bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Sei sicuro di voler eliminare questo file di salvataggio?
save-reload-prompt =
    L'unico modo per { $action ->
        [delete] delete
       *[replace] replace
    } questo salvataggio file senza potenziali conflitti è quello di ricaricare questo contenuto. Volete continuare comunque?
save-download = Scarica
save-replace = Sostituisci
save-delete = Elimina
save-backup-all = Scarica tutti i file di salvataggio
`,"volume-controls.ftl":`volume-controls = Controlli volume
volume-controls-mute = Silenzia
volume-controls-volume = Volume
`},"ja-JP":{"context_menu.ftl":`context-menu-download-swf = .swfをダウンロード
context-menu-copy-debug-info = デバッグ情報をコピー
context-menu-open-save-manager = セーブマネージャーを開く
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle拡張機能について ({ $version })
       *[other] Ruffleについて ({ $version })
    }
context-menu-hide = メニューを隠す
context-menu-exit-fullscreen = フルスクリーンを終了
context-menu-enter-fullscreen = フルスクリーンにする
context-menu-volume-controls = 音量
`,"messages.ftl":`message-cant-embed =
    Ruffleはこのページに埋め込まれた Flash を実行できませんでした。
    別のタブでファイルを開くことで、この問題を解決できるかもしれません。
panic-title = エラーが発生しました :(
more-info = 詳細情報
run-anyway = とにかく実行する
continue = 続行
report-bug = バグを報告
update-ruffle = Ruffleを更新
ruffle-demo = Webデモ
ruffle-desktop = デスクトップアプリケーション
ruffle-wiki = Ruffle Wikiを表示
enable-hardware-acceleration = ハードウェアアクセラレーションが有効になっていないようです。Ruffleが動作しないか、動作が遅くなる可能性があります。 ハードウェアアクセラレーションを有効にする方法については、こちらのリンクを参照してください。
view-error-details = エラーの詳細を表示
open-in-new-tab = 新しいタブで開く
click-to-unmute = クリックでミュートを解除
error-file-protocol =
    Ruffleを"file:"プロトコルで使用しているようです。
    ブラウザはセキュリティ上の理由から殆どの機能を制限しているため、正しく動作しません。
    ローカルサーバーをセットアップするか、ウェブデモまたはデスクトップアプリをご利用ください。
error-javascript-config =
    JavaScriptの設定が正しくないため、Ruffleで問題が発生しました。
    サーバー管理者の方は、エラーの詳細から、どのパラメーターに問題があるのかを確認してください。
    Ruffleのwikiを参照することで、解決方法が見つかるかもしれません。
error-wasm-not-found =
    Ruffleの初期化時に重大な問題が発生しました。
    このWebサーバーのコンテンツセキュリティポリシーが、実行に必要となる「.wasm」コンポーネントの実行を許可していません。サーバーの管理者の場合は、ファイルが正しくアップロードされているか確認をしてください。この問題が解決しない場合は、「publicPath」の設定を使用する必要があります。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-wasm-mime-type =
    Ruffleの初期化に失敗する大きな問題が発生しました。
    このWebサーバーは正しいMIMEタイプの「.wasm」ファイルを提供していません。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-swf-fetch =
    RuffleがFlash SWFファイルの読み込みに失敗しました。
    最も考えられる原因は、SWFファイルが既に存在しない事でRuffleが読み込みに失敗するという問題です。
    Webサイトの管理者にお問い合わせください。
error-swf-cors =
    RuffleはSWFファイルの読み込みに失敗しました。
    CORSポリシーの設定により、fetchへのアクセスがブロックされている可能性があります。
    サーバー管理者の方は、Ruffleのwikiを参照してください。
error-wasm-cors =
    Ruffleに必要となる「.wasm」ファイルコンポーネントの読み込みに失敗しました。
    CORSポリシーによってfetchへのアクセスがブロックされている可能性があります。
    サーバーの管理者は、Ruffle wikiを参照してください。
error-wasm-invalid =
    Ruffleの初期化時に重大な問題が発生しました。
    このページにはRuffleを実行するためのファイルが存在しないか、無効なファイルがあるかもしれません。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-wasm-download =
    Ruffleの初期化時に重大な問題が発生しました。
    この問題はページを再読み込みする事で大抵は解決するはずなので行なってみてください。
    もしも解決しない場合は、Webサイトの管理者にお問い合わせください。
error-wasm-disabled-on-edge =
    Ruffleに必要となる「.wasm」ファイルコンポーネントの読み込みに失敗しました。
    この問題を解決するにはブラウザーの設定を開き、「プライバシー、検索、サービス」をクリックし、下にスクロールで「Web上のセキュリティを強化する」をオフにしてみてください。
    これで必要となる「.wasm」ファイルが読み込まれるようになります。
    それでも問題が解決しない場合、別のブラウザーを使用する必要があるかもしれません。
error-javascript-conflict =
    Ruffleの初期化時に重大な問題が発生しました。
    このページではRuffleと競合するJavaScriptコードが使用されているかもしれません。
    サーバーの管理者は、空白のページでファイルを読み込みし直してみてください。
error-javascript-conflict-outdated = 新しいバージョンのRuffleをアップロードすることで、この問題を回避できる可能性があります。(現在のビルドは古い物です:{ $buildDate })
error-csp-conflict =
    Ruffleの初期化時に重大な問題が発生しました。
    このWebサーバーのコンテンツセキュリティポリシーが実行に必要となる「.wasm」コンポーネントの実行を許可していません。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-unknown =
    Flashコンテンツを表示する際にRuffleで問題が発生しました。
    { $outdated ->
        [true] 現在使用しているビルドは最新ではないため、サーバー管理者の方は、最新版のRuffleに更新してみてください(現在利用中のビルド: { $buildDate })。
       *[false] 想定外の問題なので、バグとして報告していただけると嬉しいです!
    }
`,"save-manager.ftl":`save-delete-prompt = このセーブファイルを削除してもよろしいですか?
save-reload-prompt =
    セーブファイルを競合の可能性なく { $action ->
        [delete] 削除する
       *[replace] 置き換える
    } ために、このコンテンツを再読み込みすることを推奨します。続行しますか？
save-download = ダウンロード
save-replace = 置き換え
save-delete = 削除
save-backup-all = すべてのセーブファイルをダウンロード
`,"volume-controls.ftl":`volume-controls = 音量
volume-controls-mute = 消音
volume-controls-volume = 音量
`},"ko-KR":{"context_menu.ftl":`context-menu-download-swf = .swf 다운로드
context-menu-copy-debug-info = 디버그 정보 복사
context-menu-open-save-manager = 저장 관리자 열기
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle 확장 프로그램 정보 ({ $version })
       *[other] Ruffle 정보 ({ $version })
    }
context-menu-hide = 이 메뉴 숨기기
context-menu-exit-fullscreen = 전체화면 나가기
context-menu-enter-fullscreen = 전체화면으로 열기
context-menu-volume-controls = 음량 조절
`,"messages.ftl":`message-cant-embed = Ruffle이 이 페이지에 포함된 플래시를 실행할 수 없었습니다. 별도의 탭에서 파일을 열어봄으로서 이 문제를 해결할 수 있습니다.
panic-title = 문제가 발생했습니다 :(
more-info = 추가 정보
run-anyway = 그래도 실행하기
continue = 계속하기
report-bug = 버그 제보
update-ruffle = Ruffle 업데이트
ruffle-demo = 웹 데모
ruffle-desktop = 데스크톱 애플리케이션
ruffle-wiki = Ruffle 위키 보기
enable-hardware-acceleration = 하드웨어 가속이 활성화되지 않은 것 같습니다. Ruffle은 계속 작동하지만 실행 속도가 매우 느릴 수 있습니다. 하드웨어 가속을 활성화하는 방법을 알아보려면 다음 링크를 참고해보세요.
view-error-details = 오류 세부 정보 보기
open-in-new-tab = 새 탭에서 열기
click-to-unmute = 클릭하여 음소거 해제
error-file-protocol =
    Ruffle을 "file:" 프로토콜에서 실행하고 있는 것으로 보입니다.
    브라우저에서는 이 프로토콜을 보안상의 이유로 많은 기능을 작동하지 않게 차단하므로 이 방법은 작동하지 않습니다.
    대신, 로컬 서버를 직접 열어서 설정하거나 웹 데모 또는 데스크톱 애플리케이션을 사용하시기 바랍니다.
error-javascript-config =
    잘못된 자바스크립트 설정으로 인해 Ruffle에서 중대한 문제가 발생했습니다.
    만약 당신이 서버 관리자인 경우, 오류 세부사항을 확인하여 어떤 매개변수가 잘못되었는지 알아보세요.
    또는 Ruffle 위키를 통해 도움을 받아 볼 수도 있습니다.
error-wasm-not-found =
    Ruffle이 ".wasm" 필수 파일 구성요소를 로드하지 못했습니다.
    만약 당신이 서버 관리자라면 파일이 올바르게 업로드되었는지 확인하세요.
    문제가 지속된다면 "publicPath" 옵션을 사용해야 할 수도 있습니다: Ruffle 위키를 참조하여 도움을 받으세요.
error-wasm-mime-type =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 웹 서버는 올바른 MIME 유형의 ".wasm" 파일을 제공하지 않습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 통해 도움을 받으세요.
error-swf-fetch =
    Ruffle이 플래시 SWF 파일을 로드하는 데 실패하였습니다.
    이는 주로 파일이 더 이상 존재하지 않아 Ruffle이 로드할 수 있는 것이 없을 가능성이 높습니다.
    웹사이트 관리자에게 문의하여 도움을 받아보세요.
error-swf-cors =
    Ruffle이 플래시 SWF 파일을 로드하는 데 실패하였습니다.
    CORS 정책에 의해 데이터 가져오기에 대한 액세스가 차단되었을 수 있습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-wasm-cors =
    Ruffle이 ".wasm" 필수 파일 구성요소를 로드하지 못했습니다.
    CORS 정책에 의해 데이터 가져오기에 대한 액세스가 차단되었을 수 있습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-wasm-invalid =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 페이지에 Ruffle을 실행하기 위한 파일이 누락되었거나 잘못된 것 같습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-wasm-download =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 문제는 때때로 바로 해결될 수 있으므로 페이지를 새로고침하여 다시 시도해보세요.
    그래도 문제가 지속된다면, 웹사이트 관리자에게 문의해주세요.
error-wasm-disabled-on-edge =
    Ruffle이 ".wasm" 필수 파일 구성요소를 로드하지 못했습니다.
    이를 해결하려면 브라우저 설정에서 "개인 정보, 검색 및 서비스"를 클릭한 후, 하단으로 스크롤하여 "웹에서 보안 강화" 기능을 꺼야 합니다.
    이는 필요한 ".wasm" 파일을 브라우저에서 로드할 수 있도록 허용합니다.
    이 문제가 지속될 경우 다른 브라우저를 사용해야 할 수 있습니다.
error-javascript-conflict =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 페이지에서 사용되는 자바스크립트 코드가 Ruffle과 충돌하는 것으로 보입니다.
    만약 당신이 서버 관리자라면 빈 페이지에서 파일을 로드해보세요.
error-javascript-conflict-outdated = 또한 Ruffle의 최신 버전을 업로드하는 것을 시도하여 문제를 우회해볼 수 있습니다. (현재 빌드가 오래되었습니다: { $buildDate }).
error-csp-conflict =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 웹 서버의 CSP(Content Security Policy) 정책이 ".wasm" 필수 구성요소를 실행하는 것을 허용하지 않습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-unknown =
    Ruffle이 플래시 콘텐츠를 표시하려고 시도하는 동안 중대한 문제가 발생했습니다.
    { $outdated ->
        [true] 만약 당신이 서버 관리자라면, Ruffle의 최신 버전을 업로드하여 다시 시도해보세요. (현재 빌드가 오래되었습니다: { $buildDate }).
       *[false] 이런 현상이 발생해서는 안되므로, 버그를 제보해주신다면 감사하겠습니다!
    }
`,"save-manager.ftl":`save-delete-prompt = 정말로 이 세이브 파일을 삭제하시겠습니까?
save-reload-prompt =
    \b이 파일을 잠재적인 충돌 없이 { $action ->
        [delete] 삭제
       *[replace] 교체
    }하려면 콘텐츠를 다시 로드해야 합니다. 그래도 계속하시겠습니까?
save-download = 다운로드
save-replace = 교체
save-delete = 삭제
save-backup-all = 모든 저장 파일 다운로드
`,"volume-controls.ftl":`volume-controls = 음량 조절
volume-controls-mute = 음소거
volume-controls-volume = 음량
`},"nl-NL":{"context_menu.ftl":`context-menu-download-swf = .swf downloaden
context-menu-copy-debug-info = Kopieer debuginformatie
context-menu-open-save-manager = Open opgeslagen-data-manager
context-menu-about-ruffle =
    { $flavor ->
        [extension] Over Ruffle Uitbreiding ({ $version })
       *[other] Over Ruffle ({ $version })
    }
context-menu-hide = Verberg dit menu
context-menu-exit-fullscreen = Verlaat volledig scherm
context-menu-enter-fullscreen = Naar volledig scherm
context-menu-volume-controls = Geluidsniveaus
`,"messages.ftl":`message-cant-embed =
    Ruffle kon de Flash-inhoud op de pagina niet draaien.
    Je kan proberen het bestand in een apart tabblad te openen, om hier omheen te werken.
panic-title = Er ging iets mis :(
more-info = Meer informatie
run-anyway = Toch starten
continue = Doorgaan
report-bug = Bug rapporteren
update-ruffle = Ruffle updaten
ruffle-demo = Web Demo
ruffle-desktop = Desktopapplicatie
ruffle-wiki = Bekijk de Ruffle Wiki
enable-hardware-acceleration = Het lijkt erop dat hardwareversnelling niet beschikbaar is. Ruffle zal werken, maar gaat waarschijnlijk erg traag zijn. Je kan lezen hoe hardwareversnelling in te schakelen is door deze link te volgen.
view-error-details = Foutdetails tonen
open-in-new-tab = Openen in een nieuw tabblad
click-to-unmute = Klik om te ontdempen
error-file-protocol =
    Het lijkt erop dat je Ruffle gebruikt met het "file" protocol.
    De meeste browsers blokkeren dit om veiligheidsredenen, waardoor het niet werkt.
    In plaats hiervan raden we aan om een lokale server te draaien, de web demo te gebruiken, of de desktopapplicatie.
error-javascript-config =
    Ruffle heeft een groot probleem ondervonden vanwege een onjuiste JavaScript configuratie.
    Als je de serverbeheerder bent, kijk dan naar de foutdetails om te zien wat er verkeerd is.
    Je kan ook in de Ruffle wiki kijken voor hulp.
error-wasm-not-found =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Als je de serverbeheerder bent, controleer dan of het bestaand juist is geüpload.
    Mocht het probleem blijven voordoen, moet je misschien de "publicPath" instelling gebruiken: zie ook de Ruffle wiki voor hulp.
error-wasm-mime-type =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Deze webserver serveert ".wasm" bestanden niet met het juiste MIME type.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-swf-fetch =
    Ruffle kon het Flash SWF bestand niet inladen.
    De meest waarschijnlijke reden is dat het bestand niet langer bestaat, en er dus niets is om in te laden.
    Probeer contact op te nemen met de websitebeheerder voor hulp.
error-swf-cors =
    Ruffle kon het Flash SWD bestand niet inladen.
    Toegang is waarschijnlijk geblokeerd door het CORS beleid.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-cors =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Toegang is waarschijnlijk geblokeerd door het CORS beleid.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-invalid =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het lijkt erop dat de Ruffle bestanden ontbreken of ongeldig zijn.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-download =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Dit lost zichzelf vaak op als je de bladzijde opnieuw inlaadt.
    Zo niet, neem dan contact op met de websitebeheerder.
error-wasm-disabled-on-edge =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Om dit op te lossen, ga naar je browserinstellingen, klik op "Privacy, zoeken en diensten", scroll omlaag, en schakel "Verbeter je veiligheid op he web" uit.
    Dan kan je browser wel de vereiste ".wasm" bestanden inladen.
    Als het probleem zich blijft voordoen, moet je misschien een andere browser gebruiken.
error-javascript-conflict =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het lijkt erop dat deze pagina JavaScript code gebruikt die conflicteert met Ruffle.
    Als je de serverbeheerder bent, raden we aan om het bestand op een lege pagina te proberen in te laden.
error-javascript-conflict-outdated = Je kan ook proberen een nieuwe versie van Ruffle te installeren, om om het probleem heen te werken (huidige versie is oud: { $buildDate }).
error-csp-conflict =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het CSP-beleid staat niet toe dat het vereiste ".wasm" component kan draaien.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-unknown =
    Ruffle heeft een groot probleem onderbonden tijdens het weergeven van deze Flash-inhoud.
    { $outdated ->
        [true] Als je de serverbeheerder bent, upload dan een nieuwe versie van Ruffle (huidige versie is oud: { $buildDate }).
       *[false] Dit hoort niet te gebeuren, dus we stellen het op prijs als je de fout aan ons rapporteert!
    }
`,"save-manager.ftl":`save-delete-prompt = Weet je zeker dat je deze opgeslagen data wilt verwijderen?
save-reload-prompt =
    De enige manier om deze opgeslagen data te { $action ->
        [delete] verwijderen
       *[replace] vervangen
    } zonder potentiële problemen is door de inhoud opnieuw te laden. Toch doorgaan?
save-download = Downloaden
save-replace = Vervangen
save-delete = Verwijderen
save-backup-all = Download alle opgeslagen data
`,"volume-controls.ftl":`volume-controls = Geluidsniveaus
volume-controls-mute = Dempen
volume-controls-volume = Volume
`},"pl-PL":{"context_menu.ftl":`context-menu-download-swf = Pobierz .swf
context-menu-copy-debug-info = Kopiuj informacje debugowania
context-menu-open-save-manager = Otwórz Menadżer Zapisów
context-menu-about-ruffle =
    { $flavor ->
        [extension] O Rozszerzeniu Ruffle ({ $version })
       *[other] O Ruffle ({ $version })
    }
context-menu-hide = Ukryj to menu
context-menu-exit-fullscreen = Zamknij pełny ekran
context-menu-enter-fullscreen = Pełny ekran
context-menu-volume-controls = Sterowanie głośnością
`,"messages.ftl":`message-cant-embed =
    Ruffle nie było w stanie uruchomić zawartości Flash w tej stronie.
    Możesz spróbować otworzyć plik w nowej karcie, aby uniknąć tego problemu.
panic-title = Coś poszło nie tak :(
more-info = Więcej informacji
run-anyway = Uruchom mimo tego
continue = Kontynuuj
report-bug = Zgłoś błąd
update-ruffle = Zaktualizuj Ruffle
ruffle-desktop = Aplikacja na komputer
ruffle-wiki = Zobacz Wiki Ruffle
enable-hardware-acceleration = Wygląda na to, że akceleracja sprzętowa nie jest włączona. Chociaż Ruffle może działać, może być nieproporcjonalnie wolna. Możesz dowiedzieć się, jak włączyć akcelerację sprzętową, podążając za tym linkiem.
view-error-details = Zobacz szczegóły błędu
open-in-new-tab = Otwórz w nowej karcie
click-to-unmute = Kliknij aby wyłączyć wyciszenie
error-file-protocol =
    Wygląda na to, że używasz Ruffle w protokole "plik:".
    To nie działa ponieważ przeglądarka blokuje wiele funkcji przed działaniem ze względów bezpieczeństwa.
    Zamiast tego zapraszamy do konfiguracji serwera lokalnego lub użycia aplikacji demo lub desktopowej.
error-javascript-config =
    Ruffle napotkał poważny problem z powodu nieprawidłowej konfiguracji JavaScript.
    Jeśli jesteś administratorem serwera, prosimy o sprawdzenie szczegółów błędu, aby dowiedzieć się, który parametr jest błędny.
    Możesz również zapoznać się z wiki Ruffle po pomoc.
error-wasm-not-found =
    Ruffle nie udało się załadować wymaganego komponentu pliku ".wasm".
    Jeśli jesteś administratorem serwera, upewnij się, że plik został poprawnie przesłany.
    Jeśli problem będzie się powtarzał, być może będziesz musiał użyć ustawienia "publicPath": zapoznaj się z wiki Ruffle aby uzyskać pomoc.
error-wasm-mime-type =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Ten serwer internetowy nie obsługuje ". asm" pliki z poprawnym typem MIME.
    Jeśli jesteś administratorem serwera, zapoznaj się z wiki Ruffle aby uzyskać pomoc.
error-swf-fetch =
    Ruffle nie udało się załadować pliku Flash SWF.
    Najbardziej prawdopodobnym powodem jest to, że plik już nie istnieje, więc Ruffle nie ma nic do załadowania.
    Spróbuj skontaktować się z administratorem witryny, aby uzyskać pomoc.
error-swf-cors =
    Ruffle nie udało się załadować pliku Flash SWF.
    Dostęp do pobierania został prawdopodobnie zablokowany przez politykę CORS.
    Jeśli jesteś administratorem serwera, prosimy o pomoc z wiki Ruffle.
error-wasm-cors =
    Ruffle nie udało się załadować wymaganego komponentu pliku ".wasm".
    Dostęp do pobierania został prawdopodobnie zablokowany przez politykę CORS.
    Jeśli jesteś administratorem serwera, prosimy o pomoc z wiki Ruffle.
error-wasm-invalid =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Wygląda na to, że ta strona ma brakujące lub nieprawidłowe pliki do uruchomienia Ruffle.
    Jeśli jesteś administratorem serwera, prosimy o pomoc z wiki Ruffle.
error-wasm-download =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Może to często rozwiązać siebie, więc możesz spróbować odświeżyć stronę.
    W przeciwnym razie skontaktuj się z administratorem witryny.
error-wasm-disabled-on-edge =
    Ruffle nie udało się załadować wymaganego komponentu pliku ".wasm".
    Aby to naprawić, spróbuj otworzyć ustawienia przeglądarki, klikając "Prywatność, wyszukiwanie i usługi", przewijając w dół i wyłączając "Zwiększ bezpieczeństwo w sieci".
    Pozwoli to przeglądarce załadować wymagane pliki ".wasm".
    Jeśli problem będzie się powtarzał, być może będziesz musiał użyć innej przeglądarki.
error-javascript-conflict =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Wygląda na to, że ta strona używa kodu JavaScript, który koliduje z Ruffle.
    Jeśli jesteś administratorem serwera, zapraszamy Cię do ładowania pliku na pustej stronie.
error-javascript-conflict-outdated = Możesz również spróbować przesłać nowszą wersję Ruffle, która może ominąć problem (obecna wersja jest przestarzała: { $buildDate }).
error-csp-conflict =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Polityka bezpieczeństwa zawartości tego serwera nie zezwala na wymagany ". wasm" komponent do uruchomienia.
    Jeśli jesteś administratorem serwera, zapoznaj się z wiki Ruffle po pomoc.
error-unknown =
    Ruffle napotkał poważny problem podczas próby wyświetlenia tej zawartości Flash.
    { $outdated ->
        [true] Jeśli jesteś administratorem serwera, spróbuj przesłać nowszą wersję Ruffle (obecna wersja jest przestarzała: { $buildDate }).
       *[false] To nie powinno się wydarzyć, więc bylibyśmy wdzięczni, gdybyś mógł zgłosić błąd!
    }
`,"save-manager.ftl":`save-delete-prompt = Czy na pewno chcesz skasować ten plik zapisu?
save-reload-prompt =
    Jedyną opcją, aby { $action ->
        [delete] usunąć
       *[replace] zamienić
    } ten plik zapisu bez potencjalnych konfliktów jest przeładowanie zawartości. Czy chcesz kontynuować?
save-download = Pobierz
save-replace = Zamień
save-delete = Usuń
save-backup-all = Pobierz wszystkie pliki zapisu
`,"volume-controls.ftl":`volume-controls = Sterowanie głośnością
volume-controls-mute = Wycisz
volume-controls-volume = Głośność
`},"pt-BR":{"context_menu.ftl":`context-menu-download-swf = Baixar .swf
context-menu-copy-debug-info = Copiar informação de depuração
context-menu-open-save-manager = Abrir o Gerenciador de Salvamento
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre a extensão do Ruffle ({ $version })
       *[other] Sobre o Ruffle ({ $version })
    }
context-menu-hide = Esconder este menu
context-menu-exit-fullscreen = Sair da tela cheia
context-menu-enter-fullscreen = Entrar em tela cheia
`,"messages.ftl":`message-cant-embed =
    Ruffle não conseguiu executar o Flash incorporado nesta página.
    Você pode tentar abrir o arquivo em uma guia separada para evitar esse problema.
panic-title = Algo deu errado :(
more-info = Mais informação
run-anyway = Executar mesmo assim
continue = Continuar
report-bug = Reportar Bug
update-ruffle = Atualizar Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Aplicativo de Desktop
ruffle-wiki = Ver Wiki do Ruffle
view-error-details = Ver detalhes do erro
open-in-new-tab = Abrir em uma nova guia
click-to-unmute = Clique para ativar o som
error-file-protocol =
    Parece que você está executando o Ruffle no protocolo "file:".
    Isto não funciona como navegadores bloqueiam muitos recursos de funcionar por razões de segurança.
    Ao invés disso, convidamos você a configurar um servidor local ou a usar a demonstração da web, ou o aplicativo de desktop.
error-javascript-config =
    O Ruffle encontrou um grande problema devido a uma configuração incorreta do JavaScript.
    Se você for o administrador do servidor, convidamos você a verificar os detalhes do erro para descobrir qual parâmetro está com falha.
    Você também pode consultar o wiki do Ruffle para obter ajuda.
error-wasm-not-found =
    Ruffle falhou ao carregar o componente de arquivo ".wasm" necessário.
    Se você é o administrador do servidor, por favor, certifique-se de que o arquivo foi carregado corretamente.
    Se o problema persistir, você pode precisar usar a configuração "publicPath": por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-mime-type =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Este servidor de web não está servindo ".wasm" arquivos com o tipo MIME correto.
    Se você é o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.
error-swf-fetch =
    Ruffle falhou ao carregar o arquivo Flash SWF.
    A razão provável é que o arquivo não existe mais, então não há nada para o Ruffle carregar.
    Tente contatar o administrador do site para obter ajuda.
error-swf-cors =
    Ruffle falhou ao carregar o arquivo Flash SWF.
    O acesso para fetch provavelmente foi bloqueado pela política CORS.
    Se você for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.
error-wasm-cors =
    Ruffle falhou ao carregar o componente de arquivo ".wasm" necessário.
    O acesso para fetch foi provavelmente bloqueado pela política CORS.
    Se você é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-invalid =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Parece que esta página tem arquivos ausentes ou inválidos para executar o Ruffle.
    Se você for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.
error-wasm-download =
    O Ruffle encontrou um grande problema ao tentar inicializar.
    Muitas vezes isso pode se resolver sozinho, então você pode tentar recarregar a página.
    Caso contrário, contate o administrador do site.
error-wasm-disabled-on-edge =
    O Ruffle falhou ao carregar o componente de arquivo ".wasm" necessário.
    Para corrigir isso, tente abrir configurações do seu navegador, clicando em "Privacidade, pesquisa e serviços", rolando para baixo e desativando "Melhore sua segurança na web".
    Isso permitirá que seu navegador carregue os arquivos ".wasm" necessários.
    Se o problema persistir, talvez seja necessário usar um navegador diferente.
error-javascript-conflict =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Parece que esta página usa código JavaScript que entra em conflito com o Ruffle.
    Se você for o administrador do servidor, convidamos você a tentar carregar o arquivo em uma página em branco.
error-javascript-conflict-outdated = Você também pode tentar fazer o upload de uma versão mais recente do Ruffle que pode contornar o problema (a compilação atual está desatualizada: { $buildDate }).
error-csp-conflict =
    Ruffle encontrou um grande problema ao tentar inicializar.
    A política de segurança de conteúdo deste servidor da web não permite a execução do componente ".wasm" necessário.
    Se você for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.
error-unknown =
    O Ruffle encontrou um grande problema enquanto tentava exibir este conteúdo em Flash.
    { $outdated ->
        [true] Se você é o administrador do servidor, por favor tente fazer o upload de uma versão mais recente do Ruffle (a compilação atual está desatualizada: { $buildDate }).
       *[false] Isso não deveria acontecer, então apreciaríamos muito se você pudesse arquivar um bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Tem certeza que deseja excluir este arquivo de salvamento?
save-reload-prompt =
    A única maneira de { $action ->
        [delete] excluir
       *[replace] substituir
    } este arquivo sem potencial conflito é recarregar este conteúdo. Deseja continuar mesmo assim?
save-download = Baixar
save-replace = Substituir
save-delete = Excluir
save-backup-all = Baixar todos os arquivos de salvamento
`,"volume-controls.ftl":""},"pt-PT":{"context_menu.ftl":`context-menu-download-swf = Descarga.swf
context-menu-copy-debug-info = Copiar informações de depuração
context-menu-open-save-manager = Abrir Gestor de Gravações
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre a extensão do Ruffle ({ $version })
       *[other] Sobre o Ruffle ({ $version })
    }
context-menu-hide = Esconder este menu
context-menu-exit-fullscreen = Fechar Ecrã Inteiro
context-menu-enter-fullscreen = Abrir Ecrã Inteiro
context-menu-volume-controls = Controlos de volume
`,"messages.ftl":`message-cant-embed =
    O Ruffle não conseguiu abrir o Flash integrado nesta página.
    Para tentar resolver o problema, pode abrir o ficheiro num novo separador.
panic-title = Algo correu mal :(
more-info = Mais informações
run-anyway = Executar mesmo assim
continue = Continuar
report-bug = Reportar falha
update-ruffle = Atualizar o Ruffle
ruffle-demo = Demonstração na Web
ruffle-desktop = Aplicação para Desktop
ruffle-wiki = Ver a Wiki do Ruffle
enable-hardware-acceleration = Parece que a aceleração de hardware não está ativada. Mesmo que o Ruffle funcione, pode estar excessivamente lento. Descubra como ativar a aceleração de hardware seguindo este link.
view-error-details = Ver detalhes do erro
open-in-new-tab = Abrir num novo separador
click-to-unmute = Clique para ativar o som
error-file-protocol =
    Parece que executa o Ruffle no protocolo "file:".
    Isto não funciona, já que os navegadores bloqueiam muitas funcionalidades por razões de segurança.
    Em vez disto, recomendados configurar um servidor local ou usar a demonstração na web, ou a aplicação para desktop.
error-javascript-config =
    O Ruffle encontrou um problema maior devido a uma configuração de JavaScript incorreta.
    Se é o administrador do servidor, convidamo-lo a verificar os detalhes do erro para descobrir o parâmetro problemático.
    Pode ainda consultar a wiki do Ruffle para obter ajuda.
error-wasm-not-found =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.
    Se é o administrador do servidor, por favor certifique-se de que o ficheiro foi devidamente carregado.
    Se o problema persistir, poderá querer usar a configuração "publicPath": consulte a wiki do Ruffle para obter ajuda.
error-wasm-mime-type =
    O Ruffle encontrou um problema maior ao tentar inicializar.
    Este servidor de web não suporta ficheiros ".wasm" com o tipo MIME correto.
    Se é o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.
error-swf-fetch =
    Ruffle falhou ao carregar o arquivo SWF do Flash
    A razão mais provável é que o arquivo não existe mais, então não há nada para o Ruffle carregar.
    Tente contactar o administrador do site para obter ajuda.
error-swf-cors =
    O Ruffle falhou ao carregar o ficheiro Flash SWF.
    Acesso a buscar foi provavelmente bloqueado pela política de CORS.
    Se é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-cors =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.
    O acesso a buscar foi provavelmente bloqueado pela política CORS.
    Se é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-invalid =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Parece que esta página está ausente ou arquivos inválidos para executar o Ruffle.
    Se você é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-download =
    O Ruffle encontrou um problema maior ao tentar inicializar.
    Isto frequentemente resolve-se sozinho, portanto experimente recarregar a página.
    Caso contrário, por favor contacte o administrador do site.
error-wasm-disabled-on-edge =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.
    Para corrigir isso, tente abrir as opções do seu navegador, clicando em "Privacidade, pesquisa e serviços", rolando para baixo e desativando "Melhore a sua segurança na web".
    Isto permitirá ao seu navegador carregar os ficheiros ".wasm" necessários.
    Se o problema persistir, talvez seja necessário usar um navegador diferente.
error-javascript-conflict =
    O Ruffle encontrou um problema maior ao tentar inicializar.
    Parece que esta página usa código JavaScript que entra em conflito com o Ruffle.
    Se é o administrador do servidor, convidamo-lo a tentar carregar o ficheiro em numa página em branco.
error-javascript-conflict-outdated = Pode ainda tentar carregar uma versão mais recente do Ruffle que talvez contorne o problema (a compilação atual está desatualizada: { $buildDate }).
error-csp-conflict =
    O Ruffle encontrou um problema maior ao tentar inicializar.
    A Política de Segurança de Conteúdo deste servidor não permite que o componente ".wasm" necessário seja executado.
    Se é o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.
error-unknown =
    O Ruffle encontrou um problema maior enquanto tentava mostrar este conteúdo em Flash.
    { $outdated ->
        [true] Se é o administrador do servidor, por favor tente carregar uma versão mais recente do Ruffle (a compilação atual está desatualizada: { $buildDate }).
       *[false] Não era suposto isto ter acontecido, por isso agradeceríamos muito se pudesse reportar a falha!
    }
`,"save-manager.ftl":`save-delete-prompt = Tem a certeza de que quer apagar esta gravação?
save-reload-prompt =
    A única forma de { $action ->
        [delete] apagar
       *[replace] substituir
    } esta gravação sem um potencial conflito é recarregar este conteúdo. Deseja continuar mesmo assim?
save-download = Descarregar
save-replace = Substituir
save-delete = Apagar
save-backup-all = Descarregar todas as gravações
`,"volume-controls.ftl":`volume-controls = Controlos de volume
volume-controls-mute = Silenciar
volume-controls-volume = Volume
`},"ro-RO":{"context_menu.ftl":`context-menu-download-swf = Descarcă .swf
context-menu-copy-debug-info = Copiază informațiile de depanare
context-menu-open-save-manager = Deschide managerul de salvări
context-menu-about-ruffle =
    { $flavor ->
        [extension] Despre extensia Ruffle ({ $version })
       *[other] Despre Ruffle ({ $version })
    }
context-menu-hide = Ascunde acest meniu
context-menu-exit-fullscreen = Ieși din ecranul complet
context-menu-enter-fullscreen = Intră în ecran complet
`,"messages.ftl":`message-cant-embed =
    Ruffle nu a putut rula Flash încorporat în această pagină.
    Puteți încerca să deschideți fișierul într-o filă separată, pentru a evita această problemă.
panic-title = Ceva a mers prost :(
more-info = Mai multe informații
run-anyway = Rulează oricum
continue = Continuă
report-bug = Raportează un bug
update-ruffle = Actualizează Ruffle
ruffle-demo = Demo web
ruffle-desktop = Aplicație desktop
ruffle-wiki = Vezi wikiul Ruffle
view-error-details = Vezi detaliile erorii
open-in-new-tab = Deschide într-o filă nouă
click-to-unmute = Dă click pentru a dezmuți
error-file-protocol =
    Se pare că rulezi Ruffle pe protocolul „file:”.
    Acesta nu funcționează, deoarece browserele blochează funcționarea multor funcții din motive de securitate.
    În schimb, te invităm să configurezi un server local sau să folosești fie demoul web, fie aplicația desktop.
error-javascript-config =
    Ruffle a întâmpinat o problemă majoră din cauza unei configurări incorecte a JavaScript.
    Dacă sunteți administratorul serverului, vă invităm să verificați detaliile de eroare pentru a afla care parametru este defect.
    Puteți consulta și Ruffle wiki pentru ajutor.
error-wasm-not-found =
    Ruffle a eșuat la încărcarea componentei de fișier ".wasm".
    Dacă sunteți administratorul serverului, vă rugăm să vă asigurați că fișierul a fost încărcat corect.
    Dacă problema persistă, poate fi necesar să utilizaţi setarea "publicPath": vă rugăm să consultaţi Ruffle wiki pentru ajutor.
error-wasm-mime-type =
    Ruffle a întâmpinat o problemă majoră în timp ce se încerca inițializarea.
    Acest server web nu servește ". asm" fișiere cu tipul corect MIME.
    Dacă sunteți administrator de server, vă rugăm să consultați Ruffle wiki pentru ajutor.
error-swf-fetch =
    Ruffle a eșuat la încărcarea fișierului Flash SWF.
    Motivul cel mai probabil este că fişierul nu mai există, deci nu există nimic pentru Ruffle să se încarce.
    Încercați să contactați administratorul site-ului web pentru ajutor.
error-swf-cors =
    Ruffle a eșuat la încărcarea fișierului Flash SWF.
    Accesul la preluare a fost probabil blocat de politica CORS.
    Dacă sunteţi administratorul serverului, vă rugăm să consultaţi Ruffle wiki pentru ajutor.
error-wasm-cors =
    Ruffle a eșuat în încărcarea componentei de fișier ".wasm".
    Accesul la preluare a fost probabil blocat de politica CORS.
    Dacă sunteţi administratorul serverului, vă rugăm să consultaţi Ruffle wiki pentru ajutor.
error-wasm-invalid =
    Ruffle a întâmpinat o problemă majoră în timp ce se încearcă inițializarea.
    Se pare că această pagină are fișiere lipsă sau invalide pentru rularea Ruffle.
    Dacă sunteţi administratorul serverului, vă rugăm să consultaţi Ruffle wiki pentru ajutor.
error-wasm-download =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să inițializeze.
    Acest lucru se poate rezolva adesea, astfel încât puteţi încerca să reîncărcaţi pagina.
    Altfel, vă rugăm să contactaţi administratorul site-ului.
error-wasm-disabled-on-edge =
    Ruffle nu a putut încărca componenta de fișier ".wasm".
    Pentru a remedia acest lucru, încercați să deschideți setările browser-ului dvs., apăsând pe "Confidențialitate, căutare și servicii", derulând în jos și închizând "Îmbunătățește-ți securitatea pe web".
    Acest lucru va permite browser-ului să încarce fișierele ".wasm" necesare.
    Dacă problema persistă, ar putea fi necesar să folosiți un browser diferit.
error-javascript-conflict =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să inițializeze.
    Se pare că această pagină folosește codul JavaScript care intră în conflict cu Ruffle.
    Dacă sunteţi administratorul serverului, vă invităm să încărcaţi fişierul pe o pagină goală.
error-javascript-conflict-outdated = De asemenea, poți încerca să încarci o versiune mai recentă de Ruffle care poate ocoli problema (versiunea curentă este expirată: { $buildDate }).
error-csp-conflict =
    Ruffle a întâmpinat o problemă majoră în timp ce se încerca inițializarea.
    Politica de securitate a conținutului acestui server web nu permite serviciul necesar". asm" componentă pentru a rula.
    Dacă sunteți administratorul de server, consultați Ruffle wiki pentru ajutor.
error-unknown =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să afișeze acest conținut Flash.
    { $outdated ->
        [true] Dacă ești administratorul serverului, te rugăm să încerci să încarci o versiune mai recentă de Ruffle (versiunea actuală este depăşită: { $buildDate }).
       *[false] Acest lucru nu ar trebui să se întâmple, așa că am aprecia foarte mult dacă ai putea trimite un bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Sigur vrei să ștergi acest fișier de salvare?
save-reload-prompt =
    Singura cale de a { $action ->
        [delete] șterge
       *[replace] înlocui
    } acest fișier de salvare fără un conflict potențial este de a reîncărca acest conținut. Dorești să continui oricum?
save-download = Descarcă
save-replace = Înlocuiește
save-delete = Șterge
`,"volume-controls.ftl":`volume-controls = Comenzi pentru volum
`},"ru-RU":{"context_menu.ftl":`context-menu-download-swf = Скачать .swf
context-menu-copy-debug-info = Копировать отладочную информацию
context-menu-open-save-manager = Менеджер сохранений
context-menu-about-ruffle =
    { $flavor ->
        [extension] О расширении Ruffle ({ $version })
       *[other] О Ruffle ({ $version })
    }
context-menu-hide = Скрыть это меню
context-menu-exit-fullscreen = Оконный режим
context-menu-enter-fullscreen = Полноэкранный режим
context-menu-volume-controls = Громкость
`,"messages.ftl":`message-cant-embed =
    Ruffle не смог запустить Flash, используемый на этой странице.
    Чтобы обойти эту проблему, вы можете попробовать открыть файл в отдельной вкладке.
panic-title = Что-то пошло не так :(
more-info = Подробнее
run-anyway = Всё равно запустить
continue = Продолжить
report-bug = Сообщить об ошибке
update-ruffle = Обновить Ruffle
ruffle-demo = Веб-демо
ruffle-desktop = Настольное приложение
ruffle-wiki = Открыть вики Ruffle
enable-hardware-acceleration = Похоже, что аппаратное ускорение не включено. Хоть Ruffle и будет работать, он может быть неоправданно медленным. О том, как включить аппаратное ускорение, можно узнать, перейдя по ссылке.
view-error-details = Сведения об ошибке
open-in-new-tab = Открыть в новой вкладке
click-to-unmute = Включить звук
error-file-protocol =
    Похоже, что вы запускаете Ruffle по протоколу "file:".
    Это не работает, поскольку браузеры блокируют работу многих функций по соображениям безопасности.
    Вместо этого мы предлагаем вам использовать настольное приложение, веб-демо или настроить локальный сервер.
error-javascript-config =
    Возникла серьёзная ошибка из-за неправильной конфигурации JavaScript.
    Если вы являетесь администратором сервера, мы предлагаем вам проверить детали ошибки, чтобы выяснить, какой параметр дал сбой.
    Вы также можете обратиться за помощью к вики Ruffle.
error-wasm-not-found =
    Ruffle не удалось запустить необходимый компонент файла ".wasm".
    Если вы администратор сервера, пожалуйста, убедитесь, что файл был загружен правильно.
    Если проблема не устраняется, вам может потребоваться использовать настройку "publicPath": обратитесь к вики Ruffle.
error-wasm-mime-type =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Этот веб-сервер не предоставляет файлы ".wasm" с правильным типом MIME.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-swf-fetch =
    Ruffle не удалось запустить SWF-файл Flash.
    Вероятнее всего, файл больше не существует, поэтому Ruffle нечего загружать.
    Попробуйте связаться с администратором сайта для получения помощи.
error-swf-cors =
    Ruffle не удалось запустить SWF-файл Flash.
    Скорее всего, доступ к файлу был заблокирован политикой CORS.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-wasm-cors =
    Ruffle не удалось загрузить необходимый компонент файла ".wasm".
    Скорее всего, доступ к файлу был заблокирован политикой CORS.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-wasm-invalid =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Похоже, что на этой странице отсутствуют файлы для запуска Ruffle или они недействительны.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-wasm-download =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Чаще всего эта проблема устраняется сама собою, поэтому вы можете просто перезагрузить страницу.
    Если ошибка продолжает появляться, свяжитесь с администратором сайта.
error-wasm-disabled-on-edge =
    Ruffle не удалось загрузить необходимый компонент файла ".wasm".
    Чтобы исправить эту ошибку, попробуйте отключить в настройках браузера дополнительную конфиденциальность. Это позволит браузеру загрузить необходимые WASM-файлы.
    Если проблема осталась, вам может потребоваться другой браузер.
error-javascript-conflict =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Похоже, что эта страница использует конфликтующий с Ruffle код JavaScript.
    Если вы являетесь администратором сервера, мы предлагаем вам попробовать запустить файл на пустой странице.
error-javascript-conflict-outdated = Вы также можете попробовать загрузить последнюю версию Ruffle, которая может обойти проблему (текущая версия устарела: { $buildDate }).
error-csp-conflict =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Политика безопасности содержимого этого веб-сервера не позволяет использовать требуемые компоненты для запуска ".wasm".
    Если вы являетесь администратором сервера, обратитесь за помощью к вики Ruffle.
error-unknown =
    Ruffle столкнулся с серьёзной проблемой при попытке отобразить этот Flash-контент.
    { $outdated ->
        [true] Если вы администратор сервера, попробуйте загрузить более новую версию Ruffle (текущая версия устарела: { $buildDate }).
       *[false] Этого не должно происходить, поэтому мы будем очень признательны, если вы сообщите нам об ошибке!
    }
`,"save-manager.ftl":`save-delete-prompt = Удалить этот файл сохранения?
save-reload-prompt =
    Единственный способ { $action ->
        [delete] удалить
       *[replace] заменить
    } этот файл сохранения без потенциального конфликта – перезапустить запущенный контент. Всё равно продолжить?
save-download = Скачать
save-replace = Заменить
save-delete = Удалить
save-backup-all = Скачать все сохранения
`,"volume-controls.ftl":`volume-controls = Регулировка громкости
volume-controls-mute = Без звука
volume-controls-volume = Громкость
`},"sk-SK":{"context_menu.ftl":`context-menu-download-swf = Stiahnuť .swf
context-menu-copy-debug-info = Skopírovať debug info
context-menu-open-save-manager = Otvoriť správcu uložení
context-menu-about-ruffle =
    { $flavor ->
        [extension] O Ruffle rozšírení ({ $version })
       *[other] O Ruffle ({ $version })
    }
context-menu-hide = Skryť menu
context-menu-exit-fullscreen = Ukončiť režim celej obrazovky
context-menu-enter-fullscreen = Prejsť do režimu celej obrazovky
context-menu-volume-controls = Ovládanie hlasitosti
`,"messages.ftl":`message-cant-embed =
    Ruffle nemohol spustiť Flash vložený na tejto stránke.
    Môžete sa pokúsiť otvoriť súbor na samostatnej karte, aby ste sa vyhli tomuto problému.
panic-title = Niečo sa pokazilo :(
more-info = Viac informácií
run-anyway = Spustiť aj tak
continue = Pokračovať
report-bug = Nahlásiť chybu
update-ruffle = Aktualizovať Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktopová aplikácia
ruffle-wiki = Zobraziť Ruffle Wiki
enable-hardware-acceleration = Zdá sa, že hardvérová akcelerácia nie je povolená. Aj keď Ruffle funguje správne, môže byť neprimerane pomalý. Ako povoliť hardvérovú akceleráciu zistíte na tomto odkaze.
view-error-details = Zobraziť podrobnosti o chybe
open-in-new-tab = Otvoriť na novej karte
click-to-unmute = Kliknutím zapnete zvuk
error-file-protocol =
    Zdá sa, že používate Ruffle na protokole "file:".
    To nie je možné, pretože prehliadače blokujú fungovanie mnohých funkcií z bezpečnostných dôvodov.
    Namiesto toho vám odporúčame nastaviť lokálny server alebo použiť web demo či desktopovú aplikáciu.
error-javascript-config =
    Ruffle narazil na problém v dôsledku nesprávnej konfigurácie JavaScriptu.
    Ak ste správcom servera, odporúčame vám skontrolovať podrobnosti o chybe, aby ste zistili, ktorý parameter je chybný.
    Pomoc môžete získať aj na wiki Ruffle.
error-wasm-not-found =
    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.
    Ak ste správcom servera, skontrolujte, či bol súbor správne nahraný.
    Ak problém pretrváva, možno budete musieť použiť nastavenie „publicPath“: pomoc nájdete na wiki Ruffle.
error-wasm-mime-type =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Tento webový server neposkytuje súbory „.wasm“ so správnym typom MIME.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-swf-fetch =
    Ruffle sa nepodarilo načítať SWF súbor Flash.
    Najpravdepodobnejším dôvodom je, že súbor už neexistuje, takže Ruffle nemá čo načítať.
    Skúste požiadať o pomoc správcu webovej lokality.
error-swf-cors =
    Ruffle sa nepodarilo načítať SWF súbor Flash.
    Prístup k načítaniu bol pravdepodobne zablokovaný politikou CORS.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-wasm-cors =
    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.
    Prístup k načítaniu bol pravdepodobne zablokovaný politikou CORS.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-wasm-invalid =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Zdá sa, že na tejto stránke chýbajú alebo sú neplatné súbory na spustenie Ruffle.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-wasm-download =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Problém sa môže vyriešiť aj sám, takže môžete skúsiť stránku načítať znova.
    V opačnom prípade kontaktujte administrátora stránky.
error-wasm-disabled-on-edge =
    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.
    Ak chcete tento problém vyriešiť, skúste otvoriť nastavenia prehliadača, kliknite na položku „Ochrana osobných údajov, vyhľadávanie a služby“, prejdite nadol a vypnite možnosť „Zvýšte svoju bezpečnosť na webe“.
    Vášmu prehliadaču to umožní načítať požadované súbory „.wasm“.
    Ak problém pretrváva, možno budete musieť použiť iný prehliadač.
error-javascript-conflict =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Zdá sa, že táto stránka používa kód JavaScript, ktorý je v konflikte s Ruffle.
    Ak ste správcom servera, odporúčame vám skúsiť načítať súbor na prázdnu stránku.
error-javascript-conflict-outdated = Môžete sa tiež pokúsiť nahrať novšiu verziu Ruffle, ktorá môže daný problém vyriešiť (aktuálny build je zastaraný: { $buildDate }).
error-csp-conflict =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Zásady zabezpečenia obsahu tohto webového servera nepovoľujú spustenie požadovaného komponentu „.wasm“.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-unknown =
    Ruffle narazil na problém pri pokuse zobraziť tento Flash obsah.
    { $outdated ->
         [true] Ak ste správcom servera, skúste nahrať novšiu verziu Ruffle (aktuálny build je zastaraný: { $buildDate }).
        *[false] Toto by sa nemalo stať, takže by sme naozaj ocenili, keby ste mohli nahlásiť chybu!
    }
`,"save-manager.ftl":`save-delete-prompt = Naozaj chcete odstrániť tento súbor s uloženými pozíciami?
save-reload-prompt =
    Jediný spôsob, ako { $action ->
         [delete] vymazať
        *[replace] nahradiť
    } tento súbor s uloženými pozíciami bez potenciálneho konfliktu je opätovné načítanie tohto obsahu. Chcete napriek tomu pokračovať?
save-download = Stiahnuť
save-replace = Nahradiť
save-delete = Vymazať
save-backup-all = Stiahnuť všetky súbory s uloženými pozíciami
`,"volume-controls.ftl":`volume-controls = Ovládanie hlasitosti
volume-controls-mute = Stlmiť
volume-controls-volume = Hlasitosť
`},"sv-SE":{"context_menu.ftl":`context-menu-download-swf = Ladda ner .swf
context-menu-copy-debug-info = Kopiera felsökningsinfo
context-menu-open-save-manager = Öppna Sparhanteraren
context-menu-about-ruffle =
    { $flavor ->
        [extension] Om Ruffle-tillägget ({ $version })
       *[other] Om Ruffle ({ $version })
    }
context-menu-hide = Dölj denna meny
context-menu-exit-fullscreen = Avsluta helskärm
context-menu-enter-fullscreen = Helskärm
context-menu-volume-controls = Ljudkontroller
`,"messages.ftl":`message-cant-embed =
    Ruffle kunde inte köra det inbäddade Flashinnehållet på denna sida.
    Du kan försöka öppna filen i en separat flik för att kringgå problemet.
panic-title = Något gick fel :(
more-info = Mer info
run-anyway = Kör ändå
continue = Fortsätt
report-bug = Rapportera Bugg
update-ruffle = Uppdatera Ruffle
ruffle-demo = Webbdemo
ruffle-desktop = Skrivbordsprogram
ruffle-wiki = Se Ruffle-wiki
enable-hardware-acceleration = Det verkar som att hårdvaruacceleration inte är på. Ruffle kan fortfarande fungera men kan vara orimligt långsam. Du kan ta reda på hur man sätter på hårdvaruacceleration genom att följa denna länk.
view-error-details = Visa Felinformation
open-in-new-tab = Öppna i en ny flik
click-to-unmute = Klicka för ljud
error-file-protocol =
    Det verkar som att du kör Ruffle på "fil:"-protokollet.
    Detta fungerar inte eftersom webbläsare blockerar många funktioner från att fungera av säkerhetsskäl.
    Istället bjuder vi in dig att sätta upp en lokal server eller antingen använda webbdemon eller skrivbordsprogrammet.
error-javascript-config =
    Ruffle har stött på ett stort fel på grund av en felaktig JavaScript-konfiguration.
    Om du är serveradministratören bjuder vi in dig att kontrollera feldetaljerna för att ta reda på vilken parameter som är felaktig.
    Du kan också konsultera Ruffle-wikin för hjälp.
error-wasm-not-found =
    Ruffle misslyckades ladda ".wasm"-filkomponenten.
    Om du är serveradministratören se till att filen har laddats upp korrekt.
    Om problemet kvarstår kan du behöva använda inställningen "publicPath": konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-mime-type =
    Ruffle har stött på ett stort fel under initialiseringen.
    Denna webbserver serverar inte ".wasm"-filer med korrekt MIME-typ.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-swf-fetch =
    Ruffle misslyckades ladda SWF-filen.
    Det mest sannolika skälet är att filen inte längre existerar, så det finns inget för Ruffle att köra.
    Försök att kontakta webbplatsadministratören för hjälp.
error-swf-cors =
    Ruffle misslyckades ladda SWF-filen.
    Åtkomst att hämta har sannolikt blockerats av CORS-policy.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-cors =
    Ruffle misslyckades ladda ".wasm"-filkomponenten.
    Åtkomst att hämta har sannolikt blockerats av CORS-policy.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-invalid =
    Ruffle har stött på ett stort fel under initialiseringen.
    Det verkar som att den här sidan har saknade eller ogiltiga filer för att köra Ruffle.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-download =
    Ruffle har stött på ett stort fel under initialiseringen.
    Detta kan ofta lösas av sig själv så du kan prova att ladda om sidan.
    Kontakta annars vänligen webbplatsens administratör.
error-wasm-disabled-on-edge =
    Ruffle misslyckades ladda ".wasm"-filkomponenten.
    För att åtgärda detta försök att öppna webbläsarens inställningar, klicka på "Sekretess, sökning och tjänster", bläddra ner och stäng av "Förbättra säkerheten på webben".
    Detta tillåter din webbläsare ladda ".wasm"-filerna.
    Om problemet kvarstår kan du behöva använda en annan webbläsare.
error-javascript-conflict =
    Ruffle har stött på ett stort fel under initialiseringen.
    Det verkar som att den här sidan använder JavaScript-kod som stör Ruffle.
    Om du är serveradministratören bjuder vi in dig att försöka köra filen på en blank sida.
error-javascript-conflict-outdated = Du kan också försöka ladda upp en nyare version av Ruffle, vilket kan kringgå problemet (nuvarande version är utdaterad: { $buildDate }).
error-csp-conflict =
    Ruffle har stött på ett stort fel under initialiseringen.
    Denna webbservers Content Security Policy tillåter inte ".wasm"-komponenten att köra.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-unknown =
    Ruffle har stött på ett stort fel medan den försökte visa Flashinnehållet.
    { $outdated ->
        [true] Om du är serveradministratören försök att ladda upp en nyare version av Ruffle (nuvarande version är utdaterad: { $buildDate }).
       *[false] Detta är inte tänkt att hända så vi skulle verkligen uppskatta om du kunde rapportera in en bugg!
    }
`,"save-manager.ftl":`save-delete-prompt = Är du säker på att du vill radera sparfilen?
save-reload-prompt =
    Det enda sättet att { $action ->
        [delete] radera
       *[replace] ersätta
    } denna sparfil utan potentiell konflikt är att ladda om innehållet. Vill du fortsätta ändå?
save-download = Ladda ner
save-replace = Ersätt
save-delete = Radera
save-backup-all = Ladda ner alla sparfiler
`,"volume-controls.ftl":`volume-controls = Ljudkontroller
volume-controls-mute = Stäng av ljud
volume-controls-volume = Volym
`},"tr-TR":{"context_menu.ftl":`context-menu-download-swf = İndir .swf
context-menu-copy-debug-info = Hata ayıklama bilgisini kopyala
context-menu-open-save-manager = Kayıt Yöneticisini Aç
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle Uzantısı Hakkında ({ $version })
       *[other] Ruffle Hakkında ({ $version })
    }
context-menu-hide = Bu menüyü gizle
context-menu-exit-fullscreen = Tam ekrandan çık
context-menu-enter-fullscreen = Tam ekran yap
context-menu-volume-controls = Ses kontrolleri
`,"messages.ftl":`message-cant-embed =
    Ruffle, bu sayfaya gömülü Flash'ı çalıştıramadı.
    Bu sorunu ortadan kaldırmak için dosyayı ayrı bir sekmede açmayı deneyebilirsiniz.
panic-title = Bir şeyler yanlış gitti :(
more-info = Daha fazla bilgi
run-anyway = Yine de çalıştır
continue = Devam et
report-bug = Hata Bildir
update-ruffle = Ruffle'ı Güncelle
ruffle-demo = Ağ Demosu
ruffle-desktop = Masaüstü Uygulaması
ruffle-wiki = Ruffle Wiki'yi Görüntüle
enable-hardware-acceleration = Görünüşe göre donanım hızlandırma etkin değil. Ruffle çalışabilir ancak fazlasıyla yavaş olabilir. Donanım hızlandırmayı nasıl etkinleştirebiliceğiniz hakkında bu linkten bilgi alabilirsiniz.
view-error-details = Hata Ayrıntılarını Görüntüle
open-in-new-tab = Yeni sekmede aç
click-to-unmute = Sesi açmak için tıklayın
error-file-protocol =
    Görünüşe göre Ruffle'ı "dosya:" protokolünde çalıştırıyorsunuz.
    Tarayıcılar güvenlik nedenleriyle birçok özelliğin çalışmasını engellediğinden bu işe yaramaz.
    Bunun yerine, sizi yerel bir sunucu kurmaya veya ağın demosunu ya da masaüstü uygulamasını kullanmaya davet ediyoruz.
error-javascript-config =
    Ruffle, yanlış bir JavaScript yapılandırması nedeniyle önemli bir sorunla karşılaştı.
    Sunucu yöneticisiyseniz, hangi parametrenin hatalı olduğunu bulmak için sizi hata ayrıntılarını kontrol etmeye davet ediyoruz.
    Yardım için Ruffle wiki'sine de başvurabilirsiniz.
error-wasm-not-found =
    Ruffle gerekli ".wasm" dosya bileşenini yükleyemedi.
    Sunucu yöneticisi iseniz, lütfen dosyanın doğru bir şekilde yüklendiğinden emin olun.
    Sorun devam ederse, "publicPath" ayarını kullanmanız gerekebilir: yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-mime-type =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Bu web sunucusu, doğru MIME tipinde ".wasm" dosyaları sunmuyor.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-swf-fetch =
    Ruffle, Flash SWF dosyasını yükleyemedi.
    Bunun en olası nedeni, dosyanın artık mevcut olmaması ve bu nedenle Ruffle'ın yükleyeceği hiçbir şeyin olmamasıdır.
    Yardım için web sitesi yöneticisiyle iletişime geçmeyi deneyin.
error-swf-cors =
    Ruffle, Flash SWF dosyasını yükleyemedi.
    Getirme erişimi muhtemelen CORS politikası tarafından engellenmiştir.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-cors =
    Ruffle gerekli ".wasm" dosya bileşenini yükleyemedi.
    Getirme erişimi muhtemelen CORS politikası tarafından engellenmiştir.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-invalid =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Görünüşe göre bu sayfada Ruffle'ı çalıştırmak için eksik veya geçersiz dosyalar var.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-download =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Bu genellikle kendi kendine çözülebilir, bu nedenle sayfayı yeniden yüklemeyi deneyebilirsiniz.
    Aksi takdirde, lütfen site yöneticisiyle iletişime geçin.
error-wasm-disabled-on-edge =
    Ruffle gerekli ".wasm" dosya bileşenini yükleyemedi.
    Bunu düzeltmek için tarayıcınızın ayarlarını açın, "Gizlilik, arama ve hizmetler"i tıklayın, aşağı kaydırın ve "Web'de güvenliğinizi artırın"ı kapatmayı deneyin.
    Bu, tarayıcınızın gerekli ".wasm" dosyalarını yüklemesine izin verecektir.
    Sorun devam ederse, farklı bir tarayıcı kullanmanız gerekebilir.
error-javascript-conflict =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Görünüşe göre bu sayfa, Ruffle ile çakışan JavaScript kodu kullanıyor.
    Sunucu yöneticisiyseniz, sizi dosyayı boş bir sayfaya yüklemeyi denemeye davet ediyoruz.
error-javascript-conflict-outdated = Ayrıca sorunu giderebilecek daha yeni bir Ruffle sürümü yüklemeyi de deneyebilirsiniz (mevcut yapım eskimiş: { $buildDate }).
error-csp-conflict =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Bu web sunucusunun İçerik Güvenliği Politikası, gerekli ".wasm" bileşeninin çalışmasına izin vermiyor.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine bakın.
error-unknown =
    Ruffle, bu Flash içeriğini görüntülemeye çalışırken önemli bir sorunla karşılaştı.
    { $outdated ->
        [true] Sunucu yöneticisiyseniz, lütfen Ruffle'ın daha yeni bir sürümünü yüklemeyi deneyin (mevcut yapım eskimiş: { $buildDate }).
       *[false] Bunun olmaması gerekiyor, bu yüzden bir hata bildirebilirseniz çok memnun oluruz!
    }
`,"save-manager.ftl":`save-delete-prompt = Bu kayıt dosyasını silmek istediğinize emin misiniz?
save-reload-prompt =
    Bu kaydetme dosyasını potansiyel çakışma olmadan { $action ->
        [delete] silmenin
       *[replace] değiştirmenin
    } tek yolu, bu içeriği yeniden yüklemektir. Yine de devam etmek istiyor musunuz?
save-download = İndir
save-replace = Değiştir
save-delete = Sil
save-backup-all = Tüm kayıt dosyalarını indir
`,"volume-controls.ftl":`volume-controls = Ses kontrolleri
volume-controls-mute = Sustur
volume-controls-volume = Ses
`},"zh-CN":{"context_menu.ftl":`context-menu-download-swf = 下载 .swf
context-menu-copy-debug-info = 复制调试信息
context-menu-open-save-manager = 打开存档管理器
context-menu-about-ruffle =
    { $flavor ->
        [extension] 关于 Ruffle 扩展 ({ $version })
       *[other] 关于 Ruffle ({ $version })
    }
context-menu-hide = 隐藏此菜单
context-menu-exit-fullscreen = 退出全屏
context-menu-enter-fullscreen = 进入全屏
context-menu-volume-controls = 音量控制
`,"messages.ftl":`message-cant-embed =
    Ruffle 无法运行嵌入在此页面中的 Flash。
    您可以尝试在单独的标签页中打开该文件，以回避此问题。
panic-title = 出了些问题 :(
more-info = 更多信息
run-anyway = 仍然运行
continue = 继续
report-bug = 反馈问题
update-ruffle = 更新 Ruffle
ruffle-demo = 网页演示
ruffle-desktop = 桌面应用程序
ruffle-wiki = 查看 Ruffle Wiki
enable-hardware-acceleration = 看起来硬件加速未启用。虽然 Ruffle 可能运行，但可能会非常慢。您可以通过此链接了解启用硬件加速的方法。
view-error-details = 查看错误详情
open-in-new-tab = 在新标签页中打开
click-to-unmute = 点击取消静音
error-file-protocol =
    看来您正在 "file:" 协议上使用 Ruffle。
    由于浏览器以安全原因阻止许多功能，因此这不起作用。
    相反我们邀请您设置本地服务器或使用网页演示或桌面应用程序。
error-javascript-config =
    由于错误的 JavaScript 配置，Ruffle 遇到了一个重大问题。
    如果您是服务器管理员，我们邀请您检查错误详细信息，以找出哪个参数有故障。
    您也可以查阅 Ruffle 的 Wiki 获取帮助。
error-wasm-not-found =
    Ruffle 无法加载所需的 “.wasm” 文件组件。
    如果您是服务器管理员，请确保文件已正确上传。
    如果问题仍然存在，您可能需要使用 “publicPath” 设置：请查看 Ruffle 的 Wiki 获取帮助。
error-wasm-mime-type =
    Ruffle 在试图初始化时遇到了一个重大问题。
    该网站服务器没有提供 ".asm” 文件正确的 MIME 类型。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-swf-fetch =
    Ruffle 无法加载 Flash SWF 文件。
    最可能的原因是文件不再存在所以 Ruffle 没有要加载的内容。
    请尝试联系网站管理员寻求帮助。
error-swf-cors =
    Ruffle 无法加载 Flash SWF 文件。
    获取权限可能被 CORS 策略阻止。
    如果您是服务器管理员，请参考 Ruffle Wiki 获取帮助。
error-wasm-cors =
    Ruffle 无法加载所需的“.wasm”文件组件。
    获取权限可能被 CORS 策略阻止。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-wasm-invalid =
    Ruffle 在试图初始化时遇到了一个重大问题。
    这个页面似乎缺少文件来运行 Curl。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-wasm-download =
    Ruffle 在试图初始化时遇到了一个重大问题。
    这通常可以自行解决，因此您可以尝试重新加载页面。
    否则请联系网站管理员。
error-wasm-disabled-on-edge =
    Ruffle 无法加载所需的 “.wasm” 文件组件。
    要解决这个问题，请尝试打开您的浏览器设置，单击"隐私、搜索和服务"，向下滚动并关闭"增强 Web 安全性"。
    这将允许您的浏览器加载所需的 “.wasm” 文件。
    如果问题仍然存在，您可能必须使用不同的浏览器。
error-javascript-conflict =
    Ruffle 在试图初始化时遇到了一个重大问题。
    这个页面似乎使用了与 Ruffle 冲突的 JavaScript 代码。
    如果您是服务器管理员，我们建议您尝试在空白页面上加载文件。
error-javascript-conflict-outdated = 您还可以尝试上传可能规避该问题的最新版本的 (当前构建已过时: { $buildDate })。
error-csp-conflict =
    Ruffle 在试图初始化时遇到了一个重大问题。
    该网站服务器的内容安全策略不允许运行所需的 “.wasm” 组件。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-unknown =
    Ruffle 在试图显示此 Flash 内容时遇到了一个重大问题。
    { $outdated ->
        [true] 如果您是服务器管理员，请尝试上传更新的 Ruffle 版本 (当前版本已过时: { $buildDate }).
       *[false] 这不应该发生，因此如果您可以报告错误，我们将非常感谢！
    }
`,"save-manager.ftl":`save-delete-prompt = 确定要删除此存档吗？
save-reload-prompt =
    为了避免潜在的冲突，{ $action ->
        [delete] 删除
       *[replace] 替换
    } 此存档文件需要重新加载当前内容。是否仍然继续？
save-download = 下载
save-replace = 替换
save-delete = 删除
save-backup-all = 下载所有存档文件
`,"volume-controls.ftl":`volume-controls = 音量控制
volume-controls-mute = 静音
volume-controls-volume = 音量
`},"zh-TW":{"context_menu.ftl":`context-menu-download-swf = 下載SWF檔案
context-menu-copy-debug-info = 複製除錯資訊
context-menu-open-save-manager = 打開存檔管理器
context-menu-about-ruffle =
    { $flavor ->
        [extension] 關於Ruffle擴充功能 ({ $version })
       *[other] 關於Ruffle ({ $version })
    }
context-menu-hide = 隱藏菜單
context-menu-exit-fullscreen = 退出全螢幕
context-menu-enter-fullscreen = 進入全螢幕
context-menu-volume-controls = 音量控制
`,"messages.ftl":`message-cant-embed =
    目前Ruffle沒辦法執行嵌入式Flash。
    你可以在新分頁中開啟來解決這個問題。
panic-title = 完蛋，出問題了 :(
more-info = 更多資訊
run-anyway = 直接執行
continue = 繼續
report-bug = 回報BUG
update-ruffle = 更新Ruffle
ruffle-demo = 網頁展示
ruffle-desktop = 桌面應用程式
ruffle-wiki = 查看Ruffle Wiki
enable-hardware-acceleration =
    看起來你的硬體加速沒有開啟，雖然Ruffle還可以執行，但是你會感覺到會很慢。
    你可以在下方連結找到如何開啟硬體加速。
view-error-details = 檢視錯誤詳細資料
open-in-new-tab = 開啟新增分頁
click-to-unmute = 點擊以取消靜音
error-file-protocol =
    看起來你想要用Ruffle來執行"file:"的協議。
    因為瀏覽器禁了很多功能以資安的理由來講。
    我們建議你建立本地伺服器或著直接使用網頁展示或桌面應用程式。
error-javascript-config =
    目前Ruffle遇到不正確的JavaScript配置。
    如果你是伺服器管理員，我們建議你檢查哪個環節出錯。
    或著你可以查詢Ruffle wiki得到需求幫助。
error-wasm-not-found =
    目前Ruffle找不到".wasm"檔案。
    如果你是伺服器管理員，確保檔案是否放對位置。
    如果還是有問題的話，你要用"publicPath"來設定: 或著查詢Ruffle wiki得到需求幫助。
error-wasm-mime-type =
    目前Ruffle初始化時遇到重大問題。
    這網頁伺服器並沒有服務".wasm"檔案或正確的網際網路媒體類型。
    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。
error-swf-fetch =
    目前Ruffle無法讀取Flash的SWF檔案。
    很有可能要讀取的檔案不存在，所以Ruffle讀不到東西。
    請嘗試溝通伺服器管理員得到需求幫助。
error-swf-cors =
    目前Ruffle無法讀取Flash的SWF檔案。
    看起來是使用權被跨來源資源共用機制被擋到了。
    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。
error-wasm-cors =
    目前Ruffle無法讀取".wasm"檔案。
    看起來是使用權被跨來源資源共用機制被擋到了。
    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。
error-wasm-invalid =
    目前Ruffle初始化時遇到重大問題。
    看起來這網頁有缺失檔案導致Ruffle無法運行。
    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。
error-wasm-download =
    目前Ruffle初始化時遇到重大問題。
    這可以你自己解決，你只要重新整理就好了。
    否則，請嘗試溝通伺服器管理員得到需求幫助。
error-wasm-disabled-on-edge =
    目前Ruffle無法讀取".wasm"檔案。
    要修正的話，打開你的瀏覽器設定，點選"隱私權、搜尋與服務"，把"防止追蹤"給關掉。
    這樣一來你的瀏覽器會讀取需要的".wasm"檔案。
    如果問題一直還在的話，你必須要換瀏覽器了。
error-javascript-conflict =
    目前Ruffle初始化時遇到重大問題。
    看起來這網頁使用的JavaScript會跟Ruffle起衝突。
    如果你是伺服器管理員，我們建議你開個空白頁來測試。
error-javascript-conflict-outdated = 你也可以上傳最新版的Ruffle，說不定你要說的的問題已經不見了(現在使用的版本已經過時: { $buildDate })。
error-csp-conflict =
    目前Ruffle初始化時遇到重大問題。
    這網頁伺服器被跨來源資源共用機制禁止讀取".wasm"檔案。
    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。
error-unknown =
    目前Ruffle初始化要讀取Flash內容時遇到重大問題
    { $outdated ->
        [true] 如果你是伺服器管理員， 請上傳最新版的Ruffle(現在使用的版本已經過時: { $buildDate }).
       *[false] 這不應該發生的，我們也很高興你告知bug!
    }
`,"save-manager.ftl":`save-delete-prompt = 你確定要刪除這個存檔嗎？
save-reload-prompt =
    唯一方法只有 { $action ->
        [delete] 刪除
       *[replace] 取代
    } 這個存檔不會完全取代直到重新啟動. 你需要繼續嗎?
save-download = 下載
save-replace = 取代
save-delete = 刪除
save-backup-all = 下載所有存檔檔案。
`,"volume-controls.ftl":`volume-controls = 音量控制
volume-controls-mute = 靜音
volume-controls-volume = 音量
`}},xs={};for(const[e,n]of Object.entries(Uv)){const t=new hv(e);if(n){for(const[r,i]of Object.entries(n))if(i)for(const o of t.addResource(new Iv(i)))console.error(`Error in text for ${e} ${r}: ${o}`)}xs[e]=t}function $v(e,n,t){const r=xs[e];if(r!==void 0){const i=r.getMessage(n);if(i!==void 0&&i.value)return r.formatPattern(i.value,t)}return null}function ae(e,n){const t=Bv(navigator.languages,Object.keys(xs),{defaultLocale:"en-US"});for(const r in t){const i=$v(t[r],e,n);if(i)return i}return console.error(`Unknown text key '${e}'`),e}function Ve(e,n){const t=document.createElement("div");return ae(e,n).split(`
`).forEach(r=>{const i=document.createElement("p");i.innerText=r,t.appendChild(i)}),t}function Wv(e,n){for(const t of n)try{e.insertRule(t)}catch{}}function qv(e){if(!e.sheet)return;const n=[`:host {
            all: initial;
            pointer-events: inherit;

            --ruffle-blue: #000000;
            --ruffle-orange: #ab2eff;

            display: inline-block;
            position: relative;
            /* Default width/height; this will get overridden by user styles/attributes. */
            width: 550px;
            height: 400px;
            font-family: Arial, sans-serif;
            letter-spacing: 0.4px;
            touch-action: none;
            user-select: none;
            -webkit-user-select: none;
            -webkit-tap-highlight-color: transparent;
        }`,`:host(:-webkit-full-screen) {
            display: block;
            width: 100% !important;
            height: 100% !important;
        }`,`.hidden {
            display: none !important;
        }`,`#container,
        #play-button,
        #unmute-overlay,
        #unmute-overlay .background,
        #panic,
        #splash-screen,
        #message-overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }`,`#container {
            overflow: hidden;
        }`,`#container canvas {
            width: 100%;
            height: 100%;
        }`,`#play-button,
        #unmute-overlay {
            cursor: pointer;
            display: none;
        }`,`#unmute-overlay .background {
            background: black;
            opacity: 0.7;
        }`,`#play-button .icon,
        #unmute-overlay .icon {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 50%;
            height: 50%;
            max-width: 384px;
            max-height: 384px;
            transform: translate(-50%, -50%);
            opacity: 0.8;
        }`,`#play-button:hover .icon,
        #unmute-overlay:hover .icon {
            opacity: 1;
        }`,`#panic {
            font-size: 20px;
            text-align: center;
            background: linear-gradient(180deg, #fd3a40 0%, #fda138 100%);
            color: white;
            display: flex;
            flex-flow: column;
            justify-content: space-around;
        }`,`#panic a {
            color: var(--ruffle-blue);
            font-weight: bold;
        }`,`#panic-title {
            font-size: xxx-large;
            font-weight: bold;
        }`,`#panic-body.details {
            flex: 0.9;
            margin: 0 10px;
        }`,`#panic-body textarea {
            width: 100%;
            height: 100%;
            resize: none;
        }`,`#panic ul {
            padding: 0;
            display: flex;
            list-style-type: none;
            justify-content: space-evenly;
        }`,`#message-overlay {
            position: absolute;
            background: var(--ruffle-blue);
            color: var(--ruffle-orange);
            opacity: 1;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: auto;
        }`,`#message-overlay .message {
            text-align: center;
            max-height: 100%;
            max-width: 100%;
            padding: 5%;
            font-size: 20px;
        }`,`#message-overlay p {
            margin: 0.5em 0;
        }`,`#message-overlay .message div {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            column-gap: 1em;
        }`,`#message-overlay a, #message-overlay button {
            cursor: pointer;
            background: var(--ruffle-blue);
            color: var(--ruffle-orange);
            border: 2px solid var(--ruffle-orange);
            font-weight: bold;
            font-size: 1.25em;
            border-radius: 0.6em;
            padding: 10px;
            text-decoration: none;
            margin: 2% 0;
        }`,`#message-overlay a:hover, #message-overlay button:hover {
            background: #ffffff4c;
        }`,`#continue-btn {
             cursor: pointer;
             background: var(--ruffle-blue);
             color: var(--ruffle-orange);
             border: 2px solid var(--ruffle-orange);
             font-weight: bold;
             font-size: 20px;
             border-radius: 20px;
             padding: 10px;
        }`,`#continue-btn:hover {
            background: #ffffff4c;
        }`,`#context-menu-overlay {
            width: 100%;
            height: 100%;
            z-index: 1;
            position: absolute;
        }`,`#context-menu {
            color: black;
            background: #fafafa;
            border: 1px solid gray;
            box-shadow: 0px 5px 10px -5px black;
            position: absolute;
            font-size: 14px;
            text-align: left;
            list-style: none;
            padding: 0;
            margin: 0;
        }`,`#context-menu .menu-item {
            padding: 5px 10px;
            cursor: pointer;
            color: black;
        }`,`#context-menu .menu-item.disabled {
            cursor: default;
            color: gray;
        }`,`#context-menu .menu-item:not(.disabled):hover {
            background: lightgray;
        }`,`#context-menu .menu-separator hr {
            border: none;
            border-bottom: 1px solid lightgray;
            margin: 2px;
        }`,`#splash-screen {
            display: flex;
            flex-direction: column;
            background: var(--splash-screen-background, var(--preloader-background, var(--ruffle-blue)));
            align-items: center;
            justify-content: center;
        }`,`.loadbar {
            width: 100%;
            max-width: 316px;
            max-height: 10px;
            height: 20%;
            background: #253559;
        }`,`.loadbar-inner {
            width: 0px;
            max-width: 100%;
            height: 100%;
            background: var(--ruffle-orange);
        }`,`.logo {
            display: var(--logo-display, block);
            max-width: 380px;
            max-height: 150px;
        }`,`.loading-animation {
            max-width: 28px;
            max-height: 28px;
            margin-bottom: 2%;
            width: 10%;
            aspect-ratio: 1;
        }`,`.spinner {
            stroke-dasharray: 180;
            stroke-dashoffset: 135;
            stroke: var(--ruffle-orange);
            transform-origin: 50% 50%;
            animation: rotate 1.5s linear infinite;
        }`,`@keyframes rotate {
            to {
                transform: rotate(360deg);
            }
        }`,`#virtual-keyboard {
            position: absolute;
            opacity: 0;
            top: -100px;
            width: 1px;
            height: 1px;
        }`,`.modal {
            height: inherit;
            user-select: text;
        }`,`.modal-area {
            position: sticky;
            background: white;
            width: fit-content;
            padding: 16px 28px 16px 16px;
            border: 3px solid black;
            margin: auto;
        }`,`#modal-area {
            height: 500px;
            max-height: calc(100% - 38px);
            min-height: 80px;
        }`,`#restore-save {
            display: none;
        }`,`.replace-save {
            display: none;
        }`,`.save-option {
            display: inline-block;
            padding: 3px 10px;
            margin: 5px 2px;
            cursor: pointer;
            border-radius: 50px;
            background-color: var(--ruffle-blue);
            color: white;
        }`,`.close-modal {
            position: absolute;
            top: 5px;
            right: 10px;
            cursor: pointer;
            font-size: x-large;
        }`,`.general-save-options {
            text-align: center;
            padding-bottom: 8px;
            border-bottom: 2px solid #888;
        }`,`#local-saves {
            border-collapse: collapse;
            overflow-y: auto;
            display: block;
            padding-right: 16px;
            height: calc(100% - 45px);
            min-height: 30px;
        }`,`#local-saves td {
            border-bottom: 1px solid #bbb;
            height: 30px;
        }`,`#local-saves tr td:nth-child(1) {
            padding-right: 1em;
            word-break: break-all;
        }`,`#local-saves tr:nth-child(even) {
            background-color: #f2f2f2;
        }`,`#video-holder {
            padding-top: 20px;
        }`,`#video-holder video {
            max-width: 100%;
            height: calc(100% - 58px);
        }`,`.slider-container {
            margin-top: 10px;
            display: flex;
            align-items: center;
        }`,`#volume-slider {
            margin-left: 10px;
            margin-right: 10px;
        }`,`#volume-slider-text {
            text-align: right;
            width: 28px;
        }`,`.acceleration-link {
            color: var(--ruffle-blue);
            text-decoration: none;
        }`,`.acceleration-link:hover {
            text-decoration: underline;
        }`];Wv(e.sheet,n)}function re(e,n,t,r,i){const o=i?document.createElementNS(i,e):document.createElement(e);if(n&&(o.id=n),t&&i?o.classList.add(t):t&&(o.className=t),r)for(const[a,l]of Object.entries(r))o.setAttribute(a,l);return o}function If(e,n,t,r,i){const o=re("input",n);return o.type=e,t&&(o.min=t),r&&(o.max=r),i&&(o.step=i),o}function Pf(e,n){const t=re("label",e);return t.htmlFor=n,t}function ne(e,n){e.appendChild(n)}const Pn=document.createElement("template"),be="http://www.w3.org/2000/svg",Vv=re("style","static-styles"),Hv=re("style","dynamic-styles"),qo=re("div","container"),Df=re("div","play-button"),Of=re("div",void 0,"icon"),_s=re("svg",void 0,void 0,{xmlns:be,"xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid",viewBox:"0 0 250 250",width:"100%",height:"100%"},be),Rs=re("defs",void 0,void 0,void 0,be),zs=re("linearGradient","a",void 0,{gradientUnits:"userSpaceOnUse",x1:"125",y1:"0",x2:"125",y2:"250",spreadMethod:"pad"},be),Zv=re("stop",void 0,void 0,{offset:"0%","stop-color":"#FDA138"},be),Kv=re("stop",void 0,void 0,{offset:"100%","stop-color":"#FD3A40"},be),Es=re("g","b",void 0,void 0,be),Jv=re("path",void 0,void 0,{fill:"url(#a)",d:"M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"},be),Gv=re("path",void 0,void 0,{fill:"#FFF",d:"M87 55v140l100-70L87 55z"},be),Ff=document.createElementNS(be,"use");Ff.href.baseVal="#b";const Cs=re("div","unmute-overlay"),Qv=re("div",void 0,"background"),Tf=re("div",void 0,"icon"),fi=re("svg","unmute-overlay-svg",void 0,{xmlns:be,"xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid",viewBox:"0 0 512 584",width:"100%",height:"100%",scale:"0.8"},be),Yv=re("path",void 0,void 0,{fill:"#FFF",stroke:"#FFF",d:"m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"},be),Xv=re("path",void 0,void 0,{fill:"#FFF",stroke:"#FFF",d:"m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"},be),eg=re("path",void 0,void 0,{fill:"#FFF",stroke:"#FFF",d:"m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"},be),ng=re("text","unmute-text",void 0,{x:"256",y:"560","text-anchor":"middle","font-size":"60px",fill:"#FFF",stroke:"#FFF"},be),tg=re("input","virtual-keyboard",void 0,{type:"text",autocapitalize:"off",autocomplete:"off",autocorrect:"off"}),Vo=re("div","splash-screen","hidden"),Lf=re("svg",void 0,"logo",{xmlns:be,"xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid",viewBox:"0 0 380 150"},be),js=re("g",void 0,void 0,void 0,be),rg=re("path",void 0,void 0,{fill:"#966214",d:"M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z"},be),ig=re("path",void 0,void 0,{fill:"var(--ruffle-orange)",d:"M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z"},be),Nf=re("svg",void 0,"loading-animation",{xmlns:be,viewBox:"0 0 66 66"},be),og=re("circle",void 0,"spinner",{fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"},be),Mf=re("div",void 0,"loadbar"),ag=re("div",void 0,"loadbar-inner"),Bf=re("div","save-manager","modal hidden"),Ho=re("div","modal-area","modal-area"),Uf=re("span",void 0,"close-modal");Uf.textContent="×";const $f=re("div",void 0,"general-save-options"),lg=re("span","backup-saves","save-option"),sg=re("table","local-saves"),Wf=re("div","volume-controls-modal","modal hidden"),As=re("div",void 0,"modal-area"),qf=re("span",void 0,"close-modal");qf.textContent="×";const pi=re("div","volume-controls"),ug=re("h2","volume-controls-heading"),cg=Pf("mute-checkbox-label","mute-checkbox"),dg=If("checkbox","mute-checkbox"),Zo=re("div",void 0,"slider-container"),fg=Pf("volume-slider-label","volume-slider"),pg=If("range","volume-slider","0","100","1"),mg=re("span","volume-slider-text"),Vf=re("div","video-modal","modal hidden"),Is=re("div",void 0,"modal-area"),Hf=re("span",void 0,"close-modal");Hf.textContent="×";const hg=re("div","video-holder"),Zf=re("div","hardware-acceleration-modal","modal hidden"),Ps=re("div",void 0,"modal-area"),Kf=re("span",void 0,"close-modal");Kf.textContent="×";const mi=document.createElement("a");mi.href="https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#chrome-hardware-acceleration";mi.target="_blank";mi.className="acceleration-link";mi.textContent=ae("enable-hardware-acceleration");const Jf=re("div","context-menu-overlay","hidden"),vg=re("ul","context-menu");ne(Pn.content,Vv);ne(Pn.content,Hv);ne(Pn.content,qo);ne(qo,Df);ne(Df,Of);ne(Of,_s);ne(_s,Rs);ne(Rs,zs);ne(zs,Zv);ne(zs,Kv);ne(Rs,Es);ne(Es,Jv);ne(Es,Gv);ne(_s,Ff);ne(qo,Cs);ne(Cs,Qv);ne(Cs,Tf);ne(Tf,fi);ne(fi,Yv);ne(fi,Xv);ne(fi,eg);ne(fi,ng);ne(qo,tg);ne(Pn.content,Vo);ne(Vo,Lf);ne(Lf,js);ne(js,rg);ne(js,ig);ne(Vo,Nf);ne(Nf,og);ne(Vo,Mf);ne(Mf,ag);ne(Pn.content,Bf);ne(Bf,Ho);ne(Ho,Uf);ne(Ho,$f);ne($f,lg);ne(Ho,sg);ne(Pn.content,Wf);ne(Wf,As);ne(As,qf);ne(As,pi);ne(pi,ug);ne(pi,cg);ne(pi,dg);ne(pi,Zo);ne(Zo,fg);ne(Zo,pg);ne(Zo,mg);ne(Pn.content,Vf);ne(Vf,Is);ne(Is,Hf);ne(Is,hg);ne(Pn.content,Zf);ne(Zf,Ps);ne(Ps,Kf);ne(Ps,mi);ne(Pn.content,Jf);ne(Jf,vg);const gg=999,xl={};function wg(e){const n=xl[e];return n!==void 0?{internalName:e,name:n.name,class:n.class}:null}function Ds(e,n){const t=xl[e];if(t!==void 0){if(t.class!==n)throw new Error("Internal naming conflict on "+e);return t.name}let r=0;if(window.customElements!==void 0)for(;r<gg;){let i=e;if(r>0&&(i=i+"-"+r),window.customElements.get(i)!==void 0){r+=1;continue}else window.customElements.define(i,n);return xl[e]={class:n,name:i,internalName:e},i}throw new Error("Failed to assign custom element "+e)}var rr;(function(e){e.On="on",e.Off="off",e.Auto="auto"})(rr||(rr={}));var xo;(function(e){e.Off="off",e.Fullscreen="fullscreen",e.On="on"})(xo||(xo={}));var oi;(function(e){e.Visible="visible",e.Hidden="hidden"})(oi||(oi={}));var _o;(function(e){e.Error="error",e.Warn="warn",e.Info="info",e.Debug="debug",e.Trace="trace"})(_o||(_o={}));var Ro;(function(e){e.Window="window",e.Opaque="opaque",e.Transparent="transparent",e.Direct="direct",e.Gpu="gpu"})(Ro||(Ro={}));var uc;(function(e){e.WebGpu="webgpu",e.WgpuWebgl="wgpu-webgl",e.Webgl="webgl",e.Canvas="canvas"})(uc||(uc={}));var Ht;(function(e){e.On="on",e.RightClickOnly="rightClickOnly",e.Off="off"})(Ht||(Ht={}));var _l;(function(e){e.Allow="allow",e.Confirm="confirm",e.Deny="deny"})(_l||(_l={}));var Rl;(function(e){e.All="all",e.Internal="internal",e.None="none"})(Rl||(Rl={}));const yg={allowScriptAccess:!1,parameters:{},autoplay:rr.Auto,backgroundColor:null,letterbox:xo.Fullscreen,unmuteOverlay:oi.Visible,upgradeToHttps:!0,compatibilityRules:!0,favorFlash:!0,warnOnUnsupportedContent:!0,logLevel:_o.Error,showSwfDownload:!1,contextMenu:Ht.On,preloader:!0,splashScreen:!0,maxExecutionDuration:15,base:null,menu:!0,salign:"",forceAlign:!1,quality:"high",scale:"showAll",forceScale:!1,frameRate:null,wmode:Ro.Window,publicPath:null,polyfills:!0,playerVersion:null,preferredRenderer:null,openUrlMode:_l.Allow,allowNetworking:Rl.All,openInNewTab:null,socketProxy:[],fontSources:[],defaultFonts:{},credentialAllowList:[]},Gf="application/x-shockwave-flash",Qf="application/futuresplash",Yf="application/x-shockwave-flash2-preview",Xf="application/vnd.adobe.flash.movie",kg="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";function bg(e){let n="";try{n=new URL(e,"https://example.com").pathname}catch{}if(n&&n.length>=4){const t=n.slice(-4).toLowerCase();if(t===".swf"||t===".spl")return!0}return!1}function Sg(e,n){switch(e=e.toLowerCase(),e){case Gf.toLowerCase():case Qf.toLowerCase():case Yf.toLowerCase():case Xf.toLowerCase():return!0;default:if(n)switch(e){case"application/octet-stream":case"binary/octet-stream":return!0}}return!1}function ep(e,n){const t=bg(e);return n?Sg(n,t):t}function xg(e){const n=e.pathname;return n.substring(n.lastIndexOf("/")+1)}const un={versionNumber:"0.1.0",versionName:"nightly 2023-12-27",versionChannel:"nightly",buildDate:"2023-12-27T00:14:38.940Z",commitHash:"28a3c7178a805ddb7027d30738b0e58acf94147e"};function Li(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var np={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(e,n){(function(t){e.exports=t()})(function(){return function t(r,i,o){function a(f,w){if(!i[f]){if(!r[f]){var h=typeof Li=="function"&&Li;if(!w&&h)return h(f,!0);if(l)return l(f,!0);var g=new Error("Cannot find module '"+f+"'");throw g.code="MODULE_NOT_FOUND",g}var m=i[f]={exports:{}};r[f][0].call(m.exports,function(k){var p=r[f][1][k];return a(p||k)},m,m.exports,t,r,i,o)}return i[f].exports}for(var l=typeof Li=="function"&&Li,s=0;s<o.length;s++)a(o[s]);return a}({1:[function(t,r,i){var o=t("./utils"),a=t("./support"),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(s){for(var f,w,h,g,m,k,p,b=[],u=0,d=s.length,y=d,S=o.getTypeOf(s)!=="string";u<s.length;)y=d-u,h=S?(f=s[u++],w=u<d?s[u++]:0,u<d?s[u++]:0):(f=s.charCodeAt(u++),w=u<d?s.charCodeAt(u++):0,u<d?s.charCodeAt(u++):0),g=f>>2,m=(3&f)<<4|w>>4,k=1<y?(15&w)<<2|h>>6:64,p=2<y?63&h:64,b.push(l.charAt(g)+l.charAt(m)+l.charAt(k)+l.charAt(p));return b.join("")},i.decode=function(s){var f,w,h,g,m,k,p=0,b=0,u="data:";if(s.substr(0,u.length)===u)throw new Error("Invalid base64 input, it looks like a data url.");var d,y=3*(s=s.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(s.charAt(s.length-1)===l.charAt(64)&&y--,s.charAt(s.length-2)===l.charAt(64)&&y--,y%1!=0)throw new Error("Invalid base64 input, bad content length.");for(d=a.uint8array?new Uint8Array(0|y):new Array(0|y);p<s.length;)f=l.indexOf(s.charAt(p++))<<2|(g=l.indexOf(s.charAt(p++)))>>4,w=(15&g)<<4|(m=l.indexOf(s.charAt(p++)))>>2,h=(3&m)<<6|(k=l.indexOf(s.charAt(p++))),d[b++]=f,m!==64&&(d[b++]=w),k!==64&&(d[b++]=h);return d}},{"./support":30,"./utils":32}],2:[function(t,r,i){var o=t("./external"),a=t("./stream/DataWorker"),l=t("./stream/Crc32Probe"),s=t("./stream/DataLengthProbe");function f(w,h,g,m,k){this.compressedSize=w,this.uncompressedSize=h,this.crc32=g,this.compression=m,this.compressedContent=k}f.prototype={getContentWorker:function(){var w=new a(o.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new s("data_length")),h=this;return w.on("end",function(){if(this.streamInfo.data_length!==h.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),w},getCompressedWorker:function(){return new a(o.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},f.createWorkerFrom=function(w,h,g){return w.pipe(new l).pipe(new s("uncompressedSize")).pipe(h.compressWorker(g)).pipe(new s("compressedSize")).withStreamInfo("compression",h)},r.exports=f},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,r,i){var o=t("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new o("STORE compression")},uncompressWorker:function(){return new o("STORE decompression")}},i.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,r,i){var o=t("./utils"),a=function(){for(var l,s=[],f=0;f<256;f++){l=f;for(var w=0;w<8;w++)l=1&l?3988292384^l>>>1:l>>>1;s[f]=l}return s}();r.exports=function(l,s){return l!==void 0&&l.length?o.getTypeOf(l)!=="string"?function(f,w,h,g){var m=a,k=g+h;f^=-1;for(var p=g;p<k;p++)f=f>>>8^m[255&(f^w[p])];return-1^f}(0|s,l,l.length,0):function(f,w,h,g){var m=a,k=g+h;f^=-1;for(var p=g;p<k;p++)f=f>>>8^m[255&(f^w.charCodeAt(p))];return-1^f}(0|s,l,l.length,0):0}},{"./utils":32}],5:[function(t,r,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(t,r,i){var o=null;o=typeof Promise<"u"?Promise:t("lie"),r.exports={Promise:o}},{lie:37}],7:[function(t,r,i){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=t("pako"),l=t("./utils"),s=t("./stream/GenericWorker"),f=o?"uint8array":"array";function w(h,g){s.call(this,"FlateWorker/"+h),this._pako=null,this._pakoAction=h,this._pakoOptions=g,this.meta={}}i.magic="\b\0",l.inherits(w,s),w.prototype.processChunk=function(h){this.meta=h.meta,this._pako===null&&this._createPako(),this._pako.push(l.transformTo(f,h.data),!1)},w.prototype.flush=function(){s.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},w.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this._pako=null},w.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var h=this;this._pako.onData=function(g){h.push({data:g,meta:h.meta})}},i.compressWorker=function(h){return new w("Deflate",h)},i.uncompressWorker=function(){return new w("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,r,i){function o(m,k){var p,b="";for(p=0;p<k;p++)b+=String.fromCharCode(255&m),m>>>=8;return b}function a(m,k,p,b,u,d){var y,S,R=m.file,A=m.compression,C=d!==f.utf8encode,D=l.transformTo("string",d(R.name)),z=l.transformTo("string",f.utf8encode(R.name)),I=R.comment,H=l.transformTo("string",d(I)),E=l.transformTo("string",f.utf8encode(I)),N=z.length!==R.name.length,v=E.length!==I.length,B="",oe="",q="",$=R.dir,L=R.date,K={crc32:0,compressedSize:0,uncompressedSize:0};k&&!p||(K.crc32=m.crc32,K.compressedSize=m.compressedSize,K.uncompressedSize=m.uncompressedSize);var O=0;k&&(O|=8),C||!N&&!v||(O|=2048);var P=0,te=0;$&&(P|=16),u==="UNIX"?(te=798,P|=function(G,fe){var ze=G;return G||(ze=fe?16893:33204),(65535&ze)<<16}(R.unixPermissions,$)):(te=20,P|=function(G){return 63&(G||0)}(R.dosPermissions)),y=L.getUTCHours(),y<<=6,y|=L.getUTCMinutes(),y<<=5,y|=L.getUTCSeconds()/2,S=L.getUTCFullYear()-1980,S<<=4,S|=L.getUTCMonth()+1,S<<=5,S|=L.getUTCDate(),N&&(oe=o(1,1)+o(w(D),4)+z,B+="up"+o(oe.length,2)+oe),v&&(q=o(1,1)+o(w(H),4)+E,B+="uc"+o(q.length,2)+q);var Q="";return Q+=`
\0`,Q+=o(O,2),Q+=A.magic,Q+=o(y,2),Q+=o(S,2),Q+=o(K.crc32,4),Q+=o(K.compressedSize,4),Q+=o(K.uncompressedSize,4),Q+=o(D.length,2),Q+=o(B.length,2),{fileRecord:h.LOCAL_FILE_HEADER+Q+D+B,dirRecord:h.CENTRAL_FILE_HEADER+o(te,2)+Q+o(H.length,2)+"\0\0\0\0"+o(P,4)+o(b,4)+D+B+H}}var l=t("../utils"),s=t("../stream/GenericWorker"),f=t("../utf8"),w=t("../crc32"),h=t("../signature");function g(m,k,p,b){s.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=k,this.zipPlatform=p,this.encodeFileName=b,this.streamFiles=m,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}l.inherits(g,s),g.prototype.push=function(m){var k=m.meta.percent||0,p=this.entriesCount,b=this._sources.length;this.accumulate?this.contentBuffer.push(m):(this.bytesWritten+=m.data.length,s.prototype.push.call(this,{data:m.data,meta:{currentFile:this.currentFile,percent:p?(k+100*(p-b-1))/p:100}}))},g.prototype.openedSource=function(m){this.currentSourceOffset=this.bytesWritten,this.currentFile=m.file.name;var k=this.streamFiles&&!m.file.dir;if(k){var p=a(m,k,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:p.fileRecord,meta:{percent:0}})}else this.accumulate=!0},g.prototype.closedSource=function(m){this.accumulate=!1;var k=this.streamFiles&&!m.file.dir,p=a(m,k,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(p.dirRecord),k)this.push({data:function(b){return h.DATA_DESCRIPTOR+o(b.crc32,4)+o(b.compressedSize,4)+o(b.uncompressedSize,4)}(m),meta:{percent:100}});else for(this.push({data:p.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},g.prototype.flush=function(){for(var m=this.bytesWritten,k=0;k<this.dirRecords.length;k++)this.push({data:this.dirRecords[k],meta:{percent:100}});var p=this.bytesWritten-m,b=function(u,d,y,S,R){var A=l.transformTo("string",R(S));return h.CENTRAL_DIRECTORY_END+"\0\0\0\0"+o(u,2)+o(u,2)+o(d,4)+o(y,4)+o(A.length,2)+A}(this.dirRecords.length,p,m,this.zipComment,this.encodeFileName);this.push({data:b,meta:{percent:100}})},g.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},g.prototype.registerPrevious=function(m){this._sources.push(m);var k=this;return m.on("data",function(p){k.processChunk(p)}),m.on("end",function(){k.closedSource(k.previous.streamInfo),k._sources.length?k.prepareNextSource():k.end()}),m.on("error",function(p){k.error(p)}),this},g.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},g.prototype.error=function(m){var k=this._sources;if(!s.prototype.error.call(this,m))return!1;for(var p=0;p<k.length;p++)try{k[p].error(m)}catch{}return!0},g.prototype.lock=function(){s.prototype.lock.call(this);for(var m=this._sources,k=0;k<m.length;k++)m[k].lock()},r.exports=g},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,r,i){var o=t("../compressions"),a=t("./ZipFileWorker");i.generateWorker=function(l,s,f){var w=new a(s.streamFiles,f,s.platform,s.encodeFileName),h=0;try{l.forEach(function(g,m){h++;var k=function(d,y){var S=d||y,R=o[S];if(!R)throw new Error(S+" is not a valid compression method !");return R}(m.options.compression,s.compression),p=m.options.compressionOptions||s.compressionOptions||{},b=m.dir,u=m.date;m._compressWorker(k,p).withStreamInfo("file",{name:g,dir:b,date:u,comment:m.comment||"",unixPermissions:m.unixPermissions,dosPermissions:m.dosPermissions}).pipe(w)}),w.entriesCount=h}catch(g){w.error(g)}return w}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,r,i){function o(){if(!(this instanceof o))return new o;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new o;for(var l in this)typeof this[l]!="function"&&(a[l]=this[l]);return a}}(o.prototype=t("./object")).loadAsync=t("./load"),o.support=t("./support"),o.defaults=t("./defaults"),o.version="3.10.1",o.loadAsync=function(a,l){return new o().loadAsync(a,l)},o.external=t("./external"),r.exports=o},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,r,i){var o=t("./utils"),a=t("./external"),l=t("./utf8"),s=t("./zipEntries"),f=t("./stream/Crc32Probe"),w=t("./nodejsUtils");function h(g){return new a.Promise(function(m,k){var p=g.decompressed.getContentWorker().pipe(new f);p.on("error",function(b){k(b)}).on("end",function(){p.streamInfo.crc32!==g.decompressed.crc32?k(new Error("Corrupted zip : CRC32 mismatch")):m()}).resume()})}r.exports=function(g,m){var k=this;return m=o.extend(m||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:l.utf8decode}),w.isNode&&w.isStream(g)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):o.prepareContent("the loaded zip file",g,!0,m.optimizedBinaryString,m.base64).then(function(p){var b=new s(m);return b.load(p),b}).then(function(p){var b=[a.Promise.resolve(p)],u=p.files;if(m.checkCRC32)for(var d=0;d<u.length;d++)b.push(h(u[d]));return a.Promise.all(b)}).then(function(p){for(var b=p.shift(),u=b.files,d=0;d<u.length;d++){var y=u[d],S=y.fileNameStr,R=o.resolve(y.fileNameStr);k.file(R,y.decompressed,{binary:!0,optimizedBinaryString:!0,date:y.date,dir:y.dir,comment:y.fileCommentStr.length?y.fileCommentStr:null,unixPermissions:y.unixPermissions,dosPermissions:y.dosPermissions,createFolders:m.createFolders}),y.dir||(k.file(R).unsafeOriginalName=S)}return b.zipComment.length&&(k.comment=b.zipComment),k})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,r,i){var o=t("../utils"),a=t("../stream/GenericWorker");function l(s,f){a.call(this,"Nodejs stream input adapter for "+s),this._upstreamEnded=!1,this._bindStream(f)}o.inherits(l,a),l.prototype._bindStream=function(s){var f=this;(this._stream=s).pause(),s.on("data",function(w){f.push({data:w,meta:{percent:0}})}).on("error",function(w){f.isPaused?this.generatedError=w:f.error(w)}).on("end",function(){f.isPaused?f._upstreamEnded=!0:f.end()})},l.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},l.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=l},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,r,i){var o=t("readable-stream").Readable;function a(l,s,f){o.call(this,s),this._helper=l;var w=this;l.on("data",function(h,g){w.push(h)||w._helper.pause(),f&&f(g)}).on("error",function(h){w.emit("error",h)}).on("end",function(){w.push(null)})}t("../utils").inherits(a,o),a.prototype._read=function(){this._helper.resume()},r.exports=a},{"../utils":32,"readable-stream":16}],14:[function(t,r,i){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(o,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(o,a);if(typeof o=="number")throw new Error('The "data" argument must not be a number');return new Buffer(o,a)},allocBuffer:function(o){if(Buffer.alloc)return Buffer.alloc(o);var a=new Buffer(o);return a.fill(0),a},isBuffer:function(o){return Buffer.isBuffer(o)},isStream:function(o){return o&&typeof o.on=="function"&&typeof o.pause=="function"&&typeof o.resume=="function"}}},{}],15:[function(t,r,i){function o(R,A,C){var D,z=l.getTypeOf(A),I=l.extend(C||{},w);I.date=I.date||new Date,I.compression!==null&&(I.compression=I.compression.toUpperCase()),typeof I.unixPermissions=="string"&&(I.unixPermissions=parseInt(I.unixPermissions,8)),I.unixPermissions&&16384&I.unixPermissions&&(I.dir=!0),I.dosPermissions&&16&I.dosPermissions&&(I.dir=!0),I.dir&&(R=u(R)),I.createFolders&&(D=b(R))&&d.call(this,D,!0);var H=z==="string"&&I.binary===!1&&I.base64===!1;C&&C.binary!==void 0||(I.binary=!H),(A instanceof h&&A.uncompressedSize===0||I.dir||!A||A.length===0)&&(I.base64=!1,I.binary=!0,A="",I.compression="STORE",z="string");var E=null;E=A instanceof h||A instanceof s?A:k.isNode&&k.isStream(A)?new p(R,A):l.prepareContent(R,A,I.binary,I.optimizedBinaryString,I.base64);var N=new g(R,E,I);this.files[R]=N}var a=t("./utf8"),l=t("./utils"),s=t("./stream/GenericWorker"),f=t("./stream/StreamHelper"),w=t("./defaults"),h=t("./compressedObject"),g=t("./zipObject"),m=t("./generate"),k=t("./nodejsUtils"),p=t("./nodejs/NodejsStreamInputAdapter"),b=function(R){R.slice(-1)==="/"&&(R=R.substring(0,R.length-1));var A=R.lastIndexOf("/");return 0<A?R.substring(0,A):""},u=function(R){return R.slice(-1)!=="/"&&(R+="/"),R},d=function(R,A){return A=A!==void 0?A:w.createFolders,R=u(R),this.files[R]||o.call(this,R,null,{dir:!0,createFolders:A}),this.files[R]};function y(R){return Object.prototype.toString.call(R)==="[object RegExp]"}var S={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(R){var A,C,D;for(A in this.files)D=this.files[A],(C=A.slice(this.root.length,A.length))&&A.slice(0,this.root.length)===this.root&&R(C,D)},filter:function(R){var A=[];return this.forEach(function(C,D){R(C,D)&&A.push(D)}),A},file:function(R,A,C){if(arguments.length!==1)return R=this.root+R,o.call(this,R,A,C),this;if(y(R)){var D=R;return this.filter(function(I,H){return!H.dir&&D.test(I)})}var z=this.files[this.root+R];return z&&!z.dir?z:null},folder:function(R){if(!R)return this;if(y(R))return this.filter(function(z,I){return I.dir&&R.test(z)});var A=this.root+R,C=d.call(this,A),D=this.clone();return D.root=C.name,D},remove:function(R){R=this.root+R;var A=this.files[R];if(A||(R.slice(-1)!=="/"&&(R+="/"),A=this.files[R]),A&&!A.dir)delete this.files[R];else for(var C=this.filter(function(z,I){return I.name.slice(0,R.length)===R}),D=0;D<C.length;D++)delete this.files[C[D].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(R){var A,C={};try{if((C=l.extend(R||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=C.type.toLowerCase(),C.compression=C.compression.toUpperCase(),C.type==="binarystring"&&(C.type="string"),!C.type)throw new Error("No output type specified.");l.checkSupport(C.type),C.platform!=="darwin"&&C.platform!=="freebsd"&&C.platform!=="linux"&&C.platform!=="sunos"||(C.platform="UNIX"),C.platform==="win32"&&(C.platform="DOS");var D=C.comment||this.comment||"";A=m.generateWorker(this,C,D)}catch(z){(A=new s("error")).error(z)}return new f(A,C.type||"string",C.mimeType)},generateAsync:function(R,A){return this.generateInternalStream(R).accumulate(A)},generateNodeStream:function(R,A){return(R=R||{}).type||(R.type="nodebuffer"),this.generateInternalStream(R).toNodejsStream(A)}};r.exports=S},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,r,i){r.exports=t("stream")},{stream:void 0}],17:[function(t,r,i){var o=t("./DataReader");function a(l){o.call(this,l);for(var s=0;s<this.data.length;s++)l[s]=255&l[s]}t("../utils").inherits(a,o),a.prototype.byteAt=function(l){return this.data[this.zero+l]},a.prototype.lastIndexOfSignature=function(l){for(var s=l.charCodeAt(0),f=l.charCodeAt(1),w=l.charCodeAt(2),h=l.charCodeAt(3),g=this.length-4;0<=g;--g)if(this.data[g]===s&&this.data[g+1]===f&&this.data[g+2]===w&&this.data[g+3]===h)return g-this.zero;return-1},a.prototype.readAndCheckSignature=function(l){var s=l.charCodeAt(0),f=l.charCodeAt(1),w=l.charCodeAt(2),h=l.charCodeAt(3),g=this.readData(4);return s===g[0]&&f===g[1]&&w===g[2]&&h===g[3]},a.prototype.readData=function(l){if(this.checkOffset(l),l===0)return[];var s=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,s},r.exports=a},{"../utils":32,"./DataReader":18}],18:[function(t,r,i){var o=t("../utils");function a(l){this.data=l,this.length=l.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(l){this.checkIndex(this.index+l)},checkIndex:function(l){if(this.length<this.zero+l||l<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+l+"). Corrupted zip ?")},setIndex:function(l){this.checkIndex(l),this.index=l},skip:function(l){this.setIndex(this.index+l)},byteAt:function(){},readInt:function(l){var s,f=0;for(this.checkOffset(l),s=this.index+l-1;s>=this.index;s--)f=(f<<8)+this.byteAt(s);return this.index+=l,f},readString:function(l){return o.transformTo("string",this.readData(l))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var l=this.readInt(4);return new Date(Date.UTC(1980+(l>>25&127),(l>>21&15)-1,l>>16&31,l>>11&31,l>>5&63,(31&l)<<1))}},r.exports=a},{"../utils":32}],19:[function(t,r,i){var o=t("./Uint8ArrayReader");function a(l){o.call(this,l)}t("../utils").inherits(a,o),a.prototype.readData=function(l){this.checkOffset(l);var s=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,s},r.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,r,i){var o=t("./DataReader");function a(l){o.call(this,l)}t("../utils").inherits(a,o),a.prototype.byteAt=function(l){return this.data.charCodeAt(this.zero+l)},a.prototype.lastIndexOfSignature=function(l){return this.data.lastIndexOf(l)-this.zero},a.prototype.readAndCheckSignature=function(l){return l===this.readData(4)},a.prototype.readData=function(l){this.checkOffset(l);var s=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,s},r.exports=a},{"../utils":32,"./DataReader":18}],21:[function(t,r,i){var o=t("./ArrayReader");function a(l){o.call(this,l)}t("../utils").inherits(a,o),a.prototype.readData=function(l){if(this.checkOffset(l),l===0)return new Uint8Array(0);var s=this.data.subarray(this.zero+this.index,this.zero+this.index+l);return this.index+=l,s},r.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(t,r,i){var o=t("../utils"),a=t("../support"),l=t("./ArrayReader"),s=t("./StringReader"),f=t("./NodeBufferReader"),w=t("./Uint8ArrayReader");r.exports=function(h){var g=o.getTypeOf(h);return o.checkSupport(g),g!=="string"||a.uint8array?g==="nodebuffer"?new f(h):a.uint8array?new w(o.transformTo("uint8array",h)):new l(o.transformTo("array",h)):new s(h)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,r,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,r,i){var o=t("./GenericWorker"),a=t("../utils");function l(s){o.call(this,"ConvertWorker to "+s),this.destType=s}a.inherits(l,o),l.prototype.processChunk=function(s){this.push({data:a.transformTo(this.destType,s.data),meta:s.meta})},r.exports=l},{"../utils":32,"./GenericWorker":28}],25:[function(t,r,i){var o=t("./GenericWorker"),a=t("../crc32");function l(){o.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(l,o),l.prototype.processChunk=function(s){this.streamInfo.crc32=a(s.data,this.streamInfo.crc32||0),this.push(s)},r.exports=l},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,r,i){var o=t("../utils"),a=t("./GenericWorker");function l(s){a.call(this,"DataLengthProbe for "+s),this.propName=s,this.withStreamInfo(s,0)}o.inherits(l,a),l.prototype.processChunk=function(s){if(s){var f=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=f+s.data.length}a.prototype.processChunk.call(this,s)},r.exports=l},{"../utils":32,"./GenericWorker":28}],27:[function(t,r,i){var o=t("../utils"),a=t("./GenericWorker");function l(s){a.call(this,"DataWorker");var f=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,s.then(function(w){f.dataIsReady=!0,f.data=w,f.max=w&&w.length||0,f.type=o.getTypeOf(w),f.isPaused||f._tickAndRepeat()},function(w){f.error(w)})}o.inherits(l,a),l.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},l.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,o.delay(this._tickAndRepeat,[],this)),!0)},l.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(o.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},l.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var s=null,f=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":s=this.data.substring(this.index,f);break;case"uint8array":s=this.data.subarray(this.index,f);break;case"array":case"nodebuffer":s=this.data.slice(this.index,f)}return this.index=f,this.push({data:s,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=l},{"../utils":32,"./GenericWorker":28}],28:[function(t,r,i){function o(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}o.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,l){return this._listeners[a].push(l),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,l){if(this._listeners[a])for(var s=0;s<this._listeners[a].length;s++)this._listeners[a][s].call(this,l)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var l=this;return a.on("data",function(s){l.processChunk(s)}),a.on("end",function(){l.end()}),a.on("error",function(s){l.error(s)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,l){return this.extraStreamInfo[a]=l,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},r.exports=o},{}],29:[function(t,r,i){var o=t("../utils"),a=t("./ConvertWorker"),l=t("./GenericWorker"),s=t("../base64"),f=t("../support"),w=t("../external"),h=null;if(f.nodestream)try{h=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function g(k,p){return new w.Promise(function(b,u){var d=[],y=k._internalType,S=k._outputType,R=k._mimeType;k.on("data",function(A,C){d.push(A),p&&p(C)}).on("error",function(A){d=[],u(A)}).on("end",function(){try{var A=function(C,D,z){switch(C){case"blob":return o.newBlob(o.transformTo("arraybuffer",D),z);case"base64":return s.encode(D);default:return o.transformTo(C,D)}}(S,function(C,D){var z,I=0,H=null,E=0;for(z=0;z<D.length;z++)E+=D[z].length;switch(C){case"string":return D.join("");case"array":return Array.prototype.concat.apply([],D);case"uint8array":for(H=new Uint8Array(E),z=0;z<D.length;z++)H.set(D[z],I),I+=D[z].length;return H;case"nodebuffer":return Buffer.concat(D);default:throw new Error("concat : unsupported type '"+C+"'")}}(y,d),R);b(A)}catch(C){u(C)}d=[]}).resume()})}function m(k,p,b){var u=p;switch(p){case"blob":case"arraybuffer":u="uint8array";break;case"base64":u="string"}try{this._internalType=u,this._outputType=p,this._mimeType=b,o.checkSupport(u),this._worker=k.pipe(new a(u)),k.lock()}catch(d){this._worker=new l("error"),this._worker.error(d)}}m.prototype={accumulate:function(k){return g(this,k)},on:function(k,p){var b=this;return k==="data"?this._worker.on(k,function(u){p.call(b,u.data,u.meta)}):this._worker.on(k,function(){o.delay(p,arguments,b)}),this},resume:function(){return o.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(k){if(o.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new h(this,{objectMode:this._outputType!=="nodebuffer"},k)}},r.exports=m},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,r,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var o=new ArrayBuffer(0);try{i.blob=new Blob([o],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(o),i.blob=a.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!t("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(t,r,i){for(var o=t("./utils"),a=t("./support"),l=t("./nodejsUtils"),s=t("./stream/GenericWorker"),f=new Array(256),w=0;w<256;w++)f[w]=252<=w?6:248<=w?5:240<=w?4:224<=w?3:192<=w?2:1;f[254]=f[254]=1;function h(){s.call(this,"utf-8 decode"),this.leftOver=null}function g(){s.call(this,"utf-8 encode")}i.utf8encode=function(m){return a.nodebuffer?l.newBufferFrom(m,"utf-8"):function(k){var p,b,u,d,y,S=k.length,R=0;for(d=0;d<S;d++)(64512&(b=k.charCodeAt(d)))==55296&&d+1<S&&(64512&(u=k.charCodeAt(d+1)))==56320&&(b=65536+(b-55296<<10)+(u-56320),d++),R+=b<128?1:b<2048?2:b<65536?3:4;for(p=a.uint8array?new Uint8Array(R):new Array(R),d=y=0;y<R;d++)(64512&(b=k.charCodeAt(d)))==55296&&d+1<S&&(64512&(u=k.charCodeAt(d+1)))==56320&&(b=65536+(b-55296<<10)+(u-56320),d++),b<128?p[y++]=b:(b<2048?p[y++]=192|b>>>6:(b<65536?p[y++]=224|b>>>12:(p[y++]=240|b>>>18,p[y++]=128|b>>>12&63),p[y++]=128|b>>>6&63),p[y++]=128|63&b);return p}(m)},i.utf8decode=function(m){return a.nodebuffer?o.transformTo("nodebuffer",m).toString("utf-8"):function(k){var p,b,u,d,y=k.length,S=new Array(2*y);for(p=b=0;p<y;)if((u=k[p++])<128)S[b++]=u;else if(4<(d=f[u]))S[b++]=65533,p+=d-1;else{for(u&=d===2?31:d===3?15:7;1<d&&p<y;)u=u<<6|63&k[p++],d--;1<d?S[b++]=65533:u<65536?S[b++]=u:(u-=65536,S[b++]=55296|u>>10&1023,S[b++]=56320|1023&u)}return S.length!==b&&(S.subarray?S=S.subarray(0,b):S.length=b),o.applyFromCharCode(S)}(m=o.transformTo(a.uint8array?"uint8array":"array",m))},o.inherits(h,s),h.prototype.processChunk=function(m){var k=o.transformTo(a.uint8array?"uint8array":"array",m.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var p=k;(k=new Uint8Array(p.length+this.leftOver.length)).set(this.leftOver,0),k.set(p,this.leftOver.length)}else k=this.leftOver.concat(k);this.leftOver=null}var b=function(d,y){var S;for((y=y||d.length)>d.length&&(y=d.length),S=y-1;0<=S&&(192&d[S])==128;)S--;return S<0||S===0?y:S+f[d[S]]>y?S:y}(k),u=k;b!==k.length&&(a.uint8array?(u=k.subarray(0,b),this.leftOver=k.subarray(b,k.length)):(u=k.slice(0,b),this.leftOver=k.slice(b,k.length))),this.push({data:i.utf8decode(u),meta:m.meta})},h.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=h,o.inherits(g,s),g.prototype.processChunk=function(m){this.push({data:i.utf8encode(m.data),meta:m.meta})},i.Utf8EncodeWorker=g},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,r,i){var o=t("./support"),a=t("./base64"),l=t("./nodejsUtils"),s=t("./external");function f(p){return p}function w(p,b){for(var u=0;u<p.length;++u)b[u]=255&p.charCodeAt(u);return b}t("setimmediate"),i.newBlob=function(p,b){i.checkSupport("blob");try{return new Blob([p],{type:b})}catch{try{var u=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return u.append(p),u.getBlob(b)}catch{throw new Error("Bug : can't construct the Blob.")}}};var h={stringifyByChunk:function(p,b,u){var d=[],y=0,S=p.length;if(S<=u)return String.fromCharCode.apply(null,p);for(;y<S;)b==="array"||b==="nodebuffer"?d.push(String.fromCharCode.apply(null,p.slice(y,Math.min(y+u,S)))):d.push(String.fromCharCode.apply(null,p.subarray(y,Math.min(y+u,S)))),y+=u;return d.join("")},stringifyByChar:function(p){for(var b="",u=0;u<p.length;u++)b+=String.fromCharCode(p[u]);return b},applyCanBeUsed:{uint8array:function(){try{return o.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return o.nodebuffer&&String.fromCharCode.apply(null,l.allocBuffer(1)).length===1}catch{return!1}}()}};function g(p){var b=65536,u=i.getTypeOf(p),d=!0;if(u==="uint8array"?d=h.applyCanBeUsed.uint8array:u==="nodebuffer"&&(d=h.applyCanBeUsed.nodebuffer),d)for(;1<b;)try{return h.stringifyByChunk(p,u,b)}catch{b=Math.floor(b/2)}return h.stringifyByChar(p)}function m(p,b){for(var u=0;u<p.length;u++)b[u]=p[u];return b}i.applyFromCharCode=g;var k={};k.string={string:f,array:function(p){return w(p,new Array(p.length))},arraybuffer:function(p){return k.string.uint8array(p).buffer},uint8array:function(p){return w(p,new Uint8Array(p.length))},nodebuffer:function(p){return w(p,l.allocBuffer(p.length))}},k.array={string:g,array:f,arraybuffer:function(p){return new Uint8Array(p).buffer},uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return l.newBufferFrom(p)}},k.arraybuffer={string:function(p){return g(new Uint8Array(p))},array:function(p){return m(new Uint8Array(p),new Array(p.byteLength))},arraybuffer:f,uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return l.newBufferFrom(new Uint8Array(p))}},k.uint8array={string:g,array:function(p){return m(p,new Array(p.length))},arraybuffer:function(p){return p.buffer},uint8array:f,nodebuffer:function(p){return l.newBufferFrom(p)}},k.nodebuffer={string:g,array:function(p){return m(p,new Array(p.length))},arraybuffer:function(p){return k.nodebuffer.uint8array(p).buffer},uint8array:function(p){return m(p,new Uint8Array(p.length))},nodebuffer:f},i.transformTo=function(p,b){if(b=b||"",!p)return b;i.checkSupport(p);var u=i.getTypeOf(b);return k[u][p](b)},i.resolve=function(p){for(var b=p.split("/"),u=[],d=0;d<b.length;d++){var y=b[d];y==="."||y===""&&d!==0&&d!==b.length-1||(y===".."?u.pop():u.push(y))}return u.join("/")},i.getTypeOf=function(p){return typeof p=="string"?"string":Object.prototype.toString.call(p)==="[object Array]"?"array":o.nodebuffer&&l.isBuffer(p)?"nodebuffer":o.uint8array&&p instanceof Uint8Array?"uint8array":o.arraybuffer&&p instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(p){if(!o[p.toLowerCase()])throw new Error(p+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(p){var b,u,d="";for(u=0;u<(p||"").length;u++)d+="\\x"+((b=p.charCodeAt(u))<16?"0":"")+b.toString(16).toUpperCase();return d},i.delay=function(p,b,u){setImmediate(function(){p.apply(u||null,b||[])})},i.inherits=function(p,b){function u(){}u.prototype=b.prototype,p.prototype=new u},i.extend=function(){var p,b,u={};for(p=0;p<arguments.length;p++)for(b in arguments[p])Object.prototype.hasOwnProperty.call(arguments[p],b)&&u[b]===void 0&&(u[b]=arguments[p][b]);return u},i.prepareContent=function(p,b,u,d,y){return s.Promise.resolve(b).then(function(S){return o.blob&&(S instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(S))!==-1)&&typeof FileReader<"u"?new s.Promise(function(R,A){var C=new FileReader;C.onload=function(D){R(D.target.result)},C.onerror=function(D){A(D.target.error)},C.readAsArrayBuffer(S)}):S}).then(function(S){var R=i.getTypeOf(S);return R?(R==="arraybuffer"?S=i.transformTo("uint8array",S):R==="string"&&(y?S=a.decode(S):u&&d!==!0&&(S=function(A){return w(A,o.uint8array?new Uint8Array(A.length):new Array(A.length))}(S))),S):s.Promise.reject(new Error("Can't read the data of '"+p+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,r,i){var o=t("./reader/readerFor"),a=t("./utils"),l=t("./signature"),s=t("./zipEntry"),f=t("./support");function w(h){this.files=[],this.loadOptions=h}w.prototype={checkSignature:function(h){if(!this.reader.readAndCheckSignature(h)){this.reader.index-=4;var g=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(g)+", expected "+a.pretty(h)+")")}},isSignature:function(h,g){var m=this.reader.index;this.reader.setIndex(h);var k=this.reader.readString(4)===g;return this.reader.setIndex(m),k},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var h=this.reader.readData(this.zipCommentLength),g=f.uint8array?"uint8array":"array",m=a.transformTo(g,h);this.zipComment=this.loadOptions.decodeFileName(m)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var h,g,m,k=this.zip64EndOfCentralSize-44;0<k;)h=this.reader.readInt(2),g=this.reader.readInt(4),m=this.reader.readData(g),this.zip64ExtensibleData[h]={id:h,length:g,value:m}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var h,g;for(h=0;h<this.files.length;h++)g=this.files[h],this.reader.setIndex(g.localHeaderOffset),this.checkSignature(l.LOCAL_FILE_HEADER),g.readLocalPart(this.reader),g.handleUTF8(),g.processAttributes()},readCentralDir:function(){var h;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(l.CENTRAL_FILE_HEADER);)(h=new s({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(h);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var h=this.reader.lastIndexOfSignature(l.CENTRAL_DIRECTORY_END);if(h<0)throw this.isSignature(0,l.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(h);var g=h;if(this.checkSignature(l.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(h=this.reader.lastIndexOfSignature(l.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(h),this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,l.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(l.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var m=this.centralDirOffset+this.centralDirSize;this.zip64&&(m+=20,m+=12+this.zip64EndOfCentralSize);var k=g-m;if(0<k)this.isSignature(g,l.CENTRAL_FILE_HEADER)||(this.reader.zero=k);else if(k<0)throw new Error("Corrupted zip: missing "+Math.abs(k)+" bytes.")},prepareReader:function(h){this.reader=o(h)},load:function(h){this.prepareReader(h),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=w},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,r,i){var o=t("./reader/readerFor"),a=t("./utils"),l=t("./compressedObject"),s=t("./crc32"),f=t("./utf8"),w=t("./compressions"),h=t("./support");function g(m,k){this.options=m,this.loadOptions=k}g.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(m){var k,p;if(m.skip(22),this.fileNameLength=m.readInt(2),p=m.readInt(2),this.fileName=m.readData(this.fileNameLength),m.skip(p),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((k=function(b){for(var u in w)if(Object.prototype.hasOwnProperty.call(w,u)&&w[u].magic===b)return w[u];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new l(this.compressedSize,this.uncompressedSize,this.crc32,k,m.readData(this.compressedSize))},readCentralPart:function(m){this.versionMadeBy=m.readInt(2),m.skip(2),this.bitFlag=m.readInt(2),this.compressionMethod=m.readString(2),this.date=m.readDate(),this.crc32=m.readInt(4),this.compressedSize=m.readInt(4),this.uncompressedSize=m.readInt(4);var k=m.readInt(2);if(this.extraFieldsLength=m.readInt(2),this.fileCommentLength=m.readInt(2),this.diskNumberStart=m.readInt(2),this.internalFileAttributes=m.readInt(2),this.externalFileAttributes=m.readInt(4),this.localHeaderOffset=m.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");m.skip(k),this.readExtraFields(m),this.parseZIP64ExtraField(m),this.fileComment=m.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var m=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),m==0&&(this.dosPermissions=63&this.externalFileAttributes),m==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var m=o(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=m.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=m.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=m.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=m.readInt(4))}},readExtraFields:function(m){var k,p,b,u=m.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});m.index+4<u;)k=m.readInt(2),p=m.readInt(2),b=m.readData(p),this.extraFields[k]={id:k,length:p,value:b};m.setIndex(u)},handleUTF8:function(){var m=h.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=f.utf8decode(this.fileName),this.fileCommentStr=f.utf8decode(this.fileComment);else{var k=this.findExtraFieldUnicodePath();if(k!==null)this.fileNameStr=k;else{var p=a.transformTo(m,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(p)}var b=this.findExtraFieldUnicodeComment();if(b!==null)this.fileCommentStr=b;else{var u=a.transformTo(m,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(u)}}},findExtraFieldUnicodePath:function(){var m=this.extraFields[28789];if(m){var k=o(m.value);return k.readInt(1)!==1||s(this.fileName)!==k.readInt(4)?null:f.utf8decode(k.readData(m.length-5))}return null},findExtraFieldUnicodeComment:function(){var m=this.extraFields[25461];if(m){var k=o(m.value);return k.readInt(1)!==1||s(this.fileComment)!==k.readInt(4)?null:f.utf8decode(k.readData(m.length-5))}return null}},r.exports=g},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,r,i){function o(k,p,b){this.name=k,this.dir=b.dir,this.date=b.date,this.comment=b.comment,this.unixPermissions=b.unixPermissions,this.dosPermissions=b.dosPermissions,this._data=p,this._dataBinary=b.binary,this.options={compression:b.compression,compressionOptions:b.compressionOptions}}var a=t("./stream/StreamHelper"),l=t("./stream/DataWorker"),s=t("./utf8"),f=t("./compressedObject"),w=t("./stream/GenericWorker");o.prototype={internalStream:function(k){var p=null,b="string";try{if(!k)throw new Error("No output type specified.");var u=(b=k.toLowerCase())==="string"||b==="text";b!=="binarystring"&&b!=="text"||(b="string"),p=this._decompressWorker();var d=!this._dataBinary;d&&!u&&(p=p.pipe(new s.Utf8EncodeWorker)),!d&&u&&(p=p.pipe(new s.Utf8DecodeWorker))}catch(y){(p=new w("error")).error(y)}return new a(p,b,"")},async:function(k,p){return this.internalStream(k).accumulate(p)},nodeStream:function(k,p){return this.internalStream(k||"nodebuffer").toNodejsStream(p)},_compressWorker:function(k,p){if(this._data instanceof f&&this._data.compression.magic===k.magic)return this._data.getCompressedWorker();var b=this._decompressWorker();return this._dataBinary||(b=b.pipe(new s.Utf8EncodeWorker)),f.createWorkerFrom(b,k,p)},_decompressWorker:function(){return this._data instanceof f?this._data.getContentWorker():this._data instanceof w?this._data:new l(this._data)}};for(var h=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],g=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},m=0;m<h.length;m++)o.prototype[h[m]]=g;r.exports=o},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,r,i){(function(o){var a,l,s=o.MutationObserver||o.WebKitMutationObserver;if(s){var f=0,w=new s(k),h=o.document.createTextNode("");w.observe(h,{characterData:!0}),a=function(){h.data=f=++f%2}}else if(o.setImmediate||o.MessageChannel===void 0)a="document"in o&&"onreadystatechange"in o.document.createElement("script")?function(){var p=o.document.createElement("script");p.onreadystatechange=function(){k(),p.onreadystatechange=null,p.parentNode.removeChild(p),p=null},o.document.documentElement.appendChild(p)}:function(){setTimeout(k,0)};else{var g=new o.MessageChannel;g.port1.onmessage=k,a=function(){g.port2.postMessage(0)}}var m=[];function k(){var p,b;l=!0;for(var u=m.length;u;){for(b=m,m=[],p=-1;++p<u;)b[p]();u=m.length}l=!1}r.exports=function(p){m.push(p)!==1||l||a()}}).call(this,typeof wi<"u"?wi:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,r,i){var o=t("immediate");function a(){}var l={},s=["REJECTED"],f=["FULFILLED"],w=["PENDING"];function h(u){if(typeof u!="function")throw new TypeError("resolver must be a function");this.state=w,this.queue=[],this.outcome=void 0,u!==a&&p(this,u)}function g(u,d,y){this.promise=u,typeof d=="function"&&(this.onFulfilled=d,this.callFulfilled=this.otherCallFulfilled),typeof y=="function"&&(this.onRejected=y,this.callRejected=this.otherCallRejected)}function m(u,d,y){o(function(){var S;try{S=d(y)}catch(R){return l.reject(u,R)}S===u?l.reject(u,new TypeError("Cannot resolve promise with itself")):l.resolve(u,S)})}function k(u){var d=u&&u.then;if(u&&(typeof u=="object"||typeof u=="function")&&typeof d=="function")return function(){d.apply(u,arguments)}}function p(u,d){var y=!1;function S(C){y||(y=!0,l.reject(u,C))}function R(C){y||(y=!0,l.resolve(u,C))}var A=b(function(){d(R,S)});A.status==="error"&&S(A.value)}function b(u,d){var y={};try{y.value=u(d),y.status="success"}catch(S){y.status="error",y.value=S}return y}(r.exports=h).prototype.finally=function(u){if(typeof u!="function")return this;var d=this.constructor;return this.then(function(y){return d.resolve(u()).then(function(){return y})},function(y){return d.resolve(u()).then(function(){throw y})})},h.prototype.catch=function(u){return this.then(null,u)},h.prototype.then=function(u,d){if(typeof u!="function"&&this.state===f||typeof d!="function"&&this.state===s)return this;var y=new this.constructor(a);return this.state!==w?m(y,this.state===f?u:d,this.outcome):this.queue.push(new g(y,u,d)),y},g.prototype.callFulfilled=function(u){l.resolve(this.promise,u)},g.prototype.otherCallFulfilled=function(u){m(this.promise,this.onFulfilled,u)},g.prototype.callRejected=function(u){l.reject(this.promise,u)},g.prototype.otherCallRejected=function(u){m(this.promise,this.onRejected,u)},l.resolve=function(u,d){var y=b(k,d);if(y.status==="error")return l.reject(u,y.value);var S=y.value;if(S)p(u,S);else{u.state=f,u.outcome=d;for(var R=-1,A=u.queue.length;++R<A;)u.queue[R].callFulfilled(d)}return u},l.reject=function(u,d){u.state=s,u.outcome=d;for(var y=-1,S=u.queue.length;++y<S;)u.queue[y].callRejected(d);return u},h.resolve=function(u){return u instanceof this?u:l.resolve(new this(a),u)},h.reject=function(u){var d=new this(a);return l.reject(d,u)},h.all=function(u){var d=this;if(Object.prototype.toString.call(u)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=u.length,S=!1;if(!y)return this.resolve([]);for(var R=new Array(y),A=0,C=-1,D=new this(a);++C<y;)z(u[C],C);return D;function z(I,H){d.resolve(I).then(function(E){R[H]=E,++A!==y||S||(S=!0,l.resolve(D,R))},function(E){S||(S=!0,l.reject(D,E))})}},h.race=function(u){var d=this;if(Object.prototype.toString.call(u)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=u.length,S=!1;if(!y)return this.resolve([]);for(var R=-1,A=new this(a);++R<y;)C=u[R],d.resolve(C).then(function(D){S||(S=!0,l.resolve(A,D))},function(D){S||(S=!0,l.reject(A,D))});var C;return A}},{immediate:36}],38:[function(t,r,i){var o={};(0,t("./lib/utils/common").assign)(o,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),r.exports=o},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,r,i){var o=t("./zlib/deflate"),a=t("./utils/common"),l=t("./utils/strings"),s=t("./zlib/messages"),f=t("./zlib/zstream"),w=Object.prototype.toString,h=0,g=-1,m=0,k=8;function p(u){if(!(this instanceof p))return new p(u);this.options=a.assign({level:g,method:k,chunkSize:16384,windowBits:15,memLevel:8,strategy:m,to:""},u||{});var d=this.options;d.raw&&0<d.windowBits?d.windowBits=-d.windowBits:d.gzip&&0<d.windowBits&&d.windowBits<16&&(d.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var y=o.deflateInit2(this.strm,d.level,d.method,d.windowBits,d.memLevel,d.strategy);if(y!==h)throw new Error(s[y]);if(d.header&&o.deflateSetHeader(this.strm,d.header),d.dictionary){var S;if(S=typeof d.dictionary=="string"?l.string2buf(d.dictionary):w.call(d.dictionary)==="[object ArrayBuffer]"?new Uint8Array(d.dictionary):d.dictionary,(y=o.deflateSetDictionary(this.strm,S))!==h)throw new Error(s[y]);this._dict_set=!0}}function b(u,d){var y=new p(d);if(y.push(u,!0),y.err)throw y.msg||s[y.err];return y.result}p.prototype.push=function(u,d){var y,S,R=this.strm,A=this.options.chunkSize;if(this.ended)return!1;S=d===~~d?d:d===!0?4:0,typeof u=="string"?R.input=l.string2buf(u):w.call(u)==="[object ArrayBuffer]"?R.input=new Uint8Array(u):R.input=u,R.next_in=0,R.avail_in=R.input.length;do{if(R.avail_out===0&&(R.output=new a.Buf8(A),R.next_out=0,R.avail_out=A),(y=o.deflate(R,S))!==1&&y!==h)return this.onEnd(y),!(this.ended=!0);R.avail_out!==0&&(R.avail_in!==0||S!==4&&S!==2)||(this.options.to==="string"?this.onData(l.buf2binstring(a.shrinkBuf(R.output,R.next_out))):this.onData(a.shrinkBuf(R.output,R.next_out)))}while((0<R.avail_in||R.avail_out===0)&&y!==1);return S===4?(y=o.deflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===h):S!==2||(this.onEnd(h),!(R.avail_out=0))},p.prototype.onData=function(u){this.chunks.push(u)},p.prototype.onEnd=function(u){u===h&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=u,this.msg=this.strm.msg},i.Deflate=p,i.deflate=b,i.deflateRaw=function(u,d){return(d=d||{}).raw=!0,b(u,d)},i.gzip=function(u,d){return(d=d||{}).gzip=!0,b(u,d)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,r,i){var o=t("./zlib/inflate"),a=t("./utils/common"),l=t("./utils/strings"),s=t("./zlib/constants"),f=t("./zlib/messages"),w=t("./zlib/zstream"),h=t("./zlib/gzheader"),g=Object.prototype.toString;function m(p){if(!(this instanceof m))return new m(p);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},p||{});var b=this.options;b.raw&&0<=b.windowBits&&b.windowBits<16&&(b.windowBits=-b.windowBits,b.windowBits===0&&(b.windowBits=-15)),!(0<=b.windowBits&&b.windowBits<16)||p&&p.windowBits||(b.windowBits+=32),15<b.windowBits&&b.windowBits<48&&!(15&b.windowBits)&&(b.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new w,this.strm.avail_out=0;var u=o.inflateInit2(this.strm,b.windowBits);if(u!==s.Z_OK)throw new Error(f[u]);this.header=new h,o.inflateGetHeader(this.strm,this.header)}function k(p,b){var u=new m(b);if(u.push(p,!0),u.err)throw u.msg||f[u.err];return u.result}m.prototype.push=function(p,b){var u,d,y,S,R,A,C=this.strm,D=this.options.chunkSize,z=this.options.dictionary,I=!1;if(this.ended)return!1;d=b===~~b?b:b===!0?s.Z_FINISH:s.Z_NO_FLUSH,typeof p=="string"?C.input=l.binstring2buf(p):g.call(p)==="[object ArrayBuffer]"?C.input=new Uint8Array(p):C.input=p,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new a.Buf8(D),C.next_out=0,C.avail_out=D),(u=o.inflate(C,s.Z_NO_FLUSH))===s.Z_NEED_DICT&&z&&(A=typeof z=="string"?l.string2buf(z):g.call(z)==="[object ArrayBuffer]"?new Uint8Array(z):z,u=o.inflateSetDictionary(this.strm,A)),u===s.Z_BUF_ERROR&&I===!0&&(u=s.Z_OK,I=!1),u!==s.Z_STREAM_END&&u!==s.Z_OK)return this.onEnd(u),!(this.ended=!0);C.next_out&&(C.avail_out!==0&&u!==s.Z_STREAM_END&&(C.avail_in!==0||d!==s.Z_FINISH&&d!==s.Z_SYNC_FLUSH)||(this.options.to==="string"?(y=l.utf8border(C.output,C.next_out),S=C.next_out-y,R=l.buf2string(C.output,y),C.next_out=S,C.avail_out=D-S,S&&a.arraySet(C.output,C.output,y,S,0),this.onData(R)):this.onData(a.shrinkBuf(C.output,C.next_out)))),C.avail_in===0&&C.avail_out===0&&(I=!0)}while((0<C.avail_in||C.avail_out===0)&&u!==s.Z_STREAM_END);return u===s.Z_STREAM_END&&(d=s.Z_FINISH),d===s.Z_FINISH?(u=o.inflateEnd(this.strm),this.onEnd(u),this.ended=!0,u===s.Z_OK):d!==s.Z_SYNC_FLUSH||(this.onEnd(s.Z_OK),!(C.avail_out=0))},m.prototype.onData=function(p){this.chunks.push(p)},m.prototype.onEnd=function(p){p===s.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=p,this.msg=this.strm.msg},i.Inflate=m,i.inflate=k,i.inflateRaw=function(p,b){return(b=b||{}).raw=!0,k(p,b)},i.ungzip=k},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,r,i){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(s){for(var f=Array.prototype.slice.call(arguments,1);f.length;){var w=f.shift();if(w){if(typeof w!="object")throw new TypeError(w+"must be non-object");for(var h in w)w.hasOwnProperty(h)&&(s[h]=w[h])}}return s},i.shrinkBuf=function(s,f){return s.length===f?s:s.subarray?s.subarray(0,f):(s.length=f,s)};var a={arraySet:function(s,f,w,h,g){if(f.subarray&&s.subarray)s.set(f.subarray(w,w+h),g);else for(var m=0;m<h;m++)s[g+m]=f[w+m]},flattenChunks:function(s){var f,w,h,g,m,k;for(f=h=0,w=s.length;f<w;f++)h+=s[f].length;for(k=new Uint8Array(h),f=g=0,w=s.length;f<w;f++)m=s[f],k.set(m,g),g+=m.length;return k}},l={arraySet:function(s,f,w,h,g){for(var m=0;m<h;m++)s[g+m]=f[w+m]},flattenChunks:function(s){return[].concat.apply([],s)}};i.setTyped=function(s){s?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,a)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,l))},i.setTyped(o)},{}],42:[function(t,r,i){var o=t("./common"),a=!0,l=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{l=!1}for(var s=new o.Buf8(256),f=0;f<256;f++)s[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;function w(h,g){if(g<65537&&(h.subarray&&l||!h.subarray&&a))return String.fromCharCode.apply(null,o.shrinkBuf(h,g));for(var m="",k=0;k<g;k++)m+=String.fromCharCode(h[k]);return m}s[254]=s[254]=1,i.string2buf=function(h){var g,m,k,p,b,u=h.length,d=0;for(p=0;p<u;p++)(64512&(m=h.charCodeAt(p)))==55296&&p+1<u&&(64512&(k=h.charCodeAt(p+1)))==56320&&(m=65536+(m-55296<<10)+(k-56320),p++),d+=m<128?1:m<2048?2:m<65536?3:4;for(g=new o.Buf8(d),p=b=0;b<d;p++)(64512&(m=h.charCodeAt(p)))==55296&&p+1<u&&(64512&(k=h.charCodeAt(p+1)))==56320&&(m=65536+(m-55296<<10)+(k-56320),p++),m<128?g[b++]=m:(m<2048?g[b++]=192|m>>>6:(m<65536?g[b++]=224|m>>>12:(g[b++]=240|m>>>18,g[b++]=128|m>>>12&63),g[b++]=128|m>>>6&63),g[b++]=128|63&m);return g},i.buf2binstring=function(h){return w(h,h.length)},i.binstring2buf=function(h){for(var g=new o.Buf8(h.length),m=0,k=g.length;m<k;m++)g[m]=h.charCodeAt(m);return g},i.buf2string=function(h,g){var m,k,p,b,u=g||h.length,d=new Array(2*u);for(m=k=0;m<u;)if((p=h[m++])<128)d[k++]=p;else if(4<(b=s[p]))d[k++]=65533,m+=b-1;else{for(p&=b===2?31:b===3?15:7;1<b&&m<u;)p=p<<6|63&h[m++],b--;1<b?d[k++]=65533:p<65536?d[k++]=p:(p-=65536,d[k++]=55296|p>>10&1023,d[k++]=56320|1023&p)}return w(d,k)},i.utf8border=function(h,g){var m;for((g=g||h.length)>h.length&&(g=h.length),m=g-1;0<=m&&(192&h[m])==128;)m--;return m<0||m===0?g:m+s[h[m]]>g?m:g}},{"./common":41}],43:[function(t,r,i){r.exports=function(o,a,l,s){for(var f=65535&o|0,w=o>>>16&65535|0,h=0;l!==0;){for(l-=h=2e3<l?2e3:l;w=w+(f=f+a[s++]|0)|0,--h;);f%=65521,w%=65521}return f|w<<16|0}},{}],44:[function(t,r,i){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,r,i){var o=function(){for(var a,l=[],s=0;s<256;s++){a=s;for(var f=0;f<8;f++)a=1&a?3988292384^a>>>1:a>>>1;l[s]=a}return l}();r.exports=function(a,l,s,f){var w=o,h=f+s;a^=-1;for(var g=f;g<h;g++)a=a>>>8^w[255&(a^l[g])];return-1^a}},{}],46:[function(t,r,i){var o,a=t("../utils/common"),l=t("./trees"),s=t("./adler32"),f=t("./crc32"),w=t("./messages"),h=0,g=4,m=0,k=-2,p=-1,b=4,u=2,d=8,y=9,S=286,R=30,A=19,C=2*S+1,D=15,z=3,I=258,H=I+z+1,E=42,N=113,v=1,B=2,oe=3,q=4;function $(c,M){return c.msg=w[M],M}function L(c){return(c<<1)-(4<c?9:0)}function K(c){for(var M=c.length;0<=--M;)c[M]=0}function O(c){var M=c.state,T=M.pending;T>c.avail_out&&(T=c.avail_out),T!==0&&(a.arraySet(c.output,M.pending_buf,M.pending_out,T,c.next_out),c.next_out+=T,M.pending_out+=T,c.total_out+=T,c.avail_out-=T,M.pending-=T,M.pending===0&&(M.pending_out=0))}function P(c,M){l._tr_flush_block(c,0<=c.block_start?c.block_start:-1,c.strstart-c.block_start,M),c.block_start=c.strstart,O(c.strm)}function te(c,M){c.pending_buf[c.pending++]=M}function Q(c,M){c.pending_buf[c.pending++]=M>>>8&255,c.pending_buf[c.pending++]=255&M}function G(c,M){var T,_,x=c.max_chain_length,j=c.strstart,U=c.prev_length,W=c.nice_match,F=c.strstart>c.w_size-H?c.strstart-(c.w_size-H):0,Z=c.window,X=c.w_mask,J=c.prev,ie=c.strstart+I,he=Z[j+U-1],ue=Z[j+U];c.prev_length>=c.good_match&&(x>>=2),W>c.lookahead&&(W=c.lookahead);do if(Z[(T=M)+U]===ue&&Z[T+U-1]===he&&Z[T]===Z[j]&&Z[++T]===Z[j+1]){j+=2,T++;do;while(Z[++j]===Z[++T]&&Z[++j]===Z[++T]&&Z[++j]===Z[++T]&&Z[++j]===Z[++T]&&Z[++j]===Z[++T]&&Z[++j]===Z[++T]&&Z[++j]===Z[++T]&&Z[++j]===Z[++T]&&j<ie);if(_=I-(ie-j),j=ie-I,U<_){if(c.match_start=M,W<=(U=_))break;he=Z[j+U-1],ue=Z[j+U]}}while((M=J[M&X])>F&&--x!=0);return U<=c.lookahead?U:c.lookahead}function fe(c){var M,T,_,x,j,U,W,F,Z,X,J=c.w_size;do{if(x=c.window_size-c.lookahead-c.strstart,c.strstart>=J+(J-H)){for(a.arraySet(c.window,c.window,J,J,0),c.match_start-=J,c.strstart-=J,c.block_start-=J,M=T=c.hash_size;_=c.head[--M],c.head[M]=J<=_?_-J:0,--T;);for(M=T=J;_=c.prev[--M],c.prev[M]=J<=_?_-J:0,--T;);x+=J}if(c.strm.avail_in===0)break;if(U=c.strm,W=c.window,F=c.strstart+c.lookahead,Z=x,X=void 0,X=U.avail_in,Z<X&&(X=Z),T=X===0?0:(U.avail_in-=X,a.arraySet(W,U.input,U.next_in,X,F),U.state.wrap===1?U.adler=s(U.adler,W,X,F):U.state.wrap===2&&(U.adler=f(U.adler,W,X,F)),U.next_in+=X,U.total_in+=X,X),c.lookahead+=T,c.lookahead+c.insert>=z)for(j=c.strstart-c.insert,c.ins_h=c.window[j],c.ins_h=(c.ins_h<<c.hash_shift^c.window[j+1])&c.hash_mask;c.insert&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[j+z-1])&c.hash_mask,c.prev[j&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=j,j++,c.insert--,!(c.lookahead+c.insert<z)););}while(c.lookahead<H&&c.strm.avail_in!==0)}function ze(c,M){for(var T,_;;){if(c.lookahead<H){if(fe(c),c.lookahead<H&&M===h)return v;if(c.lookahead===0)break}if(T=0,c.lookahead>=z&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+z-1])&c.hash_mask,T=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),T!==0&&c.strstart-T<=c.w_size-H&&(c.match_length=G(c,T)),c.match_length>=z)if(_=l._tr_tally(c,c.strstart-c.match_start,c.match_length-z),c.lookahead-=c.match_length,c.match_length<=c.max_lazy_match&&c.lookahead>=z){for(c.match_length--;c.strstart++,c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+z-1])&c.hash_mask,T=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart,--c.match_length!=0;);c.strstart++}else c.strstart+=c.match_length,c.match_length=0,c.ins_h=c.window[c.strstart],c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+1])&c.hash_mask;else _=l._tr_tally(c,0,c.window[c.strstart]),c.lookahead--,c.strstart++;if(_&&(P(c,!1),c.strm.avail_out===0))return v}return c.insert=c.strstart<z-1?c.strstart:z-1,M===g?(P(c,!0),c.strm.avail_out===0?oe:q):c.last_lit&&(P(c,!1),c.strm.avail_out===0)?v:B}function se(c,M){for(var T,_,x;;){if(c.lookahead<H){if(fe(c),c.lookahead<H&&M===h)return v;if(c.lookahead===0)break}if(T=0,c.lookahead>=z&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+z-1])&c.hash_mask,T=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),c.prev_length=c.match_length,c.prev_match=c.match_start,c.match_length=z-1,T!==0&&c.prev_length<c.max_lazy_match&&c.strstart-T<=c.w_size-H&&(c.match_length=G(c,T),c.match_length<=5&&(c.strategy===1||c.match_length===z&&4096<c.strstart-c.match_start)&&(c.match_length=z-1)),c.prev_length>=z&&c.match_length<=c.prev_length){for(x=c.strstart+c.lookahead-z,_=l._tr_tally(c,c.strstart-1-c.prev_match,c.prev_length-z),c.lookahead-=c.prev_length-1,c.prev_length-=2;++c.strstart<=x&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+z-1])&c.hash_mask,T=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),--c.prev_length!=0;);if(c.match_available=0,c.match_length=z-1,c.strstart++,_&&(P(c,!1),c.strm.avail_out===0))return v}else if(c.match_available){if((_=l._tr_tally(c,0,c.window[c.strstart-1]))&&P(c,!1),c.strstart++,c.lookahead--,c.strm.avail_out===0)return v}else c.match_available=1,c.strstart++,c.lookahead--}return c.match_available&&(_=l._tr_tally(c,0,c.window[c.strstart-1]),c.match_available=0),c.insert=c.strstart<z-1?c.strstart:z-1,M===g?(P(c,!0),c.strm.avail_out===0?oe:q):c.last_lit&&(P(c,!1),c.strm.avail_out===0)?v:B}function de(c,M,T,_,x){this.good_length=c,this.max_lazy=M,this.nice_length=T,this.max_chain=_,this.func=x}function Fe(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=d,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*C),this.dyn_dtree=new a.Buf16(2*(2*R+1)),this.bl_tree=new a.Buf16(2*(2*A+1)),K(this.dyn_ltree),K(this.dyn_dtree),K(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(D+1),this.heap=new a.Buf16(2*S+1),K(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*S+1),K(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Ee(c){var M;return c&&c.state?(c.total_in=c.total_out=0,c.data_type=u,(M=c.state).pending=0,M.pending_out=0,M.wrap<0&&(M.wrap=-M.wrap),M.status=M.wrap?E:N,c.adler=M.wrap===2?0:1,M.last_flush=h,l._tr_init(M),m):$(c,k)}function _n(c){var M=Ee(c);return M===m&&function(T){T.window_size=2*T.w_size,K(T.head),T.max_lazy_match=o[T.level].max_lazy,T.good_match=o[T.level].good_length,T.nice_match=o[T.level].nice_length,T.max_chain_length=o[T.level].max_chain,T.strstart=0,T.block_start=0,T.lookahead=0,T.insert=0,T.match_length=T.prev_length=z-1,T.match_available=0,T.ins_h=0}(c.state),M}function vn(c,M,T,_,x,j){if(!c)return k;var U=1;if(M===p&&(M=6),_<0?(U=0,_=-_):15<_&&(U=2,_-=16),x<1||y<x||T!==d||_<8||15<_||M<0||9<M||j<0||b<j)return $(c,k);_===8&&(_=9);var W=new Fe;return(c.state=W).strm=c,W.wrap=U,W.gzhead=null,W.w_bits=_,W.w_size=1<<W.w_bits,W.w_mask=W.w_size-1,W.hash_bits=x+7,W.hash_size=1<<W.hash_bits,W.hash_mask=W.hash_size-1,W.hash_shift=~~((W.hash_bits+z-1)/z),W.window=new a.Buf8(2*W.w_size),W.head=new a.Buf16(W.hash_size),W.prev=new a.Buf16(W.w_size),W.lit_bufsize=1<<x+6,W.pending_buf_size=4*W.lit_bufsize,W.pending_buf=new a.Buf8(W.pending_buf_size),W.d_buf=1*W.lit_bufsize,W.l_buf=3*W.lit_bufsize,W.level=M,W.strategy=j,W.method=T,_n(c)}o=[new de(0,0,0,0,function(c,M){var T=65535;for(T>c.pending_buf_size-5&&(T=c.pending_buf_size-5);;){if(c.lookahead<=1){if(fe(c),c.lookahead===0&&M===h)return v;if(c.lookahead===0)break}c.strstart+=c.lookahead,c.lookahead=0;var _=c.block_start+T;if((c.strstart===0||c.strstart>=_)&&(c.lookahead=c.strstart-_,c.strstart=_,P(c,!1),c.strm.avail_out===0)||c.strstart-c.block_start>=c.w_size-H&&(P(c,!1),c.strm.avail_out===0))return v}return c.insert=0,M===g?(P(c,!0),c.strm.avail_out===0?oe:q):(c.strstart>c.block_start&&(P(c,!1),c.strm.avail_out),v)}),new de(4,4,8,4,ze),new de(4,5,16,8,ze),new de(4,6,32,32,ze),new de(4,4,16,16,se),new de(8,16,32,32,se),new de(8,16,128,128,se),new de(8,32,128,256,se),new de(32,128,258,1024,se),new de(32,258,258,4096,se)],i.deflateInit=function(c,M){return vn(c,M,d,15,8,0)},i.deflateInit2=vn,i.deflateReset=_n,i.deflateResetKeep=Ee,i.deflateSetHeader=function(c,M){return c&&c.state?c.state.wrap!==2?k:(c.state.gzhead=M,m):k},i.deflate=function(c,M){var T,_,x,j;if(!c||!c.state||5<M||M<0)return c?$(c,k):k;if(_=c.state,!c.output||!c.input&&c.avail_in!==0||_.status===666&&M!==g)return $(c,c.avail_out===0?-5:k);if(_.strm=c,T=_.last_flush,_.last_flush=M,_.status===E)if(_.wrap===2)c.adler=0,te(_,31),te(_,139),te(_,8),_.gzhead?(te(_,(_.gzhead.text?1:0)+(_.gzhead.hcrc?2:0)+(_.gzhead.extra?4:0)+(_.gzhead.name?8:0)+(_.gzhead.comment?16:0)),te(_,255&_.gzhead.time),te(_,_.gzhead.time>>8&255),te(_,_.gzhead.time>>16&255),te(_,_.gzhead.time>>24&255),te(_,_.level===9?2:2<=_.strategy||_.level<2?4:0),te(_,255&_.gzhead.os),_.gzhead.extra&&_.gzhead.extra.length&&(te(_,255&_.gzhead.extra.length),te(_,_.gzhead.extra.length>>8&255)),_.gzhead.hcrc&&(c.adler=f(c.adler,_.pending_buf,_.pending,0)),_.gzindex=0,_.status=69):(te(_,0),te(_,0),te(_,0),te(_,0),te(_,0),te(_,_.level===9?2:2<=_.strategy||_.level<2?4:0),te(_,3),_.status=N);else{var U=d+(_.w_bits-8<<4)<<8;U|=(2<=_.strategy||_.level<2?0:_.level<6?1:_.level===6?2:3)<<6,_.strstart!==0&&(U|=32),U+=31-U%31,_.status=N,Q(_,U),_.strstart!==0&&(Q(_,c.adler>>>16),Q(_,65535&c.adler)),c.adler=1}if(_.status===69)if(_.gzhead.extra){for(x=_.pending;_.gzindex<(65535&_.gzhead.extra.length)&&(_.pending!==_.pending_buf_size||(_.gzhead.hcrc&&_.pending>x&&(c.adler=f(c.adler,_.pending_buf,_.pending-x,x)),O(c),x=_.pending,_.pending!==_.pending_buf_size));)te(_,255&_.gzhead.extra[_.gzindex]),_.gzindex++;_.gzhead.hcrc&&_.pending>x&&(c.adler=f(c.adler,_.pending_buf,_.pending-x,x)),_.gzindex===_.gzhead.extra.length&&(_.gzindex=0,_.status=73)}else _.status=73;if(_.status===73)if(_.gzhead.name){x=_.pending;do{if(_.pending===_.pending_buf_size&&(_.gzhead.hcrc&&_.pending>x&&(c.adler=f(c.adler,_.pending_buf,_.pending-x,x)),O(c),x=_.pending,_.pending===_.pending_buf_size)){j=1;break}j=_.gzindex<_.gzhead.name.length?255&_.gzhead.name.charCodeAt(_.gzindex++):0,te(_,j)}while(j!==0);_.gzhead.hcrc&&_.pending>x&&(c.adler=f(c.adler,_.pending_buf,_.pending-x,x)),j===0&&(_.gzindex=0,_.status=91)}else _.status=91;if(_.status===91)if(_.gzhead.comment){x=_.pending;do{if(_.pending===_.pending_buf_size&&(_.gzhead.hcrc&&_.pending>x&&(c.adler=f(c.adler,_.pending_buf,_.pending-x,x)),O(c),x=_.pending,_.pending===_.pending_buf_size)){j=1;break}j=_.gzindex<_.gzhead.comment.length?255&_.gzhead.comment.charCodeAt(_.gzindex++):0,te(_,j)}while(j!==0);_.gzhead.hcrc&&_.pending>x&&(c.adler=f(c.adler,_.pending_buf,_.pending-x,x)),j===0&&(_.status=103)}else _.status=103;if(_.status===103&&(_.gzhead.hcrc?(_.pending+2>_.pending_buf_size&&O(c),_.pending+2<=_.pending_buf_size&&(te(_,255&c.adler),te(_,c.adler>>8&255),c.adler=0,_.status=N)):_.status=N),_.pending!==0){if(O(c),c.avail_out===0)return _.last_flush=-1,m}else if(c.avail_in===0&&L(M)<=L(T)&&M!==g)return $(c,-5);if(_.status===666&&c.avail_in!==0)return $(c,-5);if(c.avail_in!==0||_.lookahead!==0||M!==h&&_.status!==666){var W=_.strategy===2?function(F,Z){for(var X;;){if(F.lookahead===0&&(fe(F),F.lookahead===0)){if(Z===h)return v;break}if(F.match_length=0,X=l._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++,X&&(P(F,!1),F.strm.avail_out===0))return v}return F.insert=0,Z===g?(P(F,!0),F.strm.avail_out===0?oe:q):F.last_lit&&(P(F,!1),F.strm.avail_out===0)?v:B}(_,M):_.strategy===3?function(F,Z){for(var X,J,ie,he,ue=F.window;;){if(F.lookahead<=I){if(fe(F),F.lookahead<=I&&Z===h)return v;if(F.lookahead===0)break}if(F.match_length=0,F.lookahead>=z&&0<F.strstart&&(J=ue[ie=F.strstart-1])===ue[++ie]&&J===ue[++ie]&&J===ue[++ie]){he=F.strstart+I;do;while(J===ue[++ie]&&J===ue[++ie]&&J===ue[++ie]&&J===ue[++ie]&&J===ue[++ie]&&J===ue[++ie]&&J===ue[++ie]&&J===ue[++ie]&&ie<he);F.match_length=I-(he-ie),F.match_length>F.lookahead&&(F.match_length=F.lookahead)}if(F.match_length>=z?(X=l._tr_tally(F,1,F.match_length-z),F.lookahead-=F.match_length,F.strstart+=F.match_length,F.match_length=0):(X=l._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++),X&&(P(F,!1),F.strm.avail_out===0))return v}return F.insert=0,Z===g?(P(F,!0),F.strm.avail_out===0?oe:q):F.last_lit&&(P(F,!1),F.strm.avail_out===0)?v:B}(_,M):o[_.level].func(_,M);if(W!==oe&&W!==q||(_.status=666),W===v||W===oe)return c.avail_out===0&&(_.last_flush=-1),m;if(W===B&&(M===1?l._tr_align(_):M!==5&&(l._tr_stored_block(_,0,0,!1),M===3&&(K(_.head),_.lookahead===0&&(_.strstart=0,_.block_start=0,_.insert=0))),O(c),c.avail_out===0))return _.last_flush=-1,m}return M!==g?m:_.wrap<=0?1:(_.wrap===2?(te(_,255&c.adler),te(_,c.adler>>8&255),te(_,c.adler>>16&255),te(_,c.adler>>24&255),te(_,255&c.total_in),te(_,c.total_in>>8&255),te(_,c.total_in>>16&255),te(_,c.total_in>>24&255)):(Q(_,c.adler>>>16),Q(_,65535&c.adler)),O(c),0<_.wrap&&(_.wrap=-_.wrap),_.pending!==0?m:1)},i.deflateEnd=function(c){var M;return c&&c.state?(M=c.state.status)!==E&&M!==69&&M!==73&&M!==91&&M!==103&&M!==N&&M!==666?$(c,k):(c.state=null,M===N?$(c,-3):m):k},i.deflateSetDictionary=function(c,M){var T,_,x,j,U,W,F,Z,X=M.length;if(!c||!c.state||(j=(T=c.state).wrap)===2||j===1&&T.status!==E||T.lookahead)return k;for(j===1&&(c.adler=s(c.adler,M,X,0)),T.wrap=0,X>=T.w_size&&(j===0&&(K(T.head),T.strstart=0,T.block_start=0,T.insert=0),Z=new a.Buf8(T.w_size),a.arraySet(Z,M,X-T.w_size,T.w_size,0),M=Z,X=T.w_size),U=c.avail_in,W=c.next_in,F=c.input,c.avail_in=X,c.next_in=0,c.input=M,fe(T);T.lookahead>=z;){for(_=T.strstart,x=T.lookahead-(z-1);T.ins_h=(T.ins_h<<T.hash_shift^T.window[_+z-1])&T.hash_mask,T.prev[_&T.w_mask]=T.head[T.ins_h],T.head[T.ins_h]=_,_++,--x;);T.strstart=_,T.lookahead=z-1,fe(T)}return T.strstart+=T.lookahead,T.block_start=T.strstart,T.insert=T.lookahead,T.lookahead=0,T.match_length=T.prev_length=z-1,T.match_available=0,c.next_in=W,c.input=F,c.avail_in=U,T.wrap=j,m},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,r,i){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,r,i){r.exports=function(o,a){var l,s,f,w,h,g,m,k,p,b,u,d,y,S,R,A,C,D,z,I,H,E,N,v,B;l=o.state,s=o.next_in,v=o.input,f=s+(o.avail_in-5),w=o.next_out,B=o.output,h=w-(a-o.avail_out),g=w+(o.avail_out-257),m=l.dmax,k=l.wsize,p=l.whave,b=l.wnext,u=l.window,d=l.hold,y=l.bits,S=l.lencode,R=l.distcode,A=(1<<l.lenbits)-1,C=(1<<l.distbits)-1;e:do{y<15&&(d+=v[s++]<<y,y+=8,d+=v[s++]<<y,y+=8),D=S[d&A];n:for(;;){if(d>>>=z=D>>>24,y-=z,(z=D>>>16&255)===0)B[w++]=65535&D;else{if(!(16&z)){if(!(64&z)){D=S[(65535&D)+(d&(1<<z)-1)];continue n}if(32&z){l.mode=12;break e}o.msg="invalid literal/length code",l.mode=30;break e}I=65535&D,(z&=15)&&(y<z&&(d+=v[s++]<<y,y+=8),I+=d&(1<<z)-1,d>>>=z,y-=z),y<15&&(d+=v[s++]<<y,y+=8,d+=v[s++]<<y,y+=8),D=R[d&C];t:for(;;){if(d>>>=z=D>>>24,y-=z,!(16&(z=D>>>16&255))){if(!(64&z)){D=R[(65535&D)+(d&(1<<z)-1)];continue t}o.msg="invalid distance code",l.mode=30;break e}if(H=65535&D,y<(z&=15)&&(d+=v[s++]<<y,(y+=8)<z&&(d+=v[s++]<<y,y+=8)),m<(H+=d&(1<<z)-1)){o.msg="invalid distance too far back",l.mode=30;break e}if(d>>>=z,y-=z,(z=w-h)<H){if(p<(z=H-z)&&l.sane){o.msg="invalid distance too far back",l.mode=30;break e}if(N=u,(E=0)===b){if(E+=k-z,z<I){for(I-=z;B[w++]=u[E++],--z;);E=w-H,N=B}}else if(b<z){if(E+=k+b-z,(z-=b)<I){for(I-=z;B[w++]=u[E++],--z;);if(E=0,b<I){for(I-=z=b;B[w++]=u[E++],--z;);E=w-H,N=B}}}else if(E+=b-z,z<I){for(I-=z;B[w++]=u[E++],--z;);E=w-H,N=B}for(;2<I;)B[w++]=N[E++],B[w++]=N[E++],B[w++]=N[E++],I-=3;I&&(B[w++]=N[E++],1<I&&(B[w++]=N[E++]))}else{for(E=w-H;B[w++]=B[E++],B[w++]=B[E++],B[w++]=B[E++],2<(I-=3););I&&(B[w++]=B[E++],1<I&&(B[w++]=B[E++]))}break}}break}}while(s<f&&w<g);s-=I=y>>3,d&=(1<<(y-=I<<3))-1,o.next_in=s,o.next_out=w,o.avail_in=s<f?f-s+5:5-(s-f),o.avail_out=w<g?g-w+257:257-(w-g),l.hold=d,l.bits=y}},{}],49:[function(t,r,i){var o=t("../utils/common"),a=t("./adler32"),l=t("./crc32"),s=t("./inffast"),f=t("./inftrees"),w=1,h=2,g=0,m=-2,k=1,p=852,b=592;function u(E){return(E>>>24&255)+(E>>>8&65280)+((65280&E)<<8)+((255&E)<<24)}function d(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new o.Buf16(320),this.work=new o.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function y(E){var N;return E&&E.state?(N=E.state,E.total_in=E.total_out=N.total=0,E.msg="",N.wrap&&(E.adler=1&N.wrap),N.mode=k,N.last=0,N.havedict=0,N.dmax=32768,N.head=null,N.hold=0,N.bits=0,N.lencode=N.lendyn=new o.Buf32(p),N.distcode=N.distdyn=new o.Buf32(b),N.sane=1,N.back=-1,g):m}function S(E){var N;return E&&E.state?((N=E.state).wsize=0,N.whave=0,N.wnext=0,y(E)):m}function R(E,N){var v,B;return E&&E.state?(B=E.state,N<0?(v=0,N=-N):(v=1+(N>>4),N<48&&(N&=15)),N&&(N<8||15<N)?m:(B.window!==null&&B.wbits!==N&&(B.window=null),B.wrap=v,B.wbits=N,S(E))):m}function A(E,N){var v,B;return E?(B=new d,(E.state=B).window=null,(v=R(E,N))!==g&&(E.state=null),v):m}var C,D,z=!0;function I(E){if(z){var N;for(C=new o.Buf32(512),D=new o.Buf32(32),N=0;N<144;)E.lens[N++]=8;for(;N<256;)E.lens[N++]=9;for(;N<280;)E.lens[N++]=7;for(;N<288;)E.lens[N++]=8;for(f(w,E.lens,0,288,C,0,E.work,{bits:9}),N=0;N<32;)E.lens[N++]=5;f(h,E.lens,0,32,D,0,E.work,{bits:5}),z=!1}E.lencode=C,E.lenbits=9,E.distcode=D,E.distbits=5}function H(E,N,v,B){var oe,q=E.state;return q.window===null&&(q.wsize=1<<q.wbits,q.wnext=0,q.whave=0,q.window=new o.Buf8(q.wsize)),B>=q.wsize?(o.arraySet(q.window,N,v-q.wsize,q.wsize,0),q.wnext=0,q.whave=q.wsize):(B<(oe=q.wsize-q.wnext)&&(oe=B),o.arraySet(q.window,N,v-B,oe,q.wnext),(B-=oe)?(o.arraySet(q.window,N,v-B,B,0),q.wnext=B,q.whave=q.wsize):(q.wnext+=oe,q.wnext===q.wsize&&(q.wnext=0),q.whave<q.wsize&&(q.whave+=oe))),0}i.inflateReset=S,i.inflateReset2=R,i.inflateResetKeep=y,i.inflateInit=function(E){return A(E,15)},i.inflateInit2=A,i.inflate=function(E,N){var v,B,oe,q,$,L,K,O,P,te,Q,G,fe,ze,se,de,Fe,Ee,_n,vn,c,M,T,_,x=0,j=new o.Buf8(4),U=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!E||!E.state||!E.output||!E.input&&E.avail_in!==0)return m;(v=E.state).mode===12&&(v.mode=13),$=E.next_out,oe=E.output,K=E.avail_out,q=E.next_in,B=E.input,L=E.avail_in,O=v.hold,P=v.bits,te=L,Q=K,M=g;e:for(;;)switch(v.mode){case k:if(v.wrap===0){v.mode=13;break}for(;P<16;){if(L===0)break e;L--,O+=B[q++]<<P,P+=8}if(2&v.wrap&&O===35615){j[v.check=0]=255&O,j[1]=O>>>8&255,v.check=l(v.check,j,2,0),P=O=0,v.mode=2;break}if(v.flags=0,v.head&&(v.head.done=!1),!(1&v.wrap)||(((255&O)<<8)+(O>>8))%31){E.msg="incorrect header check",v.mode=30;break}if((15&O)!=8){E.msg="unknown compression method",v.mode=30;break}if(P-=4,c=8+(15&(O>>>=4)),v.wbits===0)v.wbits=c;else if(c>v.wbits){E.msg="invalid window size",v.mode=30;break}v.dmax=1<<c,E.adler=v.check=1,v.mode=512&O?10:12,P=O=0;break;case 2:for(;P<16;){if(L===0)break e;L--,O+=B[q++]<<P,P+=8}if(v.flags=O,(255&v.flags)!=8){E.msg="unknown compression method",v.mode=30;break}if(57344&v.flags){E.msg="unknown header flags set",v.mode=30;break}v.head&&(v.head.text=O>>8&1),512&v.flags&&(j[0]=255&O,j[1]=O>>>8&255,v.check=l(v.check,j,2,0)),P=O=0,v.mode=3;case 3:for(;P<32;){if(L===0)break e;L--,O+=B[q++]<<P,P+=8}v.head&&(v.head.time=O),512&v.flags&&(j[0]=255&O,j[1]=O>>>8&255,j[2]=O>>>16&255,j[3]=O>>>24&255,v.check=l(v.check,j,4,0)),P=O=0,v.mode=4;case 4:for(;P<16;){if(L===0)break e;L--,O+=B[q++]<<P,P+=8}v.head&&(v.head.xflags=255&O,v.head.os=O>>8),512&v.flags&&(j[0]=255&O,j[1]=O>>>8&255,v.check=l(v.check,j,2,0)),P=O=0,v.mode=5;case 5:if(1024&v.flags){for(;P<16;){if(L===0)break e;L--,O+=B[q++]<<P,P+=8}v.length=O,v.head&&(v.head.extra_len=O),512&v.flags&&(j[0]=255&O,j[1]=O>>>8&255,v.check=l(v.check,j,2,0)),P=O=0}else v.head&&(v.head.extra=null);v.mode=6;case 6:if(1024&v.flags&&(L<(G=v.length)&&(G=L),G&&(v.head&&(c=v.head.extra_len-v.length,v.head.extra||(v.head.extra=new Array(v.head.extra_len)),o.arraySet(v.head.extra,B,q,G,c)),512&v.flags&&(v.check=l(v.check,B,G,q)),L-=G,q+=G,v.length-=G),v.length))break e;v.length=0,v.mode=7;case 7:if(2048&v.flags){if(L===0)break e;for(G=0;c=B[q+G++],v.head&&c&&v.length<65536&&(v.head.name+=String.fromCharCode(c)),c&&G<L;);if(512&v.flags&&(v.check=l(v.check,B,G,q)),L-=G,q+=G,c)break e}else v.head&&(v.head.name=null);v.length=0,v.mode=8;case 8:if(4096&v.flags){if(L===0)break e;for(G=0;c=B[q+G++],v.head&&c&&v.length<65536&&(v.head.comment+=String.fromCharCode(c)),c&&G<L;);if(512&v.flags&&(v.check=l(v.check,B,G,q)),L-=G,q+=G,c)break e}else v.head&&(v.head.comment=null);v.mode=9;case 9:if(512&v.flags){for(;P<16;){if(L===0)break e;L--,O+=B[q++]<<P,P+=8}if(O!==(65535&v.check)){E.msg="header crc mismatch",v.mode=30;break}P=O=0}v.head&&(v.head.hcrc=v.flags>>9&1,v.head.done=!0),E.adler=v.check=0,v.mode=12;break;case 10:for(;P<32;){if(L===0)break e;L--,O+=B[q++]<<P,P+=8}E.adler=v.check=u(O),P=O=0,v.mode=11;case 11:if(v.havedict===0)return E.next_out=$,E.avail_out=K,E.next_in=q,E.avail_in=L,v.hold=O,v.bits=P,2;E.adler=v.check=1,v.mode=12;case 12:if(N===5||N===6)break e;case 13:if(v.last){O>>>=7&P,P-=7&P,v.mode=27;break}for(;P<3;){if(L===0)break e;L--,O+=B[q++]<<P,P+=8}switch(v.last=1&O,P-=1,3&(O>>>=1)){case 0:v.mode=14;break;case 1:if(I(v),v.mode=20,N!==6)break;O>>>=2,P-=2;break e;case 2:v.mode=17;break;case 3:E.msg="invalid block type",v.mode=30}O>>>=2,P-=2;break;case 14:for(O>>>=7&P,P-=7&P;P<32;){if(L===0)break e;L--,O+=B[q++]<<P,P+=8}if((65535&O)!=(O>>>16^65535)){E.msg="invalid stored block lengths",v.mode=30;break}if(v.length=65535&O,P=O=0,v.mode=15,N===6)break e;case 15:v.mode=16;case 16:if(G=v.length){if(L<G&&(G=L),K<G&&(G=K),G===0)break e;o.arraySet(oe,B,q,G,$),L-=G,q+=G,K-=G,$+=G,v.length-=G;break}v.mode=12;break;case 17:for(;P<14;){if(L===0)break e;L--,O+=B[q++]<<P,P+=8}if(v.nlen=257+(31&O),O>>>=5,P-=5,v.ndist=1+(31&O),O>>>=5,P-=5,v.ncode=4+(15&O),O>>>=4,P-=4,286<v.nlen||30<v.ndist){E.msg="too many length or distance symbols",v.mode=30;break}v.have=0,v.mode=18;case 18:for(;v.have<v.ncode;){for(;P<3;){if(L===0)break e;L--,O+=B[q++]<<P,P+=8}v.lens[U[v.have++]]=7&O,O>>>=3,P-=3}for(;v.have<19;)v.lens[U[v.have++]]=0;if(v.lencode=v.lendyn,v.lenbits=7,T={bits:v.lenbits},M=f(0,v.lens,0,19,v.lencode,0,v.work,T),v.lenbits=T.bits,M){E.msg="invalid code lengths set",v.mode=30;break}v.have=0,v.mode=19;case 19:for(;v.have<v.nlen+v.ndist;){for(;de=(x=v.lencode[O&(1<<v.lenbits)-1])>>>16&255,Fe=65535&x,!((se=x>>>24)<=P);){if(L===0)break e;L--,O+=B[q++]<<P,P+=8}if(Fe<16)O>>>=se,P-=se,v.lens[v.have++]=Fe;else{if(Fe===16){for(_=se+2;P<_;){if(L===0)break e;L--,O+=B[q++]<<P,P+=8}if(O>>>=se,P-=se,v.have===0){E.msg="invalid bit length repeat",v.mode=30;break}c=v.lens[v.have-1],G=3+(3&O),O>>>=2,P-=2}else if(Fe===17){for(_=se+3;P<_;){if(L===0)break e;L--,O+=B[q++]<<P,P+=8}P-=se,c=0,G=3+(7&(O>>>=se)),O>>>=3,P-=3}else{for(_=se+7;P<_;){if(L===0)break e;L--,O+=B[q++]<<P,P+=8}P-=se,c=0,G=11+(127&(O>>>=se)),O>>>=7,P-=7}if(v.have+G>v.nlen+v.ndist){E.msg="invalid bit length repeat",v.mode=30;break}for(;G--;)v.lens[v.have++]=c}}if(v.mode===30)break;if(v.lens[256]===0){E.msg="invalid code -- missing end-of-block",v.mode=30;break}if(v.lenbits=9,T={bits:v.lenbits},M=f(w,v.lens,0,v.nlen,v.lencode,0,v.work,T),v.lenbits=T.bits,M){E.msg="invalid literal/lengths set",v.mode=30;break}if(v.distbits=6,v.distcode=v.distdyn,T={bits:v.distbits},M=f(h,v.lens,v.nlen,v.ndist,v.distcode,0,v.work,T),v.distbits=T.bits,M){E.msg="invalid distances set",v.mode=30;break}if(v.mode=20,N===6)break e;case 20:v.mode=21;case 21:if(6<=L&&258<=K){E.next_out=$,E.avail_out=K,E.next_in=q,E.avail_in=L,v.hold=O,v.bits=P,s(E,Q),$=E.next_out,oe=E.output,K=E.avail_out,q=E.next_in,B=E.input,L=E.avail_in,O=v.hold,P=v.bits,v.mode===12&&(v.back=-1);break}for(v.back=0;de=(x=v.lencode[O&(1<<v.lenbits)-1])>>>16&255,Fe=65535&x,!((se=x>>>24)<=P);){if(L===0)break e;L--,O+=B[q++]<<P,P+=8}if(de&&!(240&de)){for(Ee=se,_n=de,vn=Fe;de=(x=v.lencode[vn+((O&(1<<Ee+_n)-1)>>Ee)])>>>16&255,Fe=65535&x,!(Ee+(se=x>>>24)<=P);){if(L===0)break e;L--,O+=B[q++]<<P,P+=8}O>>>=Ee,P-=Ee,v.back+=Ee}if(O>>>=se,P-=se,v.back+=se,v.length=Fe,de===0){v.mode=26;break}if(32&de){v.back=-1,v.mode=12;break}if(64&de){E.msg="invalid literal/length code",v.mode=30;break}v.extra=15&de,v.mode=22;case 22:if(v.extra){for(_=v.extra;P<_;){if(L===0)break e;L--,O+=B[q++]<<P,P+=8}v.length+=O&(1<<v.extra)-1,O>>>=v.extra,P-=v.extra,v.back+=v.extra}v.was=v.length,v.mode=23;case 23:for(;de=(x=v.distcode[O&(1<<v.distbits)-1])>>>16&255,Fe=65535&x,!((se=x>>>24)<=P);){if(L===0)break e;L--,O+=B[q++]<<P,P+=8}if(!(240&de)){for(Ee=se,_n=de,vn=Fe;de=(x=v.distcode[vn+((O&(1<<Ee+_n)-1)>>Ee)])>>>16&255,Fe=65535&x,!(Ee+(se=x>>>24)<=P);){if(L===0)break e;L--,O+=B[q++]<<P,P+=8}O>>>=Ee,P-=Ee,v.back+=Ee}if(O>>>=se,P-=se,v.back+=se,64&de){E.msg="invalid distance code",v.mode=30;break}v.offset=Fe,v.extra=15&de,v.mode=24;case 24:if(v.extra){for(_=v.extra;P<_;){if(L===0)break e;L--,O+=B[q++]<<P,P+=8}v.offset+=O&(1<<v.extra)-1,O>>>=v.extra,P-=v.extra,v.back+=v.extra}if(v.offset>v.dmax){E.msg="invalid distance too far back",v.mode=30;break}v.mode=25;case 25:if(K===0)break e;if(G=Q-K,v.offset>G){if((G=v.offset-G)>v.whave&&v.sane){E.msg="invalid distance too far back",v.mode=30;break}fe=G>v.wnext?(G-=v.wnext,v.wsize-G):v.wnext-G,G>v.length&&(G=v.length),ze=v.window}else ze=oe,fe=$-v.offset,G=v.length;for(K<G&&(G=K),K-=G,v.length-=G;oe[$++]=ze[fe++],--G;);v.length===0&&(v.mode=21);break;case 26:if(K===0)break e;oe[$++]=v.length,K--,v.mode=21;break;case 27:if(v.wrap){for(;P<32;){if(L===0)break e;L--,O|=B[q++]<<P,P+=8}if(Q-=K,E.total_out+=Q,v.total+=Q,Q&&(E.adler=v.check=v.flags?l(v.check,oe,Q,$-Q):a(v.check,oe,Q,$-Q)),Q=K,(v.flags?O:u(O))!==v.check){E.msg="incorrect data check",v.mode=30;break}P=O=0}v.mode=28;case 28:if(v.wrap&&v.flags){for(;P<32;){if(L===0)break e;L--,O+=B[q++]<<P,P+=8}if(O!==(4294967295&v.total)){E.msg="incorrect length check",v.mode=30;break}P=O=0}v.mode=29;case 29:M=1;break e;case 30:M=-3;break e;case 31:return-4;case 32:default:return m}return E.next_out=$,E.avail_out=K,E.next_in=q,E.avail_in=L,v.hold=O,v.bits=P,(v.wsize||Q!==E.avail_out&&v.mode<30&&(v.mode<27||N!==4))&&H(E,E.output,E.next_out,Q-E.avail_out)?(v.mode=31,-4):(te-=E.avail_in,Q-=E.avail_out,E.total_in+=te,E.total_out+=Q,v.total+=Q,v.wrap&&Q&&(E.adler=v.check=v.flags?l(v.check,oe,Q,E.next_out-Q):a(v.check,oe,Q,E.next_out-Q)),E.data_type=v.bits+(v.last?64:0)+(v.mode===12?128:0)+(v.mode===20||v.mode===15?256:0),(te==0&&Q===0||N===4)&&M===g&&(M=-5),M)},i.inflateEnd=function(E){if(!E||!E.state)return m;var N=E.state;return N.window&&(N.window=null),E.state=null,g},i.inflateGetHeader=function(E,N){var v;return E&&E.state&&2&(v=E.state).wrap?((v.head=N).done=!1,g):m},i.inflateSetDictionary=function(E,N){var v,B=N.length;return E&&E.state?(v=E.state).wrap!==0&&v.mode!==11?m:v.mode===11&&a(1,N,B,0)!==v.check?-3:H(E,N,B,B)?(v.mode=31,-4):(v.havedict=1,g):m},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,r,i){var o=t("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],l=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],s=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],f=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(w,h,g,m,k,p,b,u){var d,y,S,R,A,C,D,z,I,H=u.bits,E=0,N=0,v=0,B=0,oe=0,q=0,$=0,L=0,K=0,O=0,P=null,te=0,Q=new o.Buf16(16),G=new o.Buf16(16),fe=null,ze=0;for(E=0;E<=15;E++)Q[E]=0;for(N=0;N<m;N++)Q[h[g+N]]++;for(oe=H,B=15;1<=B&&Q[B]===0;B--);if(B<oe&&(oe=B),B===0)return k[p++]=20971520,k[p++]=20971520,u.bits=1,0;for(v=1;v<B&&Q[v]===0;v++);for(oe<v&&(oe=v),E=L=1;E<=15;E++)if(L<<=1,(L-=Q[E])<0)return-1;if(0<L&&(w===0||B!==1))return-1;for(G[1]=0,E=1;E<15;E++)G[E+1]=G[E]+Q[E];for(N=0;N<m;N++)h[g+N]!==0&&(b[G[h[g+N]]++]=N);if(C=w===0?(P=fe=b,19):w===1?(P=a,te-=257,fe=l,ze-=257,256):(P=s,fe=f,-1),E=v,A=p,$=N=O=0,S=-1,R=(K=1<<(q=oe))-1,w===1&&852<K||w===2&&592<K)return 1;for(;;){for(D=E-$,I=b[N]<C?(z=0,b[N]):b[N]>C?(z=fe[ze+b[N]],P[te+b[N]]):(z=96,0),d=1<<E-$,v=y=1<<q;k[A+(O>>$)+(y-=d)]=D<<24|z<<16|I|0,y!==0;);for(d=1<<E-1;O&d;)d>>=1;if(d!==0?(O&=d-1,O+=d):O=0,N++,--Q[E]==0){if(E===B)break;E=h[g+b[N]]}if(oe<E&&(O&R)!==S){for($===0&&($=oe),A+=v,L=1<<(q=E-$);q+$<B&&!((L-=Q[q+$])<=0);)q++,L<<=1;if(K+=1<<q,w===1&&852<K||w===2&&592<K)return 1;k[S=O&R]=oe<<24|q<<16|A-p|0}}return O!==0&&(k[A+O]=E-$<<24|64<<16|0),u.bits=oe,0}},{"../utils/common":41}],51:[function(t,r,i){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,r,i){var o=t("../utils/common"),a=0,l=1;function s(x){for(var j=x.length;0<=--j;)x[j]=0}var f=0,w=29,h=256,g=h+1+w,m=30,k=19,p=2*g+1,b=15,u=16,d=7,y=256,S=16,R=17,A=18,C=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],D=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],z=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],I=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],H=new Array(2*(g+2));s(H);var E=new Array(2*m);s(E);var N=new Array(512);s(N);var v=new Array(256);s(v);var B=new Array(w);s(B);var oe,q,$,L=new Array(m);function K(x,j,U,W,F){this.static_tree=x,this.extra_bits=j,this.extra_base=U,this.elems=W,this.max_length=F,this.has_stree=x&&x.length}function O(x,j){this.dyn_tree=x,this.max_code=0,this.stat_desc=j}function P(x){return x<256?N[x]:N[256+(x>>>7)]}function te(x,j){x.pending_buf[x.pending++]=255&j,x.pending_buf[x.pending++]=j>>>8&255}function Q(x,j,U){x.bi_valid>u-U?(x.bi_buf|=j<<x.bi_valid&65535,te(x,x.bi_buf),x.bi_buf=j>>u-x.bi_valid,x.bi_valid+=U-u):(x.bi_buf|=j<<x.bi_valid&65535,x.bi_valid+=U)}function G(x,j,U){Q(x,U[2*j],U[2*j+1])}function fe(x,j){for(var U=0;U|=1&x,x>>>=1,U<<=1,0<--j;);return U>>>1}function ze(x,j,U){var W,F,Z=new Array(b+1),X=0;for(W=1;W<=b;W++)Z[W]=X=X+U[W-1]<<1;for(F=0;F<=j;F++){var J=x[2*F+1];J!==0&&(x[2*F]=fe(Z[J]++,J))}}function se(x){var j;for(j=0;j<g;j++)x.dyn_ltree[2*j]=0;for(j=0;j<m;j++)x.dyn_dtree[2*j]=0;for(j=0;j<k;j++)x.bl_tree[2*j]=0;x.dyn_ltree[2*y]=1,x.opt_len=x.static_len=0,x.last_lit=x.matches=0}function de(x){8<x.bi_valid?te(x,x.bi_buf):0<x.bi_valid&&(x.pending_buf[x.pending++]=x.bi_buf),x.bi_buf=0,x.bi_valid=0}function Fe(x,j,U,W){var F=2*j,Z=2*U;return x[F]<x[Z]||x[F]===x[Z]&&W[j]<=W[U]}function Ee(x,j,U){for(var W=x.heap[U],F=U<<1;F<=x.heap_len&&(F<x.heap_len&&Fe(j,x.heap[F+1],x.heap[F],x.depth)&&F++,!Fe(j,W,x.heap[F],x.depth));)x.heap[U]=x.heap[F],U=F,F<<=1;x.heap[U]=W}function _n(x,j,U){var W,F,Z,X,J=0;if(x.last_lit!==0)for(;W=x.pending_buf[x.d_buf+2*J]<<8|x.pending_buf[x.d_buf+2*J+1],F=x.pending_buf[x.l_buf+J],J++,W===0?G(x,F,j):(G(x,(Z=v[F])+h+1,j),(X=C[Z])!==0&&Q(x,F-=B[Z],X),G(x,Z=P(--W),U),(X=D[Z])!==0&&Q(x,W-=L[Z],X)),J<x.last_lit;);G(x,y,j)}function vn(x,j){var U,W,F,Z=j.dyn_tree,X=j.stat_desc.static_tree,J=j.stat_desc.has_stree,ie=j.stat_desc.elems,he=-1;for(x.heap_len=0,x.heap_max=p,U=0;U<ie;U++)Z[2*U]!==0?(x.heap[++x.heap_len]=he=U,x.depth[U]=0):Z[2*U+1]=0;for(;x.heap_len<2;)Z[2*(F=x.heap[++x.heap_len]=he<2?++he:0)]=1,x.depth[F]=0,x.opt_len--,J&&(x.static_len-=X[2*F+1]);for(j.max_code=he,U=x.heap_len>>1;1<=U;U--)Ee(x,Z,U);for(F=ie;U=x.heap[1],x.heap[1]=x.heap[x.heap_len--],Ee(x,Z,1),W=x.heap[1],x.heap[--x.heap_max]=U,x.heap[--x.heap_max]=W,Z[2*F]=Z[2*U]+Z[2*W],x.depth[F]=(x.depth[U]>=x.depth[W]?x.depth[U]:x.depth[W])+1,Z[2*U+1]=Z[2*W+1]=F,x.heap[1]=F++,Ee(x,Z,1),2<=x.heap_len;);x.heap[--x.heap_max]=x.heap[1],function(ue,sn){var sr,Rn,ur,Ce,hi,Ko,Dn=sn.dyn_tree,Ts=sn.max_code,lp=sn.stat_desc.static_tree,sp=sn.stat_desc.has_stree,up=sn.stat_desc.extra_bits,Ls=sn.stat_desc.extra_base,cr=sn.stat_desc.max_length,vi=0;for(Ce=0;Ce<=b;Ce++)ue.bl_count[Ce]=0;for(Dn[2*ue.heap[ue.heap_max]+1]=0,sr=ue.heap_max+1;sr<p;sr++)cr<(Ce=Dn[2*Dn[2*(Rn=ue.heap[sr])+1]+1]+1)&&(Ce=cr,vi++),Dn[2*Rn+1]=Ce,Ts<Rn||(ue.bl_count[Ce]++,hi=0,Ls<=Rn&&(hi=up[Rn-Ls]),Ko=Dn[2*Rn],ue.opt_len+=Ko*(Ce+hi),sp&&(ue.static_len+=Ko*(lp[2*Rn+1]+hi)));if(vi!==0){do{for(Ce=cr-1;ue.bl_count[Ce]===0;)Ce--;ue.bl_count[Ce]--,ue.bl_count[Ce+1]+=2,ue.bl_count[cr]--,vi-=2}while(0<vi);for(Ce=cr;Ce!==0;Ce--)for(Rn=ue.bl_count[Ce];Rn!==0;)Ts<(ur=ue.heap[--sr])||(Dn[2*ur+1]!==Ce&&(ue.opt_len+=(Ce-Dn[2*ur+1])*Dn[2*ur],Dn[2*ur+1]=Ce),Rn--)}}(x,j),ze(Z,he,x.bl_count)}function c(x,j,U){var W,F,Z=-1,X=j[1],J=0,ie=7,he=4;for(X===0&&(ie=138,he=3),j[2*(U+1)+1]=65535,W=0;W<=U;W++)F=X,X=j[2*(W+1)+1],++J<ie&&F===X||(J<he?x.bl_tree[2*F]+=J:F!==0?(F!==Z&&x.bl_tree[2*F]++,x.bl_tree[2*S]++):J<=10?x.bl_tree[2*R]++:x.bl_tree[2*A]++,Z=F,he=(J=0)===X?(ie=138,3):F===X?(ie=6,3):(ie=7,4))}function M(x,j,U){var W,F,Z=-1,X=j[1],J=0,ie=7,he=4;for(X===0&&(ie=138,he=3),W=0;W<=U;W++)if(F=X,X=j[2*(W+1)+1],!(++J<ie&&F===X)){if(J<he)for(;G(x,F,x.bl_tree),--J!=0;);else F!==0?(F!==Z&&(G(x,F,x.bl_tree),J--),G(x,S,x.bl_tree),Q(x,J-3,2)):J<=10?(G(x,R,x.bl_tree),Q(x,J-3,3)):(G(x,A,x.bl_tree),Q(x,J-11,7));Z=F,he=(J=0)===X?(ie=138,3):F===X?(ie=6,3):(ie=7,4)}}s(L);var T=!1;function _(x,j,U,W){Q(x,(f<<1)+(W?1:0),3),function(F,Z,X,J){de(F),J&&(te(F,X),te(F,~X)),o.arraySet(F.pending_buf,F.window,Z,X,F.pending),F.pending+=X}(x,j,U,!0)}i._tr_init=function(x){T||(function(){var j,U,W,F,Z,X=new Array(b+1);for(F=W=0;F<w-1;F++)for(B[F]=W,j=0;j<1<<C[F];j++)v[W++]=F;for(v[W-1]=F,F=Z=0;F<16;F++)for(L[F]=Z,j=0;j<1<<D[F];j++)N[Z++]=F;for(Z>>=7;F<m;F++)for(L[F]=Z<<7,j=0;j<1<<D[F]-7;j++)N[256+Z++]=F;for(U=0;U<=b;U++)X[U]=0;for(j=0;j<=143;)H[2*j+1]=8,j++,X[8]++;for(;j<=255;)H[2*j+1]=9,j++,X[9]++;for(;j<=279;)H[2*j+1]=7,j++,X[7]++;for(;j<=287;)H[2*j+1]=8,j++,X[8]++;for(ze(H,g+1,X),j=0;j<m;j++)E[2*j+1]=5,E[2*j]=fe(j,5);oe=new K(H,C,h+1,g,b),q=new K(E,D,0,m,b),$=new K(new Array(0),z,0,k,d)}(),T=!0),x.l_desc=new O(x.dyn_ltree,oe),x.d_desc=new O(x.dyn_dtree,q),x.bl_desc=new O(x.bl_tree,$),x.bi_buf=0,x.bi_valid=0,se(x)},i._tr_stored_block=_,i._tr_flush_block=function(x,j,U,W){var F,Z,X=0;0<x.level?(x.strm.data_type===2&&(x.strm.data_type=function(J){var ie,he=4093624447;for(ie=0;ie<=31;ie++,he>>>=1)if(1&he&&J.dyn_ltree[2*ie]!==0)return a;if(J.dyn_ltree[18]!==0||J.dyn_ltree[20]!==0||J.dyn_ltree[26]!==0)return l;for(ie=32;ie<h;ie++)if(J.dyn_ltree[2*ie]!==0)return l;return a}(x)),vn(x,x.l_desc),vn(x,x.d_desc),X=function(J){var ie;for(c(J,J.dyn_ltree,J.l_desc.max_code),c(J,J.dyn_dtree,J.d_desc.max_code),vn(J,J.bl_desc),ie=k-1;3<=ie&&J.bl_tree[2*I[ie]+1]===0;ie--);return J.opt_len+=3*(ie+1)+5+5+4,ie}(x),F=x.opt_len+3+7>>>3,(Z=x.static_len+3+7>>>3)<=F&&(F=Z)):F=Z=U+5,U+4<=F&&j!==-1?_(x,j,U,W):x.strategy===4||Z===F?(Q(x,2+(W?1:0),3),_n(x,H,E)):(Q(x,4+(W?1:0),3),function(J,ie,he,ue){var sn;for(Q(J,ie-257,5),Q(J,he-1,5),Q(J,ue-4,4),sn=0;sn<ue;sn++)Q(J,J.bl_tree[2*I[sn]+1],3);M(J,J.dyn_ltree,ie-1),M(J,J.dyn_dtree,he-1)}(x,x.l_desc.max_code+1,x.d_desc.max_code+1,X+1),_n(x,x.dyn_ltree,x.dyn_dtree)),se(x),W&&de(x)},i._tr_tally=function(x,j,U){return x.pending_buf[x.d_buf+2*x.last_lit]=j>>>8&255,x.pending_buf[x.d_buf+2*x.last_lit+1]=255&j,x.pending_buf[x.l_buf+x.last_lit]=255&U,x.last_lit++,j===0?x.dyn_ltree[2*U]++:(x.matches++,j--,x.dyn_ltree[2*(v[U]+h+1)]++,x.dyn_dtree[2*P(j)]++),x.last_lit===x.lit_bufsize-1},i._tr_align=function(x){Q(x,2,3),G(x,y,H),function(j){j.bi_valid===16?(te(j,j.bi_buf),j.bi_buf=0,j.bi_valid=0):8<=j.bi_valid&&(j.pending_buf[j.pending++]=255&j.bi_buf,j.bi_buf>>=8,j.bi_valid-=8)}(x)}},{"../utils/common":41}],53:[function(t,r,i){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,r,i){(function(o){(function(a,l){if(!a.setImmediate){var s,f,w,h,g=1,m={},k=!1,p=a.document,b=Object.getPrototypeOf&&Object.getPrototypeOf(a);b=b&&b.setTimeout?b:a,s={}.toString.call(a.process)==="[object process]"?function(S){process.nextTick(function(){d(S)})}:function(){if(a.postMessage&&!a.importScripts){var S=!0,R=a.onmessage;return a.onmessage=function(){S=!1},a.postMessage("","*"),a.onmessage=R,S}}()?(h="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",y,!1):a.attachEvent("onmessage",y),function(S){a.postMessage(h+S,"*")}):a.MessageChannel?((w=new MessageChannel).port1.onmessage=function(S){d(S.data)},function(S){w.port2.postMessage(S)}):p&&"onreadystatechange"in p.createElement("script")?(f=p.documentElement,function(S){var R=p.createElement("script");R.onreadystatechange=function(){d(S),R.onreadystatechange=null,f.removeChild(R),R=null},f.appendChild(R)}):function(S){setTimeout(d,0,S)},b.setImmediate=function(S){typeof S!="function"&&(S=new Function(""+S));for(var R=new Array(arguments.length-1),A=0;A<R.length;A++)R[A]=arguments[A+1];var C={callback:S,args:R};return m[g]=C,s(g),g++},b.clearImmediate=u}function u(S){delete m[S]}function d(S){if(k)setTimeout(d,0,S);else{var R=m[S];if(R){k=!0;try{(function(A){var C=A.callback,D=A.args;switch(D.length){case 0:C();break;case 1:C(D[0]);break;case 2:C(D[0],D[1]);break;case 3:C(D[0],D[1],D[2]);break;default:C.apply(l,D)}})(R)}finally{u(S),k=!1}}}}function y(S){S.source===a&&typeof S.data=="string"&&S.data.indexOf(h)===0&&d(+S.data.slice(h.length))}})(typeof self>"u"?o===void 0?this:o:self)}).call(this,typeof wi<"u"?wi:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(np);var _g=np.exports;const Rg=mc(_g),Er="https://ruffle.rs",zg=/^\s*(\d+(\.\d+)?(%)?)/;let Ni=!1;var pe;(function(e){e[e.Unknown=0]="Unknown",e[e.CSPConflict=1]="CSPConflict",e[e.FileProtocol=2]="FileProtocol",e[e.InvalidWasm=3]="InvalidWasm",e[e.JavascriptConfiguration=4]="JavascriptConfiguration",e[e.JavascriptConflict=5]="JavascriptConflict",e[e.WasmCors=6]="WasmCors",e[e.WasmDownload=7]="WasmDownload",e[e.WasmMimeType=8]="WasmMimeType",e[e.WasmNotFound=9]="WasmNotFound",e[e.WasmDisabledMicrosoftEdge=10]="WasmDisabledMicrosoftEdge",e[e.SwfFetchError=11]="SwfFetchError",e[e.SwfCors=12]="SwfCors"})(pe||(pe={}));function _a(e){if(e==null)return{};e instanceof URLSearchParams||(e=new URLSearchParams(e));const n={};for(const[t,r]of e)n[t]=r.toString();return n}class cc{constructor(n,t){this.x=n,this.y=t}distanceTo(n){const t=n.x-this.x,r=n.y-this.y;return Math.sqrt(t*t+r*r)}}class ye{constructor(n="#",t=ae("view-error-details")){this.url=n,this.label=t}}class jn extends HTMLElement{get readyState(){return this._readyState}get metadata(){return this._metadata}constructor(){super(),this.contextMenuForceDisabled=!1,this.isTouch=!1,this.contextMenuSupported=!1,this.panicked=!1,this.rendererDebugInfo="",this.longPressTimer=null,this.pointerDownPosition=null,this.pointerMoveMaxDistance=0,this.config={},this.shadow=this.attachShadow({mode:"open"}),this.shadow.appendChild(Pn.content.cloneNode(!0)),this.dynamicStyles=this.shadow.getElementById("dynamic-styles"),this.staticStyles=this.shadow.getElementById("static-styles"),this.container=this.shadow.getElementById("container"),this.playButton=this.shadow.getElementById("play-button"),this.playButton.addEventListener("click",()=>this.play()),this.unmuteOverlay=this.shadow.getElementById("unmute-overlay"),this.splashScreen=this.shadow.getElementById("splash-screen"),this.virtualKeyboard=this.shadow.getElementById("virtual-keyboard"),this.virtualKeyboard.addEventListener("input",this.virtualKeyboardInput.bind(this)),this.saveManager=this.shadow.getElementById("save-manager"),this.videoModal=this.shadow.getElementById("video-modal"),this.hardwareAccelerationModal=this.shadow.getElementById("hardware-acceleration-modal"),this.volumeControls=this.shadow.getElementById("volume-controls-modal"),this.addModalJavaScript(this.saveManager),this.addModalJavaScript(this.volumeControls),this.addModalJavaScript(this.videoModal),this.addModalJavaScript(this.hardwareAccelerationModal),this.volumeSettings=new Cg(!1,100),this.addVolumeControlsJavaScript(this.volumeControls);const n=this.saveManager.querySelector("#backup-saves");n&&(n.addEventListener("click",this.backupSaves.bind(this)),n.innerText=ae("save-backup-all"));const t=this.unmuteOverlay.querySelector("#unmute-overlay-svg");if(t){const r=t.querySelector("#unmute-text");r.textContent=ae("click-to-unmute")}this.contextMenuOverlay=this.shadow.getElementById("context-menu-overlay"),this.contextMenuElement=this.shadow.getElementById("context-menu"),document.documentElement.addEventListener("pointerdown",this.checkIfTouch.bind(this)),this.addEventListener("contextmenu",this.showContextMenu.bind(this)),this.container.addEventListener("pointerdown",this.pointerDown.bind(this)),this.container.addEventListener("pointermove",this.checkLongPressMovement.bind(this)),this.container.addEventListener("pointerup",this.checkLongPress.bind(this)),this.container.addEventListener("pointercancel",this.clearLongPressTimer.bind(this)),this.addEventListener("fullscreenchange",this.fullScreenChange.bind(this)),this.addEventListener("webkitfullscreenchange",this.fullScreenChange.bind(this)),this.instance=null,this.onFSCommand=null,this._readyState=Br.HaveNothing,this._metadata=null,this.lastActivePlayingState=!1,this.setupPauseOnTabHidden()}addModalJavaScript(n){const t=n.querySelector("#video-holder");this.container.addEventListener("click",()=>{n.classList.add("hidden"),t&&(t.textContent="")});const r=n.querySelector(".modal-area");r&&r.addEventListener("click",o=>o.stopPropagation());const i=n.querySelector(".close-modal");i&&i.addEventListener("click",()=>{n.classList.add("hidden"),t&&(t.textContent="")})}addVolumeControlsJavaScript(n){const t=n.querySelector("#mute-checkbox"),r=n.querySelector("#volume-slider"),i=n.querySelector("#volume-slider-text"),o=n.querySelector("#volume-controls-heading"),a=n.querySelector("#mute-checkbox-label"),l=n.querySelector("#volume-slider-label");o.textContent=ae("volume-controls"),a.textContent=ae("volume-controls-mute"),l.textContent=ae("volume-controls-volume"),t.checked=this.volumeSettings.isMuted,r.disabled=t.checked,r.valueAsNumber=this.volumeSettings.volume,l.style.color=t.checked?"grey":"black",i.style.color=t.checked?"grey":"black",i.textContent=String(this.volumeSettings.volume),t.addEventListener("change",()=>{var s;r.disabled=t.checked,l.style.color=t.checked?"grey":"black",i.style.color=t.checked?"grey":"black",this.volumeSettings.isMuted=t.checked,(s=this.instance)===null||s===void 0||s.set_volume(this.volumeSettings.get_volume())}),r.addEventListener("input",()=>{var s;i.textContent=r.value,this.volumeSettings.volume=r.valueAsNumber,(s=this.instance)===null||s===void 0||s.set_volume(this.volumeSettings.get_volume())})}setupPauseOnTabHidden(){document.addEventListener("visibilitychange",()=>{this.instance&&(document.hidden&&(this.lastActivePlayingState=this.instance.is_playing(),this.instance.pause()),!document.hidden&&this.lastActivePlayingState===!0&&this.instance.play())},!1)}get height(){return this.getAttribute("height")||""}set height(n){this.setAttribute("height",n)}get width(){return this.getAttribute("width")||""}set width(n){this.setAttribute("width",n)}get type(){return this.getAttribute("type")||""}set type(n){this.setAttribute("type",n)}connectedCallback(){this.updateStyles(),qv(this.staticStyles)}static get observedAttributes(){return["width","height"]}attributeChangedCallback(n,t,r){(n==="width"||n==="height")&&this.updateStyles()}disconnectedCallback(){this.destroy()}updateStyles(){if(this.dynamicStyles.sheet){if(this.dynamicStyles.sheet.cssRules)for(let r=this.dynamicStyles.sheet.cssRules.length-1;r>=0;r--)this.dynamicStyles.sheet.deleteRule(r);const n=this.attributes.getNamedItem("width");if(n!=null){const r=jn.htmlDimensionToCssDimension(n.value);r!==null&&this.dynamicStyles.sheet.insertRule(`:host { width: ${r}; }`)}const t=this.attributes.getNamedItem("height");if(t!=null){const r=jn.htmlDimensionToCssDimension(t.value);r!==null&&this.dynamicStyles.sheet.insertRule(`:host { height: ${r}; }`)}}}isUnusedFallbackObject(){const n=wg("ruffle-object");if(n!==null){let t=this.parentNode;for(;t!==document&&t!==null;){if(t.nodeName===n.name)return!0;t=t.parentNode}}return!1}async ensureFreshInstance(){var n,t,r,i,o,a,l,s,f,w,h;if(this.destroy(),this.loadedConfig&&this.loadedConfig.splashScreen!==!1&&this.loadedConfig.preloader!==!1&&this.showSplashScreen(),this.loadedConfig&&this.loadedConfig.preloader===!1&&console.warn("The configuration option preloader has been replaced with splashScreen. If you own this website, please update the configuration."),this.loadedConfig&&this.loadedConfig.maxExecutionDuration&&typeof this.loadedConfig.maxExecutionDuration!="number"&&console.warn("Configuration: An obsolete format for duration for 'maxExecutionDuration' was used, please use a single number indicating seconds instead. For instance '15' instead of '{secs: 15, nanos: 0}'."),this.loadedConfig&&typeof this.loadedConfig.contextMenu=="boolean"&&console.warn('The configuration option contextMenu no longer takes a boolean. Use "on", "off", or "rightClickOnly".'),this.instance=await tv(this.container,this,this.loadedConfig||{},this.onRuffleDownloadProgress.bind(this)).catch(k=>{if(console.error(`Serious error loading Ruffle: ${k}`),window.location.protocol==="file:")k.ruffleIndexError=pe.FileProtocol;else{k.ruffleIndexError=pe.WasmNotFound;const p=String(k.message).toLowerCase();p.includes("mime")?k.ruffleIndexError=pe.WasmMimeType:p.includes("networkerror")||p.includes("failed to fetch")?k.ruffleIndexError=pe.WasmCors:p.includes("disallowed by embedder")?k.ruffleIndexError=pe.CSPConflict:k.name==="CompileError"?k.ruffleIndexError=pe.InvalidWasm:p.includes("could not download wasm module")&&k.name==="TypeError"?k.ruffleIndexError=pe.WasmDownload:k.name==="TypeError"?k.ruffleIndexError=pe.JavascriptConflict:navigator.userAgent.includes("Edg")&&p.includes("webassembly is not defined")&&(k.ruffleIndexError=pe.WasmDisabledMicrosoftEdge)}throw this.panic(k),k}),!((n=this.loadedConfig)===null||n===void 0)&&n.fontSources)for(const k of this.loadedConfig.fontSources)try{const p=await fetch(k);this.instance.add_font(k,new Uint8Array(await p.arrayBuffer()))}catch(p){console.warn(`Couldn't download font source from ${k}`,p)}!((r=(t=this.loadedConfig)===null||t===void 0?void 0:t.defaultFonts)===null||r===void 0)&&r.sans&&this.instance.set_default_font("sans",(i=this.loadedConfig)===null||i===void 0?void 0:i.defaultFonts.sans),!((a=(o=this.loadedConfig)===null||o===void 0?void 0:o.defaultFonts)===null||a===void 0)&&a.serif&&this.instance.set_default_font("serif",(l=this.loadedConfig)===null||l===void 0?void 0:l.defaultFonts.serif),!((f=(s=this.loadedConfig)===null||s===void 0?void 0:s.defaultFonts)===null||f===void 0)&&f.typewriter&&this.instance.set_default_font("typewriter",(w=this.loadedConfig)===null||w===void 0?void 0:w.defaultFonts.typewriter),this.instance.set_volume(this.volumeSettings.get_volume()),this.rendererDebugInfo=this.instance.renderer_debug_info(),this.rendererDebugInfo.includes("Adapter Device Type: Cpu")&&this.container.addEventListener("mouseover",this.openHardwareAccelerationModal.bind(this),{once:!0});const g=this.instance.renderer_name(),m=this.instance.constructor;if(console.log("%cNew Ruffle instance created (Version: "+un.versionName+" | WebAssembly extensions: "+(m.is_wasm_simd_used()?"ON":"OFF")+" | Used renderer: "+(g??"")+")","background: #37528C; color: #FFAD33"),this.audioState()!=="running"&&(this.container.style.visibility="hidden",await new Promise(k=>{window.setTimeout(()=>{k()},200)}),this.container.style.visibility=""),this.unmuteAudioContext(),navigator.userAgent.toLowerCase().includes("android")&&this.container.addEventListener("click",()=>this.virtualKeyboard.blur()),!this.loadedConfig||this.loadedConfig.autoplay===rr.On||this.loadedConfig.autoplay!==rr.Off&&this.audioState()==="running"){if(this.play(),this.audioState()!=="running"){(!this.loadedConfig||this.loadedConfig.unmuteOverlay!==oi.Hidden)&&(this.unmuteOverlay.style.display="block"),this.container.addEventListener("click",this.unmuteOverlayClicked.bind(this),{once:!0});const k=(h=this.instance)===null||h===void 0?void 0:h.audio_context();k&&(k.onstatechange=()=>{k.state==="running"&&this.unmuteOverlayClicked(),k.onstatechange=null})}}else this.playButton.style.display="block"}onRuffleDownloadProgress(n,t){const r=this.splashScreen.querySelector(".loadbar-inner"),i=this.splashScreen.querySelector(".loadbar");Number.isNaN(t)?i&&(i.style.display="none"):r.style.width=`${100*(n/t)}%`}destroy(){this.instance&&(this.instance.destroy(),this.instance=null,this._metadata=null,this._readyState=Br.HaveNothing,console.log("Ruffle instance destroyed."))}checkOptions(n){if(typeof n=="string")return{url:n};const t=(r,i)=>{if(!r){const o=new TypeError(i);throw o.ruffleIndexError=pe.JavascriptConfiguration,this.panic(o),o}};return t(n!==null&&typeof n=="object","Argument 0 must be a string or object"),t("url"in n||"data"in n,"Argument 0 must contain a `url` or `data` key"),t(!("url"in n)||typeof n.url=="string","`url` must be a string"),n}async reload(){if(this.loadedConfig)await this.load(this.loadedConfig);else throw new Error("Cannot reload if load wasn't first called")}async load(n,t=!1){var r,i;if(n=this.checkOptions(n),!this.isConnected||this.isUnusedFallbackObject()){console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element");return}if(!Os(this))try{this.loadedConfig=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},yg),t&&"url"in n?{allowScriptAccess:tp("samedomain",n.url)}:{}),(i=(r=window.RufflePlayer)===null||r===void 0?void 0:r.config)!==null&&i!==void 0?i:{}),this.config),n),this.loadedConfig.backgroundColor&&this.loadedConfig.wmode!==Ro.Transparent&&(this.container.style.backgroundColor=this.loadedConfig.backgroundColor),await this.ensureFreshInstance(),"url"in n?(console.log(`Loading SWF file ${n.url}`),this.swfUrl=new URL(n.url,document.baseURI),this.instance.stream_from(this.swfUrl.href,_a(n.parameters))):"data"in n&&(console.log("Loading SWF data"),this.instance.load_data(new Uint8Array(n.data),_a(n.parameters),n.swfFileName||"movie.swf"))}catch(o){console.error(`Serious error occurred loading SWF file: ${o}`);const a=new Error(o);throw a.message.includes("Error parsing config")&&(a.ruffleIndexError=pe.JavascriptConfiguration),this.panic(a),a}}play(){this.instance&&(this.instance.play(),this.playButton.style.display="none")}get isPlaying(){return this.instance?this.instance.is_playing():!1}get volume(){return this.instance?this.instance.volume():1}set volume(n){this.instance&&this.instance.set_volume(n)}get fullscreenEnabled(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled)}get isFullscreen(){return(document.fullscreenElement||document.webkitFullscreenElement)===this}setFullscreen(n){this.fullscreenEnabled&&n!==this.isFullscreen&&(n?this.enterFullscreen():this.exitFullscreen())}enterFullscreen(){const n={navigationUI:"hide"};this.requestFullscreen?this.requestFullscreen(n):this.webkitRequestFullscreen?this.webkitRequestFullscreen(n):this.webkitRequestFullScreen&&this.webkitRequestFullScreen(n)}exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}fullScreenChange(){var n;(n=this.instance)===null||n===void 0||n.set_fullscreen(this.isFullscreen)}saveFile(n,t){const r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.style.display="none",i.download=t,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}checkIfTouch(n){this.isTouch=n.pointerType==="touch"||n.pointerType==="pen"}base64ToBlob(n,t){const r=atob(n),i=new ArrayBuffer(r.length),o=new Uint8Array(i);for(let l=0;l<r.length;l++)o[l]=r.charCodeAt(l);return new Blob([i],{type:t})}isB64SOL(n){try{return atob(n).slice(6,10)==="TCSO"}catch{return!1}}confirmReloadSave(n,t,r){if(this.isB64SOL(t)&&localStorage[n]){if(!r&&!confirm(ae("save-delete-prompt")))return;const i=this.swfUrl?this.swfUrl.pathname:"",o=this.swfUrl?this.swfUrl.hostname:document.location.hostname,a=n.split("/").slice(1,-1).join("/");if(i.includes(a)&&n.startsWith(o)){confirm(ae("save-reload-prompt",{action:r?"replace":"delete"}))&&this.loadedConfig&&(this.destroy(),r?localStorage.setItem(n,t):localStorage.removeItem(n),this.reload(),this.populateSaves(),this.saveManager.classList.add("hidden"));return}r?localStorage.setItem(n,t):localStorage.removeItem(n),this.populateSaves(),this.saveManager.classList.add("hidden")}}replaceSOL(n,t){const r=n.target,i=new FileReader;i.addEventListener("load",()=>{if(i.result&&typeof i.result=="string"){const o=new RegExp("data:.*;base64,"),a=i.result.replace(o,"");this.confirmReloadSave(t,a,!0)}}),r&&r.files&&r.files.length>0&&r.files[0]&&i.readAsDataURL(r.files[0])}deleteSave(n){const t=localStorage.getItem(n);t&&this.confirmReloadSave(n,t,!1)}populateSaves(){const n=this.saveManager.querySelector("#local-saves");if(n){try{if(localStorage===null)return}catch{return}n.textContent="",Object.keys(localStorage).forEach(t=>{const r=t.split("/").pop(),i=localStorage.getItem(t);if(r&&i&&this.isB64SOL(i)){const o=document.createElement("TR"),a=document.createElement("TD");a.textContent=r,a.title=t;const l=document.createElement("TD"),s=document.createElement("SPAN");s.textContent=ae("save-download"),s.className="save-option",s.addEventListener("click",()=>{const k=this.base64ToBlob(i,"application/octet-stream");this.saveFile(k,r+".sol")}),l.appendChild(s);const f=document.createElement("TD"),w=document.createElement("INPUT");w.type="file",w.accept=".sol",w.className="replace-save",w.id="replace-save-"+t;const h=document.createElement("LABEL");h.htmlFor="replace-save-"+t,h.textContent=ae("save-replace"),h.className="save-option",w.addEventListener("change",k=>this.replaceSOL(k,t)),f.appendChild(w),f.appendChild(h);const g=document.createElement("TD"),m=document.createElement("SPAN");m.textContent=ae("save-delete"),m.className="save-option",m.addEventListener("click",()=>this.deleteSave(t)),g.appendChild(m),o.appendChild(a),o.appendChild(l),o.appendChild(f),o.appendChild(g),n.appendChild(o)}})}}async backupSaves(){const n=new Rg,t=[];Object.keys(localStorage).forEach(i=>{let o=String(i.split("/").pop());const a=localStorage.getItem(i);if(a&&this.isB64SOL(a)){const l=this.base64ToBlob(a,"application/octet-stream"),s=t.filter(f=>f===o).length;t.push(o),s>0&&(o+=` (${s+1})`),n.file(o+".sol",l)}});const r=await n.generateAsync({type:"blob"});this.saveFile(r,"saves.zip")}openHardwareAccelerationModal(){this.hardwareAccelerationModal.classList.remove("hidden")}openSaveManager(){this.saveManager.classList.remove("hidden")}openVolumeControls(){this.volumeControls.classList.remove("hidden")}async downloadSwf(){try{if(this.swfUrl){console.log("Downloading SWF: "+this.swfUrl);const n=await fetch(this.swfUrl.href);if(!n.ok){console.error("SWF download failed");return}const t=await n.blob();this.saveFile(t,xg(this.swfUrl))}else console.error("SWF download failed")}catch{console.error("SWF download failed")}}virtualKeyboardInput(){const n=this.virtualKeyboard,t=n.value;for(const r of t)for(const i of["keydown","keyup"])this.dispatchEvent(new KeyboardEvent(i,{key:r,bubbles:!0}));n.value=""}openVirtualKeyboard(){navigator.userAgent.toLowerCase().includes("android")?setTimeout(()=>{this.virtualKeyboard.focus({preventScroll:!0})},100):this.virtualKeyboard.focus({preventScroll:!0})}isVirtualKeyboardFocused(){return this.shadow.activeElement===this.virtualKeyboard}contextMenuItems(){const n="✓",t=[],r=()=>{t.length>0&&t[t.length-1]!==null&&t.push(null)};this.instance&&this.isPlaying&&(this.instance.prepare_context_menu().forEach((a,l)=>{a.separatorBefore&&r(),t.push({text:a.caption+(a.checked?` (${n})`:""),onClick:()=>{var s;return(s=this.instance)===null||s===void 0?void 0:s.run_context_menu_callback(l)},enabled:a.enabled})}),r()),this.fullscreenEnabled&&(this.isFullscreen?t.push({text:ae("context-menu-exit-fullscreen"),onClick:()=>{var o;return(o=this.instance)===null||o===void 0?void 0:o.set_fullscreen(!1)}}):t.push({text:ae("context-menu-enter-fullscreen"),onClick:()=>{var o;return(o=this.instance)===null||o===void 0?void 0:o.set_fullscreen(!0)}})),t.push({text:ae("context-menu-volume-controls"),onClick:()=>{this.openVolumeControls()}}),this.instance&&this.swfUrl&&this.loadedConfig&&this.loadedConfig.showSwfDownload===!0&&(r(),t.push({text:ae("context-menu-download-swf"),onClick:this.downloadSwf.bind(this)})),navigator.clipboard&&window.isSecureContext&&t.push({text:ae("context-menu-copy-debug-info"),onClick:()=>navigator.clipboard.writeText(this.getPanicData())}),this.populateSaves();const i=this.saveManager.querySelector("#local-saves");return i&&i.textContent!==""&&t.push({text:ae("context-menu-open-save-manager"),onClick:this.openSaveManager.bind(this)}),r(),t.push({text:ae("context-menu-about-ruffle",{flavor:lt?"extension":"",version:un.versionName}),onClick(){window.open(Er,"_blank")}}),this.isTouch&&(r(),t.push({text:ae("context-menu-hide"),onClick:()=>this.contextMenuForceDisabled=!0})),t}pointerDown(n){this.pointerDownPosition=new cc(n.pageX,n.pageY),this.pointerMoveMaxDistance=0,this.startLongPressTimer()}clearLongPressTimer(){this.longPressTimer&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}startLongPressTimer(){this.clearLongPressTimer(),this.longPressTimer=setTimeout(()=>this.clearLongPressTimer(),800)}checkLongPressMovement(n){if(this.pointerDownPosition!==null){const t=new cc(n.pageX,n.pageY),r=this.pointerDownPosition.distanceTo(t);r>this.pointerMoveMaxDistance&&(this.pointerMoveMaxDistance=r)}}checkLongPress(n){this.longPressTimer?this.clearLongPressTimer():!this.contextMenuSupported&&n.pointerType!=="mouse"&&this.pointerMoveMaxDistance<15&&this.showContextMenu(n)}showContextMenu(n){var t,r,i;const o=Array.from(this.shadow.querySelectorAll(".modal")).some(h=>!h.classList.contains("hidden"));if(this.panicked||o||(n.preventDefault(),n.type==="contextmenu"?(this.contextMenuSupported=!0,document.documentElement.addEventListener("click",this.hideContextMenu.bind(this),{once:!0})):(document.documentElement.addEventListener("pointerup",this.hideContextMenu.bind(this),{once:!0}),n.stopPropagation()),[!1,Ht.Off].includes((r=(t=this.loadedConfig)===null||t===void 0?void 0:t.contextMenu)!==null&&r!==void 0?r:Ht.On)||this.isTouch&&((i=this.loadedConfig)===null||i===void 0?void 0:i.contextMenu)===Ht.RightClickOnly||this.contextMenuForceDisabled))return;for(;this.contextMenuElement.firstChild;)this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);for(const h of this.contextMenuItems())if(h===null){const g=document.createElement("li");g.className="menu-separator";const m=document.createElement("hr");g.appendChild(m),this.contextMenuElement.appendChild(g)}else{const{text:g,onClick:m,enabled:k}=h,p=document.createElement("li");p.className="menu-item",p.textContent=g,this.contextMenuElement.appendChild(p),k!==!1?p.addEventListener(this.contextMenuSupported?"click":"pointerup",m):p.classList.add("disabled")}this.contextMenuElement.style.left="0",this.contextMenuElement.style.top="0",this.contextMenuOverlay.classList.remove("hidden");const a=this.getBoundingClientRect(),l=n.clientX-a.x,s=n.clientY-a.y,f=a.width-this.contextMenuElement.clientWidth-1,w=a.height-this.contextMenuElement.clientHeight-1;this.contextMenuElement.style.left=Math.floor(Math.min(l,f))+"px",this.contextMenuElement.style.top=Math.floor(Math.min(s,w))+"px"}hideContextMenu(){var n;(n=this.instance)===null||n===void 0||n.clear_custom_menu_items(),this.contextMenuOverlay.classList.add("hidden")}pause(){this.instance&&(this.instance.pause(),this.playButton.style.display="block")}audioState(){if(this.instance){const n=this.instance.audio_context();return n&&n.state||"running"}return"suspended"}unmuteOverlayClicked(){if(this.instance){if(this.audioState()!=="running"){const n=this.instance.audio_context();n&&n.resume()}this.unmuteOverlay.style.display="none"}}unmuteAudioContext(){if(!Ni){if(navigator.maxTouchPoints<1){Ni=!0;return}this.container.addEventListener("click",()=>{var n;if(Ni)return;const t=(n=this.instance)===null||n===void 0?void 0:n.audio_context();if(!t)return;const r=new Audio;r.src=(()=>{const i=new ArrayBuffer(10),o=new DataView(i),a=t.sampleRate;return o.setUint32(0,a,!0),o.setUint32(4,a,!0),o.setUint16(8,1,!0),`data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${window.btoa(String.fromCharCode(...new Uint8Array(i))).slice(0,13)}AgAZGF0YQcAAACAgICAgICAAAA=`})(),r.load(),r.play().then(()=>{Ni=!0}).catch(i=>{console.warn(`Failed to play dummy sound: ${i}`)})},{once:!0})}}copyElement(n){if(n){for(const t of n.attributes)if(t.specified){if(t.name==="title"&&t.value==="Adobe Flash Player")continue;try{this.setAttribute(t.name,t.value)}catch{console.warn(`Unable to set attribute ${t.name} on Ruffle instance`)}}for(const t of Array.from(n.children))this.appendChild(t)}}static htmlDimensionToCssDimension(n){if(n){const t=n.match(zg);if(t){let r=t[1];return t[3]||(r+="px"),r}}return null}onCallbackAvailable(n){const t=this.instance;this[n]=(...r)=>t==null?void 0:t.call_exposed_callback(n,r)}set traceObserver(n){var t;(t=this.instance)===null||t===void 0||t.set_trace_observer(n)}getPanicData(){let n=`
# Player Info
`;if(n+=`Allows script access: ${this.loadedConfig?this.loadedConfig.allowScriptAccess:!1}
`,n+=`${this.rendererDebugInfo}
`,n+=this.debugPlayerInfo(),n+=`
# Page Info
`,n+=`Page URL: ${document.location.href}
`,this.swfUrl&&(n+=`SWF URL: ${this.swfUrl}
`),n+=`
# Browser Info
`,n+=`User Agent: ${window.navigator.userAgent}
`,n+=`Platform: ${window.navigator.platform}
`,n+=`Has touch support: ${window.navigator.maxTouchPoints>0}
`,n+=`
# Ruffle Info
`,n+=`Version: ${un.versionNumber}
`,n+=`Name: ${un.versionName}
`,n+=`Channel: ${un.versionChannel}
`,n+=`Built: ${un.buildDate}
`,n+=`Commit: ${un.commitHash}
`,n+=`Is extension: ${lt}
`,n+=`
# Metadata
`,this.metadata)for(const[t,r]of Object.entries(this.metadata))n+=`${t}: ${r}
`;return n}createErrorFooter(n){const t=document.createElement("ul");for(const r of n){const i=document.createElement("li"),o=document.createElement("a");o.href=r.url,o.textContent=r.label,r.url==="#"?o.id="panic-view-details":o.target="_top",i.appendChild(o),t.appendChild(i)}return t}panic(n){var t;if(this.panicked||(this.panicked=!0,this.hideSplashScreen(),n instanceof Error&&(n.name==="AbortError"||n.message.includes("AbortError"))))return;const r=(t=n==null?void 0:n.ruffleIndexError)!==null&&t!==void 0?t:pe.Unknown,i=Object.assign([],{stackIndex:-1,avmStackIndex:-1});if(i.push(`# Error Info
`),n instanceof Error){if(i.push(`Error name: ${n.name}
`),i.push(`Error message: ${n.message}
`),n.stack){const u=i.push(`Error stack:
\`\`\`
${n.stack}
\`\`\`
`)-1;if(n.avmStack){const d=i.push(`AVM2 stack:
\`\`\`
    ${n.avmStack.trim().replace(/\t/g,"    ")}
\`\`\`
`)-1;i.avmStackIndex=d}i.stackIndex=u}}else i.push(`Error: ${n}
`);i.push(this.getPanicData());const o=i.join(""),a=new Date(un.buildDate),l=new Date;l.setMonth(l.getMonth()-6);const s=l>a;let f;if(s)f=new ye(Er+"#downloads",ae("update-ruffle"));else{let u;document.location.protocol.includes("extension")?u=this.swfUrl.href:u=document.location.href,u=u.split(/[?#]/,1)[0];const d=`Error on ${u}`;let y=`https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(d)}&template=error_report.md&labels=error-report&body=`,S=encodeURIComponent(o);i.stackIndex>-1&&String(y+S).length>8195&&(i[i.stackIndex]=null,i.avmStackIndex>-1&&(i[i.avmStackIndex]=null),S=encodeURIComponent(i.join(""))),y+=S,f=new ye(y,ae("report-bug"))}let w,h;switch(r){case pe.FileProtocol:w=Ve("error-file-protocol"),h=this.createErrorFooter([new ye(Er+"/demo",ae("ruffle-demo")),new ye(Er+"#downloads",ae("ruffle-desktop"))]);break;case pe.JavascriptConfiguration:w=Ve("error-javascript-config"),h=this.createErrorFooter([new ye("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#javascript-api",ae("ruffle-wiki")),new ye]);break;case pe.WasmNotFound:w=Ve("error-wasm-not-found"),h=this.createErrorFooter([new ye("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configuration-options",ae("ruffle-wiki")),new ye]);break;case pe.WasmMimeType:w=Ve("error-wasm-mime-type"),h=this.createErrorFooter([new ye("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-webassembly-mime-type",ae("ruffle-wiki")),new ye]);break;case pe.SwfFetchError:w=Ve("error-swf-fetch"),h=this.createErrorFooter([new ye]);break;case pe.SwfCors:w=Ve("error-swf-cors"),h=this.createErrorFooter([new ye("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-cors-header",ae("ruffle-wiki")),new ye]);break;case pe.WasmCors:w=Ve("error-wasm-cors"),h=this.createErrorFooter([new ye("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-cors-header",ae("ruffle-wiki")),new ye]);break;case pe.InvalidWasm:w=Ve("error-wasm-invalid"),h=this.createErrorFooter([new ye("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#addressing-a-compileerror",ae("ruffle-wiki")),new ye]);break;case pe.WasmDownload:w=Ve("error-wasm-download"),h=this.createErrorFooter([new ye]);break;case pe.WasmDisabledMicrosoftEdge:w=Ve("error-wasm-disabled-on-edge"),h=this.createErrorFooter([new ye("https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#edge-webassembly-error",ae("more-info")),new ye]);break;case pe.JavascriptConflict:w=Ve("error-javascript-conflict"),s&&w.appendChild(Ve("error-javascript-conflict-outdated",{buildDate:un.buildDate})),h=this.createErrorFooter([f,new ye]);break;case pe.CSPConflict:w=Ve("error-csp-conflict"),h=this.createErrorFooter([new ye("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-wasm-csp",ae("ruffle-wiki")),new ye]);break;default:w=Ve("error-unknown",{buildDate:un.buildDate,outdated:String(s)}),h=this.createErrorFooter([f,new ye]);break}const g=document.createElement("div");g.id="panic";const m=document.createElement("div");m.id="panic-title",m.textContent=ae("panic-title"),g.appendChild(m);const k=document.createElement("div");k.id="panic-body",k.appendChild(w),g.appendChild(k);const p=document.createElement("div");p.id="panic-footer",p.appendChild(h),g.appendChild(p),this.container.textContent="",this.container.appendChild(g);const b=this.container.querySelector("#panic-view-details");b&&(b.onclick=()=>{const u=this.container.querySelector("#panic-body");u.classList.add("details");const d=document.createElement("textarea");return d.readOnly=!0,d.value=o,u.replaceChildren(d),!1}),this.destroy()}displayRootMovieDownloadFailedMessage(){var n,t,r;const i=(n=this.loadedConfig)===null||n===void 0?void 0:n.openInNewTab;if(i&&window.location.origin!==this.swfUrl.origin){const o=new URL(this.swfUrl);if(!((t=this.loadedConfig)===null||t===void 0)&&t.parameters){const w=_a((r=this.loadedConfig)===null||r===void 0?void 0:r.parameters);Object.entries(w).forEach(([h,g])=>{o.searchParams.set(h,g)})}this.hideSplashScreen();const a=document.createElement("div");a.id="message-overlay";const l=document.createElement("div");l.className="message",l.appendChild(Ve("message-cant-embed"));const s=document.createElement("div"),f=document.createElement("a");f.innerText=ae("open-in-new-tab"),f.onclick=()=>i(o),s.appendChild(f),l.appendChild(s),a.appendChild(l),this.container.prepend(a)}else{const o=new Error("Failed to fetch: "+this.swfUrl);this.swfUrl.protocol.includes("http")?window.location.origin===this.swfUrl.origin||window.location.protocol.includes("extension")?o.ruffleIndexError=pe.SwfFetchError:o.ruffleIndexError=pe.SwfCors:o.ruffleIndexError=pe.FileProtocol,this.panic(o)}}displayMessage(n){const t=document.createElement("div");t.id="message-overlay";const r=document.createElement("div");r.className="message";const i=document.createElement("p");i.textContent=n,r.appendChild(i);const o=document.createElement("div"),a=document.createElement("button");a.id="continue-btn",a.textContent=ae("continue"),o.appendChild(a),r.appendChild(o),t.appendChild(r),this.container.prepend(t),this.container.querySelector("#continue-btn").onclick=()=>{t.parentNode.removeChild(t)}}displayUnsupportedVideo(n){const t=this.videoModal.querySelector("#video-holder");if(t){const r=document.createElement("video");r.addEventListener("contextmenu",i=>i.stopPropagation()),r.src=n,r.autoplay=!0,r.controls=!0,t.textContent="",t.appendChild(r),this.videoModal.classList.remove("hidden")}}debugPlayerInfo(){return""}hideSplashScreen(){this.splashScreen.classList.add("hidden"),this.container.classList.remove("hidden")}showSplashScreen(){this.splashScreen.classList.remove("hidden"),this.container.classList.add("hidden")}setMetadata(n){this._metadata=n,this._readyState=Br.Loaded,this.hideSplashScreen(),this.dispatchEvent(new CustomEvent(jn.LOADED_METADATA)),this.dispatchEvent(new CustomEvent(jn.LOADED_DATA))}}jn.LOADED_METADATA="loadedmetadata";jn.LOADED_DATA="loadeddata";var Br;(function(e){e[e.HaveNothing=0]="HaveNothing",e[e.Loading=1]="Loading",e[e.Loaded=2]="Loaded"})(Br||(Br={}));function Eg(e){switch(e==null?void 0:e.toLowerCase()){case"true":return!0;case"false":return!1;default:return null}}function tp(e,n){switch(e==null?void 0:e.toLowerCase()){case"always":return!0;case"never":return!1;case"samedomain":try{return new URL(window.location.href).origin===new URL(n,window.location.href).origin}catch{return!1}default:return null}}function zl(e,n){const t={url:e},r=n("allowNetworking");r!==null&&(t.allowNetworking=r);const i=tp(n("allowScriptAccess"),e);i!==null&&(t.allowScriptAccess=i);const o=n("bgcolor");o!==null&&(t.backgroundColor=o);const a=n("base");a!==null&&(t.base=a);const l=Eg(n("menu"));l!==null&&(t.menu=l);const s=n("flashvars");s!==null&&(t.parameters=s);const f=n("quality");f!==null&&(t.quality=f);const w=n("salign");w!==null&&(t.salign=w);const h=n("scale");h!==null&&(t.scale=h);const g=n("wmode");return g!==null&&(t.wmode=g),t}function El(e){if(e){let n="",t="";try{const r=new URL(e,Er);n=r.pathname,t=r.hostname}catch{}if(n.startsWith("/v/")&&/^(?:(?:www\.|m\.)?youtube(?:-nocookie)?\.com)|(?:youtu\.be)$/i.test(t))return!0}return!1}function Cl(e,n){var t,r;const i=e.getAttribute(n),o=(r=(t=window.RufflePlayer)===null||t===void 0?void 0:t.config)!==null&&r!==void 0?r:{};if(i)try{const a=new URL(i);a.protocol==="http:"&&window.location.protocol==="https:"&&(!("upgradeToHttps"in o)||o.upgradeToHttps!==!1)&&(a.protocol="https:",e.setAttribute(n,a.toString()))}catch{}}function Os(e){let n=e.parentElement;for(;n!==null;){switch(n.tagName){case"AUDIO":case"VIDEO":return!0}n=n.parentElement}return!1}class Cg{constructor(n,t){this.isMuted=n,this.volume=t}get_volume(){return this.isMuted?0:this.volume/100}}class ir extends jn{constructor(){super()}connectedCallback(){super.connectedCallback();const n=this.attributes.getNamedItem("src");if(n){const t=i=>{var o,a;return(a=(o=this.attributes.getNamedItem(i))===null||o===void 0?void 0:o.value)!==null&&a!==void 0?a:null},r=zl(n.value,t);this.load(r,!0)}}get src(){var n;return(n=this.attributes.getNamedItem("src"))===null||n===void 0?void 0:n.value}set src(n){if(n){const t=document.createAttribute("src");t.value=n,this.attributes.setNamedItem(t)}else this.attributes.removeNamedItem("src")}static get observedAttributes(){return["src","width","height"]}attributeChangedCallback(n,t,r){if(super.attributeChangedCallback(n,t,r),this.isConnected&&n==="src"){const i=this.attributes.getNamedItem("src");if(i){const o=l=>{var s,f;return(f=(s=this.attributes.getNamedItem(l))===null||s===void 0?void 0:s.value)!==null&&f!==void 0?f:null},a=zl(i.value,o);this.load(a,!0)}}}static isInterdictable(n){const t=n.getAttribute("src"),r=n.getAttribute("type");return!t||Os(n)?!1:El(t)?(Cl(n,"src"),!1):ep(t,r)}static fromNativeEmbedElement(n){const t=Ds("ruffle-embed",ir),r=document.createElement(t);return r.copyElement(n),r}}function jg(e,n,t){n=n.toLowerCase();for(const[r,i]of Object.entries(e))if(r.toLowerCase()===n)return i;return t}function dc(e){var n,t;const r={};for(const i of e.children)if(i instanceof HTMLParamElement){const o=(n=i.attributes.getNamedItem("name"))===null||n===void 0?void 0:n.value,a=(t=i.attributes.getNamedItem("value"))===null||t===void 0?void 0:t.value;o&&a&&(r[o]=a)}return r}class Zt extends jn{constructor(){super(),this.params={}}connectedCallback(){var n;super.connectedCallback(),this.params=dc(this);let t=null;if(this.attributes.getNamedItem("data")?t=(n=this.attributes.getNamedItem("data"))===null||n===void 0?void 0:n.value:this.params.movie&&(t=this.params.movie),t){const r=["allowNetworking","base","bgcolor","flashvars"],o=zl(t,a=>jg(this.params,a,r.includes(a)?this.getAttribute(a):null));this.load(o,!0)}}debugPlayerInfo(){var n;let t=`Player type: Object
`,r=null;return this.attributes.getNamedItem("data")?r=(n=this.attributes.getNamedItem("data"))===null||n===void 0?void 0:n.value:this.params.movie&&(r=this.params.movie),t+=`SWF URL: ${r}
`,Object.keys(this.params).forEach(i=>{t+=`Param ${i}: ${this.params[i]}
`}),Object.keys(this.attributes).forEach(i=>{var o;t+=`Attribute ${i}: ${(o=this.attributes.getNamedItem(i))===null||o===void 0?void 0:o.value}
`}),t}get data(){return this.getAttribute("data")}set data(n){if(n){const t=document.createAttribute("data");t.value=n,this.attributes.setNamedItem(t)}else this.attributes.removeNamedItem("data")}static isInterdictable(n){var t,r,i,o;if(Os(n)||n.getElementsByTagName("ruffle-object").length>0||n.getElementsByTagName("ruffle-embed").length>0)return!1;const a=(t=n.attributes.getNamedItem("data"))===null||t===void 0?void 0:t.value.toLowerCase(),l=(i=(r=n.attributes.getNamedItem("type"))===null||r===void 0?void 0:r.value)!==null&&i!==void 0?i:null,s=dc(n);let f;if(a){if(El(a))return Cl(n,"data"),!1;f=a}else if(s&&s.movie){if(El(s.movie)){const h=n.querySelector("param[name='movie']");if(h){Cl(h,"value");const g=h.getAttribute("value");g&&n.setAttribute("data",g)}return!1}f=s.movie}else return!1;const w=(o=n.attributes.getNamedItem("classid"))===null||o===void 0?void 0:o.value.toLowerCase();return w===kg.toLowerCase()?!Array.from(n.getElementsByTagName("object")).some(Zt.isInterdictable)&&!Array.from(n.getElementsByTagName("embed")).some(ir.isInterdictable):w?!1:ep(f,l)}static fromNativeObjectElement(n){const t=Ds("ruffle-object",Zt),r=document.createElement(t);for(const i of Array.from(n.getElementsByTagName("embed")))ir.isInterdictable(i)&&i.remove();for(const i of Array.from(n.getElementsByTagName("object")))Zt.isInterdictable(i)&&i.remove();return r.copyElement(n),r}}class rp{constructor(n){if(this.__mimeTypes=[],this.__namedMimeTypes={},n)for(let t=0;t<n.length;t++)this.install(n[t])}install(n){const t=this.__mimeTypes.length;this.__mimeTypes.push(n),this.__namedMimeTypes[n.type]=n,this[n.type]=n,this[t]=n}item(n){return this.__mimeTypes[n>>>0]}namedItem(n){return this.__namedMimeTypes[n]}get length(){return this.__mimeTypes.length}[Symbol.iterator](){return this.__mimeTypes[Symbol.iterator]()}}class Ag extends rp{constructor(n,t,r){super(),this.name=n,this.description=t,this.filename=r}}class Ig{constructor(n){this.__plugins=[],this.__namedPlugins={};for(let t=0;t<n.length;t++)this.install(n[t])}install(n){const t=this.__plugins.length;this.__plugins.push(n),this.__namedPlugins[n.name]=n,this[n.name]=n,this[t]=n}item(n){return this.__plugins[n>>>0]}namedItem(n){return this.__namedPlugins[n]}refresh(){}[Symbol.iterator](){return this.__plugins[Symbol.iterator]()}get length(){return this.__plugins.length}}const qn=new Ag("Shockwave Flash","Shockwave Flash 32.0 r0","ruffle.js");qn.install({type:Qf,description:"Shockwave Flash",suffixes:"spl",enabledPlugin:qn});qn.install({type:Gf,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:qn});qn.install({type:Yf,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:qn});qn.install({type:Xf,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:qn});function Pg(e){(!("install"in navigator.plugins)||!navigator.plugins.install)&&Object.defineProperty(navigator,"plugins",{value:new Ig(navigator.plugins),writable:!1}),navigator.plugins.install(e),e.length>0&&(!("install"in navigator.mimeTypes)||!navigator.mimeTypes.install)&&Object.defineProperty(navigator,"mimeTypes",{value:new rp(navigator.mimeTypes),writable:!1});const t=navigator.mimeTypes;for(let r=0;r<e.length;r+=1)t.install(e[r])}var Ra,za;const ai=(za=(Ra=window.RufflePlayer)===null||Ra===void 0?void 0:Ra.config)!==null&&za!==void 0?za:{},Dg=jf(ai)+"ruffle.js";let yr,kr;function ip(){var e,n;return"favorFlash"in ai&&ai.favorFlash===!1?!1:((n=(e=navigator.plugins.namedItem("Shockwave Flash"))===null||e===void 0?void 0:e.filename)!==null&&n!==void 0?n:"ruffle.js")!=="ruffle.js"}function op(){try{yr=yr??document.getElementsByTagName("object"),kr=kr??document.getElementsByTagName("embed");for(const e of Array.from(yr))if(Zt.isInterdictable(e)){const n=Zt.fromNativeObjectElement(e);e.replaceWith(n)}for(const e of Array.from(kr))if(ir.isInterdictable(e)){const n=ir.fromNativeEmbedElement(e);e.replaceWith(n)}}catch(e){console.error(`Serious error encountered when polyfilling native Flash elements: ${e}`)}}let br,Sr;function ap(){br=br??document.getElementsByTagName("iframe"),Sr=Sr??document.getElementsByTagName("frame"),[br,Sr].forEach(e=>{for(const n of e){if(n.dataset.rufflePolyfilled!==void 0)continue;n.dataset.rufflePolyfilled="";const t=n.contentWindow,r=`Couldn't load Ruffle into ${n.tagName}[${n.src}]: `;try{t.document.readyState==="complete"&&fc(t,r)}catch(i){lt||console.warn(r+i)}n.addEventListener("load",()=>{fc(t,r)},!1)}})}async function fc(e,n){var t;await new Promise(i=>{window.setTimeout(()=>{i()},100)});let r;try{if(r=e.document,!r)return}catch(i){lt||console.warn(n+i);return}if(!(!lt&&r.documentElement.dataset.ruffleOptout!==void 0)){if(lt)e.RufflePlayer||(e.RufflePlayer={}),e.RufflePlayer.config=Object.assign(Object.assign({},ai),(t=e.RufflePlayer.config)!==null&&t!==void 0?t:{});else if(!e.RufflePlayer){const i=r.createElement("script");i.setAttribute("src",Dg),i.onload=()=>{e.RufflePlayer={},e.RufflePlayer.config=ai},r.head.appendChild(i)}}}function Og(){new MutationObserver(function(n){n.some(r=>Array.from(r.addedNodes).some(i=>["EMBED","OBJECT"].includes(i.nodeName)||i instanceof Element&&i.querySelector("embed, object")!==null))&&(op(),ap())}).observe(document,{childList:!0,subtree:!0})}function Fg(){ip()||Pg(qn)}function Tg(){ip()||(op(),ap(),Og())}class Kt{constructor(n,t,r,i,o){this.major=n,this.minor=t,this.patch=r,this.prIdent=i,this.buildIdent=o}static fromSemver(n){const t=n.split("+"),r=t[0].split("-"),i=r[0].split("."),o=parseInt(i[0],10);let a=0,l=0,s=null,f=null;return i[1]!==void 0&&(a=parseInt(i[1],10)),i[2]!==void 0&&(l=parseInt(i[2],10)),r[1]!==void 0&&(s=r[1].split(".")),t[1]!==void 0&&(f=t[1].split(".")),new Kt(o,a,l,s,f)}isCompatibleWith(n){return this.major!==0&&this.major===n.major||this.major===0&&n.major===0&&this.minor!==0&&this.minor===n.minor||this.major===0&&n.major===0&&this.minor===0&&n.minor===0&&this.patch!==0&&this.patch===n.patch}hasPrecedenceOver(n){if(this.major>n.major)return!0;if(this.major<n.major)return!1;if(this.minor>n.minor)return!0;if(this.minor<n.minor)return!1;if(this.patch>n.patch)return!0;if(this.patch<n.patch)return!1;if(this.prIdent===null&&n.prIdent!==null)return!0;if(this.prIdent!==null&&n.prIdent===null)return!1;if(this.prIdent!==null&&n.prIdent!==null){const t=/^[0-9]*$/;for(let r=0;r<this.prIdent.length&&r<n.prIdent.length;r+=1){const i=t.test(n.prIdent[r]),o=t.test(this.prIdent[r]);if(!o&&i)return!0;if(o&&i){const a=parseInt(this.prIdent[r],10),l=parseInt(n.prIdent[r],10);if(a>l)return!0;if(a<l)return!1}else{if(o&&!i)return!1;if(!o&&!i){if(this.prIdent[r]>n.prIdent[r])return!0;if(this.prIdent[r]<n.prIdent[r])return!1}}}if(this.prIdent.length>n.prIdent.length)return!0;if(this.prIdent.length<n.prIdent.length)return!1}if(this.buildIdent!==null&&n.buildIdent===null)return!0;if(this.buildIdent===null&&n.buildIdent!==null)return!1;if(this.buildIdent!==null&&n.buildIdent!==null){const t=/^[0-9]*$/;for(let r=0;r<this.buildIdent.length&&r<n.buildIdent.length;r+=1){const i=t.test(this.buildIdent[r]),o=t.test(n.buildIdent[r]);if(!i&&o)return!0;if(i&&o){const a=parseInt(this.buildIdent[r],10),l=parseInt(n.buildIdent[r],10);if(a>l)return!0;if(a<l)return!1}else{if(i&&!o)return!1;if(!i&&!o){if(this.buildIdent[r]>n.buildIdent[r])return!0;if(this.buildIdent[r]<n.buildIdent[r])return!1}}}return this.buildIdent.length>n.buildIdent.length}return!1}isEqual(n){return this.major===n.major&&this.minor===n.minor&&this.patch===n.patch}isStableOrCompatiblePrerelease(n){return n.prIdent===null?!0:this.major===n.major&&this.minor===n.minor&&this.patch===n.patch}}class Fs{constructor(n){this.requirements=n}satisfiedBy(n){for(const t of this.requirements){let r=!0;for(const{comparator:i,version:o}of t)r=r&&o.isStableOrCompatiblePrerelease(n),i===""||i==="="?r=r&&o.isEqual(n):i===">"?r=r&&n.hasPrecedenceOver(o):i===">="?r=r&&(n.hasPrecedenceOver(o)||o.isEqual(n)):i==="<"?r=r&&o.hasPrecedenceOver(n):i==="<="?r=r&&(o.hasPrecedenceOver(n)||o.isEqual(n)):i==="^"&&(r=r&&o.isCompatibleWith(n));if(r)return!0}return!1}static fromRequirementString(n){const t=n.split(" ");let r=[];const i=[];for(const o of t)if(o==="||")r.length>0&&(i.push(r),r=[]);else if(o.length>0){const a=/[0-9]/.exec(o);if(a){const l=o.slice(0,a.index).trim(),s=Kt.fromSemver(o.slice(a.index).trim());r.push({comparator:l,version:s})}}return r.length>0&&i.push(r),new Fs(i)}}const pc={version:un.versionNumber+"+"+un.buildDate.substring(0,10),polyfill(){Tg()},pluginPolyfill(){Fg()},createPlayer(){const e=Ds("ruffle-player",jn);return document.createElement(e)}};class zo{constructor(n){var t;this.sources=(n==null?void 0:n.sources)||{},this.config=(n==null?void 0:n.config)||{},this.invoked=(n==null?void 0:n.invoked)||!1,this.newestName=(n==null?void 0:n.newestName)||null,(t=n==null?void 0:n.superseded)===null||t===void 0||t.call(n),document.readyState==="loading"?document.addEventListener("readystatechange",this.init.bind(this)):window.setTimeout(this.init.bind(this),0)}get version(){return"0.1.0"}registerSource(n){this.sources[n]=pc}newestSourceName(){let n=null,t=Kt.fromSemver("0.0.0");for(const r in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,r)){const i=Kt.fromSemver(this.sources[r].version);i.hasPrecedenceOver(t)&&(n=r,t=i)}return n}init(){if(!this.invoked){if(this.invoked=!0,this.newestName=this.newestSourceName(),this.newestName===null)throw new Error("No registered Ruffle source!");("polyfills"in this.config?this.config.polyfills:!0)!==!1&&this.sources[this.newestName].polyfill()}}newest(){const n=this.newestSourceName();return n!==null?this.sources[n]:null}satisfying(n){const t=Fs.fromRequirementString(n);let r=null;for(const i in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,i)){const o=Kt.fromSemver(this.sources[i].version);t.satisfiedBy(o)&&(r=this.sources[i])}return r}localCompatible(){return this.sources.local!==void 0?this.satisfying("^"+this.sources.local.version):this.newest()}local(){return this.sources.local!==void 0?this.satisfying("="+this.sources.local.version):this.newest()}superseded(){this.invoked=!0}static negotiate(n,t){let r;return n instanceof zo?r=n:r=new zo(n),t!==void 0&&(r.registerSource(t),("polyfills"in r.config?r.config.polyfills:!0)!==!1&&pc.pluginPolyfill()),r}}window.RufflePlayer=zo.negotiate(window.RufflePlayer,"local");Ca.createRoot(document.getElementById("root")).render(Y.jsx(Ea.StrictMode,{children:Y.jsx(Wh,{ruffleBaseConfig:{autoplay:rr.On,unmuteOverlay:oi.Hidden,logLevel:_o.Warn,letterbox:xo.On,forceScale:!0,forceAlign:!0},allowSampleSwfs:!0,allowUrlLoading:!1})}));
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./ruffle_web-wasm_extensions-zXIZ1V4R.js","./ruffle-imports-E3y2Mxzj.js","./ruffle_web-uIvX95gM.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
