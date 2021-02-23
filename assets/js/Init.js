import createBoard from "./Board"
import checkWord from "./Checklengthword"

const rows = 15

const scrabbleboard = createBoard(rows)

export default function Init(){

    document.addEventListener("DOMContentLoaded",function(){  
    
        let word = prompt("Saisir un mot: ")
        let sens = prompt("Sens pour le mot (de gauche vers la droite [LtoR] ou du haut vers le bas [UtoD]): ")

        checkWord(scrabbleboard,word,sens)
        
    })

}

Init()

