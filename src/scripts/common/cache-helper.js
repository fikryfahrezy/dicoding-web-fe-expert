/**
 * @param {string} cacheName
 */
const cacheHelper = function cacheHelper(cacheName) {
  /**
   * @param {string} cName
   * @returns {Promise<Cache>}
   */
  const openCache = async function openCache(cName) {
    return caches.open(cName);
  };

  /**
   * @param {RequestInfo} request
   * @returns {Promise<void>}
   */
  const addCache = async function addCache(request) {
    const cache = await openCache(cacheName);
    cache.add(request);
  };

  /**
   * @param {RequestInfo} request
   * @returns {Promise<Response>}
   */
  const fetchRequest = async function fetchRequest(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }

    await addCache(request);
    return response;
  };

  /**
   * @param {RequestInfo[]} requests
   * @returns {Promise<void>}
   */
  const cachingAppShell = async function cachingAppShell(requests) {
    const cache = await openCache(cacheName);
    cache.addAll(requests);
  };

  /**
   * @returns {Promise<void>>}
   */
  const deleteOldCache = async function deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((cName) => cName !== cacheName)
      .map((cName) => caches.delete(cName));
  };

  /**
   * @param {RequestInfo} request
   * @returns {Promise<Response>}
   */
  const revalidateCache = async function revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      return response;
    }

    return fetchRequest(request);
  };

  return {
    cachingAppShell,
    deleteOldCache,
    revalidateCache,
  };
};

export default cacheHelper;
