//menu hamburger
function toggleMenu() {
    document.getElementsByClassName("menu")[0].classList.toggle('responsive');
}
//current date
const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
document.getElementById("currentdate").innerHTML = new Date().toLocaleDateString( 'en-us', options);
