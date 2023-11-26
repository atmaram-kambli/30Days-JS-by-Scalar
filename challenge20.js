// Problem Description:
// Write a JavaScript function named findFirstNegative that finds and returns the first negative number in an array using the find() method.

function findFirstNegative(arr) {
    return arr.find((element) => (element < 0));
}

const arr = [12,23,34,45,-56,67,78];
const arr1 = [12,23,34,45,56,67,78];

console.log(findFirstNegative(arr));
console.log(findFirstNegative(arr1));