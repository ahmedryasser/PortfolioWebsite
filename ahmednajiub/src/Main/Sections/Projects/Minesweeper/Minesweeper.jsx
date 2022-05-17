import React, { Fragment, useState, useEffect } from "react";

import "./Minesweeper.scss";

function Minesweeper(props) {
  // Sets the title of the webpage in the tab or browser
  document.title = "Mine sweeper";
  // TODO: Create 3 constants, for width, height, and the number of mines
  // Each should access a corresponding props value
  // Use ternary operators to check if the prop value exists
  const width = props.width;
  const height = props.height;
  const numMines = props.numMines;
  // TODO: Create 3 state variables: the game state, the time elapsed, and the number of flags
  const [gameState, setGameState] = useState(false);
  const [time, setGameTime] = useState(0);
  const [numFlags, setNumFlags] = useState(0);

  // TODO: Create a state variable for the board
  // Fill the board with a object with 3 attributes: nearby, isOpen, and isFlagged

  const [board, setBoard] = useState(
    Array(height * width)
      .fill(null)
      .map(() => ({
        nearby: 0,
        isOpen: false,
        isFlagged: false,
      }))
  );

  // TODO: Function to check if a space is a mine
  function isMine(i) {
    return board[i].isMine;
  }
  // TODO: Function to check if a space is flagged
  function isFlagged(i) {
    return board[i].isFlagged;
  }

  // TODO: Function to check if a space is open

  function isOpen(i) {
    return board[i].isOpen;
  }
  // TODO: Function to get the nearby mine count of a space
  function count(i) {
    return board[i].count;
  }
  // TODO: Function to get all of a space's neighbors
  function neighbors(i) {
    var neighbors = [];
    let topIndex = i - width;
    let bottomIndex = i + width;
    if (bottomIndex < width * height) neighbors.push(bottomIndex);
    if (!(i % width === 0)) {
      neighbors.push(i - 1);
      if (neighbors.includes(topIndex)) neighbors.push(topIndex - 1);
      if (neighbors.includes(bottomIndex)) neighbors.push(bottomIndex - 1);
    }

    if (!(i % width === width - 1)) {
      neighbors.push(i + 1);
      if (neighbors.includes(topIndex)) neighbors.push(topIndex + 1);
      if (neighbors.includes(bottomIndex)) neighbors.push(bottomIndex + 1);
    }
    return neighbors;
  }

  // Top, bottom, left, top left, bottom left, right, top right, bottom right

  // TODO: Function to create a new game board, set all mine locations and nearby counts
  // Create a new board variable and use a "for each" to reset all the attributes
  function createGameBoard() {
    boardReset();
    var avaNum = [];
    for (var i = 0; i < width * height; i++) {
      avaNum[i] = i;
    }
    var nMines = numMines;
    while (nMines !== 0) {
      var num = Math.round(Math.random() * width * height);
      if (avaNum.includes(num)) {
        avaNum.splice(num, 1);
        board[num].isMine = true;
        nMines--;
      }
    }
    for (var i = 0; i < width * height; i++) {
      var neigh = neighbors(i);
      for (var j = 0; j < neigh.length(); j++) {
        board[i].nearby++;
      }
    }
    console.log(board);
  }

  // TODO: Function to start the game
  // Make a new board and set the game state to active
  function startGame() {
    setGameState(true);
  }

  // TODO: Function to reset the game
  // Reset the board, set the game state to inactive, clear the timer, reset the timer and flag count
  function setReset() {
    setGameState(false);
    setGameTime(0);
    setNumFlags(0);
  }
  // TODO: Function to reset the board
  // Create a new board variable, and use a "for each" to reset the arrtibutes
  function boardReset() {
    setBoard(
      Array(height * width)
        .fill(null)
        .map(() => ({
          nearby: 0,
          isOpen: false,
          isFlagged: false,
        }))
    );
  }

  // Handles all user interactions via left click, right click, or spacebar
  function handleClick(e, index) {
    // TODO: If the game is inactive, start the game

    if (e.button === "?") {
      // Right click
      // TODO: Do something
      createGameBoard();
    } else if (e.button === "?") {
      // Left click
      // TODO: Do something
      createGameBoard();
    } else if (e.keyCode === "?") {
      // Spacebar
      // TODO: Do something
      createGameBoard();
    }
  }

  // Opens a space when clicked
  function openSpace(index) {
    // TODO: Guard cases where a space should not open
    if (isOpen(index) || isMine(index)) {
    }
    // TODO: End the game if the space is a mine
    else if (isMine(index)) {
      setReset();
    }
    // TODO: Open the space
    else if (board[index].isOpen()) {
    }

    // TODO: The case where the space has 0 nearby mines
    else if (board[index].nearby() === 0) {
      //nothing
    }
  }

  // TODO: Function to open all of a space's neighbors

  // TODO: Function to flag a space
  // Guard the case where the space cannot be flagged

  // TODO: Function that determines if the neraby count should be displayed in each space

  // TODO: Function to determine each space's class list

  // TODO: Function to check if the user has won the game

  // TODO: A useEffect to set the spacebar listener event
  // Runs every time the 1 state changes

  // TODO: A useEffect to increment the timer
  // Runs every time 1 of 2 states change
  // Use setTimeout and a variable, otherwise you cannot cancel the timer

  // TODO: A useEffect to check if the user has won the game and then updates the game state
  // Runs every time 1 state changes

  return (
    <Fragment>
      <div className={"minesweeper"} style={{ "--board-width": 0 }}>
        {/* A header with the flag count, the reset game button, and the timer */}
        {/* The game board. Add two data attributes for the game state and if the user has won. */}
        {/* Inside the board, each space should have a data attribute for a id, a mouse up event, and a context menu event */}
        <h1 id="numFlags">
          {" "}
          Number of Flags
          <button> Reset Game </button>
          <text id="timer"> </text>
        </h1>
        <text id="game state"> </text>
        <text id="wonORLost"></text>
        <ul id={"board"}>
          {board.map(() => (
            <li> {board}</li>
          ))}
        </ul>

        {createGameBoard()}
      </div>
    </Fragment>
  );
}

export default Minesweeper;
