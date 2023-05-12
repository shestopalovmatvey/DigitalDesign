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
    
    if (window.innerWidth > 768) {

        (scrollY > 50) ? bntScroll.style.display = 'inline-block' : bntScroll.style.display = 'none';
    } else {
        bntScroll.style.fontSize = '7px';
        (scrollY > 300) ? bntScroll.style.display = 'inline-block' : bntScroll.style.display = 'none';
    }
})