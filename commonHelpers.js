import{q as r,a,r as e,b as l,c,o as m,d as u,e as b,f as E,s as g}from"./assets/eventHandlers-85c2c6f1.js";import"./assets/ratingPopup-f0e45cb7.js";import"./assets/search-input-ae89efb8.js";import{i as n}from"./assets/vendor-347e8cf8.js";window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches?(r.set("limit",12),a.set("limit",10)):(r.set("limit",9),a.set("limit",8)),r.set("page",1),a.set("page",1),e.searchForm.reset(),e.searchForm.classList.add("hidden"),l(),c()});c();e.filter.addEventListener("click",m);e.pagination.addEventListener("click",u);e.list.addEventListener("click",b);e.exercisesContainer.addEventListener("click",E);document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("subscribeForm"),t=document.getElementById("subscribeBtn");s.addEventListener("submit",async o=>{o.preventDefault();const d=s.elements.email.value;try{t.disabled=!0,t.textContent="Subscribing...";const i=await g(d);n.success({title:"Success",message:i.message})}catch(i){n.error({title:"Error",message:i.message})}finally{t.disabled=!1,t.textContent="Send",s.reset()}})});
//# sourceMappingURL=commonHelpers.js.map