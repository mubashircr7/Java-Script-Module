  /**
   *    Ternary - 3 part of this words 
   *  
   *            ?  
   *                : 
   *  Condition ? Do Something when ture  : Do Something when False 
   * 
   * 
   * orthat  fast condition sotto hole kulun er age ? er pore hobe.
   *    : er por condition mittha hole hobe.
   */

//   const age = 20;
//   if (age >= 18){
//      console.log('you can Vote');
//   }
//   else{
//     console.log('jaw baccha gumaya thako');
//   }


//   // **Simple Ternary  ** //
//   const age = 20;
//   age >= 18 ? console.log('You Can Vote') : console.log('Jaya Gumaya Thako')

  
 
    let price = 500;
    const isLeader = false;

    // if(isLeader === true){
    //    price = 0;
    // }
    // else{
    //     price = price + 100;
    // }
    // console.log(price)




    // // ternary shorthand //
    // price = isLeader === true ? 0 : price + 100 


    // normal //

     if(isLeader === true){

        if(price > 1000){
           price = price /2;
        }
        else{
            price = 0 ;
        }

     } 

     else{
         price = price + 100;
     }



        // ternary shorthand nested if else // ignored this part at this time//


        price = isLeader === true ? 0 : price + 100

        // nesting // 
        price > 1000 ? /2 : price 0