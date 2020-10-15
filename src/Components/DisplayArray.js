import React, { Component } from 'react'
import {shuffledArray} from '../Components/CreateArray.js'

import '../Css/Array.css'

class DisplayArray extends Component{
    
    //Function to shuffle the array
    //Call algo class passing the array to the class 
    ///Recall render array methoid until array is sorted 
    constructor(props){
        super(props);
        let numArray = [];
        
    }
    
    render(){

              
      return(
        // <div className = "arrayContainer">
        //     {shuffledArray.numarray.map(num => (
        //     <div className = "nums" 
        //     style = {{height: `${num * 7 + 90}px`, width: `${90}px`}}>
        //       <h2>{num}</h2>
        //    </div>
        //  ))}
        // </div>

        <div>
            
        </div>
      )    
    }
}

export default DisplayArray