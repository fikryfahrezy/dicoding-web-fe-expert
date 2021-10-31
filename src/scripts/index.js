/**
 * Restaurant type definition
 * @typedef {Object} Restaurant
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} pictureId
 * @property {string} city
 * @property {number} rating
 *
 * Restaurants type definition
 * @typedef {Restaurant[]} Restaurants
 */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './views/components/stc';
import './views/components/nav';
import './views/components/jumbotron';
import './views/components/restaurant-cards';
import './views/components/newsletter-form';
import './views/components/product-detail';
import './views/components/product-menus';
import './views/components/review-form';
import './views/components/product-reviews';
import './views/components/feedback';
import './views/components/footer';
import swRuntime from 'serviceworker-webpack-plugin/lib/runtime';
import swRegister from './common/sw-register';
import app from './views/app';
import routes from './handler/routes';

const { renderPage } = app(document.getElementById('root'), routes);

window.addEventListener('hashchange', () => {
  renderPage();
});

window.addEventListener('load', () => {
  if (process.env.NODE_ENV === 'production') {
    swRegister(swRuntime);
  }

  renderPage();
});
