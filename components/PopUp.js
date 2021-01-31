import React from "react"
import Modal from "react-modal"
import "../styles.css"

Modal.setAppElement("#root")

export default function PopUp(props) {
    const {
        modalOpen,
        setModalOpen,
        startGame,
        resetGame,
        setTurn,
        xWins,
        oWins,
        winner,
        draw
    } = props

    function modalStart() {
        return (
            <Modal isOpen={modalOpen} className="popup">
                <div className="grid-container">
                    <h3 className="title">Tic Tac Toe</h3>
                    <h4 className="selectPlayer">Select Player</h4>
                    <button
                        className="x"
                        onClick={() => {
                            setTurn("X")
                            setModalOpen(false)
                        }}
                    >X</button>
                    <button
                        className="o"
                        onClick={() => {
                            setTurn("O")
                            setModalOpen(false)
                        }}
                    >O</button>
                </div>
            </Modal >
        )
    }

    function modalWin() {
        return (
            <Modal isOpen={modalOpen} className="popup">
                <div className="grid-container">
                    <h3 className="endWinner">{winner} WON!</h3>
                    <h4 className="scoreEnd">X:&ensp;{xWins}&emsp;--&emsp;O:&ensp;{oWins}</h4>
                    <div className="continueButton">
                        <button onClick={() => {
                            startGame()
                            setModalOpen(false)
                        }} className="generic-button">Continue</button>
                    </div>
                    <div className="resetButton">
                        <button onClick={() => {
                            resetGame()
                            setModalOpen(false)
                        }} className="generic-button">Restart Game</button>
                    </div>
                </div>
            </Modal >
        )
    }

    function modalDraw() {
        return (
            <Modal isOpen={modalOpen} className="popup">
                <div className="grid-container">
                    <h3 className="endWinner">DRAW!</h3>
                    <h4 className="scoreEnd">X:&ensp;{xWins}&emsp;--&emsp;O:&ensp;{oWins}</h4>
                    <div className="continueButton">
                        <button onClick={() => {
                            startGame()
                            setModalOpen(false)
                        }} className="generic-button">Continue</button>
                    </div>
                    <div className="resetButton">
                        <button onClick={() => {
                            resetGame()
                            setModalOpen(false)
                        }} className="generic-button">Restart Game</button>
                    </div>
                </div>
            </Modal >
        )
    }

    return winner ? modalWin() : draw ? modalDraw() : modalStart()
} 
