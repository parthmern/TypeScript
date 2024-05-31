"use strict";
// also can do like this
// type UserSx = { [key: string]: { 
//                                     id: string;
//                                     name: string;
//                                };
// };
const users = {
    'abc123': { id: "abc123", name: "John Doe" },
    'xyz789': { id: "xyz789", name: "Jane Doe" },
};
console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }
console.log(users.abc123); // Output: { id: 'abc123', name: 'John Doe' }
// ===========================================================================
// ===========================================================================
