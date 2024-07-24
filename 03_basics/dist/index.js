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
// un = false; // cannot do in ts
