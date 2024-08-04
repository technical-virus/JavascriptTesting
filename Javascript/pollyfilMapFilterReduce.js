Array.prototype.myMap = function(callback){
    let newData = [];
    for(let i=0;i<this.length;i++){
        newData.push(callback(this[i],i,this))
    }
    return newData;
}

let arr = [1,2,3,4,5,6];

let resMap = arr.myMap((data)=>{
    return data*4
})
// console.log("🚀 ~ res ~ res:", resMap) // [ 4, 8, 12, 16, 20, 24 ]



Array.prototype.myFilter = function(callback){
    let newData =[];
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)) newData.push(this[i]);
    }
    return newData;
}

let filterRes = arr.myFilter((res)=>{
    return res>3;
})
// console.log("🚀 ~ filterRes ~ filterRes:", filterRes)


Array.prototype.myReduce  = function(callback,intialValue){
    let accumulator = intialValue;
    for(let i=0;i<this.length;i++){
        accumulator = accumulator?callback(accumulator,this[i],i,this):this[i];
    }

    return accumulator;

}


let reduceArr = [2,3,4,1,2,3,4];
let resultReduce = reduceArr.myReduce((accumulator,intialValue)=>{
        return accumulator + intialValue;
})
console.log("🚀 ~ resultReduce ~ resultReduce:", resultReduce)


