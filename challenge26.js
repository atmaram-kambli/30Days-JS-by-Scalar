// Description:
// Write a function calculateTotal that takes an array of numbers, filters out the even numbers, squares the remaining numbers, and then calculates their sum.

function calculateTotal(arr) {
    return (arr.filter((element) => (element % 2 !== 0)).map((square) => (square*square)).reduce((item, sum) => (sum + item)));
}

const arr = [12,23,34,45,56,67,78];
console.log(calculateTotal(arr));