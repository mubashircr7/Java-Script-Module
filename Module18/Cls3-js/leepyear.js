 /** Leep Year  
  * 
  * 
  *1. year will be a leep year if by divisile by 4.

  *2. simpole logic-
   --Those year that is not divisible by 100 and if the year is divisible by 4. -Than it will be leepYear.
  *
  *3. Complex logic-
  -- If the year divisible by 400 than it is a leeplear. 
  --else is not a leep year.
  *
 */

  // simple logic

   function isLeepYear(year){
      if(year % 4 ===0){
         return true;
      }
      else{
         return false;
      }
   }

   

// complex logic //
   
 function isLeepYear2(year){
   if(year % 100 !== 0 && year % 4===0){
      return true;
   }

   else if(year % 100 && year % 400 ===0){
      return true;
   }

     else{
        return false;
     }
}
 
const islipi = isLeepYear(2043);
const islipi2 = isLeepYear2(2056);
const islipi3 = isLeepYear2(2400);
const islipi4 = isLeepYear2(2052);

console.log(islipi, islipi2, islipi3, islipi4);
