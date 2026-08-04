const CACHE_STATIC_NAME = 'static';
const CACHE_DYNAMIC_NAME = 'dynamic';

self.addEventListener('install', (event) => {
  console.log('skip waiting');
  self.skipWaiting();

  console.log('[Service Worker] Installing Service Worker ...', event);
  const precache = async () => {
    const cache = await caches.open(CACHE_STATIC_NAME);

    console.log('Service Worker Precaching App Shell');
    return cache.addAll([
      '/',
      '/index.html',
      '/src/css/app.css',
      '/src/css/main.css',
      '/src/js/main.js',
      '/src/js/material.min.js',
      'https://fonts.googleapis.com/css?family=Roboto:400,700',
      'https://fonts.googleapis.com/icon?family=Material+Icons',
      'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css',
    ]);
  };

  // waitUntil resolve Promise instances
  // precache returns a Promise which is created from cache.addAll
  // installation will be considered failed if the Promise can't be resolved
  event.waitUntil(precache());
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating Service Worker ....', event);
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            console.log('[Service Worker] Removing old cache', key);
            return caches.delete(key);
          }
        }),
      );
    }),
  );
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // console.log('[Service Worker] Fetching something ....', event);
  event.respondWith(
    (async () => {
      // event.respondWith interacts with a response or a Promise instance
      try {
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          // use files from caches
          return cachedResponse;
        } else {
          // dynamic caching
          const response = await fetch(event.request);
          const cache = await caches.open(CACHE_DYNAMIC_NAME);
          // response.clone is used as response can only be used once by it's nature
          // without cloning the response, the user can't get the response and can cause error
          cache.put(event.request.url, response.clone());
          return response;
        }
      } catch (err) {
        console.log(err);
      }
    })(),
  );
});
