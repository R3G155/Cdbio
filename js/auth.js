// js/auth.js

// 🛡️ Monitora o status do usuário: Se NÃO estiver logado, expulsa para a tela de login
function verificarAcesso() {
    firebase.auth().onAuthStateChanged((user) => {
        const paginaAtual = window.location.pathname;
        
        // Lista de páginas que QUALQUER UM pode ver (sem estar logado)
        const paginasPublicas = ["login.html", "cadastro.html"];
        
        // Verifica se a página atual é pública
        const ehPaginaPublica = paginasPublicas.some(pagina => paginaAtual.includes(pagina));

        // Se o usuário NÃO está logado e TENTA acessar uma página protegida (ex: index, biogames, bioquiz)
        if (!user && !ehPaginaPublica) {
            console.log("Acesso negado! Redirecionando para o login...");
            window.location.href = "login.html";
        }
    });
}

// Executa a checagem automaticamente assim que a página carrega
verificarAcesso();

// 🚪 Função para o botão "Sair" (Logout) do menu
function logout() {
    firebase.auth().signOut().then(() => {
        // Quando deslogar com sucesso, manda de volta para o login
        window.location.href = "login.html";
    }).catch((error) => {
        alert("Erro ao sair: " + error.message);
    });
}