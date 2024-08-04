// function volumn(l,b,h){
//     return l*b*h;
// }

// const res = volumn(2,3,4);
// console.log(res)

// Example Currying function 1
// function volumn(l){
//     return function(b){
//         return function(h){
//             return l*b*h;
//         }
//     }
// }
// console.log(volumn(2)(3)(4))



// Currying is a technique in functional programming where a function that takes multiple arguments is transformed into a series of functions that each take a single argument. It essentially breaks down a function of multiple arguments into a sequence of functions each taking a single argument.

// Example first
    // Add the mulitple value 


    // Normal function 
        // function adding(a,b,c){
        //     return a+b+c;
        // }
        // console.log(adding(3,4,5));


    // Currying Function
        // function adding(a){
        //     return function(b){
        //         return function(c){
        //             return a+b+c;
        //         }
        //     }
        // }
        // console.log(adding(2)(2)(3));

// Example Second
    // Note write a function for the create a html element
    // like this
    // o/p : <button class="buttonClass">Clickme</button>


    // Normal function
        // function createElementFunc(tag,className="abc",content='test'){
        //     let elementName = document.createElement(tag);
        //     elementName.className = className;
        //     elementName.textContent = content;
        //     console.log("🚀 ~ createElement ~ elementName:", elementName)

        // }
        // createElementFunc("h1","myHeading","Hello how are you")


    // currying function 
        // function createElementFunc(tag){
        //     return function(className){
        //         return function(content){
        //             let elementName = document.createElement(tag);
        //             elementName.className = className;
        //             elementName.textContent = content;
        //             return elementName;
        //         }
        //     }
        // }
    
        // const createButton = createElementFunc('button')('btn-primary');
        // const button = createButton('Click Me');
        // console.log("🚀 ~ button:", button)

        // const createHeader = createElementFunc('h1')('header');
        // const header = createHeader('Welcome');
        // console.log("🚀 ~ header:", header)

        // console.log(createElementFunc('h1')('myHeading')("this is my currying example"))


        // const addQueryParam = (url) => (key) => (value) => {
        //     const separator = url.includes('?') ? '&' : '?';
        //     return `${url}${separator}${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        // };
    
        // let res =  addQueryParam('www.google.com')("search")("amit")
        // console.log("🚀 ~ res:", res)


