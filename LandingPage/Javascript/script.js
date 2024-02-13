let countDoundDate = new Date("April 27, 2030 00:00:00").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let distace = countDoundDate - now;

    let days = Math.floor(distace / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distace % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distace % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distace % (1000 * 60)) / 1000);

    let day = document.getElementById("Days").innerHTML = days;
    document.getElementById("Hours").innerHTML = hours;
    document.getElementById("Mintues").innerHTML = minutes;
    document.getElementById("Seconds").innerHTML = seconds;


}, 1000);