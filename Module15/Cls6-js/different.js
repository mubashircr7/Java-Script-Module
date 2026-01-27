  

  // odd or even different ways to for & while loop //

    
  
  // for loo odd number get in different ways //
   
//    for(let i = 0; i <= 20; i++){
//     if (i%2 === 1){
//         console.log(i);
//     }
//    }

// for loop even using if number get in different ways //

//    for (let i = 0; i <20; i++){
//     if (i%2 !== 0){
//         console.log(i);
//     } 
//    }

    //  for (let i = 1; i <= 20; i = i+2){
    //    console.log(i);
    //  }


    // give me the number between 1 to 30 dividable in 5 //

    // for (let i = 1; i <= 30; i = i++){
    //     if(i % 5 === 0){
    //       console.log(i);
    //     }
    // }

    // for (let i = 1; i <= 30; i++){
    //   if(i % 3 === 0){
    //     console.log(i);
    //   }
    // }

       // for used ///

    // for (let i = 1; i <= 30; i++){
    //   if(i % 3 === 0 || i % 5 === 0){
    //     console.log(i);
    //   }
    // }
       // and && used //

    // for (let i = 1; i <= 100; i++){
    //   if (i % 3 === 0 && i % 5 === 0){
    //     console.log(i);
    //   }
    // }

     let total = 0;
    for (let i = 1; i <= 20; i++){
      if(i % 3 === 0){
        console.log(i);
        total = total + i;
        console.log('sum is ', total);
    }
    }
    console.log('total number sum is', total)