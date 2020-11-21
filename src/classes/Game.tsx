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

export default class Game {
  board: Number[];
  turn: Boolean;
  p1: Player;
  p2: Player;
  constructor() {
    this.board = new Array(24).fill(0);
    this.turn = false;
    this.p1 = { ...temp };
    this.p2 = { ...temp };
  }
}
