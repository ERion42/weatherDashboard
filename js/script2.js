// variables here
var searchedCities = [];
var cityInput;
var selected;
var city;
var nowDate = moment().format("ddd MMM Do, YYYY");
var now1Date = moment().add(1, 'days').format("MM/DD/YY");
var now2Date = moment().add(2, 'days').format("MM/DD/YY");
var now3Date = moment().add(3, 'days').format("MM/DD/YY");
var now4Date = moment().add(4, 'days').format("MM/DD/YY");
var now5Date = moment().add(5, 'days').format("MM/DD/YY");
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

// Make it easier to shrink down high-decimal numbers
function precise(x) {
  return Number.parseFloat(x).toPrecision(4);
}
function precise2(x) {
  return Number.parseFloat(x).toPrecision(3);
}


function init() {
    // Restored Saved History and replaces search results
    document.querySelector(".currentDate").innerHTML = nowDate;
    if (JSON.parse(localStorage.getItem("searchHistory")) != null) {
        restoreData();
        replaceCity();
        dateReplace();
    }
}

function storeData() {
    localStorage.setItem("searchHistory", JSON.stringify(searchedCities));  
}

function restoreData() {
    searchedCities = JSON.parse(localStorage.getItem("searchHistory"));
}

function dateReplace() {
  document.querySelector(".dayPlus1Date").innerHTML = now1Date;
  document.querySelector(".dayPlus2Date").innerHTML = now2Date;
  document.querySelector(".dayPlus3Date").innerHTML = now3Date;
  document.querySelector(".dayPlus4Date").innerHTML = now4Date;
  document.querySelector(".dayPlus5Date").innerHTML = now5Date;
}

function citySearch() {
    // Sets variable for input
    cityInput = input.value.toUpperCase();
    // Checks for empty input
    if (cityInput == '') {
      alert("Please enter a city");
      return;
    }
    // Adds input to front of city array
    searchedCities.unshift(cityInput);    
    city = searchedCities[0];
    queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d7c0851cacad7b0e51e57b4c6714a41d";
    openWeatherSearch();
    replaceCity();
    storeData();
    
}

function recallSavedCity1() {
    // Adds input to front of city array
    searchedCities.unshift(searchedCities[0]);    
    city = searchedCities[0];
    queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d7c0851cacad7b0e51e57b4c6714a41d";
    openWeatherSearch();
    document.querySelector(".currentCity").innerHTML = searchedCities[0];
    replaceCity();
    storeData();
}
function recallSavedCity2() {
    // Adds input to front of city array
    searchedCities.unshift(searchedCities[1]);    
    city = searchedCities[1];
    queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d7c0851cacad7b0e51e57b4c6714a41d";
    openWeatherSearch();
    document.querySelector(".currentCity").innerHTML = searchedCities[1];
    replaceCity();
    storeData();
}
function recallSavedCity3() {
    // Adds input to front of city array
    searchedCities.unshift(searchedCities[2]);    
    city = searchedCities[2];
    queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d7c0851cacad7b0e51e57b4c6714a41d";
    openWeatherSearch();
    document.querySelector(".currentCity").innerHTML = searchedCities[2];
    replaceCity();
    storeData(); 
}
function recallSavedCity4() {
    // Adds input to front of city array
    searchedCities.unshift(searchedCities[3]);    
    city = searchedCities[3];
    queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d7c0851cacad7b0e51e57b4c6714a41d";
    openWeatherSearch();
    document.querySelector(".currentCity").innerHTML = searchedCities[3];
    replaceCity();
    storeData();  
}
function recallSavedCity5() {
    // Adds input to front of city array
    searchedCities.unshift(searchedCities[4]);    
    city = searchedCities[4];
    queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d7c0851cacad7b0e51e57b4c6714a41d";
    openWeatherSearch();
    document.querySelector(".currentCity").innerHTML = searchedCities[4];
    replaceCity();
    storeData();
}
function recallSavedCity6() {
    // Adds input to front of city array
    searchedCities.unshift(searchedCities[5]);    
    city = searchedCities[5];
    queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d7c0851cacad7b0e51e57b4c6714a41d";
    openWeatherSearch();
    document.querySelector(".currentCity").innerHTML = searchedCities[5];
    replaceCity();
    storeData();
}
function recallSavedCity7() {
    // Adds input to front of city array
    searchedCities.unshift(searchedCities[6]);    
    city = searchedCities[6];
    queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d7c0851cacad7b0e51e57b4c6714a41d";
    openWeatherSearch();
    document.querySelector(".currentCity").innerHTML = searchedCities[6];
    replaceCity();
    storeData();
}
function recallSavedCity8() {
    // Adds input to front of city array
    searchedCities.unshift(searchedCities[7]);    
    city = searchedCities[7];
    queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d7c0851cacad7b0e51e57b4c6714a41d";
    openWeatherSearch();
    document.querySelector(".currentCity").innerHTML = searchedCities[7];
    replaceCity();
    storeData();
}

// This is where the magic happens
function openWeatherSearch() {
  fetch(queryURL) 
    .then (function(response) {
      return response.json();
    })
    .then (function(data) {
         console.log(data);
         
         //Daily functions here .data(information)
         var realTemp = precise(((data.main.temp-273.15)*1.8)+32)
         document.querySelector(".curCityTemp").innerHTML = realTemp  + "°F";
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
            document.querySelector(".curCityWind").innerHTML = data.daily[0].wind_speed + "mph";
            //Five Day functions here .data(information) along with daily UV
            var realTemp1Low = precise2(((data.daily[1].temp.min-273.15)*1.8)+32);
            var realTemp1Hi = precise2(((data.daily[1].temp.max-273.15)*1.8)+32);
            var realTemp2Low = precise2(((data.daily[2].temp.min-273.15)*1.8)+32);
            var realTemp2Hi = precise2(((data.daily[2].temp.max-273.15)*1.8)+32);
            var realTemp3Low = precise2(((data.daily[3].temp.min-273.15)*1.8)+32);
            var realTemp3Hi = precise2(((data.daily[3].temp.max-273.15)*1.8)+32);
            var realTemp4Low = precise2(((data.daily[4].temp.min-273.15)*1.8)+32);
            var realTemp4Hi = precise2(((data.daily[4].temp.max-273.15)*1.8)+32);
            var realTemp5Low = precise2(((data.daily[5].temp.min-273.15)*1.8)+32);
            var realTemp5Hi = precise2(((data.daily[5].temp.max-273.15)*1.8)+32);
            document.querySelector(".dayPlus1Temp").innerHTML = realTemp1Low + "/" + realTemp1Hi + "°F"
            document.querySelector(".dayPlus1Wind").innerHTML = data.daily[1].wind_speed + "mph";
            document.querySelector(".dayPlus1Humid").innerHTML = data.daily[1].humidity + "%";
            document.querySelector(".dayPlus2Temp").innerHTML = realTemp1Low + "/" + realTemp1Hi + "°F"
            document.querySelector(".dayPlus2Wind").innerHTML = data.daily[2].wind_speed + "mph";
            document.querySelector(".dayPlus2Humid").innerHTML = data.daily[2].humidity + "%";
            document.querySelector(".dayPlus3Temp").innerHTML = realTemp1Low + "/" + realTemp1Hi + "°F"
            document.querySelector(".dayPlus3Wind").innerHTML = data.daily[3].wind_speed + "mph";
            document.querySelector(".dayPlus3Humid").innerHTML = data.daily[3].humidity + "%";
            document.querySelector(".dayPlus4Temp").innerHTML = realTemp1Low + "/" + realTemp1Hi + "°F"
            document.querySelector(".dayPlus4Wind").innerHTML = data.daily[4].wind_speed + "mph";
            document.querySelector(".dayPlus4Humid").innerHTML = data.daily[4].humidity + "%";
            document.querySelector(".dayPlus5Temp").innerHTML = realTemp1Low + "/" + realTemp1Hi + "°F"
            document.querySelector(".dayPlus5Wind").innerHTML = data.daily[5].wind_speed + "mph";
            document.querySelector(".dayPlus5Humid").innerHTML = data.daily[5].humidity + "%";
            
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

// call initialization function
document.addEventListener("load", init());

