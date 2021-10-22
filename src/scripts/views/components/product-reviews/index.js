import './review';

class ProductReviews extends HTMLElement {
  set data(value = []) {
    this.value = value;
    this.render();
  }

  render() {
    const cards = document.createElement('section');
    cards.classList.add('product-reviews');
    this.appendChild(cards);

    this.value.forEach((val) => {
      const card = document.createElement('product-review');
      card.data = val;

      cards.appendChild(card);
    });
  }
}

customElements.define('product-reviews', ProductReviews);
