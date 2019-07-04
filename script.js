// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi "Fizz" al posto del numero,
// per i multipli di 5, stampi "Buzz".
//Per i multipli sia di 3 che di 5, stampa 'FizzBuzz'

// creo un ciclo che mi stampi 100 numeri
var i = 1;
var fizz = false;

while (i <= 100) {

  //creo un controllo all'interno del ciclo per cercare i multipli di 3
  if(i % 3 == 0){
    console.log('controllo condizione: ' + i + (i % 3 == 0));
  }
  else if(i % 5 == 0){
    console.log('controllo condizione: ' + i + (i % 5 == 0));
  }
  console.log(i);
  i++;
}
