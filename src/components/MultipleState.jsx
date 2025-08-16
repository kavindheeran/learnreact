import React, { useState } from 'react'

const MultipleState = () => {
    // const [color, setColor] = useState('Black');
    // const [model, setModel] = useState('2023');
    // const [brand, setBrand] = useState('Mahendra Thar');
    const [Car, setCar] = useState({
        color: 'Black',
        model: '2023',
        brand: 'Mahendra'
    })

    const updateChange = () => {
        setCar((prevState) => {
            return {...prevState, color:"Grey"}
        })
    }
  return (
    <div>
        <h1> Multiple state here </h1>
        <h1> My car is { Car.color } color, it is { Car.model } model, and brand is { Car.brand } </h1>
        <button onClick={() => updateChange()}> change </button>
    </div>
  )
}

export default MultipleState