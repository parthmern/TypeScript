function greet(firstName) {
    console.log("Hello " + firstName);
}
// Example Usage
greet("harkirat");
// ====================================
// FUNCTION RETURN SOMETHING
// function sum(a:number , b:number){
//     return (a+b);
// }
function sum(a, b) {
    console.log("a is", a, "b is ", b);
    return (a + b);
}
var a = 1;
var value = sum(a, 2);
console.log("value=>", value);
