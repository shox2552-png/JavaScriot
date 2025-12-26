// let arr = [8, 1, 5, 9, 3, 10, 101] //[1, 3, 5, 8, 9]

// arr.sort() // 1honali sonlar uchun
// console.log(arr);

// arr.sort((a, b) => { // 2 honali sonlar uchun 
//     return a - b
// })

// arr.sort((a, b) => a - b)

// console.log(arr);

// let arr = ["j", "d", "c", "a", "b", "A", "J"];
// arr.sort()
// console.log(arr);


// let arr = [1, 2, 3, 4, 5, " ", 0] // false 1dona bolsa ham notogri chiqadi javob

// let a = arr.every((n) => n)
// console.log(a);

// let arr = ["", null, "", false] true 1dona bolsa ham togri chiqadi javob

// let a = arr.some((n) => n)
// console.log(a);

// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9,]

// let isTrue = arr.every((son) => son)

// if(isTrue){
//     console.log("Ha siz ishga olindingiz");
// }else{
//     console.log("Ko`zimga ko`rinmang");
// }

// let nestedArr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]

// nestedArr = nestedArr.flat(Infinity) // Array larni ochadi
// console.log(nestedArr);

// let arr = [1, 2, [3, 4]]
// arr = arr.flatMap((v) => v ** 2)  // Array larni ochadi va matem amal bajaradi
// console.log(arr);

// let arr = Array(5)
// arr.fill(0)  // Array dagi bo`sh joyni toldiri beradi
// console.log(arr);

// let arr = [1, 2, 3, 4, 5]

// arr.copyWithin(3, 0, 2) // zamena qiladi [1, 2, 3]  1) index qoyiladigan joy; 2)index start tochka; 3)index end tochka
// console.log(arr); 