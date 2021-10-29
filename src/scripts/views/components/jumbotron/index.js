class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const jumbotron = document.createElement('section');
    jumbotron.classList.add('jumbotron');
    this.appendChild(jumbotron);

    const picture = document.createElement('picture');
    jumbotron.appendChild(picture);

    const srcWpS = document.createElement('source');
    srcWpS.srcset = './images/heros/hero-image_2-small.webp';
    srcWpS.media = '(max-width: 728px)';
    picture.appendChild(srcWpS);

    const srcWpL = document.createElement('source');
    srcWpL.srcset = './images/heros/hero-image_2-large.webp';
    picture.appendChild(srcWpL);

    const srcJpS = document.createElement('source');
    srcJpS.srcset = './images/heros/hero-image_2-small.jpg';
    srcJpS.media = '(max-width: 728px)';
    picture.appendChild(srcJpS);

    const srcJpL = document.createElement('source');
    srcJpL.srcset = './images/heros/hero-image_2-large.jpg';
    picture.appendChild(srcJpL);

    const img = document.createElement('img');
    img.classList.add('banner');
    img.src = './images/heros/hero-image_2-large.jpg';
    img.alt = 'Restaurant Banner';
    img.width = 800;
    img.height = 533;
    picture.appendChild(img);

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
