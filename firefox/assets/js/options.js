var saved = chrome.i18n.getMessage("saved");

function saveOptions(e) {
    browser.storage.sync.set({
        search: document.querySelector("#search").value,
        engine: document.querySelector("#engine").value
    });
    showSaved();
    e.preventDefault();
}
function showSaved() {
    var status = document.getElementById('status');
    status.textContent = saved;
    setTimeout(function() {
        status.textContent = '';
    }, 1750);
};

function restoreOptions() {
    var gettingItem = browser.storage.sync.get('search');
    gettingItem.then((res) => {
        document.querySelector("#search").value = res.search;
        if(res.search == null) {
            document.querySelector("#search").value = 'Google';
        }
        if(document.getElementById("search").value === "Custom") {
            document.getElementById("engine").style.display = "initial";
            document.getElementById("engine-text").style.display = "initial";
        }else {
            document.getElementById("engine").style.display = "none";
            document.getElementById("engine-text").style.display = "none";
        }
    });
    var gettingItem = browser.storage.sync.get('engine');
    gettingItem.then((res) => {
        document.querySelector("#engine").value = res.engine;
        if(res.engine == null) {
            document.querySelector("#engine").value = 'https://www.google.com/search?q=&s';
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
    var heading = chrome.i18n.getMessage("options_heading");

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
    document.getElementById("heading").innerText = heading;
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.addEventListener('DOMContentLoaded', translate);
document.getElementById('save').addEventListener('click', saveOptions);