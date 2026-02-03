
  const mobile = {
    name: 'samsung',
    color: 'black',
    price: 25000,
    camera: '25MP',
    isNew: true
  }

  // for of ---> array modde used hoy //
  // for in ---> object er modde used hoy //

  for (const prop in mobile){
    // console.log(prop);
    // console.log(mobile[prop])
  }
  const keys = Object.keys(mobile)
  console.log(keys)

  for ( const key of keys){
    console.log(key, ':', mobile[key]);
  }
  