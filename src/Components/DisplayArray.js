import React from 'react'
import {shuffledArray} from '../Components/CreateArray.js'

import '../Css/Array.css'

let numArray = [];
//if array sort button is not pressed will default to this 
export function DisplayArray(props){
  numArray = shuffledArray();
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