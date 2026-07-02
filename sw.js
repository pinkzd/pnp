const CACHE_NAME = "pinknpunk-v1";

const APP_SHELL = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",
    "./icons/pwa-192.png",
    "./icons/pwa-512.png",
    "./icons/apple-touch-icon.png",
    "./Apps/Ainda te amo/Index.html",
    "./Apps/Cinema/index.html",
    "./Apps/Dates/index.html",
    "./Apps/Jardim/index.html",
    "./Apps/Memorias/index.html",
    "./Apps/Nosso tempo/index.html",
    "./Apps/Playlist/index.html",
    "./Apps/Ursinho/index.html"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
    );
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(
            keys
                .filter((key) => key !== CACHE_NAME)
                .map((key) => caches.delete(key))
        ))
    );
    self.clients.claim();
});

self.addEventListener("fetch", (event) => {
    if (event.request.method !== "GET") {
        return;
    }

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(event.request).then((networkResponse) => {
                const responseClone = networkResponse.clone();

                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseClone);
                });

                return networkResponse;
            }).catch(() => caches.match("./index.html"));
        })
    );
});
