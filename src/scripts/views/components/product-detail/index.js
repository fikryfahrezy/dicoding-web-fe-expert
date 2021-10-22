import favoriteRepository from '../../../repositories/favorite-repository';

const { addRestaurant, deleteRestaurant, getRestaurant } = favoriteRepository;
const imageUrl = process.env.RESTAURANT_IMG_M;

class ProductDetail extends HTMLElement {
  set data(value = null) {
    this.isFavorite = false;
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

  setError(message = 'Error') {
    while (this.firstChild) {
      this.removeChild(this.lastChild);
    }

    const div = document.createElement('feedback-element');
    div.render(message);
    this.appendChild(div);
  }

  async render() {
    if (!this.value) return;

    while (this.firstChild) {
      this.removeChild(this.lastChild);
    }

    const { id, name, description, pictureId, city, rating, address } = this.value;

    let isFavorite = getRestaurant(id);

    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');
    this.appendChild(productContainer);

    const image = document.createElement('img');
    image.classList.add('product-image');
    image.alt = 'Restaurant Picture';
    image.width = 348;
    image.height = 348;
    image.src = `${imageUrl}/${pictureId}`;
    productContainer.appendChild(image);

    const productDetail = document.createElement('div');
    productDetail.classList.add('product-detail');
    productContainer.appendChild(productDetail);

    const title = document.createElement('h1');
    title.classList.add('product-title');
    title.textContent = name;
    productDetail.appendChild(title);

    const productStats = document.createElement('div');
    productStats.classList.add('card-info', 'product-info');
    productDetail.appendChild(productStats);

    const ratCont = document.createElement('div');
    productStats.appendChild(ratCont);

    const ratIcon = document.createElement('i');
    ratIcon.classList.add('fas', 'fa-star', 'card-icon');
    ratCont.appendChild(ratIcon);

    const rat = document.createElement('span');
    rat.textContent = rating;
    ratCont.appendChild(rat);

    const locCont = document.createElement('div');
    productStats.appendChild(locCont);

    const locIcon = document.createElement('i');
    locIcon.classList.add('fas', 'fa-map-marker-alt', 'card-icon');
    locCont.appendChild(locIcon);

    const loc = document.createElement('span');
    loc.textContent = city;
    locCont.appendChild(loc);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    productDetail.appendChild(productInfo);

    const addrIcon = document.createElement('i');
    addrIcon.classList.add('fas', 'fa-map-marker-alt', 'card-icon');
    productInfo.appendChild(addrIcon);

    const addr = document.createElement('span');
    addr.textContent = address;
    productInfo.appendChild(addr);

    const productDesc = document.createElement('p');
    productDesc.classList.add('product-desc');
    productDesc.textContent = description;
    productDetail.appendChild(productDesc);

    const btn = document.createElement('button');
    btn.classList.add('banner-btn');

    isFavorite = await isFavorite;
    if (isFavorite) {
      this.isFavorite = true;
      btn.textContent = 'Favorited';
    } else {
      btn.textContent = 'Favorite';
    }

    btn.addEventListener('click', async () => {
      if (this.isFavorite) {
        await deleteRestaurant(id);
        btn.textContent = 'Favorite';
        this.isFavorite = false;
      } else {
        await addRestaurant(this.value);
        btn.textContent = 'Favorited';
        this.isFavorite = true;
      }
    });
    productDetail.appendChild(btn);
  }
}

customElements.define('product-detail', ProductDetail);
