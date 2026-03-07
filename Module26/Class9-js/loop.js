 const numbers = [1,2,3,4,5];
 for(const number of numbers){
    // console.log(number);
 }

 const employee = {
    name: 'Robin',
    age: 22,
    position: 'software devoloper',
    salary: 50000,
    [1]: 'desk- one',
    ['home-adress']: 12/8,
 }

  for( const key in employee){
    const value = employee[key];
    console.log(key, value);
  }