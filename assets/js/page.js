import { injectHeader, injectFooter, renderCard, pickRandom, rootPrefix } from "./ui.js";
import { isFav, toggleFav, listFavs, saveFilters, loadFilters } from "./storage.js";
import { EXCUSES } from "./excuses.js";
import { track } from "./analytics.js";

const PAGE = window.__PAGE__ || "home";
injectHeader(PAGE);
injectFooter();
track('app_opened', { page: PAGE });

function filterExcuses({ category, intent, tone }){
  return EXCUSES.filter(e => (!category || e.category === category) && (!intent || e.intent === intent) && (!tone || e.tone === tone));
}

if (PAGE === 'home') {
  const el = document.getElementById('featured-excuse');
  const tagsEl = document.getElementById('featured-tags');
  if (el) {
    const pick = EXCUSES[Math.floor(Math.random() * EXCUSES.length)];
    el.textContent = `"${pick.text}"`;
    if (tagsEl) tagsEl.innerHTML = `<span class="tag">${pick.category}</span><span class="tag">${pick.intent}</span><span class="tag">${pick.tone}</span>`;
  }
}

if (PAGE === "generate") {
  const results = document.getElementById("results");

  const saved = loadFilters();
  if (saved) {
    document.getElementById("category").value = saved.category || "Work";
    document.getElementById("intent").value = saved.intent || "Cancel";
    document.getElementById("tone").value = saved.tone || "formal";
  }

  function render(list){
    results.innerHTML = "";
    if (!list.length) {
      results.innerHTML = `<p class="muted">No matches. <button id="btn-show-all" class="text-slate-900 underline font-medium">Show random</button></p>`;
      document.getElementById('btn-show-all')?.addEventListener('click', () => render(pickRandom(EXCUSES, 3)));
      return;
    }
    list.forEach(e => results.appendChild(renderCard("card-template", e, {
      onFav: (excuse, setState) => setState(toggleFav(excuse.id)),
      isFav: (id) => isFav(id)
    })));
  }

  const gen = () => {
    const category = document.getElementById("category").value;
    const intent = document.getElementById("intent").value;
    const tone = document.getElementById("tone").value;
    const matches = filterExcuses({ category, intent, tone });
    render(pickRandom(matches, 3));
    track('generate_clicked', { category, intent, tone, results_count: matches.length });
    saveFilters({ category, intent, tone });
  };

  document.getElementById("btn-generate").addEventListener("click", gen);
  document.addEventListener("keydown", e => { if (e.key === "Enter" && !e.target.matches("button, a")) gen(); });
  render(pickRandom(EXCUSES, 3));
}

if (PAGE === "favorites") {
  const favsEl = document.getElementById("favorites");
  function renderFavs(){
    favsEl.innerHTML = "";
    const favIds = listFavs();
    const favs = EXCUSES.filter(e => favIds.has(e.id));
    if (!favs.length) {
      favsEl.innerHTML = `<p class="muted">No favorites yet. <a href="${rootPrefix()}pages/generate.html" class="text-slate-900 underline font-medium">Generate some excuses</a> to save here.</p>`;
      return;
    }
    favs.forEach(e => favsEl.appendChild(renderCard("card-template", e, {
      onFav: (excuse, setState) => { setState(toggleFav(excuse.id)); renderFavs(); },
      isFav: (id) => isFav(id)
    })));
  }
  renderFavs();
}

if (PAGE === "library") {
  const lib = document.getElementById("library");
  const count = document.getElementById("lib-count");
  const search = document.getElementById("search");
  function render(filter=""){
    lib.innerHTML = "";
    const norm = filter.trim().toLowerCase();
    const list = EXCUSES.filter(e => !norm || e.text.toLowerCase().includes(norm));
    count.textContent = String(list.length);
    list.forEach(e => lib.appendChild(renderCard("card-template", e, {
      onFav: (excuse, setState) => setState(toggleFav(excuse.id)),
      isFav: (id) => isFav(id)
    })));
  }
  let searchTimer;
  search.addEventListener("input", (e) => {
    render(e.target.value);
    clearTimeout(searchTimer);
    if (e.target.value.trim().length > 0) {
      searchTimer = setTimeout(() => track('library_searched', { query_length: e.target.value.trim().length }), 600);
    }
  });
  render();
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register(rootPrefix() + "sw.js").catch(()=>{});
}
