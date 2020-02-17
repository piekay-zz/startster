$('#search').change(function(){
    if(($(this).val()) === "Custom") {
        document.getElementById("engine").style.display = "initial";
        document.getElementById("engine-text").style.display = "initial";
    }else {
        document.getElementById("engine").style.display = "none";
        document.getElementById("engine-text").style.display = "none";
    }
})