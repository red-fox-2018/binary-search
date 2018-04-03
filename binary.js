function binary_search(input,testarray){
    var temp=0
    for(var i=0; i<testarray.length && testarray[i+1]!==undefined; i++){
        if(testarray[i]>testarray[i+1]){
            temp=testarray[i]
            testarray[i]=testarray[i+1]
            testarray[i+1]=temp
        }
    }
    var arrTemp=testarray

    //binary search

    var midIdx = Math.floor((arrTemp.length-1)/2)

    if(arrTemp[midIdx]===input){
        return midIdx
    }
    else{
            while(midIdx>=0 && arrTemp[midIdx] != input){
            if(input<arrTemp[midIdx]){
                midIdx=Math.floor(midIdx/2)
                if(input===arrTemp[midIdx]){
                    return midIdx
                }
                else if(input < arrTemp[midIdx]){
                    return -1
                }
            }
            else if(input>arrTemp[midIdx]){
                let newIdx = (arrTemp.length-1)+midIdx
                midIdx=Math.ceil(newIdx/2)
                if(input===arrTemp[midIdx]){
                    return midIdx
                }else{
                    if(input===arrTemp[midIdx]){
                        return midIdx
                    }

                    if(input > arrTemp[midIdx]){
                        return -1
                    }
                }
            }

        }
    }

}

var testArr=[13,19,24,29,32,37,43]
var tes2=[1,2,3,4,5]

console.log(binary_search(2 ,testArr))

// [1,2,3,4,5]
// [3,4,5]

// start = 2
// end = 4
// start + end / 2
