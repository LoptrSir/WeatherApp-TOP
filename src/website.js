//WeatherApp

//TODO
//fetchWeather() to accept input
//giphy function
//temp button logic


      //misc apikey url stuff
// weatherApp search example for bulk 'http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=bulk'
//how to modify this url for my search?
//weatherBaseUrl = 'Base URL: http://api.weatherapi.com/v1'
//Current Weather: /current.json
//currentWeather zipcode: https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=ZIP_CODE
// https://api.weatherapi.com/v1/current.json?key=9a15cd9d2f10400dbc7152440242003&q=ZIP_CODE
// `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${searchResult}`

//website.js

//Declarations
const locationForm = document.getElementById("search-location");
const currentLocation = document.querySelector(".current-location");
const currentCondition = document.querySelector(".current-condition");
const currentTemp = document.querySelector(".current-temp");
const radioButtonF = document.getElementById('fahrenheit');  //can this be consolidated into queryselectorall and still function
const radioButtonC = document.getElementById('celsius');

const defaultLocation = `https://api.weatherapi.com/v1/current.json?key=9a15cd9d2f10400dbc7152440242003&q=84129`;

const defaultGifSearch = "random weather";
const weatherApiKey = "9a15cd9d2f10400dbc7152440242003";
const gifyApiKey = "OLRY4DR4fNBTQXbcI1NBFibXOW6q39k7";

//functions

// create validateLocation (input) {
//    validate/reject input
//  return result
//  }

const fetchWeather = async (displayLocation, temperatureUnit) => {
  try {
    const response = await fetch(displayLocation, { mode: "cors" });
    const data = await response.json();
    const temperature = (temperatureUnit === 'fahrenheit') ? data.current.temp_f + ' F' : data.current.temp_c + ' C';
    currentLocation.innerHTML = data.location.name;
    currentCondition.innerHTML = data.current.condition.text;
    currentTemp.innerHTML = temperature;


    console.log(data);
  } catch (error) {
    console.error("this is an error", error);
  }
};

//eventListeners
radioButtonF.addEventListener('change', function() {
  if (this.checked) {
    fetchWeather(defaultLocation, 'fahrenheit');
  }
});

radioButtonC.addEventListener('change', function() {
  if (this.checked) {
    fetchWeather(defaultLocation, 'celsius');
  }
});

locationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // get input
  //call validateInputFunction pass input
  // call searchfunction and pass input
  // clear input
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

    //TOBE created Funtcions
//const fetchGif = async (searchGif) => {
//MODIFY this as needed
//   try {
//     const response = await fetch(searchGif, { mode: "cors" });
//     const data = await response.json();
//     img.src = data.data.images.original.url;
//   } catch (error) {
//     console.error("Error fetching GIF:", error);
//   }
// };

// function defaultGifLoader() {
//   const defaultUrl = `https://api.giphy.com/v1/gifs/translate?api_key=${gifyApiKey}&s=${defaultGifSearch}`;
//   console.log("newGifBtn:", defaultUrl);
//   fetchGif(defaultUrl);
// }

//function searchGifLoader() {
//   let searchTerm = document.getElementById("search-input").value;
//   console.log("submitBtn searchTerm:", searchTerm);
//   const modifiedUrl = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchTerm}`;
//   console.log("submitBtn:", modifiedUrl);
//   fetchGif(modifiedUrl);
//   document.getElementById("search-input").value = "";
// }
