"use strict";
const ans = [1, 2, 3, 4];
ans[0] = 5; // ts or js not complaint about this
// ans = [5,2,1];   // this thing is illegal
// but u can change internal value 
const obj = {
    name: "parht",
    age: "ptl",
};
obj.name = "dk"; // can do in ts and js
const config = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
};
const configs = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
};
// configs.endpoint = "www.cccc.c";  // cannot do this bcz of readonly
