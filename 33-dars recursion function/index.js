// function recur (num1){
//     return function(num2){
//         console.log(num1+num2);
//     }
// }

// function recur(num1) {
//     return function (num2) {
//         if (num2) return recur(num1 + num2)
//         return num1
//     }
// }

// console.log(recur(2)(3)());

// let sum = 1
// function getSum(num1) {
//     if (num1) {
//         sum *= num1;
//         return getSum(num1 - 1)
//     }
// }
// getSum(5)

// let sum = 1
// function getSum(num1) {
//     if (num1) {
//        if(num1%2) sum *= num1;
//         return getSum(num1 - 1)
//     }
// }
// getSum(5)
// console.log(sum);


// let sum = 0
// function getSum(n) {
//     if (n) {
//         if (!(n % 15)) sum += n
//         getSum(n - 1)
//     }
// }


// getSum(100)
// console.log(sum);

// let data = [
//     {
//         name: "Eshmat",
//         status: "Director",
//         price: 2200,
//         ishchi: [
//             { name: "Toshmat", status: "Senior", price: 2000 },
//             { name: "Gulmat", status: "Middle", price: 1500 },
//             { name: "Nurmat", status: "Junior", price: 1000 },
//         ],
//     },
//     {
//         name: "Eshmat",
//         status: "Director",
//         price: 2500,
//         ishchi: [
//             { name: "Toshmat", status: "Senior", price: 2100 },
//             { name: "Gulmat", status: "Middle", price: 1600 },
//             { name: "Nurmat", status: "Junior", price: 900 },
//         ]
//     }
// ]


// let sum = 0

// function getSum(arr) {
//     arr.forEach((obj) => {
//         if (obj.price) sum += obj.price
//         if(obj.ishchi)return getSum(obj.ishchi)
//     })
// }

// getSum(data)
// console.log(sum);
