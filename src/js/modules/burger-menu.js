const menuOpen = document.querySelector('.header-navigation__icon');
const menuClose = document.querySelector('.header-navigation__icon-close');
const menu = document.querySelector('.header-navigation__element');
menuOpen.addEventListener('click', function (){
    menu.classList.add('active')
})
menuClose.addEventListener('click', function (){
    menu.classList.remove('active')
})


module.exports = menuOpen;