import React, { useState } from 'react'

function FavColor() {
    const [color, setColor] = useState('Blue');

    const changeColor = () => {
        color !== "Black" ? setColor('Black') : setColor('Blue')
    }
  return (
    <div>
      <h1> Fav Color is { color } </h1>
      <button onClick={ () => changeColor()}> Change Color</button>
    </div>
  )
}

export default FavColor
