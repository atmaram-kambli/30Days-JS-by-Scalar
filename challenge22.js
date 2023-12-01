// Problem Statement: Write a function to deeply compare two objects for equality.
// Description: Given two objects, the function should return true if they are deeply equal and false otherwise.
// Solution Approach: Recursively compare the properties of both objects.


function compareObjects(o1, o2) {
    if(typeof o1 !== "object" || typeof o1 !== "object" || o1 === null || o2 === null) {
        return o1 === o2;
    }
    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);

    for (const key of keys1) {
        if(!keys2.includes(key) || !(compareObjects(o1[key], o2[key]))) {
            return false;
        }
    }
    return true;
}

const obj1 = {
    name: "Ak",
    age: 20,
};
const obj2 = {
    name: "Ak",
    age: 20,
};

console.log(compareObjects(obj1, obj2));