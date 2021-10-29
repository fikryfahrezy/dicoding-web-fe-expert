const imageUrl = process.env.RESTAURANT_IMG_M;

class RestaurantCard extends HTMLElement {
  set data(value) {
    this.value = value;
    this.render();
  }

  render() {
    const { id, name, description, pictureId, city, rating } = this.value;

    const anchor = document.createElement('a');
    anchor.href = `#/detail/${id}`;
    this.appendChild(anchor);

    const card = document.createElement('div');
    card.classList.add('card');
    anchor.appendChild(card);

    const cardId = document.createElement('span');
    cardId.classList.add('card-id');
    cardId.textContent = id;
    card.appendChild(cardId);

    const cardImg = document.createElement('img');
    cardImg.classList.add('lazyload', 'card-img');
    cardImg.alt = 'Restaurant Picture';
    cardImg.width = 776;
    cardImg.height = 540;
    cardImg.dataset.src = `${imageUrl}/${pictureId}`;
    card.appendChild(cardImg);

    const cardDetail = document.createElement('div');
    cardDetail.classList.add('card-detail');
    card.appendChild(cardDetail);

    const cardTitle = document.createElement('p');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = name;
    cardDetail.appendChild(cardTitle);

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    cardDetail.appendChild(cardInfo);

    const ratingCont = document.createElement('div');
    cardInfo.appendChild(ratingCont);

    const ratingIcon = document.createElement('i');
    ratingIcon.classList.add('fas', 'fa-star', 'card-icon');
    ratingCont.appendChild(ratingIcon);

    const rat = document.createElement('span');
    rat.textContent = rating;
    ratingCont.appendChild(rat);

    const locCont = document.createElement('div');
    cardInfo.appendChild(locCont);

    const locIcon = document.createElement('i');
    locIcon.classList.add('fas', 'fa-map-marker-alt', 'card-icon');
    locCont.appendChild(locIcon);

    const loc = document.createElement('span');
    loc.textContent = city;
    locCont.appendChild(loc);

    const cardDesc = document.createElement('p');
    cardDesc.classList.add('card-desc');
    cardDesc.textContent = description;
    cardDetail.appendChild(cardDesc);
  }
}

customElements.define('restaurant-card', RestaurantCard);
