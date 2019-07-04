// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi "Fizz" al posto del numero,
// per i multipli di 5, stampi "Buzz".
//Per i multipli sia di 3 che di 5, stampa 'FizzBuzz'

// creo un ciclo che mi stampi 100 numeri

var i, messaggio;
i = 0;


while (i <= 100) {

  // Variabile di appoggio per cambiare il messaggio, se la condizione di verifica il Messaggio non è più = i (contatore), ma diventa un messaggio
  messaggio = i;
  // Uso AND logico per far si che tutte e due le condizioni siano vere
  if((i % 3 == 0) && (i % 5 == 0)) {
    messaggio = "FizzBuzz"
  }
  //creo un controllo all'interno del ciclo per cercare i multipli di 3
  else if(i % 3 == 0){
    messaggio = "Fizz"
  // console.log('controllo condizione: ' + i + (i % 3 == 0));
  }
  //creo un controllo all'interno del ciclo per cercare i multipli di 5
  else if (i % 5 == 0){
    messaggio = "Buzz"
  // console.log('controllo condizione: ' + i + (i % 5 == 0));
  }

    console.log(messaggio);
    i++;

}
