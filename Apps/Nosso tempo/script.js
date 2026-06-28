const inicio = new Date("2026-06-28T18:35:43");

function atualizar(){

const agora = new Date();

const diferenca = agora - inicio;

const dias = Math.floor(diferenca / 86400000);

const horas = Math.floor((diferenca % 86400000)/3600000);

const minutos = Math.floor((diferenca % 3600000)/60000);

const segundos = Math.floor((diferenca % 60000)/1000);

document.getElementById("dias").textContent = dias;

document.getElementById("horas").textContent = horas;

document.getElementById("minutos").textContent = minutos;

document.getElementById("segundos").textContent = segundos;

}

setInterval(atualizar,1000);

atualizar();