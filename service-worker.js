const CACHE_NAME = "sdac-agenda-shell-v3";

const APP_SHELL = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.webmanifest",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png"
];

const NETWORK_FIRST_PATHS = new Set([
  "/",
  "/index.html",
  "/app.js",
  "/account.js",
  "/style.css",
  "/manifest.webmanifest"
]);

const NETWORK_FIRST_EXTENSIONS = [".js", ".css", ".html", ".webmanifest"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== "GET") return;
  if (url.origin !== self.location.origin) return;

  // Non toccare API o Identity/Netlify interni
  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/.netlify/")) {
    return;
  }

  const isNavigate = request.mode === "navigate";
  const isNetworkFirstAsset =
    NETWORK_FIRST_PATHS.has(url.pathname) ||
    NETWORK_FIRST_EXTENSIONS.some((ext) => url.pathname.endsWith(ext));

  if (isNavigate || isNetworkFirstAsset) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, copy);
              if (isNavigate) cache.put("./index.html", response.clone());
            });
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          return cached || caches.match("./index.html");
        })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const networkFetch = fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);

      return cached || networkFetch;
    })
  );
});
