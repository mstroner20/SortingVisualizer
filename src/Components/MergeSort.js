import renderNewArray from '../Components/Array.js'

function swap(arr, i , j){
    let past = arr[i];
    arr[i] = j;
    arr[j] = past;
    
}

function MergeSort(arr){
    
    var left = 0;
    var right = arr.length-1;
    var pivot   = arr[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
        console.log(i + "" + j);
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
            console.log("add")
        }
        while (arr[j] > pivot) {
            j--;
            
        }
        if (i <= j) {
            swap(arr, i, j); //swap two elements
            
            i++;
            j--;
        }
    }
    console.log(arr); 
}


  
export default MergeSort