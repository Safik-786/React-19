console.log("Start Executing")


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 1 rejected");
    }, 2000);
});
console.log(p1)

// p1.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error(error);
// });


const asyncFunc= async () =>{
    try {
        const result= await p1
        console.log(result)
        
    } catch (error) {
        console.log(error)
    }
}

asyncFunc()