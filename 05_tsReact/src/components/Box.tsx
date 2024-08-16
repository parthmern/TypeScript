import { ReactNode } from "react";

// const Box = (heading : string)       // no destrcutrure then
// const Box = ({heading} : {heading : string}) 

// type propType = {
//     heading : string ;
//     count ?: number;
//     func1 : () => void ;
//     children : ReactNode ;       // reserved word in react
// }

// const Box = ({heading, count, func1 , children} : propType) => {
//     func1();
//   return (
//     <div>
//         <p>box</p>
//         <h1>{heading}</h1>
//         <p>{count}</p>
//         <p>{children}</p>
//     </div>
//   )
// }

// export default Box ;

// using generics

// one way  <T, >
// other way <T extends {} >

type inputVal = string | number ;

const Box = <T extends inputVal >({label, value, onChange} : {
    label : string ;
    value : T ;
    onChange : boolean
}) => {
  return (
    <div>
        <p>{label}</p>
        <p>{value}</p>
        <p>{onChange}</p>
    </div>
  )
}
export default Box; 
