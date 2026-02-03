  // Object //

// nasted object //

    const school = {
        name: 'vnc',
        adress: 'dakha',
        class: [6,7,8,9,10],
        event: ['science fair', 'bijoy dibos', '21 fevruary'],
        uniqe: {
            color: 'blue',
            result: {
               gpa: 5,
               merit: 'top'
            }
        }

    }
    // console.log(school)
    // console.log(school.uniqe.color)   // dot diye change //
    // console.log(school.uniqe.result.merit)
    //  school.uniqe.result.merit = 'top top top most'
    // console.log(school.uniqe.result.merit)

   // console.log(school['uniqe'].result.merit)  // bracket diye o value khuje ber kora & change kora jay //


    // console.log(school.event)
    // school.event = ['science fair', '16december', '21 fevruary']  // ai babe kora jay change //
    // console.log(school.event) 


    // console.log(school.event)
    // school.event[1] = '16 december';  // index number dara acces kore value change kora jay//
    // console.log(school.event)









    // delete property in object //

    console.log(school);
    delete school.adress;
    console.log(school)