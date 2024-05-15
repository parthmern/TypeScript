function isLegal(user : {
    firstName : string ,
    lastName : string ,
    age : number ,
}): boolean{

    if(user.age > 21) {
        return true ;
    }
    else{
        return false ;
    }
    
}

function greet(user : {
    firstName : string ,
    lastName : string ,
    age : number ,
}){
    console.log("hiii", user.firstName);
}



const user = {
    firstName : "parth", 
    lastName : "patel", 
    age : 25 ,
}

const ans : any = isLegal(user);
console.log(ans);

greet(user);


// here for above thing i have to define data type everytime for that object
// so create interface for this
interface User {
    firstName : string ,
    lastName : string ,
    age : number ,
};

function checkLegal(user : User){
    if(user.age > 21) {
        return true ;
    }
    else{
        return false ;
    }
}

function greeting(user: User){
    console.log("greeeeet", user.lastName);
}

const res = checkLegal(user);
console.log(res);

greeting(user);
