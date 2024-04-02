//WeatherApp
//User Interface Module
//ui.js

//Imports
import { fetchWeather,
} from "./weather.js";

// //Declarations
export const locationForm = document.getElementById("search-location");
export const currentLocation = document.querySelector(".current-location");
export const radioButtonF = document.getElementById("fahrenheit");
export const radioButtonC = document.getElementById("celsius");
export const weatherApiKey = "9a15cd9d2f10400dbc7152440242003";
export const defaultLocation = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=84129`;
export let currentLocationUrl = defaultLocation;

//Event Listeners
export function attachEventListeners() {
  radioButtonF.addEventListener("change", function () {
    if (this.checked) {
      fetchWeather(currentLocationUrl, "fahrenheit");
    }
  });

  radioButtonC.addEventListener("change", function () {
    if (this.checked) {
      fetchWeather(currentLocationUrl, "celsius");
    }
  });

  locationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const location = document.getElementById("location-input").value; 
    currentLocationUrl = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${encodeURIComponent(
      location
    )}`;
    fetchWeather(currentLocationUrl, "fahrenheit");
    document.getElementById("location-input").value = "";
  });
}
