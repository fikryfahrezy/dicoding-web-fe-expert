class ReviewFrom extends HTMLElement {
  set submit(cb = (data = {}) => console.log(data)) {
    this.cb = cb;
    this.render();
  }

  render() {
    const review = document.createElement('section');
    this.appendChild(review);

    const form = document.createElement('form');
    form.classList.add('form-review');
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      this.cb(data);
    });
    review.appendChild(form);

    const name = document.createElement('label');
    name.classList.add('review-label');
    name.setAttribute('for', 'name');
    name.textContent = 'Name';
    form.appendChild(name);

    const inputName = document.createElement('input');
    inputName.classList.add('review-input');
    inputName.type = 'text';
    inputName.id = 'name';
    inputName.name = 'name';
    inputName.placeholder = 'Your name';
    inputName.required = true;
    form.appendChild(inputName);

    const reviewLbl = document.createElement('label');
    reviewLbl.classList.add('review-label');
    reviewLbl.setAttribute('for', 'review');
    reviewLbl.textContent = 'Review';
    form.appendChild(reviewLbl);

    const textReview = document.createElement('textarea');
    textReview.classList.add('review-input');
    textReview.id = 'review';
    textReview.name = 'review';
    textReview.rows = 5;
    textReview.placeholder = 'Put you review...';
    textReview.required = true;
    form.appendChild(textReview);

    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add('btn-wrapper');
    form.appendChild(btnWrapper);

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('review-btn');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Submit';
    btnWrapper.appendChild(submitBtn);
  }
}

customElements.define('review-form', ReviewFrom);
