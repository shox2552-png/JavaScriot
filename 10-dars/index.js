// for (; 1;){
//     let n = prompt("Son kiriting");
//     if (n > 100 || n === null){
//         console.log(n);
//         break;
//     }
// }

// ==================================

// while

// let i = 0
// while(i <= 10){
//     console.log(i);
//     i++;
// }

// WHILE

// while(true){
//     let n = prompt("Son kiriting")
//     if( n > 100 || n === null){
//     console.log(n);
//     break;
//    }
// }

// DO WHILE

// let  i = 0
// do{
//     console.log(i);
//     i++
// }while(0)

// do {
//     let n = prompt("Son kiriting")
//     console.log(n);
//     if (n > 100 || n === null) break
// } while (true)

// =======================================

// for (let i = 1; i <= 9; i++){
//     for (let j = 1; j <= 10; j++){
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
//     console.log("=============================");
// }

// tashqi: for (let i = 1; i <= 9; i++){
//     for (let j = 1; j <= 10; j++){
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
//     console.log("=============================");
// }

for (let a = 1; a<= 100; a++){
    if (a % 2){
        console.log(a, "- Toq son");
    }else{
        console.log(a, "- Juft son");
    }
}