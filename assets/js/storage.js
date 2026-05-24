const KEY = "bailme_favorites_v1";
const FILTER_KEY = "bailme_filters_v1";
let favs = new Set(JSON.parse(localStorage.getItem(KEY) || "[]"));
export function isFav(id){ return favs.has(id); }
export function toggleFav(id){ if (favs.has(id)) favs.delete(id); else favs.add(id); localStorage.setItem(KEY, JSON.stringify([...favs])); return favs.has(id); }
export function listFavs(){ return new Set(favs); }
export function saveFilters(f){ localStorage.setItem(FILTER_KEY, JSON.stringify(f)); }
export function loadFilters(){ return JSON.parse(localStorage.getItem(FILTER_KEY) || "null"); }
