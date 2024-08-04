// function outerFun(){
//     let a = 10;
//     function innerFunc(){
//         console.log(a,"innerFunction")
//     }
//     return innerFunc;
// }
// let res = outerFun();
// console.log(res());

// ***********************************************
// Closur with Encapulation
function outerFun(){
    let count = 0;
    return{
        increament:function(){
            count++
            return count;
        },
        decreament:function(){
            count--;
            return count;
        },
        showCout:function(){
            return count
        }
    }
}
console.log(outerFun().increament())
console.log(outerFun().showCout())
