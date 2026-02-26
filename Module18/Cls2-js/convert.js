 /**
  * 1. 12 inch 1 feet.
  * 2.  
  * 
  */

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
    const shuvoHeight = inchToFeet(68); 
    console.log(shuvoHeight);


    // ignore this //
 function inchToFeet2(inch){
        const feetFraction = inch /12;
        const feetNumber = parseInt(feetFraction);
        const inchRemaining = inch %12;
        const result = feetNumber + ' ft ' + inchRemaining + 'inch.'; 
        return result;
 }
    const shuvoHeight2 = inchToFeet2(77);
    console.log(shuvoHeight2);




// miles to kilomiters //

// function mileToKilomiter(mile){
//     const kilo = mile * 1.60934;
//     return kilo;
// }

function kmToMile(kilo){
    const mile = kilo * .6;
    return mile;
}
    