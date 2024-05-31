"use strict";
function sumOfAge(user1, user2) {
    return (user1.age + user2.age);
}
const result = sumOfAge({
    name: "parth",
    age: 20
}, {
    name: "raman",
    age: 21
});
console.log(result);
