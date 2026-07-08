const ceu = document.getElementById("ceu");

const fraseCard = document.getElementById("fraseCard");
const fechar = document.getElementById("fechar");

const fraseEmoji = document.getElementById("fraseEmoji");
const fraseTexto = document.getElementById("fraseTexto");
const fraseAutor = document.getElementById("fraseAutor");

let borboletaAtual = null;

const frases = [
    {
        emoji:"🦋",
        texto:"Você é a ideia que Platão teria guardado no mundo das formas.",
        autor:"Cantadinhas"
    },
    {
        emoji:"🦋",
        texto:"Se amar você é luta de classes, eu já escolhi meu lado.",
        autor:"Cantadinhas"
    },
    {
        emoji:"🦋",
        texto:"Você é aquele trecho que eu sublinharia em todos os livros da minha vida.",
        autor:"Cantadinhas"
    },
    {
        emoji:"🦋",
        texto:"No meio do caos, você virou a minha única constante.",
        autor:"Cantadinhas"
    },
    {
        emoji:"🦋",
        texto:"Você não é nota de rodapé. Você é o capítulo inteiro.",
        autor:"Cantadinhas"
    },
    {
        emoji:"🦋",
        texto:"Meu coração aboliu a propriedade privada: agora tudo nele é seu.",
        autor:"Cantadinhas"
    },
    {
        emoji:"🦋",
        texto:"No meio do inverno, aprendi enfim que havia em mim um verão invencível.",
        autor:"Albert Camus"
    },
    {
        emoji:"🦋",
        texto:"Onde quer que eu esteja, seja qual for a paisagem, eu sempre saberei voltar para ti.",
        autor:"José Saramago"
    },
    {
        emoji:"🦋",
        texto:"Amar é encontrar na felicidade de outro a própria felicidade.",
        autor:"Gottfried Wilhelm Leibniz"
    },
    {
        emoji:"🦋",
        texto:"Tudo o que amamos profundamente torna-se parte de nós.",
        autor:"Helen Keller"
    },
    {
        emoji:"🦋",
        texto:"Sei de uma felicidade: amar e ser amado.",
        autor:"George Sand"
    },
    {
        emoji:"🦋",
        texto:"Não se ama alguém porque é perfeito; ama-se apesar do fato de não o ser.",
        autor:"Jodi Picoult"
    },
    {
        emoji:"🦋",
        texto:"Duvida que as estrelas sejam fogo... mas nunca duvides do meu amor.",
        autor:"William Shakespeare"
    },
    {
        emoji:"🦋",
        texto:"De tudo, ao meu amor serei atento.",
        autor:"Vinicius de Moraes"
    },
    {
        emoji:"🦋",
        texto:"Amar é mudar a alma de casa.",
        autor:"Mario Quintana"
    },
    {
        emoji:"🦋",
        texto:"Amo-te sem saber como, nem quando, nem de onde.",
        autor:"Pablo Neruda"
    }
];

function criarBorboletas(){
    ceu.innerHTML = "";

    frases.forEach((frase) => {
        const b = document.createElement("div");

        b.className = "borboleta";
        b.textContent = frase.emoji;

        const x = 8 + Math.random() * 82;
        const y = 22 + Math.random() * 58;

        b.style.left = x + "%";
        b.style.top = y + "%";

        b.style.animationDuration = (18 + Math.random() * 14) + "s";
        b.style.animationDelay = "-" + (Math.random() * 12) + "s";

        b.onclick = () => mostrarFrase(frase, b);

        ceu.appendChild(b);
    });
}

function mostrarFrase(frase, borboleta){
    if(borboletaAtual){
        borboletaAtual.classList.remove("pausada");
    }

    borboletaAtual = borboleta;
    borboleta.classList.add("pausada");

    fraseEmoji.textContent = frase.emoji;
    fraseTexto.textContent = frase.texto;
    fraseAutor.textContent = `— ${frase.autor}`;

    fraseCard.classList.add("mostrar");
}

function fecharFrase(){
    fraseCard.classList.remove("mostrar");

    if(borboletaAtual){
        borboletaAtual.classList.remove("pausada");
        borboletaAtual = null;
    }
}

fechar.onclick = fecharFrase;

fraseCard.onclick = (event) => {
    if(event.target === fraseCard){
        fecharFrase();
    }
};

criarBorboletas();