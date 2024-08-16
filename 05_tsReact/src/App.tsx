import Box from "./components/Box"

function App() {

  return (
    <div>
      hello
      {/* <Box heading={"he"} count={3} func1={()=>{console.log("in func")}} > {"lol"} </Box> */}
      <Box label="label" value={5} onChange={false} />
    </div>
  )
}

export default App
