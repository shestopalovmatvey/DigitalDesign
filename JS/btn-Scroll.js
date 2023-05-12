const bntScroll = document.querySelector('.scroll-toTop');

bntScroll.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});


window.addEventListener('scroll', () => {
    let scrollY = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollY > 50) {
        bntScroll.style.display = 'inline-block';
    } else {
        bntScroll.style.display = 'none';
    }
})