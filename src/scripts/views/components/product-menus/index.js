import './menu';

class ProductMenus extends HTMLElement {
  set data(value = []) {
    this.value = value;
    this.render();
  }

  render() {
    const cards = document.createElement('section');
    cards.classList.add('cards', 'product-cards');
    this.appendChild(cards);

    this.value.forEach((val) => {
      const card = document.createElement('product-menu');
      card.data = val;

      cards.appendChild(card);
    });
  }
}

customElements.define('product-menus', ProductMenus);
