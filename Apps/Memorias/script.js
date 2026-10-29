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
        titulo:"Só porque amo esses olhos",
        data:"21/06/2026",
        foto:"fotos/olho.jpg",
        texto:"Pedi foto da sua maquiagem e recebi essa perfeição.",
        extra:"Esse olhar ainda vai virar tatuagem."
    },
    {
        titulo:"Primeiro rolê que ficamos juntos",
        data:"24/06/2026",
        foto:"fotos/beijo.jpg",
        texto:"O dia que saímos com nossos amigos e ficamos de casal pela primeira vez, copa do mundo, 3x0 Brasil contra Escocia",
        extra:"❤️ Primeira grande memória do Pink'n'Punk."
    },
    {
        titulo:"Nossa primeira foto juntos",
        data:"29/06/2026",
        foto:"fotos/pr.jpeg",
        texto:"Grande confusão, mas a foto mais gangstar do mundo.",
        extra:"Amo o detalhe de você segurando meus braços."
    },
    {
        titulo:"Eu",
        data:"05/07/2026",
        foto:"fotos/eu.jpeg",
        texto:"Eu no seu ponto de vista",
        extra:""
    },
      {
        titulo:"Rolezinho",
        data:"05/07/2026",
        foto:"fotos/rlz.jpeg",
        texto:"Rolezinho em copa do mundo com meus amigos",
        extra:"Saudades dos rolês numa segunda 14h"
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
    {
        titulo:"Rolezin",
        data:"24/07/2026",
        foto:"fotos/2407s.jpeg",
        texto:"Filmezinho com o Heitor",
        extra:"Nós dois, meus irmão e minha cunhada, assistindo Minions e tirando fotos no estacionamento"
    },
    {
        titulo:"Corujão",
        data:"01/08/2026",
        foto:"fotos/0108.jpeg",
        texto:"Corujão com o Heitor",
        extra:"Brincamos de carrinho e avião, jogamos bola, jogamos FIFA e tivemos um vislumbre do nosso futuro"
    },
     {
        titulo:"Churrasco",
        data:"02/08/2026",
        foto:"fotos/0210an.jpeg",
        texto:"Churrasquinho aqui em casa, você conheceu a Alice nesse dia",
        extra:"Até onde me lembro, a primeira vez que você veio aqui"
    },
      {
        titulo:"O Pedido",
        data:"08/10/2026",
        foto:"fotos/ped.jpeg",
        texto:"A pergunta mais importante da minha vida, o ''Sim'' mais importante que já ouvi",
        extra:"Por enquanto..."
    },
    {
        titulo:"Seu aniversário",
        data:"10/08/2026",
        foto:"fotos/1008a.jpeg",
        texto:"Primeira vez que fui na sua casa, primeira vez que passamos um aniversário juntos",
        extra:"Primeiro de muitos"
    },
    {
        titulo:"Gelato",
        data:"15/08/2026",
        foto:"fotos/1508.jpeg",
        texto:"Nossa rotina normal, você veio pra minha casa, ficamos de love com gosma preta na cara. Depois saímos para tomar sorvete e superamos um sustinho de gravidez",
        extra:"Amo te ver perto do Heitor"
    },
    {
        titulo:"Bolo da sua sogra",
        data:"23/08/2026",
        foto:"fotos/2308pa.jpeg",
        texto:"Como sempre, minha mãe sendo ela, desmarcando o almoço em que vocês iriam se conhecer, mas sem problemas, fomos sozinhos mesmo e foi bom como sempre é",
        extra:"Nesse dia meu pai também chegou em uma péssima hora kkkkk"
    },
    {
        titulo:"Rolê performático",
        data:"23/08/2026",
        foto:"fotos/2309p.jpeg",
        texto:"Compramos livros e fomos ler no ccc enquanto debatiamos sobre, foi gostoso demais",
        extra:"Pra variar, alguns amigos chegaram e estragaram o rolê de leitura"
    },
    {
        titulo:"Quarta-Feira's",
        data:"26/08/2026",
        foto:"fotos/2608a.jpeg",
        texto:"Essa foi nossa primeira quarta-feira mágica, almoçamos juntos, fomos pra sua casa tirar um cochilo e um amorzinho",
        extra:"Primeira de muitas"
    },
    {
        titulo:"Eu x Te x Amo/Pra x Sempre",
        data:"28/08/2026",
        foto:"fotos/2808m.jpeg",
        texto:"Fiz a maior demonstração de amor do mundo te dei aula de matemática",
        extra:"Tive que estudar uma matéria que eu não via a anos para te ensinar"
    },
    {
        titulo:"Boxe e JJ",
        data:"04/09/2026",
        foto:"fotos/bx.jpeg",
        texto:"Lutamos muito, estreamos minha luva nova e foi a primeira vez que não peguei muito leve com você, foi lindo te ver querendo me matar porque eu te bati muito forte",
        extra:"Vá para (tetel) e entenda porque nosso dia foi perfeito do começo ao fim hehe"
    },
    {
        titulo:"Tetel",
        data:"04/09/2026",
        foto:"fotos/0409tt.jpeg",
        texto:"Esse dia preciso assumir, estavámos lindos, lembro perfeitamente da minha reação ao te ver saindo de casa, o quão linda você estava",
        extra:"Nossa primeira vez num motel, mas o melhor de lá foi nossa conversa"
    },
    {
        titulo:"Independência ou Morte",
        data:"07/09/2026",
        foto:"fotos/0709tt.jpeg",
        texto:"Segunda-feira, fomos caminhar na praça, tropeçamos e fomos parar no motel, com direito a hidro e charuto, vídeo para encher o saco dos meus amigos e fotinhas indecentes. Depois ainda encheu a cara com meu pai e foi carregada pra casa",
        extra:"Comemorando a independência do nossa país do melhor jeito possível"
    },
    {
        titulo:"Pinturas",
        data:"20/09/2026",
        foto:"fotos/2009.jpeg",
        texto:"Tardezinha de pinturas e brincadeiras com o Heitor",
        extra:"E minha borboleta ficou linda, sou um DaVinci"
    },
    {
        titulo:"Aniversário do Mini Cunhas",
        data:"23/09/2026",
        foto:"fotos/2309ah.jpeg",
        texto:"Como sempre: amorzinho, brincar com o Heitor, jogar FIFA e finalizamos com Pizza",
        extra:"Nossa rotina perfeita"
    },
    {
        titulo:"Poker",
        data:"26/09/2026",
        foto:"fotos/2609pk.jpeg",
        texto:"Noitezinha de Poker com nossos amigos",
        extra:"Com direito a voltinha de carro e o Rae no porta-malas"
    },
    {
        titulo:"Dô nas costa",
        data:"29/09/2026",
        foto:"fotos/2909cb.jpeg",
        texto:"Você veio matar aula aqui em casa pela primeira vez, pós um rolê muito doido com meus amigos aqui",
        extra:"Dormimos na cama do meu pai, você me acordou ums vinte vezes, eu pedia carinho nas costas e mais cinco minutinhos"
    },
    {
        titulo:"Café",
        data:"06/10/2026",
        foto:"fotos/0610c.jpeg",
        texto:"Segunda vez matando aula aqui, dormimos muito, acordamos para almoçar e tomar um café com um pato gigante na mesa",
        extra:"Saudades de dormir agarradinho"
    },
    {
        titulo:"(Amar)quistas",
        data:"10/10/2026",
        foto:"fotos/1010l.jpeg",
        texto:"Fui pra rua para lutar pelos nossos direitos, corri demais, colei lambe-lambe e xinguei bolsonaristas",
        extra:"Não teve um segundo que eu não pensei em você lá comigo"
    },
    {
        titulo:"Rita Lee",
        data:"14/10/2026",
        foto:"fotos/1410h.jpeg",
        texto:"Você saiu sozinha com a minha avó e compramos a Ritinha",
        extra:"Por coincidência do destino, a idade dela é a mesma do nosso namoro"
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