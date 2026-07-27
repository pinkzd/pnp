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
    {
        titulo:"Nossos amigos",
        data:"11/07/2026",
        foto:"fotos/amigos.jpeg",
        texto:"Eram seus amigos, vim emprestado e acabei amando todos",
        extra:"Ganhei até um amante, beijinhos para o Leo."
    },
    {
        titulo:"Casalzão",
        data:"10/07/2026",
        foto:"fotos/casalzão.jpeg",
        texto:"Eu amo tanto essa foto, estamos tão lindos nela",
        extra:"❤️ Primeira foto nossa que postamos juntos"
    },
     {
        titulo:"Eu",
        data:"05/07/2026",
        foto:"fotos/eu.jpeg",
        texto:"Eu no seu ponto de vista",
        extra:""
    },
     {
        titulo:"Olhar",
        data:"11/07/2026",
        foto:"fotos/olhar.png",
        texto:"Eu amo tanto o jeito que você me olha nessa foto",
        extra:"✨Seus olhinhos brilhando✨"
    },
     {
        titulo:"Você",
        data:"10/07/2026",
        foto:"fotos/voce.jpeg",
        texto:"Você na minha  visão",
        extra:"É assim que eu te vejo"
    },
     {
        titulo:"Sorriso",
        data:"11/07/2026",
        foto:"fotos/sorriso.jpeg",
        texto:"Eu amo tanto esse seu sorriso",
        extra:"Faço piadinhas e gracinhas só para vê-lo"
    },
     {
        titulo:"Abraço",
        data:"11/07/2026",
        foto:"fotos/segura.jpeg",
        texto:"Nessa foto você me agarra como se eu fosse fugir",
        extra:"Mas você sebe que eu nunca irei a lugar algum"
    },
     {
        titulo:"Rolezinho",
        data:"05/07/2026",
        foto:"fotos/rlz.jpeg",
        texto:"Rolezinho em copa do mundo com meus amigos",
        extra:"Saudades dos rolês numa segunda 14h"
    },
     {
        titulo:"T",
        data:"17/07/2026",
        foto:"fotos/nos.jpg",
        texto:"Essa noite foi muito importante pra gente",
        extra:"(que casal tesudo nós somos)"
    },
     {
        titulo:"Bandido não, Malandro!",
        data:"18/07/2026",
        foto:"fotos/bandido.jpg",
        texto:"Nosso primeiro soninho juntos, e outras coisinhas junto também, hehehe",
        extra:"Primeira de muitas"
    },
     {
        titulo:"Casadinhos",
        data:"18/07/2026",
        foto:"fotos/casados.jpg",
        texto:"Nosso dia de marido e mulher",
        extra:"Um dia, tivemos um spoiler da nossa vida inteira"
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