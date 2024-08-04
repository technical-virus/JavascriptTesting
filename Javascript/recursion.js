const countingWithRecursion = (start)=>{
  
    console.log("counting : " + start)
    start +=1;
    if(start < 100){
        countingWithRecursion(start);
    }else{

        return;
    }
    
}
countingWithRecursion(1);

// for(let i=1;i<=100;i++){
//     console.log("counting :-"+i)
// }