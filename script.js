var times = 0;

$(".footertext").click(function() {
    times = times + 1;

    if (times >= 5) {
        // easteregg idk
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