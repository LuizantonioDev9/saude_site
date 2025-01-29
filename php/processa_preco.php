<?php
// Configuração do banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "seu_banco_de_dados";

// Conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Erro na conexão com o banco de dados.']));
}

// Receber os dados do formulário
$data = json_decode(file_get_contents("php://input"), true);

// Extrair os dados
$computadores = $data['computadores'];
$laboratorio = $data['laboratorio'];
$postosColeta = $data['postosColeta'];
$equipamentos = $data['equipamentos'];
$nome = $data['nome'];
$email = $data['email'];
$telefone = $data['telefone'];

// Inserir no banco de dados
$sql = "INSERT INTO propostas (computadores, laboratorio, postos_coleta, equipamentos, nome, email, telefone) 
        VALUES ('$computadores', '$laboratorio', '$postosColeta', '$equipamentos', '$nome', '$email', '$telefone')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Erro ao inserir dados: ' . $conn->error]);
}

// Fechar conexão
$conn->close();
?>
