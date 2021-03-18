const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=08c6e4c6d3b9a97eb36976faf71211e2";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObect) => {
        console.log(jsObect);
        document.getElementById("current-temp").textContent = jsObect.main.temp;
       

        const imagesrc = "https://openweathermap.org/img/w/" + jsObect.weather[0].icon + ".png";
        const desc = jsObect.weather[0].description;

        document.getElementById("imagesrc").textContent = imagesrc;
        document.getElementById("icon").setAttribute("src", imagesrc);
        document.getElementById("icon").setAttribute("alt", desc);

    });