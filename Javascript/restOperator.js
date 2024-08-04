


// Old Problem
function add(a,b,c,d){
    console.log(a+b+c+d)
}

add(2,3,4,1); //10
add(1,3,4,1,2,4,5,6); //9
//Not working add all number then we have a special case method "argument"

console.log("*************using the argumnent method*************")

function addWithArg(){
    let sum = 0;
    for(num in arguments){
        sum = sum+arguments[num];
    }
    console.log(sum);
}

addWithArg(1,3,4); //8
addWithArg("sdfas",1,3,4); //0sdfas134
// argumnet is fine but if we add other data in starting like string then not working. so than introduce rest operator in ES6 version

console.log("*************adding the numbner by using the rest operation***************");

function addWithRest(str,...args){
    let sum = 0;
    for(num in args){
        sum = sum+args[num];
    }
    console.log(sum);
}

addWithRest("MY TEsting ",1,3,4,1,2,4,5,6,5,5,6,7,4)

console.log("*************useStrict***************");

// You Cannot Use “use strict” Inside a Function Containing a Rest Parameter
        // function printMyName(first,...value) {
        //     "use strict";
        //     return value;
        // }

        // let resttttt = printMyName("amit",34,34,34,3,45)
        // console.log("🚀 ~ resttttt:", resttttt)
  //SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list

  console.log("*************array destucturing***************");

//   How the Rest Operator Works in a Destructuring Assignment
// object destucturing
const [first,second,third] = ["amit","Raju","Mohan"];
console.log("🚀 ~ first,second,third:", first,second,third)



  console.log("*************object destucturing***************");

//   object destucturing
const {name,age,gender} = {
    name:"Amit Kumar",
    age:25,
    gender:"M"
};
console.log("🚀 ~ first,second,third:", name,age,gender)

// object destucturing in nested object

const {
[{name}]:underWork
} = {
    name:"Amit",
    age:26,
    underWork:[
        {
            name:"rohan",
            age:26
        }
    ]
}
console.log("🚀 ~ name:", name)


console.log("***************************");


const myName = "AmitKumarDeveloper";
// console.log([...myName],"...myName")
console.log(...myName[4],"...myName[4]")

function spellName(a, b, c) {
  return a + b + c;
}

console.log(spellName(...myName));      // returns: "Olu"

console.log(spellName(...myName[3]));   // returns: "wundefinedundefined"

console.log(spellName([...myName]));    // returns: "O,l,u,w,a,t,o,b,i, ,S,o,f,e,l,aundefinedundefined"

console.log(spellName({...myName}));    // returns: "[object Object]undefinedundefined"


