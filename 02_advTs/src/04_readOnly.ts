const ans = [1,2,3,4];
ans[0] = 5;     // ts or js not complaint about this
// ans = [5,2,1];   // this thing is illegal

// but u can change internal value 

const obj = {
    name : "parht", 
    age : "ptl",
}

obj.name = "dk" ; // can do in ts and js

// how to stop


// =====================================================
interface Config {
    endpoint: string;
    apiKey: string;
  }

  
  const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
  };
  
// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.

// OR-----

interface ConfigRd {
    readonly endpoint: string;
    readonly apiKey: string;
  }

const configs: ConfigRd = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
}

// configs.endpoint = "www.cccc.c";  // cannot do this bcz of readonly
