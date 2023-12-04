
const obj = {
    name: "Ak",
    profession: "Student",
    age: 20
}

const handler = {
    get: function(target, prop) {
        console.log("Property '"+prop+"' accessed")
        return Reflect.get(target, prop);
    }
}

const proxyObj = new Proxy(obj, handler);
console.log(proxyObj.name);
console.log(proxyObj.profession);
console.log(proxyObj.age);