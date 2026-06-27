const mensagens = [

`❤️ Sim.

Se eu não respondi,
provavelmente estou trabalhando.

O silêncio nunca significa
que deixei de gostar de você.

Eu só estou ocupado agora.

Assim que puder,
eu volto.

❤️`,

`❤️ Ei...

Respira.

Eu continuo gostando de você.

Se eu sumi por algumas horas,
é porque o trabalho me chamou.

Não porque eu deixei de pensar em você.`,


`❤️ Você continua sendo importante para mim.

Não importa quanto tempo eu demore para responder.

Eu volto.

Sempre volto.`,


`❤️ Ainda gosto de você.

Ainda quero conversar com você.

Ainda quero cuidar de você.`,


`❤️ Atualização do Sistema

Status:
✔ Continua sendo especial.

Motivo da demora:
🛠 Trabalhando.

Previsão:
Assim que possível,
Arthur aparecerá por aqui ❤️`,


`❤️ Ei...
Lembra da Teoria do Caos?

O universo pode estar confuso agora,
mas o meu sentimento por você
é a única constante determinística.

O silêncio é só o trabalho.
Meu coração continua no mesmo lugar.`,


`❤️ Atenção, camarada:

O sumiço atual é apenas
a minha força de trabalho
sendo explorada pelo capital.

Não confunda alienação do trabalho
com alienação do meu afeto.

A nossa base aliada continua forte.
Eu já volto ❤️`,


`❤️ Atualização da Resistência

O silêncio nunca significa
revolução no que sinto por você.

O front de trabalho me chamou,
mas você continua sendo
o meu porto seguro e o meu ideal.

Historicamente comprovado:
Eu sempre volto.`,


`❤️ Um lembrete filosófico:

A ausência física momentânea
não altera a essência do que sinto.

Estou apenas ocupado existindo
no plano do trabalho agora.

O meu afeto por você é imutável.
Respira... Eu já volto.`,


`❤️ Para combater a dúvida:

O tempo longe não diminui
a importância que você tem.

Se eu demorar, não é abandono.
É apenas o relógio do trabalho rodando.

Você continua sendo a minha certeza
no meio de qualquer caos.`,


`❤️ Atualização Crítica

Status do Arthur:
🛠 Vendendo a força de trabalho.

Status do Sentimento:
✔ Intacto, seguro e pensando em você.

O silêncio é só foco aqui.
Te adoro. Até já.`
];

const botao = document.getElementById("botao");
const resposta = document.getElementById("resposta");

botao.onclick = () => {

    let aleatoria = Math.floor(Math.random() * mensagens.length);

    resposta.innerHTML = mensagens[aleatoria].replace(/\n/g, "<br>");

};