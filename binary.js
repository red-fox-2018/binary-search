'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}

function binarySearch(search, array) {
  // Your searching code
  let awal = 0;
  let akhir = array.length-1;
  let mid = 0;     
    while (awal <= akhir){
      mid = Math.floor((awal+akhir)/2);     
      if (array[mid] === search) return mid ; 
      else if (array[mid] < search) awal = mid+1;
      else akhir = mid-1;        
    }
    return -1 ;
}
var arrayGenapSorted = ownSort(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil);

// Driver code
console.log(binarySearch(3, [1,2,3,4,5]) === 2) // true
console.log(binarySearch(35, [13,19,24,29,32,37,43]) === -1) //true
console.log(binarySearch(135, [100,120,130,135,150,170]) === 3) //true

console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))
console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

// module.exports = {
//   binarySearch
// }