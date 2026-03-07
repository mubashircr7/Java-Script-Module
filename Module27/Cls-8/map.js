 

//  const numbers = [1,2,3,4,5];
//  const doubled = [];

//  for(const num of numbers){
//     doubled.push(num * 2);
//  }
//  console.log(doubled)



// double korar other way--
//   const numbers = [1,2,3,4,5]
//  const doubleIt = num => num * 2;
//  const doubled = numbers.map(doubleIt);
//  console.log(doubled)


 // akline a doubed kora
//  const numbers = [1,2,3,4,5]
//  const doubled = numbers.map(num => num * 2);
//  const square = numbers.map(num => num * num);

//  const friend = ['zabed', 'sabed', 'mabez'];
//  const firstLetter = friend.map(frd => frd[0]);
//  console.log(firstLetter)
//  console.log(doubled)
//  console.log(square)



 const product = [
    {name: 'iphone', price: 25000},
    {name: 'laptop', price: 525000},
    {name: 'Mecbok', price: 255500},
 ]

 const prices = product.map(pd => pd.price);
 const prices = product.map(pd => pd.price *2);


console.log(prices)