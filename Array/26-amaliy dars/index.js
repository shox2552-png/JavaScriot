// let arr = [
//     { id: 1, name: "Eshmat" },
//     { id: 2, name: "Ali" },
//     { id: 3, name: "Vali" },
//     { id: 4, name: "Toshmat" },
//     { id: 5, name: "Gulmat" }
// ]

// arr = arr.filter((obj) => obj.name.includes("m"))
// console.log(arr);

// let arr = [
//     { id: 1, name: "Ali", status: "student" },
//     { id: 2, name: "Eshmat", status: "Ishchi" },
//     { id: 3, name: "Toshmat", status: "Quruvchi" },
//     { id: 4, name: "Vali", status: "Teachar" },
//     { id: 5, name: "Salim", status: "student" }
// ]

// arr = arr.sort((a,b)=>{
//     return a.name.localeCompare(b.name)
// })
// console.log(arr);

// let arr = ["Algebra", "History", "Geometry", "English"]

// arr = arr.sort((a, b) => a.toLowerCase() > b.toLowerCase()? 1 : -1)
// console.log(arr);

// let people = [
//     { id: 1, firstName: "Eshmat", lastName: "Toshmatov", age: 20, status: "Talaba" },
//     { id: 2, firstName: "Gulmat", lastName: "Surmatov", age: 17, status: "O'quvchi" },
//     { id: 3, firstName: "Dilshod", lastName: "Karimov", age: 25, status: "Ishchi" },
//     { id: 4, firstName: "Malika", lastName: "Xoliqova", age: 30, status: "Uqituvchi" },
//     { id: 5, firstName: "Zafar", lastName: "Bozorov", age: 19, status: "Talaba" },
//     { id: 6, firstName: "Umida", lastName: "Raxmatova", age: 22, status: "Tadbirkor" },
//     { id: 7, firstName: "Rustam", lastName: "Ziyodov", age: 35, status: "Dasturchi" },
//     { id: 8, firstName: "Nodira", lastName: "Saidova", age: 28, status: "Muhandis" },
//     { id: 9, firstName: "Javlon", lastName: "Qurbonov", age: 24, status: "Frilanser" },
//     { id: 10, firstName: "Shahnoza", lastName: "Ergasheva", age: 18, status: "O'quvchi" }
// ];


// people = people.map(person =>
//     person.id === 5
//         ? { id: 5, firstName: "Ali", lastName: "Valiyev", age: 25, status: "Dasturchi" }
//         : person
// );
// console.log(people);

// people = people.filter(people => people.lastName.endsWith("va"));
// console.log(people);

//   let id = people.find((obj) => obj.id === 7);
// if (id) {
//   id.firstName = "Gulbashakar";
// }
// console.log(people);


// people = people.sort((a, b) => a.lastName.localeCompare(b.lastName))
// console.log(people);


// Question:

// 1. id si 5 ga teng bo'lgan odamni ma'lumotini manashu object ga almashtirib bering.
// {id: 5, firstName: "Ali", lastName: "Valiyev", age: 25, status: "Dasturchi"}

// 2. people array ichida lastName ning oxiri “va” qo’shimchasi bilan tugagan shaxslar qolsin.

// 3. id si 4 va 9 ga teng bo’lgan odamlar arraydan o’chirib tashlansin.

// 4. id si 7 ga teng bo’lgan object firstName ning qiymatini “Gulbashakar” ga o’zgartirib bering.

// 5. shu people arrayni lastName bo’yicha sort qilib bering.

