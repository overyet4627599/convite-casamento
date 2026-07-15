function abrirConvite(){

    alert(
        "Seja bem-vindo ao nosso casamento!"
    );

}

let data =
new Date("2026-09-11 18:00:00");

setInterval(()=>{

    let hoje =
    new Date();

    let diferenca =
    data-hoje;

    let dias =
    Math.floor(
    diferenca/
    (1000*60*60*24)
    );

    document
    .getElementById(
    "contador"
    ).innerHTML=
    dias+" dias restantes";

},1000);


function confirmar(){

    let nome =
    document
    .getElementById(
    "nome"
    ).value;

    alert(
      nome+
      ", sua presença foi registrada!"
    );

}