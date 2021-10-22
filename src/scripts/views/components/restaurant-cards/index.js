import './restaurant-card';

class RestaurantCards extends HTMLElement {
  set data(value = []) {
    this.value = value;
    this.render();
  }

  setLoading() {
    while (this.firstChild) {
      this.removeChild(this.lastChild);
    }

    const div = document.createElement('feedback-element');
    div.render('Loading');
    this.appendChild(div);
  }

  setError(message = '') {
    while (this.firstChild) {
      this.removeChild(this.lastChild);
    }

    const div = document.createElement('feedback-element');
    div.render(message);
    this.appendChild(div);
  }

  render() {
    while (this.firstChild) {
      this.removeChild(this.lastChild);
    }

    const cards = document.createElement('section');
    cards.classList.add('cards');
    this.appendChild(cards);

    this.value.forEach((val) => {
      const card = document.createElement('restaurant-card');
      card.data = val;

      cards.appendChild(card);
    });
  }
}

customElements.define('restaurant-cards', RestaurantCards);
