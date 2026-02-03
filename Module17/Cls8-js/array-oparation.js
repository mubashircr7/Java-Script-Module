/**
* Objective--> Write a function to give me the sum of all number in an array 
*step1: declare a function  
*step2: call cheack weather the function is called properly.
*step3: set a paramiter(s)
*step4: pass the paramiter(s), check weather paramiter is passed in a proper format
*step5: do the function tasks (step by step)
*
*/

function sumOfNumber(numbers){
      let sum = 0;
 for(const number of numbers){
    console.log(number);
    sum = sum + number;
  }  
    return sum;
}

  const numbs= [54,62,12,6];
  const sum = sumOfNumber(numbs);
  console.log('sum of number is', sum)
