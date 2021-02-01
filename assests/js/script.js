//assignments
var previousSearches = document.getElementById('list-past-search');
var searchBtn = document.getElementById("btn");
const searchInput = document.getElementById("searchTerm")
const searchText = document.getElementById("text")
const storedInput = localStorage.getItem('searchHistory')

//event listeners
searchBtn.addEventListener("click", getTotalWeather)
searchInput.addEventListener('input', letter =>{
    searchText.textContent=letter.target.value
})

//Add Search History
function saveToLocalStorage (){
    localStorage.setItem('searchHistory', searchText.textContent)
}

if(storedInput) {
    searchText.textContent = storedInput
}

//All Functions
function getTotalWeather (){
    getFiveDay();
    getWeather();
    saveToLocalStorage();
}

//Get Text Weather
function getWeather() {
    var searchTerm = document.querySelector("#searchTerm").value;
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + searchTerm + '&units=Imperial&appid=c181cbcbd0af0c6eef9a97496c761d1b';

    fetch (apiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log(response)
        var date = new Date (response.dt*1000)

        var mainIcon = response.weather[0].icon;
        var currentIcon = "http://openweathermap.org/img/wn/" + mainIcon + ".png";
            $('#main-img').attr('src', currentIcon)
            document.querySelector('#main-img').innerHTML = "<img>" + currentIcon + "</img>"

        var responseContainerEl = document.querySelector("#city-name");
        responseContainerEl.innerHTML = "<h1>" + searchTerm + "</h1>"

         document.querySelector('#date').innerHTML = "<h2>" + (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear() + "</h2>"
         document.querySelector('#temp-text').innerHTML = '<h2>' + response.main.temp + ' F </h2>';
         document.querySelector('#humidity').innerHTML = '<h4> Humidity : ' + response.main.humidity + '</h4>'
         document.querySelector('#wind').innerHTML = '<h4> Wind Speed : ' + response.wind.speed + '</h4>'

        var lon = response.coord.lon
        var lat = response.coord.lat

        return fetch (
            'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon +'&appid=c181cbcbd0af0c6eef9a97496c761d1b'
            );
        })
        .then(function(response){
            return response.json();})
        .then(function(data){
            console.log(data);

            document.querySelector('#uv-index').innerHTML = '<h4>UV Index : ' + data.current.uvi + '</h4>'

        })
}

//Get Five Day Forecast
function getFiveDay () {
    var searchTerm = document.querySelector("#searchTerm").value;
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + searchTerm + '&units=Imperial&appid=c181cbcbd0af0c6eef9a97496c761d1b';

    fetch (apiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        var lon = response.coord.lon
        var lat = response.coord.lat

        return fetch (
            'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon +'&exclude=current,minutely,hourly,alerts&units=Imperial&appid=c181cbcbd0af0c6eef9a97496c761d1b'
            );
        })
        .then(function(response){
            return response.json();})
        .then(function(data){
            
            console.log(data);
            for(var i = 1; i < 6; i++) {

                var dayOneIcon = data.daily[1].weather[0].icon;
                var iconDay1 = "http://openweathermap.org/img/wn/" + dayOneIcon + ".png";
                $('#card1-img').attr('src', iconDay1)

                var dayTwoIcon = data.daily[2].weather[0].icon;
                var iconDay2= "http://openweathermap.org/img/wn/" + dayTwoIcon + ".png";
                $('#card2-img').attr('src', iconDay2)

                var dayThreeIcon = data.daily[3].weather[0].icon;
                var iconDay3= "http://openweathermap.org/img/wn/" + dayThreeIcon + ".png";
                $('#card3-img').attr('src', iconDay3)

                var dayFourIcon = data.daily[4].weather[0].icon;
                var iconDay4= "http://openweathermap.org/img/wn/" + dayFourIcon + ".png";
                $('#card4-img').attr('src', iconDay4)

                var dayFiveIcon = data.daily[5].weather[0].icon;
                var iconDay5= "http://openweathermap.org/img/wn/" + dayFiveIcon + ".png";
                $('#card5-img').attr('src', iconDay5)


                var date1 = new Date(data.daily[1].dt*1000);
                var date2 = new Date(data.daily[2].dt*1000);
                console.log(date2)
                var date3 = new Date(data.daily[3].dt*1000);
                var date4 = new Date(data.daily[4].dt*1000);
                var date5 = new Date(data.daily[5].dt*1000);

            
            document.querySelector('#card1-date').innerHTML = "<h6>" + (date1.getMonth() + 1) + '/' + date1.getDate() + '/' + date1.getFullYear() + "</h6>"
            document.querySelector('#card1-text').innerHTML = "<p>Humidity : " + data.daily[1].humidity + "</br> Temp : " + data.daily[1].temp.day + " F</p>"
            document.querySelector('#card1-img').innerHTML = "<img>" + iconDay1 + "</img>"

            document.querySelector('#card2-date').innerHTML = "<h6>" + (date2.getMonth() + 1) + '/' + date2.getDate() + '/' + date2.getFullYear() + "</h6>"
            document.querySelector('#card2-text').innerHTML = "<p>Humidity : " + data.daily[2].humidity + "</br> Temp : " + data.daily[2].temp.day + " F</p>"
            document.querySelector('#card2-img').innerHTML = "<img>" + iconDay2 + "</img>"

            document.querySelector('#card3-date').innerHTML = "<h6>" + (date3.getMonth() +1) + '/' + date3.getDate() + '/' + date3.getFullYear() + "</h6>"
            document.querySelector('#card3-text').innerHTML = "<p>Humidity : " + data.daily[3].humidity + "</br> Temp : " + data.daily[3].temp.day + " F</p>"
            document.querySelector('#card3-img').innerHTML = "<img>" + iconDay3 + "</img>"

            document.querySelector('#card4-date').innerHTML = "<h6>" + (date4.getMonth() +1) + '/' + date4.getDate() + '/' + date4.getFullYear() + "</h6>"
            document.querySelector('#card4-text').innerHTML = "<p>Humidity : " + data.daily[4].humidity + "</br> Temp : " + data.daily[4].temp.day + " F</p>"
            document.querySelector('#card4-img').innerHTML = "<img>" + iconDay4 + "</img>"

            document.querySelector('#card5-date').innerHTML = "<h6>" + (date5.getMonth() +1) + '/' + date5.getDate() + '/' + date5.getFullYear() + "</h6>"
            document.querySelector('#card5-text').innerHTML = "<p>Humidity : " + data.daily[5].humidity + "</br> Temp : " + data.daily[5].temp.day + " F</p>"
            document.querySelector('#card5-img').innerHTML = "<img>" + iconDay5 + "</img>"

        }
    })
}
    

