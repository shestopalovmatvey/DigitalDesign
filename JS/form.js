const buyButtons = document.querySelectorAll('.product-card__buy-button');
const purchaseForm = document.querySelector('.purchase-form');
const closeButton = document.querySelector('.purchase-form__close-button');
const body = document.querySelector('body')
const form = document.querySelector('.purchase-form__form');
const valueProduct = document.querySelector('.purchase-form__input');
const increaseButton = document.querySelector('.quantity-increase');
const decreaseButton = document.querySelector('.quantity-decrease');
const MAX_VALUE = parseInt(valueProduct.getAttribute('max'));
const MIN_VALUE = parseInt(valueProduct.getAttribute('min'));

increaseButton.addEventListener('click', () => {
  let currentValue = parseInt(valueProduct.value);
  if (currentValue < MAX_VALUE) {
      valueProduct.value = currentValue + 1;
  }
})

decreaseButton.addEventListener('click', () => {
  let currentValue = parseInt(valueProduct.value);
  if (currentValue > MIN_VALUE) {
      valueProduct.value = currentValue - 1;
  }
})

const clearValueInForm = () => {
  purchaseForm.classList.add('hidden');
  body.style.overflow = 'scroll';
  valueProduct.value = "1";
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
