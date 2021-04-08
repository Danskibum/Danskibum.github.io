const request = "business.json";

fetch(request)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const business = jsonObject["business"];
        
        for (let i=0; i < business.length; i++) {
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let logo = document.createElement("img");
            let phone = document.createElement("p");
            let web = document.createElement("p");

            h2.textContent = business[i].name;
            phone.textContent = business[i].phone;
            web.textContent = business[i].website;
            logo.setAttribute("src", business[i].logo);
            logo.setAttribute("alt", business[i].name);

            card.appendChild(h2);
            card.appendChild(logo);
            card.appendChild(phone);
            card.appendChild(web);

            document.querySelector("div.cards").appendChild(card);
        }
    });