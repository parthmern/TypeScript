interface UserInst{
    id : string ;
    name : string ;
    age : number ;
    email : string ;
    password : string ;
}

// here props are from above instance
// interface updateProps{
//     name : string ;
//     age : number ;
//     password : string ;
// }

// to avoid repetation
// when u done chnages so u donot have to do in all things

// how to pick some of them from one instance 
type updateProps = Pick<UserInst, 'name' | 'email'| 'password' >

function updateUserinfo(updatedUserInfo : updateProps){
    // hit the db to update user
}