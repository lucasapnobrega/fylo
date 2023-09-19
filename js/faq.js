export default (title) => {
    const item = title.parentNode
    
    const accordionIcon = item.querySelector('.accordion-icon')

    const isOpened = item.classList.contains('accordion-item-opened')

    const accordionsItems = document.querySelectorAll('.accordion-item')
    accordionsItems.forEach(accordionItem => {
        accordionItem.classList.remove('accordion-item-opened')
        accordionItem.classList.add('accordion-item-closed')
        accordionItem.querySelector('.accordion-icon').innerHTML = '<i class="fa-solid fa-plus"></i>'
    })

    if(!isOpened) {
        item.classList.remove('accordion-item-closed')
        item.classList.add('accordion-item-opened')
        accordionIcon.innerHTML = '<i class="fa-solid fa-minus"></i>'
    } 
}
