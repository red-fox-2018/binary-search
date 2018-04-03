'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // insertion sort
  let len = arr.length - 1;
  for (let i = 0; i <= len; i++) {
    let j = i;
    while (j > 0) {
      if (arr[j-1] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      }
      j = j - 1;
    }
  }
  return arr;
}

function binary_search (search, array) {
  let left = 0;
  let right = array.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);
    if (array[mid] === search) {
      return mid;
    }

    if (array[mid] < search) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
console.log(arrayGenapSorted);

var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGanjilSorted);

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }
