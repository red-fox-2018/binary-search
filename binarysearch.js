// 'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var awal = ''
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        awal = arr[i]
        arr[i] = arr[j]
        arr[j] = awal
      }
    }
  }
  return arr
}

function binary_search(search, array) {
var tengah=0
var batasBawah=0
var batasAtas=array.length-1
var hasil=0
  while(batasBawah<=batasAtas) {
    tengah=Math.floor((batasBawah+batasAtas)/2)
    if (array[tengah]===search) {
      return tengah;
    }
    else if (search < array[tengah]) {
      batasAtas=tengah - 1
      hasil+=batasAtas
    }
    else if (search > array[tengah]) {
      batasBawah=tengah + 1
      hasil+=batasBawah
    }
    else if (tengah===0) {
      return -1;
    }
  }
for (var j = 0; j <= array.length; j++){
  if (array[j] !== search) {
    return -1;
  }
}
return hasil;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))// 0
console.log(binary_search(10, arrayGenapSorted))// 1
console.log(binary_search(33, arrayGenapSorted))// -1

console.log(binary_search(53, arrayGanjilSorted))// 4
console.log(binary_search(3, arrayGanjilSorted))// 0
console.log(binary_search(2, arrayGanjilSorted))// -1
