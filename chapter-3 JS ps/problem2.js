const correctnumber=42;
let guess=Number(prompt("Enter the number:"));

while(guess !==correctnumber){
    console.log("try again");
    guess = Number(prompt("try again:"));
}
console.log("You have entered the correct number!");