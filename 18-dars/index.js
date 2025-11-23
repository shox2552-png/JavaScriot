// let obj = {
//     name: "Eshmat"
// }
// obj.age = 20  statick
// obj["age"] = 100  dinamik

// console.log(obj);


// let obj = {
//     name: "Toshmat"
// }

// obj["age"] = 100

// let {name, age:yosh} = obj

// console.log(yosh);


// let obj1 = {
//     name: "Eshmat"
// }

// let obj2 = {
//     age: 25
// }

// let newObj= Object.assign(obj1, obj2)

// console.log(newObj);


// let obj = {
//     ID: 1,
//     name: "Toshmat",
//     age: 50,
//     adderes: "Namangan",
//     phoneNumber: 931234567,
//     status: "Talaba",
// }

// for(let key in obj){
//     console.log(key, "=", obj[key]);
// }

// for(let key in obj){
//     if (typeof obj[key] === "string"){
//         console.log(key, obj[key]);
//     }
// }

// let obj = {
//     ID: 1,
//     name: "Toshmat",
//     age: 50,
//     adderes: "Namangan",
//     phoneNumber: 931234567,
//     status: "Talaba",
//     salary: 100,
// }
// console.log(obj.salary);

// let newObj = Object.assign(obj)
// let obj1 = structuredClone(obj)
// let newObj = { ...obj }

// obj1["salary"] = 200

// console.log(obj1.salary);


// constactor Function
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// let obj1 = new Person("Eshmat", 20)
// let obj2 = new Person("Toshmat", 30)

// console.log(obj1);
// console.log(obj2);

//  let obj = {
//     ID: 1,
//     name: "Toshmat",
//     age: 50,
//     adderes: "Namangan",
//     [Symbol("phoneNumber")]: 931234567,
//     status: "Talaba",
//     salary: 100,
// }

// for (let key in obj){
//     console.log(obj[key]);
// }


//  let obj = {
//     ID: 1,
//     name: "Toshmat",
//     age: 50,
//     adderes: "Namangan",
//     [Symbol("phoneNumber")]: 931234567,
//     status: "Talaba",
//     salary: 100,
//     getName: function() {
//         console.log(this.name);
//     }
// }

// let newObj = obj

// obj = null

// newObj.getName()

// let parent = {
//     name: "Toshmat",
//     age: 50,
//     child:{
//         name: "Eshmat",
//         age: 30,
//     }
// }

// let {
//     child:{
//         name:newName,
//         age:newAge,
//     }
// } = parent;

// console.log(newName, newAge);


// let parent = {
//     name: "Toshmat",
//     age: 50,
//     child:{
//         name: "Eshmat",
//         age: 30,
//     }
// }


// let newObj = Object.assign({},parent)   // pishti
// let obj1 = {...parent}  // pishti

// let obj1 = structuredClone(parent)

// obj1.child.age = 100
// obj1.child.name = "Gulmat"

// console.log(obj1);
// console.log(parent);



// let obj = {}
// obj["name"] = "Ali"
// obj["age"] = 20
// obj["status"] = "Talaba"
// console.log(obj);

// let binary = "1001"

// console.log(parseInt(binary,2));

// console.log(binary.toString(2));

