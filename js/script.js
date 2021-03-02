//  creo un array vuoto
var fizzBuzzArray = [];
/*
  aggiungo 100 elem. al mio array:
  - se il modulo di 15 da resto 0 allora inserisco la stringa FrizzBuzz
  - se il modulo di 3 da resto 0 allora inserisco la stringa Frizz
  - se il modulo di 5 da resto 0 allora inserisco la stringa Buzz
  - altrimenti inserisco il valore della var i
*/
for (var i=1; i <= 100; i++) {
    if (i % 15 == 0){
        fizzBuzzArray.push("FizzBuzz");
    } else if (i % 3 == 0){
        fizzBuzzArray.push("Fizz");
    } else if (i % 5 == 0) {
        fizzBuzzArray.push("Buzz");
    } else {
        fizzBuzzArray.push(i);
    }
}
//  stampo il mio array sotto forma di lista a schermo
for (var i = 0; i < fizzBuzzArray.length; i++) {
  document.getElementById('lista_array').innerHTML += "<li>" + fizzBuzzArray[i] + "</li>";
}
