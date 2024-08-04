let str="3452353528359825298598259";
let newStr = '';
for(let i=0;i<str.length;i++){
    if(i<5 || i>str.length-1-5){
        newStr +="*";
    }else{
        newStr +=str[i];
    }
}
let newStr1 ='';
for(let i=0;i<str.length;i++){
    if(i<5 || i>str.length-1-5){
        newStr1 +=str[i];
    }else{
        newStr1 +="*";
    }
}

// console.log(newStr)
// console.log(newStr1)

function getUnMaskIndex(Strlength){
    if(Strlength%2===0){
        return [(Strlength/2)-1,(Strlength/2)]
    }else{
        return [(Math.floor(Strlength/2)-1),Math.floor(Strlength/2),Math.floor(Strlength/2)+1]
    }
}

function getStrMask(str){
    let newStr='';
    for(let i=0;i<str.length;i++){
        if(getUnMaskIndex(str.length).includes(i)){
            newStr +=str[i];
        }else{
            newStr +="*";
        }
    }
    return newStr;
}

console.log(getStrMask(str))
console.log("123456=> ",getStrMask("123456"))
console.log("1234567=> ",getStrMask("1234567"))
console.log("12345678=> ",getStrMask("12345678"))
console.log("123456789=> ",getStrMask("123456789"))


