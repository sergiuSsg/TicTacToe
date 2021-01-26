import React from "react"
import "../styles.css"


const TopBar = (props) => (
    <div className="topBar">
        <h1>Score</h1>
        <p>X: {props.xWins} O: {props.oWins}</p>
    </div>
)

export default TopBar