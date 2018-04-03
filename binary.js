'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    for (var j = i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        var temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr
}

function binarySearch (search, array) {
  // var midInd = Math.floor((array.length - 1) / 2);
  // var tempArr = [];
  // if (array[midInd] === search) {
  //   return true;
  // } else {
  //   if (array.length === 1) {
  //     if (array[0] === search) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   } else
  //   if (search > array[midInd]) {
  //     tempArr = array.slice(midInd, array.length)
  //     return binarySearch(search, tempArr)
  //   } else {
  //     tempArr = array.slice(0, midInd)
  //     return binarySearch(search, tempArr)
  //   }
  // }

  var mid = Math.floor(array.length / 2);
  var endInd = array.length - 1;
  var firstInd = 0;
  while ((mid - firstInd) !== 1 && (endInd - mid) !== 1) {
    if (array[mid] === search) {
      return 'located at index ' + mid;
    }
    if (search > array[mid]) {
      firstInd = mid;
      mid = Math.floor((endInd + mid) / 2);
    } else {
      endInd = mid;
      mid = Math.floor((firstInd + mid) / 2)
    }
  }
  if (array[firstInd] === search) {
    return 'located at index ' + firstInd;
  } else if (array[mid] === search) {
    return 'located at index ' + mid;
  } else if (array[endInd] === search) {
    return 'located at index ' + endInd;
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))
//
console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }
