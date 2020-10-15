import React, { Component } from 'react'

let numArray = [];

export function setSize(props){
        let size = props.size; 
       
        return size;
}

export function FillArray(){
    for (var i=0;i < setSize; ++i) 
            numArray[i]=i;
            
    
    return numArray;
}

function shuffle (array) {
        numArray = FillArray();
        
        
        var tmp, current, top = setSize;
        if(top) while(--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        } 
        return array;
}

export function shuffledArray (){
     numArray = shuffle(numArray);
     
     return numArray;
}

export default shuffledArray;


