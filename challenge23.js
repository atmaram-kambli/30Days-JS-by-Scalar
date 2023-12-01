// Problem : Closure Challenge
// Description:
// Write a function counter that returns a new function on each invocation. The returned function, when called, should increment the counter value and return it.


function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const counterIncr = counter();
console.log(counterIncr());
console.log(counterIncr());
console.log(counterIncr());
console.log(counterIncr());