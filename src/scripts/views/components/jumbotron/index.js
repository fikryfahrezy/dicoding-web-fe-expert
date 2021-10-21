class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const jumbotron = document.createElement('section');
    jumbotron.classList.add('jumbotron');
    this.appendChild(jumbotron);

    const img = document.createElement('img');
    img.classList.add('banner');
    img.src = './images/heros/hero-image_2.jpg';
    img.alt = 'Restaurant Banner';
    img.width = 1350;
    img.height = 900;
    jumbotron.appendChild(img);

    const imgOverlay = document.createElement('div');
    imgOverlay.classList.add('banner-cover');
    jumbotron.appendChild(imgOverlay);

    const ovTitle = document.createElement('h1');
    ovTitle.classList.add('banner-title');
    ovTitle.textContent = 'The Resto of Ell';
    imgOverlay.appendChild(ovTitle);

    const ovBtnAnchor = document.createElement('a');
    ovBtnAnchor.href = '#main';
    imgOverlay.appendChild(ovBtnAnchor);

    const ovBtn = document.createElement('button');
    ovBtn.classList.add('banner-btn');
    ovBtn.textContent = 'Book Now';
    ovBtnAnchor.appendChild(ovBtn);
  }
}

customElements.define('jumbotron-element', Jumbotron);
