const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

// Membuat elemen dari getJokes
const addJoke = async () => {
  const jokeText = await getJokes();
  const newLI = document.createElement('LI');
  newLI.append(jokeText);
  jokes.append(newLI);
}

const getJokes = async () => {
  try {
    // Menyisipkan data headers saat request
    const config  = {
      headers: {
        Accept: 'application/json',
      },
    };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return (res.data.joke);
  } catch (error) {
    return "No Jokes Available!";
  }
};

button.addEventListener('click', addJoke);