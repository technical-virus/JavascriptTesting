Must learn concepts before giving a react interview :

Life cycle methods of components:
=======================
3 phases and their methods

Hooks:
========
useState
useEffect
useContext
useReducer
useMemo
useCallback
useRef

Virtual dom:
=========
Reconciliation
Diffing algorithm
Render

SSR and CSR
============
Difference and benifit, SEO, Performance

Higher Order components:
===================
What is hoc, Why we use , When we use, How we use them ?

State management
=============
State
Props
Props driling
Context api
Redux and toolkit

CustomHooks
==========
When to use them and example code.

LazyLoading:
=========
code splitting
Suspense
chunking

Routing 
================
react-router
protected routes
query params
Dynamic routing
Role based access control

Testing:
==================
unit testing - Jest

Async tasks
==================
Api calls
fetch, axios
events - scrolling 

Reusability, Modularity, Testability and Readability

Performance:
============
lazyloading
optimize assets,js,css
Bundlers
How to make rendering components fast and optimized?

Styling:
===============
Bootstrap,Material Ui 
Css,scss,inline styling

Accessibility
Security
[7:04 pm, 14/5/2024]
preprocessor,
picture tag, 
html 5 features,
void tag
semantic tag
non-semantic
picture tag (responsive without media query)
rest vs spread
calling the api preferred in which life cycle method (componentDidMount)
module fedration
what is flux,
what is flex box
what is box
difference between padding & margin
mixins
[7:05 pm, 14/5/2024] ajay chetu: 
count value in array 

const arr = [154,122,154,122,133,121];
const res = arr.reduce((acc,curr)=>{
    if(acc[curr])
    {
        acc[curr] = ++acc[curr] 
    }
    else{
        acc[curr] = 1;
    }
    return acc
},{})
console.log(res) // { '121': 1, '122': 2, '133': 1, '154': 2 }

###Recursion

const num = "783";
function recursion(num){
    
    const cvt = num.toString().split("");

    const numberRes = cvt.reduce((accu, curr)=>{
        accu  = parseInt(accu) + parseInt(curr);
        return accu;
    },0);
   
    if(numberRes > 10)
    {
        recursion(numberRes);
    }
    else
    {
        console.log("Result found " + numberRes)
    }
}
recursion(num)


####if left + right === middle numberRes

const arr = [122,132,234,363,545];
let newArr = [];
let index = 0;

for(let i =0; i<arr.length; i++)
{
    let temp  = arr[i].toString().split("");
    if((parseInt(temp[0]) + parseInt(temp[2])) === parseInt(temp[1]))
    {
        newArr[index] = arr[i];
        index++;
    }
}
console.log(newArr)




// get Duplicate value from Array

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
console.log(newArr)




#### get unique array
const abc = [1, 2,3,4,4,45,76,44,5,45];
console.log([... new Set(abc)])

part 2 
let abc = [1, 2,3,4,4,45,76,44,5,45];
let newArr = [];
let index = 0;
for(let i=0; i<abc.length; i++){
    for(let j= i+1; j< abc.length; j++)
    {
        if(abc[i] == abc[j])
        {
            newArr[index] = i;
            index++;
        }
    }
}
for(let i = 0; i<newArr.length; i++)
{
    console.log(newArr[i])
    let res = abc.splice(newArr[i],1);
 
}
console.log(abc)


###########camel case....

let str= "my name is khan";
let arr = str.split(" ");
let newArr = [];
let index = 0;
for(let i=0; i<arr.length; i++)
{
    //console.log(arr[i][0].toUpperCase())
    //console.log(arr[i].slice(1))
    newArr[index] = arr[i][0].toUpperCase() + arr[i].slice(1);
    index++;
}
console.log(newArr.join(" "))

### stopWatch In javascript

<script>
let count = 0;
let timeRef;
function start(){
timeRef = setInterval(()=>{
document.getElementById("demo").innerHTML = count;
count++;
},1000)
}
function stop(){
clearInterval(timeRef)
}
</script>
webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

#######count down
  const [status, updateStatus]  = useState(0);
  const [count, setCount] = useState(0);
  // const myState = useSelector(action=>action);
  // console.log(myState);
  // const dispatch = useDispatch();
  useEffect(()=>{
  let interval;
  if(status){
    interval = setInterval(() => {
      setCount((prev)=>{
        return prev + 1
      })
    }, 1000);
    
  }
  return ()=> clearInterval(interval)
  },[status])
  
  
  
 ####todOlIST 
 
 import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [list, setList] = useState([]);
  const [temp, setTemp] = useState("");
  const [value, setVal] = useState({
    ind: "",
    val: "",
  });
  const insert = () => {
    setList((pre) => {
      return [...pre, temp];
    });
    setTemp("");
  };
  const updateTemp = (e) => {
    const temp = e.target.value;
    setTemp(temp);
  };
  const edit = (index) => {
    const item = list[index];
    setVal((temp) => {
      return { ...item, val: item, ind: index };
    });
  };
  const updateTempVal = (e) => {
    const temp = e.target.value;
    setVal(temp);
  };
  const updateVal = (e) => {
    const temp = e.target.value;
    setVal((pre) => {
      return { ...pre, val: temp };
    });
  };
  const update = () => {
    const temp = value.val;
    const lst = list.map((curr, ind) => {
      return ind === value.ind ? value.val : curr;
    });
    setList(lst);
    setVal((pre) => {
      return { ...pre, val: "", ind: "" };
    });
  };
  const del = (ind) => {
    const lst = list.filter((curr, index) => {
      return index !== ind;
    });
    setList(lst);
  };
  return (
    <div className="App">
      <div>
        <input type="text" value={temp} onChange={updateTemp} />
        <button onClick={insert}>Insert</button>
      </div>
      <div>
        <input type="text" value={value.val} onChange={updateVal} />
        <button onClick={update}>Update</button>
      </div>
      <div>
        {list.map((curr, ind) => {
          return (
            <div>
              <p>{curr}</p>
              <button onClick={() => edit(ind)}>Edit</button>
              <button onClick={() => del(ind)}>Del</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}


######## counter using reducer 

import "./styles.css";
import { useReducer, useState } from "react";
export default function App() {
  const intialState = 0;
  const reducer = (state, action) => {
    if (action.type === "Increment") {
      return state + 1;
    }
    if (action.type === "Decrement") {
      return state - 1;
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <div>
      <h1>{state}</h1>
      <div>
        <button onClick={() => dispatch({ type: "Increment" })}>Add</button>
        <button onClick={() => dispatch({ type: "Decrement" })}>Minus</button>
      </div>
    </div>
  );
}




###### custom hook
import { useEffect, useRef } from "react";
function useTest(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
export default useTest;


import { useState, forwardRef, useImperativeHandle } from "react";
const Temp = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  useImperativeHandle(ref, () => ({
    callMe() {
      setCount(count + 1);
    },
  }));
  
  
  import "./styles.css";
import { useRef, useState } from "react";
import Temp from "./Temp";
export default function App() {
  const [count, setCount] = useState(0);
  const update = () => {
    setCount(count + 1);
  };
  const tRef = useRef();
  return (
    <div className="App">
      <h1>{count}</h1>

      <button onClick={() => tRef.current.callMe()}>Add</button>
    </div>
  );
}

 
 
 
 
 

### get data from api and create object in key value pair

import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function App() {
  const [dataList, setDataList] = useState([]);
  const [arr, setArr] = useState();
  const [uni, setUni] = useState([]);
  useEffect(() => {
    (async function getData() {
      const dataObj = await axios.get("https://api.publicapis.org/entries");
      const data = await dataObj.data;
      const tempData = data.entries;
      const tt = tempData.reduce((acc, curr) => {
        if (acc[curr.Category]) {
          acc[curr.Category] = curr;
        } else {
          acc[curr.Category] = curr;
        }
        return acc;
      }, {});
      setUni(tt);
    })();
  }, []);
  return <div className="App">{console.log(uni)}</div>;
  
  send OTP.... 
  import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [status, setStatus] = useState(0);
  const [count, setCount] = useState(0);
  const [otpTime, setOtpTime] = useState(5);
  const changeStatus = () => {
    setStatus(1);
  };
  useEffect(() => {
    let interval;
    if (status && otpTime) {
      interval = setInterval(() => {
        setOtpTime((pre) => {
          return pre ? pre - 1 : "";
        });
      }, 1000);
    } else {
      setStatus(0);
      setOtpTime(5);
    }
    return () => {
      clearInterval(interval);
    };
  }, [status, otpTime]);
  return (
    <div className="App">
      <h1>{status ? otpTime : ""}</h1>
      {!status && <button onClick={changeStatus}>Send OTP</button>}
    </div>
  );
}
const arr = [1,2,2,3,3,4,4,1,2];
// const res = [...new Set(arr)]
// const res = arr.filter((curr, ind)=> arr.indexOf(curr) === ind)
let newArr = [];
for(let i=0; i<arr.length; i++)
{
   if(arr.lastIndexOf(arr[i])!== i && !newArr.includes(arr[i]))
   {
       newArr.push(arr[i])
   }
}
console.log(newArr)
//count letters
const str = "I love coding";
const arr = str.replaceAll(" ", "").toLowerCase().split("");
const res = arr.reduce((accu, curr)=>{
    if(accu[curr])
    {
        accu[curr] = ++accu[curr]
    }else
    {
        accu[curr] =1
    }
    return accu;
},{})
console.log(res)
// convert to oneArr

const arr = [1,2,3,[4,[5,6,[23,44]],7],7,8];
let newArr = [];
for(let i=0; i<arr.length; i++)
{
    if(Array.isArray(arr[i]))
    {
        const tempArr = resoveNestedArr(arr[i])
        newArr = [...newArr, ...tempArr];
    }
    else
    {
        newArr.push(arr[i])
    }
}
function resoveNestedArr(arr1)
{
    console.log(arr1,"send")
    let newArr1 = [];
    for(let j=0; j<arr1.length; j++)
{
    if(Array.isArray(arr1[j]))
    {
        const tempArr = resoveNestedArr(arr1[j])
      
        newArr1 = [...newArr1, ...tempArr];
    }
    else
    {
        newArr1.push(arr1[j])
    }
}
return newArr1;
}
console.log(newArr)

//reverse String

const str = "I love codeing";
let newStr = "";
const arr = str.split(" ");
for(let i=arr.length-1; i>=0; i--)
{
    newStr +=(arr[i].split("").reverse().join(""))+ " "
}
console.log(newStr)

//second largest nummber

const numArr = [1,2,3,22,11,33,44,23,22,95,44];
let secondLar;
let largest = numArr[0];
for(let i=0; i<numArr.length; i++)
{
    if(numArr[i] > largest)
    {
        secondLar = largest;
        largest = numArr[i];
    }
    else if(numArr[i] < largest && numArr[i] >  secondLar){
        secondLar = numArr[i]
    }
}
console.log(secondLar)

//largest sTRring

const arr = ["mohan", "kartik", "ram"];
let largest = "";
for(let i=0; i<arr.length; i++)
{
    if(arr[i].length > largest.length)
    {
        largest = arr[i]
    }
}
console.log(largest)
####
merge Arr
const arr = [1,2,32,3,4,[3,3,3,5,[6,7],8,9],23,34];
let newAr =[]
for(let j=0; j<arr.length; j++)
{
    if(Array.isArray(arr[j]))
    {
        const temp = mergeArray(arr[j]);
        newAr = [...newAr, ...temp]
    }
    else
    {
        newAr.push(arr[j])
    }
}
console.log(newAr)
function mergeArray(arr){
    let newArr =[]
    for(let i=0; i<arr.length; i++)
    {
        if(Array.isArray(arr[i]))
        {
            const temp  = mergeArray(arr[i]);
            newArr = [...newArr, ...temp]
        }
        else{
            newArr.push(arr[i])
        }
    }
    return newArr;
} 
swap two numbers 
 let x = 10; y=15;
 x = x+y;
 y = x-y
 x = x-y
 console.log(x, y)