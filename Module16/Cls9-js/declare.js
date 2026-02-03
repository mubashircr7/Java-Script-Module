 // declear object //


 
//  const pencil = {brand: 'era' color: 'white', price: 10}

const pen = {brand: 'king', color: 'red', price: 50 }
const pencil = new Object(pen)
console.log(pencil)
const rubber = Object.create({})
console.log(rubber)