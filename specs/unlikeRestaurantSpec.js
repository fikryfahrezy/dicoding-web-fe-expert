/* eslint-disable */
import favoriteRepository from '../src/scripts/repositories/favorite-repository';

describe('Unfavoriting A Restaurant', () => {
  const data = {
    id: '1',
    name: 'name',
    description: 'description',
    pictureId: 'pictureid',
    city: 'city',
    rating: 4,
    address: 'address',
  };

  it('should be able to unfavorite the restaurant', async () => {
    await favoriteRepository.addRestaurant(data);
    await favoriteRepository.deleteRestaurant(data.id);

    expect(await favoriteRepository.getRestaurants()).toEqual([]);
  });

  it('should not throw error if the unfavorited restaurant is not in the list', async () => {
    await favoriteRepository.deleteRestaurant(data.id);

    expect(await favoriteRepository.getRestaurants()).toEqual([]);
  });
});
