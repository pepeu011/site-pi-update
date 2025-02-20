// Importações do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

// Configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDi22k5Hr3g48zswxO5fDZo-uzwn7YxCs0",
  authDomain: "gamemaster-academy-c2d63.firebaseapp.com",
  projectId: "gamemaster-academy-c2d63",
  storageBucket: "gamemaster-academy-c2d63.firebasestorage.app",
  messagingSenderId: "786765949430",
  appId: "1:786765949430:web:c658e34d0fd16053d9bfd7"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Obter referência ao banco de dados
const db = getDatabase(app);

// Capturar o evento de submissão do formulário
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os dados do formulário
    const formData = {
      full_name: form.full_name.value,
      email: form.email.value,
      phone: form.phone.value,
      course_name: form.course_name.value,
      modality: form.modality.value,
      motivation: form.motivation.value,
      terms_acceptance: form.terms_acceptance.checked
    };

    // Salvar os dados no Firebase Realtime Database
    saveFormDataToFirebase(formData);

    // Limpar o formulário após o envio
    form.reset();

    // Exibir uma mensagem de sucesso
    alert('Inscrição enviada com sucesso!');
  });

  function saveFormDataToFirebase(data) {
    // Gerar um ID único para a inscrição
    const id = new Date().getTime();

    // Referência ao nó no Firebase onde os dados serão armazenados
    const dbRef = ref(db, `inscricoes/${id}`);

    // Salvar os dados no Firebase
    set(dbRef, data)
      .then(() => {
        console.log('Dados salvos com sucesso no Firebase!');
      })
      .catch((error) => {
        console.error('Erro ao salvar os dados no Firebase:', error);
      });
  }
});