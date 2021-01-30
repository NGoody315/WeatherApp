//assignments

var searchBtn = document.getElementById("btn");

//event listeners
searchBtn.addEventListener("click", getWeather)

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

        var responseContainerEl = document.querySelector("#temp-text");

        document.querySelector('#temp-text').innerHTML = '<h2>' + response.main.temp + ' C </h2>';


        //responseContainerEl.appendChild(getTempText);
    })
};
