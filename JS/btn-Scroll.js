const bntScroll = document.querySelector('.scroll-toTop');

const categoryLinks = document.querySelectorAll('.menu__link');

categoryLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const offset = (window.innerWidth > 1000) ? 85 : 70;
        const targetPosition = targetElement.offsetTop - offset;

        window.scrollTo({ 
            top: targetPosition, 
            behavior: 'smooth' 
        });
    });
});

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