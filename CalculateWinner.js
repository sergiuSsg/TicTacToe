/*checks all combinations from lines array and if any of them has all the
3 elements the same, it returns the same element as the winner (X or O),
otherwise returns null*/

export function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

/* //example:

const squares = [
    "O", null, null,
    null, "O", "X",
    'O', 'X', 'O'
];
*/
