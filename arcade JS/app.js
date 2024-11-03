var userinput1 = prompt("Input First Player's name")
var userinput2 = prompt("Input Second Player's name")

var p1 = document.querySelector("#n1");
var p2 = document.querySelector("#n2");
p1.innerHTML = userinput1
p2.innerHTML = userinput2

var timeLeft = 60;
var timerElement = document.querySelector("#timer");

var countdown = setInterval(() => {
    timerElement.textContent = --timeLeft;
    if (timeLeft <= 0) {
        clearInterval(countdown);
        timerElement.textContent = "Game Over";
    }
}, 1000);

var venomForward = 0;
var spiderForward = 0;
var venomMovingInterval = null;
var spiderMovingInterval = null;

function startMove(event) {
    var venom = document.querySelector("#venom");
    var spiderMan = document.querySelector("#spider");

    if (event.keyCode === 68 && !venomMovingInterval) {
        venom.src = "images/vnm-walk.gif";
        venomMovingInterval = setInterval(moveVenomRight, 100);
    }

    if (event.keyCode === 65 && !venomMovingInterval) {
        venom.src = "images/vnm-walk.gif";
        venomMovingInterval = setInterval(moveVenomLeft, 100);
    }

    if (event.keyCode === 90) {
        venom.src = "images/vnm-punch.gif";
        venom.style.width = "400px";
    }

    if (event.keyCode === 88) {
        venom.src = "images/vnm-super.gif";
        venom.style.width = "1000px";
        // venom.style.height = "255px";

    }

    if (event.keyCode === 75) {
        spiderMan.src = "images/sp-super.gif";
        spiderMan.style.width = "600px";
        spiderMan.style.height = "320px";
        venom.style.display = "none";

        setTimeout(function () {
            spiderMan.src = "images/sp-stance.gif";
            spiderMan.style.width = "200px";
            spiderMan.style.height = "200px";
            venom.style.display = "block";
        }, 3000);
    }

    if (event.keyCode === 37 && !spiderMovingInterval) {
        spiderMan.src = "images/sp-walk.gif";
        spiderMovingInterval = setInterval(moveSpiderLeft, 100);
    }

    if (event.keyCode === 39 && !spiderMovingInterval) {
        spiderMan.src = "images/sp-walk.gif";
        spiderMovingInterval = setInterval(moveSpiderRight, 100);
    }

    if (event.keyCode === 76) {
        spiderMan.src = "images/sp-punch.gif";
        spiderMan.style.width = "300px";
        spiderMan.style.height = "300px";
    }
}

function stopMove(event) {
    var venom = document.querySelector("#venom");
    var spiderMan = document.querySelector("#spider");

    if ((event.keyCode === 68 || event.keyCode === 65) && venomMovingInterval) {
        clearInterval(venomMovingInterval);
        venomMovingInterval = null;
        venom.src = "images/vnm-stance.gif";
        venom.style.width = "200px"

    }

    if ((event.keyCode === 37 || event.keyCode === 39) && spiderMovingInterval) {
        clearInterval(spiderMovingInterval);
        spiderMovingInterval = null;
        spiderMan.src = "images/sp-stance.gif";
    }
}

function moveVenomRight() {
    var venom = document.querySelector("#venom");
    venomForward += 10;
    venom.style.left = venomForward + "px";
}

function moveVenomLeft() {
    var venom = document.querySelector("#venom");
    venomForward -= 10;
    venom.style.left = venomForward + "px";
}

function moveSpiderLeft() {
    var spiderMan = document.querySelector("#spider");
    spiderForward -= 10;
    spiderMan.style.left = spiderForward + "px";
}

function moveSpiderRight() {
    var spiderMan = document.querySelector("#spider");
    spiderForward += 10;
    spiderMan.style.left = spiderForward + "px";
}

window.addEventListener("keydown", startMove);
window.addEventListener("keyup", stopMove);