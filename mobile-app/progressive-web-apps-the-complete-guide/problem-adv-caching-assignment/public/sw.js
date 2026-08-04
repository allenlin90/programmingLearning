var CACHE_STATIC_NAME = 'static-v2';
var CACHE_DYNAMIC_NAME = 'dynamic-v1';
const STATIC_FILES = [
  '/',
  '/index.html',
  '/src/css/app.css',
  '/src/css/main.css',
  '/src/js/main.js',
  '/src/js/material.min.js',
  'https://fonts.googleapis.com/css?family=Roboto:400,700',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css',
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then(function (cache) {
      cache.addAll(STATIC_FILES);
    }),
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (key !== CACHE_STATIC_NAME) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});

function isInArray(string, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === string) return true;
    return false;
  }
}

// Dynamic caching for Cache, then network strategy
self.addEventListener('fetch', (event) => {
  if (event.request.url.indexOf('https://httpbin.org/ip')) {
    event.respondWith(
      caches.open(CACHE_DYNAMIC_NAME).then((cache) => {
        return fetch(event.request).then((res) => {
          cache.put(event.request.url, res.clone());
          return res;
        });
      }),
    );
  } else if (isInArray(event.request.url, STATIC_FILES)) {
    event.respondWith(caches.match(event.request));
  } else {
    // cache, network fallback strategy
    event.respondWith(
      caches.match(event.request).then(function (response) {
        if (response) {
          return response;
        } else {
          return fetch(event.request)
            .then(function (res) {
              return caches.open(CACHE_DYNAMIC_NAME).then(function (cache) {
                cache.put(event.request.url, res.clone());
                return res;
              });
            })
            .catch(function (err) {});
        }
      }),
    );
  }
});

// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       if (response) {
//         return response;
//       } else {
//         return fetch(event.request)
//           .then(function (res) {
//             return caches.open(CACHE_DYNAMIC_NAME).then(function (cache) {
//               cache.put(event.request.url, res.clone());
//               return res;
//             });
//           })
//           .catch(function (err) {});
//       }
//     }),
//   );
// });

// network only
// self.addEventListener('fetch', function (event) {
//   event.respondWith(fetch(event.request));
// });

// cache only
// self.addEventListener('fetch', function (event) {
//   event.respondWith(caches.match(event.request));
// });

// Network, cache fallback strategy
// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//     fetch(event.request)
//       .then((res) => {
//         return caches.open(CACHE_DYNAMIC_NAME).then((cache) => {
//           cache.put(event.request.url, res.clone());
//           return res;
//         });
//       })
//       .catch((err) => {
//         return caches.match(event.request);
//       }),
//   );
// });
