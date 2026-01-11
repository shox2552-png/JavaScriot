
// let data = [
//     { id: 1, ism: "Otabek", familiya: "Valiyev", yosh: 14 },
//     { id: 2, ism: "Orifjon", familiya: "Abdujabborov", yosh: 15 },
//     { id: 3, ism: "Asadbek", familiya: "Atamirzayev", yosh: 16 },
//     { id: 4, ism: "Salimjon", familiya: "Qahramonov", yosh: 16 },
// ];

// let creatAction = (ism, familiya, yosh) => {
//     data.push({ id: data.length + 1, ism, familiya, yosh })
// }

// creatAction("Shoxjahon", "Ga'ybullaev", 17)
// creatAction("Jamoliddin", "Sobitjonov", 16)

// let edit = (yosh, key, value) => {
//     data = data.map(obj => {
//       if (obj.yosh === yosh) obj[key] = value;
//       return obj;
//     })
//   }

// edit(17,"status", "talaba")
// console.log(data);


// let edit = (key ,yosh, boluvshi) => {
//     data.map((obj) => {
//         if (obj.yosh === yosh) obj[key] /= boluvshi
//             return obj
//     })
// }

// edit("yosh", 16,2)
// console.log(data);