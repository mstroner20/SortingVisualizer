import React, {Component, useState} from 'react'
import Slider from '@material-ui/core/Slider';
import Array from './Array.js';

import '../Css/Header.css'

function Header() {

const [value, setValue] = useState(5);


const handleChange = (event, newValue) => {
    setValue(newValue);
}


return (
    <div className = "slider" style = {{width: "100px"}}> 
        <Slider min = {4} value = {value} onChange = {handleChange}></Slider>
        <Array value = {value}/>

    </div>
    
    
)
}
export default Header

