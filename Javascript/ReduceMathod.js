const arr =[1,2,3,4,5,6];
const addFunctionCall = (acc,currVal)=>{
    console.log("🚀 ~ res ~ acc,currVal:", acc,currVal)
    return acc +currVal.salary;
}
let res = arr.reduce((acc,currVal)=>{
    console.log("🚀 ~ res ~ acc,currVal:", acc,currVal)
    // return acc +currVal;
},400)
// console.log("🚀 ~ res ~ res:", res)

const arrObj =[
    {name:"Amit",salary:2},
    {name:"jitt",salary:3},
    {name:"shubh",salary:1},
    {name:"Rahul",salary:3},
    {name:"Raj",salary:5},
]

let cal = arrObj.reduce(addFunctionCall,0)
// console.log("🚀 ~ cal:", cal)


// Acc         CurrtValue           Calculation                   return
// 0           2                      0+2                         2
// 2           3                       2+3                         5
// 5           1                       5+1                         6
// 6           3                       6+3                         9
// 9           5                       14                          14                     



// Pollyfil of Reduce function     
let NewArrrData = [2,3,5,6,7];
let initial = 0;
for(let i=0;i<NewArrrData.length;i++){

}
