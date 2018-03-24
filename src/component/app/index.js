import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
const superagent = require('superagent');
const __API_URL__ = process.env.API_URL;


class App extends React.Component {
  render() {

    superagent.get(`${__API_URL__}/lyrics`)
      .then(songObject => {
        console.log('songObject', songObject);
        // let container = document.createElement('div');
        // container.textContent = data.text;
        // document.body.appendChild(container);
      });

    return(
      <div className='app'>
        <BrowserRouter>
          <div>
            <header>
              <h1>Horoscope Generator</h1>
              <nav>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                </ul>
              </nav>
            </header>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;