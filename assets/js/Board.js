export default function createBoard(rows)
{
    let board = []

    for (let i=0;i<rows;i++) {
        board[i] = [];
     }
   
     return board;
}