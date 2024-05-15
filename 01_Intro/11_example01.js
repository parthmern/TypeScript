// when to use type and iterface
// ==========================================================================
// give example of callback where the called function accepts two arguments and return string
function mainFunc(cb1, cb2) {
    cb1();
    cb2("parth", 12);
    return "1";
}
function cb1() {
    // cb1 called
}
function cb2(name, age) {
    return name;
}
