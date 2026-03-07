 
 const numbers = [1,2,3,4,5];
 const evenNumbers = numbers.filter(num => num % 2 ===0);
 const friends = ['abir', 'kabir','sabbir','abib','ahim'];
 const AFriends = friends.filter(frd => frd[0]==='a') 
 console.log(evenNumbers);
 console.log(AFriends)

 const student = [
    {name: 'babul', age: 22, roll: 50},
    {name: 'mabul', age: 25, roll: 55},
    {name: 'kabul', age: 46, roll: 56},
    {name: 'kabul', age: 36, roll: 56},
    {name: 'kabul', age: 56, roll: 56},
 ]

 const olderStudent = student.filter(std => std.age > 25);
 console.log(olderStudent)