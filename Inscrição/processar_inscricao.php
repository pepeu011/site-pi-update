<?php
// Conexão com o banco de dados
$servername = "127.0.0.1@3306"; // ou o endereço do seu servidor
$username = "root"; // seu usuário do MySQL
$password = "senac123"; // sua senha do MySQL
$dbname = "gamemaster_academy";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Obter dados do formulário
$full_name = $_POST['full_name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$course_name = $_POST['course_name'];
$modality = $_POST['modality'];
$motivation = $_POST['motivation'];
$terms_acceptance = isset($_POST['terms_acceptance']) ? 1 : 0;

// Preparar e vincular
$stmt = $conn->prepare("INSERT INTO inscricoes (full_name, email, phone, course_name, modality, motivation, terms_acceptance) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssi", $full_name, $email, $phone, $course_name, $modality, $motivation, $terms_acceptance);

// Executar a consulta
if ($stmt->execute()) {
    echo "Inscrição realizada com sucesso!";
} else {
    echo "Erro: " . $stmt->error;
}

// Fechar a conexão
$stmt->close();
$conn->close();
?>