let arr = [
    [1,2,3,4],[5],[6],7,[8,[9,10,[11,12,[111,[222,[455,666,777,888,[666],555]]],13,14,15],16,17]]
]
// let arr =[
//     [1,2,4],5,6,[7]
// ]
// console.log("🚀 ~ arr:", arr)
// O/P ===>   [1,4,5,6,3,4,2,4,5,6,7,4,5,6,4,4,5]

// Method First
//let res1 = [].concat(...arr); // single level flatning
//console.log("🚀 ~ res1:", res1) //[ 1, 4, 5, 6, 3, 4, 2, 4, [ 5, 6, [ 7, 4, 5, 6, 4 ], 4, 5 ] ]

//console.log(arr.flat(7)) // last 7 level flating arr

// CustomFlatning Method 1

    // function newcustomerFlat(array,level=7){
    //     let newArr =[];
    //     array.forEach(arr => {
    //         if(Array.isArray(arr) && level>0){
    //             newArr.push(...newcustomerFlat(arr,level-1))
    //         }else{
    //             newArr.push(arr)
    //         }
    //     });
    //     return newArr;
    // }
    // console.log(newcustomerFlat(arr))

// CustomeMethod2
let NewFlatArr =[];
for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
        NewFlatArr = [...NewFlatArr,...flatFunc(arr[i])]
    }else{
        NewFlatArr.push(arr[i]);
    }
}
console.log("🚀 ~ NewFlatArr:", NewFlatArr)

function flatFunc(arr){
    let newArr1 =[];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            newArr1 = [...newArr1,...flatFunc(arr[i])]
        }else{
            newArr1.push(arr[i]);
        }
    }
    return newArr1;

}
