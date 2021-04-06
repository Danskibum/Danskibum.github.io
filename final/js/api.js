const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=tacoma,us&units=imperial&APPID=08c6e4c6d3b9a97eb36976faf71211e2";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObect) => {
        console.log(jsObect);
        //document.getElementById("current-temp").textContent = jsObect.main.temp;//
        document.getElementById("temp").textContent = jsObect.main.temp;
        document.getElementById("hivalue").textContent = jsObect.main.temp_max;
        document.getElementById("huvalue").textContent = jsObect.main.humidity;
        document.getElementById("speed").textContent = jsObect.wind.speed;
        document.getElementById("cudesc").textContent = jsObect.weather[0].description;

        const imagesrc = "https://openweathermap.org/img/w/" + jsObect.weather[0].icon + ".png";
        const desc = jsObect.weather[0].description;
    });