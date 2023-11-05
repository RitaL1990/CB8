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
const Favorites = [];

function addToFavorites(value) {
   Favorites.push(value);
   return Favorites;
}

console.log(addToFavorites("Gatsby"));


function showFavorites(value) {
    Favorites.push(value);
    return Favorites;
}

console.log(showFavorites("Gatsby", "Inception", "shutterIsland"));


function removeFromFavorites(value) {
    Favorites.unshift(value);
    return Favorites;
}

console.log(removeFromFavorites("Gatsby"));
