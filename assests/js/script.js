//assignments

var searchBtn = document.getElementById("btn");
//event listeners
searchBtn.addEventListener("click", getTotalWeather)

//All Functions
function getTotalWeather (){
    getFiveDay();
    getWeather();
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
        // var date = new Date(reponse.dt*1000);
        var responseContainerEl = document.querySelector("#city-name");
        responseContainerEl.innerHTML = "<h1>" + searchTerm + "</h1>"
         document.querySelector('#date').innerHTML = date
         document.querySelector('#temp-text').innerHTML = '<h2>' + response.main.temp + ' C </h2>';
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
    
            
            // return fetch(
            //     'http://api.openweathermap.org/data/2.5/uvi?lat=' + response.coord.lat + '&lon=' + response.coord.lon + '&appid=c181cbcbd0af0c6eef9a97496c761d1b'
            // )
            
            localStorage.setItem('searchHistory', searchTerm);
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
            'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon +'&exclude=current,minutely,hourly,alerts&appid=c181cbcbd0af0c6eef9a97496c761d1b'
            );
        })
        .then(function(response){
            return response.json();})
        .then(function(data){
            console.log(data);
            for(var i = 1; i < 6; i++) {
               document.querySelector('#card1').textContent = data.daily[1];

        }
    })
}
    
    // fetch (
    //     "http://api.openweathermap.org/data/2.5/forecast?q=" + searchTerm + "&cnt=5&appid=c181cbcbd0af0c6eef9a97496c761d1b"
    //     )
    //     .then(function(response){
    //         return response.json();
    //     })
    //     .then(function(response){
    //         for(var i = 0; i <response.length; i++) {
    //             document.querySelector('#temp-cards').innerHTML = response.list[i];
    //         }
    //         console.log(response);
    //     })
    // }
    
//Local Storage
function pastSearches (){
    var searchTerm = document.querySelector("#searchTerm").value;
    searchTerm = localStorage.getItem('searchHistory');
    document.querySelector('#past-search').textContent = searchTerm;

}
