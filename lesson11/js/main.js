const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
document.getElementById("currentdate").innerHTML = new Date().toLocaleDateString( 'en-us', options);

function toggleMenu() {
    document.getElementsByClassName("menu")[0].classList.toggle('responsive');
}

new Date().getDay() == 5 ? document.getElementById("reminder").innerHTML = "Saturday = Preston pancakes in the park! 9:00 a.m. Saturday at the city park pavilion." : banner.style.display = "none";