// Problem Description -
// create a string_chop function that takes a string and chop factor(size) and chops out the string into the factor(size) that has been passed

function string_chop(str, n = str.length) {
    const chop = [];
    for (let i = 0; i < str.length; i = i+n) {
        // chop.push(str.substring(i,i+n));
        chop.push(str.substr(i,n));
    }
    return chop;
}

console.log(string_chop('scalar'));
console.log(string_chop('scalar',2));
console.log(string_chop('scalar',1));