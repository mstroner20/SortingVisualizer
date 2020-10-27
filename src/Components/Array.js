import React from 'react'
import MergeSort from '../Components/MergeSort.js'
import '../Css/Array.css'

function Array(props){
    var size = props.value; 
    for (var numArray=[],i=0;i<size; ++i) 
    {
        numArray[i]=i;
        
    }
    function shuffle(array) {
        var tmp, current, top = size;
        if(top) while(--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
        return array;
    }

    let width = 0;
    let opacity = 1; 
    

    if(size < 10){
        width = 90;
        
    }
    else if(size > 10 && size <= 24){
        width = 60;
        
    }
    else if(size >= 25 && size < 48){
        width = 16; 
        opacity = 0;
    }
    else{
        width = 8; 
        opacity = 0;
    }

    // http://stackoverflow.com/questions/962802#962890
    //Generates random nums to fill the array based on size 
    numArray = shuffle(numArray);
    
    
    if(props.algo === 'MergeSort' && props.sort === true){
        MergeSort(numArray);

    }

    function renderNewArray(){
        
        return(
            <div className = "arrayContainer">
                {numArray.map(num => (
                <div className = "nums" 
                style = {{height: `${num * 7 + 90}px`, width: `${width}px`}}>
                  <h2 style = {{opacity:`${opacity}`}}>{num}</h2>
               </div>
             ))}
            </div>
        )
    }

    return(
        <div>
            {renderNewArray()}
        </div>
    )

    


   

         
   
}

export default Array