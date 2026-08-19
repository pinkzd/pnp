const campo = document.getElementById("campo");
const contadorFlores = document.getElementById("contadorFlores");

const modal = document.getElementById("modal");
const fechar = document.getElementById("fechar");

const modalEmoji = document.getElementById("modalEmoji");
const modalTitulo = document.getElementById("modalTitulo");
const modalData = document.getElementById("modalData");
const modalTexto = document.getElementById("modalTexto");
const modalTimer = document.getElementById("modalTimer");

let florAtual = null;
let intervaloTimer = null;

const flores = [
    {
        emoji:"🌷",
        titulo:"Quando assumi tudo",
        data:"20/06/2026",
        inicio:"2026-06-20T00:00:00",
        texto:"Foi aqui que tudo mudou. A primeira flor do nosso jardim.",
        x:30,
        y:62
    },

    {
        emoji:"🌹",
        titulo:"O primeiro 'Eu te amo' de muitos",
        data:"28/06/2026",
        inicio:"2026-06-28T00:00:00",
        texto:"Aqui eu já tinha certeza que te queria pra vida inteira.",
        x:60,
        y:32
    },

    {
        emoji:"🌼",
        titulo:"Nossa primeira noite juntos",
        data:"18/07/2026",
        inicio:"2026-07-18T00:00:00",
        texto:"Essa noite foi perfeita em tudo que eu poderia imaginar.",
        x:20,
        y:12
    },

    {
        emoji:"💐",
        titulo:"Pedido de namoro",
        data:"08/08/2026",
        inicio:"2026-08-08T00:00:00",
        texto:"Mesmo sentindo que já somos casados, lhe pedi em namoro, a melhor coisa que já fiz.",
        x:54,
        y:23
    },

    {
        emoji:"🌹",
        titulo:"Um mês desde que dormimos juntos pela primeira vez",
        data:"18/08/2026",
        inicio:"2026-07-18T00:00:00",
        texto:"Sinto tanta saudades de dormir agarradinho com você.",
        x:30,
        y:22
    },

    {
        emoji:"🌼",
        titulo:"O sonho e a missa",
        data:"02/08/2026",
        inicio:"2026-08-02T00:00:00",
        texto:"Nessa missa Deus me mostrou que você é a mulher da minha vida.",
        x:52,
        y:60
    }
];


function criarFlores(){

    campo.innerHTML = "";

    flores.forEach((flor) => {

        const elemento = document.createElement("div");

        elemento.className = "flor";

        elemento.style.left = flor.x + "%";
        elemento.style.top = flor.y + "%";

        elemento.innerHTML = `
            ${flor.emoji}
            <span class="nome-flor">${flor.titulo}</span>
        `;

        elemento.onclick = () => abrirModal(flor);

        campo.appendChild(elemento);
    });

    contadorFlores.textContent =
        `${flores.length} flores cultivadas ❤️`;
}


function abrirModal(flor){

    florAtual = flor;

    modalEmoji.textContent = flor.emoji;
    modalTitulo.textContent = flor.titulo;
    modalData.textContent = flor.data;
    modalTexto.textContent = flor.texto;

    modal.style.display = "flex";

    atualizarTimer();

    clearInterval(intervaloTimer);

    intervaloTimer = setInterval(() => {

        atualizarTimer();

    }, 1000);
}


function atualizarTimer(){

    if(!florAtual) return;

    const inicio = new Date(florAtual.inicio);
    const agora = new Date();

    let diferenca = agora - inicio;

    if(diferenca < 0){

        modalTimer.textContent = "Esse momento ainda vai acontecer ❤️";

        return;
    }

    const segundosTotais =
        Math.floor(diferenca / 1000);

    const dias =
        Math.floor(segundosTotais / 86400);

    const horas =
        Math.floor(
            (segundosTotais % 86400) / 3600
        );

    const minutos =
        Math.floor(
            (segundosTotais % 3600) / 60
        );

    const segundos =
        segundosTotais % 60;


    modalTimer.textContent =
        `${dias} dias, ` +
        `${horas} horas, ` +
        `${minutos} minutos e ` +
        `${segundos} segundos`;
}


function fecharModal(){

    modal.style.display = "none";

    clearInterval(intervaloTimer);

    intervaloTimer = null;

    florAtual = null;
}


fechar.onclick = fecharModal;


modal.onclick = (event) => {

    if(event.target === modal){

        fecharModal();

    }

};


criarFlores();