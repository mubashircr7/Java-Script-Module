 

 //create element & set the innerText or innerHTML 
 const newchild = document.createElement('li');
 newchild.innerText = "new born football baby";

 //find the parent where you will at the child

 const playerList = document.getElementById('player-list');


 // append the child to the parent
 playerList.appendChild(newchild)
