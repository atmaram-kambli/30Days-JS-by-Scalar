function reverseNum(num) {
    let revNum = 0;
    while(num !== 0) {
        let rem = num % 10;
        revNum = (revNum * 10) + rem;
        num = Math.floor(num / 10);
    }
    return revNum;
}

let x = 32243;
let ans = reverseNum(x);
console.log(ans);    // output --> 34223