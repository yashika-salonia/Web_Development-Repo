import CurrentDate from "./currentDate";

function App(){
  return (
    <center>
      <h1 className="fw-bolder">Bharat Clock</h1>
      <p className="lead">This is the clock that shows the time in Bharat at all times</p>
      <CurrentDate />
    </center>
  );
}

export default App;