class ProductMenu extends HTMLElement {
  set data(value) {
    this.value = value;
    this.render();
  }

  render() {
    const { name } = this.value;

    const card = document.createElement('div');
    card.classList.add('card');
    this.appendChild(card);

    const image = document.createElement('img');
    image.classList.add('lazyload', 'card-img');
    image.alt = 'Food Image';
    image.width = 348;
    image.height = 348;
    image.dataset.src = './images/heros/hero-image_2.jpg';
    card.appendChild(image);

    const cardDetail = document.createElement('div');
    cardDetail.classList.add('card-detail');
    card.appendChild(cardDetail);

    const title = document.createElement('p');
    title.classList.add('card-title', 'product-card-title');
    title.textContent = name;
    cardDetail.appendChild(title);
  }
}

customElements.define('product-menu', ProductMenu);
