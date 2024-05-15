function isLegal(user) {
    if (user.age > 21) {
        return true;
    }
    else {
        return false;
    }
}
function greet(user) {
    console.log("hiii", user.firstName);
}
var user = {
    firstName: "parth",
    lastName: "patel",
    age: 25,
};
var ans = isLegal(user);
console.log(ans);
greet(user);
;
function checkLegal(user) {
    if (user.age > 21) {
        return true;
    }
    else {
        return false;
    }
}
function greeting(user) {
    console.log("greeeeet", user.lastName);
}
var res = checkLegal(user);
console.log(res);
greeting(user);
