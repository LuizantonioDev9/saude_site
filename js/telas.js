//pegar as abas 
const tabs = document.querySelectorAll('.tab-btn');

// função que vai pegar as abas que foram clicadas
tabs.forEach(tab => tab.addEventListener('mouseover', () => tabClicked(tab)))

const tabClicked =(tab) => {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('show'));
    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);
    content.classList.add('show')
}