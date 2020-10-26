import React from 'react'
import {shuffledArray} from '../Components/CreateArray.js'
import {ActivateSort} from '../Components/Header.js'
import {SetSize} from '../Components/CreateArray.js'


import '../Css/Array.css'

//let isClicked = {ActivateSort};
let numArray = [];

let arraySize = 0; 
let width, height = 0; 

function AdjustSize(arraySize){


  if(arraySize < 10){
    width = 90;
    height = 90;   
  }
  else if(arraySize >= 10 && arraySize <= 24){
    width = 40;
  }
  else if(arraySize >= 25 && arraySize <= 60){
    width = 16;
  }
  else {
    width = 8;
  }
  
}



//If isClicked is false render from the shuffled array method
  //If isClicked true disable slider and source numArray from algo method
      //For(each iteration) <displayArray numArray{numArray}/>
function currentAlgo(){

}


//if array sort button is not pressed will default to this 
export function DisplayArray(){
  
  numArray = shuffledArray();
  arraySize = numArray.length;
  AdjustSize(arraySize);

  if(isClicked)
  {
    return(
      <div className = "arrayContainer">
          {numArray.map(num => (
            <div className = "nums" 
              style = {{height: `${num * 7 + 90}px`, width: `${width}px`}}>
              <h2>{num}</h2>
       </div>
     ))}


     
    </div>
  )    
}
  
}

export default DisplayArray