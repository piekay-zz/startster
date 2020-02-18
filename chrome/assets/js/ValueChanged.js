document.getElementsByTagName('select')[0].onchange = function() {
    var index = this.selectedIndex;
    var inputText = this.children[index].value;
    if(inputText === "Custom") {
        document.getElementById("engine").style.display = "initial";
        document.getElementById("engine-text").style.display = "initial";
    }else {
        document.getElementById("engine").style.display = "none";
        document.getElementById("engine-text").style.display = "none";
    }
};