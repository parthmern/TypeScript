
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

const obj : {
    name : string ;
    age : number ;
} = {
    name : "parth", 
    age : 19
} 

type objType = {
    name : string ;
    age : number ;
    gender ?: string ;
}

const person : objType= {
    name : "pk", 
    age : 12 ,
    // gender is optional here
}


// ==================================================

interface objInter  {
    name : string ;
    age : number ;
    gender ?: string ;
}

// interface can be extended as inherits
// types cannot do this

interface newObj extends objInter {
    isGood : boolean ;
    func ? : (n:number , m: number) => void
}

const boy : newObj = {
    name : "pth", 
    age : 15 ,
    // gnder is optional
    isGood : false ,
    func : (n, m) =>{
        console.log(n,m);
    }
} 