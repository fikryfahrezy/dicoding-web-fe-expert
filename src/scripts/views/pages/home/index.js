import restaurantRepository from '../../../repositories/restaurant-repository';

const { restaurantList } = restaurantRepository;

const home = function home() {
  /**
   * @returns {Promise<HTMLDivElement>}
   */
  const render = async function render() {
    const container = document.createElement('div');
    container.classList.add('w-100');

    const jumbotron = document.createElement('jumbotron-element');
    container.appendChild(jumbotron);

    const mainContent = document.createElement('div');
    mainContent.classList.add('bcp');
    mainContent.id = 'main';
    container.appendChild(mainContent);

    const subTitle = document.createElement('h2');
    subTitle.classList.add('s2-title');
    subTitle.textContent = 'Explore Restaurant';
    mainContent.appendChild(subTitle);

    const restaurantCards = document.createElement('restaurant-cards');
    restaurantCards.setLoading();
    mainContent.appendChild(restaurantCards);

    const newsletterForm = document.createElement('newsletter-form');
    mainContent.appendChild(newsletterForm);

    restaurantList()
      .then((data) => {
        restaurantCards.data = data;
      })
      .catch((e) => {
        restaurantCards.setError(e.message);
      });

    return container;
  };

  return render;
};

export default home;
