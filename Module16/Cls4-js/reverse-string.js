//    // Reverse -String //
//    let reverse = '';

//    const sentence = 'I am learning Web Dev.';
//    for (const letter of sentence){
//     // console.log(letter);
//     reverse = letter + reverse;
//    }
//    console.log(reverse);




// reverse 

//web--
//bew

//donal --
//d
//od
//nod
//anod
//lanod

          // for loop reverse another way //
let rev = '';
 const sentence = 'I am learning Web Dev.';
for (let i = 0; i < sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];

    rev = letter + rev;
}
console.log(rev);



// shortcut way to reverse string //

const reversed = sentence.split('').reverse().join('');
console.log(reversed);




