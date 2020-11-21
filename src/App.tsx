import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import Game from './pages/Game';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Menu />
        </Route>
        <Route path="/game/:uid">
          <Game />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
