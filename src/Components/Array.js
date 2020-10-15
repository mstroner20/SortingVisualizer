import React, { Component} from 'react'

import '../Css/Array.css'

function Array(props){
    // http://stackoverflow.com/questions/962802#962890
    for (var numArray=[],i=0;i<props.value; ++i) 
    numArray[i]=i;

    //Generates Random Array 
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

      //need to write an algo like this ^^ that sorts array based on algo 
        //Returns new array after each move 
        //Render array after each move 




    //Generates random nums to fill the array based on size 
    numArray = shuffle(numArray);

    if(props.value < 10){
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
    else if (props.value >= 10 && props.value <= 24){
      return(
        <div className = "arrayContainer">
            {numArray.map(num => (
            <div className = "nums" 
            style = {{height: `${num * 7 + 90}px`, width: '60px'}}>
              <h2>{num}</h2>
           </div>
         ))}
        </div>
    )

    }
    else if(props.value >= 25 && props.value < 60){
      return(
        <div className = "arrayContainer">
            {numArray.map(num => (
            <div className = "nums" 
            style = {{height: `${num * 7 + 90 }px`, width: '16px'}}>
              
           </div>
         ))}
        </div>
    )
    }
    else{
      return(
        <div className = "arrayContainer">
            {numArray.map(num => (
            <div className = "nums" 
            style = {{height: `${num * 7 + 90}px`, width: '8px'}}>
              
           </div>
         ))}
        </div>
    )
    }
 
}

export default Array