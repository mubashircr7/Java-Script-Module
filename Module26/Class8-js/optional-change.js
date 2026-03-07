 const employee = {
    name: 'mubashir',
    position: 'Software Developer',
    [1]: 'desk one',
    ['home-adress']: '1200/ 206 number road',
    ['salary']: 50000,

    family: {
        father: 'hi',
        mother: 'hello',
        brother: 'wow',

        sister: {
            name: 'nafi',
            // age: 22,
            student: 'class 9'
        },
    },
 }

 const value = employee.name;
 console.log(employee.family?.sister?.age);