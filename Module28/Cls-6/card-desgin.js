 

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



//{
// "userId": 1,
// "id": 1,
// "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit 
// molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
// },

const displayPosts = (posts) => {
  //1. GET The Container & Empty The Container //
  const postsContainer = document.getElementById('post-container');
  postsContainer.innerHTML = "";
  console.log(postsContainer);


  posts.forEach(post => {
  //2. Creat HTML Element //
  const postCard = document.createElement('div');
  postCard.innerHTML = `
          <div class="post-card">
           <h2>This is a Sample Title</h2>
           <p> Cum ea illo odio sunt et neque, numquam saepe dolorau  
               am nulla laboriosam dolorem, excepturi porro eius lau
               am nulla laboriosam dolorem, excepturi porro eius lau
               am nulla laboriosam dolorem, excepturi porro eius lau see.
            </p>
          </div> `;

  //dianamic er jonno used hobe --title & para te
  // <h2> ${posts.title} heloo</h2>
  // <p>  ${posts.body} </p>

  //3. ADD To The Container //
  postsContainer.append(postCard);

  });
}

 loadPost();

// // array of object check
//     const displayPost = (posts) => {
//       //1. get the container
//       const postContainer = document.getElementById('post-container');
//       postContainer.innerHTML = "";
//       console.log(postContainer);

//       posts.forEach((post) => {
//         console.log(post.title)

//       //2. Creat Html Element 
//       const li = document.createElement('li');
//       li.innerText = post.title;
//       console.log(li)

//        //3. ADD li into Container
//       postContainer.appendChild(li)

//       });
//     }
    