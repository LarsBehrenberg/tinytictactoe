import React, { useState }from 'react'
import Board from './Board'
import { calculateWinner } from '../helpers'

const styles = {
    width: '100vw',
    margin: '20px auto',
    textAlign: 'center'
}

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]
        // If user clicks on occupied square or game won then nothing happens
        if (winner || boardCopy[index]) return;

        // Put an X or O in the clicked square
        boardCopy[index] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXisNext(!xIsNext)
    }

    const jumpTo = () => {
        
    }

    const renderMoves = () => {
        return (
            <button class="learn-more reset" onClick={() => setBoard(Array(9).fill(null))}>
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">Reset Game</span>
            </button>
        )
    }


    return (
        <div style={styles}>
            <p style={{color: "#272836"}}>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
            
            <Board onClick={handleClick} squares={board}/>
            
            {renderMoves()}
        </div>
    )
}

export default Game;