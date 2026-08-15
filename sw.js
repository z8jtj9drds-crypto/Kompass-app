const CACHE_NAME = "kompass-v3";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .catch((err) => console.error("SW install cache error:", err))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Strategie: alles cache-first für Offline-Fähigkeit, aber niemals eine
// "undefined"-Antwort liefern - das würde der Browser als Ladefehler werten
// und z.B. ein CDN-Skript (React/Recharts/Babel) könnte dadurch fehlschlagen.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          // Nur "echte" erfolgreiche Antworten cachen. CDN-Ressourcen von
          // unpkg.com sind same-status opaque/cors und liefern meist 200 -
          // die werden normal gecacht.
          if (response && (response.status === 200 || response.type === "opaque")) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
          }
          return response;
        })
        .catch(() => {
          // Nichts im Cache und Netzwerk fehlgeschlagen: den Request einfach
          // normal durchlassen, statt "undefined" zurückzugeben.
          return fetch(event.request);
        });
    })
  );
});
