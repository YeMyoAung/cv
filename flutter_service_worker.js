'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "16215ff7fb3572935202f5fed7bedc69",
"version.json": "290f1864031fc63db46643776458fa76",
"index.html": "7c05084860c1555023c525a6907271b4",
"/": "7c05084860c1555023c525a6907271b4",
"main.dart.js": "42f898c8d790401bcfa6eb8adac8a86e",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"README.md": "4c40389969d6991abea266b44ad91ed8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "98b2f48d884e24922acdcc36f39adcb0",
".git/ORIG_HEAD": "4203c242dd4e70a1274cc1db76a2dd99",
".git/config": "89792b8012ee24b8a4dac5e1e1f97343",
".git/objects/59/6d77f0f22cfcb283d78f0fde333c09a7a26642": "a9912e6d783c8e99e8e03da386ba35d3",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/04/1a9055b03ba29fe107a6e8589cce025fd64751": "b2a430a208016d4e02b42a7b2d5ded85",
".git/objects/32/9d4c4a20f212a873f69f4f3abb39e4028c2b77": "d4a4b53c8e1df983d0e333f6bbb5df89",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/96f73781c8e93ade289b1927c2f9ab3ac846f7": "c5eb4faac70f387e8791763af2e6dcf2",
".git/objects/51/968b437de1709847c73a29624d5074cbe9f974": "cdad67bff7473dc89c0f321c1bd5864e",
".git/objects/0e/785e170d7472f46a752875fda63a16a6d1b066": "00cf9a6684ec87791a28f0563e0f50d4",
".git/objects/02/007016cca1d31322e071fb87cd265ad634fe5d": "a9b94873bd405da58f45372fa9d6c7ac",
".git/objects/ac/a49e4f06d571782e69ffd941f80c5bea189caa": "d9449096af72d195032d0895168d785e",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/d41dc52da8d92fb653caeb01d07598c4d2a1f7": "8f2f59090b9e23cf22c60f381206d540",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/cc0458aa2d69d3a8b85adc5d9e1cbfad2b6174": "5cffd382f2b777ce390de2b88087adb1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/dd24eff1847427852a8a7a69f28d680f52555f": "9ddfa46814ae961235a9f42d3b51a611",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/61b502e0203c595be96484538b84f85b91f8c4": "999d4f5e59f7520874f283948a1304fa",
".git/objects/cf/92274099e15da6ffebbc3a63400a57968e55b3": "e87c91e95a1860315f6a92bcd74819de",
".git/objects/fb/f8c952fa67118f513a326b6b9dd47baa94ad13": "18bba7355b5ba71d0af75adaf35958fb",
".git/objects/ed/94ec16b57fdad44576232b6bdf8088d92d67eb": "2091c5c25835a19912602b9fd4291c6f",
".git/objects/18/373ed869eab23f1942e47bb383a679a81172ce": "43349f99f0fb00dab016d0577a2eb79d",
".git/objects/29/66c3b7cc065e47dc458afce7a3e1ff944691e3": "6f824da44b8f61d7d0490490b62a21b7",
".git/objects/7c/39b34405207141fb9d29063c6b3811a654b768": "690e94a29e39f23089a03ef91d372679",
".git/objects/7c/e2dd0f2aeb5c3724e612b43c32db5d346a1520": "79a65cb195cf9a2a57cfed8e9c8db7f8",
".git/objects/45/09ba24bea407b8f8b14909592f20045b419e62": "7fc54e586be29c22a88b0434d501dca0",
".git/objects/74/f547713dc502efeb81788c68e06890380ddc94": "711fe6c7dda583dabbcee4a023cbc0ba",
".git/objects/74/8c726cf10d65ea1481c531dd506a539487d06d": "e9ab359117b5a81adcf3e15e7042aad0",
".git/objects/1a/b381e822ece37571b64a79d8bc13251fc9888a": "e1441cee9575d27b332ab0a6da72371f",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/22e6d756d9705aa566813fa891531de46724a1": "bdd45b7ed91c5140f9adc97b8ec7e456",
".git/objects/10/33c54b6de2820b403b5ce8d5b3748be0aacb49": "90dd45d1c750af44fb6388c06dc85eb2",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2a/24080819ab4e2349e07031c2cd138296f9e784": "48d747896a311ae3d315b65d50388042",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6b/1f83707f015ea37ff79635ff22a6372890e8ca": "2b0bab0ff463c552b56025888ada1d2d",
".git/objects/00/bd3d7607eab1a10915033a37c77754b5ad55aa": "73f48ca9a73d4be8e56c5e61681c8de1",
".git/objects/5d/5fc1cb77644de020bf9dad5ac0f578a760f95f": "a9d4d8c88a9e9d726214eaeec3d0ca34",
".git/objects/65/0700871f4e6ab3f2b1a679737187d8675b3a2e": "ce73409577f7acb7f8ff3d111273e516",
".git/objects/62/92b2891f26513994a6b3522ed160c5028fdd66": "db3e575002164d8c3009679fbc4f7b01",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/5e/9b4995116c59535c396540c686e7e03c9ea99c": "8d4d2c6c276fe1144dc5e6b62bfd88c2",
".git/objects/5e/80bc2eaaa516d53d23afb3b3cf6fd4d6d23bc3": "2776177b1d1ccd71217d4e0cd3d48896",
".git/objects/08/04e0e6a4a28487e30218d096d78695cfc10bb8": "8bc73009ec8d9a1bc6432e143aac8860",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/97/a4aa4a3f86083abee82eab7dafb4e1df728881": "678b73af3159285494cabd8bdb632cea",
".git/objects/64/ae35c1fd6331e3f861dbc053f7d48ac61d3f7e": "4fbce5d6669ecc05b5a4727739031f64",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/c39985241720c39beaadf1024ed4c95f938b99": "094713d7d3aace2c8a634c816b503768",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dd/0b5995410acdcc294cf1dd55e6b6fd4a694c41": "77ee9e93e12ac55994bc18b502fa7fae",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/28d1ef17bb95c2d375c1c63b7ba08a6018da63": "a2b89f7c5888bf0bbf687844d9f82075",
".git/objects/de/622e2e45f880a8ef3d19f95139483ace9fa268": "7d46ae8077173d811d6f3a552e7e006a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/73b796335cad6ce07a7661f43d3713e6a49e25": "ce22a85a39a0c405ad17340e1fbee4ee",
".git/objects/c2/fa91751b3b57008868df87e198f3fe0e52fe99": "6c5d2a9621d6304758160b3e314d0b21",
".git/objects/f6/6bce06155af7c761bd5b9521faa38e3c8a16c3": "be6e36fe7f10ecbc7f454fab9bddc396",
".git/objects/f1/0026be498565af75c0f5ea84725ec013a30ca7": "a9caf125356b78311a0164c6a5ed9f77",
".git/objects/ce/a9853167ebc8df27b2409c7081d99888fc6275": "64506dd2acc339eb0f3cf93b01fc10fa",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/8d/9116a1c8da13ceccb46fe8d3f60e5922c6fbeb": "d66de4b6c399b881a57fde2f2bc3f408",
".git/objects/1c/1a987962325c915f0921b4fd7e29024550a8fd": "17b8fe87a1b623c81a3d66110cee3f62",
".git/objects/49/58cdcac2639f214e5124819d5f5a1e95ffe798": "29921c569cd2aeea4fd686baecc75348",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/47/9266f986e2088f9e53e1e8b6bfa1a322b894da": "9e7b614b01852e6a2624ec96b2cc4127",
".git/objects/8b/dbeffa7c671d7237e86e89c144c8eaa3e2c741": "28620df07057ad07b3b438a59dc29681",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b39f3c781f1f50bd9dc67dfe1dfe0482",
".git/logs/refs/heads/main": "af663897ade455757de016895dac7343",
".git/logs/refs/remotes/origin/main": "dea3d6ced5f42dfc55a49cd52cd17912",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "92785d1a865f243bc4adc299e13acffd",
".git/refs/remotes/origin/main": "4203c242dd4e70a1274cc1db76a2dd99",
".git/index": "c319f3a2f71baa773230854aebb48f07",
".git/COMMIT_EDITMSG": "c11f63068af70ab003e3565a3c23ba60",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/NOTICES": "2864be78630fe7a1d1888661304e89c4",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "a1fee2517bf598633e2f67fcf3e26c94",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"assets/fonts/MaterialIcons-Regular.otf": "4eea4765af681739531a8fb9bb42582c",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
