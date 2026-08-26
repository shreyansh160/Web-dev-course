function SimpleInterest(p,r,t){
    return(p*r*t)/100;
}
let arr=[1000,200,300];
let interest = SimpleInterest(...arr);
console.log(`Simple Interest: ${interest}`);