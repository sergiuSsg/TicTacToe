import React from "react"
import Square from "./Square"

const Board = ({ itemsArray, handleClick }) => (
    <div className="board" >
        {itemsArray.map((arrElement, index) => (
            <Square key={index} value={arrElement} handleClick={() => handleClick(index)} />
        ))}
    </div>
)

export default Board
