//    // uppercase : ABCD
//    // lowercase: abcd
//   const school = 'Raj Uk Uttora Model school';
// 
  const book = 'Chemistry';
  const subject = 'chemistry';
//   console.log(school);
//   console.log(school.toLowerCase());
//   console.log(school.toUpperCase());




  if(subject.toLowerCase() === book.toLowerCase()){   // kono string ke compare korte lowerCase() used kora hoy //
    console.log('amra exam a fataya dibo');
  }
  else{
    console.log('huday pata ultabo');
  }


  const water = 'drink'; 
  const liquid = '    drink';

  if( water.trim() === liquid.trim()){   // dui side a space removed korte .trim() used kora hoy//
    console.log('pani er upor nam jibon');
  }
  else{
    console.log('pani sara moron');
  }