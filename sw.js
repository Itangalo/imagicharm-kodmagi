// Enkel service worker – gör appen installerbar och cachar skalet offline.
const CACHE = "imagicharm-v3";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./imagilib_reference.md",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  // Anropa aldrig API:t via cache.
  if (url.hostname.endsWith("openrouter.ai")) return;

  // Sidan (HTML) hämtas alltid från nätet först, så att fixar slår igenom.
  // Cachen används bara som reserv när man är offline.
  const isDocument = e.request.mode === "navigate" ||
    (e.request.destination === "document");

  if (isDocument) {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          if (res.ok && url.origin === location.origin) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, copy));
          }
          return res;
        })
        .catch(() => caches.match(e.request).then((c) => c || caches.match("./index.html")))
    );
    return;
  }

  // Övriga resurser: cache först, uppdatera i bakgrunden.
  e.respondWith(
    caches.match(e.request).then((cached) => {
      const network = fetch(e.request)
        .then((res) => {
          if (res.ok && url.origin === location.origin) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
