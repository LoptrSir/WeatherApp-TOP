//WeatherApp
//User Interface Module
//ui.js

//Imports
import { fetchWeather } from "./weather.js";
import {
    locationForm,
    currentLocation,
    currentCondition,
    currentTemp,
    radioButtonF,
    radioButtonC,
    gif,
    defaultGifSearch,
    weatherApiKey,
    defaultLocation,
    gifyApiKey,
    currentLocationUrl,
} from './website.js';

// //Declarations
// const locationForm = document.getElementById("search-location");
// const currentLocation = document.querySelector(".current-location");
// const currentCondition = document.querySelector(".current-condition");
// const currentTemp = document.querySelector(".current-temp");
// const radioButtonF = document.getElementById("fahrenheit"); //can this be consolidated into queryselectorall and still function
// const radioButtonC = document.getElementById("celsius");
// const gif = document.querySelector(".gif");
// const defaultGifSearch = "random weather";
// const weatherApiKey = "9a15cd9d2f10400dbc7152440242003";
// const defaultLocation = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=84129`;
// const gifyApiKey = "OLRY4DR4fNBTQXbcI1NBFibXOW6q39k7";

//eventListeners

export function attachEventListeners() {
// export function attachEventListeners() {
  radioButtonF.addEventListener("change", function () {
    if (this.checked) {
      // const location = displayLocation;
    //   fetchWeather(displayLocation, "fahrenheit");
    fetchWeather(currentLocationUrl, "fahrenheit")
    }
  });

  radioButtonC.addEventListener("change", function () {
    if (this.checked) {
      // const location = displayLocation;
    //   fetchWeather(displayLocation, "celsius");
    fetchWeather(currentLocationUrl, "celsius");
    }
  });

  locationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const location = document.getElementById("location-input").value;
    // const weatherApiUrl = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${encodeURIComponent(
    //   location
    // )}`;
    const newLocationUrl = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${encodeURIComponent(location)}`;
    currentLocationUrl = newLocationUrl;
    // fetchWeather(weatherApiUrl, "fahrenheit");
    fetchWeather(newLocationUrl, "fahrenheit");
    document.getElementById("location-input").value = "";
  });
}
