const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
    '/',
    '/offline',
    '/detail',
    '/styles.min.css',
    '/index.min.js',
    '/logo.svg',
    '/scifi.svg',
    '/arrowblue.svg',
    '/arrowpink.svg',
    'afdeling.jpg',
    'plattegrond.jpg',
    '/finish.svg',
    '/kast.svg',
    '/search.svg',
    '/sprookje.svg',
    '/strip.svg',
    '/thriller.svg',
    '/verhalenbundel.svg',
    '/dieren.svg'
];

self.addEventListener('install', (event) => {
    console.log('installing service workers', event);
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            console.log(cache.addAll(urlsToCache));
            return cache.addAll(urlsToCache);
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    console.log('activation service worker', event);
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('service worker is clearing old cache');
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request)
        .then(res => {
            const resClone = res.clone();
            caches
                .open(CACHE_NAME)
                .then(cache => {
                    cache.put(event.request.url, resClone);
                })
            return res;
        })
        // .catch(err => caches.match(event.request).then(res => res))
        .catch(err => {
            return caches.match(event.request.url).then(res => {
                console.log(res)
                if (res) {
                    return res
                } else {
                    return caches.open(CACHE_NAME).then(cache => {
                        // console.log(cache)
                        return cache.match('/offline').then(response => {
                            return response
                        })
                    })
                }
            })

        })
    )
});