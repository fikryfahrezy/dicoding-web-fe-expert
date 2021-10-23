import favoriteRepository from '../../../repositories/favorite-repository';

const { getRestaurants } = favoriteRepository;

const favorite = function favorite() {
  /**
   * @returns {Promise<HTMLDivElement>}
   */
  const render = async function render() {
    const container = document.createElement('div');
    container.classList.add('w-100', 'h-100', 'bcp');
    container.id = 'main';

    const subTitle = document.createElement('h2');
    subTitle.classList.add('s2-title');
    subTitle.textContent = 'Favorite Restaurants';
    container.appendChild(subTitle);

    const restaurantCards = document.createElement('restaurant-cards');
    restaurantCards.setLoading();
    container.appendChild(restaurantCards);

    getRestaurants()
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

export default favorite;
