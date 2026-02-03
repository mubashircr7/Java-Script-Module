    // String Operation in JavaScript //
    // Slice,split,join //

    const address = 'andorKilla';
    const part = address.slice(2,5);
    console.log(part);


    const sentence = 'i am a good hardworking person';
    // console.log(sentence.split(' '));
    // console.log(sentence.split('a'));

    const friendsStr = 'Rahim, Mahim, Sahim, Dahim, Lahim';
    const friends = friendsStr.split(',');
    console.log(friends);
    const realFriends = ['Rahim', ' Mahim', ' Sahim', ' Dahim', ' Lahim']
    console.log(realFriends.join())
    console.log(realFriends.join('|'));
    console.log(realFriends.join('-'))
