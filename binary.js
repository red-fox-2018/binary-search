'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {  
  for(var i=0;i<arr.length;i++){
    for(var k=i+1;k<arr.length;k++){
      if(arr[i]>arr[k]){
        var tmp = arr[i]
        arr[i] = arr[k]
        arr[k] = tmp
      }
    }
  }
  return arr
}
// [ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
function binarySearch (search, array) {
  let min = 0
  let max = array.length - 1

  while(min <= max){
    let nilaiTengah = Math.floor((min + max) /2);

    if(array[nilaiTengah] === search)
        return nilaiTengah;
    else if(array[nilaiTengah] < search)
        min = nilaiTengah + 1;
    else
        max = nilaiTengah - 1;	
  }
  return -1;
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
//   binary_search
// }
