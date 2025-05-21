import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
function App() {
  let foodItems = ["Dal", "Roti", "Salad", "Milk", "Ghee"];
  // let foodItems=[];

  // conditional rendering
  // Terninary operator
  // let emptyMessage=foodItems.length === 0 ? <h3>No food items added.</h3>:null;

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>

        {/* truthy-falsy values - Logical operator */}
        {/* {foodItems.length === 0 && <h3>No food items added.</h3>} */}
        {/* {emptyMessage} */}

        {/* <ul className="list-group">
        {foodItems.map( (item) => (
          <li key={item} className="list-group-item" >{item}</li>
        ))}
      </ul> */}

        {/* Fragments */}
        {/* <ul class="list-group">
        <li class="list-group-item" aria-current="true">Dal</li>
        <li class="list-group-item">Green Vegetables</li>
        <li class="list-group-item">Milk</li>
        <li class="list-group-item">Roti</li>
        <li class="list-group-item">Salad</li>
      </ul> */}

        {/* props in react - follows parent to child flow of data */}
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>
        <p>Above are the list of items that are good for your health</p>
      </Container>
    </>
  );
}

export default App;
