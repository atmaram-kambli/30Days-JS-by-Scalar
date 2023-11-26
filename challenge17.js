// Write a JavaScript function named filterOutOdd that uses the filter() method to filter out odd numbers from an array.

function filterOutOdd(arr) {
    return arr.filter((element) => element % 2 == 0)
}

const arr = [12,23,34,45,56,67,78,89,90];
console.log(filterOutOdd(arr));
