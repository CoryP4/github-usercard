import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// axios.get('https://api.github.com/users/coryp4')
//   .then(res => {
//     const myStuff = document.querySelector('.cards')
//     myStuff.appendChild(cardMaker(res.data))
//   })
//   .catch(drama => {
//     //handle drama
//     console.log(drama)
//   })


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/


/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'coryp4',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
];

followersArray.forEach((follower) => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(res => {
    const cards = document.querySelector('.cards')
    cards.appendChild(cardMaker(res.data))
  })
  .catch(err => {
    console.log(err)
  })
});



// followersArray.forEach(ele => {

// axios.get(ele.data)
//   .then(res => {
//     const myStuff = document.querySelector('.cards')
//     myStuff.appendChild(cardMaker(res.data))
//   })
//   .catch(drama => {
//     //handle drama
//     console.log(drama)
//   })
// })
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardMaker(obj){

  const card = document.createElement('div')
  card.classList.add('card')

  const cardImg = document.createElement('img')
  cardImg.setAttribute('src', obj.avatar_url)
  card.appendChild(cardImg)

  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')
  card.appendChild(cardInfo)

  const nameH3 = document.createElement('h3')
  nameH3.classList.add('name')
  nameH3.textContent = obj.name
  cardInfo.appendChild(nameH3)

  const userP = document.createElement('p')
  userP.classList.add('username')
  userP.textContent = obj.login
  cardInfo.appendChild(userP)

  const loP = document.createElement('p')
  loP.classList.add('location')
  loP.textContent = obj.location
  cardInfo.appendChild(loP)

  const proP = document.createElement('p')
  proP.classList.add('profile')
  proP.textContent = 'profile:'
  cardInfo.appendChild(proP)

  const proLink = document.createElement('a')
  proLink.setAttribute('href', obj.html_url)
  proLink.textContent = obj.html_url
  proP.appendChild(proLink)

  const followersP = document.createElement('p')
  followersP.classList.add('followers')
  followersP.textContent = `Followers: ${obj.followers}`
  cardInfo.appendChild(followersP)

  const followingP = document.createElement('p')
  followingP.classList.add('following')
  followingP.textContent = `Following: ${obj.following}`
  cardInfo.appendChild(followingP)

  const bio = document.createElement('p')
  bio.classList.add('bio')
  bio.textContent = `bio: ${obj.bio}`
  cardInfo.appendChild(bio)

  return card
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
