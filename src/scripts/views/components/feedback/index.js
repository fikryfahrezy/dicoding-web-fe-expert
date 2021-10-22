class FeedbackElement extends HTMLElement {
  render(text = 'Loading') {
    const div = document.createElement('div');
    div.classList.add('w-100', 'h-100', 'bcp', 'fm');
    this.appendChild(div);

    const p = document.createElement('p');
    p.textContent = text;
    div.appendChild(p);
  }
}

customElements.define('feedback-element', FeedbackElement);
