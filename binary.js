'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
  debugger;
  for (var i = 1; i < arr.length; i++) {
    var index = i;
    for (var j = i -1; j >= 0; j--) {
      if (arr[index] < arr[j]) {
        var value = arr[index];
        arr[index] = arr[j];
        arr[j] = value;
        index = j
      }
    }
  }
  return arr
  debugger;
}

/*
PSEUDOCODE

//non-rekursif
1. buat variabel untuk mencari batas atas dan batas bawah. batas bawah bernilai 0, sedangkan bayas atas bernilai sepanjang array input
2. selama batas bawah lebih kecil sama dengan batas atas
  2.a. buat variabel nilai tengah dengan menambahkan batas bawah dan batas atas yang dibagi dua dan dibulatkan kebawah
  2.b. jika nilai tengah array input sama dengan nilai yang dicari
    2.b.i. kembalikan index nilai tengah
  2.c. jika nilai tengah lebih besar daripada nilai yang dicari
    2.c.i. ubah nilai batas bawah menjadi senilai nilai tengah yang ditambah 1
  2.d. jika nilai tengah lebih besar dibanding nilai yang dicari
    2.d.i. ubah nilai batas atas menjadi nilai tengah yang dikurang 1
3. selain itu semua return nilai -1

//rekursif

1. di dalam fungsi tambahkan 2 paramter yaitu batas bawah dan batas atas dan langsung input nilainya
2. di dalam fungsi, buatlah variabel nilai tengah
3. jika nilai batas bawah lebih besar dari batas atas
  3.a. return nilai -1
4. jika nilai tengah sama dengan nilai yang dicari
 4.a. kembalikan index nilai tengah
5. jika nilai tengah lebih kecil dari nilai yang dicari
  5.a. kembalikan fungsi dengan parameter nilai batas bawah menjadi nilai tengah ditambah 1
6. jika nilai tengah lebih besar dibandingkan nilai yang dicari
  6.a. kembalikanfungsi dengan parameter nilai batas atas menjadi nilai tengah dikurang 1
*/

function binarySearch (search, array, min= 0, max = array.length - 1) {
  // // cara biasa (non-rekursif)
  // var min = 0;
  // var max = array.length - 1;
  //
  // while (min <= max) {
  //   var mid = Math.floor((min + max) / 2);
  //   if (array[mid] == search) {
  //     return mid
  //   } else if (search > array[mid]) {
  //     min = mid + 1
  //   } else if (search < array[mid]) {
  //     max = mid - 1;
  //   }
  // }
  // return -1

  //rekursif
  var mid = Math.floor((min + max) / 2);

  if (min > max) {
    return -1
  }

  if (search == array[mid]) {
    return mid;
  } else if (search > array[mid]) {
      return binarySearch(search, array, mid + 1, max)
  } else if (search < array[mid]) {
      return binarySearch(search, array, min, mid - 1)
    }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGenapSorted)
console.log(arrayGanjilSorted);

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}
