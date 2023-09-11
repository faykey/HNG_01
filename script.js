/* Create an array of days in a week*/
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/* Gets the current date */
var date = new Date();



/* Define function that updates the time */
function updateTime() {
    /* gets current date */
    var date = new Date();

    /* gets date no */
    var day_no = date.getDay();

    /* gets dayname from the array*/
    var day_name = days[day_no];

    /* gets time in UTC milliseconds */
    var time = date.getTime();

    /* gets string representation of UTC */
    var utcString = date.toUTCString();
    /* spliting the string into different parts with space */
    var parts = utcString.split(" ")

    document.getElementById("day").innerHTML = day_name;
    document.getElementById("time").innerHTML = parts[4];
    document.getElementById("utc").innerHTML = parts[5];
  }

  updateTime();

  setInterval(updateTime, 1000);
