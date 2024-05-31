interface UserP {
  id: string;
  name: string;
}

type Users = { [key: string]: UserP };

// also can do like this
// type UserSx = { [key: string]: {
//                                     id: string;
//                                     name: string;
//                                };
// };

const users: Users = {
  abc123: { id: "abc123", name: "John Doe" },
  xyz789: { id: "xyz789", name: "Jane Doe" },
};

// ANOTHER SYNTAX
type UserSyx = Record<string, UserP>; // means key is string and UserP is obj under key like above

console.log(users["abc123"]); // Output: { id: 'abc123', name: 'John Doe' }
console.log(users.abc123); // Output: { id: 'abc123', name: 'John Doe' }

// ===========================================================================
// ===========================================================================
// MAP - maps gives you an even fancier way to deal with objects. Very similar to Maps in C++
// JS concept ( not ts )

interface UserI {
  id: string;
  name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, UserI>();

// Add users to the map using .set
usersMap.set("abc123", { id: "abc123", name: "John Doe" });
usersMap.set("xyz789", { id: "xyz789", name: "Jane Doe" });

// Accessing a value using .get
console.log(usersMap.get("abc123")); // Output: { id: 'abc123', name: 'John Doe' }
