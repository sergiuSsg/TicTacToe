import React, { useState, useEffect } from "react"
import { calculateWinner } from "../helpers"
import Board from "./Board"
import PopUp from "./PopUp"
import TopBar from "./TopBar"


const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [modalOpen, setModalOpen] = useState(true)

    const [turn, setTurn] = useState("X")
    const [xWins, setXwins] = useState(0)
    const [oWins, setOwins] = useState(0)
    //const [chooseX, setChooseX] = useState(false)
    //const [chooseO, setChooseO] = useState(false)
    const winner = calculateWinner(board);
    const draw = (board.every(elem => elem !== null));


    const handleClick = (index) => {
        const boardCopy = [...board]
        if (winner || boardCopy[index]) return
        //boardCopy[index] = xTurn ? "X" : "O";
        boardCopy[index] = turn;
        setBoard(boardCopy)
        //setXturn(!xTurn)
        setTurn((turn) => turn === "X" ? "O" : "X")
    }

    const resetGame = () => {
        setXwins(0)
        setOwins(0)
        setBoard(Array(9).fill(null))
    }

    const startGame = () => {
        setModalOpen(true)
        if (board.every(elem => elem === null)) return
        setBoard(Array(9).fill(null))
    }

    const gameWon = () => {
        if (winner === "X") {
            setXwins((wins) => wins + 1)
        } else if (winner === "O") {
            setOwins((wins) => wins + 1)
        }
    }

    const renderMoves = () => {
        return <button onClick={() => resetGame()} >
            Restart Game
        </button>
    }
    
    useEffect(() => {
        if (winner) setModalOpen(true)
        gameWon()
    }, [winner])

    return (
        <>
            <PopUp
                startGame={startGame}
                setTurn={setTurn}
                resetGame={resetGame}
                turn={turn}
                setModalOpen={setModalOpen}
                modalOpen={modalOpen}
                winner={winner}
            />
            <TopBar xWins={xWins} oWins={oWins} />
            <Board itemsArray={board} onClick={handleClick} />

            <div className="underBoard" >
                <p>{winner ? "Winner: " + winner : draw ? "Draw!!" : "Game in Progress..."}</p>
                <p>{"Next Player: " + turn.toString()}</p>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game
