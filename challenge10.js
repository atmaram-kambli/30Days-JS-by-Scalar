// Happy coding

function bubbleSort(arr) {
    let z = 0;
    for(let i = 0; i < arr.length-1; i++) {
        for(let j = 0; j < arr.length - 1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

const arr = [12,34,2,25,23,11];
console.log("Before Sorting: ", arr);
let ans = bubbleSort(arr);
console.log("After Sorting: ",ans);