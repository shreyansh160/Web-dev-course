const car ={
    brand:"Toyota",
    model:"Corolla",
    year:2022,
    color:"White"
};

for(let key in car){
    console.log(`${key}: ${car[key]}`);
}