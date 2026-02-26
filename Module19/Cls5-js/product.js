  

  const numbers = [200, 300, 700, 500, 1300];
  const products = [
    {name: 'Shampo', price: 200}, 
    {name: 'Chiruni', price: 300}, 
    {name: 'Shirt', price: 700}, 
    {name: 'Pant', price: 500},
    {name: 'Shoes', price: 1300}
  ]

  function getShoppingTotal(products){
     let total = 0;
     for (const product of products){
        total = total + product.price;
     }
      return total;
  }
  const total = getShoppingTotal(products);
  console.log('Total ajker khosabe: ', total);