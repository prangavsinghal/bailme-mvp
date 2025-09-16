import { injectHeader, injectFooter, renderCard, pickRandom, rootPrefix } from "./ui.js";
import { isFav, toggleFav, listFavs } from "./storage.js";
import { EXCUSES } from "./excuses.js";

const PAGE = window.__PAGE__ || "home";
injectHeader(PAGE);
injectFooter();

function filterExcuses({ category, intent, tone }){
  return EXCUSES.filter(e => (!category || e.category === category) && (!intent || e.intent === intent) && (!tone || e.tone === tone));
}

if (PAGE === "generate") {
  const results = document.getElementById("results");
  function render(list){
    results.innerHTML = "";
    if (!list.length) { results.innerHTML = `<p class="muted">No matches. Try another combination.</p>`; return; }
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
  };
  document.getElementById("btn-generate").addEventListener("click", gen);
  render(pickRandom(EXCUSES, 3));
}

if (PAGE === "favorites") {
  const favsEl = document.getElementById("favorites");
  function renderFavs(){
    favsEl.innerHTML = "";
    const favIds = listFavs();
    const favs = EXCUSES.filter(e => favIds.has(e.id));
    if (!favs.length) { favsEl.innerHTML = `<p class="muted">No favorites yet. Save some from Generate or Library.</p>`; return; }
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
  search.addEventListener("input", (e)=>render(e.target.value));
  render();
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register(rootPrefix() + "sw.js").catch(()=>{});
}
