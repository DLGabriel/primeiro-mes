function toggleSenha() {
    const input = document.getElementById("senha");
    const icone = document.getElementById("iconeSenha");

    if (input.type === "password") {
        input.type = "text";
        icone.src = "https://img.icons8.com/?size=100&id=96151&format=png&color=A21216";
        icone.alt = "Esconder Senha";
    }
    else {
        input.type = "password";
        icone.src = "https://img.icons8.com/?size=100&id=85028&format=png&color=A21216";
        icone.alt = "Mostrar Senha";
    }
}

    function verificarSenha() {
        const senhaCorreta = "07062025";
        const senha = document.getElementById("senha").value;
        const mensagemErro = document.getElementById("mensagemErro");

        if (senha === senhaCorreta) {
            window.location.href = "menu.html";
        }
        else {
            window.alert("Hmm... essa não é a data que marcou nossa história. Tente de novo com o coração 💌");
        }
    }
