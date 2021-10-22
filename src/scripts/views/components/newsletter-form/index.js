class NewsletterForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const newsLetter = document.createElement('section');
    newsLetter.classList.add('newsletter');
    this.appendChild(newsLetter);

    const form = document.createElement('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    newsLetter.appendChild(form);

    const emailLabel = document.createElement('label');
    emailLabel.classList.add('email-label');
    emailLabel.for = 'email-input';
    emailLabel.textContent = 'Subscribe to Newsletter';
    form.appendChild(emailLabel);

    const emailGroup = document.createElement('div');
    emailGroup.classList.add('email-group');
    form.appendChild(emailGroup);

    const emailInput = document.createElement('input');
    emailInput.classList.add('email-input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.id = 'email-input';
    emailInput.placeholder = 'Put your email here...';
    emailInput.required = true;
    emailGroup.appendChild(emailInput);

    const submit = document.createElement('button');
    submit.classList.add('subs-btn');
    submit.type = 'submit';
    submit.textContent = 'Subscribe';
    emailGroup.appendChild(submit);
  }
}

customElements.define('newsletter-form', NewsletterForm);
