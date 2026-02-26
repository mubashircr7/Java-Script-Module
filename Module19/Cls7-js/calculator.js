  
  function add(num1, num2){
    return num1 + num2;
  }

  function substrac(num1, num2){
    return num1 - num2;
  }
  
  function multiplied(num1, num2){
    return num1 * num2;
  }

  function divided(num1, num2){
    return num1 / num2;
  }

  function modulas (num1, num2){
    return num1 % num2;
  }

  function calculator(a, b, operation){
     if(operation === 'add'){
        const result = add(a, b);
        return result;
     }
     else if (operation === 'substrac'){
        const result = substrac(a, b);
        return result;
     }
     else if (operation === 'multiplied'){
        const result = multiplied(a, b);
        return result;
     }
     else if(operation === 'divided'){
        return divided (a, b);
     }
     else if (operation === 'modulas'){
        return modulas (a, b); 
     }

     else{
        return "only add, substrac,multiplied,divided,modulas operation is allowed"
     }
  }

  const result = calculator(5,7, 'multiplied');
  console.log(result);