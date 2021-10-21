import './navlist';

class NavElement extends HTMLElement {
  connectedCallback() {
    this.navs = [
      {
        ref: '#/',
        name: 'Home',
      },
      {
        ref: '#/favorite',
        name: 'Favorite',
      },
      {
        ref: 'https://github.com/fikryfahrezy',
        name: 'About',
      },
    ];
    this.render();
  }

  render() {
    const nav = document.createElement('nav');
    this.appendChild(nav);

    const title = document.createElement('a');
    title.classList.add('nav-title');
    title.textContent = 'The Resto of Ell';
    title.href = '#main';
    nav.appendChild(title);

    const ul = document.createElement('ul');
    ul.classList.add('nav-list');

    this.navs.forEach((val) => {
      const navList = document.createElement('nav-list');
      navList.data = val;

      ul.appendChild(navList);
    });

    nav.appendChild(ul);

    const button = document.createElement('button');
    button.classList.add('menu-btn');
    button.setAttribute('aria-label', 'Menu Icon');
    nav.appendChild(button);

    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-bars');
    button.appendChild(icon);
  }
}

customElements.define('nav-element', NavElement);
