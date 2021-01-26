import React from "react"
import Square from "./Square"

const Board = ({ itemsArray, onClick }) => {
    return (
        <div className="board" >
            {itemsArray.map((square, index) => (
                <Square key={index} value={square} onClick={() => onClick(index)} />
            ))}
        </div>
    )
}

export default Board