import"./assets/modulepreload-polyfill-ec808ebb.js";import{i}from"./assets/vendor-651d7991.js";const o=document.querySelector(".form");o.addEventListener("submit",r);function r(e){e.preventDefault();const s=o.elements.state.value,n=o.elements.delay.value;m(n,s).then(t=>i.success({message:`✅ Fulfilled promise in ${t}ms`})).catch(t=>i.error({message:`❌ Rejected promise in ${t}ms`}))}function m(e,s){return new Promise((n,t)=>{setTimeout(()=>{s==="fulfilled"?n(e):t(e)},e)})}
//# sourceMappingURL=commonHelpers2.js.map
