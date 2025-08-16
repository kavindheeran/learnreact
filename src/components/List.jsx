import React, { useState } from 'react'

const List = () => {

  const [list, setList] = useState([]);
  const [count, setCount] = useState(1);

  const AddItem = () => {
    const itemName = "Item " + count;
    setList( (prevState) => {
      return [...prevState, itemName]
    })
    setCount( (prevState) => {return prevState+1})
  }
  return (
    <div>
      <button onClick={() => AddItem()}> Add Item</button>
      <ul>{
        list.map((el, index) => <li key={index}> {el} </li>)
      }
      </ul>
      {/* <ul>
        { CarList.map((CarList) => <li key={CarList.brand}> <Car CarList={CarList} /> </li>)}
      </ul> */}
    </div>
  )
}

export default List