let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);
  console.log("Array amigos:", amigos);
  input.value = "";
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);
  atualizarLista();
  input.value = "";
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione amigos antes de sortear!");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
  let amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}


