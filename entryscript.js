var timesclicked = 0;
const button = document.getElementById("button");
var green = 0;

$("#button").click(function() {
    button.style.color = "rgb(0," + (green + 255) + ",0)";
    green = green + 255;

    timesclicked = timesclicked + 1;

    if (timesclicked == 1) { // change cursor maybe idk
    } else if (timesclicked == 2) {
        window.open("home.html", "_self");
    }
});