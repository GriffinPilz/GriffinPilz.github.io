function removeClickerClasses() {
    document.getElementById("clicker").classList.remove("clickerOG");
    document.getElementById("clicker").classList.remove("clicker");
    document.getElementById("clicker").classList.remove("clickerHover");
}

function changeClassHoverClicker() {
    removeClickerClasses();
    document.getElementById("clicker").classList.add("clickerHover");
}

function changeClassClicker() {
    removeClickerClasses();
    document.getElementById("clicker").classList.add("clicker");
}

let sinDots = [];

(function () {
    document.getElementById("upperBody").style.width = window.innerWidth+"px";
    document.getElementById("upperBody").style.height = window.innerHeight+"px";
    for ( i = 0; i <= 14; i += 0.02 ) {
        x = i*200;
        y = Math.sin( x/69 )/.04 + 885;
        let dotCoords = {xCoord: x, yCoord: y};
        sinDots.push(dotCoords);
    }
    placeDots();
})();

function placeDots() {
    for (i=0;i<sinDots.length;i++){
        let newDot = document.createElement("div");
        newDot.classList.add("dot");

        newDot.style.setProperty("top", sinDots[i].yCoord + "px");
        newDot.style.setProperty("left", sinDots[i].xCoord + "px");

        //let placementDiv = document.getElementById("upperBody");
        document.getElementById("upperBody").appendChild(newDot);
        //document.body.insertBefore(newDot, placementDiv)
    }
}

function raiseBody() {
    document.getElementById("upperBody").style.animationPlayState = "running";
    document.getElementById("clicker").style.display = "none";
}