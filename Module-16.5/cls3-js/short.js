  
  // sorted ----> sort kora mane sajano 
  // dui babe sort kora jay ---> sort 2ti

  // Assending ---> smaller to larger [choto theke boro]
  // Disandding ---> larger to smaler [boro theke choto]

//   const persons = ['rakib','dakib','akib','sakib','takib'];
//   const sortedPerson = persons.sort();       
//   console.log(persons);


  // sorted ---> 2 ways  ;
  // const number = [4, 7, 9, 2, 5, 3];
  // Assending: [2,3,4,5,7,9]
  // Disannding:[9,7,5,4,3,2]

  // Assending sorted: ----> 
  // exp: 
      //   const numbers = [4,7,12,8,43,6,1];
      //  const numbers_asc = numbers.sort(); // not working properly //
      // Assending problem solved:   const numbers_asc = numbers.sort(function(a, b) {return a - b});
      // Disannnding problem solved:   const numbers_asc = numbers.sort(function(b, a) {return b - a});
   
      // Array Coppy korte hoy //
        // const numbers_asc = [...numbers].sort(function(a, b) {return a - b});
        // const numbers_dsc = [...numbers].sort(function(b, a) {return b - a});


        const numbers = [4,7,12,8,43,6,1];
        const numbers_asc = [...numbers].sort(function(a, b) {return a - b});
        const numbers_dsc = [...numbers].sort(function(a, b) {return b - a});
            console.log(numbers_asc);
            console.log(numbers_dsc);
