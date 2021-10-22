/**
 * Splitted Url type definition
 * @typedef {Object} SplitedUrl
 * @property {string} resource
 * @property {string} id
 * @property {string} verb
 */

const urlParser = function urlParser() {
  /**
   * @param {string} url
   * @returns {SplitedUrl}
   */
  const urlSplitter = function urlSplitter(url) {
    const urls = url.split('/');
    const splitted = {
      resource: urls[1] || null,
      id: urls[2] || null,
      verb: urls[3] || null,
    };

    return splitted;
  };

  /**
   * @param {SplitedUrl} splitedUrl
   */
  const urlCombiner = function urlCombiner(splitedUrl) {
    return `${splitedUrl.resource ? `/${splitedUrl.resource}` : '/'}${splitedUrl.id ? '/:id' : ''}${
      splitedUrl.verb ? `/${splitedUrl.verb}` : ''
    }`;
  };

  /**
   * @return {SplitedUrl}
   */
  const parseActiveUrlWithCombiner = function parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = urlSplitter(url);
    const combinedUrl = urlCombiner(splitedUrl);

    return combinedUrl;
  };

  /**
   * @return {SplitedUrl}
   */
  const parseActiveUrlWithoutCombiner = function parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = urlSplitter(url);

    return splitedUrl;
  };

  return {
    parseActiveUrlWithCombiner,
    parseActiveUrlWithoutCombiner,
  };
};

export default urlParser;
