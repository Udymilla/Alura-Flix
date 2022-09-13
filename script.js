//lista de nomes e filme

var filmes = [];

//botão + input

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var addNomeFilme = document.getElementById("nome").value;
  var urlRepetida = false;

  var aviso = document.getElementById("aviso");
  aviso.innerHTML = "";
  if (
    filmeFavorito.endsWith(".jpg" || ".png" || ".gif" || ".jpeg") &&
    addNomeFilme !== ""
  ) {
    i = 0;
    listarFilmesNaTela(filmeFavorito);
    if (filmes[i] == filmeFavorito + addNomeFilme) {
      aviso.innerHTML = "Este Filme já Foi adicionado";
      urlRepetida = true;
    }
    i++;
  } else {
    aviso.innerHTML = "Adicione um link válido e o nome do filme em seguida";
  }
  document.getElementById("filme").value = "";
  document.getElementById("nome").value = "";
}

function listarFilmesNaTela(filmeFavorito) {
  var urlRepetida = false;
  if (urlRepetida == false) {
    console.log(urlRepetida);
    filmes.push(filmeFavorito + addNomeFilme);
    var addNomeFilme = document.getElementById("nome").value;
    var elementoFilmeFavorito =
      "<img src=" + filmeFavorito + "><br/>" + addNomeFilme + "<p/>";
    var elementoListaFilmes = document.getElementById("listaFilmes");

    elementoListaFilmes.innerHTML =
      elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  }
}

document.getElementById("Remover").onclick = removerForm;

function removerForm() {
  filmeFavorito = document.getElementById("filme").value = "";
  addNomeFilme = document.getElementById("nome").value = "";
  var elementoFilmeFavorito =
    "<img src=" + filmeFavorito + "><br/>" + addNomeFilme + "<p/>";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = "";
  aviso.innerHTML = "";
}