let arr = [1,2,4,10,5,7]

arr[0] = 5666;
// console.log(arr, typeof arr);
// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[3])

console.log(arr.toString())
console.log(arr.join(" and "))
arr.pop();
console.log(arr);
arr.push(9);
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(1);
console.log(arr);
delete arr[1]
console.log(arr);
arr.sort();
console.log(arr);
arr.reverse();
console.log(arr);

// let a1=[1,2,3]
// let a2=[4,5,6]
// let a3=[9,8,7]
// console.log(...a1. concat(a2,a3));

// let numbers = [1, 2, 3, 4, 5] 
// numbers.splice(1, 2)    
// numbers.splice(1, 3)  
// numbers.splice(1, 3, 222, 333) 
// (4) [1, 222, 333, 5]