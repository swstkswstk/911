const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
let currentJokes = [];
let currentIndex = 0;

generateJoke()

jokeBtn.addEventListener('click', () => {
  if (currentJokes.length > 0) {
    currentIndex = (currentIndex + 1) % currentJokes.length;
    displayJoke(currentJokes[currentIndex])
  }
  else {
    generateJoke()
  }
})

async function generateJoke() {
  fetch('https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10').then((res) => res.json()).then((data) => {
    console.log(data);
    currentJokes = data.jokes;
    currentIndex = 0;
    displayJoke(currentJokes[currentIndex])
  })
}

function displayJoke(joke) {

  if (joke.type === 'single') {
    jokeEl.innerHTML = `${joke.joke}`
  }
  else {
    jokeEl.innerHTML = `${joke.setup} <br>why↓<div class="blury"><span> ${joke.delivery}</span></div>`
  }

}
