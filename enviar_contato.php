<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletando os dados do formulário
    $nome = $_POST['name'];
    $email = $_POST['email'];
    $empresa = $_POST['company'];
    $mensagem = $_POST['message'];

    // Configuração do PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configurações do servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Servidor SMTP do Gmail
        $mail->SMTPAuth = true;
        $mail->Username = 'saudesystems@gmail.com'; // Seu e-mail do Gmail
        $mail->Password = 'meyy yjng cogg buin'; // Sua senha do Gmail ou Senha de App
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // TLS
        $mail->Port = 587; // Porta do Gmail

        // Remetente e destinatário
        $mail->setFrom('saudesystems@gmail.com', 'Formulário de Contato');
        $mail->addAddress('saudesystems@gmail.com'); // Destinatário

        // Conteúdo do e-mail
        $mail->isHTML(true);
        $mail->Subject = 'Nova Mensagem de Contato';

        // Definindo o corpo do e-mail
        $emailBody = "
            <h2>Detalhes da Mensagem</h2>
            <p><strong>Nome:</strong> $nome</p>
            <p><strong>E-mail:</strong> $email</p>
            <p><strong>Empresa:</strong> $empresa</p>
            <p><strong>Mensagem:</strong> $mensagem</p>
        ";

        $mail->Body = $emailBody;

        // Habilita logs de depuração
        //$mail->SMTPDebug = 2;

        // Envia o e-mail
        $mail->send();
        // Exibe a mensagem de sucesso e o botão para voltar ao index.html
        echo "
            
            <div style='text-align: center; margin-top: 50px;'>
                <h2>E-mail enviado com sucesso!</h2>
                <button onclick='window.location.href=\"index.html\"' style='padding: 10px 20px; font-size: 16px; cursor: pointer;'>
                    Voltar para a página inicial
                </button>
            </div>
        ";
    } catch (Exception $e) {
        echo "Falha ao enviar o e-mail. Erro: {$mail->ErrorInfo}";
    }
} else {
    echo "Método de requisição inválido.";
}
?>