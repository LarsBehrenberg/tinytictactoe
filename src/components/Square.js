import React from "react";

const styles = {
    background: 'white',
    border: '2px solid #272836',
    borderCollapse: 'none',
    fontSize: '3em',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
    color: '#272836'
}

const Square = ({ onClick, value }) => <button onClick={onClick} style={styles}>{value}</button>;

export default Square;
