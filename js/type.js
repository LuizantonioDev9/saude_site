document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 200,
        loop: true,
    })
        .type('em um unico sistema', {delay:900})
        .delete(19)
        .type('em um unico ecosistema', {delay:500})
        .delete(22)
        .go();  
})

