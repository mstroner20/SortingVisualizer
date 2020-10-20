import React, { Component } from 'react'
import {DisplayArray} from './DisplayArray';
import {currentSize} from './Header';

let numArray = [];

let size = 0; 
export function SetSize(props){
       size = props.size;
        
       return null;
}

export function FillArray(size){
        
    for (var i=0;i < size; ++i) 
        numArray[i]=i;
            
    console.log(size);
    return numArray;
}

function shuffle (array) {
        numArray = FillArray(size);
        
        var tmp, current, top = size;
        if(top) while(--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        } 
        return array;
}

export function shuffledArray(){
     numArray = shuffle(numArray);
    
     return numArray;
}

export default shuffledArray;


