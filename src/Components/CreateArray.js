import React, { Component } from 'react'

let numArray = [];



export function fillArray(props){
    for (var i=0;i < props.size; ++i) 
            numArray[i]=i;
    return numArray;
}

function shuffle (array) {
        numArray = fillArray();
        var tmp, current, top = numArray.length;
        if(top) while(--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
        return array;
}

function shuffledArray (){
     numArray = shuffle(numArray);
    return numArray;
}

export default shuffledArray;


