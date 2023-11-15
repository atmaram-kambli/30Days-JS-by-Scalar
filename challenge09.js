function firstNonRepeater(str) {
    const n = str.length;
    const arr = new Array(26).fill(0);
    
    for(let i = 0; i < n; i++) {
        if(arr[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] === 0) {
            arr[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] = 1;
        }
        else if(arr[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] === 1) {
            arr[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] = 2;
        }
    }
    for (let i = 0; i < n; i++) {
        if (arr[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] === 1) {
            return str[i];
        }
    }
}

let ans = firstNonRepeater("abacddbec");
console.log(ans);