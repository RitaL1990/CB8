//Esercizio 1
const picturesList = async () => {
   const res = await fetch('https://picsum.photos/v2/list');
   const data = await res.json();
    
   data.map(image => console.log(image.download_url));
}

const takeList = picturesList
takeList()

//Esercizio 2

const object = {
   id: '0',
    author: 'Alejandro Escamilla',
    download_url: 'https://picsum.photos/id/0/5000/3333'
};

const picture = (dinamicity) => {
    const wrapperEl = document.createElement('div');
    const pctEL = document.createElement('img');
    const textEl = document.createElement('h1');

   wrapperEl.className = 'wrapper';
   pctEL.src = dinamicity.download_url;
   textEl.textContent = dinamicity.author;

   wrapperEl.append(pctEL, textEl)

    return wrapperEl;
};

document.body.appendChild(picture(object));


//Esercizio 3

const allPictures = async () => {
    const res = await fetch("https://picsum.photos/v2/list");
    const data = await res.json();
  
    return data;
  };

  const printAllPictures = async () => {
    const data = await allPictures ();
    data.forEach((item) => {
        const card = picture(item);
        document.body.append(card);
    });
  };

  printAllPictures();


