'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(let i = 0; i < arr.length; i++){
    let tmp = i;
    for(let j = tmp-1; j >= 0; j--){
      if(arr[j]>arr[tmp]){
        [arr[tmp], arr[j]] = [arr[j], arr[tmp]];
        tmp = j;
      }
    }
  }

  return arr
}

// function binary_search (search, array) {
//   // Your searching code
//   let indexMin = 0;
//   let indexMax = array.length -1;
//
//   while(indexMin <= indexMax){
//     let indexMid = Math.floor((indexMin + indexMax)/2);
//     if(array[indexMid] === search){
//       return indexMid
//     }else if(array[indexMid] > search){
//       indexMax = indexMid - 1
//     } else if(array[indexMid] < search){
//       indexMin = indexMid + 1
//     }
//   }
//
//   return -1;
// }
function binarySearch(arr, indexMin, indexMax, target){
  if(indexMin > indexMax){
    return -1
  }

  let indexMid = Math.floor((indexMin + indexMax)/2)
  if(arr[indexMid] == target){
    return indexMid
  }else if(arr[indexMid] > target){
    return binarySearch(arr, indexMin, indexMid-1, target)
  }else if(arr[indexMid] < target){
    return binarySearch(arr, indexMid+1, indexMax, target)
  }
}

function binary_search (search, array) {
  let min = 0;
  let max = array.length -1;

  return binarySearch(array, min, max, search)

}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
