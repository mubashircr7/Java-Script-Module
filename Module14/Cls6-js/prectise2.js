 
  const price = 10000;
  const age = 80;

  if(age == 60 ){
    // 60 % discount //
    const discount = price * 60 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
    console.log('You are a discounted by 90%');
  }

  // full free //
  else if(age <= 10){
    console.log('You are a full free');
  }
     // discount 50%
  else if (age <= 50){
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
  }

  else if(age >= 80 && price <= 10000){
    console.log('Congratulation')
    console.log('You Are a Jackpot winner');
  }


    // a lottary tictket //
  else if (age >= 25 && price >= 5000){
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log (payAmount);
    console.log ('You are Win a Jackpot Ticket')
  }
  else{
    console.log(price);
  }