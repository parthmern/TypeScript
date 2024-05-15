import React from 'react';

// Define the interface for props
interface AppProps {
  name: string;
  age: number;
  isAdmin: boolean;
}

const MainApp = () =>{
    return(
        <App name="parth" age={12} isAdmin={true} />
    )
}

// Define the App component with the AppProps interface
const App= (props: AppProps) => {
  return (
    <div>
      <h1>Welcome to the App!</h1>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Is Admin: {props.isAdmin ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default App;

