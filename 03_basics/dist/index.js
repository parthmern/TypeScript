"use strict";
console.log("ts started");
const ans = 10;
console.log(ans);
// tsc fileName.ts -w              // watcher for contious watching file auto js build and then running
// tsc -w
let x = 25; // number
// can do in JS
// u cannot do this is TS 
// x = 'hello' ;      // string
console.log(x);
// =================================================
let y = "parth";
let z = "parth";
let id; // UNION
const func = (n, m) => {
    console.log(n, m);
    return "ans";
};
let un = "parthmern";
un = 5;
const funct = (n, m) => {
    console.log(n, m);
    return "ans";
};
// =================================================
const arr = [1, 2, 3, 4];
const arr2 = ["parth", "mern"];
const arr3 = ["parth", "mern", 23, 55];
const arr4 = [1, 2, 3, 4]; // for fixed size array (tuple)
// =================================================
const obj = {
    name: "parth",
    age: 19
};
const person = {
    name: "pk",
    age: 12,
    // gender is optional here
};
const boy = {
    name: "pth",
    age: 15,
    // gnder is optional
    isGood: false,
    func: (n, m) => {
        console.log(n, m);
    }
};
const functi = (n, m, l) => {
    // l is not passed by user means undefined type
    if (typeof l === "undefined") {
        return "m and n";
    }
    return "m and n and l";
};
functi(4, 5);
// ==================================================
// rest operator
const funcRest = (a, ...rest) => {
    return "ans";
};
funcRest(1, 2, 3, 4, 5, 5, 6);
// ==============================================
