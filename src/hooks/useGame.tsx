import { useState } from 'react';

interface Player {
  ready: Number;
  jail: Number;
  home: Number;
}

const temp: Player = {
  ready: 15,
  jail: 0,
  home: 0,
};

const useGame = () => {
  const [board, setBoard] = useState(new Array(24).fill(0));
  const [player1, setPlayer1] = useState({ ...temp });
  const [player2, setPlayer2] = useState({ ...temp });
  const [roll, setRoll] = useState([1, 2]);
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
  return { board, player1, player2, roll, isPlayer1Turn };
};

export default useGame;
