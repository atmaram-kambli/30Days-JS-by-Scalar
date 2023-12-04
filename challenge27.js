
function* generater(start, end) {
    for (let index = start; index <= end; index++) {
        yield index;
    }
}

const range = generater(1,10);
console.log(range)
for (const numbers of range) {
    console.log(numbers);
}