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

// ==================================================
// FUNCTION IN TS ARGS

type funcType = (n:number, m:number, l?:number) => string ;

const functi : funcType = (n , m, l ) => {
    
    // l is not passed by user means undefined type
    if(typeof l === "undefined"){
        return "m and n" ;
    }

    return  "m and n and l";
}

functi(4,5);

// ==================================================

// rest operator

const funcRest = ( a : number, ...rest : number[] ) : string => {
    
    return "ans" ;
}

funcRest(1,2,3,4,5,5,6);

// ==============================================
// OBJECT IN TS

const getData = (product : {
    name : string ,
    stock : number ,
    price : number,
}) => {
    console.log("receving obj =>", product );
}

getData(
    {
        name : "parth",
        stock : 14 ,
        price : 15,
    }
)

interface prodType {
    name : string ,
    price : number
}

const getProduct = ( prod : prodType ) : string =>{
    console.log(prod);
    return prod.name ;
}

getProduct({
    name : "pepsi",
    price : 12 ,
})


// other way using type
type getProductType = (prod : prodType) => string ;
const getProduct1 : getProductType = (prod) =>{
    return (prod.name);
}

type themeMode = "light" | "dark" ;

// const mode : themeMode = "asd"; // error 


// ==============================================
// NEVER TYPE

const errorHandler = () : never =>{
    throw new Error();      // return NEVER
    // return new Error();     // return error
}

// ==============================================
// CLASSES IN TS

class Player {

    
    height : number ; 
    private weight : number ;
    protected power : number; 

    constructor(height : number, weight: number, power : number){
        console.log("player created");
        this.height = height ;
        this.weight = weight ;
        this.power = power ;
    }

    getWeight = () => {
        console.log("my weight which is private member that can be accessible by member function/ method =>", this.weight);
        return (this.weight); 
    }
    
}

const abhi = new Player(100, 80, 1);

console.log(abhi.height);     // by default - member is public
// console.log(abhi.weight);     // making PRIVATE above so u cannot access it

console.log(abhi.getWeight());


class Cricketer extends Player{    

    // height (public): Accessible from anywhere.
    // weight (private): Accessible only within the Player class.
    // power (protected): Accessible within the Player class and its subclasses.
    // special (public): Accessible from anywhere.

    special : boolean ;

    constructor(height : number, weight: number, power : number, special : boolean){
        
        // have to call constructor of Parent class that we can do with SUPER()
        super(height, weight, power);

        this.special = special ;
    }

    allAccessVars = () =>{
        console.log(
            "inside we can access",
            this.height ,
            this.power ,
            this.special ,
        )
    }

    // GETTER FUNCTION ( syntex imp )
    get getMyHeight() : number {
        return this.height ;
    }

    // SETTER function
    // here return type notation is not going to be "void" // nothing to do in setter func
    set setMyHeight( val : number ) {
        console.log(this.height);
        this.height = val ;
        console.log(this.height);
    }
}

const viratKohli = new Cricketer(100, 90, 1, false);

console.log("while calling getter func we donot need to use ()", viratKohli.getMyHeight);

console.log("while calling setter func we cannot do likr this 'viratKohli.setMyHeight(80)' ");
viratKohli.setMyHeight = 80 ;

// assume getter and setter functions are like Variables

// ===================================
// IMPLEMENTS INTERFACES 

interface ProductType {
    name: string;
    price: number;
    id: string;
}

class Product implements ProductType {

    // name: string;
    // price: number;
    // id: string;

    protected category : string  ;

    constructor(public name: string, public price: number, public id: string, category : string) {
        this.name = name;
        this.price = price;
        this.id = id;

        this.category = category ;
    }
}

// ===================================
// DOM MANUPLATION
//
// TYPE ACCERTION - baap ko mat sikha

const a  = document.getElementById("btn"); 
// here TS donot know that btn exist or not (it may be or may not be)
// a.onclick    // thats why this gives error

const btn = document.getElementById("btn") as HTMLElement; 
// now exist karta hai as developer i know and that u tell to TS

btn.onclick ;

// same other way
const btnn = <HTMLElement>document.getElementById("btn");
btnn.onclick ;

const btnnn = document.getElementById("btn") ! ;    // not null that tells to TS
btnnn.onclick ;

// ---------------------------------------
// for other elements like img
const img = document.getElementById("myimg") ! ;
img.onclick ; // u can do it
// img.src = "new url"; // u cannot do it giving error

const image = document.getElementById("myimg") as HTMLImageElement ;
image.src = "new url" ;

// other way by using query selector and !
const ig = document.querySelector("img") ! ;
ig.src = "new url" ;

const form = document.getElementById("myform") as HTMLFormElement;

const myinput = document.querySelector("form > input") as HTMLInputElement ;

form.onsubmit = (e) =>{
    e.preventDefault();
    const value = myinput.value; 
    console.log(myinput.value);


    const h2 = document.createElement("h2");
    h2.textContent = value ;

    const body = document.querySelector("body") !;
    body.append(h2); 

}

// ------------------------------

interface Person {
    // name : string ,
    // email : string ,

    // dynamic key assign
    [key : string] : string ;
}

const myObj : Person = {
    name : "Abhi",
    email : "Abhi@gmail.com"
};

const getName = () : string =>{
    // return myObj.name ;
    return myObj["name"] ;
}

const getEmail = () : string =>{
    // return myObj.email ;
    return myObj["email"] ;
}

const getDatas = (key : "name" | "email") : string => {
    return myObj[key];
}

const getDatass = (key : keyof Person) : string => {
    return myObj[key];
}

console.log(myObj.name);

let key = "name" ;
myObj[key as keyof Person] ;

myObj[key as keyof typeof myObj] ;  // typeof myObj = Person

// ============================================
// ============================================
// ============================================
// TYPE OF UTILITY = ease of access

// ----------------
// partial<Type>
// making optional property
// utility type to create a type that makes all properties of an existing type optional

type User = {
    name : string ,
    email : string ,
}

type User2 = Partial<User> ;

const user1: User2 = { name: "John" }; // valid
const user2: User2 = { email: "john@example.com" }; // valid
const user3: User2 = { name: "John", email: "john@example.com" }; // valid
const user4: User2 = {}; // valid

// ----------------
// REQUIRED<TYPE>
// opposite of partial
// making optional to required 
// required is going to be required


type UserReq = {
    name?: string;
    email: string;
};

type UserReqAllRequired = Required<UserReq>;

const UserReq1: UserReqAllRequired = { name: "John", email: "john@example.com" }; // valid
//const UserReq2: UserReqAllRequired = { email: "john@example.com" }; // Error: Property 'name' is missing
//const UserReq3: UserReqAllRequired = {}; // Error: Property 'name' and 'email' are missing

// ----------------
// READONLY<TYPE>
// makes every property read only ( no access to change value or write )

type UserR = {
    readonly name : string ,
}

const newUserR : UserR = {
    name : "parth" ,
}

 // newUserR.name = "mern" ;    // ERROR cannot do write again change value -- bcz of readOnly

 type UserRead = {
    name: string;
    email: string;
};

type ReadonlyUser = Readonly<UserRead>;

const readonlyUser: ReadonlyUser = {
    name: "parth",
    email: "parth@example.com",
};

// readonlyUser.name = "mern"; // Error: Cannot assign to 'name' because it is a read-only property.
// readonlyUser.email = "new@example.com"; // Error: Cannot assign to 'email' because it is a read-only property.

// ----------------
// RECORD<TYPE>
// 

type Users = "parth" | "john" | "ritik";

type UserDetails = {
    name: string;
    email: string;
};

type UserRecordMap = Record<Users, UserDetails>;

const users: UserRecordMap = {
    parth: { name: "Parth Patel", email: "parth@example.com" },
    john: { name: "John Doe", email: "john@example.com" },
    ritik: { name: "Ritik Sharma", email: "ritik@example.com" }
};

// ----------------
// PICK<TYPE> 
// picking some attributes

type OrderInfo = {
    readonly id: string;
    user: string;
    city: string;
    state: string;
    status: string;
};

// all picking things must be there
type ShippingInfo = Pick<OrderInfo, "city" | "state" | "status">;

const shippingDetails: ShippingInfo = {
    city: "Toronto",
    state: "Ontario",
    status: "Shipped"
};

// const shippingDetails: ShippingInfo = {
//     city: "gujata",
//     state: "navs",
// };                               // ERROR bcz only 2 attributes

// ----------------
// OMIT<TYPE> 
// oppostie of pick

// Using Omit to exclude specific properties
type OrderSummary = Omit<OrderInfo, "id" | "user">;

const orderSummary: OrderSummary = {
    city: "Toronto",
    state: "Ontario",
    status: "Shipped"
};

// ----------------
// EXCLUDE<TYPE, excludedUNION>
// working with union for removing extra 

type Status = "Pending" | "Shipped" | "Delivered" | "Cancelled";

// Using Exclude to create a type without the "Cancelled" status
type ActiveStatus = Exclude<Status, "Cancelled">;

let currentStatus: ActiveStatus;

currentStatus = "Pending";     // valid
currentStatus = "Shipped";     // valid
currentStatus = "Delivered";   // valid
// currentStatus = "Cancelled"; // ERROR: Type '"Cancelled"' is not assignable to type 'ActiveStatus'.

// ----------------
// EXTRACT<TYPE, includedUNION>

type Statuss = "Pending" | "Shipped" | "Delivered" | "Cancelled";

// Using Extract to create a type with only the "Shipped" and "Delivered" statuses
type ShipmentStatus = Extract<Statuss, "Shipped" | "Delivered">;

let currentShipmentStatus: ShipmentStatus;

currentShipmentStatus = "Shipped";    // valid
currentShipmentStatus = "Delivered";  // valid
// currentShipmentStatus = "Pending"; // ERROR: Type '"Pending"' is not assignable to type 'ShipmentStatus'.
// currentShipmentStatus = "Cancelled"; // ERROR: Type '"Cancelled"' is not assignable to type 'ShipmentStatus'.

// -------------
// NonNullable<Type>
// exclude null and undefined

type myUnion = string | number | boolean | null | undefined ;
type Random = NonNullable<myUnion>; 

type Random2 = Exclude<myUnion , undefined | null>; // same

// ---------------
// Parameters<Type>

type MyFunction = (a: string, b: number, c: boolean) => void;

type MyFunctionParams = Parameters<MyFunction>;

// MyFunctionParams is now a tuple type: [string, number, boolean]
let args: MyFunctionParams;

args = ["hello", 42, true]; // valid
// args = ["hello", 42];    // ERROR: Type '[string, number]' is not assignable to type '[string, number, boolean]'.
// args = [42, "hello", true]; // ERROR: Type '[number, string, boolean]' is not assignable to type '[string, number, boolean]'.

// Example usage in a function
function logParams(...params: MyFunctionParams) {
    console.log(params);
}

function getDataFunc(a: number, b: string){

}

type paramsOfgetDataFunc = Parameters<typeof getDataFunc>;
// [a: number, b: string]

// --------------------
// ConstructorParameter<Type>

class MyClass {
    constructor(public name: string, public age: number) {}
}
type MyClassConstructorParams = ConstructorParameters<typeof MyClass>;

let constructorArgs: MyClassConstructorParams;
//  [name: string, age: number]

constructorArgs = ["John", 30]; // valid
// constructorArgs = ["John"];   // ERROR: Type '[string]' is not assignable to type '[string, number]'
// constructorArgs = [30, "John"]; // ERROR: Type '[number, string]' is not assignable to type '[string, number]'

// -------------------
// ReturnType<TYPE>

type MyFunct = (a: string, b: number) => boolean;

type MyFunctionReturnType = ReturnType<MyFunct>;

let result: MyFunctionReturnType;

result = true;  // valid
// result = "string"; // ERROR: Type '"true"' is not assignable to type 'boolean'

// type returnTypeOfFunc = Parameters<typeof getDataFunctionName>;

// -----------------------
// InstanceType<Type>

// Define a class with a constructor
class MyClasss {
    constructor(public name: string, public age: number) {}

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Use InstanceType to extract the instance type of MyClass
type MyClassInstance = InstanceType<typeof MyClasss>;

// MyClassInstance is now the type MyClass
let myInstance: MyClassInstance;

myInstance = new MyClasss("John", 30);  // valid
console.log(myInstance.greet());      // Output: Hello, my name is John and I am 30 years old.

// myInstance = { name: "Jane", age: 25 }; // ERROR: Type '{ name: string; age: number; }' is not assignable to type 'MyClass'.
// myInstance = new Date();                // ERROR: Type 'Date' is not assignable to type 'MyClass'.

// Prototype Chain: An instance of MyClass has a prototype chain that includes methods like greet. An object literal { name: "Jane", age: 25 } does not have this prototype chain.
// Methods and Behavior: MyClass instances have methods defined in the class (e.g., greet). An object literal does not automatically include these methods, even if it has the same properties.


// ===============================================================
// ===============================================================
// ===============================================================
// ===============================================================
// ===============================================================

// GENERICS 
// common - custom type


const funcT = ( n : number ) : number =>{
    return n ;
}

const answer = funcT(10);

// we donot know which data we are going to pass as args

const funT = <CustomType>( n : CustomType ) : CustomType=>{

    // if N is number than customType is going to be number as datatype
    // dynamic datatype

    return n ;
}

const res = funT(20);
const res2 = funT("strin");


const funGeneric = <T>( n : T ) : T=>{
    // now here T type is humanType
    return n ;
}

type humanType = {
    name : string ,
    age : number ,
}

const male : humanType = {
    name : "pathu",
    age : 14 ,
}

const bodyThatGot = funGeneric<humanType>(male);

// --------------------------
const arrs : number[] = [1,2];
const arrs2 : Array<number> = [1,2,3,4];

// --------------------------
const functure = <T, U> (n : T, m : U) : {n:T,m:U} =>{
    
    return {n, m} ;
}

const ansvar = functure<number, string>(20, "lol");

// ------------------------------
const fun = <T, U extends T>(n: T, m: U): { n: T; m: U } => {
    return { n, m };
};

type a = { name: string; age: number };
type b = a & { job: string; male: boolean };

const usr1: a = { name: "usr1", age: 1 };
const usr2: b = { name: "usr2", age: 2, job: "jobid", male: true };

const and = fun<a, b>(usr1, usr2);

console.log(and);

// ------------------------------------------
// Define a generic function that takes an object and a key of that object
const getProperty = <T, U extends keyof T>(obj: T, key: U): T[U] => {
    return obj[key];
};

// Define an interface
interface Userji {
    name: string;
    age: number;
    job: string;
    male: boolean;
}

// Create an object of type User
const user: Userji = {
    name: "John",
    age: 30,
    job: "Engineer",
    male: true
};

// Use the generic function to get properties
const names = getProperty(user, "name"); // string
const age = getProperty(user, "age");   // number
const job = getProperty(user, "job");   // string
const males = getProperty(user, "male"); // boolean

console.log(name); // Output: John
console.log(age);  // Output: 30
console.log(job);  // Output: Engineer
console.log(male); // Output: true

