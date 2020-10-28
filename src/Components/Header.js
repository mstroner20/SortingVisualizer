import React, {useState} from 'react'
import Slider from '@material-ui/core/Slider';
import Array from './Array.js';

import '../Css/Header.css'


let isClicked = false; 

function Header() {


const [value, setValue] = useState(4);
const [selectedValue, setNewValue] = useState("BubbleSort");

const handleChange = (event, newValue) => {
    setValue(newValue);
}

const currentAlgo = (event) =>{
    setNewValue(event.target.value);
    //console.log(selectedValue);
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
                    <Slider disabled = {isClicked} step = {1} min = {4} value = {value} onChange = {handleChange} ></Slider>
                        <h5> {value}</h5>
                    <Array value = {value} algo = {selectedValue} sort = {isClicked}/>
            </div>
            <div className="col-2">
               <select defaultValue = {"BubbleSort"} onChange = {currentAlgo} disabled = {isClicked}>
                    <option value="MergeSort" label= 'Merge Sort'></option>
                    <option value="BubbleSort" label= 'Bubble Sort'></option>
                    <option value="QuickSort" label= 'Quick Sort'></option>

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