
var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(let i=0;i<arr.length;i++){
    for (let j=i+1;j<arr.length;j++){
      if(arr[i]>arr[j]){
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

function binarySearch (search, array) {
    var firstIndex = 0
    var lastIndex = array.length
    var mid = Math.floor((firstIndex + lastIndex) / 2)
    if (array.length <= 1 && search!= array[mid]) {
        return -1
    }
    if(search==array[mid]){
      return mid
    }
    else if(search<array[mid]){
        return binarySearch(search, array.slice(0, mid) ) 
      
    }
    else if(search>array[mid]){
        return binarySearch(search, array.slice(mid))
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
//   binary_search
// }
