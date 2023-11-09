function areaOfTriangle(a, b, c) {
    // semiperimeter
    let s = (a + b + c) / 2;
    // Area of triangle
    return Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(4);
}

const area = areaOfTriangle(5,6,7);
console.log(area);