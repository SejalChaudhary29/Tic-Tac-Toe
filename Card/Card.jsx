import Icon, {  } from "../Icons/Icon";
import './Card.css'
import React from 'react'

function Card({ gameEnd ,player , onPlay , index }) {
    let icon = <Icon />
    if (player == 'X') {
        icon = <Icon name='cross' />
    
    } else if (player == 'O'){
        icon = <Icon name='circle' />

    }
  return (
    <div className="card" onClick={() =>!gameEnd && player=='' && onPlay(index)}>
    {icon}
  </div>
  )
}

export default Card