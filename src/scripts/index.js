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
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import swRuntime from 'serviceworker-webpack-plugin/lib/runtime';
import swRegister from './common/sw-register';
import app from './views/app';
import routes from './handler/routes';

/**
 * @returns {void}
 */
const init = function init() {
  const navList = document.getElementById('nav-list');
  const navLinks = document.querySelectorAll('.nav-link');
  const closeBtn = document.getElementById('close-btn');
  const menuBtn = document.getElementById('menu-btn');

  /**
   * @returns {void}
   */
  const toggleMenu = function toggleMenu() {
    navList.classList.toggle('nav-show');
  };

  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
      toggleMenu();
    });
  });

  closeBtn.addEventListener('click', () => {
    toggleMenu();
  });

  menuBtn.addEventListener('click', () => {
    toggleMenu();
  });
};

const { renderPage } = app(document.body, routes, init);

window.addEventListener('hashchange', () => {
  renderPage();
});

window.addEventListener('load', () => {
  renderPage();
  swRegister(swRuntime);
});
