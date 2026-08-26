class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(num) {
        this.real = this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
    }
}
let c1 = new Complex(2, 4);
let c2 = new Complex(3, 5);
c1.add(c2);
console.log(`Sum: ${c1.real} + ${c1.imaginary}i`);