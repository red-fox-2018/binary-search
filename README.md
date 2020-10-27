# binary-search
PSEUDOCODE

STORE 'testArrayGenap' with array even number value
STORE 'testArrayGanjil' with array odd number value

STORE 'ownSort' as a sorting function with array value as parameter input
    STORE 'count1' with 0
    WHILE 'count1' less than array length
        STORE 'value' with array index 'count1'
        STORE 'count2' with 'count1' MINUS 1
        WHILE 'count2' greater than equal to 0 AND array index 'count2' greater than 'value'
            array index 'count2' PLUS 1 equal to array index 'count2'
            MINUS 'count2' by 1
        array index 'count2' PLUS 1 equal to 'value'
        ADD 'count1' by 1
    RETURN array

STORE 'binary_search' as a function with 'search' and 'array' as paramater input
    STORE 'min' with 0
    STORE 'max' with array length minus 1
    WHILE min less than equal to max
        STORE 'middle' with 'min' SUM 'max' then divide by 2
        IF 'array' index 'middle' equal to 'search'
            RETURN 'middle'
        IF 'array' index 'middle' less than 'search'
            STORE 'min' with 'middle' plus 1
            ELSE
                STORE 'max' with 'middle' minus 1
    RETURN -1

SORT 'arrayGenap' with 'ownSort'
SORT 'arrayGanjil' with 'ownSort'
