//WeatherApp

//website.js

//Declarations
const locationForm = document.getElementById("search-location");
const currentLocation = document.querySelector(".current-location");
const currentCondition = document.querySelector(".current-condition");
const currentTemp = document.querySelector(".current-temp");
const radioButtonF = document.getElementById('fahrenheit');  //can this be consolidated into queryselectorall and still function
const radioButtonC = document.getElementById('celsius');
const gif = document.querySelector('.gif');
const defaultGifSearch = "random weather";
const weatherApiKey = "9a15cd9d2f10400dbc7152440242003";
const defaultLocation = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=84129`;
const gifyApiKey = "OLRY4DR4fNBTQXbcI1NBFibXOW6q39k7";

//functions
const fetchWeather = async (displayLocation, temperatureUnit) => {
  try {
      //fetch and display weather
    const response = await fetch(displayLocation, { mode: "cors" });
    const data = await response.json();
    const temperature = (temperatureUnit === 'fahrenheit') ? data.current.temp_f + ' F' : data.current.temp_c + ' C';
    currentLocation.innerHTML = data.location.name + ', ' + data.location.region;
    currentCondition.innerHTML = data.current.condition.text;
    currentTemp.innerHTML = temperature;
      //fetch and display GIF
    const gifUrl = `https://api.giphy.com/v1/gifs/translate?api_key=${gifyApiKey}&s=${encodeURIComponent(currentCondition.innerHTML)}`;
    const fetchGif = await fetch(gifUrl, { mode: 'cors'});
    const returnedGif = await fetchGif.json();
    console.log('fetchGif:', fetchGif);
   gif.src = returnedGif.data.images.original.url;
  } catch (error) {
    console.error("this is an error", error);
  }
};

//eventListeners
radioButtonF.addEventListener('change', function() {
  if (this.checked) {
    fetchWeather(displayLocation, 'fahrenheit');
  }
});

radioButtonC.addEventListener('change', function() {
  if (this.checked) {
    fetchWeather(displayLocation, 'celsius');
  }
});

locationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const location = document.getElementById('location-input').value;
  const weatherApiUrl = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${encodeURIComponent(location)}`;
  fetchWeather(weatherApiUrl, 'fahrenheit'); 
  document.getElementById("location-input").value = '';
});


export function myFooter() {
  const footer = document.querySelector(".footer");
  footer.style.backgroundColor = "#333";
  footer.style.fontSize = "1rem";
  footer.style.color = "#f8afe5";
  footer.style.padding = "3px";
  footer.style.textAlign = "center";
  footer.style.position = "fixed";
  footer.style.width = "100%";
  footer.style.bottom = "0";
  footer.innerHTML = "LoptrSir";
}

myFooter();
fetchWeather(defaultLocation, 'fahrenheit');
