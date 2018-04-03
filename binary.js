/*jshint esversion:6*/
/*jshint- W117 */

'use strict';

const testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
const testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > first) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = first;
  }
  return arr;
}

// function insertionSort (arr) {
//   for (var i = 0; i < arr.length; i++) {
//     let first = arr[i];
//     for (var j = i - 1; j > -1 && arr[j] > first; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = first;
//   }
//
//   return arr;
// }


// //==========Solution 1==========
function binary_search(search, array) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] === search) {
      return mid;
    } else if (search > array[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

//==========Solution 2==========
function binary_search(search, array, low = 0, high = array.length - 1) {
  let mid = Math.floor((low + high) / 2);
  if (low > high) {
    return -1;
  } else if (search == array[mid]) {
    return mid;
  } else if (search > array[mid]) {
    return binary_search(search, array, mid + 1, high);
  } else {
    return binary_search(search, array, low, mid - 1);
  }
}

var arrayGenapSorted = insertionSort(testArrayGenap);
var arrayGanjilSorted = insertionSort(testArrayGanjil);


// Driver code
console.log(binary_search(8, arrayGenapSorted));
console.log(binary_search(10, arrayGenapSorted));
console.log(binary_search(33, arrayGenapSorted));

console.log(binary_search(53, arrayGanjilSorted));
console.log(binary_search(3, arrayGanjilSorted));
console.log(binary_search(2, arrayGanjilSorted));


module.exports = {
  binary_search
};
