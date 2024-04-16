//WeatherApp
//User Interface Module
//ui.js

//Imports
import { fetchWeather } from "./weather.js";

// //Declarations
export const locationForm = document.getElementById("search-location");
export const currentLocation = document.querySelector(".current-location");
export const radioButtonF = document.getElementById("fahrenheit");
export const radioButtonC = document.getElementById("celsius");
export const weatherApiKey = "9a15cd9d2f10400dbc7152440242003";
export const defaultLocation = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=84129`;
export let currentLocationUrl = defaultLocation;

//Functions
function displayBackgroundImage() {
  const backgroundContainer = document.getElementById("background-container");
  const backgroundImageFiles = [
    "/STScI-01GTWBKT3FWYNTD3MGGVBHMGVQ.png",
    "/STScI-01H2TX76K5HBCEP0MCHDDWV28A.jpg",
    "/STScI-01H4491XZTYDDPRGBBNC2WRP99.png",
    "/STScI-01HGGZ5KSFGCS4EZ8SZCZM3AW3.png",
    "/STScI-01HMC1710YJ6YENBJ0PFTVTWJC.png",
    "/STScI-01HQ6CGZVBNNQWRMQ13F6ZVB4J.png",
    "/STScI-01HRD3BSQ4GNW2KN7J3G5BPBVR.png",
  ];
  const backgroundImageUrls = [`https://stsci-opo.org/STScI-01HMA4QVKMBJH0PM4YX6RSH532.png`,
  `https://stsci-opo.org/STScI-01HGGZ5KSFGCS4EZ8SZCZM3AW3.png`,
  `https://stsci-opo.org/STScI-01HBBME94CY086ZBKTRQ3PT4ZW.png`,
  `https://stsci-opo.org/STScI-01H82G26M4BDN8WRZY5MR3D21E.png`,
  `https://stsci-opo.org/STScI-01H4491XZTYDDPRGBBNC2WRP99.png`,
  `https://stsci-opo.org/STScI-01H2TX76K5HBCEP0MCHDDWV28A.jpg`,
  `https://stsci-opo.org/STScI-01GTWAT27H23RTMB84Y37KFRWJ.png`];
  // const randomIndex = Math.floor(Math.random() * backgroundImageFiles.length);
  // const randomImageUrl = "src/images" + backgroundImageFiles[randomIndex];
  // backgroundContainer.style.backgroundImage = `url(${randomImageUrl})`;
  const randomIndex = Math.floor(Math.random() * backgroundImageUrls.length);
  const randomImageUrl = backgroundImageUrls[randomIndex];
  backgroundContainer.style.backgroundImage = `url(${randomImageUrl})`;
  console.log('RandomUrl:', randomImageUrl);
}

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
    let location = document.getElementById("location-input").value;
    currentLocationUrl = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${encodeURIComponent(
      location
    )}`;
    fetchWeather(currentLocationUrl, "fahrenheit");
    //loads a new random background
    displayBackgroundImage();
    document.getElementById("location-input").value = "";
  });
}

//Loads a random image upon page load/refresh
window.addEventListener("DOMContentLoaded", displayBackgroundImage);
