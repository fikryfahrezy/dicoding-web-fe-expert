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

    this.navs.forEach(({ ref, name }) => {
      const li = document.createElement('li');
      li.classList.add('nav-item');
      this.appendChild(li);

      const a = document.createElement('a');
      a.classList.add('nav-link');
      a.textContent = name;
      a.href = ref;

      if (ref.startsWith('http')) {
        a.target = '_blank';
        a.rel = 'noreferrer';
      }

      li.appendChild(a);
      ul.appendChild(li);
    });

    nav.appendChild(ul);

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.setAttribute('aria-label', 'Close Button');
    closeBtn.addEventListener('click', () => {
      toggleMenu();
    });
    nav.appendChild(closeBtn);

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
