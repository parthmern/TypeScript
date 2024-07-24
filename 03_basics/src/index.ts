
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

type paramsType = (n: number , m: boolean) => string ;

const funct : paramsType = (n,m) =>{
    console.log(n,m);
    return "ans";
}

// =================================================

const arr : number[] = [1,2,3,4] ;

const arr2 : Array<string> = ["parth", "mern"] ;

const arr3 : Array<string | number> = ["parth", "mern", 23 , 55] ;

const arr4 : [number, number, number, number] = [1,2,3,4] ;     // for fixed size array (tuple)

// =================================================


