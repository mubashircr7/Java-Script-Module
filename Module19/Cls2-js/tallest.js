   //

   const heights = [47, 55, 67, 65, 78, 60];
   function getMax(numbers){
        let max = numbers[0];
     for(const num of numbers){
        if(num > max){
            max = num;
        }
     }
     return max;
   }
   const max = getMax(heights);
   console.log('max value is: ', max);

   

   // min number detected //
    
   const heigh = [47, 55, 67, 8, 65, 78, 60];
   function getmin(numbers){
        let min = numbers[0];
        for(const num of numbers){
            if(num < min){
                min = num;
            }
        }
        return min;
   }
     const min = getmin(heigh);
     console.log('mini value is: ', min);