// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 1000);

// console.log(3);

// setInterval(() => {
//   console.log("Salom");
// }, 1000);



// setTimeout(() => {
//     clearInterval(taymerID);
//     console.log("Taymer to'xtatildi.");
// }, 5000);

// const timerId = setTimeout(() => {
//     console.log("Bu xabar chiqmaydi");
// }, 5000); 

// clearTimeout(timerId);

// console.log("Taymer to'xtatildi.");


// =====================================


//  Advanced functions 

// call
// function getData(age, status) {
//     console.log(obj, age, status);
// }

// let obj = {
//     name:"Eshmat"
// }

// getData.call("Eshmat", 20, "talaba")


// apply

// function getData(...array) {
//     console.log( Math.min(...array));
// }
// let obj = {
//     name : "Eshmat"
// }
// getData.apply(obj, [3, 4, 2, 5, 9, 7])

// bind

// function getData(age, status) {
//     console.log(obj, age, status);
// }

// let obj = {
//     name:"Eshmat"
// }

// getData.bind("Eshmat", 20, "talaba")();