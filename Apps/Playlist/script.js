const listaMusicas = document.getElementById("listaMusicas");

const modal = document.getElementById("modal");
const fechar = document.getElementById("fechar");

const modalEmoji = document.getElementById("modalEmoji");
const modalTitulo = document.getElementById("modalTitulo");
const modalArtista = document.getElementById("modalArtista");
const modalTexto = document.getElementById("modalTexto");
const modalLink = document.getElementById("modalLink");

const musicas = [
    {
        emoji:"💽",
        titulo:"Nova demais pra mim",
        artista:"Vitroles",
        texto:"Nada melhor que a garota dos meus sonhos, cabelos castanhos, costas tatuada e um corpo escultural ",
        link:"https://open.spotify.com/lyrics"
    },
    {
        emoji:"👽",
        titulo:"Como eu te quero",
        artista:"Black Alien",
        texto:"Porque foi a primeira música que postei para você.",
        link:"https://open.spotify.com/track/5JX81dHdlOVfTXim2itZKw"
    },
    {
        emoji:"🚬",
        titulo:"Whisky para um Condenado",
        artista:"Matanza",
        texto:"As vezes nossos vinte melhores amigos realmente estão em um maço de cigarro.",
        link:"https://open.spotify.com/track/1LLtAcI6SvRUnDeWJY2RhN"
    }
];

function criarMusica(musica){
    const card = document.createElement("div");
    card.className = "musica";

    card.innerHTML = `
        <div class="capa">${musica.emoji}</div>

        <div class="info">
            <h2>${musica.titulo}</h2>
            <p>${musica.artista}</p>
            <span class="tag">🎵 Nossa trilha sonora</span>
        </div>
    `;

    card.onclick = () => abrirModal(musica);

    listaMusicas.appendChild(card);
}

function abrirModal(musica){
    modalEmoji.textContent = musica.emoji;
    modalTitulo.textContent = musica.titulo;
    modalArtista.textContent = musica.artista;
    modalTexto.textContent = musica.texto;
    modalLink.href = musica.link;

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

musicas.forEach(criarMusica);