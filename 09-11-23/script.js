//Esercizio 1
const divImgEl = document.createElement("div"); //<div></div>
const divTextEl = document.createElement("div"); //<div></div>
const h1TitleEl = document.createElement("h1"); //<h1></h1>
const descriptionEl = document.createElement("p"); ////<p></p>
const btnEl = document.createElement("button"); //<button></button>

h1TitleEl.textContent = "Tu non puoi passare!";
descriptionEl.textContent = `Un Anello per domarli tutti, un anello per trovarli,
un anello per ghermirli e nell'oscurità incatenarli!`;

btnEl.textContent = 'About us!';

divImgEl.setAttribute("class", "img");
divTextEl.setAttribute("class", "text");
btnEl.setAttribute("class", "btn")

divTextEl.appendChild(h1TitleEl);
divTextEl.appendChild(descriptionEl);
divTextEl.appendChild(btnEl);
divImgEl.appendChild(divTextEl);

document.body.appendChild(divImgEl);

//Esercizio 2

btnEl.addEventListener(
    "click",
    function () {
        divImgEl.setAttribute("class", "invisible");
    }
);







