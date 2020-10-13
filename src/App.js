import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Slider from '@material-ui/core/Slider';
import Header from './Components/Header.js';
import Array from './Components/Array.js';




function App(props) {
  return (
    <div className="App">
    <Header/>
    <Array />
    </div>
  );
}

export default App;
