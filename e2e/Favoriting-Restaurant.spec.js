/* eslint-disable */
const assert = require('assert');

Feature('Favoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurants', ({ I }) => {
  I.seeElement('.s2-title');
  I.dontSeeElement('.card');
});

Scenario('favoriting one restaurant', async ({ I }) => {
  I.seeElement('.s2-title');
  I.dontSeeElement('.card');

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
});
