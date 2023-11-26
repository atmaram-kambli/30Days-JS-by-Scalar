// Problem Description:
// Write a JavaScript function named allPositive that checks whether all numbers in a given array are positive using the every() method.

function allPositives(arr) {
    return arr.every((element) => (element > 0));
}

const arr1 = [12,23,34,45,45];
const arr2 = [12,23,34,-1,99];

console.log(allPositives(arr1));
console.log(allPositives(arr2));
