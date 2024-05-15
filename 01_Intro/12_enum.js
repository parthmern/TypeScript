// Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
function pf(keyType) {
    console.log(keyType);
}
pf("up"); // no error
// pf("uppp"); // error
// ==============================================================================
// using ENUM
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["left"] = 2] = "left";
    direction[direction["right"] = 3] = "right"; // 4
})(direction || (direction = {}));
function printing(key) {
    console.log(key); // will print 0 for UP
    if (key == direction.up) {
        console.log("this is UP key");
    }
}
printing(direction.up);
