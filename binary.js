'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  let tmp = 0
  for(let i=1; i<arr.length; i++){
    debugger
    for (var j = 0; j < i; j++) {
      debugger
      if(arr[i] < arr[j]){
        debugger
        tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
      }
    }

    //masih salah algoritmanya
    // let j = i -1
    // while(j>0){
    //   if(arr[i] > arr[j]){
    //     tmp = arr[i]
    //     arr[i] = arr[j]
    //     arr[j] = tmp
    //   }
    //   j--
    // }

  }
  return arr
}


// console.log(ownSort(testArrayGenap))

function binary_search (search, array) {
  var low = 0
  var high = array.length-1
  while(low<=high){
    var mid = Math.round((low+high)/2)
    if(array[mid]===search){
      return mid
    }
    else if(array[mid]<search){
      low = mid + 1
    }
    else {
      high = mid - 1
    }
  }

  return -1;

}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
//
// console.log(binary_search(53, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }
