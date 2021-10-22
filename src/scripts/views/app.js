/**
 * Route type definition
 * @typedef {Object.<string, () => void} Route
 *
 * Routes type definition
 * @typedef {Route[]} Routes
 */

import urlParser from '../handler/url-parser';

const { parseActiveUrlWithCombiner } = urlParser();

/**
 * @param {HTMLElement} root
 * @param {Routes} routes
 * @param {() => void} [init]
 */
const app = function app(root, routes, init) {
  if (init) init();

  /**
   * @return {Promise<void>}
   */
  const renderPage = async function renderPage() {
    const url = parseActiveUrlWithCombiner();
    const page = routes[url];

    while (root.firstChild) {
      root.removeChild(root.lastChild);
    }

    const render = await page()();

    root.appendChild(render);
  };

  return {
    renderPage,
  };
};

export default app;
