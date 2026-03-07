 // keys, values

//  const king = {name: 'mubashir', age: 22, kingdom: 'bd'};
//  const keys = Object.keys(king);
//  const values = Object.values(king);
//  const entries = Object.entries(king);

//  console.log(keys);
//  console.log(values);
//  console.log(entries);


// freze 
 const king = {name: 'mubashir', age: 22, kingdom: 'bd'};
 delete king.age;
//  console.log(king)
//  console.log(king)
king.queen = 'naziha';
// console.log(king)
king.name = 'king mubashirul islam';
// console.log(king)

// Object.freeze(king);
// console.log(king)

Object.seal(king);
console.log(king);

