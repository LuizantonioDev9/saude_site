const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let header = document.querySelector('.header')
    let menuMobile = document.querySelector('.mobile-menu')
    let icon = document.querySelector('.icon')
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        header.classList.remove('open')
        // document.querySelector('.icon').src ="/saude_site/assets/menuResponsivo/barBlack.svg";
        icon.src = "/saude_site/assets/menuResponsivo/barBlack.svg"; // Correção aqui
    } else {
        menuMobile.classList.add('open')
        header.classList.add('open')

        // document.querySelector('.icon').src ="/saude_site/assets/menuResponsivo/cross.svg";
        icon.src = "/saude_site/assets/menuResponsivo/cross.svg";
        
    }
})


