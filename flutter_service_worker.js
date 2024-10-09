'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"splash/img/dark-1x.png": "67830f327a9faa5d171cb0b5196c71b5",
"splash/img/light-2x.png": "fb8bf384b7e352616df29e82f9d007ca",
"splash/img/dark-4x.png": "d8bd71d9fc8aa209a6eff439494e8a52",
"splash/img/light-1x.png": "67830f327a9faa5d171cb0b5196c71b5",
"splash/img/dark-2x.png": "fb8bf384b7e352616df29e82f9d007ca",
"splash/img/light-4x.png": "d8bd71d9fc8aa209a6eff439494e8a52",
"splash/img/dark-3x.png": "9d195a7a47af88f505571bdd3aa60a28",
"splash/img/light-3x.png": "9d195a7a47af88f505571bdd3aa60a28",
"index.html": "f4ec474993383dcc8b81fd2c25888877",
"/": "f4ec474993383dcc8b81fd2c25888877",
"flutter_bootstrap.js": "045f9e6f2c8b119fe97751a702b8516e",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"favicon.png": "db85cd40b3119fde6dcfed7a34c9a656",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"icons/Icon-maskable-192.png": "db288759ae0a2e9baf1350f2c33bf783",
"icons/Icon-maskable-512.png": "a5a19d4b31f2d99472fc612ec45a8dd2",
"icons/Icon-512.png": "a5a19d4b31f2d99472fc612ec45a8dd2",
"icons/Icon-192.png": "db288759ae0a2e9baf1350f2c33bf783",
"assets/AssetManifest.bin": "7bb2debf6f51504eba2db274dba624e5",
"assets/FontManifest.json": "f0811f322b597a3bcc8e7434409bdbbf",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.json": "3852dd94fcc9bf4d56151cff059e6e05",
"assets/assets/images/user.jpg": "d774652309272105de945bbba6f7db05",
"assets/assets/images/ic_no_discount.png": "f4512f487c4bef4a920237699f6505a5",
"assets/assets/images/ic_but.png": "6f6398ea0fdf2fcb662275624bb67eb6",
"assets/assets/images/ic_rubika.png": "80c584b6c47d66f8c1b74e9010e2f8ad",
"assets/assets/images/ic_logo.png": "120188000ca65c1e87e543fac3a22917",
"assets/assets/images/zarinpal.png": "e19c0e2c2de2f11ae5fa9a7d052a425f",
"assets/assets/images/ic_type.png": "a5b3a37faca5efc1d7a2d702ba2e2650",
"assets/assets/images/emoji_sad.png": "d5e46ccc13d16f341f44651abe19e75d",
"assets/assets/images/ic_eita.png": "9b8616122ba1ef431eebc5adb00e9995",
"assets/assets/images/ic_logotype.png": "402e460b24ed1ea9e6b1487fc6a46e21",
"assets/assets/images/ic_bale.png": "541f982e8d1c5767d4eafabb3c01a519",
"assets/assets/images/emoji_love.png": "97b821994222d116d89477e07e8d824d",
"assets/assets/images/emoji_smile.png": "f10002853cea1807d90f8a83f7b1206d",
"assets/assets/images/bg_home.png": "20cf4e3d5cd37ef2c44eef626330cd0b",
"assets/assets/images/ic_driver_car.png": "622739b0d8b74bf80b6f355b693af9af",
"assets/assets/images/ic_parsian.png": "d226ae6c0f935a5807e2092261a87ad6",
"assets/assets/images/map.png": "c43f86a9dc2232a508ba84311b41f0c5",
"assets/assets/images/emoji_happy.png": "654dea917e21e6586a86f6a531a1122c",
"assets/assets/images/small_map.png": "990147a1702b1f69770109c4694e9b50",
"assets/assets/images/emoji_poker.png": "e634f725a66754ee2ddb1514bdfa7de4",
"assets/assets/images/bg_ticket.png": "4d47b12152b457cc4e5135bd59750548",
"assets/assets/images/ic_mellat.png": "0732a3e3b0fb5490fc6873cae77f853f",
"assets/assets/lottie/logomotion.json": "3194d4edc8e8bc660708b622d8a243dc",
"assets/assets/lottie/success_motion.json": "bb3aafb0c330c51202d099fd56436b8a",
"assets/assets/fonts/iransans.ttf": "550e81f9cd5c875d772e8a97e19bbef4",
"assets/assets/svg/ic_swich_account.svg": "8e199e307ab85157544dfda3d4281396",
"assets/assets/svg/ic_vertical_line.svg": "2d5d663c5ee681339d08c5d7a50530f7",
"assets/assets/svg/ic_car_seet.svg": "414fa8ce020bff2c6e6d82f80466f6f2",
"assets/assets/svg/ic_mycar.svg": "ef3f3767a77265d4456edee5f6c041b7",
"assets/assets/svg/ic_home.svg": "3a49e091a244cac78d0c4f4783074eb6",
"assets/assets/svg/ic_aboutus.svg": "d9e157b49b18d106927ac7c6d7ded6d3",
"assets/assets/svg/ic_support_drawer.svg": "d3dd9c7ec8dbf54b7e0b3d373f0263a7",
"assets/assets/svg/ic_logout.svg": "6ad1ee41edc79a5bd62057332c80f2e4",
"assets/assets/svg/ic_rules.svg": "2a32730f5ceb12e1111bf29b865e0d90",
"assets/assets/svg/ic_contactus.svg": "aa99695ef541a4ba8837bd861b74e81d",
"assets/assets/svg/ic_support.svg": "cccf9424068c2e1b7637c0ffb451d20d",
"assets/assets/svg/bg_support.svg": "2c3ecd12c5726e5d5a7110a44813384e",
"assets/assets/svg/ic_search.svg": "4cd190ff40b6ac96737b501ee1f395ad",
"assets/assets/svg/ic_profile.svg": "cc99299e74af8f998dacfd1497a92aca",
"assets/assets/svg/ic_credit.svg": "7a8475e72e875fb2532c0ff98a69c5b3",
"assets/assets/svg/ic_transaction.svg": "2fd75995ac5ad898b92430ba519ccb3d",
"assets/assets/svg/ic_history.svg": "f5b01eb8f716151f8ce1490ebda4e9d2",
"assets/assets/svg/ic_request.svg": "859556a6f2dfcde6f4419c8bb6bde5ef",
"assets/assets/svg/ic_sharetofriend.svg": "ea670739357304a6cd25eee4449d7cd8",
"assets/assets/svg/ic_discount.svg": "79c2a43707788397ab43b9a6f1299f08",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "ae06f5c4667de705c60a48c5415e4bf1",
"assets/AssetManifest.bin.json": "d0c46cab792e5fd6b879f59470fe2ca6",
"assets/NOTICES": "0f9fc1cc69229c1d5febc3e8ce5a48c9",
"main.dart.js": "0de916d149ed85c5401f9258880d537a",
"manifest.json": "4841c3f9c9fa5363678cc3af99fcd93c",
"version.json": "49f6702ec251fadd29bc20cc94944aa5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
