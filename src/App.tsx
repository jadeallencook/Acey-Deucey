import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import GamePage from './pages/GamePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MenuPage />
        </Route>
        <Route path="/game/:uid">
          <GamePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
