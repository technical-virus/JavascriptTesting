https://blog.logrocket.com/fetch-api-node-js/

// Do An async Task
// Do DB Call, cryptography, network 

const promiseOne = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        console.log("Async task is complete")
        resolve()
    },1000)
})

promiseOne.then(()=>{
    console.log('Promise One complete')
})

// **************************************************************

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Promise Two")
        resolve()
    },1000)
}).then(()=>{
    console.log('Promise One complete')
})

// ***********************************************************
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({name:"Amit Kumar",age:27})
    },1000)
})

promiseThree.then((data)=>{
    console.log(data)
})

// **************************************************************
const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error  = false;
        if(!error){
            resolve({name:"Jittu",age:30})
        }else{
            reject("ERRROR: Something went wrong...")
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user)
    return user.name;
}).then((userName) => {
    console.log("userName:", userName)
}).catch((error) => {
    console.log("error:", error)
}).finally(()=>console.log("The Promise is either resolved or rejected"))


// **********************************************************
const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error  = false;
        if(!error){
            resolve({name:"Shubham",age:30})
        }else{
            reject("ERRROR: Something went wrong...")
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response =  await promiseFive;
        console.log("🚀 ~ consumePromiseFive ~ response:", response)
    }catch(error){
    console.log("🚀 ~ consumePromiseFive ~ error:", error)
    }
}

consumePromiseFive()

// ******************************************
// async function getAllToDo(){
//     try{
//         fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(response => response.json())
//         .then(json => console.log(json))
//     }catch(error){
//         console.log("error:", error)
//         }
// }
// getAllToDo()

// **************************************
fetch("https://jsonplaceholder.typicode.com/todos")
.then((res)=>{
    return res.json();
})
.then((response)=>console.log(response))
.catch((error)=>console.log(error,"Something went wrong"))