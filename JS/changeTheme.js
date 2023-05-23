const btnTheme = document.querySelector('.theme-toggle__button');
const cards = document.querySelectorAll('.card');
const titles = document.querySelectorAll('.category__title');
const banner = document.querySelector('.intro');
const inputInForm = document.querySelector('.purchase-form__input');
const labelForForm = document.querySelectorAll('.purchase-form__label');
const textAreaInForm = document.querySelector('.purchase-form__textarea');
const btnForm = document.querySelectorAll('.purchase-form__btn');
const labelForRadio = document.querySelectorAll('.purchase-form__radio-label');

const themes = {
    light: {
        bodyClass: 'body__lightTheme',
        btnText: 'Светлая тема',
        introClass: 'intro_lightTheme',
        cardClass: 'card__lightTheme',
        titleClass: 'category__title-lightTheme',
        buyBtnClass: 'product-card__buy-button-lightTheme',
        bntScrollBgColor: '#101010',
        formBgColor: '#fff',
        labelColor: '#101010',
        inputBgColor: '#101010',
        textAreaBgColor: '#fff',
        textAreaColor: '#101010',
        radioLabelColor: '#101010',
        btnBgColor: '#101010',
        btnColor: '#fff',
    },
    dark: {
        bodyClass: 'body__darkTheme',
        btnText: 'Темная тема',
        introClass: 'intro_darkTheme',
        cardClass: 'card__darkTheme',
        titleClass: 'category__title-darkTheme',
        buyBtnClass: 'product-card__buy-button-darkTheme',
        bntScrollBgColor: 'coral',
        formBgColor: '#101010',
        labelColor: '#fff',
        inputBgColor: '#333',
        textAreaBgColor: '#333',
        textAreaColor: '#fff',
        radioLabelColor: '#fff',
        btnBgColor: 'coral',
        btnColor: '#101010',
    },
};
  
const removeTheme = (theme) => {
    const themeData = themes[theme];
    body.classList.remove(themeData.bodyClass);
    banner.classList.remove(themeData.introClass);
    cards.forEach((card) => card.classList.remove(themeData.cardClass));
    titles.forEach((title) => title.classList.remove(themeData.titleClass));
    buyButtons.forEach((btn) => btn.classList.remove(themeData.buyBtnClass));

    //form.style
    form.style.backgroundColor = themeData.formBgColor;
    labelForForm.forEach((label) => (label.style.color = themeData.labelColor));
    inputInForm.style.backgroundColor = themeData.inputBgColor;
    textAreaInForm.style.backgroundColor = themeData.textAreaBgColor;
    textAreaInForm.style.color = themeData.textAreaColor;
    labelForRadio.forEach((label) => (label.style.color = themeData.radioLabelColor));

    btnForm.forEach((btn) => {
        btn.style.backgroundColor = themeData.btnBgColor;
        btn.style.color = themeData.btnColor;
    });

    bntScroll.style.backgroundColor = themeData.bntScrollBgColor;
    btnTheme.textContent = themeData.btnText;
  };
  
const addTheme = (theme) => {
    const themeData = themes[theme];
    body.classList.add(themeData.bodyClass);
    banner.classList.add(themeData.introClass);
    cards.forEach((card) => card.classList.add(themeData.cardClass));
    titles.forEach((title) => title.classList.add(themeData.titleClass));
    buyButtons.forEach((btn) => btn.classList.add(themeData.buyBtnClass));

    //form.style
    form.style.backgroundColor = themeData.formBgColor;
    labelForForm.forEach((label) => (label.style.color = themeData.labelColor));
    inputInForm.style.backgroundColor = themeData.inputBgColor;
    textAreaInForm.style.backgroundColor = themeData.textAreaBgColor;
    textAreaInForm.style.color = themeData.textAreaColor;
    labelForRadio.forEach((label) => (label.style.color = themeData.radioLabelColor));

    btnForm.forEach((btn) => {
        btn.style.backgroundColor = themeData.btnBgColor;
        btn.style.color = themeData.btnColor;
    });

    bntScroll.style.backgroundColor = themeData.bntScrollBgColor;
    btnTheme.textContent = themeData.btnText;
};
  
btnTheme.addEventListener('click', () => {
    const isDarkTheme = body.classList.contains(themes.dark.bodyClass);
    const themeToApply = isDarkTheme ? 'light' : 'dark';
    const themeToRemove = isDarkTheme ? 'dark' : 'light';
  
    removeTheme(themeToRemove);
    addTheme(themeToApply);
});