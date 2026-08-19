const paginas = document.querySelectorAll(".pagina");

const paginaAtualTexto =
    document.getElementById("paginaAtual");

const totalPaginasTexto =
    document.getElementById("totalPaginas");

let paginaAtual = 0;


/* =====================================
   CONFIGURAÇÃO
===================================== */

totalPaginasTexto.textContent =
    String(paginas.length).padStart(2, "0");


/* =====================================
   MOSTRAR PÁGINA
===================================== */

function mostrarPagina(numero){

    if(numero < 0){
        numero = 0;
    }

    if(numero >= paginas.length){
        numero = paginas.length - 1;
    }

    paginas.forEach((pagina, index) => {

        pagina.classList.remove("ativa");

        if(index === numero){
            pagina.classList.add("ativa");
        }

    });

    paginaAtual = numero;

    paginaAtualTexto.textContent =
        String(numero + 1).padStart(2, "0");

}


/* =====================================
   PRÓXIMA
===================================== */

function proximaPagina(){

    if(paginaAtual < paginas.length - 1){

        mostrarPagina(paginaAtual + 1);

    }

}


/* =====================================
   ANTERIOR
===================================== */

function paginaAnterior(){

    if(paginaAtual > 0){

        mostrarPagina(paginaAtual - 1);

    }

}


/* =====================================
   CAPA
===================================== */

function irParaCapa(){

    mostrarPagina(0);

}


/* =====================================
   TECLADO
===================================== */

document.addEventListener(
    "keydown",
    function(event){

        if(event.key === "ArrowRight"){
            proximaPagina();
        }

        if(event.key === "ArrowLeft"){
            paginaAnterior();
        }

        if(event.key === "Home"){
            irParaCapa();
        }

    }
);


/* =====================================
   TOUCH / SWIPE
===================================== */

let toqueInicialX = 0;
let toqueFinalX = 0;


document.addEventListener(
    "touchstart",
    function(event){

        toqueInicialX =
            event.changedTouches[0].screenX;

    },
    {passive:true}
);


document.addEventListener(
    "touchend",
    function(event){

        toqueFinalX =
            event.changedTouches[0].screenX;

        verificarSwipe();

    },
    {passive:true}
);


function verificarSwipe(){

    const distancia =
        toqueFinalX - toqueInicialX;

    const minimo = 60;


    if(Math.abs(distancia) < minimo){
        return;
    }


    if(distancia < 0){

        proximaPagina();

    }else{

        paginaAnterior();

    }

}


/* =====================================
   INICIAR
===================================== */

mostrarPagina(0);