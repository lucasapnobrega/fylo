export default (headerMenuBars) => {
    const iconBars = '<i class="fa-solid fa-bars-staggered menu-bars"></i>'
    const iconClose = '<i class="fa-solid fa-xmark menu-bars x-close"></i>'

    const header = document.querySelector('.header')
    const menuBars = document.querySelector('.menu-bars')

    header.classList.toggle('active')

    if(menuBars.classList.contains('fa-bars-staggered')) {
        headerMenuBars.innerHTML = iconClose
    } else {
        headerMenuBars.innerHTML = iconBars
    }

    document.addEventListener('click', (ev) => {
        if(!ev.target.classList.contains('menu-bars')) {
            header.classList.remove('active')
            headerMenuBars.innerHTML = iconBars
        }
    })
}