var times = 0;

$(".footertext").click(function() {
    times = times + 1;

    if (times >= 5) {
        window.open("fonts/smalle/easteregg.html", "_self");
    }

});

$(document).ready(function() {

});

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}