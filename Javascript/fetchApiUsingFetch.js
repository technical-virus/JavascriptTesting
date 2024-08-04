const api = "https://dummyjson.com/products";

// let respose = fetch(api).then((data)=>{
//     data.json().then((dt)=>{
//         console.log(dt)
//     })
// });

// console.log(respose,"respose")


// const fetchData = async()=>{
//     let res = (await fetch(api)).json();

//     console.log("🚀 ~ fetchData ~ res:",await res)
// }

// fetchData();

const fetchDataFromFetch = ()=>{
    fetch(api).then((data)=>{
        return data.json();
    }).then((res)=>{
        console.log(res)
    })
}

fetchDataFromFetch();