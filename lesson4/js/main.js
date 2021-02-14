//var today = new Date()
//var day = today.getDay();
//var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//var date = today.getDay(): number;
//var month = today.getMonth();
//var monthlist =["January","Feburary","March","April","May","June","July","Auguest","October","September","November","December"];
//var year = today.getFullYear(): number;
//document.getElementById("currentdate").innerHTML = daylist[day]; //+ "," + date + monthlist[month] + year;
//document.getElementById("date").innerHTML = document.lastModified;
const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
document.getElementById("currentdate").innerHTML = new Date().toLocaleDateString( 'en-us', options);
function toggleMenu() {
    document.getElementsByClassName("menu")[0].classList.toggle('responsive');
}
