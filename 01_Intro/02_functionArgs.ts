function greet(firstName: string): void {
    console.log("Hello " + firstName);
}

// Example Usage
greet("harkirat");

// ====================================
// FUNCTION RETURN SOMETHING

// function sum(a:number , b:number){
//     return (a+b);
// }

// we can do like above without defining the return type of function 
// because ts's compiler can understand it underthehood

function sum(a:number , b:number) : number{
    console.log("a is", a, "b is ", b);
    return (a+b);
}

const a:number = 1 ;
const value = sum(a , 2);
console.log("value=>", value);