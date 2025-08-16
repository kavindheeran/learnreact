import React from 'react'

const Car = (props) => {
    // const brand = `Mahendra`;
    // const { brand, color } = props
    const { CarList } = props 
    const { brand, color } = CarList
  return (
    <div>
        <h2> This is car component named as {brand} and color is {color}</h2>
    </div>
  )
}

export default Car;
