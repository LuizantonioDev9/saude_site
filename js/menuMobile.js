const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let header = document.querySelector('.header')
    let menuMobile = document.querySelector('.mobile-menu')
    let icon = document.querySelector('.icon')
    
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        header.classList.remove('open')
        icon.src = "/assets/menuResponsivo/barBlack.svg"; // Correção aqui
    } 
    else {
        menuMobile.classList.add('open')
        header.classList.add('open')
        icon.src = "/assets/menuResponsivo/cross.svg";
        
    }
})


