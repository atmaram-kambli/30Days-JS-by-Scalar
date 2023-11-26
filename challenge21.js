// Problem Statement: Write an asynchronous loop function that iterates over an array and performs an asynchronous operation on each element.

async function asyncLoopFunction(arr, asyncOperation) {
    for (const element of arr) {
        await asyncOperation(element);
    }
}

async function asyncOperation(element) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Processed ${element}`)
            resolve();
        }, 1000);
    });
}

const arr = [23,34,45,56,67,78];
asyncLoopFunction(arr, asyncOperation)
    .then(() => {
        console.log("All items processed");
    })
    .catch((error) => {
        console.log("Error in Processing the item");
    });