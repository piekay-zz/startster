function translate() {
    var title = chrome.i18n.getMessage("credits_title");

    document.getElementById("title").innerText = title;
}

document.addEventListener('DOMContentLoaded', translate);