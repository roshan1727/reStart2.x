//getting all the query selector
let altervalues = document.querySelectorAll(".value");

//displayng animated value via loops
altervalues.forEach((singlevalue) => {
    let startValue = 0;
    let endValue = parseInt(singlevalue.getAttribute("data-value"));
    let duration = Math.floor(2000 / endValue);

    //counter for increaing the value &display
    let counter = setInterval(() => {
        startValue += 1;
        singlevalue.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
})