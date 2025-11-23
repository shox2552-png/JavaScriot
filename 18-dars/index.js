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


let obj1 = {
    name: "Eshmat"
}

let obj2 = {
    age: 25
}

let newObj= Object.assign(obj1, obj2)

console.log(newObj);