import React, {Fragment, useState, useEffect} from "react";

import "./Minesweeper.css";

function Minesweeper() {
    return (
      <Fragment>
        <div id={"Minesweeper"}>
            <header>
                <p> # of Flags</p>
                <button onClick={() => resetGame()}>Restart</button>
                <p> Time</p>
    
            </header>
            <div className = {"board"}>
                {board.map(() =>(
                    <button> Symbol</button>
                ))}
            </div>
        </div>
      </Fragment>
    );
  }

function Minesweeper(props){
    document.title= "Mine sweeper";
    const width= props.width;
    const height= props.height; 
    const numMines= props.numMines;
    
    const [gameState, setGameState] = useState();
    const [time, setGameTime] = useState();
    const [numFlags, setNumFlags] = useState();

    
    const [board, setBoard] =  useState(
        Array(height * width)
            .fill(null)
            .map(() =>({
                nearby:0,
                isOpen: false,
                isFlagged: false,
                isMine: false,
            }))
    );
    function isMine(){
        return board.isMine;
    }
    function isFlagged(){
        return board.isFlagged;
    }
}