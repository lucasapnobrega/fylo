import faq from "./faq.js"
import menu from "./menu.js"

const headerMenuBars = document.querySelector('.header-menu-bars')
const accordionsTitle = document.querySelectorAll('.accordion-title')

headerMenuBars.addEventListener('click', () => {
    menu(headerMenuBars)
})

accordionsTitle.forEach(title => {
    title.addEventListener('click', () => {
        faq(title)
    })
})