/* fazer a busca funcionar usando JavaScript. */
// Lista de imóveis fictícios (simulação de um banco de dados)
const imoveis = [
    {
        tipo: "lote",
        localizacao: "Brasilia de Minas",
        preco: 90000,
        imagem: "assets/img/lote/lote1.jpg",
        descricao: "Lote com excelente localização."
    },
    {
        tipo: "chacara",
        localizacao: "São João da Ponte",
        preco: 60000,
        imagem: "assets/img/chacara/chacara1.jpg",
        descricao: "Chácara exelente para você e sua família."
    },
    {
        tipo: "lote",
        localizacao: "Montes Claros",
        preco: 180000,
        imagem: "assets/img/lote/lote2.jpg",
        descricao: "Lote com excelente localização."
    },
    {
        tipo: "lote",
        localizacao: "Brasilia de Minas",
        preco: 110000,
        imagem: "assets/img/lote/lote3.jpg",
        descricao: "Lote com excelente localização."
    }
    
];

// Função para exibir os imóveis filtrados
function exibirImoveis(filtrados) {
    const listaImoveis = document.getElementById("lista-imoveis");
    listaImoveis.innerHTML = ""; // Limpa os imóveis anteriores

    if (filtrados.length === 0) {
        listaImoveis.innerHTML = "<p>Nenhum imóvel encontrado.</p>";
        return;
    }

    // Percorre os imóveis filtrados e cria os elementos na página
    filtrados.forEach(imovel => {
        const imovelDiv = document.createElement("div");
        imovelDiv.classList.add("imovel");
        imovelDiv.innerHTML = `
            <img src="${imovel.imagem}" alt="${imovel.tipo}">
            <h3>${imovel.tipo.charAt(0).toUpperCase() + imovel.tipo.slice(1)}</h3>
            <p>${imovel.localizacao}</p>
            <p>R$ ${imovel.preco.toLocaleString()}</p>
            <p>${imovel.descricao}</p>
        `;
        listaImoveis.appendChild(imovelDiv);
    });
}

// Função para filtrar os imóveis com base nos critérios do usuário
document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Obtém os valores dos filtros
    const tipo = document.getElementById("tipo").value.toLowerCase();
    const localizacao = document.getElementById("localizacao").value.toLowerCase();
    const preco = document.getElementById("preco").value ? parseInt(document.getElementById("preco").value) : Infinity;

    // Filtra os imóveis de acordo com os critérios
    const imoveisFiltrados = imoveis.filter(imovel => 
        (tipo === "" || imovel.tipo === tipo) &&
        (localizacao === "" || imovel.localizacao.toLowerCase().includes(localizacao)) &&
        (imovel.preco <= preco)
    );

    // Exibe os imóveis filtrados
    exibirImoveis(imoveisFiltrados);
});

// Exibe todos os imóveis ao carregar a página
exibirImoveis(imoveis);

/* fazer a busca funcionar usando JavaScript. 👆*/