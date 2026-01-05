
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

// console.log(data);

// ===================================

// READ
// let readAction = (prop) => {
//     data = data.filter((obj) => {
//         if (obj.familiya.endsWith(prop)) return obj
//     })
// }
// let readAction = (prop) => {
//     data = data.filter((obj) => obj.familiya.endsWith(prop))
// }
// readAction("ev")
// console.log(data);

// =========================================

//SORT

// let sortAction = (prop) => {
//     if (prop === "ism") {
//         data.sort((a, b) => a.ism.localeCompare(b.ism))
//     } else if (prop === "familiya") {
//         data.sort((a, b) => a.familiya.localeCompare(b.familiya))
//     } else if (prop === "yosh") {
//         data.sort((a,b)=>a.yosh-b.yosh)
//     } else {
//     }
// }

// sortAction("ism")
// sortAction("familiya")
// sortAction("yosh")
// console.log(data);


// let sortAction = (prop) => {
//     data.sort((a, b) => {
//         if (typeof a[prop] === "string") return a[prop].localeCompare(b[prop])
//         return a[prop] - b[prop]
//     })
// }
// sortAction("ism")
// sortAction("familiya")
// sortAction("yosh")
// console.log(data);

//=======================================
// UPDATE 

// let editAction = (editID, editName) => {
//     data.map((obj) => {
//         if (obj.id === editID) obj.ism = editName
//         return obj;
//     })
// }

// let editAction = (editID, editName) => {
//     data = data.map((obj) => obj.id === editID ? { ...obj, ism: editName } : obj)
// }

// editAction(4, "Salimboy")
// console.log(data);

// ====================================
// DELETE

// let deleteAction = (deleteID) => {
//     data = data.filter((obj) => {
//         if (obj.id === deleteID) { }
//         else return obj
//     })
// }

// let deleteAction = (deleteID) => {
//     data = data.filter((obj) => obj.id !== deleteID)
// }

// deleteAction(5)
// console.log(data);
