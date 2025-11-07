// function min(a, b) {
//     if (a > b) console.log(b);
//     else if (a < b) console.log(a);
//     else console.log("Ikkala raqam teng");
// }
// min(2, 5)
// min(3, -1)
// min(1, 1)

// let pow = function(param1, param2){
//     let mul = param1 ** param2;
//     console.log(mul);
// }

// pow(3, 2)
// pow(3, 3)
// pow(1, 100)

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no()
// }

// ask("Do you agree?",
//     function () { alert("You agreed."); },
//     function () { alert("You canceled the execution."); }
// );

// ======================================================

// let ask = function (question, yes, no) {
//     if (confirm(question)) yes()
//     else no()
// }

// ask("Do you agree?",
//     function () { alert("You agreed."); },
//     function () { alert("You canceled the execution."); }
// );

// ======================================================


// let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no()
// }

// ask("Do you agree?",
//     function () { alert("You agreed."); },
//     function () { alert("You canceled the execution."); }
// );

// ====================================================

function sum(a, b) {
    let mul = a ** b
    console.log(mul);
    if(a % 2) console.log("toq son");
    else{(b % 2)}console.log("juft son");
}
sum(1, 20)