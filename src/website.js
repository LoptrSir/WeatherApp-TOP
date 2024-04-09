//WeatherApp

//TODO 
//radiobutton background doesnt want to go transparent. Does this require a custom 'check box' like in the toto app?
// search field changes to white if selected a 'browser saved search'
//Features to consider Adding
//a google map?
//forecast 3/5day, hourly
//misc details: humidity, sunrise/set,

//website.js

//Imports
import { fetchWeather } from "./weather.js";
import { attachEventListeners, defaultLocation } from "./ui.js";

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

export function initializeSite() {
  fetchWeather(defaultLocation, "fahrenheit");
  attachEventListeners();
  myFooter();
}

