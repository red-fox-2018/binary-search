'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]


function ownSort(arr) {
  for(var i= 0; i < arr.length; i++){
    var idx = i;
    for (var j = i; j < arr.length; j++){
        if (arr[idx] > arr[j]){
        idx = j;
        }
    }
    var temp = arr[idx];
    arr[idx] = arr[i];
    arr[i] = temp;
  }
return arr;
}

function binary_search (search, array) {
  // Your searching code
  let min = 0
  let max = array.length-1
  while (min <= max) {
    let middle = Math.floor((min + max)/2)
    if (array[middle] === search) {
      return middle
    }
    if (array[middle] < search) {
      min = middle + 1
    } else {
      max = middle - 1
    }
  }
  return -1;
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
//
// module.exports = {
//   binary_search
// }
