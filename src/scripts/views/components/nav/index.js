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

    /**
     * @returns {void}
     */
    const toggleMenu = function toggleMenu() {
      ul.classList.toggle('nav-show');
    };

    this.navs.forEach((val) => {
      const navList = document.createElement('nav-list');
      navList.addEventListener('click', () => {
        toggleMenu();
      });

      navList.data = val;

      ul.appendChild(navList);
    });

    nav.appendChild(ul);

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.setAttribute('aria-label', 'Close Button');
    closeBtn.addEventListener('click', () => {
      toggleMenu();
    });
    ul.appendChild(closeBtn);

    const iconCross = document.createElement('i');
    iconCross.classList.add('fas', 'fa-times');
    closeBtn.appendChild(iconCross);

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menu-btn');
    menuBtn.setAttribute('aria-label', 'Menu Button');
    menuBtn.addEventListener('click', () => {
      toggleMenu();
    });
    nav.appendChild(menuBtn);

    const iconBar = document.createElement('i');
    iconBar.classList.add('fas', 'fa-bars');
    menuBtn.appendChild(iconBar);
  }
}

customElements.define('nav-element', NavElement);
