function startDate() {
    var d = new Date();
    var months = chrome.i18n.getMessage("months").split(",");
    var date = chrome.i18n.getMessage("date").split(",");
    var days = chrome.i18n.getMessage("days").split(",");
    var prefix = chrome.i18n.getMessage("prefix");

    document.getElementById('date').innerHTML = days[d.getDay()] + ", " + prefix + " " + date[d.getDate() - 1] + " " + months[d.getMonth()] + " " + d.getFullYear();
}
document.addEventListener('DOMContentLoaded', function() {
    startDate();
});