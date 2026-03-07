 
 const person = {
    name: 'abir',
    age: 32,
    color: 'white',
    isRich: false,
    money: 25000
 }
console.log(typeof person, person);


// JSON --> JavaScript Object Notation"".
//1. JSON --> JSON.stringify ---convert JSON file.
//2. JSON --> JSON.parse ---convert Object.


//1. jesson convert
const personJSON = JSON.stringify(person);
console.log(typeof personJSON, personJSON);


//2. String convert
const parseJSON = JSON.parse(personJSON);
console.log(parseJSON);