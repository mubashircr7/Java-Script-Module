 
 const employee = {
    name: 'mubashir',
    position: 'Software Developer',
    [1]: 'desk one',
    ['home-adress']: '1200/ 206 number road',
    ['salary']: 50000
 }
// dot notation
//  console.log(employee.name);
//  console.log(employee.position);
    // const salary = employee.salary;
    // console.log(salary);

 // bracket notation 
//  console.log(employee.1);
console.log(employee['name']);
console.log(employee[1]);
console.log(employee['home-adress']);
const money = employee['salary'];
console.log(money);

const key = 'position';
console.log(employee[key]);






