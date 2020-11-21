# Acey Deucey

Acey-deucey is a variant of backgammon believed to be rooted in the Middle East, Greece, or Turkey, where there were variants in which the game started with pieces off the board. Compared to standard backgammon, acey-deucey is more like a race than a strategy game. It features a differing starting position, opening play, and rules for the endgame. Because pieces may be retained in one's opponent's home board, the game offers substantial opportunities for backgame play.

## Glossary

- **Checker** - One of the fifteen markers, all of one color, that a player moves around the board according to rolls of the dice.
- **Dice** - Two small cubes, each with faces marked with spots (pips (1)) representing the numbers 1 to 6.
- **Home** - The quadrant containing your one-point through six-point. It is the last quadrant your checkers move to before they are borne off.
- **Point** - One of the twenty-four narrow triangles, twelve on each side, of a backgammon board, where the players' checkers sit.

https://www.bkgm.com/glossary.html

## Rules

1. Both players start with 15 pieces in the ready position.
1. Each player rolls one dye to see who plays first.
1. If a player rolls doubles, then they can move 4 pieces.
1. If a player rolls acey deucey, they they move 1 & 2 plus any choosen double.
1. You cannot start moving players around the board until all 15 pieces are out.
1. All pieces must be in the home board before a player can start removing pieces.
1. If only one piece is on a spot, another piece can send it to jail.
1. An exact roll is required to remove a piece.
1. A player can not move a piece after all pieces are in within the home board.

## Architecture

New games are created with a UID on the root of the database and then you are able to access that game by passing the UID in the URL:

```
/#/game/__uid__
```

After a game is loaded from the database, we then pass the result to the useGame hook that returns:

```
{ board, player1, player2, roll, isPlayer1Turn }
```
