  //

          // 1st system simple if else //
  const disha = 56;
  const salman = 70;

  if(disha > salman){
       console.log('disha win strawberry: ', disha);
  }
  else{
      console.log('samman win this Strawberry: ', salman);
  }




  // inside a function // 2nd system 
  function getMax(num1, num2){
    if (num1 > num2){
        return num1;
    }
    else {
        return num2;
    }
  }
    const max1 = getMax(56,70);
    const max2 = getMax(66,88);
    const ultimax = getMax(max1, max2)
    console.log('max number is:', ultimax);





