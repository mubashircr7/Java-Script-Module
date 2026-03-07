  console.log("Explore Api & Jesson File In JS");
 const person = {
    name: 'selim',
    age: 32,
    fruit: 'dalim',
    money: 350000,
    isRich: true,
    friends: ['abul', 'babul', 'kabul', 'mabul', 'dabul']
 }
 console.log(person, typeof person);
 

 // JSON ---> JS Object with Notation.
 // JSON.stringify -> JSON a Convert kore
 // JSON.parse -> Object a convert kore


 const personJSON= JSON.stringify(person);
 console.log(personJSON, typeof personJSON);


 // object format a convert korte //
 const parseJSON = JSON.parse(personJSON); 
 console.log(parseJSON);




