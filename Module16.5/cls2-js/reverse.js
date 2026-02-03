   // Reverse Array // 


     // simple way to reverse //
 
// const numbers = [1, 2, 3, 4, 5, 6, 7];

// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

// another way //
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const reversed = numbers.reverse();
// console.log(reversed);


    // for of -- loop reverse //
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const rev_numbers = [];
// //  for(const num of numbers){
// //     console.log(num)
// //     rev_numbers.unshift(num);
// //  }
// //  console.log(rev_numbers);

    // for loop //

const numbers = [1, 2, 3, 4, 5, 6,7,]
const rev_numbers = [];
for (let i = 0; i < numbers.length; i++){
    const num = numbers[i];
    rev_numbers.unshift(num);
}
console.log(rev_numbers);

   // reversed side looping for loop //
   const rev_rev_numbers = [];
   for (let i = numbers.length -1; i >=0; i--){
       const num = numbers[i];
       console.log(num);
       rev_rev_numbers.push(num);
   }
 
   console.log(rev_rev_numbers);
