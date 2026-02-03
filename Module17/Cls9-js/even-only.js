/**         
 * 1. create a function that will a return only even numbers.
 * 2. return the sum of even numbers.
 * 3. 
 * 4.
 */

//    function evenNumbersOnly(numbers){

//         const evens = [];
//         for(const number of numbers){
//             if(number % 2 ===0){
//                 console.log(number);
//                 evens.push(number);
//             }
//         }
//             return evens;
//    }

//    const numbers = [5,8,91,24,6];
//    const evens = evenNumbersOnly(numbers);
//    console.log('even number are evens: ', evens);




      const numbers = [5,8,91,24,6];

      function sumOfEvensnumber(numbers){     
        let sum = 0;
        for(const number of numbers){
             if(number % 2 ===0){
             console.log(number);
             sum = sum + number;
           }
        }  
            return sum;       
      }
      const sum = sumOfEvensnumber(numbers);
      console.log('sum of the evens numbers: ', sum);
