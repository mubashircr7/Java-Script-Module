// arrow function javaScript // 
 
 const add2 = function(num1, num2){
    return num1+ num2
 }
 console.log(add2(10,90));


 const add3 =  (num1,num2) => num1 * num2;
 console.log(add3(10,40));

 const multiply = (a,b) => a * b;
 console.log(multiply(2,2));


 const get = x => x*10; // braket dileu cole na dileu cole
 const get2 = (x) => x*10; // same uporer moto //
 const getpi = () => 3.1416;
 const getRandom = () => Math.random();
 const getAll = (a,b,c,d,e,f) => a+b+c+d+e+f;
 const isFastEven = (num) => num % 2 === 0;

 const divide = (a,b) => a / b;
 const diff = (b,c) => b - c;

 const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
 }


 document.getElementById('btn').addEventListener('click', function(){

 })

 //arrow function
 document.getElementById('btn').addEventListener('click', ()=> { })
 document.getElementById('btn').addEventListener('click', (event)=> { }) //used single paramiter