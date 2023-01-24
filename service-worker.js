// Change this to your repository name
const GHPATH = '/svelte-awesome-icons';

// Choose a different app prefix name
const APP_PREFIX = 'svelte_awesome_icons_';

// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
const VERSION = 'version_04';

// The files to make available for offline use. make sure to add 
// others to this list
const URLS = [
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  '//cdn.jsdelivr.net/npm/docsify/lib/themes/vue.css',
  '//cdn.jsdelivr.net/npm/docsify@4'
  // `${GHPATH}/js/app.js`
]