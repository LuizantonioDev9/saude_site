document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão

    // Seleciona os campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const message = document.getElementById('message').value;

    // Validação básica
    if (!name || !email || !message) {
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    // Cria um objeto com os dados do formulário
    const formData = new FormData();
    formData.append('nome', name);
    formData.append('email', email);
    formData.append('empresa', company);
    formData.append('mensagem', message);

    // Envia os dados para o PHP usando fetch
    fetch('processa_formulario.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "sucesso") {
            alert(data.mensagem);
            document.querySelector('.contact-form').reset(); // Limpa o formulário
        } else {
            alert("Erro: " + data.mensagem);
        }
    })
    .catch(error => {
        console.error("Erro na requisição:", error);
    });
});
