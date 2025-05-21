import React from "react";
import styles from "./App.module.css";
import Display from "./components/Display.jsx";
import ButtonContainer from "./components/ButtonContainer.jsx";

function App() {
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonContainer />
    </div>
  );
}

export default App;
