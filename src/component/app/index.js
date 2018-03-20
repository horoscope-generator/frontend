import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';


class App extends React.Component {
  render() {
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