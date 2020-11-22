import React from 'react';
import './Board.scss';

const BoardComponent = (props: { board: Number[] }) => {
  const { board } = props;
  console.log(board);
  return (
    <div className="Board">
      <div>
        {board.slice(-12).map((number, index) => {
          return (
            <div key={index}>
              <span>{index + 1}</span>
              <div>
                <div></div>
                <div></div>
                <div></div>
                <div>+2</div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {board
          .slice(-12)
          .reverse()
          .map((number, index) => {
            return (
              <div key={index}>
                <div>
                  <div>+2</div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <span>{24 - index}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BoardComponent;
