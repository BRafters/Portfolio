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
    '/css/mobilestylesforworks.css',
    '/css/myresumemobilestyles.css',
    '/css/mobilestylesforindex.css',

    '/content/BrennanRaftersResume2019.pdf',

    '/images/IndexImages/capebreton.jpg',
    '/images/IndexImages/IMG_20180110_202151_217.jpg',
    '/images/ImagesForWorkExperience/lake_shore_mountains_enhanced.jpg',
    '/images/ImagesForWorkExperience/mountain_forest_dark_enhanced.jpg',
    '/images/ImagesForWorkExperience/mountain_lake_forest_enhancedAgain.jpg',
    '/images/ImagesForWorkExperience/AndresNeel.jpg',
    '/images/ImagesForWorkExperience/Blackjack.png',
    '/images/ImagesForWorkExperience/Blogging.png',
    '/images/ImagesForWorkExperience/Buses.png',
    '/images/ImagesForWorkExperience/calculator.png',
    '/images/ImagesForWorkExperience/Capston.png',
    '/images/ImagesForWorkExperience/City.jpg',
    '/images/ImagesForWorkExperience/ClayBanks.jpg',
    '/images/ImagesForWorkExperience/forest_trees_fog.jpg',
    '/images/ImagesForWorkExperience/jeremyBishop.jpg',
    '/images/ImagesForWorkExperience/leaves_plant_green_118405_3000x4498.jpg',
    '/images/ImagesForWorkExperience/leaves.jpg',
    '/images/ImagesForWorkExperience/ListFragment.png',
    '/images/ImagesForWorkExperience/map_weather.jpg',
    '/images/ImagesForWorkExperience/Maze.png',
    '/images/ImagesForWorkExperience/Maze.png',
    '/images/ImagesForWorkExperience/Maze.png',
    '/images/ImagesForWorkExperience/Maze.png',
    '/images/ImagesForWorkExperience/Maze.png',
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