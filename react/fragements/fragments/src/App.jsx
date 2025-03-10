import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    // <div> - to avoid this div
    //1. use React.Fragment -<React.Fragment></React.Fragment>
    //2. <>
    <>
      <h1>Healthy Food</h1>
      <ul class="list-group">
        <li class="list-group-item" aria-current="true">Dal</li>
        <li class="list-group-item">Green Vegetables</li>
        <li class="list-group-item">Milk</li>
        <li class="list-group-item">Roti</li>
        <li class="list-group-item">Salad</li>
      </ul>
    </>
    // </div>
  );
}

export default App;
