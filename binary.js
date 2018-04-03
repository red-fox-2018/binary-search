'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(let i = 0; i < arr.length; i++) {
    let tmp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > tmp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = tmp;
  }
  return arr
}

function binarySearch (search, array) {
  // Your searching code
  var minIndex = 0;
  var maxIndex = array.length-1;

  while (minIndex <= maxIndex) {
    var midIndex = Math.floor((minIndex + maxIndex) / 2);
    var currentValue = array[midIndex];
      //console.log('midIndex: '+midIndex);
      //console.log('currentValue: '+currentValue);
    if (currentValue < search) {
        minIndex = midIndex + 1;
    }
    else if (currentValue > search) {
        maxIndex = midIndex - 1;
    }
    else {
        return midIndex;
    }
  }
  return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
// console.log(arrayGenapSorted);
console.log(binarySearch(8, arrayGenapSorted))
// console.log(arrayGenapSorted);
console.log(binarySearch(10, arrayGenapSorted))
// console.log(arrayGenapSorted);
console.log(binarySearch(33, arrayGenapSorted))

// console.log(arrayGanjilSorted);
console.log(binarySearch(53, arrayGanjilSorted))
// console.log(arrayGanjilSorted);
console.log(binarySearch(3, arrayGanjilSorted))
// console.log(arrayGanjilSorted);
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}
