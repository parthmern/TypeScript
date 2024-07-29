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
// OBJECT IN TS
const getData = (product) => {
    console.log("receving obj =>", product);
};
getData({
    name: "parth",
    stock: 14,
    price: 15,
});
const getProduct = (prod) => {
    console.log(prod);
    return prod.name;
};
getProduct({
    name: "pepsi",
    price: 12,
});
const getProduct1 = (prod) => {
    return (prod.name);
};
// const mode : themeMode = "asd"; // error 
// ==============================================
// NEVER TYPE
const errorHandler = () => {
    throw new Error(); // return NEVER
    // return new Error();     // return error
};
// ==============================================
// CLASSES IN TS
class Player {
    constructor(height, weight, power) {
        this.getWeight = () => {
            console.log("my weight which is private member that can be accessible by member function/ method =>", this.weight);
            return (this.weight);
        };
        console.log("player created");
        this.height = height;
        this.weight = weight;
        this.power = power;
    }
}
const abhi = new Player(100, 80, 1);
console.log(abhi.height); // by default - member is public
// console.log(abhi.weight);     // making PRIVATE above so u cannot access it
console.log(abhi.getWeight());
class Cricketer extends Player {
    constructor(height, weight, power, special) {
        // have to call constructor of Parent class that we can do with SUPER()
        super(height, weight, power);
        this.allAccessVars = () => {
            console.log("inside we can access", this.height, this.power, this.special);
        };
        this.special = special;
    }
    // GETTER FUNCTION ( syntex imp )
    get getMyHeight() {
        return this.height;
    }
    // SETTER function
    // here return type notation is not going to be "void" // nothing to do in setter func
    set setMyHeight(val) {
        console.log(this.height);
        this.height = val;
        console.log(this.height);
    }
}
const viratKohli = new Cricketer(100, 90, 1, false);
console.log("while calling getter func we donot need to use ()", viratKohli.getMyHeight);
console.log("while calling setter func we cannot do likr this 'viratKohli.setMyHeight(80)' ");
viratKohli.setMyHeight = 80;
class Product {
    constructor(name, price, id, category) {
        this.name = name;
        this.price = price;
        this.id = id;
        this.name = name;
        this.price = price;
        this.id = id;
        this.category = category;
    }
}
// ===================================
// DOM MANUPLATION
//
// TYPE ACCERTION - baap ko mat sikha
const a = document.getElementById("btn");
// here TS donot know that btn exist or not (it may be or may not be)
// a.onclick    // thats why this gives error
const btn = document.getElementById("btn");
// now exist karta hai as developer i know and that u tell to TS
btn.onclick;
// same other way
const btnn = document.getElementById("btn");
btnn.onclick;
const btnnn = document.getElementById("btn"); // not null that tells to TS
btnnn.onclick;
// ---------------------------------------
// for other elements like img
const img = document.getElementById("myimg");
img.onclick; // u can do it
// img.src = "new url"; // u cannot do it giving error
const image = document.getElementById("myimg");
image.src = "new url";
// other way by using query selector and !
const ig = document.querySelector("img");
ig.src = "new url";
const form = document.getElementById("myform");
const myinput = document.querySelector("form > input");
form.onsubmit = (e) => {
    e.preventDefault();
    const value = myinput.value;
    console.log(myinput.value);
    const h2 = document.createElement("h2");
    h2.textContent = value;
    const body = document.querySelector("body");
    body.append(h2);
};
const myObj = {
    name: "Abhi",
    email: "Abhi@gmail.com"
};
const getName = () => {
    // return myObj.name ;
    return myObj["name"];
};
const getEmail = () => {
    // return myObj.email ;
    return myObj["email"];
};
const getDatas = (key) => {
    return myObj[key];
};
const getDatass = (key) => {
    return myObj[key];
};
console.log(myObj.name);
let key = "name";
myObj[key];
myObj[key]; // typeof myObj = Person
const user1 = { name: "John" }; // valid
const user2 = { email: "john@example.com" }; // valid
const user3 = { name: "John", email: "john@example.com" }; // valid
const user4 = {}; // valid
const UserReq1 = { name: "John", email: "john@example.com" }; // valid
const newUserR = {
    name: "parth",
};
const readonlyUser = {
    name: "parth",
    email: "parth@example.com",
};
const users = {
    parth: { name: "Parth Patel", email: "parth@example.com" },
    john: { name: "John Doe", email: "john@example.com" },
    ritik: { name: "Ritik Sharma", email: "ritik@example.com" }
};
