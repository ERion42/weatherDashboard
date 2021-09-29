// variables here
var searchedCities = [];
var cityInput;
var selected;
var city;
var nowDate = moment().format("ddd MMM Do, YYYY");
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d7c0851cacad7b0e51e57b4c6714a41d";
const input = document.querySelector('input');


// Functions established here:

// button functions
document.getElementById("submit").addEventListener("click", citySearch);

// restore city buttons- this is DEFINITELY wasteful. I need to look into a way to refine this
// maybe a for loop
document.querySelector(".cityID1").addEventListener("click", recallSavedCity1)
document.querySelector(".cityID2").addEventListener("click", recallSavedCity2)
document.querySelector(".cityID3").addEventListener("click", recallSavedCity3)
document.querySelector(".cityID4").addEventListener("click", recallSavedCity4)
document.querySelector(".cityID5").addEventListener("click", recallSavedCity5)
document.querySelector(".cityID6").addEventListener("click", recallSavedCity6)
document.querySelector(".cityID7").addEventListener("click", recallSavedCity7)
document.querySelector(".cityID8").addEventListener("click", recallSavedCity8)


function init() {
    // Restored Saved History and replaces search results
    document.querySelector(".currentDate").innerHTML = nowDate;
    if (JSON.parse(localStorage.getItem("searchHistory")) != null) {
        restoreData();
        replaceCity();
    }
}

function storeData() {
    localStorage.setItem("searchHistory", JSON.stringify(searchedCities));  
}

function restoreData() {
    searchedCities = JSON.parse(localStorage.getItem("searchHistory"));
}

function citySearch() {
    // Sets variable for input
    cityInput = input.value.toUpperCase();
    // Adds input to front of city array
    searchedCities.unshift(cityInput);    
    city = searchedCities[0];
    queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d7c0851cacad7b0e51e57b4c6714a41d";
    openWeatherSearch();
    replaceCity();
    storeData();
}

function recallSavedCity1() {
  var recalledCity = searchedCities[0];
  replaceCity();
}
function recallSavedCity2() {
  selected = searchedCities[1];
  console.log(selected);
  replaceCity(selected);
}
function recallSavedCity3() {
  selected = searchedCities[2];
  console.log(selected);
  replaceCity(selected);  
}
function recallSavedCity4() {
  selected = searchedCities[3];
  console.log(selected);
  replaceCity(selected);  
}
function recallSavedCity5() {
  selected = searchedCities[4];
  console.log(selected);
  replaceCity(selected);
}
function recallSavedCity6() {
  selected = searchedCities[5];
  console.log(selected);
  replaceCity(selected);
}
function recallSavedCity7() {
  selected = searchedCities[6];
  console.log(selected);
  replaceCity(selected);
}
function recallSavedCity8() {
  selected = searchedCities[7];
  console.log(selected);
  replaceCity(selected);
}

function openWeatherSearch() {
  fetch(queryURL) 
    .then (function(response) {
      return response.json();
    })
    .then (function(data) {
         console.log(data);
         
         //Daily functions here .data(information)
         var realTemp = ((data.main.temp-273.15)*1.8)+32
         document.querySelector(".curCityTemp").innerHTML = realTemp  + "°";
         document.querySelector(".curCityWind").innerHTML = data.wind.speed + "mph";
         document.querySelector(".curCityHumid").innerHTML = data.main.humidity + "%";
         

         lat = data.coord.lat;
         lon = data.coord.lon;
         var fiveDayURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=d7c0851cacad7b0e51e57b4c6714a41d";

        fetch(fiveDayURL) 
          .then (function(response) {
          return response.json();
          })
          .then (function(data) {
          console.log(data);
      
            document.querySelector(".curCityUV").innerHTML = data.current.uvi;         
            //Five Day functions here .data(information) along with daily UV


        })

      })  
    }

function replaceCity() {
    if (searchedCities[0] != null) {
        selected = searchedCities[0];
        if (cityInput != null) {
          document.querySelector(".currentCity").innerHTML = cityInput;
        }
        document.querySelector(".cityID1").innerHTML = searchedCities[0];
      }
      if (searchedCities[1] != null) {
        document.querySelector(".cityID2").innerHTML = searchedCities[1];
      }
      if (searchedCities[2] != null) {
        document.querySelector(".cityID3").innerHTML = searchedCities[2];
      }
      if (searchedCities[3] != null) {
        document.querySelector(".cityID4").innerHTML = searchedCities[3];
      }
      if (searchedCities[4] != null) {
        document.querySelector(".cityID5").innerHTML = searchedCities[4];
      }
      if (searchedCities[5] != null) {
        document.querySelector(".cityID6").innerHTML = searchedCities[5];
      }
      if (searchedCities[6] != null) {
        document.querySelector(".cityID7").innerHTML = searchedCities[6];
      }
      if (searchedCities[7] != null) {
        document.querySelector(".cityID8").innerHTML = searchedCities[7];
      }
      if (searchedCities.length > 8) {
        searchedCities.pop();
      }    
}

// Functions called here:

// call initialization function
document.addEventListener("load", init());

