  const weatherStatusImages = {
    Clouds: 'https://www.marcotogni.it/foto-altri-v1/fotografare-nuvole.jpg',
    Clear: 'https://e0.pxfuel.com/wallpapers/764/894/desktop-wallpaper-sunny-sky-open-sky.jpg',
    Rain: 'https://danielasalinas.com/wp-content/uploads/2021/11/look-perfetto-per-la-pioggia-800x445.png',
  }

  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
  const API_KEY = 'f022c0bd6bc996e870b2079388916229'
  
  const heroGen = (images, status, city, temp, tempMax, tempMin) => {
    const wrapperEl = document.createElement('div');
    const cityEl = document.createElement('h1');
    const temperatureEl = document.createElement('h1');
    const temperatureMaXEl = document.createElement('h3');
    const temperatureMinEl = document.createElement('h3');
    const tempMaxEl = document.createElement('h3');
    const tempMinEl = document.createElement('h3');
    const imgEl = document.createElement('img');

    wrapperEl.className = 'wrap';
    cityEl.textContent = (city);
    cityEl.className = 'cities';
    temperatureEl.className = 'temperature';
    temperatureMaXEl.className = 'temperatureMax';
    temperatureMinEl.className = 'temperatureMin';
    tempMaxEl.textContent = 'Max:';
    tempMaxEl.className = 'tempMax';
    tempMinEl.textContent = 'Min:';
    tempMinEl.className = 'tempMin';
    imgEl.className = 'image';
    
    if(status === 'Clouds') {
      imgEl.src = images['Clouds']
    } else if(status === 'Clear') {
      imgEl.src = images['Clear']
    } else {
        imgEl.src = images['Rain']
    }
    imgEl.alt = status

    
    temperatureEl.textContent = Math.floor(temp - 273.15) + '°'
    temperatureMaXEl.textContent = Math.floor(tempMax - 273.15) + '°'
    temperatureMinEl.textContent = Math.floor(tempMin - 273.15) + '°'
  
    wrapperEl.append
    (imgEl, temperatureEl, temperatureMaXEl, temperatureMinEl, cityEl, tempMaxEl, tempMinEl);
  
    return wrapperEl;
  }
  
  const resultsEl = document.createElement('div')
  document.body.append(resultsEl)
  const selectEl = document.querySelector('#categories')
  
  selectEl.addEventListener('change', (e) => {
    fetch(`${BASE_URL}?q=${e.target.value}&appid=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
     const heroEl = heroGen
     (weatherStatusImages, data.weather[0].main, data.name, data.main.temp, data.main.temp_max, data.main.temp_min)
      
      resultsEl.textContent = ''
      resultsEl.append(heroEl)
    })
  })


// Card
const cardGen = (city, temp) => {
  const containerEl2 = document.createElement('div')
  const containerEl = document.createElement('div');
  const boxCardEl = document.createElement('div');
  const titleCardEl = document.createElement('p');
  const tempCardEl = document.createElement('p');

  containerEl2.className = 'container2'
  containerEl.className = 'container';
  boxCardEl.className = 'boxCard';
  titleCardEl.textContent = (city);
  titleCardEl.className = 'cityCard';
  tempCardEl.textContent =  Math.floor(temp - 273.15) + '°';
  tempCardEl.className = 'tempCard';


  containerEl2.append(containerEl);
  containerEl.append(boxCardEl);
  boxCardEl.append(titleCardEl, tempCardEl)

  return containerEl2;
}


//footer
const footer = () => {
  const footEl = document.createElement('section');
  const textFootEl = document.createElement('h3');

  footEl.className = 'foot';
  textFootEl.textContent = 'Happy meteo!';
  textFootEl.className = 'textFoot';

  footEl.append(textFootEl);
  return footEl;
}

const citiesList = [
  'Agrigento',
  'Caltanissetta',
  'Catania',
  'Enna',
  'Messina',
  'Palermo',
  'Ragusa',
  'Siracusa',
  'Trapani'
]

Promise.all(
  citiesList.map(
      city=>fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
          const CardEl = cardGen(data.name, data.main.temp)
          document.body.append(CardEl)
      })
    )
  )
.then(() =>
  document.body.append(footer())
)
