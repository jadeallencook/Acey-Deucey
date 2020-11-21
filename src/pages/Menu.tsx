import React from 'react';
import DICE from '../constants/dice';
import './Menu.scss';

const Menu = () => {
  return (
    <div className="Menu">
      <h1>
        {DICE[1]}
        {DICE[2]}
      </h1>
      <button>Create Game</button>
      <p>OR</p>
      <form>
        <input type="number" placeholder="Enter ID" />
        <input type="submit" value="Join Game" />
      </form>
      <footer>Developed by @jadeallencook</footer>
    </div>
  );
};

export default Menu;
