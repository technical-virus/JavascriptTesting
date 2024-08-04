// console.log("######################## 1. Example ##############################")

// let animal = {};
// animal.name= "Dog"
// animal.number= 3
// animal.eat = function(number){
//     return `${this.name} is eating food`;
// }

// animal.running = function(num){
//     this.number +=num;
// }
// console.log("🚀 ~ animal:", animal)
// console.log("🚀 ~ animal:", animal.eat())
// console.log("🚀 ~ animal:", animal.running(3))

// console.log("######################## 2. Example ##############################")

// let users = {}
// console.log("🚀 ~ users:", users)
// users.name = 'Leo'
// users.energy = 10

// users.eat = function (amount) {
//     console.log(`${this.name} is eating.`)
//     this.energy += amount
// }

// users.sleep = function () {
//     console.log(`${this.name} is sleeping.`)
//     this.energy =1000
// }

// users.play = function (length) {
//     console.log(`${this.name} is playing.`)
//     this.energy -= length
// }
// console.log("🚀 ~ users:", users)

// console.log("######################## 3. Example ##############################")

// function Animal (name, energy) {
//     let animal = {}
//     animal.name = name
//     animal.energy = energy

//     animal.eat = function (amount) {
//     console.log(`${this.name} is eating.`)
//     this.energy += amount
//     }

//     animal.sleep = function (length) {
//         console.log(`${this.name} is sleeping.`)
//         this.energy += length
//     }

//     animal.play = function (length) {
//         console.log(`${this.name} is playing.`)
//         this.energy -= length
//     }

//     return animal
// }

// const leo = Animal('Leo', 7)
// console.log("🚀 ~ leo:", leo)
// const snoop = Animal('Snoop', 10).play(4)
// console.log("🚀 ~ snoop:", snoop)

// console.log("######################## 4. Example ##############################")

// const animalMethods = {
//     eat(amount) {
//       console.log(`${this.name} is eating.`)
//       this.energy += amount
//     },
//     sleep(length) {
//       console.log(`${this.name} is sleeping.`)
//       this.energy += length
//     },
//     play(length) {
//       console.log(`${this.name} is playing.`)
//       this.energy -= length
//     }
//   }
//   function testData(){
//     console.log(this.name);
//   }
//   function Animal (name, energy) {
//     let animal = {}
//     animal.name = name
//     animal.energy = energy
//     animal.eat = animalMethods.eat
//     animal.sleep = animalMethods.sleep
//     animal.play = animalMethods.play
//     animal.testData = testData

//     return animal
//   }

//   const leo = Animal('Leo', 7)
//   console.log("🚀 ~ leo:", leo)
//   const snoop = Animal('Snoop', 10).testData();

// console.log("######################## 4. Example ##############################")
//         let obj = {
//             name:"amit",
//             age:26
//         }
//         const newObj = Object.create(obj)
//         newObj.name = "Raju";
//         console.log("🚀 ~ newObj:", newObj.age)

console.log(
  "######################## 5. Example ##############################"
);
console.log(window,"this")
let obj2 = {
  name: "amit",
  testfun: () => {
    console.log(window.name);
  },
};

console.log(this,"window rr")

console.log(obj2.testfun());
