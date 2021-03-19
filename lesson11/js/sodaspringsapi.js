const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=08c6e4c6d3b9a97eb36976faf71211e2";

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

const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=08c6e4c6d3b9a97eb36976faf71211e2";

fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObect) => {
        console.log(jsObect);

        var count = 0;

        for(key in jsObect.list) {
            var textcheck = jsObect.list[key].dt_txt;
            if(textcheck.includes("18:00:00")) {
                count++;
                var varDay = "";
                var weekdays = new Date(jsObect.list[key].dt_txt).getDay();
                console.log("array:", jsObect.list[key].dt_txt);
                console.log(weekdays);

                switch(weekdays) {
                    case 1:
                        varDay = "Mon";
                        break;
                    case 2:
                        varDay = "Tues";
                        break;
                    case 3:
                        varDay = "Wed";
                        break;
                    case 4:
                        varDay = "Thurs";
                        break;
                    case 5:
                        varDay = "Fri";
                        break;
                    case 6:
                        varDay = "Sat";
                        break;
                    case 7:
                        varDay = "Sun";
                        break;
                }
                const imgesrc = "https://openweathermap.org/img/w/" + jsObect.list[key].weather[0].icon + ".png";
                const desc = jsObect.list[key].weather[0].description;

                document.getElementById("day" + count).textContent = jsObect.list[key].main.temp.toFixed(0);
                document.getElementById("icon" + count).setAttribute("src", imagesrc);
                document.getElementById("icon" + count).setAttribute("alt", desc);
                document.getElementById("names" + count).textContent = varDay;
            }
        }
    });