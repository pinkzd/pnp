const campo = document.getElementById("campo");
const contadorFlores = document.getElementById("contadorFlores");

const modal = document.getElementById("modal");
const fechar = document.getElementById("fechar");

const modalEmoji = document.getElementById("modalEmoji");
const modalTitulo = document.getElementById("modalTitulo");
const modalData = document.getElementById("modalData");
const modalTexto = document.getElementById("modalTexto");

const flores = [
    {
        emoji:"🌷",
        titulo:"Quando assumi tudo",
        data:"20/06/2026",
        texto:"Foi aqui que tudo mudou. A primeira flor do nosso jardim.",
        x:30,
        y:62
    },
    
    {
        emoji:"🌹",
        titulo:"O primeiro 'Eu te amo' de muitos",
        data:"29/06/2026",
        texto:"Aqui eu já tinha certeza que te queria pra vida inteira.",
        x:60,
        y:32
    },

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

    contadorFlores.textContent = `${flores.length} flores cultivadas ❤️`;
}

function abrirModal(flor){
    modalEmoji.textContent = flor.emoji;
    modalTitulo.textContent = flor.titulo;
    modalData.textContent = flor.data;
    modalTexto.textContent = flor.texto;

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

criarFlores();