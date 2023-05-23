const buyButtons = document.querySelectorAll('.product-card__buy-button');
const purchaseForm = document.querySelector('.purchase-form');
const closeButton = document.querySelector('.purchase-form__close-button');
const body = document.querySelector('body')
const form = document.querySelector('.purchase-form__form');
const valueProduct = document.querySelector('.purchase-form__input');

const clearValueInForm = () => {
  purchaseForm.classList.add('hidden');
  body.style.overflow = 'scroll';
  valueProduct.value = "";
};

buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    purchaseForm.classList.remove('hidden');
    body.style.overflow = 'hidden';
  });
});

closeButton.addEventListener('click', () => {
  clearValueInForm();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Покупка совершена!');
  clearValueInForm();
});
