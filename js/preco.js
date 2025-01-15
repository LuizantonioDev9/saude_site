document.querySelector('.submit-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Evita o recarregamento da página.

    // Coletar dados do formulário
    const computadores = document.getElementById('computadores').value;
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    // Capturar os checkboxes
    const laboratorio = document.getElementById('laboratorio').checked ? 'Sim' : 'Não';
    const postosColeta = document.getElementById('postos-coleta').checked ? 'Sim' : 'Não';
    const equipamentos = document.getElementById('equipamentos').checked ? 'Sim' : 'Não';

    // Dados para envio
    const formData = {
        computadores,
        laboratorio,
        postosColeta,
        equipamentos,
        nome,
        email,
        telefone
    };

    // Enviar para o PHP
    fetch('salvar.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Dados salvos com sucesso!');
            } else {
                alert('Erro ao salvar os dados.');
            }
        })
        .catch(error => console.error('Erro:', error));
});
