 
// //  const fastName = 'kamruzzaman babul mia arat ali eskendar ahmed rony khan jony';
// //  const lastName = "faruk kasem oni";
// //  const aboutMe = ` my name is ${fastName}`;
// //  const jog = `my full name is ${fastName} ${lastName}`;
// //  console.log(jog);
// // //  console.log(aboutMe);

// const fastName = 'abir';
// const lastName = 'khan';
// const full = fastName + ' ' + lastName;  // old in js //
// // console.log(full);



// const fullName = `${fastName} ${lastName}`;  
// // new in js with es6;  [(``) = atake bola hoy backtick, 
// // multiline string, tamplate string,dynamic string ]
// console.log(fullName);
 
// const giveMe = `give me money ${(2+8)*5+ 5}`;
// console.log(giveMe);


function getCardHTML(){
   const div = ` 
   <div class="card">
        <h2>${fullName2}</h2>
        <p> price: $ ${price} </p>
        <p> ${description} </p>

    </div>

   `;
   console.log(div);
}

getCardHTML('iphone 17', 'This is latest iphone model', 999);
