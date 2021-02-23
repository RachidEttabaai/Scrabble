import createBoard from "./Board.js"

export default function Init(){

    let scrabbleboard = createBoard(15)

    let word = prompt("Saisir un mot: ")
    let sens = prompt("Sens pour le mot (de gauche vers la droite [LtoR] ou du haut vers le bas [UtoD]): ")

    if(word.length == 0 || word.length > 16){
        alert("erreur!!!")
    }else{
        console.log(word)
        if(sens == "LtoR")
        {
            for (let index = 0; index < word.length; index++) 
            {
                scrabbleboard[0][index] = word[index]
            }
        }else if(sens == "UtoD")
        {
            for (let index = 0; index < word.length; index++) 
            {
                scrabbleboard[index][0] = word[index]
            }
        }else{
            console.error("erreur sur le sens !!!")
        }
        
        console.log(scrabbleboard)
    }
}

