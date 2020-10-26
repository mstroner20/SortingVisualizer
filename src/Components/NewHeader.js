import React, { useState} from 'react'
import Slider from '@material-ui/core/Slider';
import {SetSize} from './CreateArray.js';
import {DisplayArray} from './DisplayArray.js';
import '../Css/Header.css'

let isClicked = false; 

export function ActivateSort(){
    isClicked = true;
    console.log("isCliked");
    return isClicked; 
}

function Header() {

let isClicked = false; 
let numArray = [];


const [size, setValue] = useState(4);
const [selectedValue, setNewValue] = useState("quickSort");

const handleChange = (event, newValue) => {
    setValue(newValue);
    SetSize({size});
}

const currentAlgo = (event, newValue) => {
    
}

return (
    <div>
        <div className = "row"> 
            <div className = "col">
                <h6>Array Size: </h6>
                    <Slider className= 'Slider' step = {1} min = {4} value = {size} onChange = {handleChange} ></Slider>
                        <h5> {size}</h5>
                        <SetSize size ={size}/>
                        <DisplayArray/>
            </div>
            <div className="col-2">
                <select onChange = {currentAlgo}>
                    <option value="quickSort">Quick Sort</option>
                    <option value="mergeSort">Merge Sort</option>
                </select>
            </div>
            <div className = "col-3">
                <button onClick = {() => {ActivateSort()}}>Sort!</button>
            </div>
        </div>
    </div>
    
    
)


}




export default Header;

