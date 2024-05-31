"use strict";
// interface User{
//     id: string;
//     name: string;
//     age: string;
// }
;
function updateUser(updatedProps) {
    // hit the database tp update the user
}
updateUser({});
updateUser({ name: "parth" });
updateUser({ name: "parth", age: "20" });
// updateUser( {name: "parth", password : "1fhdh"} );       -- gives error bcz password isnot in prop
