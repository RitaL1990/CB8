//Esercizio 1
const createEl = (element) => 
document.createElement(element);

const mockData = [
    {
        id: 1,
        roboName: 'Casi',
        price: 445,
        imageUrl: "https://robohash.org/casi",
    },
    {
        id: 2,
        roboName: 'Alex',
        price: 1000,
        imageUrl: "https://robohash.org/alex",
    },
    {
        id: 3,
        roboName: "Pippo",
        price: 30,
        imageUrl: "https://robohash.org/pippo",
    },
];

const roboProdGen = (roboData) => {

    const sectionEl = document.createElement('section');
    const h3El = document.createElement('h3');
    const roboEl = document.createElement('div');
    const wrapperEl = document.createElement('div');
    const imgEl = document.createElement('img');
    const textEl = document.createElement('div');
    const priceEl = document.createElement('p');
    const nameEl = document.createElement('h4');


    sectionEl.className = 'recommended';
    h3El.textContent = "Recommended 4 you!";
    roboEl.className = "robo-List";
    wrapperEl.className = 'robo';
    imgEl.src = roboData.imageUrl;
    imgEl.alt = roboData.roboName;
    textEl.className = 'text';
    priceEl.textContent = roboData.price + "$";
    nameEl.textContent = roboData.roboName;

    sectionEl.append(h3El, roboEl, wrapperEl)
    textEl.append(priceEl, nameEl);
    wrapperEl.append(textEl, imgEl);

    return sectionEl;
}

//mockData.map((element) => 
//document.body.append(roboProdGen(element)));


//Esercizio 2 con switch
try {
    mockData.map((element) => 
    document.body.append(roboProdGen(element)));
} catch (error) {
    switch (error.message.split("")[0]) {
        case "withoutArray":
            const erroreMessageEl = createEl ('h1')

            erroreMessageEl.textContent = "Manca l'Array"
            mockData.append(erroreMessageEl);
            break;

        case "whithoutFunction":
            const erroreMessageEl2 = createEl ('h1')

            erroreMessageEl.textContent = "Manca la funzione"
            roboProdGen.append(erroreMessageEl2);
        break;    
        default:
            console.error(error);
    }
} finally {
    console.log("Tutto funzionante");
};


//Esercizio 2 con if,else
try {
    mockData.map((element) => document.body.appendChild(roboProdGen(element)));
  } catch (error) {
    if (error.message.split(" ")[0] === "mockData") {
      console.error("Privo di array");
    } else if (error.message.split(" ")[0] === "roboProdGen") {
      console.error("Privo di funzione");
    }
  } finally {
    ("Integro");
  };
  
