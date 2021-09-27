// City Array, used for selecting current city as well as setting history
let searchedCities = []

document.getElementById("submit").addEventListener("click", citySearch);

const input = document.querySelector('input');
const log = document.getElementsByName

function citySearch() {
    // Sets variable for input
    const cityInput = input.value;
    // Adds input to front of city array
    searchedCities.unshift(cityInput);
    
    // This function 
    function replaceCity() {
      if (searchedCities[0] != null) {
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
    }
    replaceCity();
}