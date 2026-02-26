  
  function multiply (num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'please provide a number ';
    }
     const mult = num1 * num2;
     return mult;
  }
  const result = multiply(5, 'seven');
//   console.log(result);


function fullName(fast, second){
    if(typeof fast !== 'string' ){
        return 'Please fast Provide a String';
    }
    else if(typeof second !== 'string'){
        return 'Please provide a second name is String';
    }
    const full = fast + ' ' + second;
    return full;
}

const full = fullName('Akmal', 7);
// console.log(full);


// function getPrice(product){
//     console.log(typeof product)
//     if(typeof product !== 'product'){
//         return 'Please provide a object'
//     }
//    const price = product.price;
//    return price;
// }
// // // const price = getPrice({name: 'culkani dandi', price: 35, color: 'blue'} );
//  console.log(price);

 function getSecond(numbers){
    //  console.log(Array.isArray(numbers))
    if(Array.isArray(numbers) === false){
        return 'Please Provide an array'
    }
    const second = numbers[1];
    return second;
 }
 const second = getSecond([1,25,29]);
 console.log(second);