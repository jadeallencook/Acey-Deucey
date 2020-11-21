import React from 'react';
import DICE from '../constants/dice';
import './MenuPage.scss';
import firebase from 'firebase/app';
import 'firebase/database';
import Game from '../classes/Game';
import { useHistory } from 'react-router-dom';

const MenuPage = () => {
  const history = useHistory();

  async function createNewGame() {
    const { key } = await firebase.database().ref('/').push(new Game());
    history.push(`/game/${key}`);
  }

  return (
    <div className="Menu">
      <h1>
        {DICE[1]}
        {DICE[2]}
      </h1>
      <button onClick={createNewGame}>Create Game</button>
      <p>OR</p>
      <form>
        <input type="number" placeholder="Enter ID" />
        <input type="submit" value="Join Game" />
      </form>
      <footer>Developed by @jadeallencook</footer>
    </div>
  );
};

export default MenuPage;
