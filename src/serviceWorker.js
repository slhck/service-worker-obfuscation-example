/// <reference lib="webworker" />
// service-worker.js

const CACHE_NAME = "my-cache-v1";
const urlsToCache = ["/", "/index.html", "/main.js"];

// Install event - cache the app shell
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache opened");
      return cache.addAll(urlsToCache);
    })
  );

  // check if window is available
  if (self.window) {
    console.log("self.Window is available");
  } else {
    console.log("self.Window is not available");
  }

  if (window) {
    console.log("Window is available");
  } else {
    console.log("Window is not available");
  }
});

// Activate event - clean up old caches if needed
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - handle requests from the cache or the network
self.addEventListener("fetch", (event) => {
  // Respond from the cache if available, otherwise fetch from the network
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log("Cache hit:", event.request.url);
        return response;
      }

      console.log("Cache miss:", event.request.url);
      return fetch(event.request);
    })
  );
});
