class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
}

let c1 = new Complex(2, 4);
console.log("Real part: " + c1.real);
console.log("Imaginary part: " + c1.imaginary);