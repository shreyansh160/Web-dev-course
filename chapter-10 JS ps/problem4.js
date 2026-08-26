class Human {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Human {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }
}
let s = new Student("Alex", 10);
let h = new Human("Jordan");

console.log(s instanceof Human);
console.log(s instanceof Student);
console.log(h instanceof Student); 