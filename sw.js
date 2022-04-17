const cacheName = 'pwa_v4';

const includeToCache = [
  '/',
  '/index.html',
  '/style.css',
  './App.js',
  './manifest.json',
  './sw.js',
  './img/prev-144.png',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', e =>
{
  console.log('Start the service worker and cache all of the app')
  e.waitUntil(caches.open(cacheName)
    .then(cache => { return cache.addAll(includeToCache); }));
  
  // отчистка кэша кроме нужной версии
  for (let index = 0; index < cacheName.replace('pwa_v', ''); index++)
  { 
    if(`pwa_v${index}` !== cacheName)
    e.waitUntil(caches.delete(`pwa_v${index}`))
  }
  
});
/* Serve cached content when offline */
self.addEventListener('fetch', e => 
{
  console.log('Serve cached content when offline')
  e.respondWith(caches.match(e.request)
    .then(response => { return response || fetch(e.request); }));
});
