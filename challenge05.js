function fileExtension(str) {
    return str.substring(str.indexOf('.')+1);
}

let ans = fileExtension('challenge05.js');
console.log(ans);