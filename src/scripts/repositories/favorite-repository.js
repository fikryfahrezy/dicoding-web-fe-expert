import { keys, getMany, get, set, del } from 'idb-keyval';

const favoriteRepository = {
  /**
   * @return {Promise<import('./restaurant-repository').Restaurant[]>}
   */
  async getRestaurants() {
    const dataKeys = await keys();
    const data = await getMany(dataKeys);

    return data;
  },

  /**
   * @param {string} dataId
   * @return {Promise<import('./restaurant-repository').RestaurantDetail>}
   */
  async getRestaurant(dataId) {
    const data = await get(dataId);

    return data;
  },

  /**
   * @param {import('./restaurant-repository').RestaurantDetail} data
   * @return {Promise<void>}
   */
  async addRestaurant(data) {
    if (!data || !data.id) return;

    await set(data.id, data);
  },

  /**
   * @param {string} dataId
   * @return {Promise<void>}
   */
  async deleteRestaurant(dataId) {
    await del(dataId);
  },
};

export default favoriteRepository;
