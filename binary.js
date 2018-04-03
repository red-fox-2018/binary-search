'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  var pembanding = arr[0]
  for(var i=0;i<arr.length;i++){
  	for(var j=0;j<arr.length-1;j++){
  		if (arr[j]>arr[j+1]) {
  			pembanding=arr[j]
  			arr[j]=arr[j+1]
  			arr[j+1]=pembanding
  		}
  	}
  }
  //for(var i=0;i<testArrayGenap.length;i++){
  // 	for(var j=0;j<testArrayGenap.length-1;j++){
  // 		if (testArrayGenap[j]>testArrayGenap[j+1]) {
  // 			pembandingGenap=testArrayGenap[j]
  // 			testArrayGenap[j]=testArrayGenap[j+1]
  // 			testArrayGenap[j+1]=pembandingGenap
  // 		}
  // 	}
  // }
  // for(var i=0;i<testArrayGanjil.length;i++){
  // 	for(var j=0;j<testArrayGanjil.length-1;j++){
  // 		if (testArrayGanjil[j]>testArrayGanjil[j+1]) {
  // 			pembandingGanjil=testArrayGanjil[j]
  // 			testArrayGanjil[j]=testArrayGanjil[j+1]
  // 			testArrayGanjil[j+1]=pembandingGanjil
  // 		}
  // 	}
  // }
  // console.log(testArrayGanjil);
   console.log(testArrayGenap);
   console.log(testArrayGanjil);
  return arr
}

function binary_search (search, array) {
  // Your searching code
  //console.log(testArrayGenap);
  var low = 0;
  var high = array.length-1;
  var mid = 0;
  var baru = 0

  while(low<=high){
  	mid=Math.floor((high+low)/2)
  	if (array[mid]===search) {
  		return mid
  	}
  	else if (array[mid]<search) {
  		low=mid+1
  		baru+=low
  	}
  	else{
  		high=mid-1
  		baru+=high
  	}
  	if (mid===0) {
  		return -1
  	}
  }
  for(var i=0;i<array.length;i++){
  		if (search!==array[i]) {
  			return -1
  		}
  	}
  return baru
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

// module.exports = {
//   binary_search
// }
   