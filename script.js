console.log("page loaded...");

function reproducir(element){
    var x = document.getElementById("myVideo");
    x.muted = true;
    x.play();
}

function detener(element){
    var x = document.getElementById("myVideo");
    x.muted = true;
    x.pause();
}