'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code

  for (let i = 0; i < arr.length; i++) {

    let tmp = arr[i]

    for (var j = i - 1; arr[j] > tmp; j--) {

      arr[j + 1] = arr[j]

    }

    arr[j + 1] = tmp

  }

  return arr

}

function binary_search (search, array, bawah, atas) {
  // Your searching code

  let mid = Math.floor((bawah + atas) / 2)

  if (bawah == mid || atas == mid) {

    if (array[mid] == search) {

      return mid

    } else {

      return -1

    }

  } else {

    if (search == array[mid]) {

      return mid

    } else {

      if (array[mid] > search) {

        atas = mid - 1

        return binary_search (search, array, bawah, atas)

      } else if (array[mid] < search) {

        bawah = mid + 1

        return binary_search (search, array, bawah, atas)

      }

    }

  }

}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
var batas_bawah = 0
var batas_atas = arrayGanjilSorted.length-1

// Driver code

console.log(binary_search(8, arrayGenapSorted, batas_bawah, batas_atas))
console.log(binary_search(10, arrayGenapSorted, batas_bawah, batas_atas))
console.log(binary_search(33, arrayGenapSorted, batas_bawah, batas_atas))
console.log(binary_search(53, arrayGanjilSorted, batas_bawah, batas_atas))
console.log(binary_search(3, arrayGanjilSorted, batas_bawah, batas_atas))
console.log(binary_search(2, arrayGanjilSorted, batas_bawah, batas_atas))

module.exports = {
  binary_search
}
