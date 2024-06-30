import{S as v,i as f,a as u}from"./assets/vendor-b11e2a50.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();function g(o){return o.map(e=>`<li class="gallery-item">
          <div class="gallery-image-tumb">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
            </a>
          </div>
            <ul class="image-info">
              <li class="image-info-item">
                <h4 class="image-info-item-title">Likes</h4>
                <p class="image-info-item-text">${e.likes}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Views</h4>
                <p class="image-info-item-text">${e.views}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Comments</h4>
                <p class="image-info-item-text">${e.comments}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Downloads</h4>
                <p class="image-info-item-text">${e.downloads}</p>
              </li>
            </ul>
        </li>`).join("")}const m=document.querySelector(".form"),r=document.querySelector(".gallery"),h=document.querySelector(".loader"),d=document.querySelector(".load-btn");let x,a=1,c;const p=15;function y(){h.classList.remove("hidden")}function L(){h.classList.add("hidden")}function S(){d.classList.remove("hidden")}function b(){d.classList.add("hidden")}const q=new v(".gallery a",{captionsData:"alt",captionDelay:250});function E(){f.error({message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:"432px",position:"topRight",messageSize:16,backgroundColor:"#ef4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark"})}m.addEventListener("submit",async o=>{o.preventDefault();const e=o.target.elements.search.value.trim();if(e){a=1,y(),m.reset(),r.innerHTML="";try{const s=await F(e,a);c=Math.ceil(s.totalHits/p),s.hits.length?(r.innerHTML=g(s.hits),q.refresh()):E()}catch(s){console.log(s)}L(),w()}});d.addEventListener("click",async()=>{a++,b(),y();try{const o=await F(x,a),e=g(o.hits);r.insertAdjacentHTML("beforeend",e),P()}catch{console.log("error")}L(),w()});function P(){const e=r.children[0].getBoundingClientRect().height;scrollBy({top:e*3,behavior:"smooth"})}function w(){a>=c?(b(),c&&f.info({title:"The End!",message:"End of collection!"})):S()}u.defaults.baseURL="https://pixabay.com/api/";async function F(o,e){const s={key:"44666739-d0cf1ddb18f9d30146fa54081",q:o,page:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,order:"popular"};return(await u.get("",{params:s})).data}
//# sourceMappingURL=commonHelpers.js.map
