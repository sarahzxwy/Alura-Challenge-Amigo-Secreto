const nomes = ["Sarah", "Íris", "João", "Andrey", "Carlos"];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome!");
        return;
    }
    if (nomes.includes(nome)) {
        alert("Esse nome já foi adicionado");
        input.value = "";
        return;
    }

    nomes.push(nome);

    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    nomes.forEach((nome) => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}
