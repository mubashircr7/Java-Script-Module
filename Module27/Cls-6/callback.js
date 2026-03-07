//1. document.getElementById('#btn').addEventListener('click', function(event){  });

//2. addEventListener('click', function(event){});

/*

Callback Function (সহজভাবে)
Callback function হলো এমন একটা function ,
যেটা অন্য একটা function-এর parameter হিসেবে পাঠানো হয়,এবং পরে সেই function থেকে call করা হয়।

অর্থাৎ➡️ Function এর ভিতরে আরেকটা function চালানো।

*/


function settleLife(name, isBCS, marrige, patri){
     if(isBCS){
        marrige(patri);
     }
}

function boloKobul(patri){
    console.log('kobul', patri);
}

settleLife('Tomal', true, boloKobul, 'nari');
 

  