const quickSortAnims = [];


export const swap = (arr, current, next) =>{

    var curVal = arr[current];

    arr[current] = arr[next];
    arr[next] = curVal;

    if(arr[current] !== arr[next]){
        quickSortAnims.push(arr[current]);
        quickSortAnims.push(arr[next]);
    }
}

export const doQuickSort = (array) => {
    
    
    QuickSort(array, 0, array.length-1); //inital call to quicksort the array 
        
    
    //function that partitions the array and sorts the partition
    function partition(array, start, end){
        let pivot = array[end]; //pivot index to start at the end of the arr
        let partitionIndex = start; //partition index to start at the front of the array 
        
        for(let i = start; i < end; i++){ //going from front to end in the array 
            if(array[i] <= pivot){ //if array index is less than pivot
                swap(array, i, partitionIndex);
                partitionIndex++; //increment parition index 
            }
        }
       
        swap(array, partitionIndex, end);
        
        return partitionIndex;
    }
    
    function QuickSort(array, start, end){
        if(start < end){
            let partitionIndex = partition(array, start, end);
            QuickSort(array, start, partitionIndex-1);
            QuickSort(array, partitionIndex+1, end);
        }
    }

    return array;
}

export default quickSortAnims;