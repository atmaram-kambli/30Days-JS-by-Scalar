// Description:
// Implement a debounce function that takes a function and a delay as arguments. The returned function should ensure that the original function is not called more than once in the specified delay.

function debounce(sampleFunc, delay) {
    let timeoutId;

    return function (...args) {
        const context = this;

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            sampleFunc.apply(context, args);
        }, delay);
    };
}

function sampleFunc() {
    console.log("Test debounce() function.");
}

const debounceFunc = debounce(sampleFunc, 1000);
debounceFunc();