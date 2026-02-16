// class Car {
//     #password = "12345"
//     constructor(model) {
//         this.model = model // public
//     }

//     getPasswordData(){
//         //private 
//         return this.#getPassword()
//     }

//     #getPassword(){
//         return this.#password
//     }
// }

// let obj = new Car("GM")
// console.log(obj.model);
// console.log(obj.getPasswordData());
// console.log(obj.getPassword());// notog`ri
// console.log(obj.password); // notog`ri

// Mixim


// const Parent = {
//     getParentName() {
//         return "Parent"
//     }
// }

// const Child = {
//     getChildName(){
//         return "Child"
//     }
// }

// class SubChild {
//     getSubChildName(){
//         return "Sub child"
//     }
// }

// Object.assign(SubChild.prototype, Parent, Child)

// let obj = new SubChild()

// console.log(obj.getParentName());


// Mixim mukammal usul  

const Parent = (Data) =>
    class extends Data {
        getParentName() {
            return "Parent"
        }
    }

const Parent2 = (Data) =>
    class extends Data {
        getParent2Name() {
            return "Parent2"
        }
    }

const Child = (Data) =>
    class extends Data {
        getChild() {
            return "Child"
        }
}

class Boglovchi{}
class SubChild extends Parent(Parent2(Child(Boglovchi))){
    getSubChild(){
        return "Sub Child"
    }
}

    let obj = new SubChild()
    console.log(obj.getParentName());
    console.log(obj.getParent2Name());
