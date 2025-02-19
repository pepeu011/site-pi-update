<?php
// Conectar ao banco de dados
$host = 'localhost';
$dbname = 'gamemaster_academy';
$username = 'root';
$password = 'senac';

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Coletar dados do formulário
    $full_name = $_POST['full_name'];
    $birth_date = $_POST['birth_date'];
    $document_id = $_POST['document_id'];
    $address = $_POST['address'];
    $contact = $_POST['contact'];
    $course_name = $_POST['course_name'];
    $modality = $_POST['modality'];
    $shift = $_POST['shift'];
    $motivation = $_POST['motivation'];
    $payment_method = $_POST['payment_method'];
    $bank_details = $_POST['bank_details'];
    $payment_proof = $_FILES['payment_proof']['name'];
    $terms_acceptance = isset($_POST['terms_acceptance']) ? 1 : 0;

    // Inserir dados no banco de dados
    $sql = "INSERT INTO inscricoes (
        full_name, birth_date, document_id, address, contact, course_name, modality, shift, motivation, payment_method, bank_details, payment_proof, terms_acceptance
    ) VALUES (
        :full_name, :birth_date, :document_id, :address, :contact, :course_name, :modality, :shift, :motivation, :payment_method, :bank_details, :payment_proof, :terms_acceptance
    )";

    $stmt = $conn->prepare($sql);
    $stmt->execute([
        ':full_name' => $full_name,
        ':birth_date ' => $birth_date,
        ':document_id' => $document_id,
        ':address' => $address,
        ':contact' => $contact,
        ':course_name' => $course_name,
        ':modality' => $modality,
        ':shift' => $shift,
        ':motivation' => $motivation,
        ':payment_method' => $payment_method,
        ':bank_details' => $bank_details,
        ':payment_proof' => $payment_proof,
        ':terms_acceptance' => $terms_acceptance
    ]);

    echo "Inscrição realizada com sucesso!";
} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}

$conn = null;
?>