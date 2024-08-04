function add(a){
    return a + 4
}
function Subs(a){
    return a - 2
}
function multi(a){
    return a * 5
}

function composeFunc(...functions){

    return (args)=>{
        return functions.reduceRight((arg,func)=>func(arg),args)
    }

}


const result = composeFunc(add,Subs,multi);
console.log(result(2))