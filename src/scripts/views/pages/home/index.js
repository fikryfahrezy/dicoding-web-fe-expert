import data from '../../../../DATA.json';
import '../../components/stc';
import '../../components/nav';
import '../../components/jumbotron';
import '../../components/restaurant-cards';
import '../../components/newsletter-form';
import '../../components/footer';

const Home = {
  /**
   * @returns {HTMLDivElement}
   */
  render() {
    const container = document.createElement('div');
    container.classList.add('container');

    const stcNav = document.createElement('stc-nav');
    container.appendChild(stcNav);

    const navElement = document.createElement('nav-element');
    container.appendChild(navElement);

    const jumbotron = document.createElement('jumbotron-element');
    container.appendChild(jumbotron);

    const main = document.createElement('main');
    main.classList.add('main');
    main.id = 'main';
    container.appendChild(main);

    const subTitle = document.createElement('h2');
    subTitle.classList.add('s2-title');
    subTitle.textContent = 'Explore Restaurant';
    main.appendChild(subTitle);

    const restaurantCards = document.createElement('restaurant-cards');
    restaurantCards.data = data.restaurants;
    main.appendChild(restaurantCards);

    const newsletterForm = document.createElement('newsletter-form');
    main.appendChild(newsletterForm);

    const footerElement = document.createElement('footer-element');
    container.appendChild(footerElement);

    return container;
  },
};

export default Home;
