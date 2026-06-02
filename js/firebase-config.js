// js/firebase-config.js

// Configurações do seu projeto no Firebase Console (Dados Reais do CDBio)
const firebaseConfig = {
    apiKey: "AIzaSyBzyBbFlsa1ZLXAeyQc2AnJbV1YsSUKecE",
    authDomain: "cdbio-64c0e.firebaseapp.com",
    databaseURL: "https://cdbio-64c0e-default-rtdb.firebaseio.com",
    projectId: "cdbio-64c0e",
    storageBucket: "cdbio-64c0e.firebasestorage.app",
    messagingSenderId: "530183211462",
    appId: "1:530183211462:web:5def0213c40d6160bbcac7",
    measurementId: "G-4V7M9JNYPV"
};

// Inicializa o Firebase globalmente
firebase.initializeApp(firebaseConfig);