document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio até a validação

    let isValid = true;

    // Seleciona os campos do formulário
    const name = document.getElementById('name');
    const email = document.getElementById('email');
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
        alert('Formulário enviado com sucesso!');
        // Abaixo você pode adicionar o código para enviar os dados para um servidor, se necessário.
        // Por enquanto, vamos apenas limpar o formulário:
        document.querySelector('.contact-form').reset();
    }
});