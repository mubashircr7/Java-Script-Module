
//1. parent Node
const playersContainer = document.getElementById('player-container')
console.log(playersContainer)

//2. create child Node 

const placesSection = document.createElement('section')

//create h1
const h1 = document.createElement('h1');
h1.innerText = 'players in the words'
placesSection.appendChild(h1)

const ul = document.createElement('ul')

const li1 = document.createElement('li')
li1.innerText = 'bandharban'
ul.appendChild(li1)
placesSection.appendChild(ul)

const li2 = document.createElement('ul')
li2.innerText = 'sundarban'
ul.appendChild(li2)
placesSection.appendChild(ul)



//3. append placeSection to the playersContainer
playersContainer.appendChild(placesSection)









//easy to creat html //
const booksStation = document.createElement('section')
booksStation.innerHTML = `
<h1>book i need to Read </h1>
<ul>
<li> English </li>
<li> Bangla </li>
<li> Arbi </li> 
</ul>`