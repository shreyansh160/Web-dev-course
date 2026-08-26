class Complex {
    constructor(real, imaginary) {
        this._real = real;
        this._imaginary = imaginary;
    }
    get real() {
        return this._real;
    }
    set real(newReal) {
        this._real = newReal;
    }

    get imaginary() {
        return this._imaginary;
    }
    set imaginary(newImaginary) {
        this._imaginary = newImaginary;
    }
}
let c = new Complex(2, 4);
console.log(c.real);
console.log(c.imaginary);

c.real = 10;
c.imaginary = 20;
console.log(c.real);
console.log(c.imaginary);