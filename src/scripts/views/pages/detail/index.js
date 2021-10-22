import restaurantRepository from '../../../repositories/restaurant-repository';
import urlParser from '../../../handler/url-parser';

const { restaurantDetail } = restaurantRepository;
const { parseActiveUrlWithoutCombiner } = urlParser();

const detail = function detail() {
  const render = async function render() {
    const container = document.createElement('div');
    container.classList.add('w-100', 'h-100', 'bcp', 'fcm');

    const detailContainer = document.createElement('div');
    detailContainer.classList.add('detail-container');
    container.appendChild(detailContainer);

    const foodDetail = document.createElement('product-detail');
    foodDetail.setLoading();
    detailContainer.appendChild(foodDetail);

    const foodTitle = document.createElement('h2');
    foodTitle.classList.add('detail-sub-title');
    detailContainer.appendChild(foodTitle);

    const productFood = document.createElement('product-menus');
    detailContainer.appendChild(productFood);

    const drinkTitle = document.createElement('h2');
    drinkTitle.classList.add('detail-sub-title');
    detailContainer.appendChild(drinkTitle);

    const productDrink = document.createElement('product-menus');
    detailContainer.appendChild(productDrink);

    const reviewTitle = document.createElement('h2');
    reviewTitle.classList.add('detail-sub-title');
    detailContainer.appendChild(reviewTitle);

    const productReviews = document.createElement('product-reviews');
    detailContainer.appendChild(productReviews);

    const url = parseActiveUrlWithoutCombiner();

    restaurantDetail(url.id)
      .then((data) => {
        const { menus, customerReviews } = data;

        foodDetail.data = data;

        foodTitle.textContent = 'Foods';
        productFood.data = menus.foods;

        drinkTitle.textContent = 'Drinks';
        productDrink.data = menus.drinks;

        reviewTitle.textContent = 'Reviews';
        productReviews.data = customerReviews;
      })
      .catch((e) => {
        foodDetail.setError(e.message);
      });

    return container;
  };

  return render;
};

export default detail;
