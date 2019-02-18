
(function () {
    let position = 0;
    let faceing = "north";

    function moveForward(distance) {
        if (faceing === "north") {
            position = position + distance;
        } else if (faceing === "south") {
            position = position - distance;
        }
    }

    function moveBackward(distance) {
        if (faceing === "north") {
            position = position - distance;
        } else if (faceing === "south") {
            position = position + distance;
        }
    }

    function turnAround() {
        if (faceing === "north") {
            faceing = "south";
        } else if (faceing === "south") {
            faceing = "north";
        }
    }

    function printLocation() {
        console.log(position);
    }

moveForward(5);
moveBackward(3);
printLocation();
turnAround();
moveForward(10);
moveBackward(5);
printLocation();
})();