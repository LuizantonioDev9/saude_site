export function initializeObserver() {
    const myObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
        });
    });

    const elementsX = document.querySelectorAll('.hidden');
    elementsX.forEach((element) => myObserver.observe(element));

    const elementsZ = document.querySelectorAll('.hiddenZ');
    elementsZ.forEach((element) => myObserver.observe(element));

    const elementsY = document.querySelectorAll('.hiddenY');
    elementsY.forEach((element) => myObserver.observe(element));

    const elementsYNeg = document.querySelectorAll('.hiddenYNeg');
    elementsYNeg.forEach((element) => myObserver.observe(element));
}



/*CASO N FUNCIONE
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elementsX = document.querySelectorAll('.hidden')
elementsX.forEach((element) => myObserver.observe(element))

const elementsZ = document.querySelectorAll('.hiddenZ')
elementsZ.forEach((element) => myObserver.observe(element))

const elementsY = document.querySelectorAll('.hiddenY')
elementsY.forEach((element) => myObserver.observe(element))

const elementsYNeg = document.querySelectorAll('.hiddenYNeg')
elementsYNeg.forEach((element) => myObserver.observe(element))


*/ 
