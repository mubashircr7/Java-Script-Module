   
   const  phones = [
    {name: 'Sumsung', price: 40000, camera: '48mp', color: 'black'},
    {name: 'Itel', price: 10000, camera: '108mp', color: 'silver'},
    {name: 'Realme', price: 20000, camera: '32mp', color: 'gold'},
    {name: 'Iphone', price: 120000, camera: '50mp', color: 'lightblue'},
    {name: 'Vivo', price: 15000, camera: '20mp', color: 'mad-black'},
    {name: 'Appo', price: 80000, camera: '80mp', color: 'white'},
   ]

   function getCheapestPhone(phones){
       let min = phones[0];
       for(const phone of phones){  
        if(phone.price < min.price){
            min = phone
        }
       }
       return min; 
   }

   const cheap = getCheapestPhone(phones);
   console.log('The Cheapest Phone is: ', cheap);

