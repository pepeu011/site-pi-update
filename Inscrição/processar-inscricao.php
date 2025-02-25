<?php
// Configurações do banco de dados
$servername = "localhost";
$username = "u824521247_gamemaster"; // Substitua pelo seu usuário do MySQL
$password = "Senac123."; // Substitua pela sua senha do MySQL
$dbname = "u824521247_gamemaster";
 
// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);
 
// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
 
// Coletar dados do formulário
$full_name = $_POST['full_name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$course_name = $_POST['course_name'];
$modality = $_POST['modality'];
$motivation = $_POST['motivation'];
$terms_acceptance = isset($_POST['terms_acceptance']) ? 1 : 0;
 
// Preparar e executar a query
$stmt = $conn->prepare("INSERT INTO inscricoes (full_name, email, phone, course_name, modality, motivation, terms_acceptance) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssi", $full_name, $email, $phone, $course_name, $modality, $motivation, $terms_acceptance);
 
if ($stmt->execute()) {
    echo "Inscrição realizada com sucesso!";
} else {
    echo "Erro ao realizar inscrição: " . $stmt->error;
}
 
// Fechar conexão
$stmt->close();
$conn->close();
?>