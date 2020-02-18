function startTime() {
    var clock = document.getElementById('clock');
    var children = clock.childNodes;
    for(var i = 0; i < children.length; i++)
        clock.removeChild(children[i]);
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    clock.appendChild(document.createTextNode(h + ":" + m));
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
document.addEventListener('DOMContentLoaded', function() {
    startTime();
});