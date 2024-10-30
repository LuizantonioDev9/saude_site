const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let header = document.querySelector('.header')
    let menuMobile = document.querySelector('.mobile-menu')
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        header.classList.remove('open')
        document.querySelector('.icon').scr = "/saude_site/assets/menuResponsivo/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open')
        header.classList.add('open')
        document.querySelector('.icon').scr ="/saude_site/assets/menuResponsivo/close_white_36dp.svg";
    }
})


