const obj = {harry:98, rohan:78, aakash:7};
const keys = Object.keys(obj);

for(let i=0; i<keys.length;i++){
    console.log(`The marks of ${keys[i]} are ${obj[keys[i]]}`);
}

for(let key in obj){
    console.log(`The marks of ${key} are ${obj[key]}`);
}