function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

// O(n) - Linear Time Complexity
// The time it takes to run this function increases linearly with the size of n.
// If n = 5, the function will run 5 times.
// If n = 10, the function will run 10 times.
// If n = 100, the function will run 100 times. 
// as it is a loop that runs times based on the value of n.


// ---------------------------------
// in case there are two loops
function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = 0; j < n; j++) {
    console.log(j);
  }
}

// O(n + n) = O(2n) = O(n)
// The time complexity is still O(n) because we ignore the constant factor.
// The time it takes to run this function increases linearly with the size of n.
// If n = 5, the function will run 10 times.
// If n = 10, the function will run 20 times.
// Q: but there are two loops, why is it not O(n^2)?
// A: because they are not nested loops, they are sequential loops. 
// if the loops are not related to each other, we can add their time complexities.

// ---------------------------------
// in case there are two different variables like a and b:
function logItems(a, b) {
  for (let i = 0; i < a; i++) {
    console.log(i);
  }
  for (let j = 0; j < b; j++) {
    console.log(j);
  }
}

// O(a + b)
// The time complexity is O(a + b) because we have two different variables.
// If a = 5 and b = 10, the function will run 15 times.
// If a = 10 and b = 5, the function will run 15 times.
// If a = 10 and b = 10, the function will run 20 times.
// If a = 100 and b = 100, the function will run 200 times.
// So the time complexity is O(a + b) because we have two different variables.
// ---------------------------------

// in case there are two nested loops with a and b:
function logItems(a, b) {
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      console.log(i, j);
    }
  }
}
// O(a * b)
// The time complexity is O(a * b) because we have two nested loops.
// If a = 5 and b = 10, the function will run 50 times.
// If a = 10 and b = 5, the function will run 50 times.
// If a = 10 and b = 10, the function will run 100 times.
// So the time complexity is O(a * b) because we have two nested loops.