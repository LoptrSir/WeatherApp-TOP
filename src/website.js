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
const form = document.getElementById('search-location');
let currentLocation = document.querySelector('.current-location');
let currentCondition = document.querySelector('.current-condition')

const defaultGifSearch = 'random weather';
const weatherApiKey = '9a15cd9d2f10400dbc7152440242003';
const gifyApiKey = "OLRY4DR4fNBTQXbcI1NBFibXOW6q39k7";

const defaultLocation = `https://api.weatherapi.com/v1/current.json?key=9a15cd9d2f10400dbc7152440242003&q=84129`;



//eventListeners
form.addEventListener('submit', function(e){
  e.preventDefault();
  // get input
  //call validateInputFunction pass input
  // call searchfunction and pass input
  // clear input
})

//functions


// create validateLocation (input) {
//    validate/reject input
//  return result
//  }

const fetchWeather = async (defaultLocation) => {
  try {
    const response = await fetch(defaultLocation, {mode: 'cors'});
    const data = await response.json();
    currentLocation.innerHTML = data.location.name;
    currentCondition.innerHTML = data.current.condition.text;
          
      console.log(data);
  }
     catch (error){
    console.error('this is an error',error);
  }
//  console.log(data);
     //  current.condition.text
     
  }

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
