/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
const fun1 = function (array) {
  for (let i = 0; i < array.length; i++) {
    // scorro l'array
    console.log(array[i]); //ritorno ogni indice
  }
};
fun1(pets);
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
const fun2 = function (array) {
  console.log(array.sort()); //sort serve ad ordinare alfabeticamente gli elementi dell'array
};
fun2(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

const fun3 = function (array) {
  console.log(array.reverse()); //reverse ordina gli elementi all'inverso
};
fun3(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const fun4 = function (array) {
  const firstElement = array[0]; //prendo il primo elemento dell'array (anche se in questo caso mi prende il primo dopo il reverse quindi redfish)
  const arrayPets = array.slice(1); // prendo l'array senza il primo elemento
  arrayPets.push(firstElement); //aggiungo il primo elemento alla fine dell'array
  console.log(arrayPets);
};
fun4(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    // indice 0
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    //indice 1
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    //indice 2
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

const fun5 = function (array) {
  for (let i = 0; i < array.length; i++) {
    //scorro l'array
    array[i].licensePlate = "T4RG4"; //prendo tutti gli oggetti usando l'indice ed aggiungo la proprietà.
    // ho aggiunto a tutti gli oggetti lo stesso valore della proprietà, non era specificato se dovesse essere diversa per ogni oggetto
  }
  console.log(array);
};
fun5(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const fun6 = function (array) {
  //aggiungo il nuovo oggetto alla fine dell'array cars usando push
  array.push({
    brand: "Suzuki",
    model: "Swift",
    color: "pink",
    trims: ["motion", "ultra", "grip"],
  });

  // scorro l'array
  for (let i = 0; i < cars.length; i++) {
    //accedo alla proprietà trims di ogni indice dell'array
    cars[i].trims.pop(); //rimuovo con pop l'ultimo elemento dell'array trims
  }
  console.log(cars);
};
fun6(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []; //nuovo array

const fun7 = function (array) {
  for (let i = 0; i < array.length; i++) {
    //scorro sempre l'array cars, perché trims è lì
    justTrims[i] = array[i].trims[0]; //nel nuovo array salvo il primo elemento di ogni trims
  }
  console.log(justTrims);
};
fun7(cars);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

const fun8 = function () {
  for (let i = 0; i < cars.length; i++) {
    const firstLetter = cars[i].color.charAt(0); //charAt prende il primo carattere della stringa
    let message = ""; //creo una varibile messaggio, ma potrei usare direttamente il console.log (mi piacciono le variabili)
    if (firstLetter === "b") {
      message = "Fizz";
    } else {
      message = "Buzz";
    }
    console.log(message);
  }
};
console.log(fun8());

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

const fun9 = function (array) {
  let i = 0;
  while (i < array.length && array[i] !== 32) {
    array[i] !== 32;
    console.log(array[i]);
    i++;
  }
};
fun9(numericArray);

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const numbersArray = [];

const fun10 = function (array) {
  for (let i = 0; i < array.length; i++) {
    //scorro l'array
    switch (array[i]) {
      case "a":
        numbersArray.push(1);
        break;
      case "b":
        numbersArray.push(2);
        break;
      case "c":
        numbersArray.push(3);
        break;
      case "d":
        numbersArray.push(4);
        break;
      case "e":
        numbersArray.push(5);
        break;
      case "f":
        numbersArray.push(6);
        break;
      case "g":
        numbersArray.push(7);
        break;
      case "h":
        numbersArray.push(8);
        break;
      case "i":
        numbersArray.push(9);
        break;
      case "l":
        numbersArray.push(10);
        break;
      case "m":
        numbersArray.push(11);
        break;
      case "n":
        numbersArray.push(12);
        break;
      case "o":
        numbersArray.push(13);
        break;
      case "p":
        numbersArray.push(14);
        break;
      case "q":
        numbersArray.push(15);
        break;
      case "r":
        numbersArray.push(16);
        break;
      case "s":
        numbersArray.push(17);
        break;
      case "t":
        numbersArray.push(18);
        break;
      case "u":
        numbersArray.push(19);
        break;
      case "v":
        numbersArray.push(20);
        break;
      case "z":
        numbersArray.push(21);
        break;
      default:
        console.log("Non ho trovato corrispondenza");
    }
  }
  console.log("Corrispondenza lettere-numeri:", charactersArray, numbersArray);
};
fun10(charactersArray);
