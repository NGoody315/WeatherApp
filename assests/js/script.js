//assignments

var searchBtn = document.getElementById("btn");

//event listeners
searchBtn.addEventListener("click", getTotalWeather)

function getTotalWeather (){
    getFiveDay();
    getWeather();
}

function getWeather() {
    var searchTerm = document.querySelector("#searchTerm").value;

    fetch (
    'http://api.openweathermap.org/data/2.5/weather?q=' + searchTerm + '&units=Imperial&appid=c181cbcbd0af0c6eef9a97496c761d1b'
    )
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log(response)

        var responseContainerEl = document.querySelector("#city-name");
        responseContainerEl.innerHTML = "<h1>" + searchTerm + "</h1>"
        //add date code here
        document.querySelector('#temp-text').innerHTML = '<h2>' + response.main.temp + ' C </h2>';
        document.querySelector('#humidity').innerHTML = '<h4> Humidity : ' + response.main.humidity + '</h4>'
        document.querySelector('#wind').innerHTML = '<h4> Wind Speed : ' + response.wind.speed + '</h4>'
        
        // return fetch(
        //     'http://api.openweathermap.org/data/2.5/uvi?lat=' + response.coord.lat + '&lon=' + response.coord.lon + '&appid=c181cbcbd0af0c6eef9a97496c761d1b'
        // )
        
    
    })
};

function getFiveDay () {
    var searchTerm = document.querySelector("#searchTerm").value;

    fetch (
        "http://api.openweathermap.org/data/2.5/forecast?q=" + searchTerm + "&cnt=5&appid=c181cbcbd0af0c6eef9a97496c761d1b"
        )
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            for(var i = 0; i <response.length; i++) {
                
            }
    
        })
    }
    
