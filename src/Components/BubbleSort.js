const animations = [];

export const swap = (arr, current, next) => {
    animations.push(arr[current]);
    animations.push(arr[next]);


    let curVal = arr[current];
    arr[current] = arr[next];
    arr[next] = curVal;

    
    
    
    getAnimations(animations);
}

export const getAnimations = (animations) => {
    const newAnims = animations; 
    
    return newAnims; 
}


export const doBubbleSort = (array) => {
         //start the endIndex at the last index of the arrayay
         let newArray = array; 
        
         let endIndex = newArray.length - 1;
         //run the loop until the endIndex(sorted portion) is the 0 (the full newArrayay)
         while(endIndex > 0){
             // count the number of swaps to short circuit the loop if it is already sorted
             let swaps = 0;
             //reset the currentIndex to the beginning of the newArrayay each time a new element is sorted
             let currentIndex = 0;
             // loop over the newArrayay, comparing each pair of elements until the comparison element reaches the sorted portion of the newArrayay
             while(currentIndex < endIndex){
                 // uncomment this line to see the comparison in action
                //console.log(newArray[currentIndex], newArray[currentIndex + 1])
                 // if the current element is greater than the element in front of it
                 if(newArray[currentIndex] > newArray[currentIndex + 1]){
                     //swap the 2 elements using our helper function
                     swap(newArray, currentIndex, currentIndex + 1);
                     // add 1 to the swaps counter
                     swaps++;
                 }
             //increase the currentIndex to continue iterating through the newArrayay
             currentIndex++;
             }
             //stop the loop if there were no swaps because the newArrayay must be already sorted 
             if(swaps === 0)break;
             // subtract the endIndex number to account for the new element added to the newArrayay
             endIndex--;
         }

         return newArray;
}

export default animations; 