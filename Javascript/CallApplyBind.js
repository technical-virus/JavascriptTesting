function myFunc(name,age){
    console.log(name,this.age,age);
}
const obj ={
    age:25
}
myFunc("Amit",26);