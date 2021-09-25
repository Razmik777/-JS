const menuLists = document.querySelectorAll('.menu-list__link');
const mainScroll = document.querySelector('.main__scroll');
const mainBtn = document.querySelector('.main__button');
const newArray = [...menuLists, mainScroll, mainBtn];

newArray.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()

        const ID = (event.target.getAttribute('href').substr(1));

        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})