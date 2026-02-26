  // NO Dublicate Number is array //

  // 1. Array has some dublicate element.
  // 2. []

    const biriyaniKhor = ['abul', 'babul', 'kabul', 'abul', 'kabul', 'mabul', 'babul', 'abul'];
         const numbers = [1, 5, 55, 5, 55, 7, 88, 7, 10];




  function noDuplicate(array){
      const uniqe = [];
      for(const item of array){
         if(uniqe.includes(item) === false){
           uniqe.push(item);
         }
    }
       return uniqe;
  }

    // const uniqeArray = noDuplicate(biriyaniKhor);
    const uniqeArray = noDuplicate(numbers);
    console.log(uniqeArray)