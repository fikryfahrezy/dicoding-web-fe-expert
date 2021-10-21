/**
 * @typedef {import('serviceworker-webpack-plugin/lib/runtime').ServiceWorkerWebpackPluginRuntime} R
 */

/**
 * @param {R} runtime
 */
const swRegister = async function swRegister(runtime) {
  if ('serviceWorker' in navigator) {
    await runtime.register();
    return;
  }
  console.log('Service Worker not supported in this browser');
};

export default swRegister;
