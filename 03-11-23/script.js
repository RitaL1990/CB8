//Esercizio 1
function getTemperatureStatus(currentTemperature) {

    if(currentTemperature >= 30 && currentTemperature <= 40) {
        return "caldo";
    } else if(currentTemperature < 30 && currentTemperature >= 20) {
        return "mite";
    } else if(currentTemperature < 20 && currentTemperature >= 10) {
        return "freddo";
    } else {
        return "non definito"
    }
 }

 console.log(getTemperatureStatus(20));



 //Esercizio 2
 const characteristics = { 
    name: "Rita",
    surname: "Landino",
    age: "33 years",
    job: "saleswoman",
    height: "1 meter and 47 centimeters XD", 
    personality: function () {
      return "allegra ed introspettiva,"
    },
 };

 console.log("Sono una ragazza", characteristics.personality(),
  "anziché il caldo piuttosto che il freddo.")

//Esercizio avanzato
const favorites = [];

function addToFavorites(value) {
   favorites.push(value);
}

function removeFromFavorites(value) {
    const index = favorites.indexOf(value);
    if (index > -1) {
        favorites.splice(index, 1);
    }
}
function showFavorites() {
    console.log(favorites)
}

showFavorites()
addToFavorites("Gatsby");
addToFavorites("Iception"); 
addToFavorites("shutterIsland");
showFavorites()
removeFromFavorites("Gatsby")
showFavorites()
removeFromFavorites("shutterIsland")
showFavorites()
