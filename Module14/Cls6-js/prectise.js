  
  const price = 2000;

  if(price >= 5000){
         // 50% discount //
  const discount = price * 50 / 100;
  const payAmount = price - discount;
    console.log(payAmount);
  }
        // 25% discount //
  else if (price >= 2500){
    const discount = price * 25 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
  }
  else{
    console.log (price);
    console.log('plzzzzz full paid & no discount here')
  }
