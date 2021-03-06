import React from 'react'
import Square from './Square';

const styles = {
    border: '4px solid #272836',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

const Board = ({ squares, onClick}) => (
    <div style={styles}>
        {squares.map((square, index) => {
            return (<Square key={index} value={square} onClick={() => onClick(index)} />)
        })}
    </div>
)

export default Board;