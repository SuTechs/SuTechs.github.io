'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c71119a08d1cf28e2c64ae21970657c9",
"assets/assets/fonts/Poppins-Bold.ttf": "c23534acbeddbaadfd0ab2d2bbfdfc84",
"assets/assets/fonts/Poppins-Medium.ttf": "ba95810b56f476990ca71d15139d5111",
"assets/assets/fonts/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"assets/assets/fonts/Poppins-SemiBold.ttf": "342ba3d8ac29ac8c38d7cef8efbf2dc9",
"assets/assets/images/1.png": "f08ad54d8eee4ed7160c3cc5ef319715",
"assets/assets/images/2.png": "05aa3df630a42a173fa2fbd9b5f8c5a1",
"assets/assets/images/3.png": "2e85648147a9b27225081e3c33effab2",
"assets/FontManifest.json": "40d9b4588f59728fe7d5ee22713b132d",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "48506d11a01ec058b66aa7371899cc42",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c9ecfe30653358c96427bfdae81147fd",
"/": "c9ecfe30653358c96427bfdae81147fd",
"main.dart.js": "e5005c24477fc1766726bcb2bf1aae96",
"manifest.json": "33eb3ba40824275281a61669999f03ee"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
