'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]>arr[j]){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}
/* [ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
   [ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
   [ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
   [ 3, 21, 31, 53, 53, 55, 77, 85, 89 ]
   [ 3, 21, 31, 53, 53, 55, 77, 85, 89 ]
   [ 3, 21, 31, 53, 53, 55, 77, 85, 89 ] */

function binary_search (search, array) {
  let awal = 0;
  let akhir = array.length-1;
  for(let i=awal;i<akhir;i++){
    akhir = Math.floor(akhir/2);
    if(search === array[akhir]){
      return akhir;
    }
    else if(search <= array[akhir]){
      i = awal-1;
      akhir = akhir;
    }
    else if(search>=array[akhir]){
      awal = akhir;
      akhir = array.length-1;
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))//0
console.log(binary_search(10, arrayGenapSorted))//1
console.log(binary_search(33, arrayGenapSorted))//-1

console.log(binary_search(53, arrayGanjilSorted))//3
console.log(binary_search(3, arrayGanjilSorted))//0
console.log(binary_search(2, arrayGanjilSorted))//-1

// module.exports = {
//   binary_search
// }
