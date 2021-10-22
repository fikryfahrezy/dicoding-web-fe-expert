import favoriteRepository from '../../../repositories/favorite-repository';

const { getRestaurants } = favoriteRepository;

const favorite = function favorite() {
  let stateData = [];

  /**
   * @returns {Promise<void>}
   */
  const loadData = async function loadData() {
    const data = await getRestaurants();
    stateData = data;
  };

  /**
   * @returns {Promise<HTMLDivElement>}
   */
  const render = async function render() {
    await loadData();

    const container = document.createElement('div');
    container.classList.add('w-100', 'h-100', 'bcp');
    container.id = 'main';

    const subTitle = document.createElement('h2');
    subTitle.classList.add('s2-title');
    subTitle.textContent = 'Favorite Restaurants';
    container.appendChild(subTitle);

    const restaurantCards = document.createElement('restaurant-cards');
    restaurantCards.data = stateData;
    container.appendChild(restaurantCards);

    return container;
  };

  return render;
};

export default favorite;
