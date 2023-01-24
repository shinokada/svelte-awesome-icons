// Change this to your repository name
var GHPATH = '/svelte-awesome-icons';

// Choose a different app prefix name
var APP_PREFIX = 'gppwa_';

// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_00';

// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `//cdn.jsdelivr.net/npm/docsify/lib/themes/vue.css`,
  // `${GHPATH}/js/app.js`
]