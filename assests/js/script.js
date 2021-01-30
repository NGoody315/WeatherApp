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
        responseContainerEl.innerHTML= "<h2>" + searchTerm + "</h2>";

        document.querySelector('#temp-text').innerHTML = response.main.temp;


        //responseContainerEl.appendChild(getTempText);
    })
};
