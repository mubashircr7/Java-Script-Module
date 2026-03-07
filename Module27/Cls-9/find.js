const student = [
    {name: 'babul', age: 22, roll: 50},
    {name: 'mabul', age: 25, roll: 55},
    {name: 'kabul', age: 46, roll: 56},
    {name: 'akul', age: 36, roll: 56},
    {name: 'abul', age: 56, roll: 56},
 ]

 const studentF = student.find(std => std.name[1] === 'a');
 console.log(studentF);