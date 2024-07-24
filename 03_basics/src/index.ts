
console.log("ts started");

const ans = 10;

console.log(ans); 

// tsc fileName.ts -w              // watcher for contious watching file auto js build and then running
// tsc -w


let x = 25 ;        // number

// can do in JS
// u cannot do this is TS 
// x = 'hello' ;      // string

console.log(x);

// =================================================

let y : string = "parth" ;

let z = <string>"parth";

let id : string | number;   // UNION

const func = (n: number, m: boolean) : string =>{
    console.log(n,m);
    return "ans";
}

type userName = string | number ;

let un : userName = "parthmern" ;
un = 5 ;

// un = false; // cannot do in ts


