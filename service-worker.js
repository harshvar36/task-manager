const CACHE_NAME = 'web-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/admin.html',
  '/user.html',
  '/css/admin.css',
  '/css/login.css',
  '/css/user.css',
  '/js/admin.js',
  '/js/auth.js',
  '/js/user.js',
  '/js/install-prompt.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
