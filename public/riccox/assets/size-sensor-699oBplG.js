var l={},v={},I={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=1,i=function(){return"".concat(n++)};e.default=i})(I);var y={},p={},h={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:60,c=null;return function(){for(var f=this,S=arguments.length,u=new Array(S),d=0;d<S;d++)u[d]=arguments[d];clearTimeout(c),c=setTimeout(function(){t.apply(f,u)},o)}};e.default=n})(h);var a={};Object.defineProperty(a,"__esModule",{value:!0});a.SizeSensorId=a.SensorTabIndex=a.SensorClassName=void 0;var x="size-sensor-id";a.SizeSensorId=x;var P="size-sensor-object";a.SensorClassName=P;var w="-1";a.SensorTabIndex=w;Object.defineProperty(p,"__esModule",{value:!0});p.createSensor=void 0;var A=C(h),z=a;function C(e){return e&&e.__esModule?e:{default:e}}var $=function(n,i){var t=void 0,o=[],c=function(){getComputedStyle(n).position==="static"&&(n.style.position="relative");var r=document.createElement("object");return r.onload=function(){r.contentDocument.defaultView.addEventListener("resize",f),f()},r.style.display="block",r.style.position="absolute",r.style.top="0",r.style.left="0",r.style.height="100%",r.style.width="100%",r.style.overflow="hidden",r.style.pointerEvents="none",r.style.zIndex="-1",r.style.opacity="0",r.setAttribute("class",z.SensorClassName),r.setAttribute("tabindex",z.SensorTabIndex),r.type="text/html",n.appendChild(r),r.data="about:blank",r},f=(0,A.default)(function(){o.forEach(function(s){s(n)})}),S=function(r){t||(t=c()),o.indexOf(r)===-1&&o.push(r)},u=function(){t&&t.parentNode&&(t.contentDocument&&t.contentDocument.defaultView.removeEventListener("resize",f),t.parentNode.removeChild(t),n.removeAttribute(z.SizeSensorId),t=void 0,o=[],i&&i())},d=function(r){var _=o.indexOf(r);_!==-1&&o.splice(_,1),o.length===0&&t&&u()};return{element:n,bind:S,destroy:u,unbind:d}};p.createSensor=$;var m={};Object.defineProperty(m,"__esModule",{value:!0});m.createSensor=void 0;var E=a,N=T(h);function T(e){return e&&e.__esModule?e:{default:e}}var R=function(n,i){var t=void 0,o=[],c=(0,N.default)(function(){o.forEach(function(s){s(n)})}),f=function(){var r=new ResizeObserver(c);return r.observe(n),c(),r},S=function(r){t||(t=f()),o.indexOf(r)===-1&&o.push(r)},u=function(){t.disconnect(),o=[],t=void 0,n.removeAttribute(E.SizeSensorId),i&&i()},d=function(r){var _=o.indexOf(r);_!==-1&&o.splice(_,1),o.length===0&&t&&u()};return{element:n,bind:S,destroy:u,unbind:d}};m.createSensor=R;Object.defineProperty(y,"__esModule",{value:!0});y.createSensor=void 0;var j=p,D=m,L=typeof ResizeObserver<"u"?D.createSensor:j.createSensor;y.createSensor=L;Object.defineProperty(v,"__esModule",{value:!0});v.removeSensor=v.getSensor=v.Sensors=void 0;var q=B(I),V=y,g=a;function B(e){return e&&e.__esModule?e:{default:e}}var b={};v.Sensors=b;function M(e){e&&b[e]&&delete b[e]}var F=function(n){var i=n.getAttribute(g.SizeSensorId);if(i&&b[i])return b[i];var t=(0,q.default)();n.setAttribute(g.SizeSensorId,t);var o=(0,V.createSensor)(n,function(){return M(t)});return b[t]=o,o};v.getSensor=F;var G=function(n){var i=n.element.getAttribute(g.SizeSensorId);n.destroy(),M(i)};v.removeSensor=G;Object.defineProperty(l,"__esModule",{value:!0});l.ver=Q=l.clear=J=l.bind=void 0;var O=v,H=function(n,i){var t=(0,O.getSensor)(n);return t.bind(i),function(){t.unbind(i)}},J=l.bind=H,K=function(n){var i=(0,O.getSensor)(n);(0,O.removeSensor)(i)},Q=l.clear=K,U="1.0.2";l.ver=U;export{J as b,Q as c};
