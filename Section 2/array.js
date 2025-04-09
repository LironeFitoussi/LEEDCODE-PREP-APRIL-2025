// Big O Notation with Arrays

const myArray = [11, 3, 23, 7]

// .push()
// O(1)
// The time complexity is O(1) because it takes a constant amount of time to add an element to the end of the array.
// It doesn't depend on the size of the array.
// The time it takes to run this function is constant.
myArray.push(5)
console.log(myArray) // [11, 3, 23, 7, 5]

// .pop()
// O(1)
// The time complexity is O(1) because it takes a constant amount of time to remove an element from the end of the array.
// It doesn't depend on the size of the array.
// The time it takes to run this function is constant.
myArray.pop()
console.log(myArray) // [11, 3, 23, 7]

// .shift()
// O(n)
// The time complexity is O(n) because it takes linear time to remove an element from the beginning of the array.
// It depends on the size of the array.
// The time it takes to run this function increases linearly with the size of n.
myArray.shift()
console.log(myArray) // [3, 23, 7]

// .unshift()
// O(n)
// The time complexity is O(n) because it takes linear time to add an element to the beginning of the array.
// It depends on the size of the array.
// The time it takes to run this function increases linearly with the size of n.
myArray.unshift(11)
console.log(myArray) // [11, 3, 23, 7]

// .splice()
// O(n)
// The time complexity is O(n) because it takes linear time to remove an element from the middle of the array.
// It depends on the size of the array.
// The time it takes to run this function increases linearly with the size of n.
// Q: why is it not O(1/2n)?
// A: because we ignore the constant factor.
// A: We alwats check the worst case scenario.
myArray.splice(1, 0, 'Hi')
console.log(myArray) // [11, 'Hi', 3, 23, 7]

// .indexOf()
// O(n)
// The time complexity is O(n) because it takes linear time to find an element in the array.
// We are iterating through the array to find the element.
// It depends on the size of the array.
const index = myArray.indexOf(23)
console.log(index) // 3


// Looking for a specific index
// O(1)
// The time complexity is O(1) because it takes constant time to access an element at a specific index.
// It doesn't depend on the size of the array.
const element = myArray[2]
console.log(element) // 3
// ---------------------------------