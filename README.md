# binary-search
FUNCTION insertionSort parameter ARRAY

  LOOP index i = 0, index i kurang dari panjang ARRAY, increment satu
    SET FIRST sama dengan ARRAY index i
    SET index j sama dengan index i - 1

    LOOP dimana index j lebih besar sama dengan 0 dan ARRAY index j lebih besar dari FIRST
      ARRAY index j+1 sama dengan ARRAY index j
      decrement index j
    END LOOP
    ARRAY index j+1 sama dengan FIRST
  END LOOP
  RETURN ARRAY
END FUNCTION

FUNCTION binary_search parameter SEARCH dan ARRAY
  SET LOW sama dengan 0
  SET HIGH sama dengan panjang ARRAY-1

  LOOP dimana kondisi benar LOW kurang dari sama dengan HIGH
  SET MID pembulatan bawah dari penjumlahan LOW + HIGH dibagi 2
    IF ARRAY index MID sama dengan SEARCH
      RETURN MID
    END IF
    ELSE IF SEARCH lebih besar dari ARRAY index MID
      ASSIGN LOW sama dengan MID + 1
    END ELSE IF
    ELSE
      ASSIGN sama dengan MID - 1
    END ELSE
  END LOOP
  RETURN -1
END FUNCTION

FUNCTION binary_search parameter SEARCH, ARRAY, LOW = 0 dan HIGH = ARRAY.lenght-1
  SET MID sama dengan pembulatan ke bawah dari LOW ditambah HIGH dibagi 2
  IF LOW lebih besar HIGH
    RETURN -1
  END IF
  ELSE IF SEARCH sama dengan ARRAY index MID
    RETURN MID
  END ELSE IF
  ELSE IF SEARCH lebih ARRAY index MID
    RETURN FUNCTION binary_search dari SEARCH, ARRAY, MID + 1, HIGH
  END ELSE IF
  ELSE
    RETURN binary_search dari SEARCH, ARRAY, LOW, MID - 1
  END ELSE
END FUNCTION
