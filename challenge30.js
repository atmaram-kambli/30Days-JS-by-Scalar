function throttle(func, interval) {
    let trackLastInvocation = 0;

    return function (...args) {
        const now = Date.now();

        if (now - trackLastInvocation >= interval) {
            func.apply(this, args);
            trackLastInvocation = now;
        } else {
            console.log('Function call ignored.');
        }
    };
}

const throttledFunction = throttle(function () {
    console.log('Function invoked!');
}, 1000);

throttledFunction();
throttledFunction();
setTimeout(() => throttledFunction(), 1100);
