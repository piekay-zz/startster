var search = document.getElementById("search");
var searchm = null;
var engine = null;
var placeholder = chrome.i18n.getMessage("search");

document.addEventListener('DOMContentLoaded', function() {
    search.focus();
    getSearch();
    search.placeholder=placeholder;
});

function getSearch() {
    chrome.storage.sync.get({
        search: 'Google',
        engine: 'https://www.google.com/search?q='
    }, function(items) {
        searchm = items.search;
        engine = items.engine;
    });
}

search.addEventListener("keyup", function(e) {
    e.preventDefault();
    if(e.keyCode === 13) {
        if(searchm === "DuckDuckGo") {
            window.location.href = "https://duckduckgo.com/?q=" + search.value;
        }else if(searchm === "Google") {
            window.location.href = "https://www.google.de/search?q=" + search.value;
        }else if(searchm === "Bing") {
            window.location.href = "https://bing.com/search?q=" + search.value;
        }else if(searchm === "Yahoo") {
            window.location.href = "https://yahoo.com/search?q=" + search.value;
        }else {
            window.location.href = engine.replace('&s', search.value);
        }
    }
});
