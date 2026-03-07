 

 function add(num1,num2){
    console.log('Arguments: ', arguments, arguments[2]);
    const args = [...arguments];
    console.log('Args: ', args);
    return num1 + num2;
 }

 add(2,5, 43,44,45);