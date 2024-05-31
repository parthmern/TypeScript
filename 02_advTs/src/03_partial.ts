// interface User{
//     id: string;
//     name: string;
//     age: string;
// }

// i want to convert above to all optional

// interface optionalUser{
//     id?: string;
//     name?: string;
//     age?: string;
// }

// so i can do similar like this

// type optionalUser = Partial<User>

// =============================================================
// using pick and partial - first picking values and then partial it

interface User {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the database tp update the user
}
updateUser({})

updateUser( {name: "parth"} );
updateUser( {name: "parth", age : "20"} );
// updateUser( {name: "parth", password : "1fhdh"} );       -- gives error bcz password isnot in prop