import React, { useEffect } from 'react';
import useGame from '../hooks/useGame';
import firebase from 'firebase/app';
import 'firebase/database';

const GamePage = () => {
  const uid = window.location.hash.split('/')[2];
  const { board, player1, player2, roll, isPlayer1Turn } = useGame();
  useEffect(() => {
    firebase
      .database()
      .ref(`/${uid}`)
      .on('value', (snapshot) => {
        console.log(snapshot.val());
      });
  }, []);
  console.log({ uid, board, player1, player2, roll, isPlayer1Turn });
  return <div>Game</div>;
};

export default GamePage;
