'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code

  for (let i = 0; i < arr.length; i++) {
    let currentIndex = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[currentIndex] < arr[j]) {
        let temp = arr[currentIndex];
        arr[currentIndex] = arr[j];
        arr[j] = temp;
        currentIndex = j;
      }
    }
  }

  return arr
}

function binarySearch(search, array, front, behind) {
  // Your searching code
  let middle = Math.floor(front + behind / 2)
  
  if (search === array[middle]) {
    return middle;
  } else {
    if (array[middle] < search) {
      front = middle + 1;
      return binarySearch(search, array, front, behind);
    } else if (array[middle] > search) {
      behind = middle - 1;
      return binarySearch(search, array, front, behind);
    } else {
      return -1;
    }
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var frontEvens = 0;
var behindEvens = arrayGenapSorted.length - 1;
var arrayGanjilSorted = ownSort(testArrayGanjil)
var frontOdds = 0;
var behindOdds = arrayGanjilSorted.length - 1;

// Driver code
console.log(binarySearch(8, arrayGenapSorted, frontEvens, behindEvens))
console.log(binarySearch(10, arrayGenapSorted, frontEvens, behindEvens))
console.log(binarySearch(33, arrayGenapSorted, frontEvens, behindEvens))

console.log(binarySearch(53, arrayGanjilSorted, frontOdds, behindOdds))
console.log(binarySearch(3, arrayGanjilSorted, frontOdds, behindOdds))
console.log(binarySearch(2, arrayGanjilSorted, frontOdds, behindOdds))

// module.exports = {
//   binarySearch
// }