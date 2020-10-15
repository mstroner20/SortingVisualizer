import React, {Component, useState} from 'react'
import Slider from '@material-ui/core/Slider';
import Array from './Array.js';
import MergeSort from './MergeSort.js';

import '../Css/Header.css'

function Header() {

let isClicked = false; 

const [size, setValue] = useState(4);
const [selectedValue, setNewValue] = useState("quickSort");

let props = {
    size : {size},
    algo : "merge",

};


const handleChange = (event, newValue) => {
    setValue(newValue);
}

const currentAlgo = (event, newValue) => {
    
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
                    <Slider step = {1} min = {4} value = {size} onChange = {handleChange} ></Slider>
                        <h5> {size}</h5>
                    <Array value = {size}/>
            </div>
            <div className="col-2">
                <select onChange = {currentAlgo}>
                    <option value="quickSort">Quick Sort</option>
                    <option value="mergeSort">Merge Sort</option>
                </select>
            </div>
            <div className = "col-3">

                <button onClick = {() => {activateSort()}}>Sort!</button>

            </div>
        </div>
    </div>
    
    
)
}
export default Header

