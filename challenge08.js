function solve(arr, len) {
    let res = [];
    for (let i = 0; i < Math.pow(2,arr.length); i++) {
        let dum = [];
        for (let j = 0; j < arr.length; j++) {
            if((i & (1 << j)) !== 0) {
                dum.push(arr[j]);
            }
        }
        if(dum.length === len) {
            res.push(dum);
        }
    }
    return res;
}

const arr = [1,2,3];
console.log(solve(arr,2));