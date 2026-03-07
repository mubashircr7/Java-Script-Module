//  function add(num1,num2){
//     const total = num1 + num2;
//     // return total;
//     console.log(num1, num2, total);
//  }
//  add(10, 20);



function fullName(fast, last = ''){
    const name = fast + ' '+ last;
    console.log(name);
}
fullName('kamruzaman', 'osman');


function multiply(num1, num2 = 0){
    const result = num1 * num2;
    console.log(result)
}

multiply(5,10);

/*  default value of function es6 //
  - Amra default man set korte pari vivinno sicuation a abong eta = sign diye set kore feli -

 string --> '';  
 number --> 0  [for add]
 number --> 1  [for multiply]
 array --> []
 object --> {}
 boolean --> false
*/
