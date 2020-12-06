let mergeSortAnimations = []; 

export const swap = (originalArr, leftArr, rightArr) => {
  
  let copyLeft = leftArr;
  let copyRight = rightArr;

}

export const doMergeSort = (array) => {

  function merge(leftArr, rightArr){
    const output = [];
    let leftIndex = 0; 
    let rightIndex = 0; 

    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
       
      const leftEl = leftArr[leftIndex];
      const rightEl = rightArr[rightIndex];

      if(leftEl < rightEl){
        output.push(leftEl);
        //mergeSortAnimations.push(leftEl);
        //console.log("left: " + leftEl);
        leftIndex++;
      }
      else{
        output.push(rightEl);
        //console.log("right: " + rightEl);
        //mergeSortAnimations.push(rightEl);
        rightIndex++;
      }
    }
    //console.log("output: " + [...output])
    
    console.log([...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)])
    return ( [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]); 
  };
  
  function mergeSort(array) {

    
    if(array.length <= 1){
      
      return array;
    }
    
    const middleIndex = Math.floor(array.length / 2);
    const leftArr = array.slice(0, middleIndex);
    const rightArr = array.slice(middleIndex, array.length);
    
    swap(array, leftArr, rightArr);
    
    
    //console.log(leftArr);
    //console.log(rightArr);
    //console.log(rightArr)
    
    
    return merge(
      mergeSort(leftArr),
      mergeSort(rightArr),
    ); 

  }

  return mergeSort(array);
}

export default mergeSortAnimations; 
