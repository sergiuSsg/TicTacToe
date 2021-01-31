import React from "react"
import "../styles.css"

const BottomBar = ({ turn, resetGame }) => (
    <div className="underBoard" >
        <h2>{"Next Player: " + turn.toString()}</h2>
        <button onClick={() => resetGame()} className="generic-button" >
            Restart Game
        </button>
    </div>
)

export default BottomBar