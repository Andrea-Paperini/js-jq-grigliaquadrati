$(".quadrato").click(function() {
    $(this).addClass("active");
});


// Creo 15 numeri che corrispondono alla posizione dei quadrati che prenderanno la classe bomba
var posizioneBombe = [];
do {
    var numero = generaRandom(0, 63);
    if (!posizioneBombe.includes(numero)) {
        posizioneBombe.push(numero);
    }
} while (posizioneBombe.length <= 15);
console.log("Gli indici delle bombe sono: " + posizioneBombe);

//prendo il quadrato con la posizione "bomba" e gli aggiungo la classe bomba (assegnazione classe)
for (var i = 0; i < posizioneBombe.length; i++) {
    $('.quadrato').eq(posizioneBombe[i]).addClass('bomba');
}

function generaRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}
// metodo alternativo
// $(".quadrato").click(function() {
//     if ($(this).hasClass("bomba")) {
//         $(this).addClass("rosso");
//     }
//     else {
//         $(this).addClass("verde");
//     }
// });
