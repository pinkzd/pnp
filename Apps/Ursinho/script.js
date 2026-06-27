const urso=document.getElementById("urso");

const fala=document.getElementById("fala");

const frases = [

"❤️ O Pink pediu para eu lembrar que ele continua apaixonado por você.",

"🧸 Oi, Punkzinha. Vim conferir se você já sorriu hoje.",

"☕ Aposto que ele adoraria tomar um café com você agora.",

"🤍 Se ele demorou para responder, provavelmente está trabalhando... mas pensando em você.",

"🌸 Você é oficialmente a flor favorita deste jardim.",

"🐻 Recebi ordens para distribuir um abraço bem apertado.",

"✨ Atualização do sistema: você continua sendo a pessoa favorita do Pink.",

"📨 Tenho um recado importante: ele sente sua falta.",

"🌙 Espero que seu dia esteja sendo tão bonito quanto você.",

"🍕 Vale um encontro com pizza e filme, não vale?",

"🌧️ Mesmo nos dias cinzentos, você continua colorindo o mundo dele.",

"💌 Acabei de verificar... o coração dele continua ocupado por você.",

"🤭 Sabia que ele sorri quando vê uma mensagem sua?",

"🩷 Missão do dia: lembrar você do quanto é especial.",

"🌻 Se existisse um prêmio de Punkzinha mais incrível, você ganharia.",

"🎸 O Pink disse que a próxima música boa ele quer ouvir do seu lado.",

"📖 Ainda existem muitos capítulos esperando vocês.",

"🍿 Eu já reservei um lugar para a próxima maratona de filmes.",

"🧸 O estoque de abraços continua infinito.",

"❤️ Status do coração dele: disponível apenas para você.",

"🌌 Você virou a constelação favorita dele.",

"✨ Atualização concluída: nada mudou. Ele ainda gosta muito de você.",

"🐧 Às vezes ele parece sério... mas eu sei que por dentro ele é um ursinho.",

"🤍 Hoje seria um ótimo dia para um abraço demorado.",

"🎵 Algumas músicas lembram vocês dois. Outras ainda vão lembrar.",

"🌸 Cada memória nova faz o nosso jardim crescer.",

"💭 O Pink vive imaginando os próximos dates.",

"☁️ Não importa a distância, eu sempre encontro um jeito de mandar carinho.",

"🍫 Lembrete: você merece um chocolate hoje.",

"📷 Ainda temos muitas fotos para tirar juntos.",

"🤗 Abraço virtual entregue com sucesso!",

"💞 Sistema confirma: vocês formam uma dupla muito bonita.",

"🎮 Missão secundária: fazer a Punkzinha sorrir.",

"🩷 Seu sorriso continua sendo um dos lugares favoritos do Pink.",

"🌹 Algumas pessoas entram na nossa vida. Outras fazem dela um jardim.",

"☀️ Bom dia, Punkzinha. Hoje também vai dar tudo certo.",

"🌙 Boa noite. Dorme bem... o Ursinho faz companhia enquanto isso.",

"❤️ Se ninguém disse hoje, eu digo: você é muito importante.",

"🧸 Estou de plantão até o próximo abraço.",

"✨ Fim da mensagem. Agora vai lá e cuida desse sorriso."

];

function abraco(){

urso.textContent="🤗";

fala.textContent="Abraço enviado ❤️";

setTimeout(()=>{

urso.textContent="🧸";

},1200);

}

function beijo(){

urso.textContent="😘";

fala.textContent="Beijinho entregue ❤️";

setTimeout(()=>{

urso.textContent="🧸";

},1200);

}

function carinho(){

urso.textContent="🥹";

fala.textContent="Carinho enviado.";

setTimeout(()=>{

urso.textContent="🧸";

},1200);

}

function conversar(){

let i=Math.floor(Math.random()*frases.length);

fala.textContent=frases[i];

}