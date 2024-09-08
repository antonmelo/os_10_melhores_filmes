function pesquisar() {
  // Seleciona a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById
    ("resultados-pesquisa");

  let campoPesquisa = document.getElementById
    ("campo-pesquisa").value;

  // Se campoPesquisa for uma string vazia
  if (campoPesquisa == "") {
    section.innerHTML = "<p>Digite algo sobre o seu filme preferido e descubra se ele está na lista.<p>"
    return
  };

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let diretor = "";
  let resumo = "";
  let genero = "";
  let atores = "";
  let plataforma = "";
  let tags = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    diretor = dado.diretor.toLowerCase()
    resumo = dado.resumo.toLowerCase()
    genero = dado.genero.toLowerCase()
    atores = dado.atores.toLowerCase()
    plataforma = dado.plataforma.toLowerCase()
    tags = dado.tags.toLowerCase()
    // Se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || diretor.includes(campoPesquisa) || resumo.includes(campoPesquisa) || genero.includes(campoPesquisa) || atores.includes(campoPesquisa) || plataforma.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Cria um novo elemento
      resultados += `
        <div class="item-resultado">
          <h2>
              <a href= ${dado.link} target="_blank">${dado.titulo}</a>
          </h2>
          <p class="resumo-meta">${dado.resumo}</p>
          <a href=${dado.plataforma} target="_blank"> Onde assitir<a/>
       </div>
`;
    }

  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado.<p>"
  }

  // Insere o HTML gerado na seção de resultados
  section.innerHTML = resultados;
}

