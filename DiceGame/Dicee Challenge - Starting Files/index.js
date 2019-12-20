var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImage = "images/dice" + randomNumber1 +".png";

var randomImage2 = "images/dice" + randomNumber2 +".png";

var winner = randomNumber1 > randomNumber2;
var draw = randomNumber1 === randomNumber2;


window.onload = function()
{
    document.getElementById('Imagen1').src = randomImage;
    document.getElementById("Imagen2").src = randomImage2;

    var textoGanador = this.document.getElementById("texto")
    if(winner)
    {
       textoGanador.innerHTML = "Player 1 wins";
    }
    else if(!winner && draw == false)
    {
        textoGanador.innerHTML = "Player 2 wins";
    }
    else
    {
        textoGanador.innerHTML = "Draw!";
    }
}


