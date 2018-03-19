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
        newDot.setAttribute("id", "dot"+i);


        newDot.style.setProperty("top", sinDots[i].yCoord + "px");
        newDot.style.setProperty("left", sinDots[i].xCoord + "px");

        let placementDiv = document.getElementById("placementDiv");
        document.body.insertBefore(newDot, placementDiv)
    }
}