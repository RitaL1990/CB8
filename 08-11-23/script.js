//Esercizio 1

const sum = (first, second, third,) => first + second + third;

const sub = (first, second, third) => first - second - third;

const mult = (first, second, third) => first * second * third;

const div = (first, second, third) => first / second / third;

function calculator(fn) {
    return fn;
}

//let firstNum = prompt("Inserisci il primo numero");

//let secondNum = prompt("Inserisci il secondo numero");

//let ThirdNum = prompt("Inserisci il terzo numero");

//console.log(calculator(sub(parseInt(firstNum), parseInt(secondNum), parseInt(ThirdNum))));



//Esercizio 2
let cart = [
{
    id: 123,
    name: 'pistacchio intero',
    indirizzoperimmagine: 'https://static.piantinedaorto.it/img_prodotti/big/9074.jpg',
    description: 'pistacchio integro DOP, origine Bronte',
},
{
    id: 456,
    name: 'granella pistacchio',
    indirizzoperimmagine: 'https://www.aromasicilia.com/653-large_default/granella-pistacchio.jpg',
    description: 'granella pistacchio DOP, origine Bronte',
},
{
    id: 789,
    name: 'mandorle pelate',
    indirizzoperimmagine: 'https://agrumepuro.com/arcoria/wp-content/uploads/2021/10/mandorle-pelate.png',
    description: 'mandorle pelate, varietà Tuono',
},
]


//cart.forEach((cart) => console.log(cart));

//ForEach: Esegue callbck e viene iterato ogni singolo elemento dell'array.

cart.map((cart) => console.log(cart));

//Map: Ritorna un array con la stessa dimensione con array in ngresso,
//prendendo in considerazione anche i dati null.



//Esercizio avanzato
function f1(array1, array2) {
    //transform array
    let resultArray1 = array1.map((element) => element * 2);
    let resultArray2 = array2.map((element) => element + 5);
  
   //filter array
   resultArray1 = resultArray1.filter((element) => element > 10);
   resultArray2 = resultArray2.filter((element) => element  %2 == 0);
    
    console.log(
      resultArray1,
      resultArray2
    );
  };
                            
  let array1 = [3, 6, 9, 12];
  let array2 = [5, 10, 15, 20];
  
  
  f1(array1,array2);