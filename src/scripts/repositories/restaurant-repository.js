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
 * Restaurant Category type definition
 * @typedef {Object} Category
 * @property {string} name
 *
 * Restaurant Food type definition
 * @typedef {Object} Food
 * @property {string} name
 *
 * Restaurant Drink type definition
 * @typedef {Object} Drink
 * @property {string} name
 *
 * Restaurant Menu type definition
 * @typedef {Object} Menu
 * @property {Food[]} foods
 * @property {Drink[]} drinks
 *
 * Costumer Review type definition
 * @typedef {Object} CustomerReview
 * @property {string} name
 * @property {string} review
 * @property {string} date
 *
 * Restaurant Address type definition
 * @typedef {Object} RestaurantAddress
 * @property {string} address
 *
 * Restaurant Relation type definition
 * @typedef {Object} RestaurantRelation
 * @property {string} address
 * @property {Category[]} categories
 * @property {Menu} menus
 * @property {CustomerReview[]} customerReviews
 *
 * Restaurant Detail type definition
 * @typedef {Restaurant & RestaurantRelation} RestaurantDetail
 *
 */

const restaurantUrl = process.env.RESTAURANT_API;

const restaurantRepository = {
  /**
   * @return {Promise<Restaurant[]>}
   */
  async restaurantList() {
    const response = await fetch(`${restaurantUrl}/list`);
    const responseJson = await response.json();

    return responseJson.restaurants;
  },

  /**
   * @param {string} id
   * @return {Promise<RestaurantDetail>}
   */
  async restaurantDetail(id) {
    const response = await fetch(`${restaurantUrl}/detail/${id}`);
    const responseJson = await response.json();

    return responseJson.restaurant;
  },

  /**
   * @param {string} q
   * @return {Promise<Restaurant[]>}
   */
  async restaurantSearch(q) {
    const response = await fetch(`${restaurantUrl}/search?q=${q}`);
    const responseJson = await response.json();

    return responseJson.restaurants;
  },
};

export default restaurantRepository;
