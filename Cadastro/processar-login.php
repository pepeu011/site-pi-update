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
echo "Conectado com sucesso";
?>