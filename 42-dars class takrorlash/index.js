// const Parent = (Data) =>
//   class extends Data {
//     getNul() {
//       return 10 + 20;
//     }
//   };

// const Child = (Data) =>
//   class extends Data {
//     getSum() {
//       return 10 * 20;
//     }
//   };

// class Boglovchi {}
// class SubChild extends Parent(Child(Boglovchi)) {
//   constructor() {
//     super();
//     this.sum = null;
//   }
//   set hisobla(props) {
//     if (props) {
//       this.sum = props.a / props.b;
//     }
//     return this.sum;
//   }
//   get hisobla() {
//     return this.sum;
//   }
// }

// let obj = new SubChild();

// obj.hisobla = { a: obj.getNul(), b: obj.getSum() };

// console.log(obj.hisobla);