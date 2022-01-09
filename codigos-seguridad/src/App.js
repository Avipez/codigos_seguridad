import React from "react";
import { UseState } from "./UseState"
/* import { ClassState } from "./ClassState"*/
import './App.css';
import { UseReducer } from "./useReducer/useReducer";

function App() {
  return (
    <div className="App">
      <UseState />
      <UseReducer />
    </div>
  );
}

export default App;
