 

 function outerFunction(){ 
    function innerFunction(){
        console.log('inner function');
    }
    return innerFunction;
 }
 const result = outerFunction();
//   result()
//  console.log('in the outside', result);


function counter(owner){
    let count = 0;

    function increment(){ 
        count = count + 1;
        console.log('value of count',owner, count);
    }
    return increment;
}
//  const count1 = counter();
//  count1()
//  count1()
//  count1()
//  console.log(coun1);

const rohimCounter = counter('Rohim');
rohimCounter();
rohimCounter();

const korimCounter = counter('Karim');
korimCounter();
korimCounter();

rohimCounter();
rohimCounter();
