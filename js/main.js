const openNav = document.querySelector('#open-btn');
const closeNav = document.querySelector('#close-btn');
const navWrap = document.querySelector('.nav-wrap');

openNav.addEventListener('click', () => {
    // navWrap.classList.toggle('show')
    if (navWrap.style.transform = 'scale(0)') {
        navWrap.style.transform = "scale(1)";
        navWrap.style.visibility = 'visible';
        navWrap.style.zIndex = '2'
    }
});

closeNav.addEventListener('click', () => {
    if (navWrap.style.transform = 'scale(1)') {
        navWrap.style.transform = "scale(0)";
         navWrap.style.visibility = "hidden";
         navWrap.style.zIndex = "-1";
    }
})