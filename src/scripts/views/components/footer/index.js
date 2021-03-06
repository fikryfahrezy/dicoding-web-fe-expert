class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.classList.add('w-100');

    const footer = document.createElement('footer');
    this.appendChild(footer);

    const p = document.createElement('p');
    p.textContent = 'Copyright © 2021 - The Resto of Ell';
    footer.appendChild(p);
  }
}

customElements.define('footer-element', FooterElement);
