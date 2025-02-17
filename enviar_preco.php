<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletando os dados do formulário
    $computadores = $_POST['computadores'];
    $opcoes = isset($_POST['opcoes']) ? implode(", ", $_POST['opcoes']) : 'Nenhuma opção selecionada';
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];

    // Configuração do PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configurações do servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Servidor SMTP do Gmail
        $mail->SMTPAuth = true;
        $mail->Username = 'saudesystems@gmail.com'; // Seu e-mail do Gmail
        $mail->Password = 'meyy yjng cogg buin'; // Sua senha do Gmail
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // TLS
        $mail->Port = 587; // Porta do Gmail

        // Remetente e destinatário
        $mail->setFrom('saudesystems@gmail.com', 'Seu Nome');
        $mail->addAddress('saudesystems@gmail.com'); // Destinatário

        // Conteúdo do e-mail
        $mail->isHTML(true);
        $mail->Subject = 'Nova Proposta!';
        $mail->Body = "
            <h2>Detalhes da Proposta</h2>
            <p><strong>Nome:</strong> $nome</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Telefone/Celular:</strong> $telefone</p>
            <p><strong>Quantidade de computadores:</strong> $computadores</p>
            <p><strong>Opções selecionadas:</strong> $opcoes</p>
        ";

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