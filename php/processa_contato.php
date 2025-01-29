<?php
// Dados de conexão com o MySQL
$servername = "localhost";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "contatoDB";

// Cria a conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}

// Recebe e valida os dados do formulário
$nome = isset($_POST['nome']) ? $conn->real_escape_string($_POST['nome']) : '';
$email = isset($_POST['email']) ? $conn->real_escape_string($_POST['email']) : '';
$empresa = isset($_POST['empresa']) ? $conn->real_escape_string($_POST['empresa']) : '';
$mensagem = isset($_POST['mensagem']) ? $conn->real_escape_string($_POST['mensagem']) : '';

// Verifica se os campos obrigatórios foram preenchidos
if (empty($nome) || empty($email) || empty($mensagem)) {
    echo json_encode(["status" => "erro", "mensagem" => "Preencha todos os campos obrigatórios."]);
    exit;
}

// Insere os dados no banco de dados
$sql = "INSERT INTO contatos (nome, email, empresa, mensagem) VALUES ('$nome', '$email', '$empresa', '$mensagem')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["status" => "sucesso", "mensagem" => "Dados enviados com sucesso!"]);
} else {
    echo json_encode(["status" => "erro", "mensagem" => "Erro: " . $sql . "<br>" . $conn->error]);
}

// Fecha a conexão
$conn->close();
?>
