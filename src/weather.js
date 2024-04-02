//WeatherApp
//Weather Logic Module
//weather.js

//Imports
import {
  currentLocation,
   radioButtonF,
 } from "./ui.js";

// //Declarations
export const currentCondition = document.querySelector(".current-condition");
export const currentTemp = document.querySelector(".current-temp");
export const gif = document.querySelector(".gif");
export const defaultGifSearch = "random weather";
export const gifyApiKey = "OLRY4DR4fNBTQXbcI1NBFibXOW6q39k7";

//Functions
export const fetchWeather = async (displayLocation, temperatureUnit) => {
  try {
    //fetch and display weather
    const response = await fetch(displayLocation, { mode: "cors" });
    const data = await response.json();
    const temperature =
      temperatureUnit === "fahrenheit"
        ? ((radioButtonF.checked = true), data.current.temp_f + " F")
        : data.current.temp_c + " C";
    currentLocation.innerHTML =
      data.location.name + ", " + data.location.region;
    currentCondition.innerHTML = data.current.condition.text;
    currentTemp.innerHTML = temperature;

    //fetch and display GIF
    // const gifUrl = `https://api.giphy.com/v1/gifs/translate?api_key=${gifyApiKey}&s=${encodeURIComponent(
    //   currentCondition.innerHTML
    // )}`;
    // const fetchGif = await fetch(gifUrl, { mode: "cors" });
    // const returnedGif = await fetchGif.json();
    // console.log("fetchGif:", fetchGif);
    // gif.src = returnedGif.data.images.original.url;

    console.log("fetchWeather:", currentLocation);
  } catch (error) {
    console.error("this is an error", error);
  }
};
