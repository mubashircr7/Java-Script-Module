  

  const prices = [16000, 20000, 50000, 100000, 25000];
    
  function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
        return min;
  }

  const cheap = getMin(prices);
  console.log('the cheapest one is: ', cheap);