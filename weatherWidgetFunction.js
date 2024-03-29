let isCelsius = true;
let date = new Date();
let today = date.getHours(); 
 
const getApiUrl = (lat, lon) => 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=2bcc4123a99bf9b75c11673b0029ea8a';

const geoSuccess = position => {
  startPos = position;
  lat = startPos.coords.latitude;
  lon = startPos.coords.longitude;


  makeRequest('GET', getApiUrl(lat, lon), handleWeather);
};

const makeRequest = (type, url, callback) => {
  const req = new XMLHttpRequest();
  let response = '';

  req.open(type, url, true);

  req.onreadystatechange = () => {
    if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
      callback(req.responseText);
    }
  }
  req.send(null);
};

const setNodeContents = (node, content) => {
  document.querySelector(node).innerHTML = content;
}

const formatTemp = x => Number.parseFloat(x).toFixed(1);

const updateTempDashboard = (city, country, temp, desc) => {
  document.querySelector('#loading').remove();
  setNodeContents('.city', city);
  setNodeContents('.country', `, ${country}`);
  setNodeContents('.temp', `${temp} ºC`);
  setNodeContents('.desc', desc);
}

const getCelsius = tempKelvin => formatTemp(tempKelvin - 273);
const getFahrenheit = tempKelvin => formatTemp(1.8 * (tempKelvin - 273) + 32);

const handleToggleTemp = () => {
  console.log('clicked');
  if(isCelsius) {
    setNodeContents('.temp', tempF + ' ºF');
  } else {
    setNodeContents('.temp', tempC + ' ºC');
  }
  isCelsius = !isCelsius;
}

const handleWeather = (data) => {
  console.log(data);
  const obj = JSON.parse(data);
  city = obj.name;
  country = obj.sys.country;
  tempKelvin = obj.main.temp;
  tempF = getFahrenheit(tempKelvin);
  tempC = getCelsius(tempKelvin);
  tempDescription = obj.weather[0].main;
  
  document.querySelector('.temp').addEventListener('click', handleToggleTemp);

  updateTempDashboard(city, country, tempC, tempDescription);

  let image = document.getElementById("icon");

  if (tempDescription === "Rain") {
      if (today >= 7 && today <= 19) {
        document.body.style.background = "url('https://source.unsplash.com/b-sTYb0quYQ') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
        image.src = "img/rainy-1.svg"; 
      }

      else {
        document.body.style.background = "url('https://source.unsplash.com/LM4X_cIjjQ8') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
        image.src = "img/rainy-7.svg"; 
      }

  } else if (tempDescription === "Thunderstorm") {
      if (today >= 7 && today <= 19) {
        document.body.style.background = "url('https://source.unsplash.com/2uOcrLACf_4') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
        image.src = "img/thunder.svg"; 
      }
      else {
        document.body.style.background = "url('https://source.unsplash.com/vP5Im4q8Z6g') no-repeat center center fixed";
      }

  } else if (tempDescription === "Snow") {
      if (today >= 7 && today <= 19) {
        document.body.style.background = "url('https://source.unsplash.com/pY1FKeEP8v8') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
        image.src = "img/snowy-3.svg"; 
      }
      else {
        document.body.style.background = "url('https://source.unsplash.com/73osnYZ133o') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
        image.src = "img/snowy-6.svg"; 
      }

  } else if (tempDescription === "Clear") {
      if (today >= 7 && today <= 19) {
        document.body.style.background = "url('https://source.unsplash.com/E9aetBe2w40') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
        image.src = "img/day.svg"; 
      }
      else {
        document.body.style.background = "url('https://source.unsplash.com/UiO6KzrBTJk') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
        image.src = "img/night.svg"; 
      }

  } else if (tempDescription === "Clouds") {
      if (today >= 7 && today <= 19) {
        document.body.style.background = "url('https://source.unsplash.com/3Eqc3Ph4oRg') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
        image.src = "img/cloudy-day-2.svg"; 
      }
      else {
        document.body.style.background = "url('https://source.unsplash.com/B31OD0bsYV0') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
        image.src = "img/cloudy-night-2.svg"; 
      }

  } else 
      document.body.style.background = "url('https://source.unsplash.com/3Eqc3Ph4oRg') no-repeat center center fixed";
      document.body.style.backgroundSize = "cover";
  }


if (navigator.geolocation) {
  window.onload = () => {

    navigator.geolocation.getCurrentPosition(geoSuccess);

  };

} else { 
    alert('Geolocation is not supported! Check browser/os settings.'); 
}

const getApiUrlForecast = (lat, lon) => 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=2bcc4123a99bf9b75c11673b0029ea8a';

const geoSuccessForecast = position => {
  startPos = position;
  lat = startPos.coords.latitude;
  lon = startPos.coords.longitude;


  makeRequestForecast('GET', getApiUrlForecast(lat, lon), handleWeather);
};

// Parsing the response from the API into actual
// JavaScript objects that we can work with
let weatherDataDays = JSON.parse(this.response);

// Iterating over the list of weather objects provided
// for each day
for(let counter = 0; counter < weatherDataDays.list.length; counter++){
    // Pulling out one day object at a time from the list
    // of data provided by the API
    let currentDay = weatherDataDays.list[counter];
    // Printing out a single day object to the console
    // this is the object we will pull data from
    console.log(currentDay);
}