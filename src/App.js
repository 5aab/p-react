import React from 'react';
import logo from './logo.svg';
import './App.css';
import StarRating from "./StarRating";
import AddColorForm from "./AddColorForm";
import {logColor} from "./AppUtils";
import ColorsWidget from "./ColorsWidget";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <StarRating/>
        <AddColorForm onNewColor={logColor}/>
        <ColorsWidget/>
      </header>
    </div>
  );
}

export default App;
