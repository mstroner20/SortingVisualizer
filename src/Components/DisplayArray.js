import React, { Component } from 'react'
import {shuffledArray} from '../Components/CreateArray.js'

import '../Css/Array.css'

let numArray = [];

export function DisplayArray(props){
  numArray = shuffledArray();
  console.log(numArray);
  return(
    <div className = "arrayContainer">
        {numArray.map(num => (
        <div className = "nums" 
        style = {{height: `${num * 7 + 90}px`, width: `${90}px`}}>
          <h2>{num}</h2>
       </div>
     ))}


     
    </div>
  )    
}

export default DisplayArray