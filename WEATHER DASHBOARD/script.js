var apiKey = "3aec6929e5ae8b8999152eb3d38997f4";
var searchForm = document.querySelector("#search-form");
var submitButton = document.querySelector("#submit-button")
var currentCitySlot = document.querySelector("#current-city-slot")
var currentCitySection = document.querySelector(".currentCity")
var fiveDayForecastSection = document.querySelector(".fiveDayForecast")

submitButton.addEventListener("click", handleCitySearch)

function handleCitySearch(event) {
    event.preventDefault();
    var searchInputVal = document.querySelector("#searchInput").value.trim();
    var fiveDayRequestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInputVal + "&appid=" + apiKey // 5 day forecase
    var currentDayRequestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInputVal + "&appid=" + apiKey + "&units=imperial";

    fetch(currentDayRequestUrl)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        currentCitySlot.textContent = searchInputVal
        //current temp
        var tempSlot = document.createElement("h4")
        tempSlot.textContent = "Temperature: " + data.main.temp + "°F";
        currentCitySection.append(tempSlot)
        
        //current humidity
        var humidSlot = document.createElement("h4")
        humidSlot.textContent = "Humidity: " + data.main.humidity + "%"
        currentCitySection.append(humidSlot)
        //wind speed

        var windSpeed = document.createElement("h4")
        windSpeed.textContent = "Wind Speed: " + data.wind.speed + "MPH"
        currentCitySection.append(windSpeed)
       
    })
    //five day forecast
    fetch(fiveDayRequestUrl)
    .then(function (response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        for (var i = 3; i < 30; i += 6) {
            var daySection = document.createElement("section");
            fiveDayForecastSection.append(daySection);
            //adds date to each
            var dateSlot = document.createElement("h3");
            dateSlot.textContent = data.list[i].dt_txt
            daySection.append(dateSlot);
        }
    })
}