const personObject = {
    name: "NikDoe",
    age: 28
}

const newPersonObject = {
    ...personObject,
    country: "Belarus"
}

console.log(personObject);
console.log(newPersonObject);