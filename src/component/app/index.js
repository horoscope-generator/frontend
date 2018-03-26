import './_app.scss';
import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
const superagent = require('superagent');
const __API_URL__ = process.env.API_URL;

class App extends React.Component {
  render() {

    superagent.get(`${__API_URL__}/lyrics`)
      .then(songObject => {
        console.log('songObject', JSON.parse(songObject.text).result[0].album);
        let data = JSON.parse(songObject.text).result[0].lyrics;
        let container = document.createElement('div');
        container.textContent = data;
        document.body.appendChild(container);
      });
      

    return(
      <div className='app'>
        <BrowserRouter>
          <div>
            <header>
              <h1>Horoscope Generator!</h1>
              <nav>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                </ul>
              </nav>
            </header>
            <div id='horoscope-container'>
            Horoscope Container
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;