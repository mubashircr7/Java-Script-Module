  
   const products = [
    {name: 'Shampo', price: 200, quantity: 5}, 
    {name: 'Chiruni', price: 300, quantity: 4}, 
    {name: 'Shirt', price: 700, quantity: 2}, 
    {name: 'Pant', price: 500, quantity: 3}, 
    {name: 'Shoes', price: 1300, quantity: 5}
  ]

  function cartTotal(products){
     let total = 0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
    
  }
  const shoppingCost = cartTotal(products);
  console.log(shoppingCost);