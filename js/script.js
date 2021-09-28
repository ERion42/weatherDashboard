// City Array, used for selecting current city as well as setting history
var searchedCities;
searchedCities = [];
const input = document.querySelector('input');


document.addEventListener("load", restoreData());
document.getElementById("submit").addEventListener("click", citySearch);

function init() {
  restoreData();
  
}

function storeData() {
  localStorage.setItem("searchHistory", JSON.stringify(searchedCities));  
}

function restoreData() {
  searchedCities = JSON.parse(localStorage.getItem("searchHistory"));
  if (JSON.parse(localStorage.getItem("searchHistory"))[0] != null) {
    document.querySelector(".cityID1").innerHTML =  JSON.parse(localStorage.getItem("searchHistory"))[0];  
  }
  if (JSON.parse(localStorage.getItem("searchHistory"))[1] != null) {
    document.querySelector(".cityID1").innerHTML =  JSON.parse(localStorage.getItem("searchHistory"))[1];  
  }
  if (JSON.parse(localStorage.getItem("searchHistory"))[2] != null) {
    document.querySelector(".cityID1").innerHTML =  JSON.parse(localStorage.getItem("searchHistory"))[2];  
  }
  if (JSON.parse(localStorage.getItem("searchHistory"))[3] != null) {
    document.querySelector(".cityID1").innerHTML =  JSON.parse(localStorage.getItem("searchHistory"))[3];  
  }
  if (JSON.parse(localStorage.getItem("searchHistory"))[4] != null) {
    document.querySelector(".cityID1").innerHTML =  JSON.parse(localStorage.getItem("searchHistory"))[4];  
  }
  if (JSON.parse(localStorage.getItem("searchHistory"))[5] != null) {
    document.querySelector(".cityID1").innerHTML =  JSON.parse(localStorage.getItem("searchHistory"))[5];  
  }
  if (JSON.parse(localStorage.getItem("searchHistory"))[6] != null) {
    document.querySelector(".cityID1").innerHTML =  JSON.parse(localStorage.getItem("searchHistory"))[6];  
  }
  if (JSON.parse(localStorage.getItem("searchHistory"))[7] != null) {
    document.querySelector(".cityID1").innerHTML =  JSON.parse(localStorage.getItem("searchHistory"))[7];  
  }
}

function citySearch() {
    // Sets variable for input
    const cityInput = input.value.toUpperCase();
    // Adds input to front of city array
    searchedCities.unshift(cityInput);
    
    // This function replaces certain vaules with the search value. This is a temporary placeholder for when I load the API and all applicable data.
    function replaceCity() {
      document.querySelector(".currentCity").innerHTML = cityInput
      document.querySelector(".curCityTemp").innerHTML = cityInput + " Temperature";
      document.querySelector(".curCityWind").innerHTML = cityInput + " Wind";
      document.querySelector(".curCityHumid").innerHTML = cityInput + " Humidity";
      document.querySelector(".curCityUV").innerHTML = cityInput + " UV";
      if (searchedCities[0] != null) {
        var selected = searchedCities[0];
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
    replaceCity();
    storeData();
}