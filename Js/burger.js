const burger = document.querySelector('.humburger-menu');
const menu = document.querySelector('.menu');
const menuListLink = document.querySelectorAll('.menu-list__link');

const toggleMenu = () => {
    menu.classList.toggle('menu-active')
    burger.classList.toggle('humburger-menu')
}

burger.addEventListener('click', () => toggleMenu())

menuListLink.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.toggle('menu-active')
        burger.classList.toggle('humburger-menu')
    })
})