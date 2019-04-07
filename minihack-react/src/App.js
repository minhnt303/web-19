import React, { Component } from 'react';
import './App.css';
import CreateGame from './page/CreateGame';
import GameScore from './page/GameScore';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path='/' exact={true} render={() => {
            return (
              <Redirect to='/create-game' />
            )
          }} />
          <Route path='/create-game' component={CreateGame} />
          <Route path='/game/:gameId' component={GameScore} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
