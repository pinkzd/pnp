const filmesContainer = document.getElementById("filmes");
const livrosContainer = document.getElementById("livros");

const modal = document.getElementById("modal");
const fechar = document.getElementById("fechar");

const modalEmoji = document.getElementById("modalEmoji");
const modalTitulo = document.getElementById("modalTitulo");
const modalTipo = document.getElementById("modalTipo");
const modalDescricao = document.getElementById("modalDescricao");
const modalStatus = document.getElementById("modalStatus");

const midias = [
    {
        tipo:"filme",
        emoji:"💍",
        titulo:"Senhor dos Anéis",
        descricao:"Uma maratona completa, com comida boa, coberta e um dia inteiro só nosso.",
        status:"❤️ Quero muito assistir com você."
    },
    {
        tipo:"filme",
        emoji:"🪐",
        titulo:"Interestelar",
        descricao:"Um filme bonito, intenso e perfeito para assistir juntinhos.",
        status:"🌌 Ainda vamos viver essa sessão."
    },
    {
        tipo:"filme",
        emoji:"🧛",
        titulo:"Van Helsing",
        descricao:"Porque combina com nosso lado meio gótico, estranho e dramático.",
        status:"🖤 Sessão obrigatória."
    },
    {
        tipo:"livro",
        emoji:"🧙",
        titulo:"O Hobbit",
        descricao:"Uma aventura para dividir com você, como se fosse um pequeno mundo só nosso.",
        status:"📚 Quero compartilhar essa história."
    },
    {
        tipo:"livro",
        emoji:"🌹",
        titulo:"O Pequeno Príncipe",
        descricao:"Um livro simples, mas cheio de frases bonitas para a gente conversar sobre.",
        status:"⭐ Para ler e marcar trechos juntos."
    }
];

function criarCard(item){
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <div class="capa">${item.emoji}</div>

        <div class="info">
            <h3>${item.titulo}</h3>
            <p>${item.descricao}</p>
            <span class="tag">${item.tipo === "filme" ? "🎬 Filme" : "📚 Livro"}</span>
        </div>
    `;

    card.onclick = () => abrirModal(item);

    if(item.tipo === "filme"){
        filmesContainer.appendChild(card);
    }else{
        livrosContainer.appendChild(card);
    }
}

function abrirModal(item){
    modalEmoji.textContent = item.emoji;
    modalTitulo.textContent = item.titulo;
    modalTipo.textContent = item.tipo === "filme" ? "🎬 Filme" : "📚 Livro";
    modalDescricao.textContent = item.descricao;
    modalStatus.textContent = item.status;

    modal.style.display = "flex";
}

fechar.onclick = () => {
    modal.style.display = "none";
};

modal.onclick = (event) => {
    if(event.target === modal){
        modal.style.display = "none";
    }
};

midias.forEach(criarCard);