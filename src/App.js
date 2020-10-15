import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Slider from '@material-ui/core/Slider';
import Header from './Components/Header.js';
import Array from './Components/DisplayArray.js';
import shuffledArray from './Components/CreateArray.js';
import DisplayArray from './Components/DisplayArray.js';




function App(props) {
  return (
    <div className="App">
    <Header/>
    <DisplayArray/>
    

    </div>
  );
}

export default App;
