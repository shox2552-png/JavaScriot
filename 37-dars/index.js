// let obj = {
// id: 1,
// name: "Ali"
// }

// Object.preventExtensions(obj)
// obj.age = 100
// console.log(obj);
// console.log(Object.isExtensible(obj));


// Object.seal(obj)
// obj["age"]=100
// delete obj["id"]
// console.log(obj);
// console.log(Object.isSealed(obj));


// Object.freeze(obj)
// obj["age"] = 100
// delete obj["id"]
// obj.name = "Vali"
// console.log(obj);
// console.log(Object.isFrozen(obj));

// const obj = {
//       _Pasvord : "12345",

//        set getPasvord(props){
//         if (props.length < 5) {
//             console.log("Siz yetarlicha qiyamt kiritmadingiz");
//             return;
//         }
//        },

//       get getPasvord (){
//         return this._Pasvord
//       },
      
//     }
    
//     obj.getPasvord = "98765"

//     console.log(obj.getPasvord);