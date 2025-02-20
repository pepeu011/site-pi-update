// Import necessary modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration (obtain from your Firebase project settings)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "gamemaster-academy", // Your project ID
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

async function salvarInscricao(nome, telefone, email, senha) {
    try {
      const docRef = await addDoc(collection(db, "inscricoes"), {
        nome: nome,
        telefone: telefone,
        email: email,
        senha: senha
      });
      console.log("Inscrição registrada com ID: ", docRef.id);
    } catch (e) {
      console.error("Erro ao adicionar inscrição: ", e);
    }
  }
  
  // Função para processar o formulário de inscrição
  async function processarInscricao(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  
    await salvarInscricao(nome, telefone, email, senha);
    alert('Inscrição realizada com sucesso!');
  }
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);