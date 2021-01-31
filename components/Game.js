import React, { useState, useEffect } from "react"
import { calculateWinner } from "../CalculateWinner"
import Board from "./Board"
import PopUp from "./PopUp"
import TopBar from "./TopBar"
import BottomBar from "./BottomBar"

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [modalOpen, setModalOpen] = useState(true)
    const [turn, setTurn] = useState("X")
    const [xWins, setXwins] = useState(0)
    const [oWins, setOwins] = useState(0)
    const winner = calculateWinner(board);
    const draw = (board.every(elem => elem !== null));

    const handleClick = (index) => {
        const boardCopy = [...board]
        if (winner || boardCopy[index]) return
        boardCopy[index] = turn;
        setBoard(boardCopy)
        setTurn((turn) => turn === "X" ? "O" : "X")
    }

    const resetGame = () => {
        setModalOpen(true)
        setXwins(0)
        setOwins(0)
        setBoard(Array(9).fill(null))
    }

    const startGame = () => {
        setModalOpen(true)
        if (board.every(elem => elem === null)) return
        setBoard(Array(9).fill(null))
    }

    useEffect(() => {
        if (winner) setModalOpen(true)
        if (winner === "X") {
            setXwins((wins) => wins + 1)
        } else if (winner === "O") {
            setOwins((wins) => wins + 1)
        }
    }, [winner])

    useEffect(() => {
        if (draw) setModalOpen(true)
    }, [draw])

    return (
        <>
            <PopUp
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                startGame={startGame}
                resetGame={resetGame}
                setTurn={setTurn}
                xWins={xWins}
                oWins={oWins}
                winner={winner}
                draw={draw}
            />
            <TopBar xWins={xWins} oWins={oWins} />
            <Board itemsArray={board} handleClick={handleClick} />
            <BottomBar resetGame={resetGame} turn={turn} />
        </>
    )
}

export default Game
