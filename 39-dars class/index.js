// class Parent {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;

//         console.log("Bu constructor");
//     }

//     GetData() {
//         console.log("Bu Custom Function");
//     }
// }

// let obj1 = new Parent("Ali", 20)

// obj1.GetData

// class GetData {
//     constructor(ism) {
//         this._ism = ism
//     }

//     get GetIsm (){
//         return this._ism.toUpperCase();
//     }

//     set GetIsm(props) {
//         if (props.length < 5) {
//             console.log("Siz notog'ri qiymat kiritdingiz");
//             return;
//         }
//         this._ism = props;
//     }

// }

// let obj = new GetData("Oxford")

// console.log(obj.GetIsm); // OXFORD

// obj.GetIsm = "spc"
// console.log(obj.GetIsm); // OXFORD

// obj.GetIsm = "algoritm"
// console.log(obj.GetIsm); // ALGORITM


// let name = "Hiii"
// let i = "name"

// class Parent {
//     constructor(ism) {
//         this[i] = ism
//     }

//     [name]() {
//         console.log(this[i]);
//     }
// }

// let obj = new Parent("Ali")

// obj.Hiii()