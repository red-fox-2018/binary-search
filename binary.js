'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  var min = 0;
  for(var i = 1; i < arr.length; i++) {
    for(var j = i; j >= 0; j--) {
      if(arr[j-1] > arr[j]) {
        min = arr[j-1]
        arr[j-1] = arr[j]
        arr[j] = min
      }
    }
  }
  // console.log(arr);
  return arr
}
// ownSort(testArrayGenap)
function binarySearch(search, array) {
  // Your searching code
  let down = 0
  let up = array.length - 1
  // let mid = Math.floor((min+max)/2)
  return binSearch(search, array, down, up)

function binSearch(search, array, min, max) {
  let mid = Math.floor((min+max)/2)
  let index = 0

  if(min > max) {
    return -1
  }

    if(array[mid] == search) {
      index = mid
      return index
    } else if(search > array[mid]) {
      // min = mid + 1
      // mid = Math.floor((min+max)/2)
      return binSearch(search, array, mid + 1, max)
    } else if(search < array[mid]) {
      // max = mid - 1
      // mid = Math.floor((min+max)/2)
      return binSearch(search, array, min, mid - 1)
    }
    // return -1;
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGenapSorted);
console.log(arrayGanjilSorted);
// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }
