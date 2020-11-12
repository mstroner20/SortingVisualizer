import renderNewArray from './Array.js'

function swap(arr, current, next){
    let curVal = arr[current];
    arr[current] = arr[next];
    arr[next] = curVal; 
    
   

}

function bubbleSortBasic(arr)
{
//start the endIndex at the last index of the array
let endIndex = arr.length - 1;
//run the loop until the endIndex(sorted portion) is the 0 (the full array)
  while(endIndex > 0){
      // count the number of swaps to short circuit the loop if it is already sorted
      let swaps = 0;
      //reset the currentIndex to the beginning of the array each time a new element is sorted
      let currentIndex = 0;
      // loop over the array, comparing each pair of elements until the comparison element reaches the sorted portion of the array
      while(currentIndex < endIndex){
          // uncomment this line to see the comparison in action
           renderNewArray(arr);
          // if the current element is greater than the element in front of it
          if(arr[currentIndex] > arr[currentIndex + 1]){
              //swap the 2 elements using our helper function
              swap(arr, currentIndex, currentIndex + 1);
              // add 1 to the swaps counter
              swaps++;
          }
          //increase the currentIndex to continue iterating through the array
          currentIndex++;
      }
      //stop the loop if there were no swaps because the array must be already sorted 
      if(swaps === 0) break;
      // subtract the endIndex number to account for the new element added to the array
      endIndex--;

  }
  console.log(arr);
  return arr;

}



  
export default bubbleSortBasic