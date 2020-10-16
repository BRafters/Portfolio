const CACHE_NAME = 'brpcache';

// We want to pass in an array of different strings
// Each string is going to be a reference to a certain asset or resource we want to cache

const assets = [
    '/',
    '/index.html',
    '/contactme.html',
    '/myresume.html',
    '/myworks.html',

    '/js/app.js',

    '/css/index_styles.css',
    '/css/static.css',
    '/css/myWorksStyles.css',
    '/css/contactstyles.css',
    '/css/myresumestyles.css',

    '/content/BrennanRaftersResume2019.pdf',

    '/images/IndexImages/capebreton.jpg',
    '/images/IndexImages/IMG_20180110_202151_217.jpg',
    '/images/ImagesForWorkExperience/lake_shore_mountains_enhanced.jpg',
    '/images/ImagesForWorkExperience/mountain_forest_dark_enhanced.jpg',
    '/images/ImagesForWorkExperience/mountain_lake_forest_enhancedAgain.jpg',
    '/images/arrow_drop_down_circle-24px.svg'
]

// installing the service worker
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then( cache => {
                console.log("Caching shell assets.");
                cache.addAll(assets);
                console.log("Complete.");
        })
    );
});

// Activating the service worker
self.addEventListener('activate', e => {
    console.log("Service worker activated.");
});

// Fetching things from the cache
self.addEventListener('fetch', e => {
    console.log("Fetching data.");
    e.respondWith(
        caches.match(e.request)
            .then(cacheRes => {
                return cacheRes || fetch(e.request)
            })
    );
});