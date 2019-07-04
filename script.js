// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi "Fizz" al posto del numero,
// per i multipli di 5, stampi "Buzz".
//Per i multipli sia di 3 che di 5, stampa 'FizzBuzz'

// creo un ciclo che mi stampi 100 numeri
// var i = 1;
// // Variabile di appoggio per cambiare il numero con il testo e non modificare il contatore del ciclo
// var messaggio = "";
//
// while (i <= 100) {
//
//   //creo un controllo all'interno del ciclo per cercare i multipli di 3
//   if(i % 3 == 0){
//   // console.log(i.replace(i,"Fizz"));
//     console.log(messaggio = "Fizz");
//   // console.log('controllo condizione: ' + i + (i % 3 == 0));
//   }
//   //creo un controllo all'interno del ciclo per cercare i multipli di 5
//
//   else if(i % 5 == 0){
//     console.log(messaggio = 'Buzz');
//   // console.log('controllo condizione: ' + i + (i % 5 == 0));
//   }
//   // Uso AND logico per far si che tutte e due le condizioni siano vere
//   else if ((i % 3 == 0) && (i % 5 == 0)) {
//     messaggio="";
//     console.log(messaggio = "FizzBuzz");
//   }
//
//     console.log(i);
//     i++;
//
// }

var i = 1;
while (i <= 100) {

  //creo un controllo all'interno del ciclo per cercare i multipli di 3
  if((i % 3 == 0) && (i % 5 == 0)) {
    messaggio="";
    console.log(messaggio = "FizzBuzz");
  }
  //creo un controllo all'interno del ciclo per cercare i multipli di 5

  else if(i % 3 == 0){
  // console.log(i.replace(i,"Fizz"));
    console.log(messaggio = "Fizz");
  // console.log('controllo condizione: ' + i + (i % 3 == 0));
  }
  // Uso AND logico per far si che tutte e due le condizioni siano vere
  else if (i % 5 == 0){
    console.log(messaggio = 'Buzz');
  // console.log('controllo condizione: ' + i + (i % 5 == 0));
  }

    console.log(i);
    i++;

}
