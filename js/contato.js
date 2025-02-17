document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão

    let isValid = true;

    // Seleciona os campos do formulário
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const company = document.getElementById('company');
    const message = document.getElementById('message');

    // Seleciona os elementos de erro
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Resetando os erros anteriores
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    name.classList.remove('error-border');
    email.classList.remove('error-border');
    message.classList.remove('error-border');

    // Validação do Nome (pelo menos 3 caracteres)
    if (name.value.trim().length < 3) {
        nameError.textContent = 'O nome deve ter pelo menos 3 caracteres.';
        name.classList.add('error-border');
        isValid = false;
    }

    // Validação do E-mail (formato básico de email)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        email.classList.add('error-border');
        isValid = false;
    }

    // Validação da Mensagem (não deve estar vazia)
    if (message.value.trim() === '') {
        messageError.textContent = 'A mensagem não pode estar vazia.';
        message.classList.add('error-border');
        isValid = false;
    }

    // Se tudo estiver válido, envia o formulário
    if (isValid) {
        // Cria um objeto com os dados do formulário
        const formData = new FormData();
        formData.append('nome', name.value.trim());
        formData.append('email', email.value.trim());
        formData.append('empresa', company.value.trim());
        formData.append('mensagem', message.value.trim());

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
    }
});