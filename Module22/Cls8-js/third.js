  console.log('file connected')

  //get the parent
  const thirdList = document.getElementById('third-list');
  
  // create the child
  const li = document.createElement('ul')
  li.innerText = 'brand new list item';

  thirdList.appendChild(li)