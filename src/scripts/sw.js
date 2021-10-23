import 'regenerator-runtime';
import cacheHelper from './common/cache-helper';

const { assets } = global.serviceWorkerOption;
const { cachingAppShell, deleteOldCache, revalidateCache } = cacheHelper('restaurant-app-v1');

self.addEventListener('install', (e) => {
  e.waitUntil(cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(deleteOldCache());
});

self.addEventListener('fetch', (e) => {
  e.respondWith(revalidateCache(e.request));
});
