import{r}from"./react-DLE0P_Nq.js";function z(e,l,t){let[n,d]=r.useState(e||l),s=r.useRef(e!==void 0),a=e!==void 0;r.useEffect(()=>{let o=s.current;o!==a&&console.warn(`WARN: A component changed from ${o?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}.`),s.current=a},[a]);let i=a?e:n,b=r.useCallback((o,...u)=>{let p=(f,...c)=>{t&&(Object.is(i,f)||t(f,...c)),a||(i=f)};typeof o=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),d((c,...y)=>{let m=o(a?i:c,...y);return p(m,...u),a?c:m})):(a||d(o),p(o,...u))},[a,i,t]);return[i,b]}function H(e,l=-1/0,t=1/0){return Math.min(Math.max(e,l),t)}function F(e,l,t){let[n,d]=r.useState(e||l),s=r.useRef(e!==void 0),a=e!==void 0;r.useEffect(()=>{let o=s.current;o!==a&&console.warn(`WARN: A component changed from ${o?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}.`),s.current=a},[a]);let i=a?e:n,b=r.useCallback((o,...u)=>{let p=(f,...c)=>{t&&(Object.is(i,f)||t(f,...c)),a||(i=f)};typeof o=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),d((c,...y)=>{let m=o(a?i:c,...y);return p(m,...u),a?c:m})):(a||d(o),p(o,...u))},[a,i,t]);return[i,b]}const k={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},L={...k,customError:!0,valid:!1},T={isInvalid:!1,validationDetails:k,validationErrors:[]},U=r.createContext({}),A="__formValidationState"+Date.now();function J(e){if(e[A]){let{realtimeValidation:l,displayValidation:t,updateValidation:n,resetValidation:d,commitValidation:s}=e[A];return{realtimeValidation:l,displayValidation:t,updateValidation:n,resetValidation:d,commitValidation:s}}return j(e)}function j(e){let{isInvalid:l,validationState:t,name:n,value:d,builtinValidation:s,validate:a,validationBehavior:i="aria"}=e;t&&(l||(l=t==="invalid"));let b=l!==void 0?{isInvalid:l,validationErrors:[],validationDetails:L}:null,o=r.useMemo(()=>D(N(a,d)),[a,d]);s!=null&&s.validationDetails.valid&&(s=null);let u=r.useContext(U),p=r.useMemo(()=>n?Array.isArray(n)?n.flatMap($=>w(u[$])):w(u[n]):[],[u,n]),[f,c]=r.useState(u),[y,m]=r.useState(!1);u!==f&&(c(u),m(!1));let C=r.useMemo(()=>D(y?[]:p),[y,p]),M=r.useRef(T),[S,I]=r.useState(T),h=r.useRef(T),W=()=>{if(!_)return;g(!1);let $=o||s||M.current;x($,h.current)||(h.current=$,I($))},[_,g]=r.useState(!1);return r.useEffect(W),{realtimeValidation:b||C||o||s||T,displayValidation:i==="native"?b||C||S:b||C||o||s||S,updateValidation($){i==="aria"&&!x(S,$)?I($):M.current=$},resetValidation(){let $=T;x($,h.current)||(h.current=$,I($)),i==="native"&&g(!1),m(!0)},commitValidation(){i==="native"&&g(!0),m(!0)}}}function w(e){return e?Array.isArray(e)?e:[e]:[]}function N(e,l){if(typeof e=="function"){let t=e(l);if(t&&typeof t!="boolean")return w(t)}return[]}function D(e){return e.length?{isInvalid:!0,validationErrors:e,validationDetails:L}:null}function x(e,l){return e===l?!0:e&&l&&e.isInvalid===l.isInvalid&&e.validationErrors.length===l.validationErrors.length&&e.validationErrors.every((t,n)=>t===l.validationErrors[n])&&Object.entries(e.validationDetails).every(([t,n])=>l.validationDetails[t]===n)}function B(e){let[l,t]=F(e.isOpen,e.defaultOpen||!1,e.onOpenChange);const n=r.useCallback(()=>{t(!0)},[t]),d=r.useCallback(()=>{t(!1)},[t]),s=r.useCallback(()=>{t(!l)},[t,l]);return{isOpen:l,setOpen:t,open:n,close:d,toggle:s}}const G=1500,R=500;let v={},P=0,O=!1,V=null,E=null;function K(e={}){let{delay:l=G,closeDelay:t=R}=e,{isOpen:n,open:d,close:s}=B(e),a=r.useMemo(()=>`${++P}`,[]),i=r.useRef(),b=()=>{v[a]=p},o=()=>{for(let c in v)c!==a&&(v[c](!0),delete v[c])},u=()=>{clearTimeout(i.current),i.current=null,o(),b(),O=!0,d(),V&&(clearTimeout(V),V=null),E&&(clearTimeout(E),E=null)},p=c=>{c||t<=0?(clearTimeout(i.current),i.current=null,s()):i.current||(i.current=setTimeout(()=>{i.current=null,s()},t)),V&&(clearTimeout(V),V=null),O&&(E&&clearTimeout(E),E=setTimeout(()=>{delete v[a],E=null,O=!1},Math.max(R,t)))},f=()=>{o(),b(),!n&&!V&&!O?V=setTimeout(()=>{V=null,O=!0,u()},l):n||u()};return r.useEffect(()=>()=>{clearTimeout(i.current),v[a]&&delete v[a]},[a]),{isOpen:n,open:c=>{!c&&l>0&&!i.current?f():u()},close:p}}export{K as $,z as a,H as b,J as c};
