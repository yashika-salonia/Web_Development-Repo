import KgButton from "./KgButton";
import Hello from "./hello";
import Random from "./random";
function App(){

  return <div>
    {/* <h1> */}
        {/* This is the demo button. */}
    {/* </h1> */}
    {/* <KgButton></KgButton> */}
    {/* <Hello></Hello> */}
    <Random /> {/*self closing tags */}
    <Random></Random>
    <Random></Random>
    <Random></Random>

  </div>


  // return <h1>
  //     hello world!
  // </h1>
}

export default App;