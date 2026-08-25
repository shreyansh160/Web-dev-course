// let obj ={
//     a:1,
//     b:"Harry"
// }
// console.log(obj)

// let animal={
//     eats:true
// };
// let rabbit ={
//     jumps:true
// };
// rabbit.__proto__=animal;

class animal {
    constructor(name) {
        super(name)
        console.log("Object is created...")
    }
    eats() {
        super.eats()
        console.log("I am eating")
    }
    jumps() {
        console.log("I am jumping")
    }
}

class Lion extends animal {
    constructor(name) {
        super()
        console.log("Object is created and he is lion...")
    }
    eats() {
        console.log("Roar")
    }
}
let a = new animal("Bunny");
console.log(a)
let l = new Lion("Shera")
console.log(l)