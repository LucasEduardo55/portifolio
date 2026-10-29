const botaoTema = document.getElementById("tema");

if (botaoTema) {
    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "escuro") {
        document.body.classList.add("escuro");
    }

    function atualizarBotao() {
        const escuro = document.body.classList.contains("escuro");

        botaoTema.textContent = escuro ? "☀" : "☾";
        botaoTema.title = escuro ? "Ativar modo claro" : "Ativar modo escuro";
    }

    atualizarBotao();

    botaoTema.addEventListener("click", function () {
        document.body.classList.toggle("escuro");

        const temaAtual = document.body.classList.contains("escuro")
            ? "escuro"
            : "claro";

        localStorage.setItem("tema", temaAtual);
        atualizarBotao();
    });
}