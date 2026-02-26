console.log('file- Connected');
// option 2 handle event 
 function makeYellow(){
            document.body.style.backgroundColor = 'Yellow';
        }
        function makeRed(){
            document.body.style.backgroundColor = 'Red';
        }
        function makeDark(){
            document.body.style.backgroundColor = 'gray';
        }


//another way to event handle 
  const btnMakeBlue = document.getElementById('btn-make-blue');
        // console.log(btnMakeBlue);
        btnMakeBlue.onclick = function makeBlue(){
            document.body.style.backgroundColor = 'blue';
        }


// complex way to event  handle
 const btnMakePurple = document.getElementById('btn-make-purple');
    //   console.log(btnMakePurple)
    btnMakePurple.onclick = makePurple;
     function makePurple(){
        document.body.style.backgroundColor = 'purple';
     }
