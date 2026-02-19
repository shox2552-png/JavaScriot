// const Parent = (Data) =>
//     class extends Data {
//         getNul(a, b) {
//             return a + b;
//         }
//     };

// const Child = (Data) =>
//     class extends Data {
//         getSum(a, b) {
//             return a * b;
//         }
//     };

// class Boglovchi { }
// class SubChild extends Parent(Child(Boglovchi)) {
//     constructor() {
//         super();
//         this.sum = null;
//     }
//     set hisobla(props) {
//         if (props) {
//             this.sum = props.a / props.b;
//         }
//         return this.sum;
//     }
//     get hisobla() {
//         return this.sum;
//     }
// }

// let obj = new SubChild();

// obj.hisobla = { a: obj.getNul(10, 20), b: obj.getSum(10, 20) };

// console.log(obj.hisobla);