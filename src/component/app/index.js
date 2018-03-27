import './_app.scss';
import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
const superagent = require('superagent');
const __API_URL__ = process.env.API_URL;

class App extends React.Component {
  render() {

    let data;
    let dataArray;

    superagent.get(`${__API_URL__}/lyrics`)
      .then(songObject => {
        data = JSON.parse(songObject.text).result[0].lyrics;
        dataArray = data.split(' ');
        console.log('data', data);
        console.log('dataArray', dataArray);
        // let container = document.createElement('div');
        // container.textContent = dataArray;
        // document.body.appendChild(container);

        let randomIndex1 = Math.floor(Math.random() * dataArray.length);
        let randomIndex2 = Math.floor(Math.random() * dataArray.length);
        
        let sign = 'Libra';
        let word1 = dataArray[randomIndex1];
        let word2 = dataArray[randomIndex2];
        console.log('word1', word1);
        console.log('word2', word2);
        
        
        let horoscope = `Assessment of others' ideas may be a main focus today, ${sign}. Group ${word1} could require your intellectual input. A ${word2} could come to you with an idea for a project of some kind. Writing or speaking may be involved in some way. Your friend isn't in a very practical frame of mind, so don't be surprised if the ideas don't seem very workable right now. Don't be discouraging, however. Your friend may surprise you!`;
        
        let container = document.createElement('div');
        container.textContent = horoscope;
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