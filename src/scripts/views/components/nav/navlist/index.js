class NavList extends HTMLElement {
  set data(value) {
    this.value = value;
    this.render();
  }

  render() {
    const { ref, name } = this.value;

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
  }
}

customElements.define('nav-list', NavList);
