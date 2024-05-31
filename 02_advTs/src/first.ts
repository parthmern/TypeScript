interface UserInstance {
    name : string ;
    age : number 
}

function sumOfAge(user1 : UserInstance, user2 : UserInstance): number{
    return (user1.age + user2.age) ;
}

const result = sumOfAge({
	name: "parth",
	age: 20
}, {
	name: "raman",
	age: 21
});

console.log(result);