var timesclicked = 0;
const button = document.getElementById("button");
const entrybutton = document.getElementById("entrybutton");
const currentFontSize = window.getComputedStyle(document.getElementById("button")).fontSize;
var newFontSize;
var num = 1;

$("#entrybutton").click(function() {
    num = num + 1;
    timesclicked = timesclicked + 1;
    newFontSize = currentFontSize.replace(currentFontSize.charAt(1), num);

    button.style.fontSize = newFontSize;

    if (timesclicked == 3) {
        window.open("home.html", "_self");
    }
});