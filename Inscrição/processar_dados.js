const port = process.env.PORT || 3306; // Usa a porta definida no ambiente ou 3000 como padrão

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

const mysql = require('mysql2');

// Configurações de conexão com o banco de dados
const connection = mysql.createConnection({
    host: "localhost", // ou o endereço do seu servidor
    user: "root", // seu usuário do MySQL
    password: "senac123", // sua senha do MySQL
    database: "gamemaster_academy"
});

// Conectar ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error("Conexão falhou: " + err.stack);
        return;
    }
    console.log("Conectado ao banco de dados!");
});

// Supondo que você tenha os dados do formulário em um objeto `req.body`
const formData = {
    full_name: req.body.full_name,
    email: req.body.email,
    phone: req.body.phone,
    course_name: req.body.course_name,
    modality: req.body.modality,
    motivation: req.body.motivation,
    terms_acceptance: req.body.terms_acceptance ? 1 : 0
};

// Preparar a consulta SQL
const sql = "INSERT INTO inscricoes (full_name, email, phone, course_name, modality, motivation, terms_acceptance) VALUES (?, ?, ?, ?, ?, ?, ?)";
const values = [formData.full_name, formData.email, formData.phone, formData.course_name, formData.modality, formData.motivation, formData.terms_acceptance];

// Executar a consulta
connection.query(sql, values, (err, results) => {
    if (err) {
        console.error("Erro: " + err.message);
        return;
    }
    console.log("Inscrição realizada com sucesso!");
});

// Fechar a conexão
connection.end();