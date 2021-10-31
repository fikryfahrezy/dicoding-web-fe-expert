/* eslint-disable */
import favoriteRepository from '../src/scripts/repositories/favorite-repository';

describe('Favoriting A Restaurant', () => {
  const data = {
    id: '1',
    name: 'name',
    description: 'description',
    pictureId: 'pictureid',
    city: 'city',
    rating: 4,
    address: 'address',
  };

  it('should be able to favorite the restaurant', async () => {
    await favoriteRepository.addRestaurant(data);
    const restaurant = await favoriteRepository.getRestaurant(data.id);

    expect(restaurant).toEqual(data);

    favoriteRepository.deleteRestaurant(data.id);
  });

  it('should not add a restaurant again when its already favorited', async () => {
    // Tambahkan restaurant dengan data yang sama ke daftar restaurant yang disukai
    await favoriteRepository.addRestaurant(data);
    await favoriteRepository.addRestaurant(data);
    // tidak ada film yang ganda
    expect(await favoriteRepository.getRestaurants()).toEqual([data]);

    favoriteRepository.deleteRestaurant(data.id);
  });

  it('should not add a restaurant when it has no id', async () => {
    const { id, ...rest } = data;
    await favoriteRepository.addRestaurant(rest);

    expect(await favoriteRepository.getRestaurants()).toEqual([]);
  });

  it('should not add a restaurant when it has no data', async () => {
    await favoriteRepository.addRestaurant(null);

    expect(await favoriteRepository.getRestaurants()).toEqual([]);
  });
});
