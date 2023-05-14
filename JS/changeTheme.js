const btnTheme = document.querySelector('.theme-toggle__button');
const cards = document.querySelectorAll('.card');
const titles = document.querySelectorAll('.category__title');
const banner = document.querySelector('.intro');

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
    } else {
        btnTheme.textContent = 'Темная тема';
        body.classList.add('body__darkTheme');
        banner.classList.add('intro_darkTheme');
        cards.forEach(card => card.classList.add('card__darkTheme'));
        titles.forEach(title => title.classList.add('category__title-darkTheme'));
        buyButtons.forEach(btn => btn.classList.add('product-card__buy-button-darkTheme'));
        bntScroll.style.backgroundColor = 'coral';
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
