let listaAmigos = [];

function atualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listaAmigos.forEach((nome, index) => {
        let li = document.createElement("li");
        li.textContent = nome;

        let btnRemover = document.createElement("button");
        btnRemover.textContent = "❌";
        btnRemover.classList.add("remove-button");
        btnRemover.onclick = () => removerAmigo(index);

        li.appendChild(btnRemover);
        ul.appendChild(li);
    });
}

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    listaAmigos.push(nome);
    input.value = "";
    atualizarLista();
}

function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let nomeSorteado = listaAmigos[indiceSorteado];

    document.getElementById("resultado").innerHTML = 
        `<span class="sorteado">🎉 O amigo secreto é: <strong>${nomeSorteado}</strong>! 🎉</span>`;
}

function limparSorteio() {
    document.getElementById("resultado").innerHTML = "";
}