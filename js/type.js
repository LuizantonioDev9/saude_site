document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 100,
        loop: true,
    })
        .type('em um unico sistema.', {delay:900})
        .delete(20)
        .type('em um unico ecosistema.', {delay:500})
        .delete(23)
        .go();  
})

