// let date  = new Date()
// console.log(date.getFullYear());
// console.log(date.getMonth()+1);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime());
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toISOString());
// console.log(date.toUTCString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());


// for (let i = 0; true; i++) {
//     console.log(new Date().getMilliseconds());
// }

// let d = "2026-01-13T12:05:31.026Z";

// let [y,o,k]= d.split("T")[0].split("-")
// console.log(`${k}/${o}/${y}`);

// ============================

// JSON JavaScript Object Notation

// let data = [
//     { id: 1, name: "Ali", age: 20 },
//     { id: 2, name: "Vali", age: 20 },
//     { id: 3, name: "Eshmat", age: 20 },
//     { id: 4, name: "Toshmat", age: 20 },
// ]

// let j = JSON.stringify(data, ["id", "name"])
// console.log(j);

// let date = JSON.parse(j, (key, value) => {
//     console.log(key, value);
// })