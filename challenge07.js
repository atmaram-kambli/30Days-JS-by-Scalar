function checkFor50(num1, num2) {
    return (num1 + num2 === 50)? true : ((num1 === 50 || num2 === 50)? true : false);
}

let ans = checkFor50(50,38);
console.log(ans);