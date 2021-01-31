import React from "react"
import "../styles.css"

const TopBar = ({ xWins, oWins }) => (
    <div className="topBar">
        <h1>Score</h1>
        <h3>X: {xWins} &emsp;--&emsp; O: {oWins}</h3>
    </div>
)

export default TopBar
