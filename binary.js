'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8] //[ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55] //[ 3, 21, 31, 53, 53, 55, 77, 85, 89 ]

function ownSort(arr) {
  // Your sorting code
	for(var i=1;i<arr.length;i++) {
  		for(var j=0;j<=i-1;j++) {
  			if(arr[i]<arr[j]){
  				var temp=arr[i];
  				arr[i]=arr[j];
  				arr[j]=temp;
  			}	
  		}
  	}
return (arr);
}

function binary_search (search, array) {
  // // Your searching code
  var maxLength=array.length-1;
  var minLength=0;

  while(minLength<=maxLength){
  	var midIndex=Math.floor((minLength+maxLength)/2)
  	if(array[midIndex]===search){
  		return true
  	}
  	if(array[midIndex]>search){
  		maxLength=midIndex-1
  	}
  	if(array[midIndex]<search){
  		minLength=midIndex+1
  	}
  }
  
return 0;
}

var arrayGenapSorted =  ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// // Driver code
 console.log(binary_search(8, arrayGenapSorted))
// console.log(binary_search(10, arrayGenapSorted))
// console.log(binary_search(33, arrayGenapSorted))

// console.log(binary_search(53, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))

// // module.exports = {
// //   binary_search
// // }
