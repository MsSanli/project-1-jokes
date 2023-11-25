// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getJoke from '../api/promises';
import renderToDom from '../utils/sample_data/renderToDom';

const init = () => {
  let showSetup = true;

  document.querySelector('#app').innerHTML = `
    <button class="btn btn-danger" id="click-me">Get a Joke!</button><br />
    <div id='joke-setup'></div>
    <div id='joke-punchline'></div>
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  const getPunchText = () => {
    const button = document.querySelector('#click-me');
    button.textContent = showSetup ? 'Get Another Joke' : 'Get Punchline';
  };

  document.querySelector('#click-me').addEventListener('click', () => {
    getJoke().then((joke) => {
      if (showSetup) {
        renderToDom('#joke-setup', joke.setup);
      } else {
        renderToDom('#joke-punchline', joke.delivery);
      }
      //! negates showSetup
      showSetup = !showSetup;

      // change text on second click
      getPunchText();
    });
  });

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
