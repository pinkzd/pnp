const barra = document.getElementById("progresso");
const status = document.getElementById("status");
const boot = document.getElementById("boot");
const desktop = document.getElementById("desktop");

const mensagens = [
    "Inicializando Pink'n'Punk...",
    "Carregando memórias...",
    "Preparando abraços...",
    "Organizando playlist...",
    "Cultivando jardim...",
    "Separando ideias de dates...",
    "Procurando fotos bonitas...",
    "Calculando saudade...",
    "Verificando nível de amor...",
    "Tudo pronto 🩷"
];

let progresso = 0;
let indice = 0;

const carregar = setInterval(() => {
    progresso += 10;
    barra.style.width = progresso + "%";
    status.textContent = mensagens[indice];
    indice++;

    if (progresso >= 100) {
        clearInterval(carregar);

        setTimeout(() => {
            boot.style.opacity = "0";

            setTimeout(() => {
                boot.style.display = "none";
                desktop.style.display = "block";
            }, 1000);
        }, 700);
    }
}, 500);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js").catch(() => {
            status.textContent = "App pronto para abrir.";
        });
    });
}
