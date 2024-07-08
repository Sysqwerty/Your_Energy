import{i as v,t as Y}from"./vendor-347e8cf8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const g="https://your-energy.b.goit.study/api/",n={list:document.querySelector(".js-filtered-list"),filter:document.querySelector(".js-filters"),pagination:document.querySelector(".js-pagination"),exerciseHeaderSpan:document.querySelector(".js-exercise-header-span"),exerciseHeader:document.querySelector(".js-exercise-header"),searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".search-input"),searchInputCrossIcon:document.querySelector(".search-input-icon.cross-icon"),searchInputSearchIcon:document.querySelector(".search-input-icon.search-icon"),exercisePopUpBackdrop:document.querySelector(".exercise-pop-up-backdrop"),exercisePopUpContent:document.querySelector(".exercise-pop-up-content"),exercisePopUpCloseBtn:document.querySelector(".exercise-pop-up-close-btn"),exercisesContainer:document.querySelector(".exercises-container"),body:document.querySelector("body"),scrollUpButton:document.querySelector(".scroll-up-button"),mainSection:document.querySelector(".main-section"),ratingPopUpBackdrop:document.querySelector(".js-rating-pop-up-backdrop"),ratingPopUpContent:document.querySelector(".rating-pop-up-content"),ratingPopUpCloseBtn:document.querySelector(".js-close-rating-pop-up"),ratingForm:document.querySelector(".form-rating")},w={MUSCLES:"Muscles",BODY_PARTS:"Body parts",EQUIPMENT:"Equipment"},b=new URLSearchParams({filter:w.MUSCLES,page:1,limit:window.matchMedia("(min-width: 768px)").matches?12:9}),p=new URLSearchParams({page:1,limit:window.matchMedia("(min-width: 768px)").matches?10:8}),S={method:"GET",headers:{"Content-Type":"application/json"}};async function Z(){const e=await fetch(`${g}exercises?${p}`,S);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}async function ge(e,{rate:t,email:s,review:i}){const r={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({rate:t,email:s,review:i})},a=await fetch(`${g}exercises/${e}/rating`,r),o=await a.json();if(!a.ok)throw new Error(o.message||"Failed to set a rating");return o}async function X(e){const t=await fetch(`${g}exercises/${e}`,S);if(!t.ok)throw new Error(`Ooops, status code: ${t.status}`);return await t.json()}async function ee(){const e=await fetch(`${g}filters?${b}`,S);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}async function he(){const e=await fetch(`${g}quote`,S);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}async function xe(e){const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})},s=await fetch(`${g}subscription`,t),i=await s.json();if(!s.ok)throw new Error(i.message||"Failed to subscribe");return i}function O(e){return e.charAt(0).toUpperCase()+e.slice(1)}function te(e){const t=e.map(({filter:s,name:i,imgURL:r})=>`<li class="category-card fade-item" data-filter="${s}" data-name="${i}">
            <img
              src="${r}"
              alt="${i}"
              class="category-card-img"
              width="80"
              height="80"
            />
            <div class="category-card-content">
            <p class="category-card-title">${O(i)}</p> 
            <h3 class="category-card-text">${O(s)}</h3>
            </div>
        </li>`).join("");n.list.classList.contains("exercise-list")&&n.list.classList.replace("exercise-list","filtered-list"),n.list.innerHTML=t}function q(e){return`<svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                class="arrow-icon ${e??""}"
              >
                <path
                  d="M8.83289 10.5917C8.75478 10.5142 8.69279 10.4221 8.65048 10.3205C8.60817 10.219 8.58639 10.11 8.58639 10C8.58639 9.89001 8.60817 9.78109 8.65048 9.67954C8.69279 9.57799 8.75478 9.48582 8.83289 9.40835L12.6579 5.59168C12.736 5.51421 12.798 5.42204 12.8403 5.32049C12.8826 5.21894 12.9044 5.11002 12.9044 5.00001C12.9044 4.89 12.8826 4.78108 12.8403 4.67953C12.798 4.57798 12.736 4.48581 12.6579 4.40834C12.5018 4.25313 12.2905 4.16602 12.0704 4.16602C11.8502 4.16602 11.639 4.25313 11.4829 4.40834L7.65789 8.23335C7.18972 8.7021 6.92676 9.33752 6.92676 10C6.92676 10.6625 7.18972 11.2979 7.65789 11.7667L11.4829 15.5917C11.6381 15.7457 11.8476 15.8324 12.0662 15.8334C12.1759 15.834 12.2846 15.813 12.3861 15.7715C12.4877 15.73 12.58 15.6689 12.6579 15.5917C12.736 15.5142 12.798 15.4221 12.8403 15.3205C12.8826 15.219 12.9044 15.11 12.9044 15C12.9044 14.89 12.8826 14.7811 12.8403 14.6795C12.798 14.578 12.736 14.4858 12.6579 14.4084L8.83289 10.5917Z"
                  fill="#242424"
                />
              </svg>`}function I(e){return`<svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                class="arrow-icon ${e??""}"
              >
                <path
                  d="M11.1671 10.5917C11.2452 10.5142 11.3072 10.4221 11.3495 10.3205C11.3918 10.219 11.4136 10.11 11.4136 10C11.4136 9.89001 11.3918 9.78109 11.3495 9.67954C11.3072 9.57799 11.2452 9.48582 11.1671 9.40835L7.34211 5.59168C7.264 5.51421 7.20201 5.42204 7.1597 5.32049C7.11739 5.21894 7.09561 5.11002 7.09561 5.00001C7.09561 4.89 7.11739 4.78108 7.1597 4.67953C7.20201 4.57798 7.264 4.48581 7.34211 4.40834C7.49824 4.25313 7.70945 4.16602 7.92961 4.16602C8.14976 4.16602 8.36097 4.25313 8.51711 4.40834L12.3421 8.23335C12.8103 8.7021 13.0732 9.33752 13.0732 10C13.0732 10.6625 12.8103 11.2979 12.3421 11.7667L8.51711 15.5917C8.36189 15.7457 8.15239 15.8324 7.93377 15.8334C7.8241 15.834 7.71538 15.813 7.61385 15.7715C7.51232 15.73 7.41997 15.6689 7.34211 15.5917C7.264 15.5142 7.20201 15.4221 7.1597 15.3205C7.11739 15.219 7.09561 15.11 7.09561 15C7.09561 14.89 7.11739 14.7811 7.1597 14.6795C7.20201 14.578 7.264 14.4858 7.34211 14.4084L11.1671 10.5917Z"
                  fill="#242424"
                />
              </svg>`}function c({pageId:e,content:t,liClassNames:s}){const i=document.createElement("li"),r=document.createElement("a");return r.classList.add("pagination-link"),r.onclick=a=>{a.preventDefault()},r.href="#",r.innerHTML=t,i.classList.add(...s.filter(Boolean)),i.dataset.id=e,i.appendChild(r),i}function A(e,t){const s=document.createDocumentFragment(),i=Array(e).fill(0);if(e>9){const r=c({pageId:1,content:`${q("first")}${q("first")}`,liClassNames:["pagination-arrow","go-to-first",t===1?"disabled":""]});s.appendChild(r);const a=c({pageId:t-1<1?1:t-1,content:q(),liClassNames:["pagination-arrow","go-to-prev",t===1?"disabled":""]});s.appendChild(a);let o=t-1<1?1:t-1,m=t+1>e?e:t+1;if(m-o<2&&(o===1?m=o+2:o=m-2),o!==1){const y=c({pageId:-1,content:"...",liClassNames:["pagination-item","three-dots"]});s.appendChild(y)}if(i.slice(o-1,m).map((y,k)=>{const W=c({pageId:o+k,content:o+k,liClassNames:["pagination-item",t===o+k?"active":""]});s.appendChild(W)}),m!==e){const y=c({pageId:-1,content:"...",liClassNames:["pagination-item","three-dots"]});s.appendChild(y)}const $=c({pageId:t+1>e?e:t+1,content:I(),liClassNames:["pagination-arrow","go-to-next",t===e?"disabled":""]});s.appendChild($);const N=c({pageId:e,content:`${I("last")}${I("last")}`,liClassNames:["pagination-arrow","go-to-last",t===e?"disabled":""]});s.appendChild(N)}else i.map((r,a)=>{const o=c({pageId:a+1,content:a+1,liClassNames:["pagination-item",t===a+1?"active":""]});s.appendChild(o)});n.pagination.innerHTML="",n.pagination.appendChild(s)}const se=e=>e&&e.charAt(0).toUpperCase()+e.slice(1);function D(e,t=!1){return e.map(({_id:s,name:i,rating:r,bodyPart:a,burnedCalories:o,target:m,time:$})=>`<li class="exercise-card fade-item">
          <div class="exercise-card-top">
            <div class="exercise-card-top-info">
              <h3 class="exercise-general-header">Workout</h3>
              ${t?`<button class="exercise-card-btn exercise-remove-btn" data-exercise-id="${s}" type="button">
             <svg class="exercise-card-icon-garbage">
               <use href="./images/icons.svg#icon-trash">
              </use>
             </svg>
          </button>`:`<p class="exercise-rating">${Number.isInteger(r)?r.toFixed(1):r}
                  <svg class="exercise-rating-icon">
                    <use href="./images/icons.svg#icon-star"></use>
                  </svg>
                </p>`}
            </div>
            <button class="exercise-card-btn exercise-start-btn" data-exercise-id="${s}" type="button">
              Start<svg class="exercise-start-icon">
                <use href="./images/icons.svg#icon-start-arrow"></use>
              </svg>
            </button>
          </div>
          <div class="exercise-card-bottom">
            <div class="exercise-card-title">
              <svg class="exercise-card-icon">
                <use href="./images/icons.svg#icon-run"></use>
              </svg>
              <p class="exercise-card-title-text">${se(i)}</p>
            </div>
            <div class="exercise-card-info">
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Burned calories:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${o} / ${$} min</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Body part:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${a}</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Target:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${m}</div>
              </div>
            </div>
          </div>
        </li>`).join("")}function B(){const e=document.getElementsByClassName("fade-item");for(let s=0;s<e.length;++s)t(e[s],s*100);function t(s,i){setTimeout(()=>{s.classList.add("fadein")},i)}}function J(){ee().then(e=>{e.totalPages,te(e.results),A(e.totalPages,Number(e.page)),B()}).catch(e=>{v.error({message:`${e}`})})}function T(){Z().then(e=>{e.results.length||v.warning({message:"Sorry, this request did not match. Try changing the request parameters."}),n.list.innerHTML=D(e.results),A(e.totalPages,Number(e.page)),B()}).catch(e=>{v.error({message:`${e}`})})}const U=document.querySelector(".header"),M=document.querySelector("[data-home]"),H=document.querySelector("[data-favorites]");let C=!1;window.addEventListener("scroll",()=>{const e=window.scrollY||document.documentElement.scrollTop,t=document.querySelector(".scroll-up-button-container");e>=2&&!C?(U.classList.add("header-scrolled"),t.classList.remove("visually-hidden"),C=!0):e<2&&C&&(t.classList.add("visually-hidden"),U.classList.remove("header-scrolled"),C=!1)});(function(){window.location.href.includes("favorites.html")?(M.classList.remove("active"),H.classList.add("active")):(M.classList.add("active"),H.classList.remove("active"))})();function ie(e){n.exerciseHeader.textContent="Exercises /",n.exerciseHeaderSpan.textContent=`${e}`,n.exerciseHeaderSpan.dataset.exercise=e}function re(){n.exerciseHeader.textContent="Exercises",n.exerciseHeaderSpan.textContent="",n.exerciseHeaderSpan.dataset.exercise=""}const j={target:"Target",bodyPart:"Body Part",equipment:"Equipment",popularity:"Popular"};function ae(e){let t="";return Object.keys(j).forEach(s=>{e.hasOwnProperty(s)&&(t+=`
        <li class="exercise-data-list-item">
          <p class="exercise-data-parameter-name">${j[s]}</p>
          <p class="exercise-data-parameter-value">${e[s]}</p>
        </li>
      `)}),e.hasOwnProperty("burnedCalories")&&(t+=`
        <li class="exercise-data-list-item">
          <p class="exercise-data-parameter-name">Burned Calories</p>
          <p class="exercise-data-parameter-value">${e.burnedCalories}/${e.time} min</p>
        </li>
      `),t}function ne(e){const t=`
    <div class="rating-star-container">
      <svg class="rating-star rating-star--active">
        <use href="./images/icons.svg#icon-star"></use>
      </svg>
    </div>`,s=`
    <div class="rating-star-container">
      <svg class="rating-star">
        <use href="./images/icons.svg#icon-star"></use>
      </svg>
    </div>`,i=o=>`
    <div class="rating-star-container">
      <svg class="rating-star">
        <defs>
          <linearGradient id="partial-star-${o}">
            <stop offset="${o}%" stop-color="var(--yellow)" />
            <stop offset="${o}%" stop-color="var(--light-20)" />
          </linearGradient>
        </defs>
        <use href="./images/icons.svg#icon-star" style="fill: url(#partial-star-${o});"></use>
      </svg>
    </div>`;let r=e,a="";for(let o=0;o<5;o++)r>=1?a+=t:r>0?a+=i(r*100):a+=s,r--;return`
    <div class="rating rating--dark">
      <span class="rating-label">${Number.isInteger(e)?e.toFixed(1):e}</span>
      ${a}
    </div>`}function R(e){return(JSON.parse(localStorage.getItem("favorites"))||[]).some(s=>s._id===e)}function oe(e){return`
    <button class="button popup-btn ${R(e)?"visually-hidden":""}" id="add-favorites">
      <span class="button-label">Add to favorites</span>
        <svg class="button-icon icon" width="18" height="18">
          <use href="./images/icons.svg#icon-heart"></use>
        </svg>
    </button>
    <button class="button popup-btn ${R(e)?"":"visually-hidden"}" id="remove-favorites">
      <span class="button-label">Remove from favorites</span>
        <svg class="button-icon icon" width="18" height="18">
          <use href="./images/icons.svg#icon-trash"></use>
        </svg>
    </button>
    `}function ce(e){const t=ae(e),s=ne(e.rating),i=oe(e._id);return`
    <img class="exercise-instruction-image" src="${e.gifUrl}" alt="${e.name} instruction">
    <div class="exercise-panel-content">
    <p class="exercise-name">${e.name}</p>
    <div class="exercise-rating-wrapper">
    <div class="dark-container">
      <div class="sub-container">
      ${s}
      </div>
    </div>
    </div>
    <ul class="exercise-data">${t}</ul>
    <p class="exercise-description">${e.description}</p>

    <div class="button-container">
      ${i}
      <button class="button button--secondary popup-btn js-add-rating">
        <span class="button-label">Give a rating</span>
      </button>
    </div>

    </div>
  `}function _(e){let t=x();const s=t.find(r=>r._id===e);if(!s)return!1;const i=t.filter(r=>r._id!==e);return localStorage.setItem("favorites",JSON.stringify(i)),v.success({message:`Exercise ${s.name} removed from favorites!`}),!0}function x(){const e=localStorage.getItem("favorites");return JSON.parse(e)||[]}let L=[];const P=document.querySelector(".favorites-text"),f=document.querySelector(".exercise-list"),l=document.querySelector(".js-pagination");function le(e,t){let s=[];for(let i=0;i<e.length;i+=t)s.push(e.slice(i,i+t));return s}function de(e){const t=e.target.closest(".exercise-remove-btn");if(!t)return;const s=t.getAttribute("data-exercise-id");s&&_(s)&&h(x(),!0)}function F(e){f.innerHTML=D(e,!0),B()}function G(e,t){l.innerHTML="",l.classList.remove("visually-hidden"),e.forEach((s,i)=>{const r=c({pageId:i,content:i+1,liClassNames:["pagination-item",t===i?"active":""]});r.addEventListener("click",()=>{F(s),G(e,i),f.scrollIntoView({behavior:"smooth"})}),l.appendChild(r)}),e.length<=1&&l.classList.add("visually-hidden")}function h(e=L,t=!1){if(e.length)P.classList.add("visually-hidden"),f.classList.remove("hidden");else{P.classList.remove("visually-hidden"),f.innerHTML="",f.classList.add("hidden"),l.classList.add("hidden");return}const s=window.innerWidth;l.classList.add("hidden");let i=s<768?8:10;if(s>=1440&&(i=10),e.length<=i)F(e),l.classList.add("visually-hidden");else{const r=le(e,i);let a=0;if(t){const o=l.querySelector(".pagination-item.active");a=o?parseInt(o.getAttribute("data-id"),10):0,a>=r.length&&(a=r.length-1)}r.length===0?(P.classList.remove("visually-hidden"),l.classList.add("visually-hidden")):(F(r[a]),G(r,a))}}document.addEventListener("DOMContentLoaded",()=>{if(window.location.pathname.includes("favorites.html")){L=x(),h(L);const e=Y(()=>h(L),50);window.addEventListener("resize",e),f.addEventListener("click",fe),f.addEventListener("click",de)}});let d=null,u=null;function ue(e){pe(e).then(t=>{d=document.querySelector("#add-favorites"),n.exercisePopupAddFavoritesBtn=d,u=document.querySelector("#remove-favorites"),n.exercisePopupRemoveFavoritesBtn=u,d&&(d.dataset.exercise=JSON.stringify(t),d.addEventListener("click",V,{passive:!0})),u&&(u.dataset.exercise=JSON.stringify(t),u.addEventListener("click",K,{passive:!0})),n.exercisePopUpCloseBtn.addEventListener("click",E,{passive:!0}),n.exercisePopUpBackdrop.addEventListener("click",z,{passive:!0}),n.exercisePopUpBackdrop.classList.add("is-open"),n.body.classList.add("overflow-hidden"),document.addEventListener("keydown",Q)}).catch(t=>{v.error({message:`${t}`})})}function E(){n.exercisePopUpBackdrop.classList.remove("is-open"),n.body.classList.remove("overflow-hidden"),d&&d.removeEventListener("click",V),u&&u.removeEventListener("click",K),n.exercisePopUpBackdrop.removeEventListener("click",z),n.exercisePopUpCloseBtn.removeEventListener("click",E),document.removeEventListener("keydown",Q),d=null,u=null}function pe(e){return new Promise((t,s)=>{X(e).then(i=>{n.exercisePopUpContent.innerHTML=ce(i),t(i)}).catch(i=>{s(i)})})}function z(e){e.target===n.exercisePopUpBackdrop&&E()}function me(e){let t=x();t.some(s=>s._id===e._id)||(t.push(e),localStorage.setItem("favorites",JSON.stringify(t)),window.location.pathname.includes("favorites.html")&&h(t),v.success({message:"Exercise added to favorites!"}))}function V(e){const t=JSON.parse(d.dataset.exercise);me(t),e.stopPropagation(),n.exercisePopupAddFavoritesBtn.classList.add("visually-hidden"),n.exercisePopupRemoveFavoritesBtn.classList.remove("visually-hidden")}function K(e){const t=JSON.parse(u.dataset.exercise);_(t._id)&&window.location.pathname.includes("favorites.html")&&h(x(),!0),n.exercisePopupAddFavoritesBtn.classList.remove("visually-hidden"),n.exercisePopupRemoveFavoritesBtn.classList.add("visually-hidden"),e.stopPropagation()}function Q(e){e.code==="Escape"&&E()}function ye(e){const t=e.target,s=t.closest("li.pagination-item:not(.active):not(.three-dots)")??t.closest("li.pagination-arrow:not(.disabled)");if(!s)return;const i=Number(s.dataset.id);b.set("page",i),p.set("page",i),n.exerciseHeaderSpan.dataset.exercise?T():J(),n.mainSection.scrollIntoView()}function Ce(e){const s=e.target.closest("li[data-filter]");if(!s)return;document.querySelectorAll(".js-filters .active").forEach(o=>o.classList.remove("active")),s.classList.add("active"),n.searchForm.reset(),n.searchForm.classList.add("hidden");const r=s.dataset.filter,a=Object.keys(w).find(o=>w[o]===r);a&&(b.set("filter",w[a]),b.set("page",1),p.delete("muscles"),p.delete("bodypart"),p.delete("equipment"),p.set("page",1),n.list.classList.replace("exercise-list","filtered-list"),J()),re()}function we(e){const s=e.target.closest("li.category-card");if(!s)return;let i=s.dataset.filter.toString().toLowerCase();i==="body parts"&&(i="bodypart");const r=s.dataset.name;ie(r),p.set(i,r),p.set("page",1),n.list.classList.replace("filtered-list","exercise-list"),n.searchForm.classList.remove("hidden"),n.list.innerHTML="",T(),n.mainSection.scrollIntoView()}function Le(e){e.preventDefault();const t=n.searchInput.value.trim();p.set("keyword",t),T()}function fe(e){const t=e.target.closest(".exercise-start-btn");if(!t)return;const s=t.getAttribute("data-exercise-id");s&&ue(s)}export{p as a,re as b,J as c,ye as d,we as e,fe as f,he as g,Q as h,ge as i,T as j,Le as k,Ce as o,b as q,n as r,xe as s};
//# sourceMappingURL=eventHandlers-85c2c6f1.js.map