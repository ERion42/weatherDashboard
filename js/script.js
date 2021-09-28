// City Array, used for selecting current city as well as setting history
var searchedCities;

searchedCities = [];

document.addEventListener("load", restoreData());



document.getElementById("submit").addEventListener("click", citySearch);

const input = document.querySelector('input');

function storeData() {
  localStorage.setItem("searchHistory", JSON.stringify(searchedCities));  
}

function restoreData() {
  var searchedCities = JSON.parse(localStorage.getItem("searchHistory"));
  document.querySelector(".cityID1").innerHTML = searchedCities[0];  
  document.querySelector(".cityID2").innerHTML = searchedCities[1];
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