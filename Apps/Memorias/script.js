const galeria = document.getElementById("galeria");

const modal = document.getElementById("modal");
const fechar = document.getElementById("fechar");

const modalFoto = document.getElementById("modalFoto");
const modalTitulo = document.getElementById("modalTitulo");
const modalData = document.getElementById("modalData");
const modalTexto = document.getElementById("modalTexto");
const modalExtra = document.getElementById("modalExtra");

const memorias = [
    {
        titulo:"Primeiro rolê que ficamos juntos",
        data:"24/06/2026",
        foto:"fotos/beijo.jpg",
        texto:"O dia que saímos com nossos amigos e ficamos de casal pela primeira vez, copa do mundo, 3x0 Brasil contra Escocia",
        extra:"❤️ Primeira grande memória do Pink'n'Punk."
    },
    {
        titulo:"Só porque amo esses olhos",
        data:"21/06/2026",
        foto:"fotos/olho.jpg",
        texto:"Pedi foto da sua maquiagem e recebi essa perfeição.",
        extra:"Esse olhar ainda vai virar tatuagem."
    },
    {
        titulo:"Nossa primeira foto juntos",
        data:"29/06/2026",
        foto:"fotos/pr.jpeg",
        texto:"Grande confusão, mas a foto mais gangstar do mundo.",
        extra:"Amo o detalhe de você segurando meus braços."
    },
];

function criarMemorias(){
    galeria.innerHTML = "";

    memorias.forEach((memoria, index) => {
        const card = document.createElement("div");

        card.className = "memoria";

        const rotacoes = ["-3deg","2deg","-2deg","3deg","1deg"];
        card.style.setProperty("--rotacao", rotacoes[index % rotacoes.length]);

        card.innerHTML = `
            <div class="foto">
                <img src="${memoria.foto}" alt="${memoria.titulo}" onerror="this.style.display='none'; this.parentElement.innerHTML='📸';">
            </div>

            <h2>${memoria.titulo}</h2>
            <p>${memoria.data}</p>
        `;

        card.onclick = () => abrirModal(memoria);

        galeria.appendChild(card);
    });
}

function abrirModal(memoria){
    modalFoto.src = memoria.foto;
    modalTitulo.textContent = memoria.titulo;
    modalData.textContent = memoria.data;
    modalTexto.textContent = memoria.texto;
    modalExtra.textContent = memoria.extra;

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

criarMemorias();