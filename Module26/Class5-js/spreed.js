// // spred oparator js [...] //

// onst max = Math.max(3,5,9,4,2,6,1,7);
// // console.log(max);

// const numbers = [2,3,5,55, 66];
// const max2 = Math.max(...numbers);
// // console.log(...numbers)


// const params = [12,22,32];
// function sum(x,y,z){
//     return x+y+z;
// }
//  const result = sum(...params);
// console.log(result);


// const arr1 = [1,2,3];
// // const arr2 = [...arr1];
// const arr2 = [11, 20, ...arr1, 25]
// arr2.push(4);

// console.log(arr1);
// console.log(arr2);





const person = {name: 'alin', age: 25};
// const person2 = person;
const person2 = {...person, designation: 'devoloper'};
person.salary = 50000;

console.log(person);
console.log(person2);

