// let obj = {
//     name: "Malibu",
//     color: "black",
//     price: "$25000"
// }

// console.log(obj);

// let parent = {
//     name: "Eshmat",
//     age: 100,
//     child: {
//         name: "Toshmat",
//         age: 60,
//         subChild: {
//             name: "Gulmat",
//             age: 20
//         }
//     }
// }

// console.log(parent.child.subChild.name);

// let { child: { subChild: { name } } } = parent

// console.log(name);

// let {
//     child: {
//         name: name2,
//         age: age2,
//         subchild: { name, age }, 
//     },
// } = parent

// console.log(name, age2);

// let obj = {
//     name: "Eshmat"
// }

// let obj2 = obj

// obj = null

// console.log(obj2);

// let obj = {
//     name: "Eshmat"
// }
// console.log(obj.name);


// obj.name = "Toshmat"

// console.log(obj.name);



// const obj = {
//     name: "Eshmat"
// }
// console.log(obj.name);

// let parent = {
//     name: "Eshmat",
//     age: 100,
//     child: {
//         name: "Toshmat",
//         age: 60,
//         subChild: {
//             name: "Gulmat",
//             age: 20,
//             getData: function(){
//                 console.log(this);
//             }
//         }
//     }
// }
// parent.child.subChild.getData()


// let obj1 = {
//     name: "Eshmat"
// }

// let obj2 = {
//     name: "Toshmat"
// }

// let obj3 = {
//     name: "Gulmat"
// }

// let obj = Object.assign({}, obj1, obj2, obj3)

// console.log(obj);

// ======================================================
// Homework.

// 1. Savol
// let student = {
//   firstName: "Eshmat",
//   lastName: "Toshmatov",
//   age: 20,
//   course: "Frontend"
// };

// delete student.course

// console.log(student);

// Manashu objectda bor bo'lgan student ma'lumotlaridan foydalanib console ga quyidagini chiqarib bering (Javob: "Eshmat Toshmatov 20");

// 2. Savol
// let data = {
//   name: "Phone",
//   model: "iPhone",
//   price: 700,
//   quantity: 8,
//   getName: function(){
//     console.log(this.price * this.quantity);
//   }
// };

// data.getName()


// Quyidagi Telefon mahsulot nomi, bir dona narxi va miqdori berilgan. Umumiy narxni hisoblab bering;

// =====================================================

// let user = {
//   id: 1,
//   name: "Eshmat",
//   age: 65,
//   status: "Nafaqa oluvchi",
//   child: {
//     id: 2,
//     name: "Toshmat",
//     age: 30,
//     Status: "Talaba",
//   }
// }
// console.log(user);


// let Cloneuser = user
// user.child.age = 45;
// console.log(Cloneuser);

// =================================================

// let user = {
//   id: 1,
//   name: "Eshmat",
//   age: 65,
//   status: "Nafaqa oluvchi",
//   child: {
//     id: 2,
//     name: "Toshmat",
//     age:30,
//     status: "Talaba",
//     func(){
//       return this.age;
//     }
//   }
// }
// console.log(user);


// let Cloneuser = user
// user.child.age = 45
// console.log(Cloneuser);
