const CACHE_NAME = 'lk-co-maths-v2-papers';
const APP_FILES = [
  './',
  './index.html',
  './lessons.html',
  './past-papers.html',
  './paper-question.html',
  './past-papers.js',
  './paper-question.js',
  './pure.html',
  './applied.html',
  './lesson.html',
  './practice.html',
  './tutor.html',
  './style.css',
  './script.js',
  './site-language.js',
  './pwa.js',
  './manifest.webmanifest',
  './images/logo.png',
  './images/app-icon-180.png',
  './images/app-icon-192.png',
  './images/app-icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
      return response;
    }).catch(async () => {
      const cached = await caches.match(request, { ignoreSearch: true });
      return cached || caches.match('./index.html');
    }));
    return;
  }

  event.respondWith(caches.match(request).then((cached) => cached || fetch(request).then((response) => {
    const copy = response.clone();
    caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
    return response;
  })));
});

