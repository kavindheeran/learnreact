import React, { useEffect, useState } from 'react'

const Counter = () => {

    useEffect(() => {
        // countChecking()
        // console.log(`rendered ${count} times`)
        // setTimeout(() => {
        //     setCount((prevState) => prevState+1)
        // },2000)
    })

    const countChecking = () => {
        if(count>5){
            setCount(0)
        }
    }

    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Screen rendered')
    }, [count])

    const increaseCount = () => { setCount((prevState) => {return prevState+1}) }

  return (
    <div>
        <h1> I have clicked {count} times</h1>
        <button onClick={increaseCount}> Increase Count</button>
    </div>
  )
}

export default Counter