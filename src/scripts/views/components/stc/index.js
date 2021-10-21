class Stc extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const a = document.createElement('a');
    a.classList.add('skip-nav');
    a.href = '#main';
    a.textContent = 'Skip to content';
    this.appendChild(a);
  }
}

customElements.define('stc-nav', Stc);
