const btnTheme = document.querySelector('.theme-toggle__button');
const cards = document.querySelectorAll('.card');
const titles = document.querySelectorAll('.category__title');
const banner = document.querySelector('.intro');
const inputInForm = document.querySelector('.purchase-form__input');
const labelForForm = document.querySelectorAll('.purchase-form__label');
const textAreaInForm = document.querySelector('.purchase-form__textarea');
const btnForm = document.querySelectorAll('.purchase-form__btn');
const labelForRadio = document.querySelectorAll('.purchase-form__radio-label');

const removeTheme = (theme) => {
    if (theme == "light") {
        cards.forEach(card => card.classList.remove('card__lightTheme'));
        buyButtons.forEach(btn => btn.classList.remove('product-card__buy-button-lightTheme'));
        banner.classList.remove('intro_lightTheme');
    } else {
        cards.forEach(card => card.classList.remove('card__darkTheme'));
        buyButtons.forEach(btn => btn.classList.remove('product-card__buy-button-darkTheme'));
        banner.classList.remove('intro_darkTheme');
    }
}
    

const addTheme = (theme) => {
    if (theme == "light") {
        btnTheme.textContent = 'Светлая тема';
        body.classList.remove('body__darkTheme');
        banner.classList.add('intro_lightTheme');
        cards.forEach(card => card.classList.add('card__lightTheme'));
        titles.forEach(title => title.classList.remove('category__title-darkTheme'));
        buyButtons.forEach(btn => btn.classList.add('product-card__buy-button-lightTheme'));
        bntScroll.style.backgroundColor = '#101010';
        form.style.backgroundColor = '#fff';
        labelForForm.forEach(label => label.style.color = "#101010");
        inputInForm.style.backgroundColor = '#101010';
        textAreaInForm.style.backgroundColor = '#fff';
        textAreaInForm.style.color = '#101010';
        labelForRadio.forEach(label => label.style.color = '#101010');
        btnForm.forEach(btn => {
            btn.style.backgroundColor = '#101010';
            btn.style.color = '#fff';
        });
    } else {
        btnTheme.textContent = 'Темная тема';
        body.classList.add('body__darkTheme');
        banner.classList.add('intro_darkTheme');
        cards.forEach(card => card.classList.add('card__darkTheme'));
        titles.forEach(title => title.classList.add('category__title-darkTheme'));
        buyButtons.forEach(btn => btn.classList.add('product-card__buy-button-darkTheme'));
        bntScroll.style.backgroundColor = 'coral';
        labelForForm.forEach(label => label.style.color = "#fff")
        form.style.backgroundColor = '#101010';
        inputInForm.style.backgroundColor = '#333';
        textAreaInForm.style.backgroundColor = '#333';
        textAreaInForm.style.color = '#fff';
        labelForRadio.forEach(label => label.style.color = '#fff');
        btnForm.forEach(btn => {
            btn.style.backgroundColor = 'coral';
            btn.style.color = '#101010';
        });
    }
}


btnTheme.addEventListener('click', () => {
    const isDarkTheme = body.classList.contains('body__darkTheme');
    const light = 'light';
    const dark = 'dark';


    if (isDarkTheme) {
        removeTheme(dark);
        addTheme(light);
    } else {
        removeTheme(light);
        addTheme(dark);
    }
});
