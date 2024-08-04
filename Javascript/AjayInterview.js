// const num = "783";
// function recursion(num){
//     const cvt = num.toString().split("");
//     const numberRes = cvt.reduce((accu, curr)=>{
//         accu  = parseInt(accu) + parseInt(curr);
//         return accu;
//     },0);
   
//     if(numberRes > 10)
//     {
//         recursion(numberRes);
//     }
//     else
//     {
//         console.log("Result found " + numberRes)
//     }
// }
// recursion(num) // 9
// *******************get only first + last = secend for each *********************************
// const arr = [122,132,234,363,545];
// let newArr = [];
// let index = 0;

// for(let i =0; i<arr.length; i++)
// {
//     let temp  = arr[i].toString().split("");
//     if((parseInt(temp[0]) + parseInt(temp[2])) === parseInt(temp[1]))
//     {
//         newArr[index] = arr[i];
//         index++;
//     }
// }
// console.log(newArr) //[ 132, 363 ]
// [
// 122, 1 + 2 =3 false,
// 132, 1+2 = 3 true
// 234, 2+4 = 6 false
// 363, 3+3 = 6 true
// 545]
// 132 = 1 + 2 = 3

// ***************************************************


// get Duplicate value from Array and return a array

const abc = [1, 2,3,4,4,45,76,44,5,45];
let newArr = [];
let index = 0;
for(let i =0; i<abc.length; i++){
    for(let j=i+1; j<abc.length;j++)
    {
        if(abc[i]== abc[j])
        {
            newArr[index] = abc[i];
            index++;
        }
    }
}
console.log(newArr)// [ 4, 45 ]