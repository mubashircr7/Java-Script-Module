 // object //

   // value 

   const person = {
    name: 'Sodor Uddin',
    age: 26,
    profession: 'Devoloper',
    salary: 25000,
    married: true,
    car: true,
    bcs: true,
    'fav place': ['bandorban', 'coxsbajar', 'andar killa', 'saint martin'] 
  }
//   person.salary = 30000;  // dot notation diye value change kora jay -- 
//   person['age'] = 27;     //  bracket notation diye value change kora jay --
//   person['fav place'] = ['thailand', 'Swizerland', 'kashmir', 'Norway'];
//   console.log(person)


  const keyName = 'profession';
  console.log(person[keyName]);

  const propName = 'salary';
  person[propName] = 50000;
  console.log(person[propName])

  const Rlt = 'married';
  person[Rlt] = false;
  console.log(person[Rlt])
  console.log(person)
  
 