// add to cart project
// order now
// payment
// Generate invoice

// const AddToCart = ()=>{
//     console.log("Product has been added in cart.1")
//     let productId = "ASFDAD345345KJ3K5LJK43";
//     orderNow(productId)
// }

// const orderNow = (productId=0)=>{
//     console.log("order Now. 2",productId)
//     let orderId ="ORDER345KJLJK34L5";
//     setTimeout(()=>{
//         console.log('pyammmmmmmmm')
//     },2000)
//     setTimeout(procedPayment(orderId),2000)

// }

// const procedPayment = (orderId = 0)=>{
//     console.log('Proccess Pryment...3 ',orderId)
//     let paymentId = "345354l3543";
//     generateInvoice(paymentId)
// }

// const generateInvoice = (paymentId =0)=>{
//     console.log('Generat Invoice... 4',paymentId)
// }

// AddToCart();

// #####################################################################

// const printHello = ()=>{
//     console.log("Hello Amit...");
// }

// const printMessage = ()=>{
//     console.log("send Message for Amit...")

// }

// const callingFunction = (callBackFunc)=>{
//     callBackFunc();
// }

// callingFunction(printHello);
// callingFunction(printMessage);

// #############################################################################

// function Welcome(){
//     console.log('Welcome to my channel....')
// }

// function printMessage(callBackFunc){
//     console.log('start calling callback function')
//     setTimeout(callBackFunc,3000)
//     // callBackFunc();
//     console.log('End calling callback function')
// }

// printMessage(Welcome);

// ##############################################################

// userDataById
// userCardByuserId
// parcahge product by ID

// function getDataFromApi(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("userId =>  ",dataId)
//         if(getNextData){
//             getNextData()
//         }
//     },2000)
// }

// getDataFromApi(1,()=>{
//     console.log("fetching Data of 2");
//     getDataFromApi(2,()=>{
//         console.log("fetching Data of 3");
//         getDataFromApi(3,()=>{
//             console.log("fetching Data of 4");
//             getDataFromApi(4,()=>{
//                 console.log("fetching Data of 5");
//                 getDataFromApi(5)
//             })
//         })
//     })
// });

// ######################################################33

// // 1. registration
// // 2. send Email
// // 3. login
// // 4. getUserData
// // 5. updateUserData

// function userRegistration(callback) {
//   console.log("1. user Has beeen registration");
//   callback();
// }

// function sendEmail(callback) {
//   setTimeout(() => {
//     console.log("2. Send Email");
//     callback();
//   }, 1000);
// }

// function login(callback) {
//   setTimeout(() => {
//     console.log("3. user Has beeen Login");
//     callback();
//   }, 2000);
// }

// function getUserData(callback) {
//   setTimeout(() => {
//     console.log("4. Get User Data");
//     callback();
//   }, 3000);
// }

// function updateUserData(callback) {
//   setTimeout(() => {
//     console.log("5. Update User Data");
//     callback();
//   }, 4000);
// }

// userRegistration(() => {
//   sendEmail(() => {
//     login(() => {
//       getUserData(() => {
//         updateUserData();
//       });
//     });
//   });
// });
// console.log("Program has been finished...")

// ###############################--Promises--####################################

// 1. registration
// 2. send Email
// 3. login
// 4. getUserData
// 5. updateUserData

function userRegistration() {
  return new Promise((resolve, reject) => {
    console.log("1. user Has beeen registration");
    resolve();
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2. Send Email");
      resolve();
    }, 1000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3. user Has beeen Login");
      resolve();
    }, 2000);
  });
}

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("4. Get User Data");
      resolve();
    }, 3000);
  });
}

function updateUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("5. Update User Data");
      resolve();
    }, 4000);
  });
}

// userRegistration(() => {
//     sendEmail(() => {
//       login(() => {
//         getUserData(() => {
//           updateUserData();
//         });
//       });
//     });
// });
// userRegistration()
//   .then(sendEmail)
//   .then(login)
//   .then(getUserData)
//   .then(updateUserData);


async function authenticate(){
    await userRegistration();
    await sendEmail();
    await login();
    await getUserData();
    await updateUserData();
}

authenticate();
console.log("Program has been finished...");
