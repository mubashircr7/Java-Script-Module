 let data;
 data = 0;   // falsy
 data = '0'; //falsy
 data = '';  //truthy
 data = ' '; //truthy
 data = false; // falsy
 data = true;
 data = null;
 data = undefined;
 data = {};
 data = [];
 if(data){
    console.log('truthy value');
 }
 else{
    console.log('Falsy value');
 }


 let price = 22;
 if(price){
    console.log('Price is truthy');
 }
 else(console.log('prie is falsy'));


 let value = 0;
 if(value){
 }