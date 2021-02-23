
export default function Checklengthword(board,word,sens){

    if(word.length == 0 || word.length > 16 || word == null){
        alert("erreur!!!")
    }else{
        console.log(word)
        if(sens == "LtoR")
        {
            for (let index = 0; index < word.length; index++) 
            {
                board[0][index] = word[index]
            }
        }else if(sens == "UtoD")
        {
            for (let index = 0; index < word.length; index++) 
            {
                board[index][0] = word[index]
            }
        }else{
            console.error("erreur sur le sens !!!")
        }
        
        console.log(board)

        document.location.reload()

    }
}