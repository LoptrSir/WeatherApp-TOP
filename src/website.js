//WeatherApp

  //TODO css styling
    // /Re-enable gifapi when finished with styling
    //.credits wont stay in one specific location at the bottom
    //Manage gif size to be fairly consistent final size regardless of original size
    //radiobutton background doesnt want to go transparent.
    //Features to consider Adding 
      //a google map?
      //forecast 3/5day, hourly
      //misc details: humidity, sunrise/set,  



//website.js

//Imports
import {fetchWeather} from './weather.js'
import {attachEventListeners,
        currentLocationUrl
} from './ui.js'

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
// fetchWeather(currentLocationUrl, 'fahrenheit');
attachEventListeners(); 
myFooter();
}

initializeSite();
