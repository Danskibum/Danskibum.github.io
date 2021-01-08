 const options = {weekday: 'long', day: "numeric", month: 'long', year: 'numeric'};
 document.getelementbyid('date2').textcontent = new date().tolocaledatestring('en-us', options);
 