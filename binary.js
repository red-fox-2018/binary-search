'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i = 0; i < arr.length; i++) {
   let init = arr[i]
      for (var j = i - 1; j > -1 && arr[j] > init; j--) {
          arr[j + 1] = arr[j]
   }
    arr[j + 1] = init
 }
  return arr
}

function binary_search (search, array) {
  let atas = array.length-1
  let bawah = 0
  let mid = Math.floor((atas+bawah)/2)

  if(array.includes(search)==true){
    debugger
    while(array[mid]!==search){
    mid = Math.floor((atas+bawah)/2)
    if(array[mid]>search){
        atas = mid-1
        //console.log('atas',mid);
      }else {
        bawah=mid+1
      //  console.log('bawah',mid);
      }
    }
  }else{
    return -1
  }
return mid
}
 console.log(ownSort(testArrayGenap));
 console.log(ownSort(testArrayGanjil));
var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))//0
console.log(binary_search(10, arrayGenapSorted))//1
console.log(binary_search(33, arrayGenapSorted))//-1

console.log(binary_search(53, arrayGanjilSorted))//4/3
console.log(binary_search(3, arrayGanjilSorted))//0
console.log(binary_search(2, arrayGanjilSorted))//-1

module.exports = {
  binary_search
}
