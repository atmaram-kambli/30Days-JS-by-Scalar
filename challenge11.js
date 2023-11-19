function objectProp(obj) {
    const li = [];
    for (let it in obj) {
        li.push(it);
    }
    return li.join(', ');
}

const obj = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
};

console.log(objectProp(obj));