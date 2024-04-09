//WeatherApp

//TODO

//fetchWeather() to accept input
//giphy function
//temp button logic

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
const tempConversionForm = document.getElementById("temp-conversion");
const radioButtonF = document.getElementById('fahrenheit');  //can this be consolidated into queryselectorall and still function
const radioButtonC = document.getElementById('celsius');

let currentTempF; //this will need modifying with c/f radiobuttons
let currentTempC;
let tempStringF; //add degree charachter
let tempStringC;


const defaultGifSearch = "random weather";
const weatherApiKey = "9a15cd9d2f10400dbc7152440242003";
const gifyApiKey = "OLRY4DR4fNBTQXbcI1NBFibXOW6q39k7";

const defaultLocation = `https://api.weatherapi.com/v1/current.json?key=9a15cd9d2f10400dbc7152440242003&q=84129`;

//eventListeners
locationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // get input
  //call validateInputFunction pass input
  // call searchfunction and pass input
  // clear input
});

// radioButtonF.addEventListener('click', fetchWeather);
// radioButtonC.addEventListener('click', fetchWeather);

// radioButtons.forEach(radioButton => {
//   // radioButton.addEventListener('change', fetchWeather);
//   radioButton.addEventListener('click', fetchWeather);
// })


//functions


// create validateLocation (input) {
//    validate/reject input
//  return result
//  }

const fetchWeather = async (displayLocation) => {
  try {
    const response = await fetch(displayLocation, { mode: "cors" });
    const data = await response.json();
    currentLocation.innerHTML = data.location.name;
    currentCondition.innerHTML = data.current.condition.text;
          //it seems tempConversion should be outside this function to capture user change then call fetchWeather()
    // tempConversion(data);
    currentTempF = data.current.temp_f; //this will need modifying with c/f radiobuttons
    currentTempC = data.current.temp_c;
    tempStringF = currentTempF + " F"; //add degree charachter
    tempStringC = currentTempC + " c";
    // currentTemp.innerHTML = tempStringF;
    if (radioButtonF === "checked") {
      currentTemp.innerHTML = currentTempF ? tempStringF : tempStringC;
       }


    //tempConversion(data);
    console.log("fetchWeather:", data);
  } catch (error) {
    console.error("this is an error", error);
  }
};

radioButtonF.addEventListener('click', fetchWeather);
radioButtonC.addEventListener('click', fetchWeather);

      //this should be called before fetchWeather. this means there is no data, how do I pass radiobutton.id to fetchWeather and make it work
      //do I elminate this function and embed the if in fetchWeather then call fetchweather upon radio change event? OR do i leave tempConverstion() called from fetchWeather() to keep each function doing one thing.
// async function tempConversion(data) {
//   const currentTempF = data.current.temp_f; //this will need modifying with c/f radiobuttons
//   const currentTempC = data.current.temp_c;
//   const tempStringF = currentTempF + " F"; //add degree character
//   const tempStringC = currentTempC + " c";
//   if (radioButton.checked && radioButtons.id === "fahrenheit") {
//      currentTemp.innerHTML = currentTempF ? tempStringF : tempStringC;
//       }
// }





//create const fetchGif = async (searchGif) => {
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
fetchWeather(defaultLocation);
