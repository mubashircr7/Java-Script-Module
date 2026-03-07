 // Non Premitive : array object, function---> pass by referance ;
 
 
 function fastSum(arr1, arr2){    
    arr1[0] = 100;
    arr2[0] = 200;
    const fast = arr1[0];
    const second = arr2[0];
    return fast + second;
 }


 const num1 = [1,2,3,4,5];
 const num2 = [1,2,3,4,5];
 console.log('before the function call: ', num1, num2)
 const result = fastSum(num1,num2);
 console.log('after the function call: ', num1, num2);