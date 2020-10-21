import React from 'react'
import {shuffledArray} from '../Components/CreateArray.js'
import {ActivateSort} from '../Components/Header.js'


import '../Css/Array.css'

let isClicked = {ActivateSort};


//If isClicked is false render from the shuffled array method
  //If isClicked true disable slider and source numArray from algo method
      //For(each iteration) <displayArray numArray{numArray}/>
function currentAlgo(){

}

let numArray = [];
//if array sort button is not pressed will default to this 
export function DisplayArray(){
  if(isClicked)
  {
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
  
}

export default DisplayArray