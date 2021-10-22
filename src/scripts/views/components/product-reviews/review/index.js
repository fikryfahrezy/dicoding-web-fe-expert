class ProductReview extends HTMLElement {
  set data(value) {
    this.value = value;
    this.render();
  }

  render() {
    const { name, review, date } = this.value;

    const productReview = document.createElement('div');
    productReview.classList.add('product-review');
    this.appendChild(productReview);

    const reviewer = document.createElement('p');
    reviewer.classList.add('reviewer');
    reviewer.textContent = name;
    productReview.appendChild(reviewer);

    const reviewDate = document.createElement('p');
    reviewDate.classList.add('review-date');
    reviewDate.textContent = date;
    productReview.appendChild(reviewDate);

    const reviewText = document.createElement('p');
    reviewText.textContent = review;
    productReview.appendChild(reviewText);
  }
}

customElements.define('product-review', ProductReview);
