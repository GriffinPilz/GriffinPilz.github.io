let round = 1;
let xTemp = 400;
let shakeCount = 0;
let plankCount = 0;
let lives = 3;

let audio = new Audio('cannonSound.mp3');
let audio2 = new Audio('Fire2.mp3');
let audio3 = new Audio('woodSnap.mp3');
let audio4 = new Audio('splash.mp3');
let audio5 = new Audio('taDa.mp3');

function startGame() {
    lives = 3;
    plankCount = 0;
    shakeCount = 0;
    round = 1;
    document.getElementById("bird").classList.remove("bird2");
    document.getElementById("bird").classList.add("bird0");
    document.getElementById("modal").style.display = "inline";
    turnsLeft();
    document.getElementById("menuContainer").style.display = "none";
    document.getElementById("loserDiv").style.display = "none";
    document.getElementById("gameContainer").style.display = "inline";
    document.getElementById("backgroundMusic").parentNode.removeChild(document.getElementById("backgroundMusic"));
}

let playLoop = function () {
    audio.play();
};

let playLoop2 = function () {
    audio2.play();
};

let playLoop3 = function () {
    audio3.play();
};

let playLoop4 = function () {
    audio4.play();
};

let playLoop5 = function () {
    console.log("PLAY");
    audio5.play();
};

function insertDistance() {
    document.getElementById("distance").innerHTML = ' '+xTemp+' ';
}

function turnsLeft() {
    document.getElementById("turnsLeft").innerHTML = "you have "+lives+" tries left";
}

function setDistance() {
    if (round === 1) {
        xTemp = 400;
    } else if (round === 2) {
        xTemp = 200;
    } else if (round === 3) {
        xTemp = 50;
    }
}

function onEquationSubmit() {

   x1 = document.getElementById("input1").value;
   x2 = document.getElementById("input2").value;

   document.getElementById("modal").style.display = "none";

   equation0 = -x1*Math.pow(0, 2)+(x2*0);
   equationTemp = -x1*Math.pow(xTemp, 2)+(x2*xTemp);
   if (x1 === "" || x2 === "") {
       x1 = undefined;
   }

   if (equation0 === 0 && equationTemp === 0 && x1 !== undefined){
        if (round === 3) {
            document.getElementById("boatSVG").style.animationPlayState = "running";
            document.getElementById("flames").style.animationPlayState = "running";
            document.getElementById("cannonballFinal").style.animationPlayState = "running";
            setTimeout(function () {
                playLoop3();
            }, 800);
            setTimeout(function () {
                playLoop2();
            }, 1000);
            setTimeout(function () {
                playLoop5();
                document.getElementById("gameContainer").style.display = "none";
                document.getElementById("winnerDiv").style.display = "inline";
            }, 3500);
        }
        if (round === 2) {
            document.getElementById("cannonballLeft").style.animationPlayState = "running";
            document.getElementById("leftHole").style.animationPlayState = "running";
            setTimeout(function () {
                playLoop3();
            }, 800);
            setTimeout(function () {
                this.shakeInterval = window.setInterval(shakeBoat,300);
                this.returnInterval = window.setInterval(returnBoat, 350);
                document.getElementById("left").style.animationPlayState = "running";
            }, 1000);
            round++;
            setDistance();
            insertDistance();
            document.getElementById("great").innerHTML = "Nice job!";
        }
        if (round === 1) {
            document.getElementById("cannonballRight").style.animationPlayState = "running";
            document.getElementById("rightHole").style.animationPlayState = "running";
            setTimeout(function () {
                playLoop3();
            }, 800);
            setTimeout(function () {
                this.shakeInterval = window.setInterval(shakeBoat,300);
                this.returnInterval = window.setInterval(returnBoat, 350);
                document.getElementById("right").style.animationPlayState = "running";
            }, 1000);
            round++;
            setDistance();
            insertDistance();
            document.getElementById("great").innerHTML = "Great!";
        }
   } else {
       console.log("miss");
       lives--;
       if (lives === 0) {
           document.getElementById("loserDiv").style.display = "block";
           document.getElementById("gameContainer").style.display = "none";
       } else {
           turnsLeft();
           document.getElementById("missText").style.display = "inline";
           elementMiss = document.getElementById("cannonballMiss");
           elementMiss.classList.add("cannonballMiss");
           setTimeout(function () {
               elementMiss.classList.remove("cannonballMiss");
               playLoop4();
               checkPlank();
           }, 1000);
           setTimeout(function () {
               document.getElementById("missText").style.display = "none";
           }, 2000);
           document.getElementById("modal").style.display = "inline";
       }
   }
}

// retrieve the element
element = document.getElementById("button1");
element2 = document.getElementById("cannon");
element3 = document.getElementById("cannonSmoke");
element.addEventListener("click", function() {
    playLoop();
    console.log("fired");
    element2.classList.add("cannon");
    element3.classList.add("cannonSmoke");
    setTimeout(function () {
        element2.classList.remove("cannon");
        element3.classList.remove("cannonSmoke");
    }, 1000);
}, true);


function checkPlank() {
    plankCount++;
    if (plankCount === 3) {
        document.getElementById("bird").classList.remove("bird2");
        document.getElementById("bird").classList.add("bird3");
    } else if (plankCount === 2) {
        document.getElementById("bird").classList.remove("bird1");
        document.getElementById("bird").classList.add("bird2");
    } else if (plankCount === 1) {
        document.getElementById("bird").classList.remove("bird0");
        document.getElementById("bird").classList.add("bird1");
    }
}

/*
*
* Animations
*
* */

let shakeBoat = function () {
    document.getElementById("boatSVG").style.transform = "translateY(10px)";
    shakeCount++;
    if (shakeCount === 3) {
        clearInterval(this.shakeInterval);
    }
};

let returnBoat = function () {
    document.getElementById("boatSVG").style.transform = "translateY(0px)";
    if (shakeCount === 3) {
        clearInterval(this.returnInterval);
        setTimeout(function () {
            document.getElementById("modal").style.display = "inline";
        }, 100);
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
        shakeCount = 0;
    }
};
