  

/**
 * function takes an array as paramiter.
 * give me the avarage of the odd numbers is array.
 * 
 * 
 * put odd number in an array
 * 
 */

//   function oddAverage(numbers){
//     const odd = [];
//     for (const number of numbers){
//         if(number % 2 === 1){
//         odd.push(number)
//     }
//   }  // odd is the array that contain only the  odd numbers.//
//     //    console.log(odd);
//     let sum = 0;
//     for (const number of odd){
//         sum = sum + number;
//     }
//     const count = odd.length;
//     console.log(sum,count);
//     const avg = sum / count;
//     return avg;
// }

//   const numbers = [42,53,62,71,82,95,99,100];
//   const avg = oddAverage(numbers);
//   console.log('Average of the odd number is: ', avg);


  // even number
    function evenAverage(numbers){
    const even = [];
    for (const number of numbers){
        if(number % 2 === 0){
        even.push(number)
    }
  }  // odd is the array that contain only the  odd numbers.//
    //    console.log(odd);
    let sum = 0;
    for (const number of even){
        sum = sum + number;
    }
    const count = even.length;
    console.log(sum,count);
    const avg = sum / count;
    return avg;
}

  const numbers = [42,53,62,71,82,95,99,100];
  const avg = evenAverage(numbers);
  console.log('Average of the even number is: ', avg);