'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    let value = arr[i];
    for (var j = i - 1; j > -1 && arr[j] > value; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = value;
  }
  return arr;
}

// function binarySearch(search, array) {
//   var batasBawah = 0;
//   var batasAtas = array.length - 1;
//
//   while(batasBawah <= batasAtas){
//     var mid = Math.floor((batasBawah + batasAtas) / 2);
//     if(search === array[mid]){
//       return mid;
//     }
//     else if(search > array[mid]){
//         batasBawah = mid + 1;
//       }
//     else if(search < array[mid]) {
//         batasAtas = mid - 1;
//       }
//     }
//
//   return -1
// }

function binarySearch(search, array, low = 0, high = array.length -1){
  let mid = Math.floor((low+high)/2);
  if (low > high){
    return -1;
  }
  if (search === array[mid]){
    return mid;
  }else if(search > array[mid]){
    return binarySearch(search, array, mid +1, high);
  }else{
    return binarySearch(search, array, low, mid -1);
  }

}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))



// module.exports = {
//   binarySearch
// }
