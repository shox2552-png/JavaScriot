// class Parent {
//     constructor(childName, childAge) {
//         this.ChildName = childName
//         this.ChildAge = childAge
//     }
//     getParentName(){
//         console.log("Parent",this.ChildName, this.ChildAge);

//     }
// }

// class Child extends Parent {
//     constructor(ism, yosh) {
//         super(ism, yosh)
//     }
//     getChildName() {
//         console.log("Child");
//     }
// }
// let obj2 = new Child("Toshmat", 20)

// obj2.getChildName()
// obj2.getParentName()

// class Parent {
//     data = [1, 2, 3, 4]

//     constructor(ism) {
//         this.ism = ism
//     }

//     getName() {
//         console.log("Parent")
//     }
// }

// class Child extends Parent {
//     data = { id: 1, status: "Talaba" }

//     constructor(ism) {
//         super("Eshmat")
//         this.ism
//     }
//     getName() {
//         console.log("Child");
//     }
// }

// let obj = new Child("Toshmat")
// console.log(obj)

// class Car {
//     static model = "BMW"
//     static getName() {
//         console.log("Bu Car class");
//     }
// }

// let obj = new Car()
// console.log(obj);

// console.log(Car.model);
// Car.getName()

// class Data1 { }

// class Data2 {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }

// let obj = new Data2("Eshmat", 20)
// console.log(obj instanceof Data1);
// console.log(obj instanceof Data2);