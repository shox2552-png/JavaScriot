// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let summa = 0

// forEach

// arr.forEach((value) => {
//     summa = summa + value
//     })
// console.log(summa);

// Map

// let newArr = arr.map((value) => {
//     return value * 2
// })

// console.log(newArr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Filtre

// let data = arr.filter((value) => {
//     if(value % 2 === 1)return value
// })

// console.log(data);

// Find

// let val = arr.find((value, index, arr) => {
//     console.log(value, "|", index, "|",  arr);
//     return value === 3
// })

// console.log(val);


// let arr = [1, 2, 3, "Oxford", 4, 5, 6, 7, "Oxford", 8, 9]

// let findval = arr.findIndex((value, index, arr) => {
//     console.log(value, "|", index, "|", arr);
//     return value === "Oxford"
// })

// console.log(findval);

// let findlastval = arr.findLastIndex((value, index, arr) => {
//     console.log(value, "|", index, "|", arr);
//     return value === "Oxford"
// })

// console.log(findlastval);

// ======================================================
// Masalalar

// let arr = [1, 3, 7, 2, 5, 10, 9]

// let data = arr.filter((value) => {
//     if (value % 2 === 0) return value
// })

// let data2 = data.map((value) => {
//     return value ** 2
// })

// console.log(data2);

// let arr = [1, "Olma", 5, "Uzum", 7, "Nok"]


// let data = arr.map((value) => {
//     if (typeof value === "number") return value ** 2
//     return value
// })

// console.log(data);

// ============================================================
// Homework

// 1-masala:
// const numbers = [2, 4, 6, 8, 10];

// let data = numbers.map((value) => {
//     return value ** 2
// })

// console.log(data);
// Berilgan sonlar massividagi har bir elementni kvadratini hisoblab, natijani yangi massivga qo‘shing.
//=======================================================

// 2-masala:
// const words = ["apple", "banana", "cherry", "date"];

// let data = words.forEach((value)=>{
//     console.log(value.length);
// })

// Berilgan stringlar massividagi har bir so‘zning uzunligini konsolga chiqaring.
// ======================================

// 3-masala:
// const prices = [1000, 2500, 4000, 7000];

// let data = prices.map((value) => {
//     return value *5
// })

// console.log(data);
// Berilgan sonlar massividagi har bir elementni 5 ga oshirib, yangi massiv hosil qiling.
// ========================================

// 4-masala:

// const users = [
//     { name: "Ali", age: 20, city: "Tashkent" },
//     { name: "Vali", age: 25, city: "Samarkand" },
//     { name: "Hasan", age: 18, city: "Bukhara" }
// ];

// let newusers = users.map((obj) => {
//     delete obj["city"]
//     return obj
// })

// console.log(newusers);

// Berilgan foydalanuvchilar massividan faqat ism va yoshdan iborat yangi obyektlar massivi yarating.
// ===============================================

// 5-masala:
// const numbers = [3, 6, 9, 12, 15, 18];
// let data = numbers.filter((value) => {
//     if (value %2 === 0) return value
// })

// console.log(data);

// Berilgan sonlar massividan faqat juft sonlarni ajratib oling.
// =========================================

// 6-masala:

// const products = [
//   { title: "Telefon", price: 1500000 },
//   { title: "Quloqchin", price: 80000 },
//   { title: "Noutbuk", price: 5500000 },
//   { title: "Sichqoncha", price: 60000 }
// ];

// let data = products.filter((value) => {
//     if(value <= 100000) return value
// })

// console.log(data);
// Berilgan mahsulotlar massividan narxi 100 000 dan yuqori bo‘lgan mahsulotlarni toping.
// ================================

// 7-masala:

// const users = [
//     { name: "Aziz", age: 16 },
//     { name: "Dilshod", age: 17 },
//     { name: "Malika", age: 19 },
//     { name: "Sardor", age: 21 }
// ];

// let data = users.find((obj) => obj.age > 18)

// console.log(data);
// Berilgan foydalanuvchilar massividan yoshi 18 dan katta bo‘lgan birinchi foydalanuvchini toping.

// 8-masala:
// const texts = ["html", "css", "javascript", "react", "nodejs"];

// let data = texts.find((str) => str.includes("j"))

// console.log(data);

// Berilgan so‘zlar massividan "js" so‘zini o‘z ichiga olgan birinchi elementni toping.
// ==========================

// 9-masala:
// const numbers = [5, 10, -3, 7, -1, 20];

// let newArr = numbers
//     .map((num, index, arr) => num < 0 && index)
//     .filter((v) => v)

// let newArr = []
// numbers.forEach((num, i) => num < 0 && newArr.push(i))

// console.log(newArr);


// Berilgan sonlar massividan manfiy sonning indeksini toping.

// ===============================================
// 10-masala:

// const users = [
//   { name: "Ali", email: "ali@mail.ru" },
//   { name: "Vali", email: "vali@gmail.com" },
//   { name: "Hasan", email: "hasan@yahoo.com" },
//   { name: "Husan", email: "husan@gmail.com" }
// ];

// let index = users.findIndex((obj)=> obj.email.endsWith("@gmail.com"))
// console.log(index);

// Berilgan foydalanuvchilar massividan emaili "@gmail.com" bilan tugaydigan birinchi foydalanuvchining indeksini toping.