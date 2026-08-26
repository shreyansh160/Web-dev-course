class Human {
    speak() {
        console.log("Hello, I am a Human.");
    }
}
class Student extends Human {
    speak() {
        console.log("Hello, I am a Student studying for exams.");
    }
}
let h = new Human();
h.speak();
let s = new Student();
s.speak();