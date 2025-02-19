<?php
// Configurações do banco de dados
 $hostname = "localhost";
 $bancodedados = "gamemaster_academy";
 $usuario = "root";
 $senha = "";

// Cria a conexão
$conn = new mysqli($hostname, $usuario, $senha, $bancodedados);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

else {
    echo "Conexão realizada com sucesso!";
}

// Obtém os dados do formulário
$full_name = $_POST['full_name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$course_name = $_POST['course_name'];
$modality = $_POST['modality'];
$motivation = $_POST['motivation'];
$terms_acceptance = isset($_POST['terms_acceptance']) ? 1 : 0;

// Prepara e executa a consulta SQL
$sql = "INSERT INTO inscricoes (full_name, email, phone, course_name, modality, motivation, terms_acceptance)
        VALUES ('$full_name', '$email', '$phone', '$course_name', '$modality', '$motivation', '$terms_acceptance')";

if ($conn->query($sql) === TRUE) {
    echo "Inscrição realizada com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

// Fecha a conexão
$conn->close();
?>