'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  var count1 = 0
  while(count1 < arr.length){
    var value = arr[count1]
    var count2 = count1 -1
    while(count2 >=0 && arr[count2] > value){
      arr[count2+1] = arr[count2]
      count2 --
    }
    arr[count2+1] = value
    count1++
  }
  return arr
}

function binary_search (search, array,min = 0,max = array.length - 1) {
  // console.log(search, array,min,max);
  var middle = Math.floor((min + max)/2)

  if(min >= max){
    if(array[middle] !== search){
        return -1
    }else{
      return middle
    }
  }else{
    if (array[middle] === search) {
        return middle
      }else{
        if (array[middle] < search) {
          min = middle + 1
        } else {
          max = middle - 1
        }
        return binary_search (search, array,min,max)
      }
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(arrayGenapSorted)
console.log(arrayGanjilSorted)
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(18, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
