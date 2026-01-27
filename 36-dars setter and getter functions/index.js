// // let obj = { name: "Ali", age: 10 }

// // // value, writable, enumerable, configurable

// // Object.defineProperty(obj, "name", { writable: false })

// // console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// // // obj.name = "Eshmat"

// // cloneObj = Object.getOwnPropertyDescriptors(obj)
// // console.log(cloneObj);


// let obj = { name: "Ali", age: 10 }
// // Object.defineProperty(obj, "name", { writable: false, enumerable: false });
// Object.defineProperty(obj, "name", { configurable: true })

// console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// // obj.name = "Eshmat"

// console.log(obj);

// delete obj.name

// console.log(obj);
// // console.log(Object.keys(obj));
// // console.log(Object.values(obj));

// let obj = { name: "Ali" }

// // value; writable; enumarable; configurable

// Object.defineProperty(obj, "name", { writable: false })

// console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// // obj.name = "Eshmat"
// obj = { ...obj, name: "Eshmat" }

// console.log(obj);
