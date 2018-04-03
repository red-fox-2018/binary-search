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

console.log(binary_search(3, [1, 2, 3, 4, 5]) == 2); // true
console.log(binary_search(35, [13, 19, 24, 29, 32, 37, 43]) == -1); // false
console.log(binary_search(135, [100, 120, 130, 135, 150, 170]) == 3) // true

/*

RELEASE 1: 

INIT data = [13, 19, 24, 29, 32, 37, 43]
INIT value = 32

INIT left = 0
INIT right = data.length - 1
INIT mid = left + (right - left) / 2   --> [mid = 3]

step 1: check data[] index mid, nilai yang didapat adalah 29, data belum ditemukan jadi pencarian dilanjutkan
step 2: check data[] index mid, kondisi yang didapat true, sehingga nilai left = mid + 1
step 3: assign nilai mid = left + (right - left) / 2 (mid -> 3) --> [mid = 5]
step 4: check data[] index mid, nilai yang didapat adalah 73, data belum ditemukan jadi pencarian dilanjutkan
step 5: check data[] index mid < search, kondisi yang didapat false, sehingga nilai right = mid - 1
step 6: assign nilai mid = left + (right - left) / 2 (mid -> 3) --> [mid = 4]
step 7: check data[] index mid, nilai yang didapat adalah 32, data ditemukan dan pencarian berhenti

*/
