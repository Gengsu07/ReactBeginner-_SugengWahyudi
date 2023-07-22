import React,{useState} from 'react'
import produce from 'immer'

const Game = () => {
    const [game, setGame] = useState({
        id : 1,
        player : {
            name : "John"
        },
       
    })

const handleClick = () =>{
 setGame({ ...game, 
    player :{ ...game.player, name:'Something Else'}})

// using immer
// setGame(produce(draft => {
//     const player = draft.player;
//     if (player.id ===1) {player.name = 'Nama Lain';}
// }))
}
  return (
    <div>
        {<p key={game.id}> {game.player.name} 
        <button onClick = {handleClick}>Click</button>
        </p>}    
        </div>
  )
}

export default Game