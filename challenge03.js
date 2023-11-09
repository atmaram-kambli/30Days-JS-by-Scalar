function checkBound(n1, n2) {
    return (n1 >= 55 && n1 <= 99 || n2 >= 55 && n2 <= 99);
}


let num1 = 23;
let num2 = 66;
let ans = checkBound(num1, num2);
console.log(ans);