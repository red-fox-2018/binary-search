# insertion-sort
- LOOP i equal 0 to array length and plus one for every iteration
- INITIALIZE currentIndex to i
-     LOOP j equal i - 1, j greater than equal 0 and minus one for every iteration
-         IF array[currentIndex] greater than arr[j]
-             INITIALIZE temp to arr[i] for swapping number
-             CHANGE arr[i] to arr[currentIndex]
-             CHANGE arr[currentIndex] to temp 
-             CHANGE currentIndex with j
- RETURN arr

# binary-search
- INITIALIZE middle to front plus behind devided by to
- BASE CASE
    IF search equal to array[middle]
      RETURN middle
- RECURSIVE
    ELSE
    IF array[middle] smallest than search
      CHANGE front to middle plus one
      RETURN function
    ELSE IF array[middle] greater than search
      CHANGE behind to middle minus one
      RETURN function
    ELSE
      RETURN -1