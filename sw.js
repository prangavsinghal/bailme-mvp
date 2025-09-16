const CACHE = "bailme-multipage-v1";
const CORE = [
  "./",
  "./index.html",
  "./assets/css/styles.css",
  "./assets/js/ui.js",
  "./assets/js/storage.js",
  "./assets/js/excuses.js",
  "./assets/js/page.js",
  "./pages/generate.html",
  "./pages/favorites.html",
  "./pages/library.html"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)));
  self.skipWaiting();
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  e.respondWith((async () => {
    try {
      const net = await fetch(e.request);
      const cache = await caches.open(CACHE);
      cache.put(e.request, net.clone()).catch(()=>{});
      return net;
    } catch (err) {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(e.request);
      if (cached) return cached;
      if (e.request.mode === "navigate") return cache.match("./index.html");
      throw err;
    }
  })());
});
