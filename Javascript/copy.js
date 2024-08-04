let firstUser = {
    name:"Akit",
    age:23
}

let secondUser = firstUser;
firstUser.name = "Ramu";
secondUser.name="Jittu";
console.log("🚀 ~ secondUser:", secondUser)
console.log("🚀 ~ firstUser:", firstUser)

