const listsContainerElGen = (title) => {
    const container = document.createElement("div");
    const titleEl = document.createElement("h3");
  
    container.className = "lists-container";
    titleEl.textContent = title;
  
    container.append(titleEl);
    return container;
  };
  
  const cardsListElGen = () => {
    const container = document.createElement("div");
  
    container.className = "cards-list";
  
    return container;
  };
  
  const cardElGen = (imageData) => {
    const imageEl = document.createElement("img");
  
    imageEl.className = "card-item";
    imageEl.src = `https://image.tmdb.org/t/p/w500${imageData.poster_path}`;
    imageEl.alt = imageData.name;
  
    return imageEl;
  };
  
  export { cardElGen, cardsListElGen, listsContainerElGen };

  const navel = () => {
    const mainEl = document.createElement ('div')
    const wrapperEl = document.createElement ('div');
    const imgEl = document.createElement ('img');
    const inputEl = document.createElement ('input');
    const linksEl = document.createElement ('div');
    const linksListEL = document.createElement ('ul');
    const text1El = document.createElement ('li');
    const text2El = document.createElement ('li');
    const labelEl = document.createElement ('label');
    const selectEl = document.createElement ('select');
    const optionEl = document.createElement ('option');
    
    wrapperEl.className = 'search';

    imgEl.src = 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png';
    imgEl.alt = 'netflix-clone-logo';

    inputEl.setAttribute('type', 'text');
    inputEl.setAttribute('placeholder', 'search');
    linksEl.className = 'links';
    linksListEL.className = 'links-list';
    text1El.textContent = 'TV Shows';
    text2El.textContent = 'Movies';

    labelEl.setAttribute('for', 'categories');
    labelEl.textContent = 'Categories';
    selectEl.setAttribute('name', 'categories');
    selectEl.setAttribute('id', 'categories');
    optionEl.setAttribute('value', '');

    wrapperEl.append(imgEl, inputEl);
    selectEl.append(optionEl);
    linksListEL.append(text1El, text2El, labelEl, selectEl);
    linksEl.append(linksListEL);
    mainEl.append(wrapperEl, linksEl);
    return mainEl;
   
};


const navelquery = document.querySelector('.navbar')

navelquery.append(navel());

export {navel};