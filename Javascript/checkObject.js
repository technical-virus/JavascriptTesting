const obj1 = [
  { id: 1, name: "IPhone 11" },
  { id: 2, name: "IPhone 12" },
  { id: 3, name: "IPhone 15" },
];
const obj2 = [
  { id: 2, name: "IPhone 12" },
  { id: 3, name: "IPhone 15" },
];


// const obj2.filter((res)=>{
//        return obj1.some(item) => item.id === res.id
//     })

const resData = obj2.map((item)=>obj1.filter((res)=>res.id === item.id)[0])
console.log("🚀 ~ resData ~ resData:", resData)