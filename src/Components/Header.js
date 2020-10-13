import React, {Component, useState} from 'react'
import Slider from '@material-ui/core/Slider';
import Array from './Array.js';

import '../Css/Header.css'

function Header() {

const [value, setValue] = useState(4);


const handleChange = (event, newValue) => {
    setValue(newValue);
}


return (
    <div>
        <div className = "slider"> 
            <h6>Array Size: </h6>
            <Slider step = {1} min = {4} value = {value} onChange = {handleChange}></Slider>
                <h5> {value}</h5>
            <Array value = {value}/>
        </div>
    </div>
    
    
)
}
export default Header

