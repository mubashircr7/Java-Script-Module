 

 const loadData=() =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    // promise of response
      .then(response => response.json())
    // promise of JSON
      .then(json => console.log(json))
      };
  
 const loadPost=() =>{
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(json =>{ 
      console.log(json)
      displayPosts(json)})
 };




// array of object check
    const displayPost = (posts) => {
      //1. get the container
      const postContainer = document.getElementById('post-container');
      postContainer.innerHTML = "";
      // console.log(postContainer);

      posts.forEach((post) => {
        console.log(post.title)

      //2. Creat Html Element 
      const li = document.createElement('li');
      li.innerText = post.title;
      console.log(li)

       //3. ADD li into Container
      postContainer.appendChild(li)
      });
    }
    






 // another way to looping //
//  const displayPost=(posts) => {
//   posts.forEach((post) => {
//     console.log(post)
//   });
//  };

 // others way  //
//  const displayPost = (posts) => {
//    for(let i = 0; i < posts.length; i++;){
//     console.log(posts[i])
//    }
//  }

  //  const displayPost = (posts) => {
  //   for (let post of posts){
  //     console.log(post)
  //   }
  //  }




