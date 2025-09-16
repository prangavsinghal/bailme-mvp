export function rootPrefix(){
  const path = location.pathname;
  return path.endsWith("/index.html") || path.match(/\/$/) ? "./" : "../";
}
export function injectHeader(active) {
  const el = document.querySelector(".site-header");
  if (!el) return;
  el.innerHTML = `
    <div class="navbar">
      <a class="brand" href="${rootPrefix()}index.html">Bail Me</a>
      <nav class="navlinks">
        <a href="${rootPrefix()}pages/generate.html" class="${active==='generate'?'active':''}">Generate</a>
        <a href="${rootPrefix()}pages/favorites.html" class="${active==='favorites'?'active':''}">Favorites</a>
        <a href="${rootPrefix()}pages/library.html" class="${active==='library'?'active':''}">Library</a>
      </nav>
    </div>`;
}
export function injectFooter() {
  const f = document.querySelector(".site-footer");
  if (!f) return;
  f.innerHTML = `<div class="navbar" style="justify-content:center;">
    <span class="muted text-xs">Open-source • No backend • PWA offline-ready</span>
  </div>`;
}
import { track } from './analytics.js';
export function renderCard(tplId, excuse, { onCopy, onShare, onFav, isFav }) {
  const tpl = document.getElementById(tplId);
  const node = tpl.content.firstElementChild.cloneNode(true);
  node.querySelector(".card-text").textContent = excuse.text;
  node.querySelector(".category").textContent = excuse.category;
  node.querySelector(".intent").textContent = excuse.intent;
  node.querySelector(".tone").textContent = excuse.tone;
  const copyBtn = node.querySelector(".btn-copy");
  copyBtn.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(excuse.text); copyBtn.textContent="Copied"; setTimeout(()=>copyBtn.textContent="Copy",1200); } catch {}
    track('Copy', { category: excuse.category, intent: excuse.intent, tone: excuse.tone }); onCopy && onCopy(excuse);
  });
  const shareBtn = node.querySelector(".btn-share");
  if (!navigator.share) shareBtn.classList.add("hidden"); else shareBtn.addEventListener("click",()=>{ navigator.share({text:excuse.text,title:"Bail Me excuse"}).catch(()=>{}); onShare&&onShare(excuse); });
  const favBtn = node.querySelector(".btn-fav");
  const setFavState = (fav) => {
    if (fav) { favBtn.textContent = "★ Saved"; favBtn.classList.add("bg-amber-200"); favBtn.classList.remove("bg-amber-50"); }
    else { favBtn.textContent = "☆ Save"; favBtn.classList.add("bg-amber-50"); favBtn.classList.remove("bg-amber-200"); }
  };
  setFavState(isFav && isFav(excuse.id));
  favBtn.addEventListener("click", () => { track('FavoriteToggle', { id: excuse.id, category: excuse.category, intent: excuse.intent, tone: excuse.tone }); onFav && onFav(excuse, setFavState); });
  return node;
}
export function pickRandom(arr, n=3){
  const c=[...arr]; for(let i=c.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [c[i],c[j]]=[c[j],c[i]];} return c.slice(0, Math.min(n,c.length));
}
