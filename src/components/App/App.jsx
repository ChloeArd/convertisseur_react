import './App.css';
import {Converter} from "../Converter/Converter";
import {useState} from "react";

function App() {

    const unityList = ["m", "dm", "cm", "mm", "l", "dl", "cl", "ml"];

    return (
    <div className="App">
        <h1>Convertisseur d'unité</h1>
      <Converter key="1" unity={unityList} />
    </div>
  );
}

export default App;
