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

 const displayPosts= (posts) => {
    //1. Get The Container & empty the container //
    const postsContainer = document.getElementById('post-container');
    postsContainer.innerHTML = "";


    posts.forEach(post => { 
    //2 Create A Element //
    const postCard = document.createElement("div");
    postCard.innerHTML = `
        <div class="post-card">
           <h2> ${post.title} </h2>
           <p> ${post.body} </p>
        </div> `;

    //3. Add to the container //
    postsContainer.append(postCard)

    });
 }

 loadPost();