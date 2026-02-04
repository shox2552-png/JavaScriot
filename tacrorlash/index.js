// let obj = {
//     id:1,
//     name:"Ali",
//     getName(){
//         console.log(this);
//     }
// }
// obj.getName()

// function getData(age){
//     console.log(this);
// }


// let data = new WeakMap()
// let kalit = {}
// data.set(kalit, 2026)
// console.log(data.get(kalit));

// let data = WeakSet()
// let value = [1, 2]
// data.add(value)
// console.log(data.has(value));

// let obj = {
//     _id: 20,

//     get getID() {
//         return this._id
//     },

//     set getID(props) {
//         if (!props) this._id = props
//         console.log("Siz notogri id kirittingiz.");
//         return;
//     }
// }

// obj.getID = 1
// console.log(obj.getID);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let newArr = arr.filter((v) => v)
// console.log(newArr);