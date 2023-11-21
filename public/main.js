// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const jokeEndpoint = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart';
const setup = [];
const punchline = [];

const getRequest = new Promise((resolve, reject) => {
  fetch(jokeEndpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

console.warn(getRequest);

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Welcome! to Joke-Generator</h1>
    <button class="btn btn-danger" id="getJoke">Get a Joke!</button><br />
    <hr />
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  const init2 = () => {
    document.querySelector('#app').innerHTML = `
      <h1>Welcome! to Joke-Generator</h1>
      <button class="btn btn-danger" id="getPunchline">Get Punchline!</button><br />
      <hr />
      <h3>${setup}</h3>
    `;
  };

  const init3 = () => {
    document.querySelector('#app').innerHTML = `
      <h1>Welcome! to Joke-Generator</h1>
      <button class="btn btn-danger" id="getAnotherJoke">Get Another Joke!</button><br />
      <hr />
      <h3>${setup}</h3>
      <h3>${punchline}</h3>
    `;
  };

  document
    .querySelector('#getJoke')
    .addEventListener('click', () => {
      setup.push(getRequest.then());
      return init2();
    });

  document
    .querySelector('#getPunchline')
    .addEventListener('click', () => {
      punchline.push(getRequest.then());
      return init3();
    });

  document
    .querySelector('#getAnotherJoke')
    .addEventListener('click', () => {
      setup.push(getRequest.then());
      return init2();
    });
  // () => console.warn('You clicked that button!')

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
