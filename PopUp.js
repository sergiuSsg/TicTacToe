import React from "react"
import Modal from "react-modal"
import "../styles.css"

Modal.setAppElement("#root")

export default function PopUp(props) {

    function modalStart() {
        return (
            <Modal
                isOpen={props.modalOpen}
                className="popup"
            >
                <div className="grid-container">
                    <h3 className="title">Tic Tac Toe</h3>
                    <div className="selectPlayer">Select Player</div>
                    <button
                        className="x"
                        onClick={() => {
                            props.setTurn("X")
                            props.setModalOpen(false)
                        }}
                    >X</button>
                    <button
                        className="o"
                        onClick={() => {
                            props.setTurn("O")
                            props.setModalOpen(false)
                        }}
                    >O</button>
                </div>
            </Modal >
        )
    }

    function modalEnd() {
        return (
            <Modal
                isOpen={props.modalOpen}
                className="popup"
            >
                <div className="grid-container">
                    <h3 className="endWinner">{props.winner} won</h3>

                    <div className="continueButton">
                        <button onClick={() => {
                            props.startGame()
                            props.setModalOpen(false)

                        }}>Continue</button>
                    </div>
                    <div className="resetButton">
                        <button onClick={() => {
                            props.resetGame()
                            props.setModalOpen(false)
                        }}>Reset Score</button>
                    </div>
                </div>
            </Modal >
        )
    }

    return props.winner ? modalEnd() : modalStart()
} 