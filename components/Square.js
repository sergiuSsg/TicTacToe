import React from "react"
import "../styles.css"

const Square = ({ handleClick, value }) => (
    <button className="square" onClick={handleClick}>
        {value}
    </button>
)

export default Square
