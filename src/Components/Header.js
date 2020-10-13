import React, {Component, useState} from 'react'
import Slider from '@material-ui/core/Slider';
import Array from './Array.js';
import MergeSort from './MergeSort.js';

import '../Css/Header.css'

function Header() {

let isClicked = false; 

const [value, setValue] = useState(4);
const [selectedValue, setNewValue] = useState("quickSort");





const handleChange = (event, newValue) => {
    setValue(newValue);
}

const currentAlgo = (event, newSelection) =>{
    setNewValue(newSelection);
    newSelection.forEach (newSelection =>
        console.log(`${newSelection.label}`) 
    );
}

function activateSort(){
    console.log("Button Was clicked");
    isClicked = true;
}




return (
    <div>
        <div className = "row"> 
            <div className = "col">
                <h6>Array Size: </h6>
                    <Slider step = {1} min = {4} value = {value} onChange = {handleChange} ></Slider>
                        <h5> {value}</h5>
                    <Array value = {value}/>
            </div>
            <div className="col-2">
               
            </div>
            <div className = "col-3">

                <button onClick = {() => {activateSort()}}>Sort!</button>

            </div>
            
            
        </div>
    </div>
    
    
)
}
export default Header

