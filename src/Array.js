import React from 'react'
import './Array.css'

import {Slider} from '@material-ui/core'

export default class NavBar extends React.Component{
  state = {
    value : 4
  }

  
Array(props){
    
  var size = 4; 
  var test = 15; 

  //Fills array with values, not randomized yet
  for (var numArray=[],i=0;i<this.state.value; ++i) numArray[i]=i;

  // http://stackoverflow.com/questions/962802#962890
  //Generates random nums to fill the array based on size 
  function shuffle(array) {
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
  }
  
  numArray = shuffle(numArray);

  return (
      <div className = 'elements' >
         {numArray.map(num => (
            <div className = "text" style={{height: `${num * 50 }px`}}>
              <h2>{num}</h2>
           </div>
         ))}
      </div>
      
  );
}
handleOnChange = (e) => this.setState({value: e.target.value})

render(){
  return(
    <div > 
      <input type= "range" min = {4} max = {500} value = {this.state.value}
      className = "slider" onChange={this.handleOnChange} />

      <p>{this.state.value}</p>
     
        <div className = "center">
          {this.Array()}
          </div>
      
    </div>
    
  )
}

}








