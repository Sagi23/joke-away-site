const newJokeContainer = document.querySelector('.container-new-joke');
const form = document.querySelector('form');
let randJoke = document.querySelector('.rand-joke');
const btnsLikes = document.querySelector('.container-new-joke-btns');
const btnLike = document.querySelector('#like');
const listLike = document.querySelector('.liked');

const getJoke = async () => {
    const headers = { headers: { Accept: 'application/json' } }
    const res = await axios.get('https://icanhazdadjoke.com/', headers );
    return res.data.joke;
}


form.addEventListener('submit', async function(e) {
    e.preventDefault();
    let newJoke = await getJoke();
    randJoke.innerText = '';
    randJoke.innerText = newJoke;
    newJokeContainer.append(randJoke)
    btnsLikes.removeAttribute('class', 'show')
})

btnLike.addEventListener('click', function(){
    let newLiked = randJoke.innerText;
    let newLi = document.createElement('li');
    newLi.setAttribute('class', 'spaceing')
    newLi.append(newLiked);
    listLike.append(newLi);
})