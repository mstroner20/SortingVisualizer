import React, { Component} from 'react'

import '../Css/Array.css'

function Array(props){
    
    for (var numArray=[],i=0;i<props.value; ++i) 
    numArray[i]=i;

    function shuffle(array) {
        var tmp, current, top = props.value;
        if(top) while(--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
        return array;
      }



    // http://stackoverflow.com/questions/962802#962890
    //Generates random nums to fill the array based on size 
    numArray = shuffle(numArray);
    return(
        <div className = "arrayContainer">
            {numArray.map(num => (
            <div className = "nums">
              <h2>{num}</h2>
           </div>
         ))}
        </div>
    )
}

export default Array