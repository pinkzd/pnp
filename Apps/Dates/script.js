const listaDates = document.getElementById("listaDates");

const dates = [
 
    {
        emoji: "🎬",
        titulo: "Noite de filme",
        descricao: "Maratona de Senhor dos Anéis, com almoço, café da tarde e janta"
    },

    {
        emoji: "🎨",
        titulo: "Artistas",
        descricao: "Fundue e Pintar quadros"
    },
  
   
];

function mostrarDates(){
    listaDates.innerHTML = "";

    dates.forEach((date) => {
        const card = document.createElement("div");

        card.className = "date-card";

       card.innerHTML = `
    <div class="emoji">${date.emoji}</div>

    <h2>${date.titulo}</h2>

    <div class="linha"></div>

    <p>${date.descricao}</p>

    
`;

        listaDates.appendChild(card);
    });
}

mostrarDates();