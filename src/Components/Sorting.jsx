import React from 'react'
import '../Components/Sorting.css'
import  '../Components/BubbleSort.js';
import animations, { doBubbleSort } from '../Components/BubbleSort.js';
import quickSortAnims, { doQuickSort } from '../Components/QuickSort.js';
import { doMergeSort } from './MergeSort';


export class SortingVisualizer extends React.Component{
    

    //Creates a random array for sorting purpose
    constructor(props){
        super(props);
        
        this.state = {
            array:[],
            quickSortSpeed: 1,
            bubbleSortSpeed: 1,  
        };
    }

    componentDidMount() {
        this.resetArray();   
    }

    
    
    resetArray(){
        let array = [];
        
        for(let i = 0; i < 500; i++){
            array.push(randomIntFromIntervals(5,750, array));
            
        }
        this.setState({array});
        console.log(array);
    }

    
    
    bubbleSort(){
        let anims = [];
        const sortedArray = doBubbleSort(this.state.array);
        console.log(sortedArray);
        let bars = [];
        
        //Only initial positions
        //console.log(arrayBars); //inital log
        anims = animations;
        //console.log(anims);
        
        for(let i = 0; i < anims.length; i+=2){
            
            let swap = 0;
            let firstBar = anims[i] + 'px';
            let secondBar = anims[i+1] + 'px';
            bars = document.getElementsByClassName('array-bar');
            
            console.log('anim: ' + firstBar + ' ' + secondBar);
            
            //console.log(currentArrayBars);
           
            setTimeout(() => {
                let firstIdx = 0; 
                let secondIdx = 0; 

               while(swap === 0)
               {
                   for(let j = 0; j < bars.length; j++){
                       if(bars[j].style.height === firstBar){
                           firstIdx = j; 
                           bars[j].style.backgroundColor = 'red';
                       }
                       else if(bars[j].style.height === secondBar){
                            secondIdx = j; 
                            bars[j].style.backgroundColor = "red";
                       }
                       else{
                        bars[j].style.backgroundColor = "blue";
                       }
                   }

                   let temp = bars[firstIdx].style.height;
                   
                   bars[firstIdx].style.backgroundColor = "red";
                   bars[secondIdx].style.backgroundColor = "red";

                   bars[firstIdx].style.height = bars[secondIdx].style.height;
                   bars[secondIdx].style.height = temp;

                   swap++;
               }

            }, i * this.state.bubbleSortSpeed)
            
            
            
            
        }

        anims.length = 0;
        
        
    
    }; 

    quicksort(){
        let anims = [];
        const sortedArray = doQuickSort(this.state.array);
        anims = quickSortAnims;
        let bars = [];
        
        console.log(sortedArray);

        for(let i = 0; i < anims.length; i+=2){
            
            let swap = 0;
            let firstBar = anims[i] + 'px';
            let secondBar = anims[i+1] + 'px';
            bars = document.getElementsByClassName('array-bar');
            
            console.log('anim: ' + firstBar + ' ' + secondBar);
            
            //console.log(currentArrayBars);
           
            setTimeout(() => {
                let firstIdx = 0; 
                let secondIdx = 0; 

               while(swap === 0)
               {
                   for(let j = 0; j < bars.length; j++){
                       if(bars[j].style.height === firstBar){
                           firstIdx = j; 
                           bars[j].style.backgroundColor = 'red';
                       }
                       else if(bars[j].style.height === secondBar){
                            secondIdx = j; 
                            bars[j].style.backgroundColor = "red";
                       }
                       else{
                        bars[j].style.backgroundColor = "lightblue";
                       }
                   }
                   if(firstIdx === secondIdx){
                    bars[firstIdx].style.backgroundColor = "red";
                   }
                   else{
                    let temp = bars[firstIdx].style.height;
                   
                    bars[firstIdx].style.backgroundColor = "red";
                    bars[secondIdx].style.backgroundColor = "red";
 
                    bars[firstIdx].style.height = bars[secondIdx].style.height;
                    bars[secondIdx].style.height = temp;

                   }

                   

                   swap++;
               }
            }, i * this.state.quickSortSpeed)
        }

        anims.length = 0;  
    }

    mergeSort(){

        const sortedArray = doMergeSort(this.state.array);
        console.log(sortedArray);

    }
     
render(){
    const {array} = this.state; 
    
    return (

       <div className = "array-container">

        {array.map((value, idx) => (
                <div className = "array-bar"   key = {idx}
                  style = {{height: `${value}px`}}>
                </div>
        ))}

        <div >
            <button onClick ={() => this.resetArray()}> Generate New Array </button>
            <button onClick ={() => this.bubbleSort()}> Bubble Sort</button>
            <button onClick ={() => this.quicksort()}>  Quick Sort</button>
            <button onClick ={() => this.mergeSort()}>  Merge Sort</button>
        </div>
    
        </div>
    );
}




}
export default SortingVisualizer

function randomIntFromIntervals(min, max, arr){
    while(arr.length < max){
        var r = Math.floor(Math.random() * max) + 1;
        if(arr.indexOf(r) === -1) 
        return r; 
    }
}