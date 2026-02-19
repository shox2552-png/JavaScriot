// try {
//     const a = 100
//     console.log(a);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }

// try {
//     console.log(a);
//     const a = 100
// }catch(error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }finally{
//     console.log("Sizning codingiz yakunlandi");
// }

// function getSum(callBack) {
//     callBack("Salom dasturchilar")
// }


// getSum((sms) => {
//     console.log(sms)
// })

// setTimeout(()=>{
//     console.log("Salom");  
// },1000)

// setTimeout(() => {
//     console.log("SetTimeout - 1");
//     setTimeout(() => {
//         console.log("SetTimeout - 2");
//         setTimeout(()=>{
//              console.log("SetTimeout - 3");
//              setTimeout(()=>{
//                  console.log("SetTimeout - 4");
//              },1000)
//         },1000)
//     },1000)
// },1000)

// ==========================================
// Promise

// let data = new Date()
// let ms = data.getMilliseconds()

// let promise = new Promise((resolve, reject) => {
//     if (ms % 2) resolve(`${ms}, Toq Son`)
//     else reject(`${ms},Juft Son`)
// });

// promise.then((res) => {
//     console.log(res, "Then");
// }).catch((err) => {
//     console.log(err, "Catch");
// }).finally(()=>{
//     console.log("Code yakunlandi.");
// })

// Async await

// async function getData() {
//     let data = await fetch("https://jsonplaceholder.typicode.com/users")
//     data = await data.json()
//     console.log(data);
// }

// getData()