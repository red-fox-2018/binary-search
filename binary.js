'use strict'

/*
*PSEUDOCODE
*
*CREATE FUNCTION binary_search with parameter 'search','array','min','max'
*>CREATE VAR mid WITH value min + max /2
*>IF min equal with mid or max equal with mid
*>>IF search equal with array index of mid
*>>>RETURN mid
*>>ELSE RETURN -1
*>ELSE 
*>>IF array index of mid MORE THAN search
*>>> max = mid -1
*>>> RETURN function binary_search
*>>ELSE
*>>> min = mid -1
*>>> RETURN function binary_search
*/

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var i=0; i< arr.length; i++) {

    let temp = arr[i]
    let j = i-1

    while (j >= 0 && arr[j] > temp) {

      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = temp
  }
  
   return arr
   
}

function binary_search (search, array, min = 0, max = array.length-1) {
  // Your searching code

  let mid = Math.floor((min+max)/2)

  if (min == mid ||  max == mid) {

    if (search == array[mid]){

      return mid
    } else {

      return -1
    }

  } else {

    if (array[mid] > search) {

      max = mid -1
      return binary_search(search, array, min, max)
    } else {

      min = mid +1
      return binary_search(search, array, min, max)
    }
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
