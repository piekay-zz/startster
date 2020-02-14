function save_options() {
    var search = document.getElementById('search').value;
    var engine = document.getElementById('engine').value;
    var saved = chrome.i18n.getMessage("saved");

    chrome.storage.sync.set({
        search: search,
        engine: engine
    }, function() {
        var status = document.getElementById('status');
        status.textContent = saved;
        setTimeout(function() {
            status.textContent = '';
        }, 1750);
    });
}

function restore_options() {
    chrome.storage.sync.get({
        search: 'Google',
        engine: 'https://www.google.com/search?q=&s'
    }, function(items) {
        document.getElementById('engine').value = items.engine;
        document.getElementById('search').value = items.search;

        if(document.getElementById("search").value === "Custom") {
            document.getElementById("engine").style.display = "initial";
            document.getElementById("engine-text").style.display = "initial";
        }else {
            document.getElementById("engine").style.display = "none";
            document.getElementById("engine-text").style.display = "none";
        }
    });
}

function translate() {
    var title = chrome.i18n.getMessage("options_title");
    var enginetext = chrome.i18n.getMessage("engine_text");
    var engine = chrome.i18n.getMessage("engine");
    var searchoptions = chrome.i18n.getMessage("search_options");
    var searchengines = chrome.i18n.getMessage("search_engines").split(",");
    var searchtext = chrome.i18n.getMessage("search_text");
    var save_button = chrome.i18n.getMessage("save_button");

    document.getElementById("search-text").innerText = searchtext;
    document.getElementById("google").innerText = searchengines[0];
    document.getElementById("duckduckgo").innerText = searchengines[1];
    document.getElementById("yahoo").innerText = searchengines[2];
    document.getElementById("bing").innerText = searchengines[3];
    document.getElementById("custom").innerText = searchengines[4];
    document.getElementById("engine-text").innerText = enginetext;
    document.getElementById("engine").innerText = engine;
    document.getElementById("search-text").innerText = searchoptions;
    document.getElementById("title").innerText = title;
    document.getElementById("save").innerText = save_button;

}

document.addEventListener('DOMContentLoaded', restore_options);
document.addEventListener('DOMContentLoaded', translate);
document.getElementById('save').addEventListener('click', save_options);