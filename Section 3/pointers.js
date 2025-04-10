let num1 = 5;
let num2 = num1; // num2 is a copy of num1

// Withoud pointers, num1 and num2 are independent
// Changing num1 does not affect num2
console.log(num1); // 5
console.log(num2); // 5
num1 = 10; // Changing num1 does not affect num2
console.log(num1); // 10
console.log(num2); // 5

// With pointers, num1 and num2 are references to the same value
let num3 = 5;
let num4 = num3; // num4 is a reference to num3

let obj1 = { value: 5 };
let obj2 = obj1; // obj2 is a reference to obj1
// Changing obj1 affects obj2
console.log(obj1.value); // 5
console.log(obj2.value); // 5