const navel = () => {
     const navingEl = document.createElement('nav');
     const iconNavEl = document.createElement('div');
     const imgNavEl = document.createElement('img');
     const textNavEl = document.createElement('div');
     const butNav1El = document.createElement('button');
     const butNav2El = document.createElement('button');
     const butNav3El = document.createElement('button');
     const butNavingEl = document.createElement('button');

     navingEl.className = 'naving';
     iconNavEl.className = 'text-nav';
     imgNavEl.src = 'images/icons8-pianeta-terra-100.png';
     imgNavEl.alt = 'Icon Nav';
     textNavEl.className = 'text-nav';
     butNav1El.textContent = 'Home';
     butNav2El.textContent = 'Shop';
     butNav3El.textContent = 'Contact';
     butNavingEl.className = 'button-nav';
     butNavingEl.textContent = 'Log In';

     navingEl.append (iconNavEl, textNavEl, butNavingEl);
     iconNavEl.append (imgNavEl);
     textNavEl.append (butNav1El, butNav2El, butNav3El);

     return navingEl;
}

document.body.append(navel())