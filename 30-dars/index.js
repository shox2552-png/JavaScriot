// 1-masala
// let students = [
//   { name: "Ali", score: 70, active: true },
//   { name: "Vali", score: 85, active: false },
//   { name: "Hasan", score: 90, active: true },
//   { name: "Husan", score: 60, active: true }
// ]

// students = students.filter((obj) => {
//   if (obj.active) {
//     obj.score = obj.score * 0.1 + obj.score;
//     return obj
//   }
// })


// let sum = students.reduce((acc, curr) => acc + curr.score) / students.length
// console.log(students);
// console.log(+sum.toFixed(2))


// // 2-masala
// let transactions = [
//   { type: "income", amount: 500 },
//   { type: "expense", amount: 200 },
//   { type: "income", amount: 1500 },
//   { type: "expense", amount: 300 },
//   { type: "income", amount: 700 }
// ];

// transactions= transactions.filter((obj)=>obj.amount>1000)
// transactions = transactions.findIndex((obj)=>obj.type === "expense")
// transactions = transactions.findLastIndex((obj) => obj.type === "income")
// console.log(transactions);


// 3-masala
// let products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 600 }
// ];

// products.sort((a, b)=> a.price - b.price) 

// console.log(products);

// 4-masala
// let employees = [
//   { name: "Ali", verified: true, role: "user" },
//   { name: "Vali", verified: true, role: "manager" },
//   { name: "Hasan", verified: true, role: "user" }
// ];
// let newemployees = employees.filter((obj)=>obj.role === "manager")

// console.log(newemployees);

// 5-masala
// let  sales = [
//   [120, 300],
//   [450, 100],
//   [600, 200]
// ];

// sales = sales.flat()

// let newsales = sales.reduce((acc, curr) => acc + curr, 0)

// console.log(newsales);

// 6-masala
// let users = [
//   { name: "Ali", skills: ["html", "css", "js"] },
//   { name: "Vali", skills: ["node", "js", "mongo"] },
//   { name: "Hasan", skills: ["css", "figma"] }
// ];

// let data = users.filter((obj)=>obj.skills.includes("js"))
// console.log(data);

// 7-masala

// let orders = [
//   { product: "Book", price: 10, quantity: 3 },
//   { product: "Pen", price: 2, quantity: 10 },
//   { product: "Bag", price: 40, quantity: 1 }
// ];

// let data = orders.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)

// console.log(data);


// 8-masala

  // let athletes = [
  //   { name: "Ali", time: 12.5 },
  //   { name: "Vali", time: 11.8 },
  //   { name: "Hasan", time: 12.1 }
  // ];

  // let data = athletes.sort((a,b)=>a.time-b.time)
  // console.log(data);



// 9-masala

// let data = [5, 10, 15, 20, 25, 30];
// data.fill(0,3)
// let newdata = data.copyWithin(0,1)
// console.log(newdata)


// 10-masala

// const results = [
//   { name: "Ali", score: 78 },
//   { name: "Vali", score: 92 },
//   { name: "Hasan", score: 55 },
//   { name: "Husan", score: 66 }
// ];

// let data = results.filter((obj)=>{
//   if(obj.score<60){
    
//   }
// })
// console.log(data);