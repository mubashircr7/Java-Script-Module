  
  // object // ----
        // property //

  // dot Notation--> dot . simbol diye object er property access kora jay.
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
  console.log(person.profession);
  const income = person.salary;
  console.log(income);
  const boyos = person.age;
  console.log(person.age)
  


  // bracket Notaion //
  // bracket---> 3rd [bracket] diye object er property access kora jay //

  console.log(person['bcs']);
  const gari = person['car'];
  console.log(gari);



  // error 
  // console.log(person.'fav place');
  console.log(person['fav place'])