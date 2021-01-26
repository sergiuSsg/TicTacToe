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


    function handleClick(index) {
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

    useEffect(() => {
        if (winner) setModalOpen(true)
        gameWon()
    }, [winner])

    const renderMoves = () => {
        return <button onClick={() => resetGame()} >
            Restart Game
        </button>
    }

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























































/* with history but not finished all */


/*
import React, { useState } from "react"
import { calculateWinner } from "../helpers"
import Board from "./Board"


const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXisNext] = useState(true)
    const winner = calculateWinner(history[stepNumber])


    const handleClick = i => {
        const timeInHistory = history.slice(0, stepNumber + 1)
        const current = timeInHistory[stepNumber]
        const squares = [...current]

        // if user clicks an occupied square or if game is won return
        if (winner || boardCopy[i]) return;
        //if (winner || boardCopy(i)]) return
        //put an X or O in the clicked square
        squares[i] = xIsNext ? "X" : "O";
        setHistory([...timeInHistory, squares])
        setXisNext(!xIsNext)
    }
    const jumpTo = () => {

    }

    const renderMoves = () => {
        return <button onClick={() => setBoard(Array(9).fill(null))} >
            Start Game
        </button>
    }

    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div className="underBoard" >
                <p>{winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}</p>
                {renderMoves()}
            </div>

        </>

    )
}

export default Game



*/















































/*



*/