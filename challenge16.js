// Problem Description:
// Write a JavaScript function named sumArray that takes an array of numbers and returns the sum of all the numbers in the array using the reduce() method.

function sumArray(arr) {
    return arr.reduce(function addElement(total, num) {return total + num;}, 0);
}

const arr = [1, 4, 2, 5];
console.log(sumArray(arr));