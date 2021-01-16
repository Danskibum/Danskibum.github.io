const getYear = {year: 'numeric'};
document.getElementById("date").innerHTML = new Date().toLocaleDateString( 'en-us', getYear);
document.getElementById("date2").innerHTML = document.lastModified;
