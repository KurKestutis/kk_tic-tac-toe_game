import React, {useState} from 'react';
import { calculateWinner } from '../helper';
import Board from './Board';


const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);


    const handleClick = i => {
        const boardCopy = [...board] // '...' spread operator
        // If user click an occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        // Put an X or an 0 in the clicked square
        boardCopy[i] = xIsNext ? 'X' : '0';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const jumpTo = () => {

    }

    const renderMoves = () => {
        
    }

    return (
        <Board squares={board} onclick={handleClick}/>
    )
}

export default Game;