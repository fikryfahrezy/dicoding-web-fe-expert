/* eslint-disable */
const assert = require('assert');

Feature('Unfavoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('unfavoriting one restaurant', async ({ I }) => {
  I.seeElement('.s2-title');
  I.see('', '.cards');

  I.amOnPage('/');

  I.seeElement('.banner-title');

  const firstCardTitle = locate('.card-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstCardTitle);

  const firstCardLink = locate('restaurant-card a').first();
  I.click(firstCardLink);

  I.seeElement('.banner-btn');
  I.click('.banner-btn');

  I.amOnPage('/#/favorite');
  I.seeElement('.card-title');
  const favoritedRestaurantTitle = await I.grabTextFrom('.card-title');

  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);

  const firstFavCardLink = locate('restaurant-card a').first();
  I.click(firstFavCardLink);

  I.seeElement('.banner-btn');
  const favBtn = locate('.banner-btn').first();
  const favoritedBtn = await I.grabTextFrom(favBtn);

  assert.strictEqual(favoritedBtn, 'Favorited');

  I.click(favBtn);
  const unfavoritedBtn = await I.grabTextFrom(favBtn);

  assert.strictEqual(unfavoritedBtn, 'Favorite');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.card');
});
